import type { ExampleRecord } from "../types";

export default {
  "addedOn": "2026-10-21",
  "example": {
    "slug": "atvenu-concert-inventory",
    "detailsId": "atvenu-concert-inventory-details",
    "org": "atVenu",
    "discipline": "Technology",
    "question": "How can a concert team know which shirt sizes are left at each stand?",
    "work": "atVenu builds commerce software for live events. Its merchandise tools track inventory by stand, item and size so teams can see what is available across an event.",
    "localShort": "The employer's own career page identifies Calgary as its technology and product hub, distinct from its California head office and UK locations.",
    "calgary": "The employer's own career page identifies Calgary as its technology and product hub, distinct from its California head office and UK locations.",
    "site": "Software-testing roles require separate evidence and are not included in this example.",
    "localSourceIds": [
      "page-atvenu-concert-inventory-oct21-source-041",
      "page-atvenu-concert-inventory-oct21-source-042"
    ],
    "explain": "Use fictional Stand, Product and StockMovement tables. Sell two medium shirts at one stand, transfer three from another and calculate both balances without double-counting.",
    "prompt": "Why might a company know its total inventory but still disappoint a customer at one stand?",
    "conversation": "Why might a company know its total inventory but still disappoint a customer at one stand?",
    "mindset": "This is an invented relational model. The employer's Potential Opportunities page is an expression of interest, not a specific current vacancy; a separate paid index query found no matching Calgary listings.",
    "courses": [
      {
        "course": "INF2070 · Database 2",
        "topic": "1.1; 1.2; 1.4; 3.4"
      }
    ],
    "courseFitSourceIds": [
      "page-atvenu-concert-inventory-oct21-shared-89"
    ],
    "roles": [
      {
        "title": "Software and data",
        "note": "Build and test records that keep item, size, stand and transaction details connected.",
        "evidence": "interpreted work connection from cited company services/projects, not a confirmed title or vacancy",
        "kind": "interpreted",
        "sourceIds": [
          "page-atvenu-concert-inventory-oct21-source-041",
          "page-atvenu-concert-inventory-oct21-source-042"
        ]
      }
    ],
    "rolesNote": "No current vacancy is asserted. This draft represents sourced work and interpreted occupations; an evergreen interest form is not an open role.",
    "pathways": [
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Software Development",
        "note": "Learn to design, test and build software across front-end and back-end systems. A related preparation route, not a verified employer requirement or hiring partnership. Check the provider for current admissions and intake details. Specialized work may require further training or professional registration.",
        "kind": "interpreted",
        "sourceIds": [
          "page-atvenu-concert-inventory-oct21-source-037"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "atVenu builds commerce software for live events. Its merchandise tools track inventory by stand, item and size so teams can see what is available across an event.",
        "status": "Documented organization work",
        "kind": "stated",
        "sourceIds": [
          "page-atvenu-concert-inventory-oct21-source-041",
          "page-atvenu-concert-inventory-oct21-source-042"
        ]
      },
      {
        "type": "local connection",
        "claim": "The employer's own career page identifies Calgary as its technology and product hub, distinct from its California head office and UK locations.",
        "status": "Calgary connection; scope retained",
        "kind": "stated",
        "sourceIds": [
          "page-atvenu-concert-inventory-oct21-source-041",
          "page-atvenu-concert-inventory-oct21-source-042"
        ]
      },
      {
        "type": "course fit",
        "claim": "INF2070 · Database 2 — 1.1; 1.2; 1.4; 3.4. The company application is an editorial classroom model.",
        "status": "Curriculum scope and editorial application",
        "kind": "interpreted",
        "sourceIds": [
          "page-atvenu-concert-inventory-oct21-shared-89"
        ]
      },
      {
        "type": "limits",
        "claim": "This is an invented relational model. The employer's Potential Opportunities page is an expression of interest, not a specific current vacancy; a separate paid index query found no matching Calgary listings. Software-testing roles require separate evidence and are not included in this example.",
        "status": "Teaching model and evidence limits",
        "kind": "interpreted",
        "sourceIds": [
          "page-atvenu-concert-inventory-oct21-source-041",
          "page-atvenu-concert-inventory-oct21-source-042"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-atvenu-concert-inventory-oct21-source-037",
        "label": "sait.ca — programs-and-courses — diplomas — software-development",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/software-development"
      },
      {
        "id": "page-atvenu-concert-inventory-oct21-source-041",
        "label": "atvenu.com — merchandise",
        "url": "https://www.atvenu.com/merchandise"
      },
      {
        "id": "page-atvenu-concert-inventory-oct21-source-042",
        "label": "atvenu.applytojob.com — apply — MhGv1daAzW — Potential-Opportunities",
        "url": "https://atvenu.applytojob.com/apply/MhGv1daAzW/Potential-Opportunities"
      },
      {
        "id": "page-atvenu-concert-inventory-oct21-shared-89",
        "label": "INF2070 · Database 2 — official curriculum reference",
        "url": "https://curriculum.learnalberta.ca/curriculum/en/pos/CTSINF/INF2070"
      }
    ],
    "checkedOn": "2026-10-21"
  },
  "details": {
    "id": "atvenu-concert-inventory-details",
    "exampleSlug": "atvenu-concert-inventory",
    "organizationId": "atvenu",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "atvenu-concert-inventory",
      "subtitle": "atVenu builds commerce software for live events. Its merchandise tools track inventory by stand, item and size so teams can see what is available across an event.",
      "caption": "A classroom interpretation of sourced work.",
      "steps": [
        {
          "text": "Identify each item and size and record its starting quantity at each stand.",
          "kind": "interpreted",
          "sourceIds": [
            "oct21-source-041",
            "oct21-source-042",
            "oct21-shared-89"
          ]
        },
        {
          "text": "Record sales and transfers against the correct item and location.",
          "kind": "interpreted",
          "sourceIds": [
            "oct21-source-041",
            "oct21-source-042",
            "oct21-shared-89"
          ]
        },
        {
          "text": "Update the remaining quantities and flag a stand running low.",
          "kind": "interpreted",
          "sourceIds": [
            "oct21-source-041",
            "oct21-source-042",
            "oct21-shared-89"
          ]
        },
        {
          "text": "Compare the records with physical counts and investigate differences.",
          "kind": "interpreted",
          "sourceIds": [
            "oct21-source-041",
            "oct21-source-042",
            "oct21-shared-89"
          ]
        }
      ],
      "diagramAlt": "Four-step teaching illustration: Starting stock → sale or transfer → updated stand balances → count and reconciliation.",
      "diagramProvenance": "Fictional graphic-novel teaching illustration; conceptual model, not measured company results. Prompts and review: design/example-expansion-2026-10-21/.",
      "discussion": "Why might a company know its total inventory but still disappoint a customer at one stand?"
    },
    "roleIds": [
      "software-data"
    ],
    "pathwayIds": [
      "route-software"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-21"
  },
  "organization": {
    "id": "atvenu",
    "name": "atVenu",
    "tagline": "How can a concert team know which shirt sizes are left at each stand?",
    "description": {
      "text": "atVenu builds commerce software for live events. Its merchandise tools track inventory by stand, item and size so teams can see what is available across an event.",
      "kind": "stated",
      "sourceIds": [
        "oct21-source-041",
        "oct21-source-042"
      ]
    },
    "problem": {
      "text": "How can a concert team know which shirt sizes are left at each stand?",
      "kind": "interpreted",
      "sourceIds": [
        "oct21-source-041",
        "oct21-source-042"
      ]
    },
    "offering": {
      "text": "atVenu builds commerce software for live events. Its merchandise tools track inventory by stand, item and size so teams can see what is available across an event.",
      "kind": "stated",
      "sourceIds": [
        "oct21-source-041",
        "oct21-source-042"
      ]
    },
    "beneficiaries": {
      "text": "People and teams using this work to make the decisions described in the example.",
      "kind": "interpreted",
      "sourceIds": [
        "oct21-source-041",
        "oct21-source-042"
      ]
    },
    "headquarters": {
      "text": "Headquarters not separately verified for this example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "The employer's own career page identifies Calgary as its technology and product hub, distinct from its California head office and UK locations.",
      "kind": "stated",
      "sourceIds": [
        "oct21-source-041",
        "oct21-source-042"
      ]
    },
    "websiteSourceId": "oct21-shared-92",
    "checkedOn": "2026-10-21",
    "logo": {
      "src": "/images/logos/atvenu.png",
      "alt": "atVenu logo",
      "width": 400,
      "height": 82,
      "onDark": true,
      "sourceUrl": "https://cdn.prod.website-files.com/6855cef9715504833fc4a2ea/6855d960644063a6f99a5bc5_Logo_White.png",
      "retrieved": "2026-10-21"
    }
  },
  "organizationRoles": [
    {
      "organizationId": "atvenu",
      "roleId": "software-data",
      "establishes": "related-work",
      "label": "Build and test records that keep item, size, stand and transaction details connected.",
      "location": "The employer's own career page identifies Calgary as its technology and product hub, distinct from its California head office and UK locations.",
      "kind": "interpreted",
      "sourceIds": [
        "oct21-source-041",
        "oct21-source-042"
      ],
      "checkedOn": "2026-10-21"
    }
  ],
  "jobs": [],
  "sources": [],
  "diagram": {
    "image": "/images/story-diagrams/atvenu-concert-inventory-graphic-novel.webp",
    "heading": "How can a concert team know which shirt sizes are left at each stand?",
    "steps": [
      "Identify each item and size and record its starting quantity at each stand.",
      "Record sales and transfers against the correct item and location.",
      "Update the remaining quantities and flag a stand running low.",
      "Compare the records with physical counts and investigate differences."
    ],
    "note": "This is an invented relational model. The employer's Potential Opportunities page is an expression of interest, not a specific current vacancy; a separate paid index query found no matching Calgary listings."
  },
  "unitLinks": [
    {
      "unitId": "inf2070-focus",
      "why": "INF2070 · Database 2 — 1.1; 1.2; 1.4; 3.4. The company application is an editorial classroom model."
    }
  ]
} satisfies ExampleRecord;
