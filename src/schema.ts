import { z } from "zod";

export const schemaVersion = "0.1.0";

export const nodeKinds = [
  "application",
  "model",
  "dataset",
  "software",
  "benchmark",
  "organization",
  "license",
  "infrastructure"
] as const;

export const edgeKinds = [
  "supports",
  "depends_on",
  "trained_on",
  "trained_with",
  "evaluated_on",
  "developed_by",
  "hosted_by",
  "licensed_as",
  "derived_from",
  "uses_data",
  "implements"
] as const;

export const openSourceClasses = [
  "open_source",
  "open_core",
  "open_weights",
  "source_available",
  "proprietary",
  "unknown"
] as const;

export const sourceTypes = [
  "github_repo",
  "github_license",
  "huggingface_model_card",
  "huggingface_dataset_card",
  "package_registry",
  "official_docs",
  "official_website",
  "paper",
  "benchmark_definition",
  "api_response",
  "web_search",
  "manual_entry"
] as const;

export const collectionMethods = [
  "github_api",
  "huggingface_api",
  "package_registry_api",
  "official_api",
  "static_document",
  "paper_metadata",
  "benchmark_scrape",
  "manual_review",
  "web_search"
] as const;

export const confidences = ["high", "medium", "low"] as const;

export const metricCategories = [
  "adoption",
  "benchmark",
  "cost",
  "maintenance",
  "openness",
  "provenance",
  "risk",
  "security",
  "velocity",
  "performance",
  "usage",
  "quality"
] as const;

export const evidenceKinds = [
  "sbom",
  "ai_sbom",
  "slsa",
  "openssf_scorecard",
  "signature",
  "vulnerability_scan",
  "model_card",
  "dataset_card",
  "benchmark_card",
  "license_review"
] as const;

export const evidenceStatuses = ["present", "partial", "missing", "unknown", "not_applicable"] as const;

export const refreshCadences = ["daily", "weekly", "monthly", "quarterly", "manual"] as const;

export const NodeKindSchema = z.enum(nodeKinds);
export const EdgeKindSchema = z.enum(edgeKinds);
export const OpenSourceClassSchema = z.enum(openSourceClasses);
export const SourceTypeSchema = z.enum(sourceTypes);
export const CollectionMethodSchema = z.enum(collectionMethods);
export const ConfidenceSchema = z.enum(confidences);
export const MetricCategorySchema = z.enum(metricCategories);
export const RefreshCadenceSchema = z.enum(refreshCadences);
export const EvidenceKindSchema = z.enum(evidenceKinds);
export const EvidenceStatusSchema = z.enum(evidenceStatuses);

const sourceIdSchema = z.string().regex(/^[a-z0-9][a-z0-9:_./-]*$/);
const nodeIdSchema = z.string().regex(/^[a-z]+:[a-z0-9][a-z0-9_.-]*$/);
const edgeIdSchema = z.string().regex(/^edge:[a-z0-9][a-z0-9_.:-]*$/);
const dateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);
const urlSchema = z.string().url().regex(/^https?:\/\//);

export const SourceRecordSchema = z
  .object({
    id: sourceIdSchema,
    type: SourceTypeSchema,
    title: z.string().min(1),
    url: urlSchema,
    publisher: z.string().min(1).optional(),
    retrievedAt: dateSchema,
    collectionMethod: CollectionMethodSchema,
    confidence: ConfidenceSchema.default("medium"),
    notes: z.string().min(1).optional()
  })
  .strict();

export const UpdatePolicySchema = z
  .object({
    refreshMethod: CollectionMethodSchema,
    cadence: RefreshCadenceSchema.default("monthly"),
    deterministic: z.boolean().default(true),
    instructions: z.string().min(1)
  })
  .strict();

export const LicenseInfoSchema = z
  .object({
    expression: z.string().min(1),
    url: urlSchema.optional(),
    openness: OpenSourceClassSchema,
    osiApproved: z.boolean().nullable().optional(),
    notes: z.string().min(1).optional(),
    sourceIds: z.array(sourceIdSchema).default([])
  })
  .strict();

export const MetricSchema = z
  .object({
    id: sourceIdSchema,
    category: MetricCategorySchema,
    name: z.string().min(1),
    value: z.union([z.number(), z.string(), z.boolean()]),
    unit: z.string().min(1).optional(),
    task: z.string().min(1).optional(),
    benchmarkId: nodeIdSchema.optional(),
    measuredAt: dateSchema.optional(),
    higherIsBetter: z.boolean().optional(),
    sourceIds: z.array(sourceIdSchema).default([]),
    notes: z.string().min(1).optional()
  })
  .strict();

export const RiskEvidenceSchema = z
  .object({
    kind: EvidenceKindSchema,
    status: EvidenceStatusSchema,
    score: z.number().min(0).max(100).optional(),
    url: urlSchema.optional(),
    checkedAt: dateSchema.optional(),
    sourceIds: z.array(sourceIdSchema).default([]),
    notes: z.string().min(1).optional()
  })
  .strict();

function validateSourceReferences(
  sourceIds: string[],
  availableIds: Set<string>,
  ctx: z.RefinementCtx,
  pathPrefix: (string | number)[]
) {
  for (const [index, sourceId] of sourceIds.entries()) {
    if (!availableIds.has(sourceId)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: [...pathPrefix, index],
        message: `sourceIds entry '${sourceId}' does not match a local SourceRecord id`
      });
    }
  }
}

export const SupplyChainNodeSchema = z
  .object({
    id: nodeIdSchema,
    kind: NodeKindSchema,
    name: z.string().min(1),
    description: z.string().min(1),
    canonicalUrl: urlSchema.optional(),
    homepageUrl: urlSchema.optional(),
    repositoryUrl: urlSchema.optional(),
    license: LicenseInfoSchema.optional(),
    openness: OpenSourceClassSchema.default("unknown"),
    tasks: z.array(z.string().min(1)).default([]),
    tags: z.array(z.string().min(1)).default([]),
    sources: z.array(SourceRecordSchema).default([]),
    metrics: z.array(MetricSchema).default([]),
    evidence: z.array(RiskEvidenceSchema).default([]),
    updatePolicy: UpdatePolicySchema.optional(),
    metadata: z.record(z.unknown()).default({})
  })
  .strict()
  .superRefine((node, ctx) => {
    if (!node.id.startsWith(`${node.kind}:`)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["id"],
        message: `id '${node.id}' must start with '${node.kind}:'`
      });
    }
    const sourceIds = new Set(node.sources.map((source) => source.id));
    if (sourceIds.size !== node.sources.length) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["sources"], message: "source ids must be unique" });
    }
    if (node.license) {
      validateSourceReferences(node.license.sourceIds, sourceIds, ctx, ["license", "sourceIds"]);
    }
    for (const [index, metric] of node.metrics.entries()) {
      validateSourceReferences(metric.sourceIds, sourceIds, ctx, ["metrics", index, "sourceIds"]);
    }
    for (const [index, evidence] of node.evidence.entries()) {
      validateSourceReferences(evidence.sourceIds, sourceIds, ctx, ["evidence", index, "sourceIds"]);
    }
  });

export const SupplyChainEdgeSchema = z
  .object({
    id: edgeIdSchema,
    kind: EdgeKindSchema,
    source: nodeIdSchema,
    target: nodeIdSchema,
    description: z.string().min(1),
    confidence: ConfidenceSchema.default("medium"),
    validFrom: dateSchema.optional(),
    validUntil: dateSchema.optional(),
    sources: z.array(SourceRecordSchema).default([]),
    metrics: z.array(MetricSchema).default([]),
    metadata: z.record(z.unknown()).default({})
  })
  .strict()
  .superRefine((edge, ctx) => {
    if (edge.source === edge.target) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["target"], message: "edge source and target must differ" });
    }
    const sourceIds = new Set(edge.sources.map((source) => source.id));
    if (sourceIds.size !== edge.sources.length) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["sources"], message: "source ids must be unique" });
    }
    for (const [index, metric] of edge.metrics.entries()) {
      validateSourceReferences(metric.sourceIds, sourceIds, ctx, ["metrics", index, "sourceIds"]);
    }
  });

export type NodeKind = z.infer<typeof NodeKindSchema>;
export type EdgeKind = z.infer<typeof EdgeKindSchema>;
export type OpenSourceClass = z.infer<typeof OpenSourceClassSchema>;
export type SourceRecord = z.infer<typeof SourceRecordSchema>;
export type Metric = z.infer<typeof MetricSchema>;
export type RiskEvidence = z.infer<typeof RiskEvidenceSchema>;
export type SupplyChainNode = z.infer<typeof SupplyChainNodeSchema>;
export type SupplyChainEdge = z.infer<typeof SupplyChainEdgeSchema>;

type EndpointRule = {
  sourceKinds: NodeKind[];
  targetKinds: NodeKind[];
};

export const allowedEdgeEndpoints: Record<EdgeKind, EndpointRule> = {
  supports: {
    sourceKinds: ["application", "software", "infrastructure"],
    targetKinds: ["model", "software", "infrastructure"]
  },
  depends_on: {
    sourceKinds: ["application", "software", "model", "infrastructure"],
    targetKinds: ["software", "model", "infrastructure"]
  },
  trained_on: { sourceKinds: ["model"], targetKinds: ["dataset"] },
  trained_with: { sourceKinds: ["model"], targetKinds: ["software", "infrastructure"] },
  evaluated_on: { sourceKinds: ["application", "model", "software"], targetKinds: ["benchmark"] },
  developed_by: {
    sourceKinds: ["application", "model", "dataset", "software", "benchmark", "infrastructure"],
    targetKinds: ["organization"]
  },
  hosted_by: {
    sourceKinds: ["application", "model", "dataset", "software", "benchmark"],
    targetKinds: ["infrastructure", "organization"]
  },
  licensed_as: {
    sourceKinds: ["application", "model", "dataset", "software", "benchmark"],
    targetKinds: ["license"]
  },
  derived_from: { sourceKinds: ["model", "dataset", "software"], targetKinds: ["model", "dataset", "software"] },
  uses_data: { sourceKinds: ["application", "software", "benchmark"], targetKinds: ["dataset"] },
  implements: { sourceKinds: ["application", "software", "model"], targetKinds: ["benchmark", "software"] }
};

export const SupplyChainGraphSchema = z
  .object({
    schemaVersion: z.literal(schemaVersion).default(schemaVersion),
    generatedAt: z.string().datetime().optional(),
    nodes: z.array(SupplyChainNodeSchema),
    edges: z.array(SupplyChainEdgeSchema)
  })
  .strict()
  .superRefine((graph, ctx) => {
    const nodeById = new Map<string, SupplyChainNode>();
    const edgeIds = new Set<string>();

    for (const [index, node] of graph.nodes.entries()) {
      if (nodeById.has(node.id)) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["nodes", index, "id"], message: "duplicate node id" });
      }
      nodeById.set(node.id, node);
    }

    for (const [index, edge] of graph.edges.entries()) {
      if (edgeIds.has(edge.id)) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["edges", index, "id"], message: "duplicate edge id" });
      }
      edgeIds.add(edge.id);

      const source = nodeById.get(edge.source);
      const target = nodeById.get(edge.target);
      if (!source) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["edges", index, "source"], message: "missing source node" });
        continue;
      }
      if (!target) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["edges", index, "target"], message: "missing target node" });
        continue;
      }

      const rule = allowedEdgeEndpoints[edge.kind];
      if (!rule.sourceKinds.includes(source.kind)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["edges", index, "source"],
          message: `invalid source kind '${source.kind}' for ${edge.kind}`
        });
      }
      if (!rule.targetKinds.includes(target.kind)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["edges", index, "target"],
          message: `invalid target kind '${target.kind}' for ${edge.kind}`
        });
      }
    }
  });

export type SupplyChainGraph = z.infer<typeof SupplyChainGraphSchema>;
