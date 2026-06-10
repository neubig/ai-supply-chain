import { type EdgeKind, type NodeKind, type SupplyChainEdge, type SupplyChainGraph, type SupplyChainNode, nodeKinds } from "../schema";
import type { StackLayerCoverage } from "./layers";

export type CompletenessSeverity = "error" | "warning" | "info";

export type CompletenessFinding = {
  severity: CompletenessSeverity;
  nodeId?: string;
  edgeId?: string;
  layerId?: string;
  criterion: string;
  message: string;
};

export type LayerCompleteness = {
  id: string;
  name: string;
  entries: number;
  entriesWithSources: number;
  entriesWithUpdatePolicy: number;
  entriesWithAnyEdge: number;
};

export type GraphCompletenessReport = {
  generatedAt: string;
  criteria: string[];
  summary: {
    nodes: number;
    edges: number;
    nodeCounts: Record<NodeKind, number>;
    findings: Record<CompletenessSeverity, number>;
  };
  layers: LayerCompleteness[];
  findings: CompletenessFinding[];
};

const criteria = [
  "Every node should have at least one source record and an update policy.",
  "Application nodes should link to supported models or software and to license/developer evidence where available.",
  "Model nodes should link to training data, training software, evaluation benchmarks, hosting, developer, and license evidence when disclosed.",
  "Software nodes should link to licenses, developers, dependencies, implemented interfaces, hardware compatibility, or sandboxing relationships as applicable.",
  "Dataset and benchmark nodes should be connected by training, evaluation, or benchmark-data edges.",
  "Hardware infrastructure nodes should carry hardware metadata and be connected by runs_on, requires, optimized_for, or supports_hardware edges.",
  "Agent-sandboxing nodes should carry sandbox metadata and be connected by sandboxed_by, depends_on, or supports edges.",
  "Each top-10 layer entry should resolve to a graph node with source and refresh metadata."
];

function groupOutgoing(edges: SupplyChainEdge[]) {
  const bySource = new Map<string, SupplyChainEdge[]>();
  const byTarget = new Map<string, SupplyChainEdge[]>();
  for (const edge of edges) {
    bySource.set(edge.source, [...(bySource.get(edge.source) ?? []), edge]);
    byTarget.set(edge.target, [...(byTarget.get(edge.target) ?? []), edge]);
  }
  return { bySource, byTarget };
}

function hasKind(edges: SupplyChainEdge[], kinds: EdgeKind[]) {
  return edges.some((edge) => kinds.includes(edge.kind));
}

function addFinding(findings: CompletenessFinding[], finding: CompletenessFinding) {
  findings.push(finding);
}

function nodeCounts(nodes: SupplyChainNode[]) {
  return nodes.reduce<Record<NodeKind, number>>((counts, node) => {
    counts[node.kind] = (counts[node.kind] ?? 0) + 1;
    return counts;
  }, Object.fromEntries(nodeKinds.map((kind) => [kind, 0])) as Record<NodeKind, number>);
}

function checkCommonNode(findings: CompletenessFinding[], node: SupplyChainNode) {
  if (node.sources.length === 0) {
    addFinding(findings, {
      severity: "error",
      nodeId: node.id,
      criterion: "node-source",
      message: "Node has no source records."
    });
  }
  if (!node.updatePolicy) {
    addFinding(findings, {
      severity: "warning",
      nodeId: node.id,
      criterion: "node-update-policy",
      message: "Node has no update policy."
    });
  }
}

function checkNodeRelationships(
  findings: CompletenessFinding[],
  node: SupplyChainNode,
  outgoing: SupplyChainEdge[],
  incoming: SupplyChainEdge[]
) {
  if (node.metadata.sourceNeeded === true) {
    return;
  }

  if (node.kind === "application") {
    if (!hasKind(outgoing, ["supports", "depends_on"])) {
      addFinding(findings, {
        severity: "warning",
        nodeId: node.id,
        criterion: "application-stack",
        message: "Application does not link to supported models or dependent software."
      });
    }
    if (!hasKind(outgoing, ["licensed_as"])) {
      addFinding(findings, {
        severity: "warning",
        nodeId: node.id,
        criterion: "application-license",
        message: "Application has no explicit license edge."
      });
    }
    if (!hasKind(outgoing, ["sandboxed_by"]) && node.tasks.some((task) => task.includes("agent") || task.includes("coding"))) {
      addFinding(findings, {
        severity: "info",
        nodeId: node.id,
        criterion: "application-sandbox",
        message: "Agentic or coding application has no sandbox edge yet."
      });
    }
  }

  if (node.kind === "model") {
    for (const [kind, message] of [
      ["trained_on", "Model has no training-data edge."],
      ["trained_with", "Model has no training-software edge."],
      ["evaluated_on", "Model has no benchmark edge."]
    ] as const) {
      if (!hasKind(outgoing, [kind])) {
        addFinding(findings, { severity: "warning", nodeId: node.id, criterion: `model-${kind}`, message });
      }
    }
    if (!hasKind(outgoing, ["hosted_by"])) {
      addFinding(findings, {
        severity: "info",
        nodeId: node.id,
        criterion: "model-hosting",
        message: "Model has no hosting edge."
      });
    }
  }

  if (node.kind === "software") {
    if (!hasKind(outgoing, ["licensed_as"]) && node.license) {
      addFinding(findings, {
        severity: "info",
        nodeId: node.id,
        criterion: "software-license-edge",
        message: "Software has license metadata but no license edge."
      });
    }
    if (
      !hasKind(outgoing, [
        "depends_on",
        "implements",
        "supports",
        "supports_hardware",
        "optimized_for",
        "sandboxed_by",
        "runs_on",
        "requires"
      ]) &&
      incoming.length === 0
    ) {
      addFinding(findings, {
        severity: "warning",
        nodeId: node.id,
        criterion: "software-connectivity",
        message: "Software node is not connected to dependencies, interfaces, hardware, sandboxing, or incoming users."
      });
    }
    if (node.metadata.layerCoverage === "agent-sandboxing") {
      if (!node.metadata.sandbox) {
        addFinding(findings, {
          severity: "warning",
          nodeId: node.id,
          criterion: "sandbox-metadata",
          message: "Agent-sandboxing node has no sandbox metadata."
        });
      }
      if (!hasKind(outgoing, ["sandboxed_by", "depends_on", "supports"]) && !hasKind(incoming, ["sandboxed_by", "supports", "depends_on"])) {
        addFinding(findings, {
          severity: "warning",
          nodeId: node.id,
          criterion: "sandbox-connectivity",
          message: "Agent-sandboxing node has no sandbox or runtime relationship edges."
        });
      }
    }
  }

  if (node.kind === "dataset" && !hasKind(incoming, ["trained_on", "uses_data"])) {
    addFinding(findings, {
      severity: "warning",
      nodeId: node.id,
      criterion: "dataset-connectivity",
      message: "Dataset is not linked from model training or benchmark/application data use."
    });
  }

  if (node.kind === "benchmark") {
    if (!hasKind(incoming, ["evaluated_on", "implements"])) {
      addFinding(findings, {
        severity: "warning",
        nodeId: node.id,
        criterion: "benchmark-connectivity",
        message: "Benchmark is not linked from any evaluated component or implementation."
      });
    }
    if (!hasKind(outgoing, ["uses_data"])) {
      addFinding(findings, {
        severity: "info",
        nodeId: node.id,
        criterion: "benchmark-data",
        message: "Benchmark has no dataset edge."
      });
    }
  }

  if (node.kind === "infrastructure") {
    const isHardware = node.metadata.layerCoverage === "hardware" || node.tags.includes("hardware");
    if (isHardware && !node.metadata.hardware) {
      addFinding(findings, {
        severity: "warning",
        nodeId: node.id,
        criterion: "hardware-metadata",
        message: "Hardware infrastructure node has no hardware metadata."
      });
    }
    if (isHardware && !hasKind(incoming, ["runs_on", "requires", "optimized_for", "supports_hardware", "trained_with"])) {
      addFinding(findings, {
        severity: "warning",
        nodeId: node.id,
        criterion: "hardware-connectivity",
        message: "Hardware infrastructure node is not referenced by compatibility or requirement edges."
      });
    }
  }
}

export function buildGraphCompletenessReport(
  graph: SupplyChainGraph,
  coverage: StackLayerCoverage,
  generatedAt = new Date().toISOString()
): GraphCompletenessReport {
  const findings: CompletenessFinding[] = [];
  const nodesById = new Map(graph.nodes.map((node) => [node.id, node]));
  const { bySource, byTarget } = groupOutgoing(graph.edges);

  for (const node of graph.nodes) {
    checkCommonNode(findings, node);
    checkNodeRelationships(findings, node, bySource.get(node.id) ?? [], byTarget.get(node.id) ?? []);
  }

  const layers = coverage.layers.map<LayerCompleteness>((layer) => {
    let entriesWithSources = 0;
    let entriesWithUpdatePolicy = 0;
    let entriesWithAnyEdge = 0;

    for (const entry of layer.entries) {
      const node = nodesById.get(entry.nodeId);
      if (!node) {
        addFinding(findings, {
          severity: "error",
          layerId: layer.id,
          criterion: "layer-reference",
          message: `Layer entry references missing node ${entry.nodeId}.`
        });
        continue;
      }
      if (node.sources.length > 0) entriesWithSources += 1;
      if (node.updatePolicy) entriesWithUpdatePolicy += 1;
      if ((bySource.get(node.id)?.length ?? 0) + (byTarget.get(node.id)?.length ?? 0) > 0) entriesWithAnyEdge += 1;
    }

    return {
      id: layer.id,
      name: layer.name,
      entries: layer.entries.length,
      entriesWithSources,
      entriesWithUpdatePolicy,
      entriesWithAnyEdge
    };
  });

  const findingCounts = findings.reduce<Record<CompletenessSeverity, number>>(
    (counts, finding) => {
      counts[finding.severity] += 1;
      return counts;
    },
    { error: 0, warning: 0, info: 0 }
  );

  return {
    generatedAt,
    criteria,
    summary: {
      nodes: graph.nodes.length,
      edges: graph.edges.length,
      nodeCounts: nodeCounts(graph.nodes),
      findings: findingCounts
    },
    layers,
    findings
  };
}
