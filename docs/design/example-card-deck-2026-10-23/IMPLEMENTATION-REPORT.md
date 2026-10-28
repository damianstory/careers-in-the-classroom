# Example card deck — advisory implementation report

23 October 2026, build fix round 2. Checkout: `/Users/damianmatheson/Desktop/Claude Code/CitC-card-deck`; branch `feat/example-card-deck`; HEAD remains `0d6882b`. No commit, push or publication. No edits to the original `CitC` checkout and no staged changes.

The unchanged frozen plan hash was verified as `71ea7a3801a5d3d1d7f436f8cb67cdd70c8f5a1e3715083fcde51834e62e3f03`. The host reports round 1's other F1–F7/V1–V5 fixes passing. Its prior-build result, **716 passed, 25 failed, 41 skipped**, is not a result for the current changes. Resolved items were not reopened.

## Round 2 changes and evidence

**G1 — phone About overflow.** Inspected the Solvet failure in `e2e-host-3.json` and the final screenshot embedded in its host trace. The About heading wraps inside the viewport; the footer's long reference counter takes the available width and pushes the Next button off the right edge. The screenshot shows the tall green button beyond the viewport. The mobile grid used an auto-sized counter column followed by a zero-minimum flexible Next column.

The counter and Next now share explicitly bounded, shrinkable columns. Next's label can shrink and wrap, while its arrow retains its size. The existing separate counter row below 361px is retained. No heading rules were changed in this round. Added regression checks for all 14 reported examples at both 390px and 320px: document overflow, heading/counter/button/descendant bounds, and usable Next-button width.

**G2 — teaching-image geometry.** The diagram image previously filled 100% of a flex figure's height, so its box followed the available panel space instead of its intrinsic ratio. Changed the figure to a bounded grid and the image to automatic width/height with max-width/max-height constraints. The existing width/height attributes and explicit aspect ratio now govern the image before and after decoding; object-fit remains contain and the 680px cap remains.

Verified the six requested diagram files with Sharp: the three standard diagrams are 1344×752; Broken Pencil, Standens and EFW are 1344×756, matching their current component metadata. No image files or content records changed. Expanded `image-layout.spec.ts` to check all six examples in both layouts. It retains exact before/after image geometry and page-height assertions and adds checks against the declared and loaded intrinsic ratios. Parts layout checks Question and How separately with fresh documents and blocked image requests. Browser confirmation remains pending.

**G3 — Ways in hint.** Changed only the footer hint to “Open a route to see what it teaches” and updated the hint-specific assertion. `exploration.spec.ts` and its content-claim assertion remain unchanged.

Files edited in this round:

- `src/app/examples/[slug]/DeckControls.tsx`
- `src/app/examples/[slug]/explore.module.css`
- `src/app/examples/[slug]/story-diagram.module.css`
- `tests/e2e/card-deck.spec.ts`
- `tests/e2e/image-layout.spec.ts`
- `docs/design/example-card-deck-2026-10-23/IMPLEMENTATION-REPORT.md`

The eight host-identified pre-existing failures were left unchanged. No changes this round to content, sources, evidence labels, the site header/footer, dependencies or image assets.

## Proof output

Ran the full agreed command on default port 3200:

```sh
npm run lint && npm run typecheck && npm test && npx playwright test
```

```text
ESLint: exit 0
next typegen && tsc --noEmit: exit 0
Test Files  16 passed (16)
Tests       257 passed (257)
Running 798 tests using 5 workers
779 failed
19 skipped
```

Production build/server startup succeeded. All **779 failures contain browserType.launch errors**; Chrome aborted before browser assertions could run:

```text
Error: browserType.launch: Target page, context or browser has been closed
<process did exit: exitCode=null, signal=SIGABRT>
```

Browser cleanup also reported `Error: kill EPERM` (659 occurrences). No new skip guards were added in this round. The sandbox's 19 skips are unchanged from its round 1 run. The suite includes 16 additional tests: 12 for the second image layout across both projects and four narrow-layout checks across both projects.

Full proof output: `/private/tmp/citc-card-deck-fix2-proof.log`.

After the Playwright run, all 17 tracked files in `docs/validation/full-examples/2026-10-20/implementation-evidence/` were restored directly from `git show 0d6882b:<path>` and byte-verified. This avoids the shared Git-index write denied in the previous round. There is no diff in that directory, including the validation screenshots.

`git diff --check` passes. The staged diff is empty. `src/content/**`, `exploration.spec.ts` and `post-merge-repairs.spec.ts` have no changes from base; the existing journeys change remains limited to the source-link test requested in round 1.

## Blocked actions, deviations and independent review

- Chrome cannot launch in this sandbox. Browser geometry, interactions, axe and visual acceptance for the current changes remain unverified. The host should rerun the complete suite, including all six image examples in both layouts and the 14 About examples at 390px/320px.
- No new approval request or Git-index write was attempted. Screenshot restoration completed through file-content restoration from base.
- No product deviations from the frozen work order. The host-only exhaustive old/new content matrix and visual comparison remain independent-review checks.

This report is advisory; it is not an acceptance sign-off. Previously passing fit and navigation tests remain in the suite to detect regressions from these changes.

## Cumulative files changed from base

Added:

- `docs/design/example-card-deck-2026-10-23/IMPLEMENTATION-REPORT.md`
- `public/images/brand/tks-logo.svg`
- `src/app/examples/[slug]/DeckControls.tsx`
- `tests/e2e/card-deck.spec.ts`

Modified:

- `src/app/examples/[slug]/ExampleExplorer.tsx`
- `src/app/examples/[slug]/ExampleSections.tsx`
- `src/app/examples/[slug]/ExploreFocus.tsx`
- `src/app/examples/[slug]/RailNav.tsx`
- `src/app/examples/[slug]/SectionLink.tsx`
- `src/app/examples/[slug]/StoryDiagram.tsx`
- `src/app/examples/[slug]/explore.module.css`
- `src/app/examples/[slug]/story-diagram.module.css`
- `src/components/dialogs/Modal.tsx`
- `src/lib/example-navigation.ts`
- `tests/e2e/a11y.spec.ts`
- `tests/e2e/all-examples.spec.ts`
- `tests/e2e/example-helpers.ts`
- `tests/e2e/image-layout.spec.ts`
- `tests/e2e/journeys.spec.ts`
- `tests/e2e/one-page.spec.ts`
- `tests/e2e/rail.spec.ts`
- `tests/unit/example-navigation.test.ts`

Removed:

- `src/app/examples/[slug]/Presentation.tsx`
- `src/app/examples/[slug]/PresentationFrames.tsx`
- `src/app/examples/[slug]/RailField.tsx`
- `src/app/examples/[slug]/SectionDivider.tsx`
- `src/lib/presentation.ts`
- `tests/unit/presentation.test.ts`

