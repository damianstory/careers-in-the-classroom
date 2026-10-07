# Discover — plan review log (append-only)

Started 6 October 2026.

- Host / planner / coordinator: Claude Code, Opus 5.5 (this session).
- Plan reviewer: Codex CLI 0.160.1, requested model `gpt-6-astra`, effort `medium`.
- Builder: Codex CLI, requested `gpt-6-astra`, effort `medium`.
- Final inspector: fresh Claude Code session, requested model `claude-opus-5-5`.
- Repo: `/Users/damianmatheson/Desktop/Claude Code/CitC-discover` (git worktree, branch `feat/discover`, base `cab1c74`).
- Plan: `docs/build/PLAN-discover.md`. Log kept outside the checkout; copied into `docs/build/` at the end.
- Authorization: user asked to plan, review, build and inspect. One local baseline commit on `feat/discover` (plan + images) authorized. No push.
- Limits: 5 plan-review rounds, 2 build-fix rounds, 2 inspection rounds. Inspection on.
- Codex runs use an isolated `CODEX_HOME` (scratchpad `codex-home/`): same login, no MCP servers, hooks or plugins. The user's global Codex config is unchanged.
- User decisions (6 Oct): direction C Pixel Grid; cover printed titles until the Job step; graphic-novel images only; worktree + one baseline commit.

## Round 1 — Codex review (result: /private/tmp/claude-501/-Users-damianmatheson-Desktop-Claude-Code-CitC/04b5d5b1-74ef-48b8-9a78-0fa298b0ca28/scratchpad/claudex-runs/claudex-e1zy3l6m/result.json)

Verdict: **REVISE**. Session 01a113f3-aeb2-7f20-9abd-de1ffc22ae1e. Requested gpt-6-astra/medium; observed model not reported by the CLI.

Full response:

```json
{
  "verdict": "REVISE",
  "summary": "The plan has concrete gaps in keyboard isolation, mobile usability, capture-date rendering, and required accessibility coverage.",
  "findings": [
    {
      "id": "DISC-001",
      "severity": "high",
      "path": "docs/build/PLAN-discover.md §4.5",
      "evidence": "The window keyboard listener excludes only selects. The retained SiteHeader opens shared dialogs containing inputs and textareas (DialogProvider.tsx); Modal.tsx does not stop keyboard propagation. Typing spaces or S in these forms would trigger Discover actions and prevent normal text entry. Space on a focused header button would also start or advance Discover instead of activating that button.",
      "fix": "Suspend shortcuts while a dialog is open, exclude editable targets and modified/default-prevented events, and scope shortcut handling so controls outside the stage retain native keyboard behavior. Add regression coverage for typing in both shared dialogs."
    },
    {
      "id": "DISC-002",
      "severity": "medium",
      "path": "docs/build/PLAN-discover.md §§4.2, 4.7",
      "evidence": "Scaling the entire 1280px canvas to 390px yields a scale of approximately 0.305. The specified 20–30px body text becomes 6–9px, the 12px step labels become 3.7px, and the 52px dropdown becomes 16px tall. A projector note and absence of horizontal overflow do not make this usable on the phone required by acceptance criterion 10.",
      "fix": "Specify a mobile layout with readable unscaled text and usable controls, allowing vertical flow on phones. Retain fixed-canvas scaling for projector widths and verify mobile interaction as well as overflow."
    },
    {
      "id": "DISC-003",
      "severity": "medium",
      "path": "docs/build/PLAN-discover.md §4.4, Deeper step",
      "evidence": "Acceptance criterion 7 requires the saved job's capture date, but the exhaustive Deeper field list omits capturedOn. jobStatusLabel() reports status.checkedOn or a historical/deadline label; it does not report capturedOn. Following the specified rendering list therefore loses the required capture date.",
      "fix": "Include job.capturedOn explicitly in DiscoverCard and render a separately labelled saved date using formatDate(), alongside jobStatusLabel(). Add a rendering assertion for it."
    },
    {
      "id": "DISC-004",
      "severity": "medium",
      "path": "docs/build/PLAN-discover.md §§4.1, 6",
      "evidence": "The planned a11y change adds only /discover to the route list. tests/e2e/a11y.spec.ts scans each route immediately after page.goto(), so this covers only the start screen. No specified Discover test performs an axe scan on a reveal step, although acceptance criterion 12 requires both states in both projects.",
      "fix": "Add a valid reveal URL such as /discover?role=animal-care&step=5 to the shared axe route list, or explicitly scan a reveal state in both desktop and phone projects."
    }
  ],
  "coverage": [
    "Read the on-disk plan and verified its SHA256 matches the supplied hash.",
    "Inspected content types, role/pathway/job records, example associations, content lookup helpers, and job-status formatting.",
    "Traced example query parsing, link generation, fragment writers, and Back/Forward focus handling.",
    "Inspected root layout, shared header, dialogs, session-state readers/writers, global styles, and design tokens.",
    "Inspected Playwright projects, accessibility route scans, and request-monitoring fixtures; confirmed nine Discover image paths exist."
  ],
  "limitations": [
    "Plan review only; Discover implementation is not present.",
    "No files edited, tests run, or work delegated.",
    "Private design canvas and referenced design source directory were unavailable; image pixels and title-cover measurements were not verified.",
    "Runtime timing, fullscreen behavior, visual fit, and history restoration remain unverified."
  ]
}
```

### Host dispositions

- DISC-001 (high) ACCEPTED. §4.5 now gates the window keydown listener: not defaultPrevented, not repeat, no ctrl/meta/alt, no open `dialog[open]`, target not input/textarea/select/contenteditable, and target must be body/documentElement or inside the stage ref. New acceptance criterion 15. §6 adds e2e coverage: typing "a b s" in the signup dialog's #su-email and the speaker dialog's #sp-topic (the speaker dialog has a text input, not a textarea), and Space on the focused header Examples link.
- DISC-002 (medium) ACCEPTED. Scaling only at >= 760 px. New §4.8 phone layout: unscaled, vertical flow, body >= 16 px, controls >= 44 px, wrapped step buttons. Acceptance 10 rewritten. §6 adds a phone tap-through test with a computed font-size check.
- DISC-003 (medium) ACCEPTED. Deeper step and acceptance 7 now render "Saved {formatDate(capturedOn)}" separately from jobStatusLabel; DiscoverCard carries capturedOn. §6 asserts "Saved 29 Sep 2026" for the Wilder animal-care job (capturedOn 2026-09-29) and the empty state for wildlife-veterinary.
- DISC-004 (medium) ACCEPTED. §4.1 adds both `/discover` and `/discover?role=animal-care&step=5` to the a11y `routes` list, so the existing loop scans start and a reveal step in both projects.

Please re-review the revised plan.

## Round 2 — Codex review (result: /private/tmp/claude-501/-Users-damianmatheson-Desktop-Claude-Code-CitC/04b5d5b1-74ef-48b8-9a78-0fa298b0ca28/scratchpad/claudex-runs/claudex-y01h6jsj/result.json)

Verdict: **APPROVED**. Same session 01a113f3-aeb2-7f20-9abd-de1ffc22ae1e (resumed). Plan SHA256 e1a234241c17fe091f63de6631aba11f0c0af99962becc9c8978484b7e53a355.

```json
{
  "verdict": "APPROVED",
  "summary": "Draft 2 resolves DISC-001 through DISC-004. No additional material defects were identified in this plan review.",
  "findings": [],
  "coverage": [
    "Read the revised on-disk plan and verified SHA256 e1a234241c17fe091f63de6631aba11f0c0af99962becc9c8978484b7e53a355.",
    "DISC-001 resolved: shortcut guards cover native dialogs, editable targets, and controls outside the stage; regression scenarios match the existing dialog fields.",
    "DISC-002 resolved: the phone layout replaces canvas scaling with readable text, usable controls, and vertical flow.",
    "DISC-003 resolved: capturedOn is explicitly carried and rendered separately from job status; the expected Wilder capture date matches repository content.",
    "DISC-004 resolved: both start and reveal URLs are specified for the existing accessibility route loop.",
    "Included prior repository tracing of example navigation and history writers, shared layout and dialogs, session-state readers/writers, content associations, and Playwright configuration."
  ],
  "limitations": [
    "Approval applies to the plan, not an implemented feature.",
    "No files edited, tests run, or work delegated.",
    "Runtime timing, fullscreen behavior, history restoration, and responsive rendering remain subject to implementation verification.",
    "The private design canvas and referenced design source directory were unavailable; image title-cover measurements were not independently verified."
  ]
}
```

Approval check (runner `check`): matches the current plan. Rounds used: 2 of 5.

## Build — Codex (result: /private/tmp/claude-501/-Users-damianmatheson-Desktop-Claude-Code-CitC/04b5d5b1-74ef-48b8-9a78-0fa298b0ca28/scratchpad/claudex-runs/claudex-p4zfte98/result.json)

Builder: Codex, requested gpt-6-astra/medium, session 01a113f6-3af4-7fc0-860f-0077a414be29, 436 s. Base `ec27776`. No commit.
Builder report (advisory): lint, typecheck and 77 unit tests passed; local server blocked by sandbox (`listen EPERM`), so browser checks were left to the host. Declared deviation: flashing/guess frame 310×538.667 at (485,104) instead of 336×585 at (472,76), keeping 9:16, to separate caption and controls. Host accepts the deviation.

Changed: SiteHeader.tsx, content/index.ts, content/discover.ts (new), lib/discover.ts (new), app/discover/{page.tsx, DiscoverStage.tsx, discover.module.css} (new), tests/unit/discover.test.ts (new), tests/e2e/discover.spec.ts (new), tests/e2e/a11y.spec.ts.

### Host verification

- `npm run lint && npm run typecheck && npm test`: pass (77 tests, 7 files).
- `npx playwright test` (includes `npm run build` via webServer): 199 passed, 19 skipped (project-specific skips), 0 failed.
- Visual (temporary screenshot spec, deleted afterwards): all nine title covers hide the printed titles without covering heads; start screen stack clear of text at 1280×720; phone layout readable at 390 px.
- Host observations for the inspector (low): the example link rotates with the tilted picture group; at 1280×720 the bottom-left pixel cluster sits beside the example link. Printed card titles are shorter labels than the role titles (e.g. "Animal Care Technician" vs "Animal care and welfare"), as documented in the image README.

## Inspection attempt 1 — failed to start (not counted as a review)

Result: /private/tmp/claude-501/-Users-damianmatheson-Desktop-Claude-Code-CitC/04b5d5b1-74ef-48b8-9a78-0fa298b0ca28/scratchpad/claudex-runs/claudex-mjsv91cl/result.json. PATH `claude` is 2.1.277; the API refused `claude-opus-5-5` (400 `claude_code_version_too_old`, needs 2.1.280+). No review happened. Retrying with `--cli` pointing at the desktop app's running Claude Code binary, verified as 2.1.288 (`/Users/damianmatheson/Library/Application Support/Claude/claude-code/2.1.288/48d54124d3c3/claude.app/Contents/MacOS/claude`). Global install unchanged. Same requested model.

## Inspection 1 — fresh Claude session (result: /private/tmp/claude-501/-Users-damianmatheson-Desktop-Claude-Code-CitC/04b5d5b1-74ef-48b8-9a78-0fa298b0ca28/scratchpad/claudex-runs/claudex-j4be_c8i/result.json)

Verdict: **REVISE**. CLI 2.1.288, observed model `claude-opus-5-5`, session abbc4c23-a93b-4a48-a6c2-7554cc704717, 232 s. Snapshot of the build at base ec27776.

```json
{
  "verdict": "REVISE",
  "summary": "Most of the build matches the plan. Cards are built only from existing content. The no-repeat round logic and the URL parse rules are right. Stop reads the frame that is actually on screen, which works because each tick is committed with flushSync. Keyboard isolation follows 4.5, and the desktop and phone layouts follow 4.7 and 4.8 apart from one geometry change. There are two medium defects. First, URL sync bypasses the Next.js router, so the router keeps an old URL; this can break the Back path that acceptance 8 relies on. Second, the URL shows the stopped role on the Guess step, so a projected address bar can give away the answer. The remaining findings are low severity.",
  "findings": [
    {
      "id": "D1",
      "severity": "medium",
      "path": "src/app/discover/DiscoverStage.tsx",
      "evidence": "Line 47 passes `window.history.state` to `replaceState`. That state already has `__NA: true`. Next 16's patched replaceState sees `__NA` and calls the original replaceState directly, without `applyUrlFromHistoryPushReplace` (node_modules/next/dist/client/components/app-router.js:268-273). So the router's canonicalUrl and searchParams stay at the URL the page loaded with. `HistoryUpdater` (same file, lines 38-67) writes that old canonicalUrl back to the address bar on every router state change. Example: load `/discover` and stop on a job. The address bar says `/discover?subject=all&role=X&step=4`, but the router still believes it is on `/discover`. Clicking the header's Discover `<Link>` is then a navigation to the same URL as far as the router knows. The page segment key does not change, so DiscoverStage stays on the reveal step while the URL is reset to `/discover`. After following the example link and pressing Back, the class lands on the start screen. That breaks acceptance 8 and 4.6. The rest of the site does it differently: `src/app/examples/[slug]/SectionLink.tsx:67` calls `replaceState(null, ...)`.",
      "fix": "Call `window.history.replaceState(null, \"\", url)` as SectionLink does. Next then copies its internal state and syncs usePathname and useSearchParams to the new URL. Add an e2e step: from a reveal step, click the header Discover link and check that the URL and the visible phase agree."
    },
    {
      "id": "D2",
      "severity": "medium",
      "path": "src/app/discover/DiscoverStage.tsx",
      "evidence": "`stop()` (line 76) writes `role=<id>&step=0` to the URL at the moment of stopping. Role ids such as `animal-care`, `software-data` and `process-operations` are close to the job names. If the stage is not in full screen, the projector shows them in the address bar during the Guess step. That happens when `requestFullscreen` is rejected or unsupported, when the teacher presses Esc, and on the phone layout. Acceptance 4 is meant to keep the job hidden until the reveal. The plan's own 4.6 rule (update the URL on stop) causes this, and acceptance 8 only needs restore from the Job step onwards.",
      "fix": "Keep the stopped role in memory during Guess. Write `role` and `step` to the URL only once the step is 1 or higher; on step 0 write only `subject` and `found`. Alternatively, write the role in a non-descriptive form such as the card number. Record the change in the plan."
    },
    {
      "id": "D3",
      "severity": "low",
      "path": "tests/e2e/discover.spec.ts",
      "evidence": "Acceptance 4 says no job name may appear 'anywhere in the DOM text'. The `concealed()` check (lines 23-27) reads `innerText`, which ignores `<script>` content. All nine cards, including `role.title`, are passed as props to a client component, so they are serialised into the RSC flight `<script>` tags. `document.body.textContent` therefore contains every role title while flashing and on Guess. The `data-role` attributes also carry role ids. The test passes, but the literal criterion is not met and nobody has written down that this is accepted.",
      "fix": "Either narrow acceptance 4 to rendered or accessible text (innerText, alt, title, aria-*) and note that the serialised payload is out of scope, or send only non-identifying fields to the client and add the titles at reveal time. Make the test match whichever wording is chosen."
    },
    {
      "id": "D4",
      "severity": "low",
      "path": "src/app/discover/DiscoverStage.tsx",
      "evidence": "The focus effect on lines 133-135 depends on `ready`. On the start screen, changing the subject with the arrow keys on the select fires `subjectsScreen` immediately. `ready` drops to false while the new subject's pictures decode, then returns to true, and focus jumps from the select to Start in the middle of keyboard navigation. The same happens on a deep link or a Back restore: once the pictures finish decoding, focus jumps to Next even if the teacher has already tabbed into the header. Plan 4.5 asks for focus to move only after a phase or step change.",
      "fix": "Remove `ready` from the dependencies. Move focus to Start only when it becomes enabled and focus is still on body or inside the stage, not on the select."
    },
    {
      "id": "D5",
      "severity": "low",
      "path": "src/app/discover/discover.module.css",
      "evidence": "Plan 4.7 sets the flashing frame to an outer 336×585 at x 472, y 76. Lines 55-56 use 310 × 538.667 at x 485, y 104. A comment explains the change, but the approved design was not updated.",
      "fix": "Either use the plan's geometry or have the host record the change against the approved canvas during the manual visual check."
    },
    {
      "id": "D6",
      "severity": "low",
      "path": "src/app/discover/DiscoverStage.tsx",
      "evidence": "Line 173 puts `aria-label=\"Discover\"` on a `div` with no role. ARIA 1.2 prohibits aria-label on generic elements, so assistive technology ignores it. axe's `aria-prohibited-attr` marks it 'needs review' because the div contains text. It is not a serious violation, but the label does nothing.",
      "fix": "Add `role=\"region\"` to the stage root, which makes it a named landmark, or remove the aria-label."
    }
  ],
  "coverage": [
    "Read every file in the manifest: DiscoverStage.tsx, discover.module.css, page.tsx, src/content/discover.ts, src/lib/discover.ts, plus the SiteHeader.tsx, content/index.ts and a11y.spec.ts diffs, and both test files",
    "Checked Next 16 app-router history patching (node_modules/next/dist/client/components/app-router.js) against the replaceState call",
    "Checked other history and router users in src (SectionLink.tsx, SearchForm.tsx), the dialog mechanism (Modal.tsx showModal), the header nav and its mobile menu, the global box-sizing, the --header-h tokens, how the example page computes 'today', and the content types and ledger rows",
    "Worked through the 1280×720 canvas geometry for the start stack (gap to the text column, fan extents), the flashing, guess and aside frames (9:16 inner sizes), and bottom-row overlap",
    "Walked through the state machine: start, stop, fresh reset, next round, subject change, popstate restore, and key filtering for dialogs, form fields and the header"
  ],
  "limitations": [
    "I could not run lint, typecheck, unit, e2e or axe; no test results are claimed",
    "I could not see the design canvas or the images, so the titleBandPct cover accuracy and the visual match to the prototype are unchecked",
    "D1's trigger depends on how Next's runtime handles a same-URL soft navigation and on page-segment keying; I inferred this from source, not reproduced it in a browser",
    "I did not open the e2e fixtures file (the off-origin `requests` guard) or the a11y spec beyond its diff"
  ]
}
```

### Host dispositions

- D1 ACCEPTED (verified in node_modules/next/dist/client/components/app-router.js: `__NA` state bypasses applyUrlFromHistoryPushReplace). Fix delegated to the builder.
- D2 ACCEPTED. Deviation from plan 4.6 (URL written on stop): role/step now enter the URL from step 1. Recorded here; acceptance 8 is unaffected.
- D3 RECORDED, no code change: acceptance 4 is read as rendered and accessible text; the serialised RSC payload and data-role ids are not visible on the projector.
- D4 ACCEPTED. Fix delegated.
- D5 RECORDED: geometry deviation accepted by the host after visual check.
- D6 ACCEPTED. Fix delegated.

Fix list sent to the builder: `/private/tmp/claude-501/-Users-damianmatheson-Desktop-Claude-Code-CitC/04b5d5b1-74ef-48b8-9a78-0fa298b0ca28/scratchpad/fix-r1.md`.

## Fix round 1 — Codex (result: /private/tmp/claude-501/-Users-damianmatheson-Desktop-Claude-Code-CitC/04b5d5b1-74ef-48b8-9a78-0fa298b0ca28/scratchpad/claudex-runs/claudex-zc4d2vuk/result.json)

Same build session 01a113f6-3af4-7fc0-860f-0077a414be29, 93 s. Implemented D1, D2, D4, D6 in DiscoverStage.tsx and discover.spec.ts. Builder proof passed.
Host verification: lint, typecheck, 77 unit tests pass. Playwright: 199 passed, 20 skipped, **1 failed** — the builder's new focus test targets a footer link, but the footer has no links by design. Test defect; sent back as fix round 2 (`/private/tmp/claude-501/-Users-damianmatheson-Desktop-Claude-Code-CitC/04b5d5b1-74ef-48b8-9a78-0fa298b0ca28/scratchpad/fix-r2.md`).

## Fix round 2 — Codex (result: /private/tmp/claude-501/-Users-damianmatheson-Desktop-Claude-Code-CitC/04b5d5b1-74ef-48b8-9a78-0fa298b0ca28/scratchpad/claudex-runs/claudex-eb52lknq/result.json)

18 s. Removed the footer case from the focus test and renamed it. Builder proof passed.
Host verification: lint, typecheck, 77 unit tests pass; Playwright 200 passed, 20 skipped, 0 failed (includes production build). Fix rounds used: 2 of 2.

## Inspection 2 — fresh Claude session (result: /private/tmp/claude-501/-Users-damianmatheson-Desktop-Claude-Code-CitC/04b5d5b1-74ef-48b8-9a78-0fa298b0ca28/scratchpad/claudex-runs/claudex-b44nk1nh/result.json)

Verdict: **REVISE** (no high findings). CLI 2.1.288, observed model `claude-opus-5-5`, session 4b2f3a0d-3a05-42a6-a11c-6c5267ab59e2, 164 s. Snapshot after fix round 2.

```json
{
  "verdict": "REVISE",
  "summary": "The core of the build is sound. Stop freezes the frame that is actually on screen: each tick is committed with flushSync and the stopped job is read from the DOM. No job title reaches the DOM text or the alt, title or aria-* attributes while flashing or on Guess. URL parsing is validated, and only roles and steps that pass validation are used to build links. The key handler meets all the guard conditions in 4.5. Header nav, content derivation, the no-repeat rounds, the fresh-set reset and the tests all follow the plan. I found no high-severity defects. There are several spec-fidelity and edge-case defects that are cheap to fix: the flashing frame's size and position, the reduced-motion start stack losing its fan, found-list state that a deep link never records and a reload on Guess loses, the missing h1 on reveal steps, and a cross-browser Space-keyup risk.",
  "findings": [
    {
      "id": "F1",
      "severity": "medium",
      "path": "src/app/discover/discover.module.css",
      "evidence": "Plan 4.7 specifies the flashing frame's outer box as 336×585 at x 472, y 76. `.pictureGroup` (line 55) is `left: 485px; top: 104px; width: 310px` and `.frame` is `height: 538.667px` (line 56). The frame is about 8% smaller and 28 px lower than the approved layout. The comment on lines 53-54 admits the change. The plan calls itself the source of truth, and the host's visual comparison against the canvas will show the difference.",
      "fix": "Use the plan's geometry: pictureGroup left 472, top 76, width 336, frame height 585. Move the caption and hint to fit around it, or have the planner approve the new geometry in the plan."
    },
    {
      "id": "F2",
      "severity": "low",
      "path": "src/app/discover/discover.module.css",
      "evidence": "In the reduced-motion block at line 143, `.pictureGroup, .fan, .saved { transform: none; }` removes the static −8°/+8° rotation and the ±84 px offset from `.fan`. Both pictures then sit exactly behind the '?' card, so the start screen no longer shows the 'fanned stack of three framed cards' required by AC2. AC11 only asks for animations to be removed, not static tilts. The same rule also flattens the static tilt of the `.aside` picture.",
      "fix": "Keep the static transforms under reduced motion and rely on the existing `animation: none; transition: none` rule. If you want, keep `.guess` untilted to avoid a perceived jump."
    },
    {
      "id": "F3",
      "severity": "low",
      "path": "src/app/discover/DiscoverStage.tsx",
      "evidence": "`save()` (lines 57-66) strips `role` from the URL and removes the stopped role from `found` whenever step is 0. This happens on the stop itself and when the teacher goes back to Guess with ← or the Guess step button. Plan 4.6 says to update the URL on stop and on every step change. If the page is reloaded or the tab is discarded on Guess, the stopped job is lost and the next round can flash it again, which breaks AC9 'no repeats'.",
      "fix": "During Guess, keep the stopped role in the URL's `found` list and leave out only `role` and `step`, so the answer stays hidden but the no-repeat guarantee holds. Otherwise, update the plan to describe the deliberate exception."
    },
    {
      "id": "F4",
      "severity": "low",
      "path": "src/lib/discover.ts",
      "evidence": "`parseDiscoverState` (lines 54-61) accepts `?role=animal-care&step=5` with an empty `found`. The page then opens on animal-care with '0 of 9 found'. Pressing R or Next round runs `roundOrder` with a found list that does not include animal-care, so the job just explored can be flashed again (AC9).",
      "fix": "When a valid role is parsed with step ≥ 1, add it to `found` if it is missing. Add a unit test for this."
    },
    {
      "id": "F5",
      "severity": "low",
      "path": "src/app/discover/DiscoverStage.tsx",
      "evidence": "`<h1>` is only rendered on the start screen (line 218) and the flashing/Guess caption (line 231, `!revealed`). Steps 1-6 have no h1, and the role title is an h2 (line 250). The axe `page-has-heading-one` rule is best-practice/moderate, so it won't fail the serious/critical gate, but the heading structure on reveal steps is incomplete.",
      "fix": "Render a visually hidden h1 such as 'Discover' on reveal steps, or make the panel's role title the h1 on steps 1-6."
    },
    {
      "id": "F6",
      "severity": "low",
      "path": "src/app/discover/DiscoverStage.tsx",
      "evidence": "Space is handled on keydown (lines 171-173), and the focus effect at line 158 then moves focus to the new primary button: STOP after Start, Next after Stop. The keyup of the same press lands on that newly focused button. Chromium only activates a button on Space keyup if it received the keydown, but this is not guaranteed in every engine. If an engine clicks on keyup alone, one press of Space would Start and immediately Stop, or Stop and immediately reveal the Job step, leaking the answer. The e2e suite only covers the configured Playwright projects, and Space-on-body is never exercised in a non-Chromium engine. Not verified.",
      "fix": "Add a cheap guard. For example, set a ref on a handled Space keydown and call preventDefault on the matching keyup in a window keyup listener, or ignore a primary-button click that arrives within the same key press. Then run the flow once in Firefox and WebKit."
    }
  ],
  "coverage": [
    "Read the plan in full and every file in the change manifest: DiscoverStage.tsx, discover.module.css, page.tsx, src/content/discover.ts, src/lib/discover.ts, plus the diffs for SiteHeader.tsx, content/index.ts and a11y.spec.ts, and tests/e2e/discover.spec.ts and tests/unit/discover.test.ts",
    "Traced related code outside the manifest: SiteHeader nav and mobile menu mapping, Modal.tsx (native dialog opened with showModal, so the `dialog[open]` guard holds), and how the example page computes `today` (identical ISO-date approach)",
    "Checked AC4 concealment (alt text switch, the card panel and example link only render on steps 1-6, aria-hidden start stack), the stop-frame correctness (flushSync tick plus DOM read of data-visible), the keyboard guard conditions against 4.5, the URL validation and link construction from validated ids, the roundOrder reset semantics, the preload and failed-picture handling, the phone overrides (transform:none !important beats the inline scale) and the reduced-motion CSS",
    "Spot-checked organization and role text lengths against the fixed 792×560 panel"
  ],
  "limitations": [
    "I couldn't run lint, typecheck, unit, Playwright or axe, so I make no claim that any test passes",
    "I couldn't render the page, so text overflow in the fixed 560 px panel on content-heavy steps (Team, Route, Deeper, and two-line role titles such as 'Conservation research and population ecology') is unverified",
    "I couldn't inspect the approved Design canvas, so visual fidelity was judged only against the plan's written numbers",
    "I didn't open the image files, so whether the cover hides each printed title (titleBandPct) is unverified",
    "Next.js 16.3.6's handling of window.history.replaceState and the bfcache/back behaviour was reasoned about, not observed",
    "Whether browsers other than Chromium click a newly focused button on Space keyup (F6) was not tested"
  ]
}
```

### Host dispositions

- F1 RECORDED, no change: geometry deviation accepted by the host after visual check (see Build section). The inspector did not have the host's acceptance.
- F2 VALID (low): reduced motion drops the static fan and tilts. Unfixed.
- F3 VALID (low), caused by the D2 fix: a reload during Guess loses the stopped role from `found`. Trade-off with hiding the answer in the address bar. Unfixed.
- F4 VALID (low): a deep link does not add its role to `found`. Unfixed.
- F5 VALID (low): no h1 on reveal steps (axe moderate, not a gate failure). Unfixed.
- F6 PLAUSIBLE (low): Space keyup on a newly focused button in non-Chromium engines; not reproduced; Chrome is the tested target. Unfixed.
- Inspector limitation "panel overflow on content-heavy steps": host screenshot of the longest Route step (wildlife-veterinary) at 1280×720 shows it fits.

### Budget

Plan review 2/5 (APPROVED). Fix rounds 2/2. Inspection rounds 2/2. **Budget exhausted with five low findings open (F2–F6).** No code was written by the host. Result left uncommitted for the user's decision.

## Fix round 3 — authorized by the user on 7 Oct 2026 (beyond the original 2-round budget)

The user chose "one more round" for F2–F6. Fix list: `/private/tmp/claude-501/-Users-damianmatheson-Desktop-Claude-Code-CitC/04b5d5b1-74ef-48b8-9a78-0fa298b0ca28/scratchpad/fix-r3.md`. F3 fix changes the /discover URL encoding from role ids to card numbers, which also keeps the D2 intent (no answer in the address bar). This is a further deviation from plan 4.6, recorded here.

First launch refused by the runner: checkout changed (host had copied the review log into docs/build). Host removed that copy (the scratchpad log is the master) and relaunched.

### Fix round 3 result (/private/tmp/claude-501/-Users-damianmatheson-Desktop-Claude-Code-CitC/04b5d5b1-74ef-48b8-9a78-0fa298b0ca28/scratchpad/claudex-runs/claudex-m5pbirq0/result.json)

Codex, same build session, 105 s. Implemented F2–F6. /discover URLs now use card numbers (role=05, found=02,05). Builder proof passed.
Host verification: lint, typecheck, 79 unit tests pass; Playwright 201 passed, 21 skipped, 0 failed (includes production build).

## Inspection 3 — fresh Claude session (result: /private/tmp/claude-501/-Users-damianmatheson-Desktop-Claude-Code-CitC/04b5d5b1-74ef-48b8-9a78-0fa298b0ca28/scratchpad/claudex-runs/claudex-uadke2bo/result.json)

Verdict: **REVISE** (one medium, four low). Observed model `claude-opus-5-5`, session 2f3fa59b-00d3-401f-92e5-5d72c6cac947, 134 s.

```json
{
  "verdict": "REVISE",
  "summary": "The implementation is careful overall. Stop reads the picture that is actually on screen (each timer tick commits immediately with flushSync), keyboard isolation follows 4.5, all step content comes from src/content, and the no-repeat round and its reset are correct. One material problem: the URL format departs from the plan without sign-off. `role` and `found` carry two-digit card numbers instead of role ids. The builder changed the plan-required a11y route and the e2e deep links to match, so the plan's own acceptance checks (`/discover?role=animal-care&step=5`) would now fall back to the start screen. The change may be a sensible way to keep job names out of a projected address bar, but the host needs to accept it and update the plan, or it needs reverting. The other findings are low-severity layout and edge-case issues.",
  "findings": [
    {
      "id": "F1-url-role-encoding",
      "severity": "medium",
      "path": "src/lib/discover.ts",
      "evidence": "Plan 4.6 says the `role` query key is a role id, and sections 4.1 and 6 require `/discover?role=animal-care&step=5` (and `&step=6`) to open the Route and Deeper steps. parseDiscoverState (lines 56–63) only accepts card numbers (`c.number === query.role`), and the unit test (tests/unit/discover.test.ts:69) checks that `animal-care` is rejected. So the plan's URL `/discover?role=animal-care&step=5` loads the start screen. The builder rewrote tests/e2e/a11y.spec.ts to `/discover?role=05&step=5` and the deep-link e2e test to `role=05`/`role=06` to fit the implementation, so the plan's checks now run against a different contract. This may be deliberate, keeping job names out of the address bar during Guess, but it is undocumented and unapproved.",
      "fix": "Choose one. (a) Host accepts numbered URLs: update plan 4.6 and section 6 (and acceptance 4 if address-bar concealment is the reason), and record the reason. (b) Restore role ids in `role`/`found` as the plan says, and put the a11y route and e2e deep links back to `role=animal-care` / `role=wildlife-veterinary`. Either way, the plan and the tests must describe the same URL format."
    },
    {
      "id": "F2-next-round-silently-ignored",
      "severity": "low",
      "path": "src/app/discover/DiscoverStage.tsx",
      "evidence": "start() returns early when `!ready` (line 69). After a deep link or Back to `/discover?role=..&step=6`, preloading starts from an empty `loaded` list. Until every picture in the subject has decoded, pressing Next round, R, or Space on step 6 does nothing. The Next button is still enabled and labelled \"Next round\", with no loading text, so the teacher gets no feedback (acceptance 6: R starts the next round).",
      "fix": "While `!ready` in reveal, disable the Next round button and show the \"Loading pictures n/m\" text, or queue the start until `ready` becomes true."
    },
    {
      "id": "F3-flash-frame-geometry",
      "severity": "low",
      "path": "src/app/discover/discover.module.css",
      "evidence": "Plan 4.7 sets the flashing frame's outer size to 336×585 at x 472, y 76. `.pictureGroup` is 310 wide with a 538.667 px frame at left 485, top 104 (lines 53–56). A comment explains the change but the plan was not amended. Manual check 6 compares against the canvas prototype, so this will show up as a mismatch.",
      "fix": "Use the plan's geometry and move the caption, hint and STOP to fit, or get host approval and update 4.7 to the new size."
    },
    {
      "id": "F4-shutter-and-tilt-on-revisit",
      "severity": "low",
      "path": "src/app/discover/DiscoverStage.tsx",
      "evidence": "The shutter is rendered whenever `phase === \"reveal\" && state.step === 0` (line 244), so it blinks again on ← from Job to Guess and on a fresh load or reload of `?step=0`, not only on Stop. `.guess` (css line 61) applies the −2°/0.97 tilt with no transition, so the plan's tilt animation on stop never runs. When moving back from step 1 to 0, the `.aside` transition does animate in reverse.",
      "fix": "Track a `justStopped` flag that stop() sets and any step change clears. Render the shutter (and a tilt transition) only when the flag is set."
    },
    {
      "id": "F5-hidden-img-first-paint",
      "severity": "low",
      "path": "src/app/discover/DiscoverStage.tsx",
      "evidence": "Preloading decodes separate detached `new Image()` objects (lines 116–128). The in-DOM `<img>` elements mount only when flashing starts and are hidden with `visibility: hidden`. Browsers usually decode hidden images lazily, at first paint. Stop reads `data-visible` from the DOM, not what was painted, so during the first ticks a frame whose image has not painted yet can be frozen and revealed while the class saw a blank or previous frame. This contradicts the plan's 'decode() every picture before Start' intent.",
      "fix": "Keep the stage `<img>` elements mounted from the start screen (hidden), and call `decode()` on those elements instead of on detached Image objects."
    }
  ],
  "coverage": [
    "Read the plan in full (sections 1–7)",
    "Read every file in the manifest: DiscoverStage.tsx, discover.module.css, page.tsx, src/content/discover.ts, src/lib/discover.ts, tests/unit/discover.test.ts, tests/e2e/discover.spec.ts, and the tracked diffs for SiteHeader.tsx, src/content/index.ts and tests/e2e/a11y.spec.ts",
    "Compared how the example page computes `today` (src/app/examples/[slug]/page.tsx:44) with page.tsx",
    "Checked the example deep-link parameters (?role, &job, #roles) against src/lib/example-navigation.ts parseExplore",
    "Checked that every CSS token used exists in src/styles/tokens.css (--header-h, --surface-dark, --on-dark, tints and shades, --font-mono)",
    "Traced the keyboard isolation rules (dialog[open], editable targets, stage containment, keyup suppression) against plan 4.5",
    "Traced stop/freeze correctness (flushSync tick, DOM data-visible read), round order, the fresh reset, URL parse/serialize, popstate restore and the same-route prop reset",
    "Checked title concealment while flashing and on Guess (alt text, the panel and example link render only from the Job step on, the stack has aria-hidden and alt=\"\")",
    "Checked the phone media query against plan 4.8 (44 px controls, 16 px step content, single-column layout, wrapped step buttons)"
  ],
  "limitations": [
    "I could not run lint, typecheck, unit, e2e or axe, so nothing here is evidence that tests pass",
    "I could not open the Design canvas or the images, so I did not check visual fidelity or whether the titleBandPct values fully cover the printed titles",
    "I did not read src/components/dialogs/Modal.tsx, the root layout, or the SiteHeader mobile menu beyond the diff. I assumed the dialogs are native <dialog> elements opened with showModal() and that the layout has a <main>, as the plan and tests state",
    "I did not read the Next.js 16.3.6 docs, so whether replaceState(null, ...) keeps the app router's history metadata is assumed from the code comment",
    "Colour contrast and axe results for the new styles were not computed"
  ]
}
```

### Host dispositions

- F1 ACCEPTED as documentation: the numbered URL was a host decision (fix round 3). Host added section 8 "Changes after approval" to PLAN-discover.md so plan and tests agree. No code change. (The plan's hash now differs from the round-2 approval; the build was carried out against the approved hash.)
- F3 RECORDED in plan section 8 (geometry accepted earlier).
- F2 VALID (low): Next round is silently ignored while pictures reload after a deep link or Back. Open.
- F4 VALID (low, cosmetic): shutter replays on returning to Guess; Guess tilt has no transition. Open.
- F5 PLAUSIBLE (low): preload decodes detached Image objects; first paint of hidden in-DOM images not guaranteed. Not reproduced. Open.

Rounds used: plan review 2/5; fix rounds 3 (1 beyond budget, user-authorized); inspections 3. Host wrote only plan/log documentation, no code.
