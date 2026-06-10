import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

import { loadGraph } from "../src/lib/graph";
import { renderSupplyChainSvg } from "../src/lib/visualization";

const graph = loadGraph();
const svg = renderSupplyChainSvg(graph);
const outputs = [
  path.join(process.cwd(), "public", "ai-supply-chain.svg"),
  path.join(process.cwd(), "visualizations", "ai-supply-chain.svg")
];

for (const outputPath of outputs) {
  mkdirSync(path.dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, svg);
  console.log(`wrote ${outputPath}`);
}
