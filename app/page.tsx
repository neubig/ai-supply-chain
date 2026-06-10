import { loadGraph, summarizeGraph } from "../src/lib/graph";
import { buildRankedStacks } from "../src/lib/ranking";
import { edgeKinds, nodeKinds, openSourceClasses } from "../src/schema";
import { StackRanking } from "./components/StackRanking";

export const dynamic = "force-static";

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

export default function Home() {
  const graph = loadGraph();
  const summary = summarizeGraph(graph);
  const stacks = buildRankedStacks(graph);
  const tasks = [...new Set(stacks.flatMap((stack) => stack.tasks))].sort();
  const topAdoption = graph.nodes
    .flatMap((node) =>
      node.metrics
        .filter((metric) => metric.category === "adoption" && typeof metric.value === "number")
        .map((metric) => ({ node, metric, value: metric.value as number }))
    )
    .sort((a, b) => b.value - a.value)
    .slice(0, 8);

  return (
    <main>
      <section className="topbar" aria-label="Graph summary">
        <div>
          <p className="eyebrow">Open-source AI supply chain</p>
          <h1>User-facing applications and their dependencies</h1>
        </div>
        <div className="summaryGrid">
          <div>
            <span>{formatNumber(summary.nodeCount)}</span>
            <p>nodes</p>
          </div>
          <div>
            <span>{formatNumber(summary.edgeCount)}</span>
            <p>edges</p>
          </div>
          <div>
            <span>{formatNumber(nodeKinds.length)}</span>
            <p>node kinds</p>
          </div>
          <div>
            <span>{formatNumber(edgeKinds.length)}</span>
            <p>edge kinds</p>
          </div>
        </div>
      </section>

      <section className="graphBand" aria-label="Supply-chain graph visualization">
        <img src="/supply-chain.svg" alt="Open-source AI supply-chain graph" />
      </section>

      <StackRanking stacks={stacks} tasks={tasks} />

      <section className="workspace">
        <div className="panel">
          <h2>Openness classes</h2>
          <div className="chips">
            {openSourceClasses.map((openness) => (
              <span key={openness} className={`chip ${openness}`}>
                {openness.replaceAll("_", " ")}
              </span>
            ))}
          </div>
        </div>

        <div className="panel">
          <h2>Node coverage</h2>
          <div className="kindList">
            {nodeKinds.map((kind) => (
              <div key={kind}>
                <span>{kind}</span>
                <strong>{summary.nodeCounts[kind] ?? 0}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="panel wide">
          <h2>Highest adoption metrics in seed data</h2>
          <table>
            <thead>
              <tr>
                <th>Component</th>
                <th>Metric</th>
                <th>Value</th>
                <th>Source-backed as of</th>
              </tr>
            </thead>
            <tbody>
              {topAdoption.map(({ node, metric }) => (
                <tr key={`${node.id}:${metric.id}`}>
                  <td>{node.name}</td>
                  <td>{metric.name}</td>
                  <td>{typeof metric.value === "number" ? formatNumber(metric.value) : metric.value}</td>
                  <td>{metric.measuredAt ?? "unknown"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
