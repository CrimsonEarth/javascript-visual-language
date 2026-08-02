# JavaScript Visual Language

A typed, reusable icon system for explaining JavaScript, TypeScript, software architecture, and agent-system behavior.

The library contains 74 original thin-line SVG concepts. Each concept carries both geometry and teaching metadata so it can support diagrams, architecture explorers, documentation, code maps, and learning tools without depending on a generic icon pack.

## Visual grammar

Every icon is built from three kinds of visual information:

- **Container:** the thing or boundary, such as a box, document, brace, or module.
- **Motion:** the behavior, such as an arrow, orbit, route, or branch.
- **Badge:** one specialization or state, such as a gear, clock, lock, annotation, or check.

When icons are combined into a workflow, use one base glyph per object, at most one modifier, and separate connectors between objects. Keep a visible text label whenever precise meaning matters.

## Families

| Family | Concepts | Purpose |
| --- | ---: | --- |
| JS basics | 11 | Bindings, expressions, functions, calls, and returns |
| Data & collections | 11 | Values, objects, collections, and portable data |
| Type system | 13 | Shapes, compatibility, narrowing, and type relationships |
| Control flow | 12 | Decisions, repetition, asynchronous work, events, and routes |
| Architecture | 12 | Contracts, modules, adapters, services, and dependencies |
| Systems & agents | 15 | Commands, workers, durable actions, authorization, and orchestration |

## Use the library

The repository currently publishes source and build artifacts through GitHub. It is not yet published to npm.

```ts
import {
  getIcon,
  icons,
  iconsInFamily,
  renderIconSvg,
} from "@crimsonearth/javascript-visual-language";

const contract = getIcon("contract");
const architectureIcons = iconsInFamily("architecture");

const accessibleSvg = renderIconSvg("contract", {
  label: "Public service contract",
  size: 32,
  color: "#9b5d67",
  surface: "#fffefa",
});

console.log(icons.length, contract, architectureIcons.length, accessibleSvg);
```

Omit `label` only when the icon is decorative beside equivalent visible text. The renderer then emits `aria-hidden="true"` and `focusable="false"`.

After building, individual accessible SVG files are available under `dist/svg/` and through the package export `./svg/*`.

## Develop

Requires Node.js 20 or newer.

```bash
npm install
npm run verify
```

Run the interactive catalog locally:

```bash
npm run dev
```

The primary checks are:

- `npm run typecheck`
- `npm test`
- `npm run build`
- `npm run check:dist`
- `npm run test:browser` after installing Playwright Chromium

`npm run build` compiles the package, exports all individual SVG files, and builds a portable static catalog into `docs/`.

## Source organization

```text
src/
  families/       Six semantic family registries
  index.ts        Public exports
  registry.ts     Lookup and family queries
  render.ts       Accessible SVG rendering
  tokens.ts       Shared drawing and color tokens
  types.ts        Public TypeScript contracts
site/             Searchable catalog source
tests/            Registry and renderer contracts
e2e/              Catalog browser behavior
scripts/          Deterministic build and distribution checks
```

Icons are grouped by family instead of being spread across one source file per glyph. Generated SVGs are output artifacts, not parallel sources of truth.

## Accessibility

- Keep visible labels in learning and architecture surfaces.
- Provide `label` when the SVG stands alone.
- Do not encode meaning through color alone.
- Verify related icons side by side at 16, 20, 24, and 32 pixels.
- Preserve keyboard and selected-state semantics in interactive catalogs.

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before changing a glyph or adding a concept. New icons should extend the shared visual grammar before introducing a new metaphor.

The extraction history and intentional normalization from the original Code Atlas draft are recorded in [PROVENANCE.md](PROVENANCE.md).

Recognition questions, missing concepts, and intentionally deferred distribution work are tracked in [ROADMAP.md](ROADMAP.md).

## License

MIT, Copyright 2026 Kevin Liwag. See [LICENSE](LICENSE).
