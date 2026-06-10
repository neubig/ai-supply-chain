import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import {
  type EdgeRecord,
  type NodeSummary,
  isUndisclosedNote,
  quotePassesEdgeEvidence,
  rankQuoteCandidates
} from "./edge-quote-rules";
import {
  checklistKey,
  checklistPath,
  loadExistingChecklistState,
  sha256
} from "./edge-quote-checklist-utils";

type Json = null | boolean | number | string | Json[] | { [key: string]: Json };

type SourceRecord = {
  id?: string;
  type?: string;
  title?: string;
  url?: string;
  quote?: string;
  note?: string;
};

type FetchResult = {
  text: string;
  contentType: string;
};

const edgeRoots = ["data/edges", "examples"];
const fetched = new Map<string, FetchResult | undefined>();
const checkedChecklistItems = existsSync(checklistPath)
  ? loadExistingChecklistState(readFileSync(checklistPath, "utf8"))
  : new Map();

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

function decodeHtml(value: string) {
  return value
    .replace(/&quot;/g, "\"")
    .replace(/&#34;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&hellip;/g, "...")
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&rdquo;/g, "\"")
    .replace(/&ldquo;/g, "\"");
}

function cleanText(value: string) {
  return decodeHtml(value)
    .replace(/\u0000/g, "")
    .replace(/\s+/g, " ")
    .trim();
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

function makeAbsoluteUrl(url: string, baseUrl: string) {
  try {
    return new URL(url, baseUrl).toString();
  } catch {
    return undefined;
  }
}

function redirectTarget(html: string, baseUrl: string) {
  const refresh = html.match(/<meta[^>]+http-equiv=["']refresh["'][^>]+content=["'][^"']*url=([^"']+)["'][^>]*>/i)?.[1];
  if (refresh) return makeAbsoluteUrl(refresh.trim(), baseUrl);
  return undefined;
}

async function fetchText(url: string, depth = 0): Promise<FetchResult | undefined> {
  if (fetched.has(url)) return fetched.get(url);
  try {
    const response = await fetch(url, {
      headers: { "user-agent": "ai-supply-chain-edge-quote-collector/0.1" },
      redirect: "follow"
    });
    if (!response.ok) {
      fetched.set(url, undefined);
      return undefined;
    }
    const contentType = response.headers.get("content-type") ?? "";
    const text = await response.text();
    const target = contentType.includes("html") && depth < 3 ? redirectTarget(text, url) : undefined;
    if (target && target !== url) {
      const redirected = await fetchText(target, depth + 1);
      fetched.set(url, redirected);
      return redirected;
    }
    const result = { text, contentType };
    fetched.set(url, result);
    return result;
  } catch {
    fetched.set(url, undefined);
    return undefined;
  }
}

function githubRawCandidates(url: string) {
  const parsed = new URL(url);
  if (parsed.hostname !== "github.com") return [];
  const parts = parsed.pathname.split("/").filter(Boolean);
  if (parts.length < 2) return [];

  const [owner, repo] = parts;
  const blobIndex = parts.indexOf("blob");
  if (blobIndex >= 0 && parts.length > blobIndex + 2) {
    const branch = parts[blobIndex + 1];
    const file = parts.slice(blobIndex + 2).join("/");
    return [`https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${file}`];
  }

  if (parts.length === 2) {
    return [
      `https://raw.githubusercontent.com/${owner}/${repo}/main/README.md`,
      `https://raw.githubusercontent.com/${owner}/${repo}/master/README.md`,
      `https://raw.githubusercontent.com/${owner}/${repo}/main/README.rst`,
      `https://raw.githubusercontent.com/${owner}/${repo}/master/README.rst`
    ];
  }
  return [];
}

function huggingFaceRawCandidates(url: string) {
  const parsed = new URL(url);
  if (parsed.hostname !== "huggingface.co") return [];
  const parts = parsed.pathname.split("/").filter(Boolean);
  if (parts.length < 2) return [];
  const [owner, repo] = parts;
  if (parts.includes("raw") || parts.includes("blob")) return [];
  return [`https://huggingface.co/${owner}/${repo}/raw/main/README.md`];
}

function specialCandidates(url: string, edge: EdgeRecord) {
  const candidates: string[] = [];
  if (url.startsWith("https://docs.cloud.google.com/") && !url.includes("hl=en")) {
    candidates.push(`${url}${url.includes("?") ? "&" : "?"}hl=en`);
  }
  if (url.startsWith("https://docs.vllm.ai/") && edge.source === "software:vllm") {
    candidates.push("https://raw.githubusercontent.com/vllm-project/vllm/main/README.md");
  }
  if (url === "https://pytorch.org/xla/") {
    candidates.push("https://pytorch.org/xla/release/r2.8/index.html");
  }
  if (url === "https://pytorch.org/docs/stable/cuda.html") {
    candidates.push("https://pytorch.org/docs/2.12/cuda.html");
  }
  if (url === "https://pytorch.org/docs/stable/notes/hip.html") {
    candidates.push("https://pytorch.org/docs/2.12/notes/hip.html");
  }
  if (url === "https://github.com/vllm-project/vllm" && /amd|rocm|mi325/i.test(edge.description ?? "")) {
    candidates.push("https://docs.vllm.ai/en/latest/getting_started/installation/gpu.html");
  }
  if (url === "https://github.com/vllm-project/vllm" && /nvidia|h100|h200/i.test(edge.description ?? "")) {
    candidates.push("https://docs.vllm.ai/en/latest/getting_started/installation/gpu.html");
  }
  if (url.includes("huggingface.co/Qwen/Qwen2.5-7B-Instruct") && edge.kind === "trained_on") {
    candidates.push("https://qwenlm.github.io/blog/qwen2.5/");
  }
  if (url.includes("huggingface.co/Qwen/Qwen2.5-7B-Instruct") && edge.kind === "evaluated_on") {
    candidates.push("https://qwenlm.github.io/blog/qwen2.5/");
  }
  if (url.includes("huggingface.co/Qwen/Qwen2.5-Coder-7B-Instruct") && edge.kind === "evaluated_on") {
    candidates.push("https://qwenlm.github.io/blog/qwen2.5/");
  }
  return candidates;
}

function candidateUrls(source: SourceRecord, edge: EdgeRecord) {
  if (!source.url) return [];
  const candidates = [
    ...huggingFaceRawCandidates(source.url),
    ...githubRawCandidates(source.url),
    ...specialCandidates(source.url, edge),
    source.url
  ];
  return Array.from(new Set(candidates));
}

function articleBodiesFromJsonLd(html: string) {
  const bodies: string[] = [];
  const scriptPattern = /<script[^>]+type=(["']?)application\/ld\+json\1[^>]*>([\s\S]*?)<\/script>/gi;
  for (const match of html.matchAll(scriptPattern)) {
    try {
      const parsed = JSON.parse(match[2]);
      const items = Array.isArray(parsed) ? parsed : [parsed];
      for (const item of items) {
        if (item && typeof item === "object" && typeof item.articleBody === "string") {
          bodies.push(item.articleBody);
        }
      }
    } catch {
      // Ignore malformed JSON-LD; the visible HTML extraction below can still work.
    }
  }
  return bodies;
}

function splitLongText(value: string) {
  const cleaned = cleanText(value);
  if (!cleaned) return [];
  const sentenceText = cleaned.replace(/(?<=\w)\.(?=\d)/g, "<DOT>");
  const sentenceLike = sentenceText.match(/[^.!?\n]{12,420}[.!?]/g) ?? [];
  if (sentenceLike.length > 0) return sentenceLike.map((sentence) => cleanText(sentence.replace(/<DOT>/g, ".")));
  return [cleaned.slice(0, 420)];
}

function htmlCandidates(html: string) {
  const scopedHtml = html.match(/<article\b[^>]*>[\s\S]*?<\/article>/i)?.[0] ?? html;
  const candidates: string[] = [];
  for (const body of articleBodiesFromJsonLd(scopedHtml)) {
    candidates.push(...splitLongText(body));
  }

  const metaPattern = /<meta[^>]+(?:name|property)=["'](?:description|og:description|twitter:description)["'][^>]+content=["']([^"']+)["'][^>]*>/gi;
  for (const match of scopedHtml.matchAll(metaPattern)) {
    candidates.push(...splitLongText(match[1]));
  }

  const blockPattern = /<(p|li|h[1-6]|td|th|blockquote)[^>]*>([\s\S]*?)<\/\1>/gi;
  for (const match of scopedHtml.matchAll(blockPattern)) {
    const text = cleanText(match[2].replace(/<[^>]+>/g, " "));
    if (text) candidates.push(...splitLongText(text));
  }

  const title = scopedHtml.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1];
  if (title) candidates.push(cleanText(title));

  return candidates;
}

function plainTextCandidates(text: string) {
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length >= 8 && !line.match(/^-{3,}$/));
  const candidates: string[] = [...lines];
  for (const paragraph of text.split(/\n{2,}/)) {
    const cleaned = cleanText(paragraph);
    if (cleaned.length >= 8 && cleaned.length <= 600 && !cleaned.includes("```") && !cleaned.startsWith("---")) {
      candidates.push(cleaned);
    }
  }
  return candidates;
}

function candidatesFromFetched(result: FetchResult) {
  if (result.contentType.includes("html") || /^\s*<!doctype html/i.test(result.text) || /^\s*<html/i.test(result.text)) {
    return htmlCandidates(result.text);
  }
  return plainTextCandidates(result.text);
}

function sourceIsManuallyLockedNote(source: SourceRecord) {
  return typeof source.note === "string" && /manual verification found/i.test(source.note);
}

function sourceIsManuallyCheckedQuote(filePath: string, edge: EdgeRecord, source: SourceRecord) {
  const quote = typeof source.quote === "string" ? source.quote.trim() : "";
  if (!quote) return false;
  const sourceId = source.id ?? "(missing-source-id)";
  const key = checklistKey(filePath, edge.id, sourceId);
  const checked = checkedChecklistItems.get(key);
  return checked?.checked === true && checked.quoteHash === sha256(quote);
}

async function collectEdgeQuote(source: SourceRecord, edge: EdgeRecord, nodes: Map<string, NodeSummary>) {
  for (const url of candidateUrls(source, edge)) {
    const result = await fetchText(url);
    if (!result) continue;
    const ranked = rankQuoteCandidates(candidatesFromFetched(result), edge, nodes);
    const best = ranked.find((candidate) => quotePassesEdgeEvidence(candidate.quote, edge, nodes));
    if (best) {
      return { url, quote: best.quote };
    }
  }
  return undefined;
}

function fallbackNote(source: SourceRecord, edge: EdgeRecord) {
  return (
    `The linked source does not provide edge-specific evidence for ` +
    `${edge.source} ${edge.kind} ${edge.target}; this relationship is source-needed until a direct quote is collected.`
  );
}

async function main() {
  const nodes = loadNodes();
  let changedFiles = 0;
  let quoted = 0;
  let noteOnly = 0;
  let unchanged = 0;

  for (const root of edgeRoots) {
    for (const filePath of jsonFiles(path.join(process.cwd(), root))) {
      const parsed = JSON.parse(readFileSync(filePath, "utf8")) as Json;
      const edges: EdgeRecord[] = [];
      let changed = false;

      visit(parsed, (record) => {
        if (isEdgeRecord(record)) edges.push(record);
      });

      for (const edge of edges) {
        for (const source of edge.sources ?? []) {
          if (!source.url || sourceIsManuallyLockedNote(source)) {
            noteOnly += 1;
            delete source.quote;
            continue;
          }

          if (sourceIsManuallyCheckedQuote(filePath, edge, source)) {
            quoted += 1;
            unchanged += 1;
            continue;
          }

          const currentQuotePasses =
            typeof source.quote === "string" && quotePassesEdgeEvidence(source.quote, edge, nodes);
          const collected = await collectEdgeQuote(source, edge, nodes);
          if (collected) {
            if (source.url !== collected.url || source.quote !== collected.quote || source.note) {
              source.url = collected.url;
              source.quote = collected.quote;
              delete source.note;
              changed = true;
            }
            quoted += 1;
          } else if (currentQuotePasses) {
            quoted += 1;
            unchanged += 1;
          } else {
            const note = fallbackNote(source, edge);
            if (source.note !== note || source.quote) {
              source.note = note;
              delete source.quote;
              changed = true;
            }
            noteOnly += 1;
          }
        }
      }

      if (changed) {
        writeFileSync(filePath, `${JSON.stringify(parsed, null, 2)}\n`);
        changedFiles += 1;
        console.log(`collected edge quotes in ${filePath}`);
      }
    }
  }

  console.log(
    `edge quote collection complete: ${quoted} quote-backed edge sources, ${noteOnly} note-only edge sources, ` +
      `${unchanged} unchanged, ${changedFiles} files changed`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
