import type { ExampleRecord } from "../types";

export default {
  addedOn: "2026-10-15",
  example: {
    slug: "botaneco",
    org: "Botaneco",
    discipline: "Chemistry",
    question: "How can one seed become several useful ingredients?",
    work: "Botaneco develops ingredients from oilseeds for feed, food and personal-care products. It describes a water-based process that separates proteins and oleosomes, the seed’s natural oil-containing structures. Its Calgary headquarters includes research and development staff; its team names biochemists, engineers, food scientists and technicians.",
    localShort: "Calgary headquarters and R&D; the sources do not establish that every manufacturing step takes place in Calgary.",
    calgary: "Calgary headquarters and R&D; the sources do not establish that every manufacturing step takes place in Calgary.",
    site: "Calgary headquarters and R&D; the sources do not establish that every manufacturing step takes place in Calgary.",
    localSourceIds: [
      "page-botaneco-expansion-source-1",
      "page-botaneco-expansion-source-2",
      "page-botaneco-expansion-source-3",
      "page-botaneco-expansion-source-4"
    ],
    explain: "Give groups three fictional ingredient samples: one has high recovery, one stays mixed longer, and one needs less processing energy. Ask each group to choose a sample for a product and identify the missing test.",
    prompt: "If a process recovers more material but changes how it behaves, has it improved?",
    conversation: "If a process recovers more material but changes how it behaves, has it improved?",
    mindset: "There is no universal winner. Students should state the product requirement before comparing evidence. Do not treat the fictional samples as Botaneco results.",
    courses: [
      {
        course: "Chemistry 20",
        topic: "Mixtures, solubility and properties"
      }
    ],
    courseFitSourceIds: [
      "page-botaneco-expansion-source-5"
    ],
    roles: [
      {
        title: "Ingredient and formulation science",
        note: "Investigate how ingredients behave in a product. This work connects a material’s composition to properties such as texture, stability or performance in a mixture.",
        evidence: "Botaneco explicitly identifies food scientists and biochemists; the task explanation is general.",
        kind: "interpreted",
        sourceIds: [
          "page-botaneco-expansion-source-1",
          "page-botaneco-expansion-source-2",
          "page-botaneco-expansion-source-3",
          "page-botaneco-expansion-source-4"
        ]
      },
      {
        title: "Laboratory analysis",
        note: "Make measurements that other people can trust. A laboratory worker prepares samples, uses a method consistently and records enough detail for someone else to interpret the result.",
        evidence: "The company names technicians; sample-analysis tasks are an editorial explanation, not a verified job description.",
        kind: "interpreted",
        sourceIds: [
          "page-botaneco-expansion-source-1",
          "page-botaneco-expansion-source-2",
          "page-botaneco-expansion-source-3",
          "page-botaneco-expansion-source-4"
        ]
      },
      {
        title: "Process engineering",
        note: "Turn a useful transformation into a workable sequence of equipment and operating steps. Process engineers consider what enters, what leaves and what conditions the system must maintain.",
        evidence: "The company names engineers and describes a processing platform; no specific vacancy is asserted.",
        kind: "interpreted",
        sourceIds: [
          "page-botaneco-expansion-source-1",
          "page-botaneco-expansion-source-2",
          "page-botaneco-expansion-source-3",
          "page-botaneco-expansion-source-4"
        ]
      }
    ],
    rolesNote: "Work areas and related occupations, not a staff roster or a list of open vacancies. Individual evidence notes distinguish company work from editorial connections.",
    pathways: [
      {
        kindLabel: "Diploma",
        label: "SAIT — Chemical Laboratory Technology",
        note: "Practice chemical analysis, sample preparation and analytical instrumentation. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        kind: "interpreted",
        sourceIds: [
          "page-botaneco-expansion-source-6"
        ]
      },
      {
        kindLabel: "Bachelor’s degree",
        label: "University of Calgary — Biochemistry",
        note: "Study the chemistry of living organisms and changes within cells. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        kind: "interpreted",
        sourceIds: [
          "page-botaneco-expansion-source-7"
        ]
      },
      {
        kindLabel: "Bachelor’s degree",
        label: "University of Calgary — Chemical Engineering",
        note: "Study how to transform raw materials and design production processes. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        kind: "interpreted",
        sourceIds: [
          "page-botaneco-expansion-source-8"
        ]
      }
    ],
    ledger: [
      {
        type: "work",
        claim: "Botaneco develops ingredients from oilseeds for feed, food and personal-care products. It describes a water-based process that separates proteins and oleosomes, the seed’s natural oil-containing structures. Its Calgary headquarters includes research and development staff; its team names biochemists, engineers, food scientists and technicians.",
        status: "Organization-stated",
        kind: "stated",
        sourceIds: [
          "page-botaneco-expansion-source-1",
          "page-botaneco-expansion-source-2",
          "page-botaneco-expansion-source-3",
          "page-botaneco-expansion-source-4"
        ]
      },
      {
        type: "local connection",
        claim: "Calgary headquarters and R&D; the sources do not establish that every manufacturing step takes place in Calgary.",
        status: "Organization-stated",
        kind: "stated",
        sourceIds: [
          "page-botaneco-expansion-source-1",
          "page-botaneco-expansion-source-2",
          "page-botaneco-expansion-source-3",
          "page-botaneco-expansion-source-4"
        ]
      },
      {
        type: "course fit",
        claim: "Compare separated fractions and test their properties; proteins and oleosomes are application context, not required terminology.",
        status: "Editorial connection to verified course topics",
        kind: "interpreted",
        sourceIds: [
          "page-botaneco-expansion-source-5"
        ]
      },
      {
        type: "limits",
        claim: "Do not repeat zero-waste or health-benefit marketing claims as independently proven facts. The simplified teaching sequence is not a specification of proprietary equipment.",
        status: "Scope of this example",
        kind: "interpreted",
        sourceIds: [
          "page-botaneco-expansion-source-1",
          "page-botaneco-expansion-source-2",
          "page-botaneco-expansion-source-3",
          "page-botaneco-expansion-source-4"
        ]
      }
    ],
    sources: [
      {
        id: "page-botaneco-expansion-source-1",
        label: "Company and Calgary team",
        url: "https://botaneco.com/about/"
      },
      {
        id: "page-botaneco-expansion-source-2",
        label: "Processing platform",
        url: "https://botaneco.com/technology/"
      },
      {
        id: "page-botaneco-expansion-source-3",
        label: "Products and uses",
        url: "https://botaneco.com/"
      },
      {
        id: "page-botaneco-expansion-source-4",
        label: "Careers check",
        url: "https://botaneco.com/careers/"
      },
      {
        id: "page-botaneco-expansion-source-5",
        label: "Alberta Chemistry 20–30 program of studies (updated 2014)",
        url: "https://education.alberta.ca/media/159730/chem2030_07.pdf"
      },
      {
        id: "page-botaneco-expansion-source-6",
        label: "SAIT — Chemical Laboratory Technology",
        url: "https://www.sait.ca/programs-and-courses/diplomas/chemical-laboratory-technology"
      },
      {
        id: "page-botaneco-expansion-source-7",
        label: "University of Calgary — Biochemistry",
        url: "https://science.ucalgary.ca/future-students/undergraduate/programs"
      },
      {
        id: "page-botaneco-expansion-source-8",
        label: "University of Calgary — Chemical Engineering",
        url: "https://schulich.ucalgary.ca/future-students/undergraduate/programs/bsc-chemical-engineering"
      }
    ],
    checkedOn: "2026-10-15",
    detailsId: "botaneco-details"
  },
  details: {
    id: "botaneco-details",
    exampleSlug: "botaneco",
    organizationId: "botaneco",
    story: {
      diagramKind: "research",
      illustrationSlug: "botaneco",
      subtitle: "Useful ingredients are hidden inside an ordinary seed.",
      caption: "Useful ingredients are hidden inside an ordinary seed.",
      steps: [
        {
          text: "A seed contains several kinds of material. Botaneco works with oilseeds including canola and sunflower.",
          kind: "interpreted",
          sourceIds: [
            "expansion-source-1",
            "expansion-source-2",
            "expansion-source-3",
            "expansion-source-4"
          ]
        },
        {
          text: "The company describes an aqueous process for separating proteins and intact oleosomes while avoiding harsh processing conditions.",
          kind: "interpreted",
          sourceIds: [
            "expansion-source-1",
            "expansion-source-2",
            "expansion-source-3",
            "expansion-source-4"
          ]
        },
        {
          text: "Different recovered components can serve different ingredient uses. Separating them is only part of the challenge; their behaviour in a product also matters.",
          kind: "interpreted",
          sourceIds: [
            "expansion-source-1",
            "expansion-source-2",
            "expansion-source-3",
            "expansion-source-4"
          ]
        },
        {
          text: "A useful evaluation compares the amount recovered, the properties retained and the resources used. A company’s sustainability claim needs its own supporting evidence.",
          kind: "interpreted",
          sourceIds: [
            "expansion-source-1",
            "expansion-source-2",
            "expansion-source-3",
            "expansion-source-4"
          ]
        }
      ],
      diagramAlt: "Conceptual sequence: Begin with an oilseed mixture. Use a water-based separation process. Recover different fractions, including proteins and oleosomes. Test the properties needed for a useful ingredient.",
      diagramProvenance: "Generated generic teaching illustration. Source-backed editorial simplification; not a company process specification. See design/example-expansion-2026-10-15/.",
      discussion: "If a process recovers more material but changes how it behaves, has it improved?"
    },
    roleIds: [
      "work-food",
      "work-lab",
      "work-process"
    ],
    pathwayIds: [
      "route-lab",
      "route-biochem",
      "route-chemical"
    ],
    jobIds: [],
    checkedOn: "2026-10-15"
  },
  organization: {
    id: "botaneco",
    name: "Botaneco",
    organizationType: "company",
    tagline: "Useful ingredients are hidden inside an ordinary seed.",
    description: {
      text: "Botaneco develops ingredients from oilseeds for feed, food and personal-care products. It describes a water-based process that separates proteins and oleosomes, the seed’s natural oil-containing structures. Its Calgary headquarters includes research and development staff; its team names biochemists, engineers, food scientists and technicians.",
      kind: "stated",
      sourceIds: [
        "expansion-source-1",
        "expansion-source-2",
        "expansion-source-3",
        "expansion-source-4"
      ]
    },
    problem: {
      text: "How do you separate useful components while retaining the properties a customer needs?",
      kind: "interpreted",
      sourceIds: [
        "expansion-source-1",
        "expansion-source-2",
        "expansion-source-3",
        "expansion-source-4"
      ]
    },
    offering: {
      text: "Oilseed ingredients and a processing approach designed to preserve their functionality.",
      kind: "stated",
      sourceIds: [
        "expansion-source-1",
        "expansion-source-2",
        "expansion-source-3",
        "expansion-source-4"
      ]
    },
    beneficiaries: {
      text: "Ingredient users developing aquaculture feeds, plant-based foods and personal-care products.",
      kind: "stated",
      sourceIds: [
        "expansion-source-1",
        "expansion-source-2",
        "expansion-source-3",
        "expansion-source-4"
      ]
    },
    headquarters: {
      text: "Calgary headquarters and R&D; the sources do not establish that every manufacturing step takes place in Calgary.",
      kind: "stated",
      sourceIds: [
        "expansion-source-1",
        "expansion-source-2",
        "expansion-source-3",
        "expansion-source-4"
      ]
    },
    localConnection: {
      text: "Calgary headquarters and R&D; the sources do not establish that every manufacturing step takes place in Calgary.",
      kind: "stated",
      sourceIds: [
        "expansion-source-1",
        "expansion-source-2",
        "expansion-source-3",
        "expansion-source-4"
      ]
    },
    websiteSourceId: "expansion-source-1",
    checkedOn: "2026-10-15",
    careersSourceId: "expansion-source-4"
  },
  organizationRoles: [
    {
      organizationId: "botaneco",
      roleId: "work-food",
      establishes: "work-area",
      label: "Work area · Botaneco explicitly identifies food scientists and biochemists; the task explanation is general.",
      kind: "interpreted",
      sourceIds: [
        "expansion-source-1",
        "expansion-source-2",
        "expansion-source-3",
        "expansion-source-4"
      ],
      checkedOn: "2026-10-15"
    },
    {
      organizationId: "botaneco",
      roleId: "work-lab",
      establishes: "work-area",
      label: "Work area · The company names technicians; sample-analysis tasks are an editorial explanation, not a verified job description.",
      kind: "interpreted",
      sourceIds: [
        "expansion-source-1",
        "expansion-source-2",
        "expansion-source-3",
        "expansion-source-4"
      ],
      checkedOn: "2026-10-15"
    },
    {
      organizationId: "botaneco",
      roleId: "work-process",
      establishes: "work-area",
      label: "Work area · The company names engineers and describes a processing platform; no specific vacancy is asserted.",
      kind: "interpreted",
      sourceIds: [
        "expansion-source-1",
        "expansion-source-2",
        "expansion-source-3",
        "expansion-source-4"
      ],
      checkedOn: "2026-10-15"
    }
  ],
  jobs: [],
  sources: [
    {
      id: "expansion-source-1",
      label: "Company and Calgary team",
      url: "https://botaneco.com/about/",
      checkedOn: "2026-10-15"
    },
    {
      id: "expansion-source-2",
      label: "Processing platform",
      url: "https://botaneco.com/technology/",
      checkedOn: "2026-10-15"
    },
    {
      id: "expansion-source-3",
      label: "Products and uses",
      url: "https://botaneco.com/",
      checkedOn: "2026-10-15"
    },
    {
      id: "expansion-source-4",
      label: "Careers check",
      url: "https://botaneco.com/careers/",
      checkedOn: "2026-10-15"
    }
  ],
  diagram: {
    image: "/images/story-diagrams/botaneco-graphic-novel.webp",
    heading: "From seed to useful fractions",
    steps: [
      "Begin with an oilseed mixture.",
      "Use a water-based separation process.",
      "Recover different fractions, including proteins and oleosomes.",
      "Test the properties needed for a useful ingredient."
    ],
    note: "The branches are conceptual fractions, not a complete mass balance or a proprietary equipment design."
  },
  unitLinks: [
    {
      unitId: "c20c",
      why: "Compare separated fractions and test their properties; proteins and oleosomes are application context, not required terminology."
    }
  ],
} satisfies ExampleRecord;
