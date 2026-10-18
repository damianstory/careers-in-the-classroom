# Repair plan from the 18 October 2026 E2E review

Status: **implemented locally on `codex/post-merge-repairs`; verification recorded in [REPAIR-VERIFICATION.md](REPAIR-VERIFICATION.md)**. Baseline: `58eb8ec`. Findings and reproductions: [REPORT.md](REPORT.md). Physical-device and live screen-reader checks remain explicitly unverified; deployment is separate.

## 1. Repair the landing-page journeys

Keep this a focused change covering F1–F3. No new dependencies or content-model redesign are needed.

### F1: retain the selected role

- Update `src/app/_home/Doors.tsx` so each organization link in a role row carries that row's role ID and opens `#who`.
- Prefer the existing `exploreHref` URL helper from `src/lib/example-navigation.ts`, or generate the destination in the server-side landing data. Preserve the existing client/server content boundary.
- Keep company-only links pointing to the general example and course links pointing to the filtered library.
- Add a focused journey regression covering Home → A kind of job → GHGSat under Satellite and instrument engineering. Assert the role query, Who section, specific role heading, and Related job postings. Exercise desktop and phone.
- Check another organization with a shared work-role ID and verify refresh and browser Back/Forward.

**Acceptance:** the selected role opens directly on both screen sizes, and the same choice behaves consistently from Home and Connections. No extra selection is required.

### F2: complete keyboard interaction for the Start from tabs

- Add roving focus: selected tab `tabIndex=0`, inactive tabs `tabIndex=-1`.
- Implement ArrowLeft/ArrowRight and Home/End for the desktop tab row. Choose and implement a matching vertical pattern for the stacked phone layout, including its orientation semantics.
- Use automatic activation if panels remain immediate local state changes; keep `aria-selected`, `aria-controls`, IDs, and active panel synchronized.
- Test keyboard behavior with actual focus assertions, not only ARIA attribute presence. Verify mouse/touch-style clicks and company-search state still work.

**Acceptance:** keyboard users can switch every tab predictably, Tab leaves the group for the active panel's controls, and focus is always visible at 320, 390, and 1440px.

### F3: account for the sticky header on landing anchors

- Add an appropriate `scroll-margin-top` to the landing section targets, based on the existing header-height token, with a small readable gap if needed.
- Keep scope to the landing anchors; do not change working example-section or Connections scrolling globally.
- Verify both `#start` and `#how` after clicking, direct loading, and Back/Forward. Check 320, 390, 768, and 1440px, including the company and job panels whose content changes page height.

**Acceptance:** target heading top is below the visible header bottom, with no clipped first line and no unnecessary jump to the page top.

## 2. Improve navigation continuity

This can follow the landing fixes in a separate small change.

- **U1:** add Escape handling to the mobile header menu and return focus to its toggle. Verify menu links, dialog openers, and route changes still close the menu. Do not trap focus as if this disclosure were a modal.
- **U2, return path:** consider carrying a validated internal browsing-origin value into examples opened from company/challenge/work directories. Build the return URL from allowed modes rather than accepting arbitrary destinations. Preserve existing course/unit/topic context and browser history behavior.
- **U2, long directories:** start with company search and simple group jump links for challenge/work views. Reuse the existing lists and headings; avoid virtualization or a new filtering framework for 32 companies. Decide whether a search narrows the current directory or intentionally opens the course library, and label that behavior clearly.
- Compare the number of interactions required to find a specific company/work area before and after. Recheck sticky header and quick-bar clearance with the new controls.

**Acceptance:** Escape is consistent across navigation surfaces; readers can return to their previous browsing mode; locating a known company does not require scanning the whole directory. Existing role links and course filtering remain intact.

## 3. Clean up validation and documentation

- **U3:** update README's example counts, feature descriptions, and deployment status. Retain explicit notes that accounts, email, and requests are simulated.
- Separate application lint from vendored/bundled skill lint, using explicit ignores or dedicated commands. Do not suppress warnings across application source to obtain a clean result.
- Preserve the existing content, source, logo-sanitization, and job-status tests. The content split passed all 177 unit tests; no further restructuring is justified by this review.

**Acceptance:** app lint output is actionable; documentation describes the current 32-example deployment accurately without implying real account/email operations.

## 4. Regression and device verification before calling the follow-up complete

1. Fetch and identify the exact source revision to test; verify the deployment alias maps to it.
2. Run unit tests, typecheck, lint, production build, and the existing repository Playwright suite, including axe, all-examples, ways-in, privacy assertions, and presentation checks. Use an isolated test server/port so an existing local server is not interrupted.
3. Add only the targeted F1/F2 regression tests and anchor-clearance assertions needed to prevent these failures. Keep existing slow-navigation/debounce and blocked-storage cases.
4. Repeat the affected journeys through visible computer use at desktop and 320/390px widths; verify console and network errors and capture fixed screenshots alongside this report.
5. Perform at least one physical iPhone/Safari and one Android/Chrome pass: mobile menu, course/unit controls, Contents sheet, job search links, bottom quick-search with software keyboard open, rotation, and safe-area clearance.
6. Check a keyboard-only journey and a screen-reader sample. Check print and no-JavaScript behavior for the example page, since this review did not exercise those modes.
7. Recheck one Indeed and one Job Bank link, retaining the distinction between live search results and dated saved job examples.
8. Update the report with exact pass/fail results and remaining skips. Do not count viewport emulation as physical-device verification or demo confirmations as delivered email/requests.

**Completion criteria:** F1–F3 pass their acceptance checks, targeted regressions and the existing suite pass, and any device/accessibility gaps are explicitly recorded. Publication or deployment is a separate action from this assessment and plan.
