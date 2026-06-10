import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import {
  type EdgeRecord,
  type NodeSummary,
  isUndisclosedNote,
  quotePassesEdgeEvidence,
  scoreQuote
} from "./edge-quote-rules";

type Json = null | boolean | number | string | Json[] | { [key: string]: Json };

type SourceRecord = {
  id?: string;
  url?: string;
  quote?: string;
  note?: string;
};

type InvalidEdgeSource = {
  filePath: string;
  edgeId: string;
  sourceId: string;
  url?: string;
  quote?: string;
  reason: string;
};

const roots = ["data/edges", "examples"];

function jsonFiles(directory: string): string[] {
  return readdirSync(directory).flatMap((entry) => {
    const filePath = path.join(directory, entry);
    const stat = statSync(filePath);
    if (stat.isDirectory()) {
      return jsonFiles(filePath);
    }
    return filePath.endsWith(".json") ? [filePath] : [];
  });
}

function visit(value: Json, callback: (value: { [key: string]: Json }) => void) {
  if (Array.isArray(value)) {
    for (const item of value) visit(item, callback);
    return;
  }
  if (value && typeof value === "object") {
    callback(value);
    for (const child of Object.values(value)) visit(child, callback);
  }
}

function isEdgeRecord(record: { [key: string]: Json }): record is { [key: string]: Json } & EdgeRecord {
  return (
    typeof record.id === "string" &&
    record.id.startsWith("edge:") &&
    typeof record.kind === "string" &&
    typeof record.source === "string" &&
    typeof record.target === "string" &&
    Array.isArray(record.sources)
  );
}

function loadNodes() {
  const nodes = new Map<string, NodeSummary>();
  for (const filePath of jsonFiles(path.join(process.cwd(), "data/nodes"))) {
    const parsed = JSON.parse(readFileSync(filePath, "utf8")) as Json;
    visit(parsed, (record) => {
      if (typeof record.id === "string" && typeof record.kind === "string" && typeof record.name === "string") {
        nodes.set(record.id, {
          id: record.id,
          kind: record.kind,
          name: record.name
        });
      }
    });
  }
  return nodes;
}

const nodes = loadNodes();
const invalid: InvalidEdgeSource[] = [];
let quoteBacked = 0;
let noteOnly = 0;

for (const root of roots) {
  for (const filePath of jsonFiles(path.join(process.cwd(), root))) {
    const parsed = JSON.parse(readFileSync(filePath, "utf8")) as Json;
    const edges: EdgeRecord[] = [];
    visit(parsed, (record) => {
      if (isEdgeRecord(record)) edges.push(record);
    });

    for (const edge of edges) {
      for (const source of edge.sources ?? []) {
        const sourceRecord = source as SourceRecord;
        const sourceId = sourceRecord.id ?? "(missing id)";
        const hasQuote = typeof sourceRecord.quote === "string" && sourceRecord.quote.trim().length > 0;
        const hasNote = typeof sourceRecord.note === "string" && sourceRecord.note.trim().length > 0;

        if (hasQuote) {
          if (quotePassesEdgeEvidence(sourceRecord.quote ?? "", edge, nodes)) {
            quoteBacked += 1;
            continue;
          }
          const scored = scoreQuote(sourceRecord.quote ?? "", edge, nodes);
          invalid.push({
            filePath,
            edgeId: edge.id,
            sourceId,
            url: sourceRecord.url,
            quote: sourceRecord.quote,
            reason: `quote does not contain enough edge evidence (score=${scored.score}; reasons=${scored.reasons.join(",") || "none"})`
          });
          continue;
        }

        if (hasNote && isUndisclosedNote(sourceRecord.note)) {
          noteOnly += 1;
          continue;
        }

        invalid.push({
          filePath,
          edgeId: edge.id,
          sourceId,
          url: sourceRecord.url,
          reason: hasNote ? "note-only edge source is not marked undisclosed/source-needed" : "missing quote or note"
        });
      }
    }
  }
}

if (invalid.length > 0) {
  console.error(`invalid edge source provenance: ${invalid.length}`);
  for (const issue of invalid.slice(0, 60)) {
    console.error(`- ${issue.filePath}: ${issue.edgeId} / ${issue.sourceId} ${issue.url ?? ""}`);
    console.error(`  ${issue.reason}`);
    if (issue.quote) console.error(`  quote: ${issue.quote.slice(0, 220)}`);
  }
  if (invalid.length > 60) {
    console.error(`... ${invalid.length - 60} more invalid edge sources`);
  }
  process.exit(1);
}

console.log(`validated edge sources: ${quoteBacked} quote-backed, ${noteOnly} undisclosed/source-needed notes`);
