import type { ExampleRecord } from "../types";

export default {
  "addedOn": "2026-10-23",
  "example": {
    "slug": "ept-oil-condition-evidence",
    "detailsId": "ept-oil-condition-evidence-details",
    "org": "EPT Clean Oil",
    "discipline": "Chemistry",
    "question": "What can an oil sample tell us about a machine before it fails?",
    "work": "EPT Clean Oil offers lubricant analysis through its Fluid Technical Center. Chemists interpret sample results and use laboratory-scale treatment equipment to investigate oil-condition problems.",
    "localShort": "EPT lists its head office in Calgary. Its company history documents expanding Calgary laboratory space; the current services page describes the Fluid Technical Center.",
    "calgary": "EPT lists its head office in Calgary. Its company history documents expanding Calgary laboratory space; the current services page describes the Fluid Technical Center.",
    "site": "A classroom model based on documented work; the activity uses fictional examples.",
    "localSourceIds": [
      "page-ept-oil-condition-evidence-oct23-ept-lab-web",
      "page-ept-oil-condition-evidence-oct23-ept-contact-web",
      "page-ept-oil-condition-evidence-oct23-ept-about-web"
    ],
    "explain": "Use fictional oil reports for three samples with different water, particle and acidity trends. Choose which follow-up question each report raises, then compare a before-and-after treatment pair. Explain why removing visible particles would not prove that every dissolved contaminant was removed.",
    "prompt": "How could an oil sample look cleaner while still needing further investigation?",
    "conversation": "How could an oil sample look cleaner while still needing further investigation?",
    "mindset": "Use invented reports only, with no machine-operating thresholds or maintenance instructions. Laboratory treatment is evidence for investigation, not a guarantee of on-site performance. The old sample-submission download is not used as a current source.",
    "courses": [
      {
        "course": "Chemistry 20",
        "topic": "Mixtures, dissolved substances and interpreting chemical measurements"
      }
    ],
    "courseFitSourceIds": [
      "page-ept-oil-condition-evidence-oct23-course-chemistry-20"
    ],
    "roles": [
      {
        "title": "Laboratory analysis",
        "note": "Compare lubricant sample results and document evidence of contamination or chemical change.",
        "evidence": "Related work interpreted from the cited source; not a verified job title or vacancy.",
        "kind": "interpreted",
        "sourceIds": [
          "page-ept-oil-condition-evidence-oct23-ept-lab-web",
          "page-ept-oil-condition-evidence-oct23-ept-contact-web",
          "page-ept-oil-condition-evidence-oct23-ept-about-web"
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
          "page-ept-oil-condition-evidence-oct18-source-19"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "EPT Clean Oil offers lubricant analysis through its Fluid Technical Center. Chemists interpret sample results and use laboratory-scale treatment equipment to investigate oil-condition problems.",
        "status": "Documented organization work",
        "kind": "stated",
        "sourceIds": [
          "page-ept-oil-condition-evidence-oct23-ept-lab-web",
          "page-ept-oil-condition-evidence-oct23-ept-contact-web",
          "page-ept-oil-condition-evidence-oct23-ept-about-web"
        ]
      },
      {
        "type": "local connection",
        "claim": "EPT lists its head office in Calgary. Its company history documents expanding Calgary laboratory space; the current services page describes the Fluid Technical Center.",
        "status": "Scope of the Calgary connection",
        "kind": "stated",
        "sourceIds": [
          "page-ept-oil-condition-evidence-oct23-ept-lab-web",
          "page-ept-oil-condition-evidence-oct23-ept-contact-web",
          "page-ept-oil-condition-evidence-oct23-ept-about-web"
        ]
      },
      {
        "type": "course fit",
        "claim": "Chemistry 20: Mixtures, dissolved substances and interpreting chemical measurements. Editorial application of the official course reference; not a claim that the company follows this curriculum.",
        "status": "Editorial classroom application",
        "kind": "interpreted",
        "sourceIds": [
          "page-ept-oil-condition-evidence-oct23-course-chemistry-20"
        ]
      },
      {
        "type": "limits",
        "claim": "Use invented reports only, with no machine-operating thresholds or maintenance instructions. Laboratory treatment is evidence for investigation, not a guarantee of on-site performance. The old sample-submission download is not used as a current source.",
        "status": "Teaching model and evidence limits",
        "kind": "interpreted",
        "sourceIds": [
          "page-ept-oil-condition-evidence-oct23-ept-lab-web",
          "page-ept-oil-condition-evidence-oct23-ept-contact-web",
          "page-ept-oil-condition-evidence-oct23-ept-about-web"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-ept-oil-condition-evidence-oct23-ept-lab-web",
        "label": "EPT Clean Oil — Fluid Technical Center",
        "url": "https://cleanoil.com/lab-services/"
      },
      {
        "id": "page-ept-oil-condition-evidence-oct23-ept-contact-web",
        "label": "EPT Clean Oil — Calgary contact",
        "url": "https://cleanoil.com/contact/"
      },
      {
        "id": "page-ept-oil-condition-evidence-oct23-ept-about-web",
        "label": "EPT Clean Oil — company history",
        "url": "https://cleanoil.com/about/"
      },
      {
        "id": "page-ept-oil-condition-evidence-oct23-course-chemistry-20",
        "label": "Chemistry 20 — Alberta curriculum reference",
        "url": "https://education.alberta.ca/media/159730/chem2030_07.pdf"
      },
      {
        "id": "page-ept-oil-condition-evidence-oct18-source-19",
        "label": "SAIT — Chemical Laboratory Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/chemical-laboratory-technology"
      }
    ],
    "checkedOn": "2026-10-23"
  },
  "details": {
    "id": "ept-oil-condition-evidence-details",
    "exampleSlug": "ept-oil-condition-evidence",
    "organizationId": "ept-clean-oil",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "ept-oil-condition-evidence",
      "subtitle": "EPT Clean Oil offers lubricant analysis through its Fluid Technical Center. Chemists interpret sample results and use laboratory-scale treatment equipment to investigate oil-condition problems.",
      "caption": "A classroom interpretation of sourced work.",
      "steps": [
        {
          "text": "Record where and when the oil sample was collected.",
          "kind": "interpreted",
          "sourceIds": [
            "oct23-ept-lab-web",
            "oct23-ept-contact-web",
            "oct23-ept-about-web",
            "oct23-course-chemistry-20"
          ]
        },
        {
          "text": "Measure relevant properties instead of judging condition from colour alone.",
          "kind": "interpreted",
          "sourceIds": [
            "oct23-ept-lab-web",
            "oct23-ept-contact-web",
            "oct23-ept-about-web",
            "oct23-course-chemistry-20"
          ]
        },
        {
          "text": "Compare a sample before and after a controlled laboratory treatment.",
          "kind": "interpreted",
          "sourceIds": [
            "oct23-ept-lab-web",
            "oct23-ept-contact-web",
            "oct23-ept-about-web",
            "oct23-course-chemistry-20"
          ]
        },
        {
          "text": "Interpret the results with the equipment context and recommend further investigation.",
          "kind": "interpreted",
          "sourceIds": [
            "oct23-ept-lab-web",
            "oct23-ept-contact-web",
            "oct23-ept-about-web",
            "oct23-course-chemistry-20"
          ]
        }
      ],
      "diagramAlt": "Conceptual teaching illustration: Labelled oil sample → laboratory measurement instrument → small closed treatment loop → paired before-and-after sample reports. Show a clear directional flow without implying colour proves safety.",
      "diagramProvenance": "Fictional graphic-novel teaching illustration; not company equipment or measured results. Prompts and review: design/example-expansion-2026-10-23/.",
      "discussion": "How could an oil sample look cleaner while still needing further investigation?"
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
    "id": "ept-clean-oil",
    "name": "EPT Clean Oil",
    "tagline": "What can an oil sample tell us about a machine before it fails?",
    "description": {
      "text": "EPT Clean Oil offers lubricant analysis through its Fluid Technical Center. Chemists interpret sample results and use laboratory-scale treatment equipment to investigate oil-condition problems.",
      "kind": "stated",
      "sourceIds": [
        "oct23-ept-lab-web",
        "oct23-ept-contact-web",
        "oct23-ept-about-web"
      ]
    },
    "problem": {
      "text": "What can an oil sample tell us about a machine before it fails?",
      "kind": "interpreted",
      "sourceIds": [
        "oct23-ept-lab-web",
        "oct23-ept-contact-web",
        "oct23-ept-about-web"
      ]
    },
    "offering": {
      "text": "EPT Clean Oil offers lubricant analysis through its Fluid Technical Center. Chemists interpret sample results and use laboratory-scale treatment equipment to investigate oil-condition problems.",
      "kind": "stated",
      "sourceIds": [
        "oct23-ept-lab-web",
        "oct23-ept-contact-web",
        "oct23-ept-about-web"
      ]
    },
    "beneficiaries": {
      "text": "People and organizations using the services described in the cited company sources.",
      "kind": "interpreted",
      "sourceIds": [
        "oct23-ept-lab-web",
        "oct23-ept-contact-web",
        "oct23-ept-about-web"
      ]
    },
    "headquarters": {
      "text": "Headquarters has not been separately verified for this classroom example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "EPT lists its head office in Calgary. Its company history documents expanding Calgary laboratory space; the current services page describes the Fluid Technical Center.",
      "kind": "stated",
      "sourceIds": [
        "oct23-ept-lab-web",
        "oct23-ept-contact-web",
        "oct23-ept-about-web"
      ]
    },
    "websiteSourceId": "oct23-ept-lab-web",
    "checkedOn": "2026-10-23",
    "logo": {
      "src": "/images/logos/ept-clean-oil.png",
      "width": 162,
      "height": 150,
      "onDark": false,
      "sourceUrl": "https://cleanoil.com/wp-content/uploads/2026/09/logo.webp",
      "retrieved": "2026-10-23",
      "alt": "EPT Clean Oil logo"
    }
  },
  "organizationRoles": [
    {
      "organizationId": "ept-clean-oil",
      "roleId": "work-lab",
      "establishes": "related-work",
      "label": "Compare lubricant sample results and document evidence of contamination or chemical change.",
      "location": "EPT lists its head office in Calgary. Its company history documents expanding Calgary laboratory space; the current services page describes the Fluid Technical Center.",
      "kind": "interpreted",
      "sourceIds": [
        "oct23-ept-lab-web",
        "oct23-ept-contact-web",
        "oct23-ept-about-web"
      ],
      "checkedOn": "2026-10-23"
    }
  ],
  "jobs": [],
  "sources": [],
  "diagram": {
    "image": "/images/story-diagrams/ept-oil-condition-evidence-graphic-novel.webp",
    "heading": "What can an oil sample tell us about a machine before it fails?",
    "steps": [
      "Record where and when the oil sample was collected.",
      "Measure relevant properties instead of judging condition from colour alone.",
      "Compare a sample before and after a controlled laboratory treatment.",
      "Interpret the results with the equipment context and recommend further investigation."
    ],
    "note": "Use invented reports only, with no machine-operating thresholds or maintenance instructions. Laboratory treatment is evidence for investigation, not a guarantee of on-site performance. The old sample-submission download is not used as a current source."
  },
  "unitLinks": [
    {
      "unitId": "c20c",
      "why": "Chemistry 20: Mixtures, dissolved substances and interpreting chemical measurements. Editorial application of the official course reference; not a claim that the company follows this curriculum."
    }
  ]
} satisfies ExampleRecord;
