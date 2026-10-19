import type { ExampleRecord } from "../types";

export default {
  "addedOn": "2026-10-19",
  "example": {
    "slug": "canada-malting",
    "org": "Canada Malting — Calgary malt house",
    "discipline": "Biology",
    "question": "Why would a factory start a seed growing, then dry it?",
    "work": "Canada Malting identifies a Calgary malt house and describes grain selection, steeping, germination and kilning. Its company information also describes grain/malt sample checks. The story follows controlled germination rather than presenting malting as yeast fermentation or claiming every company-wide laboratory activity occurs at Calgary.",
    "localShort": "Original company locations page explicitly identifies a Calgary malt house.",
    "calgary": "Original company locations page explicitly identifies a Calgary malt house.",
    "site": "Detailed process description is company-wide; no exact Calgary batch settings, output or individual test method is asserted.",
    "localSourceIds": [
      "page-oct19-source-51",
      "page-oct19-source-52",
      "page-oct19-source-53",
      "page-oct19-source-54",
      "page-oct19-source-55"
    ],
    "explain": "Compare invented daily records for grain moisture, growth stage and temperature. Decide what further observations would help distinguish an intended process change from uncontrolled spoilage. Do not grow mould or produce food in this activity.",
    "prompt": "Why would stopping growth at the right stage be as important as starting it?",
    "conversation": "Why would stopping growth at the right stage be as important as starting it?",
    "mindset": "Malting is controlled grain germination and drying; it is not itself fermentation. Enzyme and seed examples extend core biology; do not call a growth record a company operating recipe.",
    "courses": [
      {
        "course": "Biology 20",
        "topic": "C — cellular processes and energy; enzyme inquiry as an extension"
      }
    ],
    "courseFitSourceIds": [
      "page-oct17-source-6"
    ],
    "roles": [
      {
        "title": "Process and plant operations",
        "note": "Keep processing equipment running safely and learn from its measurements.",
        "evidence": "Employer describes grain/malt testing and process stages. Laboratory functions are company-wide; each test has not been located specifically at Calgary.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct19-source-51",
          "page-oct19-source-52",
          "page-oct19-source-53",
          "page-oct19-source-54",
          "page-oct19-source-55"
        ]
      },
      {
        "title": "Laboratory analysis",
        "note": "Make measurements that other people can trust. A laboratory worker prepares samples, uses a method consistently and records enough detail for someone else to interpret the result.",
        "evidence": "Employer describes grain/malt testing and process stages. Laboratory functions are company-wide; each test has not been located specifically at Calgary.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct19-source-51",
          "page-oct19-source-52",
          "page-oct19-source-53",
          "page-oct19-source-54",
          "page-oct19-source-55"
        ]
      }
    ],
    "rolesNote": "Work areas and related occupations, not a staff roster or a list of current vacancies. No verified individual posting was selected. Employer services/work-area evidence is not a live vacancy.",
    "pathways": [
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Power Engineering Technology",
        "note": "Thermal-energy systems and plant operations. Power-engineer certification requires its applicable exams and experience; this is distinct from a professional engineering degree. Check current admissions and intake before applying; this draft does not promise entry or employment.",
        "kind": "interpreted",
        "sourceIds": [
          "page-depth-sait-power"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Chemical Laboratory Technology",
        "note": "Chemical analysis, samples and laboratory practice. A laboratory route; not a medical licence or automatic research-scientist qualification. Check current admissions and intake before applying; this draft does not promise entry or employment.",
        "kind": "interpreted",
        "sourceIds": [
          "page-expansion-source-6"
        ]
      },
      {
        "kindLabel": "BSc specialization",
        "label": "University of Alberta — Nutrition and Food Science — Food Science and Technology",
        "note": "Food manufacturing, preservation, storage and quality assurance. An Alberta degree route relevant to food science; it is not a universal minimum for cheese-production or malt-house jobs.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct19-source-55"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "Canada Malting identifies a Calgary malt house and describes grain selection, steeping, germination and kilning. Its company information also describes grain/malt sample checks. The story follows controlled germination rather than presenting malting as yeast fermentation or claiming every company-wide laboratory activity occurs at Calgary.",
        "status": "Source-backed employer work with local and historical limits retained",
        "kind": "stated",
        "sourceIds": [
          "page-oct19-source-51",
          "page-oct19-source-52",
          "page-oct19-source-53",
          "page-oct19-source-54",
          "page-oct19-source-55"
        ]
      },
      {
        "type": "local connection",
        "claim": "Original company locations page explicitly identifies a Calgary malt house.",
        "status": "Documented Calgary work; regional operations are distinguished",
        "kind": "stated",
        "sourceIds": [
          "page-oct19-source-51",
          "page-oct19-source-52",
          "page-oct19-source-53",
          "page-oct19-source-54",
          "page-oct19-source-55"
        ]
      },
      {
        "type": "course fit",
        "claim": "Living cells, energy use and controlled investigation connect to cellular processes. Malting/seed development is an industrial application; do not mislabel it as a required fermentation experiment.",
        "status": "source-checked editorial fit; application extensions explicit",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct17-source-6"
        ]
      },
      {
        "type": "limits",
        "claim": "The Power Engineering Technology diploma is related plant-systems preparation, not a claim that it is required for every malt-house operator. The suspended Olds full-time brewing diploma is excluded. Detailed process description is company-wide; no exact Calgary batch settings, output or individual test method is asserted.",
        "status": "Scope of the classroom example",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct19-source-51",
          "page-oct19-source-52",
          "page-oct19-source-53",
          "page-oct19-source-54",
          "page-oct19-source-55"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-oct19-source-51",
        "label": "canadamalting.com — official website",
        "url": "https://canadamalting.com/"
      },
      {
        "id": "page-oct19-source-52",
        "label": "canadamalting.com — contactez nous",
        "url": "https://canadamalting.com/fr/contactez-nous/"
      },
      {
        "id": "page-oct19-source-53",
        "label": "canadamalting.com — process",
        "url": "https://canadamalting.com/process/"
      },
      {
        "id": "page-oct19-source-54",
        "label": "canadamalting.com — careers",
        "url": "https://canadamalting.com/careers/"
      },
      {
        "id": "page-oct19-source-55",
        "label": "ualberta.ca — bachelor of science in nutrition and food science food science and technology specialization.html",
        "url": "https://www.ualberta.ca/en/undergraduate-programs/bachelor-of-science-in-nutrition-and-food-science-food-science-and-technology-specialization.html"
      },
      {
        "id": "page-oct17-source-6",
        "label": "Alberta Biology 20–30 program: water use and ecosystems",
        "url": "https://education.alberta.ca/media/159727/bio203007.pdf"
      },
      {
        "id": "page-depth-sait-power",
        "label": "SAIT: Power Engineering Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/power-engineering-technology"
      },
      {
        "id": "page-expansion-source-6",
        "label": "SAIT — Chemical Laboratory Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/chemical-laboratory-technology"
      }
    ],
    "checkedOn": "2026-10-19",
    "detailsId": "canada-malting-details"
  },
  "details": {
    "id": "canada-malting-details",
    "exampleSlug": "canada-malting",
    "organizationId": "canada-malting",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "canada-malting",
      "subtitle": "A factory can manage living grain as part of production.",
      "caption": "A factory can manage living grain as part of production.",
      "steps": [
        {
          "text": "Suitable grain is selected and checked before entering production.",
          "kind": "interpreted",
          "sourceIds": [
            "oct19-source-51",
            "oct19-source-52",
            "oct19-source-53",
            "oct19-source-54",
            "oct19-source-55"
          ]
        },
        {
          "text": "Steeping increases moisture and starts the conditions for germination.",
          "kind": "interpreted",
          "sourceIds": [
            "oct19-source-51",
            "oct19-source-52",
            "oct19-source-53",
            "oct19-source-54",
            "oct19-source-55"
          ]
        },
        {
          "text": "Controlled germination allows biological changes, including development of enzyme systems.",
          "kind": "interpreted",
          "sourceIds": [
            "oct19-source-51",
            "oct19-source-52",
            "oct19-source-53",
            "oct19-source-54",
            "oct19-source-55"
          ]
        },
        {
          "text": "Kilning dries the grain and shapes product characteristics, bringing this growth stage under control.",
          "kind": "interpreted",
          "sourceIds": [
            "oct19-source-51",
            "oct19-source-52",
            "oct19-source-53",
            "oct19-source-54",
            "oct19-source-55"
          ]
        }
      ],
      "diagramAlt": "Steeping, controlled germination and drying turn suitable grain into malt.",
      "diagramProvenance": "Generated fictional teaching illustration; editorial simplification of the cited work. Exact prompts, original images and visual checks: design/example-expansion-2026-10-19/.",
      "discussion": "Why would stopping growth at the right stage be as important as starting it?"
    },
    "roleIds": [
      "process-operations",
      "work-lab"
    ],
    "pathwayIds": [
      "oct18-route-power",
      "oct18-route-chemical",
      "oct19-route-food"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-19"
  },
  "organization": {
    "id": "canada-malting",
    "name": "Canada Malting — Calgary malt house",
    "organizationType": "company",
    "tagline": "A factory can manage living grain as part of production.",
    "description": {
      "text": "Canada Malting identifies a Calgary malt house and describes grain selection, steeping, germination and kilning. Its company information also describes grain/malt sample checks. The story follows controlled germination rather than presenting malting as yeast fermentation or claiming every company-wide laboratory activity occurs at Calgary.",
      "kind": "stated",
      "sourceIds": [
        "oct19-source-51",
        "oct19-source-52",
        "oct19-source-53",
        "oct19-source-54",
        "oct19-source-55"
      ]
    },
    "problem": {
      "text": "Why would a factory start a seed growing, then dry it?",
      "kind": "interpreted",
      "sourceIds": [
        "oct19-source-51",
        "oct19-source-52",
        "oct19-source-53",
        "oct19-source-54",
        "oct19-source-55"
      ]
    },
    "offering": {
      "text": "Malt production and grain/malt expertise.",
      "kind": "stated",
      "sourceIds": [
        "oct19-source-51",
        "oct19-source-52",
        "oct19-source-53",
        "oct19-source-54",
        "oct19-source-55"
      ]
    },
    "beneficiaries": {
      "text": "Brewers, distillers and other food producers using malt.",
      "kind": "interpreted",
      "sourceIds": [
        "oct19-source-51",
        "oct19-source-52",
        "oct19-source-53",
        "oct19-source-54",
        "oct19-source-55"
      ]
    },
    "headquarters": {
      "text": "Headquarters not separately verified for this example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "Original company locations page explicitly identifies a Calgary malt house.",
      "kind": "stated",
      "sourceIds": [
        "oct19-source-51",
        "oct19-source-52",
        "oct19-source-53",
        "oct19-source-54",
        "oct19-source-55"
      ]
    },
    "websiteSourceId": "oct19-source-51",
    "checkedOn": "2026-10-19",
    "careersSourceId": "oct19-source-54"
  },
  "organizationRoles": [
    {
      "organizationId": "canada-malting",
      "roleId": "process-operations",
      "establishes": "related-work",
      "label": "Employer describes grain/malt testing and process stages. Laboratory functions are company-wide; each test has not been located specifically at Calgary.",
      "location": "Original company locations page explicitly identifies a Calgary malt house.",
      "kind": "interpreted",
      "sourceIds": [
        "oct19-source-51",
        "oct19-source-52",
        "oct19-source-53",
        "oct19-source-54",
        "oct19-source-55"
      ],
      "checkedOn": "2026-10-19"
    },
    {
      "organizationId": "canada-malting",
      "roleId": "work-lab",
      "establishes": "related-work",
      "label": "Employer describes grain/malt testing and process stages. Laboratory functions are company-wide; each test has not been located specifically at Calgary.",
      "location": "Original company locations page explicitly identifies a Calgary malt house.",
      "kind": "interpreted",
      "sourceIds": [
        "oct19-source-51",
        "oct19-source-52",
        "oct19-source-53",
        "oct19-source-54",
        "oct19-source-55"
      ],
      "checkedOn": "2026-10-19"
    }
  ],
  "jobs": [],
  "sources": [],
  "diagram": {
    "image": "/images/story-diagrams/canada-malting-graphic-novel.webp",
    "heading": "A factory can manage living grain as part of production.",
    "steps": [
      "Suitable grain is selected and checked before entering production.",
      "Steeping increases moisture and starts the conditions for germination.",
      "Controlled germination allows biological changes, including development of enzyme systems.",
      "Kilning dries the grain and shapes product characteristics, bringing this growth stage under control."
    ],
    "note": "Malting is controlled grain germination and drying; it is not itself fermentation. Enzyme and seed examples extend core biology; do not call a growth record a company operating recipe. Detailed process description is company-wide; no exact Calgary batch settings, output or individual test method is asserted."
  },
  "unitLinks": [
    {
      "unitId": "b20c",
      "why": "Living cells, energy use and controlled investigation connect to cellular processes. Malting/seed development is an industrial application; do not mislabel it as a required fermentation experiment."
    }
  ]
} satisfies ExampleRecord;
