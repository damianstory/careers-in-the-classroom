import type { ExampleRecord } from "../types";

export default {
  "addedOn": "2026-10-21",
  "example": {
    "slug": "trufla-client-record-rules",
    "detailsId": "trufla-client-record-rules-details",
    "org": "Trufla Technology",
    "discipline": "Technology",
    "question": "How can a self-service form give someone the right information without mixing up their records?",
    "work": "Trufla develops technology for insurance brokers and their customers. Its truMobile service supports self-service access and connections to client records.",
    "localShort": "Trufla describes Calgary and Cairo operations. Its careers page identifies developers, designers, product owners and business analysts without assigning every role to Calgary.",
    "calgary": "Trufla describes Calgary and Cairo operations. Its careers page identifies developers, designers, product owners and business analysts without assigning every role to Calgary.",
    "site": "Company features are sourced; the precise control sequence is explicitly a classroom design.",
    "localSourceIds": [
      "page-trufla-client-record-rules-oct21-source-043",
      "page-trufla-client-record-rules-oct21-source-044",
      "page-trufla-client-record-rules-oct21-source-045"
    ],
    "explain": "Write pseudocode for a fictional club-member portal: verify the signed-in member, reject missing fields and prevent one member from reading another's record. Test normal and invalid inputs.",
    "prompt": "Why is a valid-looking form not enough to establish that a request is allowed?",
    "conversation": "Why is a valid-looking form not enough to establish that a request is allowed?",
    "mindset": "The club portal is a simplified teaching model, not Trufla's authentication design or insurance advice. Students use invented records only.",
    "courses": [
      {
        "course": "CSE1120 · Structured Programming 2",
        "topic": "1; 1.9; 2; 3.1"
      }
    ],
    "courseFitSourceIds": [
      "page-trufla-client-record-rules-oct21-shared-93"
    ],
    "roles": [
      {
        "title": "Software and data",
        "note": "Implement decision rules and test ordinary, missing and unauthorized inputs.",
        "evidence": "interpreted work connection from cited company services/projects, not a confirmed title or vacancy",
        "kind": "interpreted",
        "sourceIds": [
          "page-trufla-client-record-rules-oct21-source-043",
          "page-trufla-client-record-rules-oct21-source-044",
          "page-trufla-client-record-rules-oct21-source-045"
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
          "page-trufla-client-record-rules-oct21-source-037"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "Trufla develops technology for insurance brokers and their customers. Its truMobile service supports self-service access and connections to client records.",
        "status": "Documented organization work",
        "kind": "stated",
        "sourceIds": [
          "page-trufla-client-record-rules-oct21-source-043",
          "page-trufla-client-record-rules-oct21-source-044",
          "page-trufla-client-record-rules-oct21-source-045"
        ]
      },
      {
        "type": "local connection",
        "claim": "Trufla describes Calgary and Cairo operations. Its careers page identifies developers, designers, product owners and business analysts without assigning every role to Calgary.",
        "status": "Calgary connection; scope retained",
        "kind": "stated",
        "sourceIds": [
          "page-trufla-client-record-rules-oct21-source-043",
          "page-trufla-client-record-rules-oct21-source-044",
          "page-trufla-client-record-rules-oct21-source-045"
        ]
      },
      {
        "type": "course fit",
        "claim": "CSE1120 · Structured Programming 2 — 1; 1.9; 2; 3.1. The company application is an editorial classroom model.",
        "status": "Curriculum scope and editorial application",
        "kind": "interpreted",
        "sourceIds": [
          "page-trufla-client-record-rules-oct21-shared-93"
        ]
      },
      {
        "type": "limits",
        "claim": "The club portal is a simplified teaching model, not Trufla's authentication design or insurance advice. Students use invented records only. Company features are sourced; the precise control sequence is explicitly a classroom design.",
        "status": "Teaching model and evidence limits",
        "kind": "interpreted",
        "sourceIds": [
          "page-trufla-client-record-rules-oct21-source-043",
          "page-trufla-client-record-rules-oct21-source-044",
          "page-trufla-client-record-rules-oct21-source-045"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-trufla-client-record-rules-oct21-source-037",
        "label": "sait.ca — programs-and-courses — diplomas — software-development",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/software-development"
      },
      {
        "id": "page-trufla-client-record-rules-oct21-source-043",
        "label": "trufla.com — products — trumobile",
        "url": "https://www.trufla.com/products/trumobile"
      },
      {
        "id": "page-trufla-client-record-rules-oct21-source-044",
        "label": "trufla.com — careers",
        "url": "https://www.trufla.com/careers/"
      },
      {
        "id": "page-trufla-client-record-rules-oct21-source-045",
        "label": "trufla.com — blog — 5-tips-to-drive-retention-and-new-customers",
        "url": "https://www.trufla.com/blog/5-tips-to-drive-retention-and-new-customers/"
      },
      {
        "id": "page-trufla-client-record-rules-oct21-shared-93",
        "label": "CSE1120 · Structured Programming 2 — official curriculum reference",
        "url": "https://curriculum.learnalberta.ca/curriculum/en/pos/CTSCSE/CSE1120"
      }
    ],
    "checkedOn": "2026-10-21"
  },
  "details": {
    "id": "trufla-client-record-rules-details",
    "exampleSlug": "trufla-client-record-rules",
    "organizationId": "trufla-technology",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "trufla-client-record-rules",
      "subtitle": "Trufla develops technology for insurance brokers and their customers. Its truMobile service supports self-service access and connections to client records.",
      "caption": "A classroom interpretation of sourced work.",
      "steps": [
        {
          "text": "Identify the request and the account it belongs to.",
          "kind": "interpreted",
          "sourceIds": [
            "oct21-source-043",
            "oct21-source-044",
            "oct21-source-045",
            "oct21-shared-93"
          ]
        },
        {
          "text": "Check that the user is allowed to access the requested information.",
          "kind": "interpreted",
          "sourceIds": [
            "oct21-source-043",
            "oct21-source-044",
            "oct21-source-045",
            "oct21-shared-93"
          ]
        },
        {
          "text": "Validate the submitted fields before using them in the workflow.",
          "kind": "interpreted",
          "sourceIds": [
            "oct21-source-043",
            "oct21-source-044",
            "oct21-source-045",
            "oct21-shared-93"
          ]
        },
        {
          "text": "Return a clear result or correction request and preserve the record of the interaction.",
          "kind": "interpreted",
          "sourceIds": [
            "oct21-source-043",
            "oct21-source-044",
            "oct21-source-045",
            "oct21-shared-93"
          ]
        }
      ],
      "diagramAlt": "Four-step teaching illustration: Request → identity/access checks → field checks → response; use a visible correction branch.",
      "diagramProvenance": "Fictional graphic-novel teaching illustration; conceptual model, not measured company results. Prompts and review: design/example-expansion-2026-10-21/.",
      "discussion": "Why is a valid-looking form not enough to establish that a request is allowed?"
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
    "id": "trufla-technology",
    "name": "Trufla Technology",
    "tagline": "How can a self-service form give someone the right information without mixing up their records?",
    "description": {
      "text": "Trufla develops technology for insurance brokers and their customers. Its truMobile service supports self-service access and connections to client records.",
      "kind": "stated",
      "sourceIds": [
        "oct21-source-043",
        "oct21-source-044",
        "oct21-source-045"
      ]
    },
    "problem": {
      "text": "How can a self-service form give someone the right information without mixing up their records?",
      "kind": "interpreted",
      "sourceIds": [
        "oct21-source-043",
        "oct21-source-044",
        "oct21-source-045"
      ]
    },
    "offering": {
      "text": "Trufla develops technology for insurance brokers and their customers. Its truMobile service supports self-service access and connections to client records.",
      "kind": "stated",
      "sourceIds": [
        "oct21-source-043",
        "oct21-source-044",
        "oct21-source-045"
      ]
    },
    "beneficiaries": {
      "text": "People and teams using this work to make the decisions described in the example.",
      "kind": "interpreted",
      "sourceIds": [
        "oct21-source-043",
        "oct21-source-044",
        "oct21-source-045"
      ]
    },
    "headquarters": {
      "text": "Headquarters not separately verified for this example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "Trufla describes Calgary and Cairo operations. Its careers page identifies developers, designers, product owners and business analysts without assigning every role to Calgary.",
      "kind": "stated",
      "sourceIds": [
        "oct21-source-043",
        "oct21-source-044",
        "oct21-source-045"
      ]
    },
    "websiteSourceId": "oct21-shared-94",
    "checkedOn": "2026-10-21",
    "logo": {
      "src": "/images/logos/trufla-technology.png",
      "alt": "Trufla Technology logo",
      "width": 400,
      "height": 97,
      "onDark": true,
      "sourceUrl": "https://www.trufla.com/wp-content/uploads/2024/08/Trufla-White-Logo.svg",
      "retrieved": "2026-10-21"
    }
  },
  "organizationRoles": [
    {
      "organizationId": "trufla-technology",
      "roleId": "software-data",
      "establishes": "related-work",
      "label": "Implement decision rules and test ordinary, missing and unauthorized inputs.",
      "location": "Trufla describes Calgary and Cairo operations. Its careers page identifies developers, designers, product owners and business analysts without assigning every role to Calgary.",
      "kind": "interpreted",
      "sourceIds": [
        "oct21-source-043",
        "oct21-source-044",
        "oct21-source-045"
      ],
      "checkedOn": "2026-10-21"
    }
  ],
  "jobs": [],
  "sources": [],
  "diagram": {
    "image": "/images/story-diagrams/trufla-client-record-rules-graphic-novel.webp",
    "heading": "How can a self-service form give someone the right information without mixing up their records?",
    "steps": [
      "Identify the request and the account it belongs to.",
      "Check that the user is allowed to access the requested information.",
      "Validate the submitted fields before using them in the workflow.",
      "Return a clear result or correction request and preserve the record of the interaction."
    ],
    "note": "The club portal is a simplified teaching model, not Trufla's authentication design or insurance advice. Students use invented records only."
  },
  "unitLinks": [
    {
      "unitId": "cse1120-focus",
      "why": "CSE1120 · Structured Programming 2 — 1; 1.9; 2; 3.1. The company application is an editorial classroom model."
    }
  ]
} satisfies ExampleRecord;
