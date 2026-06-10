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
  metadata?: Record<string, unknown>;
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
  "model:google-gemini-family": ["google gemini", "gemini", "gemini models"],
  "model:midjourney-image-model": ["midjourney", "image", "images"],
  "model:stable-diffusion-xl-base-1.0": ["stable diffusion xl", "sdxl", "sd-xl"],
  "model:gpt-3.5-turbo": ["gpt-3.5 turbo", "gpt-3.5-turbo"],
  "model:gpt-4": ["gpt-4", "gpt 4"],
  "model:gpt-4-turbo": ["gpt-4 turbo", "gpt-4-turbo"],
  "model:gpt-4-turbo-1106-preview": ["gpt-4-turbo-1106-preview", "gpt-4 turbo 1106 preview"],
  "model:gpt-4o": ["gpt-4o", "gpt 4o"],
  "model:gpt-4o-mini": ["gpt-4o mini", "gpt-4o-mini"],
  "model:gpt-5": ["gpt-5", "gpt 5"],
  "model:gpt-5-mini": ["gpt-5 mini", "gpt-5-mini"],
  "model:gpt-5.1": ["gpt-5.1", "gpt 5.1"],
  "model:gpt-5.2": ["gpt-5.2", "gpt 5.2"],
  "model:gpt-5.2-thinking": ["gpt-5.2 thinking", "gpt-5.2-thinking"],
  "model:gpt-5.3-codex": ["gpt-5.3-codex", "gpt-5.3 codex"],
  "model:gpt-5.4": ["gpt-5.4", "gpt 5.4"],
  "model:gpt-5.4-mini": ["gpt-5.4 mini", "gpt-5.4-mini"],
  "model:gpt-5.4-mini-chatgpt": ["gpt-5.4 mini", "gpt-5.4-mini"],
  "model:gpt-5.4-nano": ["gpt-5.4 nano", "gpt-5.4-nano"],
  "model:gpt-5.5": ["gpt-5.5", "gpt 5.5"],
  "model:gpt-5.5-instant": ["gpt-5.5 instant", "gpt-5.5-instant"],
  "model:gpt-5.5-pro": ["gpt-5.5 pro", "gpt-5.5-pro"],
  "model:gpt-5.5-thinking": ["gpt-5.5 thinking", "gpt-5.5-thinking"],
  "model:gpt-oss-120b": ["gpt-oss-120b", "gpt oss 120b"],
  "model:gpt-oss-20b": ["gpt-oss-20b", "gpt oss 20b"],
  "model:o1": ["o1", "openai o1"],
  "model:o1-mini": ["o1-mini", "o1 mini"],
  "model:o3": ["o3", "openai o3"],
  "model:o3-mini": ["o3-mini", "o3 mini"],
  "model:claude-3.5-haiku": ["claude 3.5 haiku", "claude-3.5-haiku", "claude 3 5 haiku"],
  "model:claude-3.5-sonnet": ["claude 3.5 sonnet", "claude-3.5-sonnet", "claude 3 5 sonnet"],
  "model:claude-3-5-sonnet-20241022": ["claude-3-5-sonnet-20241022", "claude 3.5 sonnet 20241022"],
  "model:claude-fable-5": ["claude fable 5", "fable 5"],
  "model:claude-haiku-4.5": ["claude haiku 4.5", "haiku 4.5", "claude-haiku-4-5"],
  "model:claude-opus-4.1": ["claude opus 4.1", "opus 4.1"],
  "model:claude-opus-4.5": ["claude opus 4.5", "opus 4.5", "claude-opus-4-5"],
  "model:claude-opus-4.6": ["claude opus 4.6", "opus 4.6", "claude-opus-4-6"],
  "model:claude-opus-4.7": ["claude opus 4.7", "opus 4.7", "claude-opus-4-7"],
  "model:claude-opus-4.8": ["claude opus 4.8", "opus 4.8", "claude-opus-4-8"],
  "model:claude-sonnet-4": ["claude sonnet 4", "claude 4 sonnet", "claude-sonnet-4"],
  "model:claude-sonnet-4.5": ["claude sonnet 4.5", "sonnet 4.5", "claude-sonnet-4-5"],
  "model:claude-sonnet-4.6": ["claude sonnet 4.6", "sonnet 4.6", "claude-sonnet-4-6"],
  "model:command-a": ["command a"],
  "model:command-a-reasoning": ["command a reasoning"],
  "model:command-a-translate": ["command a translate"],
  "model:command-a-vision": ["command a vision"],
  "model:gemini-2.0-flash-exp": ["gemini-2.0-flash-exp", "gemini 2.0 flash exp"],
  "model:gemini-2.5-flash": ["gemini 2.5 flash", "gemini-2.5-flash"],
  "model:gemini-2.5-pro": ["gemini 2.5 pro", "gemini-2.5-pro"],
  "model:gemini-3-flash": ["gemini 3 flash", "gemini-3-flash"],
  "model:gemini-3-flash-preview": ["gemini 3 flash preview", "gemini-3-flash-preview", "gemini 3.0 flash"],
  "model:gemini-3.1-flash-lite": ["gemini 3.1 flash lite", "gemini-3.1-flash-lite"],
  "model:gemini-3.1-flash-lite-preview": ["gemini 3.1 flash lite preview", "gemini-3.1-flash-lite-preview"],
  "model:gemini-3.1-pro": ["gemini 3.1 pro", "gemini-3.1-pro", "gemini-3.1-pro-preview"],
  "model:gemini-3.5-flash": ["gemini 3.5 flash", "gemini-3.5-flash"],
  "model:google-gemini-pro": ["google gemini pro", "gemini pro"],
  "model:deepseek-chat": ["deepseek chat"],
  "model:deepseek-coder-v2": ["deepseek coder v2"],
  "model:deepseek-v3": ["deepseek v3", "deepseek-v3"],
  "model:deepseek-v4-pro": ["deepseek-v4-pro", "deepseek v4 pro"],
  "model:devstral-27b": ["devstral 27b", "devstral small"],
  "model:devstral-medium": ["devstral medium"],
  "model:fastapply": ["fastapply", "fast apply"],
  "model:gemma-3-4b": ["gemma 3 4b", "gemma-3-4b"],
  "model:glm-5.1": ["glm-5.1", "glm 5.1"],
  "model:grok-4.3": ["grok 4.3", "grok-4.3"],
  "model:grok-4.20-multi-agent": ["grok 4.20 multi-agent", "grok-4.20-multi-agent"],
  "model:grok-4.20-non-reasoning": ["grok 4.20 non-reasoning", "grok-4.20-non-reasoning"],
  "model:grok-4.20-reasoning": ["grok 4.20 reasoning", "grok-4.20-reasoning"],
  "model:grok-3": ["grok 3", "grok-3"],
  "model:grok-3-mini": ["grok 3 mini", "grok-3-mini"],
  "model:grok-4": ["grok 4", "grok-4"],
  "model:grok-4-fast-non-reasoning": ["grok 4 fast non-reasoning", "grok-4-fast-non-reasoning"],
  "model:grok-4-fast-reasoning": ["grok 4 fast reasoning", "grok-4-fast-reasoning"],
  "model:grok-code-fast-1": ["grok code fast 1"],
  "model:gpt4all-snoozy": ["gpt4all snoozy"],
  "model:kimi-k2": ["kimi k2"],
  "model:kimi-k2-1t": ["kimi k2 1t", "kimi k2"],
  "model:kimi-k2.6": ["kimi-k2.6", "kimi k2.6"],
  "model:llama-3": ["llama 3", "llama-3"],
  "model:llama-3.1": ["llama 3.1", "llama-3.1"],
  "model:llama-3.1-sonar-small-128k-online": [
    "llama-3.1-sonar-small-128k-online",
    "llama 3.1 sonar small 128k online"
  ],
  "model:llama-3-instruct": ["llama 3 instruct", "llama-3-instruct"],
  "model:llama3-8b-8192": ["llama3-8b-8192", "llama3 8b 8192"],
  "model:llama3-latest": ["llama3:latest", "llama3 latest"],
  "model:mai-code-1-flash": ["mai-code-1-flash", "mai code 1 flash"],
  "model:mercury-coder": ["mercury coder"],
  "model:mini-orca-small": ["mini orca small", "mini orca"],
  "model:minimax-m2.7": ["minimax-m2.7", "minimax m2.7"],
  "model:mistral": ["mistral"],
  "model:mistral-7b-v0.1": ["mistral-7b-v0.1", "mistral 7b v0.1", "thebloke/mistral-7b-v0.1-gguf"],
  "model:morph-embeddings": ["morph embeddings"],
  "model:morph-fast-apply": ["morph fast apply"],
  "model:morph-rerank": ["morph rerank"],
  "model:nemotron-3-super-120b-a12b": ["nemotron 3 super", "nemotron-3-super-120b-a12b"],
  "model:nous-hermes-2-mistral-dpo": ["nous hermes 2 mistral dpo", "nous hermes"],
  "model:qwen-3": ["qwen 3", "qwen-3"],
  "model:qwen-3.5": ["qwen 3.5", "qwen-3.5"],
  "model:qwen-2.5-vl": ["qwen 2.5 vl", "qwen-2.5-vl"],
  "model:qwen-3-coder": ["qwen 3 coder", "qwen-3-coder"],
  "model:qwen2.5": ["qwen2.5", "qwen 2.5"],
  "model:qwen2.5-coder-1.5b": ["qwen2.5-coder 1.5b", "qwencoder2.5 1.5b"],
  "model:qwen2.5-coder-14b-instruct": ["qwen2.5-coder-14b-instruct", "qwen2.5 coder 14b instruct"],
  "model:qwen3-coder-30b": ["qwen3 coder 30b", "qwen 3 coder 30b"],
  "model:qwen3-coder-480b": ["qwen3 coder 480b", "qwen 3 coder 480b", "qwen coder 3 480b"],
  "model:qwen3.6-35b-a3b": ["qwen3.6-35b-a3b", "qwen 3.6 35b a3b"],
  "model:qwopus3.5-27b-v3": ["qwopus3.5-27b-v3", "qwopus3.5 27b v3"],
  "model:raptor-mini": ["raptor mini"],
  "model:relace-instant-apply": ["relace instant apply"],
  "model:sonar": ["sonar", "perplexity/sonar"],
  "model:voyage-code-3": ["voyage code 3"],
  "model:voyage-rerank-2.5": ["voyage rerank 2.5"],
  "model:zerank-1": ["zerank-1", "zerank 1"],
  "model:zerank-1-small": ["zerank-1-small", "zerank 1 small"],
  "benchmark:mmlu": ["mmlu", "massive multitask"],
  "benchmark:humaneval": ["humaneval", "human eval", "human-eval", "openai/human-eval"],
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

const broadApplicationModelTargets = new Set([
  "model:anthropic-claude-family",
  "model:github-copilot-model-set",
  "model:google-gemini-family",
  "model:midjourney-image-model",
  "model:mistral",
  "model:openai-models",
  "model:perplexity-model-orchestration"
]);

const weakApplicationModelTargetTerms = new Set([
  "anthropic",
  "claude",
  "flash",
  "gemini",
  "google",
  "gpt",
  "haiku",
  "instruct",
  "llama",
  "mini",
  "mistral",
  "model",
  "models",
  "openai",
  "opus",
  "preview",
  "pro",
  "qwen",
  "reasoning",
  "sonnet",
  "thinking"
]);

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

function hasSpecificApplicationModelTargetEvidence(quote: string, edge: EdgeRecord, nodes: Map<string, NodeSummary>) {
  if (broadApplicationModelTargets.has(edge.target)) return true;
  const normalizedQuote = normalize(quote);
  const terms = nodeTerms(edge.target, nodes)
    .map((term) => normalize(term))
    .filter((term) => term.length > 0 && !weakApplicationModelTargetTerms.has(term));
  return terms.some((term) => normalizedQuote.includes(term));
}

export function quotePassesEdgeEvidence(quote: string, edge: EdgeRecord, nodes: Map<string, NodeSummary>) {
  const scored = scoreQuote(quote, edge, nodes);
  const hasKindEvidence = scored.reasons.some((reason) => reason.startsWith("kind:"));
  const hasTargetEvidence = scored.reasons.some((reason) => reason.startsWith("target:"));
  const hasSourceEvidence = scored.reasons.some((reason) => reason.startsWith("source:"));

  if (edge.kind === "supports" && edge.metadata?.applicationSupportedModelDocs === true) {
    return scored.score >= 5 && hasTargetEvidence && hasSpecificApplicationModelTargetEvidence(quote, edge, nodes);
  }

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
