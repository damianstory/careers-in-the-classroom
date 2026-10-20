import type { ExampleRecord } from "../types";

export default {
  "addedOn": "2026-10-20",
  "example": {
    "slug": "westpower-pump-performance",
    "org": "Westpower",
    "discipline": "Physics",
    "question": "Why can a pump work well at one flow rate and poorly at another?",
    "work": "Westpower supplies and services pumps and other rotating equipment.",
    "localShort": "Westpower lists Calgary operations within its rotating-equipment business.",
    "calgary": "Westpower lists Calgary operations within its rotating-equipment business.",
    "site": "Company presence and company-wide work are independent claims. Do not present every role or project as Calgary-based.",
    "localSourceIds": [
      "page-westpower-pump-performance-oct20-westpower-source-1",
      "page-westpower-pump-performance-oct20-westpower-source-2"
    ],
    "explain": "Compare two fictional systems lifting equal water masses through the same height. Calculate useful gravitational energy and compare it with hypothetical input energy.",
    "prompt": "Why can a pump that turns normally still fail to do the required job efficiently?",
    "conversation": "Why can a pump that turns normally still fail to do the required job efficiently?",
    "mindset": "Physics 20 work and energy supports the lifting model; detailed pump curves and fluid mechanics are extensions. Calgary presence is established, but no particular customer repair is assigned to that workshop.",
    "courses": [
      {
        "course": "Physics 20",
        "topic": "General Outcome C2"
      }
    ],
    "courseFitSourceIds": [
      "page-westpower-pump-performance-oct20-curriculum-3"
    ],
    "roles": [
      {
        "title": "Industrial machinery assembly and maintenance",
        "note": "Inspect, align and maintain rotating equipment.",
        "evidence": "Related work area inferred from documented organization work; not a confirmed job title or current vacancy.",
        "kind": "interpreted",
        "sourceIds": [
          "page-westpower-pump-performance-oct20-westpower-source-1",
          "page-westpower-pump-performance-oct20-westpower-source-2"
        ]
      },
      {
        "title": "Mechanical design and prototyping",
        "note": "Evaluate mechanical requirements and changes to equipment.",
        "evidence": "Related work area inferred from documented organization work; not a confirmed job title or current vacancy.",
        "kind": "interpreted",
        "sourceIds": [
          "page-westpower-pump-performance-oct20-westpower-source-1",
          "page-westpower-pump-performance-oct20-westpower-source-2"
        ]
      }
    ],
    "rolesNote": "No new live job posting proposed. Role links describe work areas, not vacancies.",
    "pathways": [
      {
        "kindLabel": "Apprenticeship",
        "label": "SAIT — Industrial Mechanic (Millwright) apprenticeship",
        "note": "Machinery alignment, maintenance and repair. An apprenticeship route with work-hour and technical-training requirements.",
        "kind": "interpreted",
        "sourceIds": [
          "page-westpower-pump-performance-oct20-pathway-millwright"
        ]
      },
      {
        "kindLabel": "Related education",
        "label": "SAIT — Mechanical Engineering Technology diploma",
        "note": "Mechanical design, testing and manufacturing technology. A technologist route, not professional-engineer licensure.",
        "kind": "interpreted",
        "sourceIds": [
          "page-westpower-pump-performance-oct20-pathway-mechanical"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "Westpower supplies and services pumps and other rotating equipment.",
        "status": "Documented organization work",
        "kind": "stated",
        "sourceIds": [
          "page-westpower-pump-performance-oct20-westpower-source-1",
          "page-westpower-pump-performance-oct20-westpower-source-2"
        ]
      },
      {
        "type": "local connection",
        "claim": "Westpower lists Calgary operations within its rotating-equipment business.",
        "status": "Calgary connection checked separately from company-wide work",
        "kind": "stated",
        "sourceIds": [
          "page-westpower-pump-performance-oct20-westpower-source-1",
          "page-westpower-pump-performance-oct20-westpower-source-2"
        ]
      },
      {
        "type": "course fit",
        "claim": "Physics 20 — General Outcome C2. Physics 20 work and energy supports the lifting model; detailed pump curves and fluid mechanics are extensions. Calgary presence is established, but no particular customer repair is assigned to that workshop.",
        "status": "Verified curriculum anchor; classroom application is editorial",
        "kind": "interpreted",
        "sourceIds": [
          "page-westpower-pump-performance-oct20-curriculum-3"
        ]
      },
      {
        "type": "limits",
        "claim": "Physics 20 work and energy supports the lifting model; detailed pump curves and fluid mechanics are extensions. Calgary presence is established, but no particular customer repair is assigned to that workshop. Company presence and company-wide work are independent claims. Do not present every role or project as Calgary-based.",
        "status": "Scope of the classroom model",
        "kind": "interpreted",
        "sourceIds": [
          "page-westpower-pump-performance-oct20-westpower-source-1",
          "page-westpower-pump-performance-oct20-westpower-source-2",
          "page-westpower-pump-performance-oct20-curriculum-3"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-westpower-pump-performance-oct20-westpower-source-1",
        "label": "westpowergroup.com — official website",
        "url": "https://westpowergroup.com/"
      },
      {
        "id": "page-westpower-pump-performance-oct20-westpower-source-2",
        "label": "westpowergroup.com — contact us",
        "url": "https://westpowergroup.com/contact-us/"
      },
      {
        "id": "page-westpower-pump-performance-oct20-curriculum-3",
        "label": "Alberta curriculum — Physics 30",
        "url": "https://www.alberta.ca/system/files/custom_downloaded_images/edc-physics20-30-performance-standards.pdf"
      },
      {
        "id": "page-westpower-pump-performance-oct20-pathway-millwright",
        "label": "SAIT — Industrial Mechanic (Millwright) apprenticeship",
        "url": "https://www.sait.ca/apprenticeships-and-trades/programs/industrial-mechanic-millwright"
      },
      {
        "id": "page-westpower-pump-performance-oct20-pathway-mechanical",
        "label": "SAIT — Mechanical Engineering Technology diploma",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/mechanical-engineering-technology"
      }
    ],
    "checkedOn": "2026-10-20",
    "detailsId": "westpower-pump-performance-details"
  },
  "details": {
    "id": "westpower-pump-performance-details",
    "exampleSlug": "westpower-pump-performance",
    "organizationId": "westpower",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "westpower-pump-performance",
      "subtitle": "Moving liquid requires energy, and useful output changes with operating conditions.",
      "caption": "Moving liquid requires energy, and useful output changes with operating conditions.",
      "steps": [
        {
          "text": "Define the duty: specify the required movement of liquid and operating conditions.",
          "kind": "interpreted",
          "sourceIds": [
            "oct20-westpower-source-1",
            "oct20-westpower-source-2",
            "oct20-curriculum-3"
          ]
        },
        {
          "text": "Compare performance: the same pump does not behave identically at every operating point.",
          "kind": "interpreted",
          "sourceIds": [
            "oct20-westpower-source-1",
            "oct20-westpower-source-2",
            "oct20-curriculum-3"
          ]
        },
        {
          "text": "Inspect the equipment: mechanical condition can affect reliability and performance.",
          "kind": "interpreted",
          "sourceIds": [
            "oct20-westpower-source-1",
            "oct20-westpower-source-2",
            "oct20-curriculum-3"
          ]
        },
        {
          "text": "Test the change: measurements are needed to judge whether a repair or adjustment helped.",
          "kind": "interpreted",
          "sourceIds": [
            "oct20-westpower-source-1",
            "oct20-westpower-source-2",
            "oct20-curriculum-3"
          ]
        }
      ],
      "diagramAlt": "Motor energy input → pump → liquid raised through height, with losses. Keep an energy diagram separate from a generic performance curve.",
      "diagramProvenance": "Generated fictional teaching illustration; editorial simplification of cited work. Prompts, originals and review: design/example-expansion-2026-10-20/.",
      "discussion": "Why can a pump that turns normally still fail to do the required job efficiently?"
    },
    "roleIds": [
      "work-millwright",
      "work-mechanical"
    ],
    "pathwayIds": [
      "route-millwright",
      "oct18-route-mechanical"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-20"
  },
  "organization": {
    "id": "westpower",
    "name": "Westpower",
    "tagline": "Moving liquid requires energy, and useful output changes with operating conditions.",
    "description": {
      "text": "Westpower supplies and services pumps and other rotating equipment.",
      "kind": "stated",
      "sourceIds": [
        "oct20-westpower-source-1",
        "oct20-westpower-source-2"
      ]
    },
    "problem": {
      "text": "Why can a pump work well at one flow rate and poorly at another?",
      "kind": "interpreted",
      "sourceIds": [
        "oct20-westpower-source-1",
        "oct20-westpower-source-2"
      ]
    },
    "offering": {
      "text": "Westpower supplies and services pumps and other rotating equipment.",
      "kind": "stated",
      "sourceIds": [
        "oct20-westpower-source-1",
        "oct20-westpower-source-2"
      ]
    },
    "beneficiaries": {
      "text": "Industrial operators maintaining and improving equipment performance.",
      "kind": "interpreted",
      "sourceIds": [
        "oct20-westpower-source-1",
        "oct20-westpower-source-2"
      ]
    },
    "headquarters": {
      "text": "Headquarters not separately verified for this example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "Westpower lists Calgary operations within its rotating-equipment business.",
      "kind": "stated",
      "sourceIds": [
        "oct20-westpower-source-1",
        "oct20-westpower-source-2"
      ]
    },
    "websiteSourceId": "oct20-westpower-source-1",
    "checkedOn": "2026-10-20"
  },
  "organizationRoles": [
    {
      "organizationId": "westpower",
      "roleId": "work-millwright",
      "establishes": "work-area",
      "label": "Related work area: Inspect, align and maintain rotating equipment.",
      "location": "Westpower lists Calgary operations within its rotating-equipment business. Company presence and company-wide work are independent claims. Do not present every role or project as Calgary-based.",
      "kind": "interpreted",
      "sourceIds": [
        "oct20-westpower-source-1",
        "oct20-westpower-source-2"
      ],
      "checkedOn": "2026-10-20"
    },
    {
      "organizationId": "westpower",
      "roleId": "work-mechanical",
      "establishes": "work-area",
      "label": "Related work area: Evaluate mechanical requirements and changes to equipment.",
      "location": "Westpower lists Calgary operations within its rotating-equipment business. Company presence and company-wide work are independent claims. Do not present every role or project as Calgary-based.",
      "kind": "interpreted",
      "sourceIds": [
        "oct20-westpower-source-1",
        "oct20-westpower-source-2"
      ],
      "checkedOn": "2026-10-20"
    }
  ],
  "jobs": [],
  "sources": [
    {
      "id": "oct20-westpower-source-1",
      "label": "westpowergroup.com — official website",
      "url": "https://westpowergroup.com/",
      "checkedOn": "2026-10-20"
    },
    {
      "id": "oct20-westpower-source-2",
      "label": "westpowergroup.com — contact us",
      "url": "https://westpowergroup.com/contact-us/",
      "checkedOn": "2026-10-20"
    }
  ],
  "diagram": {
    "image": "/images/story-diagrams/westpower-pump-performance-graphic-novel.webp",
    "heading": "Moving liquid requires energy, and useful output changes with operating conditions.",
    "steps": [
      "Define the duty: specify the required movement of liquid and operating conditions.",
      "Compare performance: the same pump does not behave identically at every operating point.",
      "Inspect the equipment: mechanical condition can affect reliability and performance.",
      "Test the change: measurements are needed to judge whether a repair or adjustment helped."
    ],
    "note": "Physics 20 work and energy supports the lifting model; detailed pump curves and fluid mechanics are extensions. Calgary presence is established, but no particular customer repair is assigned to that workshop."
  },
  "unitLinks": [
    {
      "unitId": "p20c",
      "why": "Physics 20 — General Outcome C2. Physics 20 work and energy supports the lifting model; detailed pump curves and fluid mechanics are extensions. Calgary presence is established, but no particular customer repair is assigned to that workshop."
    }
  ]
} satisfies ExampleRecord;
