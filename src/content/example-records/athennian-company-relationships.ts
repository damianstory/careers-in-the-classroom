import type { ExampleRecord } from "../types";

export default {
  "addedOn": "2026-10-20",
  "example": {
    "slug": "athennian-company-relationships",
    "org": "Athennian",
    "discipline": "Technology",
    "question": "How can changing one company record update the relationships that depend on it?",
    "work": "Athennian provides entity-management software and has Calgary and Toronto office hubs.",
    "localShort": "Athennian lists office hubs in Calgary and Toronto alongside a distributed team.",
    "calgary": "Athennian lists office hubs in Calgary and Toronto alongside a distributed team.",
    "site": "Company presence and company-wide work are independent claims. Do not present every role or project as Calgary-based.",
    "localSourceIds": [
      "page-athennian-company-relationships-oct20-athennian-source-1",
      "page-athennian-company-relationships-oct20-athennian-source-2",
      "page-athennian-company-relationships-oct20-athennian-source-3"
    ],
    "explain": "Design fictional Person, Company and Appointment tables. End one appointment without deleting the person or their other appointment.",
    "prompt": "Why can deleting an entire record be the wrong way to describe a relationship that has ended?",
    "conversation": "Why can deleting an entire record be the wrong way to describe a relationship that has ended?",
    "mindset": "The schema is an educational interpretation, not Athennian’s internal architecture or legal advice. Use invented people and organizations. Software/database preparation replaces the unrelated geomatics route.",
    "courses": [
      {
        "course": "INF2070 · Database 2",
        "topic": "1.1; 1.2; 1.4; 2.4"
      }
    ],
    "courseFitSourceIds": [
      "page-athennian-company-relationships-oct20-curriculum-6"
    ],
    "roles": [
      {
        "title": "Software and data systems",
        "note": "Maintain consistent relationships among organization and appointment records.",
        "evidence": "Related work area inferred from documented organization work; not a confirmed job title or current vacancy.",
        "kind": "interpreted",
        "sourceIds": [
          "page-athennian-company-relationships-oct20-athennian-source-1",
          "page-athennian-company-relationships-oct20-athennian-source-2",
          "page-athennian-company-relationships-oct20-athennian-source-3"
        ]
      }
    ],
    "rolesNote": "No new live job posting proposed. Role links describe work areas, not vacancies.",
    "pathways": [
      {
        "kindLabel": "Related education",
        "label": "SAIT — Software Development diploma",
        "note": "Programming, software testing and data-system foundations. A concrete technical entry route; specific employers set their own requirements.",
        "kind": "interpreted",
        "sourceIds": [
          "page-athennian-company-relationships-oct20-pathway-software"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "Athennian provides entity-management software and has Calgary and Toronto office hubs.",
        "status": "Documented organization work",
        "kind": "stated",
        "sourceIds": [
          "page-athennian-company-relationships-oct20-athennian-source-1",
          "page-athennian-company-relationships-oct20-athennian-source-2",
          "page-athennian-company-relationships-oct20-athennian-source-3"
        ]
      },
      {
        "type": "local connection",
        "claim": "Athennian lists office hubs in Calgary and Toronto alongside a distributed team.",
        "status": "Calgary connection checked separately from company-wide work",
        "kind": "stated",
        "sourceIds": [
          "page-athennian-company-relationships-oct20-athennian-source-1",
          "page-athennian-company-relationships-oct20-athennian-source-2",
          "page-athennian-company-relationships-oct20-athennian-source-3"
        ]
      },
      {
        "type": "course fit",
        "claim": "INF2070 · Database 2 — 1.1; 1.2; 1.4; 2.4. The schema is an educational interpretation, not Athennian’s internal architecture or legal advice. Use invented people and organizations. Software/database preparation replaces the unrelated geomatics route.",
        "status": "Verified curriculum anchor; classroom application is editorial",
        "kind": "interpreted",
        "sourceIds": [
          "page-athennian-company-relationships-oct20-curriculum-6"
        ]
      },
      {
        "type": "limits",
        "claim": "The schema is an educational interpretation, not Athennian’s internal architecture or legal advice. Use invented people and organizations. Software/database preparation replaces the unrelated geomatics route. Company presence and company-wide work are independent claims. Do not present every role or project as Calgary-based.",
        "status": "Scope of the classroom model",
        "kind": "interpreted",
        "sourceIds": [
          "page-athennian-company-relationships-oct20-athennian-source-1",
          "page-athennian-company-relationships-oct20-athennian-source-2",
          "page-athennian-company-relationships-oct20-athennian-source-3",
          "page-athennian-company-relationships-oct20-curriculum-6"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-athennian-company-relationships-oct20-athennian-source-1",
        "label": "www.athennian.com — official website",
        "url": "https://www.athennian.com/"
      },
      {
        "id": "page-athennian-company-relationships-oct20-athennian-source-2",
        "label": "www.athennian.com — careers",
        "url": "https://www.athennian.com/careers"
      },
      {
        "id": "page-athennian-company-relationships-oct20-athennian-source-3",
        "label": "help.athennian.com — 28159196895387 Entity Creation Management",
        "url": "https://help.athennian.com/hc/en-us/sections/28159196895387-Entity-Creation-Management"
      },
      {
        "id": "page-athennian-company-relationships-oct20-curriculum-6",
        "label": "Alberta curriculum — INF2070",
        "url": "https://curriculum.learnalberta.ca/curriculum/en/pos/CTSINF/INF2070"
      },
      {
        "id": "page-athennian-company-relationships-oct20-pathway-software",
        "label": "SAIT — Software Development diploma",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/software-development"
      }
    ],
    "checkedOn": "2026-10-20",
    "detailsId": "athennian-company-relationships-details"
  },
  "details": {
    "id": "athennian-company-relationships-details",
    "exampleSlug": "athennian-company-relationships",
    "organizationId": "athennian",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "athennian-company-relationships",
      "subtitle": "A change to one record can matter to many people and organizations connected to it.",
      "caption": "A change to one record can matter to many people and organizations connected to it.",
      "steps": [
        {
          "text": "Distinguish entities: people, organizations and appointments are different record types.",
          "kind": "interpreted",
          "sourceIds": [
            "oct20-athennian-source-1",
            "oct20-athennian-source-2",
            "oct20-athennian-source-3",
            "oct20-curriculum-6"
          ]
        },
        {
          "text": "Record relationships: a person can hold more than one appointment and an organization can have several connections.",
          "kind": "interpreted",
          "sourceIds": [
            "oct20-athennian-source-1",
            "oct20-athennian-source-2",
            "oct20-athennian-source-3",
            "oct20-curriculum-6"
          ]
        },
        {
          "text": "Update carefully: stable identifiers help preserve the intended relationships.",
          "kind": "interpreted",
          "sourceIds": [
            "oct20-athennian-source-1",
            "oct20-athennian-source-2",
            "oct20-athennian-source-3",
            "oct20-curriculum-6"
          ]
        },
        {
          "text": "Review the history: changes need context so users can understand what is current.",
          "kind": "interpreted",
          "sourceIds": [
            "oct20-athennian-source-1",
            "oct20-athennian-source-2",
            "oct20-athennian-source-3",
            "oct20-curriculum-6"
          ]
        }
      ],
      "diagramAlt": "Three linked tables with an appointment start and end date; show one relationship ending while the person record remains.",
      "diagramProvenance": "Generated fictional teaching illustration; editorial simplification of cited work. Prompts, originals and review: design/example-expansion-2026-10-20/.",
      "discussion": "Why can deleting an entire record be the wrong way to describe a relationship that has ended?"
    },
    "roleIds": [
      "work-software"
    ],
    "pathwayIds": [
      "oct17-route-sait-software-development"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-20"
  },
  "organization": {
    "id": "athennian",
    "name": "Athennian",
    "tagline": "A change to one record can matter to many people and organizations connected to it.",
    "description": {
      "text": "Athennian provides entity-management software and has Calgary and Toronto office hubs.",
      "kind": "stated",
      "sourceIds": [
        "oct20-athennian-source-1",
        "oct20-athennian-source-2",
        "oct20-athennian-source-3"
      ]
    },
    "problem": {
      "text": "How can changing one company record update the relationships that depend on it?",
      "kind": "interpreted",
      "sourceIds": [
        "oct20-athennian-source-1",
        "oct20-athennian-source-2",
        "oct20-athennian-source-3"
      ]
    },
    "offering": {
      "text": "Athennian provides entity-management software and has Calgary and Toronto office hubs.",
      "kind": "stated",
      "sourceIds": [
        "oct20-athennian-source-1",
        "oct20-athennian-source-2",
        "oct20-athennian-source-3"
      ]
    },
    "beneficiaries": {
      "text": "Legal, finance and governance teams maintaining organization records.",
      "kind": "interpreted",
      "sourceIds": [
        "oct20-athennian-source-1",
        "oct20-athennian-source-2",
        "oct20-athennian-source-3"
      ]
    },
    "headquarters": {
      "text": "Headquarters not separately verified for this example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "Athennian lists office hubs in Calgary and Toronto alongside a distributed team.",
      "kind": "stated",
      "sourceIds": [
        "oct20-athennian-source-1",
        "oct20-athennian-source-2",
        "oct20-athennian-source-3"
      ]
    },
    "websiteSourceId": "oct20-athennian-source-1",
    "checkedOn": "2026-10-20",
    "careersSourceId": "oct20-athennian-source-2"
  },
  "organizationRoles": [
    {
      "organizationId": "athennian",
      "roleId": "work-software",
      "establishes": "work-area",
      "label": "Related work area: Maintain consistent relationships among organization and appointment records.",
      "location": "Athennian lists office hubs in Calgary and Toronto alongside a distributed team. Company presence and company-wide work are independent claims. Do not present every role or project as Calgary-based.",
      "kind": "interpreted",
      "sourceIds": [
        "oct20-athennian-source-1",
        "oct20-athennian-source-2",
        "oct20-athennian-source-3"
      ],
      "checkedOn": "2026-10-20"
    }
  ],
  "jobs": [],
  "sources": [
    {
      "id": "oct20-athennian-source-1",
      "label": "www.athennian.com — official website",
      "url": "https://www.athennian.com/",
      "checkedOn": "2026-10-20"
    },
    {
      "id": "oct20-athennian-source-2",
      "label": "www.athennian.com — careers",
      "url": "https://www.athennian.com/careers",
      "checkedOn": "2026-10-20"
    },
    {
      "id": "oct20-athennian-source-3",
      "label": "help.athennian.com — 28159196895387 Entity Creation Management",
      "url": "https://help.athennian.com/hc/en-us/sections/28159196895387-Entity-Creation-Management",
      "checkedOn": "2026-10-20"
    }
  ],
  "diagram": {
    "image": "/images/story-diagrams/athennian-company-relationships-graphic-novel.webp",
    "heading": "A change to one record can matter to many people and organizations connected to it.",
    "steps": [
      "Distinguish entities: people, organizations and appointments are different record types.",
      "Record relationships: a person can hold more than one appointment and an organization can have several connections.",
      "Update carefully: stable identifiers help preserve the intended relationships.",
      "Review the history: changes need context so users can understand what is current."
    ],
    "note": "The schema is an educational interpretation, not Athennian’s internal architecture or legal advice. Use invented people and organizations. Software/database preparation replaces the unrelated geomatics route."
  },
  "unitLinks": [
    {
      "unitId": "inf2070-focus",
      "why": "INF2070 · Database 2 — 1.1; 1.2; 1.4; 2.4. The schema is an educational interpretation, not Athennian’s internal architecture or legal advice. Use invented people and organizations. Software/database preparation replaces the unrelated geomatics route."
    }
  ]
} satisfies ExampleRecord;
