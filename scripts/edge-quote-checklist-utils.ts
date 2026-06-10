import { createHash } from "node:crypto";
import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

export type Json = null | boolean | number | string | Json[] | { [key: string]: Json };

export type SourceRecord = {
  id?: string;
  title?: string;
  url?: string;
  quote?: string;
  note?: string;
};

export type EdgeRecord = {
  id: string;
  kind: string;
  source: string;
  target: string;
  description?: string;
  sources?: SourceRecord[];
};

export type ChecklistItem = {
  key: string;
  filePath: string;
  edge: EdgeRecord;
  source: SourceRecord;
  quote: string;
  quoteHash: string;
};

export type ExistingChecklistState = {
  checked: boolean;
  quoteHash: string;
};

export const checklistPath = path.join(process.cwd(), "docs", "edge-quote-verification.md");
export const edgeRoots = ["data/edges", "examples"];

export function sha256(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

export function shortHash(value: string) {
  return sha256(value).slice(0, 16);
}

export function jsonFiles(directory: string): string[] {
  return readdirSync(directory).flatMap((entry) => {
    const filePath = path.join(directory, entry);
    const stat = statSync(filePath);
    if (stat.isDirectory()) {
      return jsonFiles(filePath);
    }
    return filePath.endsWith(".json") ? [filePath] : [];
  });
}

export function visit(value: Json, callback: (value: { [key: string]: Json }) => void) {
  if (Array.isArray(value)) {
    for (const item of value) visit(item, callback);
    return;
  }
  if (value && typeof value === "object") {
    callback(value);
    for (const child of Object.values(value)) visit(child, callback);
  }
}

export function isEdgeRecord(record: { [key: string]: Json }): record is { [key: string]: Json } & EdgeRecord {
  return (
    typeof record.id === "string" &&
    record.id.startsWith("edge:") &&
    typeof record.kind === "string" &&
    typeof record.source === "string" &&
    typeof record.target === "string" &&
    Array.isArray(record.sources)
  );
}

export function checklistKey(filePath: string, edgeId: string, sourceId: string) {
  const relativePath = path.relative(process.cwd(), filePath);
  return shortHash(`${relativePath}\0${edgeId}\0${sourceId}`);
}

export function loadQuoteBackedEdgeSources() {
  const items: ChecklistItem[] = [];
  for (const root of edgeRoots) {
    const rootPath = path.join(process.cwd(), root);
    for (const filePath of jsonFiles(rootPath)) {
      const parsed = JSON.parse(readFileSync(filePath, "utf8")) as Json;
      visit(parsed, (record) => {
        if (!isEdgeRecord(record)) return;
        for (const source of record.sources ?? []) {
          if (!source || typeof source !== "object" || Array.isArray(source)) continue;
          const quote = typeof source.quote === "string" ? source.quote.trim() : "";
          if (!quote) continue;
          const sourceId = source.id ?? "(missing-source-id)";
          items.push({
            key: checklistKey(filePath, record.id, sourceId),
            filePath: path.relative(process.cwd(), filePath),
            edge: record,
            source,
            quote,
            quoteHash: sha256(quote)
          });
        }
      });
    }
  }
  return items.sort((a, b) => {
    const fileCompare = a.filePath.localeCompare(b.filePath);
    if (fileCompare !== 0) return fileCompare;
    const edgeCompare = a.edge.id.localeCompare(b.edge.id);
    if (edgeCompare !== 0) return edgeCompare;
    return (a.source.id ?? "").localeCompare(b.source.id ?? "");
  });
}

export function loadExistingChecklistState(markdown: string) {
  const existing = new Map<string, ExistingChecklistState>();
  const itemPattern =
    /^- \[([ xX])\] <!-- edge-quote-verification key="([^"]+)" quote_sha256="([a-f0-9]{64})" -->/gm;
  for (const match of markdown.matchAll(itemPattern)) {
    existing.set(match[2], {
      checked: match[1].toLowerCase() === "x",
      quoteHash: match[3]
    });
  }
  return existing;
}
