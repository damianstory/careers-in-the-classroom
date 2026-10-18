# Repair implementation and verification — 18 October 2026

Scope: implement the [repair plan](PLAN.md) following the [original review](REPORT.md). The original review remains the historical production assessment; this document describes the local repairs.

## Source and environment

- Branch: `codex/post-merge-repairs`, based on merged main `58eb8ecf1b9f559b7cf5b6a6208a13720009a7b1`.
- Exact source/config/test contents at local verification: [SHA-256 manifest](repairs/source-manifest.sha256). This report records the checks completed before publication.
- Production-mode local server: `http://localhost:3218`, built by the Playwright web-server command. `CITC_E2E_PORT` now permits an isolated port without interrupting the existing server on 3200.
- Automated browser: installed Google Chrome; desktop 1440×900, phone 390×844 with touch capability. Additional regression widths: 320, 390, 768 and 1440px.
- Manual computer use: Codex in-app browser, desktop 1440×900 and mobile-sized 390×844 / 320×740 viewports.
- No production deployment, Git push, real signup, delivered email or speaker request occurred. Existing untracked research and artwork were preserved.

## Repairs

| Finding | Implemented behavior | Verification |
|---|---|---|
| F1 — home role lost | Organization links under a job carry its validated role ID and `#who`, using the existing URL helper. | Homepage → satellite engineering → GHGSat, reload and Back/Forward. Manual second example: Quality and traceability → RJC Engineers. |
| F2 — incomplete tab keyboard behavior | One tab stop; arrow navigation with wrapping; Home/End; automatic activation; horizontal desktop and vertical phone semantics. Company search survives tab changes. | Actual focus assertions at 320, 390 and 1440; strict axe scan of the company tab; visible keyboard walkthrough. |
| F3 — clipped landing headings | Landing section anchors use header-height-based scroll margin. | Both anchors at four widths, history traversal, manual clicks at 320px. Measured heading clearance approximately 64px below the header. |
| U1 — Menu Escape | Escape closes the header disclosure and returns focus to Menu; existing route/dialog behavior stays intact. | Keyboard regression, mobile visible verification and existing dialog journeys. |
| U2 — directory continuity | Allowed `from` values preserve company/challenge/work origins. Company queries survive section, role and return navigation. Valid course context takes precedence. | URL parser unit tests; company round trip, role selection, reload; challenge/work group → example → return; no-JavaScript company search and return. |
| U2 — long directories | Company-name search narrows the current directory, with result count, empty state and clear action. Challenge/work views have group jumps. | Desktop/mobile filtering, no-results and clear tests; 320px visual check; group headings clear sticky header. Finding a known company now uses a search field instead of scanning 32 rows. |
| U3 — docs/lint | README describes 32 examples, four browsing modes, live search versus saved jobs, public validation preview and simulated forms. Lint explicitly excludes bundled third-party `.claude/skills`. | Application lint, types, unit tests and build. |

No new dependencies, content restructuring, image changes or virtualized directories were introduced.

### Additional regression found during implementation

A direct initial visit to `/connections?by=role#library`, followed by a group jump, example and return, produced `#library#library` in both automated projects. The same problem affected challenge mode and repeated quick-bar switching. In the installed Next 16.3.6 source, initial route discovery stores a canonical URL containing the initial fragment; cached navigation appends the destination fragment.

The Connections client now recognizes only malformed fragments ending in its own `#library` target, normalizes them with the router-compatible History API, and restores the target scroll position. This runs on router updates as well as mount. It does not reload the document or clear in-memory demo state. Tests retain the reproduction, assert the exact resulting URL and scroll clearance, and verify that the document survives. Re-evaluate this narrow workaround when upgrading Next; no dependency files were patched.

An existing blocked-storage test also exposed a timing race in the test: it scrolled before the signup dialog's asynchronous focus restoration had finished. The test now waits for the page heading to receive focus before scrolling. It retains all signup, storage-denial and noted-search assertions; no timeout increase or retry was used to hide the failure.

## Automated results

| Check | Final result | Evidence |
|---|---|---|
| Full browser suite, including production build | **385 passed, 49 skipped, 0 failed**; 3.3 minutes | [Full log](repairs/e2e-final.log) |
| Focused repair + directory suite | **53 passed, 5 skipped, 0 failed** | [Focused log](repairs/focused-final.log) |
| Unit tests | **179 passed in 14 files** | [Unit log](repairs/unit.log) |
| Typecheck | **Passed** | [Typecheck log](repairs/typecheck.log) |
| Application lint | **Passed, no warnings/errors** | [Lint log](repairs/lint.log) |
| Development privacy | **Passed**; typed topic absent from server output and `.next` files | [Privacy log](repairs/privacy.log) |
| Diff whitespace and source fingerprints | **Passed** | [Source manifest](repairs/source-manifest.sha256) |

Commands: `CITC_E2E_PORT=3218 npm run test:e2e -- --workers=4`, `npm test`, `npm run typecheck`, `npm run lint`, `npm run test:privacy-dev`, and `git diff --check`. The browser command runs `npm run build` before starting its isolated server. No retries were enabled. The 49 full-suite skips are existing device-specific conditions (desktop rail/projection/keyboard versus phone controls/fallbacks); none of the new repair tests is skipped. Earlier failing runs are retained in `repairs/e2e-first.log` and `repairs/e2e-intermediate.log` for provenance.

The suite covers all 32 examples and their parts/diagrams, role/job/pathway navigation, course context, Discover, signup/request simulations, network privacy, blocked storage, debounce races, projector mode, printing, no-JavaScript behavior, responsive layout and axe scans. Existing broad axe checks assert no serious/critical WCAG A/AA violations; new landing-tab checks require no violations across their configured WCAG tags. Automated checks do not establish complete WCAG conformance.

## Visible computer-use checks

| Check | Observed result |
|---|---|
| Desktop selected job from Home | Satellite and instrument engineering opens directly with its role heading and Related job postings. [Screenshot](repairs/desktop-role.png) |
| Desktop directory search → role → return | GHGSat search remains populated after selecting a role and returning. [Screenshot](repairs/desktop-company-search.png) |
| Phone keyboard tabs and company search | Vertical tab semantics, arrow focus, visible focus ring, retained query and no horizontal overflow. [390px screenshot](repairs/phone-tabs-390.png) |
| Phone Menu Escape | Expanded state becomes false; focus returns to Menu. |
| Narrow-phone shared role | RJC Engineers opens Quality and traceability directly; Contents moves to Ways in. [Screenshot](repairs/phone-role-320.png) |
| Narrow-phone directory form | Search controls wrap within 320px; RJC narrows to 1 of 32 organizations; bottom bar remains available. [Screenshot](repairs/phone-company-320.png) |
| Landing anchor clicks | `#how` and `#start` both clear the sticky header at 320px. [Screenshot](repairs/phone-anchor-320.png) |
| Work-group jump and return | Media and creative heading lands at 80px with a 56px header. Broken Pencil Studios opens Animation. Return lands at `#library`, 56px from viewport top, with no overflow. [Screenshot](repairs/phone-return-work-390.png) |
| Repeated quick-bar switching | Work → Company → Work → Work retains one `#library` fragment and 56px target position at 390px. [Screenshot](repairs/phone-quickbar-repeat-390.png) |
| Desktop challenge jump | Light, image and story lands at about 88px beneath the 64px header with no horizontal overflow. [Screenshot](repairs/desktop-challenge-jump.png) |
| Browser console | No warnings/errors observed in the local manual journeys. Targeted automated routes also assert no console errors, uncaught errors or HTTP responses ≥400. |
| Indeed | Optical engineer search opens with Calgary, AB and results. [Screenshot](repairs/indeed-search.png) |
| Job Bank | Optical engineer near Calgary search opens successfully, showing zero results at check time. This is a valid empty search, not a broken link or a vacancy claim. [Screenshot](repairs/jobbank-search.png) |

## Remaining device coverage

Physical iPhone/Android hardware and a live screen-reader session were not exercised in this run. Viewport/touch emulation, accessible-tree inspection, keyboard checks and axe are the completed coverage; they are not substitutes for real mobile browser or assistive-technology testing.

Remaining device checks on iPhone/Safari and Android/Chrome: menu, course/unit controls, Contents sheet, external search links, quick search with software keyboard, rotation and safe-area clearance. A VoiceOver/TalkBack sample should cover tab announcements, company-search results, example sections and return navigation. No repair is currently proposed for these untested device-specific behaviors.

At the conclusion of these local checks, the live alias still represented the earlier merged release. Publication and live verification are recorded separately from this pre-release assessment.
