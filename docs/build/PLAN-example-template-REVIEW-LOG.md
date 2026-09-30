# Review log: PLAN-example-template.md

Append-only. Started 2026-09-29.

- Host/coordinator and builder: Claude Code (Opus 5.5). Plan reviewer: Codex CLI, requested gpt-6-astra, effort medium, isolated CODEX_HOME (auth only, no MCP servers). Final inspector: fresh Codex session.
- Mode: review. Max plan rounds: 3. Inspections: 2. Build authorized by the owner after alignment. No commit/push/deploy authorized.
- Pre-check: plan items confirmed not built (grep for new copy/anchors; Wilder/E3 still on the legacy template).

## Round 1 (Codex, gpt-6-astra requested, effort medium)
- Result: /private/tmp/claude-501/-Users-damianmatheson-Desktop-Claude-Code-CitC/dfabf5e2-4457-4f19-82a4-d90921a2d695/scratchpad/claudex2/r1/claudex-6ozwi9rn/result.json (session 01a0ef8e-aa11-7b93-b707-d4b553770c47, 60 s). Plan SHA256 3e8af4eb… Observed model: not reported.
- Verdict: REVISE. ET-001 (medium) hidden views still reachable by URL, CompanyView unguarded. ET-002 (medium) single date only rendered on the story view.
- Dispositions: both accepted and applied to the plan (see /private/tmp/claude-501/-Users-damianmatheson-Desktop-Claude-Code-CitC/dfabf5e2-4457-4f19-82a4-d90921a2d695/scratchpad/claudex2/feedback1.md).

## Round 2 (same Codex session, resumed)
- Result: /private/tmp/claude-501/-Users-damianmatheson-Desktop-Claude-Code-CitC/dfabf5e2-4457-4f19-82a4-d90921a2d695/scratchpad/claudex2/r2/claudex-0fowarcv/result.json (31 s). Verdict: **APPROVED**, bound to plan SHA256 5b73884c38e000cb30d30571fa79df7ddb99cbb3834d21772e1c83e65fee0b9c. Findings: none. Observed model: not reported.
- Limitations: plan only; runtime, accessibility and responsive behavior unverified.
- Rounds used: 2 of 3. Approval check passed.

## Build
- Builder: Claude (host). Inspection base: unreferenced snapshot 6353666f485c81bfb45bb22bc7953f896ee70540.
- Authorship since the snapshot. This build (Claude): src/app/examples/[slug]/{ExampleExplorer.tsx, ExampleSections.tsx, example.module.css, explore.module.css, page.tsx}, src/lib/example-navigation.ts, src/lib/job-status.ts, tests/e2e/exploration.spec.ts, tests/unit/example-navigation.test.ts, and this log.
  Not this build: tests/e2e/journeys.spec.ts and tests/e2e/regressions.spec.ts, where the library session made two one-line edits at this build's request (the Wilder test now opens ?view=pathways; R3 matches the renamed side panel). Also not this build: docs/validation/job-reviews/**, research files from another session.
- Deviations: the side panel's accessible name is now "Bring this work into class" (it no longer repeats location, fits or date). Wilder and E3 story views drop the separate "where the work happens" sentence, because the organization line already carries the location. The "Use it in class" block sits beside the visual only at 1200px and wider, to keep the diagram readable.
- Proof: lint clean; typecheck pass; unit 48/48; e2e 123 passed, 3 skipped (production build on :3200); impeccable detect: no findings; protected validation docs unchanged.
  Not run: `npm run test:privacy-dev`. It must start its own `next dev`, and the library session's dev server was already running in this folder (Next allows one), so the script exited with "kill ESRCH". The check covers the home and search flow, which this build did not change.
- Visual: 1440, 1200, 1199, 1024, 390 and 320px across 10 URLs on all three examples: no horizontal overflow. On phones "Use it in class" comes before the diagram.

## Inspection 1 (fresh Codex session, gpt-6-astra requested, effort medium)
- Result: /private/tmp/claude-501/-Users-damianmatheson-Desktop-Claude-Code-CitC/dfabf5e2-4457-4f19-82a4-d90921a2d695/scratchpad/claudex2/i1/claudex-8dh9rz43/result.json (session 01a0ef98-5e49-72e2-a11e-5a47aa1b7caa, 117 s). Runner status **failed**: "Code changed during inspection". Another session added files under docs/validation/job-reviews/ during the run, so this run is not an approval. Its findings were still reviewed on their merits.
- Verdict returned: REVISE.
  - ET-003 (medium): on Wilder/E3, ?view=roles&role=x showed the roles list, but the plan requires the story. **Accepted, fixed**: parseExplore sends a role URL on an example without addressable roles to the story. Plain ?view=roles keeps the list. Unit and e2e tests now check the story heading and active nav on load and on reload.
  - ET-004 (medium): the shared Pathways intro said "not a requirement", but E3 shows a stated employer requirement and Wilder an unresearched direction. **Accepted, fixed**: non-enriched examples get intro copy that describes mixed card types; enriched program records keep the program disclaimer. Test added.
- Proof rerun: lint clean, typecheck pass, unit 48/48, e2e 125 passed / 3 skipped.

## Inspection 2 (fresh Codex session, gpt-6-astra requested, effort medium)
- Result: /private/tmp/claude-501/-Users-damianmatheson-Desktop-Claude-Code-CitC/dfabf5e2-4457-4f19-82a4-d90921a2d695/scratchpad/claudex2/i2/claudex-68sryumx/result.json (session 01a0ef9c-12ae-7140-a15a-64ec79a6c1fe, 114 s). Verdict: **APPROVED**, no findings. Observed model: not reported.
- Runner status: **failed**, "Code changed during inspection". The host compared every file in the runner's snapshot with the disk after the run. The only change was docs/validation/job-reviews/all-examples/2026-09-29-baseline/evidence/manifest.json, which another session writes and which is not part of this build. All 12 build, test and log files were unchanged, so the approval matches the code on disk. The runner still reports failed, and this is recorded as-is, not relabelled.
- Inspector limitations: static review only; the research files outside the manifest are not covered; runtime accessibility and responsive rendering are verified only by the host's e2e and visual checks.
- Budget: plan rounds 2/3, inspections 2/2. No commit, push or deploy.
- Follow-up: with its dev server stopped, the library session ran `npm run test:privacy-dev` on the final code: "OK: typed topic was not logged or written to disk by the dev server." The writes to docs/validation/job-reviews/** did not come from the library session; their source is unknown.
