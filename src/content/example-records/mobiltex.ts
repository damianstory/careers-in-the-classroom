import type { ExampleRecord } from "../types";

export default {
  "addedOn": "2026-10-18",
  "example": {
    "slug": "mobiltex",
    "org": "MOBILTEX",
    "discipline": "Chemistry",
    "question": "How can electrical measurements show whether buried steel is protected from corrosion?",
    "work": "MOBILTEX provides remote monitoring for cathodic-protection and other infrastructure systems. Its public materials describe electrical measurements, communications and tools for reviewing changing conditions. The company offers equipment training at its Calgary headquarters. This story connects corrosion chemistry to measurement and follow-up, rather than suggesting a sensor itself prevents rust.",
    "localShort": "Employer offers equipment training at its Calgary headquarters, with installation, commissioning and maintenance tasks.",
    "calgary": "Employer offers equipment training at its Calgary headquarters, with installation, commissioning and maintenance tasks.",
    "site": "Employer offers equipment training at its Calgary headquarters, with installation, commissioning and maintenance tasks.",
    "localSourceIds": [
      "page-oct18-source-54",
      "page-oct18-source-55",
      "page-oct18-source-56",
      "page-oct18-source-57",
      "page-oct18-source-58"
    ],
    "explain": "Give students a fictional record: stable values for four checks, a sudden change, then a missing value. Ask for three possible causes and one check for each. Use arbitrary units; do not provide real protection thresholds or imply that more-negative readings are always better.",
    "prompt": "If the dashboard shows a normal value, what questions should a technician still ask about the measurement?",
    "conversation": "If the dashboard shows a normal value, what questions should a technician still ask about the measurement?",
    "mindset": "Do not mix a sacrificial-anode illustration with an impressed-current circuit. The proposed overview avoids electrode wiring details; a later schematic must be reviewed for correct electron/current paths.",
    "courses": [
      {
        "course": "Chemistry 30",
        "topic": "Unit B — corrosion and cathodic protection"
      }
    ],
    "courseFitSourceIds": [
      "page-oct18-source-21"
    ],
    "roles": [
      {
        "title": "Instrumentation and control",
        "note": "Help a system turn physical conditions into dependable readings and actions.",
        "evidence": "Public company sources identify engineers, software/data disciplines and technical support. The profiles explain those work areas; a corrosion-specialist qualification is not inferred from a general diploma.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-54",
          "page-oct18-source-55",
          "page-oct18-source-56",
          "page-oct18-source-57",
          "page-oct18-source-58"
        ]
      },
      {
        "title": "Measurement software and data analysis",
        "note": "Turn streams of measurements into displays and comparisons people can use.",
        "evidence": "Public company sources identify engineers, software/data disciplines and technical support. The profiles explain those work areas; a corrosion-specialist qualification is not inferred from a general diploma.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-54",
          "page-oct18-source-55",
          "page-oct18-source-56",
          "page-oct18-source-57",
          "page-oct18-source-58"
        ]
      },
      {
        "title": "Technical application support",
        "note": "Help people use a technical product in the conditions of their own workplace.",
        "evidence": "Public company sources identify engineers, software/data disciplines and technical support. The profiles explain those work areas; a corrosion-specialist qualification is not inferred from a general diploma.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-54",
          "page-oct18-source-55",
          "page-oct18-source-56",
          "page-oct18-source-57",
          "page-oct18-source-58"
        ]
      }
    ],
    "rolesNote": "Source-backed work areas and related occupations, not a staff roster or a list of current vacancies. Company careers page provides general employment context; no sufficiently evidenced individual Calgary posting selected.",
    "pathways": [
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Instrumentation Engineering Technology",
        "note": "Measurement, calibration and process controls. Related to sensor/control work; no guaranteed employer placement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-13"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Chemical Laboratory Technology",
        "note": "Chemical analysis, samples and laboratory practice. A laboratory route; not a medical licence or automatic research-scientist qualification.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-19"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "MOBILTEX provides remote monitoring for cathodic-protection and other infrastructure systems. Its public materials describe electrical measurements, communications and tools for reviewing changing conditions. The company offers equipment training at its Calgary headquarters. This story connects corrosion chemistry to measurement and follow-up, rather than suggesting a sensor itself prevents rust.",
        "status": "Company-stated work with source limits preserved",
        "kind": "stated",
        "sourceIds": [
          "page-oct18-source-54",
          "page-oct18-source-55",
          "page-oct18-source-56",
          "page-oct18-source-57",
          "page-oct18-source-58"
        ]
      },
      {
        "type": "local connection",
        "claim": "Employer offers equipment training at its Calgary headquarters, with installation, commissioning and maintenance tasks.",
        "status": "Source-backed Calgary connection",
        "kind": "stated",
        "sourceIds": [
          "page-oct18-source-54",
          "page-oct18-source-55",
          "page-oct18-source-56",
          "page-oct18-source-57",
          "page-oct18-source-58"
        ]
      },
      {
        "type": "course fit",
        "claim": "30–B1.4k includes corrosion; 30–B1.1sts explicitly addresses coatings and cathodic protection. Remote measurement adds an applied evidence/technology layer.",
        "status": "Editorial application of source-checked curriculum concepts",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-21"
        ]
      },
      {
        "type": "limits",
        "claim": "Monitoring is not protection itself. A general instrumentation route does not replace specialized corrosion training or workplace procedures; no electrical thresholds are supplied.",
        "status": "Scope of this example",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-54",
          "page-oct18-source-55",
          "page-oct18-source-56",
          "page-oct18-source-57",
          "page-oct18-source-58"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-oct18-source-54",
        "label": "mobiltex.com — official website",
        "url": "https://www.mobiltex.com/"
      },
      {
        "id": "page-oct18-source-55",
        "label": "mobiltex.com — product training",
        "url": "https://www.mobiltex.com/support/product-training/"
      },
      {
        "id": "page-oct18-source-56",
        "label": "mobiltex.com — what is cathodic protection cp monitoring",
        "url": "https://www.mobiltex.com/what-is-cathodic-protection-cp-monitoring/"
      },
      {
        "id": "page-oct18-source-57",
        "label": "mobiltex.com — industry driven innovation",
        "url": "https://www.mobiltex.com/trust/industry-driven-innovation/"
      },
      {
        "id": "page-oct18-source-58",
        "label": "mobiltex.com — careers",
        "url": "https://www.mobiltex.com/company/careers/"
      },
      {
        "id": "page-oct18-source-13",
        "label": "SAIT — Instrumentation Engineering Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/instrumentation-engineering-technology"
      },
      {
        "id": "page-oct18-source-19",
        "label": "SAIT — Chemical Laboratory Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/chemical-laboratory-technology"
      },
      {
        "id": "page-oct18-source-21",
        "label": "education.alberta.ca — chem2030_07.pdf",
        "url": "https://education.alberta.ca/media/159730/chem2030_07.pdf"
      }
    ],
    "checkedOn": "2026-10-18",
    "detailsId": "mobiltex-details"
  },
  "details": {
    "id": "mobiltex-details",
    "exampleSlug": "mobiltex",
    "organizationId": "mobiltex",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "mobiltex",
      "subtitle": "Protecting buried metal and knowing that the protection is working are two different jobs.",
      "caption": "Protecting buried metal and knowing that the protection is working are two different jobs.",
      "steps": [
        {
          "text": "Corrosion involves oxidation and reduction. Conditions around a buried metal structure affect what can happen at its surface.",
          "kind": "interpreted",
          "sourceIds": [
            "oct18-source-54",
            "oct18-source-55",
            "oct18-source-56",
            "oct18-source-57",
            "oct18-source-58",
            "oct18-source-21"
          ]
        },
        {
          "text": "Cathodic protection changes the electrochemical conditions to help limit oxidation of the protected metal. A protection system is distinct from its monitoring equipment.",
          "kind": "interpreted",
          "sourceIds": [
            "oct18-source-54",
            "oct18-source-55",
            "oct18-source-56",
            "oct18-source-57",
            "oct18-source-58",
            "oct18-source-21"
          ]
        },
        {
          "text": "Monitoring records electrical quantities and sends measurements for review. A meaningful measurement needs a defined setup and reference.",
          "kind": "interpreted",
          "sourceIds": [
            "oct18-source-54",
            "oct18-source-55",
            "oct18-source-56",
            "oct18-source-57",
            "oct18-source-58",
            "oct18-source-21"
          ]
        },
        {
          "text": "An unusual reading can prompt checks of the protection system, instrument or environment. A single value does not prove that the whole asset is safe.",
          "kind": "interpreted",
          "sourceIds": [
            "oct18-source-54",
            "oct18-source-55",
            "oct18-source-56",
            "oct18-source-57",
            "oct18-source-58",
            "oct18-source-21"
          ]
        }
      ],
      "diagramAlt": "A separate monitor records a protection system's measurements and sends them for review.",
      "diagramProvenance": "Generated fictional teaching illustration; source-grounded editorial simplification. Prompts and visual review: design/example-expansion-2026-10-18/.",
      "discussion": "If the dashboard shows a normal value, what questions should a technician still ask about the measurement?"
    },
    "roleIds": [
      "work-controls",
      "work-software",
      "work-technical-support"
    ],
    "pathwayIds": [
      "oct18-route-instrument",
      "oct18-route-chemical"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-18"
  },
  "organization": {
    "id": "mobiltex",
    "name": "MOBILTEX",
    "organizationType": "company",
    "tagline": "Protecting buried metal and knowing that the protection is working are two different jobs.",
    "description": {
      "text": "MOBILTEX provides remote monitoring for cathodic-protection and other infrastructure systems. Its public materials describe electrical measurements, communications and tools for reviewing changing conditions. The company offers equipment training at its Calgary headquarters. This story connects corrosion chemistry to measurement and follow-up, rather than suggesting a sensor itself prevents rust.",
      "kind": "stated",
      "sourceIds": [
        "oct18-source-54",
        "oct18-source-55",
        "oct18-source-56",
        "oct18-source-57",
        "oct18-source-58"
      ]
    },
    "problem": {
      "text": "How can electrical measurements show whether buried steel is protected from corrosion?",
      "kind": "interpreted",
      "sourceIds": [
        "oct18-source-54",
        "oct18-source-55",
        "oct18-source-56",
        "oct18-source-57",
        "oct18-source-58"
      ]
    },
    "offering": {
      "text": "Remotely monitor cathodic-protection systems for metal infrastructure.",
      "kind": "stated",
      "sourceIds": [
        "oct18-source-54",
        "oct18-source-55",
        "oct18-source-56",
        "oct18-source-57",
        "oct18-source-58"
      ]
    },
    "beneficiaries": {
      "text": "People responsible for maintaining metal infrastructure such as pipelines and water-system assets.",
      "kind": "interpreted",
      "sourceIds": [
        "oct18-source-54",
        "oct18-source-55",
        "oct18-source-56",
        "oct18-source-57",
        "oct18-source-58"
      ]
    },
    "headquarters": {
      "text": "Headquarters not separately verified for this example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "Employer offers equipment training at its Calgary headquarters, with installation, commissioning and maintenance tasks.",
      "kind": "stated",
      "sourceIds": [
        "oct18-source-54",
        "oct18-source-55",
        "oct18-source-56",
        "oct18-source-57",
        "oct18-source-58"
      ]
    },
    "websiteSourceId": "oct18-source-54",
    "checkedOn": "2026-10-18",
    "careersSourceId": "oct18-source-58"
  },
  "organizationRoles": [
    {
      "organizationId": "mobiltex",
      "roleId": "work-controls",
      "establishes": "related-work",
      "label": "Public company sources identify engineers, software/data disciplines and technical support. The profiles explain those work areas; a corrosion-specialist qualification is not inferred from a general diploma.",
      "kind": "interpreted",
      "sourceIds": [
        "oct18-source-54",
        "oct18-source-55",
        "oct18-source-56",
        "oct18-source-57",
        "oct18-source-58"
      ],
      "checkedOn": "2026-10-18"
    },
    {
      "organizationId": "mobiltex",
      "roleId": "work-software",
      "establishes": "related-work",
      "label": "Public company sources identify engineers, software/data disciplines and technical support. The profiles explain those work areas; a corrosion-specialist qualification is not inferred from a general diploma.",
      "kind": "interpreted",
      "sourceIds": [
        "oct18-source-54",
        "oct18-source-55",
        "oct18-source-56",
        "oct18-source-57",
        "oct18-source-58"
      ],
      "checkedOn": "2026-10-18"
    },
    {
      "organizationId": "mobiltex",
      "roleId": "work-technical-support",
      "establishes": "related-work",
      "label": "Public company sources identify engineers, software/data disciplines and technical support. The profiles explain those work areas; a corrosion-specialist qualification is not inferred from a general diploma.",
      "kind": "interpreted",
      "sourceIds": [
        "oct18-source-54",
        "oct18-source-55",
        "oct18-source-56",
        "oct18-source-57",
        "oct18-source-58"
      ],
      "checkedOn": "2026-10-18"
    }
  ],
  "jobs": [],
  "sources": [],
  "diagram": {
    "image": "/images/story-diagrams/mobiltex-graphic-novel.webp",
    "heading": "Protecting buried metal and knowing that the protection is working are two different jobs.",
    "steps": [
      "Corrosion involves oxidation and reduction. Conditions around a buried metal structure affect what can happen at its surface.",
      "Cathodic protection changes the electrochemical conditions to help limit oxidation of the protected metal. A protection system is distinct from its monitoring equipment.",
      "Monitoring records electrical quantities and sends measurements for review. A meaningful measurement needs a defined setup and reference.",
      "An unusual reading can prompt checks of the protection system, instrument or environment. A single value does not prove that the whole asset is safe."
    ],
    "note": "Do not mix a sacrificial-anode illustration with an impressed-current circuit. The proposed overview avoids electrode wiring details; a later schematic must be reviewed for correct electron/current paths."
  },
  "unitLinks": [
    {
      "unitId": "c30b",
      "why": "30–B1.4k includes corrosion; 30–B1.1sts explicitly addresses coatings and cathodic protection. Remote measurement adds an applied evidence/technology layer."
    }
  ]
} satisfies ExampleRecord;
