# CitC joint UX + UI plan

Owner decisions (28 September 2026): gate (a) all examples open; next content (a) new examples for uncovered units; hero (a) photo on desktop, headline + filter only on phones.

## Build status (28 September 2026)
- Done: Phase 2 (home library, filter in URL, apply on change with GET fallback, coverage optgroups, card component, redirects, mobile summary row) and the Phase 1 items outside the example pages (nav "Examples", gate cleanup, interview notes behind `NEXT_PUBLIC_INTERVIEW_NOTES=1`, same-subject nearest fits, not-found link, neutral non-evidence tags).
- Deviations: a course with no unit shows one "In [course]" section with a "Prepared for [units]" line per card, instead of one group per unit (avoids repeating E3 Lithium under two Chemistry 20 units). Active filters use one "Clear" link, not removable pills. Only GHGSat has a signature visual; the others use the type-only card.
- Not done here: Phase 1 items inside `src/app/examples/[slug]/*` (fits line, one checked date, ledger move, chip pass on example pages) and all of Phase 3. Another session owns those files and has just shipped the user-chosen "lesson rail" navigation, which Phase 3's 3-tab header would replace. Needs an owner decision before Phase 3.
- Phase 4 is content research, not started.
- Owner decision (28 September 2026): keep the lesson rail. Phase 3 is adapted to it: no 3-tab header. The example-page session takes the content changes inside the rail: fits line first, then "Use it in class", evidence lower, one template for all examples, careers framed "For your students", no "Explore" labels.

## 1. Goal
Cut the time from "I teach this unit" to "I have something to use in class Monday" to one filter and one click.

## 2. Decisions (settled)
- Home becomes the example library: short hero, one filter, card grid. `/search` and `/explore` redirect to `/?…` with their parameters kept.
- Nav label is "Examples". "Explore" is no longer a nav name or back-link label. Section heading: "Real problems Calgary organizations are working on."
- One filter model: course → unit → optional topic. The Biology/Chemistry/Physics chips go.
- The filter is a server-rendered GET form in the URL, as the base. With JS it applies on change (router.replace, scroll and focus kept, debounce ~300ms, aria-live count) and the submit button is visually hidden.
- Typed topic filters the list and shows a count; it does not highlight. Zero hits shows the no-match banner plus closest examples.
- Result order: "Fits your unit" (with the why-it-matches line), then "Also fits [course]", then "Other courses" under a full-contrast header, not dimmed.
- Group by unit only when a course is chosen and no unit is. Show 12 cards, then "Show more". Sort by fit only; no "Newest".
- The unit select shows coverage: optgroups "Ready now" / "Not prepared yet", plus a line "Physics 30: 1 of 4 units ready". "Not yet" units stay selectable.
- No match becomes an inline banner ("No prepared example for … yet · Note this topic") above the nearest fits from the same course or subject, each with a reason line. It never leaves a blank grid.
- The whole card is the link. Anatomy: media strip, eyebrow "Subject · Org", question title (clamped to 3 lines), one pin line, up to 3 neutral course tags, footer meta with time needed once it exists. No visual yet → a designed type-only fallback (subject colour field + question), never an empty grey box. Phones: one column, compact card with the thumbnail on the left.
- Chip grammar: solid green means evidence only. Course tags are neutral. Link chips get an arrow. Filter rows are labelled.
- Example page, top to bottom: H1 question with org/location line → full "Fits" line ("Pick your class" when arriving cold) → "Use it in class" (question for the class, time, explainer) beside the signature visual on desktop, above it on mobile → the rest.
- 3 tabs: Story / Company / Careers. Careers is framed "For your students": roles, each with labelled "Ways to prepare" and "Job examples" sections, no nested tabs. The Company tab is hidden when content is thin.
- One sticky example header (short question, org, tabs). One back link, no stacked back links. In-view headings ~36–40px. The 3 tabs are equal width and fit at 390px with no horizontal scroll.
- Mobile filter: in-flow on home. After scrolling, a one-row sticky summary ("Physics 30 · EM radiation · 4 ▾") scrolls back to the inline filter and focuses it. No bottom sheet for now: with 2 selects and 1 input it adds modal/focus-trap cost and no benefit. Sticky chrome on phones stays ≤ ~110px (site header + summary row).
- Gate: all examples open. Only "Recent development" is gated (lock icon), and signup is prompted once per page. The "Complete example · free preview" tag and "first result free" are dropped.

## 3. Work in phases

### Phase 1: small, high-value fixes (days)
| What | Teacher benefit | Effort | Files |
|---|---|---|---|
| Nav label "Examples"; back links read "All examples"; one back link per example page | Clear where they are and how to get back | S | `components/SiteHeader.tsx`, `app/examples/[slug]/page.tsx`, `ExampleExplorer.tsx`, `app/not-found.tsx`, `app/explore/page.tsx` |
| Hide the dev nav switcher below 768px; interview with `npm run demo` | Tabs no longer covered on phones | S | `examples/[slug]/NavPrototypeSwitcher.tsx`, `ExampleExplorer.tsx` |
| Gate cleanup: drop the "free preview" tag and the extra signup prompts, keep the lock on news only | Less noise, and nothing looks locked that isn't | S | `search/ResultsParts.tsx`, `examples/[slug]/ExampleParts.tsx`, `page.tsx`, `lib/search.ts` (`isLocked`) |
| Show the full "Fits" line with unit names under the H1; one checked date | Fit is visible on a cold shared link | S | `ExampleExplorer.tsx`, `page.tsx`, `ExampleSections.tsx` |
| Move the "What we know, and how" table below "For your class" (Wilder/E3), as a disclosure | Teaching content first | S | `examples/[slug]/page.tsx`, `ExampleSections.tsx` |
| Hide the "Searches without a match (interview notes)" list behind a flag | A clean page for teachers | S | `search/NoMatchParts.tsx` |
| No-match nearest fits: same course/subject with a reason line, replacing the presets from other courses | No dead end for Science 10/20 | S–M | `lib/search.ts`, `content/curriculum.ts`, `search/page.tsx` |
| Chip grammar pass; Explore cards become whole-card links (drop "Open example") | Tags read correctly; bigger targets | S | `styles/globals.css`, `components/EvidenceTag.tsx` |

### Phase 2: home library (1–2 weeks)
| What | Teacher benefit | Effort | Files |
|---|---|---|---|
| Home = short hero + filter + grid, results ordered by fit, inline no-match | One screen from unit to example | L | `app/page.tsx`, `home.module.css`, `components/SearchForm.tsx`, `lib/search.ts` (resolve to a ranked list) |
| Apply on change + URL sync + live count; GET fallback | Fast, and links still share | M | `SearchForm.tsx` |
| Coverage optgroups + "1 of 4 ready" line | They know before choosing | S | `SearchForm.tsx`, `content/curriculum.ts` |
| Card component (whole-card link, media slot, meta) | Scanning 20–60 examples | M | new `components/ExampleCard.tsx`; reused from `explore/page.tsx` |
| Redirect `/search` and `/explore` | Old links keep working | S | `next.config.ts` redirects or route `redirect()` |
| Mobile sticky summary row | Filter reachable on a phone | S | `SearchForm.tsx`, `home.module.css` |
| Update e2e journeys | Guards the new flow | M | `tests/` |

### Phase 3: example-page template (1–2 weeks)
| What | Teacher benefit | Effort | Files |
|---|---|---|---|
| One template for all examples: sticky header, 3 tabs, hide thin tabs | One layout to learn | M–L | `ExampleExplorer.tsx`, `page.tsx`, `lib/example-navigation.ts` (`view` = story/company/careers; map old `roles/pathways/jobs` URLs) |
| "Use it in class" block + signature visual at the top | Usable in class at a glance | M | `ExampleExplorer.tsx`, `ExampleSections.tsx`, `example.module.css` |
| Careers view: roles → Ways to prepare / Job examples, labelled filters, hidden when ≤3 items | Depth without overload | M | `ExampleExplorer.tsx`, `ExploreFocus.tsx`, `explore.module.css` |
| Card soup reduction; location facts once; smaller headings | Calmer reading | M | `example.module.css`, `explore.module.css` |

### Phase 4: content that needs research
| What | Teacher benefit | Effort |
|---|---|---|
| Time needed per example (5-min hook / 20-min discussion) | Can slot it into a lesson | M (teacher validation) |
| 2–3 questions at different levels + notes on good student answers | Ready to run a discussion | M per example |
| Signature visual for Wilder and E3 (reviewed schematic or licensed photo) | Consistent cards and pages | M |
| Coverage for Science 10/20 units (none are ready now) | The broadest audience gets matches | L |
| Unit names checked against the current programs of studies | Trustworthy fit | S–M |

## 4. Open questions for the owner
1. **Gate for interviews.** (a) All examples open; only recent developments and saving are gated. (b) Keep "first result free" to test whether teachers will sign up. **Pick (a):** a browsable library contradicts (b), and saving or the monthly email is a cleaner test of intent.
2. **Next content effort.** (a) New examples for units with no coverage (Science 10/20 chemistry, Physics 20). (b) Bring Wilder and E3 up to the GHGSat depth. **Pick (a):** dead ends lose teachers faster than thin pages.
3. **Hero.** (a) Keep the photo hero at ~55vh with the filter at its bottom edge. (b) No photo: headline, filter and grid start at the top. **Pick (a) on desktop, (b)-like on mobile** (headline + filter only). This is brand vs speed, so it's the owner's call.

## 5. Not yet
- Mobile bottom sheet, infinite scroll, "Newest" sort, saved filters.
- A presentation/print mode (only after time-needed and questions exist).
- Curriculum outcome codes (claim them only after review).
- Standalone organization or role directories.
- Accounts, real signup, analytics, live research.
- Filling thin tabs with padded content.
