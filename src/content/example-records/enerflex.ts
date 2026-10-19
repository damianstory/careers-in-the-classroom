import type { ExampleRecord } from "../types";

export default {
  "addedOn": "2026-10-19",
  "example": {
    "slug": "enerflex",
    "org": "Enerflex",
    "discipline": "Chemistry",
    "question": "Why does compressing a gas create more than a pressure problem?",
    "work": "Enerflex supplies energy-infrastructure equipment and services, including gas compression. Its current locations page explicitly identifies Calgary manufacturing separately from corporate and water-treatment offices. Its career information distinguishes engineering, manufacturing and field-service work.",
    "localShort": "Current employer location page names Calgary manufacturing at 4700 47 Street SE.",
    "calgary": "Current employer location page names Calgary manufacturing at 4700 47 Street SE.",
    "site": "2716 Sunridge Way NE is labelled water treatment; it is not the manufacturing address. Global career stories are not proof of a named worker’s Calgary job.",
    "localSourceIds": [
      "page-oct19-source-45",
      "page-oct19-source-46",
      "page-oct19-source-47",
      "page-oct19-source-48",
      "page-expansion-source-18",
      "page-expansion-source-48"
    ],
    "explain": "For an explicitly constant-temperature model, compare a gas at 1 volume unit and 100 pressure units with half that volume. Predict the pressure ratio, then explain why a real rapidly operating compressor may depart from the model.",
    "prompt": "Why is a pressure target not enough information to design a compression system?",
    "conversation": "Why is a pressure target not enough information to design a compression system?",
    "mindset": "The idealised isothermal result is not a specification or description of a real Enerflex compressor. Compression work, temperature change and heat removal must not be conflated.",
    "courses": [
      {
        "course": "Chemistry 20",
        "topic": "B — Forms of Matter: Gases"
      }
    ],
    "courseFitSourceIds": [
      "page-expansion-source-5"
    ],
    "roles": [
      {
        "title": "Mechanical design and prototyping",
        "note": "Translate a need into a component or machine that can be built and tested. Designers use dimensions, material properties and constraints to evaluate alternatives.",
        "evidence": "Employer describes engineering, manufacturing and service career areas. Roles are company-level work areas; a Calgary facility does not place every illustrated task there.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct19-source-45",
          "page-oct19-source-46",
          "page-oct19-source-47",
          "page-oct19-source-48",
          "page-expansion-source-18",
          "page-expansion-source-48"
        ]
      },
      {
        "title": "Industrial machinery assembly and maintenance",
        "note": "Make machinery work together as a physical system. Millwright work connects assembly, alignment, inspection and troubleshooting.",
        "evidence": "Employer describes engineering, manufacturing and service career areas. Roles are company-level work areas; a Calgary facility does not place every illustrated task there.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct19-source-45",
          "page-oct19-source-46",
          "page-oct19-source-47",
          "page-oct19-source-48",
          "page-expansion-source-18",
          "page-expansion-source-48"
        ]
      }
    ],
    "rolesNote": "Work areas and related occupations, not a staff roster or a list of current vacancies. No verified individual posting was selected. Employer services/work-area evidence is not a live vacancy.",
    "pathways": [
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Mechanical Engineering Technology",
        "note": "Design, modelling and mechanical-system analysis. A technical route; does not itself confer professional engineer registration. Check current admissions and intake before applying; this draft does not promise entry or employment.",
        "kind": "interpreted",
        "sourceIds": [
          "page-expansion-source-18"
        ]
      },
      {
        "kindLabel": "Apprenticeship",
        "label": "SAIT — Industrial Mechanic (Millwright)",
        "note": "Learn to install, maintain and repair industrial machinery. Requires apprenticeship registration and workplace training. This is distinct from an engineering degree.",
        "kind": "interpreted",
        "sourceIds": [
          "page-expansion-source-48"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "Enerflex supplies energy-infrastructure equipment and services, including gas compression. Its current locations page explicitly identifies Calgary manufacturing separately from corporate and water-treatment offices. Its career information distinguishes engineering, manufacturing and field-service work.",
        "status": "Source-backed employer work with local and historical limits retained",
        "kind": "stated",
        "sourceIds": [
          "page-oct19-source-45",
          "page-oct19-source-46",
          "page-oct19-source-47",
          "page-oct19-source-48",
          "page-expansion-source-18",
          "page-expansion-source-48"
        ]
      },
      {
        "type": "local connection",
        "claim": "Current employer location page names Calgary manufacturing at 4700 47 Street SE.",
        "status": "Documented Calgary work; regional operations are distinguished",
        "kind": "stated",
        "sourceIds": [
          "page-oct19-source-45",
          "page-oct19-source-46",
          "page-oct19-source-47",
          "page-oct19-source-48",
          "page-expansion-source-18",
          "page-expansion-source-48"
        ]
      },
      {
        "type": "course fit",
        "claim": "Pressure, volume, temperature and gas models are direct content. Compressor equipment and non-isothermal behaviour extend that content; no product performance is claimed.",
        "status": "source-checked editorial fit; application extensions explicit",
        "kind": "interpreted",
        "sourceIds": [
          "page-expansion-source-5"
        ]
      },
      {
        "type": "limits",
        "claim": "No throughput, efficiency, plant headcount or specific Calgary product line is invented. Diploma, engineering degree and trade roles remain distinct routes. 2716 Sunridge Way NE is labelled water treatment; it is not the manufacturing address. Global career stories are not proof of a named worker’s Calgary job.",
        "status": "Scope of the classroom example",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct19-source-45",
          "page-oct19-source-46",
          "page-oct19-source-47",
          "page-oct19-source-48",
          "page-expansion-source-18",
          "page-expansion-source-48"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-oct19-source-45",
        "label": "enerflex.com — contact us",
        "url": "https://www.enerflex.com/contact-us/"
      },
      {
        "id": "page-oct19-source-46",
        "label": "enerflex.com — company",
        "url": "https://www.enerflex.com/company/"
      },
      {
        "id": "page-oct19-source-47",
        "label": "enerflex.com — careers",
        "url": "https://www.enerflex.com/careers/"
      },
      {
        "id": "page-oct19-source-48",
        "label": "enerflex.com — compression",
        "url": "https://www.enerflex.com/equipment/compression/"
      },
      {
        "id": "page-expansion-source-18",
        "label": "SAIT — Mechanical Engineering Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/mechanical-engineering-technology"
      },
      {
        "id": "page-expansion-source-48",
        "label": "SAIT — Industrial Mechanic (Millwright)",
        "url": "https://www.sait.ca/apprenticeships-and-trades/programs/industrial-mechanic-millwright"
      },
      {
        "id": "page-expansion-source-5",
        "label": "Alberta Chemistry 20–30 program of studies (updated 2014)",
        "url": "https://education.alberta.ca/media/159730/chem2030_07.pdf"
      }
    ],
    "checkedOn": "2026-10-19",
    "detailsId": "enerflex-details"
  },
  "details": {
    "id": "enerflex-details",
    "exampleSlug": "enerflex",
    "organizationId": "enerflex",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "enerflex",
      "subtitle": "Pressure, temperature and equipment have to be considered together.",
      "caption": "Pressure, temperature and equipment have to be considered together.",
      "steps": [
        {
          "text": "Define the required gas-flow and pressure change for a system.",
          "kind": "interpreted",
          "sourceIds": [
            "oct19-source-45",
            "oct19-source-46",
            "oct19-source-47",
            "oct19-source-48",
            "expansion-source-18",
            "expansion-source-48"
          ]
        },
        {
          "text": "A compressor does work on the gas; the temperature may also change, depending on the process and heat transfer.",
          "kind": "interpreted",
          "sourceIds": [
            "oct19-source-45",
            "oct19-source-46",
            "oct19-source-47",
            "oct19-source-48",
            "expansion-source-18",
            "expansion-source-48"
          ]
        },
        {
          "text": "Designers coordinate the compressor with cooling, controls and other equipment.",
          "kind": "interpreted",
          "sourceIds": [
            "oct19-source-45",
            "oct19-source-46",
            "oct19-source-47",
            "oct19-source-48",
            "expansion-source-18",
            "expansion-source-48"
          ]
        },
        {
          "text": "Assembly and service teams check the physical system and maintain it through its working life.",
          "kind": "interpreted",
          "sourceIds": [
            "oct19-source-45",
            "oct19-source-46",
            "oct19-source-47",
            "oct19-source-48",
            "expansion-source-18",
            "expansion-source-48"
          ]
        }
      ],
      "diagramAlt": "Work input changes a gas state while heat transfer may affect its temperature.",
      "diagramProvenance": "Generated fictional teaching illustration; editorial simplification of the cited work. Exact prompts, original images and visual checks: design/example-expansion-2026-10-19/.",
      "discussion": "Why is a pressure target not enough information to design a compression system?"
    },
    "roleIds": [
      "work-mechanical",
      "work-millwright"
    ],
    "pathwayIds": [
      "oct18-route-mechanical",
      "route-millwright"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-19"
  },
  "organization": {
    "id": "enerflex",
    "name": "Enerflex",
    "organizationType": "company",
    "tagline": "Pressure, temperature and equipment have to be considered together.",
    "description": {
      "text": "Enerflex supplies energy-infrastructure equipment and services, including gas compression. Its current locations page explicitly identifies Calgary manufacturing separately from corporate and water-treatment offices. Its career information distinguishes engineering, manufacturing and field-service work.",
      "kind": "stated",
      "sourceIds": [
        "oct19-source-45",
        "oct19-source-46",
        "oct19-source-47",
        "oct19-source-48",
        "expansion-source-18",
        "expansion-source-48"
      ]
    },
    "problem": {
      "text": "Why does compressing a gas create more than a pressure problem?",
      "kind": "interpreted",
      "sourceIds": [
        "oct19-source-45",
        "oct19-source-46",
        "oct19-source-47",
        "oct19-source-48",
        "expansion-source-18",
        "expansion-source-48"
      ]
    },
    "offering": {
      "text": "Compression equipment and associated engineering, manufacturing and services.",
      "kind": "stated",
      "sourceIds": [
        "oct19-source-45",
        "oct19-source-46",
        "oct19-source-47",
        "oct19-source-48",
        "expansion-source-18",
        "expansion-source-48"
      ]
    },
    "beneficiaries": {
      "text": "Customers who need gas-handling and other energy-infrastructure systems.",
      "kind": "interpreted",
      "sourceIds": [
        "oct19-source-45",
        "oct19-source-46",
        "oct19-source-47",
        "oct19-source-48",
        "expansion-source-18",
        "expansion-source-48"
      ]
    },
    "headquarters": {
      "text": "Headquarters not separately verified for this example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "Current employer location page names Calgary manufacturing at 4700 47 Street SE.",
      "kind": "stated",
      "sourceIds": [
        "oct19-source-45",
        "oct19-source-46",
        "oct19-source-47",
        "oct19-source-48",
        "expansion-source-18",
        "expansion-source-48"
      ]
    },
    "websiteSourceId": "oct19-source-45",
    "checkedOn": "2026-10-19",
    "careersSourceId": "oct19-source-47"
  },
  "organizationRoles": [
    {
      "organizationId": "enerflex",
      "roleId": "work-mechanical",
      "establishes": "related-work",
      "label": "Employer describes engineering, manufacturing and service career areas. Roles are company-level work areas; a Calgary facility does not place every illustrated task there.",
      "location": "Current employer location page names Calgary manufacturing at 4700 47 Street SE.",
      "kind": "interpreted",
      "sourceIds": [
        "oct19-source-45",
        "oct19-source-46",
        "oct19-source-47",
        "oct19-source-48",
        "expansion-source-18",
        "expansion-source-48"
      ],
      "checkedOn": "2026-10-19"
    },
    {
      "organizationId": "enerflex",
      "roleId": "work-millwright",
      "establishes": "related-work",
      "label": "Employer describes engineering, manufacturing and service career areas. Roles are company-level work areas; a Calgary facility does not place every illustrated task there.",
      "location": "Current employer location page names Calgary manufacturing at 4700 47 Street SE.",
      "kind": "interpreted",
      "sourceIds": [
        "oct19-source-45",
        "oct19-source-46",
        "oct19-source-47",
        "oct19-source-48",
        "expansion-source-18",
        "expansion-source-48"
      ],
      "checkedOn": "2026-10-19"
    }
  ],
  "jobs": [],
  "sources": [],
  "diagram": {
    "image": "/images/story-diagrams/enerflex-graphic-novel.webp",
    "heading": "Pressure, temperature and equipment have to be considered together.",
    "steps": [
      "Define the required gas-flow and pressure change for a system.",
      "A compressor does work on the gas; the temperature may also change, depending on the process and heat transfer.",
      "Designers coordinate the compressor with cooling, controls and other equipment.",
      "Assembly and service teams check the physical system and maintain it through its working life."
    ],
    "note": "The idealised isothermal result is not a specification or description of a real Enerflex compressor. Compression work, temperature change and heat removal must not be conflated. 2716 Sunridge Way NE is labelled water treatment; it is not the manufacturing address. Global career stories are not proof of a named worker’s Calgary job."
  },
  "unitLinks": [
    {
      "unitId": "c20b",
      "why": "Pressure, volume, temperature and gas models are direct content. Compressor equipment and non-isothermal behaviour extend that content; no product performance is claimed."
    }
  ]
} satisfies ExampleRecord;
