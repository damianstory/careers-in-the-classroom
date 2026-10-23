import type { ExampleRecord } from "../types";

export default {
  "addedOn": "2026-10-23",
  "example": {
    "slug": "vistavu-order-records",
    "detailsId": "vistavu-order-records-details",
    "org": "VistaVu Solutions",
    "discipline": "Technology",
    "question": "How can an order, inventory record and invoice stay connected?",
    "work": "VistaVu implements connected business systems. Its Resolv extension supports distribution and warehouse processes, while FieldVu connects field tickets with invoicing.",
    "localShort": "VistaVu lists a Calgary office. Product capabilities are company-wide and are not attributed to a specific Calgary employee or team.",
    "calgary": "VistaVu lists a Calgary office. Product capabilities are company-wide and are not attributed to a specific Calgary employee or team.",
    "site": "A classroom model based on documented work; the activity uses fictional examples.",
    "localSourceIds": [
      "page-vistavu-order-records-oct23-cgy-203-0",
      "page-vistavu-order-records-oct23-vistavu-locations",
      "page-vistavu-order-records-oct23-vistavu-resolv"
    ],
    "explain": "Build fictional Orders, Products and Order Lines tables for a school-supply store. One order contains two products and one product appears in several orders. Add a shipment and invoice, then test an unknown product ID and a partial shipment. Explain why the records should remain related but distinct.",
    "prompt": "Why is one giant spreadsheet row a poor way to represent an order containing several products?",
    "conversation": "Why is one giant spreadsheet row a poor way to represent an order containing several products?",
    "mindset": "This is a simplified relational model, not VistaVu’s actual database schema. No customer information, billing advice or promise of automatic error prevention is included.",
    "courses": [
      {
        "course": "INF2070 · Database 2",
        "topic": "Related tables, identifiers and referential integrity"
      }
    ],
    "courseFitSourceIds": [
      "page-vistavu-order-records-oct23-course-inf2070"
    ],
    "roles": [
      {
        "title": "Software and data",
        "note": "Connect orders, item records and invoices using clear relationships and validation checks.",
        "evidence": "Related work interpreted from the cited source; not a verified job title or vacancy.",
        "kind": "interpreted",
        "sourceIds": [
          "page-vistavu-order-records-oct23-cgy-203-0",
          "page-vistavu-order-records-oct23-vistavu-locations",
          "page-vistavu-order-records-oct23-vistavu-resolv"
        ]
      },
      {
        "title": "Technical application support",
        "note": "Trace a reported mismatch across connected records and help users explain the problem.",
        "evidence": "Related work interpreted from the cited source; not a verified job title or vacancy.",
        "kind": "interpreted",
        "sourceIds": [
          "page-vistavu-order-records-oct23-cgy-203-0",
          "page-vistavu-order-records-oct23-vistavu-locations",
          "page-vistavu-order-records-oct23-vistavu-resolv"
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
          "page-vistavu-order-records-expansion-source-14"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "VistaVu implements connected business systems. Its Resolv extension supports distribution and warehouse processes, while FieldVu connects field tickets with invoicing.",
        "status": "Documented organization work",
        "kind": "stated",
        "sourceIds": [
          "page-vistavu-order-records-oct23-cgy-203-0",
          "page-vistavu-order-records-oct23-vistavu-locations",
          "page-vistavu-order-records-oct23-vistavu-resolv"
        ]
      },
      {
        "type": "local connection",
        "claim": "VistaVu lists a Calgary office. Product capabilities are company-wide and are not attributed to a specific Calgary employee or team.",
        "status": "Scope of the Calgary connection",
        "kind": "stated",
        "sourceIds": [
          "page-vistavu-order-records-oct23-cgy-203-0",
          "page-vistavu-order-records-oct23-vistavu-locations",
          "page-vistavu-order-records-oct23-vistavu-resolv"
        ]
      },
      {
        "type": "course fit",
        "claim": "INF2070 · Database 2: selected outcomes 1.1, 1.2, 1.4, 2.4, 2.8, 3.4. Related tables, identifiers and referential integrity. The company activity is an editorial application.",
        "status": "Editorial classroom application",
        "kind": "interpreted",
        "sourceIds": [
          "page-vistavu-order-records-oct23-course-inf2070"
        ]
      },
      {
        "type": "limits",
        "claim": "This is a simplified relational model, not VistaVu’s actual database schema. No customer information, billing advice or promise of automatic error prevention is included.",
        "status": "Teaching model and evidence limits",
        "kind": "interpreted",
        "sourceIds": [
          "page-vistavu-order-records-oct23-cgy-203-0",
          "page-vistavu-order-records-oct23-vistavu-locations",
          "page-vistavu-order-records-oct23-vistavu-resolv"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-vistavu-order-records-oct23-cgy-203-0",
        "label": "Home | Vista Vu",
        "url": "https://www.vistavusolutions.com/"
      },
      {
        "id": "page-vistavu-order-records-oct23-vistavu-locations",
        "label": "Locations | Vista Vu",
        "url": "https://www.vistavusolutions.com/locations"
      },
      {
        "id": "page-vistavu-order-records-oct23-vistavu-resolv",
        "label": "Resolv | VistaVu",
        "url": "https://www.vistavusolutions.com/resolv-sap-extension-wholesale-distribution-software"
      },
      {
        "id": "page-vistavu-order-records-oct23-course-inf2070",
        "label": "INF2070 — Alberta curriculum reference",
        "url": "https://curriculum.learnalberta.ca/curriculum/en/pos/CTSINF/INF2070"
      },
      {
        "id": "page-vistavu-order-records-expansion-source-14",
        "label": "SAIT — Software Development",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/software-development"
      }
    ],
    "checkedOn": "2026-10-23"
  },
  "details": {
    "id": "vistavu-order-records-details",
    "exampleSlug": "vistavu-order-records",
    "organizationId": "vistavu",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "vistavu-order-records",
      "subtitle": "VistaVu implements connected business systems. Its Resolv extension supports distribution and warehouse processes, while FieldVu connects field tickets with invoicing.",
      "caption": "A classroom interpretation of sourced work.",
      "steps": [
        {
          "text": "Give each order, customer and product a stable identifier.",
          "kind": "interpreted",
          "sourceIds": [
            "oct23-cgy-203-0",
            "oct23-vistavu-locations",
            "oct23-vistavu-resolv",
            "oct23-course-inf2070"
          ]
        },
        {
          "text": "Connect order lines to the appropriate order and product.",
          "kind": "interpreted",
          "sourceIds": [
            "oct23-cgy-203-0",
            "oct23-vistavu-locations",
            "oct23-vistavu-resolv",
            "oct23-course-inf2070"
          ]
        },
        {
          "text": "Record fulfilment and invoicing without overwriting the original order.",
          "kind": "interpreted",
          "sourceIds": [
            "oct23-cgy-203-0",
            "oct23-vistavu-locations",
            "oct23-vistavu-resolv",
            "oct23-course-inf2070"
          ]
        },
        {
          "text": "Investigate missing links and discrepancies between ordered, shipped and billed quantities.",
          "kind": "interpreted",
          "sourceIds": [
            "oct23-cgy-203-0",
            "oct23-vistavu-locations",
            "oct23-vistavu-resolv",
            "oct23-course-inf2070"
          ]
        }
      ],
      "diagramAlt": "Conceptual teaching illustration: Customer and product cards → order with two line items → partial shipment boxes → linked invoice. Use explicit joining arrows and abstract identifiers.",
      "diagramProvenance": "Fictional graphic-novel teaching illustration; not company equipment or measured results. Prompts and review: design/example-expansion-2026-10-23/.",
      "discussion": "Why is one giant spreadsheet row a poor way to represent an order containing several products?"
    },
    "roleIds": [
      "software-data",
      "work-technical-support"
    ],
    "pathwayIds": [
      "route-software"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-23"
  },
  "organization": {
    "id": "vistavu",
    "name": "VistaVu Solutions",
    "tagline": "How can an order, inventory record and invoice stay connected?",
    "description": {
      "text": "VistaVu implements connected business systems. Its Resolv extension supports distribution and warehouse processes, while FieldVu connects field tickets with invoicing.",
      "kind": "stated",
      "sourceIds": [
        "oct23-cgy-203-0",
        "oct23-vistavu-locations",
        "oct23-vistavu-resolv"
      ]
    },
    "problem": {
      "text": "How can an order, inventory record and invoice stay connected?",
      "kind": "interpreted",
      "sourceIds": [
        "oct23-cgy-203-0",
        "oct23-vistavu-locations",
        "oct23-vistavu-resolv"
      ]
    },
    "offering": {
      "text": "VistaVu implements connected business systems. Its Resolv extension supports distribution and warehouse processes, while FieldVu connects field tickets with invoicing.",
      "kind": "stated",
      "sourceIds": [
        "oct23-cgy-203-0",
        "oct23-vistavu-locations",
        "oct23-vistavu-resolv"
      ]
    },
    "beneficiaries": {
      "text": "People and organizations using the services described in the cited company sources.",
      "kind": "interpreted",
      "sourceIds": [
        "oct23-cgy-203-0",
        "oct23-vistavu-locations",
        "oct23-vistavu-resolv"
      ]
    },
    "headquarters": {
      "text": "Headquarters has not been separately verified for this classroom example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "VistaVu lists a Calgary office. Product capabilities are company-wide and are not attributed to a specific Calgary employee or team.",
      "kind": "stated",
      "sourceIds": [
        "oct23-cgy-203-0",
        "oct23-vistavu-locations",
        "oct23-vistavu-resolv"
      ]
    },
    "websiteSourceId": "oct23-cgy-203-0",
    "checkedOn": "2026-10-23",
    "logo": {
      "src": "/images/logos/vistavu.png",
      "width": 150,
      "height": 36,
      "onDark": false,
      "sourceUrl": "https://www.vistavusolutions.com/hs-fs/hubfs/VistaVu%20Solutions_Official%20Logo-1.png?width=150&height=36&name=VistaVu%20Solutions_Official%20Logo-1.png",
      "retrieved": "2026-10-23",
      "alt": "VistaVu Solutions logo"
    }
  },
  "organizationRoles": [
    {
      "organizationId": "vistavu",
      "roleId": "software-data",
      "establishes": "related-work",
      "label": "Connect orders, item records and invoices using clear relationships and validation checks.",
      "location": "VistaVu lists a Calgary office. Product capabilities are company-wide and are not attributed to a specific Calgary employee or team.",
      "kind": "interpreted",
      "sourceIds": [
        "oct23-cgy-203-0",
        "oct23-vistavu-locations",
        "oct23-vistavu-resolv"
      ],
      "checkedOn": "2026-10-23"
    },
    {
      "organizationId": "vistavu",
      "roleId": "work-technical-support",
      "establishes": "related-work",
      "label": "Trace a reported mismatch across connected records and help users explain the problem.",
      "location": "VistaVu lists a Calgary office. Product capabilities are company-wide and are not attributed to a specific Calgary employee or team.",
      "kind": "interpreted",
      "sourceIds": [
        "oct23-cgy-203-0",
        "oct23-vistavu-locations",
        "oct23-vistavu-resolv"
      ],
      "checkedOn": "2026-10-23"
    }
  ],
  "jobs": [],
  "sources": [],
  "diagram": {
    "image": "/images/story-diagrams/vistavu-order-records-graphic-novel.webp",
    "heading": "How can an order, inventory record and invoice stay connected?",
    "steps": [
      "Give each order, customer and product a stable identifier.",
      "Connect order lines to the appropriate order and product.",
      "Record fulfilment and invoicing without overwriting the original order.",
      "Investigate missing links and discrepancies between ordered, shipped and billed quantities."
    ],
    "note": "This is a simplified relational model, not VistaVu’s actual database schema. No customer information, billing advice or promise of automatic error prevention is included."
  },
  "unitLinks": [
    {
      "unitId": "inf2070-focus",
      "why": "INF2070 · Database 2: selected outcomes 1.1, 1.2, 1.4, 2.4, 2.8, 3.4. Related tables, identifiers and referential integrity. The company activity is an editorial application."
    }
  ]
} satisfies ExampleRecord;
