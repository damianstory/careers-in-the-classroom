# Editorial image direction

Selected by Damian on 7 October 2026: extend the Discover graphic-novel artwork across the homepage and example imagery, then other editorial illustrations. Use the ink-and-halftone version. The voxel / Minecraft-like studies are no longer candidates for site artwork.

## Visual language

- Confident forest-green ink contours, selective perspective and bold silhouettes.
- Mature, expressive fictional people actively doing recognizable work.
- Flat sage and ivory colour planes; natural skin and hair colours.
- Coarse halftone shadows, fine crosshatching and textured uncoated paper; subtle imperfect print registration.
- Forest green `#1b3b19`, warm ivory `#faf9f7`, sage and leafy green, restrained burnt-orange and slate-blue accents.
- Good contrast and immediately readable people, tools and actions at card size and on classroom projection.
- Single composed scenes; avoid collages, floating icons, comic panels, speech bubbles, voxel geometry, pixel art, glossy 3D and photorealistic skin.

## Canonical reference and original prompt

The nine installed reference cards are in `public/images/discover/`. Original PNGs and full role prompts are in `design/discover-role-collection-2026-10-06/`. Use the canonical repaired Plant Operator, not the superseded version.

Approved portrait reference: Satellite Instrument Engineer, Higgsfield job `460b32e1-01c9-433a-a852-a146ad5c39b9`. The finished role collection uses that reference. Confirmed from live Higgsfield generation history on 7 October 2026.

Exact shared art-style instruction from the collection:

> Match the attached approved GRAPHIC-NOVEL card's visual language: confident forest-green ink contours, mature expressive adult face, flat sage and ivory colour planes, warm natural skin colours, strong halftone shadow texture, textured uncoated print paper and restrained burnt-orange/slate-blue accents. Bold silhouette and selective perspective. The character must be the NEW persona described, never the reference woman. A single illustrated working scene, no comic panels or speech bubbles. Not photorealistic or a 3D render.

## Adapt the composition to its purpose

Discover cards retain the portrait composition and large ivory role-title band. Example illustrations use landscape compositions with no embedded title, labels or branding; the UI supplies factual text. Compose natively for the required frame. Do not crop a portrait card to manufacture a landscape scene.

For examples, illustrate the problem and work in the sourced story. A fictional person is representative of the work, never proof of an employee, company facility, process design or measured result. Present editorial artwork as a clean image: **no green bottom strip, illustration caption, disclaimer band or extra border below it**. The user approved this presentation on 7 October 2026 after reviewing the example images. Keep artwork provenance in the design records and descriptive alt text in the UI. Official identification logos remain their original assets.

Teaching schematics also follow the graphic-novel direction. On 7 October 2026 the user requested that the animated/code-drawn diagrams become static images. Preserve the sourced scientific or process relationships; explicit arrowheads replace motion cues. Methane must show Sun → ground → satellite, never satellite-emitted light. Conservation must show care → release → monitoring with feedback to future care. Lithium separation must branch into a lithium-rich stream and remaining material. Keep explanatory labels and units as live text, with numbered markers connecting them to the artwork. Functional teaching labels are distinct from the removed illustration-caption bands.

Story illustrations and teaching images use a **680px maximum desktop width**, with their full aspect ratio preserved. The story introduction pairs company details and artwork in the left column with the identification logo and course fit in the right column; it stacks when the available content width becomes narrow. Teaching images remain centred in the content column. On narrow screens all images fit the available width. This keeps example-page images smaller without reducing the readability of the live explanations. Homepage card images continue to fit their cards.

## Visual review before use

Inspect every returned image for style consistency, anatomy (especially arms and fingers), plausible equipment, species cues, work legibility, unintended text and safe crops. Review desktop and phone rendering. Fix or reject broken imagery; preserve superseded generations and exact prompts in the dated design record. Store served images locally at an appropriate compressed size, with descriptive alt text on story pages and decorative alt text on cards whose headings already identify the topic.

For GHGSat, methane is invisible and instruments measure reflected sunlight: coloured maps belong on screens; do not depict visible gas or scanning lasers. For Wilder, depict burrowing owls with rounded heads, no ear tufts, long legs and prairie habitat. For E3, use laboratory or pilot development scenes rather than implying an operating commercial plant.

Example artwork is recorded in `design/example-illustrations-2026-10-07/generation-record.json`; teaching illustrations in `design/story-diagrams-2026-10-07/generation-record.json`. Both preserve full prompts, reference job IDs, generation jobs and requested settings. Existing homepage Calgary hero and footer textures are a later illustration pass.
