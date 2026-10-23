import type { ExampleRecord } from "../types";

export default {
  "addedOn": "2026-10-21",
  "example": {
    "slug": "validere-measurement-records",
    "detailsId": "validere-measurement-records-details",
    "org": "Validere",
    "discipline": "Technology",
    "question": "Why must a measurement stay connected to its equipment, time and location?",
    "work": "Validere provides software and services for industrial operations and environmental information. Its platform connects field observations and operational records to reporting workflows.",
    "localShort": "Validere's current original contact page lists Calgary, Houston and Toronto offices. It does not establish that every product function is carried out by the Calgary team.",
    "calgary": "Validere's current original contact page lists Calgary, Houston and Toronto offices. It does not establish that every product function is carried out by the Calgary team.",
    "site": "Current vacancies, headcount, headquarters designation and compliance guarantees are not established here.",
    "localSourceIds": [
      "page-validere-measurement-records-oct21-source-049",
      "page-validere-measurement-records-oct21-source-050",
      "page-validere-measurement-records-oct21-source-051"
    ],
    "explain": "Create fictional Equipment and Measurement tables. Find an orphan equipment ID, a missing unit and two observations with different methods; decide which records can be compared.",
    "prompt": "Can a precise number be useful when its source or unit is missing?",
    "conversation": "Can a precise number be useful when its source or unit is missing?",
    "mindset": "The platform is not itself every sensor in the field. The classroom schema is invented. A paid company profile repeated useful product categories but had conflicting headquarters and headcount fields; those fields are excluded.",
    "courses": [
      {
        "course": "INF2070 · Database 2",
        "topic": "1.1; 1.2; 1.4; 2.8"
      }
    ],
    "courseFitSourceIds": [
      "page-validere-measurement-records-oct21-shared-89"
    ],
    "roles": [
      {
        "title": "Software and data",
        "note": "Maintain relationships, validation checks and traceable changes across operational records.",
        "evidence": "interpreted work connection from cited company services/projects, not a confirmed title or vacancy",
        "kind": "interpreted",
        "sourceIds": [
          "page-validere-measurement-records-oct21-source-049",
          "page-validere-measurement-records-oct21-source-050",
          "page-validere-measurement-records-oct21-source-051"
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
          "page-validere-measurement-records-oct21-source-037"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "Validere provides software and services for industrial operations and environmental information. Its platform connects field observations and operational records to reporting workflows.",
        "status": "Documented organization work",
        "kind": "stated",
        "sourceIds": [
          "page-validere-measurement-records-oct21-source-049",
          "page-validere-measurement-records-oct21-source-050",
          "page-validere-measurement-records-oct21-source-051"
        ]
      },
      {
        "type": "local connection",
        "claim": "Validere's current original contact page lists Calgary, Houston and Toronto offices. It does not establish that every product function is carried out by the Calgary team.",
        "status": "Calgary connection; scope retained",
        "kind": "stated",
        "sourceIds": [
          "page-validere-measurement-records-oct21-source-049",
          "page-validere-measurement-records-oct21-source-050",
          "page-validere-measurement-records-oct21-source-051"
        ]
      },
      {
        "type": "course fit",
        "claim": "INF2070 · Database 2 — 1.1; 1.2; 1.4; 2.8. The company application is an editorial classroom model.",
        "status": "Curriculum scope and editorial application",
        "kind": "interpreted",
        "sourceIds": [
          "page-validere-measurement-records-oct21-shared-89"
        ]
      },
      {
        "type": "limits",
        "claim": "The platform is not itself every sensor in the field. The classroom schema is invented. A paid company profile repeated useful product categories but had conflicting headquarters and headcount fields; those fields are excluded. Current vacancies, headcount, headquarters designation and compliance guarantees are not established here.",
        "status": "Teaching model and evidence limits",
        "kind": "interpreted",
        "sourceIds": [
          "page-validere-measurement-records-oct21-source-049",
          "page-validere-measurement-records-oct21-source-050",
          "page-validere-measurement-records-oct21-source-051"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-validere-measurement-records-oct21-source-037",
        "label": "sait.ca — programs-and-courses — diplomas — software-development",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/software-development"
      },
      {
        "id": "page-validere-measurement-records-oct21-source-049",
        "label": "validere.com — contact",
        "url": "https://www.validere.com/contact"
      },
      {
        "id": "page-validere-measurement-records-oct21-source-050",
        "label": "blog.validere.com — mobile-app-smart-alerting-features",
        "url": "https://blog.validere.com/mobile-app-smart-alerting-features"
      },
      {
        "id": "page-validere-measurement-records-oct21-source-051",
        "label": "validere.com — webinars — show-emissions-progress",
        "url": "https://www.validere.com/webinars/show-emissions-progress"
      },
      {
        "id": "page-validere-measurement-records-oct21-shared-89",
        "label": "INF2070 · Database 2 — official curriculum reference",
        "url": "https://curriculum.learnalberta.ca/curriculum/en/pos/CTSINF/INF2070"
      }
    ],
    "checkedOn": "2026-10-21"
  },
  "details": {
    "id": "validere-measurement-records-details",
    "exampleSlug": "validere-measurement-records",
    "organizationId": "validere",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "validere-measurement-records",
      "subtitle": "Validere provides software and services for industrial operations and environmental information. Its platform connects field observations and operational records to reporting workflows.",
      "caption": "A classroom interpretation of sourced work.",
      "steps": [
        {
          "text": "Connect an observation to the equipment, location and time it describes.",
          "kind": "interpreted",
          "sourceIds": [
            "oct21-source-049",
            "oct21-source-050",
            "oct21-source-051",
            "oct21-shared-89"
          ]
        },
        {
          "text": "Preserve the units, method and source needed to interpret that observation.",
          "kind": "interpreted",
          "sourceIds": [
            "oct21-source-049",
            "oct21-source-050",
            "oct21-source-051",
            "oct21-shared-89"
          ]
        },
        {
          "text": "Check related records for gaps or inconsistent values before combining them.",
          "kind": "interpreted",
          "sourceIds": [
            "oct21-source-049",
            "oct21-source-050",
            "oct21-source-051",
            "oct21-shared-89"
          ]
        },
        {
          "text": "Keep an audit trail so a report can be traced back to its supporting information.",
          "kind": "interpreted",
          "sourceIds": [
            "oct21-source-049",
            "oct21-source-050",
            "oct21-source-051",
            "oct21-shared-89"
          ]
        }
      ],
      "diagramAlt": "Four-step teaching illustration: Observation with context → validation → linked records → traceable report.",
      "diagramProvenance": "Fictional graphic-novel teaching illustration; conceptual model, not measured company results. Prompts and review: design/example-expansion-2026-10-21/.",
      "discussion": "Can a precise number be useful when its source or unit is missing?"
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
    "id": "validere",
    "name": "Validere",
    "tagline": "Why must a measurement stay connected to its equipment, time and location?",
    "description": {
      "text": "Validere provides software and services for industrial operations and environmental information. Its platform connects field observations and operational records to reporting workflows.",
      "kind": "stated",
      "sourceIds": [
        "oct21-source-049",
        "oct21-source-050",
        "oct21-source-051"
      ]
    },
    "problem": {
      "text": "Why must a measurement stay connected to its equipment, time and location?",
      "kind": "interpreted",
      "sourceIds": [
        "oct21-source-049",
        "oct21-source-050",
        "oct21-source-051"
      ]
    },
    "offering": {
      "text": "Validere provides software and services for industrial operations and environmental information. Its platform connects field observations and operational records to reporting workflows.",
      "kind": "stated",
      "sourceIds": [
        "oct21-source-049",
        "oct21-source-050",
        "oct21-source-051"
      ]
    },
    "beneficiaries": {
      "text": "People and teams using this work to make the decisions described in the example.",
      "kind": "interpreted",
      "sourceIds": [
        "oct21-source-049",
        "oct21-source-050",
        "oct21-source-051"
      ]
    },
    "headquarters": {
      "text": "Headquarters not separately verified for this example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "Validere's current original contact page lists Calgary, Houston and Toronto offices. It does not establish that every product function is carried out by the Calgary team.",
      "kind": "stated",
      "sourceIds": [
        "oct21-source-049",
        "oct21-source-050",
        "oct21-source-051"
      ]
    },
    "websiteSourceId": "oct21-shared-96",
    "checkedOn": "2026-10-21",
    "logo": {
      "src": "/images/logos/validere.png",
      "alt": "Validere logo",
      "width": 400,
      "height": 51,
      "onDark": false,
      "sourceUrl": "https://www.validere.com/",
      "retrieved": "2026-10-21"
    }
  },
  "organizationRoles": [
    {
      "organizationId": "validere",
      "roleId": "software-data",
      "establishes": "related-work",
      "label": "Maintain relationships, validation checks and traceable changes across operational records.",
      "location": "Validere's current original contact page lists Calgary, Houston and Toronto offices. It does not establish that every product function is carried out by the Calgary team.",
      "kind": "interpreted",
      "sourceIds": [
        "oct21-source-049",
        "oct21-source-050",
        "oct21-source-051"
      ],
      "checkedOn": "2026-10-21"
    }
  ],
  "jobs": [],
  "sources": [],
  "diagram": {
    "image": "/images/story-diagrams/validere-measurement-records-graphic-novel.webp",
    "heading": "Why must a measurement stay connected to its equipment, time and location?",
    "steps": [
      "Connect an observation to the equipment, location and time it describes.",
      "Preserve the units, method and source needed to interpret that observation.",
      "Check related records for gaps or inconsistent values before combining them.",
      "Keep an audit trail so a report can be traced back to its supporting information."
    ],
    "note": "The platform is not itself every sensor in the field. The classroom schema is invented. A paid company profile repeated useful product categories but had conflicting headquarters and headcount fields; those fields are excluded."
  },
  "unitLinks": [
    {
      "unitId": "inf2070-focus",
      "why": "INF2070 · Database 2 — 1.1; 1.2; 1.4; 2.8. The company application is an editorial classroom model."
    }
  ]
} satisfies ExampleRecord;
