import { notFound } from "next/navigation";

import { loadGraph } from "../../../src/lib/graph";
import { loadLayerCoverage } from "../../../src/lib/layers";
import { buildRankedStacks } from "../../../src/lib/ranking";
import { getCategoryNavigation, getComponentNavigation, getConsumerCategories } from "../../../src/lib/site-navigation";
import { SiteNavigation } from "../../components/SiteNavigation";
import { StackRanking } from "../../components/StackRanking";
import { SupplyChainGraph } from "../../components/SupplyChainGraph";

export const dynamic = "force-static";

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(value);
}

function loadPageData() {
  const graph = loadGraph();
  const layerCoverage = loadLayerCoverage();
  const stacks = buildRankedStacks(graph);
  const categories = getConsumerCategories(stacks);

  return {
    graph,
    layerCoverage,
    stacks,
    categories
  };
}

export function generateStaticParams() {
  const { categories } = loadPageData();
  return categories.map((category) => ({ category: category.slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params;
  const { graph, layerCoverage, stacks, categories } = loadPageData();
  const category = categories.find((candidate) => candidate.slug === categorySlug);

  if (!category) {
    notFound();
  }

  const paretoCount = category.stacks.filter((stack) => stack.paretoOptimal).length;
  const categoryNavigation = getCategoryNavigation(stacks);
  const componentNavigation = getComponentNavigation(graph, layerCoverage);

  return (
    <main>
      <section className="topbar" aria-label="Category summary">
        <div>
          <p className="eyebrow">Consumer application category</p>
          <h1>{category.name} AI supply chains</h1>
        </div>
        <div className="summaryGrid">
          <div>
            <span>{formatNumber(category.stackCount)}</span>
            <p>ranked options</p>
          </div>
          <div>
            <span>{formatNumber(category.applicationCount)}</span>
            <p>applications</p>
          </div>
          <div>
            <span>{formatNumber(category.modelCount)}</span>
            <p>models</p>
          </div>
          <div>
            <span>{formatNumber(paretoCount)}</span>
            <p>Pareto options</p>
          </div>
        </div>
      </section>

      <SiteNavigation categories={categoryNavigation} components={componentNavigation} />

      <section className="recommendationBand" aria-label="Top recommendation">
        <div>
          <h2>Top-ranked stack</h2>
          <p>{category.description}</p>
          <p>
            {category.topStack.applicationName} with {category.topStack.modelName}
          </p>
        </div>
        <div className="scoreStrip compact" aria-label="Top stack scores">
          <div>
            <span>{formatNumber(category.topStack.overallScore)}</span>
            <p>overall</p>
          </div>
          <div>
            <span>{formatNumber(category.topStack.opennessScore)}</span>
            <p>open</p>
          </div>
          <div>
            <span>{formatNumber(category.topStack.benchmarkScore)}</span>
            <p>bench</p>
          </div>
          <div>
            <span>{category.topStack.nonOpenComponents}</span>
            <p>non-open</p>
          </div>
        </div>
      </section>

      <SupplyChainGraph nodes={graph.nodes} edges={graph.edges} stacks={category.stacks} />

      <StackRanking
        stacks={category.stacks}
        tasks={[category.name]}
        hideTaskFilter
        title={`${category.name} stack options`}
      />
    </main>
  );
}
