# Weekly job-example review — 12 October 2026

Packet: all-examples-2026-10-12-weekly · Target city: Calgary · Decisions: both v1 cards approved and implemented locally on 12 October 2026

## Approved proposal (retained for review history)

The local content currently has 11 job examples: five for GHGSat, four for E3 Lithium and two for Wilder. Approving and subsequently implementing both recommendations would bring that to **13**: six, four and three respectively. The featured-company collection stays at three.

Wilder gains a same-city rehabilitation comparison alongside its conservation-care and fieldwork examples. GHGSat gains a local engineering/data route comparing ground-level industrial sensors with satellite observations. Arolytics is explicitly historical. No additional E3 card clears the added-value bar this week; its new laboratory route from last week already covers the most obvious gap.

The research phase changed no app content. Following approval, the implementation below added the two reviewed cards. Other approvals and pending versions remain intact.

## Decision sheet

| ID / version | Proposed role | Tier | Connection + work + value | Evidence | Recommendation | Decision |
| --- | --- | --- | --- | --- | --- | --- |
| OCT12-W1 v1 | Wildlife Rehabilitator — Calgary Wildlife | Related, same city | 3 + 3 + 2 = 8/10 | Pass | Recommend | Approved v1 |
| OCT12-G1 v1 | Data Scientist — Arolytics | Related, same city | 3 + 3 + 3 = 9/10 | Pass, historical | Recommend | Approved v1 |

Both displayed v1 cards were approved by Damian Matheson on 12 October 2026: “Approve both and go ahead and implement them.” Implemented locally; not published.


## OCT12-W1 v1 — exact proposed classroom card

**Title:** Wildlife Rehabilitator

**Employer:** Calgary Wildlife

**Employer note:** Related work at another employer; this is not a Wilder Institute position.

**Location / arrangement:** Calgary, Alberta Full-time; days, evenings and weekends, including some holidays.

**Seniority:** Animal-care or rehabilitation experience required, plus relevant work experience or schooling. No numeric experience minimum stated.

**Summary:** Care for injured, sick or orphaned wildlife during rehabilitation.

**What they do:**

- Prepare food, clean enclosures and provide daily husbandry.
- Assist with examinations, treatments and lab work under senior staff and veterinary supervision.
- Keep records and coordinate animal transfers and rescues with clinics, the public and volunteers.

**Skills:** Animal observation, Safe handling, Recordkeeping, Communication.

**Connection:** Editorial interpretation: compares daily animal care with Wilder’s conservation work, while showing a separate rehabilitation setting.

**Displayed status:** Accepting applications when checked 12 Oct 2026

**Source:** [Original employer posting](https://www.calgarywildlife.org/jobs)

### Reviewer notes

- Checked and captured 12 October 2026. [Retained source text](evidence/calgary-wildlife.txt); SHA-256 recorded in [manifest](evidence/manifest.json).
- Status evidence: Original employer description invites email applications and says the listing remains open until a suitable candidate is found. No email sent; actual hiring outcome unknown.
- Employer publication date: not stated. Explicit deadline: not stated. These are distinct from capture and verification dates.
- Scoring: Shares animal observation and husbandry methods. Care, supervised treatment and recordkeeping are explicit. Adds a Calgary rehabilitation and rescue comparison, with some overlap with existing animal-care content.
- Limitations: Individual rehabilitation does not establish population recovery. No evidence of a Wilder partnership or assignment to its owl programme; not a no-experience student role.
- Proposed links: `wilder-institute` → `animal-care` (existing role); add a separate related-employer job card, not a featured organization.
- Decision: approved by Damian Matheson, 12 October 2026. Instruction: “Approve both and go ahead and implement them.” Implemented locally; not published.


## OCT12-G1 v1 — exact proposed classroom card

**Title:** Data Scientist

**Employer:** Arolytics

**Employer note:** Related work at another employer; this is not a GHGSat position.

**Location / arrangement:** Calgary, Alberta; preference for Calgary-area candidates. Full-time; downtown office or fully remote. Remote eligibility beyond this location is not specified.

**Seniority:** Engineering BSc or MSc and 1–3 years in data science, analytics or research; graduate research counts.

**Summary:** Turn industrial sensor readings into evidence about emissions.

**What they do:**

- Clean noisy or incomplete pressure, temperature and flow data.
- Find patterns and check whether model results fit physical principles.
- Support models that detect emission events and estimate their duration and volume.

**Skills:** Python, Time-series analysis, Statistics, Physical modelling.

**Connection:** Editorial interpretation: compares emissions measurement using ground-level process sensors with GHGSat’s satellite observations.

**Displayed status:** Application deadline passed (20 Apr 2026) · historical job example

**Source:** [Original employer posting](https://arolytics.com/post/Data-Scientist-Full-Time-Calgary-Based-hybrid-remote)

### Reviewer notes

- Checked and captured 12 October 2026. [Retained source text](evidence/arolytics-data-scientist.txt); SHA-256 recorded in [manifest](evidence/manifest.json).
- Status evidence: Employer page remains accessible but explicitly gives an April 20, 2026 deadline. Deadline overrides the email application invitation; no current vacancy or actual hire/closure date inferred.
- Employer publication date: 2026-04-01. Explicit deadline: 2026-04-20. These are distinct from capture and verification dates.
- Scoring: Shares the problem of making defensible emissions estimates. Names data cleaning, physical validation and modelling outputs. Adds a Calgary early-career engineering/data route and a ground-sensor comparison.
- Limitations: SCADA process data is not satellite data. No evidence of a GHGSat partnership. This is a historical example, not a current vacancy or a job requiring no prior preparation.
- Proposed links: `ghgsat` → `software-data` (existing role); add a separate related-employer job card, not a featured organization.
- Decision: approved by Damian Matheson, 12 October 2026. Instruction: “Approve both and go ahead and implement them.” Implemented locally; not published.


## Existing sources, holds and omissions

- **E3 Lithium:** original recruitment page and linked Shift Operators and Intermediate Process Engineer PDFs rechecked. Both PDFs have identical SHA-256 hashes to the prior captures. No materially new story-specific work identified. Related Calgary lab search did not produce an addition worth duplicating last week’s AGAT card. A bounded search is not evidence of no other jobs.
- **GHGSat:** BambooHR lists government business development (204), English Spectra backend (205) and French Spectra backend (206). Full French description inspected; strongly overlapping work is a language variant for editorial purposes, not another recommended card. Do not merge its sidebar/requirements into the English source without review. Workable’s rendered board reports no openings; that does not override the separate BambooHR board.
- **Wilder:** rendered ADP board lists three openings: catering setup, catering server/bartender and horticulture landscaping. They do not add enough to the owl story. Animal Care Technician is absent; its known 9 October deadline has passed. The current app already displays the historical deadline label automatically, so no new maintenance decision is needed.
- **AGAT:** source still returns HTTP 410; the local app already retains it as historical/unknown after the 7 October implementation check. Do not infer a hiring/closure date from the error.
- **Enmas:** original description and email application invitation remain accessible; no material content change identified. No new duplicate card.
- Earlier pending Canacre/KCB candidates remain in their original packet. Approved October 5 versions remain unchanged. Neither new employer/title/source appeared in previous candidate ledgers; historical research mentions alone would not count as a duplicate card.
- No blocked candidates are proposed for approval. No claim is made that every external card (including Muon and Stantec) was reverified this week.

## Collection record and coverage

Derived scope from `src/content/examples.ts` and `src/content/index.ts`, resolving existing detail/organization records. All three featured employers were covered; none added, removed or deferred. Related employers do not expand the weekly scope. Material Wilder/GHGSat status context was prioritized; all equally overdue companies were completed, so none was starved. Coverage and previous dates are retained in [weekly-coverage.json](../../weekly-coverage.json).

Research used original employer pages, public ATS listings, employer PDFs, rendered boards and bounded web discovery for related Calgary animal-care, analytical and emissions-data work. The original-employer tier was checked first. Suitable Calgary comparisons made broader-location expansion unnecessary. Two unique serious new candidates were fully inspected; both are recommended. The five-card maximum is a ceiling, not a quota. Search-engine result counts were not treated as an exhaustive inventory.

**Apify: US$0 settled + US$0 outstanding reservations, against US$1 for the entire October 12 occurrence**, including the interrupted segment and this resumption. No actor starts, retries or paid requests. No paid actor selected, so actor pricing verification was not needed. The previously recorded unattended credential limitation remains unchanged; no repeated configuration alert. Free original sources supplied the shortlist. See [cost ledger](apify-ledger.json) and [source manifest](evidence/manifest.json).

All source captures are internal evidence, outside public assets. No applicant data entered or messages sent. The research phase changed no app content or decisions. The later authorized implementation is recorded below; publication state remains unchanged.

## Implementation — 12 October 2026

Both approved v1 cards are now in the local application: `calgary-wildlife-rehabilitator` under Wilder’s `animal-care`, and `arolytics-data-scientist` under GHGSat’s `software-data`. Added corresponding registry sources and example job links. Existing company roles, story content and featured-company scope are unchanged. Total saved job examples: 13.

Calgary Wildlife’s original page was directly retrieved again before implementation; its email application invitation and open-until-filled wording remain present. The dated implementation snapshot and hash are in the evidence manifest. Arolytics retains its April 1 publication date and April 20 deadline, producing the approved historical label.

Validation: all 81 existing unit tests passed; Next.js route type generation and TypeScript checks passed. A focused data check verified exact approved copy, attribution, source URLs, role/story links and both rendered status-label strings. Browser visual QA was not performed: the previous localhost:3311 server was not running. No deployment, commit or paid collection was performed.
