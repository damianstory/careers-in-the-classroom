# B2 "Field Instrument" (dark green) — design reference

Chosen 30 September 2026. Build plan: `docs/build/PLAN-b2-field-instrument.md`.
Live canvas (private to the owner): https://claude.ai/artifact/AtznHhqAju4CHMoKoyS1KV

Reference only. Nothing here ships.

- `G-<Page>.dc.html` (desktop 1440) and `G-<Page>-m.dc.html` (mobile 390): all 11 screens. `GetInvolved` is now "List your company".
- `P1-Dither.dc.html`: the approved dither look for the rail and footer.
- `P7-Magnet.dc.html` and `P8-MagnetScroll.dc.html`: the magnetic-dot prototype and the sticky-rail scroll demo. The JS shows the behaviour and tuning. Do not copy it into the app.
- `CONTENT-brief.md`: the copy brief the artboards were drawn from. `src/content` wins if they disagree.
- `assets/calgary-dither-green.png`: the hero photo as a 1-bit dither, `#6ebd6a` dots on `#1b3b19`. Photo by Mahesh Gupta on Unsplash.
- `assets/rail-dither.png`: the canvas texture (320×1600, stretched in P1). Production uses a 1:1 repeat-y tile made from the shared density function (plan, Phase 0).

The `.dc.html` files are Claude Design canvas artboards. `/_blob/...` image URLs inside them resolve only on the canvas. Open them on the canvas, or use `assets/`.
