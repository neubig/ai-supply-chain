"use client";

import { useMemo, useState } from "react";

import type { RankedStack } from "../../src/lib/ranking";

type SortKey =
  | "overallScore"
  | "opennessScore"
  | "benchmarkScore"
  | "popularityScore"
  | "nonOpenComponents"
  | "githubStars"
  | "hfDownloads";

const sortLabels: Record<SortKey, string> = {
  overallScore: "Overall",
  opennessScore: "Openness",
  benchmarkScore: "Benchmark",
  popularityScore: "Popularity",
  nonOpenComponents: "Non-open",
  githubStars: "GitHub stars",
  hfDownloads: "HF downloads"
};

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(value);
}

export function StackRanking({ stacks, tasks }: { stacks: RankedStack[]; tasks: string[] }) {
  const [task, setTask] = useState("all");
  const [maxNonOpen, setMaxNonOpen] = useState("any");
  const [sortKey, setSortKey] = useState<SortKey>("overallScore");

  const filtered = useMemo(() => {
    const limit = maxNonOpen === "any" ? Number.POSITIVE_INFINITY : Number(maxNonOpen);
    return stacks
      .filter((stack) => task === "all" || stack.tasks.includes(task))
      .filter((stack) => stack.nonOpenComponents <= limit)
      .sort((a, b) => {
        if (sortKey === "nonOpenComponents") {
          return a.nonOpenComponents - b.nonOpenComponents || b.overallScore - a.overallScore;
        }
        return b[sortKey] - a[sortKey] || b.overallScore - a.overallScore;
      });
  }, [maxNonOpen, sortKey, stacks, task]);

  const paretoCount = filtered.filter((stack) => stack.paretoOptimal).length;

  return (
    <section className="rankingPanel" aria-label="Ranked downstream stacks">
      <div className="rankingHeader">
        <div>
          <h2>Downstream stack ranking</h2>
          <p>
            {formatNumber(filtered.length)} options, {formatNumber(paretoCount)} Pareto optimal
          </p>
        </div>
        <div className="controls">
          <label>
            Task
            <select value={task} onChange={(event) => setTask(event.target.value)}>
              <option value="all">All tasks</option>
              {tasks.map((taskName) => (
                <option key={taskName} value={taskName}>
                  {taskName}
                </option>
              ))}
            </select>
          </label>
          <label>
            Non-open budget
            <select value={maxNonOpen} onChange={(event) => setMaxNonOpen(event.target.value)}>
              <option value="any">Any</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </label>
          <label>
            Sort
            <select value={sortKey} onChange={(event) => setSortKey(event.target.value as SortKey)}>
              {Object.entries(sortLabels).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="tableFrame">
        <table>
          <thead>
            <tr>
              <th>Stack</th>
              <th>Overall</th>
              <th>Open</th>
              <th>Bench</th>
              <th>Popularity</th>
              <th>Non-open</th>
              <th>Evidence</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((stack) => (
              <tr key={stack.id} className={stack.paretoOptimal ? "pareto" : undefined}>
                <td>
                  <strong>{stack.applicationName}</strong>
                  <span>{stack.modelName}</span>
                  <em>{stack.tasks.slice(0, 4).join(", ")}</em>
                </td>
                <td>{formatNumber(stack.overallScore)}</td>
                <td>{formatNumber(stack.opennessScore)}</td>
                <td>{formatNumber(stack.benchmarkScore)}</td>
                <td>{formatNumber(stack.popularityScore)}</td>
                <td>{stack.nonOpenComponents}</td>
                <td>
                  <span>{formatNumber(stack.githubStars)} GitHub stars</span>
                  <span>{formatNumber(stack.hfDownloads)} HF downloads</span>
                  <span>{stack.benchmarkLabels.join(", ") || "no benchmark linked"}</span>
                  {stack.paretoOptimal ? <b>Pareto</b> : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
