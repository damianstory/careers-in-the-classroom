import type { JobExample } from "./types";

// Saved examples of how employers described real positions. The captured record does not change;
// `status` is the separate, dated check of whether the posting was still accepting applications.
// Duties and skills are paraphrased. Excerpts are short and attributed.
export const jobExamples: JobExample[] = [
  {
    id: "ghgsat-emissions-scientist",
    title: "Remote Emissions Scientist",
    employer: "GHGSat",
    employerNote: {
      text: "The methane-monitoring company in this example.",
      kind: "stated",
      sourceIds: ["ghgsat-home"],
    },
    roleIds: ["atmospheric-science"],
    location: "Montreal or Calgary",
    arrangement: "Hybrid, about two office days a week preferred",
    relevance: "local",
    postingSourceId: "job-ghgsat-emissions",
    postingCopySite: "Talent.com",
    capturedOn: "2026-09-25",
    summary: "Estimate greenhouse gas emissions from satellite and aircraft data.",
    duties: [
      "Develop statistical methods that estimate emissions over different times and areas.",
      "Combine GHGSat’s measurements with other estimates, such as inventories and models.",
      "Work with science and analytics colleagues to design and test solutions.",
      "Present results to technical and non-technical audiences.",
    ],
    skills: ["Remote sensing emissions estimation", "Atmospheric or energy-system modelling", "Statistics and machine learning", "Geospatial data", "Advanced degree in a related field"],
    excerpt: "Detect, quantify and attribute GHG emissions to sources",
    kind: "observed",
    sourceIds: ["job-ghgsat-emissions"],
    status: {
      kind: "closed",
      checkedOn: "2026-09-25",
      note: "Seen as a copy on a job site that says it is no longer accepting applications. Not on GHGSat’s own board. The posting date was not shown.",
    },
  },
  {
    id: "ghgsat-backend-developer",
    title: "Senior Backend Developer - Spectra",
    employer: "GHGSat",
    employerNote: {
      text: "The methane-monitoring company in this example. Spectra is its data platform.",
      kind: "stated",
      sourceIds: ["ghgsat-home", "ghgsat-technology"],
    },
    roleIds: ["software-data"],
    location: "Montreal",
    arrangement: "Hybrid, full-time",
    level: "Senior, experienced role",
    relevance: "broader",
    postingSourceId: "job-ghgsat-backend",
    capturedOn: "2026-09-25",
    publishedOn: "2026-08-27",
    summary: "Build the back-end services behind GHGSat’s data platform.",
    duties: [
      "Lead features from design through testing and release.",
      "Build, test and run back-end services and APIs.",
      "Keep public and internal web platforms reliable.",
      "Work with technical and non-technical colleagues on product features.",
    ],
    skills: ["Python", "Cloud services (AWS)", "Containers (Docker, Kubernetes)", "Shipping web applications at scale"],
    kind: "observed",
    sourceIds: ["job-ghgsat-backend"],
    status: {
      kind: "open",
      checkedOn: "2026-09-25",
      note: "Listed as published on GHGSat’s own careers board when checked.",
    },
  },
  {
    id: "ghgsat-full-stack-developer",
    title: "Senior Full Stack Web Developer - Spectra",
    employer: "GHGSat",
    employerNote: {
      text: "The methane-monitoring company in this example. Spectra is its data platform.",
      kind: "stated",
      sourceIds: ["ghgsat-home", "ghgsat-technology"],
    },
    roleIds: ["software-data"],
    location: "Montreal",
    arrangement: "Hybrid, contract",
    level: "Senior, experienced role",
    relevance: "broader",
    postingSourceId: "job-ghgsat-fullstack",
    capturedOn: "2026-09-25",
    publishedOn: "2026-07-02",
    summary: "Build both the web interface and the services behind it.",
    duties: [
      "Own development from start to finish, across back end, front end and APIs.",
      "Keep web platforms fast and reliable.",
      "Work with design, quality assurance and product teams.",
      "Share on-call duty.",
    ],
    skills: ["Python and TypeScript", "AWS, Docker and Kubernetes", "Databases and data pipelines", "Testing and documentation"],
    kind: "observed",
    sourceIds: ["job-ghgsat-fullstack"],
    status: {
      kind: "open",
      checkedOn: "2026-09-25",
      note: "Listed as published on GHGSat’s own careers board when checked.",
    },
  },
  {
    id: "muon-calibration-scientist",
    title: "Senior Instrument Scientist, Calibration Testing",
    employer: "Muon Space",
    employerNote: {
      text: "A US space company. The posting says its instrument science team models, calibrates and validates an imaging instrument on its spacecraft. Not connected to GHGSat.",
      kind: "stated",
      sourceIds: ["job-muon-calibration"],
    },
    roleIds: ["satellite-engineering"],
    location: "Mountain View, California, USA",
    arrangement: "Hybrid, three office days a week",
    level: "Senior, 5+ years of experience",
    relevance: "broader",
    postingSourceId: "job-muon-calibration",
    capturedOn: "2026-09-25",
    publishedOn: "2026-09-24",
    summary: "Calibrate a satellite imaging instrument on the ground before launch.",
    duties: [
      "Build the hardware and software used to calibrate the instrument on the ground.",
      "Write the test procedures for calibration campaigns.",
      "Report calibration results that show the instrument is ready to fly.",
      "Take turns on call to help solve problems once it is in orbit.",
    ],
    skills: ["Calibration of imaging instruments", "Lab light sources such as integrating spheres and blackbodies", "Programming (Python, Julia or C++)", "Degree in engineering or physics"],
    excerpt: "translating physics into orbital capability from concept through end of life",
    kind: "observed",
    sourceIds: ["job-muon-calibration"],
    status: {
      kind: "open",
      checkedOn: "2026-09-25",
      note: "Listed on Muon Space’s own job board when checked. The posting does not mention methane.",
    },
  },
  {
    "title": "Shift Operator",
    "employer": "E3 Lithium",
    "location": "Demonstration facility east of Olds and Didsbury, Alberta; not a Calgary worksite.",
    "arrangement": "Shift-based field and plant operations; the posting describes a 24-hour demonstration facility.",
    "level": "Experienced operations role; relevant field or plant experience is requested.",
    "summary": "Operate and monitor the equipment used to demonstrate lithium processing.",
    "duties": [
      "Inspect equipment, take readings, and record operating data.",
      "Identify and report process or equipment problems, and help troubleshoot them safely.",
      "Support maintenance, commissioning, and start-up work."
    ],
    "skills": [
      "Process monitoring",
      "Mechanical troubleshooting",
      "Operational record keeping",
      "Field safety"
    ],
    "id": "e3-shift-operator",
    "employerNote": {
      "text": "The lithium-extraction company in this classroom example.",
      "kind": "interpreted",
      "sourceIds": [
        "depth-job-e1"
      ]
    },
    "roleIds": [
      "process-operations"
    ],
    "relevance": "local",
    "postingSourceId": "depth-job-e1",
    "capturedOn": "2026-09-29",
    "kind": "observed",
    "sourceIds": [
      "depth-job-e1"
    ],
    "classroomConnection": "Shows the hands-on work needed to keep a separation process running and collect evidence about its performance.",
    "limitation": "The commercial plant is a future destination in this posting, not an operating facility. A transition to a future job is not guaranteed.",
    "approval": {
      "packetId": "all-examples-2026-09-29-baseline",
      "candidateId": "E1",
      "copyVersion": 1
    },
    "status": {
      "kind": "open",
      "checkedOn": "2026-09-29",
      "note": "Linked from current employer careers page; PDF invites applications by email. No email was sent."
    }
  },
  {
    "title": "Intermediate Process Engineer",
    "employer": "E3 Lithium",
    "location": "Calgary, Alberta.",
    "arrangement": "Full-time, 40 hours per week.",
    "level": "Experienced engineering role; at least five years in process engineering, a chemical-engineering degree, and eligibility for professional registration are specified.",
    "summary": "Design and improve the steps that turn lithium-bearing brine into battery-grade lithium carbonate.",
    "duties": [
      "Evaluate separation steps such as membrane treatment, ion exchange and crystallization.",
      "Develop process models and material balances to check designs.",
      "Prepare engineering documents and support demonstration-system commissioning and troubleshooting."
    ],
    "skills": [
      "Chemical process design",
      "Process simulation",
      "Material balances",
      "Process safety"
    ],
    "id": "e3-process-engineer",
    "employerNote": {
      "text": "The lithium-extraction company in this classroom example.",
      "kind": "interpreted",
      "sourceIds": [
        "depth-job-e2"
      ]
    },
    "roleIds": [
      "process-engineering"
    ],
    "relevance": "local",
    "postingSourceId": "depth-job-e2",
    "capturedOn": "2026-09-29",
    "kind": "observed",
    "sourceIds": [
      "depth-job-e2"
    ],
    "classroomConnection": "Connects the classroom question about separating substances to the design and testing of a larger processing system.",
    "limitation": "This current posting is distinct from the older Water Process Engineer / Process Chemist source used in the story. Do not silently transfer qualifications between the two.",
    "approval": {
      "packetId": "all-examples-2026-09-29-baseline",
      "candidateId": "E2",
      "copyVersion": 1
    },
    "status": {
      "kind": "open",
      "checkedOn": "2026-09-29",
      "note": "Linked from current employer careers page; PDF invites applications by email. No email was sent."
    }
  },
  {
    "title": "Process Engineer in Training- Water",
    "employer": "Stantec",
    "location": "Calgary, Alberta.",
    "arrangement": "Full-time, day shift; office work and possible field activities.",
    "level": "Early-career engineering role: 0–4 years of experience, an engineering degree, and EIT registration or ability to obtain it within six months.",
    "summary": "Help design water and wastewater treatment systems under the guidance of experienced engineers.",
    "duties": [
      "Prepare process calculations, design drawings and technical reports.",
      "Use chemical or process models to support design decisions.",
      "Help investigate sites and support pilot or construction activities."
    ],
    "skills": [
      "Water-treatment principles",
      "Process calculations and modelling",
      "Engineering drawings",
      "Technical communication"
    ],
    "id": "stantec-water-eit",
    "employerNote": {
      "text": "An engineering consultancy. This role concerns water and wastewater projects, not work for E3 Lithium.",
      "kind": "interpreted",
      "sourceIds": [
        "depth-job-e3"
      ]
    },
    "roleIds": [
      "process-engineering"
    ],
    "relevance": "local",
    "postingSourceId": "depth-job-e3",
    "capturedOn": "2026-09-29",
    "kind": "observed",
    "sourceIds": [
      "depth-job-e3"
    ],
    "classroomConnection": "Offers an early-career comparison using related treatment and process-design methods in the same city.",
    "limitation": "The employer and project purpose differ from E3; this is not evidence of a lithium role or an E3 partnership.",
    "approval": {
      "packetId": "all-examples-2026-09-29-baseline",
      "candidateId": "E3",
      "copyVersion": 1
    },
    "status": {
      "kind": "open",
      "checkedOn": "2026-09-29",
      "note": "Original role details rendered; Apply Now opened an email-based application entry form. No information was entered."
    }
  },
  {
    "title": "Business Development Manager (Government)",
    "employer": "GHGSat",
    "location": "London, United Kingdom.",
    "arrangement": "Hybrid, full-time.",
    "level": "Experienced role; five or more years of relevant business-development, proposal or government-contracting experience.",
    "summary": "Help government organizations obtain and use GHGSat’s greenhouse-gas monitoring services.",
    "duties": [
      "Find government opportunities that match the company’s monitoring capabilities.",
      "Write proposals with input from science, product, finance and legal colleagues.",
      "Coordinate bids, customer relationships and delivery of government programmes."
    ],
    "skills": [
      "Proposal writing",
      "Government procurement",
      "Cross-team communication",
      "Project management"
    ],
    "id": "ghgsat-government-business",
    "employerNote": {
      "text": "The satellite-emissions company in this classroom example.",
      "kind": "interpreted",
      "sourceIds": [
        "depth-job-g1"
      ]
    },
    "roleIds": [
      "commercial-partnerships"
    ],
    "relevance": "broader",
    "postingSourceId": "depth-job-g1",
    "capturedOn": "2026-09-29",
    "kind": "observed",
    "sourceIds": [
      "depth-job-g1"
    ],
    "classroomConnection": "Shows how scientific measurements reach public-sector users through proposals, contracts and coordinated delivery.",
    "limitation": "This is a government-facing commercial role in the UK, not a Calgary science vacancy.",
    "approval": {
      "packetId": "all-examples-2026-09-29-baseline",
      "candidateId": "G1",
      "copyVersion": 1
    },
    "status": {
      "kind": "open",
      "checkedOn": "2026-09-29",
      "note": "Original description and empty application form inspected, including UK work-authorization question."
    }
  },
  {
    "title": "Animal Care Technician (On-Call in Strathmore, AB)",
    "employer": "Wilder Institute",
    "location": "Archibald Biodiversity Centre near Strathmore, Alberta; not the Calgary zoo site.",
    "arrangement": "Fixed-term, on-call; 0–40 hours per week, with a stated contract end of March 2027.",
    "level": "Requires at least two years of animal-care experience at an accredited zoo or aquarium, plus a relevant degree or combination of education and experience.",
    "summary": "Care for conservation-program animals and record evidence about their health and behaviour.",
    "duties": [
      "Provide prescribed diets and monitor animal condition and health.",
      "Observe behaviour, maintain animal-care records, and report changes.",
      "Maintain habitats and assist with prescribed care and animal-handling procedures."
    ],
    "skills": [
      "Animal husbandry",
      "Behaviour observation",
      "Accurate record keeping",
      "Animal welfare and safety"
    ],
    "id": "wilder-animal-care",
    "employerNote": {
      "text": "The conservation organization in this classroom example. This role is at its Archibald Biodiversity Centre.",
      "kind": "interpreted",
      "sourceIds": [
        "depth-job-w1"
      ]
    },
    "roleIds": [
      "animal-care"
    ],
    "relevance": "local",
    "postingSourceId": "depth-job-w1",
    "capturedOn": "2026-09-29",
    "kind": "observed",
    "sourceIds": [
      "depth-job-w1"
    ],
    "classroomConnection": "Directly illustrates the daily care and observation work behind conservation programmes.",
    "limitation": "The posting does not identify burrowing owls or assign this job to that project. Applications have an explicit 9 October 2026 deadline.",
    "approval": {
      "packetId": "all-examples-2026-09-29-baseline",
      "candidateId": "W1",
      "copyVersion": 1
    },
    "status": {
      "kind": "open",
      "checkedOn": "2026-09-29",
      "note": "Employer ADP job description, requisition 1178, deadline, and application entry form inspected. No information entered."
    },
    "applicationDeadline": "2026-10-09"
  },
];
