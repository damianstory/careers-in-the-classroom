import type { ExampleRecord } from "../types";

export default {
  "addedOn": "2026-10-20",
  "example": {
    "slug": "userful-visual-information-routing",
    "org": "Userful",
    "discipline": "Technology",
    "question": "How do the right signals reach the right control-room screen?",
    "work": "Userful develops software for enterprise visualization and lists Calgary research-and-development operations.",
    "localShort": "Userful identifies Calgary research-and-development operations; its headquarters is in Austin.",
    "calgary": "Userful identifies Calgary research-and-development operations; its headquarters is in Austin.",
    "site": "Company presence and company-wide work are independent claims. Do not present every role or project as Calgary-based.",
    "localSourceIds": [
      "page-userful-visual-information-routing-oct20-userful-source-1",
      "page-userful-visual-information-routing-oct20-userful-source-2"
    ],
    "explain": "Write a fictional rule that selects a display layout for normal and alert conditions. Test what happens when one input is unavailable.",
    "prompt": "How could showing more information make a display less useful?",
    "conversation": "How could showing more information make a display less useful?",
    "mindset": "This is a contemporary visualization-workflow example. The switching rule is fictional, and no actual customer control-room configuration or Calgary ownership of every feature is claimed. CSE1120 requires CSE1110.",
    "courses": [
      {
        "course": "CSE1120 · Structured Programming 2",
        "topic": "1; 1.9; 3.1"
      }
    ],
    "courseFitSourceIds": [
      "page-userful-visual-information-routing-oct20-curriculum-7"
    ],
    "roles": [
      {
        "title": "Software and data systems",
        "note": "Represent visual workflows and test exceptional states.",
        "evidence": "Related work area inferred from documented organization work; not a confirmed job title or current vacancy.",
        "kind": "interpreted",
        "sourceIds": [
          "page-userful-visual-information-routing-oct20-userful-source-1",
          "page-userful-visual-information-routing-oct20-userful-source-2"
        ]
      },
      {
        "title": "Technical application support",
        "note": "Explain system behaviour and help troubleshoot missing inputs.",
        "evidence": "Related work area inferred from documented organization work; not a confirmed job title or current vacancy.",
        "kind": "interpreted",
        "sourceIds": [
          "page-userful-visual-information-routing-oct20-userful-source-1",
          "page-userful-visual-information-routing-oct20-userful-source-2"
        ]
      }
    ],
    "rolesNote": "No new live job posting proposed. Role links describe work areas, not vacancies.",
    "pathways": [
      {
        "kindLabel": "Related education",
        "label": "SAIT — Software Development diploma",
        "note": "Programming, software testing and data-system foundations. A concrete technical entry route; specific employers set their own requirements.",
        "kind": "interpreted",
        "sourceIds": [
          "page-userful-visual-information-routing-oct20-pathway-software"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "Userful develops software for enterprise visualization and lists Calgary research-and-development operations.",
        "status": "Documented organization work",
        "kind": "stated",
        "sourceIds": [
          "page-userful-visual-information-routing-oct20-userful-source-1",
          "page-userful-visual-information-routing-oct20-userful-source-2"
        ]
      },
      {
        "type": "local connection",
        "claim": "Userful identifies Calgary research-and-development operations; its headquarters is in Austin.",
        "status": "Calgary connection checked separately from company-wide work",
        "kind": "stated",
        "sourceIds": [
          "page-userful-visual-information-routing-oct20-userful-source-1",
          "page-userful-visual-information-routing-oct20-userful-source-2"
        ]
      },
      {
        "type": "course fit",
        "claim": "CSE1120 · Structured Programming 2 — 1; 1.9; 3.1. This is a contemporary visualization-workflow example. The switching rule is fictional, and no actual customer control-room configuration or Calgary ownership of every feature is claimed. CSE1120 requires CSE1110.",
        "status": "Verified curriculum anchor; classroom application is editorial",
        "kind": "interpreted",
        "sourceIds": [
          "page-userful-visual-information-routing-oct20-curriculum-7"
        ]
      },
      {
        "type": "limits",
        "claim": "This is a contemporary visualization-workflow example. The switching rule is fictional, and no actual customer control-room configuration or Calgary ownership of every feature is claimed. CSE1120 requires CSE1110. Company presence and company-wide work are independent claims. Do not present every role or project as Calgary-based.",
        "status": "Scope of the classroom model",
        "kind": "interpreted",
        "sourceIds": [
          "page-userful-visual-information-routing-oct20-userful-source-1",
          "page-userful-visual-information-routing-oct20-userful-source-2",
          "page-userful-visual-information-routing-oct20-curriculum-7"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-userful-visual-information-routing-oct20-userful-source-1",
        "label": "www.userful.com — about",
        "url": "https://www.userful.com/about"
      },
      {
        "id": "page-userful-visual-information-routing-oct20-userful-source-2",
        "label": "www.userful.com — userful visual networking platform implemented calgarys library network",
        "url": "https://www.userful.com/about/company-news/userful-visual-networking-platform-implemented-calgarys-library-network"
      },
      {
        "id": "page-userful-visual-information-routing-oct20-curriculum-7",
        "label": "Alberta curriculum — CSE1120",
        "url": "https://curriculum.learnalberta.ca/curriculum/en/pos/CTSCSE/CSE1120"
      },
      {
        "id": "page-userful-visual-information-routing-oct20-pathway-software",
        "label": "SAIT — Software Development diploma",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/software-development"
      }
    ],
    "checkedOn": "2026-10-20",
    "detailsId": "userful-visual-information-routing-details"
  },
  "details": {
    "id": "userful-visual-information-routing-details",
    "exampleSlug": "userful-visual-information-routing",
    "organizationId": "userful",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "userful-visual-information-routing",
      "subtitle": "A control-room display is useful only when it shows the information the team needs.",
      "caption": "A control-room display is useful only when it shows the information the team needs.",
      "steps": [
        {
          "text": "Identify the inputs: different sources carry different information.",
          "kind": "interpreted",
          "sourceIds": [
            "oct20-userful-source-1",
            "oct20-userful-source-2",
            "oct20-curriculum-7"
          ]
        },
        {
          "text": "Define the viewing need: the team decides which information belongs on which display.",
          "kind": "interpreted",
          "sourceIds": [
            "oct20-userful-source-1",
            "oct20-userful-source-2",
            "oct20-curriculum-7"
          ]
        },
        {
          "text": "Apply a workflow: software helps route and arrange the selected content.",
          "kind": "interpreted",
          "sourceIds": [
            "oct20-userful-source-1",
            "oct20-userful-source-2",
            "oct20-curriculum-7"
          ]
        },
        {
          "text": "Check exceptions: unavailable or stale inputs need an understandable response.",
          "kind": "interpreted",
          "sourceIds": [
            "oct20-userful-source-1",
            "oct20-userful-source-2",
            "oct20-curriculum-7"
          ]
        }
      ],
      "diagramAlt": "Three generic inputs → fictional routing rule → two display layouts. Include an unavailable-input state and avoid real security or operational data.",
      "diagramProvenance": "Generated fictional teaching illustration; editorial simplification of cited work. Prompts, originals and review: design/example-expansion-2026-10-20/.",
      "discussion": "How could showing more information make a display less useful?"
    },
    "roleIds": [
      "work-software",
      "work-technical-support"
    ],
    "pathwayIds": [
      "oct17-route-sait-software-development"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-20"
  },
  "organization": {
    "id": "userful",
    "name": "Userful",
    "tagline": "A control-room display is useful only when it shows the information the team needs.",
    "description": {
      "text": "Userful develops software for enterprise visualization and lists Calgary research-and-development operations.",
      "kind": "stated",
      "sourceIds": [
        "oct20-userful-source-1",
        "oct20-userful-source-2"
      ]
    },
    "problem": {
      "text": "How do the right signals reach the right control-room screen?",
      "kind": "interpreted",
      "sourceIds": [
        "oct20-userful-source-1",
        "oct20-userful-source-2"
      ]
    },
    "offering": {
      "text": "Userful develops software for enterprise visualization and lists Calgary research-and-development operations.",
      "kind": "stated",
      "sourceIds": [
        "oct20-userful-source-1",
        "oct20-userful-source-2"
      ]
    },
    "beneficiaries": {
      "text": "Teams coordinating information across displays and workflows.",
      "kind": "interpreted",
      "sourceIds": [
        "oct20-userful-source-1",
        "oct20-userful-source-2"
      ]
    },
    "headquarters": {
      "text": "Headquarters not separately verified for this example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "Userful identifies Calgary research-and-development operations; its headquarters is in Austin.",
      "kind": "stated",
      "sourceIds": [
        "oct20-userful-source-1",
        "oct20-userful-source-2"
      ]
    },
    "websiteSourceId": "oct20-userful-source-1",
    "checkedOn": "2026-10-20"
  },
  "organizationRoles": [
    {
      "organizationId": "userful",
      "roleId": "work-software",
      "establishes": "work-area",
      "label": "Related work area: Represent visual workflows and test exceptional states.",
      "location": "Userful identifies Calgary research-and-development operations; its headquarters is in Austin. Company presence and company-wide work are independent claims. Do not present every role or project as Calgary-based.",
      "kind": "interpreted",
      "sourceIds": [
        "oct20-userful-source-1",
        "oct20-userful-source-2"
      ],
      "checkedOn": "2026-10-20"
    },
    {
      "organizationId": "userful",
      "roleId": "work-technical-support",
      "establishes": "work-area",
      "label": "Related work area: Explain system behaviour and help troubleshoot missing inputs.",
      "location": "Userful identifies Calgary research-and-development operations; its headquarters is in Austin. Company presence and company-wide work are independent claims. Do not present every role or project as Calgary-based.",
      "kind": "interpreted",
      "sourceIds": [
        "oct20-userful-source-1",
        "oct20-userful-source-2"
      ],
      "checkedOn": "2026-10-20"
    }
  ],
  "jobs": [],
  "sources": [
    {
      "id": "oct20-userful-source-1",
      "label": "www.userful.com — about",
      "url": "https://www.userful.com/about",
      "checkedOn": "2026-10-20"
    },
    {
      "id": "oct20-userful-source-2",
      "label": "www.userful.com — userful visual networking platform implemented calgarys library network",
      "url": "https://www.userful.com/about/company-news/userful-visual-networking-platform-implemented-calgarys-library-network",
      "checkedOn": "2026-10-20"
    }
  ],
  "diagram": {
    "image": "/images/story-diagrams/userful-visual-information-routing-graphic-novel.webp",
    "heading": "A control-room display is useful only when it shows the information the team needs.",
    "steps": [
      "Identify the inputs: different sources carry different information.",
      "Define the viewing need: the team decides which information belongs on which display.",
      "Apply a workflow: software helps route and arrange the selected content.",
      "Check exceptions: unavailable or stale inputs need an understandable response."
    ],
    "note": "This is a contemporary visualization-workflow example. The switching rule is fictional, and no actual customer control-room configuration or Calgary ownership of every feature is claimed. CSE1120 requires CSE1110."
  },
  "unitLinks": [
    {
      "unitId": "cse1120-focus",
      "why": "CSE1120 · Structured Programming 2 — 1; 1.9; 3.1. This is a contemporary visualization-workflow example. The switching rule is fictional, and no actual customer control-room configuration or Calgary ownership of every feature is claimed. CSE1120 requires CSE1110."
    }
  ]
} satisfies ExampleRecord;
