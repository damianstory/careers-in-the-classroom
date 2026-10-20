import type { ExampleRecord } from "../types";

export default {
  "addedOn": "2026-10-20",
  "example": {
    "slug": "clio-linked-client-records",
    "org": "Clio",
    "discipline": "Technology",
    "question": "How can software keep the right client, matter and document connected?",
    "work": "Clio makes legal-practice software and lists a Calgary careers hub.",
    "localShort": "Clio identifies Calgary as a careers hub that includes engineering and data work.",
    "calgary": "Clio identifies Calgary as a careers hub that includes engineering and data work.",
    "site": "Company presence and company-wide work are independent claims. Do not present every role or project as Calgary-based.",
    "localSourceIds": [
      "page-clio-linked-client-records-oct20-clio-source-1",
      "page-clio-linked-client-records-oct20-clio-source-2",
      "page-clio-linked-client-records-oct20-clio-source-3"
    ],
    "explain": "Build three small fictional tables for clients, matters and documents. Add a second matter for one client, then explain why copying the client’s address into every document row creates problems.",
    "prompt": "When should two records share a link instead of duplicating the same information?",
    "conversation": "When should two records share a link instead of duplicating the same information?",
    "mindset": "The relational schema is our teaching model, not Clio’s database design. Use invented identities and documents. INF2070 expects prior flat-file database understanding despite having no formal prerequisite.",
    "courses": [
      {
        "course": "INF2070 · Database 2",
        "topic": "1.1; 1.2; 1.4; 2.4"
      }
    ],
    "courseFitSourceIds": [
      "page-clio-linked-client-records-oct20-curriculum-6"
    ],
    "roles": [
      {
        "title": "Software and data systems",
        "note": "Model and test relationships among clients, matters and documents.",
        "evidence": "Related work area inferred from documented organization work; not a confirmed job title or current vacancy.",
        "kind": "interpreted",
        "sourceIds": [
          "page-clio-linked-client-records-oct20-clio-source-1",
          "page-clio-linked-client-records-oct20-clio-source-2",
          "page-clio-linked-client-records-oct20-clio-source-3"
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
          "page-clio-linked-client-records-oct20-pathway-software"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "Clio makes legal-practice software and lists a Calgary careers hub.",
        "status": "Documented organization work",
        "kind": "stated",
        "sourceIds": [
          "page-clio-linked-client-records-oct20-clio-source-1",
          "page-clio-linked-client-records-oct20-clio-source-2",
          "page-clio-linked-client-records-oct20-clio-source-3"
        ]
      },
      {
        "type": "local connection",
        "claim": "Clio identifies Calgary as a careers hub that includes engineering and data work.",
        "status": "Calgary connection checked separately from company-wide work",
        "kind": "stated",
        "sourceIds": [
          "page-clio-linked-client-records-oct20-clio-source-1",
          "page-clio-linked-client-records-oct20-clio-source-2",
          "page-clio-linked-client-records-oct20-clio-source-3"
        ]
      },
      {
        "type": "course fit",
        "claim": "INF2070 · Database 2 — 1.1; 1.2; 1.4; 2.4. The relational schema is our teaching model, not Clio’s database design. Use invented identities and documents. INF2070 expects prior flat-file database understanding despite having no formal prerequisite.",
        "status": "Verified curriculum anchor; classroom application is editorial",
        "kind": "interpreted",
        "sourceIds": [
          "page-clio-linked-client-records-oct20-curriculum-6"
        ]
      },
      {
        "type": "limits",
        "claim": "The relational schema is our teaching model, not Clio’s database design. Use invented identities and documents. INF2070 expects prior flat-file database understanding despite having no formal prerequisite. Company presence and company-wide work are independent claims. Do not present every role or project as Calgary-based.",
        "status": "Scope of the classroom model",
        "kind": "interpreted",
        "sourceIds": [
          "page-clio-linked-client-records-oct20-clio-source-1",
          "page-clio-linked-client-records-oct20-clio-source-2",
          "page-clio-linked-client-records-oct20-clio-source-3",
          "page-clio-linked-client-records-oct20-curriculum-6"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-clio-linked-client-records-oct20-clio-source-1",
        "label": "www.clio.com — calgary",
        "url": "https://www.clio.com/ca/about/careers/calgary/"
      },
      {
        "id": "page-clio-linked-client-records-oct20-clio-source-2",
        "label": "docs.developers.clio.com — custom fields",
        "url": "https://docs.developers.clio.com/guides/clio-manage/custom-fields/"
      },
      {
        "id": "page-clio-linked-client-records-oct20-clio-source-3",
        "label": "docs.developers.clio.com — paging",
        "url": "https://docs.developers.clio.com/api-docs/paging/"
      },
      {
        "id": "page-clio-linked-client-records-oct20-curriculum-6",
        "label": "Alberta curriculum — INF2070",
        "url": "https://curriculum.learnalberta.ca/curriculum/en/pos/CTSINF/INF2070"
      },
      {
        "id": "page-clio-linked-client-records-oct20-pathway-software",
        "label": "SAIT — Software Development diploma",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/software-development"
      }
    ],
    "checkedOn": "2026-10-20",
    "detailsId": "clio-linked-client-records-details"
  },
  "details": {
    "id": "clio-linked-client-records-details",
    "exampleSlug": "clio-linked-client-records",
    "organizationId": "clio",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "clio-linked-client-records",
      "subtitle": "A document is easier to find when its relationships are stored consistently.",
      "caption": "A document is easier to find when its relationships are stored consistently.",
      "steps": [
        {
          "text": "Identify the records: distinguish a client, a matter and a document.",
          "kind": "interpreted",
          "sourceIds": [
            "oct20-clio-source-1",
            "oct20-clio-source-2",
            "oct20-clio-source-3",
            "oct20-curriculum-6"
          ]
        },
        {
          "text": "Give each record an identity: stable keys avoid relying only on similar-looking names.",
          "kind": "interpreted",
          "sourceIds": [
            "oct20-clio-source-1",
            "oct20-clio-source-2",
            "oct20-clio-source-3",
            "oct20-curriculum-6"
          ]
        },
        {
          "text": "Connect records: relationships associate each document with the relevant matter and client.",
          "kind": "interpreted",
          "sourceIds": [
            "oct20-clio-source-1",
            "oct20-clio-source-2",
            "oct20-clio-source-3",
            "oct20-curriculum-6"
          ]
        },
        {
          "text": "Check the result: test that updates and searches return the intended information.",
          "kind": "interpreted",
          "sourceIds": [
            "oct20-clio-source-1",
            "oct20-clio-source-2",
            "oct20-clio-source-3",
            "oct20-curriculum-6"
          ]
        }
      ],
      "diagramAlt": "Client table → matter table → document table with primary and foreign-key arrows. Label it fictional classroom schema, with no real legal records.",
      "diagramProvenance": "Generated fictional teaching illustration; editorial simplification of cited work. Prompts, originals and review: design/example-expansion-2026-10-20/.",
      "discussion": "When should two records share a link instead of duplicating the same information?"
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
    "id": "clio",
    "name": "Clio",
    "tagline": "A document is easier to find when its relationships are stored consistently.",
    "description": {
      "text": "Clio makes legal-practice software and lists a Calgary careers hub.",
      "kind": "stated",
      "sourceIds": [
        "oct20-clio-source-1",
        "oct20-clio-source-2",
        "oct20-clio-source-3"
      ]
    },
    "problem": {
      "text": "How can software keep the right client, matter and document connected?",
      "kind": "interpreted",
      "sourceIds": [
        "oct20-clio-source-1",
        "oct20-clio-source-2",
        "oct20-clio-source-3"
      ]
    },
    "offering": {
      "text": "Clio makes legal-practice software and lists a Calgary careers hub.",
      "kind": "stated",
      "sourceIds": [
        "oct20-clio-source-1",
        "oct20-clio-source-2",
        "oct20-clio-source-3"
      ]
    },
    "beneficiaries": {
      "text": "Legal teams organizing client and matter information.",
      "kind": "interpreted",
      "sourceIds": [
        "oct20-clio-source-1",
        "oct20-clio-source-2",
        "oct20-clio-source-3"
      ]
    },
    "headquarters": {
      "text": "Headquarters not separately verified for this example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "Clio identifies Calgary as a careers hub that includes engineering and data work.",
      "kind": "stated",
      "sourceIds": [
        "oct20-clio-source-1",
        "oct20-clio-source-2",
        "oct20-clio-source-3"
      ]
    },
    "websiteSourceId": "oct20-clio-source-1",
    "checkedOn": "2026-10-20",
    "careersSourceId": "oct20-clio-source-1"
  },
  "organizationRoles": [
    {
      "organizationId": "clio",
      "roleId": "work-software",
      "establishes": "work-area",
      "label": "Related work area: Model and test relationships among clients, matters and documents.",
      "location": "Clio identifies Calgary as a careers hub that includes engineering and data work. Company presence and company-wide work are independent claims. Do not present every role or project as Calgary-based.",
      "kind": "interpreted",
      "sourceIds": [
        "oct20-clio-source-1",
        "oct20-clio-source-2",
        "oct20-clio-source-3"
      ],
      "checkedOn": "2026-10-20"
    }
  ],
  "jobs": [],
  "sources": [
    {
      "id": "oct20-clio-source-1",
      "label": "www.clio.com — calgary",
      "url": "https://www.clio.com/ca/about/careers/calgary/",
      "checkedOn": "2026-10-20"
    },
    {
      "id": "oct20-clio-source-2",
      "label": "docs.developers.clio.com — custom fields",
      "url": "https://docs.developers.clio.com/guides/clio-manage/custom-fields/",
      "checkedOn": "2026-10-20"
    },
    {
      "id": "oct20-clio-source-3",
      "label": "docs.developers.clio.com — paging",
      "url": "https://docs.developers.clio.com/api-docs/paging/",
      "checkedOn": "2026-10-20"
    }
  ],
  "diagram": {
    "image": "/images/story-diagrams/clio-linked-client-records-graphic-novel.webp",
    "heading": "A document is easier to find when its relationships are stored consistently.",
    "steps": [
      "Identify the records: distinguish a client, a matter and a document.",
      "Give each record an identity: stable keys avoid relying only on similar-looking names.",
      "Connect records: relationships associate each document with the relevant matter and client.",
      "Check the result: test that updates and searches return the intended information."
    ],
    "note": "The relational schema is our teaching model, not Clio’s database design. Use invented identities and documents. INF2070 expects prior flat-file database understanding despite having no formal prerequisite."
  },
  "unitLinks": [
    {
      "unitId": "inf2070-focus",
      "why": "INF2070 · Database 2 — 1.1; 1.2; 1.4; 2.4. The relational schema is our teaching model, not Clio’s database design. Use invented identities and documents. INF2070 expects prior flat-file database understanding despite having no formal prerequisite."
    }
  ]
} satisfies ExampleRecord;
