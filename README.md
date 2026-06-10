# AI supply chain

This repository models the AI supply chain as a typed TypeScript graph. Nodes are user-facing applications, models, datasets, software, benchmarks, organizations, infrastructure, and licenses. Edges represent supply-chain relationships such as `supports`, `depends_on`, `trained_on`, `trained_with`, `evaluated_on`, `developed_by`, `hosted_by`, and `licensed_as`.

The initial seed starts with user-facing applications because they are the surface where people choose AI capabilities. The graph is designed to support questions such as:

- What is the best consumer-facing option for a given task using only open-source components?
- Which single closed, source-available, or open-weight component unlocks the largest quality or usability gain?
- How much of an application path is backed by deterministic sources versus manual or web-search provenance?

## Layout

- `src/schema.ts`: Zod schema and inferred TypeScript types.
- `src/lib/`: graph loading, stack ranking, and visualization logic.
- `app/`: Next.js app deployable on Vercel.
- `data/nodes/`: JSON node records separated by node kind.
- `data/edges/`: JSON edge records separated by relationship family.
- `examples/`: Minimal examples for each schema object and edge category.
- `schema/`: Generated JSON Schema for the complete graph.
- `visualizations/`: Generated graph artifacts.
- `docs/risk-analysis.md`: Risk dimensions, source frameworks, and answerable questions.

## Quick start

```bash
npm install
npm run validate
npm run export:schema
npm run visualize
npm run dev
```

The committed visualization is `visualizations/ai-supply-chain.svg`, and the Vercel/Next app serves the same graph at `/`.

## Ranking downstream stacks

The site builds candidate downstream stacks from `application --supports--> model` edges, then follows reachable software, dataset, benchmark, infrastructure, and license dependencies. It scores each option by:

- `openness`: average component openness, with `open_source` weighted above `open_core`, `open_weights`, `source_available`, `unknown`, and `proprietary`.
- `benchmark`: sourced `score_0_100` benchmark metrics on the selected model, application, or linked evaluation edge.
- `popularity`: aggregate GitHub stars/forks and Hugging Face downloads/likes using a log-scaled weighted score.

The table can be sorted by these criteria and marks Pareto-optimal stacks where no other option is at least as good on openness, benchmark score, and popularity while being strictly better on one of them.

Top-10 layer coverage lives in `data/research/stack-layers.json` and is validated against graph node IDs. The current layers cover user-facing applications, foundation/chat models, coding models, image/media models, embedding/reranking models, speech/audio models, inference runtimes, training/fine-tuning frameworks, RAG/vector/data infrastructure, and evaluation tools/benchmarks.

## Health signals

The schema separates facts from scoring. Each node and edge can carry metrics for:

- `adoption`: GitHub stars, Hugging Face downloads, package downloads, user counts.
- `benchmark`: task scores such as MMLU, HumanEval, MTEB, WER, or image-generation benchmarks.
- `maintenance`: pushed-at timestamps, release cadence, open issue load, contributor activity.
- `openness`: OSI-approved license status, open-weight status, open-core status, and custom license risk.
- `security`: vulnerability disclosures, signed releases, SBOM availability, dependency hygiene.

Downstream analysis should compute paths from application nodes to task-relevant model, software, dataset, benchmark, and license nodes. The `openness` field enables queries with zero, one, or two non-open-source components allowed.

## Source policy

Prefer deterministic sources in this order:

1. Official APIs such as GitHub and Hugging Face.
2. Official repository files, model cards, dataset cards, benchmark pages, and papers.
3. Package registries or release metadata.
4. Manual review or web search only when deterministic sources are not available.

Every factual node or edge should include at least one `SourceRecord` with `retrieved_at`, `collection_method`, and `confidence`.
