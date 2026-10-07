# Discover — build plan

Status: draft 2, after review round 1 · 6 October 2026
Planner and coordinator: Claude (Opus 5.5, host session) · Plan reviewer and builder: Codex (`gpt-6-astra`, medium effort) · Final inspector: a fresh Claude session (`claude-opus-5-5`)
Branch: `feat/discover` in the worktree `../CitC-discover`, based on `cab1c74`.

## 1. Goal

Add **Discover**, a teacher-led "screenshot challenge" for one projected screen. Job pictures flash one at a time in a single 9:16 slot in the middle of the screen. A student shouts "Stop!", the teacher presses Space, and the picture on screen at that moment is frozen. The teacher then reveals the job step by step, using content that already exists, and can open the classroom example the job belongs to.

Students have no devices. The teacher drives everything with Space, the arrow keys, or large on-screen buttons.

### Approved design (read it, do not work from memory)

The approved direction is **C · Pixel Grid** on the Design canvas `https://claude.ai/artifact/QeJZAS7U9K9fQXhoq2G7Z3` (private to the owner; the builder cannot open it). Everything the builder needs from it is written down in section 4 of this plan. The canvas artboard `Grid.dc.html` is a working prototype of exactly this flow; this plan is the source of truth where they differ.

## 2. Acceptance criteria (observable)

1. A **Discover** link appears in the main navigation, after **Examples**, on desktop and in the mobile menu, and is marked current on `/discover`.
2. `/discover` shows the start screen: kicker, heading "Snap a job.", one sentence, a **Jobs** dropdown defaulting to **All jobs (9)** with Biology / Chemistry / Physics options and counts, a **Start** button, and on the right a fanned stack of three framed cards with a "?" card on top. The stack never overlaps the text, dropdown or button at 1280×720 and 1920×1080.
3. **Start** (button or Space) begins flashing. One 9:16 picture is visible at a time in the middle of the stage. Pace is 200 ms per picture; **Slower** (button or `S`) switches to 500 ms. Only the picture changes; the background never changes.
4. While flashing and on the guess step, the job title printed at the top of each picture is fully covered by a band reading "What job is this?". No job name appears anywhere in the DOM text, `alt`, `title` or `aria-*` while flashing or on the guess step.
5. **Stop** (button, or Space on key-down) freezes the picture that was visible at that instant. The revealed job must be the job of that frozen picture.
6. After the stop, the reveal has seven steps, each shown only when the teacher advances: **Guess → Job → Work → Why → Team → Route → Deeper**. Space or → advances, ← goes back, each step has a clickable step button, `R` starts the next round. Nothing advances on its own.
7. Step content comes only from `src/content` (section 4.4). Nothing is invented. Course fit is labelled with the example's existing course-fit status. Pathways say "A possible direction, not a hiring requirement." Job examples show their saved date ("Saved {formatDate(capturedOn)}") and, separately, the existing `jobStatusLabel` text. A job with no saved example shows an empty state.
8. From the **Job** step onwards, a button under the picture reads "Explore the {organization} example →" and links to that job's example at `/examples/{slug}?role={roleId}#roles`. The browser Back button returns to `/discover` on the same job, step, subject and found-list.
9. **No repeats.** A round only flashes jobs in the selected subject that have not been stopped on yet. When all are found, the set resets and the page says so.
10. Works at 1280×720, 1440×900 and 1920×1080 with no scrolling of the stage and no horizontal page scroll. Below 760 px wide (for example 390×844) the page uses the phone layout in 4.8: unscaled, readable text (body at least 16 px), controls at least 44 px tall, the full flow usable by tap, and no horizontal page scroll.
15. Keyboard shortcuts never fire while a dialog is open, while focus is in a form field, or while focus is on a control outside the Discover stage (for example the site header). Typing a space or "s" in the signup or speaker dialog types normally and does not change Discover.
11. `prefers-reduced-motion: reduce`: no shutter, tilt, slide or fade animations, and the pace defaults to 500 ms.
12. Accessibility: every control is a real `button`, `select`, or `a`; visible focus; the stage has a live region announcing "Stopped" and each newly revealed step heading; the axe scan reports no serious or critical violations on `/discover` (start screen and a reveal step) at both Playwright projects.
13. Privacy contract unchanged: no off-origin request, no new `sessionStorage` or `localStorage` keys, no network calls. State lives in memory and in the `/discover` URL query.
14. All existing lint, type, unit and end-to-end checks still pass.

## 3. Non-goals

- No change to example pages, content records or validation docs.
- No image generation, editing or alternative art styles in the app. Only the graphic-novel set ships.
- No "Back to Discover" banner on example pages (the browser Back button is the return path).
- No sound, no student devices, no scoring.
- No change to `package.json` or `package-lock.json`.

## 4. Approach

### 4.1 Files

| File | Change |
| --- | --- |
| `src/components/SiteHeader.tsx` | Add `{ href: "/discover", label: "Discover", match: (p) => p.startsWith("/discover") }` as the second `nav` entry. Both desktop nav and mobile menu already map this array. |
| `src/content/discover.ts` (new) | Per-role picture metadata (section 4.3). Export from `src/content/index.ts`. |
| `src/lib/discover.ts` (new) | Pure functions: build one `DiscoverCard` per role from existing content; subject filter and counts; round order with no-repeat; URL state parse and serialize. No React, no DOM. |
| `src/app/discover/page.tsx` (new) | Server component. Metadata title "Discover". Reads `searchParams`, builds the cards, passes them and the parsed initial state to the client component. |
| `src/app/discover/DiscoverStage.tsx` (new) | `"use client"`. The state machine, keyboard, timers, preloading, URL sync, rendering. |
| `src/app/discover/discover.module.css` (new) | All styles, using existing tokens from `src/styles/tokens.css`. |
| `public/images/discover/{roleId}.jpg` | Already added in the baseline commit: nine 752×1344 JPEGs, about 0.5 MB each. Do not modify. |
| `tests/unit/discover.test.ts` (new) | Section 6. |
| `tests/e2e/discover.spec.ts` (new) | Section 6. |
| `tests/e2e/a11y.spec.ts` | Add `/discover` and `/discover?role=animal-care&step=5` to the `routes` list. The existing loop then scans the start screen and a reveal step in both Playwright projects, and checks sideways scroll. |

Read the relevant guides in `node_modules/next/dist/docs/` before writing code (this is Next.js 16.3.6; see `AGENTS.md`). Follow the patterns already in `src/app/examples/[slug]/page.tsx` for `PageProps`, `searchParams` and metadata.

### 4.2 Page frame and scaling

- The page keeps the site header and footer from the root layout. Below the header, the stage area fills the rest of the viewport: `min-height: calc(100svh - var(--header-h))`.
- The stage is designed on a fixed **1280×720** canvas and scaled to fit its area with `transform: scale(s)`, `s = min(areaWidth / 1280, areaHeight / 720)`, centred, computed with a `ResizeObserver`. This keeps the approved layout exact on any projector.
- A **Full screen** button in the stage's top bar calls `requestFullscreen()` on the stage area, and pressing Start also requests it. Both ignore a rejected promise (unsupported browsers, tests). Esc leaves full screen as normal.
- Scaling applies only at viewport widths of 760 px and up. Below 760 px the stage is not scaled and uses the phone layout in 4.8.

### 4.3 Pictures and the title cover

`src/content/discover.ts`:

```ts
export interface DiscoverImage { roleId: string; src: string; width: 752; height: 1344; titleBandPct: number }
```

| roleId | titleBandPct |
| --- | --- |
| atmospheric-science | 25 |
| satellite-engineering | 27 |
| software-data | 26 |
| conservation-research | 26 |
| animal-care | 27 |
| wildlife-veterinary | 25 |
| process-engineering | 22 |
| process-operations | 24 |
| commercial-partnerships | 26 |

`src` is `/images/discover/{roleId}.jpg`. `titleBandPct` is the measured height of the printed green title band as a percentage of image height, plus 1 point of margin.

- The cover is an element over the top `titleBandPct`% of the picture, background `--surface-dark` (`#1b3b19`), centred text "What job is this?" in `--on-dark`. On the **Job** step it slides up out of the frame (`translateY(-100%)` inside `overflow: hidden`, 500 ms) and shows the printed title. With reduced motion it simply disappears.
- `alt` while flashing and on Guess: "A person at work. Who could it be?". From the Job step: "Illustration: {role title}".
- Use plain `<img>` elements (no `next/image`, to avoid the optimizer changing timing). Mount all pictures of the active subject at once, stacked in the same slot, and show one by toggling `visibility`. Before **Start** is enabled, preload and `decode()` every picture in the active subject. While loading, the button reads "Loading pictures 6/9". A picture that fails to load stays in the set and shows its cover on a `--green-shade-3` panel.

### 4.4 Content for each card (derived, never typed in)

`src/lib/discover.ts` builds `DiscoverCard` for every `roleProfiles` entry:

- **details**: the one `exampleDetails` entry whose `roleIds` contains the role. **example**: the `examples` entry whose `detailsId` is that details id. **organization**: `getOrganization(details.organizationId)`. **evidence**: `getOrganizationRole(organization.id, role.id).label`.
- **Job step**: `role.title`, `role.summary`; class question `example.question`; card number = the role's 1-based index in `roleProfiles`, two digits.
- **Work step**: `role.tasks` (title and detail), numbered 1 to 3.
- **Why step**: `organization.name`, `organization.problem.text`, `organization.description.text`, and the evidence label.
- **Team step**: `role.collaborators`, `role.classroomConnection`, and the example's course-fit ledger row (`ledger` entry with `type === "course fit"`): show its `claim` and its `status`.
- **Route step**: the first pathway in `details.pathwayIds` order whose `roleRationale` includes the role. Show `name`, `provider`, `routeType`, `location`, `learns`, that role's `why`, and `entryNote` when present. Then the fixed line "A possible direction, not a hiring requirement."
- **Deeper step**: the first job in `details.jobIds` order whose `roleIds` includes the role, shown with `title`, `employer`, `location`, a labelled saved date "Saved {formatDate(capturedOn)}" (`formatDate` from `src/lib/job-status.ts`), and on its own line `jobStatusLabel(job, today)` from the same file (today computed on the server as in the example page). `DiscoverCard` carries `capturedOn` explicitly. No job: "No saved job example for this role yet." Then links into the example: the example (`/examples/{slug}`), this role (`?role={roleId}#roles`), the route (`#pathways`), and the job when present (`?role={roleId}&job={jobId}#roles`).
- **Subject**: `example.discipline` (`Biology`, `Chemistry`, `Physics`). Dropdown labels: "All jobs", "Biology", "Chemistry", "Physics", each with its count.

### 4.5 State machine and keys

States: `start` → `flashing` → `reveal(step 0–6)` → (`R` or **Next round** on step 6) → `flashing`.

- **Start**: pick the round order: the shuffled list of the active subject's cards not yet found. If none are left, clear the found list for that subject first and show "All jobs found. Starting a fresh set." for that round. Advance one picture per interval tick.
- **Stop** happens on `keydown` of Space (and on the Stop button's click). It must clear the interval synchronously and freeze the card currently shown. Store that card's role id, not an index into a list that can change.
- Space on start = Start; Space while flashing = Stop; Space or → in reveal = next step (on step 6: next round); ← = previous step; `R` in reveal = next round; `S` = toggle slower. Call `preventDefault` for handled keys so a focused stage button is not also activated.
- Attach one `keydown` listener to `window` while `/discover` is mounted; remove it on unmount. It handles a key **only if all** of these hold, and otherwise leaves the event alone:
  - `!event.defaultPrevented`, `!event.repeat`, and no `ctrlKey`, `metaKey` or `altKey`;
  - no open modal: `document.querySelector("dialog[open]") === null` (the site's signup and speaker dialogs are native `<dialog>` elements opened with `showModal()`, see `src/components/dialogs/Modal.tsx`);
  - the event target is not editable: not an `input`, `textarea` or `select`, and not inside `[contenteditable]`;
  - the event target is `document.body`, `document.documentElement`, or inside the stage element (a ref on the stage root). Focus on the site header or footer keeps its native keyboard behaviour.
- After each phase or step change, move focus to that state's primary button (Start, Stop, Next) without scrolling.
- Reveal steps render only the current step's content (earlier steps are not kept on screen except the job title header, which stays from the Job step on).
- Live region (`aria-live="polite"`): "Stopped." on stop, then the step name on each step.

### 4.6 URL state

- Query keys: `subject` (`all|biology|chemistry|physics`), `role` (role id), `step` (0–6), `found` (comma-separated role ids).
- Update the URL with `history.replaceState` on stop, step change, subject change and new round. Do not push history entries.
- On load, parse with validation: unknown subject → `all`; a role that is unknown or not in the subject → ignore role and step; step out of range → 0; unknown found ids dropped. A valid `role` + `step` opens directly on that reveal step. No `role` opens the start screen.
- This is what makes Back from the example page return to the same place (acceptance 8).

### 4.7 Layout (1280×720 stage)

Background: `--bg-warm` with a dot grid (`radial-gradient(var(--green-tint-1) 1.5px, transparent 1.6px)`, 24 px), plus decorative 28 px squares in green tints clustered at the top-right and bottom-left corners (`aria-hidden`). Text is ink on warm white. Type: the site's IBM Plex Sans and Mono.

- **Top bar** (inside the stage, y 16–52): left "DISCOVER" in mono; right the found count ("2 of 9 found"), **Slower: on/off**, **Full screen**, and **Subjects** (returns to the start screen).
- **Start screen**: left column x 64, width 420, from y 128: mono kicker "SCREENSHOT CHALLENGE · JOBS EDITION"; `h1` "Snap a job." 72 px; one sentence 22 px "Jobs flash by. Someone shouts "Stop!" The screen saves the one in view, and the class explores it."; label "JOBS" + `select` 340×52; **Start** 340×72 with a "Space" key hint. Right: a 304×540 stack whose centre card sits at x 768, y 92, with two pictures behind it rotated −8° and +8° and offset ±84 px, and a "?" card in front. Keep at least 120 px between the text column and the nearest card corner.
- **Flashing**: caption centred at top, 28 px, "Shout "Stop!" to see what job you get". Picture frame centred: 8 px white border, 1 px `--border`, 10 px radius, outer 336×585 at x 472, y 76. A small "Space or the button saves the job on screen." line under it. **STOP** button bottom-right, ink fill, 60 px tall.
- **Guess (step 0)**: caption becomes "What do you think this person does?". The frame tilts −2° and scales to 0.97 with a 320 ms white shutter blink over the picture only, and a green "SAVED · 0:07.4" tag (elapsed time since Start) on its top-right corner. Left: "LOOK FOR" and three lines (the tools in their hands; where they are; what they are checking). Right: "YOUR TURN" and "Take three guesses from the class before you reveal the job."
- **Steps 1–6**: the framed picture moves to x 64, y 92, 304×528, tilted −2° (560 ms move on step 1 only). The example button sits under it (304×52). A white card at x 424, y 72, 792×560 holds a header (mono "NO. 05 · {organization}", `h2` role title 44 px) and the current step's content in 20–30 px type, two columns for Team, Route and Deeper.
- **Bottom row** (y ~650): step buttons in mono 12 px starting at x 424; **Back** and the green primary **Next** button (label per step: Reveal the job, Show the work, Why it matters, The team, A route, Go deeper, Next round) at the right.
- No drop shadows (TKS rule). Radii: 4 px controls, 6 px panels, 10 px picture frame.

### 4.8 Phone layout (below 760 px wide)

Same states, data and keyboard rules; only the layout changes. Nothing is scaled; the page scrolls vertically.

- Top bar wraps; its buttons stay at least 44 px tall.
- **Start**: heading 44 px, sentence 18 px, full-width `select` and **Start** (52 px tall). The card stack sits below, as a single framed "?" card (no fan) at width `min(70vw, 260px)`.
- **Flashing / Guess**: caption 20 px on top, then the framed picture centred at width `min(78vw, 300px)` (9:16), then full-width **STOP** (or **Next**). The guess prompts sit under the picture at 18 px.
- **Steps 1–6**: the picture at width `min(60vw, 220px)`, then the example button full width, then the step content at 16–20 px in one column, then the step buttons wrapped onto several lines (no horizontal scroll), then **Back** and **Next** full width.
- No tilt or shutter animation on phones apart from the cover slide.

## 5. Assumptions and risks

| Assumption | Source |
| --- | --- |
| Every role belongs to exactly one example's `roleIds`. | `src/content/example-details.ts`; enforced by a unit test. |
| Every role has at least one pathway rationale in its example's `pathwayIds`. | `src/content/pathways.ts`; enforced by a unit test. |
| Example deep links use `?role=` and `#roles`. | `src/lib/example-navigation.ts` (`parseExplore`, `landingSection`). |
| Band heights measured from the source PNGs (21–26%). | Host measurement, 6 Oct 2026; `design/discover-role-collection-2026-10-06/`. |
| Image files contain printed titles and fictional people. | `design/discover-role-collection-2026-10-06/README.md`. |

Risks: rapid flashing (5 per second by default) can bother some viewers. Mitigation: the background never changes, reduced motion switches to 500 ms, and **Slower** is always one key away. Printed titles might be misread at projection distance; the live text title in the card is the authoritative label.

## 6. Verification

### Builder proof (runs without network)

```
npm run lint && npm run typecheck && npm test
```

All must pass. `npm run build` downloads Google fonts at build time, so it may fail in a network-less sandbox; the host runs it.

### Host proof

```
npm run build
npx playwright test tests/e2e/discover.spec.ts tests/e2e/a11y.spec.ts
npx playwright test
```

### Required tests

`tests/unit/discover.test.ts`:
- Every `roleProfiles` entry has exactly one `DiscoverImage`, its file exists in `public/images/discover/`, and `titleBandPct` is between 15 and 35.
- Every role yields a card with an example, organization, evidence label, three tasks, a pathway with a role rationale, and a course-fit row. Job is optional; at least one role has none (empty state is real).
- Subject counts: Biology 3, Chemistry 2, Physics 4, total 9.
- Round order: excludes found roles; resets with a "fresh" flag when everything is found; never contains duplicates.
- URL parse/serialize round-trips, and rejects bad values as described in 4.6.

`tests/e2e/discover.spec.ts` (desktop project; skip phone-only cases where noted):
- The header link goes to `/discover` and is marked current.
- Start, wait 1 s, press Space: the frozen picture's `data-role` equals the role whose title appears on the Job step. While flashing and on Guess, the page text contains none of the nine role titles.
- Stepping with Space reaches each step; ← goes back; the step buttons jump.
- The example button's `href` equals `/examples/{slug}?role={roleId}#roles`; clicking it then `page.goBack()` returns to `/discover` showing the same role and step.
- Choosing Chemistry, then stopping twice, never repeats a job and only shows Chemistry jobs.
- Loading `/discover?role=animal-care&step=5` opens on the Route step for animal care.
- Loading `/discover?role=animal-care&step=6` shows "Saved 29 Sep 2026" and the job status line for the Wilder animal-care job; `/discover?role=wildlife-veterinary&step=6` shows the no-job empty state.
- Keyboard isolation: open the signup dialog from the header ("Sign up free"), type "a b s" into its Email field (`#su-email`): the field contains "a b s", and after closing the dialog Discover is still on the start screen with Slower off. Repeat with the speaker dialog ("Request a speaker") and its Topic field (`#sp-topic`). Focus the header's "Examples" link and press Space: Discover does not start.
- Phone project: tap Start, tap STOP, tap Next until the Route step; the body text of the step content has a computed font size of at least 16 px; no horizontal scroll at any point.

### Manual and visual checks (host)

- At 1280×720 and 1920×1080, for each of the nine pictures: the cover fully hides the printed title and does not cover the person's head.
- The start-screen card stack does not overlap any text or control.
- Reduced-motion emulation: no animations; pace 500 ms.
- Compare the start screen, flashing, guess, job, work and route steps against the canvas prototype.

## 7. Delivery

The builder edits only the files in 4.1. It does not commit. The host reviews the diff, runs the host proof, and has a fresh Claude Opus 5.5 session inspect the change before anything is committed.
