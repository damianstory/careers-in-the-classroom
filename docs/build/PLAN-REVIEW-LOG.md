# Plan review log (append-only)

- Started: 2026-09-24
- Host / planner / builder: Claude Code (Opus 5.5, this session)
- Plan reviewer / final inspector: Codex CLI 0.156.1, requested model gpt-6-astra, effort medium
- Rounds: max 3 plan-review rounds; fix rounds 2; inspection rounds 2
- Plan: docs/build/PLAN.md
- Authorization: user asked to plan, align with Codex in up to 3 rounds, then build the agreed plan. No deploy, publish, email or contact authorized.
- Reviewer isolation: runs with an isolated CODEX_HOME (scratchpad) containing only model settings and a symlink to the existing login; no MCP servers (user's default config has write-capable MCP: computer-use, browseros-neo, node_repl, stitch). Global config unchanged.
- Run artifacts kept outside the repo (session scratchpad).

## Round 1 — REVISE
Result: /private/tmp/claude-501/-Users-damianmatheson-Desktop-Claude-Code-CitC/c086ea4d-1d1e-4526-9494-a16a80d8f4ef/scratchpad/claudex/round1/claudex-nkvk4h_r/result.json · session 01a0d48f-c068-7501-8d23-855589496ec7 · plan sha ec6ec48d… · observed model: not reported by CLI
- R1 (medium) Example URL loses search context (c20c/c20d both → chem20; free text lost). → Accepted.
- R2 (medium) "No data leaves the browser" conflicts with server-side search and banner vs sessionStorage. → Accepted.
- R3 (medium) Source-required rule conflicts with "Not yet researched" pathway; sources only example-level. → Accepted.
Limitations stated by reviewer: static review only; no runtime, visual or source verification.
Dispositions sent: /private/tmp/claude-501/-Users-damianmatheson-Desktop-Claude-Code-CitC/c086ea4d-1d1e-4526-9494-a16a80d8f4ef/scratchpad/claudex/feedback-round1.md

## Round 2 — REVISE
Result: /private/tmp/claude-501/-Users-damianmatheson-Desktop-Claude-Code-CitC/c086ea4d-1d1e-4526-9494-a16a80d8f4ef/scratchpad/claudex/round2/claudex-lh55d7hh/result.json · same session · plan sha 1c010d23… · observed model: not reported
- Reviewer confirmed R1–R3 addressed.
- R4 (medium) Off-origin ban conflicts with external source links. → Accepted: distinguish automatic requests from user-initiated source navigation; no-referrer links; separate link-attribute test.
Dispositions sent: /private/tmp/claude-501/-Users-damianmatheson-Desktop-Claude-Code-CitC/c086ea4d-1d1e-4526-9494-a16a80d8f4ef/scratchpad/claudex/feedback-round2.md

## Round 3 — APPROVED
Result: /private/tmp/claude-501/-Users-damianmatheson-Desktop-Claude-Code-CitC/c086ea4d-1d1e-4526-9494-a16a80d8f4ef/scratchpad/claudex/round3/claudex-o1y7_pzg/result.json · same session · plan sha d230ad9a64381b0d961f6c8b9842a888713d1c9a06c7833dff04bd8efdd2febd
- No findings. Reviewer limitations: plan-level only; no runtime, visual, accessibility or source-accuracy verification.
- Approval check run against final plan before build.

## Build
- Builder: Claude (Opus 5.5, this session). Inspector: fresh Codex session (gpt-6-astra, medium).
- Baseline commit: e19fc30 (local only, no remote).
- Proof results before inspection: lint clean; typecheck clean; vitest 20/20; next build OK; Playwright 52/52 (desktop 1440 + phone 390, incl. axe and 320px overflow); `git diff --quiet e19fc30 -- docs/validation` passes.
- Deviations and decisions made while building:
  - Shared primitives (buttons, chips, tags, cards, forms) live in `src/styles/globals.css`; page and component layout uses CSS Modules.
  - Axe found `--text-muted` (#7C7879) text at 4.35:1 on white. Small text now uses `--text-body`; `--text-muted` kept for non-text only.
  - `@types/node` raised from ^20 to ^24 to match installed Node 24 and satisfy Vitest 5 peer range.
  - The refine bar drops the single-option "Where: Calgary" select; Calgary is stated in the results eyebrow instead.
  - Form no-request checks ignore Next.js link prefetch GETs (`_rsc` or `/_next/static`) that fire when content scrolls into view; they still fail on any other request, any non-GET request, and any request carrying the typed probe text.
  - `.claude/launch.json` added so the local preview can start the dev server on a free port (port 3000 is used by another local project).

## Inspection 1 — REVISE (fresh Codex session 01a0d4c6-510d-7ef3-85b1-19ac1805fa0c)
Result: /private/tmp/claude-501/-Users-damianmatheson-Desktop-Claude-Code-CitC/c086ea4d-1d1e-4526-9494-a16a80d8f4ef/scratchpad/claudex/inspect1/claudex-4_c0p5i4/result.json
- R1 (high) Dev server logs/traces search URLs. → Accepted. `logging.incomingRequests: false`; `npm run demo` (production) is the educator path and writes no request logs/traces; dev-mode diagnostics documented in README. Regression test scans `.next` for a unique typed topic after a production search.
- R2 (medium) Refine form keeps stale state on related-search navigation. → Accepted. Form keyed by serialized context; test covers related click and back.
- R3 (medium) Phone rail before article. → Accepted. Rail follows the article; test compares positions.
- R4 (medium) Focus lost when signup removes the opener. → Accepted. Dialog close falls back to the page h1; keyboard test after successful signup.
- R5 (medium) Long unbroken topics overflow. → Accepted. `overflow-wrap: anywhere` on body; 80-char token test at 320/390.
- R6 (medium) Header actions lack page context. → Accepted. Pages register context (PageDialogContext); header and phone menu use it; test on both. Also: phone menu now closes when an action is chosen (found by this test).
- R7 (low) Blocked storage breaks unlock silently. → Accepted. In-memory fallback; test with throwing setItem.
- Proofs after fixes: lint clean; typecheck clean; vitest 20/20; Playwright 65/65.

## Inspection 2 — refused (code changed during inspection)
Result: /private/tmp/claude-501/-Users-damianmatheson-Desktop-Claude-Code-CitC/c086ea4d-1d1e-4526-9494-a16a80d8f4ef/scratchpad/claudex/inspect2/*/result.json. Not counted as approval. Host edited package.json/README (demo port 3300 → 3310, port 3300 used by another local project) while it ran. Its findings were still reviewed:
- R1 (high) Dev server still writes request URLs to .next/dev/trace. → Accepted. `npm run dev` sets NEXT_TRACE_SPAN_THRESHOLD_MS=86400000 (Next.js records only spans longer than this), so no request spans are written. New proof `npm run test:privacy-dev` starts the real dev entry point, searches a unique topic, stops it, and scans .next and console output: reproduced the leak before the fix, passes after.
- R2 (medium) Results-page speaker actions omit the related organization. → Accepted. First prepared example's org passed to the aside and page context; tests cover aside, header/menu, and news-only searches (no org).
- Proofs: lint clean; typecheck clean; vitest 20/20; Playwright 67/67; test:privacy-dev OK; validation docs unchanged.

## Inspection 3 — fresh session on final code (no edits during run)
Result: /private/tmp/claude-501/-Users-damianmatheson-Desktop-Claude-Code-CitC/c086ea4d-1d1e-4526-9494-a16a80d8f4ef/scratchpad/claudex/inspect3/claudex-apbl09s1/result.json — REVISE (inspection budget now used).
- I3-R1 (medium) Expanded home search collapses at ~961–1100px. → Fixed: hero form wraps; unit ≥240px, topic ≥200px; test at 961/1024/1100.
- I3-R2 (low) Phone menu reopens after navigating back. → Fixed: menu state resets on route change and on menu-link click; test.
- Found by the host while verifying (not reviewer findings): desktop header cramped at 961–1120px → phone menu below 1120px, nowrap labels; transparent header overlapped scrolled hero text → solid after 8px scroll; hero "Or explore Calgary" link rendered green on the photo (global .linkbtn won specificity) → scoped white, test added.
- Proofs after these edits: lint clean; typecheck clean; vitest 20/20; Playwright 71/71; test:privacy-dev OK; validation docs unchanged.
- UNREVIEWED: the edits listed under Inspection 3 were made after the last independent inspection and have not been inspected by Codex. They will be exercised by the user-run Codex UX review (browser).
