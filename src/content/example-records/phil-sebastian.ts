import type { ExampleRecord } from "../types";

export default {
  addedOn: "2026-10-17",
  example: {
    slug: "phil-sebastian",
    org: "Phil & Sebastian Coffee Roasters",
    discipline: "Physics",
    question: "How can measurements help make a roast repeatable?",
    work: "Phil & Sebastian operates a roasting facility in Calgary’s Simmons Building. The company describes a custom roaster, logged roast data and additional reflectance measurements used to check batches. The story connects food production with instrumentation: recording operating conditions and checking the product answer different questions. Its claims about competitors are not needed for this example.",
    localShort: "The company identifies the Simmons Building as its Calgary roasting facility.",
    calgary: "The company identifies the Simmons Building as its Calgary roasting facility.",
    site: "The company identifies the Simmons Building as its Calgary roasting facility.",
    localSourceIds: [
      "page-phil-sebastian-oct17-source-18",
      "page-phil-sebastian-oct17-source-19",
      "page-phil-sebastian-oct17-source-20"
    ],
    explain: "Compare three fictional batches: A and B share a heating record but have different colour readings; B and C share colour readings but have different sensory notes. List what each comparison can and cannot show.",
    prompt: "If two batches have the same recorded temperature history, what else would you want to measure?",
    conversation: "If two batches have the same recorded temperature history, what else would you want to measure?",
    mindset: "The fictional comparisons are not company results. No coffee consumption or hot-equipment activity is required.",
    courses: [
      {
        course: "Physics 30",
        topic: "Reflection and optical measurement"
      }
    ],
    courseFitSourceIds: [
      "page-phil-sebastian-oct17-source-14"
    ],
    roles: [
      {
        title: "Roast production",
        note: "Operate a controlled food-processing sequence and compare the product with its intended result.",
        evidence: "Company process description supports roasting work; no specific roaster vacancy verified.",
        kind: "interpreted",
        sourceIds: [
          "page-phil-sebastian-oct17-source-18",
          "page-phil-sebastian-oct17-source-19",
          "page-phil-sebastian-oct17-source-20"
        ]
      },
      {
        title: "Instrument development and testing",
        note: "Help build and check the equipment that produces measurements. Instrument work joins hardware, software and experiments rather than treating a reading as automatically correct.",
        evidence: "Custom equipment and reflectance measurements support the work-area connection.",
        kind: "interpreted",
        sourceIds: [
          "page-phil-sebastian-oct17-source-18",
          "page-phil-sebastian-oct17-source-19",
          "page-phil-sebastian-oct17-source-20"
        ]
      },
      {
        title: "Quality and traceability",
        note: "Make it possible to explain how a result or product was produced. Quality work checks records, methods and acceptance criteria so variation can be investigated rather than hidden.",
        evidence: "Company describes batch checks; the general quality profile is not a job description.",
        kind: "interpreted",
        sourceIds: [
          "page-phil-sebastian-oct17-source-18",
          "page-phil-sebastian-oct17-source-19",
          "page-phil-sebastian-oct17-source-20"
        ]
      }
    ],
    rolesNote: "Work areas and related occupations, not a staff roster or a list of current vacancies. Each profile explains the evidence for its company connection.",
    pathways: [
      {
        kindLabel: "Diploma",
        label: "SAIT — Instrumentation Engineering Technology",
        note: "Work with measurement devices, calibration and automated process controls. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        kind: "interpreted",
        sourceIds: [
          "page-phil-sebastian-oct17-source-21"
        ]
      },
      {
        kindLabel: "Diploma",
        label: "SAIT — Chemical Laboratory Technology",
        note: "Practice chemical analysis, sample preparation and analytical instrumentation. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        kind: "interpreted",
        sourceIds: [
          "page-phil-sebastian-oct17-source-22"
        ]
      },
      {
        kindLabel: "Diploma",
        label: "SAIT — Mechanical Engineering Technology",
        note: "Study mechanical systems, design and manufacturing, with specialization options. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        kind: "interpreted",
        sourceIds: [
          "page-phil-sebastian-oct17-source-23"
        ]
      }
    ],
    ledger: [
      {
        type: "work",
        claim: "Phil & Sebastian operates a roasting facility in Calgary’s Simmons Building. The company describes a custom roaster, logged roast data and additional reflectance measurements used to check batches. The story connects food production with instrumentation: recording operating conditions and checking the product answer different questions. Its claims about competitors are not needed for this example.",
        status: "Source-backed company/project account",
        kind: "stated",
        sourceIds: [
          "page-phil-sebastian-oct17-source-18",
          "page-phil-sebastian-oct17-source-19",
          "page-phil-sebastian-oct17-source-20"
        ]
      },
      {
        type: "local connection",
        claim: "The company identifies the Simmons Building as its Calgary roasting facility.",
        status: "Source-backed local work",
        kind: "stated",
        sourceIds: [
          "page-phil-sebastian-oct17-source-18",
          "page-phil-sebastian-oct17-source-19",
          "page-phil-sebastian-oct17-source-20"
        ]
      },
      {
        type: "course fit",
        claim: "Physics 30 C1 includes reflection. Trace light from source to sample to sensor; roast data and flavour are separate evidence.",
        status: "Editorial application of verified curriculum topics",
        kind: "interpreted",
        sourceIds: [
          "page-phil-sebastian-oct17-source-14"
        ]
      },
      {
        type: "limits",
        claim: "No exact roast temperatures or proprietary machine internals. Colour and flavour must remain distinct.",
        status: "Scope of this example",
        kind: "interpreted",
        sourceIds: [
          "page-phil-sebastian-oct17-source-18",
          "page-phil-sebastian-oct17-source-19",
          "page-phil-sebastian-oct17-source-20"
        ]
      }
    ],
    sources: [
      {
        id: "page-phil-sebastian-oct17-source-14",
        label: "Alberta Physics 20–30 performance standards: A1, B1 and C1",
        url: "https://www.alberta.ca/system/files/custom_downloaded_images/edc-physics20-30-performance-standards.pdf"
      },
      {
        id: "page-phil-sebastian-oct17-source-18",
        label: "Phil & Sebastian Coffee Roasters — company/project evidence 1",
        url: "https://philsebastian.com/pages/locations/simmons"
      },
      {
        id: "page-phil-sebastian-oct17-source-19",
        label: "Phil & Sebastian Coffee Roasters — company/project evidence 2",
        url: "https://philsebastian.com/pages/our-coffee-approach"
      },
      {
        id: "page-phil-sebastian-oct17-source-20",
        label: "Phil & Sebastian Coffee Roasters — company/project evidence 3",
        url: "https://philsebastian.com/pages/join-our-team"
      },
      {
        id: "page-phil-sebastian-oct17-source-21",
        label: "SAIT — Instrumentation Engineering Technology",
        url: "https://www.sait.ca/programs-and-courses/diplomas/instrumentation-engineering-technology"
      },
      {
        id: "page-phil-sebastian-oct17-source-22",
        label: "SAIT — Chemical Laboratory Technology",
        url: "https://www.sait.ca/programs-and-courses/diplomas/chemical-laboratory-technology"
      },
      {
        id: "page-phil-sebastian-oct17-source-23",
        label: "SAIT — Mechanical Engineering Technology",
        url: "https://www.sait.ca/programs-and-courses/diplomas/mechanical-engineering-technology"
      }
    ],
    checkedOn: "2026-10-17",
    detailsId: "phil-sebastian-details"
  },
  details: {
    id: "phil-sebastian-details",
    exampleSlug: "phil-sebastian",
    organizationId: "phil-sebastian",
    story: {
      diagramKind: "research",
      illustrationSlug: "phil-sebastian",
      subtitle: "Consistency depends on checking what happened, not just repeating a recipe.",
      caption: "Consistency depends on checking what happened, not just repeating a recipe.",
      steps: [
        {
          text: "A roast changes a batch of green coffee through heating. Time and temperature matter, but they do not describe every property of the result.",
          kind: "interpreted",
          sourceIds: [
            "oct17-source-18",
            "oct17-source-19",
            "oct17-source-20",
            "oct17-source-14"
          ]
        },
        {
          text: "The company says it records roast data and checks samples with a reflectometer.",
          kind: "interpreted",
          sourceIds: [
            "oct17-source-18",
            "oct17-source-19",
            "oct17-source-20",
            "oct17-source-14"
          ]
        },
        {
          text: "A reflectance reading measures how light returns from the sample under specified conditions; it is not a direct measurement of flavour.",
          kind: "interpreted",
          sourceIds: [
            "oct17-source-18",
            "oct17-source-19",
            "oct17-source-20",
            "oct17-source-14"
          ]
        },
        {
          text: "Comparing process records with product measurements can reveal variation and guide the next controlled test.",
          kind: "interpreted",
          sourceIds: [
            "oct17-source-18",
            "oct17-source-19",
            "oct17-source-20",
            "oct17-source-14"
          ]
        }
      ],
      diagramAlt: "Conceptual teaching illustration for How can measurements help make a roast repeatable? Four numbered stages and arrows correspond to the explanation below.",
      diagramProvenance: "Generated fictional teaching illustration; source-grounded editorial simplification. Not a company process specification. Prompts and review: design/example-expansion-2026-10-17/.",
      discussion: "If two batches have the same recorded temperature history, what else would you want to measure?"
    },
    roleIds: [
      "work-roast-production",
      "work-instrument",
      "work-quality"
    ],
    pathwayIds: [
      "oct17-route-sait-instrumentation-engineering-technology",
      "oct17-route-sait-chemical-laboratory-technology",
      "oct17-route-sait-mechanical-engineering-technology"
    ],
    jobIds: [],
    checkedOn: "2026-10-17"
  },
  organization: {
    id: "phil-sebastian",
    name: "Phil & Sebastian Coffee Roasters",
    organizationType: "company",
    tagline: "Consistency depends on checking what happened, not just repeating a recipe.",
    description: {
      text: "Phil & Sebastian operates a roasting facility in Calgary’s Simmons Building. The company describes a custom roaster, logged roast data and additional reflectance measurements used to check batches. The story connects food production with instrumentation: recording operating conditions and checking the product answer different questions. Its claims about competitors are not needed for this example.",
      kind: "stated",
      sourceIds: [
        "oct17-source-18",
        "oct17-source-19",
        "oct17-source-20"
      ]
    },
    problem: {
      text: "How can measurements help make a roast repeatable?",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-18",
        "oct17-source-19",
        "oct17-source-20"
      ]
    },
    offering: {
      text: "Coffee roasting and batch quality checks using process records and product measurements.",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-18",
        "oct17-source-19",
        "oct17-source-20"
      ]
    },
    beneficiaries: {
      text: "Café teams and coffee drinkers who depend on consistent batches.",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-18",
        "oct17-source-19",
        "oct17-source-20"
      ]
    },
    headquarters: {
      text: "Headquarters not separately verified for this example.",
      kind: "unresearched",
      sourceIds: []
    },
    localConnection: {
      text: "The company identifies the Simmons Building as its Calgary roasting facility.",
      kind: "stated",
      sourceIds: [
        "oct17-source-18",
        "oct17-source-19",
        "oct17-source-20"
      ]
    },
    websiteSourceId: "oct17-source-18",
    checkedOn: "2026-10-17",
    careersSourceId: "oct17-source-20"
  },
  organizationRoles: [
    {
      organizationId: "phil-sebastian",
      roleId: "work-roast-production",
      establishes: "related-work",
      label: "Company process description supports roasting work; no specific roaster vacancy verified.",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-18",
        "oct17-source-19",
        "oct17-source-20"
      ],
      checkedOn: "2026-10-17"
    },
    {
      organizationId: "phil-sebastian",
      roleId: "work-instrument",
      establishes: "related-work",
      label: "Custom equipment and reflectance measurements support the work-area connection.",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-18",
        "oct17-source-19",
        "oct17-source-20"
      ],
      checkedOn: "2026-10-17"
    },
    {
      organizationId: "phil-sebastian",
      roleId: "work-quality",
      establishes: "related-work",
      label: "Company describes batch checks; the general quality profile is not a job description.",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-18",
        "oct17-source-19",
        "oct17-source-20"
      ],
      checkedOn: "2026-10-17"
    }
  ],
  jobs: [],
  sources: [
    {
      id: "oct17-source-18",
      label: "Phil & Sebastian Coffee Roasters — company/project evidence 1",
      url: "https://philsebastian.com/pages/locations/simmons",
      checkedOn: "2026-10-17"
    },
    {
      id: "oct17-source-19",
      label: "Phil & Sebastian Coffee Roasters — company/project evidence 2",
      url: "https://philsebastian.com/pages/our-coffee-approach",
      checkedOn: "2026-10-17"
    },
    {
      id: "oct17-source-20",
      label: "Phil & Sebastian Coffee Roasters — company/project evidence 3",
      url: "https://philsebastian.com/pages/join-our-team",
      checkedOn: "2026-10-17"
    }
  ],
  diagram: {
    image: "/images/story-diagrams/phil-sebastian-graphic-novel.webp",
    heading: "Connect process records to product evidence",
    steps: [
      "Record the roast conditions.",
      "Take a sample from the batch.",
      "Measure light reflected from the sample under controlled conditions.",
      "Compare readings and adjust the next test."
    ],
    note: "The instrument and charts are illustrative. Light travels from source to sample to sensor; the different arrow colours identify paths, not a wavelength change. Reflectance does not measure flavour."
  },
  unitLinks: [
    {
      unitId: "p30c",
      why: "Physics 30 C1 includes reflection. Trace light from source to sample to sensor; roast data and flavour are separate evidence."
    }
  ],
} satisfies ExampleRecord;
