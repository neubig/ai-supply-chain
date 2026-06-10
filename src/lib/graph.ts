import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";

import {
  type NodeKind,
  type SupplyChainEdge,
  type SupplyChainGraph,
  type SupplyChainNode,
  SupplyChainEdgeSchema,
  SupplyChainGraphSchema,
  SupplyChainNodeSchema,
  schemaVersion
} from "../schema";

export const nodeKindDirs: Record<string, NodeKind> = {
  applications: "application",
  models: "model",
  datasets: "dataset",
  software: "software",
  benchmarks: "benchmark",
  organizations: "organization",
  licenses: "license",
  infrastructure: "infrastructure"
};

function readJsonObjects(filePath: string): unknown[] {
  const parsed = JSON.parse(readFileSync(filePath, "utf8")) as unknown;
  if (Array.isArray(parsed)) {
    return parsed;
  }
  if (parsed && typeof parsed === "object") {
    return [parsed];
  }
  throw new Error(`${filePath} must contain a JSON object or an array of JSON objects`);
}

function jsonFiles(directory: string): string[] {
  try {
    return readdirSync(directory)
      .filter((entry) => entry.endsWith(".json"))
      .sort()
      .map((entry) => path.join(directory, entry));
  } catch (error: unknown) {
    if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
      return [];
    }
    throw error;
  }
}

export function loadGraph(dataDir = path.join(process.cwd(), "data")): SupplyChainGraph {
  const nodes: SupplyChainNode[] = [];
  const edges: SupplyChainEdge[] = [];

  for (const [directoryName, expectedKind] of Object.entries(nodeKindDirs)) {
    const directory = path.join(dataDir, "nodes", directoryName);
    for (const filePath of jsonFiles(directory)) {
      for (const item of readJsonObjects(filePath)) {
        const node = SupplyChainNodeSchema.parse(item);
        if (node.kind !== expectedKind) {
          throw new Error(`${filePath}: expected node kind '${expectedKind}', got '${node.kind}'`);
        }
        nodes.push(node);
      }
    }
  }

  for (const filePath of jsonFiles(path.join(dataDir, "edges"))) {
    for (const item of readJsonObjects(filePath)) {
      edges.push(SupplyChainEdgeSchema.parse(item));
    }
  }

  return SupplyChainGraphSchema.parse({
    schemaVersion,
    generatedAt: new Date().toISOString(),
    nodes,
    edges
  });
}

export function loadExampleGraph(examplePath = path.join(process.cwd(), "examples", "graph.example.json")) {
  return SupplyChainGraphSchema.parse(JSON.parse(readFileSync(examplePath, "utf8")) as unknown);
}

export function summarizeGraph(graph: SupplyChainGraph) {
  const nodeCounts = graph.nodes.reduce<Record<NodeKind, number>>((counts, node) => {
    counts[node.kind] = (counts[node.kind] ?? 0) + 1;
    return counts;
  }, {} as Record<NodeKind, number>);

  return {
    nodeCount: graph.nodes.length,
    edgeCount: graph.edges.length,
    nodeCounts
  };
}
