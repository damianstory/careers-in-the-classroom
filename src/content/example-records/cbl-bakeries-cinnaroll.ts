import type { ExampleRecord } from "../types";

export default {
  addedOn: "2026-10-17",
  example: {
    slug: "cbl-bakeries-cinnaroll",
    org: "CBL Bakeries / Cinnaroll",
    discipline: "Chemistry",
    question: "How can thousands of pastries come out consistently?",
    work: "CBL Bakeries, trading through the Cinnaroll brand, describes production equipment designed for large batches, product development and quality assurance. Its site lists a Calgary address and identifies production and packaging teams. This example examines variation across batches. It does not disclose the company’s recipe, equipment settings or internal quality limits.",
    localShort: "Calgary company address and documented manufacturing activity; no separate Cinnzeo retail business is counted here.",
    calgary: "Calgary company address and documented manufacturing activity; no separate Cinnzeo retail business is counted here.",
    site: "Calgary company address and documented manufacturing activity; no separate Cinnzeo retail business is counted here.",
    localSourceIds: [
      "page-cbl-bakeries-cinnaroll-oct17-source-62",
      "page-cbl-bakeries-cinnaroll-oct17-source-63"
    ],
    explain: "Compare fictional piece masses: batch A is 49, 50, 50, 51 g; batch B is 40, 50, 50, 60 g. Both average 50 g. Compare spread and explain why an average alone is insufficient.",
    prompt: "Can two batches have the same average and still differ in quality?",
    conversation: "Can two batches have the same average and still differ in quality?",
    mindset: "The figures are invented and no company acceptance limits are implied. Mass comparison does not establish food safety.",
    courses: [
      {
        course: "Science 10",
        topic: "Scientific inquiry: variables, sampling and consistency"
      }
    ],
    courseFitSourceIds: [
      "page-cbl-bakeries-cinnaroll-oct17-source-51"
    ],
    roles: [
      {
        title: "Commercial baking",
        note: "Produce baked goods through a controlled sequence of preparation, processing and handling.",
        evidence: "Company describes manufacturing and production teams; no current vacancy claimed.",
        kind: "interpreted",
        sourceIds: [
          "page-cbl-bakeries-cinnaroll-oct17-source-62",
          "page-cbl-bakeries-cinnaroll-oct17-source-63"
        ]
      },
      {
        title: "Quality and traceability",
        note: "Make it possible to explain how a result or product was produced. Quality work checks records, methods and acceptance criteria so variation can be investigated rather than hidden.",
        evidence: "Company describes quality assurance; no named job description captured.",
        kind: "interpreted",
        sourceIds: [
          "page-cbl-bakeries-cinnaroll-oct17-source-62",
          "page-cbl-bakeries-cinnaroll-oct17-source-63"
        ]
      },
      {
        title: "Ingredient and formulation science",
        note: "Investigate how ingredients behave in a product. This work connects a material’s composition to properties such as texture, stability or performance in a mixture.",
        evidence: "Company describes product development; no particular scientist role or degree requirement is asserted.",
        kind: "interpreted",
        sourceIds: [
          "page-cbl-bakeries-cinnaroll-oct17-source-62",
          "page-cbl-bakeries-cinnaroll-oct17-source-63"
        ]
      }
    ],
    rolesNote: "Work areas and related occupations, not a staff roster or a list of current vacancies. Each profile explains the evidence for its company connection.",
    pathways: [
      {
        kindLabel: "Diploma",
        label: "SAIT — Baking and Pastry Arts",
        note: "Practise bakery and pastry production and product quality. Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
        kind: "interpreted",
        sourceIds: [
          "page-cbl-bakeries-cinnaroll-oct17-source-56"
        ]
      },
      {
        kindLabel: "Apprenticeship",
        label: "Alberta Baker apprenticeship education",
        note: "Combine structured trade education with workplace learning in baking. Use Tradesecrets to verify current entry, sponsorship and work-hour requirements. No specific Calgary employer placement is promised.",
        kind: "interpreted",
        sourceIds: [
          "page-cbl-bakeries-cinnaroll-oct17-source-57"
        ]
      },
      {
        kindLabel: "Diploma",
        label: "SAIT — Chemical Laboratory Technology",
        note: "Practice chemical analysis, sample preparation and analytical instrumentation. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        kind: "interpreted",
        sourceIds: [
          "page-cbl-bakeries-cinnaroll-oct17-source-22"
        ]
      }
    ],
    ledger: [
      {
        type: "work",
        claim: "CBL Bakeries, trading through the Cinnaroll brand, describes production equipment designed for large batches, product development and quality assurance. Its site lists a Calgary address and identifies production and packaging teams. This example examines variation across batches. It does not disclose the company’s recipe, equipment settings or internal quality limits.",
        status: "Source-backed company/project account",
        kind: "stated",
        sourceIds: [
          "page-cbl-bakeries-cinnaroll-oct17-source-62",
          "page-cbl-bakeries-cinnaroll-oct17-source-63"
        ]
      },
      {
        type: "local connection",
        claim: "Calgary company address and documented manufacturing activity; no separate Cinnzeo retail business is counted here.",
        status: "Source-backed local work",
        kind: "stated",
        sourceIds: [
          "page-cbl-bakeries-cinnaroll-oct17-source-62",
          "page-cbl-bakeries-cinnaroll-oct17-source-63"
        ]
      },
      {
        type: "course fit",
        claim: "Science 10 inquiry skills (program p. 8) support controlled variables, sampling and interpreting variation. Recipe scale-up is not presented as chemical stoichiometry.",
        status: "Editorial application of verified curriculum topics",
        kind: "interpreted",
        sourceIds: [
          "page-cbl-bakeries-cinnaroll-oct17-source-51"
        ]
      },
      {
        type: "limits",
        claim: "Company careers page says no positions are currently being hired as checked 17 October. This dated notice does not prevent an occupational example.",
        status: "Scope of this example",
        kind: "interpreted",
        sourceIds: [
          "page-cbl-bakeries-cinnaroll-oct17-source-62",
          "page-cbl-bakeries-cinnaroll-oct17-source-63"
        ]
      }
    ],
    sources: [
      {
        id: "page-cbl-bakeries-cinnaroll-oct17-source-22",
        label: "SAIT — Chemical Laboratory Technology",
        url: "https://www.sait.ca/programs-and-courses/diplomas/chemical-laboratory-technology"
      },
      {
        id: "page-cbl-bakeries-cinnaroll-oct17-source-51",
        label: "Alberta Science 10 program: inquiry skills and technological systems",
        url: "https://education.alberta.ca/media/159715/science10.pdf"
      },
      {
        id: "page-cbl-bakeries-cinnaroll-oct17-source-56",
        label: "SAIT — Baking and Pastry Arts",
        url: "https://www.sait.ca/programs-and-courses/diplomas/baking-and-pastry-arts"
      },
      {
        id: "page-cbl-bakeries-cinnaroll-oct17-source-57",
        label: "Alberta Baker apprenticeship education",
        url: "https://tradesecrets.alberta.ca/SOURCES/PDFS/curriculum_guides/024_outline.pdf"
      },
      {
        id: "page-cbl-bakeries-cinnaroll-oct17-source-62",
        label: "CBL Bakeries / Cinnaroll — company/project evidence 1",
        url: "https://www.cinnaroll.com/"
      },
      {
        id: "page-cbl-bakeries-cinnaroll-oct17-source-63",
        label: "CBL Bakeries / Cinnaroll — company/project evidence 2",
        url: "https://www.cinnaroll.com/careers"
      }
    ],
    checkedOn: "2026-10-17",
    detailsId: "cbl-bakeries-cinnaroll-details"
  },
  details: {
    id: "cbl-bakeries-cinnaroll-details",
    exampleSlug: "cbl-bakeries-cinnaroll",
    organizationId: "cbl-bakeries-cinnaroll",
    story: {
      diagramKind: "research",
      illustrationSlug: "cbl-bakeries-cinnaroll",
      subtitle: "A familiar product becomes a different problem when it has to be repeated at scale.",
      caption: "A familiar product becomes a different problem when it has to be repeated at scale.",
      steps: [
        {
          text: "Define what consistency means for the product: size, appearance and other agreed properties may all matter.",
          kind: "interpreted",
          sourceIds: [
            "oct17-source-62",
            "oct17-source-63",
            "oct17-source-51"
          ]
        },
        {
          text: "Keep track of ingredients, processing conditions and batch identity.",
          kind: "interpreted",
          sourceIds: [
            "oct17-source-62",
            "oct17-source-63",
            "oct17-source-51"
          ]
        },
        {
          text: "Check samples from more than one point in a batch; an average can conceal individual differences.",
          kind: "interpreted",
          sourceIds: [
            "oct17-source-62",
            "oct17-source-63",
            "oct17-source-51"
          ]
        },
        {
          text: "Investigate a pattern and test one change at a time before deciding whether the process improved.",
          kind: "interpreted",
          sourceIds: [
            "oct17-source-62",
            "oct17-source-63",
            "oct17-source-51"
          ]
        }
      ],
      diagramAlt: "Conceptual teaching illustration for How can thousands of pastries come out consistently? Four numbered stages and arrows correspond to the explanation below.",
      diagramProvenance: "Generated fictional teaching illustration; source-grounded editorial simplification. Not a company process specification. Prompts and review: design/example-expansion-2026-10-17/.",
      discussion: "Can two batches have the same average and still differ in quality?"
    },
    roleIds: [
      "work-commercial-baking",
      "work-quality",
      "work-food"
    ],
    pathwayIds: [
      "oct17-route-sait-baking-and-pastry-arts",
      "oct17-route-alberta-baker-apprenticeship-education",
      "oct17-route-sait-chemical-laboratory-technology"
    ],
    jobIds: [],
    checkedOn: "2026-10-17"
  },
  organization: {
    id: "cbl-bakeries-cinnaroll",
    name: "CBL Bakeries / Cinnaroll",
    organizationType: "company",
    tagline: "A familiar product becomes a different problem when it has to be repeated at scale.",
    description: {
      text: "CBL Bakeries, trading through the Cinnaroll brand, describes production equipment designed for large batches, product development and quality assurance. Its site lists a Calgary address and identifies production and packaging teams. This example examines variation across batches. It does not disclose the company’s recipe, equipment settings or internal quality limits.",
      kind: "stated",
      sourceIds: [
        "oct17-source-62",
        "oct17-source-63"
      ]
    },
    problem: {
      text: "How can thousands of pastries come out consistently?",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-62",
        "oct17-source-63"
      ]
    },
    offering: {
      text: "Large-batch baked goods supported by product development, production and quality assurance.",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-62",
        "oct17-source-63"
      ]
    },
    beneficiaries: {
      text: "Customers and food-service teams who need consistent products.",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-62",
        "oct17-source-63"
      ]
    },
    headquarters: {
      text: "Headquarters not separately verified for this example.",
      kind: "unresearched",
      sourceIds: []
    },
    localConnection: {
      text: "Calgary company address and documented manufacturing activity; no separate Cinnzeo retail business is counted here.",
      kind: "stated",
      sourceIds: [
        "oct17-source-62",
        "oct17-source-63"
      ]
    },
    websiteSourceId: "oct17-source-62",
    checkedOn: "2026-10-17",
    careersSourceId: "oct17-source-63"
  },
  organizationRoles: [
    {
      organizationId: "cbl-bakeries-cinnaroll",
      roleId: "work-commercial-baking",
      establishes: "related-work",
      label: "Company describes manufacturing and production teams; no current vacancy claimed.",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-62",
        "oct17-source-63"
      ],
      checkedOn: "2026-10-17"
    },
    {
      organizationId: "cbl-bakeries-cinnaroll",
      roleId: "work-quality",
      establishes: "related-work",
      label: "Company describes quality assurance; no named job description captured.",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-62",
        "oct17-source-63"
      ],
      checkedOn: "2026-10-17"
    },
    {
      organizationId: "cbl-bakeries-cinnaroll",
      roleId: "work-food",
      establishes: "related-work",
      label: "Company describes product development; no particular scientist role or degree requirement is asserted.",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-62",
        "oct17-source-63"
      ],
      checkedOn: "2026-10-17"
    }
  ],
  jobs: [],
  sources: [
    {
      id: "oct17-source-62",
      label: "CBL Bakeries / Cinnaroll — company/project evidence 1",
      url: "https://www.cinnaroll.com/",
      checkedOn: "2026-10-17"
    },
    {
      id: "oct17-source-63",
      label: "CBL Bakeries / Cinnaroll — company/project evidence 2",
      url: "https://www.cinnaroll.com/careers",
      checkedOn: "2026-10-17"
    }
  ],
  diagram: {
    image: "/images/story-diagrams/cbl-bakeries-cinnaroll-graphic-novel.webp",
    heading: "Look at variation, not only an average",
    steps: [
      "Define the product criteria.",
      "Produce and identify the batch.",
      "Check variation across samples.",
      "Investigate a pattern, change one condition and sample again."
    ],
    note: "The pastries, dot plot and acceptance marks are illustrative, not company data or published tolerances. Averages can conceal individual differences."
  },
  unitLinks: [],
} satisfies ExampleRecord;
