// Approved 17 October 2026. Exact reviewed copy, resolutions and provenance: docs/validation/full-examples/2026-10-17/.
import type { Example, Organization, OrganizationRole, RoleProfile, LearningPathway, JobExample, ExampleDetails, DatedSource } from "./types";

export const octoberExamples: Example[] = [
  {
    "slug": "o2-planning-design",
    "org": "O2 Planning and Design",
    "discipline": "Biology",
    "question": "How can a park help clean stormwater before it reaches a river?",
    "work": "O2 is a planning and design practice with a Calgary studio. At Dale Hodges Park, it worked with other specialists to combine stormwater treatment, habitat and public space. Its project account describes marshes, wet meadows and landforms that guide water before it reaches the Bow River. This was collaborative work; O2 did not design every element alone.",
    "localShort": "Calgary studio; the featured project is Dale Hodges Park in Calgary.",
    "calgary": "Calgary studio; the featured project is Dale Hodges Park in Calgary.",
    "site": "Calgary studio; the featured project is Dale Hodges Park in Calgary.",
    "localSourceIds": [
      "page-o2-planning-design-oct17-source-1",
      "page-o2-planning-design-oct17-source-2",
      "page-o2-planning-design-oct17-source-3",
      "page-o2-planning-design-oct17-source-4",
      "page-o2-planning-design-oct17-source-5"
    ],
    "explain": "Draw two fictional routes from a street drain to a river: one short and fast, one with space for settling. Mark where to sample and one habitat trade-off.",
    "prompt": "Would the clearest-looking water necessarily be the safest water?",
    "conversation": "Would the clearest-looking water necessarily be the safest water?",
    "mindset": "Clear water can still contain dissolved contaminants. This is a planning model, not a drinking-water treatment demonstration.",
    "courses": [
      {
        "course": "Biology 20",
        "topic": "Water, habitat and ecosystem relationships"
      }
    ],
    "courseFitSourceIds": [
      "page-o2-planning-design-oct17-source-6"
    ],
    "roles": [
      {
        "title": "Landscape design",
        "note": "Shape outdoor spaces so water, habitat and human uses can work together.",
        "evidence": "O2 lists landscape architects and a Calgary junior-designer description; this role summary is editorial.",
        "kind": "interpreted",
        "sourceIds": [
          "page-o2-planning-design-oct17-source-1",
          "page-o2-planning-design-oct17-source-2",
          "page-o2-planning-design-oct17-source-3",
          "page-o2-planning-design-oct17-source-4",
          "page-o2-planning-design-oct17-source-5"
        ]
      },
      {
        "title": "Spatial data and mapping",
        "note": "Turn measurements tied to places into usable spatial information. The work involves coordinates, scale and checking that datasets describe the same location and time.",
        "evidence": "O2’s mapping page describes GIS and visualization services.",
        "kind": "interpreted",
        "sourceIds": [
          "page-o2-planning-design-oct17-source-1",
          "page-o2-planning-design-oct17-source-2",
          "page-o2-planning-design-oct17-source-3",
          "page-o2-planning-design-oct17-source-4",
          "page-o2-planning-design-oct17-source-5"
        ]
      },
      {
        "title": "Environmental field assessment",
        "note": "Collect and interpret evidence about a place before recommending an action.",
        "evidence": "O2 lists environmental scientists; the park project supports ecological work, not a particular employee assignment.",
        "kind": "interpreted",
        "sourceIds": [
          "page-o2-planning-design-oct17-source-1",
          "page-o2-planning-design-oct17-source-2",
          "page-o2-planning-design-oct17-source-3",
          "page-o2-planning-design-oct17-source-4",
          "page-o2-planning-design-oct17-source-5"
        ]
      }
    ],
    "rolesNote": "Work areas and related occupations, not a staff roster or a list of current vacancies. Each profile explains the evidence for its company connection.",
    "pathways": [
      {
        "kindLabel": "Graduate degree",
        "label": "University of Calgary — Master of Landscape Architecture",
        "note": "Study landscape design, land stewardship and community needs. Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
        "kind": "interpreted",
        "sourceIds": [
          "page-o2-planning-design-oct17-source-7"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Geomatics Engineering Technology",
        "note": "Learn surveying, GIS, positioning and remote sensing. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-o2-planning-design-oct17-source-8"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Environmental Technology",
        "note": "Study environmental monitoring, assessment and field methods. Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
        "kind": "interpreted",
        "sourceIds": [
          "page-o2-planning-design-oct17-source-9"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "O2 is a planning and design practice with a Calgary studio. At Dale Hodges Park, it worked with other specialists to combine stormwater treatment, habitat and public space. Its project account describes marshes, wet meadows and landforms that guide water before it reaches the Bow River. This was collaborative work; O2 did not design every element alone.",
        "status": "Source-backed company/project account",
        "kind": "stated",
        "sourceIds": [
          "page-o2-planning-design-oct17-source-1",
          "page-o2-planning-design-oct17-source-2",
          "page-o2-planning-design-oct17-source-3",
          "page-o2-planning-design-oct17-source-4",
          "page-o2-planning-design-oct17-source-5"
        ]
      },
      {
        "type": "local connection",
        "claim": "Calgary studio; the featured project is Dale Hodges Park in Calgary.",
        "status": "Source-backed local work",
        "kind": "stated",
        "sourceIds": [
          "page-o2-planning-design-oct17-source-1",
          "page-o2-planning-design-oct17-source-2",
          "page-o2-planning-design-oct17-source-3",
          "page-o2-planning-design-oct17-source-4",
          "page-o2-planning-design-oct17-source-5"
        ]
      },
      {
        "type": "course fit",
        "claim": "Biology 20 B1.3k relates biotic and abiotic factors in aquatic ecosystems. Use the park to compare habitat and water conditions; treatment performance needs measurements.",
        "status": "Editorial application of verified curriculum topics",
        "kind": "interpreted",
        "sourceIds": [
          "page-o2-planning-design-oct17-source-6"
        ]
      },
      {
        "type": "limits",
        "claim": "No measured removal percentage is claimed. Preserve partner attribution and distinguish suspended particles from dissolved substances.",
        "status": "Scope of this example",
        "kind": "interpreted",
        "sourceIds": [
          "page-o2-planning-design-oct17-source-1",
          "page-o2-planning-design-oct17-source-2",
          "page-o2-planning-design-oct17-source-3",
          "page-o2-planning-design-oct17-source-4",
          "page-o2-planning-design-oct17-source-5"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-o2-planning-design-oct17-source-1",
        "label": "O2 Planning and Design — company/project evidence 1",
        "url": "https://www.o2design.com/dale-hodges-park"
      },
      {
        "id": "page-o2-planning-design-oct17-source-2",
        "label": "O2 Planning and Design — company/project evidence 2",
        "url": "https://www.o2design.com/contact-us"
      },
      {
        "id": "page-o2-planning-design-oct17-source-3",
        "label": "O2 Planning and Design — company/project evidence 3",
        "url": "https://www.o2design.com/careers"
      },
      {
        "id": "page-o2-planning-design-oct17-source-4",
        "label": "O2 Planning and Design — company/project evidence 4",
        "url": "https://www.o2design.com/s/O2_Junior-Landscape-Designer.pdf"
      },
      {
        "id": "page-o2-planning-design-oct17-source-5",
        "label": "O2 Planning and Design — company/project evidence 5",
        "url": "https://engage.o2design.com/about.html"
      },
      {
        "id": "page-o2-planning-design-oct17-source-6",
        "label": "Alberta Biology 20–30 program: water use and ecosystems",
        "url": "https://education.alberta.ca/media/159727/bio203007.pdf"
      },
      {
        "id": "page-o2-planning-design-oct17-source-7",
        "label": "University of Calgary — Master of Landscape Architecture",
        "url": "https://sapl.ucalgary.ca/future-students/graduate/master-landscape-architecture-mla"
      },
      {
        "id": "page-o2-planning-design-oct17-source-8",
        "label": "SAIT — Geomatics Engineering Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/geomatics-engineering-technology"
      },
      {
        "id": "page-o2-planning-design-oct17-source-9",
        "label": "SAIT — Environmental Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/environmental-technology"
      }
    ],
    "checkedOn": "2026-10-17",
    "detailsId": "o2-planning-design-details"
  },
  {
    "slug": "entuitive",
    "org": "Entuitive",
    "discipline": "Physics",
    "question": "How can you support a library above a moving train?",
    "work": "Entuitive provided structural engineering for Calgary’s Central Library. Its Calgary-based project lead describes the challenge of building above an active LRT corridor using long-span trusses and coordinating construction with transit operations. Structural engineering helps the building carry loads while leaving space for the railway. The architect, builder and transit operator had different responsibilities.",
    "localShort": "Calgary project and a Calgary-based structural engineering lead are explicitly documented.",
    "calgary": "Calgary project and a Calgary-based structural engineering lead are explicitly documented.",
    "site": "Calgary project and a Calgary-based structural engineering lead are explicitly documented.",
    "localSourceIds": [
      "page-entuitive-oct17-source-10",
      "page-entuitive-oct17-source-11",
      "page-entuitive-oct17-source-12",
      "page-entuitive-oct17-source-13"
    ],
    "explain": "Sketch a fictional floor across a no-support zone. Trace a load path to the ground and identify a connection that would need checking.",
    "prompt": "Why might a structure that works when complete need extra support during construction?",
    "conversation": "Why might a structure that works when complete need extra support during construction?",
    "mindset": "Conceptual force arrows are not an engineered design. Do not suggest students can assess a real building’s safety from a drawing.",
    "courses": [
      {
        "course": "Physics 20",
        "topic": "Balanced forces and structural load paths"
      }
    ],
    "courseFitSourceIds": [
      "page-entuitive-oct17-source-14"
    ],
    "roles": [
      {
        "title": "Structural engineering",
        "note": "Work out how a structure transfers loads through members and connections to its supports.",
        "evidence": "Entuitive identifies its structural engineering contribution and Calgary project lead.",
        "kind": "interpreted",
        "sourceIds": [
          "page-entuitive-oct17-source-10",
          "page-entuitive-oct17-source-11",
          "page-entuitive-oct17-source-12",
          "page-entuitive-oct17-source-13"
        ]
      },
      {
        "title": "Civil and construction technology",
        "note": "Turn project requirements into usable drawings, quantities and checks.",
        "evidence": "Technical detailing is documented in the project account; this is not a verified vacancy.",
        "kind": "interpreted",
        "sourceIds": [
          "page-entuitive-oct17-source-10",
          "page-entuitive-oct17-source-11",
          "page-entuitive-oct17-source-12",
          "page-entuitive-oct17-source-13"
        ]
      },
      {
        "title": "Construction coordination",
        "note": "Help different teams work from compatible information and an achievable sequence.",
        "evidence": "The project account describes construction sequencing and transit coordination; role label is editorial.",
        "kind": "interpreted",
        "sourceIds": [
          "page-entuitive-oct17-source-10",
          "page-entuitive-oct17-source-11",
          "page-entuitive-oct17-source-12",
          "page-entuitive-oct17-source-13"
        ]
      }
    ],
    "rolesNote": "Work areas and related occupations, not a staff roster or a list of current vacancies. Each profile explains the evidence for its company connection.",
    "pathways": [
      {
        "kindLabel": "Bachelor’s degree",
        "label": "University of Calgary — Civil Engineering",
        "note": "Study the design and operation of structures, transportation and water infrastructure. Check current admissions and program requirements. A degree is not automatic professional licensure.",
        "kind": "interpreted",
        "sourceIds": [
          "page-entuitive-oct17-source-15"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Civil Engineering Technology, Municipal Major",
        "note": "Study municipal infrastructure, design and drafting. Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
        "kind": "interpreted",
        "sourceIds": [
          "page-entuitive-oct17-source-16"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Architectural Technologies",
        "note": "Study building design, technical drawings and construction systems. Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
        "kind": "interpreted",
        "sourceIds": [
          "page-entuitive-oct17-source-17"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "Entuitive provided structural engineering for Calgary’s Central Library. Its Calgary-based project lead describes the challenge of building above an active LRT corridor using long-span trusses and coordinating construction with transit operations. Structural engineering helps the building carry loads while leaving space for the railway. The architect, builder and transit operator had different responsibilities.",
        "status": "Source-backed company/project account",
        "kind": "stated",
        "sourceIds": [
          "page-entuitive-oct17-source-10",
          "page-entuitive-oct17-source-11",
          "page-entuitive-oct17-source-12",
          "page-entuitive-oct17-source-13"
        ]
      },
      {
        "type": "local connection",
        "claim": "Calgary project and a Calgary-based structural engineering lead are explicitly documented.",
        "status": "Source-backed local work",
        "kind": "stated",
        "sourceIds": [
          "page-entuitive-oct17-source-10",
          "page-entuitive-oct17-source-11",
          "page-entuitive-oct17-source-12",
          "page-entuitive-oct17-source-13"
        ]
      },
      {
        "type": "course fit",
        "claim": "Physics 20 B1 concerns balanced and unbalanced forces. Draw a simplified free-body diagram; truss design and construction sequencing are engineering extensions.",
        "status": "Editorial application of verified curriculum topics",
        "kind": "interpreted",
        "sourceIds": [
          "page-entuitive-oct17-source-14"
        ]
      },
      {
        "type": "limits",
        "claim": "Keep the LRT beneath a supported span. No invented loads, dimensions or claims that a generic illustration is the actual library structure.",
        "status": "Scope of this example",
        "kind": "interpreted",
        "sourceIds": [
          "page-entuitive-oct17-source-10",
          "page-entuitive-oct17-source-11",
          "page-entuitive-oct17-source-12",
          "page-entuitive-oct17-source-13"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-entuitive-oct17-source-10",
        "label": "Entuitive — company/project evidence 1",
        "url": "https://www.entuitive.com/post/designing-for-constructability-over-active-rail-lines"
      },
      {
        "id": "page-entuitive-oct17-source-11",
        "label": "Entuitive — company/project evidence 2",
        "url": "https://view.ceros.com/entuitive/new-calgary-library-big-story"
      },
      {
        "id": "page-entuitive-oct17-source-12",
        "label": "Entuitive — company/project evidence 3",
        "url": "https://www.calgarymlc.ca/projects/central-library"
      },
      {
        "id": "page-entuitive-oct17-source-13",
        "label": "Entuitive — company/project evidence 4",
        "url": "https://www.entuitive.com/careers"
      },
      {
        "id": "page-entuitive-oct17-source-14",
        "label": "Alberta Physics 20–30 performance standards: A1, B1 and C1",
        "url": "https://www.alberta.ca/system/files/custom_downloaded_images/edc-physics20-30-performance-standards.pdf"
      },
      {
        "id": "page-entuitive-oct17-source-15",
        "label": "University of Calgary — Civil Engineering",
        "url": "https://schulich.ucalgary.ca/future-students/undergraduate/programs/bsc-civil-engineering"
      },
      {
        "id": "page-entuitive-oct17-source-16",
        "label": "SAIT — Civil Engineering Technology, Municipal Major",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/civil-engineering-technology-municipal"
      },
      {
        "id": "page-entuitive-oct17-source-17",
        "label": "SAIT — Architectural Technologies",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/architectural-technologies"
      }
    ],
    "checkedOn": "2026-10-17",
    "detailsId": "entuitive-details"
  },
  {
    "slug": "phil-sebastian",
    "org": "Phil & Sebastian Coffee Roasters",
    "discipline": "Physics",
    "question": "How can measurements help make a roast repeatable?",
    "work": "Phil & Sebastian operates a roasting facility in Calgary’s Simmons Building. The company describes a custom roaster, logged roast data and additional reflectance measurements used to check batches. The story connects food production with instrumentation: recording operating conditions and checking the product answer different questions. Its claims about competitors are not needed for this example.",
    "localShort": "The company identifies the Simmons Building as its Calgary roasting facility.",
    "calgary": "The company identifies the Simmons Building as its Calgary roasting facility.",
    "site": "The company identifies the Simmons Building as its Calgary roasting facility.",
    "localSourceIds": [
      "page-phil-sebastian-oct17-source-18",
      "page-phil-sebastian-oct17-source-19",
      "page-phil-sebastian-oct17-source-20"
    ],
    "explain": "Compare three fictional batches: A and B share a heating record but have different colour readings; B and C share colour readings but have different sensory notes. List what each comparison can and cannot show.",
    "prompt": "If two batches have the same recorded temperature history, what else would you want to measure?",
    "conversation": "If two batches have the same recorded temperature history, what else would you want to measure?",
    "mindset": "The fictional comparisons are not company results. No coffee consumption or hot-equipment activity is required.",
    "courses": [
      {
        "course": "Physics 30",
        "topic": "Reflection and optical measurement"
      }
    ],
    "courseFitSourceIds": [
      "page-phil-sebastian-oct17-source-14"
    ],
    "roles": [
      {
        "title": "Roast production",
        "note": "Operate a controlled food-processing sequence and compare the product with its intended result.",
        "evidence": "Company process description supports roasting work; no specific roaster vacancy verified.",
        "kind": "interpreted",
        "sourceIds": [
          "page-phil-sebastian-oct17-source-18",
          "page-phil-sebastian-oct17-source-19",
          "page-phil-sebastian-oct17-source-20"
        ]
      },
      {
        "title": "Instrument development and testing",
        "note": "Help build and check the equipment that produces measurements. Instrument work joins hardware, software and experiments rather than treating a reading as automatically correct.",
        "evidence": "Custom equipment and reflectance measurements support the work-area connection.",
        "kind": "interpreted",
        "sourceIds": [
          "page-phil-sebastian-oct17-source-18",
          "page-phil-sebastian-oct17-source-19",
          "page-phil-sebastian-oct17-source-20"
        ]
      },
      {
        "title": "Quality and traceability",
        "note": "Make it possible to explain how a result or product was produced. Quality work checks records, methods and acceptance criteria so variation can be investigated rather than hidden.",
        "evidence": "Company describes batch checks; the general quality profile is not a job description.",
        "kind": "interpreted",
        "sourceIds": [
          "page-phil-sebastian-oct17-source-18",
          "page-phil-sebastian-oct17-source-19",
          "page-phil-sebastian-oct17-source-20"
        ]
      }
    ],
    "rolesNote": "Work areas and related occupations, not a staff roster or a list of current vacancies. Each profile explains the evidence for its company connection.",
    "pathways": [
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Instrumentation Engineering Technology",
        "note": "Work with measurement devices, calibration and automated process controls. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-phil-sebastian-oct17-source-21"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Chemical Laboratory Technology",
        "note": "Practice chemical analysis, sample preparation and analytical instrumentation. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-phil-sebastian-oct17-source-22"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Mechanical Engineering Technology",
        "note": "Study mechanical systems, design and manufacturing, with specialization options. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-phil-sebastian-oct17-source-23"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "Phil & Sebastian operates a roasting facility in Calgary’s Simmons Building. The company describes a custom roaster, logged roast data and additional reflectance measurements used to check batches. The story connects food production with instrumentation: recording operating conditions and checking the product answer different questions. Its claims about competitors are not needed for this example.",
        "status": "Source-backed company/project account",
        "kind": "stated",
        "sourceIds": [
          "page-phil-sebastian-oct17-source-18",
          "page-phil-sebastian-oct17-source-19",
          "page-phil-sebastian-oct17-source-20"
        ]
      },
      {
        "type": "local connection",
        "claim": "The company identifies the Simmons Building as its Calgary roasting facility.",
        "status": "Source-backed local work",
        "kind": "stated",
        "sourceIds": [
          "page-phil-sebastian-oct17-source-18",
          "page-phil-sebastian-oct17-source-19",
          "page-phil-sebastian-oct17-source-20"
        ]
      },
      {
        "type": "course fit",
        "claim": "Physics 30 C1 includes reflection. Trace light from source to sample to sensor; roast data and flavour are separate evidence.",
        "status": "Editorial application of verified curriculum topics",
        "kind": "interpreted",
        "sourceIds": [
          "page-phil-sebastian-oct17-source-14"
        ]
      },
      {
        "type": "limits",
        "claim": "No exact roast temperatures or proprietary machine internals. Colour and flavour must remain distinct.",
        "status": "Scope of this example",
        "kind": "interpreted",
        "sourceIds": [
          "page-phil-sebastian-oct17-source-18",
          "page-phil-sebastian-oct17-source-19",
          "page-phil-sebastian-oct17-source-20"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-phil-sebastian-oct17-source-14",
        "label": "Alberta Physics 20–30 performance standards: A1, B1 and C1",
        "url": "https://www.alberta.ca/system/files/custom_downloaded_images/edc-physics20-30-performance-standards.pdf"
      },
      {
        "id": "page-phil-sebastian-oct17-source-18",
        "label": "Phil & Sebastian Coffee Roasters — company/project evidence 1",
        "url": "https://philsebastian.com/pages/locations/simmons"
      },
      {
        "id": "page-phil-sebastian-oct17-source-19",
        "label": "Phil & Sebastian Coffee Roasters — company/project evidence 2",
        "url": "https://philsebastian.com/pages/our-coffee-approach"
      },
      {
        "id": "page-phil-sebastian-oct17-source-20",
        "label": "Phil & Sebastian Coffee Roasters — company/project evidence 3",
        "url": "https://philsebastian.com/pages/join-our-team"
      },
      {
        "id": "page-phil-sebastian-oct17-source-21",
        "label": "SAIT — Instrumentation Engineering Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/instrumentation-engineering-technology"
      },
      {
        "id": "page-phil-sebastian-oct17-source-22",
        "label": "SAIT — Chemical Laboratory Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/chemical-laboratory-technology"
      },
      {
        "id": "page-phil-sebastian-oct17-source-23",
        "label": "SAIT — Mechanical Engineering Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/mechanical-engineering-technology"
      }
    ],
    "checkedOn": "2026-10-17",
    "detailsId": "phil-sebastian-details"
  },
  {
    "slug": "broken-pencil-studios",
    "org": "Broken Pencil Studios",
    "discipline": "Physics",
    "question": "How can a moving picture explain a process you cannot see?",
    "work": "Broken Pencil Studios is a Calgary creative studio offering animation, illustration and technical visualization. Its own production account describes moving from a communication brief to script, storyboard, design, animation and delivery. The work is not simply making something move: the team chooses what to show so an audience can understand a message.",
    "localShort": "The company identifies itself as a Calgary animation production studio.",
    "calgary": "The company identifies itself as a Calgary animation production studio.",
    "site": "The company identifies itself as a Calgary animation production studio.",
    "localSourceIds": [
      "page-broken-pencil-studios-oct17-source-24",
      "page-broken-pencil-studios-oct17-source-25",
      "page-broken-pencil-studios-oct17-source-26"
    ],
    "explain": "Draw four frames showing a ball at equal time intervals. Make one version constant-speed and one speeding up. Ask a partner to infer the motion from the spacing.",
    "prompt": "When does simplifying an animation make it misleading?",
    "conversation": "When does simplifying an animation make it misleading?",
    "mindset": "Use the ball activity to compare positions at equal time intervals. Constant displacement per interval means constant velocity; increasing displacement means speeding up in that direction. This is our physics extension, not a claimed client project. Artistic motion can depart from reality.",
    "courses": [
      {
        "course": "Physics 20",
        "topic": "Frame spacing, displacement and velocity"
      }
    ],
    "courseFitSourceIds": [
      "page-broken-pencil-studios-oct17-source-14"
    ],
    "roles": [
      {
        "title": "Storyboarding and illustration",
        "note": "Decide what an audience needs to see before the final sequence is produced.",
        "evidence": "Company production article describes script-to-storyboard and illustration work.",
        "kind": "interpreted",
        "sourceIds": [
          "page-broken-pencil-studios-oct17-source-24",
          "page-broken-pencil-studios-oct17-source-25",
          "page-broken-pencil-studios-oct17-source-26"
        ]
      },
      {
        "title": "Animation",
        "note": "Create motion from planned images, models and timing decisions.",
        "evidence": "Company article explicitly describes animation and timing.",
        "kind": "interpreted",
        "sourceIds": [
          "page-broken-pencil-studios-oct17-source-24",
          "page-broken-pencil-studios-oct17-source-25",
          "page-broken-pencil-studios-oct17-source-26"
        ]
      },
      {
        "title": "Creative production coordination",
        "note": "Help a project move from a communication brief to a deliverable that can be reviewed.",
        "evidence": "Company article identifies project/development work and staged client review; profile is editorial.",
        "kind": "interpreted",
        "sourceIds": [
          "page-broken-pencil-studios-oct17-source-24",
          "page-broken-pencil-studios-oct17-source-25",
          "page-broken-pencil-studios-oct17-source-26"
        ]
      }
    ],
    "rolesNote": "Work areas and related occupations, not a staff roster or a list of current vacancies. Each profile explains the evidence for its company connection.",
    "pathways": [
      {
        "kindLabel": "Bachelor’s degree",
        "label": "AUArts — Bachelor of Design",
        "note": "Develop visual communication through studio-based design work. Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
        "kind": "interpreted",
        "sourceIds": [
          "page-broken-pencil-studios-oct17-source-27"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Film and Video Production",
        "note": "Practise production and post-production through film projects. Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
        "kind": "interpreted",
        "sourceIds": [
          "page-broken-pencil-studios-oct17-source-28"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "Broken Pencil Studios is a Calgary creative studio offering animation, illustration and technical visualization. Its own production account describes moving from a communication brief to script, storyboard, design, animation and delivery. The work is not simply making something move: the team chooses what to show so an audience can understand a message.",
        "status": "Source-backed company/project account",
        "kind": "stated",
        "sourceIds": [
          "page-broken-pencil-studios-oct17-source-24",
          "page-broken-pencil-studios-oct17-source-25",
          "page-broken-pencil-studios-oct17-source-26"
        ]
      },
      {
        "type": "local connection",
        "claim": "The company identifies itself as a Calgary animation production studio.",
        "status": "Source-backed local work",
        "kind": "stated",
        "sourceIds": [
          "page-broken-pencil-studios-oct17-source-24",
          "page-broken-pencil-studios-oct17-source-25",
          "page-broken-pencil-studios-oct17-source-26"
        ]
      },
      {
        "type": "course fit",
        "claim": "Physics 20 A1 relates displacement, velocity, acceleration and time. Compare ball positions at equal time intervals; animation production supplies the context, not a claim that all studio work is physics.",
        "status": "Editorial application of verified curriculum topics",
        "kind": "interpreted",
        "sourceIds": [
          "page-broken-pencil-studios-oct17-source-14"
        ]
      },
      {
        "type": "limits",
        "claim": "The equal-time motion activity supplies the Physics 20 connection. Do not claim that animation improves learning by a measured percentage.",
        "status": "Scope of this example",
        "kind": "interpreted",
        "sourceIds": [
          "page-broken-pencil-studios-oct17-source-24",
          "page-broken-pencil-studios-oct17-source-25",
          "page-broken-pencil-studios-oct17-source-26"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-broken-pencil-studios-oct17-source-14",
        "label": "Alberta Physics 20–30 performance standards: A1, B1 and C1",
        "url": "https://www.alberta.ca/system/files/custom_downloaded_images/edc-physics20-30-performance-standards.pdf"
      },
      {
        "id": "page-broken-pencil-studios-oct17-source-24",
        "label": "Broken Pencil Studios — company/project evidence 1",
        "url": "https://www.brokenpencilstudios.ca/"
      },
      {
        "id": "page-broken-pencil-studios-oct17-source-25",
        "label": "Broken Pencil Studios — company/project evidence 2",
        "url": "https://www.brokenpencilstudios.ca/about-us"
      },
      {
        "id": "page-broken-pencil-studios-oct17-source-26",
        "label": "Broken Pencil Studios — company/project evidence 3",
        "url": "https://www.brokenpencilstudios.ca/blogs/from-scribbles-to-screens-behind-the-scenes-of-creating-an-animated-explainer-video"
      },
      {
        "id": "page-broken-pencil-studios-oct17-source-27",
        "label": "AUArts — Bachelor of Design",
        "url": "https://www.auarts.ca/program-areas/undergraduate/bachelor-of-design-bdes"
      },
      {
        "id": "page-broken-pencil-studios-oct17-source-28",
        "label": "SAIT — Film and Video Production",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/film-and-video-production"
      }
    ],
    "checkedOn": "2026-10-17",
    "detailsId": "broken-pencil-studios-details"
  },
  {
    "slug": "cpkc",
    "org": "CPKC",
    "discipline": "Physics",
    "question": "How can trains share a rail network without getting in each other’s way?",
    "work": "CPKC operates a rail network across Canada, the United States and Mexico. Its 2025 annual report identifies Calgary as the location of its main operations centre and primary Canadian dispatch facility. Rail traffic controllers coordinate crews and day-to-day locomotive operations. The classroom model below simplifies the scheduling problem; it does not describe railway operating rules.",
    "localShort": "Calgary operations centre and dispatch function are documented in the 2025 annual report.",
    "calgary": "Calgary operations centre and dispatch function are documented in the 2025 annual report.",
    "site": "Calgary operations centre and dispatch function are documented in the 2025 annual report.",
    "localSourceIds": [
      "page-cpkc-oct17-source-29",
      "page-cpkc-oct17-source-30",
      "page-cpkc-oct17-source-31",
      "page-cpkc-oct17-source-32"
    ],
    "explain": "On a fictional single-track segment, Train A occupies it from minute 0 to 8 and Train B from minute 5 to 12. Shift B to remove overlap, then discuss what additional safety margin would need a real rule rather than a guess.",
    "prompt": "What happens to the rest of a timetable when one train is delayed?",
    "conversation": "What happens to the rest of a timetable when one train is delayed?",
    "mindset": "This is a scheduling puzzle, not a safe operating procedure. Do not invent braking distances or dispatch clearances.",
    "courses": [
      {
        "course": "Physics 20",
        "topic": "Position-time graphs and motion"
      }
    ],
    "courseFitSourceIds": [
      "page-cpkc-oct17-source-14"
    ],
    "roles": [
      {
        "title": "Rail traffic control",
        "note": "Coordinate railway movements and crews within formal operating systems and rules.",
        "evidence": "2025 company annual report explicitly identifies controllers and Calgary operations.",
        "kind": "interpreted",
        "sourceIds": [
          "page-cpkc-oct17-source-29",
          "page-cpkc-oct17-source-30",
          "page-cpkc-oct17-source-31",
          "page-cpkc-oct17-source-32"
        ]
      },
      {
        "title": "Railway conductor work",
        "note": "Support train movements and handling of rail vehicles through trained railway operations.",
        "evidence": "SAIT describes conductor tasks as related railway work; no specific Calgary CPKC vacancy or project assignment is claimed.",
        "kind": "interpreted",
        "sourceIds": [
          "page-cpkc-oct17-source-29",
          "page-cpkc-oct17-source-30",
          "page-cpkc-oct17-source-31",
          "page-cpkc-oct17-source-32"
        ]
      },
      {
        "title": "Software and data systems",
        "note": "Build the tools that move, process and display information. Reliable software needs testing against missing, delayed and unexpected data as well as ideal examples.",
        "evidence": "Adjacent network/data work; not a verified CPKC job or requirement for traffic control.",
        "kind": "interpreted",
        "sourceIds": [
          "page-cpkc-oct17-source-29",
          "page-cpkc-oct17-source-30",
          "page-cpkc-oct17-source-31",
          "page-cpkc-oct17-source-32"
        ]
      }
    ],
    "rolesNote": "Work areas and related occupations, not a staff roster or a list of current vacancies. Each profile explains the evidence for its company connection.",
    "pathways": [
      {
        "kindLabel": "Employer training after selection",
        "label": "CPKC — Employer rail traffic controller training",
        "note": "A historical CPKC description outlined six months of company training for selected controller applicants, including qualification in railway operating rules. The indexed employer description listed high school completion or equivalent and employer selection and qualification requirements. The original job page is now unavailable, and its Montreal listing metadata conflicted with Calgary in the body. No open intake, current duration or present-day requirements are promised; check the current employer posting.",
        "kind": "interpreted",
        "sourceIds": [
          "page-cpkc-oct17-source-32"
        ]
      },
      {
        "kindLabel": "Certificate",
        "label": "SAIT — Railway Conductor",
        "note": "Study railway operating procedures and train handling responsibilities. Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
        "kind": "interpreted",
        "sourceIds": [
          "page-cpkc-oct17-source-33"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Software Development",
        "note": "Learn to design, test and build software across front-end and back-end systems. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-cpkc-oct17-source-34"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "CPKC operates a rail network across Canada, the United States and Mexico. Its 2025 annual report identifies Calgary as the location of its main operations centre and primary Canadian dispatch facility. Rail traffic controllers coordinate crews and day-to-day locomotive operations. The classroom model below simplifies the scheduling problem; it does not describe railway operating rules.",
        "status": "Source-backed company/project account",
        "kind": "stated",
        "sourceIds": [
          "page-cpkc-oct17-source-29",
          "page-cpkc-oct17-source-30",
          "page-cpkc-oct17-source-31",
          "page-cpkc-oct17-source-32"
        ]
      },
      {
        "type": "local connection",
        "claim": "Calgary operations centre and dispatch function are documented in the 2025 annual report.",
        "status": "Source-backed local work",
        "kind": "stated",
        "sourceIds": [
          "page-cpkc-oct17-source-29",
          "page-cpkc-oct17-source-30",
          "page-cpkc-oct17-source-31",
          "page-cpkc-oct17-source-32"
        ]
      },
      {
        "type": "course fit",
        "claim": "Physics 20 A1 supports interpreting position-time graphs. Compare fictional movements; timetable decisions and railway rules are extensions beyond the classroom model.",
        "status": "Editorial application of verified curriculum topics",
        "kind": "interpreted",
        "sourceIds": [
          "page-cpkc-oct17-source-14"
        ]
      },
      {
        "type": "limits",
        "claim": "Controller entry is represented by a historical employer-training example, not a current vacancy or guaranteed six-month intake. SAIT Railway Conductor leads toward conductor work, not controller qualification. Older agreement terms are not treated as current.",
        "status": "Scope of this example",
        "kind": "interpreted",
        "sourceIds": [
          "page-cpkc-oct17-source-29",
          "page-cpkc-oct17-source-30",
          "page-cpkc-oct17-source-31",
          "page-cpkc-oct17-source-32"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-cpkc-oct17-source-14",
        "label": "Alberta Physics 20–30 performance standards: A1, B1 and C1",
        "url": "https://www.alberta.ca/system/files/custom_downloaded_images/edc-physics20-30-performance-standards.pdf"
      },
      {
        "id": "page-cpkc-oct17-source-29",
        "label": "CPKC — company/project evidence 1",
        "url": "https://s21.q4cdn.com/736796105/files/doc_financials/2025/ar/v2/CPKC-Annual-Report-2025-Final-Web.pdf"
      },
      {
        "id": "page-cpkc-oct17-source-30",
        "label": "CPKC — company/project evidence 2",
        "url": "https://www.cpkcr.com/content/dam/cpkc/documents/english/labour-agreements/TCRC%20RTC%20and%20CP%20%282021-2023%29.pdf"
      },
      {
        "id": "page-cpkc-oct17-source-31",
        "label": "CPKC — company/project evidence 3",
        "url": "https://investor.cpkcr.com/news/press-release-details/2025/CPKC-receives-arbitration-decision-establishing-new-TCRC-collective-agreements/default.aspx"
      },
      {
        "id": "page-cpkc-oct17-source-32",
        "label": "CPKC — company/project evidence 4",
        "url": "https://careers.cpr.ca/job/Montreal-Rail-Traffic-Controller-QC-H4W-2J9/595098117/"
      },
      {
        "id": "page-cpkc-oct17-source-33",
        "label": "SAIT — Railway Conductor",
        "url": "https://www.sait.ca/programs-and-courses/certificates/railway-conductor"
      },
      {
        "id": "page-cpkc-oct17-source-34",
        "label": "SAIT — Software Development",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/software-development"
      }
    ],
    "checkedOn": "2026-10-17",
    "detailsId": "cpkc-details"
  },
  {
    "slug": "watersmart",
    "org": "WaterSMART — a Hazen company",
    "discipline": "Biology",
    "question": "How do you plan water supplies for a city that keeps changing?",
    "work": "WaterSMART, now presented as a Hazen company, works on water management with engineers, environmental scientists and policy specialists. The City of Calgary identifies WaterSMART as a partner in its integrated water-security roadmap and water-reuse assessment. The project supports long-term choices about water supply, demand and reuse; planning evidence does not mean every option has been built.",
    "localShort": "Calgary-based work is established through the City’s named roadmap partnership and the company team page.",
    "calgary": "Calgary-based work is established through the City’s named roadmap partnership and the company team page.",
    "site": "Calgary-based work is established through the City’s named roadmap partnership and the company team page.",
    "localSourceIds": [
      "page-watersmart-oct17-source-35",
      "page-watersmart-oct17-source-36",
      "page-watersmart-oct17-source-37"
    ],
    "explain": "Use fictional annual demand of 100 units. Compare a 10-unit demand reduction under supplies of 120, 100 and 80 units. Identify the remaining deficit and one assumption the arithmetic leaves out.",
    "prompt": "Would you choose the option that is best in one forecast or useful across several forecasts?",
    "conversation": "Would you choose the option that is best in one forecast or useful across several forecasts?",
    "mindset": "Units are fictional. Real planning includes seasonality, ecosystems, rights, infrastructure and water quality; subtraction alone is not a water-security assessment.",
    "courses": [
      {
        "course": "Biology 20",
        "topic": "Water use, conservation and ecosystems"
      }
    ],
    "courseFitSourceIds": [
      "page-watersmart-oct17-source-6"
    ],
    "roles": [
      {
        "title": "Water-resource planning",
        "note": "Compare water availability, demand and possible responses over time.",
        "evidence": "City roadmap and company team page support water-planning work.",
        "kind": "interpreted",
        "sourceIds": [
          "page-watersmart-oct17-source-35",
          "page-watersmart-oct17-source-36",
          "page-watersmart-oct17-source-37"
        ]
      },
      {
        "title": "Environmental field assessment",
        "note": "Collect and interpret evidence about a place before recommending an action.",
        "evidence": "Company lists environmental scientists; no specific vacancy or roadmap assignment is asserted.",
        "kind": "interpreted",
        "sourceIds": [
          "page-watersmart-oct17-source-35",
          "page-watersmart-oct17-source-36",
          "page-watersmart-oct17-source-37"
        ]
      },
      {
        "title": "Planning communication and engagement",
        "note": "Help people with different needs understand and contribute to a planning process.",
        "evidence": "Company lists facilitators, communicators and policy advisers; tasks are editorial.",
        "kind": "interpreted",
        "sourceIds": [
          "page-watersmart-oct17-source-35",
          "page-watersmart-oct17-source-36",
          "page-watersmart-oct17-source-37"
        ]
      }
    ],
    "rolesNote": "Work areas and related occupations, not a staff roster or a list of current vacancies. Each profile explains the evidence for its company connection.",
    "pathways": [
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Integrated Water Management",
        "note": "Study water systems, monitoring and management. Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
        "kind": "interpreted",
        "sourceIds": [
          "page-watersmart-oct17-source-38"
        ]
      },
      {
        "kindLabel": "Bachelor’s degree",
        "label": "University of Calgary — Civil Engineering",
        "note": "Study the design and operation of structures, transportation and water infrastructure. Check current admissions and program requirements. A degree is not automatic professional licensure.",
        "kind": "interpreted",
        "sourceIds": [
          "page-watersmart-oct17-source-15"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Environmental Technology",
        "note": "Study environmental monitoring, assessment and field methods. Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
        "kind": "interpreted",
        "sourceIds": [
          "page-watersmart-oct17-source-9"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "WaterSMART, now presented as a Hazen company, works on water management with engineers, environmental scientists and policy specialists. The City of Calgary identifies WaterSMART as a partner in its integrated water-security roadmap and water-reuse assessment. The project supports long-term choices about water supply, demand and reuse; planning evidence does not mean every option has been built.",
        "status": "Source-backed company/project account",
        "kind": "stated",
        "sourceIds": [
          "page-watersmart-oct17-source-35",
          "page-watersmart-oct17-source-36",
          "page-watersmart-oct17-source-37"
        ]
      },
      {
        "type": "local connection",
        "claim": "Calgary-based work is established through the City’s named roadmap partnership and the company team page.",
        "status": "Source-backed local work",
        "kind": "stated",
        "sourceIds": [
          "page-watersmart-oct17-source-35",
          "page-watersmart-oct17-source-36",
          "page-watersmart-oct17-source-37"
        ]
      },
      {
        "type": "course fit",
        "claim": "Biology 20 A2.1sts explicitly connects societal water use to ecosystem water quality, quantity, purification and conservation. Compare scenarios rather than treating a forecast as certain.",
        "status": "Editorial application of verified curriculum topics",
        "kind": "interpreted",
        "sourceIds": [
          "page-watersmart-oct17-source-6"
        ]
      },
      {
        "type": "limits",
        "claim": "No claim that reuse water is automatically potable or that roadmap recommendations are already constructed.",
        "status": "Scope of this example",
        "kind": "interpreted",
        "sourceIds": [
          "page-watersmart-oct17-source-35",
          "page-watersmart-oct17-source-36",
          "page-watersmart-oct17-source-37"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-watersmart-oct17-source-6",
        "label": "Alberta Biology 20–30 program: water use and ecosystems",
        "url": "https://education.alberta.ca/media/159727/bio203007.pdf"
      },
      {
        "id": "page-watersmart-oct17-source-9",
        "label": "SAIT — Environmental Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/environmental-technology"
      },
      {
        "id": "page-watersmart-oct17-source-15",
        "label": "University of Calgary — Civil Engineering",
        "url": "https://schulich.ucalgary.ca/future-students/undergraduate/programs/bsc-civil-engineering"
      },
      {
        "id": "page-watersmart-oct17-source-35",
        "label": "WaterSMART — a Hazen company — company/project evidence 1",
        "url": "https://newsroom.calgary.ca/ensuring-a-reliable-water-supply-into-the-next-century-how-calgarys-water-security-roadmap-will-get-us-there/"
      },
      {
        "id": "page-watersmart-oct17-source-36",
        "label": "WaterSMART — a Hazen company — company/project evidence 2",
        "url": "https://watersmartsolutions.ca/stormwater-is-flowing-through-the-first-stages-of-the-newly-constructed-csmi-stormwater-system/"
      },
      {
        "id": "page-watersmart-oct17-source-37",
        "label": "WaterSMART — a Hazen company — company/project evidence 3",
        "url": "https://watersmartsolutions.ca/our-team/"
      },
      {
        "id": "page-watersmart-oct17-source-38",
        "label": "SAIT — Integrated Water Management",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/integrated-water-management"
      }
    ],
    "checkedOn": "2026-10-17",
    "detailsId": "watersmart-details"
  },
  {
    "slug": "integrated-sustainability",
    "org": "Integrated Sustainability",
    "discipline": "Chemistry",
    "question": "Why does a water-treatment system need more than a successful laboratory test?",
    "work": "Integrated Sustainability is a Calgary-based water-infrastructure business working across design, equipment delivery and operations. Its public project material describes biological treatment of mine water and operating work on a moving bed biofilm reactor. Those are company project claims, not evidence that a mine or treatment plant is located in Calgary. The teaching focus is the connection between a treatment process and the system around it.",
    "localShort": "Calgary engineering business; client treatment sites may be elsewhere.",
    "calgary": "Calgary engineering business; client treatment sites may be elsewhere.",
    "site": "Calgary engineering business; client treatment sites may be elsewhere.",
    "localSourceIds": [
      "page-integrated-sustainability-oct17-source-39",
      "page-integrated-sustainability-oct17-source-40",
      "page-integrated-sustainability-oct17-source-41",
      "page-integrated-sustainability-oct17-source-42"
    ],
    "explain": "Compare two fictional plants with equal average output quality: one has stable results and one has large swings. Decide what additional operating records would help explain the difference.",
    "prompt": "What could change between a successful small trial and a full operating plant?",
    "conversation": "What could change between a successful small trial and a full operating plant?",
    "mindset": "Do not infer compliance from an average or equate all biological treatment processes. No claimed removal percentage is used.",
    "courses": [
      {
        "course": "Chemistry 20",
        "topic": "Solutions, concentration and treatment evidence"
      }
    ],
    "courseFitSourceIds": [
      "page-integrated-sustainability-oct17-source-43"
    ],
    "roles": [
      {
        "title": "Process engineering",
        "note": "Turn a useful transformation into a workable sequence of equipment and operating steps. Process engineers consider what enters, what leaves and what conditions the system must maintain.",
        "evidence": "Company treatment-design services support process engineering.",
        "kind": "interpreted",
        "sourceIds": [
          "page-integrated-sustainability-oct17-source-39",
          "page-integrated-sustainability-oct17-source-40",
          "page-integrated-sustainability-oct17-source-41",
          "page-integrated-sustainability-oct17-source-42"
        ]
      },
      {
        "title": "Water-treatment operations",
        "note": "Keep a treatment process working within its specified conditions and record how it performs.",
        "evidence": "Company project material describes treatment operations; not necessarily a Calgary plant or vacancy.",
        "kind": "interpreted",
        "sourceIds": [
          "page-integrated-sustainability-oct17-source-39",
          "page-integrated-sustainability-oct17-source-40",
          "page-integrated-sustainability-oct17-source-41",
          "page-integrated-sustainability-oct17-source-42"
        ]
      },
      {
        "title": "Instrumentation and controls",
        "note": "Keep a process measurable and responsive. Controls work connects sensors, decisions and actuators so the system can respond when conditions change.",
        "evidence": "Integrated systems require controls; this is an interpreted work connection, not a named employer posting.",
        "kind": "interpreted",
        "sourceIds": [
          "page-integrated-sustainability-oct17-source-39",
          "page-integrated-sustainability-oct17-source-40",
          "page-integrated-sustainability-oct17-source-41",
          "page-integrated-sustainability-oct17-source-42"
        ]
      }
    ],
    "rolesNote": "Work areas and related occupations, not a staff roster or a list of current vacancies. Each profile explains the evidence for its company connection.",
    "pathways": [
      {
        "kindLabel": "Bachelor’s degree",
        "label": "University of Calgary — Chemical Engineering",
        "note": "Study how to transform raw materials and design production processes. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-integrated-sustainability-oct17-source-44"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Integrated Water Management",
        "note": "Study water systems, monitoring and management. Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
        "kind": "interpreted",
        "sourceIds": [
          "page-integrated-sustainability-oct17-source-38"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Instrumentation Engineering Technology",
        "note": "Work with measurement devices, calibration and automated process controls. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-integrated-sustainability-oct17-source-21"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "Integrated Sustainability is a Calgary-based water-infrastructure business working across design, equipment delivery and operations. Its public project material describes biological treatment of mine water and operating work on a moving bed biofilm reactor. Those are company project claims, not evidence that a mine or treatment plant is located in Calgary. The teaching focus is the connection between a treatment process and the system around it.",
        "status": "Source-backed company/project account",
        "kind": "stated",
        "sourceIds": [
          "page-integrated-sustainability-oct17-source-39",
          "page-integrated-sustainability-oct17-source-40",
          "page-integrated-sustainability-oct17-source-41",
          "page-integrated-sustainability-oct17-source-42"
        ]
      },
      {
        "type": "local connection",
        "claim": "Calgary engineering business; client treatment sites may be elsewhere.",
        "status": "Source-backed local work",
        "kind": "stated",
        "sourceIds": [
          "page-integrated-sustainability-oct17-source-39",
          "page-integrated-sustainability-oct17-source-40",
          "page-integrated-sustainability-oct17-source-41",
          "page-integrated-sustainability-oct17-source-42"
        ]
      },
      {
        "type": "course fit",
        "claim": "Chemistry 20 Unit C addresses aqueous solutions and concentration. Compare feed and output concentrations with flow and sample timing; process controls are an engineering extension.",
        "status": "Editorial application of verified curriculum topics",
        "kind": "interpreted",
        "sourceIds": [
          "page-integrated-sustainability-oct17-source-43"
        ]
      },
      {
        "type": "limits",
        "claim": "The draft narrows the original generic treatment question to operating reliability. Omit “first”, efficiency and removal-rate marketing claims.",
        "status": "Scope of this example",
        "kind": "interpreted",
        "sourceIds": [
          "page-integrated-sustainability-oct17-source-39",
          "page-integrated-sustainability-oct17-source-40",
          "page-integrated-sustainability-oct17-source-41",
          "page-integrated-sustainability-oct17-source-42"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-integrated-sustainability-oct17-source-21",
        "label": "SAIT — Instrumentation Engineering Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/instrumentation-engineering-technology"
      },
      {
        "id": "page-integrated-sustainability-oct17-source-38",
        "label": "SAIT — Integrated Water Management",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/integrated-water-management"
      },
      {
        "id": "page-integrated-sustainability-oct17-source-39",
        "label": "Integrated Sustainability — company/project evidence 1",
        "url": "https://www.integratedsustainability.com/about-us/"
      },
      {
        "id": "page-integrated-sustainability-oct17-source-40",
        "label": "Integrated Sustainability — company/project evidence 2",
        "url": "https://www.integratedsustainability.com/services/"
      },
      {
        "id": "page-integrated-sustainability-oct17-source-41",
        "label": "Integrated Sustainability — company/project evidence 3",
        "url": "https://www.integratedsustainability.com/services/water-treatment/"
      },
      {
        "id": "page-integrated-sustainability-oct17-source-42",
        "label": "Integrated Sustainability — company/project evidence 4",
        "url": "https://www.integratedsustainability.com/"
      },
      {
        "id": "page-integrated-sustainability-oct17-source-43",
        "label": "Alberta Chemistry 20–30 program: solutions and concentration",
        "url": "https://education.alberta.ca/media/159730/chem2030_07.pdf"
      },
      {
        "id": "page-integrated-sustainability-oct17-source-44",
        "label": "University of Calgary — Chemical Engineering",
        "url": "https://schulich.ucalgary.ca/future-students/undergraduate/programs/bsc-chemical-engineering"
      }
    ],
    "checkedOn": "2026-10-17",
    "detailsId": "integrated-sustainability-details"
  },
  {
    "slug": "trace-associates",
    "org": "Trace Associates",
    "discipline": "Chemistry",
    "question": "What evidence tells you which contaminated soil needs treatment?",
    "work": "Trace Associates has its headquarters in Calgary and provides environmental science and engineering services. Its remediation practice describes using site conditions and risk to guide decisions. Conference material by its Calgary division manager documents work involving soil and groundwater investigations. This supports a story about environmental evidence, without attributing a fictional contaminated site to a real Calgary property.",
    "localShort": "Calgary headquarters and a Calgary team’s environmental assessment work are documented; the teaching site is fictional.",
    "calgary": "Calgary headquarters and a Calgary team’s environmental assessment work are documented; the teaching site is fictional.",
    "site": "Calgary headquarters and a Calgary team’s environmental assessment work are documented; the teaching site is fictional.",
    "localSourceIds": [
      "page-trace-associates-oct17-source-45",
      "page-trace-associates-oct17-source-46",
      "page-trace-associates-oct17-source-47",
      "page-trace-associates-oct17-source-48"
    ],
    "explain": "Place six sampling points on a fictional site map containing a former storage area and a drainage ditch. Explain why each point helps test a hypothesis and identify one unsampled uncertainty.",
    "prompt": "How could a sampling plan miss the part of a site that matters most?",
    "conversation": "How could a sampling plan miss the part of a site that matters most?",
    "mindset": "This is a reasoning activity, not an environmental site-assessment protocol. Do not supply a universal safe concentration or ask learners to handle unknown soil.",
    "courses": [
      {
        "course": "Chemistry 20",
        "topic": "Concentration and representative sampling"
      }
    ],
    "courseFitSourceIds": [
      "page-trace-associates-oct17-source-43"
    ],
    "roles": [
      {
        "title": "Environmental field assessment",
        "note": "Collect and interpret evidence about a place before recommending an action.",
        "evidence": "Calgary office and conference author evidence support site investigations.",
        "kind": "interpreted",
        "sourceIds": [
          "page-trace-associates-oct17-source-45",
          "page-trace-associates-oct17-source-46",
          "page-trace-associates-oct17-source-47",
          "page-trace-associates-oct17-source-48"
        ]
      },
      {
        "title": "Laboratory analysis",
        "note": "Make measurements that other people can trust. A laboratory worker prepares samples, uses a method consistently and records enough detail for someone else to interpret the result.",
        "evidence": "Assessment work uses laboratory results; this does not establish that Trace employs an in-house laboratory team.",
        "kind": "interpreted",
        "sourceIds": [
          "page-trace-associates-oct17-source-45",
          "page-trace-associates-oct17-source-46",
          "page-trace-associates-oct17-source-47",
          "page-trace-associates-oct17-source-48"
        ]
      },
      {
        "title": "Water-resource planning",
        "note": "Compare water availability, demand and possible responses over time.",
        "evidence": "Company water and risk services support the connection; this is not a specific job posting.",
        "kind": "interpreted",
        "sourceIds": [
          "page-trace-associates-oct17-source-45",
          "page-trace-associates-oct17-source-46",
          "page-trace-associates-oct17-source-47",
          "page-trace-associates-oct17-source-48"
        ]
      }
    ],
    "rolesNote": "Work areas and related occupations, not a staff roster or a list of current vacancies. Each profile explains the evidence for its company connection.",
    "pathways": [
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Environmental Technology",
        "note": "Study environmental monitoring, assessment and field methods. Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
        "kind": "interpreted",
        "sourceIds": [
          "page-trace-associates-oct17-source-9"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Chemical Laboratory Technology",
        "note": "Practice chemical analysis, sample preparation and analytical instrumentation. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-trace-associates-oct17-source-22"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Integrated Water Management",
        "note": "Study water systems, monitoring and management. Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
        "kind": "interpreted",
        "sourceIds": [
          "page-trace-associates-oct17-source-38"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "Trace Associates has its headquarters in Calgary and provides environmental science and engineering services. Its remediation practice describes using site conditions and risk to guide decisions. Conference material by its Calgary division manager documents work involving soil and groundwater investigations. This supports a story about environmental evidence, without attributing a fictional contaminated site to a real Calgary property.",
        "status": "Source-backed company/project account",
        "kind": "stated",
        "sourceIds": [
          "page-trace-associates-oct17-source-45",
          "page-trace-associates-oct17-source-46",
          "page-trace-associates-oct17-source-47",
          "page-trace-associates-oct17-source-48"
        ]
      },
      {
        "type": "local connection",
        "claim": "Calgary headquarters and a Calgary team’s environmental assessment work are documented; the teaching site is fictional.",
        "status": "Source-backed local work",
        "kind": "stated",
        "sourceIds": [
          "page-trace-associates-oct17-source-45",
          "page-trace-associates-oct17-source-46",
          "page-trace-associates-oct17-source-47",
          "page-trace-associates-oct17-source-48"
        ]
      },
      {
        "type": "course fit",
        "claim": "Chemistry 20 Unit C provides concentration concepts. Compare results with units and a sampling plan; regulatory decisions and toxicology are not classroom safety rules.",
        "status": "Editorial application of verified curriculum topics",
        "kind": "interpreted",
        "sourceIds": [
          "page-trace-associates-oct17-source-43"
        ]
      },
      {
        "type": "limits",
        "claim": "Do not label an actual neighbourhood contaminated. Specific test methods and regulatory decisions remain outside the classroom model.",
        "status": "Scope of this example",
        "kind": "interpreted",
        "sourceIds": [
          "page-trace-associates-oct17-source-45",
          "page-trace-associates-oct17-source-46",
          "page-trace-associates-oct17-source-47",
          "page-trace-associates-oct17-source-48"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-trace-associates-oct17-source-9",
        "label": "SAIT — Environmental Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/environmental-technology"
      },
      {
        "id": "page-trace-associates-oct17-source-22",
        "label": "SAIT — Chemical Laboratory Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/chemical-laboratory-technology"
      },
      {
        "id": "page-trace-associates-oct17-source-38",
        "label": "SAIT — Integrated Water Management",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/integrated-water-management"
      },
      {
        "id": "page-trace-associates-oct17-source-43",
        "label": "Alberta Chemistry 20–30 program: solutions and concentration",
        "url": "https://education.alberta.ca/media/159730/chem2030_07.pdf"
      },
      {
        "id": "page-trace-associates-oct17-source-45",
        "label": "Trace Associates — company/project evidence 1",
        "url": "https://traceassociates.ca/contact-us/calgary/"
      },
      {
        "id": "page-trace-associates-oct17-source-46",
        "label": "Trace Associates — company/project evidence 2",
        "url": "https://traceassociates.ca/practice-area/remediation-and-risk/"
      },
      {
        "id": "page-trace-associates-oct17-source-47",
        "label": "Trace Associates — company/project evidence 3",
        "url": "https://esaa.org/wp-content/uploads/2023/05/RTE2023Abstracts.pdf"
      },
      {
        "id": "page-trace-associates-oct17-source-48",
        "label": "Trace Associates — company/project evidence 4",
        "url": "https://traceassociates.ca/careers/"
      }
    ],
    "checkedOn": "2026-10-17",
    "detailsId": "trace-associates-details"
  },
  {
    "slug": "rjc-engineers",
    "org": "RJC Engineers",
    "discipline": "Physics",
    "question": "How can a building keep heat in while managing moisture?",
    "work": "RJC provides structural engineering and building-science services in Calgary. Its Calgary building-science leadership describes assessing and rehabilitating building envelopes and roofs. A building envelope separates indoors from outdoors while managing heat, air and water movement. This example uses a generic wall rather than claiming to reproduce an RJC design.",
    "localShort": "RJC’s Calgary building-science and restoration team is explicitly identified.",
    "calgary": "RJC’s Calgary building-science and restoration team is explicitly identified.",
    "site": "RJC’s Calgary building-science and restoration team is explicitly identified.",
    "localSourceIds": [
      "page-rjc-engineers-oct17-source-49",
      "page-rjc-engineers-oct17-source-50"
    ],
    "explain": "Annotate a fictional wall section with separate arrows for heat flow, air leakage and rainwater. Identify one joint to inspect and one measurement that would distinguish competing explanations.",
    "prompt": "Why might adding more insulation fail to fix a water leak?",
    "conversation": "Why might adding more insulation fail to fix a water leak?",
    "mindset": "The section is conceptual, not construction advice. Correct assemblies depend on climate, materials, codes and professional design.",
    "courses": [
      {
        "course": "Science 10",
        "topic": "Heat transfer in technological systems"
      }
    ],
    "courseFitSourceIds": [
      "page-rjc-engineers-oct17-source-51"
    ],
    "roles": [
      {
        "title": "Building-science investigation",
        "note": "Investigate how a building enclosure manages heat, air and water.",
        "evidence": "RJC’s Calgary leadership profile explicitly describes building-envelope and roof investigation.",
        "kind": "interpreted",
        "sourceIds": [
          "page-rjc-engineers-oct17-source-49",
          "page-rjc-engineers-oct17-source-50"
        ]
      },
      {
        "title": "Civil and construction technology",
        "note": "Turn project requirements into usable drawings, quantities and checks.",
        "evidence": "Technical drawing and site support are general related work; not a verified RJC vacancy.",
        "kind": "interpreted",
        "sourceIds": [
          "page-rjc-engineers-oct17-source-49",
          "page-rjc-engineers-oct17-source-50"
        ]
      },
      {
        "title": "Quality and traceability",
        "note": "Make it possible to explain how a result or product was produced. Quality work checks records, methods and acceptance criteria so variation can be investigated rather than hidden.",
        "evidence": "Quality verification is an editorial connection to rehabilitation work, not a named RJC position.",
        "kind": "interpreted",
        "sourceIds": [
          "page-rjc-engineers-oct17-source-49",
          "page-rjc-engineers-oct17-source-50"
        ]
      }
    ],
    "rolesNote": "Work areas and related occupations, not a staff roster or a list of current vacancies. Each profile explains the evidence for its company connection.",
    "pathways": [
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Architectural Technologies",
        "note": "Study building design, technical drawings and construction systems. Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
        "kind": "interpreted",
        "sourceIds": [
          "page-rjc-engineers-oct17-source-17"
        ]
      },
      {
        "kindLabel": "Bachelor’s degree",
        "label": "University of Calgary — Civil Engineering",
        "note": "Study the design and operation of structures, transportation and water infrastructure. Check current admissions and program requirements. A degree is not automatic professional licensure.",
        "kind": "interpreted",
        "sourceIds": [
          "page-rjc-engineers-oct17-source-15"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Civil Engineering Technology, Municipal Major",
        "note": "Study municipal infrastructure, design and drafting. Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
        "kind": "interpreted",
        "sourceIds": [
          "page-rjc-engineers-oct17-source-16"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "RJC provides structural engineering and building-science services in Calgary. Its Calgary building-science leadership describes assessing and rehabilitating building envelopes and roofs. A building envelope separates indoors from outdoors while managing heat, air and water movement. This example uses a generic wall rather than claiming to reproduce an RJC design.",
        "status": "Source-backed company/project account",
        "kind": "stated",
        "sourceIds": [
          "page-rjc-engineers-oct17-source-49",
          "page-rjc-engineers-oct17-source-50"
        ]
      },
      {
        "type": "local connection",
        "claim": "RJC’s Calgary building-science and restoration team is explicitly identified.",
        "status": "Source-backed local work",
        "kind": "stated",
        "sourceIds": [
          "page-rjc-engineers-oct17-source-49",
          "page-rjc-engineers-oct17-source-50"
        ]
      },
      {
        "type": "course fit",
        "claim": "Science 10 Unit B connects heat transfer and technological systems. Compare insulation and joints; moisture transport is a building-science extension, not a universal wall prescription.",
        "status": "Editorial application of verified curriculum topics",
        "kind": "interpreted",
        "sourceIds": [
          "page-rjc-engineers-oct17-source-51"
        ]
      },
      {
        "type": "limits",
        "claim": "The question is refined from “keeping moisture out” to “managing moisture”; no exact RJC project assembly or blanket energy-saving claim.",
        "status": "Scope of this example",
        "kind": "interpreted",
        "sourceIds": [
          "page-rjc-engineers-oct17-source-49",
          "page-rjc-engineers-oct17-source-50"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-rjc-engineers-oct17-source-15",
        "label": "University of Calgary — Civil Engineering",
        "url": "https://schulich.ucalgary.ca/future-students/undergraduate/programs/bsc-civil-engineering"
      },
      {
        "id": "page-rjc-engineers-oct17-source-16",
        "label": "SAIT — Civil Engineering Technology, Municipal Major",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/civil-engineering-technology-municipal"
      },
      {
        "id": "page-rjc-engineers-oct17-source-17",
        "label": "SAIT — Architectural Technologies",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/architectural-technologies"
      },
      {
        "id": "page-rjc-engineers-oct17-source-49",
        "label": "RJC Engineers — company/project evidence 1",
        "url": "https://www.rjc.ca/location-details/calgary.html"
      },
      {
        "id": "page-rjc-engineers-oct17-source-50",
        "label": "RJC Engineers — company/project evidence 2",
        "url": "https://www.rjc.ca/people/our-leadership/details/ryan-coles.html"
      },
      {
        "id": "page-rjc-engineers-oct17-source-51",
        "label": "Alberta Science 10 program: inquiry skills and technological systems",
        "url": "https://education.alberta.ca/media/159715/science10.pdf"
      }
    ],
    "checkedOn": "2026-10-17",
    "detailsId": "rjc-engineers-details"
  },
  {
    "slug": "calgary-italian-bakery",
    "org": "Calgary Italian Bakery",
    "discipline": "Chemistry",
    "question": "Where does a bakery lose food before it reaches the customer?",
    "work": "Calgary Italian Bakery produces bread, buns and other baked goods. A published assessment conducted with Enviro-Stewards and project partners examined food loss and resource use at the bakery. It identified opportunities involving dough transfer, product forming and damage during later handling. These were assessed opportunities, not proof that every proposed improvement was implemented or that the historical figures describe today’s production.",
    "localShort": "Calgary bakery; a documented historical facility assessment supplies the specific story.",
    "calgary": "Calgary bakery; a documented historical facility assessment supplies the specific story.",
    "site": "Calgary bakery; a documented historical facility assessment supplies the specific story.",
    "localSourceIds": [
      "page-calgary-italian-bakery-oct17-source-52",
      "page-calgary-italian-bakery-oct17-source-53",
      "page-calgary-italian-bakery-oct17-source-54",
      "page-calgary-italian-bakery-oct17-source-55"
    ],
    "explain": "For a fictional 100 kg batch, 6 kg is lost at transfer, 4 kg at shaping and 2 kg at packing. A change cuts transfer loss to 3 kg but adds 2 kg at shaping. Calculate the net change and propose one quality check.",
    "prompt": "Why is a smaller waste bin not enough evidence that a process improved?",
    "conversation": "Why is a smaller waste bin not enough evidence that a process improved?",
    "mindset": "Fictional totals: loss falls from 12 to 11 kg, a 1 kg improvement. This simplified accounting ignores baking moisture loss and is not a real bakery mass balance.",
    "courses": [
      {
        "course": "Science 10",
        "topic": "Scientific inquiry: measuring losses and comparing changes"
      }
    ],
    "courseFitSourceIds": [
      "page-calgary-italian-bakery-oct17-source-51"
    ],
    "roles": [
      {
        "title": "Commercial baking",
        "note": "Produce baked goods through a controlled sequence of preparation, processing and handling.",
        "evidence": "Employer commercial-baker description explicitly mentions production equipment, recipes and schedules.",
        "kind": "interpreted",
        "sourceIds": [
          "page-calgary-italian-bakery-oct17-source-52",
          "page-calgary-italian-bakery-oct17-source-53",
          "page-calgary-italian-bakery-oct17-source-54",
          "page-calgary-italian-bakery-oct17-source-55"
        ]
      },
      {
        "title": "Quality and traceability",
        "note": "Make it possible to explain how a result or product was produced. Quality work checks records, methods and acceptance criteria so variation can be investigated rather than hidden.",
        "evidence": "Employer emphasizes consistent safe products; the detailed profile is editorial.",
        "kind": "interpreted",
        "sourceIds": [
          "page-calgary-italian-bakery-oct17-source-52",
          "page-calgary-italian-bakery-oct17-source-53",
          "page-calgary-italian-bakery-oct17-source-54",
          "page-calgary-italian-bakery-oct17-source-55"
        ]
      },
      {
        "title": "Process engineering",
        "note": "Turn a useful transformation into a workable sequence of equipment and operating steps. Process engineers consider what enters, what leaves and what conditions the system must maintain.",
        "evidence": "Published facility assessment supports process-improvement tasks; external partners contributed and are not assumed to be bakery employees.",
        "kind": "interpreted",
        "sourceIds": [
          "page-calgary-italian-bakery-oct17-source-52",
          "page-calgary-italian-bakery-oct17-source-53",
          "page-calgary-italian-bakery-oct17-source-54",
          "page-calgary-italian-bakery-oct17-source-55"
        ]
      }
    ],
    "rolesNote": "Work areas and related occupations, not a staff roster or a list of current vacancies. Each profile explains the evidence for its company connection.",
    "pathways": [
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Baking and Pastry Arts",
        "note": "Practise bakery and pastry production and product quality. Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
        "kind": "interpreted",
        "sourceIds": [
          "page-calgary-italian-bakery-oct17-source-56"
        ]
      },
      {
        "kindLabel": "Apprenticeship",
        "label": "Alberta Baker apprenticeship education",
        "note": "Combine structured trade education with workplace learning in baking. Use Tradesecrets to verify current entry, sponsorship and work-hour requirements. No specific Calgary employer placement is promised.",
        "kind": "interpreted",
        "sourceIds": [
          "page-calgary-italian-bakery-oct17-source-57"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Chemical Laboratory Technology",
        "note": "Practice chemical analysis, sample preparation and analytical instrumentation. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-calgary-italian-bakery-oct17-source-22"
        ]
      },
      {
        "kindLabel": "Bachelor’s degree",
        "label": "University of Calgary — Chemical Engineering",
        "note": "Study how to transform raw materials and design production processes. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-calgary-italian-bakery-oct17-source-44"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "Calgary Italian Bakery produces bread, buns and other baked goods. A published assessment conducted with Enviro-Stewards and project partners examined food loss and resource use at the bakery. It identified opportunities involving dough transfer, product forming and damage during later handling. These were assessed opportunities, not proof that every proposed improvement was implemented or that the historical figures describe today’s production.",
        "status": "Source-backed company/project account",
        "kind": "stated",
        "sourceIds": [
          "page-calgary-italian-bakery-oct17-source-52",
          "page-calgary-italian-bakery-oct17-source-53",
          "page-calgary-italian-bakery-oct17-source-54",
          "page-calgary-italian-bakery-oct17-source-55"
        ]
      },
      {
        "type": "local connection",
        "claim": "Calgary bakery; a documented historical facility assessment supplies the specific story.",
        "status": "Source-backed local work",
        "kind": "stated",
        "sourceIds": [
          "page-calgary-italian-bakery-oct17-source-52",
          "page-calgary-italian-bakery-oct17-source-53",
          "page-calgary-italian-bakery-oct17-source-54",
          "page-calgary-italian-bakery-oct17-source-55"
        ]
      },
      {
        "type": "course fit",
        "claim": "Science 10 inquiry skills (program p. 8) support operational definitions, measurements and evaluating data. This is a cross-unit investigation, not a chemical-reaction or stoichiometry outcome.",
        "status": "Editorial application of verified curriculum topics",
        "kind": "interpreted",
        "sourceIds": [
          "page-calgary-italian-bakery-oct17-source-51"
        ]
      },
      {
        "type": "limits",
        "claim": "Revised question distinguishes this from Cinnaroll. No current waste totals or achieved savings are claimed; source publication date remains uncertain.",
        "status": "Scope of this example",
        "kind": "interpreted",
        "sourceIds": [
          "page-calgary-italian-bakery-oct17-source-52",
          "page-calgary-italian-bakery-oct17-source-53",
          "page-calgary-italian-bakery-oct17-source-54",
          "page-calgary-italian-bakery-oct17-source-55"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-calgary-italian-bakery-oct17-source-22",
        "label": "SAIT — Chemical Laboratory Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/chemical-laboratory-technology"
      },
      {
        "id": "page-calgary-italian-bakery-oct17-source-44",
        "label": "University of Calgary — Chemical Engineering",
        "url": "https://schulich.ucalgary.ca/future-students/undergraduate/programs/bsc-chemical-engineering"
      },
      {
        "id": "page-calgary-italian-bakery-oct17-source-51",
        "label": "Alberta Science 10 program: inquiry skills and technological systems",
        "url": "https://education.alberta.ca/media/159715/science10.pdf"
      },
      {
        "id": "page-calgary-italian-bakery-oct17-source-52",
        "label": "Calgary Italian Bakery — company/project evidence 1",
        "url": "https://www.cibl.com/"
      },
      {
        "id": "page-calgary-italian-bakery-oct17-source-53",
        "label": "Calgary Italian Bakery — company/project evidence 2",
        "url": "https://www.cibl.com/faq"
      },
      {
        "id": "page-calgary-italian-bakery-oct17-source-54",
        "label": "Calgary Italian Bakery — company/project evidence 3",
        "url": "https://www.cibl.com/employment"
      },
      {
        "id": "page-calgary-italian-bakery-oct17-source-55",
        "label": "Calgary Italian Bakery — company/project evidence 4",
        "url": "https://enviro-stewards.com/wp-content/uploads/2025/02/CIBL-Food-Waste-Prevention-Case-Study.pdf"
      },
      {
        "id": "page-calgary-italian-bakery-oct17-source-56",
        "label": "SAIT — Baking and Pastry Arts",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/baking-and-pastry-arts"
      },
      {
        "id": "page-calgary-italian-bakery-oct17-source-57",
        "label": "Alberta Baker apprenticeship education",
        "url": "https://tradesecrets.alberta.ca/SOURCES/PDFS/curriculum_guides/024_outline.pdf"
      }
    ],
    "checkedOn": "2026-10-17",
    "detailsId": "calgary-italian-bakery-details"
  },
  {
    "slug": "joe-media-group",
    "org": "Joe Media Group",
    "discipline": "Physics",
    "question": "How can light and editing make separate shots feel like one scene?",
    "work": "Joe Media Group is a Calgary film and television production company. It describes work in production, editing and colour, and its post-production portfolio includes several formats. The classroom story examines how images are captured and matched. It does not claim that a particular technique or teaching exercise was used on a named production.",
    "localShort": "The company identifies a Calgary production operation and Calgary contact location.",
    "calgary": "The company identifies a Calgary production operation and Calgary contact location.",
    "site": "The company identifies a Calgary production operation and Calgary contact location.",
    "localSourceIds": [
      "page-joe-media-group-oct17-source-58",
      "page-joe-media-group-oct17-source-59",
      "page-joe-media-group-oct17-source-60",
      "page-joe-media-group-oct17-source-61"
    ],
    "explain": "Sketch the path of light from a lamp to an object, then through a converging camera lens to the sensor. Compare two fictional shots with different lighting. Which differences come from the light reaching the camera, and which could be introduced during colour editing?",
    "prompt": "How can the order of two shots change what a viewer thinks happened?",
    "conversation": "How can the order of two shots change what a viewer thinks happened?",
    "mindset": "Use a thin-lens ray model for image formation. It simplifies a multi-element camera lens. Colour editing changes recorded pixel values; it does not change the light that originally reached the camera. This is an editorial classroom task, not a named client shoot.",
    "courses": [
      {
        "course": "Physics 30",
        "topic": "Reflection, refraction and camera image formation"
      }
    ],
    "courseFitSourceIds": [
      "page-joe-media-group-oct17-source-14"
    ],
    "roles": [
      {
        "title": "Camera and image capture",
        "note": "Record images that serve a production’s visual and storytelling requirements.",
        "evidence": "Company offers production; specific camera tasks are editorial rather than a verified staff job.",
        "kind": "interpreted",
        "sourceIds": [
          "page-joe-media-group-oct17-source-58",
          "page-joe-media-group-oct17-source-59",
          "page-joe-media-group-oct17-source-60",
          "page-joe-media-group-oct17-source-61"
        ]
      },
      {
        "title": "Film and video editing",
        "note": "Build a sequence from selected footage to communicate a coherent idea.",
        "evidence": "Company describes editing and post-production services.",
        "kind": "interpreted",
        "sourceIds": [
          "page-joe-media-group-oct17-source-58",
          "page-joe-media-group-oct17-source-59",
          "page-joe-media-group-oct17-source-60",
          "page-joe-media-group-oct17-source-61"
        ]
      },
      {
        "title": "Colour finishing",
        "note": "Work on the appearance and consistency of images during post-production.",
        "evidence": "Company about page names colour work; task wording is editorial.",
        "kind": "interpreted",
        "sourceIds": [
          "page-joe-media-group-oct17-source-58",
          "page-joe-media-group-oct17-source-59",
          "page-joe-media-group-oct17-source-60",
          "page-joe-media-group-oct17-source-61"
        ]
      }
    ],
    "rolesNote": "Work areas and related occupations, not a staff roster or a list of current vacancies. Each profile explains the evidence for its company connection.",
    "pathways": [
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Film and Video Production",
        "note": "Practise production and post-production through film projects. Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
        "kind": "interpreted",
        "sourceIds": [
          "page-joe-media-group-oct17-source-28"
        ]
      },
      {
        "kindLabel": "Bachelor’s degree",
        "label": "AUArts — Bachelor of Design",
        "note": "Develop visual communication through studio-based design work. Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
        "kind": "interpreted",
        "sourceIds": [
          "page-joe-media-group-oct17-source-27"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "Joe Media Group is a Calgary film and television production company. It describes work in production, editing and colour, and its post-production portfolio includes several formats. The classroom story examines how images are captured and matched. It does not claim that a particular technique or teaching exercise was used on a named production.",
        "status": "Source-backed company/project account",
        "kind": "stated",
        "sourceIds": [
          "page-joe-media-group-oct17-source-58",
          "page-joe-media-group-oct17-source-59",
          "page-joe-media-group-oct17-source-60",
          "page-joe-media-group-oct17-source-61"
        ]
      },
      {
        "type": "local connection",
        "claim": "The company identifies a Calgary production operation and Calgary contact location.",
        "status": "Source-backed local work",
        "kind": "stated",
        "sourceIds": [
          "page-joe-media-group-oct17-source-58",
          "page-joe-media-group-oct17-source-59",
          "page-joe-media-group-oct17-source-60",
          "page-joe-media-group-oct17-source-61"
        ]
      },
      {
        "type": "course fit",
        "claim": "Physics 30 C1 includes reflection, refraction and thin-lens image formation. Follow light from subject through lens to sensor, then distinguish physical capture from editorial colour changes.",
        "status": "Editorial application of verified curriculum topics",
        "kind": "interpreted",
        "sourceIds": [
          "page-joe-media-group-oct17-source-14"
        ]
      },
      {
        "type": "limits",
        "claim": "The optics activity supplies the Physics 30 connection. Film continuity and colour finishing are creative applications, not separate mandated physics outcomes.",
        "status": "Scope of this example",
        "kind": "interpreted",
        "sourceIds": [
          "page-joe-media-group-oct17-source-58",
          "page-joe-media-group-oct17-source-59",
          "page-joe-media-group-oct17-source-60",
          "page-joe-media-group-oct17-source-61"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-joe-media-group-oct17-source-14",
        "label": "Alberta Physics 20–30 performance standards: A1, B1 and C1",
        "url": "https://www.alberta.ca/system/files/custom_downloaded_images/edc-physics20-30-performance-standards.pdf"
      },
      {
        "id": "page-joe-media-group-oct17-source-27",
        "label": "AUArts — Bachelor of Design",
        "url": "https://www.auarts.ca/program-areas/undergraduate/bachelor-of-design-bdes"
      },
      {
        "id": "page-joe-media-group-oct17-source-28",
        "label": "SAIT — Film and Video Production",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/film-and-video-production"
      },
      {
        "id": "page-joe-media-group-oct17-source-58",
        "label": "Joe Media Group — company/project evidence 1",
        "url": "https://joemedia.tv/about-us"
      },
      {
        "id": "page-joe-media-group-oct17-source-59",
        "label": "Joe Media Group — company/project evidence 2",
        "url": "https://joemedia.tv/corporate"
      },
      {
        "id": "page-joe-media-group-oct17-source-60",
        "label": "Joe Media Group — company/project evidence 3",
        "url": "https://joemedia.tv/contact"
      },
      {
        "id": "page-joe-media-group-oct17-source-61",
        "label": "Joe Media Group — company/project evidence 4",
        "url": "https://joemedia.tv/post-production"
      }
    ],
    "checkedOn": "2026-10-17",
    "detailsId": "joe-media-group-details"
  },
  {
    "slug": "cbl-bakeries-cinnaroll",
    "org": "CBL Bakeries / Cinnaroll",
    "discipline": "Chemistry",
    "question": "How can thousands of pastries come out consistently?",
    "work": "CBL Bakeries, trading through the Cinnaroll brand, describes production equipment designed for large batches, product development and quality assurance. Its site lists a Calgary address and identifies production and packaging teams. This example examines variation across batches. It does not disclose the company’s recipe, equipment settings or internal quality limits.",
    "localShort": "Calgary company address and documented manufacturing activity; no separate Cinnzeo retail business is counted here.",
    "calgary": "Calgary company address and documented manufacturing activity; no separate Cinnzeo retail business is counted here.",
    "site": "Calgary company address and documented manufacturing activity; no separate Cinnzeo retail business is counted here.",
    "localSourceIds": [
      "page-cbl-bakeries-cinnaroll-oct17-source-62",
      "page-cbl-bakeries-cinnaroll-oct17-source-63"
    ],
    "explain": "Compare fictional piece masses: batch A is 49, 50, 50, 51 g; batch B is 40, 50, 50, 60 g. Both average 50 g. Compare spread and explain why an average alone is insufficient.",
    "prompt": "Can two batches have the same average and still differ in quality?",
    "conversation": "Can two batches have the same average and still differ in quality?",
    "mindset": "The figures are invented and no company acceptance limits are implied. Mass comparison does not establish food safety.",
    "courses": [
      {
        "course": "Science 10",
        "topic": "Scientific inquiry: variables, sampling and consistency"
      }
    ],
    "courseFitSourceIds": [
      "page-cbl-bakeries-cinnaroll-oct17-source-51"
    ],
    "roles": [
      {
        "title": "Commercial baking",
        "note": "Produce baked goods through a controlled sequence of preparation, processing and handling.",
        "evidence": "Company describes manufacturing and production teams; no current vacancy claimed.",
        "kind": "interpreted",
        "sourceIds": [
          "page-cbl-bakeries-cinnaroll-oct17-source-62",
          "page-cbl-bakeries-cinnaroll-oct17-source-63"
        ]
      },
      {
        "title": "Quality and traceability",
        "note": "Make it possible to explain how a result or product was produced. Quality work checks records, methods and acceptance criteria so variation can be investigated rather than hidden.",
        "evidence": "Company describes quality assurance; no named job description captured.",
        "kind": "interpreted",
        "sourceIds": [
          "page-cbl-bakeries-cinnaroll-oct17-source-62",
          "page-cbl-bakeries-cinnaroll-oct17-source-63"
        ]
      },
      {
        "title": "Ingredient and formulation science",
        "note": "Investigate how ingredients behave in a product. This work connects a material’s composition to properties such as texture, stability or performance in a mixture.",
        "evidence": "Company describes product development; no particular scientist role or degree requirement is asserted.",
        "kind": "interpreted",
        "sourceIds": [
          "page-cbl-bakeries-cinnaroll-oct17-source-62",
          "page-cbl-bakeries-cinnaroll-oct17-source-63"
        ]
      }
    ],
    "rolesNote": "Work areas and related occupations, not a staff roster or a list of current vacancies. Each profile explains the evidence for its company connection.",
    "pathways": [
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Baking and Pastry Arts",
        "note": "Practise bakery and pastry production and product quality. Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
        "kind": "interpreted",
        "sourceIds": [
          "page-cbl-bakeries-cinnaroll-oct17-source-56"
        ]
      },
      {
        "kindLabel": "Apprenticeship",
        "label": "Alberta Baker apprenticeship education",
        "note": "Combine structured trade education with workplace learning in baking. Use Tradesecrets to verify current entry, sponsorship and work-hour requirements. No specific Calgary employer placement is promised.",
        "kind": "interpreted",
        "sourceIds": [
          "page-cbl-bakeries-cinnaroll-oct17-source-57"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Chemical Laboratory Technology",
        "note": "Practice chemical analysis, sample preparation and analytical instrumentation. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-cbl-bakeries-cinnaroll-oct17-source-22"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "CBL Bakeries, trading through the Cinnaroll brand, describes production equipment designed for large batches, product development and quality assurance. Its site lists a Calgary address and identifies production and packaging teams. This example examines variation across batches. It does not disclose the company’s recipe, equipment settings or internal quality limits.",
        "status": "Source-backed company/project account",
        "kind": "stated",
        "sourceIds": [
          "page-cbl-bakeries-cinnaroll-oct17-source-62",
          "page-cbl-bakeries-cinnaroll-oct17-source-63"
        ]
      },
      {
        "type": "local connection",
        "claim": "Calgary company address and documented manufacturing activity; no separate Cinnzeo retail business is counted here.",
        "status": "Source-backed local work",
        "kind": "stated",
        "sourceIds": [
          "page-cbl-bakeries-cinnaroll-oct17-source-62",
          "page-cbl-bakeries-cinnaroll-oct17-source-63"
        ]
      },
      {
        "type": "course fit",
        "claim": "Science 10 inquiry skills (program p. 8) support controlled variables, sampling and interpreting variation. Recipe scale-up is not presented as chemical stoichiometry.",
        "status": "Editorial application of verified curriculum topics",
        "kind": "interpreted",
        "sourceIds": [
          "page-cbl-bakeries-cinnaroll-oct17-source-51"
        ]
      },
      {
        "type": "limits",
        "claim": "Company careers page says no positions are currently being hired as checked 17 October. This dated notice does not prevent an occupational example.",
        "status": "Scope of this example",
        "kind": "interpreted",
        "sourceIds": [
          "page-cbl-bakeries-cinnaroll-oct17-source-62",
          "page-cbl-bakeries-cinnaroll-oct17-source-63"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-cbl-bakeries-cinnaroll-oct17-source-22",
        "label": "SAIT — Chemical Laboratory Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/chemical-laboratory-technology"
      },
      {
        "id": "page-cbl-bakeries-cinnaroll-oct17-source-51",
        "label": "Alberta Science 10 program: inquiry skills and technological systems",
        "url": "https://education.alberta.ca/media/159715/science10.pdf"
      },
      {
        "id": "page-cbl-bakeries-cinnaroll-oct17-source-56",
        "label": "SAIT — Baking and Pastry Arts",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/baking-and-pastry-arts"
      },
      {
        "id": "page-cbl-bakeries-cinnaroll-oct17-source-57",
        "label": "Alberta Baker apprenticeship education",
        "url": "https://tradesecrets.alberta.ca/SOURCES/PDFS/curriculum_guides/024_outline.pdf"
      },
      {
        "id": "page-cbl-bakeries-cinnaroll-oct17-source-62",
        "label": "CBL Bakeries / Cinnaroll — company/project evidence 1",
        "url": "https://www.cinnaroll.com/"
      },
      {
        "id": "page-cbl-bakeries-cinnaroll-oct17-source-63",
        "label": "CBL Bakeries / Cinnaroll — company/project evidence 2",
        "url": "https://www.cinnaroll.com/careers"
      }
    ],
    "checkedOn": "2026-10-17",
    "detailsId": "cbl-bakeries-cinnaroll-details"
  },
  {
    "slug": "isl-engineering",
    "org": "ISL Engineering",
    "discipline": "Biology",
    "question": "How can a road cross a creek without ignoring the landscape?",
    "work": "ISL was the City of Calgary’s prime consultant for planning, detailed design and construction work on the 144 Avenue NW extension. Its project account describes steep terrain, a single-span bridge over West Nose Creek, creek work and multi-use pathways. This creates a local example of design constraints interacting, rather than a story about choosing the shortest line on a map.",
    "localShort": "The featured road, creek crossing and pathways are in Calgary; ISL identifies the City as client.",
    "calgary": "The featured road, creek crossing and pathways are in Calgary; ISL identifies the City as client.",
    "site": "The featured road, creek crossing and pathways are in Calgary; ISL identifies the City as client.",
    "localSourceIds": [
      "page-isl-engineering-oct17-source-64",
      "page-isl-engineering-oct17-source-65",
      "page-isl-engineering-oct17-source-66",
      "page-isl-engineering-oct17-source-67"
    ],
    "explain": "Choose between two fictional corridors: one is shorter but steep and crosses a creek twice; one is longer and crosses once. List evidence needed before selecting either, without inventing a numerical score.",
    "prompt": "Why might the shortest route be a poor design?",
    "conversation": "Why might the shortest route be a poor design?",
    "mindset": "The exercise is not the actual route evaluation. No claim that the real creek project had a measured biodiversity improvement is made.",
    "courses": [
      {
        "course": "Biology 20",
        "topic": "Aquatic ecosystems and environmental evidence"
      }
    ],
    "courseFitSourceIds": [
      "page-isl-engineering-oct17-source-6"
    ],
    "roles": [
      {
        "title": "Civil and construction technology",
        "note": "Turn project requirements into usable drawings, quantities and checks.",
        "evidence": "Project account describes planning/design/construction and engineering disciplines.",
        "kind": "interpreted",
        "sourceIds": [
          "page-isl-engineering-oct17-source-64",
          "page-isl-engineering-oct17-source-65",
          "page-isl-engineering-oct17-source-66",
          "page-isl-engineering-oct17-source-67"
        ]
      },
      {
        "title": "Spatial data and mapping",
        "note": "Turn measurements tied to places into usable spatial information. The work involves coordinates, scale and checking that datasets describe the same location and time.",
        "evidence": "Site and route work support mapping; no specific surveyor posting is claimed.",
        "kind": "interpreted",
        "sourceIds": [
          "page-isl-engineering-oct17-source-64",
          "page-isl-engineering-oct17-source-65",
          "page-isl-engineering-oct17-source-66",
          "page-isl-engineering-oct17-source-67"
        ]
      },
      {
        "title": "Environmental field assessment",
        "note": "Collect and interpret evidence about a place before recommending an action.",
        "evidence": "Project account identifies environmental management and creek work.",
        "kind": "interpreted",
        "sourceIds": [
          "page-isl-engineering-oct17-source-64",
          "page-isl-engineering-oct17-source-65",
          "page-isl-engineering-oct17-source-66",
          "page-isl-engineering-oct17-source-67"
        ]
      }
    ],
    "rolesNote": "Work areas and related occupations, not a staff roster or a list of current vacancies. Each profile explains the evidence for its company connection.",
    "pathways": [
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Civil Engineering Technology, Municipal Major",
        "note": "Study municipal infrastructure, design and drafting. Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
        "kind": "interpreted",
        "sourceIds": [
          "page-isl-engineering-oct17-source-16"
        ]
      },
      {
        "kindLabel": "Bachelor’s degree",
        "label": "University of Calgary — Civil Engineering",
        "note": "Study the design and operation of structures, transportation and water infrastructure. Check current admissions and program requirements. A degree is not automatic professional licensure.",
        "kind": "interpreted",
        "sourceIds": [
          "page-isl-engineering-oct17-source-15"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Geomatics Engineering Technology",
        "note": "Learn surveying, GIS, positioning and remote sensing. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-isl-engineering-oct17-source-8"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Environmental Technology",
        "note": "Study environmental monitoring, assessment and field methods. Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
        "kind": "interpreted",
        "sourceIds": [
          "page-isl-engineering-oct17-source-9"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "ISL was the City of Calgary’s prime consultant for planning, detailed design and construction work on the 144 Avenue NW extension. Its project account describes steep terrain, a single-span bridge over West Nose Creek, creek work and multi-use pathways. This creates a local example of design constraints interacting, rather than a story about choosing the shortest line on a map.",
        "status": "Source-backed company/project account",
        "kind": "stated",
        "sourceIds": [
          "page-isl-engineering-oct17-source-64",
          "page-isl-engineering-oct17-source-65",
          "page-isl-engineering-oct17-source-66",
          "page-isl-engineering-oct17-source-67"
        ]
      },
      {
        "type": "local connection",
        "claim": "The featured road, creek crossing and pathways are in Calgary; ISL identifies the City as client.",
        "status": "Source-backed local work",
        "kind": "stated",
        "sourceIds": [
          "page-isl-engineering-oct17-source-64",
          "page-isl-engineering-oct17-source-65",
          "page-isl-engineering-oct17-source-66",
          "page-isl-engineering-oct17-source-67"
        ]
      },
      {
        "type": "course fit",
        "claim": "Biology 20 B1.3k connects biotic and abiotic characteristics of aquatic ecosystems. Compare creek habitat and water observations before and after a crossing; road geometry is context rather than a claimed kinematics outcome.",
        "status": "Editorial application of verified curriculum topics",
        "kind": "interpreted",
        "sourceIds": [
          "page-isl-engineering-oct17-source-6"
        ]
      },
      {
        "type": "limits",
        "claim": "Question narrowed from a generic safe route to the documented creek/terrain problem. Keep Indigenous engagement claims out unless specifically sourced and contextualized.",
        "status": "Scope of this example",
        "kind": "interpreted",
        "sourceIds": [
          "page-isl-engineering-oct17-source-64",
          "page-isl-engineering-oct17-source-65",
          "page-isl-engineering-oct17-source-66",
          "page-isl-engineering-oct17-source-67"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-isl-engineering-oct17-source-6",
        "label": "Alberta Biology 20–30 program: water use and ecosystems",
        "url": "https://education.alberta.ca/media/159727/bio203007.pdf"
      },
      {
        "id": "page-isl-engineering-oct17-source-8",
        "label": "SAIT — Geomatics Engineering Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/geomatics-engineering-technology"
      },
      {
        "id": "page-isl-engineering-oct17-source-9",
        "label": "SAIT — Environmental Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/environmental-technology"
      },
      {
        "id": "page-isl-engineering-oct17-source-15",
        "label": "University of Calgary — Civil Engineering",
        "url": "https://schulich.ucalgary.ca/future-students/undergraduate/programs/bsc-civil-engineering"
      },
      {
        "id": "page-isl-engineering-oct17-source-16",
        "label": "SAIT — Civil Engineering Technology, Municipal Major",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/civil-engineering-technology-municipal"
      },
      {
        "id": "page-isl-engineering-oct17-source-64",
        "label": "ISL Engineering — company/project evidence 1",
        "url": "https://islengineering.com/about/our-offices/"
      },
      {
        "id": "page-isl-engineering-oct17-source-65",
        "label": "ISL Engineering — company/project evidence 2",
        "url": "https://islengineering.com/projects/"
      },
      {
        "id": "page-isl-engineering-oct17-source-66",
        "label": "ISL Engineering — company/project evidence 3",
        "url": "https://islengineering.com/project/144-ave-nw-calgary-extension/"
      },
      {
        "id": "page-isl-engineering-oct17-source-67",
        "label": "ISL Engineering — company/project evidence 4",
        "url": "https://islengineering.com/join-the-team/"
      }
    ],
    "checkedOn": "2026-10-17",
    "detailsId": "isl-engineering-details"
  },
  {
    "slug": "clearbakk",
    "org": "ClearBakk — ALSYS group",
    "discipline": "Chemistry",
    "question": "How can you fit a water-treatment process into a modular unit?",
    "work": "ClearBakk is a Calgary engineering company within the ALSYS group. It describes water-treatment and fluid-management work, including modular systems, and ALSYS identifies its design and integration capabilities. The example focuses on fitting a treatment sequence into equipment that can be delivered and operated. A modular package is not automatically suitable for every water source.",
    "localShort": "Calgary engineering base; deployment sites and fabrication locations are not assumed to be in Calgary.",
    "calgary": "Calgary engineering base; deployment sites and fabrication locations are not assumed to be in Calgary.",
    "site": "Calgary engineering base; deployment sites and fabrication locations are not assumed to be in Calgary.",
    "localSourceIds": [
      "page-clearbakk-oct17-source-68",
      "page-clearbakk-oct17-source-69",
      "page-clearbakk-oct17-source-70",
      "page-clearbakk-oct17-source-71"
    ],
    "explain": "Arrange four fictional modules on a paper floor plan: feed tank, treatment, output check and residual storage. Draw flows and leave maintenance access. Explain one trade-off when the footprint is reduced.",
    "prompt": "What could go wrong if a designer only tries to make the equipment smaller?",
    "conversation": "What could go wrong if a designer only tries to make the equipment smaller?",
    "mindset": "The layout is invented, not a ClearBakk specification. No water-quality guarantee or operational chemical instructions are supplied.",
    "courses": [
      {
        "course": "Chemistry 20",
        "topic": "Solutions, separation and output testing"
      }
    ],
    "courseFitSourceIds": [
      "page-clearbakk-oct17-source-43"
    ],
    "roles": [
      {
        "title": "Process engineering",
        "note": "Turn a useful transformation into a workable sequence of equipment and operating steps. Process engineers consider what enters, what leaves and what conditions the system must maintain.",
        "evidence": "ClearBakk describes process design and engineering services.",
        "kind": "interpreted",
        "sourceIds": [
          "page-clearbakk-oct17-source-68",
          "page-clearbakk-oct17-source-69",
          "page-clearbakk-oct17-source-70",
          "page-clearbakk-oct17-source-71"
        ]
      },
      {
        "title": "Mechanical design and prototyping",
        "note": "Translate a need into a component or machine that can be built and tested. Designers use dimensions, material properties and constraints to evaluate alternatives.",
        "evidence": "Modular integration supports mechanical layout work; generic profile.",
        "kind": "interpreted",
        "sourceIds": [
          "page-clearbakk-oct17-source-68",
          "page-clearbakk-oct17-source-69",
          "page-clearbakk-oct17-source-70",
          "page-clearbakk-oct17-source-71"
        ]
      },
      {
        "title": "Instrumentation and controls",
        "note": "Keep a process measurable and responsive. Controls work connects sensors, decisions and actuators so the system can respond when conditions change.",
        "evidence": "Controls connection is editorial to integrated equipment; not an employer-listed vacancy.",
        "kind": "interpreted",
        "sourceIds": [
          "page-clearbakk-oct17-source-68",
          "page-clearbakk-oct17-source-69",
          "page-clearbakk-oct17-source-70",
          "page-clearbakk-oct17-source-71"
        ]
      }
    ],
    "rolesNote": "Work areas and related occupations, not a staff roster or a list of current vacancies. Each profile explains the evidence for its company connection.",
    "pathways": [
      {
        "kindLabel": "Bachelor’s degree",
        "label": "University of Calgary — Chemical Engineering",
        "note": "Study how to transform raw materials and design production processes. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-clearbakk-oct17-source-44"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Mechanical Engineering Technology",
        "note": "Study mechanical systems, design and manufacturing, with specialization options. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-clearbakk-oct17-source-23"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Instrumentation Engineering Technology",
        "note": "Work with measurement devices, calibration and automated process controls. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-clearbakk-oct17-source-21"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "ClearBakk is a Calgary engineering company within the ALSYS group. It describes water-treatment and fluid-management work, including modular systems, and ALSYS identifies its design and integration capabilities. The example focuses on fitting a treatment sequence into equipment that can be delivered and operated. A modular package is not automatically suitable for every water source.",
        "status": "Source-backed company/project account",
        "kind": "stated",
        "sourceIds": [
          "page-clearbakk-oct17-source-68",
          "page-clearbakk-oct17-source-69",
          "page-clearbakk-oct17-source-70",
          "page-clearbakk-oct17-source-71"
        ]
      },
      {
        "type": "local connection",
        "claim": "Calgary engineering base; deployment sites and fabrication locations are not assumed to be in Calgary.",
        "status": "Source-backed local work",
        "kind": "stated",
        "sourceIds": [
          "page-clearbakk-oct17-source-68",
          "page-clearbakk-oct17-source-69",
          "page-clearbakk-oct17-source-70",
          "page-clearbakk-oct17-source-71"
        ]
      },
      {
        "type": "course fit",
        "claim": "Chemistry 20 Unit C supplies solution and concentration concepts. Compare feed and output evidence; modular layout and maintenance access are engineering applications.",
        "status": "Editorial application of verified curriculum topics",
        "kind": "interpreted",
        "sourceIds": [
          "page-clearbakk-oct17-source-43"
        ]
      },
      {
        "type": "limits",
        "claim": "Free access to two ALSYS pages was blocked; public search-reader text supports parent context, while ClearBakk originals support the main copy.",
        "status": "Scope of this example",
        "kind": "interpreted",
        "sourceIds": [
          "page-clearbakk-oct17-source-68",
          "page-clearbakk-oct17-source-69",
          "page-clearbakk-oct17-source-70",
          "page-clearbakk-oct17-source-71"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-clearbakk-oct17-source-21",
        "label": "SAIT — Instrumentation Engineering Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/instrumentation-engineering-technology"
      },
      {
        "id": "page-clearbakk-oct17-source-23",
        "label": "SAIT — Mechanical Engineering Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/mechanical-engineering-technology"
      },
      {
        "id": "page-clearbakk-oct17-source-43",
        "label": "Alberta Chemistry 20–30 program: solutions and concentration",
        "url": "https://education.alberta.ca/media/159730/chem2030_07.pdf"
      },
      {
        "id": "page-clearbakk-oct17-source-44",
        "label": "University of Calgary — Chemical Engineering",
        "url": "https://schulich.ucalgary.ca/future-students/undergraduate/programs/bsc-chemical-engineering"
      },
      {
        "id": "page-clearbakk-oct17-source-68",
        "label": "ClearBakk — ALSYS group — company/project evidence 1",
        "url": "https://clearbakk.com/about-us/"
      },
      {
        "id": "page-clearbakk-oct17-source-69",
        "label": "ClearBakk — ALSYS group — company/project evidence 2",
        "url": "https://clearbakk.com/"
      },
      {
        "id": "page-clearbakk-oct17-source-70",
        "label": "ClearBakk — ALSYS group — company/project evidence 3",
        "url": "https://www.alsys-group.com/clearbakk-modular-solutions/"
      },
      {
        "id": "page-clearbakk-oct17-source-71",
        "label": "ClearBakk — ALSYS group — company/project evidence 4",
        "url": "https://www.alsys-group.com/solutions/alsys-engineering/"
      }
    ],
    "checkedOn": "2026-10-17",
    "detailsId": "clearbakk-details"
  }
];

export const octoberOrganizations: Organization[] = [
  {
    "id": "o2-planning-design",
    "name": "O2 Planning and Design",
    "organizationType": "company",
    "tagline": "A park can be part of a city’s water system.",
    "description": {
      "text": "O2 is a planning and design practice with a Calgary studio. At Dale Hodges Park, it worked with other specialists to combine stormwater treatment, habitat and public space. Its project account describes marshes, wet meadows and landforms that guide water before it reaches the Bow River. This was collaborative work; O2 did not design every element alone.",
      "kind": "stated",
      "sourceIds": [
        "oct17-source-1",
        "oct17-source-2",
        "oct17-source-3",
        "oct17-source-4",
        "oct17-source-5"
      ]
    },
    "problem": {
      "text": "How can a park help clean stormwater before it reaches a river?",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-1",
        "oct17-source-2",
        "oct17-source-3",
        "oct17-source-4",
        "oct17-source-5"
      ]
    },
    "offering": {
      "text": "Landscape architecture, planning and spatial analysis, including stormwater landscapes.",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-1",
        "oct17-source-2",
        "oct17-source-3",
        "oct17-source-4",
        "oct17-source-5"
      ]
    },
    "beneficiaries": {
      "text": "Municipal project teams and the people who use parks and nearby waterways.",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-1",
        "oct17-source-2",
        "oct17-source-3",
        "oct17-source-4",
        "oct17-source-5"
      ]
    },
    "headquarters": {
      "text": "Headquarters not separately verified for this example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "Calgary studio; the featured project is Dale Hodges Park in Calgary.",
      "kind": "stated",
      "sourceIds": [
        "oct17-source-1",
        "oct17-source-2",
        "oct17-source-3",
        "oct17-source-4",
        "oct17-source-5"
      ]
    },
    "websiteSourceId": "oct17-o2-planning-design-website",
    "checkedOn": "2026-10-17",
    "careersSourceId": "oct17-source-3"
  },
  {
    "id": "entuitive",
    "name": "Entuitive",
    "organizationType": "company",
    "tagline": "The space below a building can be just as important as the rooms inside it.",
    "description": {
      "text": "Entuitive provided structural engineering for Calgary’s Central Library. Its Calgary-based project lead describes the challenge of building above an active LRT corridor using long-span trusses and coordinating construction with transit operations. Structural engineering helps the building carry loads while leaving space for the railway. The architect, builder and transit operator had different responsibilities.",
      "kind": "stated",
      "sourceIds": [
        "oct17-source-10",
        "oct17-source-11",
        "oct17-source-12",
        "oct17-source-13"
      ]
    },
    "problem": {
      "text": "How can you support a library above a moving train?",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-10",
        "oct17-source-11",
        "oct17-source-12",
        "oct17-source-13"
      ]
    },
    "offering": {
      "text": "Structural engineering and coordination for buildings such as Calgary’s Central Library.",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-10",
        "oct17-source-11",
        "oct17-source-12",
        "oct17-source-13"
      ]
    },
    "beneficiaries": {
      "text": "Building owners, design and construction teams, and people who use the completed spaces.",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-10",
        "oct17-source-11",
        "oct17-source-12",
        "oct17-source-13"
      ]
    },
    "headquarters": {
      "text": "Headquarters not separately verified for this example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "Calgary project and a Calgary-based structural engineering lead are explicitly documented.",
      "kind": "stated",
      "sourceIds": [
        "oct17-source-10",
        "oct17-source-11",
        "oct17-source-12",
        "oct17-source-13"
      ]
    },
    "websiteSourceId": "oct17-entuitive-website",
    "checkedOn": "2026-10-17",
    "careersSourceId": "oct17-source-13"
  },
  {
    "id": "phil-sebastian",
    "name": "Phil & Sebastian Coffee Roasters",
    "organizationType": "company",
    "tagline": "Consistency depends on checking what happened, not just repeating a recipe.",
    "description": {
      "text": "Phil & Sebastian operates a roasting facility in Calgary’s Simmons Building. The company describes a custom roaster, logged roast data and additional reflectance measurements used to check batches. The story connects food production with instrumentation: recording operating conditions and checking the product answer different questions. Its claims about competitors are not needed for this example.",
      "kind": "stated",
      "sourceIds": [
        "oct17-source-18",
        "oct17-source-19",
        "oct17-source-20"
      ]
    },
    "problem": {
      "text": "How can measurements help make a roast repeatable?",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-18",
        "oct17-source-19",
        "oct17-source-20"
      ]
    },
    "offering": {
      "text": "Coffee roasting and batch quality checks using process records and product measurements.",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-18",
        "oct17-source-19",
        "oct17-source-20"
      ]
    },
    "beneficiaries": {
      "text": "Café teams and coffee drinkers who depend on consistent batches.",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-18",
        "oct17-source-19",
        "oct17-source-20"
      ]
    },
    "headquarters": {
      "text": "Headquarters not separately verified for this example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "The company identifies the Simmons Building as its Calgary roasting facility.",
      "kind": "stated",
      "sourceIds": [
        "oct17-source-18",
        "oct17-source-19",
        "oct17-source-20"
      ]
    },
    "websiteSourceId": "oct17-source-18",
    "checkedOn": "2026-10-17",
    "careersSourceId": "oct17-source-20"
  },
  {
    "id": "broken-pencil-studios",
    "name": "Broken Pencil Studios",
    "organizationType": "company",
    "tagline": "A useful animation helps an audience follow relationships that a camera cannot easily show.",
    "description": {
      "text": "Broken Pencil Studios is a Calgary creative studio offering animation, illustration and technical visualization. Its own production account describes moving from a communication brief to script, storyboard, design, animation and delivery. The work is not simply making something move: the team chooses what to show so an audience can understand a message.",
      "kind": "stated",
      "sourceIds": [
        "oct17-source-24",
        "oct17-source-25",
        "oct17-source-26"
      ]
    },
    "problem": {
      "text": "How can a moving picture explain a process you cannot see?",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-24",
        "oct17-source-25",
        "oct17-source-26"
      ]
    },
    "offering": {
      "text": "Animation, illustration and technical visualization developed from briefs and storyboards.",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-24",
        "oct17-source-25",
        "oct17-source-26"
      ]
    },
    "beneficiaries": {
      "text": "Clients explaining ideas and audiences trying to understand them.",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-24",
        "oct17-source-25",
        "oct17-source-26"
      ]
    },
    "headquarters": {
      "text": "Headquarters not separately verified for this example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "The company identifies itself as a Calgary animation production studio.",
      "kind": "stated",
      "sourceIds": [
        "oct17-source-24",
        "oct17-source-25",
        "oct17-source-26"
      ]
    },
    "websiteSourceId": "oct17-source-24",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "cpkc",
    "name": "CPKC",
    "organizationType": "company",
    "tagline": "A railway moves through space, but its plan also has to work through time.",
    "description": {
      "text": "CPKC operates a rail network across Canada, the United States and Mexico. Its 2025 annual report identifies Calgary as the location of its main operations centre and primary Canadian dispatch facility. Rail traffic controllers coordinate crews and day-to-day locomotive operations. The classroom model below simplifies the scheduling problem; it does not describe railway operating rules.",
      "kind": "stated",
      "sourceIds": [
        "oct17-source-29",
        "oct17-source-30",
        "oct17-source-31",
        "oct17-source-32"
      ]
    },
    "problem": {
      "text": "How can trains share a rail network without getting in each other’s way?",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-29",
        "oct17-source-30",
        "oct17-source-31",
        "oct17-source-32"
      ]
    },
    "offering": {
      "text": "Rail transportation supported by operations planning and network coordination.",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-29",
        "oct17-source-30",
        "oct17-source-31",
        "oct17-source-32"
      ]
    },
    "beneficiaries": {
      "text": "Businesses moving freight and the crews coordinating train movements.",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-29",
        "oct17-source-30",
        "oct17-source-31",
        "oct17-source-32"
      ]
    },
    "headquarters": {
      "text": "Headquarters not separately verified for this example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "Calgary operations centre and dispatch function are documented in the 2025 annual report.",
      "kind": "stated",
      "sourceIds": [
        "oct17-source-29",
        "oct17-source-30",
        "oct17-source-31",
        "oct17-source-32"
      ]
    },
    "websiteSourceId": "oct17-cpkc-website",
    "checkedOn": "2026-10-17",
    "careersSourceId": "oct17-source-32"
  },
  {
    "id": "watersmart",
    "name": "WaterSMART — a Hazen company",
    "organizationType": "company",
    "tagline": "A useful water plan asks what might change, not just how much water is available today.",
    "description": {
      "text": "WaterSMART, now presented as a Hazen company, works on water management with engineers, environmental scientists and policy specialists. The City of Calgary identifies WaterSMART as a partner in its integrated water-security roadmap and water-reuse assessment. The project supports long-term choices about water supply, demand and reuse; planning evidence does not mean every option has been built.",
      "kind": "stated",
      "sourceIds": [
        "oct17-source-35",
        "oct17-source-36",
        "oct17-source-37"
      ]
    },
    "problem": {
      "text": "How do you plan water supplies for a city that keeps changing?",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-35",
        "oct17-source-36",
        "oct17-source-37"
      ]
    },
    "offering": {
      "text": "Water-management analysis and planning across supply, demand and reuse options.",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-35",
        "oct17-source-36",
        "oct17-source-37"
      ]
    },
    "beneficiaries": {
      "text": "Municipal water planners and communities relying on water supplies.",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-35",
        "oct17-source-36",
        "oct17-source-37"
      ]
    },
    "headquarters": {
      "text": "Headquarters not separately verified for this example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "Calgary-based work is established through the City’s named roadmap partnership and the company team page.",
      "kind": "stated",
      "sourceIds": [
        "oct17-source-35",
        "oct17-source-36",
        "oct17-source-37"
      ]
    },
    "websiteSourceId": "oct17-source-37",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "integrated-sustainability",
    "name": "Integrated Sustainability",
    "organizationType": "company",
    "tagline": "A treatment idea has to keep working when real water and operating conditions change.",
    "description": {
      "text": "Integrated Sustainability is a Calgary-based water-infrastructure business working across design, equipment delivery and operations. Its public project material describes biological treatment of mine water and operating work on a moving bed biofilm reactor. Those are company project claims, not evidence that a mine or treatment plant is located in Calgary. The teaching focus is the connection between a treatment process and the system around it.",
      "kind": "stated",
      "sourceIds": [
        "oct17-source-39",
        "oct17-source-40",
        "oct17-source-41",
        "oct17-source-42"
      ]
    },
    "problem": {
      "text": "Why does a water-treatment system need more than a successful laboratory test?",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-39",
        "oct17-source-40",
        "oct17-source-41",
        "oct17-source-42"
      ]
    },
    "offering": {
      "text": "Water-infrastructure design, equipment delivery and operating services.",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-39",
        "oct17-source-40",
        "oct17-source-41",
        "oct17-source-42"
      ]
    },
    "beneficiaries": {
      "text": "Water-system owners and operators who need treatment equipment to work as a system.",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-39",
        "oct17-source-40",
        "oct17-source-41",
        "oct17-source-42"
      ]
    },
    "headquarters": {
      "text": "Headquarters not separately verified for this example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "Calgary engineering business; client treatment sites may be elsewhere.",
      "kind": "stated",
      "sourceIds": [
        "oct17-source-39",
        "oct17-source-40",
        "oct17-source-41",
        "oct17-source-42"
      ]
    },
    "websiteSourceId": "oct17-source-42",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "trace-associates",
    "name": "Trace Associates",
    "organizationType": "company",
    "tagline": "A sample answers a question about a place, a depth and a moment in time.",
    "description": {
      "text": "Trace Associates has its headquarters in Calgary and provides environmental science and engineering services. Its remediation practice describes using site conditions and risk to guide decisions. Conference material by its Calgary division manager documents work involving soil and groundwater investigations. This supports a story about environmental evidence, without attributing a fictional contaminated site to a real Calgary property.",
      "kind": "stated",
      "sourceIds": [
        "oct17-source-45",
        "oct17-source-46",
        "oct17-source-47",
        "oct17-source-48"
      ]
    },
    "problem": {
      "text": "What evidence tells you which contaminated soil needs treatment?",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-45",
        "oct17-source-46",
        "oct17-source-47",
        "oct17-source-48"
      ]
    },
    "offering": {
      "text": "Environmental assessment, remediation and risk-management services.",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-45",
        "oct17-source-46",
        "oct17-source-47",
        "oct17-source-48"
      ]
    },
    "beneficiaries": {
      "text": "Landowners, project teams and people affected by decisions about land and water.",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-45",
        "oct17-source-46",
        "oct17-source-47",
        "oct17-source-48"
      ]
    },
    "headquarters": {
      "text": "Headquarters not separately verified for this example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "Calgary headquarters and a Calgary team’s environmental assessment work are documented; the teaching site is fictional.",
      "kind": "stated",
      "sourceIds": [
        "oct17-source-45",
        "oct17-source-46",
        "oct17-source-47",
        "oct17-source-48"
      ]
    },
    "websiteSourceId": "oct17-source-45",
    "checkedOn": "2026-10-17",
    "careersSourceId": "oct17-source-48"
  },
  {
    "id": "rjc-engineers",
    "name": "RJC Engineers",
    "organizationType": "company",
    "tagline": "The layers around a room have several jobs, and they must work together.",
    "description": {
      "text": "RJC provides structural engineering and building-science services in Calgary. Its Calgary building-science leadership describes assessing and rehabilitating building envelopes and roofs. A building envelope separates indoors from outdoors while managing heat, air and water movement. This example uses a generic wall rather than claiming to reproduce an RJC design.",
      "kind": "stated",
      "sourceIds": [
        "oct17-source-49",
        "oct17-source-50"
      ]
    },
    "problem": {
      "text": "How can a building keep heat in while managing moisture?",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-49",
        "oct17-source-50"
      ]
    },
    "offering": {
      "text": "Structural engineering and building-science assessment and rehabilitation.",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-49",
        "oct17-source-50"
      ]
    },
    "beneficiaries": {
      "text": "Building owners, maintenance teams and occupants.",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-49",
        "oct17-source-50"
      ]
    },
    "headquarters": {
      "text": "Headquarters not separately verified for this example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "RJC’s Calgary building-science and restoration team is explicitly identified.",
      "kind": "stated",
      "sourceIds": [
        "oct17-source-49",
        "oct17-source-50"
      ]
    },
    "websiteSourceId": "oct17-source-49",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "calgary-italian-bakery",
    "name": "Calgary Italian Bakery",
    "organizationType": "company",
    "tagline": "Waste can reveal a process problem before a new machine is needed.",
    "description": {
      "text": "Calgary Italian Bakery produces bread, buns and other baked goods. A published assessment conducted with Enviro-Stewards and project partners examined food loss and resource use at the bakery. It identified opportunities involving dough transfer, product forming and damage during later handling. These were assessed opportunities, not proof that every proposed improvement was implemented or that the historical figures describe today’s production.",
      "kind": "stated",
      "sourceIds": [
        "oct17-source-52",
        "oct17-source-53",
        "oct17-source-54",
        "oct17-source-55"
      ]
    },
    "problem": {
      "text": "Where does a bakery lose food before it reaches the customer?",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-52",
        "oct17-source-53",
        "oct17-source-54",
        "oct17-source-55"
      ]
    },
    "offering": {
      "text": "Bread, buns and other baked goods, with production processes that can be studied for food loss.",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-52",
        "oct17-source-53",
        "oct17-source-54",
        "oct17-source-55"
      ]
    },
    "beneficiaries": {
      "text": "Food-service customers, retailers and the people eating the bakery’s products.",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-52",
        "oct17-source-53",
        "oct17-source-54",
        "oct17-source-55"
      ]
    },
    "headquarters": {
      "text": "Headquarters not separately verified for this example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "Calgary bakery; a documented historical facility assessment supplies the specific story.",
      "kind": "stated",
      "sourceIds": [
        "oct17-source-52",
        "oct17-source-53",
        "oct17-source-54",
        "oct17-source-55"
      ]
    },
    "websiteSourceId": "oct17-source-52",
    "checkedOn": "2026-10-17",
    "careersSourceId": "oct17-source-54"
  },
  {
    "id": "joe-media-group",
    "name": "Joe Media Group",
    "organizationType": "company",
    "tagline": "A scene can be assembled from images recorded at different moments.",
    "description": {
      "text": "Joe Media Group is a Calgary film and television production company. It describes work in production, editing and colour, and its post-production portfolio includes several formats. The classroom story examines how images are captured and matched. It does not claim that a particular technique or teaching exercise was used on a named production.",
      "kind": "stated",
      "sourceIds": [
        "oct17-source-58",
        "oct17-source-59",
        "oct17-source-60",
        "oct17-source-61"
      ]
    },
    "problem": {
      "text": "How can light and editing make separate shots feel like one scene?",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-58",
        "oct17-source-59",
        "oct17-source-60",
        "oct17-source-61"
      ]
    },
    "offering": {
      "text": "Film and television production, editing and colour finishing.",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-58",
        "oct17-source-59",
        "oct17-source-60",
        "oct17-source-61"
      ]
    },
    "beneficiaries": {
      "text": "Production clients, creative teams and audiences.",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-58",
        "oct17-source-59",
        "oct17-source-60",
        "oct17-source-61"
      ]
    },
    "headquarters": {
      "text": "Headquarters not separately verified for this example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "The company identifies a Calgary production operation and Calgary contact location.",
      "kind": "stated",
      "sourceIds": [
        "oct17-source-58",
        "oct17-source-59",
        "oct17-source-60",
        "oct17-source-61"
      ]
    },
    "websiteSourceId": "oct17-source-58",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "cbl-bakeries-cinnaroll",
    "name": "CBL Bakeries / Cinnaroll",
    "organizationType": "company",
    "tagline": "A familiar product becomes a different problem when it has to be repeated at scale.",
    "description": {
      "text": "CBL Bakeries, trading through the Cinnaroll brand, describes production equipment designed for large batches, product development and quality assurance. Its site lists a Calgary address and identifies production and packaging teams. This example examines variation across batches. It does not disclose the company’s recipe, equipment settings or internal quality limits.",
      "kind": "stated",
      "sourceIds": [
        "oct17-source-62",
        "oct17-source-63"
      ]
    },
    "problem": {
      "text": "How can thousands of pastries come out consistently?",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-62",
        "oct17-source-63"
      ]
    },
    "offering": {
      "text": "Large-batch baked goods supported by product development, production and quality assurance.",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-62",
        "oct17-source-63"
      ]
    },
    "beneficiaries": {
      "text": "Customers and food-service teams who need consistent products.",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-62",
        "oct17-source-63"
      ]
    },
    "headquarters": {
      "text": "Headquarters not separately verified for this example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "Calgary company address and documented manufacturing activity; no separate Cinnzeo retail business is counted here.",
      "kind": "stated",
      "sourceIds": [
        "oct17-source-62",
        "oct17-source-63"
      ]
    },
    "websiteSourceId": "oct17-source-62",
    "checkedOn": "2026-10-17",
    "careersSourceId": "oct17-source-63"
  },
  {
    "id": "isl-engineering",
    "name": "ISL Engineering",
    "organizationType": "company",
    "tagline": "A route has to work for people and for the ground and water beneath it.",
    "description": {
      "text": "ISL was the City of Calgary’s prime consultant for planning, detailed design and construction work on the 144 Avenue NW extension. Its project account describes steep terrain, a single-span bridge over West Nose Creek, creek work and multi-use pathways. This creates a local example of design constraints interacting, rather than a story about choosing the shortest line on a map.",
      "kind": "stated",
      "sourceIds": [
        "oct17-source-64",
        "oct17-source-65",
        "oct17-source-66",
        "oct17-source-67"
      ]
    },
    "problem": {
      "text": "How can a road cross a creek without ignoring the landscape?",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-64",
        "oct17-source-65",
        "oct17-source-66",
        "oct17-source-67"
      ]
    },
    "offering": {
      "text": "Infrastructure planning, engineering and construction support, including Calgary’s 144 Avenue NW extension.",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-64",
        "oct17-source-65",
        "oct17-source-66",
        "oct17-source-67"
      ]
    },
    "beneficiaries": {
      "text": "Municipal project teams and people travelling through the completed corridor.",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-64",
        "oct17-source-65",
        "oct17-source-66",
        "oct17-source-67"
      ]
    },
    "headquarters": {
      "text": "Headquarters not separately verified for this example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "The featured road, creek crossing and pathways are in Calgary; ISL identifies the City as client.",
      "kind": "stated",
      "sourceIds": [
        "oct17-source-64",
        "oct17-source-65",
        "oct17-source-66",
        "oct17-source-67"
      ]
    },
    "websiteSourceId": "oct17-source-64",
    "checkedOn": "2026-10-17",
    "careersSourceId": "oct17-source-67"
  },
  {
    "id": "clearbakk",
    "name": "ClearBakk — ALSYS group",
    "organizationType": "company",
    "tagline": "A compact system still needs the right sequence, connections and access for maintenance.",
    "description": {
      "text": "ClearBakk is a Calgary engineering company within the ALSYS group. It describes water-treatment and fluid-management work, including modular systems, and ALSYS identifies its design and integration capabilities. The example focuses on fitting a treatment sequence into equipment that can be delivered and operated. A modular package is not automatically suitable for every water source.",
      "kind": "stated",
      "sourceIds": [
        "oct17-source-68",
        "oct17-source-69",
        "oct17-source-70",
        "oct17-source-71"
      ]
    },
    "problem": {
      "text": "How can you fit a water-treatment process into a modular unit?",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-68",
        "oct17-source-69",
        "oct17-source-70",
        "oct17-source-71"
      ]
    },
    "offering": {
      "text": "Engineering and integration of water-treatment and fluid-management systems, including modular equipment.",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-68",
        "oct17-source-69",
        "oct17-source-70",
        "oct17-source-71"
      ]
    },
    "beneficiaries": {
      "text": "Industrial project owners and operators who need an appropriate, maintainable treatment system.",
      "kind": "interpreted",
      "sourceIds": [
        "oct17-source-68",
        "oct17-source-69",
        "oct17-source-70",
        "oct17-source-71"
      ]
    },
    "headquarters": {
      "text": "Headquarters not separately verified for this example.",
      "kind": "unresearched",
      "sourceIds": []
    },
    "localConnection": {
      "text": "Calgary engineering base; deployment sites and fabrication locations are not assumed to be in Calgary.",
      "kind": "stated",
      "sourceIds": [
        "oct17-source-68",
        "oct17-source-69",
        "oct17-source-70",
        "oct17-source-71"
      ]
    },
    "websiteSourceId": "oct17-source-69",
    "checkedOn": "2026-10-17"
  }
];

export const octoberOrganizationRoles: OrganizationRole[] = [
  {
    "organizationId": "o2-planning-design",
    "roleId": "work-landscape-design",
    "establishes": "related-work",
    "label": "O2 lists landscape architects and a Calgary junior-designer description; this role summary is editorial.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-1",
      "oct17-source-2",
      "oct17-source-3",
      "oct17-source-4",
      "oct17-source-5"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "o2-planning-design",
    "roleId": "work-spatial",
    "establishes": "related-work",
    "label": "O2’s mapping page describes GIS and visualization services.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-1",
      "oct17-source-2",
      "oct17-source-3",
      "oct17-source-4",
      "oct17-source-5"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "o2-planning-design",
    "roleId": "work-environmental-field-assessment",
    "establishes": "related-work",
    "label": "O2 lists environmental scientists; the park project supports ecological work, not a particular employee assignment.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-1",
      "oct17-source-2",
      "oct17-source-3",
      "oct17-source-4",
      "oct17-source-5"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "entuitive",
    "roleId": "work-structural-engineering",
    "establishes": "related-work",
    "label": "Entuitive identifies its structural engineering contribution and Calgary project lead.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-10",
      "oct17-source-11",
      "oct17-source-12",
      "oct17-source-13"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "entuitive",
    "roleId": "work-civil-and-construction-technology",
    "establishes": "related-work",
    "label": "Technical detailing is documented in the project account; this is not a verified vacancy.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-10",
      "oct17-source-11",
      "oct17-source-12",
      "oct17-source-13"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "entuitive",
    "roleId": "work-construction-coordination",
    "establishes": "related-work",
    "label": "The project account describes construction sequencing and transit coordination; role label is editorial.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-10",
      "oct17-source-11",
      "oct17-source-12",
      "oct17-source-13"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "phil-sebastian",
    "roleId": "work-roast-production",
    "establishes": "related-work",
    "label": "Company process description supports roasting work; no specific roaster vacancy verified.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-18",
      "oct17-source-19",
      "oct17-source-20"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "phil-sebastian",
    "roleId": "work-instrument",
    "establishes": "related-work",
    "label": "Custom equipment and reflectance measurements support the work-area connection.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-18",
      "oct17-source-19",
      "oct17-source-20"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "phil-sebastian",
    "roleId": "work-quality",
    "establishes": "related-work",
    "label": "Company describes batch checks; the general quality profile is not a job description.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-18",
      "oct17-source-19",
      "oct17-source-20"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "broken-pencil-studios",
    "roleId": "work-storyboarding-and-illustration",
    "establishes": "related-work",
    "label": "Company production article describes script-to-storyboard and illustration work.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-24",
      "oct17-source-25",
      "oct17-source-26"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "broken-pencil-studios",
    "roleId": "work-animation",
    "establishes": "related-work",
    "label": "Company article explicitly describes animation and timing.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-24",
      "oct17-source-25",
      "oct17-source-26"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "broken-pencil-studios",
    "roleId": "work-creative-production-coordination",
    "establishes": "related-work",
    "label": "Company article identifies project/development work and staged client review; profile is editorial.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-24",
      "oct17-source-25",
      "oct17-source-26"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "cpkc",
    "roleId": "work-rail-traffic-control",
    "establishes": "related-work",
    "label": "2025 company annual report explicitly identifies controllers and Calgary operations.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-29",
      "oct17-source-30",
      "oct17-source-31",
      "oct17-source-32"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "cpkc",
    "roleId": "work-railway-conductor-work",
    "establishes": "related-work",
    "label": "SAIT describes conductor tasks as related railway work; no specific Calgary CPKC vacancy or project assignment is claimed.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-33"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "cpkc",
    "roleId": "work-software",
    "establishes": "related-work",
    "label": "Adjacent network/data work; not a verified CPKC job or requirement for traffic control.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-34"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "watersmart",
    "roleId": "work-water-resource-planning",
    "establishes": "related-work",
    "label": "City roadmap and company team page support water-planning work.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-35",
      "oct17-source-36",
      "oct17-source-37"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "watersmart",
    "roleId": "work-environmental-field-assessment",
    "establishes": "related-work",
    "label": "Company lists environmental scientists; no specific vacancy or roadmap assignment is asserted.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-35",
      "oct17-source-36",
      "oct17-source-37"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "watersmart",
    "roleId": "work-planning-communication-and-engagement",
    "establishes": "related-work",
    "label": "Company lists facilitators, communicators and policy advisers; tasks are editorial.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-35",
      "oct17-source-36",
      "oct17-source-37"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "integrated-sustainability",
    "roleId": "work-process",
    "establishes": "related-work",
    "label": "Company treatment-design services support process engineering.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-39",
      "oct17-source-40",
      "oct17-source-41",
      "oct17-source-42"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "integrated-sustainability",
    "roleId": "work-water-treatment-operations",
    "establishes": "related-work",
    "label": "Company project material describes treatment operations; not necessarily a Calgary plant or vacancy.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-39",
      "oct17-source-40",
      "oct17-source-41",
      "oct17-source-42"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "integrated-sustainability",
    "roleId": "work-controls",
    "establishes": "related-work",
    "label": "Integrated systems require controls; this is an interpreted work connection, not a named employer posting.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-39",
      "oct17-source-40",
      "oct17-source-41",
      "oct17-source-42"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "trace-associates",
    "roleId": "work-environmental-field-assessment",
    "establishes": "related-work",
    "label": "Calgary office and conference author evidence support site investigations.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-45",
      "oct17-source-46",
      "oct17-source-47",
      "oct17-source-48"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "trace-associates",
    "roleId": "work-lab",
    "establishes": "related-work",
    "label": "Assessment work uses laboratory results; this does not establish that Trace employs an in-house laboratory team.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-45",
      "oct17-source-46",
      "oct17-source-47",
      "oct17-source-48"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "trace-associates",
    "roleId": "work-water-resource-planning",
    "establishes": "related-work",
    "label": "Company water and risk services support the connection; this is not a specific job posting.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-45",
      "oct17-source-46",
      "oct17-source-47",
      "oct17-source-48"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "rjc-engineers",
    "roleId": "work-building-science-investigation",
    "establishes": "related-work",
    "label": "RJC’s Calgary leadership profile explicitly describes building-envelope and roof investigation.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-49",
      "oct17-source-50"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "rjc-engineers",
    "roleId": "work-civil-and-construction-technology",
    "establishes": "related-work",
    "label": "Technical drawing and site support are general related work; not a verified RJC vacancy.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-49",
      "oct17-source-50"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "rjc-engineers",
    "roleId": "work-quality",
    "establishes": "related-work",
    "label": "Quality verification is an editorial connection to rehabilitation work, not a named RJC position.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-49",
      "oct17-source-50"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "calgary-italian-bakery",
    "roleId": "work-commercial-baking",
    "establishes": "related-work",
    "label": "Employer commercial-baker description explicitly mentions production equipment, recipes and schedules.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-52",
      "oct17-source-53",
      "oct17-source-54",
      "oct17-source-55"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "calgary-italian-bakery",
    "roleId": "work-quality",
    "establishes": "related-work",
    "label": "Employer emphasizes consistent safe products; the detailed profile is editorial.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-52",
      "oct17-source-53",
      "oct17-source-54",
      "oct17-source-55"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "calgary-italian-bakery",
    "roleId": "work-process",
    "establishes": "related-work",
    "label": "Published facility assessment supports process-improvement tasks; external partners contributed and are not assumed to be bakery employees.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-52",
      "oct17-source-53",
      "oct17-source-54",
      "oct17-source-55"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "joe-media-group",
    "roleId": "work-camera-and-image-capture",
    "establishes": "related-work",
    "label": "Company offers production; specific camera tasks are editorial rather than a verified staff job.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-58",
      "oct17-source-59",
      "oct17-source-60",
      "oct17-source-61"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "joe-media-group",
    "roleId": "work-film-and-video-editing",
    "establishes": "related-work",
    "label": "Company describes editing and post-production services.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-58",
      "oct17-source-59",
      "oct17-source-60",
      "oct17-source-61"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "joe-media-group",
    "roleId": "work-colour-finishing",
    "establishes": "related-work",
    "label": "Company about page names colour work; task wording is editorial.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-58",
      "oct17-source-59",
      "oct17-source-60",
      "oct17-source-61"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "cbl-bakeries-cinnaroll",
    "roleId": "work-commercial-baking",
    "establishes": "related-work",
    "label": "Company describes manufacturing and production teams; no current vacancy claimed.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-62",
      "oct17-source-63"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "cbl-bakeries-cinnaroll",
    "roleId": "work-quality",
    "establishes": "related-work",
    "label": "Company describes quality assurance; no named job description captured.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-62",
      "oct17-source-63"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "cbl-bakeries-cinnaroll",
    "roleId": "work-food",
    "establishes": "related-work",
    "label": "Company describes product development; no particular scientist role or degree requirement is asserted.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-62",
      "oct17-source-63"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "isl-engineering",
    "roleId": "work-civil-and-construction-technology",
    "establishes": "related-work",
    "label": "Project account describes planning/design/construction and engineering disciplines.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-64",
      "oct17-source-65",
      "oct17-source-66",
      "oct17-source-67"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "isl-engineering",
    "roleId": "work-spatial",
    "establishes": "related-work",
    "label": "Site and route work support mapping; no specific surveyor posting is claimed.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-64",
      "oct17-source-65",
      "oct17-source-66",
      "oct17-source-67"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "isl-engineering",
    "roleId": "work-environmental-field-assessment",
    "establishes": "related-work",
    "label": "Project account identifies environmental management and creek work.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-64",
      "oct17-source-65",
      "oct17-source-66",
      "oct17-source-67"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "clearbakk",
    "roleId": "work-process",
    "establishes": "related-work",
    "label": "ClearBakk describes process design and engineering services.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-68",
      "oct17-source-69",
      "oct17-source-70",
      "oct17-source-71"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "clearbakk",
    "roleId": "work-mechanical",
    "establishes": "related-work",
    "label": "Modular integration supports mechanical layout work; generic profile.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-68",
      "oct17-source-69",
      "oct17-source-70",
      "oct17-source-71"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "organizationId": "clearbakk",
    "roleId": "work-controls",
    "establishes": "related-work",
    "label": "Controls connection is editorial to integrated equipment; not an employer-listed vacancy.",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-68",
      "oct17-source-69",
      "oct17-source-70",
      "oct17-source-71"
    ],
    "checkedOn": "2026-10-17"
  }
];

export const octoberRoles: RoleProfile[] = [
  {
    "id": "work-landscape-design",
    "title": "Landscape design",
    "summary": "Shape outdoor spaces so water, habitat and human uses can work together..",
    "explanation": "Shape outdoor spaces so water, habitat and human uses can work together.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Read the site and identify competing needs."
      },
      {
        "title": "Test and compare",
        "detail": "Develop plans and sections that show landforms and planting."
      },
      {
        "title": "Document and improve",
        "detail": "Review details with engineers, ecologists and construction teams."
      }
    ],
    "collaborators": [
      "Ecologists, planners, engineers and contractors"
    ],
    "classroomConnection": "A change to a landform changes paths for both water and people."
  },
  {
    "id": "work-environmental-field-assessment",
    "title": "Environmental field assessment",
    "summary": "Collect and interpret evidence about a place before recommending an action..",
    "explanation": "Collect and interpret evidence about a place before recommending an action.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Plan observations or samples around a clear question."
      },
      {
        "title": "Test and compare",
        "detail": "Record locations, methods and conditions consistently."
      },
      {
        "title": "Document and improve",
        "detail": "Explain the limits of the evidence and the next useful check."
      }
    ],
    "collaborators": [
      "Laboratory staff, engineers and project planners"
    ],
    "classroomConnection": "A result has meaning only in the context of how and where it was collected."
  },
  {
    "id": "work-structural-engineering",
    "title": "Structural engineering",
    "summary": "Work out how a structure transfers loads through members and connections to its supports..",
    "explanation": "Work out how a structure transfers loads through members and connections to its supports.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Identify loads and constraints in the design brief."
      },
      {
        "title": "Test and compare",
        "detail": "Develop and check a structural model and details."
      },
      {
        "title": "Document and improve",
        "detail": "Coordinate construction-stage requirements with the project team."
      }
    ],
    "collaborators": [
      "Architects, technologists, builders and reviewers"
    ],
    "classroomConnection": "Forces must have a continuous route to supports; an attractive shape alone is not evidence of performance."
  },
  {
    "id": "work-civil-and-construction-technology",
    "title": "Civil and construction technology",
    "summary": "Turn project requirements into usable drawings, quantities and checks..",
    "explanation": "Turn project requirements into usable drawings, quantities and checks.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Prepare technical drawings using measured site information."
      },
      {
        "title": "Test and compare",
        "detail": "Check dimensions and interfaces between design disciplines."
      },
      {
        "title": "Document and improve",
        "detail": "Support construction records and field verification."
      }
    ],
    "collaborators": [
      "Engineers, surveyors and site teams"
    ],
    "classroomConnection": "Scale and accurate measurements connect a drawing to the real location."
  },
  {
    "id": "work-construction-coordination",
    "title": "Construction coordination",
    "summary": "Help different teams work from compatible information and an achievable sequence..",
    "explanation": "Help different teams work from compatible information and an achievable sequence.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Track design changes and unresolved interfaces."
      },
      {
        "title": "Test and compare",
        "detail": "Compare construction stages with access and operating constraints."
      },
      {
        "title": "Document and improve",
        "detail": "Communicate decisions and confirm that the correct documents reach the field."
      }
    ],
    "collaborators": [
      "Designers, contractors, owners and operations staff"
    ],
    "classroomConnection": "A system that works at the end may need different support while it is being assembled."
  },
  {
    "id": "work-roast-production",
    "title": "Roast production",
    "summary": "Operate a controlled food-processing sequence and compare the product with its intended result..",
    "explanation": "Operate a controlled food-processing sequence and compare the product with its intended result.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Track batch identity and process settings."
      },
      {
        "title": "Test and compare",
        "detail": "Record observations and measurements during production."
      },
      {
        "title": "Document and improve",
        "detail": "Report variation and help compare trial adjustments."
      }
    ],
    "collaborators": [
      "Quality staff, technicians and production planners"
    ],
    "classroomConnection": "Repeating a setting is not the same as verifying a repeatable result."
  },
  {
    "id": "work-storyboarding-and-illustration",
    "title": "Storyboarding and illustration",
    "summary": "Decide what an audience needs to see before the final sequence is produced..",
    "explanation": "Decide what an audience needs to see before the final sequence is produced.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Translate a message into visual scenes."
      },
      {
        "title": "Test and compare",
        "detail": "Check order, viewpoint and transitions using rough drawings."
      },
      {
        "title": "Document and improve",
        "detail": "Revise the sequence after feedback before detailed animation."
      }
    ],
    "collaborators": [
      "Writers, animators and clients"
    ],
    "classroomConnection": "A model needs to preserve the relationship it is intended to explain."
  },
  {
    "id": "work-animation",
    "title": "Animation",
    "summary": "Create motion from planned images, models and timing decisions..",
    "explanation": "Create motion from planned images, models and timing decisions.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Set key positions and the time between them."
      },
      {
        "title": "Test and compare",
        "detail": "Adjust spacing and transitions to communicate movement."
      },
      {
        "title": "Document and improve",
        "detail": "Review the result against the story and technical requirements."
      }
    ],
    "collaborators": [
      "Illustrators, directors and sound specialists"
    ],
    "classroomConnection": "Spacing at equal time intervals can communicate constant speed or changing speed."
  },
  {
    "id": "work-creative-production-coordination",
    "title": "Creative production coordination",
    "summary": "Help a project move from a communication brief to a deliverable that can be reviewed..",
    "explanation": "Help a project move from a communication brief to a deliverable that can be reviewed.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Clarify audience, scope and review milestones."
      },
      {
        "title": "Test and compare",
        "detail": "Coordinate feedback between creative and client teams."
      },
      {
        "title": "Document and improve",
        "detail": "Track revisions and confirm delivery requirements."
      }
    ],
    "collaborators": [
      "Writers, designers, animators and clients"
    ],
    "classroomConnection": "Defining the question first helps distinguish useful evidence from extra detail."
  },
  {
    "id": "work-rail-traffic-control",
    "title": "Rail traffic control",
    "summary": "Coordinate railway movements and crews within formal operating systems and rules..",
    "explanation": "Coordinate railway movements and crews within formal operating systems and rules.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Monitor movement information and operating constraints."
      },
      {
        "title": "Test and compare",
        "detail": "Coordinate plans and communicate with railway teams."
      },
      {
        "title": "Document and improve",
        "detail": "Respond to changes using the applicable procedures and authority."
      }
    ],
    "collaborators": [
      "Train crews, operations managers and maintenance teams"
    ],
    "classroomConnection": "Time and position together reveal conflicts that a map alone can miss."
  },
  {
    "id": "work-railway-conductor-work",
    "title": "Railway conductor work",
    "summary": "Support train movements and handling of rail vehicles through trained railway operations..",
    "explanation": "Support train movements and handling of rail vehicles through trained railway operations.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Apply operating procedures during assigned movements."
      },
      {
        "title": "Test and compare",
        "detail": "Communicate with other railway workers."
      },
      {
        "title": "Document and improve",
        "detail": "Check and document required operational information."
      }
    ],
    "collaborators": [
      "Locomotive crews, controllers and yard teams"
    ],
    "classroomConnection": "The plan and the physical movement must agree; conductor and dispatcher are different roles."
  },
  {
    "id": "work-water-resource-planning",
    "title": "Water-resource planning",
    "summary": "Compare water availability, demand and possible responses over time..",
    "explanation": "Compare water availability, demand and possible responses over time.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Organize supply, use and monitoring information."
      },
      {
        "title": "Test and compare",
        "detail": "Test alternative assumptions in scenarios."
      },
      {
        "title": "Document and improve",
        "detail": "Explain trade-offs, uncertainty and priorities."
      }
    ],
    "collaborators": [
      "Hydrologists, engineers, policy specialists and communities"
    ],
    "classroomConnection": "A model is a way to test assumptions, not a guarantee about the future."
  },
  {
    "id": "work-planning-communication-and-engagement",
    "title": "Planning communication and engagement",
    "summary": "Help people with different needs understand and contribute to a planning process..",
    "explanation": "Help people with different needs understand and contribute to a planning process.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Explain scenarios and technical options in accessible language."
      },
      {
        "title": "Test and compare",
        "detail": "Gather and document questions and priorities."
      },
      {
        "title": "Document and improve",
        "detail": "Make clear what the evidence supports and where choices remain."
      }
    ],
    "collaborators": [
      "Technical teams, decision-makers and community participants"
    ],
    "classroomConnection": "A number can inform a decision without deciding whose needs take priority."
  },
  {
    "id": "work-water-treatment-operations",
    "title": "Water-treatment operations",
    "summary": "Keep a treatment process working within its specified conditions and record how it performs..",
    "explanation": "Keep a treatment process working within its specified conditions and record how it performs.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Monitor process readings and output tests."
      },
      {
        "title": "Test and compare",
        "detail": "Follow operating and maintenance procedures."
      },
      {
        "title": "Document and improve",
        "detail": "Document deviations and coordinate investigation."
      }
    ],
    "collaborators": [
      "Process engineers, laboratories and maintenance teams"
    ],
    "classroomConnection": "Stable operation matters even when average results look acceptable."
  },
  {
    "id": "work-building-science-investigation",
    "title": "Building-science investigation",
    "summary": "Investigate how a building enclosure manages heat, air and water..",
    "explanation": "Investigate how a building enclosure manages heat, air and water.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Inspect conditions and record where problems appear."
      },
      {
        "title": "Test and compare",
        "detail": "Compare observations with drawings and possible movement paths."
      },
      {
        "title": "Document and improve",
        "detail": "Help develop and verify repairs with the design team."
      }
    ],
    "collaborators": [
      "Owners, technologists, engineers and trades"
    ],
    "classroomConnection": "Different mechanisms can create similar visible symptoms."
  },
  {
    "id": "work-commercial-baking",
    "title": "Commercial baking",
    "summary": "Produce baked goods through a controlled sequence of preparation, processing and handling..",
    "explanation": "Produce baked goods through a controlled sequence of preparation, processing and handling.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Follow recipes and production schedules."
      },
      {
        "title": "Test and compare",
        "detail": "Use and check production equipment within trained procedures."
      },
      {
        "title": "Document and improve",
        "detail": "Observe product consistency and communicate defects or process variation."
      }
    ],
    "collaborators": [
      "Production staff, quality teams and maintenance workers"
    ],
    "classroomConnection": "Ratios, timing and temperature matter, but quality must still be checked."
  },
  {
    "id": "work-camera-and-image-capture",
    "title": "Camera and image capture",
    "summary": "Record images that serve a production’s visual and storytelling requirements..",
    "explanation": "Record images that serve a production’s visual and storytelling requirements.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Plan framing and camera setup with the production team."
      },
      {
        "title": "Test and compare",
        "detail": "Check exposure and consistency across takes."
      },
      {
        "title": "Document and improve",
        "detail": "Record information needed for editing and handoff."
      }
    ],
    "collaborators": [
      "Directors, lighting teams and editors"
    ],
    "classroomConnection": "The recorded image depends on both the light and how it is captured."
  },
  {
    "id": "work-film-and-video-editing",
    "title": "Film and video editing",
    "summary": "Build a sequence from selected footage to communicate a coherent idea..",
    "explanation": "Build a sequence from selected footage to communicate a coherent idea.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Review and organize available footage."
      },
      {
        "title": "Test and compare",
        "detail": "Choose cuts, order and timing for the intended story."
      },
      {
        "title": "Document and improve",
        "detail": "Check continuity and revise against feedback."
      }
    ],
    "collaborators": [
      "Directors, producers, colourists and sound teams"
    ],
    "classroomConnection": "Sequence can change interpretation even when the individual images stay the same."
  },
  {
    "id": "work-colour-finishing",
    "title": "Colour finishing",
    "summary": "Work on the appearance and consistency of images during post-production..",
    "explanation": "Work on the appearance and consistency of images during post-production.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Compare shots using the agreed visual reference."
      },
      {
        "title": "Test and compare",
        "detail": "Adjust recorded colour and tonal relationships."
      },
      {
        "title": "Document and improve",
        "detail": "Check the sequence and deliverable with the production team."
      }
    ],
    "collaborators": [
      "Editors, cinematographers and directors"
    ],
    "classroomConnection": "Changing the appearance of an image is different from changing the original event."
  }
];

export const octoberPathways: LearningPathway[] = [
  {
    "id": "oct17-route-university-of-calgary-master-of-landscape-architecture",
    "provider": "University of Calgary",
    "name": "Master of Landscape Architecture",
    "routeType": "Graduate degree",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Study landscape design, land stewardship and community needs.",
    "roleRationale": [
      {
        "roleId": "work-landscape-design",
        "why": "A longer-term professional education route after undergraduate study; registration is separate. A change to a landform changes paths for both water and people."
      }
    ],
    "entryNote": "Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
    "urlSourceId": "oct17-source-7",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-7"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-route-sait-geomatics-engineering-technology",
    "provider": "SAIT",
    "name": "Geomatics Engineering Technology",
    "routeType": "Diploma",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Learn surveying, GIS, positioning and remote sensing.",
    "roleRationale": [
      {
        "roleId": "work-spatial",
        "why": "Supports spatial measurement and mapping data work. Models can be detailed while still containing gaps or misaligned measurements."
      }
    ],
    "entryNote": "Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
    "urlSourceId": "oct17-source-8",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-8"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-route-sait-environmental-technology",
    "provider": "SAIT",
    "name": "Environmental Technology",
    "routeType": "Diploma",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Study environmental monitoring, assessment and field methods.",
    "roleRationale": [
      {
        "roleId": "work-environmental-field-assessment",
        "why": "Supports field and laboratory work in environmental projects. A result has meaning only in the context of how and where it was collected."
      }
    ],
    "entryNote": "Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
    "urlSourceId": "oct17-source-9",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-9"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-route-university-of-calgary-civil-engineering",
    "provider": "University of Calgary",
    "name": "Civil Engineering",
    "routeType": "Bachelor’s degree",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Study the design and operation of structures, transportation and water infrastructure.",
    "roleRationale": [
      {
        "roleId": "work-structural-engineering",
        "why": "A degree foundation for engineering work; professional registration and supervised experience are separate. Forces must have a continuous route to supports; an attractive shape alone is not evidence of performance."
      },
      {
        "roleId": "work-construction-coordination",
        "why": "A degree foundation for engineering work; professional registration and supervised experience are separate. A system that works at the end may need different support while it is being assembled."
      },
      {
        "roleId": "work-water-resource-planning",
        "why": "A degree foundation for engineering work; professional registration and supervised experience are separate. A model is a way to test assumptions, not a guarantee about the future."
      },
      {
        "roleId": "work-building-science-investigation",
        "why": "A degree foundation for engineering work; professional registration and supervised experience are separate. Different mechanisms can create similar visible symptoms."
      },
      {
        "roleId": "work-civil-and-construction-technology",
        "why": "A degree foundation for engineering work; professional registration and supervised experience are separate. Scale and accurate measurements connect a drawing to the real location."
      }
    ],
    "entryNote": "Check current admissions and program requirements. A degree is not automatic professional licensure.",
    "urlSourceId": "oct17-source-15",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-15"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-route-sait-civil-engineering-technology-municipal-major",
    "provider": "SAIT",
    "name": "Civil Engineering Technology, Municipal Major",
    "routeType": "Diploma",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Study municipal infrastructure, design and drafting.",
    "roleRationale": [
      {
        "roleId": "work-civil-and-construction-technology",
        "why": "Technical design and project delivery; not professional engineer licensure. Scale and accurate measurements connect a drawing to the real location."
      },
      {
        "roleId": "work-construction-coordination",
        "why": "Technical design and project delivery; not professional engineer licensure. A system that works at the end may need different support while it is being assembled."
      },
      {
        "roleId": "work-quality",
        "why": "Technical design and project delivery; not professional engineer licensure. Repeated results need both measurements and records of the conditions that produced them."
      }
    ],
    "entryNote": "Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
    "urlSourceId": "oct17-source-16",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-16"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-route-sait-architectural-technologies",
    "provider": "SAIT",
    "name": "Architectural Technologies",
    "routeType": "Diploma",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Study building design, technical drawings and construction systems.",
    "roleRationale": [
      {
        "roleId": "work-civil-and-construction-technology",
        "why": "Supports building-envelope detailing and technical coordination. Scale and accurate measurements connect a drawing to the real location."
      },
      {
        "roleId": "work-construction-coordination",
        "why": "Supports building-envelope detailing and technical coordination. A system that works at the end may need different support while it is being assembled."
      },
      {
        "roleId": "work-building-science-investigation",
        "why": "Supports building-envelope detailing and technical coordination. Different mechanisms can create similar visible symptoms."
      },
      {
        "roleId": "work-quality",
        "why": "Supports building-envelope detailing and technical coordination. Repeated results need both measurements and records of the conditions that produced them."
      }
    ],
    "entryNote": "Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
    "urlSourceId": "oct17-source-17",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-17"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-route-sait-instrumentation-engineering-technology",
    "provider": "SAIT",
    "name": "Instrumentation Engineering Technology",
    "routeType": "Diploma",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Work with measurement devices, calibration and automated process controls.",
    "roleRationale": [
      {
        "roleId": "work-instrument",
        "why": "Supports process testing, troubleshooting and control systems. Measurement uncertainty is part of using a tool responsibly."
      },
      {
        "roleId": "work-controls",
        "why": "Supports process testing, troubleshooting and control systems. Feedback uses a measured result to inform the next action."
      }
    ],
    "entryNote": "Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
    "urlSourceId": "oct17-source-21",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-21"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-route-sait-chemical-laboratory-technology",
    "provider": "SAIT",
    "name": "Chemical Laboratory Technology",
    "routeType": "Diploma",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Practice chemical analysis, sample preparation and analytical instrumentation.",
    "roleRationale": [
      {
        "roleId": "work-quality",
        "why": "Supports laboratory testing and reliable measurement. Repeated results need both measurements and records of the conditions that produced them."
      },
      {
        "roleId": "work-lab",
        "why": "Supports laboratory testing and reliable measurement. A repeatable method and a fair comparison matter as much as a single impressive number."
      },
      {
        "roleId": "work-food",
        "why": "Supports laboratory testing and reliable measurement. Molecules and mixtures help explain why two ingredients can behave differently."
      }
    ],
    "entryNote": "Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
    "urlSourceId": "oct17-source-22",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-22"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-route-sait-mechanical-engineering-technology",
    "provider": "SAIT",
    "name": "Mechanical Engineering Technology",
    "routeType": "Diploma",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Study mechanical systems, design and manufacturing, with specialization options.",
    "roleRationale": [
      {
        "roleId": "work-roast-production",
        "why": "Mechanical study supports understanding equipment and process measurements. It is adjacent technical preparation, not a coffee-roasting qualification or employer requirement."
      },
      {
        "roleId": "work-instrument",
        "why": "Supports component design, prototyping and equipment work. Measurement uncertainty is part of using a tool responsibly."
      },
      {
        "roleId": "work-mechanical",
        "why": "Supports component design, prototyping and equipment work. Geometry, forces and material properties shape real design trade-offs."
      }
    ],
    "entryNote": "Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
    "urlSourceId": "oct17-source-23",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-23"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-route-auarts-bachelor-of-design",
    "provider": "AUArts",
    "name": "Bachelor of Design",
    "routeType": "Bachelor’s degree",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Develop visual communication through studio-based design work.",
    "roleRationale": [
      {
        "roleId": "work-storyboarding-and-illustration",
        "why": "Supports illustration and visual storytelling; portfolio requirements apply. A model needs to preserve the relationship it is intended to explain."
      },
      {
        "roleId": "work-animation",
        "why": "Supports illustration and visual storytelling; portfolio requirements apply. Spacing at equal time intervals can communicate constant speed or changing speed."
      },
      {
        "roleId": "work-colour-finishing",
        "why": "Supports illustration and visual storytelling; portfolio requirements apply. Changing the appearance of an image is different from changing the original event."
      }
    ],
    "entryNote": "Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
    "urlSourceId": "oct17-source-27",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-27"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-route-sait-film-and-video-production",
    "provider": "SAIT",
    "name": "Film and Video Production",
    "routeType": "Diploma",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Practise production and post-production through film projects.",
    "roleRationale": [
      {
        "roleId": "work-animation",
        "why": "Supports camera, editing and production work; a portfolio remains important. Spacing at equal time intervals can communicate constant speed or changing speed."
      },
      {
        "roleId": "work-creative-production-coordination",
        "why": "Supports camera, editing and production work; a portfolio remains important. Defining the question first helps distinguish useful evidence from extra detail."
      },
      {
        "roleId": "work-camera-and-image-capture",
        "why": "Supports camera, editing and production work; a portfolio remains important. The recorded image depends on both the light and how it is captured."
      },
      {
        "roleId": "work-film-and-video-editing",
        "why": "Supports camera, editing and production work; a portfolio remains important. Sequence can change interpretation even when the individual images stay the same."
      },
      {
        "roleId": "work-colour-finishing",
        "why": "Supports camera, editing and production work; a portfolio remains important. Changing the appearance of an image is different from changing the original event."
      }
    ],
    "entryNote": "Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
    "urlSourceId": "oct17-source-28",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-28"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-route-cpkc-employer-rail-traffic-controller-training",
    "provider": "CPKC",
    "name": "Employer rail traffic controller training",
    "routeType": "Employer training after selection",
    "location": "Calgary operations context; historical employer description",
    "relevance": "local",
    "learns": "A historical CPKC description outlined six months of company training for selected controller applicants, including qualification in railway operating rules.",
    "roleRationale": [
      {
        "roleId": "work-rail-traffic-control",
        "why": "Directly relates to rail traffic control; this is not SAIT conductor training. Time and position together reveal conflicts that a map alone can miss."
      }
    ],
    "entryNote": "The indexed employer description listed high school completion or equivalent and employer selection and qualification requirements. The original job page is now unavailable, and its Montreal listing metadata conflicted with Calgary in the body. No open intake, current duration or present-day requirements are promised; check the current employer posting.",
    "urlSourceId": "oct17-source-32",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-32"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-route-sait-railway-conductor",
    "provider": "SAIT",
    "name": "Railway Conductor",
    "routeType": "Certificate",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Study railway operating procedures and train handling responsibilities.",
    "roleRationale": [
      {
        "roleId": "work-railway-conductor-work",
        "why": "A route toward conductor work, not a rail traffic controller qualification or hiring guarantee. The plan and the physical movement must agree; conductor and dispatcher are different roles."
      }
    ],
    "entryNote": "Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
    "urlSourceId": "oct17-source-33",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-33"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-route-sait-software-development",
    "provider": "SAIT",
    "name": "Software Development",
    "routeType": "Diploma",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Learn to design, test and build software across front-end and back-end systems.",
    "roleRationale": [
      {
        "roleId": "work-software",
        "why": "A foundation for junior development or testing; senior roles require further experience. An algorithm’s output depends on the quality and meaning of its inputs."
      }
    ],
    "entryNote": "Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
    "urlSourceId": "oct17-source-34",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-34"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-route-sait-integrated-water-management",
    "provider": "SAIT",
    "name": "Integrated Water Management",
    "routeType": "Diploma",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Study water systems, monitoring and management.",
    "roleRationale": [
      {
        "roleId": "work-water-resource-planning",
        "why": "Water sampling, infrastructure and planning support. A model is a way to test assumptions, not a guarantee about the future."
      },
      {
        "roleId": "work-planning-communication-and-engagement",
        "why": "Water-management study gives context for explaining water choices and working with stakeholders. It does not itself qualify a specialist facilitator."
      },
      {
        "roleId": "work-water-treatment-operations",
        "why": "Water sampling, infrastructure and planning support. Stable operation matters even when average results look acceptable."
      }
    ],
    "entryNote": "Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
    "urlSourceId": "oct17-source-38",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-38"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-route-university-of-calgary-chemical-engineering",
    "provider": "University of Calgary",
    "name": "Chemical Engineering",
    "routeType": "Bachelor’s degree",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Study how to transform raw materials and design production processes.",
    "roleRationale": [
      {
        "roleId": "work-process",
        "why": "Supports process design and scale-up; experience and professional requirements remain separate. Conservation of matter and energy connects classroom calculations to process decisions."
      }
    ],
    "entryNote": "Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
    "urlSourceId": "oct17-source-44",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-44"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-route-sait-baking-and-pastry-arts",
    "provider": "SAIT",
    "name": "Baking and Pastry Arts",
    "routeType": "Diploma",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Practise bakery and pastry production and product quality.",
    "roleRationale": [
      {
        "roleId": "work-commercial-baking",
        "why": "Supports commercial baking; apprenticeship registration and workplace requirements are separate. Ratios, timing and temperature matter, but quality must still be checked."
      },
      {
        "roleId": "work-food",
        "why": "Supports commercial baking; apprenticeship registration and workplace requirements are separate. Molecules and mixtures help explain why two ingredients can behave differently."
      }
    ],
    "entryNote": "Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
    "urlSourceId": "oct17-source-56",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-56"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-route-alberta-baker-apprenticeship-education",
    "provider": "Alberta Baker apprenticeship education",
    "name": "Alberta Baker apprenticeship education",
    "routeType": "Apprenticeship",
    "location": "Alberta; workplace and classroom arrangements must be confirmed",
    "relevance": "local",
    "learns": "Combine structured trade education with workplace learning in baking.",
    "roleRationale": [
      {
        "roleId": "work-commercial-baking",
        "why": "A trade route distinct from simply completing a diploma; registration and workplace requirements apply. Ratios, timing and temperature matter, but quality must still be checked."
      }
    ],
    "entryNote": "Use Tradesecrets to verify current entry, sponsorship and work-hour requirements. No specific Calgary employer placement is promised.",
    "urlSourceId": "oct17-source-57",
    "kind": "interpreted",
    "sourceIds": [
      "oct17-source-57"
    ],
    "checkedOn": "2026-10-17"
  }
];

export const octoberJobs: JobExample[] = [
  {
    "id": "cgy-041-j1",
    "title": "Junior Landscape Designer",
    "employer": "O2 Planning + Design",
    "employerNote": {
      "text": "Featured employer; the posting does not establish assignment to the featured project.",
      "kind": "observed",
      "sourceIds": [
        "oct17-source-4"
      ]
    },
    "roleIds": [
      "work-landscape-design"
    ],
    "location": "Calgary",
    "level": "Junior; employer requested at least one year of relevant experience",
    "relevance": "local",
    "postingSourceId": "oct17-source-4",
    "capturedOn": "2026-10-17",
    "summary": "Help a multidisciplinary team turn landscape concepts into drawings and visual presentations.",
    "duties": [
      "Contribute to concept designs, reports and construction documentation.",
      "Prepare 3D visualizations and renderings.",
      "Develop technical detailing with the project team."
    ],
    "skills": [
      "Landscape architecture or related university degree.",
      "At least one year of relevant experience.",
      "Graphic communication and CAD/3D software skills; eligibility for AALA Associate membership."
    ],
    "classroomConnection": "Shows how the landscape design in the park story becomes documented plans. This posting does not establish assignment to Dale Hodges Park.",
    "limitation": "Undated employer role example — application status unverified, checked 17 October 2026",
    "approval": {
      "packetId": "calgary-full-examples-2026-10-17",
      "candidateId": "CGY-041-J1",
      "copyVersion": 1
    },
    "status": {
      "kind": "unknown",
      "checkedOn": "2026-10-17",
      "note": "Undated employer role example — application status unverified, checked 17 October 2026"
    },
    "kind": "observed",
    "sourceIds": [
      "oct17-source-4"
    ]
  },
  {
    "id": "cgy-050-j1",
    "title": "Skilled Commercial Bakers",
    "employer": "Calgary Italian Bakery",
    "employerNote": {
      "text": "Featured employer; the posting does not establish assignment to the featured project.",
      "kind": "observed",
      "sourceIds": [
        "oct17-source-54"
      ]
    },
    "roleIds": [
      "work-commercial-baking"
    ],
    "location": "Calgary",
    "level": "Skilled; years of experience and specific credential not stated",
    "relevance": "local",
    "postingSourceId": "oct17-source-54",
    "capturedOn": "2026-10-17",
    "summary": "Produce standardized baked goods using commercial mixing and baking equipment.",
    "duties": [
      "Use high-volume mixing machines, ovens and related equipment.",
      "Follow production schedules.",
      "Follow recipes for consistent output."
    ],
    "skills": [
      "Following production instructions and recipes.",
      "Commercial equipment work described by employer.",
      "Specific training, experience minimum and pay not stated."
    ],
    "classroomConnection": "Production tasks connect to where losses can occur in the bakery process. The posting does not say this employee works on the historical waste-reduction project.",
    "limitation": "Employer page accepting applications when checked 17 October 2026; posting date and deadline not stated",
    "approval": {
      "packetId": "calgary-full-examples-2026-10-17",
      "candidateId": "CGY-050-J1",
      "copyVersion": 1
    },
    "status": {
      "kind": "open",
      "checkedOn": "2026-10-17",
      "note": "Employer page accepting applications when checked 17 October 2026; posting date and deadline not stated"
    },
    "kind": "observed",
    "sourceIds": [
      "oct17-source-54"
    ]
  }
];

export const octoberDetails: ExampleDetails[] = [
  {
    "id": "o2-planning-design-details",
    "exampleSlug": "o2-planning-design",
    "organizationId": "o2-planning-design",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "o2-planning-design",
      "subtitle": "A park can be part of a city’s water system.",
      "caption": "A park can be part of a city’s water system.",
      "steps": [
        {
          "text": "Runoff carries water and suspended material from streets into drainage systems.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-1",
            "oct17-source-2",
            "oct17-source-3",
            "oct17-source-4",
            "oct17-source-5",
            "oct17-source-6"
          ]
        },
        {
          "text": "At Dale Hodges Park, water follows a designed route through a landscape rather than remaining hidden in pipes.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-1",
            "oct17-source-2",
            "oct17-source-3",
            "oct17-source-4",
            "oct17-source-5",
            "oct17-source-6"
          ]
        },
        {
          "text": "Slower flow can allow some suspended particles to settle. Different treatment stages address different parts of the problem.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-1",
            "oct17-source-2",
            "oct17-source-3",
            "oct17-source-4",
            "oct17-source-5",
            "oct17-source-6"
          ]
        },
        {
          "text": "The landscape also supports habitat and recreation. A useful design must account for these needs together.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-1",
            "oct17-source-2",
            "oct17-source-3",
            "oct17-source-4",
            "oct17-source-5",
            "oct17-source-6"
          ]
        }
      ],
      "diagramAlt": "Conceptual teaching illustration for How can a park help clean stormwater before it reaches a river? Four numbered stages and arrows correspond to the explanation below.",
      "diagramProvenance": "Generated fictional teaching illustration; source-grounded editorial simplification. Not a company process specification. Prompts and review: design/example-expansion-2026-10-17/.",
      "discussion": "Would the clearest-looking water necessarily be the safest water?"
    },
    "roleIds": [
      "work-landscape-design",
      "work-spatial",
      "work-environmental-field-assessment"
    ],
    "pathwayIds": [
      "oct17-route-university-of-calgary-master-of-landscape-architecture",
      "oct17-route-sait-geomatics-engineering-technology",
      "oct17-route-sait-environmental-technology"
    ],
    "jobIds": [
      "cgy-041-j1"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "id": "entuitive-details",
    "exampleSlug": "entuitive",
    "organizationId": "entuitive",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "entuitive",
      "subtitle": "The space below a building can be just as important as the rooms inside it.",
      "caption": "The space below a building can be just as important as the rooms inside it.",
      "steps": [
        {
          "text": "A building’s weight and the people inside create loads that must reach the ground.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-10",
            "oct17-source-11",
            "oct17-source-12",
            "oct17-source-13",
            "oct17-source-14"
          ]
        },
        {
          "text": "An active rail corridor limits where supports can go. The structure has to span the space.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-10",
            "oct17-source-11",
            "oct17-source-12",
            "oct17-source-13",
            "oct17-source-14"
          ]
        },
        {
          "text": "Truss members and connections transfer forces along a designed load path. Construction stages need their own checks.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-10",
            "oct17-source-11",
            "oct17-source-12",
            "oct17-source-13",
            "oct17-source-14"
          ]
        },
        {
          "text": "Engineers coordinate the drawings and sequence with builders and transit staff so the permanent design can be built.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-10",
            "oct17-source-11",
            "oct17-source-12",
            "oct17-source-13",
            "oct17-source-14"
          ]
        }
      ],
      "diagramAlt": "Conceptual teaching illustration for How can you support a library above a moving train? Four numbered stages and arrows correspond to the explanation below.",
      "diagramProvenance": "Generated fictional teaching illustration; source-grounded editorial simplification. Not a company process specification. Prompts and review: design/example-expansion-2026-10-17/.",
      "discussion": "Why might a structure that works when complete need extra support during construction?"
    },
    "roleIds": [
      "work-structural-engineering",
      "work-civil-and-construction-technology",
      "work-construction-coordination"
    ],
    "pathwayIds": [
      "oct17-route-university-of-calgary-civil-engineering",
      "oct17-route-sait-civil-engineering-technology-municipal-major",
      "oct17-route-sait-architectural-technologies"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-17"
  },
  {
    "id": "phil-sebastian-details",
    "exampleSlug": "phil-sebastian",
    "organizationId": "phil-sebastian",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "phil-sebastian",
      "subtitle": "Consistency depends on checking what happened, not just repeating a recipe.",
      "caption": "Consistency depends on checking what happened, not just repeating a recipe.",
      "steps": [
        {
          "text": "A roast changes a batch of green coffee through heating. Time and temperature matter, but they do not describe every property of the result.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-18",
            "oct17-source-19",
            "oct17-source-20",
            "oct17-source-14"
          ]
        },
        {
          "text": "The company says it records roast data and checks samples with a reflectometer.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-18",
            "oct17-source-19",
            "oct17-source-20",
            "oct17-source-14"
          ]
        },
        {
          "text": "A reflectance reading measures how light returns from the sample under specified conditions; it is not a direct measurement of flavour.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-18",
            "oct17-source-19",
            "oct17-source-20",
            "oct17-source-14"
          ]
        },
        {
          "text": "Comparing process records with product measurements can reveal variation and guide the next controlled test.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-18",
            "oct17-source-19",
            "oct17-source-20",
            "oct17-source-14"
          ]
        }
      ],
      "diagramAlt": "Conceptual teaching illustration for How can measurements help make a roast repeatable? Four numbered stages and arrows correspond to the explanation below.",
      "diagramProvenance": "Generated fictional teaching illustration; source-grounded editorial simplification. Not a company process specification. Prompts and review: design/example-expansion-2026-10-17/.",
      "discussion": "If two batches have the same recorded temperature history, what else would you want to measure?"
    },
    "roleIds": [
      "work-roast-production",
      "work-instrument",
      "work-quality"
    ],
    "pathwayIds": [
      "oct17-route-sait-instrumentation-engineering-technology",
      "oct17-route-sait-chemical-laboratory-technology",
      "oct17-route-sait-mechanical-engineering-technology"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-17"
  },
  {
    "id": "broken-pencil-studios-details",
    "exampleSlug": "broken-pencil-studios",
    "organizationId": "broken-pencil-studios",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "broken-pencil-studios",
      "subtitle": "A useful animation helps an audience follow relationships that a camera cannot easily show.",
      "caption": "A useful animation helps an audience follow relationships that a camera cannot easily show.",
      "steps": [
        {
          "text": "Start with the audience and one question the explanation must answer.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-24",
            "oct17-source-25",
            "oct17-source-26",
            "oct17-source-14"
          ]
        },
        {
          "text": "Turn the idea into a script and storyboard that show the sequence before polishing the artwork.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-24",
            "oct17-source-25",
            "oct17-source-26",
            "oct17-source-14"
          ]
        },
        {
          "text": "Use timing, viewpoint and visual choices to make a relationship visible. A model may simplify reality, so the simplification should be deliberate.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-24",
            "oct17-source-25",
            "oct17-source-26",
            "oct17-source-14"
          ]
        },
        {
          "text": "Review whether a viewer understood the intended idea. Revise a confusing scene instead of adding decoration.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-24",
            "oct17-source-25",
            "oct17-source-26",
            "oct17-source-14"
          ]
        }
      ],
      "diagramAlt": "Conceptual teaching illustration for How can a moving picture explain a process you cannot see? Four numbered stages and arrows correspond to the explanation below.",
      "diagramProvenance": "Generated fictional teaching illustration; source-grounded editorial simplification. Not a company process specification. Prompts and review: design/example-expansion-2026-10-17/.",
      "discussion": "When does simplifying an animation make it misleading?"
    },
    "roleIds": [
      "work-storyboarding-and-illustration",
      "work-animation",
      "work-creative-production-coordination"
    ],
    "pathwayIds": [
      "oct17-route-auarts-bachelor-of-design",
      "oct17-route-sait-film-and-video-production"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-17"
  },
  {
    "id": "cpkc-details",
    "exampleSlug": "cpkc",
    "organizationId": "cpkc",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "cpkc",
      "subtitle": "A railway moves through space, but its plan also has to work through time.",
      "caption": "A railway moves through space, but its plan also has to work through time.",
      "steps": [
        {
          "text": "Two trains can need the same section of track at different times. Distance alone does not reveal a conflict.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-29",
            "oct17-source-30",
            "oct17-source-31",
            "oct17-source-32",
            "oct17-source-14"
          ]
        },
        {
          "text": "A time-distance diagram lets a planner compare movement and waiting in one view.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-29",
            "oct17-source-30",
            "oct17-source-31",
            "oct17-source-32",
            "oct17-source-14"
          ]
        },
        {
          "text": "Changing one train’s departure may affect several later movements. Plans have to consider constraints together.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-29",
            "oct17-source-30",
            "oct17-source-31",
            "oct17-source-32",
            "oct17-source-14"
          ]
        },
        {
          "text": "Real rail operations use formal rules, communication and trained staff. A classroom timetable illustrates only one part of that system.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-29",
            "oct17-source-30",
            "oct17-source-31",
            "oct17-source-32",
            "oct17-source-14"
          ]
        }
      ],
      "diagramAlt": "Conceptual teaching illustration for How can trains share a rail network without getting in each other’s way? Four numbered stages and arrows correspond to the explanation below.",
      "diagramProvenance": "Generated fictional teaching illustration; source-grounded editorial simplification. Not a company process specification. Prompts and review: design/example-expansion-2026-10-17/.",
      "discussion": "What happens to the rest of a timetable when one train is delayed?"
    },
    "roleIds": [
      "work-rail-traffic-control",
      "work-railway-conductor-work",
      "work-software"
    ],
    "pathwayIds": [
      "oct17-route-cpkc-employer-rail-traffic-controller-training",
      "oct17-route-sait-railway-conductor",
      "oct17-route-sait-software-development"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-17"
  },
  {
    "id": "watersmart-details",
    "exampleSlug": "watersmart",
    "organizationId": "watersmart",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "watersmart",
      "subtitle": "A useful water plan asks what might change, not just how much water is available today.",
      "caption": "A useful water plan asks what might change, not just how much water is available today.",
      "steps": [
        {
          "text": "Describe the sources and uses of water in the system.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-35",
            "oct17-source-36",
            "oct17-source-37",
            "oct17-source-6"
          ]
        },
        {
          "text": "Build more than one scenario for future demand and available supply.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-35",
            "oct17-source-36",
            "oct17-source-37",
            "oct17-source-6"
          ]
        },
        {
          "text": "Compare options such as reducing demand or changing which water source serves a use. Reuse requires the right treatment and controls.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-35",
            "oct17-source-36",
            "oct17-source-37",
            "oct17-source-6"
          ]
        },
        {
          "text": "Choose actions that can be revised as monitoring and circumstances change. A plan should state uncertainty rather than hide it.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-35",
            "oct17-source-36",
            "oct17-source-37",
            "oct17-source-6"
          ]
        }
      ],
      "diagramAlt": "Conceptual teaching illustration for How do you plan water supplies for a city that keeps changing? Four numbered stages and arrows correspond to the explanation below.",
      "diagramProvenance": "Generated fictional teaching illustration; source-grounded editorial simplification. Not a company process specification. Prompts and review: design/example-expansion-2026-10-17/.",
      "discussion": "Would you choose the option that is best in one forecast or useful across several forecasts?"
    },
    "roleIds": [
      "work-water-resource-planning",
      "work-environmental-field-assessment",
      "work-planning-communication-and-engagement"
    ],
    "pathwayIds": [
      "oct17-route-sait-integrated-water-management",
      "oct17-route-university-of-calgary-civil-engineering",
      "oct17-route-sait-environmental-technology"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-17"
  },
  {
    "id": "integrated-sustainability-details",
    "exampleSlug": "integrated-sustainability",
    "organizationId": "integrated-sustainability",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "integrated-sustainability",
      "subtitle": "A treatment idea has to keep working when real water and operating conditions change.",
      "caption": "A treatment idea has to keep working when real water and operating conditions change.",
      "steps": [
        {
          "text": "Identify what is in the incoming water and what quality is required for the intended discharge or reuse.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-39",
            "oct17-source-40",
            "oct17-source-41",
            "oct17-source-42",
            "oct17-source-43"
          ]
        },
        {
          "text": "Select treatment steps that address the target substances. A biological reactor is one possible component, not a universal solution.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-39",
            "oct17-source-40",
            "oct17-source-41",
            "oct17-source-42",
            "oct17-source-43"
          ]
        },
        {
          "text": "Equipment, controls and maintenance must keep the process within suitable conditions.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-39",
            "oct17-source-40",
            "oct17-source-41",
            "oct17-source-42",
            "oct17-source-43"
          ]
        },
        {
          "text": "Measure the outgoing water and compare it with the requirement. A promising test is not the same as sustained operating performance.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-39",
            "oct17-source-40",
            "oct17-source-41",
            "oct17-source-42",
            "oct17-source-43"
          ]
        }
      ],
      "diagramAlt": "Conceptual teaching illustration for Why does a water-treatment system need more than a successful laboratory test? Four numbered stages and arrows correspond to the explanation below.",
      "diagramProvenance": "Generated fictional teaching illustration; source-grounded editorial simplification. Not a company process specification. Prompts and review: design/example-expansion-2026-10-17/.",
      "discussion": "What could change between a successful small trial and a full operating plant?"
    },
    "roleIds": [
      "work-process",
      "work-water-treatment-operations",
      "work-controls"
    ],
    "pathwayIds": [
      "oct17-route-university-of-calgary-chemical-engineering",
      "oct17-route-sait-integrated-water-management",
      "oct17-route-sait-instrumentation-engineering-technology"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-17"
  },
  {
    "id": "trace-associates-details",
    "exampleSlug": "trace-associates",
    "organizationId": "trace-associates",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "trace-associates",
      "subtitle": "A sample answers a question about a place, a depth and a moment in time.",
      "caption": "A sample answers a question about a place, a depth and a moment in time.",
      "steps": [
        {
          "text": "Define the question and consider how a substance could reach people, water or other organisms.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-45",
            "oct17-source-46",
            "oct17-source-47",
            "oct17-source-48",
            "oct17-source-43"
          ]
        },
        {
          "text": "Choose sampling locations and depths that can test that explanation.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-45",
            "oct17-source-46",
            "oct17-source-47",
            "oct17-source-48",
            "oct17-source-43"
          ]
        },
        {
          "text": "Compare laboratory results with units, detection limits and the sampling plan visible.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-45",
            "oct17-source-46",
            "oct17-source-47",
            "oct17-source-48",
            "oct17-source-43"
          ]
        },
        {
          "text": "Use the evidence to consider treatment, further investigation or monitoring. One clean sample does not describe the whole site.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-45",
            "oct17-source-46",
            "oct17-source-47",
            "oct17-source-48",
            "oct17-source-43"
          ]
        }
      ],
      "diagramAlt": "Conceptual teaching illustration for What evidence tells you which contaminated soil needs treatment? Four numbered stages and arrows correspond to the explanation below.",
      "diagramProvenance": "Generated fictional teaching illustration; source-grounded editorial simplification. Not a company process specification. Prompts and review: design/example-expansion-2026-10-17/.",
      "discussion": "How could a sampling plan miss the part of a site that matters most?"
    },
    "roleIds": [
      "work-environmental-field-assessment",
      "work-lab",
      "work-water-resource-planning"
    ],
    "pathwayIds": [
      "oct17-route-sait-environmental-technology",
      "oct17-route-sait-chemical-laboratory-technology",
      "oct17-route-sait-integrated-water-management"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-17"
  },
  {
    "id": "rjc-engineers-details",
    "exampleSlug": "rjc-engineers",
    "organizationId": "rjc-engineers",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "rjc-engineers",
      "subtitle": "The layers around a room have several jobs, and they must work together.",
      "caption": "The layers around a room have several jobs, and they must work together.",
      "steps": [
        {
          "text": "Indoor and outdoor conditions differ, so heat and moisture can move across a building enclosure.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-49",
            "oct17-source-50",
            "oct17-source-51"
          ]
        },
        {
          "text": "Materials and joints perform different jobs: insulation, air control, water control and structural support are not interchangeable.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-49",
            "oct17-source-50",
            "oct17-source-51"
          ]
        },
        {
          "text": "A defect at a joint can matter even when the main wall materials perform well.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-49",
            "oct17-source-50",
            "oct17-source-51"
          ]
        },
        {
          "text": "Inspection and measurements help identify a cause before a repair is chosen. Appearance alone may not explain the problem.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-49",
            "oct17-source-50",
            "oct17-source-51"
          ]
        }
      ],
      "diagramAlt": "Conceptual teaching illustration for How can a building keep heat in while managing moisture? Four numbered stages and arrows correspond to the explanation below.",
      "diagramProvenance": "Generated fictional teaching illustration; source-grounded editorial simplification. Not a company process specification. Prompts and review: design/example-expansion-2026-10-17/.",
      "discussion": "Why might adding more insulation fail to fix a water leak?"
    },
    "roleIds": [
      "work-building-science-investigation",
      "work-civil-and-construction-technology",
      "work-quality"
    ],
    "pathwayIds": [
      "oct17-route-sait-architectural-technologies",
      "oct17-route-university-of-calgary-civil-engineering",
      "oct17-route-sait-civil-engineering-technology-municipal-major"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-17"
  },
  {
    "id": "calgary-italian-bakery-details",
    "exampleSlug": "calgary-italian-bakery",
    "organizationId": "calgary-italian-bakery",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "calgary-italian-bakery",
      "subtitle": "Waste can reveal a process problem before a new machine is needed.",
      "caption": "Waste can reveal a process problem before a new machine is needed.",
      "steps": [
        {
          "text": "Map the steps from ingredients to saleable product.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-52",
            "oct17-source-53",
            "oct17-source-54",
            "oct17-source-55",
            "oct17-source-51"
          ]
        },
        {
          "text": "Measure material losses where they occur instead of combining everything into one waste total.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-52",
            "oct17-source-53",
            "oct17-source-54",
            "oct17-source-55",
            "oct17-source-51"
          ]
        },
        {
          "text": "Investigate a cause: a transfer point, a forming step or later handling may need a different response.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-52",
            "oct17-source-53",
            "oct17-source-54",
            "oct17-source-55",
            "oct17-source-51"
          ]
        },
        {
          "text": "Test a change and compare both waste and acceptable product output. Moving a loss to another step is not a reduction.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-52",
            "oct17-source-53",
            "oct17-source-54",
            "oct17-source-55",
            "oct17-source-51"
          ]
        }
      ],
      "diagramAlt": "Conceptual teaching illustration for Where does a bakery lose food before it reaches the customer? Four numbered stages and arrows correspond to the explanation below.",
      "diagramProvenance": "Generated fictional teaching illustration; source-grounded editorial simplification. Not a company process specification. Prompts and review: design/example-expansion-2026-10-17/.",
      "discussion": "Why is a smaller waste bin not enough evidence that a process improved?"
    },
    "roleIds": [
      "work-commercial-baking",
      "work-quality",
      "work-process"
    ],
    "pathwayIds": [
      "oct17-route-sait-baking-and-pastry-arts",
      "oct17-route-alberta-baker-apprenticeship-education",
      "oct17-route-sait-chemical-laboratory-technology",
      "oct17-route-university-of-calgary-chemical-engineering"
    ],
    "jobIds": [
      "cgy-050-j1"
    ],
    "checkedOn": "2026-10-17"
  },
  {
    "id": "joe-media-group-details",
    "exampleSlug": "joe-media-group",
    "organizationId": "joe-media-group",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "joe-media-group",
      "subtitle": "A scene can be assembled from images recorded at different moments.",
      "caption": "A scene can be assembled from images recorded at different moments.",
      "steps": [
        {
          "text": "Light reflects from a subject and is refracted by a camera lens to form an image at the sensor.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-58",
            "oct17-source-59",
            "oct17-source-60",
            "oct17-source-61",
            "oct17-source-14"
          ]
        },
        {
          "text": "Changing the lighting or camera settings can change the appearance of the same subject.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-58",
            "oct17-source-59",
            "oct17-source-60",
            "oct17-source-61",
            "oct17-source-14"
          ]
        },
        {
          "text": "An editor arranges selected shots into a sequence; a colourist can work on differences in their appearance.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-58",
            "oct17-source-59",
            "oct17-source-60",
            "oct17-source-61",
            "oct17-source-14"
          ]
        },
        {
          "text": "Review the sequence for continuity and meaning. A smooth-looking cut is a creative result, not proof that the events happened continuously.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-58",
            "oct17-source-59",
            "oct17-source-60",
            "oct17-source-61",
            "oct17-source-14"
          ]
        }
      ],
      "diagramAlt": "Conceptual teaching illustration for How can light and editing make separate shots feel like one scene? Four numbered stages and arrows correspond to the explanation below.",
      "diagramProvenance": "Generated fictional teaching illustration; source-grounded editorial simplification. Not a company process specification. Prompts and review: design/example-expansion-2026-10-17/.",
      "discussion": "How can the order of two shots change what a viewer thinks happened?"
    },
    "roleIds": [
      "work-camera-and-image-capture",
      "work-film-and-video-editing",
      "work-colour-finishing"
    ],
    "pathwayIds": [
      "oct17-route-sait-film-and-video-production",
      "oct17-route-auarts-bachelor-of-design"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-17"
  },
  {
    "id": "cbl-bakeries-cinnaroll-details",
    "exampleSlug": "cbl-bakeries-cinnaroll",
    "organizationId": "cbl-bakeries-cinnaroll",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "cbl-bakeries-cinnaroll",
      "subtitle": "A familiar product becomes a different problem when it has to be repeated at scale.",
      "caption": "A familiar product becomes a different problem when it has to be repeated at scale.",
      "steps": [
        {
          "text": "Define what consistency means for the product: size, appearance and other agreed properties may all matter.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-62",
            "oct17-source-63",
            "oct17-source-51"
          ]
        },
        {
          "text": "Keep track of ingredients, processing conditions and batch identity.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-62",
            "oct17-source-63",
            "oct17-source-51"
          ]
        },
        {
          "text": "Check samples from more than one point in a batch; an average can conceal individual differences.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-62",
            "oct17-source-63",
            "oct17-source-51"
          ]
        },
        {
          "text": "Investigate a pattern and test one change at a time before deciding whether the process improved.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-62",
            "oct17-source-63",
            "oct17-source-51"
          ]
        }
      ],
      "diagramAlt": "Conceptual teaching illustration for How can thousands of pastries come out consistently? Four numbered stages and arrows correspond to the explanation below.",
      "diagramProvenance": "Generated fictional teaching illustration; source-grounded editorial simplification. Not a company process specification. Prompts and review: design/example-expansion-2026-10-17/.",
      "discussion": "Can two batches have the same average and still differ in quality?"
    },
    "roleIds": [
      "work-commercial-baking",
      "work-quality",
      "work-food"
    ],
    "pathwayIds": [
      "oct17-route-sait-baking-and-pastry-arts",
      "oct17-route-alberta-baker-apprenticeship-education",
      "oct17-route-sait-chemical-laboratory-technology"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-17"
  },
  {
    "id": "isl-engineering-details",
    "exampleSlug": "isl-engineering",
    "organizationId": "isl-engineering",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "isl-engineering",
      "subtitle": "A route has to work for people and for the ground and water beneath it.",
      "caption": "A route has to work for people and for the ground and water beneath it.",
      "steps": [
        {
          "text": "Map the terrain, existing connections and watercourse before drawing a route.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-64",
            "oct17-source-65",
            "oct17-source-66",
            "oct17-source-67",
            "oct17-source-6"
          ]
        },
        {
          "text": "Compare options for gradients, crossings and access. A change in one constraint can affect another.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-64",
            "oct17-source-65",
            "oct17-source-66",
            "oct17-source-67",
            "oct17-source-6"
          ]
        },
        {
          "text": "Bring transportation, structural, water and environmental expertise together to develop the design.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-64",
            "oct17-source-65",
            "oct17-source-66",
            "oct17-source-67",
            "oct17-source-6"
          ]
        },
        {
          "text": "Check the built corridor against its intended function and monitor the landscape it affects. Design intent is not a measured ecological outcome.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-64",
            "oct17-source-65",
            "oct17-source-66",
            "oct17-source-67",
            "oct17-source-6"
          ]
        }
      ],
      "diagramAlt": "Conceptual teaching illustration for How can a road cross a creek without ignoring the landscape? Four numbered stages and arrows correspond to the explanation below.",
      "diagramProvenance": "Generated fictional teaching illustration; source-grounded editorial simplification. Not a company process specification. Prompts and review: design/example-expansion-2026-10-17/.",
      "discussion": "Why might the shortest route be a poor design?"
    },
    "roleIds": [
      "work-civil-and-construction-technology",
      "work-spatial",
      "work-environmental-field-assessment"
    ],
    "pathwayIds": [
      "oct17-route-sait-civil-engineering-technology-municipal-major",
      "oct17-route-university-of-calgary-civil-engineering",
      "oct17-route-sait-geomatics-engineering-technology",
      "oct17-route-sait-environmental-technology"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-17"
  },
  {
    "id": "clearbakk-details",
    "exampleSlug": "clearbakk",
    "organizationId": "clearbakk",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "clearbakk",
      "subtitle": "A compact system still needs the right sequence, connections and access for maintenance.",
      "caption": "A compact system still needs the right sequence, connections and access for maintenance.",
      "steps": [
        {
          "text": "Start with incoming-water characteristics and the required output, not the size of a shipping frame.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-68",
            "oct17-source-69",
            "oct17-source-70",
            "oct17-source-71",
            "oct17-source-43"
          ]
        },
        {
          "text": "Choose compatible treatment stages and account for water, chemicals and residual streams.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-68",
            "oct17-source-69",
            "oct17-source-70",
            "oct17-source-71",
            "oct17-source-43"
          ]
        },
        {
          "text": "Arrange equipment so connections, controls and maintenance access can work within the available space.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-68",
            "oct17-source-69",
            "oct17-source-70",
            "oct17-source-71",
            "oct17-source-43"
          ]
        },
        {
          "text": "Test the integrated system against the requirement. A compact layout is useful only if the treatment and operation also work.",
          "kind": "interpreted",
          "sourceIds": [
            "oct17-source-68",
            "oct17-source-69",
            "oct17-source-70",
            "oct17-source-71",
            "oct17-source-43"
          ]
        }
      ],
      "diagramAlt": "Conceptual teaching illustration for How can you fit a water-treatment process into a modular unit? Four numbered stages and arrows correspond to the explanation below.",
      "diagramProvenance": "Generated fictional teaching illustration; source-grounded editorial simplification. Not a company process specification. Prompts and review: design/example-expansion-2026-10-17/.",
      "discussion": "What could go wrong if a designer only tries to make the equipment smaller?"
    },
    "roleIds": [
      "work-process",
      "work-mechanical",
      "work-controls"
    ],
    "pathwayIds": [
      "oct17-route-university-of-calgary-chemical-engineering",
      "oct17-route-sait-mechanical-engineering-technology",
      "oct17-route-sait-instrumentation-engineering-technology"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-17"
  }
];

export const octoberSources: DatedSource[] = [
  {
    "id": "oct17-source-1",
    "label": "O2 Planning and Design — company/project evidence 1",
    "url": "https://www.o2design.com/dale-hodges-park",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-2",
    "label": "O2 Planning and Design — company/project evidence 2",
    "url": "https://www.o2design.com/contact-us",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-3",
    "label": "O2 Planning and Design — company/project evidence 3",
    "url": "https://www.o2design.com/careers",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-4",
    "label": "O2 Planning and Design — company/project evidence 4",
    "url": "https://www.o2design.com/s/O2_Junior-Landscape-Designer.pdf",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-5",
    "label": "O2 Planning and Design — company/project evidence 5",
    "url": "https://engage.o2design.com/about.html",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-6",
    "label": "Alberta Biology 20–30 program: water use and ecosystems",
    "url": "https://education.alberta.ca/media/159727/bio203007.pdf",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-7",
    "label": "University of Calgary — Master of Landscape Architecture",
    "url": "https://sapl.ucalgary.ca/future-students/graduate/master-landscape-architecture-mla",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-8",
    "label": "SAIT — Geomatics Engineering Technology",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/geomatics-engineering-technology",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-9",
    "label": "SAIT — Environmental Technology",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/environmental-technology",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-10",
    "label": "Entuitive — company/project evidence 1",
    "url": "https://www.entuitive.com/post/designing-for-constructability-over-active-rail-lines",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-11",
    "label": "Entuitive — company/project evidence 2",
    "url": "https://view.ceros.com/entuitive/new-calgary-library-big-story",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-12",
    "label": "Entuitive — company/project evidence 3",
    "url": "https://www.calgarymlc.ca/projects/central-library",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-13",
    "label": "Entuitive — company/project evidence 4",
    "url": "https://www.entuitive.com/careers",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-14",
    "label": "Alberta Physics 20–30 performance standards: A1, B1 and C1",
    "url": "https://www.alberta.ca/system/files/custom_downloaded_images/edc-physics20-30-performance-standards.pdf",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-15",
    "label": "University of Calgary — Civil Engineering",
    "url": "https://schulich.ucalgary.ca/future-students/undergraduate/programs/bsc-civil-engineering",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-16",
    "label": "SAIT — Civil Engineering Technology, Municipal Major",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/civil-engineering-technology-municipal",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-17",
    "label": "SAIT — Architectural Technologies",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/architectural-technologies",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-18",
    "label": "Phil & Sebastian Coffee Roasters — company/project evidence 1",
    "url": "https://philsebastian.com/pages/locations/simmons",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-19",
    "label": "Phil & Sebastian Coffee Roasters — company/project evidence 2",
    "url": "https://philsebastian.com/pages/our-coffee-approach",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-20",
    "label": "Phil & Sebastian Coffee Roasters — company/project evidence 3",
    "url": "https://philsebastian.com/pages/join-our-team",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-21",
    "label": "SAIT — Instrumentation Engineering Technology",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/instrumentation-engineering-technology",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-22",
    "label": "SAIT — Chemical Laboratory Technology",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/chemical-laboratory-technology",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-23",
    "label": "SAIT — Mechanical Engineering Technology",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/mechanical-engineering-technology",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-24",
    "label": "Broken Pencil Studios — company/project evidence 1",
    "url": "https://www.brokenpencilstudios.ca/",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-25",
    "label": "Broken Pencil Studios — company/project evidence 2",
    "url": "https://www.brokenpencilstudios.ca/about-us",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-26",
    "label": "Broken Pencil Studios — company/project evidence 3",
    "url": "https://www.brokenpencilstudios.ca/blogs/from-scribbles-to-screens-behind-the-scenes-of-creating-an-animated-explainer-video",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-27",
    "label": "AUArts — Bachelor of Design",
    "url": "https://www.auarts.ca/program-areas/undergraduate/bachelor-of-design-bdes",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-28",
    "label": "SAIT — Film and Video Production",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/film-and-video-production",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-29",
    "label": "CPKC — company/project evidence 1",
    "url": "https://s21.q4cdn.com/736796105/files/doc_financials/2025/ar/v2/CPKC-Annual-Report-2025-Final-Web.pdf",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-30",
    "label": "CPKC — company/project evidence 2",
    "url": "https://www.cpkcr.com/content/dam/cpkc/documents/english/labour-agreements/TCRC%20RTC%20and%20CP%20%282021-2023%29.pdf",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-31",
    "label": "CPKC — company/project evidence 3",
    "url": "https://investor.cpkcr.com/news/press-release-details/2025/CPKC-receives-arbitration-decision-establishing-new-TCRC-collective-agreements/default.aspx",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-32",
    "label": "CPKC — company/project evidence 4",
    "url": "https://careers.cpr.ca/job/Montreal-Rail-Traffic-Controller-QC-H4W-2J9/595098117/",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-33",
    "label": "SAIT — Railway Conductor",
    "url": "https://www.sait.ca/programs-and-courses/certificates/railway-conductor",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-34",
    "label": "SAIT — Software Development",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/software-development",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-35",
    "label": "WaterSMART — a Hazen company — company/project evidence 1",
    "url": "https://newsroom.calgary.ca/ensuring-a-reliable-water-supply-into-the-next-century-how-calgarys-water-security-roadmap-will-get-us-there/",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-36",
    "label": "WaterSMART — a Hazen company — company/project evidence 2",
    "url": "https://watersmartsolutions.ca/stormwater-is-flowing-through-the-first-stages-of-the-newly-constructed-csmi-stormwater-system/",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-37",
    "label": "WaterSMART — a Hazen company — company/project evidence 3",
    "url": "https://watersmartsolutions.ca/our-team/",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-38",
    "label": "SAIT — Integrated Water Management",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/integrated-water-management",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-39",
    "label": "Integrated Sustainability — company/project evidence 1",
    "url": "https://www.integratedsustainability.com/about-us/",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-40",
    "label": "Integrated Sustainability — company/project evidence 2",
    "url": "https://www.integratedsustainability.com/services/",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-41",
    "label": "Integrated Sustainability — company/project evidence 3",
    "url": "https://www.integratedsustainability.com/services/water-treatment/",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-42",
    "label": "Integrated Sustainability — company/project evidence 4",
    "url": "https://www.integratedsustainability.com/",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-43",
    "label": "Alberta Chemistry 20–30 program: solutions and concentration",
    "url": "https://education.alberta.ca/media/159730/chem2030_07.pdf",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-44",
    "label": "University of Calgary — Chemical Engineering",
    "url": "https://schulich.ucalgary.ca/future-students/undergraduate/programs/bsc-chemical-engineering",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-45",
    "label": "Trace Associates — company/project evidence 1",
    "url": "https://traceassociates.ca/contact-us/calgary/",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-46",
    "label": "Trace Associates — company/project evidence 2",
    "url": "https://traceassociates.ca/practice-area/remediation-and-risk/",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-47",
    "label": "Trace Associates — company/project evidence 3",
    "url": "https://esaa.org/wp-content/uploads/2023/05/RTE2023Abstracts.pdf",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-48",
    "label": "Trace Associates — company/project evidence 4",
    "url": "https://traceassociates.ca/careers/",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-49",
    "label": "RJC Engineers — company/project evidence 1",
    "url": "https://www.rjc.ca/location-details/calgary.html",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-50",
    "label": "RJC Engineers — company/project evidence 2",
    "url": "https://www.rjc.ca/people/our-leadership/details/ryan-coles.html",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-51",
    "label": "Alberta Science 10 program: inquiry skills and technological systems",
    "url": "https://education.alberta.ca/media/159715/science10.pdf",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-52",
    "label": "Calgary Italian Bakery — company/project evidence 1",
    "url": "https://www.cibl.com/",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-53",
    "label": "Calgary Italian Bakery — company/project evidence 2",
    "url": "https://www.cibl.com/faq",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-54",
    "label": "Calgary Italian Bakery — company/project evidence 3",
    "url": "https://www.cibl.com/employment",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-55",
    "label": "Calgary Italian Bakery — company/project evidence 4",
    "url": "https://enviro-stewards.com/wp-content/uploads/2025/02/CIBL-Food-Waste-Prevention-Case-Study.pdf",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-56",
    "label": "SAIT — Baking and Pastry Arts",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/baking-and-pastry-arts",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-57",
    "label": "Alberta Baker apprenticeship education",
    "url": "https://tradesecrets.alberta.ca/SOURCES/PDFS/curriculum_guides/024_outline.pdf",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-58",
    "label": "Joe Media Group — company/project evidence 1",
    "url": "https://joemedia.tv/about-us",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-59",
    "label": "Joe Media Group — company/project evidence 2",
    "url": "https://joemedia.tv/corporate",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-60",
    "label": "Joe Media Group — company/project evidence 3",
    "url": "https://joemedia.tv/contact",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-61",
    "label": "Joe Media Group — company/project evidence 4",
    "url": "https://joemedia.tv/post-production",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-62",
    "label": "CBL Bakeries / Cinnaroll — company/project evidence 1",
    "url": "https://www.cinnaroll.com/",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-63",
    "label": "CBL Bakeries / Cinnaroll — company/project evidence 2",
    "url": "https://www.cinnaroll.com/careers",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-64",
    "label": "ISL Engineering — company/project evidence 1",
    "url": "https://islengineering.com/about/our-offices/",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-65",
    "label": "ISL Engineering — company/project evidence 2",
    "url": "https://islengineering.com/projects/",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-66",
    "label": "ISL Engineering — company/project evidence 3",
    "url": "https://islengineering.com/project/144-ave-nw-calgary-extension/",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-67",
    "label": "ISL Engineering — company/project evidence 4",
    "url": "https://islengineering.com/join-the-team/",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-68",
    "label": "ClearBakk — ALSYS group — company/project evidence 1",
    "url": "https://clearbakk.com/about-us/",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-69",
    "label": "ClearBakk — ALSYS group — company/project evidence 2",
    "url": "https://clearbakk.com/",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-70",
    "label": "ClearBakk — ALSYS group — company/project evidence 3",
    "url": "https://www.alsys-group.com/clearbakk-modular-solutions/",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-source-71",
    "label": "ClearBakk — ALSYS group — company/project evidence 4",
    "url": "https://www.alsys-group.com/solutions/alsys-engineering/",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-o2-planning-design-website",
    "label": "O2 — official website",
    "url": "https://www.o2design.com/",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-entuitive-website",
    "label": "Entuitive — official website",
    "url": "https://www.entuitive.com/",
    "checkedOn": "2026-10-17"
  },
  {
    "id": "oct17-cpkc-website",
    "label": "CPKC — official website (automated access restricted)",
    "url": "https://www.cpkcr.com/",
    "checkedOn": "2026-10-17"
  }
];
