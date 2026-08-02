import type { IconDefinition } from "../types.js";

export const controlFlowIcons: readonly IconDefinition[] = [
  {
    "id": "condition",
    "name": "Condition",
    "family": "control-flow",
    "definition": "A test that controls whether a path is taken.",
    "visualCue": "decision diamond",
    "avoid": "question badge",
    "body": "<path d=\"m12 3.5 8 8.5-8 8.5L4 12z\"/><text x=\"12\" y=\"14.4\" fill=\"currentColor\" stroke=\"none\" font-family=\"ui-monospace, SFMono-Regular, Menlo, monospace\" font-size=\"7\" text-anchor=\"middle\">?</text>"
  },
  {
    "id": "branch",
    "name": "Branch",
    "family": "control-flow",
    "definition": "One path splitting into alternatives.",
    "visualCue": "forked route",
    "avoid": "Y junction",
    "body": "<path d=\"M5 5v4a3 3 0 0 0 3 3h8M8 12a3 3 0 0 0-3 3v4M16 8l4 4-4 4\"/><circle cx=\"5\" cy=\"5\" r=\"1.2\" fill=\"currentColor\"/><circle cx=\"5\" cy=\"19\" r=\"1.2\" fill=\"currentColor\"/>"
  },
  {
    "id": "switch",
    "name": "Switch",
    "family": "control-flow",
    "definition": "A multi-way branch selected by a value.",
    "visualCue": "one input → several labeled paths",
    "avoid": "selector rail",
    "body": "<path d=\"M4 12h5M9 12c3 0 3-5 6-5h4M9 12h10M9 12c3 0 3 5 6 5h4M17 5l2 2-2 2M17 10l2 2-2 2M17 15l2 2-2 2\"/>"
  },
  {
    "id": "loop",
    "name": "Loop",
    "family": "control-flow",
    "definition": "Behavior repeated while a condition or sequence allows it.",
    "visualCue": "circular arrow around a step",
    "avoid": "repeat arrows",
    "body": "<path d=\"M18.5 9a7 7 0 0 0-12.2-2L4 9.5m0 0V5m0 4.5h4.5M5.5 15a7 7 0 0 0 12.2 2l2.3-2.5m0 0V19m0-4.5h-4.5\"/>"
  },
  {
    "id": "iterator",
    "name": "Iterator",
    "family": "control-flow",
    "definition": "A protocol that yields collection values one at a time.",
    "visualCue": "stepping arrow across cells",
    "avoid": "cursor + array",
    "body": "<path d=\"M4 6h16M4 18h16M7 6v12M12 6v12M17 6v12M5 12h12m-2-2 2 2-2 2\"/>"
  },
  {
    "id": "recursion",
    "name": "Recursion",
    "family": "control-flow",
    "definition": "A function that invokes itself on a smaller or next case.",
    "visualCue": "function output loops into its own input",
    "avoid": "self-call loop",
    "body": "<circle cx=\"12\" cy=\"12\" r=\"3.5\"/><text x=\"12\" y=\"14.2\" fill=\"currentColor\" stroke=\"none\" font-family=\"ui-monospace, SFMono-Regular, Menlo, monospace\" font-size=\"7\" text-anchor=\"middle\">f</text><path d=\"M15.5 12h1a3.5 3.5 0 0 1 3.5 3.5v.5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4h.5m-2-2 2 2-2 2\"/>"
  },
  {
    "id": "promise",
    "name": "Promise",
    "family": "control-flow",
    "definition": "A placeholder for a future fulfilled or rejected value.",
    "visualCue": "split future paths",
    "avoid": "clock + branch",
    "body": "<path d=\"M4 12h5m0 0c3 0 3-5 6-5h4m-10 5c3 0 3 5 6 5h4M17 5l2 2-2 2M17 15l2 2-2 2\"/><circle cx=\"6\" cy=\"12\" r=\"1.2\" fill=\"currentColor\"/>"
  },
  {
    "id": "event",
    "name": "Event",
    "family": "control-flow",
    "definition": "A signal that something occurred and may trigger listeners.",
    "visualCue": "pulse radiating from a dot",
    "avoid": "bell or spark",
    "body": "<circle cx=\"12\" cy=\"12\" r=\"2\" fill=\"currentColor\"/><path d=\"M8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7M5.5 5.5a9 9 0 0 0 0 13M18.5 5.5a9 9 0 0 1 0 13\"/>"
  },
  {
    "id": "observer",
    "name": "Observer",
    "family": "control-flow",
    "definition": "A subscriber notified when a subject changes.",
    "visualCue": "eye connected to signal",
    "avoid": "broadcast arcs",
    "body": "<path d=\"M3.5 12s3-5.5 8.5-5.5 8.5 5.5 8.5 5.5-3 5.5-8.5 5.5S3.5 12 3.5 12Z\"/><circle cx=\"12\" cy=\"12\" r=\"2.4\"/><path d=\"M18 5.5c1.2.6 2 1.5 2.5 2.5\"/>"
  },
  {
    "id": "pipeline",
    "name": "Pipeline",
    "family": "control-flow",
    "definition": "A linear sequence that transforms output into the next input.",
    "visualCue": "straight staged pipe",
    "avoid": "chevrons",
    "body": "<path d=\"M3 8h4v8h4V8h4v8h4V8h2M5 6l2 2-2 2M9 14l2 2-2 2M13 6l2 2-2 2M17 14l2 2-2 2\"/>"
  },
  {
    "id": "workflow",
    "name": "Workflow",
    "family": "control-flow",
    "definition": "A coordinated route through steps, decisions, and outcomes.",
    "visualCue": "connected route with branch",
    "avoid": "pipe only if strictly linear",
    "body": "<circle cx=\"5\" cy=\"6\" r=\"2\"/><rect x=\"10\" y=\"10\" width=\"4\" height=\"4\" rx=\"1\"/><circle cx=\"19\" cy=\"6\" r=\"2\"/><circle cx=\"19\" cy=\"18\" r=\"2\"/><path d=\"M7 6h5v4M14 12h3a2 2 0 0 0 2-2V8M14 12h3a2 2 0 0 1 2 2v2\"/>"
  },
  {
    "id": "state-machine",
    "name": "State machine",
    "family": "control-flow",
    "definition": "Named states connected by allowed transitions.",
    "visualCue": "A and B states with allowed transitions",
    "avoid": "transition cycle",
    "body": "<rect x=\"3\" y=\"9\" width=\"6\" height=\"6\" rx=\"3\"/><rect x=\"15\" y=\"9\" width=\"6\" height=\"6\" rx=\"3\"/><text x=\"6\" y=\"14.1\" fill=\"currentColor\" stroke=\"none\" font-family=\"ui-monospace, SFMono-Regular, Menlo, monospace\" font-size=\"7\" text-anchor=\"middle\">A</text><text x=\"18\" y=\"14.1\" fill=\"currentColor\" stroke=\"none\" font-family=\"ui-monospace, SFMono-Regular, Menlo, monospace\" font-size=\"7\" text-anchor=\"middle\">B</text><path d=\"M8 9.5c1.5-4 6.5-4 8-1m-1.7-1L16 8.5l.6-2.2M16 14.5c-1.5 4-6.5 4-8 1m1.7 1L8 15.5l-.6 2.2\"/>"
  }
];
