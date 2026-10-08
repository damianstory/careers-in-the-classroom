# Static graphic-novel teaching illustrations

Requested 7 October 2026: replace the three code-drawn/animated teaching diagrams with graphic-novel images and make example-page images smaller. All story illustrations and teaching images now use a 680px maximum desktop width, fit narrow screens and preserve their complete aspect ratio. Homepage cards retain their own dimensions.

Generated through Higgsfield, `gpt_image_2_5`, high quality, 1k, 16:9; originals are 1344 × 752. WebP copies at quality 86 are in `public/images/story-diagrams/`. Exact prompts, graphic-novel reference IDs and job IDs are in `generation-record.json`; completed URLs are in `results.json`.

## Visual and content review

- Methane: ochre arrows travel from Sun down to ground; green arrows travel from the same ground point up to the satellite. Multiple arrowheads retain direction without motion. A dashed unfilled outline marks invisible methane. The graph has three absorption dips above its zero baseline. The horizontal axis is wavelength and the vertical axis is received light, explained in live text. All relationships match the existing sourced classroom explanation; image is not a measured spectrum or drawn to scale.
- Conservation: vulnerable owl → winter care → release in pairs → monitoring; the leftward return loop reaches future care. Burrowing owls have rounded heads, no ear tufts and long legs. No measured population recovery is implied.
- Lithium: mixed brine → separation, with distinct arrows to purification/conversion and remaining material. A feedback arrow returns to design/testing notes. Particle marks are conceptual and do not specify chemistry, amounts or purity; generic apparatus is not E3 equipment or a plant design.
- Each generated image was inspected at full size. Numbered markers match live HTML explanations; factual labels and units remain readable on phones. Artwork has no green caption/disclaimer strips.

Source grounding remains in `src/content/example-details.ts` and the shared source registry. The old animated implementation was removed; no motion is required to understand the direction of travel.

## Validation

Production build, typecheck, focused ESLint and diff checks passed. The content suite passed all 16 tests; selected accessibility, overflow and connected-example browser checks passed all 22 tests across desktop and phone. Final browser review confirmed 680px desktop images and uncropped 390px phone layouts. Review captures: `methane-desktop-review.jpg`, `methane-phone-review.jpg`, `owl-phone-review.jpg`, `lithium-phone-review.jpg`.
