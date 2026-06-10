import Link from "next/link";

import type { ConsumerCategory } from "../../src/lib/site-navigation";

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(value);
}

export function TopStackCards({ categories }: { categories: ConsumerCategory[] }) {
  return (
    <section className="topStacks" aria-label="Top-ranked stack by consumer application category">
      <div className="sectionTitle">
        <div>
          <h2>Top stack by consumer category</h2>
          <p>One highest-ranked supply chain per consumer category, with full alternatives available by category.</p>
        </div>
        <p>{formatNumber(categories.length)} categories</p>
      </div>

      <div className="topStackGrid">
        {categories.map((category) => {
          const stack = category.topStack;
          return (
            <article key={category.slug} className="topStackCard">
              <div className="cardHeader">
                <div>
                  <h3>{category.name}</h3>
                  <p>
                    {category.stackCount} ranked options, {category.applicationCount} apps, {category.modelCount} models
                  </p>
                </div>
                {stack.paretoOptimal ? <span className="paretoBadge">Pareto</span> : null}
              </div>

              <div className="stackPair">
                <strong>{stack.applicationName}</strong>
                <span>{stack.modelName}</span>
              </div>

              <p className="categoryDescription">{category.description}</p>

              <div className="scoreStrip" aria-label="Stack scores">
                <div>
                  <span>{formatNumber(stack.overallScore)}</span>
                  <p>overall</p>
                </div>
                <div>
                  <span>{formatNumber(stack.opennessScore)}</span>
                  <p>open</p>
                </div>
                <div>
                  <span>{formatNumber(stack.benchmarkScore)}</span>
                  <p>bench</p>
                </div>
                <div>
                  <span>{stack.nonOpenComponents}</span>
                  <p>non-open</p>
                </div>
              </div>

              <p className="componentPreview">{stack.componentNames.slice(0, 5).join(", ")}</p>

              <Link className="buttonLink" href={`/categories/${category.slug}`}>
                view other options
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
