import { loadExampleGraph, loadGraph, summarizeGraph } from "../src/lib/graph";
import { loadLayerCoverage, validateLayerCoverageReferences } from "../src/lib/layers";

const graph = loadGraph();
const exampleGraph = loadExampleGraph();
const layerCoverage = loadLayerCoverage();
validateLayerCoverageReferences(graph, layerCoverage);
const summary = summarizeGraph(graph);

console.log(
  `validated ${summary.nodeCount} seed nodes, ${summary.edgeCount} seed edges, ` +
    `${exampleGraph.nodes.length} example nodes, ${exampleGraph.edges.length} example edges, ` +
    `and ${layerCoverage.layers.length} top-10 layer coverage lists`
);
