import type { ExampleRecord } from "../types";

export default {
  "addedOn": "2026-10-19",
  "example": {
    "slug": "westech-industrial",
    "org": "Westech Industrial",
    "discipline": "Physics",
    "question": "How do you know an industrial reading is accurate enough to act on?",
    "work": "Westech Industrial supplies measurement and control solutions. It describes engineered measurement skids and buildings, instrument calibration, construction checks and commissioning. Its quality-measurement page explicitly says these systems can be built in its Calgary yard or at a customer site.",
    "localShort": "Employer explicitly identifies a Calgary yard for skid/building construction.",
    "calgary": "Employer explicitly identifies a Calgary yard for skid/building construction.",
    "site": "Customer sites and project assignments vary; no particular local pipeline or client is assumed.",
    "localSourceIds": [
      "page-oct19-source-6",
      "page-oct19-source-7",
      "page-oct19-source-8"
    ],
    "explain": "A fictional reference delivers 200 mL. Meter A reports 210, 210 and 211 mL; meter B reports 198, 202 and 200 mL. Compare repeatability with agreement to the reference. State a limitation of only three trials.",
    "prompt": "Could a meter give the same reading every time and still be wrong?",
    "conversation": "Could a meter give the same reading every time and still be wrong?",
    "mindset": "Invented data, not a Westech test result. Calibration, adjustment and proof of fitness for a particular industrial use are different things.",
    "courses": [
      {
        "course": "Science 10",
        "topic": "Cross-unit inquiry — measurement and evaluating designs"
      }
    ],
    "courseFitSourceIds": [
      "page-oct17-source-51"
    ],
    "roles": [
      {
        "title": "Instrumentation and controls",
        "note": "Keep a process measurable and responsive. Controls work connects sensors, decisions and actuators so the system can respond when conditions change.",
        "evidence": "Employer describes calibration, integration, service, commissioning and technical support. These establish work areas, not named staff or current vacancies.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct19-source-6",
          "page-oct19-source-7",
          "page-oct19-source-8"
        ]
      },
      {
        "title": "Technical application support",
        "note": "Help people use a technical product in the conditions of their own workplace.",
        "evidence": "Employer describes calibration, integration, service, commissioning and technical support. These establish work areas, not named staff or current vacancies.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct19-source-6",
          "page-oct19-source-7",
          "page-oct19-source-8"
        ]
      }
    ],
    "rolesNote": "Work areas and related occupations, not a staff roster or a list of current vacancies. No verified individual posting was selected. Employer services/work-area evidence is not a live vacancy.",
    "pathways": [
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Instrumentation Engineering Technology",
        "note": "Measurement, calibration and process controls. Related to sensor/control work; no guaranteed employer placement. Check current admissions and intake before applying; this draft does not promise entry or employment.",
        "kind": "interpreted",
        "sourceIds": [
          "page-expansion-source-20"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "Westech Industrial supplies measurement and control solutions. It describes engineered measurement skids and buildings, instrument calibration, construction checks and commissioning. Its quality-measurement page explicitly says these systems can be built in its Calgary yard or at a customer site.",
        "status": "Source-backed employer work with local and historical limits retained",
        "kind": "stated",
        "sourceIds": [
          "page-oct19-source-6",
          "page-oct19-source-7",
          "page-oct19-source-8"
        ]
      },
      {
        "type": "local connection",
        "claim": "Employer explicitly identifies a Calgary yard for skid/building construction.",
        "status": "Documented Calgary work; regional operations are distinguished",
        "kind": "stated",
        "sourceIds": [
          "page-oct19-source-6",
          "page-oct19-source-7",
          "page-oct19-source-8"
        ]
      },
      {
        "type": "course fit",
        "claim": "The programme’s inquiry/design skills support measurement, fair comparisons and evaluating a device. No fabricated unit-specific instrumentation outcome or forced unit link is proposed.",
        "status": "source-checked editorial fit; application extensions explicit",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct17-source-51"
        ]
      },
      {
        "type": "limits",
        "claim": "The small-volume prover is employer-described, but the teaching model is generic and omits custody-transfer specifications. Treat the course fit as inquiry, not a named physics unit. Customer sites and project assignments vary; no particular local pipeline or client is assumed.",
        "status": "Scope of the classroom example",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct19-source-6",
          "page-oct19-source-7",
          "page-oct19-source-8"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-oct19-source-6",
        "label": "westech-ind.com — quality measurement solutions",
        "url": "https://westech-ind.com/quality-measurement-solutions/"
      },
      {
        "id": "page-oct19-source-7",
        "label": "westech-ind.com — service support",
        "url": "https://westech-ind.com/service-support/"
      },
      {
        "id": "page-oct19-source-8",
        "label": "westech-ind.com — careers",
        "url": "https://westech-ind.com/about/careers/"
      },
      {
        "id": "page-oct17-source-51",
        "label": "Alberta Science 10 program: inquiry skills and technological systems",
        "url": "https://education.alberta.ca/media/159715/science10.pdf"
      },
      {
        "id": "page-expansion-source-20",
        "label": "SAIT — Instrumentation Engineering Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/instrumentation-engineering-technology"
      }
    ],
    "checkedOn": "2026-10-19",
    "detailsId": "westech-industrial-details"
  },
  "details": {
    "id": "westech-industrial-details",
    "exampleSlug": "westech-industrial",
    "organizationId": "westech-industrial",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "westech-industrial",
      "subtitle": "A reading needs a trustworthy comparison.",
      "caption": "A reading needs a trustworthy comparison.",
      "steps": [
        {
          "text": "Decide what quantity the process needs and the conditions in which it must be measured.",
          "kind": "interpreted",
          "sourceIds": [
            "oct19-source-6",
            "oct19-source-7",
            "oct19-source-8"
          ]
        },
        {
          "text": "Compare the instrument’s output with an appropriate known reference or proving method.",
          "kind": "interpreted",
          "sourceIds": [
            "oct19-source-6",
            "oct19-source-7",
            "oct19-source-8"
          ]
        },
        {
          "text": "Examine repeatability and differences; several similar readings can still be biased.",
          "kind": "interpreted",
          "sourceIds": [
            "oct19-source-6",
            "oct19-source-7",
            "oct19-source-8"
          ]
        },
        {
          "text": "Investigate or adjust the system as permitted, then verify again and keep the result documented.",
          "kind": "interpreted",
          "sourceIds": [
            "oct19-source-6",
            "oct19-source-7",
            "oct19-source-8"
          ]
        }
      ],
      "diagramAlt": "A reference and repeated readings help evaluate an instrument before it is used.",
      "diagramProvenance": "Generated fictional teaching illustration; editorial simplification of the cited work. Exact prompts, original images and visual checks: design/example-expansion-2026-10-19/.",
      "discussion": "Could a meter give the same reading every time and still be wrong?"
    },
    "roleIds": [
      "work-controls",
      "work-technical-support"
    ],
    "pathwayIds": [
      "oct18-route-instrument"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-19"
  },
  "organization": {
    "id": "westech-industrial",
    "name": "Westech Industrial",
    "organizationType": "company",
    "tagline": "A reading needs a trustworthy comparison.",
    "description": {
      "text": "Westech Industrial supplies measurement and control solutions. It describes engineered measurement skids and buildings, instrument calibration, construction checks and commissioning. Its quality-measurement page explicitly says these systems can be built in its Calgary yard or at a customer site.",
      "kind": "stated",
      "sourceIds": [
        "oct19-source-6",
        "oct19-source-7",
        "oct19-source-8"
      ]
    },
    "problem": {
      "text": "How do you know an industrial reading is accurate enough to act on?",
      "kind": "interpreted",
      "sourceIds": [
        "oct19-source-6",
        "oct19-source-7",
        "oct19-source-8"
      ]
    },
    "offering": {
      "text": "Integrated measurement systems and technical service.",
      "kind": "stated",
      "sourceIds": [
        "oct19-source-6",
        "oct19-source-7",
        "oct19-source-8"
      ]
    },
    "beneficiaries": {
      "text": "Industrial teams who need dependable information for process or transfer decisions.",
      "kind": "interpreted",
      "sourceIds": [
        "oct19-source-6",
        "oct19-source-7",
        "oct19-source-8"
      ]
    },
    "headquarters": {
      "text": "Headquarters not separately verified for this example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "Employer explicitly identifies a Calgary yard for skid/building construction.",
      "kind": "stated",
      "sourceIds": [
        "oct19-source-6",
        "oct19-source-7",
        "oct19-source-8"
      ]
    },
    "websiteSourceId": "oct19-source-6",
    "checkedOn": "2026-10-19",
    "careersSourceId": "oct19-source-8"
  },
  "organizationRoles": [
    {
      "organizationId": "westech-industrial",
      "roleId": "work-controls",
      "establishes": "related-work",
      "label": "Employer describes calibration, integration, service, commissioning and technical support. These establish work areas, not named staff or current vacancies.",
      "location": "Employer explicitly identifies a Calgary yard for skid/building construction.",
      "kind": "interpreted",
      "sourceIds": [
        "oct19-source-6",
        "oct19-source-7",
        "oct19-source-8"
      ],
      "checkedOn": "2026-10-19"
    },
    {
      "organizationId": "westech-industrial",
      "roleId": "work-technical-support",
      "establishes": "related-work",
      "label": "Employer describes calibration, integration, service, commissioning and technical support. These establish work areas, not named staff or current vacancies.",
      "location": "Employer explicitly identifies a Calgary yard for skid/building construction.",
      "kind": "interpreted",
      "sourceIds": [
        "oct19-source-6",
        "oct19-source-7",
        "oct19-source-8"
      ],
      "checkedOn": "2026-10-19"
    }
  ],
  "jobs": [],
  "sources": [],
  "diagram": {
    "image": "/images/story-diagrams/westech-industrial-graphic-novel.webp",
    "heading": "A reading needs a trustworthy comparison.",
    "steps": [
      "Decide what quantity the process needs and the conditions in which it must be measured.",
      "Compare the instrument’s output with an appropriate known reference or proving method.",
      "Examine repeatability and differences; several similar readings can still be biased.",
      "Investigate or adjust the system as permitted, then verify again and keep the result documented."
    ],
    "note": "Invented data, not a Westech test result. Calibration, adjustment and proof of fitness for a particular industrial use are different things. Customer sites and project assignments vary; no particular local pipeline or client is assumed."
  },
  "unitLinks": []
} satisfies ExampleRecord;
