import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

type NodeRecord = {
  id: string;
  kind: string;
  name: string;
  description: string;
  canonicalUrl?: string;
  homepageUrl?: string;
  repositoryUrl?: string;
  license?: { expression: string; openness?: string; osiApproved?: boolean | null; sourceIds?: string[] };
  openness: string;
  tasks?: string[];
  tags?: string[];
  sources: SourceRecord[];
  metrics?: Record<string, unknown>[];
  evidence?: Record<string, unknown>[];
  updatePolicy?: Record<string, unknown>;
  metadata?: Record<string, unknown>;
};

type EdgeRecord = {
  id: string;
  kind: string;
  source: string;
  target: string;
  description: string;
  confidence?: string;
  sources: SourceRecord[];
  metrics?: Record<string, unknown>[];
  metadata?: Record<string, unknown>;
};

type SourceRecord = {
  id: string;
  type: string;
  title: string;
  url: string;
  quote?: string;
  note?: string;
  published_date?: string;
  retrieved_date?: string;
  publisher?: string;
  collectionMethod: string;
  confidence: string;
};

const retrievedDate = "2026-06-10";
const repoUrl = "https://github.com/neubig/ai-supply-chain";
const undisclosedNotePattern = /(undisclosed|not disclosed|does not disclose|do not disclose|source-needed|placeholder|not available|not found|not applicable|missing from the source)/i;
const quoteCollectionPendingNote =
  "source-needed quote collection pending: this disclosed metadata source requires a direct quote from the linked URL.";
const generatedEdgeFile = path.join(process.cwd(), "data", "edges", "required-coverage.json");
const generatedSupportFiles = {
  datasets: path.join(process.cwd(), "data", "nodes", "datasets", "source-needed.json"),
  software: path.join(process.cwd(), "data", "nodes", "software", "source-needed.json"),
  benchmarks: path.join(process.cwd(), "data", "nodes", "benchmarks", "source-needed.json"),
  infrastructure: path.join(process.cwd(), "data", "nodes", "infrastructure", "source-needed.json"),
  licenses: path.join(process.cwd(), "data", "nodes", "licenses", "source-needed.json"),
  organizations: path.join(process.cwd(), "data", "nodes", "organizations", "required-coverage.json")
};

function readJsonObjects(filePath: string): unknown[] {
  const parsed = JSON.parse(readFileSync(filePath, "utf8")) as unknown;
  return Array.isArray(parsed) ? parsed : [parsed];
}

function jsonFiles(directory: string): string[] {
  try {
    return readdirSync(directory)
      .filter((entry) => entry.endsWith(".json"))
      .sort()
      .map((entry) => path.join(directory, entry));
  } catch {
    return [];
  }
}

function loadNodes() {
  const nodes: NodeRecord[] = [];
  for (const directory of ["applications", "models", "datasets", "software", "benchmarks", "organizations", "licenses", "infrastructure"]) {
    for (const filePath of jsonFiles(path.join(process.cwd(), "data", "nodes", directory))) {
      if (Object.values(generatedSupportFiles).includes(filePath)) continue;
      nodes.push(...(readJsonObjects(filePath) as NodeRecord[]));
    }
  }
  return nodes;
}

function loadEdges() {
  const edges: EdgeRecord[] = [];
  for (const filePath of jsonFiles(path.join(process.cwd(), "data", "edges"))) {
    if (filePath === generatedEdgeFile) continue;
    edges.push(...(readJsonObjects(filePath) as EdgeRecord[]));
  }
  return edges;
}

function slug(value: string) {
  return value
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/[^a-z0-9_.-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function sourceFor(node: NodeRecord, idSuffix: string, note: string): SourceRecord {
  const source = node.sources[0];
  const record: SourceRecord = {
    id: `generated:${slug(node.id)}:${idSuffix}`,
    type: source?.type ?? "manual_entry",
    title: `${node.name} source for ${idSuffix.replaceAll("-", " ")}`,
    url: source?.url ?? node.canonicalUrl ?? repoUrl,
    publisher: source?.publisher,
    retrieved_date: source?.retrieved_date ?? retrievedDate,
    collectionMethod: source?.collectionMethod ?? "manual_review",
    confidence: "low"
  };
  if (undisclosedNotePattern.test(note)) {
    record.note = note;
  } else {
    record.note = quoteCollectionPendingNote;
  }
  return record;
}

function maintainerFromUrl(node: NodeRecord) {
  const url = node.repositoryUrl ?? node.canonicalUrl ?? node.sources[0]?.url;
  if (!url) return undefined;
  const githubMatch = url.match(/^https:\/\/github\.com\/([^/]+)/i);
  if (githubMatch) return githubMatch[1];
  const hfMatch = url.match(/^https:\/\/huggingface\.co\/([^/]+)/i);
  if (hfMatch) return hfMatch[1];
  return undefined;
}

function licenseTarget(node: NodeRecord) {
  const expression = node.license?.expression.toLowerCase();
  if (!expression) return "license:source-needed-license";
  if (expression === "mit") return "license:mit";
  if (expression === "apache-2.0" || expression === "apache 2.0") return "license:apache-2.0";
  if (expression === "bsd-3-clause") return "license:bsd-3-clause";
  if (expression === "gpl-3.0") return "license:gpl-3.0";
  if (expression === "agpl-3.0") return "license:agpl-3.0";
  if (expression === "cc-by-4.0") return "license:cc-by-4.0";
  if (expression.includes("openrail++")) return "license:openrail-plus-plus";
  if (expression.includes("bigcode-openrail")) return "license:bigcode-openrail-m";
  return "license:other-composite";
}

function supportSource(id: string, name: string, description: string): NodeRecord {
  return {
    id,
    kind: id.split(":")[0],
    name,
    description,
    canonicalUrl: repoUrl,
    openness: "unknown",
    tasks: ["source-needed"],
    tags: ["source-needed", "required-coverage"],
    sources: [
      {
        id: `manual:${slug(id)}`,
        type: "manual_entry",
        title: `${name} source-needed placeholder`,
        url: repoUrl,
        note: "Placeholder node used to make a required graph relationship explicit when the cited upstream source does not disclose the concrete component.",
        publisher: "AI supply-chain maintainers",
        retrieved_date: retrievedDate,
        collectionMethod: "manual_review",
        confidence: "low"
      }
    ],
    updatePolicy: {
      refreshMethod: "manual_review",
      cadence: "manual",
      deterministic: false,
      instructions: "Replace this placeholder with a concrete source-backed node when a deterministic source is found."
    },
    metadata: { sourceNeeded: true }
  };
}

function organizationNode(owner: string): NodeRecord {
  const id = `organization:${slug(owner)}`;
  return {
    id,
    kind: "organization",
    name: owner,
    description: `Maintainer namespace inferred from source URL for required graph coverage.`,
    canonicalUrl: `https://github.com/${owner}`,
    openness: "unknown",
    tags: ["generated-maintainer", "required-coverage"],
    sources: [
      {
        id: `generated-org:${slug(owner)}`,
        type: "github_repo",
        title: `${owner} maintainer namespace`,
        url: `https://github.com/${owner}`,
        note: quoteCollectionPendingNote,
        publisher: "GitHub",
        retrieved_date: retrievedDate,
        collectionMethod: "static_document",
        confidence: "medium"
      }
    ],
    updatePolicy: {
      refreshMethod: "manual_review",
      cadence: "monthly",
      deterministic: false,
      instructions: "Verify maintainer identity and replace with official organization metadata where available."
    },
    metadata: { generatedForRequiredCoverage: true }
  };
}

function edge(
  kind: string,
  sourceNode: NodeRecord,
  target: string,
  description: string,
  note: string,
  confidence = "low"
): EdgeRecord {
  return {
    id: `edge:required:${slug(sourceNode.id)}:${kind}:${slug(target)}`,
    kind,
    source: sourceNode.id,
    target,
    description,
    confidence,
    sources: [sourceFor(sourceNode, kind, note)],
    metadata: { generatedForRequiredCoverage: true }
  };
}

const nodes = loadNodes();
const edges = loadEdges();
const nodeIds = new Set(nodes.map((node) => node.id));
const generatedOrganizations = new Map<string, NodeRecord>();
const generatedEdges: EdgeRecord[] = [];

function hasEdge(source: string, kind: string) {
  return edges.some((candidate) => candidate.source === source && candidate.kind === kind) ||
    generatedEdges.some((candidate) => candidate.source === source && candidate.kind === kind);
}

function hasOperationalSoftwareConnectivity(nodeId: string) {
  const operationalKinds = new Set([
    "depends_on",
    "implements",
    "supports",
    "supports_hardware",
    "optimized_for",
    "sandboxed_by",
    "runs_on",
    "requires",
    "trained_with"
  ]);
  return [...edges, ...generatedEdges].some(
    (candidate) =>
      (candidate.source === nodeId || candidate.target === nodeId) && operationalKinds.has(candidate.kind)
  );
}

function addEdgeIfMissing(node: NodeRecord, kind: string, target: string, description: string, note: string, confidence = "low") {
  if (!hasEdge(node.id, kind)) {
    generatedEdges.push(edge(kind, node, target, description, note, confidence));
  }
}

function addMaintainerEdgeIfMissing(node: NodeRecord) {
  if (hasEdge(node.id, "developed_by")) return;
  const owner = maintainerFromUrl(node);
  const target = owner ? `organization:${slug(owner)}` : "organization:source-needed-maintainer";
  if (owner && !nodeIds.has(target)) {
    generatedOrganizations.set(target, organizationNode(owner));
    nodeIds.add(target);
  }
  generatedEdges.push(
    edge(
      "developed_by",
      node,
      target,
      `${node.name} maintainer is represented from the source namespace until richer maintainer metadata is added.`,
      "The source URL exposes the maintainer namespace, but no exact maintainer quote was captured in the seed ingest.",
      owner ? "medium" : "low"
    )
  );
}

function addLicenseEdgeIfMissing(node: NodeRecord) {
  if (hasEdge(node.id, "licensed_as")) return;
  const target = licenseTarget(node);
  generatedEdges.push(
    edge(
      "licensed_as",
      node,
      target,
      `${node.name} license is represented from node license metadata or a source-needed placeholder.`,
      "The source metadata did not include a normalized license edge in the seed graph; this generated edge preserves the required license relationship.",
      node.license ? "medium" : "low"
    )
  );
}

for (const node of nodes) {
  if (node.metadata?.sourceNeeded) continue;

  if (node.kind === "application") {
    addMaintainerEdgeIfMissing(node);
    addLicenseEdgeIfMissing(node);
    if (!hasEdge(node.id, "supports") && !hasEdge(node.id, "depends_on")) {
      addEdgeIfMissing(
        node,
        "supports",
        "model:source-needed-supported-model",
        `${node.name} requires an explicit supported model or runtime path.`,
        "The current seed sources do not disclose a concrete supported open model for this application."
      );
    }
  }

  if (node.kind === "model") {
    addMaintainerEdgeIfMissing(node);
    addLicenseEdgeIfMissing(node);
    addEdgeIfMissing(
      node,
      "trained_on",
      "dataset:source-needed-training-data",
      `${node.name} has a required training-data relationship, but the concrete dataset is not yet source-backed in this graph.`,
      "The cited model source does not provide a concrete training dataset in the current seed ingest."
    );
    addEdgeIfMissing(
      node,
      "trained_with",
      "software:source-needed-training-framework",
      `${node.name} has a required training-software relationship, but the concrete training stack is not yet source-backed in this graph.`,
      "The cited model source does not provide a concrete training framework in the current seed ingest."
    );
    addEdgeIfMissing(
      node,
      "evaluated_on",
      "benchmark:source-needed-evaluation",
      `${node.name} has a required evaluation relationship, but the concrete benchmark is not yet source-backed in this graph.`,
      "The cited model source does not provide a concrete benchmark result in the current seed ingest."
    );
    if (!hasEdge(node.id, "hosted_by")) {
      const hostedBy = (node.canonicalUrl ?? "").startsWith("https://huggingface.co/")
        ? "infrastructure:hugging-face-hub"
        : "infrastructure:source-needed-hosting";
      generatedEdges.push(
        edge(
          "hosted_by",
          node,
          hostedBy,
          `${node.name} hosting relationship is represented from its source URL or as a source-needed placeholder.`,
          "The current seed graph did not include an explicit host edge for this model.",
          hostedBy === "infrastructure:hugging-face-hub" ? "medium" : "low"
        )
      );
    }
  }

  if (node.kind === "software") {
    addMaintainerEdgeIfMissing(node);
    addLicenseEdgeIfMissing(node);
    if (!hasOperationalSoftwareConnectivity(node.id)) {
      generatedEdges.push(
        edge(
          "depends_on",
          node,
          "software:source-needed-operational-dependency",
          `${node.name} needs an explicit operational dependency, interface, hardware, or sandbox relationship when one is source-backed.`,
          "The cited software source does not provide a concrete operational dependency or stack relationship in the current seed ingest."
        )
      );
    }
  }

  if (node.kind === "dataset") {
    addMaintainerEdgeIfMissing(node);
    addLicenseEdgeIfMissing(node);
    if (!hasEdge(node.id, "hosted_by")) {
      const hostedBy = (node.canonicalUrl ?? "").startsWith("https://huggingface.co/")
        ? "infrastructure:hugging-face-hub"
        : "infrastructure:source-needed-hosting";
      generatedEdges.push(
        edge(
          "hosted_by",
          node,
          hostedBy,
          `${node.name} hosting relationship is represented from its source URL or as a source-needed placeholder.`,
          "The current seed graph did not include an explicit host edge for this dataset.",
          hostedBy === "infrastructure:hugging-face-hub" ? "medium" : "low"
        )
      );
    }
  }

  if (node.kind === "benchmark") {
    addMaintainerEdgeIfMissing(node);
    addLicenseEdgeIfMissing(node);
    addEdgeIfMissing(
      node,
      "uses_data",
      "dataset:source-needed-benchmark-data",
      `${node.name} has a required benchmark-data relationship, but the concrete data source is not yet source-backed in this graph.`,
      "The cited benchmark source does not provide a concrete dataset link in the current seed ingest."
    );
  }
}

const supportNodes = {
  datasets: [
    supportSource("dataset:source-needed-training-data", "Source-needed training data", "Explicit placeholder for model training data that is required but not disclosed in the current source."),
    supportSource("dataset:source-needed-benchmark-data", "Source-needed benchmark data", "Explicit placeholder for benchmark datasets that are required but not disclosed in the current source.")
  ],
  software: [
    supportSource("software:source-needed-training-framework", "Source-needed training framework", "Explicit placeholder for a model training framework that is required but not disclosed in the current source."),
    supportSource("software:source-needed-operational-dependency", "Source-needed operational dependency", "Explicit placeholder for a software dependency, interface, hardware, or sandbox relationship that is required for graph completeness but not disclosed in the current source.")
  ],
  benchmarks: [
    supportSource("benchmark:source-needed-evaluation", "Source-needed evaluation", "Explicit placeholder for a model evaluation benchmark that is required but not disclosed in the current source.")
  ],
  infrastructure: [
    supportSource("infrastructure:source-needed-hosting", "Source-needed hosting", "Explicit placeholder for hosting infrastructure that is required but not disclosed in the current source.")
  ],
  licenses: [
    supportSource("license:source-needed-license", "Source-needed license", "Explicit placeholder for license information that is required but not disclosed in the current source.")
  ],
  organizations: [
    supportSource("organization:source-needed-maintainer", "Source-needed maintainer", "Explicit placeholder for maintainer information that is required but not disclosed in the current source."),
    ...[...generatedOrganizations.values()].sort((a, b) => a.id.localeCompare(b.id))
  ]
};

for (const [directory, outputPath] of Object.entries(generatedSupportFiles)) {
  const records = supportNodes[directory as keyof typeof supportNodes];
  mkdirSync(path.dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, `${JSON.stringify(records, null, 2)}\n`);
  console.log(`wrote ${outputPath}`);
}

mkdirSync(path.dirname(generatedEdgeFile), { recursive: true });
writeFileSync(generatedEdgeFile, `${JSON.stringify(generatedEdges.sort((a, b) => a.id.localeCompare(b.id)), null, 2)}\n`);
console.log(`wrote ${generatedEdgeFile} with ${generatedEdges.length} required coverage edges`);
