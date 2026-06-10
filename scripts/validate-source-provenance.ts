import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

type Json = null | boolean | number | string | Json[] | { [key: string]: Json };

type SourceRecord = {
  id?: string;
  url?: string;
  quote?: string;
  note?: string;
};

const sourceRoots = ["data", "examples"];
const undisclosedNotePattern =
  /(undisclosed|not disclosed|does not disclose|do not disclose|source-needed|placeholder|not available|not found|not applicable|missing from the source)/i;

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

const sources: Array<SourceRecord & { filePath: string }> = [];

for (const root of sourceRoots) {
  for (const filePath of jsonFiles(path.join(process.cwd(), root))) {
    const parsed = JSON.parse(readFileSync(filePath, "utf8")) as Json;
    visit(parsed, (record) => {
      if (Array.isArray(record.sources)) {
        for (const source of record.sources) {
          if (source && typeof source === "object" && !Array.isArray(source)) {
            sources.push({ filePath, ...(source as SourceRecord) });
          }
        }
      }
    });
  }
}

const invalid: Array<SourceRecord & { filePath: string; reason: string }> = [];
let withQuote = 0;
let withUndisclosedNote = 0;

for (const source of sources) {
  const hasQuote = typeof source.quote === "string" && source.quote.trim().length > 0;
  const hasNote = typeof source.note === "string" && source.note.trim().length > 0;

  if (hasQuote) {
    withQuote += 1;
    continue;
  }
  if (hasNote && undisclosedNotePattern.test(source.note ?? "")) {
    withUndisclosedNote += 1;
    continue;
  }
  invalid.push({
    ...source,
    reason: hasNote ? "note-only source does not explicitly describe an undisclosed/source-needed fact" : "missing quote or note"
  });
}

if (invalid.length > 0) {
  console.error(`invalid source provenance: ${invalid.length} of ${sources.length} source records`);
  for (const source of invalid.slice(0, 40)) {
    console.error(`- ${source.filePath}: ${source.id ?? "(missing id)"} ${source.url ?? ""} (${source.reason})`);
  }
  if (invalid.length > 40) {
    console.error(`... ${invalid.length - 40} more invalid source records`);
  }
  process.exit(1);
}

console.log(
  `validated ${sources.length} source records: ${withQuote} quote-backed disclosed sources, ` +
    `${withUndisclosedNote} undisclosed/source-needed notes`
);

