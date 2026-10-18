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
