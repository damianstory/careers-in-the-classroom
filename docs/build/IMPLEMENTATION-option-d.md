Option D implementation report — 15 October 2026

Advisory builder report for independent review. Changes are uncommitted in `CitC-option-d`, branch `feat/example-option-d`; HEAD remains `99001ea`. No commit, push or publication was performed. No files in the original `CitC` checkout were edited.

The supplied plan file was read only to verify its SHA256. It matched:
`0afedcfcfac8d49a2c7abd548c9d15c7259a6d9b8e4116f404360d84666b4c9b`.

Implemented behavior:

- All three examples render the available parts in teaching order, with one persistent h1, grouped navigation, Previous/Next links, classroom connections in role overviews, and the reorganized About and Sources content.
- Parts is the default; the one-page preference persists in localStorage. Both modes share the server markup and the landing rule, including legacy fragments, validated selections, history and the posting-row focus exception.
- The phone location bar and desktop view toggle are server-rendered, with their visibility driven by pre-paint attributes. Contents opens a native modal after hydration; before hydration it exposes the ordinary contents list and all parts. Without JavaScript, all parts and ordinary fragment links remain available. Print reveals all parts and hides navigation and projection controls.
- Desktop projection uses a native modal dialog and requests fullscreen on its inner presentation layer, with a viewport overlay fallback. Frames reuse existing data and artwork. Qualified pathway cards are measured at the fixed frame type size and packed into consecutive frames. Closing replaces the fragment and focuses the button for the last projected part.
- Updated unit and browser specifications cover the new modes, selection/context preservation, legacy links, no-JS, print, phone focus, projection and accessibility. Existing content records, image assets, tokens, fonts, Discover, library, header and footer were not edited.

Implementation choices and deviations:

No intentional requirements or factual-content deviations. The installed Next.js script guide restricts `next/script` with `beforeInteractive` to the root layout and runs `afterInteractive` after hydration. The example therefore uses a native blocking inline script before its content, sharing the same self-contained landing function as hydrated navigation and using the server-validated selection. Bootstrap errors leave the all-parts fallback visible; storage denial defaults to parts.

Proof command, rerun in this checkout after host fix round 4:

```text
$ npm run lint && npm run typecheck && npm test

> careers-in-the-classroom@0.1.0 lint
> eslint

> careers-in-the-classroom@0.1.0 typecheck
> next typegen && tsc --noEmit

Generating route types...
✓ Types generated successfully

> careers-in-the-classroom@0.1.0 test
> vitest run

RUN v5.0.1 /Users/damianmatheson/Desktop/Claude Code/CitC-option-d
Test Files  10 passed (10)
     Tests  103 passed (103)
Duration 343ms

Exit code: 0
```

Denied or blocked verification:

- `npm run test:e2e` exited 1 before any browser tests ran. Its production-build step could not connect to Google Fonts to fetch IBM Plex Sans and IBM Plex Mono. The font setup was left unchanged.
- A local preview attempt, `npm run dev -- --hostname 127.0.0.1 --port 3321`, exited 1 with `listen EPERM: operation not permitted 127.0.0.1:3321`. No permission escalation was attempted.
- Those sandbox restrictions were encountered during the initial build; they were not retried in this fix round. No new action was denied. Browser checks remain unavailable here. The host initially reported 210 passing tests and 8 failures. After fix round 1, the host reported 220 passing tests and 5 failures: four pre-existing base failures and F6. F1, F3, F4, F5 and F2 keyboard containment now pass according to the host. The latest host disposition authorizes OD-R1–OD-R4 after a second fresh inspection; earlier findings were not re-raised. Browser execution and a fresh inspection of round 4 remain with the host; passing unit checks is not a claim that the revised browser checks passed.

Host fix round 1:

- F1: `SelectionLink` now retains the clicked part, destination pathname, normalized query and posting-row intent until the matching selection renders. `ExploreFocus` uses that destination during layout and landing, rather than inferring it from a potentially stale fragment. Intermediate renders cannot consume another query's intent; Back/Forward clears it. Manual part history updates now pass `null` to the supported native history API. Inspection of this installed Next.js version confirmed that passing the existing `history.state` (with `__NA`) bypasses its router synchronization, leaving the canonical URL stale. The original failing selection/context browser test remains unchanged. Four new unit tests cover pending selection ordering, context/path matching, posting-row intent and history cancellation.
- F2: The Contents sheet opts into explicit forward and reverse Tab wrapping in the shared native-dialog component. Other dialogs keep their existing behavior. Choosing a part closes the sheet synchronously before focusing its heading, preventing native focus restoration from overriding that focus. Browser coverage now exercises both Tab directions.
- F3/F4: Parts navigation scrolls to the persistent question-title band, retaining the compact h1 above the part heading. It measures the complete phone sticky bar and remeasures after the location label updates. A short viewport prioritizes fitting the focused heading below the pinned bars. Added desktop title-visibility coverage; the host's reduced-motion short-viewport regression remains unchanged.
- F5: Removed the role overview's redundant eyebrow and converted its exact role-scope wording to lede text. Removed the duplicate organization heading and the “People behind the work” heading, leaving the single Who link and all qualification notes. Internal subsection headings now use h3 so each non-question part has one h2. Updated directly affected heading assertions and added coverage for all three examples, including E3's related-employer wording and evidence label.
- The host-identified baseline failure cases in `exploration.spec.ts` (“new company profiles survive reload…”) and `journeys.spec.ts` (demo form network requests) were left untouched in this round. At that point the former retained its old role-heading assertion, as explicitly excluded by the round 1 host disposition. Round 3 now authorizes updating that assertion (D-003). Other assertions in `exploration.spec.ts` were updated only where F5 changed heading markup. No changes were made to `journeys.spec.ts` in this round.
- No intentional plan or factual-content deviations. No commit, push, publication, permission escalation or edits to the original checkout.

Files changed in fix round 1: `ExampleExplorer.tsx`, `ExampleParts.tsx`, `ExploreFocus.tsx`, `RailNav.tsx`, `SectionLink.tsx`, `StoryDiagram.tsx`, `src/components/dialogs/Modal.tsx`, new `src/lib/example-selection.ts`, `tests/e2e/exploration.spec.ts`, `tests/e2e/one-page.spec.ts`, new `tests/unit/example-selection.test.ts`, and this report. Example component paths are under `src/app/examples/[slug]/`.

Host fix round 2:

- F6: The narrow-screen `.presentButton` rule had the same specificity as global `.btn { display: inline-flex; }`, leaving its visibility dependent on stylesheet order. Changed the selector to `.shell .presentButton` within the existing `max-width: 960px` media query. It now outranks `.btn` for every PresentButton in the example, including per-part header buttons, in both layouts. The desktop styles and existing print rules are unchanged. No `!important` was added.
- Read the installed Next.js CSS guide, including its production stylesheet ordering guidance. No test was changed; the failing phone assertion and designated baseline cases remain untouched.
- Agreed proof passed with exit code 0: lint, typecheck, 99 unit tests across 10 files. `git diff --check` passed. Browser confirmation remains with the host.
- Files changed in this round: `src/app/examples/[slug]/explore.module.css` and `docs/build/IMPLEMENTATION-option-d.md`.
- No new denied or blocked actions; prior sandbox browser-verification restrictions remain as recorded above. No deviations, commit, push, publication or original-checkout edits.

Host fix round 3 (user-authorized extra round):

- D-001: History/hash handlers reject nonempty fragments that do not name an available part or legacy part. Deferred landing also checks this boundary, so `#main` is not interpreted as a request for Question or Who. On mounted example pages, the existing skip link now focuses main with `preventScroll`, preserving the active part, URL and reading position; the handler and temporary main tabindex are cleaned up on leave. This scoped behavior is needed because the native `#main` jump itself would otherwise scroll to the beginning of main. Shared header, layout and skip-link markup are unchanged. Browser checks cover the keyboard skip action in both layouts and both unrelated-fragment events.
- D-002: Filtered Ways in frames now repeat the page's existing “Showing routes for <role title lowercased>.” qualification, without a Show all link. The sentence appears on every split Ways in frame and in its measurement content, so pagination accounts for its height. Added a filtered-projector browser check for both the filter sentence and the existing one-route-not-a-requirement qualification.
- D-003: Updated the newly authorized company-profile assertion to check `#who p[data-role-scope]`, with Wilder's “Roles documented at Wilder Institute” and E3's “Roles connected to this example”; it also checks the single Who h2. The unrelated `journeys.spec.ts` failure is untouched.
- D-004: Bare/context-only first visits still initialize Question but no longer invoke heading focus or scrolling. Explicit destinations, selections and part changes keep their landing behavior. Restored INSPECT-004 checks for no focus inside main and scrollY 0 in both layouts, and restored INSPECT-005's unfiltered programmatic-top-scroll assertion.
- D-005: SectionDivider omits both the number and separator spans when its number is empty. Added browser assertions for About/Sources and retained numbering in Who.
- D-006: Took the explicitly authorized option to retain and document the development warning. Rechecked the installed Next.js script guide: `beforeInteractive` is restricted to the root layout and `afterInteractive` runs after hydration. The existing blocking inline bootstrap executes during initial HTML parsing; React does not execute it on client navigation and can log “Encountered a script tag while rendering React component…”. `ExploreFocus`'s layout effect performs initialization on those client navigations. A server component wrapper would not by itself prevent React from materializing a script node from an RSC navigation. No warning suppression or root-layout change was introduced. This development-console limitation is accepted under the host's stated D-006 disposition, not claimed resolved by removing the warning.
- F7: Found a concrete source-level race beyond the suggested pre-hydration explanation: the scroll spy released its destination hold on any pointerdown/touchstart. Pressing the view toggle while a smooth Ways in scroll was still near Question allowed the spy to replace the active part before the toggle read it. Removed those press-based releases; wheel, touch movement and scrolling keys still release the hold, while control-activation keys do not. A scrollend from a cancelled prior animation cannot release a newer move before its destination is reached. Added a controlled animation/press regression and a separate test that delays framework scripts, activates the ordinary Ways in fragment link, then releases hydration. Initial landing reads the live fragment, so the early link's destination is retained. Valid/legacy fragment handling remains enabled, with the D-001 filter excluding unrelated fragments. The original storage-denial test is unchanged; no sleeps or retries were added to hide its timing. These browser regressions await host execution.

Round 3 verification:

- Final `npm run lint && npm run typecheck && npm test`: exit 0, lint clean, typecheck successful, 99 tests passed in 10 files (full output summary above).
- An earlier proof attempt found a TypeScript overload error in the new browser-test scroll stub; it was corrected before the successful full rerun.
- `git diff --check`: exit 0.
- `npx playwright test tests/e2e/one-page.spec.ts tests/e2e/exploration.spec.ts --list`: exit 0, 102 tests discovered across the two desktop/phone specs. Listing is not browser execution.
- No new denied/blocked actions. Initial sandbox font-network/listen restrictions remain recorded above and were not retried. No commits, pushes, publications or edits outside this checkout. No factual copy changes or unapproved deviations; D-006 retains the expressly allowed documented development warning.

Files changed in round 3:

- `src/app/examples/[slug]/ExploreFocus.tsx`
- `src/app/examples/[slug]/PresentationFrames.tsx`
- `src/app/examples/[slug]/RailNav.tsx`
- `src/app/examples/[slug]/SectionDivider.tsx`
- `tests/e2e/exploration.spec.ts`
- `tests/e2e/one-page.spec.ts`
- `docs/build/IMPLEMENTATION-option-d.md`

Host fix round 4 (user-authorized):

- OD-R1: The pre-paint bootstrap now owns a small hashchange bridge until the hydrated navigation takes over. It reuses the embedded landing function to reveal valid/legacy fragment destinations, updates `aria-current`, and ignores unrelated fragments such as `#main`. A short-lived child-list observer synchronizes links and the toggle as the parser creates them, then disconnects when the navigation markup is complete. Hydrated RailNav removes the bootstrap handlers through a ready event. Bootstrap errors still remove the layout attributes to expose all parts.
- OD-R1/OD-R2 fallback: Before hydration, the desktop toggle works through the bootstrap (including denied storage). On phones, pressing the server-rendered Contents button before hydration removes the layout attribute, exposing the ordinary fragment-link list and all parts. This remains usable if framework chunks never load; it does not depend on a timeout or eventual hydration. After hydration the existing modal behavior takes over. This is the requested graceful fallback, not a replacement for the hydrated modal.
- OD-R2: Removed the React-only insertion/swap of the navigation chrome. The server always renders the toggle and phone location bar, with all part labels present and exactly one selected by CSS from `data-part`. CSS uses `data-layout` to choose the phone bar versus the ordinary link list and to hide nonfunctional controls in the no-JS fallback. Initial `aria-pressed`/`aria-current` values are synchronized by the bootstrap; only those intentionally pre-hydration-mutated attributes suppress hydration warnings. The current-item state and toggle occupy their final geometry before React mounts.
- OD-R3: Restored the existing lesson/context label above the phone bar, retaining its original text. Restored `toBeVisible()` assertions for Physics 30 and Science 30 context in exploration tests. Added a pre-/post-hydration phone check that includes visible lesson context.
- OD-R4: The rail no-shift test now gates framework scripts, measures the server-rendered/pre-painted navigation and document height with fonts ready, releases hydration, waits for RailField and compares the measurements. It no longer hides an already-mounted canvas as its baseline. Added a 1440×600 test that verifies rail overflow and reaches every link and the view toggle by scrolling the rail, while retaining the existing field resize/magnet tests.
- Regression coverage: Added permanently blocked-bundle navigation checks (every part, current-item marking and unrelated fragments), a phone pre-/post-hydration geometry comparison, and four unit tests that execute the emitted bootstrap's event lifecycle, storage denial, fallback and fail-open behavior. The earlier delayed-hydration test now uses the phone fallback when needed. Helpers and the modal keyboard test wait on the actual navigation-ready marker when specifically testing hydrated modal behavior; independent tests exercise the pre-hydration and permanently failed states without that helper. No sleeps or retries were added. `journeys.spec.ts` remains untouched in this round.

Round 4 verification:

- `npm run lint && npm run typecheck && npm test`: exit 0, lint clean, typecheck successful, 103 unit tests passed across 10 files; final output summary above.
- `git diff --check`: exit 0.
- Playwright discovery for `rail.spec.ts`, `one-page.spec.ts` and `exploration.spec.ts`: 128 tests across desktop/phone, successful. This is discovery only; browser execution and fresh inspection remain with the host.
- No new denied or blocked actions. Previously recorded sandbox font-network/listen restrictions were not retried. No factual-copy changes or unapproved deviations. No commit, push, publication or original-checkout edits. The previously authorized D-006 development-warning disposition remains unchanged.

Files changed in round 4:

- `src/lib/example-navigation.ts`
- `src/app/examples/[slug]/RailNav.tsx`
- `src/app/examples/[slug]/explore.module.css`
- `tests/unit/example-navigation.test.ts`
- `tests/e2e/example-helpers.ts`
- `tests/e2e/exploration.spec.ts`
- `tests/e2e/one-page.spec.ts`
- `tests/e2e/rail.spec.ts`
- `docs/build/IMPLEMENTATION-option-d.md`

Full implementation file list (including this report):

- `README.md`
- `docs/build/IMPLEMENTATION-option-d.md` (new)
- `src/app/examples/[slug]/ExampleExplorer.tsx`
- `src/app/examples/[slug]/ExampleParts.tsx`
- `src/app/examples/[slug]/ExampleSections.tsx`
- `src/app/examples/[slug]/ExploreFocus.tsx`
- `src/app/examples/[slug]/Presentation.tsx` (new)
- `src/app/examples/[slug]/PresentationFrames.tsx` (new)
- `src/app/examples/[slug]/RailNav.tsx`
- `src/app/examples/[slug]/SectionDivider.tsx`
- `src/app/examples/[slug]/SectionLink.tsx`
- `src/app/examples/[slug]/StoryDiagram.tsx`
- `src/app/examples/[slug]/explore.module.css`
- `src/components/dialogs/Modal.tsx`
- `src/lib/example-navigation.ts`
- `src/lib/example-selection.ts` (new)
- `src/lib/presentation.ts` (new)
- `tests/e2e/a11y.spec.ts`
- `tests/e2e/example-depth.spec.ts`
- `tests/e2e/example-helpers.ts` (new)
- `tests/e2e/exploration.spec.ts`
- `tests/e2e/journeys.spec.ts`
- `tests/e2e/one-page.spec.ts`
- `tests/e2e/rail.spec.ts`
- `tests/e2e/regressions.spec.ts`
- `tests/unit/example-navigation.test.ts`
- `tests/unit/example-selection.test.ts` (new)
- `tests/unit/presentation.test.ts` (new)
