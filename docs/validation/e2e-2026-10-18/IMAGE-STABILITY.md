# Follow-up from production verification

The first live run after PR #6 completed with 381 passes, 49 device-specific skips and two failures. The two local disk-privacy variants were excluded from the remote run because they inspect the local `.next` directory.

## Root causes and corrections

The rail-mounting assertion found a 1px difference in document height; the navigation's position, width and height were unchanged. Eight independent browser diagnostics traced the change to images decoding while hydration was unblocked. The methane, owl and lithium teaching images are 1344×752, but their markup declared 1344×756. Image optimization also rounds resized dimensions, producing smaller fractional shifts in editorial illustrations.

Teaching images now use imported dimensions when available. Both editorial and teaching images reserve the original aspect ratio throughout loading and use `object-fit: contain` to keep the complete image visible when optimized dimensions round. The existing 680px cap and responsive sizing remain intact; no artwork was regenerated or cropped.

The homepage logo test read `currentSrc` immediately after inserting the company panel. A newly inserted image can have an empty `currentSrc` before the browser selects and loads it. The existing loaded-image assertion now runs before checking those URLs. No assertion was removed, tolerance increased or retry added.

## Regression evidence

A new test blocks image requests, records reserved dimensions and document height, releases the images, and requires exact equality after loading. It covers GHGSat, Wilder Institute, E3 Lithium and the newer Broken Pencil Studios assets at desktop and phone sizes.

- Against the first live release: **7 failed, 1 passed**, reproducing the loading shift independently of rail hydration.
- Against the corrected local production build: **8 passed**.
- Unit tests: **179 passed**. Typecheck and lint passed.
- Full local production-build suite: **393 passed, 49 device-specific skips, zero failures** (3.4 minutes, no retries).
- Final live results are recorded separately in the release verification report.

The original repair source remains in PR #6. This follow-up changes only image layout reservation and test timing; directory navigation, content, permissions and dependencies are unchanged.
