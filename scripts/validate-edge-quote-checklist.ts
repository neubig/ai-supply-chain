import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import {
  checklistPath,
  loadQuoteBackedEdgeSources
} from "./edge-quote-checklist-utils";

type ParsedChecklistItem = {
  checked: boolean;
  key: string;
  quoteHash: string;
};

const allowUnchecked = process.argv.includes("--allow-unchecked");

function parseChecklist(markdown: string) {
  const items: ParsedChecklistItem[] = [];
  const itemPattern =
    /^- \[([ xX])\] <!-- edge-quote-verification key="([^"]+)" quote_sha256="([a-f0-9]{64})" -->/gm;
  for (const match of markdown.matchAll(itemPattern)) {
    items.push({
      checked: match[1].toLowerCase() === "x",
      key: match[2],
      quoteHash: match[3]
    });
  }
  return items;
}

if (!existsSync(checklistPath)) {
  console.error(`missing edge quote verification checklist: ${path.relative(process.cwd(), checklistPath)}`);
  process.exit(1);
}

const expectedItems = loadQuoteBackedEdgeSources();
const expectedByKey = new Map(expectedItems.map((item) => [item.key, item]));
const parsedItems = parseChecklist(readFileSync(checklistPath, "utf8"));
const parsedByKey = new Map<string, ParsedChecklistItem>();
const failures: string[] = [];

for (const item of parsedItems) {
  if (parsedByKey.has(item.key)) {
    failures.push(`duplicate checklist item key ${item.key}`);
    continue;
  }
  parsedByKey.set(item.key, item);
}

for (const expected of expectedItems) {
  const actual = parsedByKey.get(expected.key);
  const label = `${expected.filePath}: ${expected.edge.id} / ${expected.source.id ?? "(missing-source-id)"}`;
  if (!actual) {
    failures.push(`missing checklist item for ${label}`);
    continue;
  }
  if (actual.quoteHash !== expected.quoteHash) {
    failures.push(`quote hash mismatch for ${label}`);
  }
  if (!allowUnchecked && !actual.checked) {
    failures.push(`unchecked manual verification box for ${label}`);
  }
}

for (const actual of parsedItems) {
  if (!expectedByKey.has(actual.key)) {
    failures.push(`stale checklist item with key ${actual.key}`);
  }
}

const checked = parsedItems.filter((item) => item.checked).length;
const unchecked = parsedItems.length - checked;

if (failures.length > 0) {
  console.error(`edge quote checklist validation failed: ${failures.length} issue(s)`);
  for (const failure of failures.slice(0, 80)) {
    console.error(`- ${failure}`);
  }
  if (failures.length > 80) {
    console.error(`... ${failures.length - 80} more issue(s)`);
  }
  process.exit(1);
}

console.log(
  `validated edge quote checklist: ${parsedItems.length} items, ${checked} checked, ${unchecked} unchecked` +
    (allowUnchecked ? " (unchecked allowed)" : "")
);
