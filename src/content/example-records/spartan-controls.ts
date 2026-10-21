import type { ExampleRecord } from "../types";

export default {
  "addedOn": "2026-10-19",
  "example": {
    "slug": "spartan-controls",
    "org": "Spartan Controls",
    "discipline": "Physics",
    "question": "How do you test a valve that must open at the right pressure?",
    "work": "Spartan Controls describes valve diagnostics, repair, commissioning and specialised testing. Its service page explicitly identifies Calgary repair and steam-testing capability. The classroom model focuses on evidence of valve behaviour, keeping a control valve’s purpose separate from a pressure-relief device’s protective function.",
    "localShort": "Original service page names Calgary valve-repair and steam-testing facilities.",
    "calgary": "Original service page names Calgary valve-repair and steam-testing facilities.",
    "site": "No test procedure, safety threshold or assignment to a particular plant is supplied.",
    "localSourceIds": [
      "page-oct19-source-49",
      "page-oct19-source-50",
      "page-expansion-source-20"
    ],
    "explain": "Use a drawn valve with a fictional spring force of 100 N opposing a pressure force of 80 N, then 120 N. Draw net-force directions and explain why this simplified force comparison is not a real pressure-valve setting.",
    "prompt": "Why is seeing a valve open once not a complete test?",
    "conversation": "Why is seeing a valve open once not a complete test?",
    "mindset": "Physics force model only. No pressure equipment is assembled or tested in class. Control valves regulate flow; relief devices protect against overpressure and should not be treated as interchangeable.",
    "courses": [
      {
        "course": "Physics 20",
        "topic": "B1 — Newton’s laws and balanced/unbalanced forces"
      }
    ],
    "courseFitSourceIds": [
      "page-expansion-source-12"
    ],
    "roles": [
      {
        "title": "Valve service technician",
        "note": "Inspect, repair and test valves used to control or relieve process flow.",
        "evidence": "Employer describes valve technicians and controls/service activity. Specific tasks here are general explanations; no current vacancy or compliance authority is implied.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct19-source-49",
          "page-oct19-source-50",
          "page-expansion-source-20"
        ]
      },
      {
        "title": "Instrumentation and controls",
        "note": "Keep a process measurable and responsive. Controls work connects sensors, decisions and actuators so the system can respond when conditions change.",
        "evidence": "Employer describes valve technicians and controls/service activity. Specific tasks here are general explanations; no current vacancy or compliance authority is implied.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct19-source-49",
          "page-oct19-source-50",
          "page-expansion-source-20"
        ]
      }
    ],
    "rolesNote": "Work areas and related occupations, not a staff roster or a list of current vacancies. No verified individual posting was selected. Employer services/work-area evidence is not a live vacancy.",
    "pathways": [
      {
        "kindLabel": "Apprenticeship",
        "label": "SAIT — Industrial Mechanic (Millwright)",
        "note": "Learn to install, maintain and repair industrial machinery. Requires apprenticeship registration and workplace training. This is distinct from an engineering degree.",
        "kind": "interpreted",
        "sourceIds": [
          "page-expansion-source-48"
        ]
      },
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
        "claim": "Spartan Controls describes valve diagnostics, repair, commissioning and specialised testing. Its service page explicitly identifies Calgary repair and steam-testing capability. The classroom model focuses on evidence of valve behaviour, keeping a control valve’s purpose separate from a pressure-relief device’s protective function.",
        "status": "Source-backed employer work with local and historical limits retained",
        "kind": "stated",
        "sourceIds": [
          "page-oct19-source-49",
          "page-oct19-source-50",
          "page-expansion-source-20"
        ]
      },
      {
        "type": "local connection",
        "claim": "Original service page names Calgary valve-repair and steam-testing facilities.",
        "status": "Documented Calgary work; regional operations are distinguished",
        "kind": "stated",
        "sourceIds": [
          "page-oct19-source-49",
          "page-oct19-source-50",
          "page-expansion-source-20"
        ]
      },
      {
        "type": "course fit",
        "claim": "Net force is direct physics content. Pressure-area force and spring-loaded valve behaviour are a simplified applied model, not a pressure-testing qualification.",
        "status": "source-checked editorial fit; application extensions explicit",
        "kind": "interpreted",
        "sourceIds": [
          "page-expansion-source-12"
        ]
      },
      {
        "type": "limits",
        "claim": "No compliance certificate, testing recipe or current vacancy is inferred from service marketing. Training routes support related competencies without becoming employer minimums. No test procedure, safety threshold or assignment to a particular plant is supplied.",
        "status": "Scope of the classroom example",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct19-source-49",
          "page-oct19-source-50",
          "page-expansion-source-20"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-oct19-source-49",
        "label": "spartancontrols.com — valve services",
        "url": "https://www.spartancontrols.com/services/valve-services/"
      },
      {
        "id": "page-oct19-source-50",
        "label": "spartancontrols.com — careers",
        "url": "https://www.spartancontrols.com/careers/"
      },
      {
        "id": "page-expansion-source-20",
        "label": "SAIT — Instrumentation Engineering Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/instrumentation-engineering-technology"
      },
      {
        "id": "page-expansion-source-12",
        "label": "Alberta Physics 20–30 performance standards",
        "url": "https://www.alberta.ca/system/files/custom_downloaded_images/edc-physics20-30-performance-standards.pdf"
      },
      {
        "id": "page-expansion-source-48",
        "label": "SAIT — Industrial Mechanic (Millwright)",
        "url": "https://www.sait.ca/apprenticeships-and-trades/programs/industrial-mechanic-millwright"
      }
    ],
    "checkedOn": "2026-10-19",
    "detailsId": "spartan-controls-details"
  },
  "details": {
    "id": "spartan-controls-details",
    "exampleSlug": "spartan-controls",
    "organizationId": "spartan-controls",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "spartan-controls",
      "subtitle": "A valve must behave correctly when the process needs it.",
      "caption": "A valve must behave correctly when the process needs it.",
      "steps": [
        {
          "text": "Identify what a particular valve is intended to do and under what conditions.",
          "kind": "interpreted",
          "sourceIds": [
            "oct19-source-49",
            "oct19-source-50",
            "expansion-source-20"
          ]
        },
        {
          "text": "Inspect or diagnose its condition before deciding what service is needed.",
          "kind": "interpreted",
          "sourceIds": [
            "oct19-source-49",
            "oct19-source-50",
            "expansion-source-20"
          ]
        },
        {
          "text": "Use the appropriate controlled test to compare observed behaviour with the required behaviour.",
          "kind": "interpreted",
          "sourceIds": [
            "oct19-source-49",
            "oct19-source-50",
            "expansion-source-20"
          ]
        },
        {
          "text": "Document results and any further action; one passing observation does not establish every aspect of future reliability.",
          "kind": "interpreted",
          "sourceIds": [
            "oct19-source-49",
            "oct19-source-50",
            "expansion-source-20"
          ]
        }
      ],
      "diagramAlt": "Inspection and controlled testing compare a valve’s behaviour with its intended function.",
      "diagramProvenance": "Generated fictional teaching illustration; editorial simplification of the cited work. Exact prompts, original images and visual checks: design/example-expansion-2026-10-19/.",
      "discussion": "Why is seeing a valve open once not a complete test?"
    },
    "roleIds": [
      "work-valve-service",
      "work-controls"
    ],
    "pathwayIds": [
      "route-millwright",
      "oct18-route-instrument"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-19"
  },
  "organization": {
    "id": "spartan-controls",
    "name": "Spartan Controls",
    "organizationType": "company",
    "tagline": "A valve must behave correctly when the process needs it.",
    "description": {
      "text": "Spartan Controls describes valve diagnostics, repair, commissioning and specialised testing. Its service page explicitly identifies Calgary repair and steam-testing capability. The classroom model focuses on evidence of valve behaviour, keeping a control valve’s purpose separate from a pressure-relief device’s protective function. A February 2025 University of Alberta award names Spartan Controls at its Calgary address as the supplier of control valves for large heat exchangers. The university specified matching replacements because another make or model would require changes to the existing piping. This is an example of engineering compatibility: a replacement component has to work with the wider system. These control valves are distinct from pressure-relief devices.",
      "kind": "stated",
      "sourceIds": [
        "oct19-source-49",
        "oct19-source-50",
        "expansion-source-20",
        "alx-oct20-02-1"
      ]
    },
    "problem": {
      "text": "How do you test a valve that must open at the right pressure?",
      "kind": "interpreted",
      "sourceIds": [
        "oct19-source-49",
        "oct19-source-50",
        "expansion-source-20"
      ]
    },
    "offering": {
      "text": "Industrial control, valve service and testing.",
      "kind": "stated",
      "sourceIds": [
        "oct19-source-49",
        "oct19-source-50",
        "expansion-source-20"
      ]
    },
    "beneficiaries": {
      "text": "Industrial operations and maintenance teams relying on valves and instruments.",
      "kind": "interpreted",
      "sourceIds": [
        "oct19-source-49",
        "oct19-source-50",
        "expansion-source-20"
      ]
    },
    "headquarters": {
      "text": "Headquarters not separately verified for this example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "Original service page names Calgary valve-repair and steam-testing facilities.",
      "kind": "stated",
      "sourceIds": [
        "oct19-source-49",
        "oct19-source-50",
        "expansion-source-20"
      ]
    },
    "websiteSourceId": "oct19-source-49",
    "checkedOn": "2026-10-20",
    "careersSourceId": "oct19-source-50"
  },
  "organizationRoles": [
    {
      "organizationId": "spartan-controls",
      "roleId": "work-valve-service",
      "establishes": "related-work",
      "label": "Employer describes valve technicians and controls/service activity. Specific tasks here are general explanations; no current vacancy or compliance authority is implied.",
      "location": "Original service page names Calgary valve-repair and steam-testing facilities.",
      "kind": "interpreted",
      "sourceIds": [
        "oct19-source-49",
        "oct19-source-50",
        "expansion-source-20"
      ],
      "checkedOn": "2026-10-19"
    },
    {
      "organizationId": "spartan-controls",
      "roleId": "work-controls",
      "establishes": "related-work",
      "label": "Employer describes valve technicians and controls/service activity. Specific tasks here are general explanations; no current vacancy or compliance authority is implied.",
      "location": "Original service page names Calgary valve-repair and steam-testing facilities.",
      "kind": "interpreted",
      "sourceIds": [
        "oct19-source-49",
        "oct19-source-50",
        "expansion-source-20"
      ],
      "checkedOn": "2026-10-19"
    }
  ],
  "jobs": [],
  "sources": [
    {
      "id": "alx-oct20-02-1",
      "label": "University of Alberta — control-valve replacement award to Spartan Controls (2025)",
      "url": "https://purchasing.alberta.ca/posting/AB-2025-00956",
      "checkedOn": "2026-10-20"
    }
  ],
  "diagram": {
    "image": "/images/story-diagrams/spartan-controls-graphic-novel.webp",
    "heading": "A valve must behave correctly when the process needs it.",
    "steps": [
      "Identify what a particular valve is intended to do and under what conditions.",
      "Inspect or diagnose its condition before deciding what service is needed.",
      "Use the appropriate controlled test to compare observed behaviour with the required behaviour.",
      "Document results and any further action; one passing observation does not establish every aspect of future reliability."
    ],
    "note": "Physics force model only. No pressure equipment is assembled or tested in class. Control valves regulate flow; relief devices protect against overpressure and should not be treated as interchangeable. No test procedure, safety threshold or assignment to a particular plant is supplied."
  },
  "unitLinks": [
    {
      "unitId": "p20b",
      "why": "Net force is direct physics content. Pressure-area force and spring-loaded valve behaviour are a simplified applied model, not a pressure-testing qualification."
    }
  ]
} satisfies ExampleRecord;
