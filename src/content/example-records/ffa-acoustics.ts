import type { ExampleRecord } from "../types";

export default {
  "addedOn": "2026-10-18",
  "example": {
    "slug": "ffa-acoustics",
    "org": "FFA Consultants in Acoustics and Noise Control",
    "discipline": "Physics",
    "question": "Why is speech clear in one room and hard to understand in another?",
    "work": "FFA Consultants in Acoustics and Noise Control is a Calgary engineering consulting firm. Its services include room-acoustic design, sound measurements, computer modelling and noise isolation. Its architectural work describes spaces intended for speech and music. The proposed classroom is an illustrative setting, not a claim that FFA designed the user's school.",
    "localShort": "Calgary consulting office offers room-acoustic measurements, modelling and noise-control design.",
    "calgary": "Calgary consulting office offers room-acoustic measurements, modelling and noise-control design.",
    "site": "Calgary consulting office offers room-acoustic measurements, modelling and noise-control design.",
    "localSourceIds": [
      "page-oct18-source-47",
      "page-oct18-source-48"
    ],
    "explain": "Draw two imaginary rooms with identical dimensions and one sound source. Give one room more sound-absorbing surfaces. Trace direct and reflected paths and predict a difference. Identify what would need measurement before calling one room better.",
    "prompt": "Would removing every reflection necessarily make a room better for every purpose?",
    "conversation": "Would removing every reflection necessarily make a room better for every purpose?",
    "mindset": "Absorption and sound isolation are different: reducing reflections inside a room is not the same as stopping sound reaching the next room. Reverberation and perceived clarity are not interchangeable with volume.",
    "courses": [
      {
        "course": "Physics 20",
        "topic": "D2 — mechanical waves, reflection and interference"
      }
    ],
    "courseFitSourceIds": [
      "page-oct18-source-7"
    ],
    "roles": [
      {
        "title": "Acoustical consulting",
        "note": "Investigate how sound behaves in a space and recommend changes for its intended use.",
        "evidence": "FFA describes acousticians/engineers, sound-level instruments, modelling and commissioning. The measurement-support profile is an interpreted work area, not a claim of a current technician vacancy.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-47",
          "page-oct18-source-48"
        ]
      },
      {
        "title": "Instrumentation and control",
        "note": "Help a system turn physical conditions into dependable readings and actions.",
        "evidence": "FFA describes acousticians/engineers, sound-level instruments, modelling and commissioning. The measurement-support profile is an interpreted work area, not a claim of a current technician vacancy.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-47",
          "page-oct18-source-48"
        ]
      }
    ],
    "rolesNote": "Source-backed work areas and related occupations, not a staff roster or a list of current vacancies. No role-specific vacancy was verified from the company sources. Principal biography supplies one historical mechanical-engineering route, not a universal hiring rule.",
    "pathways": [
      {
        "kindLabel": "BSc",
        "label": "University of Calgary — Mechanical Engineering",
        "note": "Design using mechanics, materials and energy. Professional engineering registration is a separate process.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-32"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Mechanical Engineering Technology",
        "note": "Design, modelling and mechanical-system analysis. A technical route; does not itself confer professional engineer registration.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-5"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "FFA Consultants in Acoustics and Noise Control is a Calgary engineering consulting firm. Its services include room-acoustic design, sound measurements, computer modelling and noise isolation. Its architectural work describes spaces intended for speech and music. The proposed classroom is an illustrative setting, not a claim that FFA designed the user's school.",
        "status": "Company-stated work with source limits preserved",
        "kind": "stated",
        "sourceIds": [
          "page-oct18-source-47",
          "page-oct18-source-48"
        ]
      },
      {
        "type": "local connection",
        "claim": "Calgary consulting office offers room-acoustic measurements, modelling and noise-control design.",
        "status": "Source-backed Calgary connection",
        "kind": "stated",
        "sourceIds": [
          "page-oct18-source-47",
          "page-oct18-source-48"
        ]
      },
      {
        "type": "course fit",
        "claim": "Direct mechanical-wave connection using the performance standards. Detailed reverberation metrics, room modelling and building standards are engineering extensions.",
        "status": "Editorial application of source-checked curriculum concepts",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-7"
        ]
      },
      {
        "type": "limits",
        "claim": "Use an invented room, not a named unverified client project. A mechanical-engineering degree/diploma is a related starting point, not a stand-alone acoustical-consultant licence.",
        "status": "Scope of this example",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-47",
          "page-oct18-source-48"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-oct18-source-47",
        "label": "ffaacoustics.ca — about us",
        "url": "https://www.ffaacoustics.ca/about-us"
      },
      {
        "id": "page-oct18-source-48",
        "label": "ffaacoustics.ca — architectural",
        "url": "https://www.ffaacoustics.ca/architectural"
      },
      {
        "id": "page-oct18-source-32",
        "label": "University of Calgary — Mechanical Engineering",
        "url": "https://schulich.ucalgary.ca/future-students/undergraduate/programs/bsc-mechanical-engineering"
      },
      {
        "id": "page-oct18-source-5",
        "label": "SAIT — Mechanical Engineering Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/mechanical-engineering-technology"
      },
      {
        "id": "page-oct18-source-7",
        "label": "alberta.ca — edc physics20 30 performance standards.pdf",
        "url": "https://www.alberta.ca/system/files/custom_downloaded_images/edc-physics20-30-performance-standards.pdf"
      }
    ],
    "checkedOn": "2026-10-18",
    "detailsId": "ffa-acoustics-details"
  },
  "details": {
    "id": "ffa-acoustics-details",
    "exampleSlug": "ffa-acoustics",
    "organizationId": "ffa-acoustics",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "ffa-acoustics",
      "subtitle": "A room can make communication easier—or make people work harder to hear.",
      "caption": "A room can make communication easier—or make people work harder to hear.",
      "steps": [
        {
          "text": "A source sends sound toward a listener and the room's surfaces.",
          "kind": "interpreted",
          "sourceIds": [
            "oct18-source-47",
            "oct18-source-48",
            "oct18-source-7"
          ]
        },
        {
          "text": "Direct sound reaches the listener along one path; reflected sound arrives along others.",
          "kind": "interpreted",
          "sourceIds": [
            "oct18-source-47",
            "oct18-source-48",
            "oct18-source-7"
          ]
        },
        {
          "text": "Surface choices and room geometry affect how sound is reflected, absorbed and spread. Repeated reflections can make speech harder to distinguish.",
          "kind": "interpreted",
          "sourceIds": [
            "oct18-source-47",
            "oct18-source-48",
            "oct18-source-7"
          ]
        },
        {
          "text": "Consultants measure and model the space, then compare changes with the room's purpose. A concert space and a meeting room need not share the same goal.",
          "kind": "interpreted",
          "sourceIds": [
            "oct18-source-47",
            "oct18-source-48",
            "oct18-source-7"
          ]
        }
      ],
      "diagramAlt": "Direct and reflected sound paths are compared before and after a change to a room surface.",
      "diagramProvenance": "Generated fictional teaching illustration; source-grounded editorial simplification. Prompts and visual review: design/example-expansion-2026-10-18/.",
      "discussion": "Would removing every reflection necessarily make a room better for every purpose?"
    },
    "roleIds": [
      "work-acoustics",
      "work-controls"
    ],
    "pathwayIds": [
      "oct18-route-degree",
      "oct18-route-mechanical"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-18"
  },
  "organization": {
    "id": "ffa-acoustics",
    "name": "FFA Consultants in Acoustics and Noise Control",
    "organizationType": "company",
    "tagline": "A room can make communication easier—or make people work harder to hear.",
    "description": {
      "text": "FFA Consultants in Acoustics and Noise Control is a Calgary engineering consulting firm. Its services include room-acoustic design, sound measurements, computer modelling and noise isolation. Its architectural work describes spaces intended for speech and music. The proposed classroom is an illustrative setting, not a claim that FFA designed the user's school.",
      "kind": "stated",
      "sourceIds": [
        "oct18-source-47",
        "oct18-source-48"
      ]
    },
    "problem": {
      "text": "Why is speech clear in one room and hard to understand in another?",
      "kind": "interpreted",
      "sourceIds": [
        "oct18-source-47",
        "oct18-source-48"
      ]
    },
    "offering": {
      "text": "Design rooms for speech intelligibility and manage unwanted sound.",
      "kind": "stated",
      "sourceIds": [
        "oct18-source-47",
        "oct18-source-48"
      ]
    },
    "beneficiaries": {
      "text": "Building designers, owners and people who need spaces suited to communication, music or other activities.",
      "kind": "interpreted",
      "sourceIds": [
        "oct18-source-47",
        "oct18-source-48"
      ]
    },
    "headquarters": {
      "text": "Headquarters not separately verified for this example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "Calgary consulting office offers room-acoustic measurements, modelling and noise-control design.",
      "kind": "stated",
      "sourceIds": [
        "oct18-source-47",
        "oct18-source-48"
      ]
    },
    "websiteSourceId": "oct18-home-ffa-acoustics",
    "checkedOn": "2026-10-18"
  },
  "organizationRoles": [
    {
      "organizationId": "ffa-acoustics",
      "roleId": "work-acoustics",
      "establishes": "related-work",
      "label": "FFA describes acousticians/engineers, sound-level instruments, modelling and commissioning. The measurement-support profile is an interpreted work area, not a claim of a current technician vacancy.",
      "kind": "interpreted",
      "sourceIds": [
        "oct18-source-47",
        "oct18-source-48"
      ],
      "checkedOn": "2026-10-18"
    },
    {
      "organizationId": "ffa-acoustics",
      "roleId": "work-controls",
      "establishes": "related-work",
      "label": "FFA describes acousticians/engineers, sound-level instruments, modelling and commissioning. The measurement-support profile is an interpreted work area, not a claim of a current technician vacancy.",
      "kind": "interpreted",
      "sourceIds": [
        "oct18-source-47",
        "oct18-source-48"
      ],
      "checkedOn": "2026-10-18"
    }
  ],
  "jobs": [],
  "sources": [],
  "diagram": {
    "image": "/images/story-diagrams/ffa-acoustics-graphic-novel.webp",
    "heading": "A room can make communication easier—or make people work harder to hear.",
    "steps": [
      "A source sends sound toward a listener and the room's surfaces.",
      "Direct sound reaches the listener along one path; reflected sound arrives along others.",
      "Surface choices and room geometry affect how sound is reflected, absorbed and spread. Repeated reflections can make speech harder to distinguish.",
      "Consultants measure and model the space, then compare changes with the room's purpose. A concert space and a meeting room need not share the same goal."
    ],
    "note": "Absorption and sound isolation are different: reducing reflections inside a room is not the same as stopping sound reaching the next room. Reverberation and perceived clarity are not interchangeable with volume."
  },
  "unitLinks": [
    {
      "unitId": "p20d",
      "why": "Direct mechanical-wave connection using the performance standards. Detailed reverberation metrics, room modelling and building standards are engineering extensions."
    }
  ]
} satisfies ExampleRecord;
