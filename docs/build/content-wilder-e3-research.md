# Wilder and E3 connected exploration

Implemented locally 29 September 2026. Scope: organization profiles, role explanations, approved posting integration, official learning pathways and classroom schematics. GHGSat's approved G1 posting is included with a commercial role and a preparation route. No deployment, database change or paid collection was performed.

## Net change

| Example | Before | Local implementation |
| --- | --- | --- |
| Wilder Institute | Three role summaries, broad study directions, no organization profile or linked jobs | Organization profile; three detailed roles; five official programs spanning introductory animal care, veterinary technology, field monitoring, zoology and veterinary medicine; W1 job card; four-step classroom explanation and care/release/monitoring schematic |
| E3 Lithium | One process-role summary, degree requirement and a director's biography, no company profile or linked jobs | Company profile; process engineering and operations roles; three official degree/diploma routes; E1/E2 and related Calgary E3 cards; four-step explanation and separation-process schematic |
| GHGSat | Three detailed roles, four pathways and four jobs | Adds a commercial role, SAIT marketing pathway and approved G1 job; existing scientific story and records retained |

## Source record

Original-source text captures, URLs, timestamps and hashes: `docs/validation/evidence/example-depth-2026-09-29/manifest.json`. Check date in UI: 29 September 2026 (America/Toronto); capture timestamps use UTC. New material is attributed through `src/content/sources.ts`. Statements connecting programs to roles and general role explanations are explicitly editorial, not employer qualifications.

- Wilder organization: [About Wilder](https://wilderinstitute.org/about-wilder/) and [offices](https://wilderinstitute.org/contact/). A conservation charity; use Organization and Who benefits rather than company/customer wording. Team size remains unverified.
- Wilder story: [owl program](https://wilderinstitute.org/program/burrowing-owl-program/), [2025 ecologist interview](https://wilderinstitute.org/2025/07/21/head-starting-burrowing-owls-for-a-wild-future/), [2023 care team account](https://wilderinstitute.org/blog/100th-owl-returns-to-the-prairies/). These establish dated program involvement, not a current staff roster. No precise survival percentages or guaranteed recovery are added.
- E3 organization and stage: [company](https://www.e3lithium.ca/) and [29 September 2026 Clearwater update](https://e3lithium.ca/newsroom/news-releases/e3-lithium-provides-status-update-on-clearwater-project). Demonstration operations and commercial design are distinct. Supply discussions and non-binding agreements are not sales. Team size remains unverified.
- E3 classroom process: approved process-engineer and operator PDFs plus the update. Diagram is conceptual: brine, separation, lithium-rich stream, further treatment and other material. No proprietary plant design, numerical material balance, direct battery output or already-operating commercial facility is implied.

## Learning routes

| Program | Source | Scope and boundary |
| --- | --- | --- |
| UCalgary Zoology BSc | [Official program](https://www.ucalgary.ca/future-students/undergraduate/explore-programs/zoology) | Animal biology foundation; not sufficient by itself for an experienced job or research leadership |
| Olds Environmental Science and Technology | [Official program](https://www.oldscollege.ca/programs/areas-of-interest/land-environment/environmental-science-technology.html) | Two-year diploma; field monitoring and technical work, not equivalent to a lead ecologist qualification |
| Olds Veterinary Technical Assistant | [Official program](https://www.oldscollege.ca/programs/areas-of-interest/animal-health/veterinary-technical-assistant-certificate.html) | Four-month introduction to support work, not a veterinarian qualification or a shortcut to Wilder's experience requirement |
| Olds Veterinary Technology | [Official program](https://www.oldscollege.ca/programs/areas-of-interest/animal-health/veterinary-technology-diploma.html) | 18-month accelerated diploma with practicum; distinct profession; no direct entry to DVM |
| UCalgary DVM | [Program](https://vet.ucalgary.ca/future-students/dvm-students-undergraduate-program/dvm-program), [admissions](https://vet.ucalgary.ca/future-students/dvm-students-undergraduate-program/admission-requirements) | Four-year professional degree following required undergraduate study; not direct from high school |
| UCalgary Chemical Engineering BSc | [Official program](https://schulich.ucalgary.ca/future-students/undergraduate/programs/bsc-chemical-engineering) | Engineering degree foundation, not a substitute for employer experience requirements |
| SAIT Chemical Engineering Technology | [Official program](https://www.sait.ca/programs-and-courses/diplomas/chemical-engineering-technology) | Two-year diploma; process operations, design and simulation; not interchangeable with an engineering degree |
| SAIT Power Engineering Technology | [Official program](https://www.sait.ca/programs-and-courses/diplomas/power-engineering-technology) | Two-year diploma and certification-exam preparation; power engineering is distinct from professional engineering |
| SAIT Business Administration – Marketing | [Official program](https://www.sait.ca/programs-and-courses/diplomas/business-administration-marketing) | Introductory business/customer skills; GHGSat G1 requires a bachelor's degree and 5+ years, not this diploma alone |

## Approved jobs and rechecks

All five source cards are version 1 from `docs/validation/job-reviews/all-examples/2026-09-29-baseline/`. Titles, employer notes, location, arrangement, experience, summary, duties, skills, connections and limitations are copied without edits. Application status is separate.

- E1/E2: employer careers page retrieved again. PDFs retrieved with browser user-agent after a plain request returned 403; their SHA256 values match the approved originals byte for byte. PDFs invite applications by email. No email sent.
- E3/Stantec: original Oracle posting inspected; Apply Now opened the email application entry screen. No applicant information entered or submitted.
- G1/GHGSat: original BambooHR posting inspected; Apply opened the UK application form. No applicant information entered or submitted.
- W1/Wilder: original ADP posting inspected; Apply opened the application entry screen. Job-only DOM retained; no applicant/autofill fields saved. Deadline 9 October 2026 is distinct from contract end March 2027. The application status helper stops showing accepting applications after the deadline, even inside the normal 30-day freshness period.
- Earlier Wilder C1/C2 remain pending and are not integrated.

## Visual and evidence review

The two new diagrams are responsive, locally rendered schematics with descriptive accessible names and visible provenance. Neither uses generated wildlife photographs or purports to depict employer equipment. The owl sequence distinguishes intervention, release and evidence of population recovery. The chemistry diagram distinguishes an intermediate stream from purification/conversion and includes the other-material branch. Model explanations are labelled editorial; every organization claim has sources.

## Validation

- Production build, TypeScript and ESLint passed.
- 53 unit tests passed, including source resolution, unchanged approved-copy checks, employer ordering and deadline boundaries.
- Full desktop/phone suite: 139 passed, three intentional platform skips, four new tests failed on ambiguous selectors. After narrowing the new selectors, all six tests in the new journey suite passed. All 143 applicable end-to-end tests have passed across those runs.
- Accessibility checks found no serious/critical violations on the new organization, role/job and pathway views or stories; no horizontal overflow at 320px, 390px or desktop test sizes.
- Rendered E3 and Wilder story screenshots and browser DOM inspected; navigation exposes Company for E3 and Organization for Wilder. A stitched full-page browser screenshot duplicated parts of the image; DOM inspection confirmed one story and one source section. Viewport screenshots were used for visual inspection.
- New job cards preserve all approved content fields; the unit test compares directly with the approval packet. No C1/C2 cards integrated.
- Final copy cleanup clarifies that dated role sources do not prove a current vacancy and removes internal approval terminology from learner-facing text. Final browser inspection confirmed the organization view; unit checks and the production build were rerun.

Local preview: `http://localhost:3311`. No commit, push or deployment performed.
