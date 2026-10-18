import type { ExampleRecord } from "../types";

export default {
  addedOn: "2026-10-15",
  example: {
    slug: "avmax",
    org: "Avmax",
    discipline: "Physics",
    question: "How do you decide whether an aircraft part is safe to keep using?",
    work: "Avmax provides aircraft services including maintenance, avionics, engineering and component repairs. Its current contact page explicitly lists those activities in Calgary. This example uses inspection and maintenance to connect physical properties with careful technical judgment.",
    localShort: "Calgary corporate office and documented maintenance, engineering, avionics and component-repair services.",
    calgary: "Calgary corporate office and documented maintenance, engineering, avionics and component-repair services.",
    site: "Calgary corporate office and documented maintenance, engineering, avionics and component-repair services.",
    localSourceIds: [
      "page-avmax-expansion-source-26",
      "page-avmax-expansion-source-27",
      "page-avmax-expansion-source-28",
      "page-avmax-expansion-source-29",
      "page-avmax-expansion-source-30"
    ],
    explain: "Give students fictional inspection readings, measurement uncertainty and a fictional acceptance interval. Ask which cases need more evidence. Do not use real aircraft limits.",
    prompt: "What would you do if a measurement fell very close to an acceptance limit?",
    conversation: "What would you do if a measurement fell very close to an acceptance limit?",
    mindset: "This is a reasoning exercise, not aircraft-maintenance guidance. The response should distinguish a measured value from confidence in that value.",
    courses: [
      {
        course: "Physics 20",
        topic: "Forces and evidence from mechanical tests"
      }
    ],
    courseFitSourceIds: [
      "page-avmax-expansion-source-12"
    ],
    roles: [
      {
        title: "Aircraft maintenance",
        note: "Investigate condition, carry out authorized maintenance and preserve the records behind a decision. Aircraft maintenance work relies on approved procedures and appropriate qualifications.",
        evidence: "Current MRO page names technicians, maintenance checks and inspection services.",
        kind: "interpreted",
        sourceIds: [
          "page-avmax-expansion-source-26",
          "page-avmax-expansion-source-27",
          "page-avmax-expansion-source-28",
          "page-avmax-expansion-source-29",
          "page-avmax-expansion-source-30"
        ]
      },
      {
        title: "Avionics and electronics",
        note: "Work on the electronic systems that allow aircraft to communicate, navigate and collect data. Troubleshooting means distinguishing a faulty sensor from wiring, power or software problems.",
        evidence: "Current company contact and service pages establish Calgary avionics work.",
        kind: "interpreted",
        sourceIds: [
          "page-avmax-expansion-source-26",
          "page-avmax-expansion-source-27",
          "page-avmax-expansion-source-28",
          "page-avmax-expansion-source-29",
          "page-avmax-expansion-source-30"
        ]
      },
      {
        title: "Quality and traceability",
        note: "Make it possible to explain how a result or product was produced. Quality work checks records, methods and acceptance criteria so variation can be investigated rather than hidden.",
        evidence: "Inspection and documented maintenance provide the context; the role explanation is general.",
        kind: "interpreted",
        sourceIds: [
          "page-avmax-expansion-source-26",
          "page-avmax-expansion-source-27",
          "page-avmax-expansion-source-28",
          "page-avmax-expansion-source-29",
          "page-avmax-expansion-source-30"
        ]
      }
    ],
    rolesNote: "Work areas and related occupations, not a staff roster or a list of open vacancies. Individual evidence notes distinguish company work from editorial connections.",
    pathways: [
      {
        kindLabel: "Diploma",
        label: "SAIT — Aircraft Maintenance Engineers Technology",
        note: "Study aircraft systems, inspections and maintenance at the Art Smith Aero Centre. A diploma is not an AME licence. Transport Canada also requires qualifying experience, demonstrated skills and examinations; see the licensing source.",
        kind: "interpreted",
        sourceIds: [
          "page-avmax-expansion-source-31"
        ]
      },
      {
        kindLabel: "Diploma",
        label: "SAIT — Avionics Technology",
        note: "Study aircraft electrical, electronic, communication and navigation systems. Training supports a route toward AME E licensing; graduation alone does not confer that licence. Check Transport Canada’s requirements.",
        kind: "interpreted",
        sourceIds: [
          "page-avmax-expansion-source-32"
        ]
      },
      {
        kindLabel: "Diploma",
        label: "SAIT — Mechanical Engineering Technology",
        note: "Study mechanical systems, design and manufacturing, with specialization options. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        kind: "interpreted",
        sourceIds: [
          "page-avmax-expansion-source-18"
        ]
      }
    ],
    ledger: [
      {
        type: "work",
        claim: "Avmax provides aircraft services including maintenance, avionics, engineering and component repairs. Its current contact page explicitly lists those activities in Calgary. This example uses inspection and maintenance to connect physical properties with careful technical judgment.",
        status: "Organization-stated",
        kind: "stated",
        sourceIds: [
          "page-avmax-expansion-source-26",
          "page-avmax-expansion-source-27",
          "page-avmax-expansion-source-28",
          "page-avmax-expansion-source-29",
          "page-avmax-expansion-source-30"
        ]
      },
      {
        type: "local connection",
        claim: "Calgary corporate office and documented maintenance, engineering, avionics and component-repair services.",
        status: "Organization-stated",
        kind: "stated",
        sourceIds: [
          "page-avmax-expansion-source-26",
          "page-avmax-expansion-source-27",
          "page-avmax-expansion-source-28",
          "page-avmax-expansion-source-29",
          "page-avmax-expansion-source-30"
        ]
      },
      {
        type: "course fit",
        claim: "Use forces and measured deformation to discuss inspection evidence. Students are evaluating evidence, not making airworthiness decisions.",
        status: "Editorial connection to verified course topics",
        kind: "interpreted",
        sourceIds: [
          "page-avmax-expansion-source-12"
        ]
      },
      {
        type: "limits",
        claim: "Do not imply a diploma grants authority to certify aircraft maintenance. No specific current apprentice vacancy was confirmed. Use general inspection evidence; a particular non-destructive testing method is not assigned to a component without a source.",
        status: "Scope of this example",
        kind: "interpreted",
        sourceIds: [
          "page-avmax-expansion-source-26",
          "page-avmax-expansion-source-27",
          "page-avmax-expansion-source-28",
          "page-avmax-expansion-source-29",
          "page-avmax-expansion-source-30"
        ]
      }
    ],
    sources: [
      {
        id: "page-avmax-expansion-source-12",
        label: "Alberta Physics 20–30 performance standards",
        url: "https://www.alberta.ca/system/files/custom_downloaded_images/edc-physics20-30-performance-standards.pdf"
      },
      {
        id: "page-avmax-expansion-source-18",
        label: "SAIT — Mechanical Engineering Technology",
        url: "https://www.sait.ca/programs-and-courses/diplomas/mechanical-engineering-technology"
      },
      {
        id: "page-avmax-expansion-source-26",
        label: "Calgary services",
        url: "https://www.avmax.com/contact"
      },
      {
        id: "page-avmax-expansion-source-27",
        label: "Maintenance and inspection",
        url: "https://www.avmax.com/mro-1"
      },
      {
        id: "page-avmax-expansion-source-28",
        label: "Component services",
        url: "https://www.avmax.com/services-9"
      },
      {
        id: "page-avmax-expansion-source-29",
        label: "Careers check",
        url: "https://www.avmax.com/careers"
      },
      {
        id: "page-avmax-expansion-source-30",
        label: "AME licensing overview",
        url: "https://tc.canada.ca/en/aviation/licensing-aircraft-maintenance-engineers-ames/obtaining-aircraft-maintenance-engineer-ame-licence"
      },
      {
        id: "page-avmax-expansion-source-31",
        label: "SAIT — Aircraft Maintenance Engineers Technology",
        url: "https://www.sait.ca/programs-and-courses/diplomas/aircraft-maintenance-engineers-technology"
      },
      {
        id: "page-avmax-expansion-source-32",
        label: "SAIT — Avionics Technology",
        url: "https://www.sait.ca/programs-and-courses/diplomas/avionics-technology"
      }
    ],
    checkedOn: "2026-10-15",
    detailsId: "avmax-details"
  },
  details: {
    id: "avmax-details",
    exampleSlug: "avmax",
    organizationId: "avmax",
    story: {
      diagramKind: "research",
      illustrationSlug: "avmax",
      subtitle: "A maintenance decision needs evidence, not a guess.",
      caption: "A maintenance decision needs evidence, not a guess.",
      steps: [
        {
          text: "An aircraft component must meet requirements appropriate to its purpose and operating conditions.",
          kind: "interpreted",
          sourceIds: [
            "expansion-source-26",
            "expansion-source-27",
            "expansion-source-28",
            "expansion-source-29",
            "expansion-source-30"
          ]
        },
        {
          text: "Avmax lists inspections and non-destructive testing among its maintenance capabilities. These can provide evidence without simply breaking a part to examine it.",
          kind: "interpreted",
          sourceIds: [
            "expansion-source-26",
            "expansion-source-27",
            "expansion-source-28",
            "expansion-source-29",
            "expansion-source-30"
          ]
        },
        {
          text: "Technicians compare findings with applicable procedures and limits, involving the qualified people needed for the decision.",
          kind: "interpreted",
          sourceIds: [
            "expansion-source-26",
            "expansion-source-27",
            "expansion-source-28",
            "expansion-source-29",
            "expansion-source-30"
          ]
        },
        {
          text: "The resulting work and tests must be recorded. A part looking intact is not the same as having enough evidence to return it to service.",
          kind: "interpreted",
          sourceIds: [
            "expansion-source-26",
            "expansion-source-27",
            "expansion-source-28",
            "expansion-source-29",
            "expansion-source-30"
          ]
        }
      ],
      diagramAlt: "Conceptual sequence: Identify the component and the applicable procedure. Inspect and measure its condition. Compare the evidence with approved limits. Record the authorized maintenance decision.",
      diagramProvenance: "Generated generic teaching illustration. Source-backed editorial simplification; not a company process specification. See design/example-expansion-2026-10-15/.",
      discussion: "What would you do if a measurement fell very close to an acceptance limit?"
    },
    roleIds: [
      "work-maintenance",
      "work-avionics",
      "work-quality"
    ],
    pathwayIds: [
      "route-ame",
      "route-avionics",
      "route-mechanical"
    ],
    jobIds: [],
    checkedOn: "2026-10-15"
  },
  organization: {
    id: "avmax",
    name: "Avmax",
    organizationType: "company",
    tagline: "A maintenance decision needs evidence, not a guess.",
    description: {
      text: "Avmax provides aircraft services including maintenance, avionics, engineering and component repairs. Its current contact page explicitly lists those activities in Calgary. This example uses inspection and maintenance to connect physical properties with careful technical judgment.",
      kind: "stated",
      sourceIds: [
        "expansion-source-26",
        "expansion-source-27",
        "expansion-source-28",
        "expansion-source-29",
        "expansion-source-30"
      ]
    },
    problem: {
      text: "How can a team judge a component’s condition and decide what authorized work is needed?",
      kind: "interpreted",
      sourceIds: [
        "expansion-source-26",
        "expansion-source-27",
        "expansion-source-28",
        "expansion-source-29",
        "expansion-source-30"
      ]
    },
    offering: {
      text: "Aircraft maintenance, repair, engineering and related support services.",
      kind: "stated",
      sourceIds: [
        "expansion-source-26",
        "expansion-source-27",
        "expansion-source-28",
        "expansion-source-29",
        "expansion-source-30"
      ]
    },
    beneficiaries: {
      text: "Aircraft owners and operators who require documented maintenance support.",
      kind: "stated",
      sourceIds: [
        "expansion-source-26",
        "expansion-source-27",
        "expansion-source-28",
        "expansion-source-29",
        "expansion-source-30"
      ]
    },
    headquarters: {
      text: "Calgary corporate office and documented maintenance, engineering, avionics and component-repair services.",
      kind: "stated",
      sourceIds: [
        "expansion-source-26",
        "expansion-source-27",
        "expansion-source-28",
        "expansion-source-29",
        "expansion-source-30"
      ]
    },
    localConnection: {
      text: "Calgary corporate office and documented maintenance, engineering, avionics and component-repair services.",
      kind: "stated",
      sourceIds: [
        "expansion-source-26",
        "expansion-source-27",
        "expansion-source-28",
        "expansion-source-29",
        "expansion-source-30"
      ]
    },
    websiteSourceId: "expansion-source-26",
    checkedOn: "2026-10-15",
    careersSourceId: "expansion-source-29"
  },
  organizationRoles: [
    {
      organizationId: "avmax",
      roleId: "work-maintenance",
      establishes: "work-area",
      label: "Work area · Current MRO page names technicians, maintenance checks and inspection services.",
      kind: "interpreted",
      sourceIds: [
        "expansion-source-26",
        "expansion-source-27",
        "expansion-source-28",
        "expansion-source-29",
        "expansion-source-30"
      ],
      checkedOn: "2026-10-15"
    },
    {
      organizationId: "avmax",
      roleId: "work-avionics",
      establishes: "work-area",
      label: "Work area · Current company contact and service pages establish Calgary avionics work.",
      kind: "interpreted",
      sourceIds: [
        "expansion-source-26",
        "expansion-source-27",
        "expansion-source-28",
        "expansion-source-29",
        "expansion-source-30"
      ],
      checkedOn: "2026-10-15"
    },
    {
      organizationId: "avmax",
      roleId: "work-quality",
      establishes: "work-area",
      label: "Work area · Inspection and documented maintenance provide the context; the role explanation is general.",
      kind: "interpreted",
      sourceIds: [
        "expansion-source-26",
        "expansion-source-27",
        "expansion-source-28",
        "expansion-source-29",
        "expansion-source-30"
      ],
      checkedOn: "2026-10-15"
    }
  ],
  jobs: [],
  sources: [
    {
      id: "expansion-source-26",
      label: "Calgary services",
      url: "https://www.avmax.com/contact",
      checkedOn: "2026-10-15"
    },
    {
      id: "expansion-source-27",
      label: "Maintenance and inspection",
      url: "https://www.avmax.com/mro-1",
      checkedOn: "2026-10-15"
    },
    {
      id: "expansion-source-28",
      label: "Component services",
      url: "https://www.avmax.com/services-9",
      checkedOn: "2026-10-15"
    },
    {
      id: "expansion-source-29",
      label: "Careers check",
      url: "https://www.avmax.com/careers",
      checkedOn: "2026-10-15"
    }
  ],
  diagram: {
    image: "/images/story-diagrams/avmax-graphic-novel.webp",
    heading: "From inspection to an evidence-based decision",
    steps: [
      "Identify the component and the applicable procedure.",
      "Inspect and measure its condition.",
      "Compare the evidence with approved limits.",
      "Record the authorized maintenance decision."
    ],
    note: "This is a conceptual decision sequence, not an inspection procedure or permission to return a part to service."
  },
  unitLinks: [
    {
      unitId: "p20b",
      why: "Use forces and measured deformation to discuss inspection evidence. Students are evaluating evidence, not making airworthiness decisions."
    }
  ],
} satisfies ExampleRecord;
