import type { IconDefinition } from "../types.js";

export const dataCollectionIcons: readonly IconDefinition[] = [
  {
    "id": "primitive",
    "name": "Primitive",
    "family": "data-collections",
    "definition": "A single atomic value such as string, number, boolean, null, or symbol.",
    "visualCue": "single dot in a value cell",
    "avoid": "small gem",
    "body": "<rect x=\"4.5\" y=\"4.5\" width=\"15\" height=\"15\" rx=\"2.2\"/><circle cx=\"12\" cy=\"12\" r=\"2.2\" fill=\"currentColor\"/>"
  },
  {
    "id": "string",
    "name": "String",
    "family": "data-collections",
    "definition": "An ordered sequence of text characters.",
    "visualCue": "quoted line",
    "avoid": "A–Z marks",
    "body": "<path d=\"M6 8.2 4.5 10v2H7v-2H5.3M17 8.2 15.5 10v2H18v-2h-1.7M8.5 15.5h7\"/>"
  },
  {
    "id": "number",
    "name": "Number",
    "family": "data-collections",
    "definition": "A numeric scalar value.",
    "visualCue": "number sign in a cell",
    "avoid": "123",
    "body": "<rect x=\"4.5\" y=\"4.5\" width=\"15\" height=\"15\" rx=\"2.2\"/><text x=\"12\" y=\"14.4\" fill=\"currentColor\" stroke=\"none\" font-family=\"ui-monospace, SFMono-Regular, Menlo, monospace\" font-size=\"7\" text-anchor=\"middle\">#</text>"
  },
  {
    "id": "boolean",
    "name": "Boolean",
    "family": "data-collections",
    "definition": "A two-state true or false value.",
    "visualCue": "two-position toggle",
    "avoid": "split circle",
    "body": "<rect x=\"3.5\" y=\"7.5\" width=\"17\" height=\"9\" rx=\"4.5\"/><path d=\"M12 7.5v9\"/><circle cx=\"8\" cy=\"12\" r=\"2.1\"/><circle cx=\"16\" cy=\"12\" r=\"2.1\" fill=\"currentColor\"/>"
  },
  {
    "id": "array",
    "name": "Array",
    "family": "data-collections",
    "definition": "An ordered, index-addressed collection.",
    "visualCue": "brackets around repeated cells",
    "avoid": "row with indices",
    "body": "<path d=\"M6.5 4.5h-2v15h2M17.5 4.5h2v15h-2\"/><rect x=\"7.5\" y=\"8\" width=\"3\" height=\"8\" rx=\".7\"/><rect x=\"11\" y=\"8\" width=\"3\" height=\"8\" rx=\".7\"/><rect x=\"14.5\" y=\"8\" width=\"2\" height=\"8\" rx=\".7\"/>"
  },
  {
    "id": "tuple",
    "name": "Tuple",
    "family": "data-collections",
    "definition": "A fixed-length array whose positions have specific types.",
    "visualCue": "numbered fixed cells",
    "avoid": "array + pin",
    "body": "<path d=\"M5.5 5h-2v14h2M18.5 5h2v14h-2\"/><rect x=\"6.5\" y=\"8\" width=\"4\" height=\"8\" rx=\".7\"/><rect x=\"11\" y=\"8\" width=\"6.5\" height=\"8\" rx=\".7\"/><path d=\"M8.5 6v-2M14 6V4\"/>"
  },
  {
    "id": "object",
    "name": "Object",
    "family": "data-collections",
    "definition": "A keyed collection of properties and values.",
    "visualCue": "braces around key/value rows",
    "avoid": "node cluster",
    "body": "<path d=\"M8 4.5H5.8v6H4v3h1.8v6H8M16 4.5h2.2v6H20v3h-1.8v6H16\"/><circle cx=\"11\" cy=\"9\" r=\"1\" fill=\"currentColor\"/><path d=\"M13.5 9H16M10 14h3M14.5 14H16\"/>"
  },
  {
    "id": "map",
    "name": "Map",
    "family": "data-collections",
    "definition": "A collection that associates arbitrary keys with values.",
    "visualCue": "paired key → value columns",
    "avoid": "folded map",
    "body": "<path d=\"M4.5 5.5h6v5h-6zM13.5 13.5h6v5h-6zM10.5 8h3a3 3 0 0 1 3 3v2.5m-2-2 2 2 2-2\"/><circle cx=\"7.5\" cy=\"8\" r=\".8\" fill=\"currentColor\"/><path d=\"M15.5 16h2\"/>"
  },
  {
    "id": "set",
    "name": "Set",
    "family": "data-collections",
    "definition": "A collection of unique values.",
    "visualCue": "distinct dots inside a boundary",
    "avoid": "ring of dots",
    "body": "<circle cx=\"12\" cy=\"12\" r=\"8\"/><circle cx=\"9\" cy=\"9\" r=\"1.2\" fill=\"currentColor\"/><circle cx=\"15\" cy=\"9\" r=\"1.2\" fill=\"currentColor\"/><circle cx=\"12\" cy=\"15\" r=\"1.2\" fill=\"currentColor\"/>"
  },
  {
    "id": "record",
    "name": "Record",
    "family": "data-collections",
    "definition": "An object-like type with a known key/value pattern.",
    "visualCue": "key grid inside braces",
    "avoid": "table badge",
    "body": "<path d=\"M7 4.5H5v6H3.8v3H5v6h2M17 4.5h2v6h1.2v3H19v6h-2\"/><path d=\"M8.5 8h7M8.5 12h7M8.5 16h7M11 8v8\"/>"
  },
  {
    "id": "json",
    "name": "JSON",
    "family": "data-collections",
    "definition": "A portable text representation of objects, arrays, and primitives.",
    "visualCue": "document + braces",
    "avoid": "file-bracket-curly",
    "body": "<path d=\"M6.5 3.8h7l4 4v12.4H6.5z\"/><path d=\"M13.5 3.8v4h4\"/><path d=\"M10 10H8.8v2H8v1.5h.8v2H10M14 10h1.2v2h.8v1.5h-.8v2H14\"/>"
  }
];
