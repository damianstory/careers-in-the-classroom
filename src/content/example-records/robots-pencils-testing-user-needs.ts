import type { ExampleRecord } from "../types";

export default {
  "addedOn": "2026-10-23",
  "example": {
    "slug": "robots-pencils-testing-user-needs",
    "detailsId": "robots-pencils-testing-user-needs-details",
    "org": "Robots & Pencils",
    "discipline": "Technology",
    "question": "How does a team decide whether an app solves the problem it was built for?",
    "work": "Robots & Pencils combines software engineering, design and strategy. Its services include clarifying use cases and assessing the data and operating conditions needed for an application.",
    "localShort": "The company lists Calgary among its locations. Its published service descriptions apply across the organization.",
    "calgary": "The company lists Calgary among its locations. Its published service descriptions apply across the organization.",
    "site": "A classroom model based on documented work; the activity uses fictional examples.",
    "localSourceIds": [
      "page-robots-pencils-testing-user-needs-oct23-robots-about-web",
      "page-robots-pencils-testing-user-needs-oct23-robots-sprint-web"
    ],
    "explain": "Prototype a fictional school equipment-booking screen. Define success as showing only available items and explaining rejected requests. Have a partner try an unavailable item, a missing return date and a valid request. Separate a programming bug from a requirement that was unclear.",
    "prompt": "When a user cannot complete a task, how would you decide whether the problem is the code, the interface or the requirement?",
    "conversation": "When a user cannot complete a task, how would you decide whether the problem is the code, the interface or the requirement?",
    "mindset": "The school-booking task is an editorial teaching example, not a named client project. The company name does not establish physical robotics work. No private client data or claimed productivity result is used.",
    "courses": [
      {
        "course": "CSE1120 · Structured Programming 2",
        "topic": "Requirements, decision rules and tests"
      }
    ],
    "courseFitSourceIds": [
      "page-robots-pencils-testing-user-needs-oct23-course-cse1120"
    ],
    "roles": [
      {
        "title": "Software and data",
        "note": "Turn a user need into observable behaviour, then test whether the application delivers it.",
        "evidence": "Related work interpreted from the cited source; not a verified job title or vacancy.",
        "kind": "interpreted",
        "sourceIds": [
          "page-robots-pencils-testing-user-needs-oct23-robots-about-web",
          "page-robots-pencils-testing-user-needs-oct23-robots-sprint-web"
        ]
      }
    ],
    "rolesNote": "These are related kinds of work, not current vacancies or proof that a named employee worked on the featured project.",
    "pathways": [
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Software Development",
        "note": "Learn to design, test and build software across front-end and back-end systems. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-robots-pencils-testing-user-needs-expansion-source-14"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "Robots & Pencils combines software engineering, design and strategy. Its services include clarifying use cases and assessing the data and operating conditions needed for an application.",
        "status": "Documented organization work",
        "kind": "stated",
        "sourceIds": [
          "page-robots-pencils-testing-user-needs-oct23-robots-about-web",
          "page-robots-pencils-testing-user-needs-oct23-robots-sprint-web"
        ]
      },
      {
        "type": "local connection",
        "claim": "The company lists Calgary among its locations. Its published service descriptions apply across the organization.",
        "status": "Scope of the Calgary connection",
        "kind": "stated",
        "sourceIds": [
          "page-robots-pencils-testing-user-needs-oct23-robots-about-web",
          "page-robots-pencils-testing-user-needs-oct23-robots-sprint-web"
        ]
      },
      {
        "type": "course fit",
        "claim": "CSE1120 · Structured Programming 2: selected outcomes 1, 1.9, 2, 3.1. Requirements, decision rules and tests. The company activity is an editorial application.",
        "status": "Editorial classroom application",
        "kind": "interpreted",
        "sourceIds": [
          "page-robots-pencils-testing-user-needs-oct23-course-cse1120"
        ]
      },
      {
        "type": "limits",
        "claim": "The school-booking task is an editorial teaching example, not a named client project. The company name does not establish physical robotics work. No private client data or claimed productivity result is used.",
        "status": "Teaching model and evidence limits",
        "kind": "interpreted",
        "sourceIds": [
          "page-robots-pencils-testing-user-needs-oct23-robots-about-web",
          "page-robots-pencils-testing-user-needs-oct23-robots-sprint-web"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-robots-pencils-testing-user-needs-oct23-robots-about-web",
        "label": "Robots & Pencils — company and locations",
        "url": "https://robotsandpencils.com/about/"
      },
      {
        "id": "page-robots-pencils-testing-user-needs-oct23-robots-sprint-web",
        "label": "Robots & Pencils — Sharpening Sprint",
        "url": "https://robotsandpencils.com/sharpening-sprint/"
      },
      {
        "id": "page-robots-pencils-testing-user-needs-oct23-course-cse1120",
        "label": "CSE1120 — Alberta curriculum reference",
        "url": "https://curriculum.learnalberta.ca/curriculum/en/pos/CTSCSE/CSE1120"
      },
      {
        "id": "page-robots-pencils-testing-user-needs-expansion-source-14",
        "label": "SAIT — Software Development",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/software-development"
      }
    ],
    "checkedOn": "2026-10-23"
  },
  "details": {
    "id": "robots-pencils-testing-user-needs-details",
    "exampleSlug": "robots-pencils-testing-user-needs",
    "organizationId": "robots-and-pencils",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "robots-pencils-testing-user-needs",
      "subtitle": "Robots & Pencils combines software engineering, design and strategy. Its services include clarifying use cases and assessing the data and operating conditions needed for an application.",
      "caption": "A classroom interpretation of sourced work.",
      "steps": [
        {
          "text": "Describe the task a user is trying to complete.",
          "kind": "interpreted",
          "sourceIds": [
            "oct23-robots-about-web",
            "oct23-robots-sprint-web",
            "oct23-course-cse1120"
          ]
        },
        {
          "text": "Translate the need into a small, observable requirement.",
          "kind": "interpreted",
          "sourceIds": [
            "oct23-robots-about-web",
            "oct23-robots-sprint-web",
            "oct23-course-cse1120"
          ]
        },
        {
          "text": "Build a prototype and test ordinary and exceptional inputs.",
          "kind": "interpreted",
          "sourceIds": [
            "oct23-robots-about-web",
            "oct23-robots-sprint-web",
            "oct23-course-cse1120"
          ]
        },
        {
          "text": "Use observations to revise the requirement or implementation.",
          "kind": "interpreted",
          "sourceIds": [
            "oct23-robots-about-web",
            "oct23-robots-sprint-web",
            "oct23-course-cse1120"
          ]
        }
      ],
      "diagramAlt": "Conceptual teaching illustration: User task sketch → simple paper interface → three test inputs including a missing field → revised interface. A feedback arrow returns to the initial task.",
      "diagramProvenance": "Fictional graphic-novel teaching illustration; not company equipment or measured results. Prompts and review: design/example-expansion-2026-10-23/.",
      "discussion": "When a user cannot complete a task, how would you decide whether the problem is the code, the interface or the requirement?"
    },
    "roleIds": [
      "software-data"
    ],
    "pathwayIds": [
      "route-software"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-23"
  },
  "organization": {
    "id": "robots-and-pencils",
    "name": "Robots & Pencils",
    "tagline": "How does a team decide whether an app solves the problem it was built for?",
    "description": {
      "text": "Robots & Pencils combines software engineering, design and strategy. Its services include clarifying use cases and assessing the data and operating conditions needed for an application.",
      "kind": "stated",
      "sourceIds": [
        "oct23-robots-about-web",
        "oct23-robots-sprint-web"
      ]
    },
    "problem": {
      "text": "How does a team decide whether an app solves the problem it was built for?",
      "kind": "interpreted",
      "sourceIds": [
        "oct23-robots-about-web",
        "oct23-robots-sprint-web"
      ]
    },
    "offering": {
      "text": "Robots & Pencils combines software engineering, design and strategy. Its services include clarifying use cases and assessing the data and operating conditions needed for an application.",
      "kind": "stated",
      "sourceIds": [
        "oct23-robots-about-web",
        "oct23-robots-sprint-web"
      ]
    },
    "beneficiaries": {
      "text": "People and organizations using the services described in the cited company sources.",
      "kind": "interpreted",
      "sourceIds": [
        "oct23-robots-about-web",
        "oct23-robots-sprint-web"
      ]
    },
    "headquarters": {
      "text": "Headquarters has not been separately verified for this classroom example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "The company lists Calgary among its locations. Its published service descriptions apply across the organization.",
      "kind": "stated",
      "sourceIds": [
        "oct23-robots-about-web",
        "oct23-robots-sprint-web"
      ]
    },
    "websiteSourceId": "oct23-robots-about-web",
    "checkedOn": "2026-10-23",
    "logo": {
      "src": "/images/logos/robots-and-pencils.png",
      "width": 264,
      "height": 109,
      "onDark": true,
      "sourceUrl": "https://robotsandpencils.com/wp-content/uploads/2025/07/footer-logo.svg",
      "retrieved": "2026-10-23",
      "alt": "Robots & Pencils logo"
    }
  },
  "organizationRoles": [
    {
      "organizationId": "robots-and-pencils",
      "roleId": "software-data",
      "establishes": "related-work",
      "label": "Turn a user need into observable behaviour, then test whether the application delivers it.",
      "location": "The company lists Calgary among its locations. Its published service descriptions apply across the organization.",
      "kind": "interpreted",
      "sourceIds": [
        "oct23-robots-about-web",
        "oct23-robots-sprint-web"
      ],
      "checkedOn": "2026-10-23"
    }
  ],
  "jobs": [],
  "sources": [],
  "diagram": {
    "image": "/images/story-diagrams/robots-pencils-testing-user-needs-graphic-novel.webp",
    "heading": "How does a team decide whether an app solves the problem it was built for?",
    "steps": [
      "Describe the task a user is trying to complete.",
      "Translate the need into a small, observable requirement.",
      "Build a prototype and test ordinary and exceptional inputs.",
      "Use observations to revise the requirement or implementation."
    ],
    "note": "The school-booking task is an editorial teaching example, not a named client project. The company name does not establish physical robotics work. No private client data or claimed productivity result is used."
  },
  "unitLinks": [
    {
      "unitId": "cse1120-focus",
      "why": "CSE1120 · Structured Programming 2: selected outcomes 1, 1.9, 2, 3.1. Requirements, decision rules and tests. The company activity is an editorial application."
    }
  ]
} satisfies ExampleRecord;
