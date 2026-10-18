import type { ExampleRecord } from "../types";

export default {
  addedOn: "2026-10-17",
  example: {
    slug: "cpkc",
    org: "CPKC",
    discipline: "Physics",
    question: "How can trains share a rail network without getting in each other’s way?",
    work: "CPKC operates a rail network across Canada, the United States and Mexico. Its 2025 annual report identifies Calgary as the location of its main operations centre and primary Canadian dispatch facility. Rail traffic controllers coordinate crews and day-to-day locomotive operations. The classroom model below simplifies the scheduling problem; it does not describe railway operating rules.",
    localShort: "Calgary operations centre and dispatch function are documented in the 2025 annual report.",
    calgary: "Calgary operations centre and dispatch function are documented in the 2025 annual report.",
    site: "Calgary operations centre and dispatch function are documented in the 2025 annual report.",
    localSourceIds: [
      "page-cpkc-oct17-source-29",
      "page-cpkc-oct17-source-30",
      "page-cpkc-oct17-source-31",
      "page-cpkc-oct17-source-32"
    ],
    explain: "On a fictional single-track segment, Train A occupies it from minute 0 to 8 and Train B from minute 5 to 12. Shift B to remove overlap, then discuss what additional safety margin would need a real rule rather than a guess.",
    prompt: "What happens to the rest of a timetable when one train is delayed?",
    conversation: "What happens to the rest of a timetable when one train is delayed?",
    mindset: "This is a scheduling puzzle, not a safe operating procedure. Do not invent braking distances or dispatch clearances.",
    courses: [
      {
        course: "Physics 20",
        topic: "Position-time graphs and motion"
      }
    ],
    courseFitSourceIds: [
      "page-cpkc-oct17-source-14"
    ],
    roles: [
      {
        title: "Rail traffic control",
        note: "Coordinate railway movements and crews within formal operating systems and rules.",
        evidence: "2025 company annual report explicitly identifies controllers and Calgary operations.",
        kind: "interpreted",
        sourceIds: [
          "page-cpkc-oct17-source-29",
          "page-cpkc-oct17-source-30",
          "page-cpkc-oct17-source-31",
          "page-cpkc-oct17-source-32"
        ]
      },
      {
        title: "Railway conductor work",
        note: "Support train movements and handling of rail vehicles through trained railway operations.",
        evidence: "SAIT describes conductor tasks as related railway work; no specific Calgary CPKC vacancy or project assignment is claimed.",
        kind: "interpreted",
        sourceIds: [
          "page-cpkc-oct17-source-29",
          "page-cpkc-oct17-source-30",
          "page-cpkc-oct17-source-31",
          "page-cpkc-oct17-source-32"
        ]
      },
      {
        title: "Software and data systems",
        note: "Build the tools that move, process and display information. Reliable software needs testing against missing, delayed and unexpected data as well as ideal examples.",
        evidence: "Adjacent network/data work; not a verified CPKC job or requirement for traffic control.",
        kind: "interpreted",
        sourceIds: [
          "page-cpkc-oct17-source-29",
          "page-cpkc-oct17-source-30",
          "page-cpkc-oct17-source-31",
          "page-cpkc-oct17-source-32"
        ]
      }
    ],
    rolesNote: "Work areas and related occupations, not a staff roster or a list of current vacancies. Each profile explains the evidence for its company connection.",
    pathways: [
      {
        kindLabel: "Employer training after selection",
        label: "CPKC — Employer rail traffic controller training",
        note: "A historical CPKC description outlined six months of company training for selected controller applicants, including qualification in railway operating rules. The indexed employer description listed high school completion or equivalent and employer selection and qualification requirements. The original job page is now unavailable, and its Montreal listing metadata conflicted with Calgary in the body. No open intake, current duration or present-day requirements are promised; check the current employer posting.",
        kind: "interpreted",
        sourceIds: [
          "page-cpkc-oct17-source-32"
        ]
      },
      {
        kindLabel: "Certificate",
        label: "SAIT — Railway Conductor",
        note: "Study railway operating procedures and train handling responsibilities. Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
        kind: "interpreted",
        sourceIds: [
          "page-cpkc-oct17-source-33"
        ]
      },
      {
        kindLabel: "Diploma",
        label: "SAIT — Software Development",
        note: "Learn to design, test and build software across front-end and back-end systems. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        kind: "interpreted",
        sourceIds: [
          "page-cpkc-oct17-source-34"
        ]
      }
    ],
    ledger: [
      {
        type: "work",
        claim: "CPKC operates a rail network across Canada, the United States and Mexico. Its 2025 annual report identifies Calgary as the location of its main operations centre and primary Canadian dispatch facility. Rail traffic controllers coordinate crews and day-to-day locomotive operations. The classroom model below simplifies the scheduling problem; it does not describe railway operating rules.",
        status: "Source-backed company/project account",
        kind: "stated",
        sourceIds: [
          "page-cpkc-oct17-source-29",
          "page-cpkc-oct17-source-30",
          "page-cpkc-oct17-source-31",
          "page-cpkc-oct17-source-32"
        ]
      },
      {
        type: "local connection",
        claim: "Calgary operations centre and dispatch function are documented in the 2025 annual report.",
        status: "Source-backed local work",
        kind: "stated",
        sourceIds: [
          "page-cpkc-oct17-source-29",
          "page-cpkc-oct17-source-30",
          "page-cpkc-oct17-source-31",
          "page-cpkc-oct17-source-32"
        ]
      },
      {
        type: "course fit",
        claim: "Physics 20 A1 supports interpreting position-time graphs. Compare fictional movements; timetable decisions and railway rules are extensions beyond the classroom model.",
        status: "Editorial application of verified curriculum topics",
        kind: "interpreted",
        sourceIds: [
          "page-cpkc-oct17-source-14"
        ]
      },
      {
        type: "limits",
        claim: "Controller entry is represented by a historical employer-training example, not a current vacancy or guaranteed six-month intake. SAIT Railway Conductor leads toward conductor work, not controller qualification. Older agreement terms are not treated as current.",
        status: "Scope of this example",
        kind: "interpreted",
        sourceIds: [
          "page-cpkc-oct17-source-29",
          "page-cpkc-oct17-source-30",
          "page-cpkc-oct17-source-31",
          "page-cpkc-oct17-source-32"
        ]
      }
    ],
    sources: [
      {
        id: "page-cpkc-oct17-source-14",
        label: "Alberta Physics 20–30 performance standards: A1, B1 and C1",
        url: "https://www.alberta.ca/system/files/custom_downloaded_images/edc-physics20-30-performance-standards.pdf"
      },
      {
        id: "page-cpkc-oct17-source-29",
        label: "CPKC — company/project evidence 1",
        url: "https://s21.q4cdn.com/736796105/files/doc_financials/2025/ar/v2/CPKC-Annual-Report-2025-Final-Web.pdf"
      },
      {
        id: "page-cpkc-oct17-source-30",
        label: "CPKC — company/project evidence 2",
        url: "https://www.cpkcr.com/content/dam/cpkc/documents/english/labour-agreements/TCRC%20RTC%20and%20CP%20%282021-2023%29.pdf"
      },
      {
        id: "page-cpkc-oct17-source-31",
        label: "CPKC — company/project evidence 3",
        url: "https://investor.cpkcr.com/news/press-release-details/2025/CPKC-receives-arbitration-decision-establishing-new-TCRC-collective-agreements/default.aspx"
      },
      {
        id: "page-cpkc-oct17-source-32",
        label: "CPKC — company/project evidence 4",
        url: "https://careers.cpr.ca/job/Montreal-Rail-Traffic-Controller-QC-H4W-2J9/595098117/"
      },
      {
        id: "page-cpkc-oct17-source-33",
        label: "SAIT — Railway Conductor",
        url: "https://www.sait.ca/programs-and-courses/certificates/railway-conductor"
      },
      {
        id: "page-cpkc-oct17-source-34",
        label: "SAIT — Software Development",
        url: "https://www.sait.ca/programs-and-courses/diplomas/software-development"
      }
    ],
    checkedOn: "2026-10-17",
    detailsId: "cpkc-details"
  },
  details: {
    id: "cpkc-details",
    exampleSlug: "cpkc",
    organizationId: "cpkc",
    story: {
      diagramKind: "research",
      illustrationSlug: "cpkc",
      subtitle: "A railway moves through space, but its plan also has to work through time.",
      caption: "A railway moves through space, but its plan also has to work through time.",
      steps: [
        {
          text: "Two trains can need the same section of track at different times. Distance alone does not reveal a conflict.",
          kind: "interpreted",
          sourceIds: [
            "oct17-source-29",
            "oct17-source-30",
            "oct17-source-31",
            "oct17-source-32",
            "oct17-source-14"
          ]
        },
        {
          text: "A time-distance diagram lets a planner compare movement and waiting in one view.",
          kind: "interpreted",
          sourceIds: [
            "oct17-source-29",
            "oct17-source-30",
            "oct17-source-31",
            "oct17-source-32",
            "oct17-source-14"
          ]
        },
        {
          text: "Changing one train’s departure may affect several later movements. Plans have to consider constraints together.",
          kind: "interpreted",
          sourceIds: [
            "oct17-source-29",
            "oct17-source-30",
            "oct17-source-31",
            "oct17-source-32",
            "oct17-source-14"
          ]
        },
        {
          text: "Real rail operations use formal rules, communication and trained staff. A classroom timetable illustrates only one part of that system.",
          kind: "interpreted",
          sourceIds: [
            "oct17-source-29",
            "oct17-source-30",
            "oct17-source-31",
            "oct17-source-32",
            "oct17-source-14"
          ]
        }
      ],
      diagramAlt: "Conceptual teaching illustration for How can trains share a rail network without getting in each other’s way? Four numbered stages and arrows correspond to the explanation below.",
      diagramProvenance: "Generated fictional teaching illustration; source-grounded editorial simplification. Not a company process specification. Prompts and review: design/example-expansion-2026-10-17/.",
      discussion: "What happens to the rest of a timetable when one train is delayed?"
    },
    roleIds: [
      "work-rail-traffic-control",
      "work-railway-conductor-work",
      "work-software"
    ],
    pathwayIds: [
      "oct17-route-cpkc-employer-rail-traffic-controller-training",
      "oct17-route-sait-railway-conductor",
      "oct17-route-sait-software-development"
    ],
    jobIds: [],
    checkedOn: "2026-10-17"
  },
  organization: {
    id: "cpkc",
    name: "CPKC",
    organizationType: "company",
    tagline: "A railway moves through space, but its plan also has to work through time.",
    description: {
      text: "CPKC operates a rail network across Canada, the United States and Mexico. Its 2025 annual report identifies Calgary as the location of its main operations centre and primary Canadian dispatch facility. Rail traffic controllers coordinate crews and day-to-day locomotive operations. The classroom model below simplifies the scheduling problem; it does not describe railway operating rules.",
      kind: "stated",
      sourceIds: [
        "oct17-source-29",
        "oct17-source-30",
        "oct17-source-31",
        "oct17-source-32"
      ]
    },
    problem: {
      text: "How can trains share a rail network without getting in each other’s way?",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-29",
        "oct17-source-30",
        "oct17-source-31",
        "oct17-source-32"
      ]
    },
    offering: {
      text: "Rail transportation supported by operations planning and network coordination.",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-29",
        "oct17-source-30",
        "oct17-source-31",
        "oct17-source-32"
      ]
    },
    beneficiaries: {
      text: "Businesses moving freight and the crews coordinating train movements.",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-29",
        "oct17-source-30",
        "oct17-source-31",
        "oct17-source-32"
      ]
    },
    headquarters: {
      text: "Headquarters not separately verified for this example.",
      kind: "unresearched",
      sourceIds: []
    },
    localConnection: {
      text: "Calgary operations centre and dispatch function are documented in the 2025 annual report.",
      kind: "stated",
      sourceIds: [
        "oct17-source-29",
        "oct17-source-30",
        "oct17-source-31",
        "oct17-source-32"
      ]
    },
    websiteSourceId: "oct17-cpkc-website",
    checkedOn: "2026-10-17",
    careersSourceId: "oct17-source-32"
  },
  organizationRoles: [
    {
      organizationId: "cpkc",
      roleId: "work-rail-traffic-control",
      establishes: "related-work",
      label: "2025 company annual report explicitly identifies controllers and Calgary operations.",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-29",
        "oct17-source-30",
        "oct17-source-31",
        "oct17-source-32"
      ],
      checkedOn: "2026-10-17"
    },
    {
      organizationId: "cpkc",
      roleId: "work-railway-conductor-work",
      establishes: "related-work",
      label: "SAIT describes conductor tasks as related railway work; no specific Calgary CPKC vacancy or project assignment is claimed.",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-33"
      ],
      checkedOn: "2026-10-17"
    },
    {
      organizationId: "cpkc",
      roleId: "work-software",
      establishes: "related-work",
      label: "Adjacent network/data work; not a verified CPKC job or requirement for traffic control.",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-34"
      ],
      checkedOn: "2026-10-17"
    }
  ],
  jobs: [],
  sources: [
    {
      id: "oct17-source-29",
      label: "CPKC — company/project evidence 1",
      url: "https://s21.q4cdn.com/736796105/files/doc_financials/2025/ar/v2/CPKC-Annual-Report-2025-Final-Web.pdf",
      checkedOn: "2026-10-17"
    },
    {
      id: "oct17-source-30",
      label: "CPKC — company/project evidence 2",
      url: "https://www.cpkcr.com/content/dam/cpkc/documents/english/labour-agreements/TCRC%20RTC%20and%20CP%20%282021-2023%29.pdf",
      checkedOn: "2026-10-17"
    },
    {
      id: "oct17-source-31",
      label: "CPKC — company/project evidence 3",
      url: "https://investor.cpkcr.com/news/press-release-details/2025/CPKC-receives-arbitration-decision-establishing-new-TCRC-collective-agreements/default.aspx",
      checkedOn: "2026-10-17"
    },
    {
      id: "oct17-cpkc-website",
      label: "CPKC — official website (automated access restricted)",
      url: "https://www.cpkcr.com/",
      checkedOn: "2026-10-17"
    }
  ],
  diagram: {
    image: "/images/story-diagrams/cpkc-graphic-novel.webp",
    heading: "Compare movements in space and time",
    steps: [
      "Identify movements that need a shared corridor.",
      "Compare position against time for each movement.",
      "Look for a possible conflict in the same space and time.",
      "Revise the plan and check it again."
    ],
    note: "Horizontal axis: time; vertical axis: position. The charts are fictional and cover only the illustrated interval. They are not dispatch instructions or proof a complete railway plan is safe."
  },
  unitLinks: [
    {
      unitId: "p20a",
      why: "Physics 20 A1 supports interpreting position-time graphs. Compare fictional movements; timetable decisions and railway rules are extensions beyond the classroom model."
    }
  ],
} satisfies ExampleRecord;
