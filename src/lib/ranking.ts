import {
  type Metric,
  type NodeKind,
  type OpenSourceClass,
  type SupplyChainEdge,
  type SupplyChainGraph,
  type SupplyChainNode
} from "../schema";

const opennessValue: Record<OpenSourceClass, number> = {
  open_source: 1,
  open_core: 0.78,
  open_weights: 0.66,
  source_available: 0.46,
  unknown: 0.25,
  proprietary: 0
};

const costValue: Record<OpenSourceClass, number> = {
  open_source: 92,
  open_weights: 84,
  source_available: 68,
  open_core: 58,
  unknown: 45,
  proprietary: 20
};

const confidenceValue = {
  high: 100,
  medium: 65,
  low: 30
} as const;

const stackComponentKinds = new Set<NodeKind>([
  "application",
  "model",
  "dataset",
  "software",
  "infrastructure",
  "license"
]);

type CandidateBuild = {
  application: SupplyChainNode;
  model: SupplyChainNode;
  componentIds: Set<string>;
  benchmarkIds: Set<string>;
  evidenceEdges: SupplyChainEdge[];
};

export type RankedStack = {
  id: string;
  applicationId: string;
  applicationName: string;
  modelId: string;
  modelName: string;
  tasks: string[];
  componentIds: string[];
  benchmarkIds: string[];
  componentNames: string[];
  opennessScore: number;
  benchmarkScore: number;
  popularityScore: number;
  costScore: number;
  velocityScore: number;
  provenanceScore: number;
  concentrationScore: number;
  overallScore: number;
  nonOpenComponents: number;
  githubStars: number;
  hfDownloads: number;
  paretoOptimal: boolean;
  benchmarkLabels: string[];
};

function outgoing(edges: SupplyChainEdge[], nodeId: string, kinds?: string[]) {
  return edges.filter((edge) => edge.source === nodeId && (!kinds || kinds.includes(edge.kind)));
}

function numericMetricValue(metric: Metric) {
  return typeof metric.value === "number" ? metric.value : 0;
}

function collectBenchmarkScore(nodes: SupplyChainNode[], edges: SupplyChainEdge[]) {
  const values = [
    ...nodes.flatMap((node) =>
      node.metrics.filter(
        (metric) => metric.category === "benchmark" && metric.unit === "score_0_100" && typeof metric.value === "number"
      )
    ),
    ...edges.flatMap((edge) =>
      edge.metrics.filter(
        (metric) => metric.category === "benchmark" && metric.unit === "score_0_100" && typeof metric.value === "number"
      )
    )
  ].map(numericMetricValue);

  if (values.length === 0) {
    return 0;
  }
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function popularity(nodes: SupplyChainNode[]) {
  let githubStars = 0;
  let githubForks = 0;
  let hfDownloads = 0;
  let hfLikes = 0;

  for (const node of nodes) {
    for (const metric of node.metrics) {
      if (metric.category !== "adoption" || typeof metric.value !== "number") {
        continue;
      }
      if (metric.name === "GitHub stars") {
        githubStars += metric.value;
      } else if (metric.name === "GitHub forks") {
        githubForks += metric.value;
      } else if (metric.name === "Hugging Face downloads") {
        hfDownloads += metric.value;
      } else if (metric.name === "Hugging Face likes") {
        hfLikes += metric.value;
      }
    }
  }

  const weightedPopularity = githubStars + githubForks * 0.25 + hfDownloads * 0.1 + hfLikes * 10;
  return {
    githubStars,
    hfDownloads,
    popularityScore: Math.min(100, Math.log10(weightedPopularity + 1) * 14)
  };
}

function collectCostScore(nodes: SupplyChainNode[]) {
  const values = nodes.map((node) => {
    const costTier = typeof node.metadata.costTier === "string" ? node.metadata.costTier : "";
    if (costTier.includes("free")) {
      return 96;
    }
    if (costTier.includes("local") || costTier.includes("self_hosted")) {
      return Math.max(82, costValue[node.openness]);
    }
    if (costTier.includes("commercial")) {
      return 45;
    }
    return costValue[node.openness];
  });
  return values.reduce((sum, value) => sum + value, 0) / Math.max(1, values.length);
}

function collectVelocityScore(nodes: SupplyChainNode[]) {
  const timestamps = nodes.flatMap((node) =>
    node.metrics
      .filter((metric) => metric.category === "velocity" || metric.name === "Last pushed at")
      .map((metric) => (typeof metric.value === "string" ? Date.parse(metric.value) : NaN))
      .filter((value) => Number.isFinite(value))
  );

  if (timestamps.length === 0) {
    return 50;
  }

  const now = Date.now();
  const scores = timestamps.map((timestamp) => {
    const days = (now - timestamp) / 86_400_000;
    if (days <= 7) return 100;
    if (days <= 30) return 85;
    if (days <= 90) return 70;
    if (days <= 180) return 55;
    if (days <= 365) return 35;
    return 15;
  });
  return scores.reduce((sum, value) => sum + value, 0) / scores.length;
}

function collectProvenanceScore(nodes: SupplyChainNode[], edges: SupplyChainEdge[]) {
  const sources = [...nodes.flatMap((node) => node.sources), ...edges.flatMap((edge) => edge.sources)];
  if (sources.length === 0) {
    return 0;
  }
  const score = sources.reduce((sum, source) => {
    const deterministicPenalty = ["web_search", "manual_review"].includes(source.collectionMethod) ? 20 : 0;
    return sum + Math.max(0, confidenceValue[source.confidence] - deterministicPenalty);
  }, 0);
  return score / sources.length;
}

function collectConcentrationScore(edges: SupplyChainEdge[]) {
  const targets = edges
    .filter((edge) => edge.kind === "developed_by" || edge.kind === "hosted_by")
    .map((edge) => edge.target);
  if (targets.length <= 1) {
    return 100;
  }
  const counts = new Map<string, number>();
  for (const target of targets) {
    counts.set(target, (counts.get(target) ?? 0) + 1);
  }
  const largestShare = Math.max(...counts.values()) / targets.length;
  return Math.max(0, 100 - Math.max(0, largestShare - 0.34) * 140);
}

function addNode(
  graph: SupplyChainGraph,
  componentIds: Set<string>,
  nodeId: string,
  includeKinds = stackComponentKinds
) {
  const node = graph.nodes.find((candidate) => candidate.id === nodeId);
  if (node && includeKinds.has(node.kind)) {
    componentIds.add(node.id);
  }
}

function buildCandidate(graph: SupplyChainGraph, application: SupplyChainNode, model: SupplyChainNode): CandidateBuild {
  const componentIds = new Set<string>([application.id, model.id]);
  const benchmarkIds = new Set<string>();
  const evidenceEdges: SupplyChainEdge[] = [];

  const includeEdge = (edge: SupplyChainEdge) => {
    evidenceEdges.push(edge);
    if (edge.kind === "evaluated_on") {
      benchmarkIds.add(edge.target);
    } else {
      addNode(graph, componentIds, edge.target);
    }
  };

  for (const edge of outgoing(graph.edges, application.id, [
    "depends_on",
    "supports",
    "implements",
    "hosted_by",
    "licensed_as",
    "evaluated_on",
    "developed_by"
  ])) {
    if (edge.kind === "supports" && edge.target.startsWith("model:") && edge.target !== model.id) {
      continue;
    }
    includeEdge(edge);
  }

  for (const edge of outgoing(graph.edges, model.id, [
    "trained_on",
    "trained_with",
    "evaluated_on",
    "hosted_by",
    "licensed_as",
    "derived_from",
    "developed_by"
  ])) {
    includeEdge(edge);
  }

  for (const softwareId of [...componentIds].filter((id) => id.startsWith("software:"))) {
    for (const edge of outgoing(graph.edges, softwareId, ["depends_on", "implements", "licensed_as", "hosted_by", "developed_by"])) {
      includeEdge(edge);
    }
  }

  for (const benchmarkId of [...benchmarkIds]) {
    for (const edge of outgoing(graph.edges, benchmarkId, ["uses_data"])) {
      includeEdge(edge);
    }
  }

  return { application, model, componentIds, benchmarkIds, evidenceEdges };
}

function markPareto(stacks: RankedStack[]) {
  return stacks.map((stack) => {
    const dominated = stacks.some((other) => {
      if (other.id === stack.id) {
        return false;
      }
      const atLeastAsGood =
        other.opennessScore >= stack.opennessScore &&
        other.benchmarkScore >= stack.benchmarkScore &&
        other.popularityScore >= stack.popularityScore;
      const strictlyBetter =
        other.opennessScore > stack.opennessScore ||
        other.benchmarkScore > stack.benchmarkScore ||
        other.popularityScore > stack.popularityScore;
      return atLeastAsGood && strictlyBetter;
    });
    return { ...stack, paretoOptimal: !dominated };
  });
}

export function buildRankedStacks(graph: SupplyChainGraph): RankedStack[] {
  const nodeById = new Map(graph.nodes.map((node) => [node.id, node]));
  const applications = graph.nodes.filter((node) => node.kind === "application");
  const candidates: CandidateBuild[] = [];

  for (const application of applications) {
    const supportedModels = outgoing(graph.edges, application.id, ["supports"])
      .map((edge) => nodeById.get(edge.target))
      .filter((node): node is SupplyChainNode => node?.kind === "model");
    for (const model of supportedModels) {
      candidates.push(buildCandidate(graph, application, model));
    }
  }

  const ranked = candidates.map((candidate) => {
    const components = [...candidate.componentIds]
      .map((nodeId) => nodeById.get(nodeId))
      .filter((node): node is SupplyChainNode => Boolean(node));
    const benchmarks = [...candidate.benchmarkIds]
      .map((nodeId) => nodeById.get(nodeId))
      .filter((node): node is SupplyChainNode => Boolean(node));
    const opennessScore =
      components.reduce((sum, node) => sum + opennessValue[node.openness], 0) / Math.max(1, components.length);
    const benchmarkScore = collectBenchmarkScore([...components, ...benchmarks], candidate.evidenceEdges);
    const popularityValues = popularity(components);
    const costScore = collectCostScore(components);
    const velocityScore = collectVelocityScore(components);
    const provenanceScore = collectProvenanceScore([...components, ...benchmarks], candidate.evidenceEdges);
    const concentrationScore = collectConcentrationScore(candidate.evidenceEdges);
    const overallScore =
      opennessScore * 100 * 0.24 +
      benchmarkScore * 0.24 +
      popularityValues.popularityScore * 0.18 +
      costScore * 0.1 +
      velocityScore * 0.1 +
      provenanceScore * 0.09 +
      concentrationScore * 0.05;
    const tasks = [...new Set([...candidate.application.tasks, ...candidate.model.tasks])].sort();

    return {
      id: `${candidate.application.id}--${candidate.model.id}`,
      applicationId: candidate.application.id,
      applicationName: candidate.application.name,
      modelId: candidate.model.id,
      modelName: candidate.model.name,
      tasks,
      componentIds: [...candidate.componentIds].sort(),
      benchmarkIds: [...candidate.benchmarkIds].sort(),
      componentNames: components.map((node) => node.name).sort((a, b) => a.localeCompare(b)),
      opennessScore: Math.round(opennessScore * 1000) / 10,
      benchmarkScore: Math.round(benchmarkScore * 10) / 10,
      popularityScore: Math.round(popularityValues.popularityScore * 10) / 10,
      costScore: Math.round(costScore * 10) / 10,
      velocityScore: Math.round(velocityScore * 10) / 10,
      provenanceScore: Math.round(provenanceScore * 10) / 10,
      concentrationScore: Math.round(concentrationScore * 10) / 10,
      overallScore: Math.round(overallScore * 10) / 10,
      nonOpenComponents: components.filter((node) => node.openness !== "open_source").length,
      githubStars: popularityValues.githubStars,
      hfDownloads: popularityValues.hfDownloads,
      paretoOptimal: false,
      benchmarkLabels: benchmarks.map((node) => node.name).sort((a, b) => a.localeCompare(b))
    };
  });

  return markPareto(ranked).sort((a, b) => b.overallScore - a.overallScore);
}
