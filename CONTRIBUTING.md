# Contributing

This library is a visual language, not a collection of unrelated pictograms. Changes should improve recognition while preserving shared grammar.

## Before drawing

1. State the concept in one sentence.
2. Identify its family.
3. Check whether an existing container, motion pattern, or modifier can express it.
4. List the nearest icons it might be confused with.
5. Prefer a composition of labeled existing icons when the idea is a workflow rather than a new atomic concept.

## Drawing contract

- Use a `0 0 24 24` view box.
- Use rounded caps and joins.
- Keep the default stroke between 1.35 and 1.5 pixels at display size.
- Leave roughly two pixels of optical padding.
- Use fills only for tiny state dots or a modifier punch-out.
- Place modifiers in the lower-right quadrant.
- Keep the base silhouette recognizable without its modifier at 16 pixels.
- Use `currentColor` so consumers control presentation.
- Use `var(--jvl-surface, #fffefa)` for a badge that must cover underlying strokes.

## Metadata contract

Each definition needs:

- a stable kebab-case `id`
- a human-readable `name`
- one existing family
- a plain-language `definition`
- a concise `visualCue`
- an `avoid` metaphor describing a likely ambiguity
- trusted SVG child markup in `body`

Stable IDs are public API. Renaming an ID requires a compatibility decision and a major release.

## Reserved meanings

- A straight pipe represents a strictly linear pipeline.
- A connected route with a branch represents a workflow.
- A person silhouette represents a genuinely human actor.
- A magnifier over data represents an intentional query.
- A question mark represents unknown or help, not data retrieval.

## Verification

Run:

```bash
npm run verify
npm run test:browser
```

Review related glyphs together at 16, 20, 24, and 32 pixels. Contract, Commit, and Audit event; Module and Package; and Worker, Executor, and Tool are especially important recognition sets.

Do not hand-edit generated `dist/` or `docs/` output. Change the family registry or catalog source and rebuild.
