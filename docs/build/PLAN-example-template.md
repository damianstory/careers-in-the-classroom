# Example page template: plan

29 September 2026. Status: **under cross-review (claudex-loop, Codex GPT-6 Astra medium). Build authorized by the owner after alignment. Confirmed not built as of 29 Sep 2026.**

Scope: the example-page items handed over from `docs/build/PLAN-examples-library.md` (Phase 1 items inside `src/app/examples/[slug]/*`, and Phase 3 adapted to the lesson rail). Files: `src/app/examples/[slug]/*`, `src/lib/example-navigation.ts`, `src/content/*`, and the example tests. Home, search and the header stay with the library session.

## Settled (owner)

- Keep the lesson rail. No 3-tab header.
- Nav: Classroom story / Company / Roles / Pathways. Job examples live inside each role as opening cards. Pathways use the same cards.
- Roles, job examples and pathways stay visibly separate.

## Changes

### 1. Top of every example
Top to bottom, in the Classroom story view:
1. H1 question.
2. One line: organization · where the work happens (the only place location shows on the story view).
3. Fits line:
   - With a valid search: "Your class: Physics 30 · Electromagnetic radiation" plus the why-it-matches sentence.
   - Without one: every course and topic it fits, in full (no truncation), from `Example.courses` (editorial course · topic pairs, pending educator review), then a "Pick your class" link to `/#library` (the home library anchor in `src/app/page.tsx`).
4. "Use it in class" block: the question for the class, and a short explainer. There is no time-needed field yet, so it is left out, not faked.
   - Desktop: the block sits beside the signature visual (GHGSat's diagram).
   - Phone: the block comes first, then the visual.
   - No visual (Wilder, E3): the block runs full width. No placeholder image.

### 2. One checked date per page
- One shared footer, "Sources and course fit", rendered **outside** the view body, so it appears on every view (story, company, roles, a role, pathways) and on direct links to any of them. It holds the course fit, the example's sources and one line: "Sources checked 24–25 Sep 2026".
- The range is the earliest and latest `checkedOn` of the records the page draws on: the example itself, plus (when enriched) its details, organization, organization-role links and pathways. One date when they all match.
- Removed: the date in the ledger header, the "At a glance" date, the company footer date and the role tag date.
- Kept: job "saved on" dates and "Accepting applications when checked …". These are capture and status facts, not page freshness.

### 3. Evidence lower, as a disclosure
- "What we know, and how" moves below the class content, into a closed disclosure next to Sources and course fit. This applies to all three examples.

### 4. One template for all examples
- Wilder Institute and E3 Lithium move onto the lesson rail.
- Views are shown only when they have real content. For Wilder and E3 today:
  - Classroom story: yes.
  - Company: hidden (no organization profile yet).
  - Roles: yes, from their existing role list, framed "For your students". No job examples beyond what is already sourced.
  - Pathways: yes, from their existing pathway list. Wilder's "Not yet researched" pathway stays, with its tag.
- A rail with 2 or 3 items is fine. Nothing is padded to fill a view.
- **View availability governs both the rail and the URL.** Each example has a list of available views, derived from its content: Company only with an organization profile; Roles only with roles; Pathways only with pathways; Story always. `parseExplore` takes that list. An unavailable `view` (for example `?view=company` on Wilder) falls back to the story and drops `role` and `job`. No view renders without its data, so a copied or typed link can never crash the page.
- Wilder and E3 have no role ids, so their Roles view is a list only (no role detail pages, no `role` or `job` in the URL). Old GHGSat `view=jobs` links keep mapping to the role page.
- The shared content shapes stay as they are (`detailsId`, `roleIds`, `pathwayIds`, `Example.roles`, `Example.pathways`). `src/components/ExampleCard.tsx` in the library session reads them.
- The old single-page template is deleted once all three use the rail.

### 5. Careers framed "For your students"
- Roles and Pathways intros speak to the student: what the work involves, and ways to prepare.
- Filter rows: there are none left. If one returns, it gets a label ("Role", "Where") and hides when there are 3 items or fewer.

### 6. Chip grammar
- Solid green tag = evidence only (stated). Unchanged meaning.
- Course tags (rail "Fits", teaser role tags): neutral (`tag tag-neutral`).
- Tags that are links (the role tag on a pathway card, "Other roles"): neutral, with an arrow.

### 7. Less card clutter
- Location facts appear once per view.
- View headings inside the rail layout: 40px desktop, 32px phone (now 56px and 36px).
- Button labels drop "Explore …": "Explore GHGSat" → "Meet GHGSat", "Explore the roles" → "See the roles".

## Decisions

- **The "Explore pathways" link on role pages** becomes **"See all pathways"** (host recommendation, pending owner confirmation; a one-word copy change either way). It keeps the owner's meaning and fits the handed-over "no Explore labels" rule. The link still opens the full Pathways view at its heading.
- **Coordination:** another session owns home, search, header, `next.config.ts` and `tests/e2e/journeys.spec.ts` / `regressions.spec.ts`. This build does not edit them; any needed change there is sent to that session.

## Not in this plan

- New content: time needed, extra questions, signature visuals for Wilder and E3, company profiles for them. Those are Phase 4 research.
- Home, search, header and redirects (library session).

## Verification

- Unit tests: `parseExplore` with a per-example view list (unavailable view → story; role and job cleared); the date-range helper.
- `npm run lint`, `npm run typecheck`, `npm test`, `npm run test:e2e` (coordinate with the library session before running on :3200).
- New or updated e2e checks:
  - Fits line with and without a search.
  - "Pick your class" link.
  - One checked date per page.
  - The ledger disclosure is closed by default.
  - Wilder and E3 on the rail, with Company hidden.
  - Direct load and reload of `?view=company` and `?view=roles&role=x` on Wilder and E3 fall back to the story with no crash.
  - Old GHGSat `view=jobs&role=…&job=…` links still open the role page with the posting.
  - The checked-date line shows once on direct story, company, roles, role and pathways URLs, for GHGSat and for Wilder.
  - Neutral course tags.
  - Arrow on link chips.
- Visual check at 1440, 1024, 390 and 320px on all three examples. No sideways scroll.
- `impeccable detect` once on the changed CSS and TSX.
