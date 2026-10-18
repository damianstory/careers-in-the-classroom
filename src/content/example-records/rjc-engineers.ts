import type { ExampleRecord } from "../types";

export default {
  addedOn: "2026-10-17",
  example: {
    slug: "rjc-engineers",
    org: "RJC Engineers",
    discipline: "Physics",
    question: "How can a building keep heat in while managing moisture?",
    work: "RJC provides structural engineering and building-science services in Calgary. Its Calgary building-science leadership describes assessing and rehabilitating building envelopes and roofs. A building envelope separates indoors from outdoors while managing heat, air and water movement. This example uses a generic wall rather than claiming to reproduce an RJC design.",
    localShort: "RJC’s Calgary building-science and restoration team is explicitly identified.",
    calgary: "RJC’s Calgary building-science and restoration team is explicitly identified.",
    site: "RJC’s Calgary building-science and restoration team is explicitly identified.",
    localSourceIds: [
      "page-rjc-engineers-oct17-source-49",
      "page-rjc-engineers-oct17-source-50"
    ],
    explain: "Annotate a fictional wall section with separate arrows for heat flow, air leakage and rainwater. Identify one joint to inspect and one measurement that would distinguish competing explanations.",
    prompt: "Why might adding more insulation fail to fix a water leak?",
    conversation: "Why might adding more insulation fail to fix a water leak?",
    mindset: "The section is conceptual, not construction advice. Correct assemblies depend on climate, materials, codes and professional design.",
    courses: [
      {
        course: "Science 10",
        topic: "Heat transfer in technological systems"
      }
    ],
    courseFitSourceIds: [
      "page-rjc-engineers-oct17-source-51"
    ],
    roles: [
      {
        title: "Building-science investigation",
        note: "Investigate how a building enclosure manages heat, air and water.",
        evidence: "RJC’s Calgary leadership profile explicitly describes building-envelope and roof investigation.",
        kind: "interpreted",
        sourceIds: [
          "page-rjc-engineers-oct17-source-49",
          "page-rjc-engineers-oct17-source-50"
        ]
      },
      {
        title: "Civil and construction technology",
        note: "Turn project requirements into usable drawings, quantities and checks.",
        evidence: "Technical drawing and site support are general related work; not a verified RJC vacancy.",
        kind: "interpreted",
        sourceIds: [
          "page-rjc-engineers-oct17-source-49",
          "page-rjc-engineers-oct17-source-50"
        ]
      },
      {
        title: "Quality and traceability",
        note: "Make it possible to explain how a result or product was produced. Quality work checks records, methods and acceptance criteria so variation can be investigated rather than hidden.",
        evidence: "Quality verification is an editorial connection to rehabilitation work, not a named RJC position.",
        kind: "interpreted",
        sourceIds: [
          "page-rjc-engineers-oct17-source-49",
          "page-rjc-engineers-oct17-source-50"
        ]
      }
    ],
    rolesNote: "Work areas and related occupations, not a staff roster or a list of current vacancies. Each profile explains the evidence for its company connection.",
    pathways: [
      {
        kindLabel: "Diploma",
        label: "SAIT — Architectural Technologies",
        note: "Study building design, technical drawings and construction systems. Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
        kind: "interpreted",
        sourceIds: [
          "page-rjc-engineers-oct17-source-17"
        ]
      },
      {
        kindLabel: "Bachelor’s degree",
        label: "University of Calgary — Civil Engineering",
        note: "Study the design and operation of structures, transportation and water infrastructure. Check current admissions and program requirements. A degree is not automatic professional licensure.",
        kind: "interpreted",
        sourceIds: [
          "page-rjc-engineers-oct17-source-15"
        ]
      },
      {
        kindLabel: "Diploma",
        label: "SAIT — Civil Engineering Technology, Municipal Major",
        note: "Study municipal infrastructure, design and drafting. Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
        kind: "interpreted",
        sourceIds: [
          "page-rjc-engineers-oct17-source-16"
        ]
      }
    ],
    ledger: [
      {
        type: "work",
        claim: "RJC provides structural engineering and building-science services in Calgary. Its Calgary building-science leadership describes assessing and rehabilitating building envelopes and roofs. A building envelope separates indoors from outdoors while managing heat, air and water movement. This example uses a generic wall rather than claiming to reproduce an RJC design.",
        status: "Source-backed company/project account",
        kind: "stated",
        sourceIds: [
          "page-rjc-engineers-oct17-source-49",
          "page-rjc-engineers-oct17-source-50"
        ]
      },
      {
        type: "local connection",
        claim: "RJC’s Calgary building-science and restoration team is explicitly identified.",
        status: "Source-backed local work",
        kind: "stated",
        sourceIds: [
          "page-rjc-engineers-oct17-source-49",
          "page-rjc-engineers-oct17-source-50"
        ]
      },
      {
        type: "course fit",
        claim: "Science 10 Unit B connects heat transfer and technological systems. Compare insulation and joints; moisture transport is a building-science extension, not a universal wall prescription.",
        status: "Editorial application of verified curriculum topics",
        kind: "interpreted",
        sourceIds: [
          "page-rjc-engineers-oct17-source-51"
        ]
      },
      {
        type: "limits",
        claim: "The question is refined from “keeping moisture out” to “managing moisture”; no exact RJC project assembly or blanket energy-saving claim.",
        status: "Scope of this example",
        kind: "interpreted",
        sourceIds: [
          "page-rjc-engineers-oct17-source-49",
          "page-rjc-engineers-oct17-source-50"
        ]
      }
    ],
    sources: [
      {
        id: "page-rjc-engineers-oct17-source-15",
        label: "University of Calgary — Civil Engineering",
        url: "https://schulich.ucalgary.ca/future-students/undergraduate/programs/bsc-civil-engineering"
      },
      {
        id: "page-rjc-engineers-oct17-source-16",
        label: "SAIT — Civil Engineering Technology, Municipal Major",
        url: "https://www.sait.ca/programs-and-courses/diplomas/civil-engineering-technology-municipal"
      },
      {
        id: "page-rjc-engineers-oct17-source-17",
        label: "SAIT — Architectural Technologies",
        url: "https://www.sait.ca/programs-and-courses/diplomas/architectural-technologies"
      },
      {
        id: "page-rjc-engineers-oct17-source-49",
        label: "RJC Engineers — company/project evidence 1",
        url: "https://www.rjc.ca/location-details/calgary.html"
      },
      {
        id: "page-rjc-engineers-oct17-source-50",
        label: "RJC Engineers — company/project evidence 2",
        url: "https://www.rjc.ca/people/our-leadership/details/ryan-coles.html"
      },
      {
        id: "page-rjc-engineers-oct17-source-51",
        label: "Alberta Science 10 program: inquiry skills and technological systems",
        url: "https://education.alberta.ca/media/159715/science10.pdf"
      }
    ],
    checkedOn: "2026-10-17",
    detailsId: "rjc-engineers-details"
  },
  details: {
    id: "rjc-engineers-details",
    exampleSlug: "rjc-engineers",
    organizationId: "rjc-engineers",
    story: {
      diagramKind: "research",
      illustrationSlug: "rjc-engineers",
      subtitle: "The layers around a room have several jobs, and they must work together.",
      caption: "The layers around a room have several jobs, and they must work together.",
      steps: [
        {
          text: "Indoor and outdoor conditions differ, so heat and moisture can move across a building enclosure.",
          kind: "interpreted",
          sourceIds: [
            "oct17-source-49",
            "oct17-source-50",
            "oct17-source-51"
          ]
        },
        {
          text: "Materials and joints perform different jobs: insulation, air control, water control and structural support are not interchangeable.",
          kind: "interpreted",
          sourceIds: [
            "oct17-source-49",
            "oct17-source-50",
            "oct17-source-51"
          ]
        },
        {
          text: "A defect at a joint can matter even when the main wall materials perform well.",
          kind: "interpreted",
          sourceIds: [
            "oct17-source-49",
            "oct17-source-50",
            "oct17-source-51"
          ]
        },
        {
          text: "Inspection and measurements help identify a cause before a repair is chosen. Appearance alone may not explain the problem.",
          kind: "interpreted",
          sourceIds: [
            "oct17-source-49",
            "oct17-source-50",
            "oct17-source-51"
          ]
        }
      ],
      diagramAlt: "Conceptual teaching illustration for How can a building keep heat in while managing moisture? Four numbered stages and arrows correspond to the explanation below.",
      diagramProvenance: "Generated fictional teaching illustration; source-grounded editorial simplification. Not a company process specification. Prompts and review: design/example-expansion-2026-10-17/.",
      discussion: "Why might adding more insulation fail to fix a water leak?"
    },
    roleIds: [
      "work-building-science-investigation",
      "work-civil-and-construction-technology",
      "work-quality"
    ],
    pathwayIds: [
      "oct17-route-sait-architectural-technologies",
      "oct17-route-university-of-calgary-civil-engineering",
      "oct17-route-sait-civil-engineering-technology-municipal-major"
    ],
    jobIds: [],
    checkedOn: "2026-10-17"
  },
  organization: {
    id: "rjc-engineers",
    name: "RJC Engineers",
    organizationType: "company",
    tagline: "The layers around a room have several jobs, and they must work together.",
    description: {
      text: "RJC provides structural engineering and building-science services in Calgary. Its Calgary building-science leadership describes assessing and rehabilitating building envelopes and roofs. A building envelope separates indoors from outdoors while managing heat, air and water movement. This example uses a generic wall rather than claiming to reproduce an RJC design.",
      kind: "stated",
      sourceIds: [
        "oct17-source-49",
        "oct17-source-50"
      ]
    },
    problem: {
      text: "How can a building keep heat in while managing moisture?",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-49",
        "oct17-source-50"
      ]
    },
    offering: {
      text: "Structural engineering and building-science assessment and rehabilitation.",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-49",
        "oct17-source-50"
      ]
    },
    beneficiaries: {
      text: "Building owners, maintenance teams and occupants.",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-49",
        "oct17-source-50"
      ]
    },
    headquarters: {
      text: "Headquarters not separately verified for this example.",
      kind: "unresearched",
      sourceIds: []
    },
    localConnection: {
      text: "RJC’s Calgary building-science and restoration team is explicitly identified.",
      kind: "stated",
      sourceIds: [
        "oct17-source-49",
        "oct17-source-50"
      ]
    },
    websiteSourceId: "oct17-source-49",
    checkedOn: "2026-10-17"
  },
  organizationRoles: [
    {
      organizationId: "rjc-engineers",
      roleId: "work-building-science-investigation",
      establishes: "related-work",
      label: "RJC’s Calgary leadership profile explicitly describes building-envelope and roof investigation.",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-49",
        "oct17-source-50"
      ],
      checkedOn: "2026-10-17"
    },
    {
      organizationId: "rjc-engineers",
      roleId: "work-civil-and-construction-technology",
      establishes: "related-work",
      label: "Technical drawing and site support are general related work; not a verified RJC vacancy.",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-49",
        "oct17-source-50"
      ],
      checkedOn: "2026-10-17"
    },
    {
      organizationId: "rjc-engineers",
      roleId: "work-quality",
      establishes: "related-work",
      label: "Quality verification is an editorial connection to rehabilitation work, not a named RJC position.",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-49",
        "oct17-source-50"
      ],
      checkedOn: "2026-10-17"
    }
  ],
  jobs: [],
  sources: [
    {
      id: "oct17-source-49",
      label: "RJC Engineers — company/project evidence 1",
      url: "https://www.rjc.ca/location-details/calgary.html",
      checkedOn: "2026-10-17"
    },
    {
      id: "oct17-source-50",
      label: "RJC Engineers — company/project evidence 2",
      url: "https://www.rjc.ca/people/our-leadership/details/ryan-coles.html",
      checkedOn: "2026-10-17"
    }
  ],
  diagram: {
    image: "/images/story-diagrams/rjc-engineers-graphic-novel.webp",
    heading: "Investigate the cause before choosing a repair",
    steps: [
      "Record the visible symptom.",
      "Consider heat, air and water paths through the enclosure.",
      "Inspect and measure the joint.",
      "Select a repair and verify its effect."
    ],
    note: "The section is conceptual, not a construction detail. Heat flows from warmer to cooler conditions; no universal vapour-barrier position or measured energy saving is claimed."
  },
  unitLinks: [
    {
      unitId: "s10b",
      why: "Science 10 Unit B connects heat transfer and technological systems. Compare insulation and joints; moisture transport is a building-science extension, not a universal wall prescription."
    }
  ],
} satisfies ExampleRecord;
