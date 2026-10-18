import type { ExampleRecord } from "../types";

export default {
  "addedOn": "2026-10-18",
  "example": {
    "slug": "efw-radiology",
    "org": "EFW Radiology",
    "discipline": "Physics",
    "question": "How can an echo help make a picture of something inside the body?",
    "work": "EFW Radiology provides ultrasound at Calgary clinics including Uxborough. Its service information explains that reflected sound waves are used to form images. An employer role overview separately describes sonographers' examinations and patient-care responsibilities, and booking staff's coordination work. The story joins the physics of measurement with the people who make clinical imaging possible.",
    "localShort": "Uxborough clinic in Calgary explicitly lists general ultrasound; employer explains the technique.",
    "calgary": "Uxborough clinic in Calgary explicitly lists general ultrasound; employer explains the technique.",
    "site": "Uxborough clinic in Calgary explicitly lists general ultrasound; employer explains the technique.",
    "localSourceIds": [
      "page-oct18-source-37",
      "page-oct18-source-38",
      "page-oct18-source-39",
      "page-oct18-source-40"
    ],
    "explain": "Use a fictional uniform-medium model with speed 1,500 m/s and an echo returning after 80 microseconds. Calculate the total sound path (0.12 m) and boundary depth (0.06 m). Explain the division by two and one reason a real examination is more complicated.",
    "prompt": "Why is finding an echo different from knowing what it means?",
    "conversation": "Why is finding an echo different from knowing what it means?",
    "mindset": "The assumed speed and timing are teaching values, not a patient result. Ultrasound is a mechanical sound wave, not X-rays. Do not diagnose from images or imply that sound travels at one exact speed through every tissue.",
    "courses": [
      {
        "course": "Physics 20",
        "topic": "D2 — mechanical waves and reflection"
      }
    ],
    "courseFitSourceIds": [
      "page-oct18-source-7"
    ],
    "roles": [
      {
        "title": "Diagnostic medical sonographer",
        "note": "Acquire ultrasound images while supporting the person being examined.",
        "evidence": "EFW explicitly names ultrasound technologists and booking/reception roles. Listed sonography qualification requirements are employer-stated; detailed teaching explanations are editorial.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-37",
          "page-oct18-source-38",
          "page-oct18-source-39",
          "page-oct18-source-40"
        ]
      },
      {
        "title": "Medical office and booking support",
        "note": "Help patients and clinical teams coordinate the information and appointments needed for care.",
        "evidence": "EFW explicitly names ultrasound technologists and booking/reception roles. Listed sonography qualification requirements are employer-stated; detailed teaching explanations are editorial.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-37",
          "page-oct18-source-38",
          "page-oct18-source-39",
          "page-oct18-source-40"
        ]
      }
    ],
    "rolesNote": "Source-backed work areas and related occupations, not a staff roster or a list of current vacancies. Evergreen commonly-recruited role descriptions supply useful duties and qualification evidence. They are not a dated vacancy or proof of an open position; no vacancy card proposed.",
    "pathways": [
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Diagnostic Medical Sonography",
        "note": "Ultrasound acquisition, instrumentation and patient care. EFW separately states recognised training, Sonography Canada credentials and liability insurance; its evergreen overview is not an offer of work.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-41"
        ]
      },
      {
        "kindLabel": "Certificate",
        "label": "SAIT — Medical Office Assistant and Unit Clerk",
        "note": "Clinical administration and patient-record workflows. An administrative route, distinct from sonography and physician training.",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-42"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "EFW Radiology provides ultrasound at Calgary clinics including Uxborough. Its service information explains that reflected sound waves are used to form images. An employer role overview separately describes sonographers' examinations and patient-care responsibilities, and booking staff's coordination work. The story joins the physics of measurement with the people who make clinical imaging possible.",
        "status": "Company-stated work with source limits preserved",
        "kind": "stated",
        "sourceIds": [
          "page-oct18-source-37",
          "page-oct18-source-38",
          "page-oct18-source-39",
          "page-oct18-source-40"
        ]
      },
      {
        "type": "local connection",
        "claim": "Uxborough clinic in Calgary explicitly lists general ultrasound; employer explains the technique.",
        "status": "Source-backed Calgary connection",
        "kind": "stated",
        "sourceIds": [
          "page-oct18-source-37",
          "page-oct18-source-38",
          "page-oct18-source-39",
          "page-oct18-source-40"
        ]
      },
      {
        "type": "course fit",
        "claim": "Performance standards explicitly include wave speed, mechanical-wave reflection and ray/wave diagrams. Pulse-echo imaging is the applied context; clinical interpretation is outside scope.",
        "status": "Editorial application of source-checked curriculum concepts",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-7"
        ]
      },
      {
        "type": "limits",
        "claim": "Keep role-overview evidence separate from current hiring. The draft offers sonography and medical-office routes, not a shortcut into physician practice.",
        "status": "Scope of this example",
        "kind": "interpreted",
        "sourceIds": [
          "page-oct18-source-37",
          "page-oct18-source-38",
          "page-oct18-source-39",
          "page-oct18-source-40"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-oct18-source-37",
        "label": "efw.ca — general ultrasound",
        "url": "https://www.efw.ca/services/general-ultrasound/"
      },
      {
        "id": "page-oct18-source-38",
        "label": "efw.ca — uxborough 17",
        "url": "https://www.efw.ca/locations/uxborough-17/"
      },
      {
        "id": "page-oct18-source-39",
        "label": "efw.ca — commonly recruited positions",
        "url": "https://www.efw.ca/careers/commonly-recruited-positions/"
      },
      {
        "id": "page-oct18-source-40",
        "label": "efw.ca — careers",
        "url": "https://www.efw.ca/careers/"
      },
      {
        "id": "page-oct18-source-41",
        "label": "SAIT — Diagnostic Medical Sonography",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/diagnostic-medical-sonography"
      },
      {
        "id": "page-oct18-source-42",
        "label": "SAIT — Medical Office Assistant and Unit Clerk",
        "url": "https://www.sait.ca/programs-and-courses/certificates/medical-office-assistant-and-unit-clerk"
      },
      {
        "id": "page-oct18-source-7",
        "label": "alberta.ca — edc physics20 30 performance standards.pdf",
        "url": "https://www.alberta.ca/system/files/custom_downloaded_images/edc-physics20-30-performance-standards.pdf"
      }
    ],
    "checkedOn": "2026-10-18",
    "detailsId": "efw-radiology-details"
  },
  "details": {
    "id": "efw-radiology-details",
    "exampleSlug": "efw-radiology",
    "organizationId": "efw-radiology",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "efw-radiology",
      "subtitle": "An echo can carry information about something we cannot see directly.",
      "caption": "An echo can carry information about something we cannot see directly.",
      "steps": [
        {
          "text": "A transducer sends a pulse of high-frequency sound into the body.",
          "kind": "interpreted",
          "sourceIds": [
            "oct18-source-37",
            "oct18-source-38",
            "oct18-source-39",
            "oct18-source-40",
            "oct18-source-7"
          ]
        },
        {
          "text": "Some sound is reflected at boundaries where acoustic properties change and returns toward the transducer.",
          "kind": "interpreted",
          "sourceIds": [
            "oct18-source-37",
            "oct18-source-38",
            "oct18-source-39",
            "oct18-source-40",
            "oct18-source-7"
          ]
        },
        {
          "text": "The machine uses returned signals to help construct an image. Travel time can contribute to depth estimation; a simple model assumes a sound speed.",
          "kind": "interpreted",
          "sourceIds": [
            "oct18-source-37",
            "oct18-source-38",
            "oct18-source-39",
            "oct18-source-40",
            "oct18-source-7"
          ]
        },
        {
          "text": "A sonographer acquires useful views while caring for the patient. A clinician interprets imaging evidence with the clinical question; an image alone is not the whole decision.",
          "kind": "interpreted",
          "sourceIds": [
            "oct18-source-37",
            "oct18-source-38",
            "oct18-source-39",
            "oct18-source-40",
            "oct18-source-7"
          ]
        }
      ],
      "diagramAlt": "An orange arrow shows a sound pulse travelling down from an ultrasound probe to a tissue boundary. A blue arrow shows the echo returning up to the probe. A connected screen shows one received echo peak.",
      "diagramProvenance": "Generated fictional teaching illustration; source-grounded editorial simplification. Prompts and visual review: design/example-expansion-2026-10-18/.",
      "discussion": "Why is finding an echo different from knowing what it means?"
    },
    "roleIds": [
      "work-sonography",
      "work-clinic-administration"
    ],
    "pathwayIds": [
      "oct18-route-sonography",
      "oct18-route-moa"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-18"
  },
  "organization": {
    "id": "efw-radiology",
    "name": "EFW Radiology",
    "organizationType": "company",
    "tagline": "An echo can carry information about something we cannot see directly.",
    "description": {
      "text": "EFW Radiology provides ultrasound at Calgary clinics including Uxborough. Its service information explains that reflected sound waves are used to form images. An employer role overview separately describes sonographers' examinations and patient-care responsibilities, and booking staff's coordination work. The story joins the physics of measurement with the people who make clinical imaging possible.",
      "kind": "stated",
      "sourceIds": [
        "oct18-source-37",
        "oct18-source-38",
        "oct18-source-39",
        "oct18-source-40"
      ]
    },
    "problem": {
      "text": "How can an echo help make a picture of something inside the body?",
      "kind": "interpreted",
      "sourceIds": [
        "oct18-source-37",
        "oct18-source-38",
        "oct18-source-39",
        "oct18-source-40"
      ]
    },
    "offering": {
      "text": "Use reflected sound waves to create diagnostic images.",
      "kind": "stated",
      "sourceIds": [
        "oct18-source-37",
        "oct18-source-38",
        "oct18-source-39",
        "oct18-source-40"
      ]
    },
    "beneficiaries": {
      "text": "Patients and clinicians seeking information from medical imaging.",
      "kind": "interpreted",
      "sourceIds": [
        "oct18-source-37",
        "oct18-source-38",
        "oct18-source-39",
        "oct18-source-40"
      ]
    },
    "headquarters": {
      "text": "Headquarters not separately verified for this example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "Uxborough clinic in Calgary explicitly lists general ultrasound; employer explains the technique.",
      "kind": "stated",
      "sourceIds": [
        "oct18-source-37",
        "oct18-source-38",
        "oct18-source-39",
        "oct18-source-40"
      ]
    },
    "websiteSourceId": "oct18-home-efw-radiology",
    "checkedOn": "2026-10-18",
    "careersSourceId": "oct18-source-39"
  },
  "organizationRoles": [
    {
      "organizationId": "efw-radiology",
      "roleId": "work-sonography",
      "establishes": "related-work",
      "label": "EFW explicitly names ultrasound technologists and booking/reception roles. Listed sonography qualification requirements are employer-stated; detailed teaching explanations are editorial.",
      "kind": "interpreted",
      "sourceIds": [
        "oct18-source-37",
        "oct18-source-38",
        "oct18-source-39",
        "oct18-source-40"
      ],
      "checkedOn": "2026-10-18"
    },
    {
      "organizationId": "efw-radiology",
      "roleId": "work-clinic-administration",
      "establishes": "related-work",
      "label": "EFW explicitly names ultrasound technologists and booking/reception roles. Listed sonography qualification requirements are employer-stated; detailed teaching explanations are editorial.",
      "kind": "interpreted",
      "sourceIds": [
        "oct18-source-37",
        "oct18-source-38",
        "oct18-source-39",
        "oct18-source-40"
      ],
      "checkedOn": "2026-10-18"
    }
  ],
  "jobs": [],
  "sources": [],
  "diagram": {
    "image": "/images/story-diagrams/efw-radiology-echo-graphic-novel.webp",
    "heading": "Send a sound pulse. Listen for its echo.",
    "steps": [
      "Send: the probe sends a pulse of high-frequency sound into the tissue. Follow the orange arrow down.",
      "Echo: some sound reflects at the tissue boundary and returns to the probe. Follow the blue arrow up.",
      "Record: the screen shows a received echo. Its return time helps estimate depth; many measurements are used to build an ultrasound image."
    ],
    "note": "One boundary and one echo are shown to simplify the idea. The arrows show travel at different times, not separate physical channels. Only part of the sound reflects; some continues deeper. The screen is a signal sketch, not a diagnostic image."
  },
  "unitLinks": [
    {
      "unitId": "p20d",
      "why": "Performance standards explicitly include wave speed, mechanical-wave reflection and ray/wave diagrams. Pulse-echo imaging is the applied context; clinical interpretation is outside scope."
    }
  ]
} satisfies ExampleRecord;
