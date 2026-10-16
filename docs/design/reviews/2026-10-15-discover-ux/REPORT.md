⚠️ DEGRADED: single-context (repository instructions require sequential review in the main thread). This is a single-reviewer assessment, not student or teacher usability research.

> Follow-up: see [implementation and verification](IMPLEMENTATION.md) for the subsequently authorized fixes. This report records the original review.

# Discover: UX review and repository consolidation

15 October 2026 · Discussion handoff · No Discover UI implementation

## Main recommendation

Keep Discover’s **teacher-led guessing and reveal activity**. Its purpose is different from the Examples pages: students watch a shared screen while the teacher controls the pace. A staged presentation is appropriate here. Do not automatically transfer the previous report’s expanded-sidebar recommendation to this feature.

The strongest improvements are to make the answer unambiguous, stop interface elements covering it, adapt the presentation to the available screen, and preserve the meaning of the underlying evidence. The artwork and the basic activity are worth retaining.

The user’s two observations are supported:

- The concealment bar changes height between cards because each asset has its own `titleBandPct` value, ranging from **22% to 27%**. This is deliberate per-image masking, but it produces an inconsistent visible composition.
- The reveal presents different naming levels as though they were interchangeable. For example, the illustration says **Process Engineer**, the large right-hand heading says **Process engineering**, and a later job example is **Intermediate Process Engineer**. The persistent **SAVED** badge also overlays part of the image title.

The large right-hand title is technically an `h2`, with a visually hidden “Discover” `h1`. The problem is its visual prominence and meaning, not which heading tag it uses.

## Repository consolidation completed

The separate `CitC-discover` folder was already a linked Git worktree of CitC, not an independent repository needing a file-copy merge.

| Check | Result |
| --- | --- |
| Discover branch | `feat/discover`, at `46784fd` |
| Main branch reviewed | `99001ea`, two commits ahead of the Discover worktree |
| Ancestry | `feat/discover` is an ancestor of `main`; zero Discover-only commits |
| Old worktree status | Clean; no tracked edits or non-ignored untracked files |
| Ignored contents | Dependencies, Next build/cache files, generated TypeScript files, and test output |
| Active servers | Main CitC server on 3100; separate example-option work on 3240; no process found with its working directory in the old Discover checkout |

Actions taken under the request to safely combine the work:

1. Kept `CitC` as the canonical development location for both Examples and `/discover`.
2. Moved the complete old checkout, including ignored files, with Git’s worktree move operation to `/Users/damianmatheson/Desktop/Claude Code/.archives/CitC-discover-2026-10-15`.
3. Retained the `feat/discover` branch and verified that the relocated worktree remained clean.
4. Removed the obsolete `citc-discover-dev` launcher pointing at the old folder. Use the existing `citc-dev` server for both features.
5. Added the canonical location and archive note to README and the historical Discover build plan.

No application source was overwritten, no branch was deleted, and no commit, push, or deployment was made. The unrelated `CitC-option-d` worktree and existing local changes were left alone. The archive can be moved back with `git worktree move` if needed; it should not be used as the current source of truth. Existing external bookmarks to the old filesystem path will need to use CitC instead.

Validation: launch JSON parses; Git reports the expected worktrees and ancestry; **all nine Discover unit tests passed** in the main repository. No full build or full end-to-end suite was necessary for the documentation/launcher changes.

## Review scope and limits

Reviewed the current local main app at `http://localhost:3100/discover`, using the built-in browser and source inspection. This is not a verification of a public deployment. The existing main server was reused and left running.

Coverage included:

- Start, stop, guessing, all six reveal steps, subject selection, and keyboard Space/R/S controls.
- Two successive Chemistry rounds, which selected different roles as expected.
- Navigation into an example role and browser Back, which restored the same Discover role and step.
- All **54 desktop reveal states**: nine roles × six content steps, at 1440 × 900. A DOM geometry check found no step content extending below its enclosing panel or into the controls at that size. This is a bounded fit check, not a complete visual audit of all states.
- Visual inspection of representative short and long headings, title masks, the real-posting view, and a qualification-heavy pathway.
- Phone layout at 390 × 844 and portrait-tablet layout at 768 × 1024.
- Source inspection of data selection, title masks, loading/error behavior, motion preference handling, URL state, and tests.

Did not test actual classroom projection, comprehension with students, slow networks, forced image failures, every responsive state, 200% browser zoom, or a full screen-reader journey. Employer facts, admissions details, and vacancy status were read as displayed content; they were not independently re-researched. No form submissions or external communications occurred.

Evidence files and raw desktop measurements are stored alongside this report. Screenshots capture the existing interface; they are not proposed designs.

## What already works

**The activity is understandable and has a useful social structure.** “Look for the tools, where they are, what they are checking” gives students a basis for discussing a picture. Asking for three guesses gives the teacher an immediate facilitation cue. Keep that connection between visual evidence and conversation.

**The progression is controllable.** Space worked for start and stop; R started another round; S toggled the slower pace. Direct step buttons allow skipping around. The broad sequence—guess, reveal, work, purpose, people, preparation, further exploration—has a sensible educational progression. It does not require every detail to appear at once.

**The underlying content has useful safeguards.** Posting dates, employer locations, historical-posting status, and pathway entry qualifications appear in inspected states. The DVM route explicitly says it is not direct entry from high school. The “one possible direction” wording helps. Improvements should preserve these distinctions, not remove them to simplify the visual composition.

**The visual identity has character.** The graphic-novel scenes provide a stronger point of interest than generic career icons. Green, ivory, and the existing typography can remain. The main issues are semantics, placement, and responsive behavior rather than the need for a visual rebrand.

## Priority findings

### P1 — The answer has three competing names

**Observed:** “Reveal the job” leads to a screen labeled “Job,” where the most prominent live heading is a broad work area. The image contains a more concrete occupational title. The final “Deeper” step introduces a third, exact employer-posting title. None of this is inherently wrong data; the relationships are insufficiently explained.

The art’s design notes explicitly say its labels are shorter representative roles, while role profiles describe broader work areas. That distinction was not carried into the reveal hierarchy.

| Illustrated title | Current prominent heading | Actual posting shown later, where available |
| --- | --- | --- |
| Atmospheric Scientist | Atmospheric science and remote sensing | Remote Emissions Scientist |
| Satellite Instrument Engineer | Satellite and instrument engineering | Senior Instrument Scientist, Calibration Testing |
| Conservation Scientist | Conservation research and population ecology | Environmental Technician |
| Process Engineer | Process engineering | Intermediate Process Engineer |
| Plant Operator | Process and plant operations | Shift Operator |
| Partnerships Manager | Business development and partnerships | Business Development Manager (Government) |

**Why it matters:** Students can reasonably read the largest answer as the job’s name. “Software and data” is not the same kind of label as “Software Developer.” The mismatch also makes a correct student guess appear less clearly connected to the reveal. These are plausible comprehension effects; student confusion was not measured.

**Recommendation:** Define three explicit levels in the content model and display:

- **Representative occupation:** the student-facing answer, such as “Process Engineer.”
- **Broader work area:** secondary context, such as “Part of process engineering.”
- **Real posting:** the exact sourced title, employer, location, date/status, and its relationship to the representative occupation.

Use one dominant answer on the initial reveal. When showing a real posting, make its exact title the dominant item in that section and keep the broader context secondary. Do not globally rename the shared role profiles merely to match the artwork: the broader explanations cover more than one occupation. Each representative title and its relationship to the content needs editorial validation; the generated image is not evidence of a company’s actual job title.

### P1 — Tablet scaling undermines reading and touch interaction

**Observed:** At 768 × 1024 the interface still uses the desktop 1280 × 720 canvas and scales it by **0.6**. A nominal 20px paragraph therefore appears at approximately **12px**. A nominal 52px primary button measured **31.2px** high on screen. Much of the portrait viewport is unused above and below the small stage. The flowing phone layout begins only below 760px.

**Why it matters:** The screen is not short of vertical space, yet both text and controls are reduced to preserve the desktop composition. A teacher previewing on a tablet gets a materially worse reading experience than on a narrower phone. This would be missed by checking computed font size alone because CSS still reports 20px before transformation.

**Recommendation:** Base the choice between presentation and flowing layout on available space and minimum readable rendered sizes, not just a single width threshold. A portrait tablet should reflow into a usable arrangement. Preserve a composed landscape stage for projection when it actually fits. Do not fix this by shrinking the typography further or forcing device rotation.

Evidence: [tablet stage at 768 × 1024](08-tablet-scaled-stage.png).

### P1 — Mobile step navigation can change content above the reader’s position

**Observed:** On a phone, the repeated image and example link precede the answer panel. For Partnerships, the role heading began around y=748, step content at y=826, and step navigation at y=1,370. Clicking Work from the lower navigation left the role heading above the viewport. Clicking “Why it matters” then retained scroll around y=826.5: the new step began at the top edge underneath the fixed site header, with its heading above the visible area. Focus moved to the next action rather than introducing the changed content.

**Why it matters:** The teacher can advance successfully without seeing the new section’s heading or opening text. This is an orientation problem, not simply “mobile requires scrolling.” The repeated portrait also consumes much of the initial viewport before the answer.

**Recommendation:** On narrow screens, make deliberate step changes land on and announce the new step heading below the sticky header. Keep title/context compact, with the illustration available without repeatedly displacing the content. Test whether a compact image, expandable artwork, or a shared image area works best. Do not apply automatic scrolling to every unrelated state update. Preserve a comfortable path to Back and the step list.

Evidence: [mobile entry](06-mobile-reveal-top.png) and [after advancing](07-mobile-next-content-above.png). No horizontal overflow was observed in the measured phone state.

### P1 — Evidence distinctions weaken when the source content is compressed into Discover

**Observed:** The persistent top line names the featured organization. In the “Deeper” screen, the job can belong to another employer: for example, **Wilder Institute** remains at the top while the posting is **Environmental Technician at Enmas**. Satellite engineering pairs a GHGSat context with a Muon Space posting. The employer is visible, but the explicit relationship explanation is omitted.

The source records contain employer notes, role limitations, levels, and other qualifications that are not all rendered by Discover. Work tasks are general explanations, but the Work screen does not carry the example page’s explicit “typical of this kind of work” distinction. The Why screen shows an organization-role evidence label below organization-level claims; it does not provide claim-specific citations there.

**Why it matters:** A projection invites quick inference. Students may combine the artwork, persistent organization name, generalized tasks, and a real posting into a single purported employee/job. A small change in wording can prevent that without filling the slide with provenance text.

**Recommendation:** Label the actual relationship directly: “Related posting at another employer” where applicable, with a concise explanation of why it belongs. Preserve seniority and relevant qualification limitations. Distinguish general work descriptions from documented company-specific work. Give the teacher a clear evidence/source route; retain essential qualifications on the student-facing panel. Do not add disclaimer strips over or below the artwork.

Evidence: [Wilder context with Enmas posting](09-related-employer.png). This is a presentation finding, not a claim that the underlying posting is invalid.

### P2 — Image masking and the SAVED badge compete with the reveal

**Observed:** Every title cover uses a different metadata percentage. Values are 25, 27, 26, 26, 27, 25, 22, 24, and 26 across the nine roles. The original assets bake their own title bands into the pictures, so a perfectly equal overlay would not automatically fit them correctly. No title leak was observed in the representative masks inspected.

After reveal the cover slides away, but the SAVED badge remains in the image’s upper-right title area. In the Process Engineer capture with elapsed time, it visibly covers part of the printed title. The same badge persists on later content steps even though the freezing action is over.

**Recommendation now, if implementation is later authorized:** Move the confirmation outside the title/artwork area or dismiss it after the freeze moment. Consider “Paused” or “Selected” rather than “Saved”: the implementation preserves round state in the URL, but it does not create a screenshot download or account bookmark. The elapsed timer does not currently support a clear educational goal; remove it unless timing is intentional.

**Recommendation for the asset system:** Separate the live, accessible title from the artwork in a standardized layout. This permits consistent masking/reveal without per-image percentages. Preserve the scene, full composition, and approved graphic-novel style. Do not crop off different amounts of meaningful work imagery merely to make the cover heights identical.

| Option | Advantage | Cost or limitation |
| --- | --- | --- |
| Keep per-image masks; move the badge | Smallest correction, preserves every current asset | Different bar heights and competing title sources remain |
| Standardize an external live-title region, retain current images temporarily | Consistent dominant label and better semantics | Existing baked-in titles still need careful treatment |
| Produce title-free artwork variants and use live titles throughout | Clean long-term separation of content and artwork | Requires nine reviewed asset variants; do not regenerate good artwork wholesale without need |

The strongest immediate change is the badge/title hierarchy. Equalizing all mask percentages alone is not a complete solution.

Evidence: [frozen card](01-guess-desktop.png), [settled reveal](02-process-reveal-desktop.png), [satellite mask](mask-02.png), [operator mask](mask-08.png), [partnerships mask](mask-09.png).

## Other improvements worth considering

### The learning sequence needs clearer labels and less repetition

“Job,” “Why,” and “Deeper” are brief but ambiguous. Team also contains the classroom connection and curriculum-fit status, so the teacher has to know to look there. The initial Job screen’s “Class question” is the organization’s broad example question, not a tailored follow-up to the student’s guess. Why repeats much of the same organization text when different roles from one organization appear in successive rounds.

Possible labels to test: **Guess → Reveal → What they do → Why it matters → People and school subjects → Ways in → Real job example**. These are discussion candidates, not approved copy. They are too long to simply insert into the existing bottom row without redesigning it.

Give each stage a clear student-facing question or takeaway. A round might end after the reveal and three work tasks, with pathways and postings available as optional extensions. Keep direct step access and avoid making every round a mandatory seven-stage lecture. There is already a keyboard shortcut for another round; the equivalent visible action could be easier to find before the last step.

The counter increments when an image is stopped, before students have explored it. “Found” therefore measures selections, not learning or completion. Do not present it as educational progress without changing its meaning.

### “A route” is chosen by file order, not an editorial decision

The first pathway associated with a role becomes the only route shown. Both Conservation Scientist and Animal Care Technician currently show Zoology first. The example contains other relevant routes, but Discover does not explain why this one was selected. Similarly, the first matching posting is used; it is not necessarily the newest, nearest, most representative, or most appropriate for a student.

“One possible direction” is useful and should remain. Add an explicit curation rule or a small choice between relevant routes where justified; avoid automatically preferring degrees because of array order. Preserve the DVM prerequisites and the distinct meanings of technician, technologist, engineer, and veterinarian. The existing content already cautions about these differences; better layout must not flatten them.

The DVM panel says “See the linked admissions requirements,” but that panel has no direct admissions link. “Explore the route” later leads to the example’s general pathways section rather than the exact official program. Align the promise of the link with its destination.

### Guessing needs equivalent clues for nonvisual use

All hidden-answer images use the same alt text: “A person at work. Who could it be?” This avoids revealing the answer but supplies none of the visual clues available to sighted students. When revealed, the moving cover’s text still appears in the browser accessibility tree, even though it is visually off the image.

Provide authored, answer-safe descriptions of tools, actions, and setting, and hide the obsolete cover text from assistive technology after reveal. Verify the flow with a screen reader. This review inspected the accessibility tree; it did not constitute a complete assistive-technology test.

### Motion and fallback behavior should offer an equivalent activity

The source cycles every 200ms, or 500ms with Slower enabled. Reduced-motion preference selects the slower rate and disables CSS transitions; it still cycles pictures automatically. Consider a **single random draw** or manual-next option for people who do not want cycling. Do not assume slowing the interval alone satisfies every motion preference. No flash-threshold safety assessment was performed here.

Failed images are counted as finished loading and remain eligible for rounds, which prevents a permanent loading block but can leave the teacher asking the class to guess from a blank picture. This is source-observed behavior, not a forced failure tested in this review. A failed round should offer a clear retry, another image, or meaningful text clues.

All nine local JPEGs total **4,294,153 bytes**, about 4.3 MB, and the selected set is decoded before Start becomes enabled. Preloading serves a real purpose: it avoids blanks during rapid cycling. No speed problem was measured on the local server. Profile a school connection before optimizing; preserve frame readiness while considering appropriately sized assets and a usable partial-load/error path.

### Preserve shared links as the collection grows

Discover URLs encode roles as numbers derived from their position in the current role list. That prevents the URL from exposing the guess, but inserting or reordering roles can change which occupation an old link opens. Before expanding the library, use stable opaque identifiers or a permanent mapping while preserving existing links. Keep the concealment benefit without relying on array position.

Back from an example returned correctly in the tested flow. Internal step changes intentionally replace history rather than adding entries, so browser Back is not equivalent to the stage’s Back button. Preserve that useful return behavior and make any future history change deliberate.

## Direction to explore

The core design should make each reveal feel like one clear answer followed by useful exploration:

1. **Guess:** unobstructed work scene, answer-safe clues, easy freeze/reveal control.
2. **Reveal:** one concrete occupational label, concise description, broader work area clearly secondary.
3. **Explore:** optional stages that each answer a distinct question; direct access remains available.
4. **Connect:** a clearly contextualized route or actual posting, with source qualifications and a dependable return path.

Retain the landscape classroom stage where it is readable. Use a flowing layout for phone and portrait tablet. A teacher preview or manual-selection mode could be useful, but it is a hypothesis to test rather than a reason to expand scope immediately.

The smallest credible improvement is to fix naming, badge placement, tablet layout selection, and mobile step landing while retaining the activity and content sequence. Compare that against a more substantial title-free-artwork/shorter-round design before committing to an asset overhaul.

## What another reviewer should challenge

- Is the student expected to guess one specific occupation, or discuss several plausible roles? If several answers are valid, a single-answer reveal needs appropriate framing.
- Would harmonized naming and badge placement resolve most of the perceived awkwardness without replacing the artwork?
- Does a shorter core round improve discussion, or remove the career/pathway connections that make Discover worthwhile?
- Should mobile primarily support teacher preview or student self-directed use? The original brief assumes a teacher-led projected screen; this review does not silently replace that audience.
- Can essential qualifications stay concise enough for projection without being pushed out of view?
- Does the slideshow structure improve student reasoning, or merely create a reveal effect? Engagement is a hypothesis until tested.

## Suggested validation

Use the same content in both variants. Compare the current flow with the smallest corrected version before testing a larger redesign. Include at least one long work-area name, a job from another employer, a no-posting state, and a route with important prerequisites. Observe a teacher driving a shared screen and a separate phone/tablet preview task.

| Task or question | Evidence to collect | Success criterion to test |
| --- | --- | --- |
| Ask students what job was revealed | Their own wording and which label they looked at | They distinguish the representative occupation from its broader field |
| Show Wilder → Enmas or GHGSat → Muon Space | Ask who employs the person in the actual posting | Students do not infer the posting belongs to the featured organization |
| Advance two steps on a phone | Watch scroll position and first visible content | New heading and opening content appear without a manual search upward |
| Preview on a portrait tablet | Observe reading and control use | Comfortable rendered text and touch targets without rotation or zoom workarounds |
| Discuss the DVM route | Ask whether it is direct entry from high school | The qualification is understood and remains visible |
| Run a short class round | Teacher interventions, time spent reading vs discussion | Teacher can finish or extend intentionally without losing the group |
| Navigate to a job example and return | State, context, focus | Same round and selected step return reliably |
| Use a non-cycling and nonvisual version | Ability to participate using equivalent clues | The essential guessing/exploration activity remains available |

Do not use “more cards viewed” as the primary success metric. Look for accurate understanding of the occupation, what the work involves, and how the evidence connects. These are proposed checks, not results from participants.

## Technical handoff

| Owning source | Relevant responsibility |
| --- | --- |
| `src/app/discover/DiscoverStage.tsx:14` | Next-button labels |
| `src/app/discover/DiscoverStage.tsx:110` | Reduced-motion default and image readiness |
| `src/app/discover/DiscoverStage.tsx:148` | Primary-button focus after step changes |
| `src/app/discover/DiscoverStage.tsx:242` | Per-image title cover |
| `src/app/discover/DiscoverStage.tsx:246` | Persistent SAVED badge |
| `src/app/discover/DiscoverStage.tsx:256` | Broad role title as prominent heading |
| `src/app/discover/DiscoverStage.tsx:273` | What each step renders and omits |
| `src/app/discover/discover.module.css:10` | Fixed desktop canvas |
| `src/app/discover/discover.module.css:59` | Cover and adjacent badge styles |
| `src/app/discover/discover.module.css:98` | Flowing layout only below 760px |
| `src/content/discover.ts` | Image/title-band metadata |
| `src/content/roles.ts` | Broad work-area titles and general descriptions |
| `src/lib/discover.ts:24` | First-matching pathway and posting selection |
| `src/lib/discover.ts:28` | Position-derived role numbers |
| `src/content/job-examples.ts` | Actual titles, employer notes, levels, limitations and dates |
| `design/discover-role-collection-2026-10-06/README.md` | Representative image titles and art provenance |
| `docs/design/image-direction.md` | Approved art and presentation constraints |
| `tests/e2e/discover.spec.ts` | Existing interaction checks; phone font check uses untransformed CSS size |

Paths and line numbers refer to the reviewed main checkout and may move. Future implementation must read the installed Next.js guides as required by AGENTS.md. No framework changes were made in this review.

## Assessment appendix

The qualitative assessment was recorded before running the installed Impeccable detector on DiscoverStage.tsx and page.tsx. The detector returned `[]`: no source-pattern findings. No overlay was injected. A clean pattern scan does not establish correct terminology, mobile orientation, actual rendered text size, or educational value.

The interface does not primarily suffer from generic AI styling. The art gives it identity; the permanent badge, small step labels, decorative grid, and repeated large work-area heading compete with the content in particular states. Correct the observed problems before spending effort on a cosmetic overhaul.

Heuristic scores below are directional single-reviewer judgments, not a benchmark or student satisfaction measurement:

| Heuristic | Score / 4 | Basis |
| --- | ---: | --- |
| Visibility of status | 3 | Current step and round count visible; SAVED/found semantics unclear |
| Match to real-world language | 1 | Occupation, work area and posting title not clearly distinguished |
| User control and freedom | 3 | Direct steps, keyboard controls, subjects, and tested return path |
| Consistency and standards | 2 | Similar controls, but identity and responsive scale vary meaningfully |
| Error prevention | 2 | State validation exists; evidence relationships can still be misread |
| Recognition over recall | 2 | Stage controls visible; generic labels and hidden mobile heading require inference |
| Flexibility and efficiency | 3 | Shortcuts and direct steps work; visible early next-round option is weak |
| Aesthetic and minimalist design | 2 | Strong art; answer obstruction and tablet whitespace/scale issues |
| Error recovery | N/A | Failure states not browser-tested |
| Help and documentation | 2 | Good guessing prompts; limited explanation of shortcuts and content relationships |
| Applicable total | **20/36** | Significant improvement opportunities under this rubric |

Cognitive-load checklist: local chunking, grouping, and progressive disclosure are strengths. The strongest concerns are competing answer labels, hierarchy on small screens, remembering where changed mobile content begins, and the number of simultaneously visible controls. Counted as four checklist concerns, but no cognitive-load measurement was conducted. Seven small step buttons are not automatically a defect: their value as teacher controls must be weighed against their projected visual prominence.

Questions skipped as a blocking step: the user asked for a completed review before implementation. The open decisions and adversarial questions above are provided for the next discussion. No redesign is approved by this report.
