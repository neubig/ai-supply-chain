import { readFileSync } from "node:fs";
import path from "node:path";

import { z } from "zod";

import { type SupplyChainGraph, nodeKinds } from "../schema";

const LayerEntrySchema = z
  .object({
    rank: z.number().int().min(1).max(10),
    nodeId: z.string().regex(/^[a-z]+:[a-z0-9][a-z0-9_.-]*$/),
    kind: z.enum(nodeKinds),
    name: z.string().min(1),
    popularityMetric: z
      .object({
        name: z.string().min(1),
        value: z.number().nonnegative(),
        unit: z.string().min(1),
        measuredAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
        sourceUrl: z.string().url()
      })
      .strict(),
    sourceUrl: z.string().url(),
    notes: z.string().min(1).optional()
  })
  .strict();

const StackLayerSchema = z
  .object({
    id: z.string().regex(/^[a-z0-9][a-z0-9-]*$/),
    name: z.string().min(1),
    description: z.string().min(1),
    popularityBasis: z.string().min(1),
    retrievedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    entries: z.array(LayerEntrySchema).length(10)
  })
  .strict()
  .superRefine((layer, ctx) => {
    const ranks = new Set(layer.entries.map((entry) => entry.rank));
    if (ranks.size !== 10) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["entries"], message: "ranks must be unique" });
    }
  });

const StackLayerCoverageSchema = z
  .object({
    generatedAt: z.string().datetime(),
    sourcePolicy: z.string().min(1),
    layers: z.array(StackLayerSchema).min(1)
  })
  .strict();

export type StackLayerCoverage = z.infer<typeof StackLayerCoverageSchema>;

export function loadLayerCoverage(filePath = path.join(process.cwd(), "data", "research", "stack-layers.json")) {
  return StackLayerCoverageSchema.parse(JSON.parse(readFileSync(filePath, "utf8")) as unknown);
}

export function validateLayerCoverageReferences(graph: SupplyChainGraph, coverage: StackLayerCoverage) {
  const nodes = new Map(graph.nodes.map((node) => [node.id, node]));
  const errors: string[] = [];

  for (const layer of coverage.layers) {
    for (const entry of layer.entries) {
      const node = nodes.get(entry.nodeId);
      if (!node) {
        errors.push(`${layer.id} references missing node ${entry.nodeId}`);
        continue;
      }
      if (node.kind !== entry.kind) {
        errors.push(`${layer.id} entry ${entry.nodeId} expects ${entry.kind}, got ${node.kind}`);
      }
    }
  }

  if (errors.length > 0) {
    throw new Error(errors.join("; "));
  }
}
