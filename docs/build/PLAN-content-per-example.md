# Plan: one content file per example

Status: built on branch `claude/project-thread-l15dlk` (draft PR #4). Owner request (18 October 2026): make adding and editing examples cheaper, without overlapping the open example-page, browse and landing work.

## Goal

Each researched Calgary example's own records live in one file, so adding or correcting an example touches one file plus a list line and its illustration, instead of eight arrays in a 6,000–7,000-line batch file and three side files. Teachers see no change.

### Acceptance criteria

1. The 29 examples from `calgary-october-17.ts` and `calgary-expansion.ts` each have `src/content/example-records/<slug>.ts`, typed `ExampleRecord`, holding: research batch date (`addedOn`), example, details, organization, organization roles, saved jobs, sources only that example cites, teaching diagram, and unit matches. `index.ts` lists them in today's library order.
2. Roles and pathways (shared across examples) and sources cited by several examples or by roles/pathways move into `roles.ts`, `pathways.ts` and `sources.ts`, ahead of the hand-written originals, in their previous order.
3. The two batch files and the two diagram and two unit-link files are deleted. The three original examples (GHGSat, Wilder Institute, E3 Lithium) are unchanged.
4. Every public content export is deep-equal to `main`: examples, exampleDetails, organizations, organizationRoles, roleProfiles, learningPathways, jobExamples, preparedSearches, units, courses, presets, news, story diagrams; the source registry has the same records (order is not used: lookups are by id).
5. All page variants render the same visible markup as `main` in a production build: home with every course and every course+unit, every example with every role and every role+job, Discover, Digest, Get involved (234 URLs). Only script tags may differ.
6. No browser chunk contains example record text, and compressed browser JavaScript on home, example and Discover pages is not larger than on `main`.
7. Unit, type, lint and browser test suites pass.

## Approach

- A one-off script (not committed) imported the old modules, assigned each source to an example only when no other example, role or pathway cites it, and wrote the record files as object literals in the hand-written style.
- Aggregators (`examples.ts`, `example-details.ts`, `organizations.ts`, `job-examples.ts`, `sources.ts`, `curriculum.ts`) derive their arrays from `exampleRecords`. Unit matches keep their old order (earlier batch first) by sorting records on `addedOn`.
- Illustrations stay in `example-images.ts`: Playwright specs import `src/content` in Node, which cannot load `.webp` imports.
- Deriving arrays with `.map()` at module level stops the bundler from tree-shaking them, and `curriculum.ts` runs setup code, so any browser import of the `@/content` barrel would ship every record. Client components therefore import only content-free modules:
  - `library-filter.ts` (filter type, `filterQuery`, `TOPIC_MAX`, option types). `SearchForm` receives `courses` (with unit coverage) from the server via `courseOptions()`.
  - `example-navigation.ts` keeps the pure navigation rules; `availableViews` and `parseExplore` move to server-only `example-views.ts`.
  - `discover.ts` keeps the pure game logic; `buildDiscoverCards` moves to server-only `discover-cards.ts`.
- A second commit fixes 19 role summaries ending in "..", the same text fix as PR #3, so that PR can drop its hunk on the deleted file.

### Non-goals

- Moving the three original examples into records (their data is interleaved with hand-written comments; separate change).
- Changing any content, layout, image or behaviour.

## Risks

- PR #3 edits `calgary-october-17.ts`; whichever merges second resolves a modify/delete conflict by dropping the ".." hunk.
- Future client components that import `@/content` will silently pull all records into the browser. Mitigation: README note; check `.next/static/chunks` for example text after a build.

## Verification

- `npx vitest run` (167 pass), `npm run typecheck`, `npx eslint src tests`.
- Snapshot comparison: a temporary test dumped all exports on `main` and on the branch; JSON deep-equal per export.
- HTML comparison: production build on each side, fetch the 234 URLs, strip `<script>` elements and script preloads, compare byte for byte.
- `grep -l "<example text>" .next/static/chunks/*.js` returns nothing; measured gzip JS per page.
- `npx playwright test` (with the container's Chromium) — 326 pass; "source links open safely" times out under 4 workers but passes alone in 25–27 s of its 30 s budget (34 page loads in one test).

## Review note

The full diff against `main` (14,000 deleted lines of data) is too large for one review turn. Inspections use a synthetic local base commit that already contains the generated data move: the 29 record files and `index.ts`, the shared records inserted into `roles.ts`, `pathways.ts` and `sources.ts`, and the six deleted batch files. The diff from that base is the hand-written code. The data move itself is covered by the snapshot and HTML comparisons above; reviewers can open any record file to spot-check it against `git show main:src/content/calgary-october-17.ts`.
