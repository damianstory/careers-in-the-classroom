# Review log: PLAN-connections-ways-in.md

Reviewer: Codex CLI 0.163.0 through `.claude/skills/claudex-loop`, requested model gpt-6-astra at high effort, signed in with ChatGPT (no API key). The CLI reported no observed model keys, so the serving model is not independently confirmed. Host and builder: Claude.

## Plan round 1

REVISE, one finding.

- WAYS-001 (medium): a native GET form in the quick bar would reload the document, losing in-memory session state (signup unlock, unmatched-search history) when storage writes are blocked; the console navigates client-side.
  - Accepted. The quick-bar search intercepts submit once hydrated and calls `router.push`; door items use `next/link`. A blocked-storage regression scenario was added to the verification.

## Plan round 2

APPROVED. "WAYS-001 is resolved at the plan level."

## Code inspection 1 (fresh Codex session)

REVISE, two findings, both accepted and fixed.

- WAYS-002 (medium): the port dropped the narrow-screen single-column rule for `.family` and `.roleRow`, squeezing the kinds-of-work rows on phones. Restored; phone checks at 320px and 390px added.
- WAYS-003 (low): `parseDoor` looked at trimmed values, so empty filter parameters from old GET links did not force the course door. It now checks presence; unit tests cover empty, whitespace and repeated values.

## Code inspection 2 (fresh Codex session)

REVISE, two findings, both accepted and fixed.

- WAYS-004 (medium): planned coverage missing (unmatched-history persistence, footer clearance with a 34px inset, per-door axe). Added the footer and per-door axe and overflow tests (bar shown, search open).
- WAYS-005 (low): door row was two columns up to 860px instead of four from 641px. Fixed.

## Code inspection 3 (fresh Codex session)

REVISE, three findings.

- WAYS-006 (medium): a quick-bar search could be overwritten by a console topic edit still in its 700ms debounce. Reproduced with a new e2e first; fixed with a `citc:filter-navigate` window event that the console uses to cancel its pending update.
- WAYS-004 (medium, continued): the no-match step kept a course and unit with prepared news, so nothing was recorded. The test now switches to the company door, searches a genuinely unmatched topic, asserts the banner and the recorded write, then returns with Back and checks signup, the no-reload marker and the record.
- WAYS-007 (low): phone bar 72px versus "56px" in the plan. Rejected as plan wording: 56px described the touch targets. Plan clarified.

## Code inspection 4 (fresh Codex session)

REVISE, two findings, both accepted and fixed.

- WAYS-008 (medium): door links did not cancel a waiting console edit. Hero doors (new client `DoorLink`) and quick-bar items now announce navigation through `Link`'s `onNavigate`. Tests cover the current Course item, a Company switch with a 1.5s delayed response, and the hero door.
- WAYS-009 (medium): cancelling left the abandoned edit in the console's fields. The event now carries the destination filter and the console resets its fields to it; a same-filter re-submission test was added.

With the console's listener disabled, the four race tests fail; with it they pass.

## Code inspection 5 (fresh Codex session)

APPROVED. "No material unresolved defects found in the inspected changes. The navigation announcements and destination-filter reset address WAYS-008 and WAYS-009."

## Outcome

Plan approved in round 2 of 5; code approved in inspection 5 of 5. Nine findings (WAYS-001 to WAYS-009): eight accepted and fixed, one (WAYS-007) resolved by clarifying the plan's wording.
