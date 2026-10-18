# Review log: PLAN-search-browse.md

- Host and planner: Claude (Claude Code cloud session). Reviewer: Codex CLI 0.163.0, requested model `gpt-6-astra`, effort `high`, signed in with Damian's ChatGPT account (device auth; no API key).
- Mode: `review` (prototypes already built on `claude/search-filter-iterations-rqz8ne`, draft PR #2). Builder: Claude. Maximum 5 plan-review rounds.
- Authorization: Damian asked for prototypes to compare and for an Astra review of the plan (18 October 2026). Not authorized: replacing `/` or merging.

## Round 1

Runner result: `/tmp/claude-0/claudex/r1/claudex-apxdih6p/result.json` (outside the checkout). Plan SHA256 `32d0b9292b92017d760af197edc487d9e252c5710eb836eebd6f9671dcd1d106`. CLI codex-cli 0.163.0, session `01a14ca9-f531-7c01-8ab8-c8526922d4c7`. Requested model gpt-6-astra/high; observed model keys: none returned.

```json
{
 "verdict": "REVISE",
 "summary": "Three material defects: unsupported employer-role associations, incorrect short-term search matching, and filter state that diverges from the URL.",
 "findings": [
  {
   "id": "SB-001",
   "severity": "medium",
   "path": "src/lib/browse.ts:158",
   "evidence": "Every example role becomes an organization association, even without an OrganizationRole record. E3's laboratory-analysis role consequently appears under E3 in A and makes E3 match B/C's lab family. However, src/content/job-examples.ts:390\u2013427 attributes that work to AGAT Laboratories and explicitly states it is not an E3 position. The existing ExampleExplorer labels this case 'Related work at another employer'; the browse index and presentation lose that distinction.",
   "fix": "Carry the organization-role evidence scope into the index and render its qualification. Distinguish related roles from work documented at the listed organization when building employer lists and family matches."
  },
  {
   "id": "SB-002",
   "severity": "medium",
   "path": "src/app/preview/a/page.tsx:29",
   "evidence": "Search discards every token shorter than three characters. Searching 'E3' produces an empty token array, so every example matches. Searching 'Physics 30' becomes just 'physics' and includes Entuitive, whose only course is Physics 20 (src/content/calgary-october-17.ts:224\u2013228). This breaks company and course searches advertised by the prototype.",
   "fix": "Preserve meaningful short tokens, including organization abbreviations and course numbers. Do not treat a nonempty query with no retained tokens as matching the entire library."
  },
  {
   "id": "SB-003",
   "severity": "medium",
   "path": "src/app/preview/b/Directory.tsx:45",
   "evidence": "picks and q consume initial props only through useState initialization; the effect only writes state to the URL. Open /preview/b?theme=water, then click the existing B navigation link to /preview/b. Next preserves component state across search-parameter changes, so the URL becomes unfiltered while the water checkbox and filtered results remain. BrowseParts.tsx:28 supplies this navigation, and the installed layout-router.js explicitly excludes search parameters from its state key.",
   "fix": "Make the current URL authoritative using useSearchParams and shared parsing, or explicitly reconcile navigation changes with local state. Ensure incoming URL changes cannot be ignored or overwritten by stale filter state."
  }
 ],
 "coverage": [
  "Read the plan and verified its SHA256 matches 32d0b9292b92017d760af197edc487d9e252c5710eb836eebd6f9671dcd1d106.",
  "Reviewed all preview routes, shared components, CSS, browse index, and editorial groupings.",
  "Traced course/unit links through curriculum data, library parsing/building, the home page, and SearchForm.",
  "Traced role links through example details, organization-role evidence, job records, selection parsing, and example navigation/focus handling.",
  "Reviewed B's URL reader/writer alongside installed Next.js navigation documentation and router state preservation.",
  "Inspected client import boundaries, logo/image handling, root noindex metadata, and the implementation commit's file scope; existing home/filter files were unchanged."
 ],
 "limitations": [
  "Read-only source review; no files edited, tests run, builds executed, or delegation performed.",
  "Browser behavior, keyboard interaction, image rendering, and horizontal overflow at 390px were not exercised.",
  "The plan's reported test/build results and screenshots were not independently verified; external source claims were not revalidated."
 ]
}
```

### Host dispositions

Round 1 dispositions (host: Claude). All three findings accepted; the plan and the prototype code are updated.

- SB-001 accepted. Roles now carry `scope` (documented / interpreted / elsewhere) from the OrganizationRole link. Only E3 Lithium's laboratory-analysis role is `elsewhere` (no link). It is drawn dashed with "at another employer", listed last in kind-of-work rows, hidden from card summaries, and `hasFamily` ignores it, so E3 no longer matches Lab science and quality in B/C. `related-work` links (October examples) stay as `interpreted`: they are evidence at the organization itself, not another employer, so they still count. See src/lib/browse.ts, src/lib/browse-terms.ts (hasFamily), src/app/preview/BrowseParts.tsx.
- SB-002 accepted. Shared `matchesQuery` in src/lib/browse-terms.ts: named courses must match exactly; every other word of any length must start a word; stop words dropped; a non-empty query with no usable words matches nothing. Used by A and B. Tests in tests/unit/browse.test.ts (E3 → only e3-lithium; Physics 30 excludes Entuitive).
- SB-003 accepted. Directory reads the filter from useSearchParams, reconciles outside URL changes during render, writes with replaceState only when different; the page calls connection(). Verified in a browser: /preview/b?theme=water then the B link → bare URL, 0 checked, 32 of 32.

Host proof runs: typecheck clean, eslint clean on changed files, npm test 173 passed, next build succeeds.


## Round 2

Runner result: `/tmp/claude-0/claudex/r2/claudex-91zfkhbj/result.json`. Plan SHA256 `b01e1aafb78302ad16df5458e81d6a68b459af059e92553536364e3ece42cbe4`. Same session `01a14ca9-f531-7c01-8ab8-c8526922d4c7`.

```json
{
 "verdict": "REVISE",
 "summary": "SB-001, SB-002 and SB-003 are addressed. One remaining edge case makes B's shared search URL produce different results after reload.",
 "findings": [
  {
   "id": "SB-004",
   "severity": "low",
   "path": "src/app/preview/b/Directory.tsx:56",
   "evidence": "URL parsing truncates q to 80 characters, but the input's onChange accepts unlimited text and toQuery writes it all. The reconciliation deliberately preserves locally written queries. Consequently, a query with a distinguishing word after character 80 filters differently when entered versus reopened. For example, 'E3' followed by 78 spaces and 'owl' matches nothing locally; reloading the generated URL truncates away 'owl' and matches E3 Lithium.",
   "fix": "Apply the same query-length normalization to input changes, URL serialization and URL parsing. Enforce the limit for typing and pasting so every generated URL reproduces the displayed query and results."
  }
 ],
 "coverage": [
  "Verified the plan file matches SHA256 b01e1aafb78302ad16df5458e81d6a68b459af059e92553536364e3ece42cbe4.",
  "Checked SB-001 through role-scope construction, organization/job evidence, role-list ordering, company labels, card summaries, and both family-filter callers.",
  "Checked SB-002 through the shared matcher, A/B callers, course data, and the added unit-test source.",
  "Checked SB-003 through useSearchParams reconciliation, history.replaceState, prototype navigation links, and installed Next.js documentation for request-time rendering.",
  "Traced role-link destinations through example selection/navigation and course/unit links through the existing library parser.",
  "Reviewed the revision diff, client import boundaries, shared browse-cache consumers, CSS changes, and inherited noindex metadata."
 ],
 "limitations": [
  "Source review only: no files edited, tests or builds run, or delegation performed.",
  "Host-reported test results and browser checks were not independently executed or verified.",
  "Keyboard behavior, visual rendering, and horizontal overflow at 390px were not exercised."
 ]
}
```

### Host dispositions

Round 2 dispositions (host: Claude).

- SB-004 accepted. New `QUERY_MAX` (80) in src/lib/browse-terms.ts, used for B's input (`maxLength` plus slicing on change, which also covers paste), B's URL parsing, A's server parsing and A's input `maxLength`. toQuery writes `q.trim()`, which is never longer than the capped local value, so the URL reproduces the displayed query. Plan updated.

Host proof: typecheck and eslint clean.


## Round 3

Runner result: `/tmp/claude-0/claudex/r3/claudex-ayzrua9q/result.json`. Plan SHA256 `cdf1b9bf5a934487253fae2080e9fe92c0c6ed479e6badbc1645320dddac59e7`. Same session `01a14ca9-f531-7c01-8ab8-c8526922d4c7`.

```json
{
 "verdict": "APPROVED",
 "summary": "SB-001 through SB-004 are resolved in the inspected source. No material unresolved defects found.",
 "findings": [],
 "coverage": [
  "Verified the plan SHA256 matches cdf1b9bf5a934487253fae2080e9fe92c0c6ed479e6badbc1645320dddac59e7.",
  "Traced QUERY_MAX through A's input/parser and every B query-state writer, URL parser and serializer; the SB-004 mismatch is closed.",
  "Rechecked role evidence scopes, presentation, ordering and family-filter callers in B/C.",
  "Rechecked shared search matching, B's URL reconciliation and request-time rendering.",
  "Reviewed related example-navigation consumers, shared browse-cache usage, client import boundaries and unit-test source; previously inspected home, library and content files remain unchanged."
 ],
 "limitations": [
  "Read-only source review; no edits, tests, builds or delegation performed.",
  "Host-reported verification results were not independently verified.",
  "Browser navigation, keyboard interaction and rendering at 390px were not exercised."
 ]
}
```

Approval check (`runner.py check`): "Approval matches the current plan." Rounds used: 3 of 5.

## Inspection 1 (fresh Codex session)

Builder: Claude. Base commit `0adbbdf`. Runner result: `/tmp/claude-0/claudex/i1/claudex-i7stm60o/result.json`, session `01a14cb1-688f-79e1-8fa7-73ec9b01980e`.

```json
{
 "verdict": "REVISE",
 "summary": "Two unresolved defects: A can retain stale search text after clearing, and role-list accessibility labels overstate Calgary locations.",
 "findings": [
  {
   "id": "SB-005",
   "severity": "medium",
   "path": "src/app/preview/a/page.tsx:46",
   "evidence": "Open /preview/a?q=E3, edit the input to \u201cwater\u201d, then click \u201cClear search\u201d. The URL and results clear, but the uncontrolled input retains \u201cwater\u201d: defaultValue does not reset an edited input, and Next preserves the page tree across query changes. Door navigation has the same problem.",
   "fix": "Reset the input on URL navigation, either by keying the form with the normalized door/query or by synchronizing a client input with those parameters."
  },
  {
   "id": "SB-006",
   "severity": "low",
   "path": "src/app/preview/BrowseParts.tsx:160",
   "evidence": "Every role\u2019s organization list is labelled \u201cWhere \u2026 happens in Calgary\u201d. This includes GHGSat\u2019s commercial-partnerships role, whose OrganizationRole explicitly identifies a London government-market position. GHGSat\u2019s organization record also says its Calgary teams are unspecified. Screen-reader users receive an unsupported location claim.",
   "fix": "Use a location-neutral label such as \u201cOrganizations connected to this kind of work\u201d; qualify locations only where the role-specific evidence supports them."
  }
 ],
 "coverage": [
  "Read all 13 manifest files and verified their SHA256 values, including the supplied plan hash.",
  "Reviewed all preview routes, shared components, CSS, search matching, query limits, facet logic, and C\u2019s fallback selection.",
  "Traced course/unit destinations through curriculum initialization, library parsing, the home page, and SearchForm.",
  "Traced role construction and destinations through organization evidence, job records, selection parsing, and example navigation/focus handling.",
  "Inspected browse-cache consumers, client import boundaries, image/logo handling, global styles, and inherited noindex metadata.",
  "Checked URL synchronization and input preservation against installed Next.js documentation and Next/React implementation source."
 ],
 "limitations": [
  "Source review only; no files edited, tests or builds run, or delegation performed.",
  "Browser navigation, keyboard interaction, and rendering at 390px were not exercised.",
  "Reported verification results and screenshots were not independently verified; external content sources were not revalidated."
 ]
}
```

### Host dispositions

- SB-005 accepted. A's search form is keyed by `by|q`, so it remounts with the URL's value when a link clears the search or changes door. Browser check: /preview/a?q=E3, type "water", click Clear search: URL `?by=course`, input empty.
- SB-006 accepted. The role list's label is now "Organizations connected to <kind of work>", with no location claim.

Proof after fixes: typecheck and eslint clean, npm test 173 passed, next build succeeds.

## Inspection 2 (fresh Codex session)

Runner result: `/tmp/claude-0/claudex/i2/claudex-r8krci2u/result.json`, session `01a14cb4-39df-74f0-b348-20e16cb3863f`. Verdict APPROVED; no findings.

```json
{
 "verdict": "APPROVED",
 "summary": "No material unresolved defects found in the inspected source.",
 "findings": [],
 "coverage": [
  "Read all 13 manifest files and verified their SHA256 values, including the supplied plan hash.",
  "Reviewed all preview routes, shared components, CSS, search matching, query limits, facet logic and sentence fallback behavior.",
  "Traced course/unit links through curriculum initialization, library parsing, the home page and SearchForm.",
  "Traced role scopes and destinations through organization records, job evidence, example selection and navigation/focus handling.",
  "Reviewed browse-cache consumers, client import boundaries, logo/image handling, global styles and inherited noindex metadata.",
  "Checked URL synchronization against installed Next.js documentation and router implementation; confirmed the tracked changes leave the home page and existing filter unchanged."
 ],
 "limitations": [
  "Source review only; no edits, tests, builds or delegation performed.",
  "Browser navigation, keyboard interaction and rendering at 390px were not exercised.",
  "Reported verification results and screenshots were not independently verified; external content sources were not revalidated."
 ]
}
```

## Outcome

Plan approved in round 3 of 5; code approved in inspection 2 of 2. Six findings (SB-001 to SB-006), all accepted and fixed. Requested model gpt-6-astra/high on every call; the CLI returned no observed model keys, so the serving model is not independently confirmed. No API key was used.
