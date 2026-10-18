# Careers in the Classroom

Validation-stage web app for Alberta high school science teachers: real Calgary organizations, the problems they work on, the people doing the work, and possible pathways, matched to course and unit. Validation stage: not a launched service.

## Run it

```bash
npm install
npm run demo         # production build + server on http://localhost:3310 — use this with educators
npm run dev          # development server for building features
```

Use `npm run demo` for interviews. Neither server logs requests or writes typed search topics to disk: `npm run dev` turns off Next.js trace recording, and both are checked by tests (`npm run test:privacy-dev` and the e2e suite).

Discover is part of this repository at `/discover`; use the same server as the
examples. The `feat/discover` work was integrated into `main`. On 15 October 2026,
the clean older `CitC-discover` worktree was moved to
`../.archives/CitC-discover-2026-10-15` for recovery, including its ignored local
files. Its branch remains available; it is not the active development location.

## Checks

```bash
npm run lint
npm run typecheck
npm test             # unit tests: search, context round trips, demo gate, content sources
npm run test:e2e     # builds, starts on :3200, runs journeys + accessibility in installed Google Chrome
npm run test:privacy-dev   # starts the dev server and proves a typed topic is not logged or written to disk
```

## What is real and what is simulated

- **Real:** the three prepared examples and two news items, with claim-level sources (checked 24 September 2026), the home example library (course/unit/topic filter in the URL; old `/search` and `/explore` links redirect to it), examples, Get involved, the monthly email sample page.
- **Example parts (all three examples):** examples open one part at a time, with a persistent “View as one page” option for scrolling, searching and printing. Five “Show your class” parts support desktop full-screen projection; About and Sources sit under “For you”. Fragments identify parts, while role/job selections and course/unit/topic context remain in the query. Legacy links still work. Phones have a Contents sheet; without JavaScript every part and its fragment link remain visible. All content also prints regardless of the selected view.
- **Job examples** are saved, dated captures of real postings. "Accepting applications" only appears within 30 days of a successful check; otherwise a posting reads as a historical example, never as a current vacancy.
- **Simulated:** signup, speaker requests, "note this topic" and "start a conversation". Forms never submit or send anything. Only two things are kept, in `sessionStorage` for the current tab: the demo signup flag and the list of searches with no prepared match.
- **Demo gate:** examples are always open. Only recent developments open after the demo signup. Gated content is in the page. This is a demonstration, not access control.
- **Interview notes:** the list of searches with no prepared match shows only when the app runs with `NEXT_PUBLIC_INTERVIEW_NOTES=1`.
- **Search parameters** (course, unit, typed topic) go to this app's own server in the URL. The server does not log or store them.
- **Not built:** deployment, accounts, database, email, live research, news ingestion, admin tools, analytics.

## Content and design sources

- Content: `src/content/` (ported from `design/prototype-v1/Main.dc.html`; sources from `docs/validation/calgary-examples.md`). Exploration records (`organizations.ts`, `roles.ts`, `pathways.ts`, `job-examples.ts`, `example-details.ts`) cite the shared registry in `sources.ts`.
- Classroom teaching diagrams use static graphic-novel illustrations with explicit directional arrows and live numbered explanations (`StoryDiagram.tsx`). They are conceptual schematics, not company imagery or measured results. Full prompts and visual reviews: `design/story-diagrams-2026-10-07/`.
- Editorial illustrations follow the approved Discover graphic-novel / screenprint direction, selected 7 October 2026. See `docs/design/image-direction.md` for prompts, reference assets and review requirements. Example illustrations show fictional people and generic equipment; teaching schematics remain separate.
- Organization logos (`public/images/logos/`) are each organization's own logo, shown for identification only: on its example with that caption, and in the home page's company list. None of these organizations has reviewed or endorsed the pages. Files are cleaned (scripts, metadata and outside references removed) and cropped, never redrawn or recoloured; white logos sit on a dark plate (`onDark`). `tests/unit/content.test.ts` checks every file. The search pages read the same records through `organization.logo`.
  - Downloaded 30 September 2026 (recorded in `src/content/organizations.ts`):
    - `ghgsat.svg`: https://www.ghgsat.com/wp-content/themes/ghgsat/assets/images/logo-ghgsat-color.svg
    - `e3-lithium.svg`: https://www.e3lithium.ca/_templates/1/source/img/logo.svg
    - `wilder-institute.svg` (white): https://wilderinstitute.org/wp-content/uploads/2026/04/wilder-logo-1.svg
  - Downloaded 18 October 2026 (recorded with source URLs in `src/content/logos.ts`). SVG where the site publishes one, otherwise PNG:
    - SVG files from the site's own logo file: Aerium Analytics (white), Broken Pencil Studios, Calgary Italian Bakery, Carbonova, Eguana Technologies (white), Integrated Sustainability (white), Phil & Sebastian (white logotype), VEERUM.
    - SVG markup copied from the site header (no separate file published): Avmax, GeologicAI (white), RJC Engineers (white), Summit Lithium Technologies (white), Tangent Design Engineering, and Hazen for WaterSMART (now presented as a Hazen company; its own site redirects to Hazen). Hazen's header logo is drawn in `currentColor`, so its rendered colour, #395173, is written in.
    - PNG from the site's logo image: Botaneco, Cinnaroll, ClearBakk, Entuitive, Exergy Solutions (yellow, dark plate), Foremost, FTG (the WebP on flyht.com, converted), ISL Engineering, Joe Media Group, Nanalysis, Northern RNA, O2 Planning and Design (white), Trace Associates (20th anniversary version on the site).
    - Livestock Water Recycling (white): its header shows a badge image and a white wordmark image side by side; the PNG joins the two as the header does.
    - CPKC: its website refuses automated requests, so the wordmark is rendered from the back cover of its 2025 annual report (https://s21.q4cdn.com/736796105/files/doc_financials/2025/ar/v2/CPKC-Annual-Report-2025-Final-Web.pdf), the same document the example cites.
- Unit names follow Alberta Education programs of studies and still need checking against the current curriculum.
- Design: `design/b2-field-instrument-2026-09-30/` (B2 "Field Instrument", dark green, approved 30 September 2026; build plan `docs/build/PLAN-b2-field-instrument.md`). Earlier references stay in `design/prototype-v1/` for history.
- Fonts: IBM Plex Sans and IBM Plex Mono (SIL Open Font License, self-hosted by `next/font`).
- Dither assets: `scripts/build-dither-assets.py` writes `public/images/hero-calgary-dither-green.png` (from the Unsplash hero photo) and `public/images/footer-dither.png`. The example rail pattern is drawn in code from `src/lib/dither-field.ts` (`RailField.tsx`), including the magnetic dots on desktop.
- Small text uses `--text-body` (#514D4E). The brand's `--text-muted` (#7C7879) is only 4.35:1 on white, so it is kept for borders and icons.
- Hero photo: Mahesh Gupta on Unsplash (Unsplash licence).

## Plan

`docs/build/PLAN.md` (reviewed and approved in 3 rounds; log in `docs/build/PLAN-REVIEW-LOG.md`).
Connected exploration: `docs/build/PLAN-connected-exploration.md` (log `docs/build/PLAN-connected-exploration-REVIEW-LOG.md`, verification `docs/build/VERIFICATION-connected-exploration.md`).
