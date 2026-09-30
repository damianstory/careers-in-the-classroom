# CitC B2 follow-up: one-page examples, company logos, footer links

Prepared 30 September 2026. Status: **DRAFT FOR REVIEW.** The user has authorized building after review, followed by a fresh inspection.

This builds on the finished B2 redesign (`docs/build/PLAN-b2-field-instrument.md`, log `…-REVIEW-LOG.md`). Everything that plan settled still holds unless changed below.

Workspace: `/Users/damianmatheson/Desktop/Claude Code/CitC`.

## User decisions (settled)

1. **Footer links removed.** The footer no longer links "Monthly email sample" or "List your company". This is already done in `src/components/SiteFooter.tsx` and `.module.css`. "List your company" stays in the header. `/digest` is now reachable only by URL. That is accepted: it is a sample page.
2. **One long page per example.** Teachers should not need to click to reach the next part. Classroom story, Company/Organization, Roles and Pathways appear one after another on one page. Scrolling continues naturally into the next section. The left rail still lets you click to jump. The user chose this over a "Next" panel with a click. Do **not** auto-navigate or hijack scrolling.
3. **Company logos, real files.** Show each organization's logo top-right in the example's header area, sized to fit, with a small label: "Logo shown for identification only". The user approved downloading the official header logos, which are already in `public/images/logos/`:
   - `ghgsat.svg` (from ghgsat.com, dark colours)
   - `e3-lithium.svg` (from e3lithium.ca)
   - `wilder-institute.svg` (from wilderinstitute.org, **white**)
   None of the three companies publishes logo terms. Keep the existing "has not reviewed or endorsed this page" lines. Remove the README line "No GHGSat logo is used…" and record where each logo came from and when.

## Current facts

- `src/lib/example-navigation.ts`: `VIEWS = story|company|roles|pathways`, `availableViews`, `parseExplore` (view/role/job from searchParams, with fallbacks) and `exploreHref`. `role` is valid for both the roles and pathways views (in pathways it filters programs by role). `job` is valid only inside a role.
- `ExampleExplorer.tsx` renders the rail plus **one** view at a time (`state.view === …`). The shared end blocks are "Sources and course fit", the "Your classroom story" recap on non-story views, and "Bring this work into class".
- `ExploreFocus.tsx` moves focus to the new view's heading after a view change, and restores scroll after the teacher notes collapse.
- `RailField.tsx` draws the rail field for the rail's real height, using an offscreen field canvas at 1:1 × DPR.
- Tests that assume one view per URL: `tests/e2e/exploration.spec.ts`, `example-depth.spec.ts`, `rail.spec.ts` (sticky test 1 and others), and some `journeys.spec.ts` steps.

## Build plan

### A. One page
- `ExampleExplorer` renders every available view in order as `<section id="story|company|roles|pathways" aria-labelledby=…>`, each with its heading (h2; the page keeps the story question as its single h1). Between sections, a quiet divider band carries the section number and name ("02 · Company"). This makes the progression visible without motion.
- Render the shared end blocks **once**, at the end of the page: Sources and course fit, then Bring this work into class. Drop the per-view "Your classroom story" recap: the story is now on the same page.
- **Rail = in-page navigation.**
  - Each link is `<a href="#company">` and so on, keeping the URL's context query.
  - Clicking scrolls smoothly to the section (instantly with reduced motion), moves focus to the section heading (`tabindex=-1`), and updates the hash with `history.replaceState`. There is no route change.
  - A scroll-spy (IntersectionObserver over the sections, with an active line just below the sticky header) sets `aria-current="location"` on the link for the section in view. It is not `"page"`.
  - The mobile tab bar does the same.
- **URL model: selection and destination are separate** (review B2-ONE-001).
  - *Selection* lives in the query: `role`, `job`, next to the existing course/unit/topic context.
    - `parseExplore` validates `role` against `details.roleIds` and `job` against that role's jobs, **independently of `view`**.
    - It keeps rejecting unknown IDs (they fall back to no selection). A `job` without a valid `role` is dropped.
  - *Destination* is the fragment (`#story|#company|#roles|#pathways`), or a legacy `?view=` (still parsed and validated, for old links).
  - `exploreHref(slug, ctx, { section?, role?, job? })` writes the selection to the query and the section to the fragment. It never writes `view`.
  - Update the unit tests for `parseExplore`/`exploreHref`. The old view-dependent expectations change on purpose, as recorded here. Add cases:
    - role/job without `view` is kept
    - an invalid role is dropped
    - a job from another role is dropped
    - legacy `?view=pathways&role=x` still parses
- **Where the page lands** (one rule, used on first load, reload and Back/Forward — review B2-ONE-002). The first match wins:
  1. A valid hash.
  2. A valid legacy `view`.
  3. Roles, if there is a valid role/job selection.
  4. Otherwise the top of the page, with no forced focus.
  - Steps 1–3 scroll to the section and focus its heading.
  - When rail or section navigation sets a hash, it also drops any stale `view` from the URL (`replaceState`). After that, the hash is the only destination.
  - Section moves use `replaceState` (no history entries). Selection changes (role, job, "All roles", "Show all") are real navigations (history entries).
  - On `popstate` and after each selection navigation, re-apply the same rule.
- **Two kinds of links** (review B2-ONE-003).
  - *Section links* only move within the page: the rail, the mobile tabs, the story teasers ("Meet GHGSat", "See the roles"), and any other `exploreHref` caller that only changes the section.
    - They all use one `SectionLink` component. It renders `<a href="…#section">` for no-JS and copy-link, and prevents default navigation with JS.
    - It then runs the shared in-page handler: smooth scroll (instant with reduced motion), focus the section heading, and `replaceState` the hash (dropping stale `view`).
  - *Selection links* change `role`/`job`: role cards, jobs, "All roles", "Show all" in Pathways, and "See all pathways" in a role's detail. "See all pathways" clears `role` and `job` and targets `#pathways`, as it does today. It promises all programs (review B2-ONE-004). The rail's Pathways link stays a section link and keeps the selection. They stay `Link` with `scroll={false}`, and carry the hash of the section they act in (`#roles` or `#pathways`). After navigation, the landing rule above scrolls to and focuses that section, not the top.
- **Roles and jobs.** A valid `role` opens that role's detail **inline inside the Roles section**, in place of the role list, with an "All roles" selection link that clears it. A valid `job` opens inside it, as today.
- **Pathways filter.** Today `?view=pathways&role=x` filters programs by role. On one page, the Pathways section follows the **selected role** when one is set, with a visible note ("Showing routes for <role>" plus a "Show all" selection link to `#pathways` that clears `role` and `job`). Otherwise it shows all programs. No new parameter.
- `ExploreFocus`: replace "focus the new view heading on view change" with "focus the section heading after rail navigation or on load with `view`/`role`". Keep the teacher-notes scroll restore.
- **Rail field.** The rail is now much taller (roughly 3× today). The field canvas already rebuilds on resize and caps DPR at 1 over the 32767px limit. Verify a 1440 GHGSat page stays under that limit, or that the cap applies. The three bands stretch over the whole page, which is fine.
- **Motion.** One quiet moment: as each divider band enters the viewport, its hairline draws left to right (once, CSS, reduced-motion safe). Nothing else moves. There is no scroll snapping and no automatic jumps.

### B. Logos
- `src/content/organizations.ts` (or `examples.ts` for any organization without a record): add `logo?: { src: string; alt: string; onDark: boolean; sourceUrl: string; retrieved: "2026-09-30" }`.
- Example header: the logo sits top-right of the hero area on a small plate, about 40px tall and at most 160px wide, with `object-fit: contain`. White logos (Wilder) get a `--surface-dark` plate. Dark logos (GHGSat, E3) get a white plate with a hairline border. Alt text is `"<Org> logo"`. The caption "Logo shown for identification only" is 11px, `--text-body`. On phones, the logo sits under the org line, left-aligned.
- Use a plain `<img>`, or `next/image` with `unoptimized` for SVG (per the Next images doc). No inline SVG injection.
- README: update the logo note and cite the sources and date.

### C. Tests
- Update `exploration`, `example-depth`, `rail` and `journeys` specs to the one-page model. Keep every behaviour assertion; change only how a section is reached. For example, "click Company in the rail → the Company heading is focused and in view, `aria-current="location"` moves, and the hash is `#company`".
- New tests:
  1. Scrolling from the story's end into Company moves `aria-current` without a click.
  2. `?view=roles` loads scrolled to Roles, with its heading focused.
  3. `?view=roles&role=atmospheric-science` shows the inline role detail, and "All roles" returns to the list.
  4. The Pathways section follows the selected role, and "Show all" clears the filter and lands on Pathways.
  7. **Landing rule:** reload `?role=atmospheric-science&job=<id>#roles` → role and job open, and Roles is focused. Reload `?view=pathways&role=satellite-engineering` → Pathways is filtered and focused. Reload `?role=x#pathways` → Pathways, not Roles. Reload `?view=company#roles` → Roles (the hash wins). Reload with a stale `view` after rail navigation → the stale `view` was removed.
  8. **Back/Forward:** select a role, then a job, then press Back twice → the selection unwinds and the page lands per the rule. Section moves add no history entries.
  10. **"See all pathways"** from the satellite-engineering role: Pathways shows programs from other roles too, and the filter note is gone. Back restores the role selection.
  9. **Interior links:** from the top of the story, activate "Meet GHGSat" and "See the roles" by pointer **and** by keyboard (Enter) → the destination heading is focused and inside the viewport, and the hash is updated.
  5. The logo renders with its alt text and caption on each example, on the right plate.
  6. The footer has no links.
- Existing gates: lint, typecheck, unit, full e2e, a11y (with repeats), privacy-dev.

## Risks for the reviewer
1. The page gets long (roughly 12–15k px on desktop for GHGSat). Is one DOM with all sections acceptable for performance and for screen-reader navigation? Host position: yes. It is static content, with the headings and landmarks listed above.
2. Mixing hash navigation (sections) with query state (role/job) needs care, especially Back/Forward. Host position: sections use `replaceState` (no history entries). Role and job keep real history entries.
3. Logo use without published terms. This is a user decision, with an identification-only caption. The reviewer should not reopen it, but may flag implementation risks (for example, contrast of the plates).
