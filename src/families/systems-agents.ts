import type { IconDefinition } from "../types.js";

export const systemsAgentIcons: readonly IconDefinition[] = [
  {
    "id": "executor",
    "name": "Executor",
    "family": "systems-agents",
    "definition": "A runtime component that carries out a command, task, or plan.",
    "visualCue": "play action inside a gear ring",
    "avoid": "lightning bolt",
    "body": "<circle cx=\"12\" cy=\"12\" r=\"8\"/><path d=\"m10 8 6 4-6 4z\" fill=\"currentColor\"/><path d=\"M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2\"/>"
  },
  {
    "id": "worker",
    "name": "Worker",
    "family": "systems-agents",
    "definition": "A process that pulls work, performs it, and emits a result.",
    "visualCue": "task-in → gear → result-out",
    "avoid": "hard hat for human labor",
    "body": "<path d=\"M3 12h4m10 0h4M5 10l2 2-2 2M19 10l-2 2 2 2\"/><circle cx=\"12\" cy=\"12\" r=\"3.2\"/><path d=\"M12 6.2v1.2M12 16.6v1.2M6.2 12h1.2M16.6 12h1.2M7.9 7.9l.9.9M15.2 15.2l.9.9M16.1 7.9l-.9.9M8.8 15.2l-.9.9\"/>"
  },
  {
    "id": "query",
    "name": "Query",
    "family": "systems-agents",
    "definition": "A read request that selects or derives information without expressing a mutation.",
    "visualCue": "magnifier over data rows",
    "avoid": "database + search",
    "body": "<path d=\"M4 6h10M4 10h8M4 14h6\"/><circle cx=\"15.5\" cy=\"15.5\" r=\"4\"/><path d=\"m18.5 18.5 2.5 2.5\"/>"
  },
  {
    "id": "command",
    "name": "Command",
    "family": "systems-agents",
    "definition": "An instruction expressing an intended state change.",
    "visualCue": "directive arrow into a target",
    "avoid": "terminal prompt",
    "body": "<path d=\"M4 6h16v12H4zM7 10l3 2-3 2M12 14h4\"/>"
  },
  {
    "id": "queue",
    "name": "Queue",
    "family": "systems-agents",
    "definition": "Ordered work waiting to be claimed or processed.",
    "visualCue": "stacked tasks feeding an exit",
    "avoid": "inbox tray",
    "body": "<rect x=\"4\" y=\"5\" width=\"11\" height=\"4\" rx=\"1\"/><rect x=\"4\" y=\"10\" width=\"11\" height=\"4\" rx=\"1\"/><rect x=\"4\" y=\"15\" width=\"11\" height=\"4\" rx=\"1\"/><path d=\"M15 12h6m-2-2 2 2-2 2\"/>"
  },
  {
    "id": "job",
    "name": "Job",
    "family": "systems-agents",
    "definition": "A bounded unit of background or scheduled work.",
    "visualCue": "task tile + gear badge",
    "avoid": "briefcase",
    "body": "<rect x=\"4\" y=\"5\" width=\"14\" height=\"14\" rx=\"2\"/><path d=\"M8 5V3h6v2M7 10h8M7 14h5\"/><circle cx=\"17.4\" cy=\"17.4\" r=\"3.1\" fill=\"var(--jvl-surface, #fffefa)\"/><path d=\"m15.8 17.4 1.1 1.1 2.1-2.4\"/>"
  },
  {
    "id": "scheduled-job",
    "name": "Scheduled job",
    "family": "systems-agents",
    "definition": "A job triggered at a planned time or cadence.",
    "visualCue": "job + clock badge",
    "avoid": "calendar + gear",
    "body": "<rect x=\"3.5\" y=\"5\" width=\"14\" height=\"14\" rx=\"2\"/><path d=\"M7 3v4M14 3v4M3.5 9h14\"/><circle cx=\"17.4\" cy=\"17.4\" r=\"3.1\" fill=\"var(--jvl-surface, #fffefa)\"/><path d=\"M17.4 15.2v2.2l1.5.9\"/>"
  },
  {
    "id": "tool",
    "name": "Tool",
    "family": "systems-agents",
    "definition": "A callable capability exposed to an agent or client.",
    "visualCue": "call enters a bounded capability and returns",
    "avoid": "wrench only for physical/build tools",
    "body": "<path d=\"M2.5 12h3m13 0h3M3.8 10.5 5.5 12l-1.7 1.5M20.2 10.5 18.5 12l1.7 1.5\"/><rect x=\"5.5\" y=\"4.5\" width=\"13\" height=\"15\" rx=\"3\"/><circle cx=\"12\" cy=\"12\" r=\"3.2\"/><path d=\"M12 6.2v1.2M12 16.6v1.2M6.2 12h1.2M16.6 12h1.2M7.9 7.9l.9.9M15.2 15.2l.9.9M16.1 7.9l-.9.9M8.8 15.2l-.9.9\"/>"
  },
  {
    "id": "resource",
    "name": "Resource",
    "family": "systems-agents",
    "definition": "Readable context or data exposed by a system.",
    "visualCue": "document entering a read port",
    "avoid": "stacked documents",
    "body": "<path d=\"M8 5h10v14H8zM5 8h3M5 11h3M5 14h3M11 9h4M11 12h4M11 15h3\"/>"
  },
  {
    "id": "proposal",
    "name": "Proposal",
    "family": "systems-agents",
    "definition": "A non-mutating draft of a possible action for review.",
    "visualCue": "document + dotted forward arrow",
    "avoid": "pencil + preview",
    "body": "<path d=\"M6.5 3.8h7l4 4v12.4H6.5z\"/><path d=\"M13.5 3.8v4h4\"/><path d=\"M9 10h5M9 13h4M9 16h2M14 16h5m-2-2 2 2-2 2\" stroke-dasharray=\"1.5 1.5\"/>"
  },
  {
    "id": "commit",
    "name": "Commit",
    "family": "systems-agents",
    "definition": "An approved action made durable and auditable.",
    "visualCue": "solid arrow + sealed check",
    "avoid": "database + check",
    "body": "<path d=\"M4 6h10v12H4zM7 10h4M7 13h3M14 12h6m-2-2 2 2-2 2\"/><circle cx=\"17.4\" cy=\"17.4\" r=\"3.1\" fill=\"var(--jvl-surface, #fffefa)\"/><path d=\"m15.8 17.4 1.1 1.1 2.1-2.4\"/>"
  },
  {
    "id": "authorization",
    "name": "Authorization",
    "family": "systems-agents",
    "definition": "A decision about whether an actor may perform an operation.",
    "visualCue": "key crossing a boundary",
    "avoid": "shield + check",
    "body": "<path d=\"M12 3.5 19 6v5c0 4.5-2.8 7.5-7 9.5C7.8 18.5 5 15.5 5 11V6z\"/><circle cx=\"10\" cy=\"11\" r=\"1.5\"/><path d=\"M11.5 11H16m-1.5 0v2M13 11v2\"/>"
  },
  {
    "id": "audit-event",
    "name": "Audit event",
    "family": "systems-agents",
    "definition": "An immutable record of who did what and when.",
    "visualCue": "document + clock + check",
    "avoid": "history ledger",
    "body": "<path d=\"M6.5 3.8h7l4 4v12.4H6.5z\"/><path d=\"M13.5 3.8v4h4\"/><path d=\"M9 10h5M9 13h4\"/><circle cx=\"17.4\" cy=\"17.4\" r=\"3.1\" fill=\"var(--jvl-surface, #fffefa)\"/><path d=\"M17.4 15.2v2.2l1.5.9\"/>"
  },
  {
    "id": "idempotency",
    "name": "Idempotency",
    "family": "systems-agents",
    "definition": "A guarantee that retrying the same operation has one effect.",
    "visualCue": "repeated requests converge on one checked result",
    "avoid": "dedupe gate",
    "body": "<circle cx=\"4\" cy=\"6\" r=\"1\"/><circle cx=\"4\" cy=\"12\" r=\"1\"/><circle cx=\"4\" cy=\"18\" r=\"1\"/><path d=\"M5 6h2a4 4 0 0 1 4 4v2M5 12h6M5 18h2a4 4 0 0 0 4-4v-2M11 12h3m-1.7-1.7L14 12l-1.7 1.7\"/><rect x=\"14\" y=\"8\" width=\"7\" height=\"8\" rx=\"2\"/><path d=\"m16 12 1.4 1.4 2.3-2.7\"/>"
  },
  {
    "id": "orchestrator",
    "name": "Orchestrator",
    "family": "systems-agents",
    "definition": "A coordinator that assigns work and manages dependencies across executors.",
    "visualCue": "conductor node directing workers",
    "avoid": "hub + routes",
    "body": "<circle cx=\"12\" cy=\"12\" r=\"3\"/><circle cx=\"5\" cy=\"5\" r=\"2\"/><circle cx=\"19\" cy=\"5\" r=\"2\"/><circle cx=\"5\" cy=\"19\" r=\"2\"/><circle cx=\"19\" cy=\"19\" r=\"2\"/><path d=\"m9.8 9.8-3.4-3.4m7.8 3.4 3.4-3.4m-7.8 7.8-3.4 3.4m7.8-3.4 3.4 3.4\"/>"
  }
];
