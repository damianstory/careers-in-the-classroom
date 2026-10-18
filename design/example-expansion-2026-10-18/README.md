# October 18 expansion illustrations

28 generated assets: one editorial scene and one teaching diagram for each of 14 locally integrated examples. User approval of the illustrated site remains pending; no publication authorized.

Followed `docs/design/image-direction.md`: graphic-novel / limited-colour screenprint, forest-green ink, ivory/sage, restrained orange/blue, fictional adults and generic equipment. No caption bands. Explanations remain live HTML; images are capped by the existing 680px layout.

`prompts.json` records the planned per-asset prompts; `generation-history.json` records returned original paths and exact refinement prompts. The initial Standen’s story was generated before the batch prompt manifest; its retained PNG is the provenance asset. Original generation outputs remain in the Codex generated_images directory. `asset-manifest.json` records final web files, sizes and hashes. `logos.json` records separately collected official identification marks, their sources and display backgrounds. Logos are not generated.

## Visual review

All 28 images were inspected. Nine assets were revised before integration: EFW diagram (probe/echo directions and anatomy), NanoTess diagram (same endpoint energies, no clinical implication), GPT diagram and story (contained heat source), ICE diagram (separate air streams and circulation), Hifi story (remove embedded labels) and diagram (outgoing orange light and returning blue light), Alberta Boot story and diagram (Western pull-on boots, no misleading force arrows). Superseded PNGs are retained for provenance and are not served by the app.

These are simplified teaching scenes, not verified renderings of proprietary equipment, actual employees or named company facilities. NanoTess does not depict proven clinical efficacy; EFW is not a diagnostic image; ICE uses a historical catalogue to support a general heat-recovery model. Numbers/graphs drawn in the art are conceptual, not measured company results. Source qualifications remain in live copy.

## Format

Final web copies are 1344 × 756 WebP, quality 84. Native approximately 16:9 generated PNGs are preserved here. Conversion only standardizes format and geometry; semantic revisions used the image-generation editor. Code never repainted diagrams.

## EFW follow-up: simplified echo diagram

At the user’s request, `efw-radiology-echo-diagram.png` replaces the earlier four-marker teaching image in the local preview. It has one tissue boundary, one outgoing pulse arrow, one return arrow and a signal screen. Three live explanations match its markers. The full sourced four-step lesson remains intact. Original versions are retained. See `efw-simple-echo.json`. Desktop, phone and projector checks passed; no deployment.
