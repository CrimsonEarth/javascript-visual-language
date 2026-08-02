# Provenance

The initial registry was extracted on August 2, 2026 from Kevin Liwag's owner-controlled **JavaScript Visual Language** Sites project, presented in the interface as **Code Atlas, visual language draft 03**.

The source artifact contained 74 original inline SVG drawings and teaching definitions in six families. The initial repository extraction preserved:

- every concept name and definition
- every visual cue and alternate metaphor
- every SVG geometry expression
- the six family assignments and colors
- the shared 24 by 24 view box and 1.45 pixel stroke contract

Two intentional normalizations were made:

1. Internal implementation keys became descriptive kebab-case public IDs derived from concept names, such as `scheduled-job` and `domain-service`.
2. The catalog-specific badge fill `var(--card)` became the reusable surface token `var(--jvl-surface, #fffefa)`.

The library source is now canonical. The Sites catalog remains an earlier presentation artifact until it is deliberately updated to consume a released library version.

No Font Awesome, Lucide, or other third-party icon geometry was imported. The drawings and metadata are original work licensed under MIT in this repository.
