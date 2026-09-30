# GHGSat connected exploration: research record

Build-content record for `docs/build/PLAN-connected-exploration.md` §6. Original validation docs are unchanged.

## How this was gathered

- 25 September 2026. A research agent read official pages through a summarizing fetch tool. The build agent then re-checked the high-stakes items against the raw pages (plain HTTP fetch and the public job-board APIs):
  - GHGSat technology page: 1,630–1,675 nm band; "solar backscattered radiation"; ~500 km orbit. Confirmed.
  - GHGSat About: "150+ people work across our five offices". Team page: "100+ Employees". Both confirmed; the app shows "more than 100" and names both figures.
  - Offices on the contact page (Montreal HQ, Calgary 639 5th Ave SW). Confirmed.
  - "16 satellites launched to date" (Team and Constellation pages). Confirmed. Individual launch dates are not used.
  - GHGSat Workable board: 4 live listings (2 English, 2 French duplicates), both software, Montreal. Confirmed via the public widget/job API.
  - Remote Emissions Scientist copy on Talent.com: "No longer accepting applications", MTL or CGY. Confirmed.
  - Muon Space Greenhouse API: Senior Instrument Scientist, Calibration Testing, first published 2026-09-24. Confirmed.
  - UCalgary Engineering Physics ("develop new instruments, measurement techniques or prototype systems"; satellites in the aerospace focus), UCalgary Geomatics (Remote Sensing course; satellite images and climate change), SAIT Geomatics (Remote Sensing course). Confirmed. UAlberta Earth Sciences ("the atmosphere above it") confirmed through the fetch tool.
- Not used: Muon Space EO/IR systems role (requires US security clearance); Wyvern, Highwood, Qube, Carbon Mapper, CSA, ESA, GC Jobs leads (no openable posting); LinkedIn (not used).

## Asset and provenance list

| Asset | Provenance |
| --- | --- |
| Methane measurement schematic | Drawn in code for this app (`src/app/examples/[slug]/MethaneDiagram.tsx`). Checked against GHGSat's technology page and Jervis et al. 2021: passive instrument, reflected sunlight, methane invisible, dips not zero. Not to scale. |
| GHGSat logo | Not used. No logo, media kit or usage terms published; request through the media inquiries page if wanted. |
| Mockup imagery (`design/exploration-2026-09-25/*.png`) | Not used in the app. Generated concept art. |

## Explicit gaps

1. No open GHGSat science or instrument posting. The science job example is a closed third-party copy with no exact posting date. It is shown as closed and historical.
2. No openable Alberta instrument or science posting from another employer. The instrument example is a US posting.
3. Which GHGSat teams work in Calgary is not stated anywhere. All roles are labelled as company-wide work areas.
4. Entry requirements did not render on most program pages. None are shown.
5. No quotable authority line for "absorption dims but does not remove the light". The story labels that step as our explanation.
6. The schematic has not yet had an outside science review. Recommended before classroom use.

## Research agent notes (verbatim)

# GHGSat x Physics 30 (EMR) — Source Research

All pages checked **2026-09-25** using WebFetch/WebSearch. No logins, no forms, no downloads.
Labels: **STATED** = the organization says it on its own page. **OBSERVED** = seen in a dated third-party or posting source. **GAP** = could not verify.
Caveat: WebFetch passes each page through a summarizing model. Wording marked "quote" was requested verbatim, but the high-stakes items should get one human spot-check before publishing.

---

## A. GHGSat organization

### A1. What it does, in plain language (STATED)
- URL: https://www.ghgsat.com/ (checked 2026-09-25)
- GHGSat calls itself a greenhouse gas emissions intelligence company. It uses satellites and aircraft to measure methane from industrial facilities around the world. It offers "independent, site-level methane emissions monitoring" so organizations can detect, measure and reduce emissions.
- Homepage figures (as displayed): 702 MtCO2e of methane emissions detected in 2025; monitoring in 127 countries; 21 MtCO2e mitigated since inception. These are company claims.

### A2. Problem it addresses (STATED)
- https://www.ghgsat.com/about-us/ (2026-09-25): the headline problem is "75% of Industrial Emissions Had No Independent Monitoring."
- https://www.ghgsat.com/ (2026-09-25): organizations need reliable, independent emissions data for operational decisions, regulatory compliance, ESG reporting and choosing where to spend on mitigation.

### A3. Who uses the data (STATED)
- https://www.ghgsat.com/ (2026-09-25) names these customer sectors: oil & gas, landfills, government agencies, financial institutions, mining and agriculture.
- https://www.ghgsat.com/ghgsat-team/ (2026-09-25) adds domain specialists in oil & gas, waste management, government and financial sectors.

### A4. How the technology works, at a high-school level (STATED)
Source: https://www.ghgsat.com/technology/ (2026-09-25)
- **Instrument:** a patented "wide-angle Fabry-Pérot (WAF-P) imaging spectrometer." It is a miniaturized version of the Fabry-Perot interferometer first described in 1899.
- **Band:** quote: "Methane absorbs solar radiation at specific wavelengths in the short-wave infrared region (1,630–1,675 nm)." That is about 1.63–1.675 µm. Spectral resolution is about 0.3 nm.
- **Light source is the Sun (passive):** quote: "its spectrometer collects solar backscattered radiation within a 12 × 12 km" area. About 200 overlapping spectral images are captured per pass.
- **Orbit:** low Earth orbit at about 500 km altitude.
- **From light to emission rate:** the measurements are combined with wind data in "atmospheric inversion algorithms" to calculate emission rates in kg/hr.
- **Platforms:** satellites (DATA.SAT, detection threshold about 100 kg/hr) and aircraft (DATA.AIR, about 3.5 kg/hr "under favourable wind conditions"). Both feed the SPECTRA platform.
- **Pixel size:** about 25 m ground sampling distance.
- **How the signal forms:** quote: the instrument "generates a spectral interference pattern that corresponds to a specific wavelength, enabling precise measurement of methane column densities."

### A5. Number of satellites (STATED, with an internal inconsistency)
- https://www.ghgsat.com/technology/satellite-constellation/ (2026-09-25). Quote: "GHGSat currently operates 16 satellites in low Earth orbit—the largest commercial fleet dedicated to greenhouse gas monitoring."
- The same page lists these launches: GHGSat-D "Claire" (21 June 2016, demonstrator); C2 "Hugo" (24 Jan 2021); C1 "Iris" (listed as 2 Sep 2021); C3–C5 (May 2022); C6–C8 (Apr 2023); C9–C11 (Nov 2023; C10 "Vanguard" measures CO2); C12–C13 (Jun 2025); C14–C15 (Nov 2025); C16–C17 (Jul 2026).
- **Inconsistency:** the list has 18 satellites (D plus C1–C17), but the page says "16 operates." The difference may be retired satellites (possibly the demonstrator), but the page does not say. Iris's date as extracted also looks out of order. **Recommendation:** use "16 satellites (company figure, Sept 2026)" and do not publish individual launch dates without a manual check.

### A6. Offices and addresses (STATED)
Source: https://www.ghgsat.com/contact/ (2026-09-25)
- **Montreal (HQ):** 1130 Sherbrooke St. W, 15th fl., Montreal, QC, Canada, H3A 2M8
- **Calgary:** 639 5th Ave. SW, Ste. 560, Calgary, AB, Canada, T2P 0M9
- Ottawa: 65 Denzil Doyle Ct., Ste. 204–205, Ottawa, ON, K2M 2G8
- Houston: 1980 Post Oak Blvd., Ste. 100, Houston, TX 77056, USA
- London: 70 Gracechurch St., Office 409, London, EC3V 0HR, UK
- The about page confirms five offices (Montreal, Ottawa, Calgary, Houston, London).

### A7. Teams and work areas (STATED)
- https://www.ghgsat.com/ghgsat-team/ (2026-09-25). Quote: "satellite engineers, atmospheric physicists, remote sensing scientists, data engineers, and industrial domain specialists." The page also mentions hyperspectral remote sensing, machine learning, software development, emissions validation science, commercial/sales, operations, finance and legal. Active hiring is described across "engineering, science, software, and commercial."
- https://www.ghgsat.com/about-us/ (2026-09-25). Quote: "engineers who can miniaturize space instruments, data scientists who can attribute a plume to a single valve from 500 km up, and commercial specialists…"
- The founder is named on the about page as Stéphane Germain, an engineer with about 30 years in space technology.

### A8. Company size (STATED, but two company pages disagree)
- https://www.ghgsat.com/about-us/ (2026-09-25). Quote: "Today, 150+ people work across our five offices."
- https://www.ghgsat.com/ghgsat-team/ (2026-09-25). Quote: "100+ Employees and growing." A leadership bio on the same page says the company grew "from a 15-person startup to a 150-person company."
- **Recommendation:** use "150+ people (GHGSat About page, Sept 2026)" or the safe floor "more than 100." Note the discrepancy.

### A9. Careers page (STATED)
- Official careers link from the site nav: https://apply.workable.com/ghgsat/?lng=en/
- https://apply.workable.com/ghgsat/ loads, but it is a JavaScript app, so the fetch returned no listings. Listings were read from Workable's public JSON: https://apply.workable.com/api/v1/widget/accounts/ghgsat (2026-09-25). See section C.

### A10. Logo, press or media kit (GAP for a kit; STATED for the contact route)
- https://www.ghgsat.com/media-inquiries/ (2026-09-25) is a media inquiry form for "press, editorial, broadcast, and expert commentary requests," plus a general phone and email. **No media kit, logo download or brand usage terms were found** on this page or the contact page.
- Press releases: https://www.ghgsat.com/category/ghgsat-press-releases/ (linked from the nav; not opened).
- **GAP:** no published logo usage terms. The safe route is to ask GHGSat communications through the media inquiries page, or to use a text-only name. Nothing was downloaded.

---

## B. Science check for the classroom diagram

| Claim | Status | Source (checked 2026-09-25) | Paraphrase |
|---|---|---|---|
| Methane absorbs in SWIR; GHGSat uses about 1.65 µm (1630–1675 nm) | STATED (GHGSat) + peer-reviewed | https://www.ghgsat.com/technology/ ; Jervis et al. 2021, *Atmos. Meas. Tech.* 14, 2127, "The GHGSat-D imaging spectrometer" https://amt.copernicus.org/articles/14/2127/2021/ | Both give 1630–1675 nm in the shortwave infrared. |
| Two main methane SWIR bands exist (1.65 µm and 2.3 µm) | Peer-reviewed | Jacob et al. 2022, *Atmos. Chem. Phys.* 22, 9617 https://acp.copernicus.org/articles/22/9617/2022/ | The review describes satellite methane retrieval in the 1.65 µm and 2.3 µm bands, and cites GHGSat as a point-source imager with 25×25 m pixels. |
| Passive: it measures sunlight reflected or scattered back from the surface, with no laser | Peer-reviewed + GHGSat | Jervis 2021 abstract: instrument works by "collecting and spectrally decomposing solar backscattered radiation"; Jacob 2022: "backscattered solar radiation in the shortwave infrared (SWIR)"; GHGSat technology page, same wording | The Sun is the light source; the ground reflects the light back up to the satellite. |
| Useful contrast: a laser (active) mission also uses 1.65 µm | Search result (third-party summary) | Search snippet on the MERLIN lidar | MERLIN emits its own 1.65 µm laser light. Only use this in class to show what GHGSat is *not*, and verify on an ESA/CNES/DLR page first. |
| Other agencies use the same principle | Agency pages | ESA TROPOMI: https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-5P/Tropomi (surfaced in search; not opened). NASA SVS "Tracking methane with EMIT and AVIRIS-3" (page dated 14 Nov 2024): https://svs.gsfc.nasa.gov/5389/ | TROPOMI measures back-scattered sunlight in the SWIR, but for methane it uses the 2.3 µm window, not GHGSat's 1.65 µm. NASA describes a "spectral fingerprint" of reflected and absorbed light. |
| Absorption reduces but does not remove light at those wavelengths | Partly supported (the idea is standard physics, but no clean verbatim source) | Jervis 2021 describes "methane absorption lines" and retrieval against a forward model of measured radiance. A search summary said more methane gives a deeper absorption feature. | **GAP for a quotable line.** The physics follows because the instrument still records a signal inside the band and retrieves methane from the dip, but I did not capture a verbatim sentence that says "reduces, not removes." Look in Jervis 2021 Section 4.2 / Fig. 3, or a NASA/ESA explainer, before quoting. |

Diagram-safe wording: Sunlight passes down through the air, reflects off the ground and travels back up through a methane plume. At about 1.65 µm, methane absorbs some of that light, so the spectrometer sees a slightly dimmer signal at those specific wavelengths. More methane makes a deeper dip.

---

## C. Job examples

GHGSat's live board currently lists **software roles only**. There are no open atmospheric-science or instrument roles at GHGSat today. The science example below is a closed GHGSat posting found on a third-party site, and the instrument examples are from a second employer (Muon Space, USA).

### C1. GHGSat — Senior Backend Developer - Spectra (OBSERVED, live posting)
- URL: https://apply.workable.com/j/32DA8F3BEC (data via https://apply.workable.com/api/v2/accounts/ghgsat/jobs/32DA8F3BEC), checked 2026-09-25
- Location: Montreal, QC, Canada. Hybrid. Full-time. Senior level.
- Published: 2026-08-27. The API state is "Open," so it is currently accepting applications.
- Duties (paraphrased): lead features through the full development cycle; build, test and run backend services and APIs; keep public and internal web platforms reliable; work with technical and non-technical colleagues on product features.
- Skills (paraphrased): CS degree or equivalent experience; a track record shipping scalable web apps; advanced Python; AWS cloud; Docker/Kubernetes.
- Work area: software for earth observation. Spectra is GHGSat's data platform (see A4).
- A French-language version of the same role is also posted: D278C951E3, published 2026-08-29.

### C2. GHGSat — Senior Full Stack Web Developer - Spectra (OBSERVED, live posting)
- URL: https://apply.workable.com/j/703FE3851D (API .../jobs/703FE3851D), checked 2026-09-25
- Location: Montreal, QC. Hybrid. **Contract**. Senior level. Published 2026-07-02. State "Open."
- Duties: own the end-to-end development cycle; build backend, frontend and APIs; keep web platforms performant and reliable; work with design, QA and product teams; share on-call duty.
- Skills: CS/Software Engineering degree or equivalent; Python and TypeScript; AWS, Docker and Kubernetes; PostgreSQL and data pipelines; TDD, CI/CD and documentation.
- Note: the widget JSON listed telecommuting as "No," while the job JSON says "Hybrid." Both say it is not fully remote.
- A French version is also posted: 77B8161224.

### C3. GHGSat — Remote Emissions Scientist (OBSERVED, CLOSED, third-party copy)
- URL: https://ca.talent.com/view?id=623142164046743621, checked 2026-09-25. It surfaced in search as "Remote job Calgary, AB."
- Status: the page says it is **no longer accepting applications**. The posting date shows only as "30+ days ago," so the exact date is a GAP. It was not found on GHGSat's own board.
- Location: Montreal or Calgary, hybrid (about two in-office days preferred). Full-time.
- Duties: develop statistical methods to estimate greenhouse gas emissions from satellite and aircraft data; combine them with inventories and models; work with analytics teams to "detect, quantify and attribute GHG emissions to sources"; present findings; keep up with the scientific literature.
- Skills: remote-sensing emissions estimation; atmospheric or energy-system modelling; data science and ML; geospatial processing; an advanced degree in remote sensing, statistics, physics, CS or a related field.
- Work area: atmospheric science and remote sensing analysis. Use it only as a historical example ("GHGSat has hired for roles like…"), not as a current opening.

### C4. Muon Space — Senior Instrument Scientist, Calibration Testing (OBSERVED, live posting)
- URL: https://job-boards.greenhouse.io/muonspace/jobs/5248812007 (API: https://boards-api.greenhouse.io/v1/boards/muonspace/jobs/5248812007), checked 2026-09-25
- Location: Mountain View, CA, USA. Hybrid (3 days/week on-site). 5+ years. First published 2026-09-24. Listed on the live Greenhouse board.
- Duties: build hardware and software for ground calibration of the instrument; define calibration test procedures for spacecraft and testbed campaigns; document calibration results; coordinate with the calibration-design scientist; join the monthly on-orbit on-call rotation.
- Skills: calibration test setups for electro-optical imagers; integrating spheres, blackbodies and collimators; Python, Julia or C++; technical communication; a BSc or higher in engineering or physics.
- Salary: USD 197k–218k.
- Work area: satellite/instrument engineering. Note that the posting does not mention methane, SWIR or spectrometers.

### C5. Muon Space — Senior Systems Engineer, EO/IR Payloads (OBSERVED, live posting)
- URL: https://job-boards.greenhouse.io/muonspace/jobs/5210866007, checked 2026-09-25
- Location: Remote (USA). Senior (5+ years). First published 2026-08-12.
- Duties: explore and test new EO/IR payload concepts; write specifications, build models and run trade studies; design and validate new imaging techniques; serve as principal investigator on R&D proposals; support customers with remote-sensing expertise.
- Skills: systems engineering and simulation; infrared, multispectral or hyperspectral remote sensing; Python, Julia or MATLAB; communication.
- Caveat: it requires eligibility for TS/SCI clearance, so it is **not realistic for Canadian students**. Use it as an illustration only.

Other leads checked (none usable as postings):
- Wyvern (Edmonton, hyperspectral satellites): https://www.wyvern.space/company/join-us lists "DevOps Specialist" and "Space Operations Intern," but the Rippling posting URLs returned 404. The Rippling board (https://wyvern.rippling-ats.com/) shows only an open-application posting.
- Highwood Emissions Management (Calgary): the Research Scientist page returned 404.
- Qube Technologies (Calgary): the careers page lists no openings.
- Carbon Mapper: the Gusto board returned 403.
- ESA optical payload engineer: "no open position."
- Planet Labs: its Canadian roles are generic infrastructure software.
- CSA student internships page lists Fall 2025–Summer 2026 terms, which are now past or ending.
- Space Crew returned 429.
- GC Jobs / ECCC: no specific posting found.

---

## D. Learning pathways (official program pages)

### D1. University of Calgary — BSc in Engineering Physics (Schulich School of Engineering), Calgary
- URLs (2026-09-25): https://schulich.ucalgary.ca/departments-centres/departments-and-programs-overview/engineering-physics and https://www.ucalgary.ca/future-students/undergraduate/explore-programs/engineering-physics
- Route: 4-year engineering degree. It combines electrical engineering, mechanical engineering and physics after a common first year. There is an optional paid internship of 12–16 months between years 3 and 4.
- Focus areas: quantum science and technology; aerospace (fluid dynamics, combustion, astrophysics) to "develop novel aircraft, rockets and satellites for near earth orbit"; computation/ML; materials; biomedical; energy. Careers include roles developing "instruments, measurement techniques or prototype systems."
- Space physics: **not explicitly named** as a stream. Optics and sensors: not explicitly named.
- Supports: satellite/instrument engineering. The page's own wording about satellites and instruments backs this.
- Entry requirements: not rendered in the fetch (**GAP**; the page uses requirement codes).

### D2. University of Calgary — BSc in Physics (Faculty of Science), plus department space research
- Program URL: https://www.ucalgary.ca/future-students/undergraduate/explore-programs/physics (2026-09-25). Covers classical physics, modern physics, applied physics and math. It mentions research in "quantum information, geometry and space." Admission (as rendered): English Language Arts, Mathematics 30-1, one other approved course, competitive average. This list looks incomplete, so verify it before use.
- Space research, STATED at https://researchdirectory.ucalgary.ca/our-impact/space (redirected from research.ucalgary.ca/space, 2026-09-25): UCalgary has "scientific instruments aboard the ESA's CASSIOPE and Swarm satellites"; the upcoming RADICALS mission will carry "an x-ray imager, based on a prototype designed at UCalgary"; the Auroral Imaging Group runs a large ground-based network of aurora instruments.
- Supports: atmospheric/space science and space instruments. The satellite-instrument work is in the department, but it is **space physics (ionosphere, aurora), not greenhouse-gas remote sensing**. The link to GHGSat is the skill set (spectroscopy, instruments, data), not the topic.

### D3. University of Calgary — BSc in Geomatics Engineering (Schulich), Calgary
- URLs (2026-09-25): https://www.ucalgary.ca/future-students/undergraduate/explore-programs/geomatics-engineering ; research area page: https://schulich.ucalgary.ca/geomatics/research/research-areas/geodesy-remote-sensing-and-earth-observation
- Covers acquiring, modelling, analyzing and managing spatial data. Courses include Remote Sensing, Satellite Positioning and Digital Imaging. The page asks: "How can aerial and satellite images be captured and used to observe climate change?"
- Research topics include "Earth observation for environmental monitoring…", "Satellite imaging and climate change" and "Radar remote sensing." Greenhouse gases and hyperspectral imaging are **not** mentioned.
- Graduate route: an MSc specialization in Geodesy, Remote Sensing and Earth Observation (per search result; the grad page was not opened).
- Supports: remote-sensing analysis and EO software/data. Careers named include remote sensing, GIS and aerospace.
- Entry requirements: not rendered (GAP).

### D4. SAIT — Geomatics Engineering Technology (diploma), Calgary Main Campus
- URL: https://www.sait.ca/programs-and-courses/diplomas/geomatics-engineering-technology (2026-09-25)
- 2-year diploma, in person. Topics: land surveying, remote sensing (gathering information from satellite and aerial sensors), GIS and cartography, GNSS/GPS, photogrammetry and spatial analysis. The page reports a 92% graduate employment rate and a $67,602 average starting salary (SAIT figures).
- Transfer: graduates can transfer credit into UCalgary geomatics. A search snippet says up to 27 credits; that figure is not confirmed on the fetched page.
- Supports: remote-sensing and GIS technician work, and data roles in earth observation.
- Entry: the page says only "high school diploma or equivalent; specific math and science prerequisites apply." Details are a GAP.

### D5. SAIT — Instrumentation Engineering Technology (diploma), Calgary Main Campus (optional)
- URL: https://www.sait.ca/programs-and-courses/diplomas/instrumentation-engineering-technology (2026-09-25)
- 2-year diploma, TAC-accredited. Students learn to "install, troubleshoot, calibrate and repair electrical/electronic measurement and control instruments." The page reports a 97% employment rate and a $78,215 average starting salary.
- Supports: measurement and instrument work. The oil & gas process-instrumentation side links to GHGSat's customers (industrial sites) more than to satellite payloads. **Label it as an adjacent route, not a direct one.**

### D6. University of Alberta — BSc with Major in Earth Sciences (Earth & Atmospheric Sciences), Edmonton
- URL: https://www.ualberta.ca/en/undergraduate-programs/bachelor-of-science-with-major-earth-sciences.html (2026-09-25)
- Covers "the Earth: its structure, its evolution, and the atmosphere above it," with courses from Earth and Atmospheric Sciences, Geophysics and Paleontology. Careers listed include Meteorologist and Research Scientist. An honours option is available.
- Supports: the atmospheric science pathway.
- Entry: the page says programs "may require specific Grade 12 prerequisites" without listing them (GAP). A search snippet says Physics 30 is required for some atmospheric courses, but that is not confirmed on the fetched page.

---

## GAPS
1. **No open GHGSat science or instrument postings.** Only two software roles (plus their French duplicates) are live. The one science example (Remote Emissions Scientist, Montreal/Calgary) is closed, came from a third-party site, and has no exact date.
2. **No live Canadian or Alberta science or instrument posting was found and opened.** Wyvern, Highwood, Qube, CSA, ECCC/GC Jobs and Carbon Mapper were all unavailable or empty. The instrument examples come from Muon Space (USA), and one requires a US security clearance.
3. **Satellite count:** the "16 operates" statement conflicts with the 18 satellites listed on the same page. The individual launch dates need a human check.
4. **Headcount:** the company gives "150+" (About page) and "100+" (Team page).
5. **Logo and media kit:** none found, and no usage terms published. You would need to request them through https://www.ghgsat.com/media-inquiries/.
6. **Quotable wording that "absorption reduces but does not remove light"** was not captured from an authoritative page. The physics is standard, but a citation is still needed. Also, the ESA TROPOMI page and the MERLIN lidar claim were seen only in search results, not opened.
7. **Entry requirements** did not render for UCalgary Engineering Physics, UCalgary Geomatics, SAIT or UAlberta. The UCalgary Physics list looks incomplete.
8. **Content extracted via WebFetch's summarizer.** Spot-check the quoted strings before publishing.
9. **GHGSat Calgary office:** the address is STATED, but no page says which teams sit in Calgary. That is a GAP.
