import type { IconDefinition } from "../types.js";

export const architectureIcons: readonly IconDefinition[] = [
  {
    "id": "contract",
    "name": "Contract",
    "family": "architecture",
    "definition": "An explicit agreement about inputs, outputs, behavior, and guarantees.",
    "visualCue": "document + linked seal",
    "avoid": "file-contract",
    "body": "<path d=\"M6.5 3.8h7l4 4v12.4H6.5z\"/><path d=\"M13.5 3.8v4h4\"/><circle cx=\"15.5\" cy=\"16.5\" r=\"3.2\" fill=\"var(--jvl-surface, #fffefa)\"/><path d=\"M9 10h5M9 13h3M14.1 16.5l1 1 1.9-2.1\"/>"
  },
  {
    "id": "facade",
    "name": "Facade",
    "family": "architecture",
    "definition": "A simple front that hides a more complex subsystem.",
    "visualCue": "front wall + hidden blocks",
    "avoid": "storefront",
    "body": "<rect x=\"5\" y=\"5\" width=\"9\" height=\"14\" rx=\"1\"/><path d=\"M8 19v-5h3v5M14 8h3V5h2v14h-5M8 8h3M8 11h3\"/>"
  },
  {
    "id": "module",
    "name": "Module",
    "family": "architecture",
    "definition": "A cohesive unit that exposes some members and hides others.",
    "visualCue": "box with one public port",
    "avoid": "card only for UI modules",
    "body": "<path d=\"m12 3.5 7 4v9l-7 4-7-4v-9zM5 7.5l7 4 7-4M12 11.5v9\"/><path d=\"M19 12h2v3h-2\"/>"
  },
  {
    "id": "package",
    "name": "Package",
    "family": "architecture",
    "definition": "A distributable collection of modules and metadata.",
    "visualCue": "closed parcel of modules",
    "avoid": "box + label",
    "body": "<path d=\"m4.5 7 7.5-4 7.5 4v10L12 21l-7.5-4zM4.5 7l7.5 4 7.5-4M12 11v10M8.5 5.1 16 9\"/><path d=\"M8 14h2\"/>"
  },
  {
    "id": "adapter",
    "name": "Adapter",
    "family": "architecture",
    "definition": "A translator that lets incompatible interfaces work together.",
    "visualCue": "round port converted to square port",
    "avoid": "translation block",
    "body": "<circle cx=\"4.5\" cy=\"12\" r=\"2.5\"/><path d=\"M7 12h2\"/><rect x=\"9\" y=\"6.5\" width=\"7\" height=\"11\" rx=\"2\"/><path d=\"M11.2 10h2.6m-1.3-1.3 1.3 1.3-1.3 1.3M13.8 14h-2.6m1.3-1.3-1.3 1.3 1.3 1.3M16 12h2\"/><rect x=\"18\" y=\"9.5\" width=\"5\" height=\"5\" rx=\".7\"/>"
  },
  {
    "id": "service",
    "name": "Service",
    "family": "architecture",
    "definition": "A boundary offering a cohesive set of operations.",
    "visualCue": "operation tray behind a port",
    "avoid": "counter or endpoint",
    "body": "<rect x=\"4\" y=\"6\" width=\"16\" height=\"12\" rx=\"2\"/><path d=\"M8 10h8M8 14h5M2.5 10v4M21.5 10v4\"/><circle cx=\"16\" cy=\"14\" r=\"1\" fill=\"currentColor\"/>"
  },
  {
    "id": "repository",
    "name": "Repository",
    "family": "architecture",
    "definition": "A collection-like boundary over stored domain objects.",
    "visualCue": "object drawer above storage",
    "avoid": "archive box",
    "body": "<path d=\"M4 7h16v12H4zM3 4h18v3H3zM9 11h6\"/><path d=\"M12 14v3M10.5 15.5h3\"/>"
  },
  {
    "id": "factory",
    "name": "Factory",
    "family": "architecture",
    "definition": "A creator that chooses or assembles concrete objects.",
    "visualCue": "input parts → object",
    "avoid": "conveyor + cube",
    "body": "<path d=\"M3 17h18M5 17v-7l4 3V9l4 3V6h6v11M15 9h2M7 6h2v3\"/>"
  },
  {
    "id": "strategy",
    "name": "Strategy",
    "family": "architecture",
    "definition": "A replaceable algorithm selected behind a stable boundary.",
    "visualCue": "interchangeable choices feeding one stable executor",
    "avoid": "selected algorithm cartridge",
    "body": "<rect x=\"3\" y=\"3.5\" width=\"5\" height=\"4\" rx=\".8\"/><rect x=\"3\" y=\"10\" width=\"5\" height=\"4\" rx=\".8\"/><rect x=\"3\" y=\"16.5\" width=\"5\" height=\"4\" rx=\".8\"/><circle cx=\"5.5\" cy=\"12\" r=\".8\" fill=\"currentColor\"/><path d=\"M8 5.5h2.5M8 18.5h2.5\" stroke-dasharray=\"1.2 1.2\"/><path d=\"M8 12h7m-1.7-1.7L15 12l-1.7 1.7\"/><rect x=\"15\" y=\"7\" width=\"6\" height=\"10\" rx=\"2\"/><text x=\"18\" y=\"14.2\" fill=\"currentColor\" stroke=\"none\" font-family=\"ui-monospace, SFMono-Regular, Menlo, monospace\" font-size=\"7\" text-anchor=\"middle\">f</text>"
  },
  {
    "id": "middleware",
    "name": "Middleware",
    "family": "architecture",
    "definition": "Behavior placed between a request and its destination.",
    "visualCue": "intercepting layer on a route",
    "avoid": "stacked gates",
    "body": "<path d=\"M3 12h18M7 9l3 3-3 3M14 7v10h4V7z\"/>"
  },
  {
    "id": "dependency",
    "name": "Dependency",
    "family": "architecture",
    "definition": "A capability one component requires from another.",
    "visualCue": "directed link between modules",
    "avoid": "chain link",
    "body": "<rect x=\"3.5\" y=\"7\" width=\"6\" height=\"10\" rx=\"1.5\"/><rect x=\"14.5\" y=\"7\" width=\"6\" height=\"10\" rx=\"1.5\"/><path d=\"M9.5 12h5m-2-2 2 2-2 2\"/>"
  },
  {
    "id": "domain-service",
    "name": "Domain service",
    "family": "architecture",
    "definition": "Business behavior that does not naturally belong to one entity.",
    "visualCue": "shared domain operation between entities",
    "avoid": "business rule bridge",
    "body": "<rect x=\"2.5\" y=\"4\" width=\"19\" height=\"16\" rx=\"3\" stroke-dasharray=\"2 2\"/><rect x=\"4.5\" y=\"9\" width=\"4\" height=\"6\" rx=\"1\"/><circle cx=\"12\" cy=\"12\" r=\"2.7\"/><rect x=\"15.5\" y=\"9\" width=\"4\" height=\"6\" rx=\"1\"/><path d=\"M8.5 12h.8M14.7 12h.8M12 7.5v1M12 15.5v1\"/><text x=\"12\" y=\"14.1\" fill=\"currentColor\" stroke=\"none\" font-family=\"ui-monospace, SFMono-Regular, Menlo, monospace\" font-size=\"7\" text-anchor=\"middle\">ƒ</text>"
  }
];
