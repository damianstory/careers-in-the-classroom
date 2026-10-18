# Landing page directions (18 October 2026)

Prototypes live at `/landing` (index), `/landing/a`, `/landing/b`, `/landing/c` and `/landing/about`.
The current home (`/`) is unchanged. A yellow review bar at the top of each prototype switches between them.

## Should visitors still land straight in the library?

Not for first-time visitors. Today `/` opens on a headline and a three-field form, so someone arriving from an email
or a colleague has to work out what an "example" is before they can use it. With 32 examples and three useful ways in
(class, company, kind of job), a single course → unit form also undersells what is there.

Returning teachers, though, should reach the library in one click. So the recommendation is a front door at `/`, the
library at `/examples` (where the header's "Examples" link would point), and every example page's
"All examples" link going to the library, not the landing page.

## The three directions

| | Idea | Best when |
|---|---|---|
| **A · Explain, then launch** | Hero with what it is and who it's for, how it works in three steps, the five parts of one real example, why it matters, then three ways in. | Most visitors arrive cold, from an email, a colleague or a PD session. |
| **B · Show one example** | Opens on a clickable miniature of a real example (GHGSat, Wilder Institute or E3 Lithium), with a note on what each part gives the teacher. Then three ways in and a short FAQ. | Teachers skim, and the product explains itself once seen. |
| **C · Launchpad first** | Closest to today. One-line explanation, the three ways in as the hero, a small "New here?" primer, three sample examples and a separate About page. | Most visitors are returning teachers who want an example fast. |

All three share one launchpad component with three tabs:

- **My class**: courses grouped by subject with example counts. Links to the library filtered by course.
- **A company**: all 32 organizations as a list, logo (or monogram) on the left, the example's question underneath, subject tag on the right, with a type-to-find box. Links straight to the example.
- **A kind of job**: shared role profiles ranked by how many examples include them, with a one-line summary and the organizations where it shows up. Links to the library's topic search.

The launchpad only links into the library and example pages. Search and filtering are being redesigned in a separate
thread, so these links should be repointed once that lands.

## Recommendation

**A, with B's walkthrough replacing A's static "What's inside one example" section.** A answers "what is this and why
should I care" in the order a newcomer asks it; B's walkthrough is the most convincing way to show what a teacher
actually gets. Keep C's "New here?" primer as the fallback if you'd rather change the home page as little as possible.

## Content gaps the prototypes expose

- Only 3 of 32 organizations have a logo on file (GHGSat, Wilder Institute, E3 Lithium). The company list falls back to monograms; collecting logos would make that list much easier to scan.
- Chemistry 30, Science 20 and Biology 30 have only one or two examples each, which shows clearly on the "My class" tab.
- The "Why it matters" copy is our framing, not sourced research. If you want numbers there, they need sources.

## Screenshots

Desktop (1440 wide): `a-desk.jpg`, `b-desk.jpg`, `c-desk.jpg`, `about-desk.jpg`.
Mobile (390 wide): `a-mob.jpg`, `b-mob.jpg`, `c-mob.jpg`.
Launchpad tabs: `doors-company.jpg`, `doors-role.jpg`. Walkthrough steps: `walk-Who.jpg`, `walk-Ways.jpg`.

## Design and copy passes (Impeccable, SlopMonster)

- **Impeccable**, as a refinement of the existing visual system: removed the small labels above every heading and the
  hero stat row, replaced the equal three-column "why" grid with one statement and plain prose, removed a thick side
  accent border, and gave each page one deliberate motion moment (A's headline rises line by line; B's walkthrough
  steps slide in), with reduced-motion fallbacks. Text selection, list scrollbars and numerals now follow the palette.
  Its detector reports no findings.
- **SlopMonster**: B, C and About score 5/5. A's one remaining match is the step number "3" read as a statistic.
  Removed an invented "five to fifteen minutes" estimate from B's FAQ and a "not just X" construction from A.
- **Scroll-craft** was not used. It builds scroll-driven pages around generated photoreal video, which conflicts with
  the approved graphic-novel image direction and would be heavy on school Chromebooks and classroom projectors.

The plan these prototypes follow is in `PLAN.md`.
