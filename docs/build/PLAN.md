# Careers in the Classroom — build plan v1 (web app from the approved prototype)

Status: revision 3 after review round 2 · 24 September 2026
Planner and builder: Claude (Opus 5.5, this session) · Plan reviewer and final inspector: Codex (GPT-6 Astra, medium)

## 1. Goal

Turn the approved clickable design into a real, maintainable web application that runs locally, looks and behaves like the approved design on desktop and phone, and is structured so later phases (real signup, speaker intake, content maintenance) can be added without a rewrite.

This is still a **validation-stage product** for educator interviews and internal review. It must not pretend to be the full service.

### Approved design sources (read these, not memory)

- `design/prototype-v1/Main.dc.html` — the approved desktop journey and all interaction states. Its `<script>` block holds the curated content (`EX`, `NEWS`, `QUERIES`, `UNITS`, ledgers) and the matching/gating logic to port.
- `design/prototype-v1/MobileSearch.dc.html`, `MobileExample.dc.html` — approved phone layouts.
- `design/prototype-v1/Digest.dc.html` — approved monthly email sample.
- `design/prototype-v1/A-*`, `B-*`, `C-*` — rejected explorations, reference only.
- `design/TKS-merged-design-system.md` — tokens, type, spacing, component rules (brand source of truth).
- `design/assets/calgary-bow-river-mahesh-gupta.jpg` — hero photo (Unsplash licence, credit “Photo: Mahesh Gupta / Unsplash”).
- `docs/validation/*.md` — product intent, sourced examples, honesty rules, interview use. Must stay unchanged.

## 2. Acceptance criteria (observable)

1. `npm run dev` serves the app at `http://localhost:3000`; `npm run build` succeeds with no type or lint errors.
2. Every approved state is reachable by URL and by clicking, matching the prototype’s behaviour:
   - Home: full-bleed hero photo with tint, credit, sentence search “I teach [course] and we’re on [unit]”, “Something else (type a topic)” free-text option, “Choose a unit first” validation, Explore Calgary band with three problem teasers.
   - Results (`/search`): matched unit label, “why it matches”, local connection, first result free, later results gated until demo signup, honest “That’s everything prepared” line, refine bar (course + unit + optional topic), related prepared searches, speaker and signup side cards.
   - No match: names the course and unit/topic, “Note this topic” (session-only), prepared searches, “Change my course or unit”, session list of unmatched searches.
   - Example (`/examples/[slug]`): question, work summary, why-match (only when arriving from a search), Calgary connection vs where the work happens, status (E3), “What we know, and how” evidence ledger, For your class, People, Pathways, practitioner question, recent development (gated), sources + course fit with the editorial-mapping note, sticky “At a glance” rail.
   - Explore (`/explore`): discipline filter (All/Biology/Chemistry/Physics), shareable via query string.
   - Get involved (`/get-involved`): local orgs vs provincial/national networks, fairness note, “Start a conversation” demo message.
   - Monthly digest sample (`/digest`): web rendering of the approved email, labelled “Sample · not sent”.
   - Dialogs: demo signup (unlocks gated items for the session), speaker request (prefilled topic and related org; summary on submit; “nothing sent, not a booking”).
3. **Privacy contract.** (a) The app never makes an automatic request (fetch, script, font, image, analytics, prefetch) to any origin other than its own server. The only off-origin navigation allowed is a user clicking an external source link; those links open in a new tab with `target="_blank" rel="noopener noreferrer"` and `referrerPolicy="no-referrer"`, so no page URL or search context is passed. (b) Course/unit/topic search parameters may be sent to the app’s own server as URL query parameters so results are linkable; the server does not log or persist them (no logging code, no storage). (c) Signup, speaker and topic-note forms are never transmitted: their submit handlers call `preventDefault`, no request is made, and field values are not stored. (d) Only two things are kept, in `sessionStorage` (cleared when the tab closes): the demo `signedUp` flag and the list of unmatched searches shown on the no-match page. (e) The prototype banner states exactly this: “Prototype for educator conversations. Examples are prepared and sourced. Forms are demos: nothing is sent, and nothing is kept after you close this tab.”
4. Evidence labels use one consistent meaning everywhere: solid green = organization states it; outlined = seen in a dated source; dashed = our interpretation / not yet real. Pathway labels follow the same mapping.
5. Responsive: phone layout matches the phone boards at 390 px wide; desktop matches Main at 1440 px; no horizontal scroll from 320 px to 1920 px.
6. Accessibility: keyboard reachable everything; visible focus ring; dialogs trap focus, close on Escape, return focus; form labels; landmarks; `prefers-reduced-motion` respected; automated axe scan has no serious/critical violations on every route at 1440 and 390 widths.
7. Content integrity: every example has a source list with stable ids and URLs. Every ledger row, role, pathway and news item has an evidence kind. Every item whose kind is `stated`, `observed` or `interpreted` carries claim-level `sourceIds` that resolve to that example’s (or the news item’s) sources and are the sources that actually support it (mapped from `docs/validation/calgary-examples.md`, not the whole bibliography). Items with kind `unresearched` (e.g. Wilder’s “Animal care and veterinary routes”) must have no sources and render as “Not yet researched”. Every example records `checkedOn: 2026-09-24`. Content tests enforce all of this.
8. The validation docs in `docs/validation/` are byte-identical before and after the build.

## 3. Approach

### Stack (decision)

- **Next.js (App Router, current stable 16.x) + React + TypeScript**, created with `create-next-app` defaults minus Tailwind, using `src/` layout.
  - Why: later phases need server routes (signup, speaker intake, content admin); App Router gives real URLs, server components for content pages, and client components only where interactive.
  - Trade-off: heavier than Vite; accepted because the next phase needs a server anyway.
- **Styling:** plain CSS. `src/styles/tokens.css` holds the exact tokens from the merged TKS reference (section 11); components use CSS Modules. No Tailwind, no UI kit.
- **Fonts:** Geist and Geist Mono via `next/font/google` (self-hosted at build). PP Neue Montreal is not available: display stack falls back to `"Helvetica Neue", Arial, sans-serif`; `tokens.css` leaves a clearly marked slot for licensed `@font-face` files later.
- **Icons:** inline Lucide-style SVG components (brand uses Lucide); no icon package unless trivial.
- **Tests:** Vitest for pure logic and content validation; Playwright (`channel: "chrome"`, uses the installed Google Chrome, no browser download) + `@axe-core/playwright` for journeys and accessibility.

### Structure

```
src/
  app/                 layout.tsx, page.tsx (home), search/, examples/[slug]/, explore/, get-involved/, digest/, not-found.tsx
  components/          SiteHeader, PrototypeBanner, HeroSearch, SearchBar (refine), ResultCard, NewsCard, EvidenceLedger,
                       EvidenceTag, ExampleRail, Dialog (native <dialog>), SignupDialog, SpeakerDialog, Chip, Footer
  content/             types.ts, examples.ts, news.ts, curriculum.ts (courses, units, prepared searches), index.ts
  lib/                 search.ts (matching, related searches), gating.ts, session.ts (sessionStorage wrapper), format.ts
  styles/              tokens.css, globals.css
public/images/         hero-calgary-bow-river.jpg (resized copy of the design asset)
tests/unit/            search.test.ts, gating.test.ts, content.test.ts
tests/e2e/             journeys.spec.ts, a11y.spec.ts
```

### Content model (ported verbatim from the prototype script)

- `Example { slug, org, discipline, question, work, localShort, calgary, site, status?, explain, prompt, conversation, mindset, courses[], roles[], rolesNote, pathways[], ledger[], sources[], newsId?, checkedOn }`
- `EvidenceKind = "stated" | "observed" | "interpreted" | "unresearched"`; ledger rows, roles and pathways carry a kind, a label text and `sourceIds: string[]` (empty only for `unresearched`). Sources are `{ id, label, url }`. Display: stated = solid green, observed = outlined, interpreted and unresearched = dashed (unresearched label reads “Not yet researched”).
- `NewsItem { id, title, published, statusKind: "announcement" | "early-research" | "demonstrated", statusLabel, location, summary, ask, caution?, source }`
- `Course { id, name }`, `Unit { id, courseId, name, preparedSearchId? }`, `PreparedSearch { id, courseId, label, keywords[], results: ({exampleSlug}|{newsId}) + why }[]`, optional `note`.
- Unit names are from Alberta programs of studies and flagged in code comments as “to confirm against current curriculum”.

### URL and state rules

- A **search context** is `{ course, unit }` or `{ course, topic }` (unit `other` + topic). It is serialised the same way everywhere: `course=chemistry-20&unit=c20d` or `course=biology-30&unit=other&topic=dna+replication`.
- `/search?<context>` resolves the match with one shared function `resolveSearch(context)` in `src/lib/search.ts`; unknown course/unit → no-match state (not a 404). Missing unit (and no topic) → redirect to `/?course=…&error=unit`, which shows “Choose a unit first” with the course kept.
- Result links carry the full context: `/examples/e3?course=chemistry-20&unit=c20d`. The example page calls `resolveSearch` again, shows “why this matches <course · unit or topic label>” only if the resolved results include that example, and uses the same context for “Back to results” (`/search?<context>`), signup context label and speaker prefill. Without a valid context (or if the example is not in the resolved results) there is no why-match, and back goes to `/explore`. Context values are validated against known ids; the topic is length-limited and rendered as text only. Unknown slug → `not-found`.
- Tests: Chemistry 20 `c20c` and `c20d` both keep their own unit label through results → example → back; a free-text Biology 30 topic keeps its typed label through the same round trip.
- Gate: first result of a prepared search is always open; others locked unless the demo session flag is set. Gated content is still sent in the HTML (this is a demo gate, not access control) — stated in a code comment and the notes.
- Header: transparent over the hero on home until scrolled past it, then solid white; solid white elsewhere.

### Honesty rules carried into code and copy

No invented counts or hidden inventory; no fabricated timestamps or “live research” states; unsupported searches get the honest no-match page; Calgary office vs project location stated; announced vs operating stated; observed vs inferred labelled; organizations shown are not partners and have not reviewed pages; the site-wide prototype banner stays.

### Non-goals (this build)

Deployment or any public URL; real accounts, auth, database, email sending or newsletter; storing personal data; live search or research agents; news ingestion or freshness automation; admin/CMS; analytics; student-facing views, slides or downloads; new content beyond the prototype’s three examples and two news items.

## 4. Build sequence

1. `git init` and baseline commit of existing docs, design files and this plan (local only, no remote).
2. Scaffold Next.js app in the repo root; add tokens, fonts, globals, prototype banner, header, footer.
3. Port content and logic to `src/content` and `src/lib`; write unit tests first for search matching (units, free topic keywords, unknown course), related searches, gating and content validation.
4. Build pages and components in journey order: home → search results/no-match → example → explore → get involved → digest; dialogs last.
5. Responsive pass against the phone boards; accessibility pass.
6. Playwright journeys + axe; fix; final `lint`, `typecheck`, `test`, `build`, `test:e2e`.
7. Short `README.md`: how to run, what is simulated, content sources, font/photo notes.

## 5. Assumptions (with sources) and risks

- Design approved as on the canvas (user, this session). Main, phone boards and Digest are the target; A/B/C are not.
- No deploy/contact/email authorization exists (handoff in `docs/validation` session notes and user instructions).
- Google Chrome is installed (`/Applications/Google Chrome.app`), so Playwright can run without downloading browsers.
- Node 24.12 and npm are installed; npm install of the listed packages is expected for this build.
- Risk: TypeScript 7 / Next 16 / ESLint 10 toolchain friction — use whatever `create-next-app` pins; do not force newer majors.
- Risk: `next/font/google` fetches fonts at build time (network). Acceptable locally; fallback stacks keep the UI usable offline.
- Risk: unit names may not match the current Alberta curriculum; flagged, not verified in this build.
- Risk: PP Neue Montreal unavailable; typography will differ slightly from brand intent until licensed files are supplied.

## 6. Verification (proof commands)

Run from the repo root; all must pass:

```
npm run lint
npm run typecheck        # tsc --noEmit
npm test                 # vitest run
npm run build
npm run test:e2e         # playwright test (starts the production server)
git diff --quiet <baseline> -- docs/validation   # validation docs unchanged
```

Privacy checks in Playwright: record every request made by the app page during all journeys (without clicking external links); assert every such request URL is on the app origin; assert no request is made when the signup, speaker or note forms are submitted; assert no request body contains the test values typed into those forms. Separately, source links are checked without leaving the site: each external `<a>` has the expected `https://` href from the content data, `target="_blank"`, `rel` containing `noopener` and `noreferrer`, and `referrerpolicy="no-referrer"`.

Playwright journeys to cover: prepared search → results → full example → back; gated item → signup dialog → unlocked; speaker request from results and from example (prefill + summary text); no unit → message; unit without example → no-match + session list; “Something else” topic → partial result (Biology 30 DNA); explore filter; get involved demo message; digest renders; keyboard: open dialog with Enter, Escape closes, focus returns. Context round trips for Chemistry 20 `c20c`/`c20d` and a free-text topic are covered as above.

Manual/visual: compare home, results, example and phone widths against the canvas boards at 1440 and 390 widths; screenshots saved outside the repo.
