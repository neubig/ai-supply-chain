import { loadExampleGraph, loadGraph, summarizeGraph } from "../src/lib/graph";

const graph = loadGraph();
const exampleGraph = loadExampleGraph();
const summary = summarizeGraph(graph);

console.log(
  `validated ${summary.nodeCount} seed nodes, ${summary.edgeCount} seed edges, ` +
    `${exampleGraph.nodes.length} example nodes, and ${exampleGraph.edges.length} example edges`
);
