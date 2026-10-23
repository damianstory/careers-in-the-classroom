import type { ExampleRecord } from "../types";

export default {
  "addedOn": "2026-10-23",
  "example": {
    "slug": "dakota-checking-data-joins",
    "detailsId": "dakota-checking-data-joins-details",
    "org": "Dakota Analytics",
    "discipline": "Technology",
    "question": "Why can joining two useful datasets still produce a wrong answer?",
    "work": "Dakota Analytics combines data for reporting and dashboards. Its Well Master Menu brings well information together, while its lease-operating summary connects financial and production information.",
    "localShort": "Dakota Analytics lists a Calgary office on 4th Avenue SW.",
    "calgary": "Dakota Analytics lists a Calgary office on 4th Avenue SW.",
    "site": "A classroom model based on documented work; the activity uses fictional examples.",
    "localSourceIds": [
      "page-dakota-checking-data-joins-oct23-cgy-202-0",
      "page-dakota-checking-data-joins-oct23-cgy-202-1",
      "page-dakota-checking-data-joins-oct23-dakota-services"
    ],
    "explain": "Create fictional Assets, Daily Output and Monthly Costs tables. Join all three on Asset ID and notice how a monthly cost can be repeated for every daily-output row. Repair the calculation by aggregating to a common period first, then explain why correct individual values can still produce a misleading total.",
    "prompt": "How can a dashboard show the wrong answer even when every source number is correct?",
    "conversation": "How can a dashboard show the wrong answer even when every source number is correct?",
    "mindset": "The tables and join error are invented teaching materials. They do not describe an error in Dakota’s products or expose a client database. A shared identifier is useful only when the meaning and granularity of the records are understood.",
    "courses": [
      {
        "course": "INF2070 · Database 2",
        "topic": "Keys, related tables and validating imported data"
      }
    ],
    "courseFitSourceIds": [
      "page-dakota-checking-data-joins-oct23-course-inf2070"
    ],
    "roles": [
      {
        "title": "Software and data",
        "note": "Choose keys, align definitions and check the result when combining records from different systems.",
        "evidence": "Related work interpreted from the cited source; not a verified job title or vacancy.",
        "kind": "interpreted",
        "sourceIds": [
          "page-dakota-checking-data-joins-oct23-cgy-202-0",
          "page-dakota-checking-data-joins-oct23-cgy-202-1",
          "page-dakota-checking-data-joins-oct23-dakota-services"
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
          "page-dakota-checking-data-joins-expansion-source-14"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "Dakota Analytics combines data for reporting and dashboards. Its Well Master Menu brings well information together, while its lease-operating summary connects financial and production information.",
        "status": "Documented organization work",
        "kind": "stated",
        "sourceIds": [
          "page-dakota-checking-data-joins-oct23-cgy-202-0",
          "page-dakota-checking-data-joins-oct23-cgy-202-1",
          "page-dakota-checking-data-joins-oct23-dakota-services"
        ]
      },
      {
        "type": "local connection",
        "claim": "Dakota Analytics lists a Calgary office on 4th Avenue SW.",
        "status": "Scope of the Calgary connection",
        "kind": "stated",
        "sourceIds": [
          "page-dakota-checking-data-joins-oct23-cgy-202-0",
          "page-dakota-checking-data-joins-oct23-cgy-202-1",
          "page-dakota-checking-data-joins-oct23-dakota-services"
        ]
      },
      {
        "type": "course fit",
        "claim": "INF2070 · Database 2: selected outcomes 1.1, 1.2, 1.4, 2.4, 2.8, 3.4. Keys, related tables and validating imported data. The company activity is an editorial application.",
        "status": "Editorial classroom application",
        "kind": "interpreted",
        "sourceIds": [
          "page-dakota-checking-data-joins-oct23-course-inf2070"
        ]
      },
      {
        "type": "limits",
        "claim": "The tables and join error are invented teaching materials. They do not describe an error in Dakota’s products or expose a client database. A shared identifier is useful only when the meaning and granularity of the records are understood.",
        "status": "Teaching model and evidence limits",
        "kind": "interpreted",
        "sourceIds": [
          "page-dakota-checking-data-joins-oct23-cgy-202-0",
          "page-dakota-checking-data-joins-oct23-cgy-202-1",
          "page-dakota-checking-data-joins-oct23-dakota-services"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-dakota-checking-data-joins-oct23-cgy-202-0",
        "label": "Home - dakotaanalytics",
        "url": "https://dakotaanalytics.com/"
      },
      {
        "id": "page-dakota-checking-data-joins-oct23-cgy-202-1",
        "label": "Contact Us - dakotaanalytics",
        "url": "https://dakotaanalytics.com/contact-us/"
      },
      {
        "id": "page-dakota-checking-data-joins-oct23-dakota-services",
        "label": "Services - dakotaanalytics",
        "url": "https://dakotaanalytics.com/services/"
      },
      {
        "id": "page-dakota-checking-data-joins-oct23-course-inf2070",
        "label": "INF2070 — Alberta curriculum reference",
        "url": "https://curriculum.learnalberta.ca/curriculum/en/pos/CTSINF/INF2070"
      },
      {
        "id": "page-dakota-checking-data-joins-expansion-source-14",
        "label": "SAIT — Software Development",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/software-development"
      }
    ],
    "checkedOn": "2026-10-23"
  },
  "details": {
    "id": "dakota-checking-data-joins-details",
    "exampleSlug": "dakota-checking-data-joins",
    "organizationId": "dakota-analytics",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "dakota-checking-data-joins",
      "subtitle": "Dakota Analytics combines data for reporting and dashboards. Its Well Master Menu brings well information together, while its lease-operating summary connects financial and production information.",
      "caption": "A classroom interpretation of sourced work.",
      "steps": [
        {
          "text": "Identify what one row represents in each source table.",
          "kind": "interpreted",
          "sourceIds": [
            "oct23-cgy-202-0",
            "oct23-cgy-202-1",
            "oct23-dakota-services",
            "oct23-course-inf2070"
          ]
        },
        {
          "text": "Choose a key and check whether it is unique where expected.",
          "kind": "interpreted",
          "sourceIds": [
            "oct23-cgy-202-0",
            "oct23-cgy-202-1",
            "oct23-dakota-services",
            "oct23-course-inf2070"
          ]
        },
        {
          "text": "Join related records while preserving unmatched or duplicated cases for review.",
          "kind": "interpreted",
          "sourceIds": [
            "oct23-cgy-202-0",
            "oct23-cgy-202-1",
            "oct23-dakota-services",
            "oct23-course-inf2070"
          ]
        },
        {
          "text": "Compare counts and totals before using the result in a dashboard.",
          "kind": "interpreted",
          "sourceIds": [
            "oct23-cgy-202-0",
            "oct23-cgy-202-1",
            "oct23-dakota-services",
            "oct23-course-inf2070"
          ]
        }
      ],
      "diagramAlt": "Conceptual teaching illustration: Two small tables at different time scales → key comparison → grouped monthly records → corrected chart. A duplicate-row branch is visibly set aside for checking.",
      "diagramProvenance": "Fictional graphic-novel teaching illustration; not company equipment or measured results. Prompts and review: design/example-expansion-2026-10-23/.",
      "discussion": "How can a dashboard show the wrong answer even when every source number is correct?"
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
    "id": "dakota-analytics",
    "name": "Dakota Analytics",
    "tagline": "Why can joining two useful datasets still produce a wrong answer?",
    "description": {
      "text": "Dakota Analytics combines data for reporting and dashboards. Its Well Master Menu brings well information together, while its lease-operating summary connects financial and production information.",
      "kind": "stated",
      "sourceIds": [
        "oct23-cgy-202-0",
        "oct23-cgy-202-1",
        "oct23-dakota-services"
      ]
    },
    "problem": {
      "text": "Why can joining two useful datasets still produce a wrong answer?",
      "kind": "interpreted",
      "sourceIds": [
        "oct23-cgy-202-0",
        "oct23-cgy-202-1",
        "oct23-dakota-services"
      ]
    },
    "offering": {
      "text": "Dakota Analytics combines data for reporting and dashboards. Its Well Master Menu brings well information together, while its lease-operating summary connects financial and production information.",
      "kind": "stated",
      "sourceIds": [
        "oct23-cgy-202-0",
        "oct23-cgy-202-1",
        "oct23-dakota-services"
      ]
    },
    "beneficiaries": {
      "text": "People and organizations using the services described in the cited company sources.",
      "kind": "interpreted",
      "sourceIds": [
        "oct23-cgy-202-0",
        "oct23-cgy-202-1",
        "oct23-dakota-services"
      ]
    },
    "headquarters": {
      "text": "Headquarters has not been separately verified for this classroom example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "Dakota Analytics lists a Calgary office on 4th Avenue SW.",
      "kind": "stated",
      "sourceIds": [
        "oct23-cgy-202-0",
        "oct23-cgy-202-1",
        "oct23-dakota-services"
      ]
    },
    "websiteSourceId": "oct23-cgy-202-0",
    "checkedOn": "2026-10-23",
    "logo": {
      "src": "/images/logos/dakota-analytics.png",
      "width": 400,
      "height": 134,
      "onDark": false,
      "sourceUrl": "https://dakotaanalytics.com/wp-content/uploads/2025/04/Dakota-Analytics-Logo-Horizontal.svg",
      "retrieved": "2026-10-23",
      "alt": "Dakota Analytics logo"
    }
  },
  "organizationRoles": [
    {
      "organizationId": "dakota-analytics",
      "roleId": "software-data",
      "establishes": "related-work",
      "label": "Choose keys, align definitions and check the result when combining records from different systems.",
      "location": "Dakota Analytics lists a Calgary office on 4th Avenue SW.",
      "kind": "interpreted",
      "sourceIds": [
        "oct23-cgy-202-0",
        "oct23-cgy-202-1",
        "oct23-dakota-services"
      ],
      "checkedOn": "2026-10-23"
    }
  ],
  "jobs": [],
  "sources": [],
  "diagram": {
    "image": "/images/story-diagrams/dakota-checking-data-joins-graphic-novel.webp",
    "heading": "Why can joining two useful datasets still produce a wrong answer?",
    "steps": [
      "Identify what one row represents in each source table.",
      "Choose a key and check whether it is unique where expected.",
      "Join related records while preserving unmatched or duplicated cases for review.",
      "Compare counts and totals before using the result in a dashboard."
    ],
    "note": "The tables and join error are invented teaching materials. They do not describe an error in Dakota’s products or expose a client database. A shared identifier is useful only when the meaning and granularity of the records are understood."
  },
  "unitLinks": [
    {
      "unitId": "inf2070-focus",
      "why": "INF2070 · Database 2: selected outcomes 1.1, 1.2, 1.4, 2.4, 2.8, 3.4. Keys, related tables and validating imported data. The company activity is an editorial application."
    }
  ]
} satisfies ExampleRecord;
