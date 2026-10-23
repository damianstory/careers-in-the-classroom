import type { ExampleRecord } from "../types";

export default {
  "addedOn": "2026-10-23",
  "example": {
    "slug": "absolute-imaging-signal-and-noise",
    "detailsId": "absolute-imaging-signal-and-noise-details",
    "org": "Absolute Imaging",
    "discipline": "Physics",
    "question": "How do you recover a useful underground signal from noisy measurements?",
    "work": "Absolute Imaging processes seismic data using software that includes noise suppression and imaging tools. Its technology page identifies a Calgary processing centre and an in-house research and development team.",
    "localShort": "The company explicitly lists a Calgary seismic-data processing centre.",
    "calgary": "The company explicitly lists a Calgary seismic-data processing centre.",
    "site": "A classroom model based on documented work; the activity uses fictional examples.",
    "localSourceIds": [
      "page-absolute-imaging-signal-and-noise-oct23-cgy-190-0"
    ],
    "explain": "Give students three fictional traces with the same pulse but different added noise. Align the traces and calculate the mean at each time step. Compare the result with a trace where the pulse arrives later. Ask what goes wrong if measurements are averaged without alignment.",
    "prompt": "How could making a graph look smoother also remove information that matters?",
    "conversation": "How could making a graph look smoother also remove information that matters?",
    "mindset": "Averaging is a simplified illustration of signal and noise, not a reproduction of Absolute Imaging’s proprietary algorithms. An underground image is an interpretation of measurements, not a photograph or proof of a resource.",
    "courses": [
      {
        "course": "Physics 20",
        "topic": "Mechanical waves, superposition and measurement uncertainty"
      }
    ],
    "courseFitSourceIds": [
      "page-absolute-imaging-signal-and-noise-oct23-course-physics-20"
    ],
    "roles": [
      {
        "title": "Geophysicist",
        "note": "Evaluate seismic traces and processing choices before interpreting underground structures.",
        "evidence": "Related work interpreted from the cited source; not a verified job title or vacancy.",
        "kind": "interpreted",
        "sourceIds": [
          "page-absolute-imaging-signal-and-noise-oct23-cgy-190-0"
        ]
      },
      {
        "title": "Software and data",
        "note": "Develop and test software that transforms seismic measurements while preserving useful information.",
        "evidence": "Related work interpreted from the cited source; not a verified job title or vacancy.",
        "kind": "interpreted",
        "sourceIds": [
          "page-absolute-imaging-signal-and-noise-oct23-cgy-190-0"
        ]
      }
    ],
    "rolesNote": "These are related kinds of work, not current vacancies or proof that a named employee worked on the featured project.",
    "pathways": [
      {
        "kindLabel": "Degree",
        "label": "University of Calgary — Geophysics (BSc)",
        "note": "Physics and quantitative methods for investigating the Earth. A related degree foundation. Professional registration and relevant experience are separate requirements; consult the current provider and regulator. This is not an employer hiring requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-absolute-imaging-signal-and-noise-oct23-geophysics-calendar"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Software Development",
        "note": "Learn to design, test and build software across front-end and back-end systems. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-absolute-imaging-signal-and-noise-expansion-source-14"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "Absolute Imaging processes seismic data using software that includes noise suppression and imaging tools. Its technology page identifies a Calgary processing centre and an in-house research and development team.",
        "status": "Documented organization work",
        "kind": "stated",
        "sourceIds": [
          "page-absolute-imaging-signal-and-noise-oct23-cgy-190-0"
        ]
      },
      {
        "type": "local connection",
        "claim": "The company explicitly lists a Calgary seismic-data processing centre.",
        "status": "Scope of the Calgary connection",
        "kind": "stated",
        "sourceIds": [
          "page-absolute-imaging-signal-and-noise-oct23-cgy-190-0"
        ]
      },
      {
        "type": "course fit",
        "claim": "Physics 20: Mechanical waves, superposition and measurement uncertainty. Editorial application of the official course reference; not a claim that the company follows this curriculum.",
        "status": "Editorial classroom application",
        "kind": "interpreted",
        "sourceIds": [
          "page-absolute-imaging-signal-and-noise-oct23-course-physics-20"
        ]
      },
      {
        "type": "limits",
        "claim": "Averaging is a simplified illustration of signal and noise, not a reproduction of Absolute Imaging’s proprietary algorithms. An underground image is an interpretation of measurements, not a photograph or proof of a resource.",
        "status": "Teaching model and evidence limits",
        "kind": "interpreted",
        "sourceIds": [
          "page-absolute-imaging-signal-and-noise-oct23-cgy-190-0"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-absolute-imaging-signal-and-noise-oct23-cgy-190-0",
        "label": "Sustainable Resource Discovery | Seismic Data Processing",
        "url": "https://www.absoluteimaging.ca/technology/"
      },
      {
        "id": "page-absolute-imaging-signal-and-noise-oct23-course-physics-20",
        "label": "Physics 20 — Alberta curriculum reference",
        "url": "https://www.alberta.ca/system/files/custom_downloaded_images/edc-physics20-30-performance-standards.pdf"
      },
      {
        "id": "page-absolute-imaging-signal-and-noise-oct23-geophysics-calendar",
        "label": "GOPHBSC Program | UCalgary Calendar",
        "url": "https://calendar.ucalgary.ca/programs/GOPHBSC/program-details-krhha"
      },
      {
        "id": "page-absolute-imaging-signal-and-noise-expansion-source-14",
        "label": "SAIT — Software Development",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/software-development"
      }
    ],
    "checkedOn": "2026-10-23"
  },
  "details": {
    "id": "absolute-imaging-signal-and-noise-details",
    "exampleSlug": "absolute-imaging-signal-and-noise",
    "organizationId": "absolute-imaging",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "absolute-imaging-signal-and-noise",
      "subtitle": "Absolute Imaging processes seismic data using software that includes noise suppression and imaging tools. Its technology page identifies a Calgary processing centre and an in-house research and development team.",
      "caption": "A classroom interpretation of sourced work.",
      "steps": [
        {
          "text": "Preserve the original wave measurements and acquisition information.",
          "kind": "interpreted",
          "sourceIds": [
            "oct23-cgy-190-0",
            "oct23-course-physics-20"
          ]
        },
        {
          "text": "Identify unwanted signals and choose a suitable processing approach.",
          "kind": "interpreted",
          "sourceIds": [
            "oct23-cgy-190-0",
            "oct23-course-physics-20"
          ]
        },
        {
          "text": "Compare processed traces with the originals to check what changed.",
          "kind": "interpreted",
          "sourceIds": [
            "oct23-cgy-190-0",
            "oct23-course-physics-20"
          ]
        },
        {
          "text": "Build an interpretation while reporting uncertainty and possible processing artefacts.",
          "kind": "interpreted",
          "sourceIds": [
            "oct23-cgy-190-0",
            "oct23-course-physics-20"
          ]
        }
      ],
      "diagramAlt": "Conceptual teaching illustration: Three aligned traces with one common pulse and varied noise → alignment check → a cleaner average trace → a cautious layered underground interpretation. Use no numerical claims.",
      "diagramProvenance": "Fictional graphic-novel teaching illustration; not company equipment or measured results. Prompts and review: design/example-expansion-2026-10-23/.",
      "discussion": "How could making a graph look smoother also remove information that matters?"
    },
    "roleIds": [
      "work-geophysics",
      "software-data"
    ],
    "pathwayIds": [
      "oct23-route-geophysics",
      "route-software"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-23"
  },
  "organization": {
    "id": "absolute-imaging",
    "name": "Absolute Imaging",
    "tagline": "How do you recover a useful underground signal from noisy measurements?",
    "description": {
      "text": "Absolute Imaging processes seismic data using software that includes noise suppression and imaging tools. Its technology page identifies a Calgary processing centre and an in-house research and development team.",
      "kind": "stated",
      "sourceIds": [
        "oct23-cgy-190-0"
      ]
    },
    "problem": {
      "text": "How do you recover a useful underground signal from noisy measurements?",
      "kind": "interpreted",
      "sourceIds": [
        "oct23-cgy-190-0"
      ]
    },
    "offering": {
      "text": "Absolute Imaging processes seismic data using software that includes noise suppression and imaging tools. Its technology page identifies a Calgary processing centre and an in-house research and development team.",
      "kind": "stated",
      "sourceIds": [
        "oct23-cgy-190-0"
      ]
    },
    "beneficiaries": {
      "text": "People and organizations using the services described in the cited company sources.",
      "kind": "interpreted",
      "sourceIds": [
        "oct23-cgy-190-0"
      ]
    },
    "headquarters": {
      "text": "Headquarters has not been separately verified for this classroom example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "The company explicitly lists a Calgary seismic-data processing centre.",
      "kind": "stated",
      "sourceIds": [
        "oct23-cgy-190-0"
      ]
    },
    "websiteSourceId": "oct23-cgy-190-0",
    "checkedOn": "2026-10-23",
    "logo": {
      "src": "/images/logos/absolute-imaging.png",
      "width": 245,
      "height": 150,
      "onDark": true,
      "sourceUrl": "https://www.absoluteimaging.ca/wp-content/uploads/2020/08/logo.png",
      "retrieved": "2026-10-23",
      "alt": "Absolute Imaging logo"
    }
  },
  "organizationRoles": [
    {
      "organizationId": "absolute-imaging",
      "roleId": "work-geophysics",
      "establishes": "related-work",
      "label": "Evaluate seismic traces and processing choices before interpreting underground structures.",
      "location": "The company explicitly lists a Calgary seismic-data processing centre.",
      "kind": "interpreted",
      "sourceIds": [
        "oct23-cgy-190-0"
      ],
      "checkedOn": "2026-10-23"
    },
    {
      "organizationId": "absolute-imaging",
      "roleId": "software-data",
      "establishes": "related-work",
      "label": "Develop and test software that transforms seismic measurements while preserving useful information.",
      "location": "The company explicitly lists a Calgary seismic-data processing centre.",
      "kind": "interpreted",
      "sourceIds": [
        "oct23-cgy-190-0"
      ],
      "checkedOn": "2026-10-23"
    }
  ],
  "jobs": [],
  "sources": [],
  "diagram": {
    "image": "/images/story-diagrams/absolute-imaging-signal-and-noise-graphic-novel.webp",
    "heading": "How do you recover a useful underground signal from noisy measurements?",
    "steps": [
      "Preserve the original wave measurements and acquisition information.",
      "Identify unwanted signals and choose a suitable processing approach.",
      "Compare processed traces with the originals to check what changed.",
      "Build an interpretation while reporting uncertainty and possible processing artefacts."
    ],
    "note": "Averaging is a simplified illustration of signal and noise, not a reproduction of Absolute Imaging’s proprietary algorithms. An underground image is an interpretation of measurements, not a photograph or proof of a resource."
  },
  "unitLinks": [
    {
      "unitId": "p20d",
      "why": "Physics 20: Mechanical waves, superposition and measurement uncertainty. Editorial application of the official course reference; not a claim that the company follows this curriculum."
    }
  ]
} satisfies ExampleRecord;
