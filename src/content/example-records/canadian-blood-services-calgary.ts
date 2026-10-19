import type { ExampleRecord } from "../types";

export default {
  "addedOn": "2026-10-19",
  "example": {
    "slug": "canadian-blood-services-calgary",
    "org": "Canadian Blood Services — Calgary operations",
    "discipline": "Biology",
    "question": "Why is a donation not ready for a patient as soon as it is collected?",
    "work": "Canadian Blood Services’ Calgary operations publication describes receiving donations, producing components, donor testing and distribution. The organization’s inspection listing separately identifies Calgary Operations. These are different functions from the diagnostic-services laboratory network listed elsewhere on its site.",
    "localShort": "Original Calgary operations-facility book and inspection listing establish substantive Calgary operations.",
    "calgary": "Original Calgary operations-facility book and inspection listing establish substantive Calgary operations.",
    "site": "The book is a dated account, not proof of today’s equipment or staffing. No diagnostic laboratory from another city is assigned to Calgary.",
    "localSourceIds": [
      "page-oct19-source-39",
      "page-oct19-source-40",
      "page-oct19-source-41",
      "page-oct19-source-42",
      "page-oct19-source-43",
      "page-oct19-source-44"
    ],
    "explain": "Use fictional labelled counters for red cells, plasma and platelets. Design a component-and-record tracking diagram and identify where a label mix-up would break confidence. Do not use real blood or make transfusion decisions.",
    "prompt": "Why would a correctly processed component still be unusable if its identity or history were uncertain?",
    "conversation": "Why would a correctly processed component still be unusable if its identity or history were uncertain?",
    "mindset": "The model omits clinical release rules and compatibility decisions. A component picture cannot determine whether it is suitable for a patient; testing and professional decisions remain essential.",
    "courses": [
      {
        "course": "Biology 20",
        "topic": "D2 — circulatory and defence systems; blood composition"
      }
    ],
    "courseFitSourceIds": [
      "page-oct17-source-6"
    ],
    "roles": [
      {
        "title": "Blood-component production work",
        "note": "Help turn collected donations into traceable blood components under controlled procedures.",
        "evidence": "Calgary facility source documents production and testing. Occupational profiles explain related work; the book does not establish a current vacancy or the exact qualifications of every current worker.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct19-source-39",
          "page-oct19-source-40",
          "page-oct19-source-41",
          "page-oct19-source-42",
          "page-oct19-source-43",
          "page-oct19-source-44"
        ]
      },
      {
        "title": "Medical laboratory technologist",
        "note": "Perform laboratory testing within a clinical quality system.",
        "evidence": "Calgary facility source documents production and testing. Occupational profiles explain related work; the book does not establish a current vacancy or the exact qualifications of every current worker.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct19-source-39",
          "page-oct19-source-40",
          "page-oct19-source-41",
          "page-oct19-source-42",
          "page-oct19-source-43",
          "page-oct19-source-44"
        ]
      }
    ],
    "rolesNote": "Work areas and related occupations, not a staff roster or a list of current vacancies. A previously found laboratory-assistant URL now resolves to a generic unavailable page. The facility book supports work areas; no new vacancy card is proposed.",
    "pathways": [
      {
        "kindLabel": "Certificate",
        "label": "SAIT — Medical Laboratory Assistant",
        "note": "Clinical specimens, laboratory procedures and quality-focused support work. A related laboratory-support route, not proof that CBS requires this certificate for every production assistant. Does not qualify its graduate as a medical laboratory technologist.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct19-source-44"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Medical Laboratory Technology",
        "note": "Clinical laboratory testing, including hematology and transfusion-related study. Separate from Chemical Laboratory Technology. Eligibility for professional practice, registration and individual employer requirements must be checked separately; no Calgary Blood Services placement is promised.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct19-source-43"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "Canadian Blood Services’ Calgary operations publication describes receiving donations, producing components, donor testing and distribution. The organization’s inspection listing separately identifies Calgary Operations. These are different functions from the diagnostic-services laboratory network listed elsewhere on its site.",
        "status": "Source-backed employer work with local and historical limits retained",
        "kind": "stated",
        "sourceIds": [
          "page-oct19-source-39",
          "page-oct19-source-40",
          "page-oct19-source-41",
          "page-oct19-source-42",
          "page-oct19-source-43",
          "page-oct19-source-44"
        ]
      },
      {
        "type": "local connection",
        "claim": "Original Calgary operations-facility book and inspection listing establish substantive Calgary operations.",
        "status": "Documented Calgary work; regional operations are distinguished",
        "kind": "stated",
        "sourceIds": [
          "page-oct19-source-39",
          "page-oct19-source-40",
          "page-oct19-source-41",
          "page-oct19-source-42",
          "page-oct19-source-43",
          "page-oct19-source-44"
        ]
      },
      {
        "type": "course fit",
        "claim": "Blood components and their functions connect directly. Donation processing, product release and clinical testing are applied workplace contexts, not treatment instructions.",
        "status": "source-checked editorial fit; application extensions explicit",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct17-source-6"
        ]
      },
      {
        "type": "limits",
        "claim": "Clinical MLT, medical laboratory assistant and production roles have different scopes. No expired requisition is called a vacancy, and no required certificate for a CBS production job is invented. The book is a dated account, not proof of today’s equipment or staffing. No diagnostic laboratory from another city is assigned to Calgary.",
        "status": "Scope of the classroom example",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct19-source-39",
          "page-oct19-source-40",
          "page-oct19-source-41",
          "page-oct19-source-42",
          "page-oct19-source-43",
          "page-oct19-source-44"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-oct19-source-39",
        "label": "blood.ca — M2053 CalgaryBook 2022 02 11 EN.pdf",
        "url": "https://www.blood.ca/sites/default/files/M2053_CalgaryBook_2022-02-11-EN.pdf"
      },
      {
        "id": "page-oct19-source-40",
        "label": "blood.ca — designed excellence calgary operations facility book",
        "url": "https://www.blood.ca/en/about-us/publications-and-reports/designed-excellence-calgary-operations-facility-book"
      },
      {
        "id": "page-oct19-source-41",
        "label": "blood.ca — audits 2025 2026",
        "url": "https://www.blood.ca/en/about-us/reports-and-publications/audits-2025-2026"
      },
      {
        "id": "page-oct19-source-42",
        "label": "blood.ca — laboratory services",
        "url": "https://www.blood.ca/en/hospital-services/laboratory-services"
      },
      {
        "id": "page-oct19-source-43",
        "label": "sait.ca — medical laboratory technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/medical-laboratory-technology"
      },
      {
        "id": "page-oct19-source-44",
        "label": "sait.ca — medical laboratory assistant",
        "url": "https://www.sait.ca/programs-and-courses/certificates/medical-laboratory-assistant"
      },
      {
        "id": "page-oct17-source-6",
        "label": "Alberta Biology 20–30 program: water use and ecosystems",
        "url": "https://education.alberta.ca/media/159727/bio203007.pdf"
      }
    ],
    "checkedOn": "2026-10-19",
    "detailsId": "canadian-blood-services-calgary-details"
  },
  "details": {
    "id": "canadian-blood-services-calgary-details",
    "exampleSlug": "canadian-blood-services-calgary",
    "organizationId": "canadian-blood-services-calgary",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "canadian-blood-services-calgary",
      "subtitle": "A donation becomes useful through separation, testing and a reliable history.",
      "caption": "A donation becomes useful through separation, testing and a reliable history.",
      "steps": [
        {
          "text": "A collected donation enters a controlled receiving and identification workflow.",
          "kind": "interpreted",
          "sourceIds": [
            "oct19-source-39",
            "oct19-source-40",
            "oct19-source-41",
            "oct19-source-42",
            "oct19-source-43",
            "oct19-source-44"
          ]
        },
        {
          "text": "Processing separates blood into useful components rather than treating it as one interchangeable liquid.",
          "kind": "interpreted",
          "sourceIds": [
            "oct19-source-39",
            "oct19-source-40",
            "oct19-source-41",
            "oct19-source-42",
            "oct19-source-43",
            "oct19-source-44"
          ]
        },
        {
          "text": "Testing, quality checks and records support the decisions about what may enter the supply chain.",
          "kind": "interpreted",
          "sourceIds": [
            "oct19-source-39",
            "oct19-source-40",
            "oct19-source-41",
            "oct19-source-42",
            "oct19-source-43",
            "oct19-source-44"
          ]
        },
        {
          "text": "Specified storage and distribution conditions preserve the product and its identity until it reaches the hospital workflow.",
          "kind": "interpreted",
          "sourceIds": [
            "oct19-source-39",
            "oct19-source-40",
            "oct19-source-41",
            "oct19-source-42",
            "oct19-source-43",
            "oct19-source-44"
          ]
        }
      ],
      "diagramAlt": "Blood components remain linked to identity, testing and handling records through a production workflow.",
      "diagramProvenance": "Generated fictional teaching illustration; editorial simplification of the cited work. Exact prompts, original images and visual checks: design/example-expansion-2026-10-19/.",
      "discussion": "Why would a correctly processed component still be unusable if its identity or history were uncertain?"
    },
    "roleIds": [
      "work-blood-production",
      "work-medical-laboratory"
    ],
    "pathwayIds": [
      "oct19-route-mla",
      "oct19-route-mlt"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-19"
  },
  "organization": {
    "id": "canadian-blood-services-calgary",
    "name": "Canadian Blood Services — Calgary operations",
    "organizationType": "charity",
    "tagline": "A donation becomes useful through separation, testing and a reliable history.",
    "description": {
      "text": "Canadian Blood Services’ Calgary operations publication describes receiving donations, producing components, donor testing and distribution. The organization’s inspection listing separately identifies Calgary Operations. These are different functions from the diagnostic-services laboratory network listed elsewhere on its site.",
      "kind": "stated",
      "sourceIds": [
        "oct19-source-39",
        "oct19-source-40",
        "oct19-source-41",
        "oct19-source-42",
        "oct19-source-43",
        "oct19-source-44"
      ]
    },
    "problem": {
      "text": "Why is a donation not ready for a patient as soon as it is collected?",
      "kind": "interpreted",
      "sourceIds": [
        "oct19-source-39",
        "oct19-source-40",
        "oct19-source-41",
        "oct19-source-42",
        "oct19-source-43",
        "oct19-source-44"
      ]
    },
    "offering": {
      "text": "Blood-component production, testing and distribution within a national blood system.",
      "kind": "stated",
      "sourceIds": [
        "oct19-source-39",
        "oct19-source-40",
        "oct19-source-41",
        "oct19-source-42",
        "oct19-source-43",
        "oct19-source-44"
      ]
    },
    "beneficiaries": {
      "text": "Patients, hospitals and care teams relying on blood components.",
      "kind": "interpreted",
      "sourceIds": [
        "oct19-source-39",
        "oct19-source-40",
        "oct19-source-41",
        "oct19-source-42",
        "oct19-source-43",
        "oct19-source-44"
      ]
    },
    "headquarters": {
      "text": "Headquarters not separately verified for this example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "Original Calgary operations-facility book and inspection listing establish substantive Calgary operations.",
      "kind": "stated",
      "sourceIds": [
        "oct19-source-39",
        "oct19-source-40",
        "oct19-source-41",
        "oct19-source-42",
        "oct19-source-43",
        "oct19-source-44"
      ]
    },
    "websiteSourceId": "oct19-cbs-home",
    "checkedOn": "2026-10-19"
  },
  "organizationRoles": [
    {
      "organizationId": "canadian-blood-services-calgary",
      "roleId": "work-blood-production",
      "establishes": "related-work",
      "label": "Calgary facility source documents production and testing. Occupational profiles explain related work; the book does not establish a current vacancy or the exact qualifications of every current worker.",
      "location": "Original Calgary operations-facility book and inspection listing establish substantive Calgary operations.",
      "kind": "interpreted",
      "sourceIds": [
        "oct19-source-39",
        "oct19-source-40",
        "oct19-source-41",
        "oct19-source-42",
        "oct19-source-43",
        "oct19-source-44"
      ],
      "checkedOn": "2026-10-19"
    },
    {
      "organizationId": "canadian-blood-services-calgary",
      "roleId": "work-medical-laboratory",
      "establishes": "related-work",
      "label": "Calgary facility source documents production and testing. Occupational profiles explain related work; the book does not establish a current vacancy or the exact qualifications of every current worker.",
      "location": "Original Calgary operations-facility book and inspection listing establish substantive Calgary operations.",
      "kind": "interpreted",
      "sourceIds": [
        "oct19-source-39",
        "oct19-source-40",
        "oct19-source-41",
        "oct19-source-42",
        "oct19-source-43",
        "oct19-source-44"
      ],
      "checkedOn": "2026-10-19"
    }
  ],
  "jobs": [],
  "sources": [],
  "diagram": {
    "image": "/images/story-diagrams/canadian-blood-services-calgary-graphic-novel.webp",
    "heading": "A donation becomes useful through separation, testing and a reliable history.",
    "steps": [
      "A collected donation enters a controlled receiving and identification workflow.",
      "Processing separates blood into useful components rather than treating it as one interchangeable liquid.",
      "Testing, quality checks and records support the decisions about what may enter the supply chain.",
      "Specified storage and distribution conditions preserve the product and its identity until it reaches the hospital workflow."
    ],
    "note": "The model omits clinical release rules and compatibility decisions. A component picture cannot determine whether it is suitable for a patient; testing and professional decisions remain essential. The book is a dated account, not proof of today’s equipment or staffing. No diagnostic laboratory from another city is assigned to Calgary."
  },
  "unitLinks": [
    {
      "unitId": "b20d",
      "why": "Blood components and their functions connect directly. Donation processing, product release and clinical testing are applied workplace contexts, not treatment instructions."
    }
  ]
} satisfies ExampleRecord;
