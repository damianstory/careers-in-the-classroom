# Plan: new ways for a teacher to start a search

Status: prototypes built on branch `claude/search-filter-iterations-rqz8ne` (draft PR #2). This plan covers the prototypes and the recommended direction for replacing today's home-page filter. Requested by Damian, 18 October 2026.

## Goal

Today `/` opens on the example library with one filter: course → unit → optional typed topic (`src/components/SearchForm.tsx`, `src/lib/library.ts`). With 32 examples, a teacher should also be able to start from:

1. **Course** (kept, still first): course → unit, as today.
2. **Challenge**: the problem an organization is working on (each example's `question`), grouped into themes.
3. **Company**: the organization itself, as a list with its logo on the left.
4. **Kind of work**: the role profiles (`roleProfiles`), grouped into families a student would recognize, each linking to the organizations where the library shows that work.

The aim is helping educators connect class content to the actual Calgary organizations and people doing the work. A separate thread is designing a landing/about page; this plan is only the search and browse experience.

## Acceptance criteria (for the prototypes)

- Three distinct versions are reachable at `/preview/a`, `/preview/b`, `/preview/c`, with an overview at `/preview`. The live home page `/` is unchanged.
- Every version offers course plus at least company, challenge and kind of work as starting points, and uses all 32 examples.
- A company list shows the organization's logo where `Organization.logo` exists and a monogram otherwise (only GHGSat, E3 Lithium and Wilder have logos today).
- Kind-of-work rows link to the role inside the example (`/examples/[slug]?role=<roleId>#who`); course/unit links reuse the existing filter URL (`/?course=…&unit=…`).
- No horizontal scroll at 390px; keyboard reachable; filters in B and the A door/search are kept in the URL.
- Client components receive only a slim serializable index; the large content files are imported only on the server.
- Role evidence is not overstated. Each role on a browse record carries a `scope` from its `OrganizationRole` link: `documented` (work-area or job-title), `interpreted` (`related-work`: the organization's sources point to this work, not a specific assignment) or `elsewhere` (no link: the example shows the work at another employer, e.g. E3 Lithium's laboratory-analysis role, which is an AGAT Laboratories posting). `elsewhere` roles are drawn dashed and labelled "at another employer", listed last in kind-of-work rows, hidden from card summaries, and never make an organization match a family of work in B or C. This mirrors the example page's "Related work at another employer" tag.
- Search (A's box and B's text field) uses one shared `matchesQuery`: a named course ("Physics 30") must be one of the example's courses; every other word, however short ("E3"), must start a word in the example's text (question, organization, tagline, Calgary connection, theme, role titles, course names and topics); common stop words are ignored; a non-empty query with no usable words matches nothing. Queries are capped at `QUERY_MAX` (80) characters in the input (`maxLength` and on change), in the URL and when parsing, so a shared link reproduces the displayed query and results.
- B's URL is authoritative: the filter is read with `useSearchParams`, written back with `history.replaceState`, and replaced when the URL changes from outside (a link to `/preview/b`, Back, Forward). The page calls `connection()` so a shared link arrives already filtered in the HTML.

## Approach

- `src/lib/browse.ts` (server): builds `BrowseExample[]` from `examples`, `exampleDetails`, `organizations`, `organizationRoles`, `roleProfiles`, `jobExamples`, `exampleImages`; also `browseCourses()` (reusing `unitOptions`/`coverage`) and `browseRoles()` (one row per role title, merging duplicate profiles such as `work-process` / `process-engineering`, listing organizations).
- `src/lib/browse-terms.ts` (client-safe): two editorial groupings, hand-assigned:
  - 8 **challenge themes**, one per example: Clean water and land (6), Energy and climate (6), Food and ingredients (4), Buildings and getting around (5), Making things at scale (4), Seeing what eyes can't (3), Wildlife and ecosystems (2), Light, image and story (2).
  - 7 **families of work** covering all 51 role profiles: Engineering and design; Lab science and quality; Environment and wildlife; Data, software and mapping; Skilled trades and operations; Media and creative; Planning, coordination and business.
- Versions:
  - **A · Four ways in** (server-rendered, `?by=course|challenge|company|role&q=`): four "doors" above one panel plus one search box across everything.
  - **B · One list, many filters** (client): company rows (or cards) narrowed by checkbox facets for course, challenge and kind of work; OR within a facet, AND across; live counts; state read from the URL on the server and written back with `history.replaceState`.
  - **C · Build a sentence** (client): "I teach [course] and I want my students to meet [people in family] working on [theme]"; results relax the challenge, then the kind of work, when nothing fits exactly; "Surprise me"; a wall of every company.
- Wording: use **"challenge"** for the problem/use case (not "problem", which reads negative; not "use case", jargon; not "connection", vague) and **"kind of work"** for role families.
- Recommendation to Damian: A as the base (keeps course first; company and role become first-class), with B's facets inside the company door.

## Non-goals

- Replacing `/` or changing `SearchForm`; the landing page; adding job postings; collecting the 29 missing logos; analytics.

## Assumptions and risks

- Theme and family assignments are editorial and unvalidated with teachers. Risk: a teacher's mental model differs (e.g. a bakery as "Food" vs "Chemistry").
- Course matching in B/C uses `Example.courses` (course level only), not units; units appear only in A's course door, through the existing prepared-search mapping.
- Monograms for 29 of 32 organizations make the logo list look less "real" than intended.
- `/preview` is publicly routable on the Vercel preview; it is marked as a prototype and the site is `noindex`.

## Verification

- `npm run typecheck` and `npx eslint src/app/preview src/lib/browse.ts src/lib/browse-terms.ts`: no errors.
- `npm test`: all unit tests pass, including `tests/unit/browse.test.ts` (every example has a theme and every role a family; E3's lab role is `elsewhere` and does not put E3 in the lab family; "E3" finds only E3 Lithium; "Physics 30" excludes Entuitive (Physics 20) and returns only Physics 30 examples; "chemistry 20 water" combines; "…" and "the and" match nothing).
- Browser check (Playwright against `next start`): open `/preview/b?theme=water` (6 of 32, water checked), click the "B · One list, many filters" link (URL bare, 0 checked, 32 of 32); A with `q=E3` gives 1 match.
- `npm run build`: succeeds; `/preview`, `/preview/a`, `/preview/b`, `/preview/c` listed.
- Manual/visual: Playwright screenshots at 1280px and 390px of each version and state (A: each door and a search; B: unfiltered, Chemistry 20 + water, mobile with a kind-of-work filter; C: empty and filled), checking `scrollWidth <= innerWidth`.

## Increment 2: compact sticky bar for version A (requested 18 October 2026)

Damian chose version A and asked for the four doors to stay reachable while scrolling: a small, thumb-reachable bar like a mobile app's bottom navigation, with icons, plus a search button, so a teacher can switch ways in without scrolling back to the top.

### Acceptance criteria

- Once the full door row has scrolled out of view (above the viewport), a compact bar appears fixed at the bottom of the screen; it hides again when the door row is back in view. It is never shown while the door row is visible.
- The bar has five buttons: the four doors (Course, Challenge, Company, Work) and Search. Each shows its icon with a short label under it (visible labels keep the icons understandable; the accessible name is the full door name). The current door is marked with `aria-current="page"` and a filled style.
- A door button navigates to `/preview/a?by=<door>#panel` (dropping any search, like the big doors). The panel's anchor offset (`scroll-margin-top: calc(var(--header-h) - 16px)`, with the panel's 32px top padding) puts the panel's content 16px below the sticky site header and the bottom of the door row 16px under the header, so the door row is fully hidden, the bar stays visible and the new list starts at the top of the screen.
- The Search button opens a small search field just above the bar, focused, with the same `maxLength` (`QUERY_MAX`) and a submit button. Submitting is a plain GET to `/preview/a` with the current `by` and `q`, so results render server-side at the top of the page as today. Escape or the Search button again closes it and returns focus to the Search button.
- Layout: full-width on phones (with `env(safe-area-inset-bottom)` padding), a centred pill no wider than about 480px on wider screens. 44px minimum touch targets. No horizontal scroll at 390px. The site footer sits outside the preview page (root layout), so the space is reserved on the body itself: while the dock is mounted, `body:has([data-dock])` gets `padding-bottom: calc(var(--dock-h) + env(safe-area-inset-bottom))` (route-scoped, since only `/preview/a` renders the dock). At maximum scroll the footer's last line sits fully above the bar.
- While hidden, the bar is not focusable or announced (`visibility: hidden` plus `aria-hidden`/`inert`). Its slide-in respects `prefers-reduced-motion`.
- Without JavaScript nothing breaks: the bar simply never appears (it starts hidden), and the big doors and top search still work.

### Approach

- New client component `src/app/preview/a/Dock.tsx`, rendered by the server page with `by` and `q`. A passive scroll and resize listener (throttled to one check per animation frame, and run once on mount) compares the door row's (`#ways-in`) bottom edge with the site header's height (read from `--header-h`, so 64px or 56px). The bar shows when the row's bottom is at or above that line, i.e. the row is entirely above or under the sticky header. (Built first with an `IntersectionObserver`; verification showed it never fires when the page jumps straight from below the row to above it, as with the End key or a search page whose row starts below the fold.)
- Door links are `next/link` to `/preview/a?by=<id>#panel`. The panel section gets `id="panel"` and `scroll-margin-top: calc(var(--header-h) - 16px)`.
- The search popover is a `<form action="/preview/a">` with a hidden `by`; it is rendered only while open.
- Styles in `browse.module.css`, using existing tokens: dark green surface (`--surface-dark`) with `--signal` for the active item, `z-index` 15 (below the site header's 20 and dialogs).

### Non-goals

- No change to B, C, the current home page or the example pages. Version A is still a prototype under `/preview`; moving it to the real library page waits for the landing-page PR (#1), which moves the library to `/examples`.

### Verification

- `npm run typecheck`, `npx eslint src/app/preview src/lib`, `npm test`, `npm run build`.
- Playwright at 390×844 and 1280×900: at the top the bar is hidden; after scrolling past the doors it is visible and fixed to the bottom; clicking "Company" in the bar loads `?by=company`, the door row's bounding rectangle bottom is at or above the header's bottom, the company list's first row is just below the header, and the bar is still visible; at maximum scroll on a phone viewport (with a simulated 34px bottom safe-area inset via a test-only CSS override of the padding) the footer's last text line is above the bar's top edge; clicking Search focuses the field, typing "water" and submitting shows "matches for “water”"; Escape closes the field and focus returns to the Search button; no horizontal overflow. Screenshots of both widths.
