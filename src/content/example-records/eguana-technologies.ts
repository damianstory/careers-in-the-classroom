import type { ExampleRecord } from "../types";

export default {
  addedOn: "2026-10-15",
  example: {
    slug: "eguana-technologies",
    org: "Eguana Technologies",
    discipline: "Physics",
    question: "How can stored electricity help when supply and demand happen at different times?",
    work: "Eguana Technologies lists Calgary as its headquarters and offers energy-storage systems and controls. Its products connect stored electrical energy with home and utility needs. A dated Calgary engineering posting also documents real work on power electronics, circuit boards and product testing.",
    localShort: "Calgary headquarters and historical Calgary engineering evidence. Current manufacturing allocation is not inferred from older documents.",
    calgary: "Calgary headquarters and historical Calgary engineering evidence. Current manufacturing allocation is not inferred from older documents.",
    site: "Calgary headquarters and historical Calgary engineering evidence. Current manufacturing allocation is not inferred from older documents.",
    localSourceIds: [
      "page-eguana-technologies-expansion-source-64",
      "page-eguana-technologies-expansion-source-65",
      "page-eguana-technologies-expansion-source-66"
    ],
    explain: "Use fictional devices rated at 1 kW and 3 kW and an idealized 6 kWh store. Compare ideal run times, then ask what changes when losses and power limits are included.",
    prompt: "Could two batteries store the same amount of energy but support different appliances?",
    conversation: "Could two batteries store the same amount of energy but support different appliances?",
    mindset: "Ideal answers are six hours and two hours, only if the device is within the system’s power limit. Real run time depends on usable capacity, operating conditions and losses; these are not Eguana specifications.",
    courses: [
      {
        course: "Science 10",
        topic: "Energy transformations in technological systems"
      },
      {
        course: "Science 30",
        topic: "Energy and the environment"
      }
    ],
    courseFitSourceIds: [
      "page-eguana-technologies-expansion-source-25"
    ],
    roles: [
      {
        title: "Power-electronics design",
        note: "Control how electrical energy moves between components. Power-electronics work combines circuit design with testing, thermal limits and the behaviour of the complete system.",
        evidence: "A dated employer posting explicitly establishes Calgary power-electronics engineering work.",
        kind: "interpreted",
        sourceIds: [
          "page-eguana-technologies-expansion-source-64",
          "page-eguana-technologies-expansion-source-65",
          "page-eguana-technologies-expansion-source-66"
        ]
      },
      {
        title: "Instrument development and testing",
        note: "Help build and check the equipment that produces measurements. Instrument work joins hardware, software and experiments rather than treating a reading as automatically correct.",
        evidence: "The posting describes validation and production testing; this work-area label is editorial.",
        kind: "interpreted",
        sourceIds: [
          "page-eguana-technologies-expansion-source-64",
          "page-eguana-technologies-expansion-source-65",
          "page-eguana-technologies-expansion-source-66"
        ]
      },
      {
        title: "Software and data systems",
        note: "Build the tools that move, process and display information. Reliable software needs testing against missing, delayed and unexpected data as well as ideal examples.",
        evidence: "Controls and energy-management products support a related software work area; no specific current vacancy is inferred.",
        kind: "interpreted",
        sourceIds: [
          "page-eguana-technologies-expansion-source-64",
          "page-eguana-technologies-expansion-source-65",
          "page-eguana-technologies-expansion-source-66"
        ]
      }
    ],
    rolesNote: "Work areas and related occupations, not a staff roster or a list of open vacancies. Individual evidence notes distinguish company work from editorial connections.",
    pathways: [
      {
        kindLabel: "Diploma",
        label: "SAIT — Electrical Engineering Technology",
        note: "Study circuits, electrical power and controls with practical laboratory work. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        kind: "interpreted",
        sourceIds: [
          "page-eguana-technologies-expansion-source-13"
        ]
      },
      {
        kindLabel: "Bachelor’s degree",
        label: "University of Calgary — Electrical Engineering",
        note: "Study electrical phenomena and their engineering applications. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        kind: "interpreted",
        sourceIds: [
          "page-eguana-technologies-expansion-source-67"
        ]
      },
      {
        kindLabel: "Diploma",
        label: "SAIT — Software Development",
        note: "Learn to design, test and build software across front-end and back-end systems. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        kind: "interpreted",
        sourceIds: [
          "page-eguana-technologies-expansion-source-14"
        ]
      }
    ],
    ledger: [
      {
        type: "work",
        claim: "Eguana Technologies lists Calgary as its headquarters and offers energy-storage systems and controls. Its products connect stored electrical energy with home and utility needs. A dated Calgary engineering posting also documents real work on power electronics, circuit boards and product testing.",
        status: "Organization-stated",
        kind: "stated",
        sourceIds: [
          "page-eguana-technologies-expansion-source-64",
          "page-eguana-technologies-expansion-source-65",
          "page-eguana-technologies-expansion-source-66"
        ]
      },
      {
        type: "local connection",
        claim: "Calgary headquarters and historical Calgary engineering evidence. Current manufacturing allocation is not inferred from older documents.",
        status: "Organization-stated",
        kind: "stated",
        sourceIds: [
          "page-eguana-technologies-expansion-source-64",
          "page-eguana-technologies-expansion-source-65",
          "page-eguana-technologies-expansion-source-66"
        ]
      },
      {
        type: "course fit",
        claim: "Distinguish stored energy from the rate of transfer. Capacity divided by load is an idealized runtime; actual losses and operating limits change it.",
        status: "Editorial connection to verified course topics",
        kind: "interpreted",
        sourceIds: [
          "page-eguana-technologies-expansion-source-25"
        ]
      },
      {
        type: "limits",
        claim: "The 2018 role is historical evidence, not a live opportunity. Do not claim a current Calgary production capacity from older financial reports. No bill-savings estimate or product recommendation is proposed.",
        status: "Scope of this example",
        kind: "interpreted",
        sourceIds: [
          "page-eguana-technologies-expansion-source-64",
          "page-eguana-technologies-expansion-source-65",
          "page-eguana-technologies-expansion-source-66"
        ]
      }
    ],
    sources: [
      {
        id: "page-eguana-technologies-expansion-source-13",
        label: "SAIT — Electrical Engineering Technology",
        url: "https://www.sait.ca/programs-and-courses/diplomas/electrical-engineering-technology"
      },
      {
        id: "page-eguana-technologies-expansion-source-14",
        label: "SAIT — Software Development",
        url: "https://www.sait.ca/programs-and-courses/diplomas/software-development"
      },
      {
        id: "page-eguana-technologies-expansion-source-25",
        label: "Calgary Board of Education: Science 10/20/30 course topics",
        url: "https://eps.cbe.ab.ca/science-10-20-30.aspx"
      },
      {
        id: "page-eguana-technologies-expansion-source-64",
        label: "Storage products",
        url: "https://eguanatech.com/products/energy-storage-systems/"
      },
      {
        id: "page-eguana-technologies-expansion-source-65",
        label: "Current Calgary headquarters",
        url: "https://eguanatech.com/contact/contact-us/"
      },
      {
        id: "page-eguana-technologies-expansion-source-66",
        label: "Historical employer role, dated 14 February 2018",
        url: "https://eguanatech.com/_resources/careers/Power-Electronics-Engineer.pdf"
      },
      {
        id: "page-eguana-technologies-expansion-source-67",
        label: "University of Calgary — Electrical Engineering",
        url: "https://schulich.ucalgary.ca/future-students/undergraduate/programs/majors"
      }
    ],
    checkedOn: "2026-10-15",
    detailsId: "eguana-technologies-details"
  },
  details: {
    id: "eguana-technologies-details",
    exampleSlug: "eguana-technologies",
    organizationId: "eguana-technologies",
    story: {
      diagramKind: "research",
      illustrationSlug: "eguana-technologies",
      subtitle: "Storing energy changes when it can be used.",
      caption: "Storing energy changes when it can be used.",
      steps: [
        {
          text: "Electricity demand and available generation can change at different times. A battery can store energy for later use.",
          kind: "interpreted",
          sourceIds: [
            "expansion-source-64",
            "expansion-source-65",
            "expansion-source-66"
          ]
        },
        {
          text: "Power electronics and controls manage electrical transfer between the storage system and other connected equipment.",
          kind: "interpreted",
          sourceIds: [
            "expansion-source-64",
            "expansion-source-65",
            "expansion-source-66"
          ]
        },
        {
          text: "A design must distinguish power, the rate of transfer, from energy, the amount stored or delivered over time.",
          kind: "interpreted",
          sourceIds: [
            "expansion-source-64",
            "expansion-source-65",
            "expansion-source-66"
          ]
        },
        {
          text: "Storage has losses and operating limits. Compare when energy is needed, how quickly it must be delivered and how much is available.",
          kind: "interpreted",
          sourceIds: [
            "expansion-source-64",
            "expansion-source-65",
            "expansion-source-66"
          ]
        }
      ],
      diagramAlt: "Conceptual sequence: Electricity is available at one time. Store some energy for later use. Discharge it when electricity is needed. A larger load uses the stored energy faster.",
      diagramProvenance: "Generated generic teaching illustration. Source-backed editorial simplification; not a company process specification. See design/example-expansion-2026-10-15/.",
      discussion: "Could two batteries store the same amount of energy but support different appliances?"
    },
    roleIds: [
      "work-power",
      "work-instrument",
      "work-software"
    ],
    pathwayIds: [
      "route-electrical",
      "route-electrical-degree",
      "route-software"
    ],
    jobIds: [
      "cgy-015-j1"
    ],
    checkedOn: "2026-10-15"
  },
  organization: {
    id: "eguana-technologies",
    name: "Eguana Technologies",
    organizationType: "company",
    tagline: "Storing energy changes when it can be used.",
    description: {
      text: "Eguana Technologies lists Calgary as its headquarters and offers energy-storage systems and controls. Its products connect stored electrical energy with home and utility needs. A dated Calgary engineering posting also documents real work on power electronics, circuit boards and product testing.",
      kind: "stated",
      sourceIds: [
        "expansion-source-64",
        "expansion-source-65",
        "expansion-source-66"
      ]
    },
    problem: {
      text: "How can energy storage help when electricity supply and demand occur at different times?",
      kind: "interpreted",
      sourceIds: [
        "expansion-source-64",
        "expansion-source-65",
        "expansion-source-66"
      ]
    },
    offering: {
      text: "Energy-storage systems and associated control technology.",
      kind: "stated",
      sourceIds: [
        "expansion-source-64",
        "expansion-source-65",
        "expansion-source-66"
      ]
    },
    beneficiaries: {
      text: "Households, installers and utilities managing energy availability and demand.",
      kind: "stated",
      sourceIds: [
        "expansion-source-64",
        "expansion-source-65",
        "expansion-source-66"
      ]
    },
    headquarters: {
      text: "Calgary headquarters and historical Calgary engineering evidence. Current manufacturing allocation is not inferred from older documents.",
      kind: "stated",
      sourceIds: [
        "expansion-source-64",
        "expansion-source-65",
        "expansion-source-66"
      ]
    },
    localConnection: {
      text: "Calgary headquarters and historical Calgary engineering evidence. Current manufacturing allocation is not inferred from older documents.",
      kind: "stated",
      sourceIds: [
        "expansion-source-64",
        "expansion-source-65",
        "expansion-source-66"
      ]
    },
    websiteSourceId: "expansion-source-64",
    checkedOn: "2026-10-15"
  },
  organizationRoles: [
    {
      organizationId: "eguana-technologies",
      roleId: "work-power",
      establishes: "work-area",
      label: "Work area · A dated employer posting explicitly establishes Calgary power-electronics engineering work.",
      kind: "interpreted",
      sourceIds: [
        "expansion-source-64",
        "expansion-source-65",
        "expansion-source-66"
      ],
      checkedOn: "2026-10-15"
    },
    {
      organizationId: "eguana-technologies",
      roleId: "work-instrument",
      establishes: "work-area",
      label: "Work area · The posting describes validation and production testing; this work-area label is editorial.",
      kind: "interpreted",
      sourceIds: [
        "expansion-source-64",
        "expansion-source-65",
        "expansion-source-66"
      ],
      checkedOn: "2026-10-15"
    },
    {
      organizationId: "eguana-technologies",
      roleId: "work-software",
      establishes: "work-area",
      label: "Work area · Controls and energy-management products support a related software work area; no specific current vacancy is inferred.",
      kind: "interpreted",
      sourceIds: [
        "expansion-source-64",
        "expansion-source-65",
        "expansion-source-66"
      ],
      checkedOn: "2026-10-15"
    }
  ],
  jobs: [
    {
      id: "cgy-015-j1",
      title: "Power Electronics Engineer — historical example",
      employer: "Eguana Technologies",
      employerNote: {
        text: "Featured employer. Historical employer PDF; current acceptance of applications not verified. Do not display as an open opportunity.",
        kind: "observed",
        sourceIds: [
          "expansion-source-66"
        ]
      },
      roleIds: [
        "work-power"
      ],
      location: "Calgary, Alberta",
      level: "Experienced: the 2018 posting requests an electrical-engineering bachelor’s degree and 2+ years in product design and lithium battery-system design.",
      relevance: "local",
      postingSourceId: "expansion-source-66",
      capturedOn: "2026-10-15",
      summary: "Design electrical products from prototype toward production, with attention to component selection, testing and manufacturing requirements.",
      duties: [
        "Develop circuit-board designs and select components.",
        "Prepare requirements and validation test plans.",
        "Support production changes and evaluate existing designs."
      ],
      skills: [
        "Electrical design and troubleshooting",
        "Product testing and documentation",
        "Working with suppliers and other engineers"
      ],
      classroomConnection: "Shows how circuits and energy-storage requirements become design and testing work.",
      limitation: "Historical employer PDF; current acceptance of applications not verified. Do not display as an open opportunity.",
      approval: {
        packetId: "calgary-full-examples-2026-10-15",
        candidateId: "CGY-015-J1",
        copyVersion: 1
      },
      status: {
        kind: "unknown",
        checkedOn: "2026-10-15",
        note: "Historical employer PDF; current acceptance of applications not verified. Do not display as an open opportunity."
      },
      kind: "observed",
      sourceIds: [
        "expansion-source-66"
      ],
      publishedOn: "2018-02-14"
    }
  ],
  sources: [
    {
      id: "expansion-source-64",
      label: "Storage products",
      url: "https://eguanatech.com/products/energy-storage-systems/",
      checkedOn: "2026-10-15"
    },
    {
      id: "expansion-source-65",
      label: "Current Calgary headquarters",
      url: "https://eguanatech.com/contact/contact-us/",
      checkedOn: "2026-10-15"
    },
    {
      id: "expansion-source-66",
      label: "Historical employer role, dated 14 February 2018",
      url: "https://eguanatech.com/_resources/careers/Power-Electronics-Engineer.pdf",
      checkedOn: "2026-10-15"
    }
  ],
  diagram: {
    image: "/images/story-diagrams/eguana-technologies-graphic-novel.webp",
    heading: "Move energy across time",
    steps: [
      "Electricity is available at one time.",
      "Store some energy for later use.",
      "Discharge it when electricity is needed.",
      "A larger load uses the stored energy faster."
    ],
    note: "The arrows show energy transfer, not creation. Losses, capacity and operating limits affect real runtime."
  },
  unitLinks: [
    {
      unitId: "s10b",
      why: "Distinguish stored energy from the rate of transfer. Capacity divided by load is an idealized runtime; actual losses and operating limits change it."
    },
    {
      unitId: "s30d",
      why: "Distinguish stored energy from the rate of transfer. Capacity divided by load is an idealized runtime; actual losses and operating limits change it."
    }
  ],
} satisfies ExampleRecord;
