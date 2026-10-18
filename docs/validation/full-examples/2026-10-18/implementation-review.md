# Local implementation review — 18 October 2026

**The 14 approved drafts are now integrated locally with 28 illustrations. Review the illustrated site before any commit, push or deployment.** The immutable draft packet remains the record of the copy originally reviewed; this report and `implementation-approval.json` record the later implementation authorization.

[Open the local Connections library](http://localhost:3311/connections). The company, role, challenge and course views all derive from the same new records.

## Net difference

| Measure | Before | Local review build |
|---|---:|---:|
| Classroom examples | 32 | 46 |
| New organization profiles | — | 14 |
| New editorial / teaching illustrations | — | 28 |
| Role connections in this batch | — | 39 |
| Learning pathway connections in this batch | — | 31 |
| New verified vacancy cards | — | 0 |

The 39 role connections use 17 distinct role profiles, including nine newly added profiles and eight existing ones. Thirteen new shared pathway records supply the 31 connections. Existing general profiles were reused to keep role browsing coherent. Nine new role-search title mappings support the newer Calgary job-search links; those searches do not establish vacancies at a featured company.

## Layout compatibility

Inspected the latest layout at `3aa6c1e` before edits, including a rendered existing example. These additions use the current lesson rail, mobile Contents navigation, one-page view, full-screen classroom presentation, company/role directories and reserved image geometry. No shared components or CSS changed. The editorial directory maps now classify all 14 challenges and nine new roles, with a Health and patient care work group for sonography. Six projector evidence labels were shortened after overflow checks; full evidence wording remains in the example role descriptions and sources.

Each new example includes the question and work context, four teaching steps, an activity and discussion, company profile, detailed role links, pathways, source trail and qualified curriculum connection. All artwork follows the approved graphic-novel / limited-colour screenprint direction, with live explanations, alt text, separate provenance and the existing 680px image maximum. Official logos are separate from generated artwork. Eight verified homepage references were added so organization links open official company sites; the 70 research references remain intact.

## Review the examples

| Company | Local example |
|---|---|
| Standen’s (IMT) | [Why can a steel spring bend repeatedly without staying bent?](http://localhost:3311/examples/standens) |
| OPIsystems (OPI) | [How can you spot a grain bin starting to spoil before the damage is visible?](http://localhost:3311/examples/opisystems) |
| NanoTess | [How would you test whether a material changes a chemical process?](http://localhost:3311/examples/nanotess) |
| Global Power Technologies | [How can a temperature difference produce electricity without a spinning turbine?](http://localhost:3311/examples/global-power-technologies) |
| Hifi Engineering | [How can a long fibre help locate a disturbance along a pipeline?](http://localhost:3311/examples/hifi-engineering) |
| BURNCO | [How do you make a concrete batch suitable for the job it has to do?](http://localhost:3311/examples/burnco) |
| EFW Radiology | [How can an echo help make a picture of something inside the body?](http://localhost:3311/examples/efw-radiology) |
| Alberta Boot Company | [How do material and shape choices change the way a boot performs?](http://localhost:3311/examples/alberta-boot-company) |
| FFA Consultants in Acoustics and Noise Control | [Why is speech clear in one room and hard to understand in another?](http://localhost:3311/examples/ffa-acoustics) |
| ENMAX | [Why use the heat left over from making electricity to make more electricity?](http://localhost:3311/examples/enmax-shepard) |
| MOBILTEX | [How can electrical measurements show whether buried steel is protected from corrosion?](http://localhost:3311/examples/mobiltex) |
| ICE Western | [How can a building bring fresh air in without losing all its heat?](http://localhost:3311/examples/ice-western) |
| Congebec | [How do you keep food cold while moving it through a busy warehouse?](http://localhost:3311/examples/congebec) |
| Fluid Energy (Dorf Ketal) | [How can changing an acid formulation change how it performs?](http://localhost:3311/examples/fluid-energy) |

## Evidence boundaries retained

- No current vacancies were verified for these 14 in the approved research pass. Related occupations and search titles remain distinct from an employer's staff roster or a live posting.
- NanoTess's general catalysis model does not establish clinical efficacy. EFW's diagram is a simplified pulse-echo illustration, not diagnostic advice or patient data.
- ICE Western uses a historical catalogue for the general heat-recovery relationship. Current product configuration is not claimed.
- Congebec uses its listed existing Calgary facility, not the proposed expansion. BURNCO and OPI retain the verified level of local connection without inventing a named production site.
- Classroom numerical activities and plots are illustrative, not company measurements. Alberta curriculum connections remain sourced editorial applications, with extensions identified.
- The six held candidates remain unchanged and absent from this batch.

## Validation

**Validation passed:** 194 unit tests, lint, typecheck, production build and whitespace checks. The initial full browser suite passed 407 checks with 49 intentional skips; its 18 failures identified the six projector captions and changed-content test assumptions described above. After repairs, all 185 checks in the focused production rerun passed (five intentional skips), covering all 46 examples on desktop/phone plus directory, accessibility and return-link checks. Eight official homepage references were then added, followed by another unit run, final build/typecheck/lint and a rendered NanoTess website-link check. Exact results are recorded in `implementation-validation.json`. Desktop screenshots cover Standen's, EFW, Alberta Boot and ICE Western; EFW also has a phone capture, and NanoTess has a corrected projector capture in `browser-qa/`.

Artwork prompts, revisions, official logo sources and final WebP hashes are in `design/example-expansion-2026-10-18/`. Nine artwork revisions clarified anatomy, energy/signal direction, generic equipment and Western bootmaking before local review.

## Cost and release boundary

No Looot or direct Apify calls were made during implementation. The research ledger remains US$0.035 settled of the US$10 weekly cap, with no outstanding reservation. Illustration generation used the built-in image tool; it is not charged to the Looot research ledger, and the tool did not return a dollar charge.

No commit, push or deployment was performed. The next decision is approval or revision of this local illustrated build.
