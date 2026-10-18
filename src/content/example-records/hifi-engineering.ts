import type { ExampleRecord } from "../types";

export default {
  "addedOn": "2026-10-18",
  "example": {
    "slug": "hifi-engineering",
    "org": "Hifi Engineering",
    "discipline": "Physics",
    "question": "How can a long fibre help locate a disturbance along a pipeline?",
    "work": "Hifi Engineering is a Calgary-based fibre-optic sensing company. Its sources describe a platform combining sensing cable, measurements and analysis to monitor infrastructure. A 2026 service announcement concerns tracking tools moving inside pipelines. The classroom connection is how a measured signal can help locate a disturbance; installation sites are not assumed to be in Calgary.",
    "localShort": "Company team page describes Calgary origins and engineering disciplines; current product release identifies Calgary headquarters and sensor work.",
    "calgary": "Company team page describes Calgary origins and engineering disciplines; current product release identifies Calgary headquarters and sensor work.",
    "site": "Company team page describes Calgary origins and engineering disciplines; current product release identifies Calgary headquarters and sensor work.",
    "localSourceIds": [
      "page-oct18-source-28",
      "page-oct18-source-29",
      "page-oct18-source-30",
      "page-oct18-source-31"
    ],
    "explain": "On a fictional 10-section cable, plot the section with the strongest changing signal at four successive checks: 2, 4, 6 and 8. Describe the movement pattern and one alternative explanation. Ask what extra observation would help distinguish a moving inspection tool from an isolated event.",
    "prompt": "How could the same sensor detect a real change but still lead to the wrong explanation?",
    "conversation": "How could the same sensor detect a real change but still lead to the wrong explanation?",
    "mindset": "Light in fibre is electromagnetic; acoustic vibration in the surroundings is mechanical. Do not say sound simply travels through the fibre as the data, or promise zero false alarms. The position plot is synthetic, not company output.",
    "courses": [
      {
        "course": "Physics 30",
        "topic": "C1 — properties of electromagnetic radiation"
      }
    ],
    "courseFitSourceIds": [
      "page-oct18-source-7"
    ],
    "roles": [
      {
        "title": "Instrumentation and control",
        "note": "Help a system turn physical conditions into dependable readings and actions.",
        "evidence": "Company sources identify electrical, software and mechanical engineering expertise. Task explanations are editorial; current requisitions and project assignments are not established.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-28",
          "page-oct18-source-29",
          "page-oct18-source-30",
          "page-oct18-source-31"
        ]
      },
      {
        "title": "Measurement software and data analysis",
        "note": "Turn streams of measurements into displays and comparisons people can use.",
        "evidence": "Company sources identify electrical, software and mechanical engineering expertise. Task explanations are editorial; current requisitions and project assignments are not established.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-28",
          "page-oct18-source-29",
          "page-oct18-source-30",
          "page-oct18-source-31"
        ]
      },
      {
        "title": "Mechanical design and analysis",
        "note": "Turn a performance need into a component or system that can be built and checked.",
        "evidence": "Company sources identify electrical, software and mechanical engineering expertise. Task explanations are editorial; current requisitions and project assignments are not established.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-28",
          "page-oct18-source-29",
          "page-oct18-source-30",
          "page-oct18-source-31"
        ]
      }
    ],
    "rolesNote": "Source-backed work areas and related occupations, not a staff roster or a list of current vacancies. Careers page contains an invitation but no extractable individual positions. Unknown vacancy status; no job card.",
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
        "kindLabel": "BSc",
        "label": "University of Calgary — Mechanical Engineering",
        "note": "Design using mechanics, materials and energy. Professional engineering registration is a separate process.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-32"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "Hifi Engineering is a Calgary-based fibre-optic sensing company. Its sources describe a platform combining sensing cable, measurements and analysis to monitor infrastructure. A 2026 service announcement concerns tracking tools moving inside pipelines. The classroom connection is how a measured signal can help locate a disturbance; installation sites are not assumed to be in Calgary.",
        "status": "Company-stated work with source limits preserved",
        "kind": "stated",
        "sourceIds": [
          "page-oct18-source-28",
          "page-oct18-source-29",
          "page-oct18-source-30",
          "page-oct18-source-31"
        ]
      },
      {
        "type": "local connection",
        "claim": "Company team page describes Calgary origins and engineering disciplines; current product release identifies Calgary headquarters and sensor work.",
        "status": "Source-backed Calgary connection",
        "kind": "stated",
        "sourceIds": [
          "page-oct18-source-28",
          "page-oct18-source-29",
          "page-oct18-source-30",
          "page-oct18-source-31"
        ]
      },
      {
        "type": "course fit",
        "claim": "Performance standards support reflection/refraction and total internal reflection. Distributed optical sensing and phase-based inference are extensions; the synthetic position plot also uses general graph-reading skills.",
        "status": "Editorial application of source-checked curriculum concepts",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-7"
        ]
      },
      {
        "type": "limits",
        "claim": "Retain the distinction between the optical signal and the disturbance being sensed. No claim of guaranteed detection, zero false positives or measured savings.",
        "status": "Scope of this example",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-28",
          "page-oct18-source-29",
          "page-oct18-source-30",
          "page-oct18-source-31"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-oct18-source-28",
        "label": "hifieng.com — team",
        "url": "https://hifieng.com/team/"
      },
      {
        "id": "page-oct18-source-29",
        "label": "hifieng.com — hifi announces new advanced pig monitoring service",
        "url": "https://hifieng.com/news/hifi-announces-new-advanced-pig-monitoring-service/"
      },
      {
        "id": "page-oct18-source-30",
        "label": "hifieng.com — official website",
        "url": "https://hifieng.com/"
      },
      {
        "id": "page-oct18-source-31",
        "label": "hifieng.com — careers",
        "url": "https://hifieng.com/careers/"
      },
      {
        "id": "page-oct18-source-13",
        "label": "SAIT — Instrumentation Engineering Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/instrumentation-engineering-technology"
      },
      {
        "id": "page-oct18-source-32",
        "label": "University of Calgary — Mechanical Engineering",
        "url": "https://schulich.ucalgary.ca/future-students/undergraduate/programs/bsc-mechanical-engineering"
      },
      {
        "id": "page-oct18-source-7",
        "label": "alberta.ca — edc physics20 30 performance standards.pdf",
        "url": "https://www.alberta.ca/system/files/custom_downloaded_images/edc-physics20-30-performance-standards.pdf"
      }
    ],
    "checkedOn": "2026-10-18",
    "detailsId": "hifi-engineering-details"
  },
  "details": {
    "id": "hifi-engineering-details",
    "exampleSlug": "hifi-engineering",
    "organizationId": "hifi-engineering",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "hifi-engineering",
      "subtitle": "A fibre can be a measuring system along an asset, not just a cable between two devices.",
      "caption": "A fibre can be a measuring system along an asset, not just a cable between two devices.",
      "steps": [
        {
          "text": "An instrument sends controlled light pulses into an optical fibre.",
          "kind": "interpreted",
          "sourceIds": [
            "oct18-source-28",
            "oct18-source-29",
            "oct18-source-30",
            "oct18-source-31",
            "oct18-source-7"
          ]
        },
        {
          "text": "Changes along the sensing fibre can alter returned signals. The company's platform responds to effects associated with vibration, strain and temperature.",
          "kind": "interpreted",
          "sourceIds": [
            "oct18-source-28",
            "oct18-source-29",
            "oct18-source-30",
            "oct18-source-31",
            "oct18-source-7"
          ]
        },
        {
          "text": "Timing and signal comparison help associate a change with a place along the fibre. The detailed signal-processing method is more complex than a classroom echo model.",
          "kind": "interpreted",
          "sourceIds": [
            "oct18-source-28",
            "oct18-source-29",
            "oct18-source-30",
            "oct18-source-31",
            "oct18-source-7"
          ]
        },
        {
          "text": "An unusual pattern needs interpretation. An inspection tool, ordinary activity and a possible fault are different explanations to investigate.",
          "kind": "interpreted",
          "sourceIds": [
            "oct18-source-28",
            "oct18-source-29",
            "oct18-source-30",
            "oct18-source-31",
            "oct18-source-7"
          ]
        }
      ],
      "diagramAlt": "Returned optical signals are compared to locate changes along a sensing fibre.",
      "diagramProvenance": "Generated fictional teaching illustration; source-grounded editorial simplification. Prompts and visual review: design/example-expansion-2026-10-18/.",
      "discussion": "How could the same sensor detect a real change but still lead to the wrong explanation?"
    },
    "roleIds": [
      "work-controls",
      "work-software",
      "work-mechanical"
    ],
    "pathwayIds": [
      "oct18-route-instrument",
      "oct18-route-degree"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-18"
  },
  "organization": {
    "id": "hifi-engineering",
    "name": "Hifi Engineering",
    "organizationType": "company",
    "tagline": "A fibre can be a measuring system along an asset, not just a cable between two devices.",
    "description": {
      "text": "Hifi Engineering is a Calgary-based fibre-optic sensing company. Its sources describe a platform combining sensing cable, measurements and analysis to monitor infrastructure. A 2026 service announcement concerns tracking tools moving inside pipelines. The classroom connection is how a measured signal can help locate a disturbance; installation sites are not assumed to be in Calgary.",
      "kind": "stated",
      "sourceIds": [
        "oct18-source-28",
        "oct18-source-29",
        "oct18-source-30",
        "oct18-source-31"
      ]
    },
    "problem": {
      "text": "How can a long fibre help locate a disturbance along a pipeline?",
      "kind": "interpreted",
      "sourceIds": [
        "oct18-source-28",
        "oct18-source-29",
        "oct18-source-30",
        "oct18-source-31"
      ]
    },
    "offering": {
      "text": "Use distributed fibre-optic measurements to monitor pipelines and inspection tools.",
      "kind": "stated",
      "sourceIds": [
        "oct18-source-28",
        "oct18-source-29",
        "oct18-source-30",
        "oct18-source-31"
      ]
    },
    "beneficiaries": {
      "text": "Infrastructure operators who need evidence about changing conditions along pipelines and other assets.",
      "kind": "interpreted",
      "sourceIds": [
        "oct18-source-28",
        "oct18-source-29",
        "oct18-source-30",
        "oct18-source-31"
      ]
    },
    "headquarters": {
      "text": "Headquarters not separately verified for this example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "Company team page describes Calgary origins and engineering disciplines; current product release identifies Calgary headquarters and sensor work.",
      "kind": "stated",
      "sourceIds": [
        "oct18-source-28",
        "oct18-source-29",
        "oct18-source-30",
        "oct18-source-31"
      ]
    },
    "websiteSourceId": "oct18-source-30",
    "checkedOn": "2026-10-18",
    "careersSourceId": "oct18-source-31"
  },
  "organizationRoles": [
    {
      "organizationId": "hifi-engineering",
      "roleId": "work-controls",
      "establishes": "related-work",
      "label": "Related work inferred from fibre-sensing and signal-analysis sources; not verified staff titles.",
      "kind": "interpreted",
      "sourceIds": [
        "oct18-source-28",
        "oct18-source-29",
        "oct18-source-30",
        "oct18-source-31"
      ],
      "checkedOn": "2026-10-18"
    },
    {
      "organizationId": "hifi-engineering",
      "roleId": "work-software",
      "establishes": "related-work",
      "label": "Related work inferred from fibre-sensing and signal-analysis sources; not verified staff titles.",
      "kind": "interpreted",
      "sourceIds": [
        "oct18-source-28",
        "oct18-source-29",
        "oct18-source-30",
        "oct18-source-31"
      ],
      "checkedOn": "2026-10-18"
    },
    {
      "organizationId": "hifi-engineering",
      "roleId": "work-mechanical",
      "establishes": "related-work",
      "label": "Related work inferred from fibre-sensing and signal-analysis sources; not verified staff titles.",
      "kind": "interpreted",
      "sourceIds": [
        "oct18-source-28",
        "oct18-source-29",
        "oct18-source-30",
        "oct18-source-31"
      ],
      "checkedOn": "2026-10-18"
    }
  ],
  "jobs": [],
  "sources": [],
  "diagram": {
    "image": "/images/story-diagrams/hifi-engineering-graphic-novel.webp",
    "heading": "A fibre can be a measuring system along an asset, not just a cable between two devices.",
    "steps": [
      "An instrument sends controlled light pulses into an optical fibre.",
      "Changes along the sensing fibre can alter returned signals. The company's platform responds to effects associated with vibration, strain and temperature.",
      "Timing and signal comparison help associate a change with a place along the fibre. The detailed signal-processing method is more complex than a classroom echo model.",
      "An unusual pattern needs interpretation. An inspection tool, ordinary activity and a possible fault are different explanations to investigate."
    ],
    "note": "Light in fibre is electromagnetic; acoustic vibration in the surroundings is mechanical. Do not say sound simply travels through the fibre as the data, or promise zero false alarms. The position plot is synthetic, not company output."
  },
  "unitLinks": [
    {
      "unitId": "p30c",
      "why": "Performance standards support reflection/refraction and total internal reflection. Distributed optical sensing and phase-based inference are extensions; the synthetic position plot also uses general graph-reading skills."
    }
  ]
} satisfies ExampleRecord;
