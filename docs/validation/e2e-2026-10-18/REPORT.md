# Post-merge end-to-end review — 18 October 2026

**Result: PARTIAL — core journeys passed; two medium-priority issues and one minor visual defect remain.** No crash, missing example, broken checked image, or horizontal overflow was found in the exercised states. This is a bounded review, not proof that every device or possible interaction works.

## Release and method

- Tested public deployment: https://careers-in-the-classroom.vercel.app
- Verified source: `58eb8ecf1b9f559b7cf5b6a6208a13720009a7b1`, the current `origin/main` fetched at the start of the review.
- GitHub production deployment `7154640710` reported success; `vercel inspect` identified deployment `dpl_CTrQESX2WFfLX7DNswhXmz2vYTuW` as Ready and listed the public hostname as its alias.
- Scope: merged PRs [#1](https://github.com/damianstory/careers-in-the-classroom/pull/1), [#3](https://github.com/damianstory/careers-in-the-classroom/pull/3), [#4](https://github.com/damianstory/careers-in-the-classroom/pull/4), and [#5](https://github.com/damianstory/careers-in-the-classroom/pull/5): landing page, Connections, job-search links, content split, four browsing modes, and quick bar.
- Browser driver: Codex integrated browser through computer use, with clicks, keyboard input, live DOM inspection, screenshots, and console inspection. HTTP asset checks and local unit/static checks supplemented the browser work.
- Responsive widths: **320, 390, 768, 1024, 1440px**. Main-route sweep used 844px height on phones and 900px on larger screens. Additional narrow-phone interactions used 320 × 640; typical mobile interactions used 390 × 844.
- The local `main` checkout was fast-forwarded from `1050564` to the verified merge. Existing untracked artwork/research was preserved. No application source changes, commits, pushes, or deployments were made.

## Coverage and results

| Route / flow | Result | Evidence / scope |
|---|---|---|
| `/` rendering at five widths | Pass | No horizontal overflow; one H1; company search and no-match recovery work |
| `/` → course → unit → example | Pass | Physics 30 / Electromagnetic radiation context retained through example and Back to results |
| `/` → specific kind of job | **Fail** | F1: company link discards the chosen role |
| `/` tab keyboard behavior | **Fail** | F2: ArrowRight leaves the active tab unchanged; all three tabs remain ordinary tab stops |
| `/` → `#start`, `#how` on mobile | **Fail** | F3: heading begins about 8px behind the sticky header |
| `/connections` course/unit/topic filters | Pass | Course/unit changes, known topic, no match, clear, long unbroken topic at 320px |
| `/connections` Show more | Pass | Expanded from 12 to 32 cards; keyboard Tab continued to first newly revealed card without jumping to top |
| `/connections?by=challenge` | Pass | Challenge groups rendered; mobile quick-bar navigation worked |
| `/connections?by=company` | Pass | Company directory rendered; mobile quick-bar navigation worked |
| `/connections?by=role` | Pass | All **97** rendered role destinations opened with a Related job postings panel and at least two provider links; no overflow at 390px |
| Connections quick bar | Pass | Switched among all four modes; search for water; Escape closed search and restored focus; desktop quick-search submission beat a pending console edit |
| `/examples/[slug]` — all 32 | Pass, structural sweep | **64 page inspections** at 390 and 1440px: seven nonzero-height sections in one-page mode, substantive main content, no horizontal overflow |
| Example interaction detail | Pass | GHGSat section navigation, role selection, saved-job expansion, pathways, one-page toggle and reload persistence, mobile Contents sheet, browser Back/Forward |
| Classroom projector | Pass, sampled | GHGSat How it works, Next to roles, Escape exit, screenshot inspection at desktop size |
| Live job providers | Pass, sampled | Atmospheric scientist searches opened at Indeed and Job Bank with Calgary location and rendered results. No applications submitted |
| `/discover` | Pass, sampled | Desktop Cycle → Stop → Reveal and all five following topic controls; mobile Biology Single draw → Reveal → Next round; Subjects reset; 320px layout |
| Demo speaker request | Pass as a simulation | Mobile form accepted timing/format and confirmed “Nothing was sent. This is not a booking.” |
| Demo signup | Pass as a simulation | Mobile synthetic email/school accepted; confirmation said nothing was saved or sent. Returning to the Physics 30 unit showed the unlocked development question and zero signup-gate buttons |
| `/get-involved` | Pass as a simulation | Renders at five widths; Start a conversation shows that nothing was sent |
| `/digest` | Pass | Sample email rendered at five widths; inspected its links and sample-only labels |
| `/examples`, `/search`, `/explore`, filtered `/` | Pass | Four browser redirects preserved applicable query/hash; see JSON |
| Unknown example | Pass, HTTP | `/examples/not-a-real-company` returned 404 |
| Invalid course/unit and role/job | Pass | Returned usable fallback pages; unknown filters showed the general library; unknown role/job did not render a false role detail |

The main-route sweep comprises **40 route/width combinations** across `/`, four Connections modes, Discover, Get involved, and Digest. All had one H1 and zero document-level horizontal overflow. The example and role sweeps are structural inspections, not an exhaustive exercise of every control on every example.

### Local checks and browser errors

- `npm test`: **177 tests passed across 14 files** ([log](unit-tests.log)).
- `npm run typecheck`: passed ([log](typecheck.log)).
- `npm run lint`: zero errors, **103 warnings**, concentrated in bundled `.claude/skills` JavaScript ([log](lint.log)).
- **96 unique observed example image URLs** returned HTTP 200. Lazy images were not all decoded during the page sweep; the separate HTTP check verifies availability, not visual quality of every image.
- No CitC application warnings/errors were observed in the captured console log. The two recorded messages were Google sign-in/FedCM messages from the protected Vercel login page encountered before using the public alias; they are not CitC failures.
- A local production build, the repository's standalone Playwright/axe suite, and the development-server privacy script were **not run** in this pass. Deployment readiness was checked against Vercel; browser interactions used the integrated computer-use session throughout.

## Confirmed defects

### F1 — P2: choosing a job on the landing page loses that selection

**Reproduction:** Home → Find an example for my class → A kind of job → Satellite and instrument engineering → GHGSat. Reproduced on desktop and 390px mobile, including the default section-by-section reading mode.

**Actual:** navigates to `/examples/ghgsat`, opens The question, and does not show the selected role detail or Related job postings panel. The user must find Who does this work and select the role again.

**Expected:** navigate to `/examples/ghgsat?role=satellite-engineering#who`, as the corresponding Connections work-directory link already does.

**Cause:** `src/app/_home/Doors.tsx:145` builds a bare example URL even though the parent row has `r.id`. This affects all role-row destinations, not only this example.

**Evidence:** [mobile destination](evidence/landing-role-mobile-result.png), [desktop destination](evidence/landing-role-loses-selection.png). The independently checked Connections role links provide the working comparison in [role-sweep.json](evidence/role-sweep.json).

### F2 — P2: landing tabs expose tab semantics without tab keyboard behavior

**Reproduction:** At desktop width, focus My class in Start from; press ArrowRight.

**Actual:** focus and selection stay on My class. Inspection found no `tabindex` on any of the three tab buttons. There is no keyboard handler in the component. Tab/Enter can still reach and activate the controls, so this is not a complete keyboard block.

**Expected:** a consistent tabs interaction: arrow navigation between tabs, active-tab focus management, Home/End support, and one tab stop for the tab group. On mobile, the vertical presentation also needs a deliberate keyboard orientation.

**Cause:** `src/app/_home/Doors.tsx:44–63` supplies `role="tablist"`, `role="tab"`, selection and relationships, but only handles clicks.

**Evidence:** [keyboard state screenshot](evidence/landing-keyboard-tabs.png). This is a manually verified interaction defect; no formal WCAG conformance result is claimed.

### F3 — P3: mobile landing jump links partly hide their destination headings

**Reproduction:** At 390 × 844, click Find an example for my class, then separately test How it works from the home page.

**Actual:** `#start` heading top is **47.80px** and `#how` heading top is **48.02px**, while the header ends at **56px**. The first line of each heading is partly covered.

**Cause:** anchor sections have no scroll margin; the mobile band padding is 48px (`src/app/_home/home.module.css:625–628`).

**Expected:** the complete target heading is visible below the sticky header after a click, a direct hash load, or history navigation.

**Evidence:** [Start heading](evidence/landing-doors-mobile.png), [How heading](evidence/landing-how-anchor-mobile.png), [measurements](evidence/anchor-checks.json).

## Usability improvements, separate from defects

### U1 — P3: mobile header menu ignores Escape

Opening Menu and pressing Escape leaves `aria-expanded="true"`. The toggle and navigation links still close it. Quick search and the example presentation already support Escape, so the header is inconsistent. Add Escape dismissal and return focus to Menu; keep the existing disclosure behavior rather than introducing a modal unnecessarily. Source: `src/components/SiteHeader.tsx:76–89`. [Evidence](evidence/mobile-menu-escape.png).

### U2 — P3: browsing long directories takes substantial scrolling

At 390px, challenge/company/work pages measured **14,422 / 13,514 / 10,070px** in document height. The quick bar makes mode switching easy, but it does not jump among challenge/work groups or filter the company directory in place. The landing page has a company search while the main company directory does not. Consider a compact in-directory search or group jump list, using the existing data and URL conventions. These measurements demonstrate page length, not measured user frustration or a performance defect.

The example's All connections link also returns to the general course library after arriving from a company/challenge/work directory. Its wording is accurate and browser Back restores the previous directory correctly; preserving that browsing origin would nevertheless reduce repetition.

### U3 — P3: validation output and project documentation need maintenance

Lint passes but produces 103 warnings in bundled skill files. Scope app lint separately from bundled tooling so new warnings are easier to spot. README still describes “three prepared examples,” “all three examples,” and deployment as not built, despite the current 32-example deployment. Correct those statements while retaining the accurate simulation boundaries. These are maintenance issues, not runtime regressions.

## Product boundaries and untested cases

- Signup, speaker requests, topic follow-up, and company contact are documented simulations. Their UI was checked as such; no email delivery, account creation, booking, or real contact workflow exists to verify. Synthetic input was used. This review does not certify those flows as a launched service.
- Mobile checks are **responsive browser viewports**, not physical iPhone/Android tests. Native software keyboard, touch/gesture behavior, safe-area insets, rotation, and device-specific browser behavior remain unverified.
- No fresh automated axe audit, screen-reader session, no-JavaScript browser run, print output check, throttled network test, or performance benchmark was performed.
- All examples received structural desktop/mobile checks; detailed interactions were sampled, mainly GHGSat and a Discover E3 Lithium round. Discover was not played through every occupation or complete deck exhaustion.
- External job-search destinations were sampled. This does not verify every provider query, source/program URL, individual posting, or job's current availability.
- Browser controls occasionally needed a refreshed snapshot after navigation or a responsive label change. Those harness timing/locator retries were not counted as application defects.

## Evidence index

- [Example sweep — 64 inspections](evidence/example-sweep.json)
- [Role destinations — 97 inspections](evidence/role-sweep.json)
- [Responsive sweep — 40 combinations](evidence/responsive-sweep.json)
- [Image availability — 96 URLs](evidence/image-http-checks.json)
- [Redirect checks](evidence/redirect-checks.json), [negative HTTP cases](evidence/http-negative-cases.json)
- [Console capture](evidence/browser-console.json)
- Representative views: [desktop home](evidence/home-desktop.png), [mobile home](evidence/home-mobile.png), [mobile work directory](evidence/work-mobile.png), [desktop projector](evidence/projector-desktop.png), [narrow Discover](evidence/discover-320.png), [demo request](evidence/speaker-demo-mobile.png).

Next: [prioritized repair plan](PLAN.md).
