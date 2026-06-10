"use client";

import { useMemo, useState } from "react";

import type { RankedStack } from "../../src/lib/ranking";

type SortKey =
  | "preferenceScore"
  | "overallScore"
  | "opennessScore"
  | "benchmarkScore"
  | "popularityScore"
  | "costScore"
  | "velocityScore"
  | "provenanceScore"
  | "concentrationScore"
  | "sandboxScore"
  | "nonOpenComponents"
  | "githubStars"
  | "hfDownloads";

const sortLabels: Record<SortKey, string> = {
  preferenceScore: "Preference",
  overallScore: "Overall",
  opennessScore: "Openness",
  benchmarkScore: "Benchmark",
  popularityScore: "Popularity",
  costScore: "Cost",
  velocityScore: "Velocity",
  provenanceScore: "Provenance",
  concentrationScore: "Concentration",
  sandboxScore: "Sandbox",
  nonOpenComponents: "Non-open",
  githubStars: "GitHub stars",
  hfDownloads: "HF downloads"
};

type WeightKey =
  | "benchmarkScore"
  | "opennessScore"
  | "popularityScore"
  | "costScore"
  | "velocityScore"
  | "provenanceScore"
  | "concentrationScore"
  | "sandboxScore";

const weightLabels: Record<WeightKey, string> = {
  benchmarkScore: "Accuracy",
  opennessScore: "Openness",
  popularityScore: "Popularity",
  costScore: "Cost",
  velocityScore: "Velocity",
  provenanceScore: "Provenance",
  concentrationScore: "Concentration",
  sandboxScore: "Sandbox"
};

type ScoredStack = RankedStack & { preferenceScore: number };

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(value);
}

export function StackRanking({
  stacks,
  tasks,
  fixedTask,
  title = "Downstream stack ranking"
}: {
  stacks: RankedStack[];
  tasks: string[];
  fixedTask?: string;
  title?: string;
}) {
  const [task, setTask] = useState("all");
  const [maxNonOpen, setMaxNonOpen] = useState("any");
  const [sortKey, setSortKey] = useState<SortKey>("preferenceScore");
  const [weights, setWeights] = useState<Record<WeightKey, number>>({
    benchmarkScore: 4,
    opennessScore: 4,
    popularityScore: 3,
    costScore: 2,
    velocityScore: 2,
    provenanceScore: 3,
    concentrationScore: 1,
    sandboxScore: 2
  });

  const filtered = useMemo(() => {
    const activeTask = fixedTask ?? task;
    const limit = maxNonOpen === "any" ? Number.POSITIVE_INFINITY : Number(maxNonOpen);
    const totalWeight = Object.values(weights).reduce((sum, value) => sum + value, 0) || 1;
    return stacks
      .map<ScoredStack>((stack) => ({
        ...stack,
        preferenceScore:
          (stack.benchmarkScore * weights.benchmarkScore +
            stack.opennessScore * weights.opennessScore +
            stack.popularityScore * weights.popularityScore +
            stack.costScore * weights.costScore +
            stack.velocityScore * weights.velocityScore +
            stack.provenanceScore * weights.provenanceScore +
            stack.concentrationScore * weights.concentrationScore +
            stack.sandboxScore * weights.sandboxScore) /
          totalWeight
      }))
      .filter((stack) => activeTask === "all" || stack.tasks.includes(activeTask))
      .filter((stack) => stack.nonOpenComponents <= limit)
      .sort((a, b) => {
        if (sortKey === "nonOpenComponents") {
          return a.nonOpenComponents - b.nonOpenComponents || b.preferenceScore - a.preferenceScore;
        }
        return b[sortKey] - a[sortKey] || b.preferenceScore - a.preferenceScore;
      });
  }, [fixedTask, maxNonOpen, sortKey, stacks, task, weights]);

  const paretoCount = filtered.filter((stack) => stack.paretoOptimal).length;

  return (
    <section className="rankingPanel" aria-label="Ranked downstream stacks">
      <div className="rankingHeader">
        <div>
          <h2>{title}</h2>
          <p>
            {formatNumber(filtered.length)} options, {formatNumber(paretoCount)} Pareto optimal
          </p>
        </div>
        <div className={`controls ${fixedTask ? "compactControls" : ""}`}>
          {fixedTask ? null : (
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
          )}
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

      <div className="weightGrid" aria-label="Preference weights">
        {(Object.keys(weightLabels) as WeightKey[]).map((key) => (
          <label key={key}>
            <span>
              {weightLabels[key]} <b>{weights[key]}</b>
            </span>
            <input
              type="range"
              min="0"
              max="5"
              step="1"
              value={weights[key]}
              onChange={(event) => setWeights((current) => ({ ...current, [key]: Number(event.target.value) }))}
            />
          </label>
        ))}
      </div>

      <div className="tableFrame">
        <table>
          <thead>
            <tr>
              <th>Stack</th>
              <th>Pref</th>
              <th>Overall</th>
              <th>Open</th>
              <th>Bench</th>
              <th>Popularity</th>
              <th>Cost</th>
              <th>Velocity</th>
              <th>Prov</th>
              <th>Sandbox</th>
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
                <td>{formatNumber(stack.preferenceScore)}</td>
                <td>{formatNumber(stack.overallScore)}</td>
                <td>{formatNumber(stack.opennessScore)}</td>
                <td>{formatNumber(stack.benchmarkScore)}</td>
                <td>{formatNumber(stack.popularityScore)}</td>
                <td>{formatNumber(stack.costScore)}</td>
                <td>{formatNumber(stack.velocityScore)}</td>
                <td>{formatNumber(stack.provenanceScore)}</td>
                <td>{formatNumber(stack.sandboxScore)}</td>
                <td>{stack.nonOpenComponents}</td>
                <td>
                  <span>{formatNumber(stack.githubStars)} GitHub stars</span>
                  <span>{formatNumber(stack.hfDownloads)} HF downloads</span>
                  <span>{stack.benchmarkLabels.join(", ") || "no benchmark linked"}</span>
                  {stack.paretoOptimal ? <b>Pareto</b> : null}
                </td>
              </tr>
            ))}
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={12}>No stacks match the selected criteria.</td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </section>
  );
}
