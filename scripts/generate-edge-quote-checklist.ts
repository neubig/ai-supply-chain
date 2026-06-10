import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import {
  type ChecklistItem,
  checklistPath,
  loadExistingChecklistState,
  loadQuoteBackedEdgeSources
} from "./edge-quote-checklist-utils";

function escapeCell(value: string) {
  return value.replace(/\|/g, "\\|").replace(/\s+/g, " ").trim();
}

function renderQuote(value: string) {
  return escapeCell(value).slice(0, 600);
}

function sourceId(item: ChecklistItem) {
  return item.source.id ?? "(missing-source-id)";
}

function renderItem(item: ChecklistItem, checked: boolean) {
  const box = checked ? "x" : " ";
  const edgeTriple = `${item.edge.source} --${item.edge.kind}--> ${item.edge.target}`;
  return [
    `- [${box}] <!-- edge-quote-verification key="${item.key}" quote_sha256="${item.quoteHash}" --> ` +
      `\`${item.edge.id}\` / \`${sourceId(item)}\``,
    `  - Edge: \`${edgeTriple}\``,
    `  - Source URL: ${item.source.url ?? "(missing URL)"}`,
    `  - Quote: "${renderQuote(item.quote)}"`,
    "  - Manual verification: quote directly supports the edge relationship."
  ].join("\n");
}

function renderMarkdown(items: ChecklistItem[]) {
  const existingMarkdown = existsSync(checklistPath) ? readFileSync(checklistPath, "utf8") : "";
  const existing = loadExistingChecklistState(existingMarkdown);
  const checkedCount = items.filter((item) => {
    const previous = existing.get(item.key);
    return previous?.checked === true && previous.quoteHash === item.quoteHash;
  }).length;

  const lines = [
    "# Edge Quote Verification Checklist",
    "",
    "This checklist tracks manual review of quote-backed edge sources. Check a box only after verifying that the quoted text directly supports the edge relationship shown in the item.",
    "",
    "Regenerate with `npm run generate:edge-checklist`. Existing checked boxes are preserved only when the edge/source key and quote hash are unchanged.",
    "",
    "Note-only edge sources are excluded from this checklist because they are explicitly source-needed or undisclosed rather than quote-backed.",
    "",
    "## Summary",
    "",
    `- Quote-backed edge sources: ${items.length}`,
    `- Checked: ${checkedCount}`,
    `- Unchecked: ${items.length - checkedCount}`,
    "",
    "<!-- edge-quote-verification-checklist:v1 -->",
    ""
  ];

  let currentFile = "";
  for (const item of items) {
    if (item.filePath !== currentFile) {
      currentFile = item.filePath;
      lines.push("", `## ${currentFile}`, "");
    }
    const previous = existing.get(item.key);
    const checked = previous?.checked === true && previous.quoteHash === item.quoteHash;
    lines.push(renderItem(item, checked), "");
  }

  return `${lines.join("\n").trimEnd()}\n`;
}

const items = loadQuoteBackedEdgeSources();
mkdirSync(path.dirname(checklistPath), { recursive: true });
writeFileSync(checklistPath, renderMarkdown(items));
console.log(`wrote ${path.relative(process.cwd(), checklistPath)} with ${items.length} quote-backed edge source checklist items`);
