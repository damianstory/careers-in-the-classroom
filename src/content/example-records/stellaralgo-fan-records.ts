import type { ExampleRecord } from "../types";

export default {
  "addedOn": "2026-10-23",
  "example": {
    "slug": "stellaralgo-fan-records",
    "detailsId": "stellaralgo-fan-records-details",
    "org": "StellarAlgo",
    "discipline": "Technology",
    "question": "How can a team recognize the same fan across different ticket records?",
    "work": "A Ticketmaster case study describes StellarAlgo working with the Calgary Flames during the 2021–22 season to organize ticketing data and support audience analysis.",
    "localShort": "The Calgary Flames partnership is documented in Ticketmaster’s November 2022 case study; it is a historical Calgary project.",
    "calgary": "The Calgary Flames partnership is documented in Ticketmaster’s November 2022 case study; it is a historical Calgary project.",
    "site": "A classroom model based on documented work; the activity uses fictional examples.",
    "localSourceIds": [
      "page-stellaralgo-fan-records-oct23-stellar-case-web"
    ],
    "explain": "Create fictional Fans, Games and Tickets tables using invented IDs. Include two people with the same name and a ticket bought for a guest. Compare matching by name with matching by ID, then explain why a purchaser is not necessarily every person who attended.",
    "prompt": "What can a ticket purchase tell you about attendance, and what does it leave unknown?",
    "conversation": "What can a ticket purchase tell you about attendance, and what does it leave unknown?",
    "mindset": "The case is from 2021–22, not a current-results claim. All classroom records are synthetic. The exercise does not reproduce StellarAlgo’s proprietary matching method, establish consent for marketing or treat ticket purchasers as confirmed attendees.",
    "courses": [
      {
        "course": "INF2070 · Database 2",
        "topic": "Related records, keys and data-quality checks"
      }
    ],
    "courseFitSourceIds": [
      "page-stellaralgo-fan-records-oct23-course-inf2070"
    ],
    "roles": [
      {
        "title": "Software and data",
        "note": "Connect ticket records to an appropriate audience identifier and investigate ambiguous matches.",
        "evidence": "Related work interpreted from the cited source; not a verified job title or vacancy.",
        "kind": "interpreted",
        "sourceIds": [
          "page-stellaralgo-fan-records-oct23-stellar-case-web"
        ]
      }
    ],
    "rolesNote": "These are related kinds of work, not current vacancies or proof that a named employee worked on the featured project.",
    "pathways": [
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Software Development",
        "note": "Learn to design, test and build software across front-end and back-end systems. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-stellaralgo-fan-records-expansion-source-14"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "A Ticketmaster case study describes StellarAlgo working with the Calgary Flames during the 2021–22 season to organize ticketing data and support audience analysis.",
        "status": "Documented organization work",
        "kind": "stated",
        "sourceIds": [
          "page-stellaralgo-fan-records-oct23-stellar-case-web"
        ]
      },
      {
        "type": "local connection",
        "claim": "The Calgary Flames partnership is documented in Ticketmaster’s November 2022 case study; it is a historical Calgary project.",
        "status": "Scope of the Calgary connection",
        "kind": "stated",
        "sourceIds": [
          "page-stellaralgo-fan-records-oct23-stellar-case-web"
        ]
      },
      {
        "type": "course fit",
        "claim": "INF2070 · Database 2: selected outcomes 1.1, 1.2, 1.4, 2.4, 2.8, 3.4. Related records, keys and data-quality checks. The company activity is an editorial application.",
        "status": "Editorial classroom application",
        "kind": "interpreted",
        "sourceIds": [
          "page-stellaralgo-fan-records-oct23-course-inf2070"
        ]
      },
      {
        "type": "limits",
        "claim": "The case is from 2021–22, not a current-results claim. All classroom records are synthetic. The exercise does not reproduce StellarAlgo’s proprietary matching method, establish consent for marketing or treat ticket purchasers as confirmed attendees.",
        "status": "Teaching model and evidence limits",
        "kind": "interpreted",
        "sourceIds": [
          "page-stellaralgo-fan-records-oct23-stellar-case-web"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-stellaralgo-fan-records-oct23-stellar-case-web",
        "label": "Ticketmaster — StellarAlgo and Calgary Flames case study",
        "url": "https://business.ticketmaster.com/how-stellaralgo-ticketmaster-and-the-calgary-flames-grew-a-fanbase/"
      },
      {
        "id": "page-stellaralgo-fan-records-oct23-course-inf2070",
        "label": "INF2070 — Alberta curriculum reference",
        "url": "https://curriculum.learnalberta.ca/curriculum/en/pos/CTSINF/INF2070"
      },
      {
        "id": "page-stellaralgo-fan-records-expansion-source-14",
        "label": "SAIT — Software Development",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/software-development"
      }
    ],
    "checkedOn": "2026-10-23"
  },
  "details": {
    "id": "stellaralgo-fan-records-details",
    "exampleSlug": "stellaralgo-fan-records",
    "organizationId": "stellaralgo",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "stellaralgo-fan-records",
      "subtitle": "A Ticketmaster case study describes StellarAlgo working with the Calgary Flames during the 2021–22 season to organize ticketing data and support audience analysis.",
      "caption": "A classroom interpretation of sourced work.",
      "steps": [
        {
          "text": "Identify what each ticket and audience record represents.",
          "kind": "interpreted",
          "sourceIds": [
            "oct23-stellar-case-web",
            "oct23-course-inf2070"
          ]
        },
        {
          "text": "Use suitable identifiers to connect records without assuming a name is unique.",
          "kind": "interpreted",
          "sourceIds": [
            "oct23-stellar-case-web",
            "oct23-course-inf2070"
          ]
        },
        {
          "text": "Flag uncertain matches and preserve the source of each record.",
          "kind": "interpreted",
          "sourceIds": [
            "oct23-stellar-case-web",
            "oct23-course-inf2070"
          ]
        },
        {
          "text": "Summarize the linked records only for a defined, appropriate question.",
          "kind": "interpreted",
          "sourceIds": [
            "oct23-stellar-case-web",
            "oct23-course-inf2070"
          ]
        }
      ],
      "diagramAlt": "Conceptual teaching illustration: Two ticket records with the same visible name symbol but different IDs → identity check → separate audience records → aggregate attendance-question chart with an uncertainty marker.",
      "diagramProvenance": "Fictional graphic-novel teaching illustration; not company equipment or measured results. Prompts and review: design/example-expansion-2026-10-23/.",
      "discussion": "What can a ticket purchase tell you about attendance, and what does it leave unknown?"
    },
    "roleIds": [
      "software-data"
    ],
    "pathwayIds": [
      "route-software"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-23"
  },
  "organization": {
    "id": "stellaralgo",
    "name": "StellarAlgo",
    "tagline": "How can a team recognize the same fan across different ticket records?",
    "description": {
      "text": "A Ticketmaster case study describes StellarAlgo working with the Calgary Flames during the 2021–22 season to organize ticketing data and support audience analysis.",
      "kind": "stated",
      "sourceIds": [
        "oct23-stellar-case-web"
      ]
    },
    "problem": {
      "text": "How can a team recognize the same fan across different ticket records?",
      "kind": "interpreted",
      "sourceIds": [
        "oct23-stellar-case-web"
      ]
    },
    "offering": {
      "text": "A Ticketmaster case study describes StellarAlgo working with the Calgary Flames during the 2021–22 season to organize ticketing data and support audience analysis.",
      "kind": "stated",
      "sourceIds": [
        "oct23-stellar-case-web"
      ]
    },
    "beneficiaries": {
      "text": "People and organizations using the services described in the cited company sources.",
      "kind": "interpreted",
      "sourceIds": [
        "oct23-stellar-case-web"
      ]
    },
    "headquarters": {
      "text": "Headquarters has not been separately verified for this classroom example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "The Calgary Flames partnership is documented in Ticketmaster’s November 2022 case study; it is a historical Calgary project.",
      "kind": "stated",
      "sourceIds": [
        "oct23-stellar-case-web"
      ]
    },
    "websiteSourceId": "oct23-stellar-case-web",
    "checkedOn": "2026-10-23",
    "logo": {
      "src": "/images/logos/stellaralgo.png",
      "width": 400,
      "height": 85,
      "onDark": false,
      "sourceUrl": "https://f.hubspotusercontent10.net/hubfs/2584811/StellarAlgo%20Raises%2016.5M%20Series%20A.pdf",
      "retrieved": "2026-10-23",
      "alt": "StellarAlgo logo"
    }
  },
  "organizationRoles": [
    {
      "organizationId": "stellaralgo",
      "roleId": "software-data",
      "establishes": "related-work",
      "label": "Connect ticket records to an appropriate audience identifier and investigate ambiguous matches.",
      "location": "The Calgary Flames partnership is documented in Ticketmaster’s November 2022 case study; it is a historical Calgary project.",
      "kind": "interpreted",
      "sourceIds": [
        "oct23-stellar-case-web"
      ],
      "checkedOn": "2026-10-23"
    }
  ],
  "jobs": [],
  "sources": [],
  "diagram": {
    "image": "/images/story-diagrams/stellaralgo-fan-records-graphic-novel.webp",
    "heading": "How can a team recognize the same fan across different ticket records?",
    "steps": [
      "Identify what each ticket and audience record represents.",
      "Use suitable identifiers to connect records without assuming a name is unique.",
      "Flag uncertain matches and preserve the source of each record.",
      "Summarize the linked records only for a defined, appropriate question."
    ],
    "note": "The case is from 2021–22, not a current-results claim. All classroom records are synthetic. The exercise does not reproduce StellarAlgo’s proprietary matching method, establish consent for marketing or treat ticket purchasers as confirmed attendees."
  },
  "unitLinks": [
    {
      "unitId": "inf2070-focus",
      "why": "INF2070 · Database 2: selected outcomes 1.1, 1.2, 1.4, 2.4, 2.8, 3.4. Related records, keys and data-quality checks. The company activity is an editorial application."
    }
  ]
} satisfies ExampleRecord;
