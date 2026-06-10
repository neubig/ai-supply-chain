type SourceRecord = {
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

export type NodeSummary = {
  id: string;
  name: string;
  kind: string;
};

export type QuoteCandidate = {
  quote: string;
  score: number;
  reasons: string[];
};

export const undisclosedNotePattern =
  /(undisclosed|not disclosed|does not disclose|do not disclose|source-needed|placeholder|not available|not found|not applicable|missing from the source|does not provide edge-specific evidence|does not disclose the specific)/i;

const stopWords = new Set([
  "a",
  "an",
  "and",
  "api",
  "as",
  "by",
  "can",
  "class",
  "cloud",
  "data",
  "dataset",
  "device",
  "edge",
  "for",
  "from",
  "gpu",
  "hub",
  "in",
  "is",
  "local",
  "model",
  "models",
  "of",
  "on",
  "open",
  "or",
  "profile",
  "repo",
  "source",
  "the",
  "to",
  "with"
]);

const kindTerms: Record<string, string[]> = {
  supports: ["support", "supports", "compatible", "compatibility", "connect", "provider", "runner", "endpoint"],
  depends_on: ["depend", "dependency", "requires", "install", "based on", "built on", "uses", "powered by"],
  requires: ["require", "requires", "needed", "minimum", "recommended", "gpu", "memory", "vram"],
  trained_on: ["train", "trained", "training", "pretrain", "pre-training", "post-training", "tokens", "corpus", "dataset"],
  trained_with: ["transformers", "diffusers", "pytorch", "library_name", "pipeline", "architecture", "training"],
  evaluated_on: ["evaluation", "evaluated", "benchmark", "results", "mmlu", "humaneval", "leaderboard"],
  developed_by: ["organization", "author", "authors", "maintain", "maintained", "developed", "created", "released", "by"],
  hosted_by: ["hugging face", "github", "hub", "repository", "hosted", "model card"],
  licensed_as: ["license", "licensed", "apache", "mit", "bsd", "openrail", "agreement"],
  derived_from: ["based on", "derived", "fine-tuned", "finetuned", "family", "specialized", "inherits"],
  uses_data: ["dataset", "data", "corpus", "trained", "training"],
  implements: ["implements", "compatible", "api", "endpoint", "server", "serving"],
  runs_on: ["run", "runs", "running", "local", "offline", "desktop", "device", "computer"],
  optimized_for: ["optimized", "optimization", "throughput", "performance", "efficient", "gpu", "nvidia", "amd"],
  supports_hardware: ["support", "supports", "cuda", "rocm", "xla", "tpu", "gpu", "hardware", "accelerator", "nvidia", "amd", "train", "training", "inference"],
  sandboxed_by: ["sandbox", "container", "docker", "kubernetes", "microvm", "isolation", "isolated", "secure", "virtualization"]
};

const idAliases: Record<string, string[]> = {
  "software:docker-moby": ["docker", "container", "containers", "moby"],
  "software:firecracker": ["firecracker", "microvm", "microvms"],
  "software:kubernetes": ["kubernetes", "k8s"],
  "software:transformers": ["transformers", "hugging face transformers"],
  "software:diffusers": ["diffusers"],
  "software:vllm": ["vllm", "vllm-project"],
  "software:pytorch": ["pytorch", "torch"],
  "software:pytorch-xla": ["pytorch/xla", "xla", "tpu"],
  "infrastructure:hugging-face-hub": ["hugging face", "huggingface", "hf.co"],
  "infrastructure:nvidia-h100": ["h100", "nvidia"],
  "infrastructure:nvidia-h200": ["h200", "nvidia"],
  "infrastructure:nvidia-b200": ["b200", "blackwell", "nvidia"],
  "infrastructure:nvidia-rtx-5090": ["rtx 5090", "geforce", "nvidia", "cuda"],
  "infrastructure:amd-mi300x": ["mi300x", "amd", "rocm"],
  "infrastructure:amd-mi325x": ["mi325x", "amd", "rocm"],
  "infrastructure:apple-m5-max": ["m5 max", "apple silicon", "metal"],
  "infrastructure:google-cloud-tpu-v6e-trillium": ["tpu", "v6e", "trillium", "xla"],
  "infrastructure:consumer-device": ["device", "computer", "desktop", "offline", "local"],
  "license:apache-2.0": ["apache-2.0", "apache 2.0", "apache license"],
  "license:mit": ["mit license", "mit"],
  "license:openai-terms-of-use": ["openai", "terms", "agreement"],
  "license:anthropic-commercial-terms": ["anthropic", "terms", "agreement"],
  "license:github-copilot-product-terms": ["github copilot", "copilot", "terms"],
  "license:midjourney-terms-of-service": ["midjourney", "terms", "agreement"],
  "organization:anthropic": ["anthropic", "claude"],
  "organization:github": ["github", "github copilot"],
  "organization:midjourney": ["midjourney"],
  "organization:openai": ["openai"],
  "organization:perplexity": ["perplexity"],
  "model:openai-models": ["openai", "gpt", "model", "models"],
  "model:anthropic-claude-family": ["anthropic", "claude", "model", "models"],
  "model:perplexity-model-orchestration": ["perplexity", "sonar", "model", "models"],
  "model:github-copilot-model-set": ["github copilot", "copilot", "model", "models"],
  "model:midjourney-image-model": ["midjourney", "image", "images"],
  "model:stable-diffusion-xl-base-1.0": ["stable diffusion xl", "sdxl", "sd-xl"],
  "benchmark:mmlu": ["mmlu", "massive multitask"],
  "benchmark:humaneval": ["humaneval", "human eval"],
  "dataset:laion-5b": ["laion", "5b"],
  "dataset:qwen2.5-training-corpus": ["qwen2.5", "training", "tokens", "corpus", "pre-training"],
  "dataset:mistral-training-corpus": ["mistral", "training", "dataset", "corpus"]
};

function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function tokens(value: string) {
  return Array.from(
    new Set(
      normalize(value)
        .replace(/[:/_.-]/g, " ")
        .split(/[^a-z0-9+]+/)
        .filter((token) => token.length >= 3 && !stopWords.has(token))
    )
  );
}

function nodeTerms(id: string, nodes: Map<string, NodeSummary>) {
  const node = nodes.get(id);
  return Array.from(new Set([...(idAliases[id] ?? []), ...tokens(id.split(":").slice(1).join(" ")), ...(node ? tokens(node.name) : [])]));
}

function descriptionTerms(edge: EdgeRecord) {
  return tokens(edge.description ?? "").filter((token) => token.length >= 5).slice(0, 10);
}

export function isUndisclosedNote(note: unknown) {
  return typeof note === "string" && undisclosedNotePattern.test(note);
}

export function cleanQuote(value: string) {
  return value
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function scoreQuote(quote: string, edge: EdgeRecord, nodes: Map<string, NodeSummary>): QuoteCandidate {
  const normalizedQuote = normalize(quote);
  const termsForKind = kindTerms[edge.kind] ?? [];
  const sourceTerms = nodeTerms(edge.source, nodes);
  const targetTerms = nodeTerms(edge.target, nodes);
  const descTerms = descriptionTerms(edge);
  const reasons: string[] = [];
  let score = 0;

  for (const term of termsForKind) {
    if (normalizedQuote.includes(normalize(term))) {
      score += 4;
      reasons.push(`kind:${term}`);
    }
  }
  for (const term of sourceTerms) {
    if (normalizedQuote.includes(normalize(term))) {
      score += 2;
      reasons.push(`source:${term}`);
    }
  }
  for (const term of targetTerms) {
    if (normalizedQuote.includes(normalize(term))) {
      score += 3;
      reasons.push(`target:${term}`);
    }
  }
  for (const term of descTerms) {
    if (normalizedQuote.includes(normalize(term))) {
      score += 1;
      reasons.push(`description:${term}`);
    }
  }

  if (edge.kind === "licensed_as" && /\blicen[sc]e\b/i.test(quote)) score += 3;
  if (edge.kind === "hosted_by" && /^https?:\/\/(huggingface\.co|github\.com)\//i.test(quote)) score += 2;
  if (edge.kind === "hosted_by" && /hugging face|github/i.test(quote)) score += 3;

  return { quote, score, reasons };
}

export function quotePassesEdgeEvidence(quote: string, edge: EdgeRecord, nodes: Map<string, NodeSummary>) {
  const scored = scoreQuote(quote, edge, nodes);
  const hasKindEvidence = scored.reasons.some((reason) => reason.startsWith("kind:"));
  const hasTargetEvidence = scored.reasons.some((reason) => reason.startsWith("target:"));
  const hasSourceEvidence = scored.reasons.some((reason) => reason.startsWith("source:"));

  if (edge.kind === "developed_by" || edge.kind === "hosted_by" || edge.kind === "licensed_as") {
    return scored.score >= 4 && (hasTargetEvidence || hasKindEvidence);
  }

  if (edge.kind === "sandboxed_by") {
    return scored.score >= 5 && (hasTargetEvidence || hasKindEvidence);
  }

  if (edge.kind === "supports_hardware" || edge.kind === "optimized_for" || edge.kind === "runs_on" || edge.kind === "requires") {
    return scored.score >= 5 && (hasTargetEvidence || hasKindEvidence);
  }

  if (edge.kind === "trained_on") {
    return (
      scored.score >= 5 &&
      hasKindEvidence &&
      /\b(dataset|corpus|training data|pretrained on|pre-trained on|trained on|tokens? of|tokens? including|tokens? data)\b/i.test(quote)
    );
  }

  if (edge.kind === "evaluated_on") {
    return scored.score >= 5 && hasKindEvidence && hasTargetEvidence;
  }

  if (edge.kind === "trained_with") {
    return scored.score >= 5 && hasKindEvidence;
  }

  return scored.score >= 5 && (hasKindEvidence || hasTargetEvidence || hasSourceEvidence);
}

export function rankQuoteCandidates(quotes: string[], edge: EdgeRecord, nodes: Map<string, NodeSummary>) {
  return quotes
    .map((quote) => cleanQuote(quote))
    .filter((quote) => quote.length >= 8 && quote.length <= 600)
    .map((quote) => scoreQuote(quote, edge, nodes))
    .sort((a, b) => b.score - a.score || a.quote.length - b.quote.length);
}
