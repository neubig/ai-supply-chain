"use client";

import { useMemo, useState } from "react";

import type { RankedStack } from "../../src/lib/ranking";
import type { SupplyChainEdge, SupplyChainNode } from "../../src/schema";

const kindOrder = ["application", "model", "software", "dataset", "benchmark", "infrastructure", "license"] as const;

const fillByKind: Record<string, string> = {
  application: "#D8F0E4",
  model: "#E7DDF7",
  software: "#D7E8FA",
  dataset: "#F6E5CB",
  benchmark: "#F8D5DF",
  infrastructure: "#D7ECEB",
  license: "#F0E6B2",
  organization: "#E2E5EA"
};

function wrap(label: string) {
  const words = label.split(/\s+/);
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > 22 && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines.slice(0, 2);
}

export function SupplyChainGraph({
  nodes,
  edges,
  stacks
}: {
  nodes: SupplyChainNode[];
  edges: SupplyChainEdge[];
  stacks: RankedStack[];
}) {
  const [selectedStackId, setSelectedStackId] = useState(stacks[0]?.id ?? "");
  const selectedStack = stacks.find((stack) => stack.id === selectedStackId) ?? stacks[0];

  const graph = useMemo(() => {
    if (!selectedStack) {
      return { nodes: [], edges: [], positions: new Map<string, { x: number; y: number }>(), width: 980, height: 220 };
    }
    const selectedIds = new Set([...selectedStack.componentIds, ...selectedStack.benchmarkIds]);
    const visibleNodes = nodes.filter((node) => selectedIds.has(node.id));
    const visibleEdges = edges.filter((edge) => selectedIds.has(edge.source) && selectedIds.has(edge.target));
    const positions = new Map<string, { x: number; y: number }>();
    const width = 1060;
    const columnWidth = 145;
    const top = 44;
    const rowHeight = 74;
    const grouped = new Map<string, SupplyChainNode[]>();

    for (const kind of kindOrder) {
      grouped.set(
        kind,
        visibleNodes.filter((node) => node.kind === kind).sort((a, b) => a.name.localeCompare(b.name))
      );
    }

    let maxRows = 1;
    for (const [column, kind] of kindOrder.entries()) {
      const group = grouped.get(kind) ?? [];
      maxRows = Math.max(maxRows, group.length);
      for (const [row, node] of group.entries()) {
        positions.set(node.id, { x: 24 + column * columnWidth, y: top + row * rowHeight });
      }
    }

    return {
      nodes: visibleNodes,
      edges: visibleEdges,
      positions,
      width,
      height: top + maxRows * rowHeight + 28
    };
  }, [edges, nodes, selectedStack]);

  if (!selectedStack) {
    return null;
  }

  return (
    <section className="interactiveGraph" aria-label="Selected supply-chain graph">
      <div className="graphHeader">
        <div>
          <h2>Supply-chain graph</h2>
          <p>{selectedStack.applicationName} with {selectedStack.modelName}</p>
        </div>
        <label>
          Stack
          <select value={selectedStack.id} onChange={(event) => setSelectedStackId(event.target.value)}>
            {stacks.map((stack) => (
              <option key={stack.id} value={stack.id}>
                {stack.applicationName} + {stack.modelName}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="graphCanvas">
        <svg width={graph.width} height={graph.height} viewBox={`0 0 ${graph.width} ${graph.height}`}>
          <defs>
            <marker id="interactive-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#667085" />
            </marker>
          </defs>
          {kindOrder.map((kind, column) => (
            <text key={kind} x={24 + column * 145} y={22} fontSize="11" fontWeight="700" fill="#344054">
              {kind.toUpperCase()}
            </text>
          ))}
          {graph.edges.map((edge) => {
            const source = graph.positions.get(edge.source);
            const target = graph.positions.get(edge.target);
            if (!source || !target) return null;
            const sx = source.x + 116;
            const sy = source.y + 24;
            const tx = target.x;
            const ty = target.y + 24;
            const midX = (sx + tx) / 2;
            const midY = (sy + ty) / 2;
            return (
              <g key={edge.id}>
                <path
                  d={`M ${sx} ${sy} C ${midX} ${sy}, ${midX} ${ty}, ${tx} ${ty}`}
                  fill="none"
                  stroke="#667085"
                  strokeWidth="1.2"
                  opacity="0.62"
                  markerEnd="url(#interactive-arrow)"
                />
                <text x={midX} y={midY - 4} textAnchor="middle" fontSize="9" fill="#475467">
                  {edge.kind}
                </text>
              </g>
            );
          })}
          {graph.nodes.map((node) => {
            const position = graph.positions.get(node.id);
            if (!position) return null;
            return (
              <g key={node.id} transform={`translate(${position.x}, ${position.y})`}>
                <rect width="116" height="48" rx="7" fill={fillByKind[node.kind]} stroke="#98A2B3" />
                {wrap(node.name).map((line, index) => (
                  <text key={line} x="10" y={18 + index * 14} fontSize="11" fontWeight={index === 0 ? "700" : "500"} fill="#101828">
                    {line}
                  </text>
                ))}
                <text x="10" y="41" fontSize="9" fill="#475467">
                  {node.openness.replaceAll("_", " ")}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </section>
  );
}
