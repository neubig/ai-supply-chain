import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

type Kind = "application" | "model" | "software" | "benchmark" | "infrastructure";
type Source = "github" | "huggingface" | "official";

type Candidate = {
  layer: string;
  id: string;
  kind: Kind;
  name: string;
  description: string;
  source: Source;
  url: string;
  license?: string;
  openness: "open_source" | "open_core" | "open_weights" | "source_available" | "proprietary" | "unknown";
  tasks: string[];
  popularity: number;
  popularityName: string;
  popularityUnit: string;
  publisher?: string;
  secondaryPopularity?: number;
  secondaryName?: string;
  secondaryUnit?: string;
  openIssues?: number;
  pushedAt?: string;
  metadata?: Record<string, unknown>;
  extraMetrics?: {
    id: string;
    category: "adoption" | "benchmark" | "cost" | "maintenance" | "openness" | "provenance" | "risk" | "security" | "velocity" | "performance" | "usage" | "quality";
    name: string;
    value: number | string | boolean;
    unit?: string;
    higherIsBetter?: boolean;
    notes?: string;
  }[];
};

const retrievedAt = "2026-06-10";

const layers = [
  {
    id: "applications",
    name: "User-facing AI applications",
    description: "Applications that expose AI capabilities directly to users.",
    popularityBasis: "GitHub stars among selected open-source or source-available user-facing AI applications."
  },
  {
    id: "foundation-chat-models",
    name: "Foundation and chat models",
    description: "General-purpose open or open-weight language models used in chat and RAG stacks.",
    popularityBasis: "Hugging Face downloads among selected open/open-weight chat model alternatives."
  },
  {
    id: "coding-models",
    name: "Coding models",
    description: "Open or open-weight models used for code completion, coding assistants, and software agents.",
    popularityBasis: "Hugging Face downloads among selected code model alternatives."
  },
  {
    id: "image-media-models",
    name: "Image and media generation models",
    description: "Open or open-weight image/media generation models used by visual AI applications.",
    popularityBasis: "Hugging Face downloads among selected image/media model alternatives."
  },
  {
    id: "embedding-reranking-models",
    name: "Embedding and reranking models",
    description: "Embedding and reranking models used for semantic search, RAG, and retrieval workflows.",
    popularityBasis: "Hugging Face downloads among selected embedding/reranking model alternatives."
  },
  {
    id: "speech-audio-models",
    name: "Speech and audio models",
    description: "ASR, TTS, translation, and audio generation models.",
    popularityBasis: "Hugging Face downloads among selected speech/audio model alternatives."
  },
  {
    id: "inference-serving-runtimes",
    name: "Inference and serving runtimes",
    description: "Local runtimes, inference servers, and LLM gateways.",
    popularityBasis: "GitHub stars among selected inference and serving alternatives."
  },
  {
    id: "training-finetuning-frameworks",
    name: "Training and fine-tuning frameworks",
    description: "Frameworks and libraries used to train, fine-tune, and load AI models.",
    popularityBasis: "GitHub stars among selected training/fine-tuning framework alternatives."
  },
  {
    id: "hardware",
    name: "Hardware and accelerator infrastructure",
    description: "Accelerators and local compute profiles used for AI training, fine-tuning, and inference.",
    popularityBasis:
      "Curated coverage priority across current AI accelerator and local-device alternatives from official vendor documentation; this is not a market-share estimate."
  },
  {
    id: "rag-vector-data-infrastructure",
    name: "RAG, vector, and data infrastructure",
    description: "Retrieval frameworks, vector databases, and data systems used in AI stacks.",
    popularityBasis: "GitHub stars among selected RAG/vector/data infrastructure alternatives."
  },
  {
    id: "agent-sandboxing",
    name: "Agent sandboxing and execution isolation",
    description: "Container, microVM, workspace, and policy layers used to isolate AI agents and tool execution.",
    popularityBasis: "GitHub stars among selected sandboxing and execution-isolation alternatives."
  },
  {
    id: "evaluation-tools-benchmarks",
    name: "Evaluation tools and benchmarks",
    description: "Evaluation harnesses, benchmark suites, and quality measurement tools.",
    popularityBasis: "GitHub stars among selected evaluation and benchmark alternatives."
  }
] as const;

const candidates: Candidate[] = [
  g("applications", "application:stable-diffusion-webui", "application", "Stable Diffusion web UI", "Browser-based Stable Diffusion application.", "https://github.com/AUTOMATIC1111/stable-diffusion-webui", "AGPL-3.0", "open_source", ["image-generation"], 163584, 30370, 2489, "2026-03-02T07:00:53Z"),
  g("applications", "application:open-webui", "application", "Open WebUI", "Web UI for local and hosted LLMs.", "https://github.com/open-webui/open-webui", "NOASSERTION", "source_available", ["chat", "rag"], 140857, 20212, 383, "2026-06-08T21:52:55Z"),
  g("applications", "application:comfyui", "application", "ComfyUI", "Node-graph interface and backend for diffusion workflows.", "https://github.com/Comfy-Org/ComfyUI", "GPL-3.0", "open_source", ["image-generation"], 116374, 13613, 4102, "2026-06-09T23:48:50Z"),
  g("applications", "application:lobehub", "application", "LobeHub", "Agent and chat operations interface.", "https://github.com/lobehub/lobehub", "NOASSERTION", "unknown", ["chat", "agents"], 78425, 15395, 372, "2026-06-10T00:06:11Z"),
  g("applications", "application:gpt4all", "application", "GPT4All", "Desktop and local runtime application for open models.", "https://github.com/nomic-ai/gpt4all", "MIT", "open_source", ["chat", "local-inference"], 77359, 8323, 761, "2025-05-27T20:05:19Z"),
  g("applications", "application:openhands", "application", "OpenHands", "Software development agent application.", "https://github.com/OpenHands/OpenHands", "NOASSERTION", "open_core", ["coding", "software-agents"], 76331, 9702, 342, "2026-06-09T22:50:15Z"),
  g("applications", "application:anythingllm", "application", "AnythingLLM", "Local-first workspace for chat, RAG, and agents.", "https://github.com/Mintplex-Labs/anything-llm", "MIT", "open_source", ["chat", "rag"], 61327, 6664, 326, "2026-06-10T00:12:35Z"),
  g("applications", "application:jan", "application", "Jan", "Desktop ChatGPT alternative for local/offline AI.", "https://github.com/janhq/jan", "NOASSERTION", "open_source", ["chat", "local-inference"], 42956, 2921, 452, "2026-06-02T03:00:21Z"),
  g("applications", "application:librechat", "application", "LibreChat", "Self-hosted multi-provider chat and agent application.", "https://github.com/danny-avila/LibreChat", "MIT", "open_source", ["chat", "agents"], 38770, 7954, 485, "2026-06-10T00:16:40Z"),
  g("applications", "application:continue", "application", "Continue", "Open-source AI coding assistant.", "https://github.com/continuedev/continue", "Apache-2.0", "open_source", ["coding"], 33631, 4633, 733, "2026-06-09T07:11:10Z"),

  hf("foundation-chat-models", "model:qwen2.5-7b-instruct", "Qwen2.5-7B-Instruct", "Instruction-tuned Qwen language model.", "https://huggingface.co/Qwen/Qwen2.5-7B-Instruct", "apache-2.0", ["chat"], 11890117, 1344),
  hf("foundation-chat-models", "model:llama-3.1-8b-instruct", "Llama 3.1 8B Instruct", "Instruction-tuned Llama 3.1 open-weight model.", "https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct", "llama3.1", ["chat"], 10031112, 6035),
  hf("foundation-chat-models", "model:mistral-7b-instruct-v0.3", "Mistral-7B-Instruct-v0.3", "Instruction-tuned Mistral 7B model.", "https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.3", "apache-2.0", ["chat"], 3392572, 2623),
  hf("foundation-chat-models", "model:mixtral-8x7b-instruct-v0.1", "Mixtral-8x7B-Instruct-v0.1", "Sparse mixture-of-experts instruction model.", "https://huggingface.co/mistralai/Mixtral-8x7B-Instruct-v0.1", "apache-2.0", ["chat"], 824791, 4694),
  hf("foundation-chat-models", "model:phi-3-mini-4k-instruct", "Phi-3-mini-4k-instruct", "Small instruction-tuned language model.", "https://huggingface.co/microsoft/Phi-3-mini-4k-instruct", "mit", ["chat"], 610575, 1431),
  hf("foundation-chat-models", "model:deepseek-r1-distill-qwen-7b", "DeepSeek-R1-Distill-Qwen-7B", "Reasoning distillation based on Qwen 7B.", "https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-7B", "mit", ["chat", "reasoning"], 489121, 842),
  hf("foundation-chat-models", "model:gemma-2-9b-it", "Gemma 2 9B IT", "Instruction-tuned Gemma model.", "https://huggingface.co/google/gemma-2-9b-it", "gemma", ["chat"], 394810, 826),
  hf("foundation-chat-models", "model:gpt-j-6b", "GPT-J-6B", "EleutherAI language model trained on The Pile.", "https://huggingface.co/EleutherAI/gpt-j-6b", "apache-2.0", ["text-generation"], 250402, 1525),
  hf("foundation-chat-models", "model:falcon-7b-instruct", "Falcon-7B-Instruct", "Instruction-tuned Falcon 7B model.", "https://huggingface.co/tiiuae/falcon-7b-instruct", "apache-2.0", ["chat"], 243678, 1032),
  hf("foundation-chat-models", "model:olmo-2-1124-7b-instruct", "OLMo-2-1124-7B-Instruct", "AllenAI open language model.", "https://huggingface.co/allenai/OLMo-2-1124-7B-Instruct", "apache-2.0", ["chat"], 52510, 50),

  hf("coding-models", "model:qwen2.5-coder-7b-instruct", "Qwen2.5-Coder-7B-Instruct", "Instruction-tuned Qwen code model.", "https://huggingface.co/Qwen/Qwen2.5-Coder-7B-Instruct", "apache-2.0", ["coding"], 2085546, 726),
  hf("coding-models", "model:phi-3-mini-4k-instruct", "Phi-3-mini-4k-instruct", "Small instruction model used in code workflows.", "https://huggingface.co/microsoft/Phi-3-mini-4k-instruct", "mit", ["coding"], 610575, 1431),
  hf("coding-models", "model:codegen-350m-mono", "CodeGen 350M Mono", "Salesforce autoregressive code generation model.", "https://huggingface.co/Salesforce/codegen-350M-mono", "bsd-3-clause", ["coding"], 137804, 101),
  hf("coding-models", "model:starcoder2-3b", "StarCoder2-3B", "BigCode code generation model.", "https://huggingface.co/bigcode/starcoder2-3b", "bigcode-openrail-m", ["coding"], 123303, 219),
  hf("coding-models", "model:deepseek-coder-6.7b-instruct", "DeepSeek Coder 6.7B Instruct", "Instruction-tuned DeepSeek code model.", "https://huggingface.co/deepseek-ai/deepseek-coder-6.7b-instruct", "other", ["coding"], 120203, 496),
  hf("coding-models", "model:codellama-7b-instruct", "CodeLlama 7B Instruct", "Instruction-tuned Code Llama model.", "https://huggingface.co/codellama/CodeLlama-7b-Instruct-hf", "llama2", ["coding"], 28105, 258),
  hf("coding-models", "model:granite-8b-code-instruct", "Granite 8B Code Instruct", "IBM Granite code instruction model.", "https://huggingface.co/ibm-granite/granite-8b-code-instruct", "apache-2.0", ["coding"], 7939, 115),
  hf("coding-models", "model:codegemma-7b-it", "CodeGemma 7B IT", "Instruction-tuned CodeGemma model.", "https://huggingface.co/google/codegemma-7b-it", "gemma", ["coding"], 6784, 255),
  hf("coding-models", "model:santacoder", "SantaCoder", "BigCode code generation model.", "https://huggingface.co/bigcode/santacoder", "bigcode-openrail-m", ["coding"], 4201, 335),
  hf("coding-models", "model:magicoder-s-ds-6.7b", "Magicoder-S-DS-6.7B", "Magicoder code model.", "https://huggingface.co/ise-uiuc/Magicoder-S-DS-6.7B", "other", ["coding"], 303, 207),

  hf("image-media-models", "model:stable-diffusion-v1-5", "Stable Diffusion v1.5", "Latent diffusion text-to-image model.", "https://huggingface.co/stable-diffusion-v1-5/stable-diffusion-v1-5", "creativeml-openrail-m", ["image-generation"], 1704765, 1146),
  hf("image-media-models", "model:stable-diffusion-xl-base-1.0", "Stable Diffusion XL Base 1.0", "Open-weight text-to-image diffusion model.", "https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0", "openrail++", ["image-generation"], 1436868, 7804),
  hf("image-media-models", "model:flux.1-dev", "FLUX.1-dev", "Black Forest Labs image generation model.", "https://huggingface.co/black-forest-labs/FLUX.1-dev", "other", ["image-generation"], 984011, 13126),
  hf("image-media-models", "model:flux.1-schnell", "FLUX.1-schnell", "Fast FLUX image generation model.", "https://huggingface.co/black-forest-labs/FLUX.1-schnell", "apache-2.0", ["image-generation"], 337454, 5068),
  hf("image-media-models", "model:playground-v2.5-1024px-aesthetic", "Playground v2.5", "Aesthetic text-to-image model.", "https://huggingface.co/playgroundai/playground-v2.5-1024px-aesthetic", "other", ["image-generation"], 271756, 765),
  hf("image-media-models", "model:dreamshaper-8", "DreamShaper 8", "Community text-to-image model.", "https://huggingface.co/Lykon/dreamshaper-8", "creativeml-openrail-m", ["image-generation"], 57985, 108),
  hf("image-media-models", "model:stable-diffusion-3.5-large", "Stable Diffusion 3.5 Large", "Stability AI image generation model.", "https://huggingface.co/stabilityai/stable-diffusion-3.5-large", "other", ["image-generation"], 22257, 3527),
  hf("image-media-models", "model:pixart-xl-2-1024-ms", "PixArt-XL-2-1024-MS", "PixArt text-to-image model.", "https://huggingface.co/PixArt-alpha/PixArt-XL-2-1024-MS", "openrail++", ["image-generation"], 4727, 213),
  hf("image-media-models", "model:kandinsky-2-2-decoder", "Kandinsky 2.2 Decoder", "Kandinsky decoder model.", "https://huggingface.co/kandinsky-community/kandinsky-2-2-decoder", "apache-2.0", ["image-generation"], 2835, 74),
  hf("image-media-models", "model:hunyuan-dit-v1.2", "HunyuanDiT v1.2", "Tencent Hunyuan text-to-image model.", "https://huggingface.co/Tencent-Hunyuan/HunyuanDiT-v1.2-Diffusers", "other", ["image-generation"], 369, 30),

  hf("embedding-reranking-models", "model:all-minilm-l6-v2", "all-MiniLM-L6-v2", "Sentence Transformers embedding model.", "https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2", "apache-2.0", ["embeddings"], 230826064, 4926),
  hf("embedding-reranking-models", "model:nomic-embed-text-v1.5", "Nomic Embed Text v1.5", "Nomic text embedding model.", "https://huggingface.co/nomic-ai/nomic-embed-text-v1.5", "apache-2.0", ["embeddings"], 17630308, 845),
  hf("embedding-reranking-models", "model:bge-large-en-v1.5", "BGE Large EN v1.5", "BAAI English embedding model.", "https://huggingface.co/BAAI/bge-large-en-v1.5", "mit", ["embeddings"], 14158114, 683),
  hf("embedding-reranking-models", "model:bge-base-en-v1.5", "BGE Base EN v1.5", "BAAI English embedding model.", "https://huggingface.co/BAAI/bge-base-en-v1.5", "mit", ["embeddings"], 8571107, 436),
  hf("embedding-reranking-models", "model:multilingual-e5-large", "Multilingual E5 Large", "Multilingual text embedding model.", "https://huggingface.co/intfloat/multilingual-e5-large", "mit", ["embeddings"], 7017018, 1202),
  hf("embedding-reranking-models", "model:mxbai-embed-large-v1", "mxbai-embed-large-v1", "Mixedbread embedding model.", "https://huggingface.co/mixedbread-ai/mxbai-embed-large-v1", "apache-2.0", ["embeddings"], 4752072, 808),
  hf("embedding-reranking-models", "model:jina-embeddings-v3", "Jina Embeddings v3", "Jina multilingual embedding model.", "https://huggingface.co/jinaai/jina-embeddings-v3", "cc-by-nc-4.0", ["embeddings"], 3461822, 1144),
  hf("embedding-reranking-models", "model:e5-large-v2", "E5 Large v2", "Text embedding model.", "https://huggingface.co/intfloat/e5-large-v2", "mit", ["embeddings"], 3351617, 279),
  hf("embedding-reranking-models", "model:bge-reranker-large", "BGE Reranker Large", "BAAI reranking model.", "https://huggingface.co/BAAI/bge-reranker-large", "mit", ["reranking"], 1534971, 464),
  hf("embedding-reranking-models", "model:gte-large-en-v1.5", "GTE Large EN v1.5", "Alibaba GTE embedding model.", "https://huggingface.co/Alibaba-NLP/gte-large-en-v1.5", "apache-2.0", ["embeddings"], 1550013, 236),

  hf("speech-audio-models", "model:xtts-v2", "XTTS-v2", "Coqui multilingual text-to-speech model.", "https://huggingface.co/coqui/XTTS-v2", "other", ["text-to-speech"], 9034852, 3587),
  hf("speech-audio-models", "model:whisper-large-v3", "Whisper large-v3", "OpenAI multilingual ASR model.", "https://huggingface.co/openai/whisper-large-v3", "apache-2.0", ["speech-recognition"], 5054098, 5800),
  hf("speech-audio-models", "model:whisper-small", "Whisper small", "OpenAI small ASR model.", "https://huggingface.co/openai/whisper-small", "apache-2.0", ["speech-recognition"], 2315618, 565),
  hf("speech-audio-models", "model:wav2vec2-base-960h", "wav2vec2-base-960h", "Facebook wav2vec2 ASR model.", "https://huggingface.co/facebook/wav2vec2-base-960h", "apache-2.0", ["speech-recognition"], 1098753, 398),
  hf("speech-audio-models", "model:distil-large-v3", "Distil-Whisper large-v3", "Distilled Whisper ASR model.", "https://huggingface.co/distil-whisper/distil-large-v3", "mit", ["speech-recognition"], 933990, 375),
  hf("speech-audio-models", "model:seamless-m4t-v2-large", "SeamlessM4T v2 Large", "Multimodal speech translation model.", "https://huggingface.co/facebook/seamless-m4t-v2-large", "cc-by-nc-4.0", ["speech-translation"], 410860, 984),
  hf("speech-audio-models", "model:parakeet-tdt-0.6b-v2", "Parakeet TDT 0.6B v2", "NVIDIA ASR model.", "https://huggingface.co/nvidia/parakeet-tdt-0.6b-v2", "cc-by-4.0", ["speech-recognition"], 360108, 1494),
  hf("speech-audio-models", "model:musicgen-small", "MusicGen Small", "Audio generation model.", "https://huggingface.co/facebook/musicgen-small", "cc-by-nc-4.0", ["text-to-audio"], 186078, 493),
  hf("speech-audio-models", "model:speecht5-tts", "SpeechT5 TTS", "Microsoft text-to-speech model.", "https://huggingface.co/microsoft/speecht5_tts", "mit", ["text-to-speech"], 105237, 835),
  hf("speech-audio-models", "model:bark-small", "Bark Small", "Suno text-to-speech model.", "https://huggingface.co/suno/bark-small", "mit", ["text-to-speech"], 50282, 259),

  g("inference-serving-runtimes", "software:ollama", "software", "Ollama", "Local model runtime and distribution tool.", "https://github.com/ollama/ollama", "MIT", "open_source", ["local-inference"], 173713, 16524, 3379, "2026-06-09T22:04:36Z"),
  g("inference-serving-runtimes", "software:llama.cpp", "software", "llama.cpp", "C/C++ LLM inference engine.", "https://github.com/ggml-org/llama.cpp", "MIT", "open_source", ["local-inference"], 115795, 19389, 1785, "2026-06-09T19:33:22Z"),
  g("inference-serving-runtimes", "software:vllm", "software", "vLLM", "High-throughput LLM inference server.", "https://github.com/vllm-project/vllm", "Apache-2.0", "open_source", ["model-serving"], 82361, 17850, 5309, "2026-06-10T00:12:23Z"),
  g("inference-serving-runtimes", "software:litellm", "software", "LiteLLM", "OpenAI-compatible gateway and SDK.", "https://github.com/BerriAI/litellm", "NOASSERTION", "open_core", ["model-routing"], 49818, 8731, 3504, "2026-06-10T00:14:45Z"),
  g("inference-serving-runtimes", "software:localai", "software", "LocalAI", "Open-source local AI engine.", "https://github.com/mudler/LocalAI", "MIT", "open_source", ["local-inference"], 46758, 4123, 194, "2026-06-09T23:16:29Z"),
  g("inference-serving-runtimes", "software:ray", "software", "Ray", "Distributed AI compute engine.", "https://github.com/ray-project/ray", "Apache-2.0", "open_source", ["distributed-inference"], 42824, 7665, 3463, "2026-06-10T00:06:44Z"),
  g("inference-serving-runtimes", "software:sglang", "software", "SGLang", "Serving framework for LLMs and multimodal models.", "https://github.com/sgl-project/sglang", "Apache-2.0", "open_source", ["model-serving"], 28903, 6429, 3813, "2026-06-10T00:19:21Z"),
  g("inference-serving-runtimes", "software:text-generation-inference", "software", "Text Generation Inference", "Hugging Face LLM serving runtime.", "https://github.com/huggingface/text-generation-inference", "Apache-2.0", "open_source", ["model-serving"], 10860, 1271, 324, "2026-03-21T11:34:22Z"),
  g("inference-serving-runtimes", "software:triton-inference-server", "software", "Triton Inference Server", "NVIDIA inference serving system.", "https://github.com/triton-inference-server/server", "BSD-3-Clause", "open_source", ["model-serving"], 10742, 1792, 892, "2026-06-10T00:06:42Z"),
  g("inference-serving-runtimes", "software:kserve", "software", "KServe", "Kubernetes inference platform.", "https://github.com/kserve/kserve", "Apache-2.0", "open_source", ["model-serving"], 5561, 1518, 707, "2026-06-09T19:08:00Z"),

  g("training-finetuning-frameworks", "software:transformers", "software", "Transformers", "Hugging Face model library.", "https://github.com/huggingface/transformers", "Apache-2.0", "open_source", ["training"], 161459, 33446, 2407, "2026-06-09T18:20:37Z"),
  g("training-finetuning-frameworks", "software:pytorch", "software", "PyTorch", "Tensor and deep learning framework.", "https://github.com/pytorch/pytorch", "NOASSERTION", "open_source", ["training"], 100623, 27962, 18325, "2026-06-10T00:20:30Z"),
  g("training-finetuning-frameworks", "software:unsloth", "software", "Unsloth", "Fine-tuning and local model training toolkit.", "https://github.com/unslothai/unsloth", "Apache-2.0", "open_source", ["fine-tuning"], 66142, 5923, 1416, "2026-06-09T20:43:24Z"),
  g("training-finetuning-frameworks", "software:deepspeed", "software", "DeepSpeed", "Distributed training optimization library.", "https://github.com/deepspeedai/DeepSpeed", "Apache-2.0", "open_source", ["training"], 42488, 4856, 1298, "2026-06-09T19:58:32Z"),
  g("training-finetuning-frameworks", "software:diffusers", "software", "Diffusers", "Diffusion model training and inference library.", "https://github.com/huggingface/diffusers", "Apache-2.0", "open_source", ["training", "image-generation"], 33817, 7034, 1166, "2026-06-09T15:43:21Z"),
  g("training-finetuning-frameworks", "software:pytorch-lightning", "software", "PyTorch Lightning", "Training framework for AI models.", "https://github.com/Lightning-AI/pytorch-lightning", "Apache-2.0", "open_source", ["training"], 31178, 3733, 1003, "2026-06-09T16:31:54Z"),
  g("training-finetuning-frameworks", "software:peft", "software", "PEFT", "Parameter-efficient fine-tuning library.", "https://github.com/huggingface/peft", "Apache-2.0", "open_source", ["fine-tuning"], 21257, 2329, 50, "2026-06-08T15:15:27Z"),
  g("training-finetuning-frameworks", "software:trl", "software", "TRL", "Transformer reinforcement learning training library.", "https://github.com/huggingface/trl", "Apache-2.0", "open_source", ["fine-tuning"], 18591, 2780, 589, "2026-06-09T16:02:27Z"),
  g("training-finetuning-frameworks", "software:megatron-lm", "software", "Megatron-LM", "Large transformer training framework.", "https://github.com/NVIDIA/Megatron-LM", "NOASSERTION", "unknown", ["training"], 16643, 4054, 859, "2026-06-10T00:15:25Z"),
  g("training-finetuning-frameworks", "software:axolotl", "software", "Axolotl", "LLM fine-tuning framework.", "https://github.com/axolotl-ai-cloud/axolotl", "Apache-2.0", "open_source", ["fine-tuning"], 12030, 1367, 220, "2026-06-09T19:29:41Z"),

  official("hardware", "infrastructure:nvidia-b200", "NVIDIA B200", "Blackwell Tensor Core GPU profile for large-scale training and inference systems.", "https://www.nvidia.com/en-us/data-center/dgx-b200/", "NVIDIA", ["training", "inference", "fine-tuning"], 100, {
    hardware: {
      vendor: "NVIDIA",
      acceleratorType: "gpu",
      architecture: "Blackwell",
      memoryGb: 180,
      memoryType: "HBM3e",
      deployment: "datacenter",
      softwareBackends: ["CUDA", "TensorRT-LLM", "PyTorch", "vLLM"],
      supportsTraining: true,
      supportsInference: true
    },
    costTier: "datacenter_capex_or_cloud"
  }),
  official("hardware", "infrastructure:nvidia-h200", "NVIDIA H200", "Hopper GPU profile with larger HBM3e memory for LLM inference and training.", "https://www.nvidia.com/en-us/data-center/h200/", "NVIDIA", ["training", "inference", "fine-tuning"], 99, {
    hardware: {
      vendor: "NVIDIA",
      acceleratorType: "gpu",
      architecture: "Hopper",
      memoryGb: 141,
      memoryType: "HBM3e",
      deployment: "datacenter",
      softwareBackends: ["CUDA", "TensorRT-LLM", "PyTorch", "vLLM"],
      supportsTraining: true,
      supportsInference: true
    },
    costTier: "datacenter_capex_or_cloud"
  }),
  official("hardware", "infrastructure:nvidia-h100", "NVIDIA H100", "Hopper Tensor Core GPU profile widely used for AI training and inference clusters.", "https://www.nvidia.com/en-us/data-center/h100/", "NVIDIA", ["training", "inference", "fine-tuning"], 98, {
    hardware: {
      vendor: "NVIDIA",
      acceleratorType: "gpu",
      architecture: "Hopper",
      memoryGb: 80,
      memoryType: "HBM3",
      deployment: "datacenter",
      softwareBackends: ["CUDA", "TensorRT-LLM", "PyTorch", "vLLM"],
      supportsTraining: true,
      supportsInference: true
    },
    costTier: "datacenter_capex_or_cloud"
  }),
  official("hardware", "infrastructure:nvidia-rtx-5090", "NVIDIA GeForce RTX 5090", "Consumer Blackwell GPU profile for local inference, image generation, and small fine-tuning jobs.", "https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5090/", "NVIDIA", ["local-inference", "image-generation", "fine-tuning"], 97, {
    hardware: {
      vendor: "NVIDIA",
      acceleratorType: "gpu",
      architecture: "Blackwell",
      memoryGb: 32,
      memoryType: "GDDR7",
      deployment: "consumer-workstation",
      softwareBackends: ["CUDA", "llama.cpp", "PyTorch", "Diffusers"],
      supportsTraining: "limited",
      supportsInference: true
    },
    costTier: "local_capex"
  }),
  official("hardware", "infrastructure:amd-mi325x", "AMD Instinct MI325X", "AMD datacenter accelerator profile with high HBM3e capacity for large models.", "https://www.amd.com/en/products/accelerators/instinct/mi300/mi325x.html", "AMD", ["training", "inference", "fine-tuning"], 96, {
    hardware: {
      vendor: "AMD",
      acceleratorType: "gpu",
      architecture: "CDNA3",
      memoryGb: 256,
      memoryType: "HBM3e",
      deployment: "datacenter",
      softwareBackends: ["ROCm", "PyTorch", "vLLM"],
      supportsTraining: true,
      supportsInference: true
    },
    costTier: "datacenter_capex_or_cloud"
  }),
  official("hardware", "infrastructure:amd-mi300x", "AMD Instinct MI300X", "AMD datacenter accelerator profile used for large-memory training and inference.", "https://www.amd.com/en/products/accelerators/instinct/mi300/mi300x.html", "AMD", ["training", "inference", "fine-tuning"], 95, {
    hardware: {
      vendor: "AMD",
      acceleratorType: "gpu",
      architecture: "CDNA3",
      memoryGb: 192,
      memoryType: "HBM3",
      deployment: "datacenter",
      softwareBackends: ["ROCm", "PyTorch", "vLLM"],
      supportsTraining: true,
      supportsInference: true
    },
    costTier: "datacenter_capex_or_cloud"
  }),
  official("hardware", "infrastructure:intel-gaudi-3", "Intel Gaudi 3", "Intel AI accelerator profile for training and inference with Ethernet scale-out.", "https://www.intel.com/content/www/us/en/products/details/processors/ai-accelerators/gaudi.html", "Intel", ["training", "inference"], 94, {
    hardware: {
      vendor: "Intel",
      acceleratorType: "ai-accelerator",
      architecture: "Gaudi",
      memoryGb: 128,
      memoryType: "HBM2e",
      deployment: "datacenter",
      softwareBackends: ["SynapseAI", "PyTorch", "vLLM"],
      supportsTraining: true,
      supportsInference: true
    },
    costTier: "datacenter_capex_or_cloud"
  }),
  official("hardware", "infrastructure:google-cloud-tpu-v6e-trillium", "Google Cloud TPU v6e Trillium", "Google Cloud TPU profile for large-scale model training, tuning, and serving.", "https://docs.cloud.google.com/tpu/docs/v6e", "Google Cloud", ["training", "inference", "fine-tuning"], 93, {
    hardware: {
      vendor: "Google Cloud",
      acceleratorType: "tpu",
      architecture: "Trillium",
      memoryGb: 32,
      memoryType: "HBM",
      deployment: "cloud",
      softwareBackends: ["JAX", "XLA", "PyTorch/XLA", "TensorFlow"],
      supportsTraining: true,
      supportsInference: true
    },
    costTier: "cloud_metered"
  }),
  official("hardware", "infrastructure:aws-trainium3", "AWS Trainium3", "AWS custom accelerator profile for large-scale training and inference through EC2 Trn3 UltraServers.", "https://aws.amazon.com/ai/machine-learning/trainium/", "AWS", ["training", "inference", "fine-tuning"], 92, {
    hardware: {
      vendor: "AWS",
      acceleratorType: "ai-accelerator",
      architecture: "Trainium",
      memoryGb: 144,
      memoryType: "HBM3e",
      deployment: "cloud",
      softwareBackends: ["AWS Neuron", "PyTorch", "JAX"],
      supportsTraining: true,
      supportsInference: true
    },
    costTier: "cloud_metered"
  }),
  official("hardware", "infrastructure:apple-m5-max", "Apple M5 Max", "Apple unified-memory local workstation profile for on-device inference and developer workflows.", "https://www.apple.com/macbook-pro/specs/", "Apple", ["local-inference", "developer-workstation"], 91, {
    hardware: {
      vendor: "Apple",
      acceleratorType: "soc",
      architecture: "Apple Silicon",
      memoryGb: 128,
      memoryType: "unified memory",
      deployment: "consumer-workstation",
      softwareBackends: ["Metal", "Core ML", "MLX", "llama.cpp"],
      supportsTraining: "limited",
      supportsInference: true
    },
    costTier: "local_capex"
  }),

  g("rag-vector-data-infrastructure", "software:langchain", "software", "LangChain", "Agent and LLM application framework.", "https://github.com/langchain-ai/langchain", "MIT", "open_source", ["rag", "agents"], 138900, 23000, 531, "2026-06-10T00:15:35Z"),
  g("rag-vector-data-infrastructure", "software:llamaindex", "software", "LlamaIndex", "Document agent and data framework.", "https://github.com/run-llama/llama_index", "MIT", "open_source", ["rag"], 50046, 7529, 429, "2026-06-09T22:59:00Z"),
  g("rag-vector-data-infrastructure", "software:milvus", "software", "Milvus", "Cloud-native vector database.", "https://github.com/milvus-io/milvus", "Apache-2.0", "open_source", ["vector-search"], 44703, 4054, 879, "2026-06-09T21:14:20Z"),
  g("rag-vector-data-infrastructure", "software:faiss", "software", "FAISS", "Similarity search and vector indexing library.", "https://github.com/facebookresearch/faiss", "MIT", "open_source", ["vector-search"], 40241, 4416, 274, "2026-06-09T16:39:15Z"),
  g("rag-vector-data-infrastructure", "software:qdrant", "software", "Qdrant", "Vector database and search engine.", "https://github.com/qdrant/qdrant", "Apache-2.0", "open_source", ["vector-search"], 31982, 2349, 574, "2026-06-10T00:15:03Z"),
  g("rag-vector-data-infrastructure", "software:chroma", "software", "Chroma", "Search infrastructure for AI.", "https://github.com/chroma-core/chroma", "Apache-2.0", "open_source", ["vector-search"], 28330, 2305, 644, "2026-06-10T00:03:08Z"),
  g("rag-vector-data-infrastructure", "software:haystack", "software", "Haystack", "AI orchestration framework for RAG and agents.", "https://github.com/deepset-ai/haystack", "Apache-2.0", "open_source", ["rag"], 25506, 2834, 107, "2026-06-09T15:28:28Z"),
  g("rag-vector-data-infrastructure", "software:pgvector", "software", "pgvector", "Vector similarity search for Postgres.", "https://github.com/pgvector/pgvector", "NOASSERTION", "open_source", ["vector-search"], 21681, 1201, 13, "2026-05-30T18:58:13Z"),
  g("rag-vector-data-infrastructure", "software:weaviate", "software", "Weaviate", "Open-source vector database.", "https://github.com/weaviate/weaviate", "BSD-3-Clause", "open_source", ["vector-search"], 16303, 1308, 516, "2026-06-09T20:22:56Z"),
  g("rag-vector-data-infrastructure", "software:lancedb", "software", "LanceDB", "Embedded retrieval and vector database.", "https://github.com/lancedb/lancedb", "Apache-2.0", "open_source", ["vector-search"], 10555, 904, 660, "2026-06-09T22:59:31Z"),

  sandbox("software:kubernetes", "Kubernetes", "Container orchestration platform used to isolate and schedule AI services and agent workspaces.", "https://github.com/kubernetes/kubernetes", "Apache-2.0", "open_source", ["container-orchestration", "agent-sandboxing"], 122896, 43179, 2702, "2026-06-10T00:29:45Z", "orchestrator"),
  sandbox("software:openhands-runtime", "OpenHands Runtime", "Containerized runtime and workspace isolation layer used by OpenHands software agents.", "https://github.com/OpenHands/OpenHands", "NOASSERTION", "open_core", ["software-agents", "agent-sandboxing"], 76331, 9703, 342, "2026-06-09T22:50:15Z", "agent-runtime"),
  sandbox("software:daytona", "Daytona", "Development environment manager for secure, repeatable workspaces.", "https://github.com/daytonaio/daytona", "AGPL-3.0", "open_source", ["developer-workspaces", "agent-sandboxing"], 72445, 5613, 437, "2026-06-09T18:21:50Z", "workspace-manager"),
  sandbox("software:docker-moby", "Docker/Moby", "Open container engine used as a baseline isolation layer for local AI services and agents.", "https://github.com/moby/moby", "Apache-2.0", "open_source", ["containers", "agent-sandboxing"], 71643, 18958, 3794, "2026-06-09T22:11:01Z", "container-runtime"),
  sandbox("software:firecracker", "Firecracker", "MicroVM runtime for serverless and multi-tenant workload isolation.", "https://github.com/firecracker-microvm/firecracker", "Apache-2.0", "open_source", ["microvm", "agent-sandboxing"], 34843, 2435, 93, "2026-06-08T16:56:18Z", "microvm"),
  sandbox("software:gvisor", "gVisor", "Application kernel sandbox for container isolation.", "https://github.com/google/gvisor", "Apache-2.0", "open_source", ["containers", "agent-sandboxing"], 18496, 1629, 638, "2026-06-09T23:47:25Z", "userspace-kernel"),
  sandbox("software:dagger", "Dagger", "Programmable containerized workflow engine for repeatable build and agent execution.", "https://github.com/dagger/dagger", "Apache-2.0", "open_source", ["containers", "ci", "agent-sandboxing"], 15920, 883, 114, "2026-06-10T00:30:17Z", "workflow-runtime"),
  sandbox("software:kata-containers", "Kata Containers", "Lightweight VM-backed container runtime for stronger workload isolation.", "https://github.com/kata-containers/kata-containers", "Apache-2.0", "open_source", ["containers", "microvm", "agent-sandboxing"], 8041, 1350, 1602, "2026-06-09T22:37:07Z", "vm-backed-container"),
  sandbox("software:dev-containers-spec", "Dev Containers", "Open specification for reproducible development containers.", "https://github.com/devcontainers/spec", "CC-BY-4.0", "source_available", ["developer-workspaces", "agent-sandboxing"], 5500, 471, 163, "2026-03-20T11:13:13Z", "workspace-spec"),
  sandbox("software:e2b-infra", "E2B Infra", "Open-source infrastructure for cloud sandboxes used by AI agents.", "https://github.com/e2b-dev/infra", "Apache-2.0", "open_source", ["cloud-sandbox", "agent-sandboxing"], 1157, 336, 113, "2026-06-10T00:37:12Z", "cloud-sandbox"),

  g("evaluation-tools-benchmarks", "software:openai-evals", "software", "OpenAI Evals", "Framework and registry for evaluating LLM systems.", "https://github.com/openai/evals", "NOASSERTION", "open_source", ["evaluation"], 18645, 2981, 207, "2026-04-14T15:29:57Z"),
  g("evaluation-tools-benchmarks", "software:deepeval", "software", "DeepEval", "LLM evaluation framework.", "https://github.com/confident-ai/deepeval", "Apache-2.0", "open_source", ["evaluation"], 16056, 1513, 284, "2026-06-09T17:19:55Z"),
  g("evaluation-tools-benchmarks", "software:ragas", "software", "Ragas", "LLM application evaluation framework.", "https://github.com/vibrantlabsai/ragas", "Apache-2.0", "open_source", ["evaluation", "rag"], 14313, 1474, 428, "2026-02-24T07:47:19Z"),
  g("evaluation-tools-benchmarks", "software:lm-evaluation-harness", "software", "LM Evaluation Harness", "Few-shot language model evaluation framework.", "https://github.com/EleutherAI/lm-evaluation-harness", "MIT", "open_source", ["evaluation"], 12897, 3332, 840, "2026-06-02T15:06:38Z"),
  g("evaluation-tools-benchmarks", "software:promptflow", "software", "Prompt flow", "LLM app prototyping, testing, and evaluation tooling.", "https://github.com/microsoft/promptflow", "MIT", "open_source", ["evaluation"], 11144, 1101, 82, "2026-06-04T02:58:12Z"),
  g("evaluation-tools-benchmarks", "software:opencompass", "software", "OpenCompass", "LLM evaluation platform.", "https://github.com/open-compass/opencompass", "Apache-2.0", "open_source", ["evaluation"], 7075, 787, 464, "2026-06-05T08:02:56Z"),
  g("evaluation-tools-benchmarks", "benchmark:swe-bench", "benchmark", "SWE-bench", "Software engineering benchmark.", "https://github.com/SWE-bench/SWE-bench", "MIT", "source_available", ["agentic-coding"], 5120, 886, 107, "2026-04-01T05:16:30Z"),
  g("evaluation-tools-benchmarks", "benchmark:mteb", "benchmark", "MTEB", "Massive Text Embedding Benchmark.", "https://github.com/embeddings-benchmark/mteb", "Apache-2.0", "open_source", ["embeddings"], 3295, 621, 278, "2026-06-09T23:03:23Z"),
  g("evaluation-tools-benchmarks", "software:helm", "software", "HELM", "Holistic Evaluation of Language Models.", "https://github.com/stanford-crfm/helm", "Apache-2.0", "open_source", ["evaluation"], 2819, 398, 77, "2026-06-05T20:23:35Z"),
  g("evaluation-tools-benchmarks", "software:lighteval", "software", "Lighteval", "Hugging Face LLM evaluation toolkit.", "https://github.com/huggingface/lighteval", "MIT", "open_source", ["evaluation"], 2439, 480, 318, "2026-06-09T07:28:54Z")
];

function g(
  layer: string,
  id: string,
  kind: Kind,
  name: string,
  description: string,
  url: string,
  license: string,
  openness: Candidate["openness"],
  tasks: string[],
  stars: number,
  forks: number,
  openIssues: number,
  pushedAt: string
): Candidate {
  return {
    layer,
    id,
    kind,
    name,
    description,
    source: "github",
    url,
    license,
    openness,
    tasks,
    popularity: stars,
    popularityName: "GitHub stars",
    popularityUnit: "stars",
    secondaryPopularity: forks,
    secondaryName: "GitHub forks",
    secondaryUnit: "forks",
    openIssues,
    pushedAt
  };
}

function hf(
  layer: string,
  id: string,
  name: string,
  description: string,
  url: string,
  license: string,
  tasks: string[],
  downloads: number,
  likes: number
): Candidate {
  return {
    layer,
    id,
    kind: "model",
    name,
    description,
    source: "huggingface",
    url,
    license,
    openness: "open_weights",
    tasks,
    popularity: downloads,
    popularityName: "Hugging Face downloads",
    popularityUnit: "downloads",
    secondaryPopularity: likes,
    secondaryName: "Hugging Face likes",
    secondaryUnit: "likes"
  };
}

function official(
  layer: string,
  id: string,
  name: string,
  description: string,
  url: string,
  publisher: string,
  tasks: string[],
  coveragePriority: number,
  metadata: Record<string, unknown>
): Candidate {
  const hardware = metadata.hardware as { memoryGb?: unknown } | undefined;
  const extraMetrics: Candidate["extraMetrics"] = [];
  if (typeof hardware?.memoryGb === "number") {
    extraMetrics.push({
      id: "metric:memory_gb",
      category: "performance",
      name: "Accelerator memory",
      value: hardware.memoryGb,
      unit: "GB",
      higherIsBetter: true
    });
  }
  return {
    layer,
    id,
    kind: "infrastructure",
    name,
    description,
    source: "official",
    url,
    publisher,
    openness: "proprietary",
    tasks,
    popularity: coveragePriority,
    popularityName: "Coverage priority",
    popularityUnit: "rank_score",
    metadata,
    extraMetrics
  };
}

function sandbox(
  id: string,
  name: string,
  description: string,
  url: string,
  license: string,
  openness: Candidate["openness"],
  tasks: string[],
  stars: number,
  forks: number,
  openIssues: number,
  pushedAt: string,
  isolationType: string
): Candidate {
  return {
    ...g("agent-sandboxing", id, "software", name, description, url, license, openness, tasks, stars, forks, openIssues, pushedAt),
    metadata: {
      layerCoverage: "agent-sandboxing",
      sandbox: {
        isolationType,
        controls: ["filesystem isolation", "process isolation", "network policy configurable"],
        primaryUse: "AI agent and tool execution isolation"
      },
      costTier: "free_or_self_hosted"
    }
  };
}

function readExistingNodeIds() {
  const nodeRoot = path.join(process.cwd(), "data", "nodes");
  const ids = new Set<string>();
  for (const directory of readdirSync(nodeRoot)) {
    const dirPath = path.join(nodeRoot, directory);
    for (const file of readdirSync(dirPath)) {
      if (!file.endsWith(".json") || file === "popular-layer-coverage.json") {
        continue;
      }
      const parsed = JSON.parse(readFileSync(path.join(dirPath, file), "utf8")) as { id?: string }[] | { id?: string };
      const items = Array.isArray(parsed) ? parsed : [parsed];
      for (const item of items) {
        if (item.id) {
          ids.add(item.id);
        }
      }
    }
  }
  return ids;
}

function sourceId(candidate: Candidate) {
  if (candidate.source === "official") {
    const url = new URL(candidate.url);
    const normalized = `${url.hostname}${url.pathname}`.replace(/\/$/, "").toLowerCase();
    return `official:${normalized}`;
  }
  const normalized = candidate.url.replace("https://github.com/", "").replace("https://huggingface.co/", "").toLowerCase();
  return candidate.source === "github" ? `github:${normalized}` : `hf-model:${normalized}`;
}

function nodeDirectory(kind: Kind) {
  if (kind === "application") return "applications";
  if (kind === "model") return "models";
  if (kind === "software") return "software";
  if (kind === "infrastructure") return "infrastructure";
  return "benchmarks";
}

function osiApproved(license: string) {
  return ["MIT", "Apache-2.0", "BSD-3-Clause", "GPL-3.0", "AGPL-3.0", "mit", "apache-2.0", "bsd-3-clause"].includes(license);
}

function buildNode(candidate: Candidate) {
  const isGithub = candidate.source === "github";
  const isHuggingFace = candidate.source === "huggingface";
  const source = {
    id: sourceId(candidate),
    type: isGithub ? "github_repo" : isHuggingFace ? "huggingface_model_card" : "official_website",
    title: `${candidate.name} ${isGithub ? "GitHub repository" : isHuggingFace ? "model card" : "official documentation"}`,
    url: candidate.url,
    note: "source-needed quote collection pending: this disclosed metadata source requires a direct quote from the linked URL.",
    publisher: candidate.publisher ?? (isGithub ? "GitHub" : isHuggingFace ? "Hugging Face" : "Official publisher"),
    retrieved_date: retrievedAt,
    collectionMethod: isGithub ? "github_api" : isHuggingFace ? "huggingface_api" : "static_document",
    confidence: "high"
  };

  const metrics: Record<string, unknown>[] = [
    {
      id: isGithub ? "metric:github_stars" : isHuggingFace ? "metric:hf_downloads" : "metric:coverage_priority",
      category: "adoption",
      name: candidate.popularityName,
      value: candidate.popularity,
      unit: candidate.popularityUnit,
      measuredAt: retrievedAt,
      higherIsBetter: true,
      sourceIds: [source.id]
    }
  ];

  for (const metric of candidate.extraMetrics ?? []) {
    metrics.push({
      measuredAt: retrievedAt,
      sourceIds: [source.id],
      ...metric
    });
  }

  if (candidate.secondaryPopularity !== undefined && candidate.secondaryName && candidate.secondaryUnit) {
    metrics.push({
      id: isGithub ? "metric:github_forks" : "metric:hf_likes",
      category: "adoption",
      name: candidate.secondaryName,
      value: candidate.secondaryPopularity,
      unit: candidate.secondaryUnit,
      measuredAt: retrievedAt,
      higherIsBetter: true,
      sourceIds: [source.id]
    });
  }

  if (candidate.openIssues !== undefined) {
    metrics.push({
      id: "metric:open_issues",
      category: "maintenance",
      name: "Open GitHub issues",
      value: candidate.openIssues,
      unit: "issues",
      measuredAt: retrievedAt,
      higherIsBetter: false,
      sourceIds: [source.id]
    });
  }

  if (candidate.pushedAt) {
    metrics.push({
      id: "metric:pushed_at",
      category: "velocity",
      name: "Last pushed at",
      value: candidate.pushedAt,
      unit: "iso8601 timestamp",
      measuredAt: retrievedAt,
      higherIsBetter: true,
      sourceIds: [source.id]
    });
  }

  const license = candidate.license
    ? {
        expression: candidate.license,
        openness: candidate.openness,
        osiApproved: osiApproved(candidate.license),
        sourceIds: [source.id]
      }
    : undefined;
  const evidence = isHuggingFace
    ? [
        {
          kind: "model_card",
          status: "present",
          checkedAt: retrievedAt,
          sourceIds: [source.id],
          notes: "Model-card metadata is present; deeper AI SBOM evidence is not yet assessed."
        }
      ]
    : isGithub
      ? [
          {
            kind: "openssf_scorecard",
            status: "unknown",
            checkedAt: retrievedAt,
            sourceIds: [source.id],
            notes: "OpenSSF Scorecard evidence has not yet been ingested."
          }
        ]
      : [];

  return {
    id: candidate.id,
    kind: candidate.kind,
    name: candidate.name,
    description: candidate.description,
    canonicalUrl: candidate.url,
    repositoryUrl: isGithub ? candidate.url : undefined,
    license,
    openness: candidate.openness,
    tasks: candidate.tasks,
    tags: [candidate.layer, "top-10-coverage"],
    sources: [source],
    metrics,
    evidence,
    updatePolicy: {
      refreshMethod: isGithub ? "github_api" : isHuggingFace ? "huggingface_api" : "static_document",
      cadence: "monthly",
      deterministic: true,
      instructions:
        isGithub
          ? "Refresh repository popularity, maintenance, and license metadata through GitHub API."
          : isHuggingFace
            ? "Refresh model popularity, license, and card metadata through Hugging Face API."
            : "Refresh hardware specifications from official vendor documentation."
    },
    metadata: {
      layerCoverage: candidate.layer,
      costTier: candidate.kind === "model" ? "local_or_self_hosted" : "free_or_self_hosted",
      popularitySnapshot: {
        measuredAt: retrievedAt,
        metric: candidate.popularityName,
        value: candidate.popularity
      },
      ...candidate.metadata
    }
  };
}

const existingIds = readExistingNodeIds();
const generatedIds = new Set<string>();
const generatedByDirectory = new Map<string, unknown[]>();

for (const candidate of candidates) {
  if (existingIds.has(candidate.id) || generatedIds.has(candidate.id)) {
    continue;
  }
  generatedIds.add(candidate.id);
  const directory = nodeDirectory(candidate.kind);
  generatedByDirectory.set(directory, [...(generatedByDirectory.get(directory) ?? []), buildNode(candidate)]);
}

for (const [directory, nodes] of generatedByDirectory) {
  const outputPath = path.join(process.cwd(), "data", "nodes", directory, "popular-layer-coverage.json");
  mkdirSync(path.dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, `${JSON.stringify(nodes, null, 2)}\n`);
  console.log(`wrote ${outputPath}`);
}

const layerPayload = {
  generatedAt: `${retrievedAt}T00:00:00.000Z`,
  sourcePolicy:
    "Popularity snapshots are deterministic API reads from GitHub repositories or Hugging Face model metadata when available. Hardware coverage uses official vendor documentation and a curated coverage-priority rank because cross-vendor popularity metrics are not comparable.",
  layers: layers.map((layer) => ({
    ...layer,
    retrievedAt,
    entries: candidates
      .filter((candidate) => candidate.layer === layer.id)
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 10)
      .map((candidate, index) => ({
        rank: index + 1,
        nodeId: candidate.id,
        kind: candidate.kind,
        name: candidate.name,
        popularityMetric: {
          name: candidate.popularityName,
          value: candidate.popularity,
          unit: candidate.popularityUnit,
          measuredAt: retrievedAt,
          sourceUrl: candidate.url
        },
        sourceUrl: candidate.url,
        notes:
          candidate.source === "official"
            ? "Curated from official hardware/specification documentation; rank is coverage priority, not market share."
            : candidate.source === "github"
            ? "Ranked by GitHub stars within the selected layer candidate set."
            : "Ranked by Hugging Face downloads within the selected layer candidate set."
      }))
  }))
};

const coveragePath = path.join(process.cwd(), "data", "research", "stack-layers.json");
mkdirSync(path.dirname(coveragePath), { recursive: true });
writeFileSync(coveragePath, `${JSON.stringify(layerPayload, null, 2)}\n`);
console.log(`wrote ${coveragePath}`);
