import type { ExampleRecord } from "../types";

export default {
  "addedOn": "2026-10-23",
  "example": {
    "slug": "bioaro-checking-genomic-results",
    "detailsId": "bioaro-checking-genomic-results-details",
    "org": "BioAro",
    "discipline": "Biology",
    "question": "How does a genomics laboratory check whether a result can be trusted?",
    "work": "BioAro describes genomics testing and laboratory quality-control work. Its Calgary Lab Director description includes validating methods, checking equipment and reviewing the reproducibility of results.",
    "localShort": "BioAro identifies Calgary laboratory operations and a Calgary head office.",
    "calgary": "BioAro identifies Calgary laboratory operations and a Calgary head office.",
    "site": "A classroom model based on documented work; the activity uses fictional examples.",
    "localSourceIds": [
      "page-bioaro-checking-genomic-results-oct23-cgy-185-0"
    ],
    "explain": "Give groups three fictional sequence reads: ACGTAC, ACGTAC and ACGTTC. Ask them to locate the disagreement, propose an explanation and decide what evidence they would request next. Then reveal that a control failed: should the result still be reported? This paper exercise uses no biological samples or personal genetic information.",
    "prompt": "When two measurements agree, what else would you need to know before trusting them?",
    "conversation": "When two measurements agree, what else would you need to know before trusting them?",
    "mindset": "The activity illustrates quality-control reasoning, not a clinical sequencing method or diagnosis. BioAro’s source describes an experienced director with doctoral-level qualifications; the diploma below is a related laboratory foundation, not qualification for that post or regulated clinical practice.",
    "courses": [
      {
        "course": "Biology 30",
        "topic": "Genetic information and the reliability of laboratory evidence"
      }
    ],
    "courseFitSourceIds": [
      "page-bioaro-checking-genomic-results-oct23-course-biology-30"
    ],
    "roles": [
      {
        "title": "Laboratory analysis",
        "note": "Check sample identity, controls and repeat measurements before interpreting a laboratory result.",
        "evidence": "Related work interpreted from the cited source; not a verified job title or vacancy.",
        "kind": "interpreted",
        "sourceIds": [
          "page-bioaro-checking-genomic-results-oct23-cgy-185-0"
        ]
      }
    ],
    "rolesNote": "These are related kinds of work, not current vacancies or proof that a named employee worked on the featured project.",
    "pathways": [
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Chemical Laboratory Technology",
        "note": "Chemical analysis, samples and laboratory practice. A laboratory route; not a medical licence or automatic research-scientist qualification. Check current admissions and intake before applying; this draft does not promise entry or employment.",
        "kind": "interpreted",
        "sourceIds": [
          "page-bioaro-checking-genomic-results-oct18-source-19"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "BioAro describes genomics testing and laboratory quality-control work. Its Calgary Lab Director description includes validating methods, checking equipment and reviewing the reproducibility of results.",
        "status": "Documented organization work",
        "kind": "stated",
        "sourceIds": [
          "page-bioaro-checking-genomic-results-oct23-cgy-185-0"
        ]
      },
      {
        "type": "local connection",
        "claim": "BioAro identifies Calgary laboratory operations and a Calgary head office.",
        "status": "Scope of the Calgary connection",
        "kind": "stated",
        "sourceIds": [
          "page-bioaro-checking-genomic-results-oct23-cgy-185-0"
        ]
      },
      {
        "type": "course fit",
        "claim": "Biology 30: Genetic information and the reliability of laboratory evidence. Editorial application of the official course reference; not a claim that the company follows this curriculum.",
        "status": "Editorial classroom application",
        "kind": "interpreted",
        "sourceIds": [
          "page-bioaro-checking-genomic-results-oct23-course-biology-30"
        ]
      },
      {
        "type": "limits",
        "claim": "The activity illustrates quality-control reasoning, not a clinical sequencing method or diagnosis. BioAro’s source describes an experienced director with doctoral-level qualifications; the diploma below is a related laboratory foundation, not qualification for that post or regulated clinical practice.",
        "status": "Teaching model and evidence limits",
        "kind": "interpreted",
        "sourceIds": [
          "page-bioaro-checking-genomic-results-oct23-cgy-185-0"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-bioaro-checking-genomic-results-oct23-cgy-185-0",
        "label": "BioAro : Precision Health",
        "url": "https://bioaro.com/labdirector"
      },
      {
        "id": "page-bioaro-checking-genomic-results-oct23-course-biology-30",
        "label": "Biology 30 — Alberta curriculum reference",
        "url": "https://education.alberta.ca/media/159727/bio203007.pdf"
      },
      {
        "id": "page-bioaro-checking-genomic-results-oct18-source-19",
        "label": "SAIT — Chemical Laboratory Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/chemical-laboratory-technology"
      }
    ],
    "checkedOn": "2026-10-23"
  },
  "details": {
    "id": "bioaro-checking-genomic-results-details",
    "exampleSlug": "bioaro-checking-genomic-results",
    "organizationId": "bioaro",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "bioaro-checking-genomic-results",
      "subtitle": "BioAro describes genomics testing and laboratory quality-control work. Its Calgary Lab Director description includes validating methods, checking equipment and reviewing the reproducibility of results.",
      "caption": "A classroom interpretation of sourced work.",
      "steps": [
        {
          "text": "Keep each sample connected to its identifier and handling record.",
          "kind": "interpreted",
          "sourceIds": [
            "oct23-cgy-185-0",
            "oct23-course-biology-30"
          ]
        },
        {
          "text": "Run the method with appropriate controls and check that the equipment is working.",
          "kind": "interpreted",
          "sourceIds": [
            "oct23-cgy-185-0",
            "oct23-course-biology-30"
          ]
        },
        {
          "text": "Compare repeated measurements and investigate disagreements before interpreting them.",
          "kind": "interpreted",
          "sourceIds": [
            "oct23-cgy-185-0",
            "oct23-course-biology-30"
          ]
        },
        {
          "text": "Document the result, its limitations and any need for a repeat test.",
          "kind": "interpreted",
          "sourceIds": [
            "oct23-cgy-185-0",
            "oct23-course-biology-30"
          ]
        }
      ],
      "diagramAlt": "Conceptual teaching illustration: Sample tubes with distinct geometric identifiers → a generic closed testing instrument and control tube → two aligned abstract sequence traces beside one mismatched trace → a notebook and circular retest arrow.",
      "diagramProvenance": "Fictional graphic-novel teaching illustration; not company equipment or measured results. Prompts and review: design/example-expansion-2026-10-23/.",
      "discussion": "When two measurements agree, what else would you need to know before trusting them?"
    },
    "roleIds": [
      "work-lab"
    ],
    "pathwayIds": [
      "oct18-route-chemical"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-23"
  },
  "organization": {
    "id": "bioaro",
    "name": "BioAro",
    "tagline": "How does a genomics laboratory check whether a result can be trusted?",
    "description": {
      "text": "BioAro describes genomics testing and laboratory quality-control work. Its Calgary Lab Director description includes validating methods, checking equipment and reviewing the reproducibility of results.",
      "kind": "stated",
      "sourceIds": [
        "oct23-cgy-185-0"
      ]
    },
    "problem": {
      "text": "How does a genomics laboratory check whether a result can be trusted?",
      "kind": "interpreted",
      "sourceIds": [
        "oct23-cgy-185-0"
      ]
    },
    "offering": {
      "text": "BioAro describes genomics testing and laboratory quality-control work. Its Calgary Lab Director description includes validating methods, checking equipment and reviewing the reproducibility of results.",
      "kind": "stated",
      "sourceIds": [
        "oct23-cgy-185-0"
      ]
    },
    "beneficiaries": {
      "text": "People and organizations using the services described in the cited company sources.",
      "kind": "interpreted",
      "sourceIds": [
        "oct23-cgy-185-0"
      ]
    },
    "headquarters": {
      "text": "Headquarters has not been separately verified for this classroom example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "BioAro identifies Calgary laboratory operations and a Calgary head office.",
      "kind": "stated",
      "sourceIds": [
        "oct23-cgy-185-0"
      ]
    },
    "websiteSourceId": "oct23-cgy-185-0",
    "checkedOn": "2026-10-23",
    "logo": {
      "src": "/images/logos/bioaro.png",
      "width": 208,
      "height": 88,
      "onDark": false,
      "sourceUrl": "https://bioaro.com/frontend/img/logo.png",
      "retrieved": "2026-10-23",
      "alt": "BioAro logo"
    }
  },
  "organizationRoles": [
    {
      "organizationId": "bioaro",
      "roleId": "work-lab",
      "establishes": "related-work",
      "label": "Check sample identity, controls and repeat measurements before interpreting a laboratory result.",
      "location": "BioAro identifies Calgary laboratory operations and a Calgary head office.",
      "kind": "interpreted",
      "sourceIds": [
        "oct23-cgy-185-0"
      ],
      "checkedOn": "2026-10-23"
    }
  ],
  "jobs": [],
  "sources": [],
  "diagram": {
    "image": "/images/story-diagrams/bioaro-checking-genomic-results-graphic-novel.webp",
    "heading": "How does a genomics laboratory check whether a result can be trusted?",
    "steps": [
      "Keep each sample connected to its identifier and handling record.",
      "Run the method with appropriate controls and check that the equipment is working.",
      "Compare repeated measurements and investigate disagreements before interpreting them.",
      "Document the result, its limitations and any need for a repeat test."
    ],
    "note": "The activity illustrates quality-control reasoning, not a clinical sequencing method or diagnosis. BioAro’s source describes an experienced director with doctoral-level qualifications; the diploma below is a related laboratory foundation, not qualification for that post or regulated clinical practice."
  },
  "unitLinks": [
    {
      "unitId": "b30c",
      "why": "Biology 30: Genetic information and the reliability of laboratory evidence. Editorial application of the official course reference; not a claim that the company follows this curriculum."
    }
  ]
} satisfies ExampleRecord;
