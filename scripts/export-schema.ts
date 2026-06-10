import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

import { zodToJsonSchema } from "zod-to-json-schema";

import { SupplyChainGraphSchema } from "../src/schema";

const outputPath = path.join(process.cwd(), "schema", "ai-supply-chain.schema.json");
mkdirSync(path.dirname(outputPath), { recursive: true });
writeFileSync(outputPath, `${JSON.stringify(zodToJsonSchema(SupplyChainGraphSchema, "SupplyChainGraph"), null, 2)}\n`);
console.log(`wrote ${outputPath}`);
