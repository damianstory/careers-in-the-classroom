# Review log: PLAN-b2-one-page.md

Append-only. Started 2026-09-30.

- Host/coordinator/builder: Claude Code, Opus 5.5. Plan reviewer and inspector: Codex CLI 0.159.2, gpt-6-astra requested, effort high, isolated CODEX_HOME (auth only). Max plan rounds: 3. Inspections: 2.
- Authorization: the user authorized building after review, then an Astra inspection. No commit, push or deploy.
- Plan SHA256 at round 1: 3eaa76d1a0505cc8bf8de5c286d5605a36489cf3c29a7a7b17393255d7e9ffc4.
- The footer-link removal (decision 1) was made by the host before this plan was written, at the user's direct request.

## Round 1 (Codex, gpt-6-astra requested, effort high)
- Result: scratchpad/claudex/op-r1/claudex-b1kzpicb/result.json (session 01a0f248-2a50-7061-90bb-9251d242b0c9, 148 s). Observed model: not reported.
- Verdict: **REVISE**. B2-ONE-001 (high) view-dependent parsing drops role/job in hash URLs; B2-ONE-002 (medium) conflicting landing rules; B2-ONE-003 (medium) interior section links lose scroll with scroll={false}.
- Host dispositions: all accepted, plan revised (feedback in the scratchpad). New SHA256 98e3f219419f88c6e53dfddf48d3b77e605d76f7ed321108eda3da1ca49c2d03.

## Round 2 (Codex, resumed session)
- Result: scratchpad/claudex/op-r2/claudex-rmbpdpr2/result.json (61 s). Verdict: **REVISE**. The three round-1 findings are resolved. B2-ONE-004 (medium): "See all pathways" misclassified as a section link.
- Host disposition: accepted, and the plan was revised. New SHA256 df7da67e431ddf1a152939354b1940282f0ad3f86e7fe0ee5e996cb4c6a76474.

## Round 3 (Codex, resumed session)
- Verdict: **APPROVED**, bound to SHA256 df7da67e431ddf1a152939354b1940282f0ad3f86e7fe0ee5e996cb4c6a76474. Findings: none. The approval check passed before building.
- Inspection base: unreferenced snapshot commit 093f867445b2e21e46a7c2eca32e596e0684ed39 of the pre-build tree (temporary index; HEAD, index and tree untouched).

## Build (Claude, host + one Claude subagent)
- Builder report: one-page ExampleExplorer with sections, SectionLink/SelectionLink, RailNav scroll-spy, SectionDivider, ExploreFocus landing rule, decoupled parseExplore/exploreHref, logo data and plates, README logo sources, and the updated and new tests (one-page.spec.ts tests 1–10, a content test for logos, a rail canvas-limit test).
- Builder deviations (host-accepted): opening or closing a job keeps focus on its row; the old "return to where you left the story" bookmark was removed, because it conflicted with focusing the section heading; the first landing waits for `load`; a SelectionLink to the current selection acts as a section move; the Company eyebrow was dropped (the divider names it); logos use next/image `unoptimized`.
- Host changes after the build:
  - The scroll-spy active line moved from just under the sticky header to 30% down the view below it, so a section counts as current once it fills the view (seen in the browser).
  - Logos load eagerly (above the fold).
  - The logo test now polls for image load instead of checking once (it was flaky under parallel load).
- Proof (host-run): lint clean; typecheck clean; unit 68/68; full e2e 174 passed / 12 skipped; one-page spec ×4 88/88; a11y ×3 138/138; privacy-dev OK.
- Manual: GHGSat and Wilder logos render top-right on the correct plates at 1440; scrolling into Company marks "Company" in the rail with no click.

## Inspection 1 (fresh Codex session, gpt-6-astra requested, effort high)
- Result: scratchpad/claudex/op-i1 (session 01a0f26e-2cc0-7aa0-b766-0d95eb2efe52, 210 s). Observed model: not reported.
- Verdict: **REVISE**. Four medium findings:
  - B2-ONE-INSPECT-001: the job-close focus exception swallows Company/Pathways role links while a job is open.
  - B2-ONE-INSPECT-002: raw vs validated selection comparison skips landing after invalid-job cleanup and popstate.
  - B2-ONE-INSPECT-003: an interrupted smooth scroll leaves a stale aria-current.
  - B2-ONE-INSPECT-004: no top fallback on a scrolled reload or an unsupported existing-anchor fragment.
- Host disposition: all accepted; sent to the same Claude builder with fix and coverage instructions.
- Fixes (Claude builder):
  - 001: a `row` marker so only the posting row's own toggle keeps focus.
  - 002: landing keyed on the normalized `navKey` (`selectionQuery`), with a capture-phase popstate listener.
  - 003: the hold is released on scrollend or on reader input (wheel, touch, pointer, key) or on the timeout, then the active section is recomputed.
  - 004: `scrollRestoration = "manual"` on example pages, plus a top fallback on hash, reload or back_forward loads.
  - Plus an extra flake fix: `stopScrolling()` before selection navigations and on popstate.
  - New unit and e2e tests for each.
- Proof rerun (host): lint clean; typecheck clean; unit 70/70; e2e 182 passed / 12 skipped; one-page ×3 90/90; privacy-dev OK.

## Inspection 2 (fresh Codex session, gpt-6-astra requested, effort high)
- Result: scratchpad/claudex/op-i2 (session 01a0f286-68da-7930-8590-5d2c2360b19d, 204 s). Observed model: not reported.
- Verdict: **REVISE**. The four inspection-1 findings are no longer reported. One new finding:
  - B2-ONE-INSPECT-005 (medium): the example's popstate handler and a queued frame can scroll the library to the top after Back from an example.
- Host disposition: accepted. The inspection budget (2 of 2) is now used. The fix is being made by the same Claude builder and **has not been inspected by Codex**. This is reported to the user, with the option of one more inspection.
- Fix for B2-ONE-INSPECT-005 (Claude builder):
  - The popstate handler is scoped to the example's pathname.
  - Queued landing frames and load listeners are cancelled on cleanup, and the pathname is rechecked inside deferred callbacks.
  - Two new e2e tests: Back to three library URLs is not reset to 0 and gets no scrollTo calls; a synthetic popstate to /#library while the example is mounted does nothing. The builder confirmed the second test fails without the fix.
- Proof rerun (host): lint clean; typecheck clean; unit 70/70; e2e 186 passed / 12 skipped; privacy-dev OK.
- **Unreviewed by Codex:** the B2-ONE-INSPECT-005 fix (ExploreFocus.tsx and its two tests). Inspection budget 2/2 used. No commit, push or deploy.
- User authorized one extra inspection (3rd) on 2026-09-30.

## Inspection 3 (fresh Codex session, user-authorized extra, gpt-6-astra requested, effort high)
- Result: scratchpad/claudex/op-i3 (session 01a0f296-e970-78c1-b41e-1fccdb7791a4, 233 s). Observed model: not reported.
- Verdict: **REVISE**. The B2-ONE-INSPECT-005 fix was confirmed present and addresses the reported failure. One new finding:
  - B2-ONE-INSPECT-006 (medium): on short landscape screens (568×320), section landing aligns the section start, so the focused heading can sit below the fold.
- Host disposition: accepted; sent to the same Claude builder with fix and landscape coverage instructions.
- Fix for B2-ONE-INSPECT-006 (Claude builder): `goToSection` uses a new `sectionScrollTop()`. It keeps the section start (and divider) under the sticky bars when the heading fits, and otherwise puts the heading just below the bars (8px gap). This applies to clicks, first landing and history. A new 568×320 e2e test (both projects) covers the selected-role load, tab moves, and "All roles" → Back → Forward. The builder confirmed it fails without the fix.
- Proof rerun (host): lint clean; typecheck clean; unit 70/70; e2e 188 passed / 12 skipped; privacy-dev OK.
- **Unreviewed by Codex:** the B2-ONE-INSPECT-006 fix (SectionLink.tsx and one test). No commit, push or deploy.
- User chose to stop after inspection 3; the B2-ONE-INSPECT-006 fix stays unreviewed by Codex.
