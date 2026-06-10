import type { StackLayerCoverage } from "./layers";
import type { RankedStack } from "./ranking";
import type { SupplyChainGraph, SupplyChainNode } from "../schema";

export type NavigationItem = {
  label: string;
  href: string;
  slug: string;
  count?: number;
};

export type ConsumerCategory = {
  name: string;
  slug: string;
  stacks: RankedStack[];
  topStack: RankedStack;
  stackCount: number;
  applicationCount: number;
  modelCount: number;
};

export type ComponentLayerEntry = StackLayerCoverage["layers"][number]["entries"][number] & {
  node?: SupplyChainNode;
};

export type ComponentLayer = Omit<StackLayerCoverage["layers"][number], "entries"> & {
  entries: ComponentLayerEntry[];
};

export function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function formatTitle(value: string) {
  return value
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function getConsumerCategories(stacks: RankedStack[]): ConsumerCategory[] {
  const stacksByTask = new Map<string, RankedStack[]>();

  for (const stack of stacks) {
    for (const task of stack.tasks) {
      stacksByTask.set(task, [...(stacksByTask.get(task) ?? []), stack]);
    }
  }

  return [...stacksByTask.entries()]
    .map(([name, taskStacks]) => {
      const sorted = [...taskStacks].sort((a, b) => b.overallScore - a.overallScore || b.opennessScore - a.opennessScore);
      return {
        name,
        slug: slugify(name),
        stacks: sorted,
        topStack: sorted[0],
        stackCount: sorted.length,
        applicationCount: new Set(sorted.map((stack) => stack.applicationId)).size,
        modelCount: new Set(sorted.map((stack) => stack.modelId)).size
      };
    })
    .filter((category): category is ConsumerCategory => Boolean(category.topStack))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getCategoryNavigation(stacks: RankedStack[]): NavigationItem[] {
  return getConsumerCategories(stacks).map((category) => ({
    label: formatTitle(category.name),
    href: `/categories/${category.slug}`,
    slug: category.slug,
    count: category.stackCount
  }));
}

export function getComponentTechnologyLayers(graph: SupplyChainGraph, coverage: StackLayerCoverage): ComponentLayer[] {
  const nodeById = new Map(graph.nodes.map((node) => [node.id, node]));

  return coverage.layers
    .filter((layer) => layer.id !== "applications")
    .map((layer) => ({
      ...layer,
      entries: layer.entries.map((entry) => ({
        ...entry,
        node: nodeById.get(entry.nodeId)
      }))
    }));
}

export function getComponentNavigation(graph: SupplyChainGraph, coverage: StackLayerCoverage): NavigationItem[] {
  return getComponentTechnologyLayers(graph, coverage).map((layer) => ({
    label: layer.name,
    href: `/components/${layer.id}`,
    slug: layer.id,
    count: layer.entries.length
  }));
}
