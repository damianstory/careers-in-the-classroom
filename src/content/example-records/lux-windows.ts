import type { ExampleRecord } from "../types";

export default {
  "addedOn": "2026-10-19",
  "example": {
    "slug": "lux-windows",
    "org": "Lux Windows & Doors",
    "discipline": "Physics",
    "question": "How can a window let light through while slowing heat loss?",
    "work": "Lux Windows & Doors offers windows, doors and installation services. Its site identifies Calgary showroom and installation work and describes PVC frame chambers, insulating glazing and glass-performance options. Its manufacturing is described as Alberta-based; the exact factory city is not established by these sources.",
    "localShort": "Calgary showroom and installation services are explicit employer claims.",
    "calgary": "Calgary showroom and installation services are explicit employer claims.",
    "site": "Do not label an Alberta factory a Calgary factory or copy an unverified facility-size figure.",
    "localSourceIds": [
      "page-oct19-source-27",
      "page-oct19-source-28",
      "page-oct19-source-29",
      "page-oct19-source-30",
      "page-oct19-source-31",
      "page-oct19-source-32"
    ],
    "explain": "Compare two fictional building-envelope sketches: identical glazing but one poorly sealed frame. Mark possible heat/air paths and propose what controlled evidence would distinguish the effect of glass from the effect of installation.",
    "prompt": "Why could the same window product perform differently in two installations?",
    "conversation": "Why could the same window product perform differently in two installations?",
    "mindset": "Qualitative heat-transfer model, not a product-rating calculation. No Lux efficiency, energy saving or whole-home performance figure is claimed.",
    "courses": [
      {
        "course": "Science 10",
        "topic": "B — Energy Flow in Technological Systems"
      }
    ],
    "courseFitSourceIds": [
      "page-oct17-source-51"
    ],
    "roles": [
      {
        "title": "Glazier and window-installation work",
        "note": "Fit glazing and window systems into a building opening.",
        "evidence": "Employer describes installation and Alberta manufacture. The glazier occupation is a related trade interpretation; the factory city and employee qualifications are not established.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct19-source-27",
          "page-oct19-source-28",
          "page-oct19-source-29",
          "page-oct19-source-30",
          "page-oct19-source-31",
          "page-oct19-source-32"
        ]
      },
      {
        "title": "Manufacturing and quality work",
        "note": "Make repeatable components and check that the output matches a specification.",
        "evidence": "Employer describes installation and Alberta manufacture. The glazier occupation is a related trade interpretation; the factory city and employee qualifications are not established.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct19-source-27",
          "page-oct19-source-28",
          "page-oct19-source-29",
          "page-oct19-source-30",
          "page-oct19-source-31",
          "page-oct19-source-32"
        ]
      }
    ],
    "rolesNote": "Work areas and related occupations, not a staff roster or a list of current vacancies. No verified individual posting was selected. Employer services/work-area evidence is not a live vacancy.",
    "pathways": [
      {
        "kindLabel": "Apprenticeship",
        "label": "SAIT — Glazier",
        "note": "Glazing systems, fabrication and installation skills. An apprenticeship route requires the applicable registration, work and education components. Not every window-installation job is advertised as a glazier apprenticeship.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct19-source-32"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Mechanical Engineering Technology",
        "note": "Design, modelling and mechanical-system analysis. A technical route; does not itself confer professional engineer registration. Check current admissions and intake before applying; this draft does not promise entry or employment.",
        "kind": "interpreted",
        "sourceIds": [
          "page-expansion-source-18"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "Lux Windows & Doors offers windows, doors and installation services. Its site identifies Calgary showroom and installation work and describes PVC frame chambers, insulating glazing and glass-performance options. Its manufacturing is described as Alberta-based; the exact factory city is not established by these sources.",
        "status": "Source-backed employer work with local and historical limits retained",
        "kind": "stated",
        "sourceIds": [
          "page-oct19-source-27",
          "page-oct19-source-28",
          "page-oct19-source-29",
          "page-oct19-source-30",
          "page-oct19-source-31",
          "page-oct19-source-32"
        ]
      },
      {
        "type": "local connection",
        "claim": "Calgary showroom and installation services are explicit employer claims.",
        "status": "Documented Calgary work; regional operations are distinguished",
        "kind": "stated",
        "sourceIds": [
          "page-oct19-source-27",
          "page-oct19-source-28",
          "page-oct19-source-29",
          "page-oct19-source-30",
          "page-oct19-source-31",
          "page-oct19-source-32"
        ]
      },
      {
        "type": "course fit",
        "claim": "Energy transfer, thermal devices and evaluating design connect directly. Detailed building-code ratings, U-values and installation standards are beyond the proposed lesson.",
        "status": "source-checked editorial fit; application extensions explicit",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct17-source-51"
        ]
      },
      {
        "type": "limits",
        "claim": "Calgary installation is established; factory-city and numerical product performance are omitted. Glazier study is a related trade route, not a universal minimum for every installer. Do not label an Alberta factory a Calgary factory or copy an unverified facility-size figure.",
        "status": "Scope of the classroom example",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct19-source-27",
          "page-oct19-source-28",
          "page-oct19-source-29",
          "page-oct19-source-30",
          "page-oct19-source-31",
          "page-oct19-source-32"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-oct19-source-27",
        "label": "luxwindows.com — official website",
        "url": "https://www.luxwindows.com/"
      },
      {
        "id": "page-oct19-source-28",
        "label": "luxwindows.com — pvc",
        "url": "https://www.luxwindows.com/windows/pvc/"
      },
      {
        "id": "page-oct19-source-29",
        "label": "luxwindows.com — window installation",
        "url": "https://www.luxwindows.com/renovations/window-installation/"
      },
      {
        "id": "page-oct19-source-30",
        "label": "luxwindows.com — renovation process",
        "url": "https://www.luxwindows.com/renovations/renovation-process/"
      },
      {
        "id": "page-oct19-source-31",
        "label": "luxwindows.com — energy savings",
        "url": "https://www.luxwindows.com/glass-performance/energy-savings/"
      },
      {
        "id": "page-oct19-source-32",
        "label": "sait.ca — glazier",
        "url": "https://www.sait.ca/apprenticeships-and-trades/programs/glazier"
      },
      {
        "id": "page-oct17-source-51",
        "label": "Alberta Science 10 program: inquiry skills and technological systems",
        "url": "https://education.alberta.ca/media/159715/science10.pdf"
      },
      {
        "id": "page-expansion-source-18",
        "label": "SAIT — Mechanical Engineering Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/mechanical-engineering-technology"
      }
    ],
    "checkedOn": "2026-10-19",
    "detailsId": "lux-windows-details"
  },
  "details": {
    "id": "lux-windows-details",
    "exampleSlug": "lux-windows",
    "organizationId": "lux-windows",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "lux-windows",
      "subtitle": "A window is a glass-and-frame system, installed in a wall.",
      "caption": "A window is a glass-and-frame system, installed in a wall.",
      "steps": [
        {
          "text": "A window must transmit useful light while limiting unwanted heat transfer and air leakage.",
          "kind": "interpreted",
          "sourceIds": [
            "oct19-source-27",
            "oct19-source-28",
            "oct19-source-29",
            "oct19-source-30",
            "oct19-source-31",
            "oct19-source-32"
          ]
        },
        {
          "text": "Glass, gaps and frame materials create different paths for energy transfer.",
          "kind": "interpreted",
          "sourceIds": [
            "oct19-source-27",
            "oct19-source-28",
            "oct19-source-29",
            "oct19-source-30",
            "oct19-source-31",
            "oct19-source-32"
          ]
        },
        {
          "text": "Glazing and frame features can reduce some transfer paths; they do not stop all heat movement.",
          "kind": "interpreted",
          "sourceIds": [
            "oct19-source-27",
            "oct19-source-28",
            "oct19-source-29",
            "oct19-source-30",
            "oct19-source-31",
            "oct19-source-32"
          ]
        },
        {
          "text": "Installation and seals connect the product to the wall, so the finished system matters as well as the glass.",
          "kind": "interpreted",
          "sourceIds": [
            "oct19-source-27",
            "oct19-source-28",
            "oct19-source-29",
            "oct19-source-30",
            "oct19-source-31",
            "oct19-source-32"
          ]
        }
      ],
      "diagramAlt": "Heat can move through glazing, frame materials and air-leakage paths.",
      "diagramProvenance": "Generated fictional teaching illustration; editorial simplification of the cited work. Exact prompts, original images and visual checks: design/example-expansion-2026-10-19/.",
      "discussion": "Why could the same window product perform differently in two installations?"
    },
    "roleIds": [
      "work-glazing",
      "work-manufacturing"
    ],
    "pathwayIds": [
      "oct19-route-glazier",
      "oct18-route-mechanical"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-19"
  },
  "organization": {
    "id": "lux-windows",
    "name": "Lux Windows & Doors",
    "organizationType": "company",
    "tagline": "A window is a glass-and-frame system, installed in a wall.",
    "description": {
      "text": "Lux Windows & Doors offers windows, doors and installation services. Its site identifies Calgary showroom and installation work and describes PVC frame chambers, insulating glazing and glass-performance options. Its manufacturing is described as Alberta-based; the exact factory city is not established by these sources.",
      "kind": "stated",
      "sourceIds": [
        "oct19-source-27",
        "oct19-source-28",
        "oct19-source-29",
        "oct19-source-30",
        "oct19-source-31",
        "oct19-source-32"
      ]
    },
    "problem": {
      "text": "How can a window let light through while slowing heat loss?",
      "kind": "interpreted",
      "sourceIds": [
        "oct19-source-27",
        "oct19-source-28",
        "oct19-source-29",
        "oct19-source-30",
        "oct19-source-31",
        "oct19-source-32"
      ]
    },
    "offering": {
      "text": "Window/door products, installation and related service.",
      "kind": "stated",
      "sourceIds": [
        "oct19-source-27",
        "oct19-source-28",
        "oct19-source-29",
        "oct19-source-30",
        "oct19-source-31",
        "oct19-source-32"
      ]
    },
    "beneficiaries": {
      "text": "Building owners, occupants, builders and renovation teams.",
      "kind": "interpreted",
      "sourceIds": [
        "oct19-source-27",
        "oct19-source-28",
        "oct19-source-29",
        "oct19-source-30",
        "oct19-source-31",
        "oct19-source-32"
      ]
    },
    "headquarters": {
      "text": "Headquarters not separately verified for this example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "Calgary showroom and installation services are explicit employer claims.",
      "kind": "stated",
      "sourceIds": [
        "oct19-source-27",
        "oct19-source-28",
        "oct19-source-29",
        "oct19-source-30",
        "oct19-source-31",
        "oct19-source-32"
      ]
    },
    "websiteSourceId": "oct19-source-27",
    "checkedOn": "2026-10-19"
  },
  "organizationRoles": [
    {
      "organizationId": "lux-windows",
      "roleId": "work-glazing",
      "establishes": "related-work",
      "label": "Employer describes installation and Alberta manufacture. The glazier occupation is a related trade interpretation; the factory city and employee qualifications are not established.",
      "location": "Calgary showroom and installation services are explicit employer claims.",
      "kind": "interpreted",
      "sourceIds": [
        "oct19-source-27",
        "oct19-source-28",
        "oct19-source-29",
        "oct19-source-30",
        "oct19-source-31",
        "oct19-source-32"
      ],
      "checkedOn": "2026-10-19"
    },
    {
      "organizationId": "lux-windows",
      "roleId": "work-manufacturing",
      "establishes": "related-work",
      "label": "Employer describes installation and Alberta manufacture. The glazier occupation is a related trade interpretation; the factory city and employee qualifications are not established.",
      "location": "Calgary showroom and installation services are explicit employer claims.",
      "kind": "interpreted",
      "sourceIds": [
        "oct19-source-27",
        "oct19-source-28",
        "oct19-source-29",
        "oct19-source-30",
        "oct19-source-31",
        "oct19-source-32"
      ],
      "checkedOn": "2026-10-19"
    }
  ],
  "jobs": [],
  "sources": [],
  "diagram": {
    "image": "/images/story-diagrams/lux-windows-graphic-novel.webp",
    "heading": "A window is a glass-and-frame system, installed in a wall.",
    "steps": [
      "A window must transmit useful light while limiting unwanted heat transfer and air leakage.",
      "Glass, gaps and frame materials create different paths for energy transfer.",
      "Glazing and frame features can reduce some transfer paths; they do not stop all heat movement.",
      "Installation and seals connect the product to the wall, so the finished system matters as well as the glass."
    ],
    "note": "Qualitative heat-transfer model, not a product-rating calculation. No Lux efficiency, energy saving or whole-home performance figure is claimed. Do not label an Alberta factory a Calgary factory or copy an unverified facility-size figure."
  },
  "unitLinks": [
    {
      "unitId": "s10b",
      "why": "Energy transfer, thermal devices and evaluating design connect directly. Detailed building-code ratings, U-values and installation standards are beyond the proposed lesson."
    }
  ]
} satisfies ExampleRecord;
