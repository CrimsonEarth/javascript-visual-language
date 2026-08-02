import type { IconFamily } from "./types.js";

export const ICON_VIEW_BOX = "0 0 24 24";
export const ICON_STROKE_WIDTH = 1.45;
export const ICON_STROKE_LINECAP = "round";
export const ICON_STROKE_LINEJOIN = "round";

export const families = [
  {
    id: "js-basics",
    name: "JS basics",
    description: "Bindings, expressions, functions, calls, and return behavior.",
    accent: "#315d82",
    soft: "#e7eff5",
  },
  {
    id: "data-collections",
    name: "Data & collections",
    description: "Values, structures, collections, and portable data.",
    accent: "#47745d",
    soft: "#e8f0ea",
  },
  {
    id: "type-system",
    name: "Type system",
    description: "Shapes, compatibility, narrowing, and reusable type relationships.",
    accent: "#745982",
    soft: "#eee8f1",
  },
  {
    id: "control-flow",
    name: "Control flow",
    description: "Decisions, repetition, asynchronous work, signals, and routes.",
    accent: "#b86a2e",
    soft: "#f6e9dc",
  },
  {
    id: "architecture",
    name: "Architecture",
    description: "Contracts, boundaries, composition, storage abstractions, and dependencies.",
    accent: "#9b5d67",
    soft: "#f3e8ea",
  },
  {
    id: "systems-agents",
    name: "Systems & agents",
    description: "Commands, workers, durable actions, authorization, and orchestration.",
    accent: "#596772",
    soft: "#e9edf0",
  },
] as const satisfies readonly IconFamily[];

export const familyById = new Map(families.map((family) => [family.id, family]));
