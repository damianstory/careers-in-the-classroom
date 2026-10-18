import type { ExampleRecord } from "../types";

export default {
  addedOn: "2026-10-17",
  example: {
    slug: "entuitive",
    org: "Entuitive",
    discipline: "Physics",
    question: "How can you support a library above a moving train?",
    work: "Entuitive provided structural engineering for Calgary’s Central Library. Its Calgary-based project lead describes the challenge of building above an active LRT corridor using long-span trusses and coordinating construction with transit operations. Structural engineering helps the building carry loads while leaving space for the railway. The architect, builder and transit operator had different responsibilities.",
    localShort: "Calgary project and a Calgary-based structural engineering lead are explicitly documented.",
    calgary: "Calgary project and a Calgary-based structural engineering lead are explicitly documented.",
    site: "Calgary project and a Calgary-based structural engineering lead are explicitly documented.",
    localSourceIds: [
      "page-entuitive-oct17-source-10",
      "page-entuitive-oct17-source-11",
      "page-entuitive-oct17-source-12",
      "page-entuitive-oct17-source-13"
    ],
    explain: "Sketch a fictional floor across a no-support zone. Trace a load path to the ground and identify a connection that would need checking.",
    prompt: "Why might a structure that works when complete need extra support during construction?",
    conversation: "Why might a structure that works when complete need extra support during construction?",
    mindset: "Conceptual force arrows are not an engineered design. Do not suggest students can assess a real building’s safety from a drawing.",
    courses: [
      {
        course: "Physics 20",
        topic: "Balanced forces and structural load paths"
      }
    ],
    courseFitSourceIds: [
      "page-entuitive-oct17-source-14"
    ],
    roles: [
      {
        title: "Structural engineering",
        note: "Work out how a structure transfers loads through members and connections to its supports.",
        evidence: "Entuitive identifies its structural engineering contribution and Calgary project lead.",
        kind: "interpreted",
        sourceIds: [
          "page-entuitive-oct17-source-10",
          "page-entuitive-oct17-source-11",
          "page-entuitive-oct17-source-12",
          "page-entuitive-oct17-source-13"
        ]
      },
      {
        title: "Civil and construction technology",
        note: "Turn project requirements into usable drawings, quantities and checks.",
        evidence: "Technical detailing is documented in the project account; this is not a verified vacancy.",
        kind: "interpreted",
        sourceIds: [
          "page-entuitive-oct17-source-10",
          "page-entuitive-oct17-source-11",
          "page-entuitive-oct17-source-12",
          "page-entuitive-oct17-source-13"
        ]
      },
      {
        title: "Construction coordination",
        note: "Help different teams work from compatible information and an achievable sequence.",
        evidence: "The project account describes construction sequencing and transit coordination; role label is editorial.",
        kind: "interpreted",
        sourceIds: [
          "page-entuitive-oct17-source-10",
          "page-entuitive-oct17-source-11",
          "page-entuitive-oct17-source-12",
          "page-entuitive-oct17-source-13"
        ]
      }
    ],
    rolesNote: "Work areas and related occupations, not a staff roster or a list of current vacancies. Each profile explains the evidence for its company connection.",
    pathways: [
      {
        kindLabel: "Bachelor’s degree",
        label: "University of Calgary — Civil Engineering",
        note: "Study the design and operation of structures, transportation and water infrastructure. Check current admissions and program requirements. A degree is not automatic professional licensure.",
        kind: "interpreted",
        sourceIds: [
          "page-entuitive-oct17-source-15"
        ]
      },
      {
        kindLabel: "Diploma",
        label: "SAIT — Civil Engineering Technology, Municipal Major",
        note: "Study municipal infrastructure, design and drafting. Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
        kind: "interpreted",
        sourceIds: [
          "page-entuitive-oct17-source-16"
        ]
      },
      {
        kindLabel: "Diploma",
        label: "SAIT — Architectural Technologies",
        note: "Study building design, technical drawings and construction systems. Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
        kind: "interpreted",
        sourceIds: [
          "page-entuitive-oct17-source-17"
        ]
      }
    ],
    ledger: [
      {
        type: "work",
        claim: "Entuitive provided structural engineering for Calgary’s Central Library. Its Calgary-based project lead describes the challenge of building above an active LRT corridor using long-span trusses and coordinating construction with transit operations. Structural engineering helps the building carry loads while leaving space for the railway. The architect, builder and transit operator had different responsibilities.",
        status: "Source-backed company/project account",
        kind: "stated",
        sourceIds: [
          "page-entuitive-oct17-source-10",
          "page-entuitive-oct17-source-11",
          "page-entuitive-oct17-source-12",
          "page-entuitive-oct17-source-13"
        ]
      },
      {
        type: "local connection",
        claim: "Calgary project and a Calgary-based structural engineering lead are explicitly documented.",
        status: "Source-backed local work",
        kind: "stated",
        sourceIds: [
          "page-entuitive-oct17-source-10",
          "page-entuitive-oct17-source-11",
          "page-entuitive-oct17-source-12",
          "page-entuitive-oct17-source-13"
        ]
      },
      {
        type: "course fit",
        claim: "Physics 20 B1 concerns balanced and unbalanced forces. Draw a simplified free-body diagram; truss design and construction sequencing are engineering extensions.",
        status: "Editorial application of verified curriculum topics",
        kind: "interpreted",
        sourceIds: [
          "page-entuitive-oct17-source-14"
        ]
      },
      {
        type: "limits",
        claim: "Keep the LRT beneath a supported span. No invented loads, dimensions or claims that a generic illustration is the actual library structure.",
        status: "Scope of this example",
        kind: "interpreted",
        sourceIds: [
          "page-entuitive-oct17-source-10",
          "page-entuitive-oct17-source-11",
          "page-entuitive-oct17-source-12",
          "page-entuitive-oct17-source-13"
        ]
      }
    ],
    sources: [
      {
        id: "page-entuitive-oct17-source-10",
        label: "Entuitive — company/project evidence 1",
        url: "https://www.entuitive.com/post/designing-for-constructability-over-active-rail-lines"
      },
      {
        id: "page-entuitive-oct17-source-11",
        label: "Entuitive — company/project evidence 2",
        url: "https://view.ceros.com/entuitive/new-calgary-library-big-story"
      },
      {
        id: "page-entuitive-oct17-source-12",
        label: "Entuitive — company/project evidence 3",
        url: "https://www.calgarymlc.ca/projects/central-library"
      },
      {
        id: "page-entuitive-oct17-source-13",
        label: "Entuitive — company/project evidence 4",
        url: "https://www.entuitive.com/careers"
      },
      {
        id: "page-entuitive-oct17-source-14",
        label: "Alberta Physics 20–30 performance standards: A1, B1 and C1",
        url: "https://www.alberta.ca/system/files/custom_downloaded_images/edc-physics20-30-performance-standards.pdf"
      },
      {
        id: "page-entuitive-oct17-source-15",
        label: "University of Calgary — Civil Engineering",
        url: "https://schulich.ucalgary.ca/future-students/undergraduate/programs/bsc-civil-engineering"
      },
      {
        id: "page-entuitive-oct17-source-16",
        label: "SAIT — Civil Engineering Technology, Municipal Major",
        url: "https://www.sait.ca/programs-and-courses/diplomas/civil-engineering-technology-municipal"
      },
      {
        id: "page-entuitive-oct17-source-17",
        label: "SAIT — Architectural Technologies",
        url: "https://www.sait.ca/programs-and-courses/diplomas/architectural-technologies"
      }
    ],
    checkedOn: "2026-10-17",
    detailsId: "entuitive-details"
  },
  details: {
    id: "entuitive-details",
    exampleSlug: "entuitive",
    organizationId: "entuitive",
    story: {
      diagramKind: "research",
      illustrationSlug: "entuitive",
      subtitle: "The space below a building can be just as important as the rooms inside it.",
      caption: "The space below a building can be just as important as the rooms inside it.",
      steps: [
        {
          text: "A building’s weight and the people inside create loads that must reach the ground.",
          kind: "interpreted",
          sourceIds: [
            "oct17-source-10",
            "oct17-source-11",
            "oct17-source-12",
            "oct17-source-13",
            "oct17-source-14"
          ]
        },
        {
          text: "An active rail corridor limits where supports can go. The structure has to span the space.",
          kind: "interpreted",
          sourceIds: [
            "oct17-source-10",
            "oct17-source-11",
            "oct17-source-12",
            "oct17-source-13",
            "oct17-source-14"
          ]
        },
        {
          text: "Truss members and connections transfer forces along a designed load path. Construction stages need their own checks.",
          kind: "interpreted",
          sourceIds: [
            "oct17-source-10",
            "oct17-source-11",
            "oct17-source-12",
            "oct17-source-13",
            "oct17-source-14"
          ]
        },
        {
          text: "Engineers coordinate the drawings and sequence with builders and transit staff so the permanent design can be built.",
          kind: "interpreted",
          sourceIds: [
            "oct17-source-10",
            "oct17-source-11",
            "oct17-source-12",
            "oct17-source-13",
            "oct17-source-14"
          ]
        }
      ],
      diagramAlt: "Conceptual teaching illustration for How can you support a library above a moving train? Four numbered stages and arrows correspond to the explanation below.",
      diagramProvenance: "Generated fictional teaching illustration; source-grounded editorial simplification. Not a company process specification. Prompts and review: design/example-expansion-2026-10-17/.",
      discussion: "Why might a structure that works when complete need extra support during construction?"
    },
    roleIds: [
      "work-structural-engineering",
      "work-civil-and-construction-technology",
      "work-construction-coordination"
    ],
    pathwayIds: [
      "oct17-route-university-of-calgary-civil-engineering",
      "oct17-route-sait-civil-engineering-technology-municipal-major",
      "oct17-route-sait-architectural-technologies"
    ],
    jobIds: [],
    checkedOn: "2026-10-17"
  },
  organization: {
    id: "entuitive",
    name: "Entuitive",
    organizationType: "company",
    tagline: "The space below a building can be just as important as the rooms inside it.",
    description: {
      text: "Entuitive provided structural engineering for Calgary’s Central Library. Its Calgary-based project lead describes the challenge of building above an active LRT corridor using long-span trusses and coordinating construction with transit operations. Structural engineering helps the building carry loads while leaving space for the railway. The architect, builder and transit operator had different responsibilities.",
      kind: "stated",
      sourceIds: [
        "oct17-source-10",
        "oct17-source-11",
        "oct17-source-12",
        "oct17-source-13"
      ]
    },
    problem: {
      text: "How can you support a library above a moving train?",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-10",
        "oct17-source-11",
        "oct17-source-12",
        "oct17-source-13"
      ]
    },
    offering: {
      text: "Structural engineering and coordination for buildings such as Calgary’s Central Library.",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-10",
        "oct17-source-11",
        "oct17-source-12",
        "oct17-source-13"
      ]
    },
    beneficiaries: {
      text: "Building owners, design and construction teams, and people who use the completed spaces.",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-10",
        "oct17-source-11",
        "oct17-source-12",
        "oct17-source-13"
      ]
    },
    headquarters: {
      text: "Headquarters not separately verified for this example.",
      kind: "unresearched",
      sourceIds: []
    },
    localConnection: {
      text: "Calgary project and a Calgary-based structural engineering lead are explicitly documented.",
      kind: "stated",
      sourceIds: [
        "oct17-source-10",
        "oct17-source-11",
        "oct17-source-12",
        "oct17-source-13"
      ]
    },
    websiteSourceId: "oct17-entuitive-website",
    checkedOn: "2026-10-17",
    careersSourceId: "oct17-source-13"
  },
  organizationRoles: [
    {
      organizationId: "entuitive",
      roleId: "work-structural-engineering",
      establishes: "related-work",
      label: "Entuitive identifies its structural engineering contribution and Calgary project lead.",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-10",
        "oct17-source-11",
        "oct17-source-12",
        "oct17-source-13"
      ],
      checkedOn: "2026-10-17"
    },
    {
      organizationId: "entuitive",
      roleId: "work-civil-and-construction-technology",
      establishes: "related-work",
      label: "Technical detailing is documented in the project account; this is not a verified vacancy.",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-10",
        "oct17-source-11",
        "oct17-source-12",
        "oct17-source-13"
      ],
      checkedOn: "2026-10-17"
    },
    {
      organizationId: "entuitive",
      roleId: "work-construction-coordination",
      establishes: "related-work",
      label: "The project account describes construction sequencing and transit coordination; role label is editorial.",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-10",
        "oct17-source-11",
        "oct17-source-12",
        "oct17-source-13"
      ],
      checkedOn: "2026-10-17"
    }
  ],
  jobs: [],
  sources: [
    {
      id: "oct17-source-10",
      label: "Entuitive — company/project evidence 1",
      url: "https://www.entuitive.com/post/designing-for-constructability-over-active-rail-lines",
      checkedOn: "2026-10-17"
    },
    {
      id: "oct17-source-11",
      label: "Entuitive — company/project evidence 2",
      url: "https://view.ceros.com/entuitive/new-calgary-library-big-story",
      checkedOn: "2026-10-17"
    },
    {
      id: "oct17-source-12",
      label: "Entuitive — company/project evidence 3",
      url: "https://www.calgarymlc.ca/projects/central-library",
      checkedOn: "2026-10-17"
    },
    {
      id: "oct17-source-13",
      label: "Entuitive — company/project evidence 4",
      url: "https://www.entuitive.com/careers",
      checkedOn: "2026-10-17"
    },
    {
      id: "oct17-entuitive-website",
      label: "Entuitive — official website",
      url: "https://www.entuitive.com/",
      checkedOn: "2026-10-17"
    }
  ],
  diagram: {
    image: "/images/story-diagrams/entuitive-graphic-novel.webp",
    heading: "Follow the load to the ground",
    steps: [
      "People and the building load the floor.",
      "Truss members transfer forces across the open span.",
      "Columns carry loads outside the railway corridor.",
      "Foundations transfer loads to the ground."
    ],
    note: "Arrows show a conceptual load path, not a complete force diagram or the actual library structure. Construction-stage supports require separate design."
  },
  unitLinks: [
    {
      unitId: "p20b",
      why: "Physics 20 B1 concerns balanced and unbalanced forces. Draw a simplified free-body diagram; truss design and construction sequencing are engineering extensions."
    }
  ],
} satisfies ExampleRecord;
