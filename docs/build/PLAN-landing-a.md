# Plan: build landing page A at `/`, library at `/examples`, logos for every company

Damian chose direction A ("Explain, then launch") on 18 October 2026 and asked for real company logos in the company
list instead of initials. Prototype and screenshots: `docs/design/reviews/2026-10-18-landing/`.

## Goal and acceptance criteria

1. `/` is landing page A: hero (who it is for, what it is, two calls to action), three steps, the five parts of one real
   example (GHGSat), "why it matters", then the launchpad with three tabs (My class, A company, A kind of job). No
   prototype review bar.
2. The example library moves from `/` to `/examples`, unchanged in behaviour: same course → unit → topic filter in the
   URL, same sections, Show more, no-match banner and dialogs. Its hero becomes shorter (it no longer introduces the
   product) but keeps the search console.
3. Old library URLs keep working. A request to `/` that carries `course`, `unit` or `topic` redirects (307) to
   `/examples` with the same query string and hash target. Bare `/` shows the landing page.
4. Every link that meant "the library" points to `/examples`: header "Examples" (active on `/examples` and
   `/examples/*`), `SearchForm` action and client navigation, the example page's back link and `backHref` built in
   `src/lib/search.ts`, the digest page's change link, the launchpad's course tiles (`/examples?course=<id>#library`),
   `SearchForm`'s Clear link (`/examples#library`), the example page's "Pick your class" link in `FitsPanel`
   (`/examples#library`), and the legacy `/search` and `/explore` redirects in `next.config.ts` (to `/examples`).
   The brand link and the 404 "home" link stay at `/`.
5. All 32 organizations have an identification logo file in `public/images/logos/<organization-id>.svg` (PNG only
   when the organization publishes no SVG), recorded on its `Organization.logo` with `sourceUrl`, `retrieved` date,
   intrinsic size and `onDark`. This is the one shared place for logos; the search redesign (draft PR #2) can read
   `organization.logo` too. The README's logo source list covers all of them.
6. The company tab shows each organization's logo on a plate (dark plate for white logos, white plate with hairline
   otherwise). The monogram stays only as a fallback if a logo record is missing.
7. Adding logo records also shows them on each example page's About section, which already renders `OrgLogo` with the
   "shown for identification only" caption. This is expected and consistent with the approved image direction
   ("Official identification logos remain their original assets").
8. Logo files are validated by format in `tests/unit/content.test.ts`:
   - SVG: parsed as XML (a small attribute parser in the test, no new dependency). It must contain no `script`,
     `foreignObject`, `iframe`, `object` or `embed` elements; no attribute whose name starts with `on`, whatever the
     whitespace or quoting; and every `href` / `xlink:href` must be an internal fragment (`#id`). A `style` attribute or
     element must not contain `url(` other than `url(#id)` or `@import`. Must have a `viewBox` whose aspect ratio
     matches the recorded width and height within 2%. New regression cases cover `onload = "…"`, single-quoted and
     protocol-relative external hrefs, and `xlink:href`.
   - PNG: checked by its 8-byte signature; width and height read from the IHDR chunk must match the recorded size;
     file at most 50 KB.
   Every organization must have a logo. Downloaded SVGs are cleaned before saving (scripts, metadata, comments and
   external references removed); a file that would still fail the test is not used.
9. The prototype routes (`/landing`, `/landing/a`, `/b`, `/c`, `/about`) are removed; the design review folder keeps the
   screenshots and write-up.

## Approach

- Move `src/app/page.tsx` (library) to `src/app/examples/page.tsx`; `home.module.css` moves with it. `src/app/page.tsx`
  becomes landing A, built from `src/app/landing/a/page.tsx`, with `Doors.tsx`, `data.ts` and the CSS it needs moved to
  `src/app/home/` (or `src/components/` for `Doors`).
- Redirect: in the new `src/app/page.tsx`, read `searchParams`; if any of `course`, `unit`, `topic` is present,
  `redirect("/examples?" + query)`. Check the installed Next.js docs for `redirect` in a page before writing it.
- `SiteHeader`: the transparent-over-hero behaviour stays on `/` (landing hero is dark), and also applies on
  `/examples` only if its hero still sits under the header.
- Logos: download each organization's own header logo from its official website (the domain already recorded as its
  `websiteSourceId`), keep the original vector, strip scripts/metadata, record source URL and date. No third-party logo
  services, no redrawing, no recolouring except choosing the plate.
- Content test: allow `retrieved` to be any ISO date (was fixed to 2026-09-30); branch validation by extension as in
  criterion 8; require a logo for every organization.

## Non-goals

- The search and filter redesign (draft PR #2) is not changed here; it will need to target `/examples` instead of `/`.
- B's walkthrough and the About page are not carried over.
- No new copy beyond what the A prototype already has, after its Impeccable and SlopMonster passes.

## Risks

- Network: the cloud environment currently blocks the 29 company websites, so logos cannot be downloaded until those
  domains (or all domains) are allowed.
- Some sites may only serve a raster or a logo embedded in CSS; those get a PNG and a note.
- Moving the library route touches e2e tests that visit `/` for the library; they move to `/examples`.

## Verification

- `npm run lint && npm run typecheck && npm test` and `npx next build` pass.
- `npm run test:e2e` passes after updating library URLs.
- Manual: `/` shows A; `/?course=physics-30&unit=p30c` lands on `/examples?course=physics-30&unit=p30c`; `/search`
  and `/explore` land on `/examples`; the library's Clear link and an example's "Pick your class" link land on the
  library; the header
  marks Examples on `/examples`; an example's back link returns to the filtered library; the company tab shows 32 logos;
  no horizontal scroll at 390 px; Impeccable detector returns `[]`.

## Build notes (deviations from the approach)

- The filtered-`/` redirect is in `next.config.ts` (`has` query conditions on `course`, `unit`, `topic`) rather than in
  the page. The installed docs say a page-level `redirect` inside a streamed render becomes a client-side meta refresh;
  the config redirect is a real 307 before rendering, and `/` stays static. Browsers keep the `#hash` across it.
- Logo records live in `src/content/logos.ts`, merged onto `Organization.logo` in `src/content/organizations.ts`, so the
  reviewed content files (`calgary-october-17.ts`, `calgary-expansion.ts`) are untouched. Draft PR #4 splits those files;
  this keeps the overlap to one line.
- The home page code lives in `src/app/_home/` (a private folder, not a route).
