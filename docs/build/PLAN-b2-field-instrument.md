# CitC visual redesign: "B2 Field Instrument" build plan

Prepared 30 September 2026. Status: **DRAFT FOR REVIEW. Do not build until the user approves the reviewed plan.**

Author: Claude Code (Opus 5.5). Reviewer: another agent, chosen by the user. Builder: to be decided after review.

Workspace: `/Users/damianmatheson/Desktop/Claude Code/CitC`. Relative paths resolve against it.

## Goal

Restyle the whole site so educators read it as a polished, professional service built with industry. The content stays the same. The user picked design direction **B2, "Field Instrument", dark green**, with a **dither pattern on the example rail** and a **magnetic dot interaction** on hover.

## User decisions (settled; reviewers should not reopen these)

1. Direction: B2 "Field Instrument" in dark green `#1b3b19`. There is no black chrome. The all-green version won over the green-and-black hybrid.
2. Palette: keep the existing green ramp and ink (`src/styles/tokens.css`). Drop the old light, rounded look.
3. The example rail (the left column with "Classroom example / <org>" and the view links Classroom story · Company/Organization · Roles · Pathways) gets the **dither pattern**. The dither must look like the first dither artboard (`P1-Dither`): dense 2px dots in three soft bands (fade in, fade out, fade in) down the rail.
4. **Magnetic dots.** On desktop hover, the dither dots near the pointer are pushed away, like repelling magnets, then spring home. This is a nice-to-have. It must never harm reading, scrolling or performance.
5. The rail's view links **stay pinned while scrolling** (sticky), with the dither and the animation in place. This is required.
6. **No dither animation on mobile.** The mobile rail stays a sticky tab bar.
7. The footer stays **dark green**, with a faint dither echo. Light or white footers were rejected.
8. Remove the coordinate readouts ("51.05° N · 114.07° W") from heroes. Footer coordinates may stay.
9. "Get involved" is renamed **"List your company"**. This is already done in code (nav, footer, page eyebrow, metadata). The route stays `/get-involved`.
10. Prototype, demo and TKS copy is already removed from the code (done 29–30 Sep 2026). Forms keep one quiet line (for example "Nothing is saved or sent yet."). Forms still send nothing.
11. Copy is fixed. Do not add claims, stats, logos or quotes. No company logos. GHGSat publishes no logo terms.

## Design source of truth

Canvas: https://claude.ai/artifact/AtznHhqAju4CHMoKoyS1KV (private to the user). The reviewer and builder use the repo copies below.

Repo copy: `design/b2-field-instrument-2026-09-30/` (added with this plan, reference only, not shipped):

- `G-*.dc.html`: B2 artboards for all 11 screens × desktop (1440) and mobile (390): Home, Story (GHGSat classroom story), Company, Roles, Role (detail), Pathways, Wilder, GetInvolved (now "List your company"), Digest, Signup dialog, Speaker dialog.
- `P1-Dither.dc.html`: the approved rail and footer dither look.
- `P7-Magnet.dc.html`, `P8-MagnetScroll.dc.html`: the magnetic-dot prototype (canvas + physics) and the sticky-rail scroll demo. Their JS is a **reference for behaviour and tuning, not code to paste**.
- `assets/`: the green dither hero photo and the canvas rail texture (reference only; production draws the rail pattern in code, see Phase 3).
- `/_blob/…` URLs inside the artboards only resolve on the canvas. Use the files in `assets/` instead.

Where an artboard and this plan disagree, the plan wins. Where an artboard and `src/content` disagree on copy, `src/content` wins.

## Current application facts

- Next.js 16.3.6 App Router, React 19, TypeScript, plain CSS Modules. No UI library. Keep it that way. No new runtime dependencies (no three.js, no animation library).
- **AGENTS.md applies.** Before writing code, read `node_modules/next/dist/docs/01-app/01-getting-started/13-fonts.md`, `11-css.md` and `12-images.md`.
- Tokens: `src/styles/tokens.css` (light, flat). Globals: `src/styles/globals.css` (already has a `prefers-reduced-motion` block, line ~318).
- Fonts: Geist and Geist Mono via `next/font/google` in `src/app/layout.tsx`. B2 uses **IBM Plex Sans + IBM Plex Mono**.
- Chrome: `src/components/SiteHeader.tsx` + `.module.css`; the footer is inline in `src/app/layout.tsx`.
- Home: `src/app/page.tsx`, `home.module.css`, `LibraryParts.tsx`, `SearchForm.tsx`, `ExampleCard.tsx`, `ExampleCardDiagram.tsx`. The hero photo is `public/images/hero-calgary-bow-river.jpg` (Unsplash, credit required).
- Examples: `src/app/examples/[slug]/` — `ExampleExplorer.tsx` (860 lines; rail + views), `explore.module.css` (rail = `.strip`, sticky at ≥961px with `top: calc(var(--header-h) + 24px)`, a sticky top bar at ≤960px), `example.module.css`, `MethaneDiagram.tsx`, `StoryDiagram.tsx`, `ExploreFocus.tsx` (moves focus and scroll on view change, and already accounts for the sticky rail).
- Other pages: `src/app/get-involved/`, `src/app/digest/`, dialogs in `src/components/dialogs/`.
- Tests: `tests/e2e/` (journeys, exploration, example-depth, regressions, a11y with axe), `tests/unit/`. Run `npm run lint`, `npm run typecheck`, `npm test`, `npm run test:e2e`, `npm run test:privacy-dev`.
- The working tree has uncommitted user work. Never reset or clean. Stage by path only.

## Build plan

### Phase 0 — Prep (no UI change)
- Commit the design reference folder (above) and generate production assets:
  - `public/images/hero-calgary-dither-green.png`: 1-bit Floyd–Steinberg dither of the hero photo, `#6ebd6a` dots on `#1b3b19`. Keep the generator script in `scripts/` so the image can be rebuilt.
  - `public/images/footer-dither.png`: the footer's faint dither echo. The footer has a fixed layout, so a 1:1 repeat-x PNG (2px cells, 8×8 Bayer, `#6ebd6a`, transparent, fading up from the bottom edge) is enough there. It is never stretched.
  - `src/lib/dither-field.ts`: pure, DOM-free functions that the rail renderer and the tests share:
    - `density(x, y, railHeight)`: three equal bands of height `bandH = railHeight / 3` (band 1 fades in, band 2 is its mirror image, band 3 fades in again). Band-local position `t ∈ [0,1]` (for band 2, `t = 1 − local`), band-local y `ty = t·bandH`. Density = `clamp(0, 1, 0.42·t^1.6 + 0.03·sin(x/9 + ty/23))`. The sinusoid uses the mirrored `ty`, not the global y, so band 2 is an exact mirror of band 1. This matches P1, where band 2 is the same texture flipped (review B2-009). The small ±0.03 wave stays at the top of each band on purpose: it gives the sparse specks that P1 shows there.
    - `isDot(cx, cy, railHeight)`: an 8×8 Bayer threshold on 2px cells. Coordinates start at the rail column's top-left corner, in CSS px.
    - Unit tests: band boundaries; exact mirror symmetry (`density(x, bandH − d) === density(x, bandH + d)` within the float tolerance); top-of-band density ≤ 0.03 and always in [0,1]; the same dots for the same inputs; and a density that follows the band layout for short (≈1200px), typical (≈4400px) and long (≈9000px) rails.
  - No rail PNG. The rail's three bands depend on the rail's real height, which changes with the view, expanded evidence and unlocked news. A fixed tile cannot keep three bands (review B2-003). So the rail pattern is drawn by the rail canvas (Phase 3).

### Phase 1 — Tokens, type, chrome
- `tokens.css`: add semantic tokens (`--surface-dark: #1b3b19`, `--on-dark: #fff`, `--on-dark-2: #c5e5c3`, `--signal: #6ebd6a`, `--hairline-dark: #ffffff24`, `--dot-grid-dark`, radii 4/6px), and retire the rounded-card radii. Keep the existing tokens that other code still uses until the last phase, then remove the dead ones.
- Fonts: swap Geist → IBM Plex Sans (400/500/600/700) + IBM Plex Mono (400/500) via `next/font/google`. Update `--font-display`, `--font-ui` and `--font-mono`.
- Header: dark green bar, 64px, wordmark, nav (Examples, List your company), "Request a speaker" ghost button, "Sign up free" `#6ebd6a` button with ink text. The mobile menu matches.
- Footer: dark green, dot grid, ruler ticks, wordmark, links (Monthly email sample, List your company), faint dither echo. Keep "Calgary, Alberta".
- Keep the current behaviour: skip link, `aria-current`, menu toggling, and the regressions tests for the phone menu.

### Phase 2 — Home
- Hero: dark green with the dither photo, a scrim, the H1, the lede, the photo credit, and the search "console" docked at the bottom. **No crosshair or coordinates.** One entrance motion: the H1 rises. `SearchForm` keeps all its behaviour and URL state. Only its styling changes.
- Example cards: the top half is an instrument screen (dark green, dot grid, the diagram in `#6ebd6a`/white strokes). The bottom half is light. `ExampleCardDiagram` gets colour through CSS variables, not new copies.
- Filtered state, no-match banner, locked recent-development card, footnote: restyle only.

### Phase 3 — Example shell, rail, sticky, dither (core of this plan)
Layout (≥961px): the rail becomes a **full-height dark green column** that runs from under the header to the footer. It is no longer a floating card. Grid `grid-template-columns: <railWidth> minmax(0,1fr)` with `align-items: stretch`, so the rail column spans the page body.

Structure inside the rail column:
```
<aside class=railColumn>              position: relative; background: var(--surface-dark)
  <div class=railFx aria-hidden>      position: absolute; inset: 0; overflow: clip; pointer-events: none; z-index: 0
                                      (out of flow: reserves no height, so it can never push the links down — review B2-001)
    <canvas class=railCanvas>         position: sticky; top: var(--header-h); height: calc(100vh - var(--header-h)); width: 100%
                                      (inside the absolute overlay, so its sticky box never affects railSticky)
  <div class=railSticky>              position: sticky; z-index: 1; top: calc(var(--header-h) + 24px)
    "Classroom example" / org / nav links (existing markup + aria-current)
```

Rail pattern rendering (desktop ≥961px), in `RailField.tsx` (client component):
- It mounts when `(min-width: 961px)` matches. It listens for `change` on that media query and unmounts cleanly when the query stops matching: it cancels its animation frame, removes its listeners and disconnects its observers (review B2-002).
- An **offscreen field canvas** holds the whole rail's dots at 1:1 (rail width × rail height, × devicePixelRatio). It is drawn once from `isDot` and rebuilt when a `ResizeObserver` on `railColumn` reports a new size (debounced to one frame). A 9000px rail at DPR 2 is about 18000 px tall, which is under the 32767 px canvas limit. Above that, the builder caps DPR at 1 for the field.
- The **visible canvas** is the sticky viewport slice. The field canvas holds opaque dots only, on a transparent background, at full alpha. The 0.6 strength is applied **once** as CSS `opacity: 0.6` on the visible canvas element. So static and moved dots always match (review B2-007). Each redraw copies the slice `[scrollOffsetInRail, +sliceHeight]`. `scrollOffsetInRail` comes from `railColumn.getBoundingClientRect()` on every redraw, not from cached values.
- The visible canvas has its **own `ResizeObserver`**. When its CSS size changes (for example a height-only window resize at desktop width), the builder recomputes its backing store (CSS size × DPR), its transform and the slice height, then schedules a redraw (review B2-008).
- Redraw triggers (all merged into one `requestAnimationFrame`): scroll (passive listener on `window`, so programmatic scrolls from `ExploreFocus` count too), rail resize, a media-query change, and magnet frames (Phase 6) — review B2-005.
- Before first paint and without JS, the rail is plain `--surface-dark`. The field fades in over 200ms (instantly with reduced motion), so there is no layout shift.
- Reduced motion does **not** remove the static pattern. It only disables the magnet physics and the fade.

Sticky rules (the failure modes to avoid):
- **No `overflow: hidden|auto|scroll` on `railColumn` or on any ancestor of `railSticky`**, all the way up to the page scroller. Those create a scroll container and pin the sticky block to nothing. `overflow: clip` is used only on `railFx`, which is not an ancestor of `railSticky`. Check `example.module.css` lines 74, 172, 265 and `globals.css` line 58 for wrappers that would enclose the rail.
- `railColumn` must be taller than `railSticky`. That is automatic with `align-items: stretch`. Near the end of the page, `railSticky` stops at `railColumn`'s bottom edge. That is the expected containing-block behaviour.
- The canvas never takes pointer events. The links sit above it (`z-index: 1`) and keep 4.5:1 contrast. White on `#1b3b19` is 12:1, and the dots are behind the text at 0.6 opacity. If a contrast check near the densest band needs it, the field may be masked lighter behind the link list.
- Keep `ExploreFocus.tsx` behaviour: focus the new heading on view change, with no scroll jump to the rail.

Mobile (≤960px): keep the current sticky top tab bar, restyled plain dark green. There is **no rail canvas, no pattern and no animation** (host decision on open question 6: plain, because a static texture in a 60px bar reads as noise). `RailField` does not mount.

### Phase 4 — Example views
Restyle each view to match the artboards (G-Story, G-Company, G-Roles, G-Role, G-Pathways, G-Wilder). Keep all content, source links, evidence tags and the "Sources and course fit" / "Bring this work into class" blocks.
- `MethaneDiagram` becomes a full-width dark green instrument panel with a proper spectrum plot. Keep every label and the "Not to scale. Not a GHGSat image." caption. Motion: dashed light-ray paths flow (a CSS `stroke-dashoffset` loop, allowed because light is ongoing), and the spectrum dip draws once.
- `StoryDiagram` (Wilder): the flowing path moves around the care → evidence loop.
- The E3 Lithium example uses the same shell. It is not drawn on the canvas, so follow the Wilder pattern.

### Phase 5 — Other pages and dialogs
- "List your company" (`/get-involved`), the Digest (email frame on a light ground, dark green masthead band), the Sign-up and Request-a-conversation dialogs, and not-found.
- Dialogs keep their focus trap, Escape to close, `aria-labelledby`, and the quiet notes.

### Phase 6 — Magnetic dots (progressive enhancement, desktop only)
- The physics run inside `RailField` (one canvas, one frame loop). They are enabled only when **all** of these match: `(min-width: 961px)`, `(hover: hover) and (pointer: fine)`, and not `(prefers-reduced-motion: reduce)`. The component re-evaluates when any of these media queries changes (review B2-002).
- The field canvas stays the visible base. The magnet only changes **active dots** (displaced dots, or dots within R of the pointer), found with a grid-bucket lookup over `isDot` cells.
- **Rendering order for each frame** (review B2-004):
  1. `clearRect` the **entire** visible backing store. The field has transparent gaps, so a copy alone would leave trails (review B2-007).
  2. Copy the viewport slice from the field canvas.
  3. `clearRect` every active dot's **home** 2×2 cell. Do this for all active dots first. The rail's own background then shows through.
  4. Draw every active dot at its displaced position in `#6ebd6a` at full alpha. The canvas' CSS opacity makes it match unmoved dots.
- Physics (tuned in the P7/P8 prototypes): radius ≈ 90px, falloff (1 − d/R)², spring k ≈ 0.08, damping ≈ 0.82, max travel ≈ 12–24px.
- **Pointer model** (review B2-005): store the last pointer position in **client** coordinates. Convert it to rail coordinates every frame, using the current `railColumn` rect, so wheel or programmatic scrolling under a still pointer targets the right dots. `pointerleave` or pointer outside the rail → no force, dots spring home.
- Listeners on `railColumn` (`pointermove`, `pointerleave`) and `window` (`scroll`) are passive. Pointer input is sampled once per frame.
- The frame loop runs only while dots are moving or a redraw is pending. It stops when all dots are home and nothing is pending. It pauses when the tab is hidden, or the rail is off-screen (IntersectionObserver).
- On DPR change (a `matchMedia` resolution query): rebuild both canvases.
- Budget: no long tasks over 16ms during hover on a mid-range laptop, no layout shift, and no change to page height or nav position when `RailField` mounts.

### Phase 7 — Clean-up
- Remove unused old tokens and classes. Update the README "Content and design sources" section (new fonts, B2 design folder, dither assets, and the Unsplash credit for the processed photo). Remove the TKS design-system references in the README and code comments (for example `tokens.css` line 1) if the user agrees.

## Verification

- Existing gates pass: lint, typecheck, unit, e2e (desktop + phone projects), privacy-dev.
- Update e2e text and role selectors only where the markup truly changed. Do not weaken assertions.
- New e2e tests:
  1. **Sticky rail** (1440×900, `/examples/ghgsat`, and the shortest view, Roles): scroll to 50% of the page, then to the "Sources and course fit" block. Assert that the `railSticky` wrapper's `getBoundingClientRect().top` ≈ `header-h + 24`. Assert separately that every nav link is inside the viewport and clickable, and that each view change still works while scrolled. Near the page bottom, assert the wrapper's bottom edge ≤ the rail column's bottom edge (containing block), not a fixed top (review B2-006).
  2. **No reflow on mount:** record the nav's position and the document height before and after `RailField` mounts (wait for the canvas). Both must be unchanged (review B2-001).
  3. **Mounting matrix:**
     - Desktop Chrome, fine pointer, 1440 wide → the rail canvas exists and physics are enabled (`data-magnet="on"`).
     - `reducedMotion: 'reduce'` → the canvas exists with `data-magnet="off"`.
     - Desktop Chrome resized to 390 wide (fine pointer, not the phone project) → no canvas.
     - Resized back to 1440 → the canvas returns.
     - Phone project → no canvas (review B2-002).
  4. **Magnet does not block:** move the pointer across the rail, then click each nav link → navigation and `aria-current` update.
  5. **Still-pointer scroll:** hover over the rail, then scroll with the wheel without moving the pointer. There are no errors, and the canvas keeps redrawing (a frame counter on a `data-` attribute changes) (review B2-005).
  6. **Resize:** at desktop width, resize 1440×900 → 1440×600 → 1440×900. After each step, the visible canvas' backing-store height equals its CSS height × DPR, and a pointer hover at a known rail point displaces the dots nearest that point (for example, check that the pixel under the pointer is cleared) (review B2-008).
  7. **No trails:** hover-move across the rail, then leave and wait until the loop stops (`data-magnet-idle`). The canvas pixels then equal a freshly drawn static slice (compare `getImageData` hashes of a sample region) (review B2-007).
  8. **Hero:** no coordinate text ("51.05") in any hero.
  9. **Unit:** the `dither-field.ts` tests from Phase 0.
- The axe a11y suite passes on every page. Check contrast by hand: link text over the texture, `#c5e5c3` secondary text on `#1b3b19`, `#6ebd6a` button with ink text.
- Visual QA: screenshot each page at 1440 and 390 (`playwright` via the existing config) and compare side by side with the G-* artboards. Do one batch fix pass, then one confirmation pass.
- Performance: record a Chrome performance trace while moving the pointer over the rail for 5s. Frames should stay ≥ 55fps, with no long tasks.

## Risks and open questions for the reviewer

1. **Rail full height versus the current card rail.** Is a full-height column that stretches to the footer right for short views (for example Roles)? The artboards say yes. Confirm it does not leave a tall empty green column on very short pages.
2. **Canvas-drawn rail pattern.** The rail pattern needs JS on desktop, because it must keep three bands at any rail height (review B2-003). Before hydration, the rail is plain dark green, then the pattern fades in. Is that acceptable? Host position: yes. It is decoration, and the content never waits on it.
3. **Scope size.** This touches almost every CSS module. Should it land in phases (1+2, 3+6, 4, 5) with a checkpoint after each, or in one pass? The author recommends phases, with user review after Phase 3.
4. The **E3 Lithium** page and the **not-found** page have no artboards. They follow the nearest drawn pattern.
5. **Fonts:** IBM Plex replaces Geist. Any objection on performance or licensing? It is under the SIL Open Font License, and `next/font` self-hosts it.
6. Mobile tab bar: resolved by the host as plain dark green, no pattern (reversible).
