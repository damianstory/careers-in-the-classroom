import type { ExampleRecord } from "../types";

export default {
  "addedOn": "2026-10-21",
  "example": {
    "slug": "als-checking-trace-chemicals",
    "detailsId": "als-checking-trace-chemicals-details",
    "org": "ALS Canada — Calgary environmental laboratory",
    "discipline": "Chemistry",
    "question": "How can a laboratory distinguish a trace chemical from a misleading signal?",
    "work": "ALS provides analytical laboratory services. Its May 2025 technical bulletin describes Calgary testing for alkanolamines and sulfolane in water using liquid chromatography and tandem mass spectrometry.",
    "localShort": "The original technical bulletin specifically identifies the Calgary laboratory as offering this method.",
    "calgary": "The original technical bulletin specifically identifies the Calgary laboratory as offering this method.",
    "site": "Method information is dated; no current accreditation or reporting-limit claim is made.",
    "localSourceIds": [
      "page-als-checking-trace-chemicals-oct21-source-017"
    ],
    "explain": "Use invented standard concentrations and instrument responses to sketch a calibration graph. Estimate an unknown, then explain why a second selective signal would help check its identity.",
    "prompt": "Why is a strong signal not enough to identify a chemical with confidence?",
    "conversation": "Why is a strong signal not enough to identify a chemical with confidence?",
    "mindset": "LC-MS/MS is an advanced application beyond the course's required instrument detail. Do not reproduce the bulletin's absolute-sounding error claims. No current accreditation claim is made from the expired certificate encountered during screening.",
    "courses": [
      {
        "course": "Chemistry 20",
        "topic": "20–C1.5k; 20–C1.6k"
      }
    ],
    "courseFitSourceIds": [
      "page-als-checking-trace-chemicals-oct21-shared-82"
    ],
    "roles": [
      {
        "title": "Laboratory analysis",
        "note": "Track sample identity, prepare standards and check analytical results before reporting.",
        "evidence": "interpreted work connection from cited company services/projects, not a confirmed title or vacancy",
        "kind": "interpreted",
        "sourceIds": [
          "page-als-checking-trace-chemicals-oct21-source-017"
        ]
      }
    ],
    "rolesNote": "No current vacancy is asserted. This draft represents sourced work and interpreted occupations; an evergreen interest form is not an open role.",
    "pathways": [
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Chemical Laboratory Technology",
        "note": "Chemical analysis, samples and laboratory practice. A related preparation route, not a verified employer requirement or hiring partnership. Check the provider for current admissions and intake details. Specialized work may require further training or professional registration.",
        "kind": "interpreted",
        "sourceIds": [
          "page-als-checking-trace-chemicals-oct21-source-018"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "ALS provides analytical laboratory services. Its May 2025 technical bulletin describes Calgary testing for alkanolamines and sulfolane in water using liquid chromatography and tandem mass spectrometry.",
        "status": "Documented organization work",
        "kind": "stated",
        "sourceIds": [
          "page-als-checking-trace-chemicals-oct21-source-017"
        ]
      },
      {
        "type": "local connection",
        "claim": "The original technical bulletin specifically identifies the Calgary laboratory as offering this method.",
        "status": "Calgary connection; scope retained",
        "kind": "stated",
        "sourceIds": [
          "page-als-checking-trace-chemicals-oct21-source-017"
        ]
      },
      {
        "type": "course fit",
        "claim": "Chemistry 20 — 20–C1.5k; 20–C1.6k. Editorial classroom application; exact scope is stated in each draft.",
        "status": "Curriculum scope and editorial application",
        "kind": "interpreted",
        "sourceIds": [
          "page-als-checking-trace-chemicals-oct21-shared-82"
        ]
      },
      {
        "type": "limits",
        "claim": "LC-MS/MS is an advanced application beyond the course's required instrument detail. Do not reproduce the bulletin's absolute-sounding error claims. No current accreditation claim is made from the expired certificate encountered during screening. Method information is dated; no current accreditation or reporting-limit claim is made.",
        "status": "Teaching model and evidence limits",
        "kind": "interpreted",
        "sourceIds": [
          "page-als-checking-trace-chemicals-oct21-source-017"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-als-checking-trace-chemicals-oct21-source-017",
        "label": "alsglobal.com — en — News-and-publications — 2025 — 05 — Fast-Accurate-Testing-of-Alkanolamines-and-Sulfolane-in-Water-by-LCMS",
        "url": "https://www.alsglobal.com/en/News-and-publications/2025/05/Fast-Accurate-Testing-of-Alkanolamines-and-Sulfolane-in-Water-by-LCMS"
      },
      {
        "id": "page-als-checking-trace-chemicals-oct21-source-018",
        "label": "sait.ca — programs-and-courses — diplomas — chemical-laboratory-technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/chemical-laboratory-technology"
      },
      {
        "id": "page-als-checking-trace-chemicals-oct21-shared-82",
        "label": "Chemistry 20 — official curriculum reference",
        "url": "https://education.alberta.ca/media/159730/chem2030_07.pdf"
      }
    ],
    "checkedOn": "2026-10-21"
  },
  "details": {
    "id": "als-checking-trace-chemicals-details",
    "exampleSlug": "als-checking-trace-chemicals",
    "organizationId": "als-canada-calgary-environmental-laboratory",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "als-checking-trace-chemicals",
      "subtitle": "ALS provides analytical laboratory services. Its May 2025 technical bulletin describes Calgary testing for alkanolamines and sulfolane in water using liquid chromatography and tandem mass spectrometry.",
      "caption": "A classroom interpretation of sourced work.",
      "steps": [
        {
          "text": "Preserve the identity of the water sample and select the analytical method.",
          "kind": "interpreted",
          "sourceIds": [
            "oct21-source-017",
            "oct21-shared-82"
          ]
        },
        {
          "text": "Separate components with liquid chromatography before measuring selected ion signals.",
          "kind": "interpreted",
          "sourceIds": [
            "oct21-source-017",
            "oct21-shared-82"
          ]
        },
        {
          "text": "Compare the signals with standards and use internal standards to help account for sample effects.",
          "kind": "interpreted",
          "sourceIds": [
            "oct21-source-017",
            "oct21-shared-82"
          ]
        },
        {
          "text": "Report the concentration with the method's limitations; a signal needs interpretation.",
          "kind": "interpreted",
          "sourceIds": [
            "oct21-source-017",
            "oct21-shared-82"
          ]
        }
      ],
      "diagramAlt": "Four-step teaching illustration: Water sample → separation → selected signals and standards → reported concentration and limits.",
      "diagramProvenance": "Fictional graphic-novel teaching illustration; conceptual model, not measured company results. Prompts and review: design/example-expansion-2026-10-21/.",
      "discussion": "Why is a strong signal not enough to identify a chemical with confidence?"
    },
    "roleIds": [
      "work-lab"
    ],
    "pathwayIds": [
      "oct18-route-chemical"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-21"
  },
  "organization": {
    "id": "als-canada-calgary-environmental-laboratory",
    "name": "ALS Canada — Calgary environmental laboratory",
    "tagline": "How can a laboratory distinguish a trace chemical from a misleading signal?",
    "description": {
      "text": "ALS provides analytical laboratory services. Its May 2025 technical bulletin describes Calgary testing for alkanolamines and sulfolane in water using liquid chromatography and tandem mass spectrometry.",
      "kind": "stated",
      "sourceIds": [
        "oct21-source-017"
      ]
    },
    "problem": {
      "text": "How can a laboratory distinguish a trace chemical from a misleading signal?",
      "kind": "interpreted",
      "sourceIds": [
        "oct21-source-017"
      ]
    },
    "offering": {
      "text": "ALS provides analytical laboratory services. Its May 2025 technical bulletin describes Calgary testing for alkanolamines and sulfolane in water using liquid chromatography and tandem mass spectrometry.",
      "kind": "stated",
      "sourceIds": [
        "oct21-source-017"
      ]
    },
    "beneficiaries": {
      "text": "People and teams using this work to make the decisions described in the example.",
      "kind": "interpreted",
      "sourceIds": [
        "oct21-source-017"
      ]
    },
    "headquarters": {
      "text": "Headquarters not separately verified for this example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "The original technical bulletin specifically identifies the Calgary laboratory as offering this method.",
      "kind": "stated",
      "sourceIds": [
        "oct21-source-017"
      ]
    },
    "websiteSourceId": "oct21-shared-83",
    "checkedOn": "2026-10-21",
    "logo": {
      "src": "/images/logos/als-canada-calgary-environmental-laboratory.png",
      "alt": "ALS Canada — Calgary environmental laboratory logo",
      "width": 150,
      "height": 150,
      "onDark": false,
      "sourceUrl": "https://edge.sitecorecloud.io/alsgroupusa347e-alsgroup8904-alsglobalpr1dd3-c9a5/media/alsglobal/header/logo.png?h=194&iar=0&w=194",
      "retrieved": "2026-10-21"
    }
  },
  "organizationRoles": [
    {
      "organizationId": "als-canada-calgary-environmental-laboratory",
      "roleId": "work-lab",
      "establishes": "related-work",
      "label": "Track sample identity, prepare standards and check analytical results before reporting.",
      "location": "The original technical bulletin specifically identifies the Calgary laboratory as offering this method.",
      "kind": "interpreted",
      "sourceIds": [
        "oct21-source-017"
      ],
      "checkedOn": "2026-10-21"
    }
  ],
  "jobs": [],
  "sources": [],
  "diagram": {
    "image": "/images/story-diagrams/als-checking-trace-chemicals-graphic-novel.webp",
    "heading": "How can a laboratory distinguish a trace chemical from a misleading signal?",
    "steps": [
      "Preserve the identity of the water sample and select the analytical method.",
      "Separate components with liquid chromatography before measuring selected ion signals.",
      "Compare the signals with standards and use internal standards to help account for sample effects.",
      "Report the concentration with the method's limitations; a signal needs interpretation."
    ],
    "note": "LC-MS/MS is an advanced application beyond the course's required instrument detail. Do not reproduce the bulletin's absolute-sounding error claims. No current accreditation claim is made from the expired certificate encountered during screening."
  },
  "unitLinks": [
    {
      "unitId": "c20c",
      "why": "Chemistry 20 — 20–C1.5k; 20–C1.6k. Editorial classroom application; exact scope is stated in each draft."
    }
  ]
} satisfies ExampleRecord;
