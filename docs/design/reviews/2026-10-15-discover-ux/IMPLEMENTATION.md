# Discover implementation and verification — 15 October 2026

The follow-up implementation was authorized after the review. The original report remains a record of the previous interface, not a description of the revised one.

## What changed

- The illustrated occupation is now the H1 and matches the title in its artwork. The broader role category is explicitly labelled “Work area.” Shared example-page role names are unchanged.
- Every guessing picture uses the same 27% temporary cover. Reveal removes the cover, including its accessibility-tree text. The SAVED badge and timer no longer overlap the image. Artwork files remain intact and retain their full aspect ratio. Because existing titles are baked into differently sized headers, the uniform cover temporarily conceals a little additional space on some images; it disappears entirely on reveal. A future title-free asset collection is a separate editorial decision.
- Responsive grids replace scaling the entire stage. Type and touch targets retain their real size on tablets; longer route and job details can scroll. Guessing controls fit a 1280 × 720 classroom screen. Full screen is an explicit teacher action.
- Changing a topic focuses its heading and brings it into view on narrow screens. Starting or stopping a round also lands at the activity heading. Space, arrows and R remain available; Space on a separate focused control activates that control normally.
- “Single draw” provides a non-cycling activity and is the default when reduced motion is requested. Each picture has authored, answer-safe clues. Failed or stalled pictures use these clues instead of a blank guessing activity; stalled decoding has an eight-second fallback.
- Topic labels describe their contents. Direct access and an early Next round action remain available. The counter says “selected” because it counts selections, not learning or completed topics.
- Pathways show their qualification notes and official source links, including DVM admissions. Job examples show the actual posting title, employer, location, dated status, recorded experience level, employer relationship and limitations, with links to the saved requirements and posting source.
- Card numbers 01–09 are permanent. The illustrated occupation, owning organization, pathway and posting are explicitly curated rather than selected by shared array order. New shared roles do not silently become Discover cards without artwork and curation.

## Curation choices

| Card | Illustrative occupation | Featured route | Saved posting |
| --- | --- | --- | --- |
| 01 | Atmospheric Scientist | UAlberta Earth Sciences | GHGSat Remote Emissions Scientist |
| 02 | Satellite Instrument Engineer | UCalgary Engineering Physics | Muon Space calibration role; separate employer stated |
| 03 | Software Developer | SAIT Geomatics Engineering Technology | GHGSat Senior Backend Developer |
| 04 | Conservation Scientist | UCalgary Zoology | Enmas Environmental Technician; separate employer and scope stated |
| 05 | Animal Care Technician | Olds Veterinary Technical Assistant | Wilder Animal Care Technician |
| 06 | Wildlife Veterinarian | UCalgary DVM | No saved posting |
| 07 | Process Engineer | UCalgary Chemical Engineering | E3 Intermediate Process Engineer |
| 08 | Plant Operator | SAIT Power Engineering Technology | E3 Shift Operator |
| 09 | Partnerships Manager | SAIT Business Administration – Marketing | GHGSat Business Development Manager (Government) |

These routes are related learning directions, not claims that a particular credential qualifies someone for the illustrated occupation or posting. The existing rationale and qualifications remain visible, including the distinctions between support work, technologists, engineers and veterinarians. The software card highlights a practical spatial-data route; the animal-care card highlights introductory support training. The saved posting’s additional requirements remain separate.

## Repository consolidation

Discover was already integrated into main. The old clean `CitC-discover` linked worktree had no unique commits. It was moved, including ignored local files, to `../.archives/CitC-discover-2026-10-15`. Its branch remains recoverable. The stale separate launcher was removed and README/build notes now identify CitC as the active repository.

A clean verification install exposed a pre-existing npm lockfile mismatch in optional development-tool dependencies. Regenerating the lock metadata corrected the @emnapi nesting and permitted `npm ci`; no package.json or application dependency versions changed.

## Validation

Verification uses a clean temporary copy of base commit `99001ea` plus only the Discover/consolidation changes and lockfile correction. This excludes concurrently edited example-expansion code and test fixtures in the shared checkout.

- Clean `npm ci`, TypeScript, ESLint and all 82 unit tests pass.
- Production build passes. The final Discover suite has 18 passing tests; the public-route accessibility suite has 50 passing tests. Project-specific skips avoid duplicating desktop and phone scenarios.
- Discover interaction tests exercise freeze-frame accuracy, answer concealment, shared-link restoration, non-repeating rounds, focus isolation, reduced motion, image failures, official pathway links and separate-employer qualifications.
- A content matrix checks all 54 reveal/topic states at widths 1280, 768 and 390 (162 combinations): readable type, no horizontal overflow or clipped content, and no browser page errors. Longer content is allowed to scroll vertically.
- Accessibility regression checks cover Discover and the existing public routes on desktop, phone and at 320px: no serious or critical axe violations, and no sideways scroll.
- Native browser visual inspection covered desktop reveal, tablet layout, mobile topic landing and separate-employer posting context. Screenshots: [desktop](after-desktop-reveal.png), [tablet](after-tablet-reveal.png), [phone](after-phone-step-landing.png).

This is browser and automated verification, not a teacher/student usability study or a complete manual screen-reader assessment. The report’s suggested comprehension tasks remain useful for validating educational outcomes. No hosting deployment is part of this change.

## Follow-up: desktop controls and heading focus

Removed the decorative focus outline from programmatically focused Discover headings while preserving focus and announcements. Interactive controls retain their visible keyboard focus. At desktop widths (1100px and up), the bottom Back/Next row and its helper text disappear after reveal; topic buttons handle section selection, and Next round remains in the top toolbar. Mobile/tablet controls and the initial Reveal the job action remain. Initial deep links focus the heading when the bottom action is hidden, preserving keyboard navigation.

Validation: TypeScript, ESLint, production build and 23 targeted browser/accessibility checks pass, including the 162-state responsive matrix and checks for heading appearance, tab focus, keyboard progression and mobile controls.

## Follow-up: balanced guessing layout and Randomize

The desktop guessing screen now centers the illustration and clues as one two-column group, removing the unused left column. Randomize replaces the disabled Back button before reveal: it immediately restarts the cycling round, or draws another picture in Single draw mode. Existing selection/exhaustion rules and the mobile layout remain intact.

Validation: TypeScript, ESLint, production build and all 22 Discover browser checks pass. Added checks cover balanced desktop margins and direct randomization in both modes on desktop and phone. Native browser inspection confirmed the layout and restart/stop flow. [Updated guessing screen](after-guess-layout.png).

## Follow-up: Restart and compact guessing banner

Renamed Randomize to Restart and grouped it immediately before Reveal the job on desktop (1100px and up). The guessing banner is half its former height: the upper half of the source title region is clipped during guessing, and the remaining half stays covered. The work scene retains its natural proportions, and reveal restores the complete image.

Validation: TypeScript, ESLint, production build and all 22 Discover browser checks pass, including title concealment across all nine cards, full-image restoration, adjacent desktop buttons, restart in both round styles, and the responsive content matrix. Native browser inspection confirmed desktop and phone presentation. [Updated desktop screen](after-compact-guess-banner.png).

## Follow-up: restore original banner height

Restored the original full-height guessing frame and 27% title cover at the user's request. Removed the temporary image clipping; Restart retains its name and placement beside Reveal the job on desktop. The compact-banner screenshot above records the superseded version.

Validation: production build and all 22 Discover browser checks pass, including original cover proportions, desktop button grouping and restart behavior.
