import type { ExampleRecord } from "../types";

export default {
  "addedOn": "2026-10-18",
  "example": {
    "slug": "standens",
    "org": "Standen’s (IMT)",
    "discipline": "Physics",
    "question": "Why can a steel spring bend repeatedly without staying bent?",
    "work": "IMT Standen’s manufactures leaf springs and suspension components in Calgary. Its product information describes modelling, analysis and controlled heat treatment as part of its manufacturing work. The useful classroom problem is the balance between flexibility and a component that keeps its shape. This is a manufacturing story; a 2026 announcement places distribution through a UAP partnership.",
    "localShort": "Calgary manufacturing facility stated on current company homepage.",
    "calgary": "Calgary manufacturing facility stated on current company homepage.",
    "site": "Calgary manufacturing facility stated on current company homepage.",
    "localSourceIds": [
      "page-oct18-source-1",
      "page-oct18-source-2",
      "page-oct18-source-3",
      "page-oct18-source-4"
    ],
    "explain": "Use an invented table: load 0, 100, 200, 300 N; deflection 0, 2, 4, 6 mm. Plot load against deflection, calculate the model stiffness, and predict 400 N only within the assumed elastic range. A second sample retains 1 mm deflection after unloading: discuss why the same model may no longer describe it.",
    "prompt": "Would the stiffest possible spring always be the best suspension spring?",
    "conversation": "Would the stiffest possible spring always be the best suspension spring?",
    "mindset": "The numbers are invented teaching data, not Standen’s test results. A leaf-spring assembly is not necessarily linear at every load. Spring stiffness, damping and material strength are different properties.",
    "courses": [
      {
        "course": "Physics 20",
        "topic": "D1 — oscillatory motion and restoring force"
      }
    ],
    "courseFitSourceIds": [
      "page-oct18-source-7"
    ],
    "roles": [
      {
        "title": "Mechanical design and analysis",
        "note": "Turn a performance need into a component or system that can be built and checked.",
        "evidence": "Company lists modelling, analysis and manufacturing methods; the three work profiles are editorial interpretations of those activities, not verified job titles.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-1",
          "page-oct18-source-2",
          "page-oct18-source-3",
          "page-oct18-source-4"
        ]
      },
      {
        "title": "Manufacturing and quality work",
        "note": "Make repeatable components and check that the output matches a specification.",
        "evidence": "Company lists modelling, analysis and manufacturing methods; the three work profiles are editorial interpretations of those activities, not verified job titles.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-1",
          "page-oct18-source-2",
          "page-oct18-source-3",
          "page-oct18-source-4"
        ]
      },
      {
        "title": "Quality documentation and verification",
        "note": "Keep the chain from a test or batch to a decision clear enough to inspect.",
        "evidence": "Company lists modelling, analysis and manufacturing methods; the three work profiles are editorial interpretations of those activities, not verified job titles.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-1",
          "page-oct18-source-2",
          "page-oct18-source-3",
          "page-oct18-source-4"
        ]
      }
    ],
    "rolesNote": "Source-backed work areas and related occupations, not a staff roster or a list of current vacancies. Employer careers page displays a loading message rather than individual postings. No accepting-application claim or job card.",
    "pathways": [
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Mechanical Engineering Technology",
        "note": "Design, modelling and mechanical-system analysis. A technical route; does not itself confer professional engineer registration.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-5"
        ]
      },
      {
        "kindLabel": "Apprenticeship technical training",
        "label": "SAIT — Machinist",
        "note": "Precision machining, drawings and measurement. Requires the apprenticeship process and workplace experience; technical school alone is not the full trade qualification.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-6"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "IMT Standen’s manufactures leaf springs and suspension components in Calgary. Its product information describes modelling, analysis and controlled heat treatment as part of its manufacturing work. The useful classroom problem is the balance between flexibility and a component that keeps its shape. This is a manufacturing story; a 2026 announcement places distribution through a UAP partnership.",
        "status": "Company-stated work with source limits preserved",
        "kind": "stated",
        "sourceIds": [
          "page-oct18-source-1",
          "page-oct18-source-2",
          "page-oct18-source-3",
          "page-oct18-source-4"
        ]
      },
      {
        "type": "local connection",
        "claim": "Calgary manufacturing facility stated on current company homepage.",
        "status": "Source-backed Calgary connection",
        "kind": "stated",
        "sourceIds": [
          "page-oct18-source-1",
          "page-oct18-source-2",
          "page-oct18-source-3",
          "page-oct18-source-4"
        ]
      },
      {
        "type": "course fit",
        "claim": "Alberta performance standards, printed pp. 17–18: restoring force, displacement and spring constant. Direct spring-model connection; fatigue, metallurgy and industrial leaf assemblies are extensions.",
        "status": "Editorial application of source-checked curriculum concepts",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-7"
        ]
      },
      {
        "type": "limits",
        "claim": "The classroom data and generic spring assembly must remain labelled illustrative. Do not imply the example teaches actual heat-treatment settings or gives a specification for a roadworthy spring.",
        "status": "Scope of this example",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-1",
          "page-oct18-source-2",
          "page-oct18-source-3",
          "page-oct18-source-4"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-oct18-source-1",
        "label": "standens.com — official website",
        "url": "https://standens.com/"
      },
      {
        "id": "page-oct18-source-2",
        "label": "standens.com — leaf springs",
        "url": "https://standens.com/leaf-springs/"
      },
      {
        "id": "page-oct18-source-3",
        "label": "standens.com — standens ordering and service announcement",
        "url": "https://standens.com/standens-ordering-and-service-announcement/"
      },
      {
        "id": "page-oct18-source-4",
        "label": "standens.com — careers",
        "url": "https://standens.com/careers/"
      },
      {
        "id": "page-oct18-source-5",
        "label": "SAIT — Mechanical Engineering Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/mechanical-engineering-technology"
      },
      {
        "id": "page-oct18-source-6",
        "label": "SAIT — Machinist",
        "url": "https://www.sait.ca/apprenticeships-and-trades/programs/machinist"
      },
      {
        "id": "page-oct18-source-7",
        "label": "alberta.ca — edc physics20 30 performance standards.pdf",
        "url": "https://www.alberta.ca/system/files/custom_downloaded_images/edc-physics20-30-performance-standards.pdf"
      }
    ],
    "checkedOn": "2026-10-18",
    "detailsId": "standens-details"
  },
  "details": {
    "id": "standens-details",
    "exampleSlug": "standens",
    "organizationId": "standens",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "standens",
      "subtitle": "A spring has to move under a load and still be ready for the next one.",
      "caption": "A spring has to move under a load and still be ready for the next one.",
      "steps": [
        {
          "text": "A load bends a spring away from its unloaded shape. The spring exerts a restoring force.",
          "kind": "interpreted",
          "sourceIds": [
            "oct18-source-1",
            "oct18-source-2",
            "oct18-source-3",
            "oct18-source-4",
            "oct18-source-7"
          ]
        },
        {
          "text": "In an ideal elastic model, increasing deflection increases restoring force. A real component has a range over which that model is useful.",
          "kind": "interpreted",
          "sourceIds": [
            "oct18-source-1",
            "oct18-source-2",
            "oct18-source-3",
            "oct18-source-4",
            "oct18-source-7"
          ]
        },
        {
          "text": "Material, geometry and manufacturing choices affect performance. Standen’s describes modelling and heat-treatment methods; the illustration is not its production specification.",
          "kind": "interpreted",
          "sourceIds": [
            "oct18-source-1",
            "oct18-source-2",
            "oct18-source-3",
            "oct18-source-4",
            "oct18-source-7"
          ]
        },
        {
          "text": "Testing compares the component with its intended duty. A spring that remains deformed after unloading raises a different question from one that returns to its starting shape.",
          "kind": "interpreted",
          "sourceIds": [
            "oct18-source-1",
            "oct18-source-2",
            "oct18-source-3",
            "oct18-source-4",
            "oct18-source-7"
          ]
        }
      ],
      "diagramAlt": "A spring bends under load and returns toward its unloaded shape; arrows show the forces and test sequence.",
      "diagramProvenance": "Generated fictional teaching illustration; source-grounded editorial simplification. Prompts and visual review: design/example-expansion-2026-10-18/.",
      "discussion": "Would the stiffest possible spring always be the best suspension spring?"
    },
    "roleIds": [
      "work-mechanical",
      "work-manufacturing",
      "work-quality"
    ],
    "pathwayIds": [
      "oct18-route-mechanical",
      "oct18-route-machinist"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-18"
  },
  "organization": {
    "id": "standens",
    "name": "Standen’s (IMT)",
    "organizationType": "company",
    "tagline": "A spring has to move under a load and still be ready for the next one.",
    "description": {
      "text": "IMT Standen’s manufactures leaf springs and suspension components in Calgary. Its product information describes modelling, analysis and controlled heat treatment as part of its manufacturing work. The useful classroom problem is the balance between flexibility and a component that keeps its shape. This is a manufacturing story; a 2026 announcement places distribution through a UAP partnership.",
      "kind": "stated",
      "sourceIds": [
        "oct18-source-1",
        "oct18-source-2",
        "oct18-source-3",
        "oct18-source-4"
      ]
    },
    "problem": {
      "text": "Why can a steel spring bend repeatedly without staying bent?",
      "kind": "interpreted",
      "sourceIds": [
        "oct18-source-1",
        "oct18-source-2",
        "oct18-source-3",
        "oct18-source-4"
      ]
    },
    "offering": {
      "text": "Leaf springs and suspension components",
      "kind": "stated",
      "sourceIds": [
        "oct18-source-1",
        "oct18-source-2",
        "oct18-source-3",
        "oct18-source-4"
      ]
    },
    "beneficiaries": {
      "text": "Vehicle and equipment makers, service businesses and people who depend on suspension components.",
      "kind": "interpreted",
      "sourceIds": [
        "oct18-source-1",
        "oct18-source-2",
        "oct18-source-3",
        "oct18-source-4"
      ]
    },
    "headquarters": {
      "text": "Headquarters not separately verified for this example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "Calgary manufacturing facility stated on current company homepage.",
      "kind": "stated",
      "sourceIds": [
        "oct18-source-1",
        "oct18-source-2",
        "oct18-source-3",
        "oct18-source-4"
      ]
    },
    "websiteSourceId": "oct18-source-1",
    "checkedOn": "2026-10-18",
    "careersSourceId": "oct18-source-4"
  },
  "organizationRoles": [
    {
      "organizationId": "standens",
      "roleId": "work-mechanical",
      "establishes": "related-work",
      "label": "Company lists modelling, analysis and manufacturing methods; the three work profiles are editorial interpretations of those activities, not verified job titles.",
      "kind": "interpreted",
      "sourceIds": [
        "oct18-source-1",
        "oct18-source-2",
        "oct18-source-3",
        "oct18-source-4"
      ],
      "checkedOn": "2026-10-18"
    },
    {
      "organizationId": "standens",
      "roleId": "work-manufacturing",
      "establishes": "related-work",
      "label": "Company lists modelling, analysis and manufacturing methods; the three work profiles are editorial interpretations of those activities, not verified job titles.",
      "kind": "interpreted",
      "sourceIds": [
        "oct18-source-1",
        "oct18-source-2",
        "oct18-source-3",
        "oct18-source-4"
      ],
      "checkedOn": "2026-10-18"
    },
    {
      "organizationId": "standens",
      "roleId": "work-quality",
      "establishes": "related-work",
      "label": "Company lists modelling, analysis and manufacturing methods; the three work profiles are editorial interpretations of those activities, not verified job titles.",
      "kind": "interpreted",
      "sourceIds": [
        "oct18-source-1",
        "oct18-source-2",
        "oct18-source-3",
        "oct18-source-4"
      ],
      "checkedOn": "2026-10-18"
    }
  ],
  "jobs": [],
  "sources": [],
  "diagram": {
    "image": "/images/story-diagrams/standens-graphic-novel.webp",
    "heading": "A spring has to move under a load and still be ready for the next one.",
    "steps": [
      "A load bends a spring away from its unloaded shape. The spring exerts a restoring force.",
      "In an ideal elastic model, increasing deflection increases restoring force. A real component has a range over which that model is useful.",
      "Material, geometry and manufacturing choices affect performance. Standen’s describes modelling and heat-treatment methods; the illustration is not its production specification.",
      "Testing compares the component with its intended duty. A spring that remains deformed after unloading raises a different question from one that returns to its starting shape."
    ],
    "note": "The numbers are invented teaching data, not Standen’s test results. A leaf-spring assembly is not necessarily linear at every load. Spring stiffness, damping and material strength are different properties."
  },
  "unitLinks": [
    {
      "unitId": "p20d",
      "why": "Alberta performance standards, printed pp. 17–18: restoring force, displacement and spring constant. Direct spring-model connection; fatigue, metallurgy and industrial leaf assemblies are extensions."
    }
  ]
} satisfies ExampleRecord;
