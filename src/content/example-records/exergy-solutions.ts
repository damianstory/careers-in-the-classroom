import type { ExampleRecord } from "../types";

export default {
  addedOn: "2026-10-15",
  example: {
    slug: "exergy-solutions",
    org: "Exergy Solutions",
    discipline: "Physics",
    question: "When should you print a metal part instead of machining it?",
    work: "Exergy Solutions combines engineering and manufacturing at its Nexus facility in Calgary. Its services include reverse engineering, metal 3D printing, CNC machining and prototyping. These capabilities offer a concrete way to discuss how design choices affect how a component is made.",
    localShort: "Nexus manufacturing facility in Calgary; client projects may be used elsewhere.",
    calgary: "Nexus manufacturing facility in Calgary; client projects may be used elsewhere.",
    site: "Nexus manufacturing facility in Calgary; client projects may be used elsewhere.",
    localSourceIds: [
      "page-exergy-solutions-expansion-source-15",
      "page-exergy-solutions-expansion-source-16",
      "page-exergy-solutions-expansion-source-17"
    ],
    explain: "Use a fictional bracket with a mounting hole and a tight fit requirement. Ask students to choose a manufacturing route and list the evidence needed before accepting the part.",
    prompt: "When might a simple machined part be preferable to a complex printed one?",
    conversation: "When might a simple machined part be preferable to a complex printed one?",
    mindset: "The bracket is an illustrative problem, not a claimed Exergy project. Good answers connect the choice to a requirement and include inspection.",
    courses: [
      {
        course: "Physics 20",
        topic: "Forces, work and design constraints"
      }
    ],
    courseFitSourceIds: [
      "page-exergy-solutions-expansion-source-12"
    ],
    roles: [
      {
        title: "Mechanical design and prototyping",
        note: "Translate a need into a component or machine that can be built and tested. Designers use dimensions, material properties and constraints to evaluate alternatives.",
        evidence: "Design engineering and reverse engineering are stated services.",
        kind: "interpreted",
        sourceIds: [
          "page-exergy-solutions-expansion-source-15",
          "page-exergy-solutions-expansion-source-16",
          "page-exergy-solutions-expansion-source-17"
        ]
      },
      {
        title: "Machining and dimensional inspection",
        note: "Make parts fit their intended purpose by controlling dimensions. Machining combines tools, setup and measurement; finishing a part is not the same as proving it meets its specification.",
        evidence: "CNC machining is a stated in-house capability; exact job duties are explained generally.",
        kind: "interpreted",
        sourceIds: [
          "page-exergy-solutions-expansion-source-15",
          "page-exergy-solutions-expansion-source-16",
          "page-exergy-solutions-expansion-source-17"
        ]
      },
      {
        title: "Quality and traceability",
        note: "Make it possible to explain how a result or product was produced. Quality work checks records, methods and acceptance criteria so variation can be investigated rather than hidden.",
        evidence: "Testing is part of the stated integrated facility; this is a work-area interpretation.",
        kind: "interpreted",
        sourceIds: [
          "page-exergy-solutions-expansion-source-15",
          "page-exergy-solutions-expansion-source-16",
          "page-exergy-solutions-expansion-source-17"
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
          "page-exergy-solutions-expansion-source-18"
        ]
      },
      {
        kindLabel: "Apprenticeship",
        label: "SAIT — Machinist",
        note: "Learn precision measurement, machine tools, drawings and machining. Requires apprenticeship registration and workplace training as well as classroom instruction; admission to a course alone is not journeyperson certification.",
        kind: "interpreted",
        sourceIds: [
          "page-exergy-solutions-expansion-source-19"
        ]
      },
      {
        kindLabel: "Diploma",
        label: "SAIT — Instrumentation Engineering Technology",
        note: "Work with measurement devices, calibration and automated process controls. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        kind: "interpreted",
        sourceIds: [
          "page-exergy-solutions-expansion-source-20"
        ]
      }
    ],
    ledger: [
      {
        type: "work",
        claim: "Exergy Solutions combines engineering and manufacturing at its Nexus facility in Calgary. Its services include reverse engineering, metal 3D printing, CNC machining and prototyping. These capabilities offer a concrete way to discuss how design choices affect how a component is made.",
        status: "Organization-stated",
        kind: "stated",
        sourceIds: [
          "page-exergy-solutions-expansion-source-15",
          "page-exergy-solutions-expansion-source-16",
          "page-exergy-solutions-expansion-source-17"
        ]
      },
      {
        type: "local connection",
        claim: "Nexus manufacturing facility in Calgary; client projects may be used elsewhere.",
        status: "Organization-stated",
        kind: "stated",
        sourceIds: [
          "page-exergy-solutions-expansion-source-15",
          "page-exergy-solutions-expansion-source-16",
          "page-exergy-solutions-expansion-source-17"
        ]
      },
      {
        type: "course fit",
        claim: "Compare the load a bracket must carry with the material and geometry used; printing is an engineering context rather than a required manufacturing topic.",
        status: "Editorial connection to verified course topics",
        kind: "interpreted",
        sourceIds: [
          "page-exergy-solutions-expansion-source-12"
        ]
      },
      {
        type: "limits",
        claim: "The classroom bracket is hypothetical. Do not claim all printed parts use less material overall or have a lower environmental footprint.",
        status: "Scope of this example",
        kind: "interpreted",
        sourceIds: [
          "page-exergy-solutions-expansion-source-15",
          "page-exergy-solutions-expansion-source-16",
          "page-exergy-solutions-expansion-source-17"
        ]
      }
    ],
    sources: [
      {
        id: "page-exergy-solutions-expansion-source-12",
        label: "Alberta Physics 20–30 performance standards",
        url: "https://www.alberta.ca/system/files/custom_downloaded_images/edc-physics20-30-performance-standards.pdf"
      },
      {
        id: "page-exergy-solutions-expansion-source-15",
        label: "Manufacturing capabilities and Calgary facility",
        url: "https://exergysolutions.com/services/manufacturing/"
      },
      {
        id: "page-exergy-solutions-expansion-source-16",
        label: "Facility address",
        url: "https://exergysolutions.com/contact-us/"
      },
      {
        id: "page-exergy-solutions-expansion-source-17",
        label: "Careers check",
        url: "https://exergysolutions.com/careers"
      },
      {
        id: "page-exergy-solutions-expansion-source-18",
        label: "SAIT — Mechanical Engineering Technology",
        url: "https://www.sait.ca/programs-and-courses/diplomas/mechanical-engineering-technology"
      },
      {
        id: "page-exergy-solutions-expansion-source-19",
        label: "SAIT — Machinist",
        url: "https://www.sait.ca/apprenticeships-and-trades/programs/machinist"
      },
      {
        id: "page-exergy-solutions-expansion-source-20",
        label: "SAIT — Instrumentation Engineering Technology",
        url: "https://www.sait.ca/programs-and-courses/diplomas/instrumentation-engineering-technology"
      }
    ],
    checkedOn: "2026-10-15",
    detailsId: "exergy-solutions-details"
  },
  details: {
    id: "exergy-solutions-details",
    exampleSlug: "exergy-solutions",
    organizationId: "exergy-solutions",
    story: {
      diagramKind: "research",
      illustrationSlug: "exergy-solutions",
      subtitle: "A part can be made in more than one way.",
      caption: "A part can be made in more than one way.",
      steps: [
        {
          text: "Start with what a part needs to do, including dimensions, loads and the conditions it will face.",
          kind: "interpreted",
          sourceIds: [
            "expansion-source-15",
            "expansion-source-16",
            "expansion-source-17"
          ]
        },
        {
          text: "An additive process builds material up; machining removes material from a workpiece. Exergy offers both metal printing and CNC machining.",
          kind: "interpreted",
          sourceIds: [
            "expansion-source-15",
            "expansion-source-16",
            "expansion-source-17"
          ]
        },
        {
          text: "Compare access to features, material choice, surface finish and the work needed after the initial shape is made.",
          kind: "interpreted",
          sourceIds: [
            "expansion-source-15",
            "expansion-source-16",
            "expansion-source-17"
          ]
        },
        {
          text: "Measure and test the result against requirements. A complicated shape is not automatically a better or more reliable part.",
          kind: "interpreted",
          sourceIds: [
            "expansion-source-15",
            "expansion-source-16",
            "expansion-source-17"
          ]
        }
      ],
      diagramAlt: "Conceptual sequence: Define the part and its requirements. Compare adding material with removing material. Measure the finished dimensions. Check whether the part meets its intended load and use.",
      diagramProvenance: "Generated generic teaching illustration. Source-backed editorial simplification; not a company process specification. See design/example-expansion-2026-10-15/.",
      discussion: "When might a simple machined part be preferable to a complex printed one?"
    },
    roleIds: [
      "work-mechanical",
      "work-machining",
      "work-quality"
    ],
    pathwayIds: [
      "route-mechanical",
      "route-machinist",
      "route-instrument"
    ],
    jobIds: [],
    checkedOn: "2026-10-15"
  },
  organization: {
    id: "exergy-solutions",
    name: "Exergy Solutions",
    organizationType: "company",
    tagline: "A part can be made in more than one way.",
    description: {
      text: "Exergy Solutions combines engineering and manufacturing at its Nexus facility in Calgary. Its services include reverse engineering, metal 3D printing, CNC machining and prototyping. These capabilities offer a concrete way to discuss how design choices affect how a component is made.",
      kind: "stated",
      sourceIds: [
        "expansion-source-15",
        "expansion-source-16",
        "expansion-source-17"
      ]
    },
    problem: {
      text: "Which manufacturing method best meets a part’s requirements?",
      kind: "interpreted",
      sourceIds: [
        "expansion-source-15",
        "expansion-source-16",
        "expansion-source-17"
      ]
    },
    offering: {
      text: "Design, prototype and fabrication services, including additive manufacturing and machining.",
      kind: "stated",
      sourceIds: [
        "expansion-source-15",
        "expansion-source-16",
        "expansion-source-17"
      ]
    },
    beneficiaries: {
      text: "Organizations developing or maintaining industrial components and systems.",
      kind: "stated",
      sourceIds: [
        "expansion-source-15",
        "expansion-source-16",
        "expansion-source-17"
      ]
    },
    headquarters: {
      text: "Nexus manufacturing facility in Calgary; client projects may be used elsewhere.",
      kind: "stated",
      sourceIds: [
        "expansion-source-15",
        "expansion-source-16",
        "expansion-source-17"
      ]
    },
    localConnection: {
      text: "Nexus manufacturing facility in Calgary; client projects may be used elsewhere.",
      kind: "stated",
      sourceIds: [
        "expansion-source-15",
        "expansion-source-16",
        "expansion-source-17"
      ]
    },
    websiteSourceId: "expansion-source-15",
    checkedOn: "2026-10-15",
    careersSourceId: "expansion-source-17"
  },
  organizationRoles: [
    {
      organizationId: "exergy-solutions",
      roleId: "work-mechanical",
      establishes: "work-area",
      label: "Work area · Design engineering and reverse engineering are stated services.",
      kind: "interpreted",
      sourceIds: [
        "expansion-source-15",
        "expansion-source-16",
        "expansion-source-17"
      ],
      checkedOn: "2026-10-15"
    },
    {
      organizationId: "exergy-solutions",
      roleId: "work-machining",
      establishes: "work-area",
      label: "Work area · CNC machining is a stated in-house capability; exact job duties are explained generally.",
      kind: "interpreted",
      sourceIds: [
        "expansion-source-15",
        "expansion-source-16",
        "expansion-source-17"
      ],
      checkedOn: "2026-10-15"
    },
    {
      organizationId: "exergy-solutions",
      roleId: "work-quality",
      establishes: "work-area",
      label: "Work area · Testing is part of the stated integrated facility; this is a work-area interpretation.",
      kind: "interpreted",
      sourceIds: [
        "expansion-source-15",
        "expansion-source-16",
        "expansion-source-17"
      ],
      checkedOn: "2026-10-15"
    }
  ],
  jobs: [],
  sources: [
    {
      id: "expansion-source-15",
      label: "Manufacturing capabilities and Calgary facility",
      url: "https://exergysolutions.com/services/manufacturing/",
      checkedOn: "2026-10-15"
    },
    {
      id: "expansion-source-16",
      label: "Facility address",
      url: "https://exergysolutions.com/contact-us/",
      checkedOn: "2026-10-15"
    },
    {
      id: "expansion-source-17",
      label: "Careers check",
      url: "https://exergysolutions.com/careers",
      checkedOn: "2026-10-15"
    }
  ],
  diagram: {
    image: "/images/story-diagrams/exergy-solutions-graphic-novel.webp",
    heading: "Two routes to a tested part",
    steps: [
      "Define the part and its requirements.",
      "Compare adding material with removing material.",
      "Measure the finished dimensions.",
      "Check whether the part meets its intended load and use."
    ],
    note: "Printing and machining can also be combined. The bracket is a fictional teaching example, not an Exergy client part."
  },
  unitLinks: [
    {
      unitId: "p20b",
      why: "Compare the load a bracket must carry with the material and geometry used; printing is an engineering context rather than a required manufacturing topic."
    }
  ],
} satisfies ExampleRecord;
