import Link from "next/link";
import { notFound } from "next/navigation";

import { loadGraph } from "../../../src/lib/graph";
import { loadLayerCoverage } from "../../../src/lib/layers";
import { buildRankedStacks } from "../../../src/lib/ranking";
import {
  getCategoryNavigation,
  getComponentNavigation,
  getComponentTechnologyLayers
} from "../../../src/lib/site-navigation";
import { SiteNavigation } from "../SiteNavigation";

export const dynamic = "force-static";

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(value);
}

function formatOpenness(value: string) {
  return value.replaceAll("_", " ");
}

function loadPageData() {
  const graph = loadGraph();
  const layerCoverage = loadLayerCoverage();
  const stacks = buildRankedStacks(graph);
  const layers = getComponentTechnologyLayers(graph, layerCoverage);

  return {
    graph,
    layerCoverage,
    stacks,
    layers
  };
}

export function generateStaticParams() {
  const { layers } = loadPageData();
  return layers.map((layer) => ({ layer: layer.id }));
}

export default async function ComponentLayerPage({ params }: { params: Promise<{ layer: string }> }) {
  const { layer: layerSlug } = await params;
  const { graph, layerCoverage, stacks, layers } = loadPageData();
  const layer = layers.find((candidate) => candidate.id === layerSlug);

  if (!layer) {
    notFound();
  }

  const openSourceCount = layer.entries.filter((entry) => entry.node?.openness === "open_source").length;
  const kindCount = new Set(layer.entries.map((entry) => entry.kind)).size;
  const categoryNavigation = getCategoryNavigation(stacks);
  const componentNavigation = getComponentNavigation(graph, layerCoverage);

  return (
    <main>
      <section className="topbar" aria-label="Component layer summary">
        <div>
          <p className="eyebrow">Component technology layer</p>
          <h1>{layer.name}</h1>
        </div>
        <div className="summaryGrid">
          <div>
            <span>{formatNumber(layer.entries.length)}</span>
            <p>alternatives</p>
          </div>
          <div>
            <span>{formatNumber(openSourceCount)}</span>
            <p>open source</p>
          </div>
          <div>
            <span>{formatNumber(kindCount)}</span>
            <p>node kinds</p>
          </div>
          <div>
            <span>{layer.retrievedAt}</span>
            <p>retrieved</p>
          </div>
        </div>
      </section>

      <SiteNavigation categories={categoryNavigation} components={componentNavigation} />

      <section className="componentIntro" aria-label="Layer description">
        <div>
          <h2>{layer.description}</h2>
          <p>{layer.popularityBasis}</p>
        </div>
      </section>

      <section className="componentRanking" aria-label={`${layer.name} alternatives`}>
        <div className="sectionTitle">
          <div>
            <h2>Ranked alternatives</h2>
            <p>Popularity-ranked entries linked back to graph nodes and deterministic sources.</p>
          </div>
        </div>

        <div className="tableFrame">
          <table className="componentTable">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Component</th>
                <th>Kind</th>
                <th>Openness</th>
                <th>Popularity metric</th>
                <th>Tasks</th>
                <th>Source</th>
              </tr>
            </thead>
            <tbody>
              {layer.entries.map((entry) => {
                const nodeUrl = entry.node?.repositoryUrl ?? entry.node?.homepageUrl ?? entry.node?.canonicalUrl ?? entry.sourceUrl;
                return (
                  <tr key={entry.nodeId}>
                    <td>{entry.rank}</td>
                    <td>
                      <Link href={nodeUrl}>{entry.name}</Link>
                      <span>{entry.nodeId}</span>
                    </td>
                    <td>{entry.kind}</td>
                    <td>{formatOpenness(entry.node?.openness ?? "unknown")}</td>
                    <td>
                      <strong>{formatNumber(entry.popularityMetric.value)}</strong>
                      <span>
                        {entry.popularityMetric.name} as of {entry.popularityMetric.measuredAt}
                      </span>
                    </td>
                    <td>{entry.node?.tasks.slice(0, 4).join(", ") || "not task-specific"}</td>
                    <td>
                      <Link href={entry.sourceUrl}>source</Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
