import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

import { loadGraph } from "../src/lib/graph";

const outputPath = path.join(process.cwd(), "dist", "graph.json");
const graph = loadGraph();
mkdirSync(path.dirname(outputPath), { recursive: true });
writeFileSync(outputPath, `${JSON.stringify(graph, null, 2)}\n`);
console.log(`wrote ${outputPath}`);
