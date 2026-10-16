# Option D: example pages as showable parts, with a one-page view

Prepared 15 October 2026. Status: **DRAFT FOR REVIEW** (claudex-loop: Claude plans, Codex GPT-6 Astra high reviews and builds, a fresh Claude session inspects).

Build checkout: the worktree `/Users/damianmatheson/Desktop/Claude Code/CitC-option-d`, branch `feat/example-option-d`, base commit `99001ea`. All paths below are relative to that checkout. Do not edit `/Users/damianmatheson/Desktop/Claude Code/CitC`.

Design reference (static mockups, not code to copy): `/Users/damianmatheson/Desktop/Claude Code/CitC/design/examples-ux-options-2026-10-15/index.html`, section "Option D".

## Goal

A teacher opens an example and immediately sees the things they can put in front of students, then looks at **one part at a time**. A switch shows every part on **one long page** for teachers who prefer to scroll, search or print. Every showable part can be projected **full screen**.

This replaces the 30 September one-page decision (`docs/build/PLAN-b2-one-page.md`, user decision 2). The user made this change deliberately on 15 October 2026; the one-page view preserves the old behaviour as an option.

## User decisions (settled 15 Oct 2026)

1. Parts view opens first. A teacher who switches to the one-page view keeps that choice in their own browser.
2. Full-screen projection is in scope now.
3. All three examples (GHGSat, E3 Lithium, Wilder Institute) use the new layout. A part with no content for an example is left out of the rail, the page and the projector sequence.
4. Pending weekly job-review work is already committed as the base (`99001ea`).

## Parts

Seven parts in two rail groups. Ids are the URL fragment.

| # | Rail group | Label | Fragment | Content (existing components, reorganized) |
|---|---|---|---|---|
| 1 | Show your class | The question | `#question` | Org line, story illustration, course fit (`FitsPanel`). Its heading is the page h1, which lives outside the parts (see Page structure). |
| 2 | Show your class | How it works | `#how-it-works` | `StoryDiagram` (image + live numbered key + note/detail), then the real-world explanation that today is “The lesson, in the real world” (`story.subtitle`, `story.steps` with their interpretation tags and citations, project stage). Examples without a `story` show “The work” (`e.work`, status) here. |
| 3 | Show your class | Who does this work | `#who` | Today’s `RolesView`. Overview: every role card now also shows that role’s `classroomConnection` (label it with the matched course when a course context exists, otherwise “Classroom connection”). Role selected (`?role=`): the existing profile, jobs and “How to prepare”. |
| 4 | Show your class | Ways in | `#ways-in` | Today’s `PathwaysView`, unchanged behaviour (including role filtering and “Show all”). |
| 5 | Show your class | Ask the class | `#ask` | Today’s “Use it in class” block: ask text, explanation, mindset. Keep both existing visual treatments (instrument card for methane, dark ask panel for flow schematics). |
| 6 | For you | About {org name} | `#about` | Today’s `CompanyView` **without** the “People behind the work” role-card grid (replace it with one link to `#who`), plus the organization logo (moved from the story header), plus `GatedNews`, plus the “Bring this work into class” speaker panel. Use “About” for both companies and charities. |
| 7 | For you | Sources | `#sources` | Today’s `SourcesAndFit`. |

Remove the story “Keep going” teasers (Meet the company / Who does this work / See the pathways): the rail replaces them.

Availability: derive the part list from content, extending `availableViews` (or replacing it with an equivalent `availableParts`). `question`, `ask` and `sources` always exist; `how-it-works` always exists (story or the `e.work` fallback); `who`, `ways-in` and `about` follow the existing rules for roles, pathways and company.

**No factual copy changes.** Do not rewrite, shorten or delete claims, qualifications, sources, dates, interpretation tags or evidence labels. Content moves between parts; it is not edited. Layout copy (rail labels, part labels, Next/Previous, toggle and button text) is new.

## Layout and behaviour

### Page structure

- The server renders **all available parts** in order, each `<section id="{part}" data-part aria-labelledby="{heading id}">`, inside the existing content column. This makes no-JS, print, and the one-page view work from the same markup.
- Exactly one `h1`: the example question. It is rendered **once, above and outside the part sections**, so hiding a part never hides it. It is styled large when part 1 is active (and in the one-page view) and as a compact title line when any other part is active (CSS keyed off `data-part`; the same element, never a second h1). The `#question` section uses `aria-labelledby` pointing at the h1, and the h1 (`tabIndex={-1}`) is part 1’s focus target. Every other part has an `h2` heading with `tabIndex={-1}` as its focus target.
- Each part ends with named Previous / Next links within the “Show your class” sequence (e.g. “Next: Who does this work”). “For you” parts show only a link back to part 1. Previous/Next are hidden in the one-page view.

### Two views

- `data-layout="parts" | "all"` on the example page root controls the view; `data-part="{id}"` names the active part.
- **Parts view:** only the active part is displayed (`display: none` on the others, so hidden parts leave the accessibility tree and tab order).
- **One-page view:** all parts display in order, with the current quiet section dividers. The rail behaves like today: section links scroll within the page and a scroll-spy marks the current part.
- **No flash on load:** a small inline script, rendered before the content, reads `location.hash`, the `role` query parameter and the stored view preference, and sets `data-layout`/`data-part` before first paint. CSS keys visibility off those attributes. Without JavaScript the attributes are absent and every part shows (one-page fallback). Read `node_modules/next/dist/docs/` for the supported way to render an inline script in an App Router page in this Next.js version before writing it.
- **Preference:** the view switch is a real toggle button (`aria-pressed`) labelled “View as one page”, at the bottom of the desktop rail and inside the phone contents sheet. Store the choice in `localStorage` under one key, wrapped in try/catch; when storage is unavailable, default to parts view and keep working.

### URL, landing and history

- The active part lives in the **fragment**. Part ids replace section ids. Legacy fragments and `?view=` values map: `story→question`, `company→about`, `roles→who`, `pathways→ways-in`, `jobs→who`. Old links must land on the mapped part.
- Landing rule (first load, reload, Back/Forward), first match wins: valid part fragment; mapped legacy fragment; mapped legacy `?view=`; `who` when a valid role or job is selected; otherwise `question` (parts view) / top of page (one-page view).
- **Parts view history:** choosing a part (rail, Previous/Next, in-content links such as “About → Who does this work”) is a navigation with a **history entry** (`pushState` of the fragment, no route change), so browser Back returns to the previous part. On a part change: show the part, scroll the content to its top (instant with reduced motion), focus its heading.
- **One-page view history:** keep today’s rule (section moves use `replaceState`).
- Selection links (role, job, “All roles”, “Show all”, “See all pathways”) stay real navigations that carry the target part in their fragment (`#who` or `#ways-in`), exactly like today’s `SelectionLink`/`ExploreFocus` model, including the posting-row focus exception.
- `exploreHref` writes part fragments. It still never writes `view`. Keep the course/unit/topic context query on every link.
- Switching views keeps the active part: parts→all scrolls to that part; all→parts shows the part currently marked by the scroll-spy.

### Rail (desktop, ≥961px)

- Keep the dark rail column, `RailField`, back link and “Your lesson” / “Classroom example” label.
- Two groups with small group labels: “Show your class” (parts 1–5, numbered 1–5 because the order is a suggested teaching sequence) and “For you” (unnumbered). Use links (`<a href="…#part">`), not ARIA tabs. Mark the active part with `aria-current="location"` and a visible state that does not rely on colour alone (keep the existing inset bar).
- The view toggle sits at the bottom of the rail.

### Phones and tablets (<961px)

- Replace the 4-item sticky tab bar with a sticky location bar: group + position (“Show your class · 2 of 5”), the part name, and a “Contents” button.
- **No-JS fallback:** the server renders an ordinary list of fragment links to every part on narrow screens. Client enhancement (after hydration) replaces it with the location bar and Contents button. Without JavaScript the list stays visible and usable, and every part shows (one-page fallback).
- “Contents” opens a sheet listing both groups and the view toggle. It is a modal dialog: focus moves into it, Tab is contained, Escape and a visible close button dismiss it, focus returns to the Contents button. Choosing a part closes the sheet and moves to the part. Reuse the project’s existing dialog pattern if `src/components/dialogs/` provides one.
- No full-screen button below 961px.

### Full screen (projector)

- Each “Show your class” part (1–5) has a “Show full screen” button in its header (desktop only).
- It opens a presentation layer showing that part as a 16:9-proportioned frame scaled to the viewport, on the dark surface, with large type. Request the browser Fullscreen API on the layer when available; if refused or unsupported, the layer still covers the viewport. Treat the layer as a modal dialog (focus contained, Escape closes, focus returns to the button that opened it).
- Frames, built from the same data (no new copy). A frame never drops a qualification that the page shows for the same item:
  1. Question: illustration + example question.
  2. How it works: diagram image at full aspect ratio (never cropped) + numbered key + note. Keep “Schematic · not to scale”.
  3. Who does this work: up to 4 roles, each with title and its classroom connection (or summary when no connection exists) plus the role’s evidence label (e.g. “Work area named by GHGSat”, “Related work at another employer”). If an example has more than 4 roles, show all of them in a grid that still fits; do not paginate silently.
  4. Ways in: each pathway’s name, institution, credential type and location, **plus** its existing `entryNote` (e.g. “not direct entry from high school”) when present, and the existing statement that each program is one route in, not a requirement. **Overflow policy:** if the qualified content does not fit one frame at a readable size (body text no smaller than the frame’s base size), split it across consecutive frames (“Ways in, 1 of 2”) rather than shrinking text or truncating. The frame counter counts the extra frames.
  5. Ask the class: ask text + mindset.
- Left/Right arrow keys and on-screen previous/next buttons move between frames in sequence; the frame counter reads e.g. “2 / 5 · How it works” (more when Ways in splits). Moving frames does not change the URL or history.
- **Closing:** the page shows the part that was last projected (in parts view this is a part change: update the fragment with `replaceState`, no extra history entry). Focus goes to that part’s “Show full screen” button. If that is the part the layer was opened from, this is the original opener. Never focus an element inside a hidden part.
- Respect `prefers-reduced-motion` (no transitions). No autoplay.

### Print

- `@media print`: show every part in order regardless of view, hide rail, location bar, toggle, Previous/Next, full-screen buttons and the presentation layer. Source links keep their text.

### Visual direction

Preserve the B2 “Field Instrument” identity, tokens in `src/styles/tokens.css`, IBM Plex, the approved graphic-novel images (no crops of teaching schematics; editorial images keep full aspect ratio, max 680px on desktop; no caption strips). Follow `docs/design/image-direction.md`. Do not add new colours, fonts, or decorative eyebrows; reuse existing classes and patterns where they fit.

## Files expected to change

- `src/lib/example-navigation.ts`: parts, availability, legacy mapping, landing rule, `exploreHref`.
- `src/app/examples/[slug]/ExampleExplorer.tsx`: split into parts, move blocks, Previous/Next, part headings.
- `src/app/examples/[slug]/RailNav.tsx`, `SectionLink.tsx`, `ExploreFocus.tsx`: two-mode navigation, history and focus.
- New client components as needed (view toggle / layout controller, contents sheet, presentation layer).
- `src/app/examples/[slug]/explore.module.css` (and `example.module.css` only if needed).
- Tests: `tests/unit/example-navigation.test.ts` and the affected e2e specs (`one-page.spec.ts`, `rail.spec.ts`, `exploration.spec.ts`, `example-depth.spec.ts`, `regressions.spec.ts`, `journeys.spec.ts`, `a11y.spec.ts` as needed). Update assertions that encoded the old one-page model on purpose; keep coverage of selection, legacy links, focus and context preservation.
- `README.md`: replace the outdated “Connected exploration (GHGSat only)” description with the parts model.

## Non-goals

- No factual content edits or new claims (see Parts).
- No change to the library, Discover, search, header or footer.
- No account, save or analytics behaviour. Simulated signup/speaker flows stay simulated.
- No swipe gestures, no ARIA tab semantics, no autoplay.

## Acceptance criteria

1. Desktop, GHGSat, no hash: rail shows two groups and 7 items; only “The question” part is displayed; the h1 is the example question.
2. Clicking each rail item shows only that part, focuses its heading, and adds a history entry; browser Back returns to the previous part; Forward works.
3. Reload on `#how-it-works` shows that part with no visible flash of other parts.
4. Legacy links land correctly: `#story`, `#company`, `#roles`, `#pathways`, `?view=pathways`, `?view=jobs`, `?role=satellite-engineering#roles`.
5. Role and job selection still work inside “Who does this work”, preserving course/unit context, with the posting-row focus behaviour unchanged.
6. The role overview shows each role’s classroom connection without selecting a role.
7. “About” has no role-card grid; it links to “Who does this work”.
8. “View as one page” shows all 7 parts in order with a working scroll-spy rail; the choice survives reload; switching back restores parts view on the current part.
9. Print preview (emulated print media) contains every part and no navigation chrome.
10. Phone (390×844): sticky location bar and Contents sheet work by keyboard and touch (open, Escape, close button, focus return); no horizontal overflow; no full-screen button.
11. “Show full screen” on each of parts 1–5 opens the matching frame; arrow keys move through every frame; Escape closes and focus lands on the visible “Show full screen” button of the part shown. Case: open from The question, advance to Ways in, press Escape → the Ways in part is shown and its button has focus. The methane, lithium and owl diagrams are never cropped. The Ways in frame for Wilder shows the DVM entry notes.
12. E3 Lithium and Wilder Institute render correctly in both views, including the charity case (Wilder) and any part an example lacks.
13. Without JavaScript, at 1440×900 **and** 390×844, the page shows all parts in order and a visible list of fragment links reaches every part.
14. Axe accessibility checks pass on desktop and phone in both views (existing `a11y.spec.ts` approach).

## Verification

Builder proof command (runs inside the Codex sandbox; no network):

```bash
npm run lint && npm run typecheck && npm test
```

Expected: no lint errors, typecheck succeeds, all unit tests pass (81 before this change, plus new ones).

Host verification after the build (needs network for `next/font/google` and the installed Chrome):

```bash
npm run test:e2e
```

Expected: all specs pass on the desktop and phone projects. The host also checks acceptance criteria 1–14 by hand in the browser at 1440×900 and 390×844 for all three examples, and screenshots each part and one full-screen frame per example.

## Risks

- History and focus logic is the most fragile area (the existing landing code carries many edge cases). Keep one landing rule and one place that applies it.
- Inline pre-paint script must stay tiny and fail safe (any error → one-page view).
- Hidden parts are not found by browser find in parts view; the one-page view is the answer, so the toggle must be easy to find.
- Full-screen behaviour differs by browser; the overlay must work without the Fullscreen API.
