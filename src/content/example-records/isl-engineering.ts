import type { ExampleRecord } from "../types";

export default {
  addedOn: "2026-10-17",
  example: {
    slug: "isl-engineering",
    org: "ISL Engineering",
    discipline: "Biology",
    question: "How can a road cross a creek without ignoring the landscape?",
    work: "ISL was the City of Calgary’s prime consultant for planning, detailed design and construction work on the 144 Avenue NW extension. Its project account describes steep terrain, a single-span bridge over West Nose Creek, creek work and multi-use pathways. This creates a local example of design constraints interacting, rather than a story about choosing the shortest line on a map.",
    localShort: "The featured road, creek crossing and pathways are in Calgary; ISL identifies the City as client.",
    calgary: "The featured road, creek crossing and pathways are in Calgary; ISL identifies the City as client.",
    site: "The featured road, creek crossing and pathways are in Calgary; ISL identifies the City as client.",
    localSourceIds: [
      "page-isl-engineering-oct17-source-64",
      "page-isl-engineering-oct17-source-65",
      "page-isl-engineering-oct17-source-66",
      "page-isl-engineering-oct17-source-67"
    ],
    explain: "Choose between two fictional corridors: one is shorter but steep and crosses a creek twice; one is longer and crosses once. List evidence needed before selecting either, without inventing a numerical score.",
    prompt: "Why might the shortest route be a poor design?",
    conversation: "Why might the shortest route be a poor design?",
    mindset: "The exercise is not the actual route evaluation. No claim that the real creek project had a measured biodiversity improvement is made.",
    courses: [
      {
        course: "Biology 20",
        topic: "Aquatic ecosystems and environmental evidence"
      }
    ],
    courseFitSourceIds: [
      "page-isl-engineering-oct17-source-6"
    ],
    roles: [
      {
        title: "Civil and construction technology",
        note: "Turn project requirements into usable drawings, quantities and checks.",
        evidence: "Project account describes planning/design/construction and engineering disciplines.",
        kind: "interpreted",
        sourceIds: [
          "page-isl-engineering-oct17-source-64",
          "page-isl-engineering-oct17-source-65",
          "page-isl-engineering-oct17-source-66",
          "page-isl-engineering-oct17-source-67"
        ]
      },
      {
        title: "Spatial data and mapping",
        note: "Turn measurements tied to places into usable spatial information. The work involves coordinates, scale and checking that datasets describe the same location and time.",
        evidence: "Site and route work support mapping; no specific surveyor posting is claimed.",
        kind: "interpreted",
        sourceIds: [
          "page-isl-engineering-oct17-source-64",
          "page-isl-engineering-oct17-source-65",
          "page-isl-engineering-oct17-source-66",
          "page-isl-engineering-oct17-source-67"
        ]
      },
      {
        title: "Environmental field assessment",
        note: "Collect and interpret evidence about a place before recommending an action.",
        evidence: "Project account identifies environmental management and creek work.",
        kind: "interpreted",
        sourceIds: [
          "page-isl-engineering-oct17-source-64",
          "page-isl-engineering-oct17-source-65",
          "page-isl-engineering-oct17-source-66",
          "page-isl-engineering-oct17-source-67"
        ]
      }
    ],
    rolesNote: "Work areas and related occupations, not a staff roster or a list of current vacancies. Each profile explains the evidence for its company connection.",
    pathways: [
      {
        kindLabel: "Diploma",
        label: "SAIT — Civil Engineering Technology, Municipal Major",
        note: "Study municipal infrastructure, design and drafting. Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
        kind: "interpreted",
        sourceIds: [
          "page-isl-engineering-oct17-source-16"
        ]
      },
      {
        kindLabel: "Bachelor’s degree",
        label: "University of Calgary — Civil Engineering",
        note: "Study the design and operation of structures, transportation and water infrastructure. Check current admissions and program requirements. A degree is not automatic professional licensure.",
        kind: "interpreted",
        sourceIds: [
          "page-isl-engineering-oct17-source-15"
        ]
      },
      {
        kindLabel: "Diploma",
        label: "SAIT — Geomatics Engineering Technology",
        note: "Learn surveying, GIS, positioning and remote sensing. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        kind: "interpreted",
        sourceIds: [
          "page-isl-engineering-oct17-source-8"
        ]
      },
      {
        kindLabel: "Diploma",
        label: "SAIT — Environmental Technology",
        note: "Study environmental monitoring, assessment and field methods. Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
        kind: "interpreted",
        sourceIds: [
          "page-isl-engineering-oct17-source-9"
        ]
      }
    ],
    ledger: [
      {
        type: "work",
        claim: "ISL was the City of Calgary’s prime consultant for planning, detailed design and construction work on the 144 Avenue NW extension. Its project account describes steep terrain, a single-span bridge over West Nose Creek, creek work and multi-use pathways. This creates a local example of design constraints interacting, rather than a story about choosing the shortest line on a map.",
        status: "Source-backed company/project account",
        kind: "stated",
        sourceIds: [
          "page-isl-engineering-oct17-source-64",
          "page-isl-engineering-oct17-source-65",
          "page-isl-engineering-oct17-source-66",
          "page-isl-engineering-oct17-source-67"
        ]
      },
      {
        type: "local connection",
        claim: "The featured road, creek crossing and pathways are in Calgary; ISL identifies the City as client.",
        status: "Source-backed local work",
        kind: "stated",
        sourceIds: [
          "page-isl-engineering-oct17-source-64",
          "page-isl-engineering-oct17-source-65",
          "page-isl-engineering-oct17-source-66",
          "page-isl-engineering-oct17-source-67"
        ]
      },
      {
        type: "course fit",
        claim: "Biology 20 B1.3k connects biotic and abiotic characteristics of aquatic ecosystems. Compare creek habitat and water observations before and after a crossing; road geometry is context rather than a claimed kinematics outcome.",
        status: "Editorial application of verified curriculum topics",
        kind: "interpreted",
        sourceIds: [
          "page-isl-engineering-oct17-source-6"
        ]
      },
      {
        type: "limits",
        claim: "Question narrowed from a generic safe route to the documented creek/terrain problem. Keep Indigenous engagement claims out unless specifically sourced and contextualized.",
        status: "Scope of this example",
        kind: "interpreted",
        sourceIds: [
          "page-isl-engineering-oct17-source-64",
          "page-isl-engineering-oct17-source-65",
          "page-isl-engineering-oct17-source-66",
          "page-isl-engineering-oct17-source-67"
        ]
      }
    ],
    sources: [
      {
        id: "page-isl-engineering-oct17-source-6",
        label: "Alberta Biology 20–30 program: water use and ecosystems",
        url: "https://education.alberta.ca/media/159727/bio203007.pdf"
      },
      {
        id: "page-isl-engineering-oct17-source-8",
        label: "SAIT — Geomatics Engineering Technology",
        url: "https://www.sait.ca/programs-and-courses/diplomas/geomatics-engineering-technology"
      },
      {
        id: "page-isl-engineering-oct17-source-9",
        label: "SAIT — Environmental Technology",
        url: "https://www.sait.ca/programs-and-courses/diplomas/environmental-technology"
      },
      {
        id: "page-isl-engineering-oct17-source-15",
        label: "University of Calgary — Civil Engineering",
        url: "https://schulich.ucalgary.ca/future-students/undergraduate/programs/bsc-civil-engineering"
      },
      {
        id: "page-isl-engineering-oct17-source-16",
        label: "SAIT — Civil Engineering Technology, Municipal Major",
        url: "https://www.sait.ca/programs-and-courses/diplomas/civil-engineering-technology-municipal"
      },
      {
        id: "page-isl-engineering-oct17-source-64",
        label: "ISL Engineering — company/project evidence 1",
        url: "https://islengineering.com/about/our-offices/"
      },
      {
        id: "page-isl-engineering-oct17-source-65",
        label: "ISL Engineering — company/project evidence 2",
        url: "https://islengineering.com/projects/"
      },
      {
        id: "page-isl-engineering-oct17-source-66",
        label: "ISL Engineering — company/project evidence 3",
        url: "https://islengineering.com/project/144-ave-nw-calgary-extension/"
      },
      {
        id: "page-isl-engineering-oct17-source-67",
        label: "ISL Engineering — company/project evidence 4",
        url: "https://islengineering.com/join-the-team/"
      }
    ],
    checkedOn: "2026-10-17",
    detailsId: "isl-engineering-details"
  },
  details: {
    id: "isl-engineering-details",
    exampleSlug: "isl-engineering",
    organizationId: "isl-engineering",
    story: {
      diagramKind: "research",
      illustrationSlug: "isl-engineering",
      subtitle: "A route has to work for people and for the ground and water beneath it.",
      caption: "A route has to work for people and for the ground and water beneath it.",
      steps: [
        {
          text: "Map the terrain, existing connections and watercourse before drawing a route.",
          kind: "interpreted",
          sourceIds: [
            "oct17-source-64",
            "oct17-source-65",
            "oct17-source-66",
            "oct17-source-67",
            "oct17-source-6"
          ]
        },
        {
          text: "Compare options for gradients, crossings and access. A change in one constraint can affect another.",
          kind: "interpreted",
          sourceIds: [
            "oct17-source-64",
            "oct17-source-65",
            "oct17-source-66",
            "oct17-source-67",
            "oct17-source-6"
          ]
        },
        {
          text: "Bring transportation, structural, water and environmental expertise together to develop the design.",
          kind: "interpreted",
          sourceIds: [
            "oct17-source-64",
            "oct17-source-65",
            "oct17-source-66",
            "oct17-source-67",
            "oct17-source-6"
          ]
        },
        {
          text: "Check the built corridor against its intended function and monitor the landscape it affects. Design intent is not a measured ecological outcome.",
          kind: "interpreted",
          sourceIds: [
            "oct17-source-64",
            "oct17-source-65",
            "oct17-source-66",
            "oct17-source-67",
            "oct17-source-6"
          ]
        }
      ],
      diagramAlt: "Conceptual teaching illustration for How can a road cross a creek without ignoring the landscape? Four numbered stages and arrows correspond to the explanation below.",
      diagramProvenance: "Generated fictional teaching illustration; source-grounded editorial simplification. Not a company process specification. Prompts and review: design/example-expansion-2026-10-17/.",
      discussion: "Why might the shortest route be a poor design?"
    },
    roleIds: [
      "work-civil-and-construction-technology",
      "work-spatial",
      "work-environmental-field-assessment"
    ],
    pathwayIds: [
      "oct17-route-sait-civil-engineering-technology-municipal-major",
      "oct17-route-university-of-calgary-civil-engineering",
      "oct17-route-sait-geomatics-engineering-technology",
      "oct17-route-sait-environmental-technology"
    ],
    jobIds: [],
    checkedOn: "2026-10-17"
  },
  organization: {
    id: "isl-engineering",
    name: "ISL Engineering",
    organizationType: "company",
    tagline: "A route has to work for people and for the ground and water beneath it.",
    description: {
      text: "ISL was the City of Calgary’s prime consultant for planning, detailed design and construction work on the 144 Avenue NW extension. Its project account describes steep terrain, a single-span bridge over West Nose Creek, creek work and multi-use pathways. This creates a local example of design constraints interacting, rather than a story about choosing the shortest line on a map. Separate Alberta procurement records show the range of work behind an engineering project. A 2025 bridge-and-culvert contract awarded to ISL included design, construction supervision, and post-construction and warranty inspections. In July 2026, Strathmore awarded ISL reservoir-expansion design work and listed its Calgary office. The reservoir brief asks for a construction plan that maintains water service. These are separate projects from Calgary’s 144 Avenue NW extension.",
      kind: "stated",
      sourceIds: [
        "oct17-source-64",
        "oct17-source-65",
        "oct17-source-66",
        "oct17-source-67",
        "alx-oct20-01-1",
        "alx-oct20-01-2"
      ]
    },
    problem: {
      text: "How can a road cross a creek without ignoring the landscape?",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-64",
        "oct17-source-65",
        "oct17-source-66",
        "oct17-source-67"
      ]
    },
    offering: {
      text: "Infrastructure planning, engineering and construction support, including Calgary’s 144 Avenue NW extension.",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-64",
        "oct17-source-65",
        "oct17-source-66",
        "oct17-source-67"
      ]
    },
    beneficiaries: {
      text: "Municipal project teams and people travelling through the completed corridor.",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-64",
        "oct17-source-65",
        "oct17-source-66",
        "oct17-source-67"
      ]
    },
    headquarters: {
      text: "Headquarters not separately verified for this example.",
      kind: "unresearched",
      sourceIds: []
    },
    localConnection: {
      text: "The featured road, creek crossing and pathways are in Calgary; ISL identifies the City as client.",
      kind: "stated",
      sourceIds: [
        "oct17-source-64",
        "oct17-source-65",
        "oct17-source-66",
        "oct17-source-67"
      ]
    },
    websiteSourceId: "oct17-source-64",
    checkedOn: "2026-10-20",
    careersSourceId: "oct17-source-67"
  },
  organizationRoles: [
    {
      organizationId: "isl-engineering",
      roleId: "work-civil-and-construction-technology",
      establishes: "related-work",
      label: "Project account describes planning/design/construction and engineering disciplines.",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-64",
        "oct17-source-65",
        "oct17-source-66",
        "oct17-source-67"
      ],
      checkedOn: "2026-10-17"
    },
    {
      organizationId: "isl-engineering",
      roleId: "work-spatial",
      establishes: "related-work",
      label: "Site and route work support mapping; no specific surveyor posting is claimed.",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-64",
        "oct17-source-65",
        "oct17-source-66",
        "oct17-source-67"
      ],
      checkedOn: "2026-10-17"
    },
    {
      organizationId: "isl-engineering",
      roleId: "work-environmental-field-assessment",
      establishes: "related-work",
      label: "Project account identifies environmental management and creek work.",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-64",
        "oct17-source-65",
        "oct17-source-66",
        "oct17-source-67"
      ],
      checkedOn: "2026-10-17"
    }
  ],
  jobs: [],
  sources: [
    {
      id: "oct17-source-64",
      label: "ISL Engineering — company/project evidence 1",
      url: "https://islengineering.com/about/our-offices/",
      checkedOn: "2026-10-17"
    },
    {
      id: "oct17-source-65",
      label: "ISL Engineering — company/project evidence 2",
      url: "https://islengineering.com/projects/",
      checkedOn: "2026-10-17"
    },
    {
      id: "oct17-source-66",
      label: "ISL Engineering — company/project evidence 3",
      url: "https://islengineering.com/project/144-ave-nw-calgary-extension/",
      checkedOn: "2026-10-17"
    },
    {
      id: "oct17-source-67",
      label: "ISL Engineering — company/project evidence 4",
      url: "https://islengineering.com/join-the-team/",
      checkedOn: "2026-10-17"
    },
    {
      "id": "alx-oct20-01-1",
      "label": "Alberta Purchasing Connection — ISL bridge and culvert engineering award (2025)",
      "url": "https://purchasing.alberta.ca/posting/AB-2025-04348",
      "checkedOn": "2026-10-20"
    },
    {
      "id": "alx-oct20-01-2",
      "label": "Alberta Purchasing Connection — Strathmore Wildflower Reservoir design award (2026)",
      "url": "https://purchasing.alberta.ca/posting/AB-2026-04298",
      "checkedOn": "2026-10-20"
    }
  ],
  diagram: {
    image: "/images/story-diagrams/isl-engineering-graphic-novel.webp",
    heading: "Design a crossing with its landscape in view",
    steps: [
      "Observe terrain, water and habitat.",
      "Compare routes and their constraints.",
      "Coordinate the road, pathway and creek crossing.",
      "Check conditions and monitor the affected landscape."
    ],
    note: "A generic crossing, not the actual 144 Avenue design. Monitoring is needed to establish environmental outcomes; a design intention is not a measured result."
  },
  unitLinks: [
    {
      unitId: "b20b",
      why: "Biology 20 B1.3k connects biotic and abiotic characteristics of aquatic ecosystems. Compare creek habitat and water observations before and after a crossing; road geometry is context rather than a claimed kinematics outcome."
    }
  ],
} satisfies ExampleRecord;
