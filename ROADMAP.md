# Roadmap

The initial release preserves the complete draft-03 vocabulary. Refinements should now happen against the public grammar and verification contract rather than through isolated catalog edits.

## Recognition studies

Compare these related groups at 16, 20, 24, and 32 pixels with and without labels:

- Contract, Commit, and Audit event
- Module and Package
- Worker, Executor, and Tool
- Object, Record, Schema, and JSON
- Workflow, Pipeline, Branch, and State machine

Use results to simplify geometry before introducing decorative differences.

## Grammar decisions

- Resolve the question-mark conflict. The Condition glyph currently contains `?`, while the grammar reserves that mark for unknown or help.
- Decide whether Repository needs an explicit domain-storage qualifier to distinguish it from Git repositories.
- Test whether Facade communicates a software front without depending on its label.
- Reduce Domain service detail if its base cannot be recognized at 16 pixels.

## Vocabulary candidates

Candidates should be reviewed as concepts before they become drawings:

- database and canonical authority
- transaction
- outbox and durable event
- migration
- projection and rebuild
- immutable snapshot and history
- readiness and health
- recovery and retry
- accepted scenario, test, and proof
- source file, folder, export, public, and private
- reconciliation and durable linkage

Some candidates may be better expressed as a short composition of existing icons.

## Distribution

- Decide whether to publish the package to npm.
- Add framework-specific wrappers only after the framework-neutral SVG API stabilizes.
- Connect the original Sites catalog to a pinned library release.
- Integrate a pinned release or generated snapshot into the Budgeteer System Atlas.
