import type { DatedSource } from "./types";

// Shared source registry for the connected exploration (organizations, roles,
// pathways, job examples, classroom stories). Research record: docs/build/content-ghgsat-research.md.
const checkedOn = "2026-09-25";

export const registry: DatedSource[] = [
  { id: "ghgsat-home", label: "GHGSat home page", url: "https://www.ghgsat.com/", checkedOn },
  { id: "ghgsat-about", label: "GHGSat: About us", url: "https://www.ghgsat.com/about-us/", checkedOn },
  { id: "ghgsat-team", label: "GHGSat: Our team", url: "https://www.ghgsat.com/ghgsat-team/", checkedOn },
  { id: "ghgsat-contact", label: "GHGSat: Offices", url: "https://www.ghgsat.com/contact/", checkedOn },
  { id: "ghgsat-technology", label: "GHGSat: Technology", url: "https://www.ghgsat.com/technology/", checkedOn },
  { id: "ghgsat-constellation", label: "GHGSat: Satellite constellation", url: "https://www.ghgsat.com/technology/satellite-constellation/", checkedOn },
  { id: "ghgsat-careers", label: "GHGSat careers board", url: "https://apply.workable.com/ghgsat/", checkedOn },
  { id: "jervis-2021", label: "Jervis et al. 2021, The GHGSat-D imaging spectrometer (Atmos. Meas. Tech.)", url: "https://amt.copernicus.org/articles/14/2127/2021/", checkedOn },
  { id: "job-ghgsat-emissions", label: "Remote Emissions Scientist, GHGSat (copy on Talent.com)", url: "https://ca.talent.com/view?id=623142164046743621", checkedOn },
  { id: "job-ghgsat-backend", label: "Senior Backend Developer - Spectra, GHGSat", url: "https://apply.workable.com/ghgsat/j/32DA8F3BEC/", checkedOn },
  { id: "job-ghgsat-fullstack", label: "Senior Full Stack Web Developer - Spectra, GHGSat", url: "https://apply.workable.com/ghgsat/j/703FE3851D/", checkedOn },
  { id: "job-muon-calibration", label: "Senior Instrument Scientist, Calibration Testing, Muon Space", url: "https://job-boards.greenhouse.io/muonspace/jobs/5248812007", checkedOn },
  { id: "ucalgary-engphys", label: "UCalgary Engineering Physics", url: "https://schulich.ucalgary.ca/departments-centres/departments-and-programs-overview/engineering-physics", checkedOn },
  { id: "ucalgary-geomatics", label: "UCalgary Geomatics Engineering", url: "https://www.ucalgary.ca/future-students/undergraduate/explore-programs/geomatics-engineering", checkedOn },
  { id: "sait-geomatics", label: "SAIT Geomatics Engineering Technology", url: "https://www.sait.ca/programs-and-courses/diplomas/geomatics-engineering-technology", checkedOn },
  { id: "ualberta-earth", label: "UAlberta BSc, Earth Sciences major", url: "https://www.ualberta.ca/en/undergraduate-programs/bachelor-of-science-with-major-earth-sciences.html", checkedOn },
  {
    "id": "depth-wilder-about",
    "label": "Wilder Institute: About Wilder",
    "url": "https://wilderinstitute.org/about-wilder/",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-wilder-contact",
    "label": "Wilder Institute: offices",
    "url": "https://wilderinstitute.org/contact/",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-wilder-program",
    "label": "Wilder Institute: burrowing owl program",
    "url": "https://wilderinstitute.org/program/burrowing-owl-program/",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-wilder-researcher",
    "label": "Wilder Institute: population ecologist interview (2025)",
    "url": "https://wilderinstitute.org/2025/07/21/head-starting-burrowing-owls-for-a-wild-future/",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-wilder-care",
    "label": "Wilder Institute: owl care team (2023)",
    "url": "https://wilderinstitute.org/blog/100th-owl-returns-to-the-prairies/",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-e3-home",
    "label": "E3 Lithium: company and Clearwater project",
    "url": "https://www.e3lithium.ca/",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-e3-update",
    "label": "E3 Lithium: Clearwater status update, 29 September 2026",
    "url": "https://e3lithium.ca/newsroom/news-releases/e3-lithium-provides-status-update-on-clearwater-project",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-e3-careers",
    "label": "E3 Lithium: careers",
    "url": "https://www.e3lithium.ca/recruitment/",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-sait-chemical",
    "label": "SAIT: Chemical Engineering Technology",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/chemical-engineering-technology",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-sait-power",
    "label": "SAIT: Power Engineering Technology",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/power-engineering-technology",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-ucalgary-chemical",
    "label": "UCalgary: Chemical Engineering BSc",
    "url": "https://schulich.ucalgary.ca/future-students/undergraduate/programs/bsc-chemical-engineering",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-olds-environment",
    "label": "Olds College: Environmental Science and Technology",
    "url": "https://www.oldscollege.ca/programs/areas-of-interest/land-environment/environmental-science-technology.html",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-olds-vet",
    "label": "Olds College: Veterinary Technology",
    "url": "https://www.oldscollege.ca/programs/areas-of-interest/animal-health/veterinary-technology-diploma.html",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-olds-assistant",
    "label": "Olds College: Veterinary Technical Assistant",
    "url": "https://www.oldscollege.ca/programs/areas-of-interest/animal-health/veterinary-technical-assistant-certificate.html",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-ucalgary-dvm",
    "label": "UCalgary: Doctor of Veterinary Medicine",
    "url": "https://vet.ucalgary.ca/future-students/dvm-students-undergraduate-program/dvm-program",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-ucalgary-dvm-entry",
    "label": "UCalgary: DVM admission requirements",
    "url": "https://vet.ucalgary.ca/future-students/dvm-students-undergraduate-program/admission-requirements",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-sait-marketing",
    "label": "SAIT: Business Administration – Marketing",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/business-administration-marketing",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-ucalgary-zoology",
    "label": "UCalgary: Zoology BSc",
    "url": "https://www.ucalgary.ca/future-students/undergraduate/explore-programs/zoology",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-job-e1",
    "label": "E3 Lithium: Shift Operator",
    "url": "https://www.e3lithium.ca/_resources/careers/Shift-Operators.pdf?v=092911",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-job-e2",
    "label": "E3 Lithium: Intermediate Process Engineer",
    "url": "https://www.e3lithium.ca/_resources/careers/Intermediate-Process-Engineer.pdf?v=092911",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-job-e3",
    "label": "Stantec: Process Engineer in Training- Water",
    "url": "https://hdhl.fa.us6.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1/job/1007312",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-job-g1",
    "label": "GHGSat: Business Development Manager (Government)",
    "url": "https://ghgsat.bamboohr.com/careers/204",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-job-w1",
    "label": "Wilder Institute: Animal Care Technician (On-Call in Strathmore, AB)",
    "url": "https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=21776daf-f5d6-445a-8284-be1d53c78d12&jobId=24852",
    "checkedOn": "2026-09-29"
  },
];
