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
  description: string;
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

type ConsumerCategoryDefinition = {
  name: string;
  slug: string;
  description: string;
  matches: (stack: RankedStack) => boolean;
};

function hasApplicationTask(stack: RankedStack, tasks: string[]) {
  return tasks.some((task) => stack.applicationTasks.includes(task));
}

export const consumerCategoryDefinitions: ConsumerCategoryDefinition[] = [
  {
    name: "Coding Agent",
    slug: "coding-agent",
    description: "Developer-facing agents that can modify repositories, run commands, or automate coding workflows.",
    matches: (stack) => hasApplicationTask(stack, ["agentic-coding", "software-agents", "repository-automation", "coding-agent"])
  },
  {
    name: "Code Completion",
    slug: "code-completion",
    description: "Developer-facing assistants for inline coding help, IDE workflows, and code suggestions.",
    matches: (stack) =>
      hasApplicationTask(stack, ["developer-assistant", "code-completion"]) || stack.applicationId === "application:continue"
  },
  {
    name: "Chat Interface",
    slug: "chat-interface",
    description: "User-facing chat applications for local, self-hosted, or multi-provider language model access.",
    matches: (stack) => hasApplicationTask(stack, ["chat"])
  },
  {
    name: "Agent Workspace",
    slug: "agent-workspace",
    description: "User-facing workspaces for configuring, coordinating, or operating AI agents.",
    matches: (stack) => hasApplicationTask(stack, ["agents"])
  },
  {
    name: "AI-powered Search",
    slug: "ai-powered-search",
    description: "Applications for retrieval, document question answering, and knowledge-base search.",
    matches: (stack) => hasApplicationTask(stack, ["rag", "ai-powered-search", "semantic-search"])
  },
  {
    name: "Image Generation Platform",
    slug: "image-generation-platform",
    description: "Creator-facing applications for image generation, image editing, and diffusion workflows.",
    matches: (stack) => hasApplicationTask(stack, ["image-generation", "image-editing", "workflow-automation"])
  },
  {
    name: "Local LLM Desktop",
    slug: "local-llm-desktop",
    description: "Desktop applications for running local language models on consumer hardware.",
    matches: (stack) => hasApplicationTask(stack, ["local-inference"])
  }
];

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
  return consumerCategoryDefinitions
    .map((definition) => {
      const sorted = stacks
        .filter((stack) => definition.matches(stack))
        .sort((a, b) => b.overallScore - a.overallScore || b.opennessScore - a.opennessScore);
      return {
        name: definition.name,
        slug: definition.slug,
        description: definition.description,
        stacks: sorted,
        topStack: sorted[0],
        stackCount: sorted.length,
        applicationCount: new Set(sorted.map((stack) => stack.applicationId)).size,
        modelCount: new Set(sorted.map((stack) => stack.modelId)).size
      };
    })
    .filter((category): category is ConsumerCategory => Boolean(category.topStack));
}

export function getCategoryNavigation(stacks: RankedStack[]): NavigationItem[] {
  return getConsumerCategories(stacks).map((category) => ({
    label: category.name,
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
