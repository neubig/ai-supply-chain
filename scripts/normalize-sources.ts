import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

type Json = null | boolean | number | string | Json[] | { [key: string]: Json };

const roots = ["data", "examples"];

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

function looksLikeSourceRecord(value: { [key: string]: Json }) {
  return typeof value.url === "string" && typeof value.collectionMethod === "string" && typeof value.confidence === "string";
}

function looksLikeNodeRecord(value: { [key: string]: Json }) {
  return typeof value.id === "string" && typeof value.kind === "string" && typeof value.name === "string";
}

function looksLikeEdgeRecord(value: { [key: string]: Json }) {
  return (
    typeof value.id === "string" &&
    typeof value.kind === "string" &&
    typeof value.source === "string" &&
    typeof value.target === "string"
  );
}

function normalizeObject(value: { [key: string]: Json }): boolean {
  let changed = false;

  if (looksLikeSourceRecord(value)) {
    if (typeof value.retrievedAt === "string" && typeof value.retrieved_date !== "string") {
      value.retrieved_date = value.retrievedAt;
      delete value.retrievedAt;
      changed = true;
    }
    if (typeof value.notes === "string" && typeof value.note !== "string") {
      value.note = value.notes;
      delete value.notes;
      changed = true;
    }
    if (typeof value.published_date !== "string" && typeof value.retrieved_date !== "string") {
      value.retrieved_date = "2026-06-10";
      changed = true;
    }
  }

  if (looksLikeNodeRecord(value) && !value.updatePolicy) {
    value.updatePolicy = {
      refreshMethod: "manual_review",
      cadence: "manual",
      deterministic: false,
      instructions: "Review the cited node sources and replace any source-needed notes with exact quotes where possible."
    };
    changed = true;
  }

  if (looksLikeEdgeRecord(value) && Array.isArray(value.sources) && value.sources.length === 0) {
    value.sources = [
      {
        id: `manual:${String(value.id).replace(/^edge:/, "edge-")}`,
        type: "manual_entry",
        title: `${value.id} seed edge source placeholder`,
        url: "https://github.com/neubig/ai-supply-chain",
        note: "Example or seed edge placeholder; no external quote was captured in the initial ingest.",
        publisher: "AI supply-chain maintainers",
        retrieved_date: "2026-06-10",
        collectionMethod: "manual_review",
        confidence: "low"
      }
    ];
    changed = true;
  }

  for (const child of Object.values(value)) {
    if (Array.isArray(child)) {
      for (const item of child) {
        if (item && typeof item === "object" && !Array.isArray(item) && normalizeObject(item)) {
          changed = true;
        }
      }
    } else if (child && typeof child === "object" && normalizeObject(child)) {
      changed = true;
    }
  }

  return changed;
}

for (const root of roots) {
  for (const filePath of jsonFiles(path.join(process.cwd(), root))) {
    const parsed = JSON.parse(readFileSync(filePath, "utf8")) as Json;
    let changed = false;
    if (Array.isArray(parsed)) {
      for (const item of parsed) {
        if (item && typeof item === "object" && !Array.isArray(item) && normalizeObject(item)) {
          changed = true;
        }
      }
    } else if (parsed && typeof parsed === "object" && normalizeObject(parsed)) {
      changed = true;
    }
    if (changed) {
      writeFileSync(filePath, `${JSON.stringify(parsed, null, 2)}\n`);
      console.log(`normalized ${filePath}`);
    }
  }
}
