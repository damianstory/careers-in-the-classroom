import type { ExampleRecord } from "../types";

export default {
  "addedOn": "2026-10-21",
  "example": {
    "slug": "aimsio-field-ticket-to-invoice",
    "detailsId": "aimsio-field-ticket-to-invoice-details",
    "org": "Aimsio",
    "discipline": "Technology",
    "question": "How can a field record become an invoice without being entered twice?",
    "work": "Aimsio builds software connecting field operations and office records. Its field-ticket feature records labour, equipment and materials and routes submitted tickets through approval before invoicing.",
    "localShort": "Aimsio lists Calgary among its company locations. Its careers page describes a remote team across Canada and the United States; this is not an on-site-only Calgary workforce.",
    "calgary": "Aimsio lists Calgary among its company locations. Its careers page describes a remote team across Canada and the United States; this is not an on-site-only Calgary workforce.",
    "site": "No vacancy claim. Do not turn software used by field crews into a claim that Aimsio employs those crews.",
    "localSourceIds": [
      "page-aimsio-field-ticket-to-invoice-oct21-source-038",
      "page-aimsio-field-ticket-to-invoice-oct21-source-039",
      "page-aimsio-field-ticket-to-invoice-oct21-source-040"
    ],
    "explain": "Design fictional Job, Ticket and TicketLine tables. Calculate a ticket total, reject a line with an unknown job ID and show why an unapproved ticket should not be billed.",
    "prompt": "What should happen if someone changes a quantity after approval?",
    "conversation": "What should happen if someone changes a quantity after approval?",
    "mindset": "The schema and rules are a classroom model, not Aimsio's internal database design. Current source material listed US sales openings; neither the careers page nor a paid Calgary index search verified a new local software vacancy.",
    "courses": [
      {
        "course": "INF2070 · Database 2",
        "topic": "1.1; 1.2; 1.4; 2.4"
      }
    ],
    "courseFitSourceIds": [
      "page-aimsio-field-ticket-to-invoice-oct21-shared-89"
    ],
    "roles": [
      {
        "title": "Software and data",
        "note": "Connect related records, implement checks and test how changes move through a workflow.",
        "evidence": "interpreted work connection from cited company services/projects, not a confirmed title or vacancy",
        "kind": "interpreted",
        "sourceIds": [
          "page-aimsio-field-ticket-to-invoice-oct21-source-038",
          "page-aimsio-field-ticket-to-invoice-oct21-source-039",
          "page-aimsio-field-ticket-to-invoice-oct21-source-040"
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
          "page-aimsio-field-ticket-to-invoice-oct21-source-037"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "Aimsio builds software connecting field operations and office records. Its field-ticket feature records labour, equipment and materials and routes submitted tickets through approval before invoicing.",
        "status": "Documented organization work",
        "kind": "stated",
        "sourceIds": [
          "page-aimsio-field-ticket-to-invoice-oct21-source-038",
          "page-aimsio-field-ticket-to-invoice-oct21-source-039",
          "page-aimsio-field-ticket-to-invoice-oct21-source-040"
        ]
      },
      {
        "type": "local connection",
        "claim": "Aimsio lists Calgary among its company locations. Its careers page describes a remote team across Canada and the United States; this is not an on-site-only Calgary workforce.",
        "status": "Calgary connection; scope retained",
        "kind": "stated",
        "sourceIds": [
          "page-aimsio-field-ticket-to-invoice-oct21-source-038",
          "page-aimsio-field-ticket-to-invoice-oct21-source-039",
          "page-aimsio-field-ticket-to-invoice-oct21-source-040"
        ]
      },
      {
        "type": "course fit",
        "claim": "INF2070 · Database 2 — 1.1; 1.2; 1.4; 2.4. The company application is an editorial classroom model.",
        "status": "Curriculum scope and editorial application",
        "kind": "interpreted",
        "sourceIds": [
          "page-aimsio-field-ticket-to-invoice-oct21-shared-89"
        ]
      },
      {
        "type": "limits",
        "claim": "The schema and rules are a classroom model, not Aimsio's internal database design. Current source material listed US sales openings; neither the careers page nor a paid Calgary index search verified a new local software vacancy. No vacancy claim. Do not turn software used by field crews into a claim that Aimsio employs those crews.",
        "status": "Teaching model and evidence limits",
        "kind": "interpreted",
        "sourceIds": [
          "page-aimsio-field-ticket-to-invoice-oct21-source-038",
          "page-aimsio-field-ticket-to-invoice-oct21-source-039",
          "page-aimsio-field-ticket-to-invoice-oct21-source-040"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-aimsio-field-ticket-to-invoice-oct21-source-037",
        "label": "sait.ca — programs-and-courses — diplomas — software-development",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/software-development"
      },
      {
        "id": "page-aimsio-field-ticket-to-invoice-oct21-source-038",
        "label": "aimsio.com — features — tickets",
        "url": "https://aimsio.com/features/tickets/"
      },
      {
        "id": "page-aimsio-field-ticket-to-invoice-oct21-source-039",
        "label": "aimsio.com — careers",
        "url": "https://aimsio.com/careers/"
      },
      {
        "id": "page-aimsio-field-ticket-to-invoice-oct21-source-040",
        "label": "aimsio.com",
        "url": "https://aimsio.com/"
      },
      {
        "id": "page-aimsio-field-ticket-to-invoice-oct21-shared-89",
        "label": "INF2070 · Database 2 — official curriculum reference",
        "url": "https://curriculum.learnalberta.ca/curriculum/en/pos/CTSINF/INF2070"
      }
    ],
    "checkedOn": "2026-10-21"
  },
  "details": {
    "id": "aimsio-field-ticket-to-invoice-details",
    "exampleSlug": "aimsio-field-ticket-to-invoice",
    "organizationId": "aimsio",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "aimsio-field-ticket-to-invoice",
      "subtitle": "Aimsio builds software connecting field operations and office records. Its field-ticket feature records labour, equipment and materials and routes submitted tickets through approval before invoicing.",
      "caption": "A classroom interpretation of sourced work.",
      "steps": [
        {
          "text": "Record the job, quantities and relevant work details in a field ticket.",
          "kind": "interpreted",
          "sourceIds": [
            "oct21-source-038",
            "oct21-source-039",
            "oct21-source-040",
            "oct21-shared-89"
          ]
        },
        {
          "text": "Attach supporting information and send the ticket for review.",
          "kind": "interpreted",
          "sourceIds": [
            "oct21-source-038",
            "oct21-source-039",
            "oct21-source-040",
            "oct21-shared-89"
          ]
        },
        {
          "text": "Resolve questions and record approval before converting the ticket to an invoice.",
          "kind": "interpreted",
          "sourceIds": [
            "oct21-source-038",
            "oct21-source-039",
            "oct21-source-040",
            "oct21-shared-89"
          ]
        },
        {
          "text": "Carry the approved line items and rates into billing without entering them again.",
          "kind": "interpreted",
          "sourceIds": [
            "oct21-source-038",
            "oct21-source-039",
            "oct21-source-040",
            "oct21-shared-89"
          ]
        }
      ],
      "diagramAlt": "Four-step teaching illustration: Field ticket → supporting evidence → approval → invoice; show rejected records returning for correction.",
      "diagramProvenance": "Fictional graphic-novel teaching illustration; conceptual model, not measured company results. Prompts and review: design/example-expansion-2026-10-21/.",
      "discussion": "What should happen if someone changes a quantity after approval?"
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
    "id": "aimsio",
    "name": "Aimsio",
    "tagline": "How can a field record become an invoice without being entered twice?",
    "description": {
      "text": "Aimsio builds software connecting field operations and office records. Its field-ticket feature records labour, equipment and materials and routes submitted tickets through approval before invoicing.",
      "kind": "stated",
      "sourceIds": [
        "oct21-source-038",
        "oct21-source-039",
        "oct21-source-040"
      ]
    },
    "problem": {
      "text": "How can a field record become an invoice without being entered twice?",
      "kind": "interpreted",
      "sourceIds": [
        "oct21-source-038",
        "oct21-source-039",
        "oct21-source-040"
      ]
    },
    "offering": {
      "text": "Aimsio builds software connecting field operations and office records. Its field-ticket feature records labour, equipment and materials and routes submitted tickets through approval before invoicing.",
      "kind": "stated",
      "sourceIds": [
        "oct21-source-038",
        "oct21-source-039",
        "oct21-source-040"
      ]
    },
    "beneficiaries": {
      "text": "People and teams using this work to make the decisions described in the example.",
      "kind": "interpreted",
      "sourceIds": [
        "oct21-source-038",
        "oct21-source-039",
        "oct21-source-040"
      ]
    },
    "headquarters": {
      "text": "Headquarters not separately verified for this example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "Aimsio lists Calgary among its company locations. Its careers page describes a remote team across Canada and the United States; this is not an on-site-only Calgary workforce.",
      "kind": "stated",
      "sourceIds": [
        "oct21-source-038",
        "oct21-source-039",
        "oct21-source-040"
      ]
    },
    "websiteSourceId": "oct21-shared-91",
    "checkedOn": "2026-10-21",
    "logo": {
      "src": "/images/logos/aimsio.png",
      "alt": "Aimsio logo",
      "width": 400,
      "height": 83,
      "onDark": false,
      "sourceUrl": "https://aimsio.com/_assets/logo-navy.fmlzdf1e_qN5rv.webp",
      "retrieved": "2026-10-21"
    }
  },
  "organizationRoles": [
    {
      "organizationId": "aimsio",
      "roleId": "software-data",
      "establishes": "related-work",
      "label": "Connect related records, implement checks and test how changes move through a workflow.",
      "location": "Aimsio lists Calgary among its company locations. Its careers page describes a remote team across Canada and the United States; this is not an on-site-only Calgary workforce.",
      "kind": "interpreted",
      "sourceIds": [
        "oct21-source-038",
        "oct21-source-039",
        "oct21-source-040"
      ],
      "checkedOn": "2026-10-21"
    }
  ],
  "jobs": [],
  "sources": [],
  "diagram": {
    "image": "/images/story-diagrams/aimsio-field-ticket-to-invoice-graphic-novel.webp",
    "heading": "How can a field record become an invoice without being entered twice?",
    "steps": [
      "Record the job, quantities and relevant work details in a field ticket.",
      "Attach supporting information and send the ticket for review.",
      "Resolve questions and record approval before converting the ticket to an invoice.",
      "Carry the approved line items and rates into billing without entering them again."
    ],
    "note": "The schema and rules are a classroom model, not Aimsio's internal database design. Current source material listed US sales openings; neither the careers page nor a paid Calgary index search verified a new local software vacancy."
  },
  "unitLinks": [
    {
      "unitId": "inf2070-focus",
      "why": "INF2070 · Database 2 — 1.1; 1.2; 1.4; 2.4. The company application is an editorial classroom model."
    }
  ]
} satisfies ExampleRecord;
