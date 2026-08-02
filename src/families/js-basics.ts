import type { IconDefinition } from "../types.js";

export const jsBasicsIcons: readonly IconDefinition[] = [
  {
    "id": "variable",
    "name": "Variable",
    "family": "js-basics",
    "definition": "A named binding whose value may be read or reassigned.",
    "visualCue": "tagged value slot",
    "avoid": "x in a small box",
    "body": "<rect x=\"4.5\" y=\"4.5\" width=\"15\" height=\"15\" rx=\"2.2\"/><text x=\"12\" y=\"14.4\" fill=\"currentColor\" stroke=\"none\" font-family=\"ui-monospace, SFMono-Regular, Menlo, monospace\" font-size=\"7\" text-anchor=\"middle\">x</text><path d=\"M7.5 7.7h3\"/>"
  },
  {
    "id": "constant",
    "name": "Constant",
    "family": "js-basics",
    "definition": "A named binding that cannot be reassigned.",
    "visualCue": "binding anchored to one value",
    "avoid": "variable + fixed stop",
    "body": "<rect x=\"3.5\" y=\"6\" width=\"8\" height=\"12\" rx=\"2\"/><text x=\"7.5\" y=\"14.2\" fill=\"currentColor\" stroke=\"none\" font-family=\"ui-monospace, SFMono-Regular, Menlo, monospace\" font-size=\"7\" text-anchor=\"middle\">x</text><path d=\"M11.5 12h5m0-3v6M19 7v10M16.5 7h5M16.5 17h5\"/><circle cx=\"14\" cy=\"12\" r=\"1\" fill=\"currentColor\"/>"
  },
  {
    "id": "expression",
    "name": "Expression",
    "family": "js-basics",
    "definition": "Code that evaluates to a value.",
    "visualCue": "operands joined by an operator",
    "avoid": "small equation",
    "body": "<path d=\"M4 8h3M4 16h3M17 8h3M17 16h3M9 6l6 12M15 6 9 18\"/><circle cx=\"12\" cy=\"12\" r=\"1\" fill=\"currentColor\"/>"
  },
  {
    "id": "statement",
    "name": "Statement",
    "family": "js-basics",
    "definition": "A complete instruction that performs an action.",
    "visualCue": "instruction line + terminal mark",
    "avoid": "document line",
    "body": "<path d=\"M6.5 3.8h7l4 4v12.4H6.5z\"/><path d=\"M13.5 3.8v4h4\"/><path d=\"M9 11h6M9 14h5M15.5 17.2h.1\"/>"
  },
  {
    "id": "function",
    "name": "Function",
    "family": "js-basics",
    "definition": "Reusable behavior that accepts input and returns output.",
    "visualCue": "input → ƒ → output",
    "avoid": "f(x) notation",
    "body": "<path d=\"M3.5 12h4M16.5 12h4\"/><circle cx=\"12\" cy=\"12\" r=\"4.5\"/><text x=\"12\" y=\"14.3\" fill=\"currentColor\" stroke=\"none\" font-family=\"ui-monospace, SFMono-Regular, Menlo, monospace\" font-size=\"7\" text-anchor=\"middle\">f</text><path d=\"m5.7 10.5 1.8 1.5-1.8 1.5M18.3 10.5l2.2 1.5-2.2 1.5\"/>"
  },
  {
    "id": "method",
    "name": "Method",
    "family": "js-basics",
    "definition": "A function attached to an object or class.",
    "visualCue": "object · function",
    "avoid": "member-call notation",
    "body": "<rect x=\"3.5\" y=\"7\" width=\"7\" height=\"10\" rx=\"1.7\"/><circle cx=\"12.7\" cy=\"12\" r=\".8\" fill=\"currentColor\"/><circle cx=\"18\" cy=\"12\" r=\"3.5\"/><text x=\"18\" y=\"14.1\" fill=\"currentColor\" stroke=\"none\" font-family=\"ui-monospace, SFMono-Regular, Menlo, monospace\" font-size=\"7\" text-anchor=\"middle\">f</text>"
  },
  {
    "id": "parameter",
    "name": "Parameter",
    "family": "js-basics",
    "definition": "A named input declared by a function.",
    "visualCue": "empty input socket",
    "avoid": "label inside parentheses",
    "body": "<path d=\"M7 7.5c-1.5 1.2-2.2 2.7-2.2 4.5S5.5 15.3 7 16.5M17 7.5c1.5 1.2 2.2 2.7 2.2 4.5s-.7 3.3-2.2 4.5\"/><circle cx=\"12\" cy=\"12\" r=\"2.3\"/>"
  },
  {
    "id": "argument",
    "name": "Argument",
    "family": "js-basics",
    "definition": "A concrete value passed into a function call.",
    "visualCue": "filled value entering a socket",
    "avoid": "arrow into parentheses",
    "body": "<path d=\"M8 7.5C6.5 8.7 5.8 10.2 5.8 12S6.5 15.3 8 16.5M18 7.5c1.5 1.2 2.2 2.7 2.2 4.5s-.7 3.3-2.2 4.5M3 12h8m-2-2 2 2-2 2\"/><circle cx=\"14\" cy=\"12\" r=\"2.3\" fill=\"currentColor\"/>"
  },
  {
    "id": "return",
    "name": "Return",
    "family": "js-basics",
    "definition": "The value or control handed back by a function.",
    "visualCue": "arrow leaving a function",
    "avoid": "bent return arrow",
    "body": "<path d=\"M18.5 5.5v6a4 4 0 0 1-4 4H6m3-3-3 3 3 3\"/><circle cx=\"18.5\" cy=\"5.5\" r=\"1.2\"/>"
  },
  {
    "id": "callback",
    "name": "Callback",
    "family": "js-basics",
    "definition": "A function passed for another function to invoke later.",
    "visualCue": "function token handed in, then called back",
    "avoid": "nested function + return route",
    "body": "<circle cx=\"5.5\" cy=\"8\" r=\"2.7\"/><text x=\"5.5\" y=\"10.1\" fill=\"currentColor\" stroke=\"none\" font-family=\"ui-monospace, SFMono-Regular, Menlo, monospace\" font-size=\"7\" text-anchor=\"middle\">f</text><rect x=\"11\" y=\"5\" width=\"9\" height=\"11\" rx=\"2\"/><text x=\"15.5\" y=\"12.8\" fill=\"currentColor\" stroke=\"none\" font-family=\"ui-monospace, SFMono-Regular, Menlo, monospace\" font-size=\"7\" text-anchor=\"middle\">f</text><path d=\"M8.2 8H11m-1.7-1.7L11 8 9.3 9.7M18.5 16v1a3 3 0 0 1-3 3H8m2-2-2 2 2 2\"/>"
  },
  {
    "id": "async-function",
    "name": "Async function",
    "family": "js-basics",
    "definition": "A function whose result arrives through a promise.",
    "visualCue": "function + clock badge",
    "avoid": "split-tail arrow",
    "body": "<circle cx=\"11\" cy=\"11\" r=\"5\"/><text x=\"11\" y=\"13.2\" fill=\"currentColor\" stroke=\"none\" font-family=\"ui-monospace, SFMono-Regular, Menlo, monospace\" font-size=\"7\" text-anchor=\"middle\">f</text><circle cx=\"17.4\" cy=\"17.4\" r=\"3.1\" fill=\"var(--jvl-surface, #fffefa)\"/><path d=\"M17.4 15.2v2.2l1.5.9\"/>"
  }
];
