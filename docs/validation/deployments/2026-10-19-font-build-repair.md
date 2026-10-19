# Production font build repair — 19 October 2026

## Failure

- Failed production deployment: `dpl_8jvoqmUs1uULJNbbj8dyT8TXtp2K`, source revision `574e01b0a0fd28e52123705e611f3bd57195aa87`.
- Vercel build logs show Next.js 16.3.6 / Turbopack failing with 24 IBM Plex Sans font-resolution errors imported by `src/app/layout.tsx`.
- The underlying diagnostic is `next/font/google queries have exactly one entry`, surfaced as a missing virtual `@vercel/turbopack-next/internal/font/google/font` module. This is not a missing application dependency.
- [Next.js issue 99114](https://github.com/vercel/next.js/issues/99114) describes this same version and error when Google returns extensionless font URLs containing query parameters. The matching upstream report supports this diagnosis; the build log itself establishes the failure in the font loader.
- At investigation time, the public alias still served the earlier successful deployment `dpl_5qTvxvkMcaZXtWk7i6WYMv9rUtfw`, revision `39b6671cfac167f48f204c7fbfddb060a10066be`. The public site remained available; the latest content release had not published.

## Repair

Use `next/font/local` with official, unmodified IBM Plex Sans (400/500/600/700) and IBM Plex Mono (400/500) WOFF2 assets. Preserve the existing CSS variables and swap behavior. Include the SIL license, pinned upstream revision and file hashes in `src/app/fonts/`.

This removes Google Fonts requests from the production build. Browser fonts continue to be hosted with the application. No application content, Next.js version, deployment settings or billing settings are changed.

## Local validation

- Moved the previous build cache aside and ran a production build with `NEXT_FONT_GOOGLE_MOCKED_RESPONSES` pointing to a temporary empty response map. The original Google loader failed as expected because remote font responses were unavailable. This deliberately blocked-source test is separate from the observed Vercel URL-parsing failure.
- The repaired production build passed with that same empty response map; it no longer needs the Google loader.
- Lint, type generation/type checking and all 214 unit tests passed.
- Existing Discover and image-layout browser suites: 35 passed, 21 expected device-specific skips. All 420 Discover content states passed at 1280, 768 and 390 pixels; image geometry stayed stable before and after loading.
- Desktop (1440×900) and phone (390×844) Clynch example screenshots inspected. No sideways overflow; all six local font faces loaded successfully. Font requests stayed on the application origin.
- Production publication is verified separately after the repair commit is pushed; these are local validation results.
