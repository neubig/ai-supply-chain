# AI Supply-Chain Risk Analysis

This repository treats an AI application as a graph of components, evidence, and claims. The risk model is designed to answer practical selection questions rather than produce a single universal score.

## Source Frameworks

The initial risk dimensions are grounded in these primary sources:

- NIST SP 800-218 Secure Software Development Framework: https://csrc.nist.gov/pubs/sp/800/218/final
- CISA SBOM guidance and 2025 minimum elements: https://www.cisa.gov/resources-tools/resources/2025-minimum-elements-software-bill-materials-sbom
- CISA Software Bill of Materials for AI minimum elements: https://www.cisa.gov/resources-tools/resources/software-bill-materials-ai-minimum-elements
- SLSA supply-chain integrity framework: https://slsa.dev/
- OpenSSF Scorecard: https://scorecard.dev/
- NIST AI Risk Management Framework: https://www.nist.gov/itl/ai-risk-management-framework
- NIST AI RMF Generative AI Profile: https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence
- OWASP Top 10 for LLM Applications: https://owasp.org/www-project-top-10-for-large-language-model-applications/

## Risk Dimensions

| Dimension | Why It Matters | Graph Fields |
| --- | --- | --- |
| Component inventory | SBOM-style visibility is the basis for downstream risk questions. | `nodes`, `edges`, `sources`, `evidence.kind=sbom` |
| AI component inventory | AI stacks need model, dataset, benchmark, and inference-service inventory beyond traditional package SBOMs. | `kind=model`, `kind=dataset`, `kind=benchmark`, `trained_on`, `evaluated_on` |
| Provenance confidence | Deterministic, source-backed facts should be separable from web-search or manual assertions. | `SourceRecord.collectionMethod`, `SourceRecord.confidence`, `updatePolicy.deterministic` |
| Build and artifact integrity | SLSA-style provenance and tamper resistance affect whether an artifact can be trusted. | `evidence.kind=slsa`, `evidence.status`, `evidence.score` |
| Open-source security posture | OpenSSF Scorecard-style signals help assess dependency and maintainer hygiene. | `evidence.kind=openssf_scorecard`, `security` metrics |
| License and usage restrictions | Copyleft, source-available, OpenRAIL, non-commercial, or custom licenses can block deployments. | `license.expression`, `license.osiApproved`, `openness`, `licensed_as` |
| Training-data opacity | Unknown or undisclosed data creates provenance, IP, privacy, and poisoning risk. | `trained_on`, dataset `openness`, dataset tags such as `undisclosed` |
| Evaluation quality | Benchmark scores should be source-backed, task-specific, and distinguishable from placeholders. | `Metric.category=benchmark`, `benchmarkId`, `evaluated_on` |
| Maintenance velocity | Stale components can increase vulnerability and ecosystem abandonment risk. | `Metric.category=velocity`, `metric:pushed_at`, `open_issues` |
| Concentration risk | A stack can be fragile if it depends heavily on one maintainer, host, registry, or vendor. | `developed_by`, `hosted_by`, organization and infrastructure nodes |
| Cost and operational fit | Local, self-hosted, and hosted components have different cost and deployment tradeoffs. | `Metric.category=cost`, `metadata.costTier`, ranking `costScore` |
| Hardware fit | Model quality and openness do not matter if the stack cannot run on available accelerators or local devices. | `kind=infrastructure`, `metadata.hardware`, `runs_on`, `requires`, `optimized_for`, `supports_hardware` |
| Agent execution isolation | Agentic applications can execute code, browse files, or call tools, so sandbox strength affects blast radius and data exposure. | `metadata.sandbox`, `sandboxed_by`, `Metric.name=Isolation strength`, ranking `sandboxScore` |

## Answerable Questions

The graph and site should make these questions answerable:

- Which application stack is best for a task if zero, one, two, or any non-open components are allowed?
- Which dependencies have weak provenance, low source confidence, or non-deterministic refresh paths?
- Which stacks depend on unknown, undisclosed, or only partially disclosed training data?
- Which licenses or usage restrictions block commercial, SaaS, on-prem, or redistribution deployments?
- Which components are stale or show weaker current development velocity?
- Where does a stack concentrate around one maintainer, model host, registry, or source host?
- Which stacks are most exposed to AI-specific supply-chain threats such as model poisoning, dataset poisoning, untrusted model artifacts, or weak evaluation provenance?
- Which components have SBOM, AI SBOM, SLSA, Scorecard, signature, or vulnerability-scan evidence?
- Which stacks can run on a given local GPU, Apple Silicon workstation, cloud TPU, Trainium system, NVIDIA datacenter GPU, or AMD accelerator?
- Which models and applications have explicit hardware requirements versus broad compatibility claims?
- Which agentic applications have no sandbox edge, and which rely only on baseline containers versus microVM or VM-backed isolation?
- Which sandboxing alternatives are popular, actively maintained, and connected to the applications or runtimes they protect?

## Ranking Criteria

The site exposes adjustable criteria instead of one fixed risk score:

- `accuracy`: benchmark and task-quality score from sourced `score_0_100` metrics.
- `openness`: average openness class across stack components.
- `popularity`: log-scaled GitHub and Hugging Face adoption.
- `cost`: heuristic score favoring local/self-hosted and open components until explicit cost metrics are added.
- `velocity`: recency of GitHub activity when available.
- `provenance`: source confidence and deterministic collection-method coverage.
- `concentration`: penalty for repeated organization or infrastructure dependencies in one stack.
- `sandbox`: heuristic isolation-strength score from `sandboxed_by` edge metrics.

Weights are intentionally transparent so different users can tune the table to their deployment constraints.

## Completeness Criteria

`npm run report:completeness` applies graph-level checks that correspond to the issue-tracking plan:

- Application stacks should expose supported models/software, license/developer evidence, and sandbox edges for agentic or coding applications.
- Models should expose training data, training software, benchmark, host, developer, and license edges when disclosed.
- Software should be connected to dependencies, implemented interfaces, hardware compatibility, sandboxing, licenses, or incoming users.
- Datasets and benchmarks should be connected by training, evaluation, or benchmark-data edges.
- Hardware should be a first-class infrastructure layer with metadata and compatibility/requirement edges.
- Agent sandboxes should have metadata and links to applications, runtimes, or lower-level isolation systems.
