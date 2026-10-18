# Plan: clearer roles and related job postings on example pages

Status: prototype on branch `claude/example-page-review-s1bydz` (draft PR, not for merge without owner sign-off).
Owner request (18 Oct 2026): review example pages from a teacher's perspective; the roles section is not clear enough; link related job postings even when the featured company has none.

## Goal

A teacher projecting "Who does this work" can, in under a minute, show students (1) what the work is, (2) the job titles people actually search for, and (3) live Calgary postings for that work, on every one of the 32 examples, without the page implying those postings are openings at the featured organization.

### Acceptance criteria

1. Every role shown on any example (51 roles across 32 examples) has 1–3 searchable job titles. Enforced by a unit test over `exampleDetails`.
2. Each role card in the role list shows "Job titles to search". The evidence tag stays on every card but moves below the content.
3. A selected role's "Job postings" section always offers live searches (Job Bank and Indeed, location "Calgary, AB") for each title, labelled as unchecked related work, not openings at the organization.
4. Saved, dated job examples keep their current behaviour and status labels, in their own "Saved job examples" region. The empty "No saved job examples" box shows only when a role has neither saved examples nor search titles.
5. Outbound search links use `target=_blank`, `rel="noopener noreferrer"`, `referrerPolicy="no-referrer"` and carry no course/unit/topic context (existing privacy e2e test).
6. Fix the 19 role summaries in `calgary-october-17.ts` that end in "..", which also made the role page repeat the summary as its explanation.

## Approach

- `src/content/role-searches.ts`: `roleSearchTitles: Record<roleId, string[]>`, editorial, first title leads. Kept separate from `RoleProfile` so the large generated content files stay untouched.
- `src/lib/job-search.ts`: `jobBoardLinks(title)`, `searchTitles(roleId)`, `liveSearches(roleId)`. URL patterns: `https://www.jobbank.gc.ca/jobsearch/jobsearch?searchstring=…&locationstring=Calgary%2C+AB` and `https://ca.indeed.com/jobs?q=…&l=Calgary%2C+AB`.
- `ExampleExplorer.tsx` `RolesView` list cards and `RoleJobs`; CSS in `explore.module.css` (`cardFoot`, `searchList`, `searchRow`, `searchLinks`, `savedTitle`).
- e2e selectors renamed from region "Real job examples" to "Saved job examples".

### Decisions and trade-offs

- **Live search links, not more saved postings.** 25 of 32 examples have zero saved job examples and 28 have none currently open; saved postings go stale within weeks. Searches never go stale and need no per-posting research. Cost: results are unchecked and may include irrelevant hits, so the copy says so.
- **Job Bank first.** Government of Canada, free, no ads, and also publishes wages by occupation and region (a follow-up). Indeed second because it has the most Calgary volume.
- **Titles are editorial.** They are common posting titles, not claims about the organization, consistent with `RoleProfile` being "written by us".

## Non-goals (recommended follow-ups, not in this prototype)

- Pay ranges and outlook per role (Job Bank wages by NOC for the Calgary region, ALIS OCCinfo). Needs a NOC code per role and verified figures.
- A "Meet someone who does this" card (named person, public quote or interview) where sources show one.
- Teacher notes for "Ask the class": what to listen for, a time estimate, a quick and an extended version.
- Replacing generic source labels ("Entuitive — company/project evidence 1") with real titles.
- Collapsing repeated hedges into one provenance note per section.

## Risks and assumptions

- URL patterns were not opened from the build container (both hosts are blocked by its network policy). Job Bank's `searchstring`/`locationstring` and Indeed's `q`/`l` parameters are long-standing public patterns; verify by clicking before merge.
- A few titles are broad (e.g. "Research technician", "Systems engineer") and will return mixed results.

## Verification

- `npx vitest run` — all pass, including `tests/unit/job-search.test.ts`.
- `npm run typecheck`, `npx eslint src tests` — clean.
- `npx playwright test tests/e2e/exploration.spec.ts tests/e2e/example-depth.spec.ts` — pass (desktop and phone).
- Visual: `/examples/entuitive#who`, `/examples/entuitive?role=work-structural-engineering#who`, `/examples/ghgsat?role=atmospheric-science#who` at 1280px and 390px.
