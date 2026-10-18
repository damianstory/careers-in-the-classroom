# Plan: a landing page for Careers in the Classroom

## Goal

Decide whether first-time visitors should keep landing directly in the example library, and give Damian (the owner)
several distinct, runnable landing page directions to compare. Each one introduces the project to Alberta high school
science teachers (what it is, why it matters, how a lesson uses it) and launches them into the library by course,
company or kind of job.

## Acceptance criteria

- `/` (the current library home) is unchanged. Prototypes live under `/landing`, `/landing/a`, `/landing/b`,
  `/landing/c` and `/landing/about`, with a review bar to switch between them.
- Each prototype states who it is for, what the product is, and how a teacher uses it, above or near the fold, including
  at 390px wide (C says so in its hero lede, before the launchpad).
- Any job posting shown outside the full example keeps the context the full example gives it: its status label from
  `jobStatusLabel` (historical, closed or accepting applications when checked), computed at request time (the page
  calls `connection()` so a build does not freeze it), its location, and an "Another employer" marker decided by
  comparing the posting's employer with the featured organization's name (not by geographic relevance).
- Each offers three ways in: course (links to `/?course=<id>#library`), company (links to `/examples/<slug>`) and kind
  of job (lists and links to exactly the examples whose details include that role; no free-text search, which is
  broader than the role). They only link; search and filtering are being redesigned in a
  separate thread and must not be changed here.
- All counts and names come from existing content records (`src/content`), so they cannot disagree with the library.
- No invented facts: no statistics, testimonials or time estimates that are not in the content or sourced.
- Works at 390px wide with no horizontal scroll; passes `npm run lint`, `npm run typecheck`, `npm test`.
- Follows the site's existing visual system (green ramp, IBM Plex, square corners, graphic-novel editorial art) and
  the repo's AGENTS.md image rules (story images capped at 680px, no caption strips).

## Approach

Shared pieces in `src/app/landing/`:
- `data.ts`: server-side derived data. Course doors with example counts; company doors (org name, question,
  subject, logo where `Organization.logo` exists, else a monogram); role doors built from `roleProfiles`, linked to
  examples through `ExampleDetails.roleIds`, sorted by number of examples.
- `Doors.tsx`: a client tabbed launchpad (My class / A company / A kind of job). The company tab is a list with a
  logo or monogram on the left and a type-to-find box.
- `PrototypeBar.tsx`: review-only switcher.

Directions:
- **A · Explain, then launch.** Hero (who, what, CTA), three steps, the five parts of one real example (GHGSat), a
  "why it matters" statement with concrete Calgary places, then the launchpad.
- **B · Show one example.** Opens on a clickable miniature of the example page's lesson rail for three examples
  (GHGSat, Wilder Institute, E3 Lithium) with a note on what each part gives the teacher, then the launchpad and a
  short FAQ.
- **C · Launchpad first.** Closest to today: one-line explanation, the launchpad as the hero, a small "New here?"
  primer linking to an About page, and three sample example cards.

Recommendation in the write-up: A, with B's walkthrough replacing A's static example section; a front door at `/` and
the library moved to `/examples` if adopted.

## Design and copy passes applied

- Impeccable (refinement of the incumbent system, Persuade mode): removed eyebrow labels and the hero stat row,
  replaced the equal three-card "why" grid with one statement and prose, removed a 3px side accent border, added
  one authored motion moment per page (headline rise on A, step transition on B) with reduced-motion fallbacks,
  themed selection, scrollbars and numerals. Detector reports no findings.
- SlopMonster: checker is 5/5 on B, C and About; A's one remaining match is a step number read as a statistic.
  Removed an unsupported "five to fifteen minutes" claim and a "not just X" construction.
- Scroll-craft not used: it depends on generated photoreal video assets and long scroll sequences, which conflict
  with the approved graphic-novel image direction and would be heavy on school Chromebooks and projectors.

## Non-goals

- Changing the library, its search or filters, or the example pages.
- Replacing `/` or moving the library to `/examples` (a follow-up once a direction is chosen).
- New artwork or logos.

## Risks

- Only 3 of 32 organizations have a logo file; the company list leans on monograms.
- Course counts are uneven (Chemistry 30, Science 20 and Biology 30 have one or two examples each).

## Verification

- `npm run lint && npm run typecheck && npm test` pass.
- `.claude/skills/impeccable/scripts/impeccable detect --json src/app/landing` returns `[]`.
- Screenshots at 1440 and 390 wide for each prototype; `document.documentElement.scrollWidth` equals 390 on each.
