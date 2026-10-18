import type { ExampleRecord } from "../types";

export default {
  addedOn: "2026-10-15",
  example: {
    slug: "foremost",
    org: "Foremost",
    discipline: "Physics",
    question: "How can a heavy vehicle travel over soft ground without sinking?",
    work: "Foremost manufactures industrial and mobile equipment and identifies Calgary among its Alberta locations. Its product material includes wheeled and tracked off-road vehicles. The classroom story uses ground contact to connect vehicle design with pressure and mobility.",
    localShort: "Calgary North engineering and manufacturing facility. The company explicitly lists tracked and wheeled off-road vehicle engineering here; individual model build locations are not asserted.",
    calgary: "Calgary North engineering and manufacturing facility. The company explicitly lists tracked and wheeled off-road vehicle engineering here; individual model build locations are not asserted.",
    site: "Calgary North engineering and manufacturing facility. The company explicitly lists tracked and wheeled off-road vehicle engineering here; individual model build locations are not asserted.",
    localSourceIds: [
      "page-foremost-expansion-source-49",
      "page-foremost-expansion-source-50",
      "page-foremost-expansion-source-51",
      "page-foremost-expansion-source-51"
    ],
    explain: "Use fictional loads and contact areas to compare average pressures. Then introduce uneven ground and ask which assumptions the simple calculation leaves out.",
    prompt: "Would doubling the contact area guarantee that a vehicle never sinks?",
    conversation: "Would doubling the contact area guarantee that a vehicle never sinks?",
    mindset: "Keep the same force units and area units. This is a simplified model, not a performance claim for any Foremost vehicle.",
    courses: [
      {
        course: "Physics 20",
        topic: "Forces and contact with the ground"
      }
    ],
    courseFitSourceIds: [
      "page-foremost-expansion-source-12"
    ],
    roles: [
      {
        title: "Mechanical design and prototyping",
        note: "Translate a need into a component or machine that can be built and tested. Designers use dimensions, material properties and constraints to evaluate alternatives.",
        evidence: "Company manufacturing and equipment capabilities establish design-related work; individual assignments are not confirmed.",
        kind: "interpreted",
        sourceIds: [
          "page-foremost-expansion-source-49",
          "page-foremost-expansion-source-50",
          "page-foremost-expansion-source-51",
          "page-foremost-expansion-source-51"
        ]
      },
      {
        title: "Metal fabrication and welding",
        note: "Join and assemble material into usable structures. Fabrication work follows drawings and procedures, then checks whether the finished work meets its requirements.",
        evidence: "Employer career material lists welding; application and exact location are unverified.",
        kind: "interpreted",
        sourceIds: [
          "page-foremost-expansion-source-49",
          "page-foremost-expansion-source-50",
          "page-foremost-expansion-source-51",
          "page-foremost-expansion-source-51"
        ]
      },
      {
        title: "Industrial machinery assembly and maintenance",
        note: "Make machinery work together as a physical system. Millwright work connects assembly, alignment, inspection and troubleshooting.",
        evidence: "Employer career material lists assembly/mechanical work; task descriptions are general.",
        kind: "interpreted",
        sourceIds: [
          "page-foremost-expansion-source-49",
          "page-foremost-expansion-source-50",
          "page-foremost-expansion-source-51",
          "page-foremost-expansion-source-51"
        ]
      }
    ],
    rolesNote: "Work areas and related occupations, not a staff roster or a list of open vacancies. Individual evidence notes distinguish company work from editorial connections.",
    pathways: [
      {
        kindLabel: "Diploma",
        label: "SAIT — Mechanical Engineering Technology",
        note: "Study mechanical systems, design and manufacturing, with specialization options. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        kind: "interpreted",
        sourceIds: [
          "page-foremost-expansion-source-18"
        ]
      },
      {
        kindLabel: "Apprenticeship",
        label: "SAIT — Welder",
        note: "Learn joining processes, drawings and inspection of welded work. Requires apprenticeship registration and workplace training. Check the current provincial and provider requirements.",
        kind: "interpreted",
        sourceIds: [
          "page-foremost-expansion-source-52"
        ]
      },
      {
        kindLabel: "Apprenticeship",
        label: "SAIT — Industrial Mechanic (Millwright)",
        note: "Learn to install, maintain and repair industrial machinery. Requires apprenticeship registration and workplace training. This is distinct from an engineering degree.",
        kind: "interpreted",
        sourceIds: [
          "page-foremost-expansion-source-48"
        ]
      }
    ],
    ledger: [
      {
        type: "work",
        claim: "Foremost manufactures industrial and mobile equipment and identifies Calgary among its Alberta locations. Its product material includes wheeled and tracked off-road vehicles. The classroom story uses ground contact to connect vehicle design with pressure and mobility.",
        status: "Organization-stated",
        kind: "stated",
        sourceIds: [
          "page-foremost-expansion-source-49",
          "page-foremost-expansion-source-50",
          "page-foremost-expansion-source-51",
          "page-foremost-expansion-source-51"
        ]
      },
      {
        type: "local connection",
        claim: "Calgary North engineering and manufacturing facility. The company explicitly lists tracked and wheeled off-road vehicle engineering here; individual model build locations are not asserted.",
        status: "Organization-stated",
        kind: "stated",
        sourceIds: [
          "page-foremost-expansion-source-49",
          "page-foremost-expansion-source-50",
          "page-foremost-expansion-source-51",
          "page-foremost-expansion-source-51"
        ]
      },
      {
        type: "course fit",
        claim: "Start with weight and support forces, then extend to pressure as force divided by area. Soft-soil behaviour and tracked-vehicle design go beyond the course model.",
        status: "Editorial connection to verified course topics",
        kind: "interpreted",
        sourceIds: [
          "page-foremost-expansion-source-12"
        ]
      },
      {
        type: "limits",
        claim: "Product-to-Calgary-facility allocation must not be implied without confirmation. Search-reader careers text and fresh extraction differ; the latter still shows Loading positions, so no current vacancy claim is made.",
        status: "Scope of this example",
        kind: "interpreted",
        sourceIds: [
          "page-foremost-expansion-source-49",
          "page-foremost-expansion-source-50",
          "page-foremost-expansion-source-51",
          "page-foremost-expansion-source-51"
        ]
      }
    ],
    sources: [
      {
        id: "page-foremost-expansion-source-12",
        label: "Alberta Physics 20–30 performance standards",
        url: "https://www.alberta.ca/system/files/custom_downloaded_images/edc-physics20-30-performance-standards.pdf"
      },
      {
        id: "page-foremost-expansion-source-18",
        label: "SAIT — Mechanical Engineering Technology",
        url: "https://www.sait.ca/programs-and-courses/diplomas/mechanical-engineering-technology"
      },
      {
        id: "page-foremost-expansion-source-48",
        label: "SAIT — Industrial Mechanic (Millwright)",
        url: "https://www.sait.ca/apprenticeships-and-trades/programs/industrial-mechanic-millwright"
      },
      {
        id: "page-foremost-expansion-source-49",
        label: "Company work and career areas",
        url: "https://www.foremost.ca/careers"
      },
      {
        id: "page-foremost-expansion-source-50",
        label: "Vehicle product evidence",
        url: "https://media.foremost.ca/reason_middle_pdf_1742231408010_VEHICLES-OVERVIEW-WEB.pdf?v=products"
      },
      {
        id: "page-foremost-expansion-source-51",
        label: "Facility source checked",
        url: "https://www.foremost.ca/facility-resume/calgary"
      },
      {
        id: "page-foremost-expansion-source-52",
        label: "SAIT — Welder",
        url: "https://www.sait.ca/apprenticeships-and-trades/programs/welder"
      }
    ],
    checkedOn: "2026-10-15",
    detailsId: "foremost-details"
  },
  details: {
    id: "foremost-details",
    exampleSlug: "foremost",
    organizationId: "foremost",
    story: {
      diagramKind: "research",
      illustrationSlug: "foremost",
      subtitle: "A heavy machine needs the ground to support it.",
      caption: "A heavy machine needs the ground to support it.",
      steps: [
        {
          text: "A vehicle transfers its weight to the ground through the areas in contact with it.",
          kind: "interpreted",
          sourceIds: [
            "expansion-source-49",
            "expansion-source-50",
            "expansion-source-51",
            "expansion-source-51"
          ]
        },
        {
          text: "For the same force, spreading contact over a larger area lowers average pressure. Tracks and wide tires illustrate different approaches.",
          kind: "interpreted",
          sourceIds: [
            "expansion-source-49",
            "expansion-source-50",
            "expansion-source-51",
            "expansion-source-51"
          ]
        },
        {
          text: "Ground conditions, traction, load and terrain also affect movement. Average pressure alone cannot predict whether a vehicle will pass.",
          kind: "interpreted",
          sourceIds: [
            "expansion-source-49",
            "expansion-source-50",
            "expansion-source-51",
            "expansion-source-51"
          ]
        },
        {
          text: "Designers and manufacturing teams must balance mobility with strength, stability, transport and service needs.",
          kind: "interpreted",
          sourceIds: [
            "expansion-source-49",
            "expansion-source-50",
            "expansion-source-51",
            "expansion-source-51"
          ]
        }
      ],
      diagramAlt: "Conceptual sequence: A loaded vehicle pushes down on the ground. Wheels and tracks create different contact areas. The same force spread over more area gives lower average pressure. Ground strength, traction and loading still affect whether it sinks.",
      diagramProvenance: "Generated generic teaching illustration. Source-backed editorial simplification; not a company process specification. See design/example-expansion-2026-10-15/.",
      discussion: "Would doubling the contact area guarantee that a vehicle never sinks?"
    },
    roleIds: [
      "work-mechanical",
      "work-fabrication",
      "work-millwright"
    ],
    pathwayIds: [
      "route-mechanical",
      "route-welder",
      "route-millwright"
    ],
    jobIds: [],
    checkedOn: "2026-10-15"
  },
  organization: {
    id: "foremost",
    name: "Foremost",
    organizationType: "company",
    tagline: "A heavy machine needs the ground to support it.",
    description: {
      text: "Foremost manufactures industrial and mobile equipment and identifies Calgary among its Alberta locations. Its product material includes wheeled and tracked off-road vehicles. The classroom story uses ground contact to connect vehicle design with pressure and mobility.",
      kind: "stated",
      sourceIds: [
        "expansion-source-49",
        "expansion-source-50",
        "expansion-source-51",
        "expansion-source-51"
      ]
    },
    problem: {
      text: "How do vehicle weight and ground contact affect travel over soft terrain?",
      kind: "interpreted",
      sourceIds: [
        "expansion-source-49",
        "expansion-source-50",
        "expansion-source-51",
        "expansion-source-51"
      ]
    },
    offering: {
      text: "Industrial equipment, mobile machinery and associated manufacturing and service work.",
      kind: "stated",
      sourceIds: [
        "expansion-source-49",
        "expansion-source-50",
        "expansion-source-51",
        "expansion-source-51"
      ]
    },
    beneficiaries: {
      text: "Organizations operating equipment in demanding terrain or industrial settings.",
      kind: "stated",
      sourceIds: [
        "expansion-source-49",
        "expansion-source-50",
        "expansion-source-51",
        "expansion-source-51"
      ]
    },
    headquarters: {
      text: "Calgary North engineering and manufacturing facility. The company explicitly lists tracked and wheeled off-road vehicle engineering here; individual model build locations are not asserted.",
      kind: "stated",
      sourceIds: [
        "expansion-source-49",
        "expansion-source-50",
        "expansion-source-51",
        "expansion-source-51"
      ]
    },
    localConnection: {
      text: "Calgary North engineering and manufacturing facility. The company explicitly lists tracked and wheeled off-road vehicle engineering here; individual model build locations are not asserted.",
      kind: "stated",
      sourceIds: [
        "expansion-source-49",
        "expansion-source-50",
        "expansion-source-51",
        "expansion-source-51"
      ]
    },
    websiteSourceId: "expansion-source-49",
    checkedOn: "2026-10-15",
    careersSourceId: "expansion-source-49"
  },
  organizationRoles: [
    {
      organizationId: "foremost",
      roleId: "work-mechanical",
      establishes: "work-area",
      label: "Work area · Company manufacturing and equipment capabilities establish design-related work; individual assignments are not confirmed.",
      kind: "interpreted",
      sourceIds: [
        "expansion-source-49",
        "expansion-source-50",
        "expansion-source-51",
        "expansion-source-51"
      ],
      checkedOn: "2026-10-15"
    },
    {
      organizationId: "foremost",
      roleId: "work-fabrication",
      establishes: "work-area",
      label: "Work area · Employer career material lists welding; application and exact location are unverified.",
      kind: "interpreted",
      sourceIds: [
        "expansion-source-49",
        "expansion-source-50",
        "expansion-source-51",
        "expansion-source-51"
      ],
      checkedOn: "2026-10-15"
    },
    {
      organizationId: "foremost",
      roleId: "work-millwright",
      establishes: "work-area",
      label: "Work area · Employer career material lists assembly/mechanical work; task descriptions are general.",
      kind: "interpreted",
      sourceIds: [
        "expansion-source-49",
        "expansion-source-50",
        "expansion-source-51",
        "expansion-source-51"
      ],
      checkedOn: "2026-10-15"
    }
  ],
  jobs: [],
  sources: [
    {
      id: "expansion-source-49",
      label: "Company work and career areas",
      url: "https://www.foremost.ca/careers",
      checkedOn: "2026-10-15"
    },
    {
      id: "expansion-source-50",
      label: "Vehicle product evidence",
      url: "https://media.foremost.ca/reason_middle_pdf_1742231408010_VEHICLES-OVERVIEW-WEB.pdf?v=products",
      checkedOn: "2026-10-15"
    },
    {
      id: "expansion-source-51",
      label: "Facility source checked",
      url: "https://www.foremost.ca/facility-resume/calgary",
      checkedOn: "2026-10-15"
    }
  ],
  diagram: {
    image: "/images/story-diagrams/foremost-graphic-novel.webp",
    heading: "The same load over a different area",
    steps: [
      "A loaded vehicle pushes down on the ground.",
      "Wheels and tracks create different contact areas.",
      "The same force spread over more area gives lower average pressure.",
      "Ground strength, traction and loading still affect whether it sinks."
    ],
    note: "A simplified equal-load comparison. This is not a prediction for a specific vehicle or soil."
  },
  unitLinks: [
    {
      unitId: "p20b",
      why: "Start with weight and support forces, then extend to pressure as force divided by area. Soft-soil behaviour and tracked-vehicle design go beyond the course model."
    }
  ],
} satisfies ExampleRecord;
