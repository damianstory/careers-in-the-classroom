import type { ExampleRecord } from "../types";

export default {
  "addedOn": "2026-10-18",
  "example": {
    "slug": "opisystems",
    "org": "OPIsystems (OPI)",
    "discipline": "Biology",
    "question": "How can you spot a grain bin starting to spoil before the damage is visible?",
    "work": "OPIsystems supplies grain-storage monitoring and conditioning systems from a business with a Calgary operating base. Its product pages describe temperature and moisture measurements, CO2 monitoring and fan controls. The company also describes engineering, production and customer-support functions. Grain bins are customer sites; this draft does not place them in Calgary or assign every manufacturing step to its Calgary address.",
    "localShort": "Calgary operating contact/support location; company describes engineering, production and product-support teams. Farms and grain bins are customer sites, not claimed to be in Calgary.",
    "calgary": "Calgary operating contact/support location; company describes engineering, production and product-support teams. Farms and grain bins are customer sites, not claimed to be in Calgary.",
    "site": "Calgary operating contact/support location; company describes engineering, production and product-support teams. Farms and grain bins are customer sites, not claimed to be in Calgary.",
    "localSourceIds": [
      "page-oct18-source-8",
      "page-oct18-source-9",
      "page-oct18-source-10",
      "page-oct18-source-11",
      "page-oct18-source-12"
    ],
    "explain": "Compare two fictional bins over three checks. Bin A: relative CO2 index 1.0, 1.1, 1.1; Bin B: 1.0, 1.5, 2.1. Both temperature records appear stable. List two explanations, choose a follow-up measurement, and explain why these dimensionless indices cannot be used as operating thresholds.",
    "prompt": "What else would you measure before deciding that a CO2 increase means spoilage?",
    "conversation": "What else would you measure before deciding that a CO2 increase means spoilage?",
    "mindset": "Respiration is the biological connection; this is not a bin-management guide. Do not claim that all CO2 comes from mould or that a stable temperature proves grain is unaffected. No grain-bin entry activity.",
    "courses": [
      {
        "course": "Biology 20",
        "topic": "Unit C, general outcome 2 — cellular respiration"
      }
    ],
    "courseFitSourceIds": [
      "page-oct18-source-14"
    ],
    "roles": [
      {
        "title": "Instrumentation and control",
        "note": "Help a system turn physical conditions into dependable readings and actions.",
        "evidence": "Company describes engineering, production and support functions. Sensor, software and troubleshooting duties below are interpreted work explanations; current individual Calgary job assignments are not established.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-8",
          "page-oct18-source-9",
          "page-oct18-source-10",
          "page-oct18-source-11",
          "page-oct18-source-12"
        ]
      },
      {
        "title": "Measurement software and data analysis",
        "note": "Turn streams of measurements into displays and comparisons people can use.",
        "evidence": "Company describes engineering, production and support functions. Sensor, software and troubleshooting duties below are interpreted work explanations; current individual Calgary job assignments are not established.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-8",
          "page-oct18-source-9",
          "page-oct18-source-10",
          "page-oct18-source-11",
          "page-oct18-source-12"
        ]
      },
      {
        "title": "Technical application support",
        "note": "Help people use a technical product in the conditions of their own workplace.",
        "evidence": "Company describes engineering, production and support functions. Sensor, software and troubleshooting duties below are interpreted work explanations; current individual Calgary job assignments are not established.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-8",
          "page-oct18-source-9",
          "page-oct18-source-10",
          "page-oct18-source-11",
          "page-oct18-source-12"
        ]
      }
    ],
    "rolesNote": "Source-backed work areas and related occupations, not a staff roster or a list of current vacancies. Free ATS capture returned a shell. One Looot/Firecrawl capture recovered the heading but no individual postings. Status remains unknown, not 'no openings'.",
    "pathways": [
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Instrumentation Engineering Technology",
        "note": "Measurement, calibration and process controls. Related to sensor/control work; no guaranteed employer placement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-13"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Mechanical Engineering Technology",
        "note": "Design, modelling and mechanical-system analysis. A technical route; does not itself confer professional engineer registration.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-5"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "OPIsystems supplies grain-storage monitoring and conditioning systems from a business with a Calgary operating base. Its product pages describe temperature and moisture measurements, CO2 monitoring and fan controls. The company also describes engineering, production and customer-support functions. Grain bins are customer sites; this draft does not place them in Calgary or assign every manufacturing step to its Calgary address.",
        "status": "Company-stated work with source limits preserved",
        "kind": "stated",
        "sourceIds": [
          "page-oct18-source-8",
          "page-oct18-source-9",
          "page-oct18-source-10",
          "page-oct18-source-11",
          "page-oct18-source-12"
        ]
      },
      {
        "type": "local connection",
        "claim": "Calgary operating contact/support location; company describes engineering, production and product-support teams. Farms and grain bins are customer sites, not claimed to be in Calgary.",
        "status": "Source-backed Calgary connection",
        "kind": "stated",
        "sourceIds": [
          "page-oct18-source-8",
          "page-oct18-source-9",
          "page-oct18-source-10",
          "page-oct18-source-11",
          "page-oct18-source-12"
        ]
      },
      {
        "type": "course fit",
        "claim": "20–C2.3k covers aerobic/anaerobic respiration and fermentation; 20–C2.1s includes investigating factors affecting respiration. Storage sensing is an applied inference, not a required grain-storage outcome.",
        "status": "Editorial application of source-checked curriculum concepts",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-14"
        ]
      },
      {
        "type": "limits",
        "claim": "Calgary is the operating/support connection; avoid stronger site-specific manufacturing claims without a facility or role source. Sensor accuracy, thresholds and guaranteed early-warning times are deliberately omitted.",
        "status": "Scope of this example",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-8",
          "page-oct18-source-9",
          "page-oct18-source-10",
          "page-oct18-source-11",
          "page-oct18-source-12"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-oct18-source-8",
        "label": "opisystems.com — contact",
        "url": "https://opisystems.com/contact/"
      },
      {
        "id": "page-oct18-source-9",
        "label": "opisystems.com — from an ounce of prevention to every grain to market",
        "url": "https://opisystems.com/from-an-ounce-of-prevention-to-every-grain-to-market/"
      },
      {
        "id": "page-oct18-source-10",
        "label": "opisystems.com — for commercial",
        "url": "https://opisystems.com/solutions/for-commercial/"
      },
      {
        "id": "page-oct18-source-11",
        "label": "opisystems.com — co2 monitoring",
        "url": "https://opisystems.com/co2-monitoring/"
      },
      {
        "id": "page-oct18-source-12",
        "label": "opisystems.bamboohr.com — careers",
        "url": "https://opisystems.bamboohr.com/careers"
      },
      {
        "id": "page-oct18-source-13",
        "label": "SAIT — Instrumentation Engineering Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/instrumentation-engineering-technology"
      },
      {
        "id": "page-oct18-source-5",
        "label": "SAIT — Mechanical Engineering Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/mechanical-engineering-technology"
      },
      {
        "id": "page-oct18-source-14",
        "label": "education.alberta.ca — bio203007.pdf",
        "url": "https://education.alberta.ca/media/159727/bio203007.pdf"
      }
    ],
    "checkedOn": "2026-10-18",
    "detailsId": "opisystems-details"
  },
  "details": {
    "id": "opisystems-details",
    "exampleSlug": "opisystems",
    "organizationId": "opisystems",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "opisystems",
      "subtitle": "Stored grain can look quiet while biological activity is changing inside the bin.",
      "caption": "Stored grain can look quiet while biological activity is changing inside the bin.",
      "steps": [
        {
          "text": "Stored grain and associated organisms can remain biologically active. Temperature, moisture and ventilation influence conditions in storage.",
          "kind": "interpreted",
          "sourceIds": [
            "oct18-source-8",
            "oct18-source-9",
            "oct18-source-10",
            "oct18-source-11",
            "oct18-source-12",
            "oct18-source-14"
          ]
        },
        {
          "text": "Respiration releases energy and can produce CO2. OPI uses CO2 measurements as an indicator alongside temperature and moisture.",
          "kind": "interpreted",
          "sourceIds": [
            "oct18-source-8",
            "oct18-source-9",
            "oct18-source-10",
            "oct18-source-11",
            "oct18-source-12",
            "oct18-source-14"
          ]
        },
        {
          "text": "A measurement describes the air at a sensor and a moment in time. Airflow and placement affect what that reading can reveal.",
          "kind": "interpreted",
          "sourceIds": [
            "oct18-source-8",
            "oct18-source-9",
            "oct18-source-10",
            "oct18-source-11",
            "oct18-source-12",
            "oct18-source-14"
          ]
        },
        {
          "text": "A changing pattern can prompt inspection or a management decision. Several measurements together are more informative than treating one CO2 value as proof of a particular problem.",
          "kind": "interpreted",
          "sourceIds": [
            "oct18-source-8",
            "oct18-source-9",
            "oct18-source-10",
            "oct18-source-11",
            "oct18-source-12",
            "oct18-source-14"
          ]
        }
      ],
      "diagramAlt": "A sensor samples air above stored grain; its reading is compared with other measurements before action.",
      "diagramProvenance": "Generated fictional teaching illustration; source-grounded editorial simplification. Prompts and visual review: design/example-expansion-2026-10-18/.",
      "discussion": "What else would you measure before deciding that a CO2 increase means spoilage?"
    },
    "roleIds": [
      "work-controls",
      "work-software",
      "work-technical-support"
    ],
    "pathwayIds": [
      "oct18-route-instrument",
      "oct18-route-mechanical"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-18"
  },
  "organization": {
    "id": "opisystems",
    "name": "OPIsystems (OPI)",
    "organizationType": "company",
    "tagline": "Stored grain can look quiet while biological activity is changing inside the bin.",
    "description": {
      "text": "OPIsystems supplies grain-storage monitoring and conditioning systems from a business with a Calgary operating base. Its product pages describe temperature and moisture measurements, CO2 monitoring and fan controls. The company also describes engineering, production and customer-support functions. Grain bins are customer sites; this draft does not place them in Calgary or assign every manufacturing step to its Calgary address.",
      "kind": "stated",
      "sourceIds": [
        "oct18-source-8",
        "oct18-source-9",
        "oct18-source-10",
        "oct18-source-11",
        "oct18-source-12"
      ]
    },
    "problem": {
      "text": "How can you spot a grain bin starting to spoil before the damage is visible?",
      "kind": "interpreted",
      "sourceIds": [
        "oct18-source-8",
        "oct18-source-9",
        "oct18-source-10",
        "oct18-source-11",
        "oct18-source-12"
      ]
    },
    "offering": {
      "text": "Monitor stored grain using temperature, moisture and CO2; control aeration.",
      "kind": "stated",
      "sourceIds": [
        "oct18-source-8",
        "oct18-source-9",
        "oct18-source-10",
        "oct18-source-11",
        "oct18-source-12"
      ]
    },
    "beneficiaries": {
      "text": "Growers, grain-storage operators and the people responsible for maintaining stored-grain quality.",
      "kind": "interpreted",
      "sourceIds": [
        "oct18-source-8",
        "oct18-source-9",
        "oct18-source-10",
        "oct18-source-11",
        "oct18-source-12"
      ]
    },
    "headquarters": {
      "text": "Headquarters not separately verified for this example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "Calgary operating contact/support location; company describes engineering, production and product-support teams. Farms and grain bins are customer sites, not claimed to be in Calgary.",
      "kind": "stated",
      "sourceIds": [
        "oct18-source-8",
        "oct18-source-9",
        "oct18-source-10",
        "oct18-source-11",
        "oct18-source-12"
      ]
    },
    "websiteSourceId": "oct18-home-opisystems",
    "checkedOn": "2026-10-18",
    "careersSourceId": "oct18-source-12"
  },
  "organizationRoles": [
    {
      "organizationId": "opisystems",
      "roleId": "work-controls",
      "establishes": "related-work",
      "label": "Company describes engineering, production and support functions. Sensor, software and troubleshooting duties below are interpreted work explanations; current individual Calgary job assignments are not established.",
      "kind": "interpreted",
      "sourceIds": [
        "oct18-source-8",
        "oct18-source-9",
        "oct18-source-10",
        "oct18-source-11",
        "oct18-source-12"
      ],
      "checkedOn": "2026-10-18"
    },
    {
      "organizationId": "opisystems",
      "roleId": "work-software",
      "establishes": "related-work",
      "label": "Company describes engineering, production and support functions. Sensor, software and troubleshooting duties below are interpreted work explanations; current individual Calgary job assignments are not established.",
      "kind": "interpreted",
      "sourceIds": [
        "oct18-source-8",
        "oct18-source-9",
        "oct18-source-10",
        "oct18-source-11",
        "oct18-source-12"
      ],
      "checkedOn": "2026-10-18"
    },
    {
      "organizationId": "opisystems",
      "roleId": "work-technical-support",
      "establishes": "related-work",
      "label": "Company describes engineering, production and support functions. Sensor, software and troubleshooting duties below are interpreted work explanations; current individual Calgary job assignments are not established.",
      "kind": "interpreted",
      "sourceIds": [
        "oct18-source-8",
        "oct18-source-9",
        "oct18-source-10",
        "oct18-source-11",
        "oct18-source-12"
      ],
      "checkedOn": "2026-10-18"
    }
  ],
  "jobs": [],
  "sources": [],
  "diagram": {
    "image": "/images/story-diagrams/opisystems-graphic-novel.webp",
    "heading": "Stored grain can look quiet while biological activity is changing inside the bin.",
    "steps": [
      "Stored grain and associated organisms can remain biologically active. Temperature, moisture and ventilation influence conditions in storage.",
      "Respiration releases energy and can produce CO2. OPI uses CO2 measurements as an indicator alongside temperature and moisture.",
      "A measurement describes the air at a sensor and a moment in time. Airflow and placement affect what that reading can reveal.",
      "A changing pattern can prompt inspection or a management decision. Several measurements together are more informative than treating one CO2 value as proof of a particular problem."
    ],
    "note": "Respiration is the biological connection; this is not a bin-management guide. Do not claim that all CO2 comes from mould or that a stable temperature proves grain is unaffected. No grain-bin entry activity."
  },
  "unitLinks": [
    {
      "unitId": "b20c",
      "why": "20–C2.3k covers aerobic/anaerobic respiration and fermentation; 20–C2.1s includes investigating factors affecting respiration. Storage sensing is an applied inference, not a required grain-storage outcome."
    }
  ]
} satisfies ExampleRecord;
