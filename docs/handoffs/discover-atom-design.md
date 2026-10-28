---
artifact_contract: "ce-handoff/v1"
created_at: "2026-10-25T12:14:00.878404+00:00"
title: "Discover Atom Matrix: design refinement before Wi-Fi"
summary: "Working USB shake-to-discover integration with real cards, adjustable effort, verified classroom flow, and remaining design decisions."
keywords: ["citc", "discover", "atom-matrix", "shake", "design", "usb", "handoff"]
cwd: "/Users/damianmatheson/Desktop/Claude Code/CitC"
resume_focus: "Refine the existing Discover shake experience with the user before implementing Wi-Fi."
repository: "CitC"
repo_root_sha: "e19fc307adae7afa62d86e3c2c993eceeaffb84b"
branch: "main"
head: "0d6882b39e684ce9b7029aaaf6ab732acbb386b8"
worktree_path: "/Users/damianmatheson/Desktop/Claude Code/CitC"
---

# Discover + Atom Matrix — design handoff

## Why this handoff exists

The user has tested a physical M5Stack Atom Matrix, successfully connected it to a browser over USB, and approved the integrated experience as “pretty solid.” Their latest request is to take this work to another agent to flesh out the design and make “a couple tweaks” before building the Wi-Fi piece.

**Those specific tweaks have not been described yet.** The next conversation needs the user's actual feedback; the design opportunities below are this agent's observations, not a list of changes the user has requested or approved. Current scope is design refinement of the working USB experience. Wi-Fi is deferred.

## User intent and decisions from this conversation

- Classroom setting: a teacher projects Discover while a student shakes a handheld object containing the Atom Matrix. The whole class watches progress together.
- Magic 8 Ball was the original inspiration: a physical ritual, anticipation, and a surprising result.
- The selected direction is a **shuffling deck plus a filling progress meter**, with encouragement and a small confetti burst when full.
- A normal round should require about **10 seconds of sustained shaking**. Stronger shaking may complete it somewhat faster, with a cap. It must have a definite finish rather than letting students shuffle indefinitely.
- Pausing holds earned progress. Filling the meter completes the selection. This superseded an earlier idea of stopping after three seconds without movement.
- A completed round lands on a mystery occupation illustration. The class guesses; the teacher separately reveals the job and controls the next round.
- The initial test was too sensitive: light finger movement could fill it. The user wants deliberate movement that gets students more physically engaged.
- The user liked the first standalone test page's design direction. Their latest approval is of the integrated version overall; there has been no detailed visual sign-off or specification of the remaining tweaks.

## Current status

**Working and user-tested:** USB hardware, motion-responsive LEDs, browser connection, initial shake meter. The latest integrated Discover experience was shown and the user described it as pretty solid.

**Implemented and automatically verified:** actual Discover card integration; subject filtering; unseen-role selection; progress accumulation; pause/reconnect handling; adjustable effort; confetti; Guess then Reveal; reduced-motion handling; shorter-screen layout.

**Not started:** Wi-Fi setup/provisioning, wireless classroom pairing, network relay, wireless power/enclosure implementation. No deployment, commit, push, or PR was performed in this session.

The device LEDs currently indicate **movement intensity**, not accumulated round progress. The projected meter is the accumulated progress indicator. Synchronizing those two was discussed as an appealing possibility but is not implemented.

## Repository and fragile local state

Machine-local repository: `/Users/damianmatheson/Desktop/Claude Code/CitC`.
Captured branch: `main`; captured HEAD is in the frontmatter.

**This work is uncommitted, and several essential files are untracked. A fresh checkout of HEAD will not contain the implementation.** The repository also had extensive unrelated pre-existing content, image, and validation changes. Those were preserved. The handoff is an orientation document, not a backup of those files; reviewing the live working tree matters.

Session-owned tracked edits:

- `src/app/discover/DiscoverStage.tsx`
- `src/app/discover/discover.module.css`
- `src/app/discover/page.tsx`

Session-owned new/untracked files, all machine-local beneath the repository root:

- `/Users/damianmatheson/Desktop/Claude Code/CitC/src/app/discover/ShakeRound.tsx`
- `/Users/damianmatheson/Desktop/Claude Code/CitC/src/app/discover/useAtomSerial.ts`
- `/Users/damianmatheson/Desktop/Claude Code/CitC/src/lib/discover-shake.ts`
- `/Users/damianmatheson/Desktop/Claude Code/CitC/tests/unit/discover-shake.test.ts`
- `/Users/damianmatheson/Desktop/Claude Code/CitC/tests/e2e/discover-shake.spec.ts`
- `/Users/damianmatheson/Desktop/Claude Code/CitC/hardware/atom-matrix/README.md`
- `/Users/damianmatheson/Desktop/Claude Code/CitC/hardware/atom-matrix/AtomMatrixMotionTest/AtomMatrixMotionTest.ino`

## Where to orient in the implementation

Repository-relative references below resolve against the machine-local root above.

| Reference | What matters |
| --- | --- |
| `AGENTS.md` | Active project rules. Read the relevant bundled Next.js guide before code changes. Approved editorial art is graphic-novel / limited-colour screenprint; preserve title concealment, accurate source boundaries, stable Discover numbers. |
| `src/app/discover/page.tsx` | Builds the real Discover cards and initializes shake mode from `?play=shake`. |
| `src/app/discover/DiscoverStage.tsx:66` | Existing URL/state saving, now retaining `play=shake`. |
| `src/app/discover/DiscoverStage.tsx:78` | Starting a round reuses the existing shuffled unseen-role order. Shake mode enters a separate `shaking` phase. |
| `src/app/discover/DiscoverStage.tsx:118` | `finishShake` selects the first ID in that shuffled order, records it as found, lands at Guess (`step=0`), and celebrates. Movement changes pace, not draw weighting. |
| `src/app/discover/DiscoverStage.tsx:279` | Random/shake controls, connection status and effort selector. Existing guess/reveal/topic navigation remains in this component. |
| `src/app/discover/discover.module.css:134` | New shake UI styles. At line 175, a shorter-screen rule puts deck and meter beside each other for classroom projection. |
| `src/lib/discover.ts` | Existing subject filtering, permanent card-number URLs, round order and exhausted-set behavior. |
| `src/lib/discover-cards.ts` | Authoritative assembly of illustration, occupation, example, evidence, pathways and related saved jobs. Do not hardcode a separate card dataset. |
| `src/styles/globals.css`, `src/app/layout.tsx` | Existing shared visual tokens, local IBM Plex fonts, site header/footer and layout context. |

New/untracked file roles:

- `ShakeRound.tsx`: progress screen, encouragement, deck movement and completion. The animated deck currently uses **the first two subject-filtered illustrations as decorative backs plus a question-mark front**. It does not cycle through every actual candidate. Selection itself is real and uses the existing shuffled unseen list.
- `useAtomSerial.ts`: browser Web Serial connection/read loop, line decoding, status, disconnect and cleanup. No server relay or external data service.
- `discover-shake.ts`: parser and pure progress logic; the effort thresholds and timing behavior live here.
- `hardware/atom-matrix/README.md`: firmware setup, connection procedure, initial sensitivity settings and known USB-only limits.

## Running it on this Mac

Live local preview: `http://127.0.0.1:3310/discover?play=shake`.
A production-mode Next.js preview was listening on port 3310 at capture time. It serves the last build; source changes need a rebuild/restart, or a separate development server. A running process is temporary local state, not a hosted deployment.

Typical local commands, for reference rather than automatic execution:

```sh
npm run build
npm run start -- -p 3310 -H 127.0.0.1
```

Or use a free development port, e.g. `npm run dev -- -p 3311 -H 127.0.0.1`. Different origins/ports need their own serial permission. Check for an existing server before starting another; avoid simultaneous builds into the same `.next` directory.

To use the hardware:

1. Plug the Atom into the Mac with the working USB-C data cable.
2. Open integrated Discover in desktop Chrome or Edge.
3. Choose **Shake to discover**, then **Connect Atom**.
4. Choose the M5Stack USB serial device in the browser picker. On this Mac it appeared as `M5stack (cu.usbserial-75521E3E38)`; the port name can change elsewhere.
5. Choose a subject and effort level, then **Start shake round**.
6. Shake until full, guess the job, then use **Reveal the job**. The teacher starts each subsequent round.

One serial connection can own the device at a time. Disconnect it from other tabs and close Arduino Serial Monitor before reconnecting or uploading firmware. The original standalone test at port 8873 was disconnected when the integrated page took over. Its machine-local source at `/Users/damianmatheson/Documents/Arduino/AtomBrowserTest/index.html` is historical; it has placeholder cards and the old sensitive threshold. It is not the source to refine now.

At the end of implementation, integrated Discover had a real USB connection and an armed round on Active. Recheck that state rather than assuming a future session inherits it.

## Hardware and sensitivity details

- Hardware: original M5Stack Atom Matrix, ESP32-PICO-D4, MPU6886 motion sensor, 5×5 RGB LEDs, programmable button. External USB power is currently required.
- Arduino IDE 2.3.10 was installed at `/Applications/Arduino IDE.app`.
- Installed board package: M5Stack 3.3.10, board **M5Atom** (`m5stack:esp32:m5stack_atom`).
- Installed libraries: M5Unified 0.2.28, M5GFX 0.2.35, Adafruit NeoPixel 1.15.5.
- Firmware source also exists machine-locally at `/Users/damianmatheson/Documents/Arduino/AtomMatrixMotionTest/AtomMatrixMotionTest.ino`; the repo copy matches the uploaded test.
- USB data is 115200 baud. The default 1500000 upload speed failed during setup; uploading at **115200** succeeded with verified data.
- Low LED brightness is explicitly set to 20. Keep appropriate brightness limits during any hardware edits.
- Firmware sends `imu=ok accel=x,y,z motion=n` about every **500ms**. The browser polls the latest reading every 50ms; actual new data is still only about 2 Hz.
- `motion` is a short decaying peak envelope of acceleration magnitude after subtracting gravity/noise. It cannot establish whole-body activity or exact shaking speed. A UI animation change cannot improve that sensor reporting cadence by itself.

Current teacher effort presets (agent implementation in response to sensitivity feedback):

| Preset | Threshold | Purpose |
| --- | --- | --- |
| Gentle | 0.25 g | Lighter movement option |
| Active — default | 0.65 g | Deliberate shaking; rejects the low-amplitude movements that filled the old test |
| Firm | 1.0 g | Higher movement requirement |

Progress requires consecutive qualifying samples over at least 250ms. With the current 500ms firmware cadence, two qualifying readings are needed. Duplicate/invalid readings and gaps over 850ms earn no progress. Each update credits at most 600ms, at a capped rate of 8–14 percentage points/second. Sustained motion around 1 g finishes in roughly ten seconds; high readings still need about seven seconds.

Pauses, hidden tabs, stale data and disconnects hold earned progress. Reconnect or effort changes require a fresh sequence. On completion the shake component unmounts and further movement cannot advance/reselect the card. These settings are a starting point; the exact perceived effort still needs the user's feedback and a real enclosed-device trial.

## Design topics to discuss, not approved new requirements

The user said they have a couple tweaks; ask what those are before interpreting this list as the brief.

Possible areas to inspect together:

- The shuffling feel: current front-card wobble versus more convincing deck movement, with meaningful intensity feedback.
- Meter composition, encouragement, and the satisfying transition from full meter to the actual mystery illustration.
- Whether confetti should visibly originate at the meter's top. The current confetti originates across the viewport at about 65% height; it is not anchored to the meter, while the user originally described confetti coming out of the top of the bar.
- Teacher setup controls versus the student-facing projection: connection, subject, effort, next round, full screen and disconnect feedback.
- Whether the meter should stay horizontal or become vertical. The user described reaching a minimum height/the top, but explicitly choosing a vertical meter never occurred; the working implementation is horizontal.
- Active versus Firm feel, legibility at projector distance, and the quieter reduced-motion presentation.

The current task does not require new editorial illustration generation. Existing card artwork and guessing/reveal boundaries should remain intact through visual refinement.

## Verification and evidence

Verified on this implementation:

- Production build and TypeScript checking passed.
- Targeted ESLint and `git diff --check` passed.
- 16 unit tests passed across Discover behavior and the new shake parser/progress logic.
- 22 targeted desktop browser tests passed; 1 phone-only test was intentionally skipped by the desktop project. Coverage includes the four new shake tests plus relevant existing Discover behavior.
- New shake tests cover light movement rejection, actual subject-filtered unseen-card selection, title concealment, separate reveal, next-round reset/cancel, disconnect/reconnect, reduced motion, and 1280×720 meter visibility.
- Browser tests simulate serial readings to exercise the real read loop/state transitions. Hardware connection and valid sensor data were also verified in Chrome; automated tests do not substitute for a student's physical effort trial.

Useful test command that avoids the unrelated exhaustive every-card/every-topic sweep:

```sh
npm run test -- tests/unit/discover-shake.test.ts tests/unit/discover.test.ts
npx playwright test tests/e2e/discover-shake.spec.ts tests/e2e/discover.spec.ts --project=desktop --workers=3 --grep-invert 'all .* content states'
```

That Playwright configuration builds the application and starts its own server on port 3200. Do not rebuild the shared output while a live production preview is serving it without planning to restart that preview.

The initial broader test invocation included the exhaustive content sweeps and was stopped; it is not a full-suite success. No full phone-project run or physical classroom test was completed here.

Machine-local visual evidence:
`/Users/damianmatheson/Desktop/Claude Code/CitC/output/atom-matrix/discover-shake-projector.png`
shows the shorter-screen design with simulated progress, not a captured physical shake.

## Suggested next conversation

The natural continuation is to open the existing integrated experience and hear the user's specific tweaks, then refine those states while preserving the working USB/card flow. Recheck the small set of affected transitions and projector layout after edits. Wi-Fi can follow once the user is satisfied with the interaction and design.

This handoff records session context and evidence. It does not independently authorize deployment, publication, messaging another agent, firmware changes, or starting the deferred Wi-Fi work.
