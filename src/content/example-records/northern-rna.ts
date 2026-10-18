import type { ExampleRecord } from "../types";

export default {
  addedOn: "2026-10-15",
  example: {
    slug: "northern-rna",
    org: "Northern RNA",
    discipline: "Biology",
    question: "How do you make biological material consistently from batch to batch?",
    work: "Northern RNA offers nucleic-acid manufacturing and development services, including DNA and mRNA production, purification and analytical testing. Its website identifies a Calgary address and describes manufacturing and quality teams. The story here is about reproducible biological materials, not whether a treatment works in patients.",
    localShort: "Calgary address and biomanufacturing business; the sources do not allocate every service or partner activity to a specific Calgary room or facility.",
    calgary: "Calgary address and biomanufacturing business; the sources do not allocate every service or partner activity to a specific Calgary room or facility.",
    site: "Calgary address and biomanufacturing business; the sources do not allocate every service or partner activity to a specific Calgary room or facility.",
    localSourceIds: [
      "page-northern-rna-expansion-source-33",
      "page-northern-rna-expansion-source-34",
      "page-northern-rna-expansion-source-35",
      "page-northern-rna-expansion-source-36"
    ],
    explain: "Use fictional batch records with different purity measurements and missing process notes. Ask which records would allow a meaningful comparison and what information is missing.",
    prompt: "If two batches have the same amount of material, what other properties might you need to compare?",
    conversation: "If two batches have the same amount of material, what other properties might you need to compare?",
    mindset: "The records are invented. Students should distinguish amount, identity, purity and traceability without treating them as clinical results.",
    courses: [
      {
        course: "Biology 30",
        topic: "Molecular biology and controlled comparisons"
      }
    ],
    courseFitSourceIds: [
      "page-northern-rna-expansion-source-37"
    ],
    roles: [
      {
        title: "Bioprocess development",
        note: "Develop repeatable ways to make and purify biological materials. This work connects molecular science to manufacturing conditions and checks whether a change improves the process.",
        evidence: "Company development and manufacturing pages describe process optimization and nucleic-acid production.",
        kind: "interpreted",
        sourceIds: [
          "page-northern-rna-expansion-source-33",
          "page-northern-rna-expansion-source-34",
          "page-northern-rna-expansion-source-35",
          "page-northern-rna-expansion-source-36"
        ]
      },
      {
        title: "Laboratory analysis",
        note: "Make measurements that other people can trust. A laboratory worker prepares samples, uses a method consistently and records enough detail for someone else to interpret the result.",
        evidence: "Analytical testing is a stated service.",
        kind: "interpreted",
        sourceIds: [
          "page-northern-rna-expansion-source-33",
          "page-northern-rna-expansion-source-34",
          "page-northern-rna-expansion-source-35",
          "page-northern-rna-expansion-source-36"
        ]
      },
      {
        title: "Quality and traceability",
        note: "Make it possible to explain how a result or product was produced. Quality work checks records, methods and acceptance criteria so variation can be investigated rather than hidden.",
        evidence: "The company explicitly identifies quality assurance working with manufacturing and lot traceability.",
        kind: "interpreted",
        sourceIds: [
          "page-northern-rna-expansion-source-33",
          "page-northern-rna-expansion-source-34",
          "page-northern-rna-expansion-source-35",
          "page-northern-rna-expansion-source-36"
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
          "page-northern-rna-expansion-source-6"
        ]
      },
      {
        kindLabel: "Bachelor’s degree",
        label: "University of Calgary — Biochemistry",
        note: "Study the chemistry of living organisms and changes within cells. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        kind: "interpreted",
        sourceIds: [
          "page-northern-rna-expansion-source-7"
        ]
      },
      {
        kindLabel: "Bachelor’s degree",
        label: "University of Calgary — Chemical Engineering",
        note: "Study how to transform raw materials and design production processes. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        kind: "interpreted",
        sourceIds: [
          "page-northern-rna-expansion-source-8"
        ]
      }
    ],
    ledger: [
      {
        type: "work",
        claim: "Northern RNA offers nucleic-acid manufacturing and development services, including DNA and mRNA production, purification and analytical testing. Its website identifies a Calgary address and describes manufacturing and quality teams. The story here is about reproducible biological materials, not whether a treatment works in patients.",
        status: "Organization-stated",
        kind: "stated",
        sourceIds: [
          "page-northern-rna-expansion-source-33",
          "page-northern-rna-expansion-source-34",
          "page-northern-rna-expansion-source-35",
          "page-northern-rna-expansion-source-36"
        ]
      },
      {
        type: "local connection",
        claim: "Calgary address and biomanufacturing business; the sources do not allocate every service or partner activity to a specific Calgary room or facility.",
        status: "Organization-stated",
        kind: "stated",
        sourceIds: [
          "page-northern-rna-expansion-source-33",
          "page-northern-rna-expansion-source-34",
          "page-northern-rna-expansion-source-35",
          "page-northern-rna-expansion-source-36"
        ]
      },
      {
        type: "course fit",
        claim: "Connect nucleic acids to biological production, then compare batch evidence. Industrial quality systems are an application, not a required molecular-biology outcome.",
        status: "Editorial connection to verified course topics",
        kind: "interpreted",
        sourceIds: [
          "page-northern-rna-expansion-source-37"
        ]
      },
      {
        type: "limits",
        claim: "Do not label all production GMP-certified based on marketing descriptions of available grades. No efficacy, safety or patient-benefit claim is proposed. Local allocation of individual services remains unspecified in the copy.",
        status: "Scope of this example",
        kind: "interpreted",
        sourceIds: [
          "page-northern-rna-expansion-source-33",
          "page-northern-rna-expansion-source-34",
          "page-northern-rna-expansion-source-35",
          "page-northern-rna-expansion-source-36"
        ]
      }
    ],
    sources: [
      {
        id: "page-northern-rna-expansion-source-6",
        label: "SAIT — Chemical Laboratory Technology",
        url: "https://www.sait.ca/programs-and-courses/diplomas/chemical-laboratory-technology"
      },
      {
        id: "page-northern-rna-expansion-source-7",
        label: "University of Calgary — Biochemistry",
        url: "https://science.ucalgary.ca/future-students/undergraduate/programs"
      },
      {
        id: "page-northern-rna-expansion-source-8",
        label: "University of Calgary — Chemical Engineering",
        url: "https://schulich.ucalgary.ca/future-students/undergraduate/programs/bsc-chemical-engineering"
      },
      {
        id: "page-northern-rna-expansion-source-33",
        label: "Biomanufacturing and quality work",
        url: "https://northernrna.com/biomanufacturing/"
      },
      {
        id: "page-northern-rna-expansion-source-34",
        label: "Development services",
        url: "https://northernrna.com/development-services/"
      },
      {
        id: "page-northern-rna-expansion-source-35",
        label: "Calgary and service context",
        url: "https://northernrna.com/"
      },
      {
        id: "page-northern-rna-expansion-source-36",
        label: "Work areas in recent hiring",
        url: "https://northernrna.com/careers/"
      },
      {
        id: "page-northern-rna-expansion-source-37",
        label: "Calgary Board of Education: Biology 20/30 course topics",
        url: "https://eps.cbe.ab.ca/biology-20-30.aspx"
      }
    ],
    checkedOn: "2026-10-15",
    detailsId: "northern-rna-details"
  },
  details: {
    id: "northern-rna-details",
    exampleSlug: "northern-rna",
    organizationId: "northern-rna",
    story: {
      diagramKind: "research",
      illustrationSlug: "northern-rna",
      subtitle: "Knowing what to make is different from making it consistently.",
      caption: "Knowing what to make is different from making it consistently.",
      steps: [
        {
          text: "A project begins with a defined biological material and requirements for its intended use.",
          kind: "interpreted",
          sourceIds: [
            "expansion-source-33",
            "expansion-source-34",
            "expansion-source-35",
            "expansion-source-36"
          ]
        },
        {
          text: "Northern RNA describes synthesis or production, purification and analytical testing as connected services.",
          kind: "interpreted",
          sourceIds: [
            "expansion-source-33",
            "expansion-source-34",
            "expansion-source-35",
            "expansion-source-36"
          ]
        },
        {
          text: "Testing and records allow a team to compare batches and investigate differences. Traceability connects a result to how the material was made.",
          kind: "interpreted",
          sourceIds: [
            "expansion-source-33",
            "expansion-source-34",
            "expansion-source-35",
            "expansion-source-36"
          ]
        },
        {
          text: "A batch meeting manufacturing requirements does not establish that a medicine is effective. Product quality and clinical outcomes answer different questions.",
          kind: "interpreted",
          sourceIds: [
            "expansion-source-33",
            "expansion-source-34",
            "expansion-source-35",
            "expansion-source-36"
          ]
        }
      ],
      diagramAlt: "Conceptual sequence: Define the material and starting conditions. Produce a batch under recorded conditions. Separate and purify the material. Check identity, quality and consistency against the requirements.",
      diagramProvenance: "Generated generic teaching illustration. Source-backed editorial simplification; not a company process specification. See design/example-expansion-2026-10-15/.",
      discussion: "If two batches have the same amount of material, what other properties might you need to compare?"
    },
    roleIds: [
      "work-bioprocess",
      "work-lab",
      "work-quality"
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
    id: "northern-rna",
    name: "Northern RNA",
    organizationType: "company",
    tagline: "Knowing what to make is different from making it consistently.",
    description: {
      text: "Northern RNA offers nucleic-acid manufacturing and development services, including DNA and mRNA production, purification and analytical testing. Its website identifies a Calgary address and describes manufacturing and quality teams. The story here is about reproducible biological materials, not whether a treatment works in patients.",
      kind: "stated",
      sourceIds: [
        "expansion-source-33",
        "expansion-source-34",
        "expansion-source-35",
        "expansion-source-36"
      ]
    },
    problem: {
      text: "How do you know two batches meet the same intended requirements?",
      kind: "interpreted",
      sourceIds: [
        "expansion-source-33",
        "expansion-source-34",
        "expansion-source-35",
        "expansion-source-36"
      ]
    },
    offering: {
      text: "Nucleic-acid development, production, purification and testing services for customers.",
      kind: "stated",
      sourceIds: [
        "expansion-source-33",
        "expansion-source-34",
        "expansion-source-35",
        "expansion-source-36"
      ]
    },
    beneficiaries: {
      text: "Research and development organizations needing characterized biological materials.",
      kind: "stated",
      sourceIds: [
        "expansion-source-33",
        "expansion-source-34",
        "expansion-source-35",
        "expansion-source-36"
      ]
    },
    headquarters: {
      text: "Calgary address and biomanufacturing business; the sources do not allocate every service or partner activity to a specific Calgary room or facility.",
      kind: "stated",
      sourceIds: [
        "expansion-source-33",
        "expansion-source-34",
        "expansion-source-35",
        "expansion-source-36"
      ]
    },
    localConnection: {
      text: "Calgary address and biomanufacturing business; the sources do not allocate every service or partner activity to a specific Calgary room or facility.",
      kind: "stated",
      sourceIds: [
        "expansion-source-33",
        "expansion-source-34",
        "expansion-source-35",
        "expansion-source-36"
      ]
    },
    websiteSourceId: "expansion-source-33",
    checkedOn: "2026-10-15"
  },
  organizationRoles: [
    {
      organizationId: "northern-rna",
      roleId: "work-bioprocess",
      establishes: "work-area",
      label: "Work area · Company development and manufacturing pages describe process optimization and nucleic-acid production.",
      kind: "interpreted",
      sourceIds: [
        "expansion-source-33",
        "expansion-source-34",
        "expansion-source-35",
        "expansion-source-36"
      ],
      checkedOn: "2026-10-15"
    },
    {
      organizationId: "northern-rna",
      roleId: "work-lab",
      establishes: "work-area",
      label: "Work area · Analytical testing is a stated service.",
      kind: "interpreted",
      sourceIds: [
        "expansion-source-33",
        "expansion-source-34",
        "expansion-source-35",
        "expansion-source-36"
      ],
      checkedOn: "2026-10-15"
    },
    {
      organizationId: "northern-rna",
      roleId: "work-quality",
      establishes: "work-area",
      label: "Work area · The company explicitly identifies quality assurance working with manufacturing and lot traceability.",
      kind: "interpreted",
      sourceIds: [
        "expansion-source-33",
        "expansion-source-34",
        "expansion-source-35",
        "expansion-source-36"
      ],
      checkedOn: "2026-10-15"
    }
  ],
  jobs: [],
  sources: [
    {
      id: "expansion-source-33",
      label: "Biomanufacturing and quality work",
      url: "https://northernrna.com/biomanufacturing/",
      checkedOn: "2026-10-15"
    },
    {
      id: "expansion-source-34",
      label: "Development services",
      url: "https://northernrna.com/development-services/",
      checkedOn: "2026-10-15"
    },
    {
      id: "expansion-source-35",
      label: "Calgary and service context",
      url: "https://northernrna.com/",
      checkedOn: "2026-10-15"
    },
    {
      id: "expansion-source-36",
      label: "Work areas in recent hiring",
      url: "https://northernrna.com/careers/",
      checkedOn: "2026-10-15"
    }
  ],
  diagram: {
    image: "/images/story-diagrams/northern-rna-graphic-novel.webp",
    heading: "A batch needs a traceable history",
    steps: [
      "Define the material and starting conditions.",
      "Produce a batch under recorded conditions.",
      "Separate and purify the material.",
      "Check identity, quality and consistency against the requirements."
    ],
    note: "This generic sequence does not assert that every Northern RNA service occurs at one Calgary facility."
  },
  unitLinks: [
    {
      unitId: "b30c",
      why: "Connect nucleic acids to biological production, then compare batch evidence. Industrial quality systems are an application, not a required molecular-biology outcome."
    }
  ],
} satisfies ExampleRecord;
