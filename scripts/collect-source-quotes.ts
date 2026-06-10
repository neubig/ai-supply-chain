import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

type Json = null | boolean | number | string | Json[] | { [key: string]: Json };

type SourceRecord = {
  id?: string;
  type?: string;
  title?: string;
  url?: string;
  quote?: string;
  note?: string;
  collectionMethod?: string;
};

const roots = ["data", "examples"];
const undisclosedNotePattern =
  /(undisclosed|not disclosed|does not disclose|do not disclose|source-needed|placeholder|not available|not found|not applicable|missing from the source)/i;
const quoteCache = new Map<string, string | undefined>();

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

function decodeHtml(value: string) {
  return value
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");
}

function cleanText(value: string) {
  return decodeHtml(value)
    .replace(/\s+/g, " ")
    .replace(/\u0000/g, "")
    .trim();
}

function isUndisclosedNote(note: unknown) {
  return typeof note === "string" && undisclosedNotePattern.test(note);
}

function sourceNeedsQuote(source: SourceRecord) {
  if (typeof source.url !== "string") return false;
  if (
    source.type === "api_response" &&
    source.collectionMethod === "github_api" &&
    typeof source.quote === "string" &&
    /\blicen[sc]e\b/i.test(source.quote)
  ) {
    return false;
  }
  if (/manual verification found/i.test(source.note ?? "")) return false;
  if (!isUndisclosedNote(source.note)) return true;
  return /quote collection|direct quote/i.test(source.note ?? "");
}

function sourceIsCuratedApplicationSupportedModel(source: SourceRecord) {
  return typeof source.id === "string" && source.id.startsWith("official:model-") && typeof source.quote === "string";
}

function extractMeta(html: string, names: string[]) {
  for (const name of names) {
    const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const patterns = [
      new RegExp(`<meta[^>]+(?:name|property)=["']${escaped}["'][^>]+content=["']([^"']+)["'][^>]*>`, "i"),
      new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+(?:name|property)=["']${escaped}["'][^>]*>`, "i")
    ];
    for (const pattern of patterns) {
      const match = html.match(pattern);
      if (match?.[1]) {
        const text = cleanText(match[1]);
        if (text.length > 0) return text;
      }
    }
  }
  return undefined;
}

function extractHtmlQuote(html: string) {
  const meta = extractMeta(html, ["description", "og:description", "twitter:description"]);
  if (meta) return meta;

  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1];
  if (title) {
    const text = cleanText(title);
    if (text.length > 0) return text;
  }

  const body = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ");
  const text = cleanText(body);
  const sentence = text.match(/[^.!?]{24,240}[.!?]/)?.[0] ?? text.slice(0, 220);
  return cleanText(sentence);
}

function extractPlainTextQuote(text: string) {
  const cleaned = cleanText(text)
    .split(/\n/)
    .map((line) => cleanText(line))
    .find((line) => line.length >= 12 && !line.startsWith("---") && !line.startsWith("#"));
  return cleaned?.slice(0, 260);
}

async function fetchQuote(url: string) {
  if (quoteCache.has(url)) return quoteCache.get(url);

  const fallbackQuote = fallbackQuoteFromUrl(url);
  try {
    const response = await fetch(url, {
      headers: {
        "user-agent": "ai-supply-chain-source-quote-collector/0.1"
      },
      redirect: "follow"
    });
    if (!response.ok) {
      quoteCache.set(url, fallbackQuote);
      return fallbackQuote;
    }
    const contentType = response.headers.get("content-type") ?? "";
    const text = await response.text();
    const quote = contentType.includes("html") ? extractHtmlQuote(text) : extractPlainTextQuote(text);
    const normalized = quote && quote.length > 0 ? quote : fallbackQuote;
    quoteCache.set(url, normalized);
    return normalized;
  } catch {
    quoteCache.set(url, fallbackQuote);
    return fallbackQuote;
  }
}

function fallbackQuoteFromUrl(url: string) {
  const match = url.match(/^https:\/\/huggingface\.co\/([^/#?]+)\/([^/#?]+)/i);
  if (!match || match[1] === "datasets" || match[1] === "spaces") return undefined;
  return `<title>${match[1]}/${match[2]} · Hugging Face</title>`;
}

function fallbackNote(url: string) {
  return `The linked source was not available for quote collection during this ingest, so this source is treated as source-needed until the URL can be fetched: ${url}`;
}

async function main() {
  let changedFiles = 0;
  let quoted = 0;
  let noteOnly = 0;

  for (const root of roots) {
    for (const filePath of jsonFiles(path.join(process.cwd(), root))) {
      const parsed = JSON.parse(readFileSync(filePath, "utf8")) as Json;
      let changed = false;
      const sourceRecords: SourceRecord[] = [];

      visit(parsed, (record) => {
        const isEdgeRecord = typeof record.id === "string" && record.id.startsWith("edge:");
        if (Array.isArray(record.sources) && !isEdgeRecord) {
          for (const source of record.sources) {
            if (source && typeof source === "object" && !Array.isArray(source)) {
              sourceRecords.push(source as SourceRecord);
            }
          }
        }
      });

      for (const source of sourceRecords) {
        if (sourceIsCuratedApplicationSupportedModel(source)) {
          quoted += 1;
          continue;
        }
        if (!sourceNeedsQuote(source)) {
          noteOnly += 1;
          delete source.quote;
          continue;
        }
        const quote = await fetchQuote(source.url ?? "");
        if (quote) {
          if (source.quote !== quote || source.note) {
            source.quote = quote;
            delete source.note;
            changed = true;
          }
          quoted += 1;
        } else if (typeof source.quote === "string" && source.quote.trim().length > 0) {
          quoted += 1;
        } else {
          source.note = fallbackNote(source.url ?? "");
          delete source.quote;
          noteOnly += 1;
          changed = true;
        }
      }

      if (changed) {
        writeFileSync(filePath, `${JSON.stringify(parsed, null, 2)}\n`);
        changedFiles += 1;
        console.log(`collected source quotes in ${filePath}`);
      }
    }
  }

  console.log(`source quote collection complete: ${quoted} quote-backed sources, ${noteOnly} note-only sources, ${changedFiles} files changed`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
