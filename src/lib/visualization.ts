import { type EdgeKind, type NodeKind, type OpenSourceClass, type SupplyChainGraph } from "../schema";

const nodeOrder: NodeKind[] = [
  "application",
  "model",
  "software",
  "dataset",
  "benchmark",
  "organization",
  "infrastructure",
  "license"
];

const nodeFill: Record<NodeKind, string> = {
  application: "#D8F0E4",
  model: "#E7DDF7",
  dataset: "#F6E5CB",
  software: "#D7E8FA",
  benchmark: "#F8D5DF",
  organization: "#E2E5EA",
  license: "#F0E6B2",
  infrastructure: "#D7ECEB"
};

const opennessStroke: Record<OpenSourceClass, string> = {
  open_source: "#16803A",
  open_core: "#7A5C00",
  open_weights: "#B06900",
  source_available: "#9A3412",
  proprietary: "#B42318",
  unknown: "#667085"
};

const edgeStroke: Record<EdgeKind, string> = {
  supports: "#2563EB",
  depends_on: "#475467",
  trained_on: "#A15C07",
  trained_with: "#0E7490",
  evaluated_on: "#C11574",
  developed_by: "#344054",
  hosted_by: "#147D64",
  licensed_as: "#7A5C00",
  derived_from: "#7C3AED",
  uses_data: "#A15C07",
  implements: "#0E7490"
};

function escapeXml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function wrapText(text: string, limit = 27) {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let current: string[] = [];
  for (const word of words) {
    const candidate = [...current, word].join(" ");
    if (candidate.length > limit && current.length > 0) {
      lines.push(current.join(" "));
      current = [word];
    } else {
      current.push(word);
    }
  }
  if (current.length > 0) {
    lines.push(current.join(" "));
  }
  return lines.slice(0, 3);
}

export function renderSupplyChainSvg(graph: SupplyChainGraph) {
  const byKind = new Map<NodeKind, typeof graph.nodes>();
  for (const kind of nodeOrder) {
    byKind.set(
      kind,
      graph.nodes.filter((node) => node.kind === kind).sort((a, b) => a.name.localeCompare(b.name))
    );
  }

  const cardWidth = 190;
  const cardHeight = 58;
  const xGap = 34;
  const yGap = 28;
  const left = 36;
  const top = 112;
  const width = left * 2 + nodeOrder.length * cardWidth + (nodeOrder.length - 1) * xGap;
  const maxRows = Math.max(...Array.from(byKind.values()).map((nodes) => nodes.length));
  const height = top + maxRows * (cardHeight + yGap) + 132;

  const positions = new Map<string, { x: number; y: number }>();
  for (const [column, kind] of nodeOrder.entries()) {
    const x = left + column * (cardWidth + xGap);
    for (const [row, node] of (byKind.get(kind) ?? []).entries()) {
      positions.set(node.id, { x, y: top + row * (cardHeight + yGap) });
    }
  }

  const lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`,
    "<defs>",
    '<marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">',
    '<path d="M 0 0 L 10 5 L 0 10 z" fill="#667085"/>',
    "</marker>",
    "</defs>",
    '<rect width="100%" height="100%" fill="#FCFCFD"/>',
    '<text x="36" y="40" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="700" fill="#101828">AI supply-chain seed graph</text>',
    '<text x="36" y="68" font-family="Inter, Arial, sans-serif" font-size="13" fill="#475467">Generated from data/*.json. Stroke color indicates openness class; edge labels indicate dependency semantics.</text>'
  ];

  for (const [column, kind] of nodeOrder.entries()) {
    const x = left + column * (cardWidth + xGap);
    lines.push(
      `<text x="${x}" y="96" font-family="Inter, Arial, sans-serif" font-size="12" font-weight="700" fill="#344054">${escapeXml(
        kind.toUpperCase()
      )}</text>`
    );
  }

  for (const edge of graph.edges) {
    const source = positions.get(edge.source);
    const target = positions.get(edge.target);
    if (!source || !target) {
      continue;
    }
    let startX = source.x + cardWidth;
    const startY = source.y + cardHeight / 2;
    let endX = target.x;
    const endY = target.y + cardHeight / 2;
    if (target.x < source.x) {
      startX = source.x;
      endX = target.x + cardWidth;
    }
    const dx = Math.max(36, Math.abs(endX - startX) / 2);
    const color = edgeStroke[edge.kind];
    const opacity = ["licensed_as", "hosted_by", "developed_by"].includes(edge.kind) ? "0.38" : "0.58";
    lines.push(
      `<path d="M ${startX.toFixed(1)} ${startY.toFixed(1)} C ${(startX + dx).toFixed(1)} ${startY.toFixed(
        1
      )}, ${(endX - dx).toFixed(1)} ${endY.toFixed(1)}, ${endX.toFixed(1)} ${endY.toFixed(
        1
      )}" fill="none" stroke="${color}" stroke-width="1.2" opacity="${opacity}" marker-end="url(#arrow)"/>`
    );
    if (["supports", "trained_on", "evaluated_on", "depends_on"].includes(edge.kind)) {
      lines.push(
        `<text x="${((startX + endX) / 2).toFixed(1)}" y="${((startY + endY) / 2 - 4).toFixed(
          1
        )}" font-family="Inter, Arial, sans-serif" font-size="9" text-anchor="middle" fill="${color}" opacity="0.84">${escapeXml(
          edge.kind
        )}</text>`
      );
    }
  }

  for (const node of graph.nodes) {
    const position = positions.get(node.id);
    if (!position) {
      continue;
    }
    const { x, y } = position;
    const stroke = opennessStroke[node.openness];
    lines.push(
      `<rect x="${x}" y="${y}" width="${cardWidth}" height="${cardHeight}" rx="7" fill="${
        nodeFill[node.kind]
      }" stroke="${stroke}" stroke-width="2"/>`
    );
    lines.push(`<circle cx="${x + 14}" cy="${y + 16}" r="5" fill="${stroke}"/>`);
    for (const [index, line] of wrapText(node.name).entries()) {
      lines.push(
        `<text x="${x + 26}" y="${y + 18 + index * 14}" font-family="Inter, Arial, sans-serif" font-size="12" font-weight="${
          index === 0 ? "700" : "500"
        }" fill="#101828">${escapeXml(line)}</text>`
      );
    }
    const caption = node.tasks.length > 0 ? node.tasks.slice(0, 2).join(", ") : node.openness;
    lines.push(
      `<text x="${x + 26}" y="${y + 50}" font-family="Inter, Arial, sans-serif" font-size="10" fill="#475467">${escapeXml(
        caption.slice(0, 31)
      )}</text>`
    );
  }

  const legendY = height - 70;
  const legendItems: [OpenSourceClass, string][] = [
    ["open_source", "open source"],
    ["open_core", "open core"],
    ["open_weights", "open weights"],
    ["source_available", "source available"],
    ["unknown", "unknown"]
  ];
  for (const [index, [openness, label]] of legendItems.entries()) {
    const x = 36 + index * 170;
    lines.push(`<circle cx="${x}" cy="${legendY}" r="6" fill="${opennessStroke[openness]}"/>`);
    lines.push(
      `<text x="${x + 12}" y="${legendY + 4}" font-family="Inter, Arial, sans-serif" font-size="11" fill="#344054">${escapeXml(
        label
      )}</text>`
    );
  }

  lines.push("</svg>");
  return `${lines.join("\n")}\n`;
}
