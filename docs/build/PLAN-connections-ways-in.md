# Plan: four ways into Connections, with a quick bar

Status: plan for review. Owner thread: "Search and filter redesign".

## Goal

Damian chose prototype A ("four ways in") from the search and browse previews (draft PR #2, not to
be merged). He then asked for a compact bar that stays within thumb reach on phones while scrolling,
with icons for each way in plus search. This plan builds both into the real library at
`/connections`, which PR #1 created (hero "Find a connection for your class", course/unit/topic
console, card sections; `/?course=…` links redirect there through `src/proxy.ts`).

Teachers can start from:

1. **Your course** (the existing console and library, unchanged),
2. **A challenge** (8 real-world themes, each listing its connections),
3. **A company** (all organizations A to Z, with their logos, challenge, kinds of work, place and courses),
4. **A kind of work** (roles grouped into 7 families, each linking to that person's part of the example).

Wording: user-facing text says "connection(s)" in everything this plan adds, following the rename.
Existing library strings owned by the landing work stay as they are.

## Non-goals

- No change to the console (`SearchForm`) beyond the cancel listener below, `buildLibrary`, example pages, the home page or the proxy.
- No new content, logos or mappings beyond the theme/family tables already reviewed in PR #2.
- `/preview/*` stays only on the PR #2 branch; nothing from it is merged.

## Design

### URL and state

- `/connections?by=course|challenge|company|role`. Missing or unknown `by` means `course`.
- Any filter parameter (`course`, `unit`, `topic`) forces the course door, so every existing link and
  the proxy's redirects keep landing on today's library.
- Switching door is a plain link (server render). Door links drop the filter; the Course door links to
  `/connections` (or back to the current filter when already on the course door).

### Layout

- Hero unchanged except the lead: "Start from your course, a real-world challenge, a company or a
  kind of work." (The console's own captions, "I teach … and we're on …", carry the course door's instructions.)
- A door row `nav#doors` (aria-label "Ways in") sits inside the hero, under the lead: four cards on
  the dark ground, each with icon, label and one-line hint; `aria-current="page"` on the open door.
  Two columns on phones, four from 641px.
- Course door: the existing console and sections render exactly as today. The hero keeps its console
  reserve (`--console-h` + `--console-gap`).
- Other doors: no console. A `data-door` attribute on `.home` sets the console reserve to zero and the
  hero's bottom padding to a normal gap. The panel renders in the same white `#library` area with
  its own heading (h2) and a one-line note, then the list. `#library` keeps working as an anchor;
  for non-course doors its scroll margin is the header height.
- Panels are server components ported from PR #2's `BrowseParts` (`CompanyRow`, `ExampleTile`
  compact, `RoleList`, `OrgMark`) into `src/app/connections/WaysIn.tsx` with a new CSS module
  `ways-in.module.css`. Every organization now has a logo, so `OrgMark` shows logos; the monogram
  stays as the fallback. Logos sit on a white plate, or the dark plate when `onDark`.
- Data comes from `src/lib/browse.ts` / `browse-terms.ts` ported as is (slim index, `themeOf`,
  `familyOf`, role scope documented / interpreted / elsewhere, `hasFamily`), with the prototype
  wording in comments updated. `matchesQuery` is not ported: search goes through the console's topic
  search (below), so the library has one search, not two.

### Quick bar

Ported from PR #2 (`Dock.tsx`, approved there after four inspection fixes), renamed `QuickBar` to
avoid confusion with the console's existing `.dock` class.

- Fixed to the bottom; on phones full width (a 72px bar holding five equal 56px touch targets, icon
  over a short label: Course, Challenge, Company, Work, Search); from 641px a centred pill up to 480px wide.
- Shows only when the door row's bottom edge is at or above the sticky header's bottom (passive,
  frame-throttled scroll and resize check, run on mount). Hidden with `visibility: hidden`,
  `aria-hidden` and `inert` otherwise; never appears without JavaScript.
- Door items link to `/connections?by=<door>#library` (Course: current filter on the course door,
  else `/connections#library`). `aria-current` follows the open door.
- Search opens a small form above the bar: `topic` (max `TOPIC_MAX`), plus the current `course`/`unit`
  when on the course door, so it behaves like typing in the console. It must navigate client-side,
  like the console, so in-memory session state (signup unlock, unmatched-search history in
  `src/lib/session.ts` when storage writes are blocked) survives: once hydrated, submit is
  intercepted and calls `router.push("/connections?" + filterQuery(…) + "#library")` (trimmed topic;
  an empty topic keeps only the course/unit). Before hydration it is a plain GET form to `/connections`
  with the same fields. Autofocus on open; Escape anywhere in the bar closes it and returns focus to Search.
- Door items use `next/link`, so switching door is also client-side.
- Every door link (hero and quick bar, through `Link`'s `onNavigate`) and every quick-bar search
  dispatches a `citc:filter-navigate` window event carrying the filter it opens (null for a door
  without the console). The console (`SearchForm`, otherwise unchanged) cancels any edit still waiting
  in its debounce and resets its fields to that filter, so an older console edit can neither
  overwrite the newer navigation nor linger in the fields.
- When the door row scrolls back into view the bar hides, the form closes, and focus inside the bar
  moves to the open door's card in the row.
- Focus rings: signal ring on dark; ink ring inset on the signal-filled current and expanded items.
- Space: `body:has([data-quickbar])` gets bottom padding of bar height plus
  `env(safe-area-inset-bottom)` (plus 16px from 641px), so the footer clears the bar at max scroll.
- Reduced motion: no slide transition.

### Interaction with the console

On wide screens the console docks under the header on the course door (existing). The quick bar
does not move or cover it. On phones the console does not dock, which is where the bar matters most.

## Files

- `src/app/connections/page.tsx`: parse `by`, door row, choose console+sections vs panel, render `QuickBar`.
- `src/app/connections/WaysIn.tsx` (new, server): `Doors`, `ChallengePanel`, `CompanyPanel`, `RolePanel`, `OrgMark`.
- `src/app/connections/QuickBar.tsx` (new, client).
- `src/app/connections/ways-in.module.css` (new); small additions to `home.module.css` for `data-door`.
- `src/lib/browse.ts`, `src/lib/browse-terms.ts` (ported, `matchesQuery`/`QUERY_MAX` dropped).
- `tests/unit/browse.test.ts` (ported, query tests dropped; add `parseDoor`).
- `tests/e2e/ways-in.spec.ts` (new).

## Verification

- `tsc`, `eslint`, `vitest`, `next build`.
- Existing e2e suites that touch `/connections` (journeys, a11y, regressions) pass unchanged.
- New e2e at 390×844 and 1280×900:
  - `/connections` shows the course door, console and cards as before; `/?course=physics-30` still redirects there.
  - Each door link shows its panel; company panel lists all organizations with a logo image each.
  - `?by=company&course=physics-30` shows the course door.
  - Bar hidden at top; shown after scrolling past the doors; shown after a jump to the bottom (End).
  - Company item in the bar lands on the company panel with the bar still visible.
  - Search item focuses its field; submitting "water" shows the course door filtered to "water".
  - With storage writes blocked: sign up on `/connections?course=physics-30&unit=p30c`, note an
    unmatched topic, then search from the quick bar; the signup unlock and the unmatched-topic
    history are still there (no full reload).
  - Escape after tabbing into the bar closes the form and returns focus to Search.
  - Scrolling back to the doors hides the bar and moves focus out of it.
  - At max scroll with a simulated 34px inset, the footer's last text sits above the bar.
  - No horizontal overflow; axe has no new violations on each door.
- Screenshots of each door and the bar on phone and laptop for Damian.

## Delivery

New branch `claude/connections-version-a` from `main` (PR #2's branch stays the unmerged preview),
rebased on `main` after PR #3 merges, opened as a draft PR with a Vercel preview.
