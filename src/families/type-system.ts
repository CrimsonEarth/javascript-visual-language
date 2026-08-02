import type { IconDefinition } from "../types.js";

export const typeSystemIcons: readonly IconDefinition[] = [
  {
    "id": "type",
    "name": "Type",
    "family": "type-system",
    "definition": "A description of the values an expression may hold.",
    "visualCue": "T label on a boundary",
    "avoid": "tag or blueprint",
    "body": "<rect x=\"4.5\" y=\"4.5\" width=\"15\" height=\"15\" rx=\"2.2\"/><text x=\"12\" y=\"14.4\" fill=\"currentColor\" stroke=\"none\" font-family=\"ui-monospace, SFMono-Regular, Menlo, monospace\" font-size=\"7\" text-anchor=\"middle\">T</text><path d=\"M7 7.5h10\"/>"
  },
  {
    "id": "interface",
    "name": "Interface",
    "family": "type-system",
    "definition": "A named boundary describing compatible structure or behavior.",
    "visualCue": "two ports meeting at a boundary",
    "avoid": "plug or handshake",
    "body": "<path d=\"M3.5 6h6v12h-6M20.5 6h-6v12h6M9.5 9.2H12M12 14.8H9.5M14.5 9.2H12M12 14.8h2.5\"/><circle cx=\"12\" cy=\"9.2\" r=\"1\" fill=\"currentColor\"/><circle cx=\"12\" cy=\"14.8\" r=\"1\" fill=\"currentColor\"/><path d=\"M12 4v2M12 18v2\" stroke-dasharray=\"1 1\"/>"
  },
  {
    "id": "schema",
    "name": "Schema",
    "family": "type-system",
    "definition": "A machine-readable description and validation shape for data.",
    "visualCue": "braces + guide rails",
    "avoid": "file-bracket-curly",
    "body": "<path d=\"M8 4.5H5.5v6H4v3h1.5v6H8M16 4.5h2.5v6H20v3h-1.5v6H16M10 8h4M10 12h4M10 16h4\"/><circle cx=\"10\" cy=\"8\" r=\".7\" fill=\"currentColor\"/><circle cx=\"14\" cy=\"12\" r=\".7\" fill=\"currentColor\"/><circle cx=\"10\" cy=\"16\" r=\".7\" fill=\"currentColor\"/>"
  },
  {
    "id": "class",
    "name": "Class",
    "family": "type-system",
    "definition": "A blueprint combining instance shape and behavior.",
    "visualCue": "blueprint producing an instance",
    "avoid": "class card + object",
    "body": "<rect x=\"3.5\" y=\"4\" width=\"11\" height=\"16\" rx=\"2\"/><path d=\"M3.5 9h11M6.5 12h5M6.5 15h4\"/><text x=\"9\" y=\"7.7\" fill=\"currentColor\" stroke=\"none\" font-family=\"ui-monospace, SFMono-Regular, Menlo, monospace\" font-size=\"7\" text-anchor=\"middle\">C</text><path d=\"M14.5 12h3m-1.5-1.5 1.5 1.5-1.5 1.5\"/><rect x=\"17.5\" y=\"9\" width=\"4\" height=\"6\" rx=\"1\"/>"
  },
  {
    "id": "enum",
    "name": "Enum",
    "family": "type-system",
    "definition": "A closed set of named choices.",
    "visualCue": "bounded list of labeled options",
    "avoid": "list + hash",
    "body": "<rect x=\"4.5\" y=\"4.5\" width=\"15\" height=\"15\" rx=\"2.2\"/><path d=\"M10 8h6M10 12h6M10 16h6\"/><circle cx=\"7.5\" cy=\"8\" r=\".8\" fill=\"currentColor\"/><circle cx=\"7.5\" cy=\"12\" r=\".8\" fill=\"currentColor\"/><circle cx=\"7.5\" cy=\"16\" r=\".8\" fill=\"currentColor\"/>"
  },
  {
    "id": "union",
    "name": "Union",
    "family": "type-system",
    "definition": "A value that may be one of several types.",
    "visualCue": "overlapping circles",
    "avoid": "A | B",
    "body": "<circle cx=\"9.5\" cy=\"12\" r=\"6.2\"/><circle cx=\"14.5\" cy=\"12\" r=\"6.2\"/>"
  },
  {
    "id": "intersection",
    "name": "Intersection",
    "family": "type-system",
    "definition": "A value that must satisfy several types at once.",
    "visualCue": "overlap emphasized",
    "avoid": "A & B",
    "body": "<circle cx=\"9.5\" cy=\"12\" r=\"6.2\"/><circle cx=\"14.5\" cy=\"12\" r=\"6.2\"/><path d=\"M12 6.3c2.2 1.2 3.7 3.2 3.7 5.7s-1.5 4.5-3.7 5.7c-2.2-1.2-3.7-3.2-3.7-5.7S9.8 7.5 12 6.3Z\" fill=\"currentColor\" opacity=\".13\"/>"
  },
  {
    "id": "generic",
    "name": "Generic",
    "family": "type-system",
    "definition": "A reusable type or function parameterized by another type.",
    "visualCue": "container with replaceable T slot",
    "avoid": "angle brackets",
    "body": "<path d=\"m7.5 5-4 7 4 7M16.5 5l4 7-4 7\"/><text x=\"12\" y=\"14.4\" fill=\"currentColor\" stroke=\"none\" font-family=\"ui-monospace, SFMono-Regular, Menlo, monospace\" font-size=\"7\" text-anchor=\"middle\">T</text>"
  },
  {
    "id": "decorator",
    "name": "Decorator",
    "family": "type-system",
    "definition": "Metadata or behavior applied around a declaration.",
    "visualCue": "@ annotation applied above a declaration",
    "avoid": "wrapper ribbon",
    "body": "<text x=\"7\" y=\"8.2\" fill=\"currentColor\" stroke=\"none\" font-family=\"ui-monospace, SFMono-Regular, Menlo, monospace\" font-size=\"7\" text-anchor=\"middle\">@</text><path d=\"M10 6h7v4m-1.7-1.7L17 10l1.7-1.7\"/><rect x=\"5\" y=\"11\" width=\"14\" height=\"9\" rx=\"2\"/><path d=\"M8 14h8M8 17h5\"/>"
  },
  {
    "id": "mixin",
    "name": "Mixin",
    "family": "type-system",
    "definition": "Reusable behavior combined into another class or object.",
    "visualCue": "two strands joining one body",
    "avoid": "layered tiles",
    "body": "<path d=\"M4 6c5 0 5 6 9 6s4-4 7-4M4 18c5 0 5-6 9-6s4 4 7 4\"/><circle cx=\"4\" cy=\"6\" r=\"1\" fill=\"currentColor\"/><circle cx=\"4\" cy=\"18\" r=\"1\" fill=\"currentColor\"/><circle cx=\"20\" cy=\"8\" r=\"1\" fill=\"currentColor\"/><circle cx=\"20\" cy=\"16\" r=\"1\" fill=\"currentColor\"/>"
  },
  {
    "id": "namespace",
    "name": "Namespace",
    "family": "type-system",
    "definition": "A named scope grouping related declarations.",
    "visualCue": "nested boundaries",
    "avoid": "folder + braces",
    "body": "<rect x=\"4\" y=\"6\" width=\"16\" height=\"13\" rx=\"2\"/><path d=\"M4 9h16M7 6V4h5l2 2M9 12H7.5v4H9M15 12h1.5v4H15\"/>"
  },
  {
    "id": "type-guard",
    "name": "Type guard",
    "family": "type-system",
    "definition": "A runtime check that narrows a type.",
    "visualCue": "many possible types narrowed to T",
    "avoid": "checked narrowing gate",
    "body": "<circle cx=\"4.5\" cy=\"6.5\" r=\"1\"/><circle cx=\"4.5\" cy=\"12\" r=\"1\" fill=\"currentColor\"/><circle cx=\"4.5\" cy=\"17.5\" r=\"1\"/><path d=\"M6 5h7l3 4v6l-3 4H6M16 12h3m-1.5-1.5L19 12l-1.5 1.5\"/><text x=\"10.5\" y=\"14.2\" fill=\"currentColor\" stroke=\"none\" font-family=\"ui-monospace, SFMono-Regular, Menlo, monospace\" font-size=\"7\" text-anchor=\"middle\">✓</text><rect x=\"19\" y=\"9\" width=\"3\" height=\"6\" rx=\".8\"/><text x=\"20.5\" y=\"14.1\" fill=\"currentColor\" stroke=\"none\" font-family=\"ui-monospace, SFMono-Regular, Menlo, monospace\" font-size=\"7\" text-anchor=\"middle\">T</text>"
  },
  {
    "id": "discriminated-union",
    "name": "Discriminated union",
    "family": "type-system",
    "definition": "A union whose variants are selected by a shared literal field.",
    "visualCue": "union + selector tag",
    "avoid": "branch with labels",
    "body": "<path d=\"M5 6v4a2 2 0 0 0 2 2h4m-6 6v-4a2 2 0 0 1 2-2h4M11 12h3M14 8l4 4-4 4\"/><rect x=\"4\" y=\"4\" width=\"3\" height=\"3\" rx=\".5\"/><rect x=\"4\" y=\"17\" width=\"3\" height=\"3\" rx=\".5\"/>"
  }
];
