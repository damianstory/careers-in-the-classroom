# Verification: GHGSat connected exploration

Built 25 September 2026 by Claude (Opus 5.5) against `docs/build/PLAN-connected-exploration.md` (approved by Codex GPT-6 Astra, round 1). Pre-build state: HEAD `e19fc30` plus an unreferenced snapshot commit of the working tree, `ab9e092`, used only as the inspection base. No commits, pushes or deploys.

## Proof commands (all passed)

| Command | Result |
| --- | --- |
| `npm run lint` | 0 problems |
| `npm run typecheck` | passed |
| `npm test` | 3 files, 37 tests passed |
| `npm run test:e2e` | 109 passed, 3 skipped (desktop-only or phone-only cases), production build included |
| `npm run test:privacy-dev` | OK: typed topic not logged or written to disk |
| Protected doc hashes (`docs/validation/*.md`, `docs/build/PLAN.md`, `docs/build/PLAN-REVIEW-LOG.md`) | unchanged |

New coverage: `tests/unit/example-navigation.test.ts` (parser fallbacks, role/job/scope compatibility, link round trip, invalid context), connected-content integrity and job-status rules in `tests/unit/content.test.ts`, `tests/e2e/exploration.spec.ts` (full physics journey, Science 30 context, invalid context, deep link + reload + Back/Forward, unknown ids, role switch clears job, jobs/pathways separation including the empty state, speaker context with another employer selected, focus restore, non-modal company section, outbound link protections), and seven new routes in the accessibility and 320px scans.

## Manual and visual checks (in-app browser, dev server)

- 1440px: story, company, role detail and job detail views. Diagram and step list stack in the main column beside the existing "At a glance"/"Your lesson" rail; no three-column squeeze.
- 375px: one content area at a time; lesson strip and nav wrap; selected job replaces the job list below 960px.
- No horizontal overflow at 320, 390, 960 and 1120px across nine view states.
- Leaving the story for the company and returning to the story restored the exact scroll position and focused "Explore GHGSat".

## Deviations from the plan

- Navigation uses Next `Link` with `scroll={false}` and server-parsed `searchParams` (the plan's default). The native History API was considered; `Link` keeps real hrefs and server-rendered deep links with no extra client state.
- `RoleProfile` does not store pathway and job ids. They are derived from the pathway and job records so the two directions cannot disagree.
- Views live in one file, `ExampleExplorer.tsx`, as separate components (story, company, roles, next steps, job detail). Shared ledger and sources sections moved to `ExampleSections.tsx` and are used by both templates.
- Story step citations are grouped under the step list; the one interpreted step carries an "Our explanation" tag.

## Content shortfalls (see `docs/build/content-ghgsat-research.md`)

- 3 roles, 4 pathways, 4 job examples from 2 employers. Only one job is Alberta-relevant, and it is closed; the satellite-engineering role has no local job example (the empty state shows under the "Calgary and Alberta" filter).
- No GHGSat logo (no published terms). No outside science review of the schematic yet.

## Inspection fixes (after Codex inspection 1)

- CE-01: returning to the lesson now reopens teacher notes that were open and restores the control's on-screen position, not an absolute scroll offset.
- CE-02: role classroom connections no longer say "your unit"; labels read "Classroom connection" so direct visits claim no selected unit.
- CE-03: the copied Remote Emissions Scientist posting is labelled "Posting copy on Talent.com"; the empty-state sourcing line covers attributed copies.
- Two regression tests added in `tests/e2e/exploration.spec.ts`. Full proof rerun: all passed (e2e 109 passed, 3 skipped).

## Navigation update (28 September 2026)

- The in-example navigation is now a sticky lesson rail (prototype B, chosen by the user from three live prototypes): a left column at 961px and wider, a sticky bar below that, short labels on phones. Side cards sit under the content, so there are never three columns.
- Teacher notes were removed at the user's request. The practitioner question moved into the "Bring this work into class" card.
- The separate "Back to lesson" controls were removed; "Classroom story" in the rail does the same job and keeps the focus and position restore.
