import type { DatedSource, LearningPathway, RoleProfile } from "./types";

// Approved 21 October 2026. Occupational examples, not live vacancies.
export const october21Roles: RoleProfile[] = [
  {
    "id": "work-pipeline-inspection",
    "title": "Pipeline inspection technician",
    "summary": "Collect and interpret inspection evidence to help locate parts of a pipeline that need follow-up.",
    "explanation": "Collect and interpret inspection evidence to help locate parts of a pipeline that need follow-up.",
    "tasks": [
      {
        "title": "Prepare",
        "detail": "Check the inspection plan, equipment and location records."
      },
      {
        "title": "Inspect",
        "detail": "Track the tool and preserve the observations collected along its route."
      },
      {
        "title": "Report",
        "detail": "Review unusual signals and document their location and uncertainty."
      }
    ],
    "collaborators": [
      "Water-system operators",
      "Engineers",
      "Data analysts"
    ],
    "classroomConnection": "A signal becomes useful when its origin, location and limitations are understood."
  },
  {
    "id": "work-business-advisory",
    "title": "Business adviser",
    "summary": "Help people examine a business idea, its evidence and the assumptions behind a plan.",
    "explanation": "Help people examine a business idea, its evidence and the assumptions behind a plan.",
    "tasks": [
      {
        "title": "Clarify",
        "detail": "Identify the customer need and the decision the owner is trying to make."
      },
      {
        "title": "Compare",
        "detail": "Examine costs, demand assumptions and possible alternatives."
      },
      {
        "title": "Plan",
        "detail": "Identify a useful next test or source of specialist advice."
      }
    ],
    "collaborators": [
      "Business owners",
      "Accounting specialists",
      "Banking teams"
    ],
    "classroomConnection": "A business proposal can be improved by testing its assumptions before committing resources."
  },
  {
    "id": "work-accounting-assurance",
    "title": "Assurance accountant",
    "summary": "Examine financial records and controls to assess the support for reported information.",
    "explanation": "Examine financial records and controls to assess the support for reported information.",
    "tasks": [
      {
        "title": "Understand",
        "detail": "Identify the statement or process being examined."
      },
      {
        "title": "Investigate",
        "detail": "Compare relevant records and follow up unexplained differences."
      },
      {
        "title": "Document",
        "detail": "Record the evidence, conclusion and important limitations."
      }
    ],
    "collaborators": [
      "Finance teams",
      "Operations staff",
      "Other assurance specialists"
    ],
    "classroomConnection": "A reported number needs evidence; finding a mismatch is the start of an investigation, not proof of fraud."
  }
];

export const october21Pathways: LearningPathway[] = [
  {
    "id": "oct21-route-chemistry",
    "provider": "University of Calgary",
    "name": "Chemistry (BSc)",
    "routeType": "Degree",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Matter, reactions, experimental methods and research through laboratory and classroom work.",
    "entryNote": "A related preparation route, not a verified employer requirement or hiring partnership. Check the provider for current admissions and intake details. Specialized work may require further training or professional registration.",
    "roleRationale": [
      {
        "roleId": "work-materials",
        "why": "Investigate which formulation change could explain a measured property difference. This programme offers relevant foundational preparation; it does not establish the employer's minimum qualifications."
      }
    ],
    "urlSourceId": "oct21-source-021",
    "kind": "interpreted",
    "sourceIds": [
      "oct21-source-021"
    ],
    "checkedOn": "2026-10-21"
  }
];

export const october21PathwayLinks: Record<string, LearningPathway["roleRationale"]> = {
  "oct17-route-sait-environmental-technology": [
    {
      "roleId": "work-environmental-field-assessment",
      "why": "Document site conditions and collect monitoring information that can be traced to a place and time. This programme offers relevant foundational preparation; it does not establish the employer's minimum qualifications."
    }
  ],
  "oct20-route-biology": [
    {
      "roleId": "conservation-research",
      "why": "Frame a restoration question and interpret ecological evidence without treating correlation as proof. This programme offers relevant foundational preparation; it does not establish the employer's minimum qualifications."
    }
  ],
  "oct17-route-sait-civil-engineering-technology-municipal-major": [
    {
      "roleId": "work-civil-and-construction-technology",
      "why": "Connect field observations, sample locations and test records to a construction question. This programme offers relevant foundational preparation; it does not establish the employer's minimum qualifications."
    },
    {
      "roleId": "work-lab",
      "why": "Prepare material samples, follow the selected test method and report results and conditions. This programme offers relevant foundational preparation; it does not establish the employer's minimum qualifications."
    }
  ],
  "route-geology": [
    {
      "roleId": "work-geoscience",
      "why": "Interpret how subsurface materials and groundwater conditions affect possible transport pathways. This programme offers relevant foundational preparation; it does not establish the employer's minimum qualifications."
    }
  ],
  "oct17-route-sait-geomatics-engineering-technology": [
    {
      "roleId": "work-spatial",
      "why": "Check coordinates, organize spatial observations and prepare a usable map or model. This programme offers relevant foundational preparation; it does not establish the employer's minimum qualifications."
    },
    {
      "roleId": "work-drone",
      "why": "Plan aerial data collection and check whether the observations suit the mapping task. This programme offers relevant foundational preparation; it does not establish the employer's minimum qualifications."
    }
  ],
  "oct18-route-chemical": [
    {
      "roleId": "work-lab",
      "why": "Record formulations, operate an appropriate test and compare the result with a reference. This programme offers relevant foundational preparation; it does not establish the employer's minimum qualifications."
    }
  ],
  "oct18-route-instrument": [
    {
      "roleId": "work-pipeline-inspection",
      "why": "Deploy and track an inspection tool, review acoustic records and document locations needing follow-up. This programme offers relevant foundational preparation; it does not establish the employer's minimum qualifications."
    }
  ],
  "ucalgary-chemical": [
    {
      "roleId": "process-engineering",
      "why": "Connect fluid-test evidence with operating constraints and the next development decision. This programme offers relevant foundational preparation; it does not establish the employer's minimum qualifications."
    }
  ],
  "route-software": [
    {
      "roleId": "software-data",
      "why": "Maintain relationships, validation checks and traceable changes across operational records. This programme offers relevant foundational preparation; it does not establish the employer's minimum qualifications."
    },
    {
      "roleId": "work-technical-support",
      "why": "Help users identify a submission problem and communicate it so the system can be improved. This programme offers relevant foundational preparation; it does not establish the employer's minimum qualifications."
    }
  ],
  "oct18-route-logistics": [
    {
      "roleId": "work-warehousing",
      "why": "Keep product identity and availability connected to the pickup or delivery handoff. This programme offers relevant foundational preparation; it does not establish the employer's minimum qualifications."
    }
  ],
  "oct20-route-management": [
    {
      "roleId": "work-business-advisory",
      "why": "Help a business owner clarify assumptions, compare evidence and plan the next useful investigation. This programme offers relevant foundational preparation; it does not establish the employer's minimum qualifications."
    },
    {
      "roleId": "work-retail-operations",
      "why": "Clarify customer needs and coordinate product information and service expectations. This programme offers relevant foundational preparation; it does not establish the employer's minimum qualifications."
    }
  ],
  "oct20-route-accounting": [
    {
      "roleId": "work-financial-analysis",
      "why": "Check periods and units, compare activity with financial results and explain model limitations. This programme offers relevant foundational preparation; it does not establish the employer's minimum qualifications."
    },
    {
      "roleId": "work-accounting-assurance",
      "why": "Examine records and controls, investigate differences and document support for financial-reporting conclusions. This programme offers relevant foundational preparation; it does not establish the employer's minimum qualifications."
    }
  ]
};

export const october21PathwayUpdates: Record<string, Partial<LearningPathway>> = {
  "route-geology": {
    "name": "Geoscience (BSc)",
    "urlSourceId": "oct21-source-012",
    "sourceIds": [
      "oct21-source-012"
    ],
    "checkedOn": "2026-10-21"
  }
};

export const october21Sources: DatedSource[] = [
  {
    "id": "oct21-source-001",
    "label": "calgary.ca — planning — parks-rec — naturalization-projects.html",
    "url": "https://www.calgary.ca/planning/parks-rec/naturalization-projects.html",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-002",
    "label": "earthmaster.ca — projects",
    "url": "https://www.earthmaster.ca/projects",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-003",
    "label": "sait.ca — programs-and-courses — diplomas — environmental-technology",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/environmental-technology",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-004",
    "label": "ucalgary.ca — future-students — undergraduate — explore-programs — biological-sciences",
    "url": "https://www.ucalgary.ca/future-students/undergraduate/explore-programs/biological-sciences",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-005",
    "label": "thurber.ca — Calgary-Office",
    "url": "https://thurber.ca/Calgary-Office",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-006",
    "label": "thurber.ca — Advanced-Laboratory",
    "url": "https://thurber.ca/Advanced-Laboratory",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-007",
    "label": "thurber.ca — Construction-Materials-Engineering-and-Testing",
    "url": "https://thurber.ca/Construction-Materials-Engineering-and-Testing",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-008",
    "label": "sait.ca — programs-and-courses — diplomas — civil-engineering-technology-municipal",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/civil-engineering-technology-municipal",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-009",
    "label": "bgcengineering.ca — portfolio — environmental-management-of-nose-creek-inactive-landfill",
    "url": "https://www.bgcengineering.ca/portfolio/environmental-management-of-nose-creek-inactive-landfill/",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-010",
    "label": "bgcengineering.ca — expertise — groundwater",
    "url": "https://www.bgcengineering.ca/expertise/groundwater/",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-011",
    "label": "bgcengineering.ca — contact",
    "url": "https://www.bgcengineering.ca/contact/",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-012",
    "label": "ucalgary.ca — future-students — undergraduate — explore-programs — geoscience",
    "url": "https://www.ucalgary.ca/future-students/undergraduate/explore-programs/geoscience",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-013",
    "label": "mcelhanney.com — locations — calgary-alberta",
    "url": "https://www.mcelhanney.com/locations/calgary-alberta/",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-014",
    "label": "mcelhanney.com — services — geomatics",
    "url": "https://www.mcelhanney.com/services/geomatics/",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-015",
    "label": "mcelhanney.com — lidar",
    "url": "https://www.mcelhanney.com/lidar/",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-016",
    "label": "sait.ca — programs-and-courses — diplomas — geomatics-engineering-technology",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/geomatics-engineering-technology",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-017",
    "label": "alsglobal.com — en — News-and-publications — 2025 — 05 — Fast-Accurate-Testing-of-Alkanolamines-and-Sulfolane-in-Water-by-LCMS",
    "url": "https://www.alsglobal.com/en/News-and-publications/2025/05/Fast-Accurate-Testing-of-Alkanolamines-and-Sulfolane-in-Water-by-LCMS",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-018",
    "label": "sait.ca — programs-and-courses — diplomas — chemical-laboratory-technology",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/chemical-laboratory-technology",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-019",
    "label": "innotechalberta.ca — facilities — catalyst-sorbent-and-carbon-materials-characterization-lab",
    "url": "https://innotechalberta.ca/facilities/catalyst-sorbent-and-carbon-materials-characterization-lab/",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-020",
    "label": "innotechalberta.ca — news — innotech-to-host-turquoise-hydrogen-production-course",
    "url": "https://innotechalberta.ca/news/innotech-to-host-turquoise-hydrogen-production-course/",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-021",
    "label": "ucalgary.ca — future-students — undergraduate — explore-programs — chemistry",
    "url": "https://www.ucalgary.ca/future-students/undergraduate/explore-programs/chemistry",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-022",
    "label": "xylem.com — siteassets — support — case-studies — case-studies-pdf — cs-city-of-calgary-smartball.pdf",
    "url": "https://www.xylem.com/siteassets/support/case-studies/case-studies-pdf/cs-city-of-calgary-smartball.pdf",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-023",
    "label": "xylem.com — siteassets — brand — pure-technologies — resources — brochure — pure-technologies-smartball-brochure-q3-2022.pdf",
    "url": "https://www.xylem.com/siteassets/brand/pure-technologies/resources/brochure/pure-technologies-smartball-brochure-q3-2022.pdf",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-024",
    "label": "sait.ca — programs-and-courses — diplomas — instrumentation-engineering-technology",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/instrumentation-engineering-technology",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-025",
    "label": "calfrac.com — about-us — technology",
    "url": "https://calfrac.com/about-us/technology/",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-026",
    "label": "calfrac.com — contact — calgary-technology-center",
    "url": "https://calfrac.com/contact/calgary-technology-center/",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-027",
    "label": "investors.calfrac.com — static-files — 1abebef1-c6d4-4873-af2b-4efe98eb662f",
    "url": "https://investors.calfrac.com/static-files/1abebef1-c6d4-4873-af2b-4efe98eb662f",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-028",
    "label": "schulich.ucalgary.ca — future-students — undergraduate — programs — bsc-chemical-engineering",
    "url": "https://schulich.ucalgary.ca/future-students/undergraduate/programs/bsc-chemical-engineering",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-029",
    "label": "tricanwellservice.com — technical-solutions",
    "url": "https://tricanwellservice.com/technical-solutions/",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-030",
    "label": "tricanwellservice.com — cementing",
    "url": "https://tricanwellservice.com/cementing/",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-031",
    "label": "canadianenergyservices.com — laboratories",
    "url": "https://canadianenergyservices.com/laboratories/",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-032",
    "label": "cesenergysolutions.com — operations",
    "url": "https://www.cesenergysolutions.com/operations/",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-033",
    "label": "canadianenergyservices.com — wp-content — uploads — 2022 — 03 — CalgaryCESLab_2022_Spread.pdf",
    "url": "https://canadianenergyservices.com/wp-content/uploads/2022/03/CalgaryCESLab_2022_Spread.pdf",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-034",
    "label": "chata.ai — company — about-us",
    "url": "https://chata.ai/company/about-us",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-035",
    "label": "chata.ai — security",
    "url": "https://chata.ai/security",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-036",
    "label": "chata.ai — platform — implementation — build-with-autoql",
    "url": "https://chata.ai/platform/implementation/build-with-autoql",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-037",
    "label": "sait.ca — programs-and-courses — diplomas — software-development",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/software-development",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-038",
    "label": "aimsio.com — features — tickets",
    "url": "https://aimsio.com/features/tickets/",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-039",
    "label": "aimsio.com — careers",
    "url": "https://aimsio.com/careers/",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-040",
    "label": "aimsio.com",
    "url": "https://aimsio.com/",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-041",
    "label": "atvenu.com — merchandise",
    "url": "https://www.atvenu.com/merchandise",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-042",
    "label": "atvenu.applytojob.com — apply — MhGv1daAzW — Potential-Opportunities",
    "url": "https://atvenu.applytojob.com/apply/MhGv1daAzW/Potential-Opportunities",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-043",
    "label": "trufla.com — products — trumobile",
    "url": "https://www.trufla.com/products/trumobile",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-044",
    "label": "trufla.com — careers",
    "url": "https://www.trufla.com/careers/",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-045",
    "label": "trufla.com — blog — 5-tips-to-drive-retention-and-new-customers",
    "url": "https://www.trufla.com/blog/5-tips-to-drive-retention-and-new-customers/",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-046",
    "label": "convverge.com — case-studies — healthcare-power-pages-portal",
    "url": "https://convverge.com/case-studies/healthcare-power-pages-portal/",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-047",
    "label": "convverge.com — about-us",
    "url": "https://convverge.com/about-us/",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-048",
    "label": "convverge.com — calgary",
    "url": "https://convverge.com/calgary/",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-049",
    "label": "validere.com — contact",
    "url": "https://www.validere.com/contact",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-050",
    "label": "blog.validere.com — mobile-app-smart-alerting-features",
    "url": "https://blog.validere.com/mobile-app-smart-alerting-features",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-051",
    "label": "validere.com — webinars — show-emissions-progress",
    "url": "https://www.validere.com/webinars/show-emissions-progress",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-052",
    "label": "aboutamazon.ca — news — workplace — unveiling-calgarys-newest-amazon-robotics-fulfillment-centre-a-focus-on-collaboration",
    "url": "https://www.aboutamazon.ca/news/workplace/unveiling-calgarys-newest-amazon-robotics-fulfillment-centre-a-focus-on-collaboration",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-053",
    "label": "amazon.jobs — content — en — teams — fulfillment-and-operations — central-rme",
    "url": "https://amazon.jobs/content/en/teams/fulfillment-and-operations/central-rme",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-054",
    "label": "sait.ca — programs-and-courses — diplomas — business-administration-supply-chain-management",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/business-administration-supply-chain-management",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-055",
    "label": "atb.com — resources — find-a-location — calgary-uptown-17th-avenue-branch",
    "url": "https://www.atb.com/resources/find-a-location/calgary-uptown-17th-avenue-branch/",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-056",
    "label": "atb.com — business — good-advice — business-resources",
    "url": "https://www.atb.com/business/good-advice/business-resources/",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-057",
    "label": "atb.com — business — good-advice — start-up-business — starting-business-in-alberta-a-complete-guide",
    "url": "https://www.atb.com/business/good-advice/start-up-business/starting-business-in-alberta-a-complete-guide/",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-058",
    "label": "sait.ca — programs-and-courses — diplomas — business-administration-management",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/business-administration-management",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-059",
    "label": "prairiesky.com — investors",
    "url": "https://www.prairiesky.com/investors/",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-060",
    "label": "prairiesky.com — leadership",
    "url": "https://www.prairiesky.com/leadership/",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-061",
    "label": "sait.ca — programs-and-courses — diplomas — business-administration-accounting",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/business-administration-accounting",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-062",
    "label": "cpaalberta.ca — Become-a-CPA — Practical-Experience — PE-Policies",
    "url": "https://www.cpaalberta.ca/Become-a-CPA/Practical-Experience/PE-Policies",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-063",
    "label": "cpaalberta.ca — Become-a-CPA — Practical-Experience — Employers — Understand-the-Requirements",
    "url": "https://www.cpaalberta.ca/Become-a-CPA/Practical-Experience/Employers/Understand-the-Requirements",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-064",
    "label": "trailappliances.com — ab — p — location — calgary-south",
    "url": "https://www.trailappliances.com/ab/p/location/calgary-south",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-065",
    "label": "trailappliances.com — ab — p — contact-us",
    "url": "https://www.trailappliances.com/ab/p/contact-us",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-066",
    "label": "mnp.ca — en — offices — calgary-downtown",
    "url": "https://www.mnp.ca/en/offices/calgary-downtown",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-067",
    "label": "mnp.ca — en — personnel — phil-reisinger",
    "url": "https://www.mnp.ca/en/personnel/phil-reisinger",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-068",
    "label": "mnp.ca — careers",
    "url": "https://www.mnp.ca/careers",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-069",
    "label": "atco.com — content — dam — atco-website — en-ca — web — assets — investors — atco-annual-report-2025.pdf",
    "url": "https://www.atco.com/content/dam/atco-website/en-ca/web/assets/investors/atco-annual-report-2025.pdf",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-070",
    "label": "atco.com — content — dam — atco-website — en-ca — web — assets — investors — atco_2025_q1.pdf",
    "url": "https://www.atco.com/content/dam/atco-website/en-ca/web/assets/investors/atco_2025_q1.pdf",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-071",
    "label": "careers.atco.com — global — en",
    "url": "https://careers.atco.com/global/en",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-072",
    "label": "precisiondrilling.com — press-release — precision-drilling-announces-2025-fourth-quarter-and-year-end-unaudited-financial-results",
    "url": "https://www.precisiondrilling.com/press-release/precision-drilling-announces-2025-fourth-quarter-and-year-end-unaudited-financial-results/",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-073",
    "label": "precisiondrilling.com — wp-content — uploads — 2026 — 03 — 2025-Modern-Salvery-Report-1.pdf",
    "url": "https://www.precisiondrilling.com/wp-content/uploads/2026/03/2025-Modern-Salvery-Report-1.pdf",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-source-074",
    "label": "jobs.precisiondrilling.com — go — View-All-Jobs — 8968600",
    "url": "https://jobs.precisiondrilling.com/go/View-All-Jobs/8968600/",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-shared-75",
    "label": "Biology 20 — official curriculum reference",
    "url": "https://education.alberta.ca/media/159727/bio203007.pdf",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct21-shared-76",
    "label": "Earthmaster Environmental — official website",
    "url": "https://earthmaster.ca",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-shared-77",
    "label": "Physics 20 — official curriculum reference",
    "url": "https://www.alberta.ca/system/files/custom_downloaded_images/edc-physics20-30-performance-standards.pdf",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct21-shared-78",
    "label": "Thurber Engineering — official website",
    "url": "https://thurber.ca",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-shared-79",
    "label": "BGC Engineering — official website",
    "url": "https://bgcengineering.ca",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-shared-80",
    "label": "Science 10 — official curriculum reference",
    "url": "https://education.alberta.ca/media/159715/science10.pdf",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct21-shared-81",
    "label": "McElhanney — official website",
    "url": "https://mcelhanney.com",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-shared-82",
    "label": "Chemistry 20 — official curriculum reference",
    "url": "https://education.alberta.ca/media/159730/chem2030_07.pdf",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct21-shared-83",
    "label": "ALS Canada — Calgary environmental laboratory — official website",
    "url": "https://alsglobal.com",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-shared-84",
    "label": "InnoTech Alberta — Calgary research — official website",
    "url": "https://innotechalberta.ca",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-shared-85",
    "label": "Pure Technologies / Xylem — official website",
    "url": "https://xylem.com",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-shared-86",
    "label": "Calfrac Well Services — official website",
    "url": "https://calfrac.com",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-shared-87",
    "label": "Trican Well Service — official website",
    "url": "https://tricanwellservice.com",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-shared-88",
    "label": "CES Energy Solutions — official website",
    "url": "https://cesenergysolutions.com",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-shared-89",
    "label": "INF2070 · Database 2 — official curriculum reference",
    "url": "https://curriculum.learnalberta.ca/curriculum/en/pos/CTSINF/INF2070",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct21-shared-90",
    "label": "Chata.ai — official website",
    "url": "https://chata.ai",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-shared-91",
    "label": "Aimsio — official website",
    "url": "https://aimsio.com",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-shared-92",
    "label": "atVenu — official website",
    "url": "https://atvenu.com",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-shared-93",
    "label": "CSE1120 · Structured Programming 2 — official curriculum reference",
    "url": "https://curriculum.learnalberta.ca/curriculum/en/pos/CTSCSE/CSE1120",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct21-shared-94",
    "label": "Trufla Technology — official website",
    "url": "https://trufla.com",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-shared-95",
    "label": "Convverge — official website",
    "url": "https://convverge.com",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-shared-96",
    "label": "Validere — official website",
    "url": "https://validere.com",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-shared-97",
    "label": "CSE1240 · Robotics Programming 1 — official curriculum reference",
    "url": "https://curriculum.learnalberta.ca/curriculum/en/pos/CTSCSE/CSE1240",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct21-shared-98",
    "label": "Amazon — Calgary YYC4 — official website",
    "url": "https://aboutamazon.ca",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-shared-99",
    "label": "ENT2010 · Analyzing Ventures — official curriculum reference",
    "url": "https://curriculum.learnalberta.ca/curriculum/en/pos/CTSENT/ENT2010",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct21-shared-100",
    "label": "ATB Financial — Calgary Entrepreneur Centre — official website",
    "url": "https://atb.com",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-shared-101",
    "label": "FIN3060 · Financial Analysis — official curriculum reference",
    "url": "https://curriculum.learnalberta.ca/curriculum/en/pos/CTSFIN/FIN3060",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct21-shared-102",
    "label": "PrairieSky Royalty — official website",
    "url": "https://prairiesky.com",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-shared-103",
    "label": "Trail Appliances — Calgary — official website",
    "url": "https://trailappliances.com",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-shared-104",
    "label": "MNP — Calgary — official website",
    "url": "https://mnp.ca",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-shared-105",
    "label": "ATCO — official website",
    "url": "https://atco.com",
    "checkedOn": "2026-10-21"
  },
  {
    "id": "oct21-shared-106",
    "label": "Precision Drilling — official website",
    "url": "https://precisiondrilling.com",
    "checkedOn": "2026-10-21"
  }
];
