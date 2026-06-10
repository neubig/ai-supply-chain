import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

import { buildGraphCompletenessReport, type CompletenessFinding, type GraphCompletenessReport } from "../src/lib/completeness";
import { loadGraph } from "../src/lib/graph";
import { loadLayerCoverage } from "../src/lib/layers";

function findingRow(finding: CompletenessFinding) {
  return `| ${finding.severity} | ${finding.criterion} | ${finding.nodeId ?? finding.edgeId ?? finding.layerId ?? ""} | ${finding.message.replaceAll("|", "\\|")} |`;
}

function renderMarkdown(report: GraphCompletenessReport) {
  const layerRows = report.layers
    .map(
      (layer) =>
        `| ${layer.name} | ${layer.entries} | ${layer.entriesWithSources} | ${layer.entriesWithUpdatePolicy} | ${layer.entriesWithAnyEdge} |`
    )
    .join("\n");
  const findingRows = report.findings.slice(0, 120).map(findingRow).join("\n");

  return `# Graph Completeness Report

Generated: ${report.generatedAt}

## Summary

- Nodes: ${report.summary.nodes}
- Edges: ${report.summary.edges}
- Errors: ${report.summary.findings.error}
- Warnings: ${report.summary.findings.warning}
- Info: ${report.summary.findings.info}

## Criteria

${report.criteria.map((criterion) => `- ${criterion}`).join("\n")}

## Top-10 Layer Audit

| Layer | Entries | With sources | With update policy | With any graph edge |
| --- | ---: | ---: | ---: | ---: |
${layerRows}

## Findings

| Severity | Criterion | Target | Message |
| --- | --- | --- | --- |
${findingRows || "| info | none | | No findings. |"}
`;
}

const graph = loadGraph();
const coverage = loadLayerCoverage();
const report = buildGraphCompletenessReport(graph, coverage);
const outputDir = path.join(process.cwd(), "reports");

mkdirSync(outputDir, { recursive: true });
writeFileSync(path.join(outputDir, "graph-completeness.json"), `${JSON.stringify(report, null, 2)}\n`);
writeFileSync(path.join(outputDir, "graph-completeness.md"), renderMarkdown(report));

console.log(
  `wrote graph completeness report: ${report.summary.findings.error} errors, ` +
    `${report.summary.findings.warning} warnings, ${report.summary.findings.info} info findings`
);

