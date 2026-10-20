import type { ExampleRecord } from "../types";

export default {
  "addedOn": "2026-10-20",
  "example": {
    "slug": "sfc-fuel-cell-battery-support",
    "org": "SFC Energy Canada / former Simark Controls",
    "discipline": "Chemistry",
    "question": "How can a fuel cell keep a remote battery charged?",
    "work": "SFC Energy Canada supplies and integrates power and control solutions, including fuel-cell systems.",
    "localShort": "SFC Energy Canada lists a Calgary headquarters and local integration and service capabilities.",
    "calgary": "SFC Energy Canada lists a Calgary headquarters and local integration and service capabilities.",
    "site": "Company presence and company-wide work are independent claims. Do not present every role or project as Calgary-based.",
    "localSourceIds": [
      "page-sfc-fuel-cell-battery-support-oct20-sfc-energy-canada-source-1",
      "page-sfc-fuel-cell-battery-support-oct20-sfc-energy-canada-source-2"
    ],
    "explain": "Use fictional daily load and charging values to draw an energy-flow diagram. Explain which values are energy amounts and which describe a rate.",
    "prompt": "Why include a battery in a system that already has a fuel cell?",
    "conversation": "Why include a battery in a system that already has a fuel cell?",
    "mindset": "Fuel cells connect to Chemistry 30 electrochemistry. The model is not a wiring guide or efficiency claim. Calgary integration/service work does not mean that every fuel cell is manufactured locally.",
    "courses": [
      {
        "course": "Chemistry 30",
        "topic": "30–B2.1k; 30–B2.3sts"
      }
    ],
    "courseFitSourceIds": [
      "page-sfc-fuel-cell-battery-support-oct20-curriculum-2"
    ],
    "roles": [
      {
        "title": "Instrumentation and controls",
        "note": "Connect monitoring information with system-control decisions.",
        "evidence": "Related work area inferred from documented organization work; not a confirmed job title or current vacancy.",
        "kind": "interpreted",
        "sourceIds": [
          "page-sfc-fuel-cell-battery-support-oct20-sfc-energy-canada-source-1",
          "page-sfc-fuel-cell-battery-support-oct20-sfc-energy-canada-source-2"
        ]
      },
      {
        "title": "Power-electronics design",
        "note": "Consider how conversion, storage and loads fit together.",
        "evidence": "Related work area inferred from documented organization work; not a confirmed job title or current vacancy.",
        "kind": "interpreted",
        "sourceIds": [
          "page-sfc-fuel-cell-battery-support-oct20-sfc-energy-canada-source-1",
          "page-sfc-fuel-cell-battery-support-oct20-sfc-energy-canada-source-2"
        ]
      }
    ],
    "rolesNote": "No new live job posting proposed. Role links describe work areas, not vacancies.",
    "pathways": [
      {
        "kindLabel": "Related education",
        "label": "SAIT — Electrical Engineering Technology diploma",
        "note": "Electrical systems, circuits, controls and testing. A technologist route; an engineer role requires its own education and professional checks.",
        "kind": "interpreted",
        "sourceIds": [
          "page-sfc-fuel-cell-battery-support-oct20-pathway-electrical"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "SFC Energy Canada supplies and integrates power and control solutions, including fuel-cell systems.",
        "status": "Documented organization work",
        "kind": "stated",
        "sourceIds": [
          "page-sfc-fuel-cell-battery-support-oct20-sfc-energy-canada-source-1",
          "page-sfc-fuel-cell-battery-support-oct20-sfc-energy-canada-source-2"
        ]
      },
      {
        "type": "local connection",
        "claim": "SFC Energy Canada lists a Calgary headquarters and local integration and service capabilities.",
        "status": "Calgary connection checked separately from company-wide work",
        "kind": "stated",
        "sourceIds": [
          "page-sfc-fuel-cell-battery-support-oct20-sfc-energy-canada-source-1",
          "page-sfc-fuel-cell-battery-support-oct20-sfc-energy-canada-source-2"
        ]
      },
      {
        "type": "course fit",
        "claim": "Chemistry 30 — 30–B2.1k; 30–B2.3sts. Fuel cells connect to Chemistry 30 electrochemistry. The model is not a wiring guide or efficiency claim. Calgary integration/service work does not mean that every fuel cell is manufactured locally.",
        "status": "Verified curriculum anchor; classroom application is editorial",
        "kind": "interpreted",
        "sourceIds": [
          "page-sfc-fuel-cell-battery-support-oct20-curriculum-2"
        ]
      },
      {
        "type": "limits",
        "claim": "Fuel cells connect to Chemistry 30 electrochemistry. The model is not a wiring guide or efficiency claim. Calgary integration/service work does not mean that every fuel cell is manufactured locally. Company presence and company-wide work are independent claims. Do not present every role or project as Calgary-based.",
        "status": "Scope of the classroom model",
        "kind": "interpreted",
        "sourceIds": [
          "page-sfc-fuel-cell-battery-support-oct20-sfc-energy-canada-source-1",
          "page-sfc-fuel-cell-battery-support-oct20-sfc-energy-canada-source-2",
          "page-sfc-fuel-cell-battery-support-oct20-curriculum-2"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-sfc-fuel-cell-battery-support-oct20-sfc-energy-canada-source-1",
        "label": "www.sfc-energy.ca — official website",
        "url": "https://www.sfc-energy.ca/"
      },
      {
        "id": "page-sfc-fuel-cell-battery-support-oct20-sfc-energy-canada-source-2",
        "label": "www.sfc-energy.ca — energy",
        "url": "https://www.sfc-energy.ca/products/energy/"
      },
      {
        "id": "page-sfc-fuel-cell-battery-support-oct20-curriculum-2",
        "label": "Alberta curriculum — Chemistry 20",
        "url": "https://education.alberta.ca/media/159730/chem2030_07.pdf"
      },
      {
        "id": "page-sfc-fuel-cell-battery-support-oct20-pathway-electrical",
        "label": "SAIT — Electrical Engineering Technology diploma",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/electrical-engineering-technology"
      }
    ],
    "checkedOn": "2026-10-20",
    "detailsId": "sfc-fuel-cell-battery-support-details"
  },
  "details": {
    "id": "sfc-fuel-cell-battery-support-details",
    "exampleSlug": "sfc-fuel-cell-battery-support",
    "organizationId": "sfc-energy-canada",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "sfc-fuel-cell-battery-support",
      "subtitle": "A remote power system needs a plan for when the battery loses charge.",
      "caption": "A remote power system needs a plan for when the battery loses charge.",
      "steps": [
        {
          "text": "Estimate the demand: the equipment requires energy over time.",
          "kind": "interpreted",
          "sourceIds": [
            "oct20-sfc-energy-canada-source-1",
            "oct20-sfc-energy-canada-source-2",
            "oct20-curriculum-2"
          ]
        },
        {
          "text": "Store a reserve: a battery supplies the connected load.",
          "kind": "interpreted",
          "sourceIds": [
            "oct20-sfc-energy-canada-source-1",
            "oct20-sfc-energy-canada-source-2",
            "oct20-curriculum-2"
          ]
        },
        {
          "text": "Replenish the reserve: a fuel-cell system can charge the battery when its control conditions call for it.",
          "kind": "interpreted",
          "sourceIds": [
            "oct20-sfc-energy-canada-source-1",
            "oct20-sfc-energy-canada-source-2",
            "oct20-curriculum-2"
          ]
        },
        {
          "text": "Check the whole system: fuel supply, losses, operating conditions and maintenance affect useful service.",
          "kind": "interpreted",
          "sourceIds": [
            "oct20-sfc-energy-canada-source-1",
            "oct20-sfc-energy-canada-source-2",
            "oct20-curriculum-2"
          ]
        }
      ],
      "diagramAlt": "Fuel chemical energy → fuel cell → battery and electrical load, with separate heat-loss arrows. Show control information as dashed arrows distinct from energy flow.",
      "diagramProvenance": "Generated fictional teaching illustration; editorial simplification of cited work. Prompts, originals and review: design/example-expansion-2026-10-20/.",
      "discussion": "Why include a battery in a system that already has a fuel cell?"
    },
    "roleIds": [
      "work-controls",
      "work-power"
    ],
    "pathwayIds": [
      "route-electrical"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-20"
  },
  "organization": {
    "id": "sfc-energy-canada",
    "name": "SFC Energy Canada / former Simark Controls",
    "tagline": "A remote power system needs a plan for when the battery loses charge.",
    "description": {
      "text": "SFC Energy Canada supplies and integrates power and control solutions, including fuel-cell systems.",
      "kind": "stated",
      "sourceIds": [
        "oct20-sfc-energy-canada-source-1",
        "oct20-sfc-energy-canada-source-2"
      ]
    },
    "problem": {
      "text": "How can a fuel cell keep a remote battery charged?",
      "kind": "interpreted",
      "sourceIds": [
        "oct20-sfc-energy-canada-source-1",
        "oct20-sfc-energy-canada-source-2"
      ]
    },
    "offering": {
      "text": "SFC Energy Canada supplies and integrates power and control solutions, including fuel-cell systems.",
      "kind": "stated",
      "sourceIds": [
        "oct20-sfc-energy-canada-source-1",
        "oct20-sfc-energy-canada-source-2"
      ]
    },
    "beneficiaries": {
      "text": "Operators needing dependable power away from convenient grid connections.",
      "kind": "interpreted",
      "sourceIds": [
        "oct20-sfc-energy-canada-source-1",
        "oct20-sfc-energy-canada-source-2"
      ]
    },
    "headquarters": {
      "text": "Headquarters not separately verified for this example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "SFC Energy Canada lists a Calgary headquarters and local integration and service capabilities.",
      "kind": "stated",
      "sourceIds": [
        "oct20-sfc-energy-canada-source-1",
        "oct20-sfc-energy-canada-source-2"
      ]
    },
    "websiteSourceId": "oct20-sfc-energy-canada-source-1",
    "checkedOn": "2026-10-20"
  },
  "organizationRoles": [
    {
      "organizationId": "sfc-energy-canada",
      "roleId": "work-controls",
      "establishes": "work-area",
      "label": "Related work area: Connect monitoring information with system-control decisions.",
      "location": "SFC Energy Canada lists a Calgary headquarters and local integration and service capabilities. Company presence and company-wide work are independent claims. Do not present every role or project as Calgary-based.",
      "kind": "interpreted",
      "sourceIds": [
        "oct20-sfc-energy-canada-source-1",
        "oct20-sfc-energy-canada-source-2"
      ],
      "checkedOn": "2026-10-20"
    },
    {
      "organizationId": "sfc-energy-canada",
      "roleId": "work-power",
      "establishes": "work-area",
      "label": "Related work area: Consider how conversion, storage and loads fit together.",
      "location": "SFC Energy Canada lists a Calgary headquarters and local integration and service capabilities. Company presence and company-wide work are independent claims. Do not present every role or project as Calgary-based.",
      "kind": "interpreted",
      "sourceIds": [
        "oct20-sfc-energy-canada-source-1",
        "oct20-sfc-energy-canada-source-2"
      ],
      "checkedOn": "2026-10-20"
    }
  ],
  "jobs": [],
  "sources": [
    {
      "id": "oct20-sfc-energy-canada-source-1",
      "label": "www.sfc-energy.ca — official website",
      "url": "https://www.sfc-energy.ca/",
      "checkedOn": "2026-10-20"
    },
    {
      "id": "oct20-sfc-energy-canada-source-2",
      "label": "www.sfc-energy.ca — energy",
      "url": "https://www.sfc-energy.ca/products/energy/",
      "checkedOn": "2026-10-20"
    }
  ],
  "diagram": {
    "image": "/images/story-diagrams/sfc-fuel-cell-battery-support-graphic-novel.webp",
    "heading": "A remote power system needs a plan for when the battery loses charge.",
    "steps": [
      "Estimate the demand: the equipment requires energy over time.",
      "Store a reserve: a battery supplies the connected load.",
      "Replenish the reserve: a fuel-cell system can charge the battery when its control conditions call for it.",
      "Check the whole system: fuel supply, losses, operating conditions and maintenance affect useful service."
    ],
    "note": "Fuel cells connect to Chemistry 30 electrochemistry. The model is not a wiring guide or efficiency claim. Calgary integration/service work does not mean that every fuel cell is manufactured locally."
  },
  "unitLinks": [
    {
      "unitId": "c30b",
      "why": "Chemistry 30 — 30–B2.1k; 30–B2.3sts. Fuel cells connect to Chemistry 30 electrochemistry. The model is not a wiring guide or efficiency claim. Calgary integration/service work does not mean that every fuel cell is manufactured locally."
    }
  ]
} satisfies ExampleRecord;
