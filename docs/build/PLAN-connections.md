# Plan: rename the library page from "Examples" to "Connections"

Damian, 18 October 2026: "change the page examples ... to connections: both the button and the actual path ... now
we're also prioritizing the companies and the roles, and so it's like connections to the community." This follows the
landing-page build on the same branch (draft PR #1), where the library moved from `/` to `/examples`.

## Acceptance criteria

1. The library page lives at `/connections`: same behaviour (course → unit → topic filter in the URL, sections, Show
   more, no-match banner, dialogs). Its page title is "Connections" and its hero heading names connections, not examples.
2. The header button reads "Connections" (desktop and phone menu) and is current on `/connections` and on every
   example page (`/examples/<slug>`), as "Examples" was.
3. `/examples` (the library's address until now on this branch) redirects to `/connections` with its query string; the
   browser keeps any `#hash`. `/search` and `/explore` redirect to `/connections`. Filtered home links
   (`/?course=…`, `/?unit=…`, `/?topic=…`, including empty values) redirect to `/connections` via `src/proxy.ts`.
4. Every link that means "the library" points to `/connections`: `SearchForm` action, client navigation and Clear
   (`/connections#library`), the example page's back link (`backHref` in `src/lib/search.ts` and the fallback in
   `ExampleExplorer`), "Pick your class" in `FitsPanel`, the digest's change link, and the home page's course tiles
   (`/connections?course=<id>#library`). The fallback back link on an example page reads "All connections".
5. Individual example pages keep their address, `/examples/<slug>`, and are still called examples in copy ("Open this
   example", "32 examples", card text). Default chosen: a single page is still one worked example of a connection,
   and keeping its URL avoids breaking shared links and the other open branches (#2 search, #3 example pages, #4
   content split), which all link to `/examples/<slug>`.
6. Code follows the route: `src/app/examples/page.tsx`, `LibraryParts.tsx` and `home.module.css` move to
   `src/app/connections/`; `src/app/examples/[slug]/` stays.
7. Unit and e2e tests are updated for the new URLs, header label and redirects (including `/examples?course=…` →
   `/connections?course=…`), and pass.

## Non-goals

- Renaming individual example pages, their URL, or the word "example" in card and page copy.
- Changing the library's filters or layout (the search redesign in #2 owns that; it will target `/connections`).

## Verification

`npm run lint`, `npm run typecheck`, `npm test`, `next build`, the e2e suite, a curl check of each redirect, and
desktop and 390px screenshots of the header and `/connections`.
