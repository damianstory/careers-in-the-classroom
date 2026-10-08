# Example graphic-novel illustrations

Generated 7 October 2026 through Higgsfield (`gpt_image_2_5`, high quality, 1k, requested 16:9). Returned dimensions: 1344 × 752. Exact briefs and graphic-novel reference jobs are in `generation-record.json`; completed job IDs and source URLs are in `results.json`.

The user selected the Discover graphic-novel direction for the site's imagery. These three landscape working scenes replace the example-card schematics as editorial previews and also appear in each example's classroom story. Teaching schematics remain separately available.

| Example | Original PNG | Served asset |
| --- | --- | --- |
| GHGSat | `ghgsat.png` | `public/images/examples/ghgsat-graphic-novel.webp` |
| Wilder Institute | `wilder-institute.png` | `public/images/examples/wilder-institute-graphic-novel.webp` |
| E3 Lithium | `e3-lithium.png` | `public/images/examples/e3-lithium-graphic-novel.webp` |

All originals were visually inspected: coherent ink/halftone style, two naturally connected arms and hands, no embedded text, readable work cues. GHGSat's colour visualization stays on the screen; Wilder's owl has a rounded head without ear tufts and stands beside a prairie burrow; E3's columns belong to a generic laboratory rig. The fictional scenes are illustrative, not scientifically validated process models, authentic employees or company facilities.

Served WebP assets retain the full landscape composition at quality 86. Source PNGs are preserved here. Site-wide direction and the shared original prompt: `../../docs/design/image-direction.md`.

## Implementation review

- `npm run typecheck` and `npm run lint -- --quiet`: passed.
- Production build completed through the Playwright web-server setup.
- Existing accessibility/overflow checks for the homepage and example routes, plus the course/unit filter → example → back journey: **34 passed**, desktop and phone.
- Initial browser visual inspection: all three homepage illustrations displayed; all three story images loaded. At 390 × 844, Wilder and E3 displayed the full scene at 358 × 200.25 without cropping; GHGSat also preserved its complete landscape. The initial screenshots include caption strips that were subsequently removed at the user's request.
- Evidence: `homepage-review.jpg`, `ghgsat-story-review.jpg`, and the three `*-phone-review.jpg` screenshots.
- Local integration only. The separate homepage Calgary hero and footer textures are outside this first example-artwork pass.

## Presentation refinement

On 7 October 2026, the user approved the artwork and requested deletion of the green caption strips on both homepage cards and story illustrations. The shared illustration component now renders only the image. The no-strip presentation is recorded in AGENTS.md, `docs/design/image-direction.md` and a memory update for future examples and site artwork.

Refinement verification: component lint and production build passed. Reloaded the local production preview and confirmed all three homepage illustrations loaded with no figcaption, and the Wilder story illustration loaded with its descriptive alt text and no caption strip. Updated screenshots: `homepage-no-strips-review.jpg` and `story-no-strip-review.jpg`.
