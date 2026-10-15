# Weekly job-example review — 5 October 2026

Two recommended additions and two source/status corrections. All four v1 decisions were approved by Damian Matheson on 6 October 2026. App content is unchanged.

## Net difference

Current local content has nine job cards: five for GHGSat, three for E3 and one for Wilder. Approving and later implementing these two additions would produce eleven: E3 gains a Calgary entry-level laboratory route; Wilder gains a Calgary field-technician comparison. GHGSat gains no duplicate card, but its full-stack example should be labelled historical and its backend card should use the current source after review. The earlier Canacre and KCB candidates remain pending in their original packet; they are not newly recommended here.

## Coverage and limitations

Scope resolved from src/content/examples.ts and src/content/index.ts, with detail/organization records: E3 Lithium, GHGSat and Wilder Institute. No new or removed examples. All three received a bounded featured-employer and local-gap search; no company deferred for cost or capacity. This is not exhaustive vacancy coverage.

- E3: eleven careers-list titles; the two approved PDFs are byte-identical to 29 September. Existing operator and process-engineer cards remain supported. Other listed corporate/project-management jobs were not promoted merely to fill a quota.
- Wilder: five current board entries. Existing animal-care role and 9 October deadline remain visible. Remaining current entries concern landscaping, building maintenance and food service; no strong new owl-story addition. The approaching deadline was already known, so it is not a new change alert.
- GHGSat: BambooHR lists government business development and backend Spectra. Workable lists no current openings. The full-stack URL explicitly reports no longer available; backend URL now lands on the empty board. BambooHR backend duties overlap existing copy, so deduplicate it. Government role remains listed; application entry was not rechecked this run.
- Related Calgary discovery: AGAT and Enmas passed the evidence gates. SECURE co-op lead returned HTTP 410, so it is held; search-index text is insufficient for a new recommendation. Other lab results overlap the selected AGAT route. GHGSat local search did not produce a stronger verified addition; this does not establish no local jobs exist.
- Stantec and Muon application flows were not reverified this week. Do not refresh their app check dates. Historical emissions-scientist evidence and all approved/pending copy remain intact.

## Exact proposed cards

### OCT05-E1 v1 — Laboratory Technician C - Water Lab (9/10)

**Employer:** AGAT Laboratories
**Employer Note:** A separate analytical laboratory; this is not an E3 Lithium position.
**Location:** Calgary, Alberta, Canada
**Arrangement:** Full-time; remote-work arrangement not stated.
**Level:** Entry level. Chemical degree/diploma or equivalent experience; previous laboratory experience is an asset and training is provided.
**Summary:** Prepare and test water samples to produce reliable analytical results.

**Duties:**

- Prepare samples, reagents, standards and calibration solutions.
- Use IC and ICP instruments under senior staff guidance.
- Record test results and assist with instrument calibration and maintenance.

**Skills:** Sample preparation; Analytical instruments; Quality assurance; Laboratory safety

**Classroom connection:** Editorial interpretation: separation work also needs trustworthy measurements. This adds a local technical route for testing liquids alongside the existing engineering and plant-operation examples.

**Displayed status:** Accepting applications when checked 5 Oct 2026.

**Source:** [Employer posting](https://agatlaboratories.applytojob.com/apply/lnOX39GFbP/Laboratory-Technician-C-Water-Lab). Checked and captured 5 October 2026. Employer publication date and deadline not stated.

**Status evidence:** Employer-hosted description included an empty application form and Submit Application control in the retrieved HTML. No applicant data entered or sent; submission not tested.

**Limit / integration:** No evidence of lithium testing or a relationship with E3. A laboratory role profile and story link would need to be created during a separately authorized implementation.

**Editorial score:** Shares sample analysis and reliable measurement methods. / Preparation, instruments and quality procedures are explicit. / Adds a Calgary entry-level diploma-or-equivalent technical route.

**Decision:** approved — Damian Matheson, 6 October 2026 ("approved").

### OCT05-W1 v1 — Environmental Technician (8/10)

**Employer:** Enmas
**Employer Note:** A separate environmental employer; this is not a Wilder Institute position.
**Location:** Calgary, Alberta, with travel for fieldwork.
**Arrangement:** Permanent full-time; approximately 70% fieldwork and 30% office support.
**Level:** Experience with surveys and reporting is sought, but the posting says exact experience is not required. No numeric experience minimum or specific credential is stated; professional-registration eligibility is requested.
**Summary:** Collect field evidence about wildlife and habitats to inform environmental decisions.

**Duties:**

- Perform wildlife sweeps, nest searches and targeted species surveys.
- Assess wetlands and other biological features.
- Analyze field observations and prepare technical reports and mitigation recommendations.

**Skills:** Species identification; Field data collection; Habitat assessment; Technical reporting

**Classroom connection:** Editorial interpretation: offers a Calgary comparison for observing animals and habitats outside a conservation-breeding programme.

**Displayed status:** Accepting applications when checked 5 Oct 2026.

**Source:** [Employer posting](https://www.enmas.ca/job-detail.php?id=1). Checked and captured 5 October 2026. Employer publication date and deadline not stated.

**Status evidence:** Original employer description explicitly invites applications by email. No email sent; posting publication date and deadline absent.

**Limit / integration:** Not evidence of owl head-starting or a Wilder partnership. Page heading says Environmental Technician; body says Environmental Field Technician. Do not label it a student job.

**Editorial score:** Shares wildlife observation and habitat assessment methods. / Surveys, field analysis and reports are explicit. / Adds technician-level fieldwork; some overlap with the earlier pending senior consultancy candidates.

**Decision:** approved — Damian Matheson, 6 October 2026 ("approved").

## Material corrections requiring review

### OCT05-M1 v1 — ghgsat-full-stack-developer

retain historical work example; correct vacancy status.

**Proposed displayed copy:** Closed when checked 5 Oct 2026 · historical job example

**Evidence:** The original Workable posting explicitly says this job is no longer available. [Source](https://apply.workable.com/ghgsat/j/703FE3851D/).

This establishes the source posting is unavailable, not when hiring ended or whether an equivalent role exists elsewhere. Preserve original capture and publication dates.

**Decision:** approved — Damian Matheson, 6 October 2026 ("approved").
### OCT05-M2 v1 — ghgsat-backend-developer

review current source replacement, not a new card.

**Proposed displayed copy:** Accepting applications when checked 5 Oct 2026.

**Evidence:** BambooHR description and empty application form inspected; nothing submitted. [Source](https://ghgsat.bamboohr.com/careers/205).

Same employer, title, city and strongly overlapping duties; treat as likely replacement source, not a proven identical requisition. Preserve archived Workable evidence and its old publication date separately; do not transfer that date to BambooHR. Senior title versus Mid-level sidebar is a source discrepancy; retain experienced-role framing.

**Decision:** approved — Damian Matheson, 6 October 2026 ("approved").

## Cost and review

Apify: **US$0.00 of US$1.00**, zero starts and zero outstanding reservations. Free sources supplied useful evidence. No actor pricing check was needed because no paid start was selected. No securely configured APIFY environment credential or project env file was found; the existing September packet already documents this configuration gap. It is not repeated as a new alert. Never use the old chat credential in scripts. This occurrence has its own persistent ledger; any resumption shares the same $1 cap.

Reply, for example: **Approve OCT05-E1 v1 and OCT05-W1 v1; approve OCT05-M1 v1 and OCT05-M2 v1**. Or revise/reject individually. Approval is editorial; implementation/publication is separate.

Evidence: [manifest](evidence/manifest.json), [PDF comparison](evidence/pdf-checks.json), [application checks](evidence/application-checks.json), [candidate ledger](candidates.json), [cost ledger](apify-ledger.json).

## Approval recorded — 6 October 2026

Damian approved OCT05-E1 v1, OCT05-W1 v1, OCT05-M1 v1 and OCT05-M2 v1 with the instruction “approved”. Exact proposed copy is preserved. This records editorial approval; implementation and publication have not occurred. Earlier review packets are unaffected.

## Implemented locally — 7 October 2026

User instruction: “implement them”. Both additions and both GHGSat corrections are integrated. AGAT returned HTTP 410 on recheck, so its preserved 5 October work example now displays as historical with unknown vacancy status. The approved 5 October copy/version remains unchanged in the ledger; this dated status observation supersedes its former open label. Enmas and GHGSat BambooHR application entry were rechecked. No application was submitted.

AGAT has a laboratory-analysis role, clearly identified as related work at another employer. It is excluded from E3’s company team and the Discover collection of featured-organization roles. The existing SAIT pathway is linked using its previously captured Analytical Instrumentation and QA/QC course evidence. Internal implementation guidance from AGAT’s limitation is not displayed in the application. No new employer affiliation is asserted.

App collection: eleven job examples. No deployment or publication.

Validation: 81 unit tests and 8 desktop/phone browser tests passed. Production build, lint, typecheck and diff checks passed.
