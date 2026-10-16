// Approved 15 October 2026. Research and approval: docs/validation/full-examples/2026-10-15/.
import type { Example, Organization, OrganizationRole, RoleProfile, LearningPathway, JobExample, ExampleDetails, DatedSource } from "./types";

export const expansionExamples: Example[] = [
  {
    "slug": "botaneco",
    "org": "Botaneco",
    "discipline": "Chemistry",
    "question": "How can one seed become several useful ingredients?",
    "work": "Botaneco develops ingredients from oilseeds for feed, food and personal-care products. It describes a water-based process that separates proteins and oleosomes, the seed’s natural oil-containing structures. Its Calgary headquarters includes research and development staff; its team names biochemists, engineers, food scientists and technicians.",
    "localShort": "Calgary headquarters and R&D; the sources do not establish that every manufacturing step takes place in Calgary.",
    "calgary": "Calgary headquarters and R&D; the sources do not establish that every manufacturing step takes place in Calgary.",
    "site": "Calgary headquarters and R&D; the sources do not establish that every manufacturing step takes place in Calgary.",
    "localSourceIds": [
      "page-botaneco-expansion-source-1",
      "page-botaneco-expansion-source-2",
      "page-botaneco-expansion-source-3",
      "page-botaneco-expansion-source-4"
    ],
    "explain": "Give groups three fictional ingredient samples: one has high recovery, one stays mixed longer, and one needs less processing energy. Ask each group to choose a sample for a product and identify the missing test.",
    "prompt": "If a process recovers more material but changes how it behaves, has it improved?",
    "conversation": "If a process recovers more material but changes how it behaves, has it improved?",
    "mindset": "There is no universal winner. Students should state the product requirement before comparing evidence. Do not treat the fictional samples as Botaneco results.",
    "courses": [
      {
        "course": "Chemistry 20",
        "topic": "Mixtures, solubility and properties"
      }
    ],
    "courseFitSourceIds": [
      "page-botaneco-expansion-source-5"
    ],
    "roles": [
      {
        "title": "Ingredient and formulation science",
        "note": "Investigate how ingredients behave in a product. This work connects a material’s composition to properties such as texture, stability or performance in a mixture.",
        "evidence": "Botaneco explicitly identifies food scientists and biochemists; the task explanation is general.",
        "kind": "interpreted",
        "sourceIds": [
          "page-botaneco-expansion-source-1",
          "page-botaneco-expansion-source-2",
          "page-botaneco-expansion-source-3",
          "page-botaneco-expansion-source-4"
        ]
      },
      {
        "title": "Laboratory analysis",
        "note": "Make measurements that other people can trust. A laboratory worker prepares samples, uses a method consistently and records enough detail for someone else to interpret the result.",
        "evidence": "The company names technicians; sample-analysis tasks are an editorial explanation, not a verified job description.",
        "kind": "interpreted",
        "sourceIds": [
          "page-botaneco-expansion-source-1",
          "page-botaneco-expansion-source-2",
          "page-botaneco-expansion-source-3",
          "page-botaneco-expansion-source-4"
        ]
      },
      {
        "title": "Process engineering",
        "note": "Turn a useful transformation into a workable sequence of equipment and operating steps. Process engineers consider what enters, what leaves and what conditions the system must maintain.",
        "evidence": "The company names engineers and describes a processing platform; no specific vacancy is asserted.",
        "kind": "interpreted",
        "sourceIds": [
          "page-botaneco-expansion-source-1",
          "page-botaneco-expansion-source-2",
          "page-botaneco-expansion-source-3",
          "page-botaneco-expansion-source-4"
        ]
      }
    ],
    "rolesNote": "Work areas and related occupations, not a staff roster or a list of open vacancies. Individual evidence notes distinguish company work from editorial connections.",
    "pathways": [
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Chemical Laboratory Technology",
        "note": "Practice chemical analysis, sample preparation and analytical instrumentation. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-botaneco-expansion-source-6"
        ]
      },
      {
        "kindLabel": "Bachelor’s degree",
        "label": "University of Calgary — Biochemistry",
        "note": "Study the chemistry of living organisms and changes within cells. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-botaneco-expansion-source-7"
        ]
      },
      {
        "kindLabel": "Bachelor’s degree",
        "label": "University of Calgary — Chemical Engineering",
        "note": "Study how to transform raw materials and design production processes. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-botaneco-expansion-source-8"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "Botaneco develops ingredients from oilseeds for feed, food and personal-care products. It describes a water-based process that separates proteins and oleosomes, the seed’s natural oil-containing structures. Its Calgary headquarters includes research and development staff; its team names biochemists, engineers, food scientists and technicians.",
        "status": "Organization-stated",
        "kind": "stated",
        "sourceIds": [
          "page-botaneco-expansion-source-1",
          "page-botaneco-expansion-source-2",
          "page-botaneco-expansion-source-3",
          "page-botaneco-expansion-source-4"
        ]
      },
      {
        "type": "local connection",
        "claim": "Calgary headquarters and R&D; the sources do not establish that every manufacturing step takes place in Calgary.",
        "status": "Organization-stated",
        "kind": "stated",
        "sourceIds": [
          "page-botaneco-expansion-source-1",
          "page-botaneco-expansion-source-2",
          "page-botaneco-expansion-source-3",
          "page-botaneco-expansion-source-4"
        ]
      },
      {
        "type": "course fit",
        "claim": "Compare separated fractions and test their properties; proteins and oleosomes are application context, not required terminology.",
        "status": "Editorial connection to verified course topics",
        "kind": "interpreted",
        "sourceIds": [
          "page-botaneco-expansion-source-5"
        ]
      },
      {
        "type": "limits",
        "claim": "Do not repeat zero-waste or health-benefit marketing claims as independently proven facts. The simplified teaching sequence is not a specification of proprietary equipment.",
        "status": "Scope of this example",
        "kind": "interpreted",
        "sourceIds": [
          "page-botaneco-expansion-source-1",
          "page-botaneco-expansion-source-2",
          "page-botaneco-expansion-source-3",
          "page-botaneco-expansion-source-4"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-botaneco-expansion-source-1",
        "label": "Company and Calgary team",
        "url": "https://botaneco.com/about/"
      },
      {
        "id": "page-botaneco-expansion-source-2",
        "label": "Processing platform",
        "url": "https://botaneco.com/technology/"
      },
      {
        "id": "page-botaneco-expansion-source-3",
        "label": "Products and uses",
        "url": "https://botaneco.com/"
      },
      {
        "id": "page-botaneco-expansion-source-4",
        "label": "Careers check",
        "url": "https://botaneco.com/careers/"
      },
      {
        "id": "page-botaneco-expansion-source-5",
        "label": "Alberta Chemistry 20–30 program of studies (updated 2014)",
        "url": "https://education.alberta.ca/media/159730/chem2030_07.pdf"
      },
      {
        "id": "page-botaneco-expansion-source-6",
        "label": "SAIT — Chemical Laboratory Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/chemical-laboratory-technology"
      },
      {
        "id": "page-botaneco-expansion-source-7",
        "label": "University of Calgary — Biochemistry",
        "url": "https://science.ucalgary.ca/future-students/undergraduate/programs"
      },
      {
        "id": "page-botaneco-expansion-source-8",
        "label": "University of Calgary — Chemical Engineering",
        "url": "https://schulich.ucalgary.ca/future-students/undergraduate/programs/bsc-chemical-engineering"
      }
    ],
    "checkedOn": "2026-10-15",
    "detailsId": "botaneco-details"
  },
  {
    "slug": "nanalysis",
    "org": "Nanalysis",
    "discipline": "Physics",
    "question": "How can magnets help identify what is in a sample?",
    "work": "Nanalysis develops and manufactures compact magnetic-resonance instruments and identifies its head office in Calgary. Its benchtop NMR products are used in areas including teaching, chemistry and food science. This example focuses on chemical analysis rather than medical imaging.",
    "localShort": "Calgary head office and instrument-development/manufacturing company; individual team assignments are not mapped to a specific vacancy.",
    "calgary": "Calgary head office and instrument-development/manufacturing company; individual team assignments are not mapped to a specific vacancy.",
    "site": "Calgary head office and instrument-development/manufacturing company; individual team assignments are not mapped to a specific vacancy.",
    "localSourceIds": [
      "page-nanalysis-expansion-source-9",
      "page-nanalysis-expansion-source-10",
      "page-nanalysis-expansion-source-11"
    ],
    "explain": "Show two invented spectra with a shared peak and one different peak. Ask students what they can conclude, what they cannot conclude, and which reference measurement would help.",
    "prompt": "What additional evidence would you want if two samples produced similar patterns?",
    "conversation": "What additional evidence would you want if two samples produced similar patterns?",
    "mindset": "This is a pattern-and-evidence activity, not instruction in assigning real NMR spectra. Avoid describing the signal as X-rays or nuclear radiation.",
    "courses": [
      {
        "course": "Physics 30",
        "topic": "Fields and electromagnetic radiation: an NMR extension"
      }
    ],
    "courseFitSourceIds": [
      "page-nanalysis-expansion-source-12"
    ],
    "roles": [
      {
        "title": "Instrument development and testing",
        "note": "Help build and check the equipment that produces measurements. Instrument work joins hardware, software and experiments rather than treating a reading as automatically correct.",
        "evidence": "The company develops and manufactures instruments; these are related work areas, not verified titles.",
        "kind": "interpreted",
        "sourceIds": [
          "page-nanalysis-expansion-source-9",
          "page-nanalysis-expansion-source-10",
          "page-nanalysis-expansion-source-11"
        ]
      },
      {
        "title": "Scientific applications",
        "note": "Connect an instrument to the question a user needs to answer. Applications work involves selecting a method, interpreting results and explaining limitations.",
        "evidence": "Application support is connected to the company’s instrument uses; duties below are editorial.",
        "kind": "interpreted",
        "sourceIds": [
          "page-nanalysis-expansion-source-9",
          "page-nanalysis-expansion-source-10",
          "page-nanalysis-expansion-source-11"
        ]
      },
      {
        "title": "Software and data systems",
        "note": "Build the tools that move, process and display information. Reliable software needs testing against missing, delayed and unexpected data as well as ideal examples.",
        "evidence": "Converting and displaying measurements requires data tools; the role link is interpreted, not a claim of an open position.",
        "kind": "interpreted",
        "sourceIds": [
          "page-nanalysis-expansion-source-9",
          "page-nanalysis-expansion-source-10",
          "page-nanalysis-expansion-source-11"
        ]
      }
    ],
    "rolesNote": "Work areas and related occupations, not a staff roster or a list of open vacancies. Individual evidence notes distinguish company work from editorial connections.",
    "pathways": [
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Chemical Laboratory Technology",
        "note": "Practice chemical analysis, sample preparation and analytical instrumentation. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-nanalysis-expansion-source-6"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Electrical Engineering Technology",
        "note": "Study circuits, electrical power and controls with practical laboratory work. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-nanalysis-expansion-source-13"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Software Development",
        "note": "Learn to design, test and build software across front-end and back-end systems. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-nanalysis-expansion-source-14"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "Nanalysis develops and manufactures compact magnetic-resonance instruments and identifies its head office in Calgary. Its benchtop NMR products are used in areas including teaching, chemistry and food science. This example focuses on chemical analysis rather than medical imaging.",
        "status": "Organization-stated",
        "kind": "stated",
        "sourceIds": [
          "page-nanalysis-expansion-source-9",
          "page-nanalysis-expansion-source-10",
          "page-nanalysis-expansion-source-11"
        ]
      },
      {
        "type": "local connection",
        "claim": "Calgary head office and instrument-development/manufacturing company; individual team assignments are not mapped to a specific vacancy.",
        "status": "Organization-stated",
        "kind": "stated",
        "sourceIds": [
          "page-nanalysis-expansion-source-9",
          "page-nanalysis-expansion-source-10",
          "page-nanalysis-expansion-source-11"
        ]
      },
      {
        "type": "course fit",
        "claim": "Apply fields and electromagnetic-radiation ideas to measurement. Nuclear spin and Fourier transforms are extension material, not required high-school outcomes.",
        "status": "Editorial connection to verified course topics",
        "kind": "interpreted",
        "sourceIds": [
          "page-nanalysis-expansion-source-12"
        ]
      },
      {
        "type": "limits",
        "claim": "NMR is an extension topic; do not imply high-school students must master spin physics. No specific current vacancy or research role’s entry requirements were verified.",
        "status": "Scope of this example",
        "kind": "interpreted",
        "sourceIds": [
          "page-nanalysis-expansion-source-9",
          "page-nanalysis-expansion-source-10",
          "page-nanalysis-expansion-source-11"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-nanalysis-expansion-source-6",
        "label": "SAIT — Chemical Laboratory Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/chemical-laboratory-technology"
      },
      {
        "id": "page-nanalysis-expansion-source-9",
        "label": "Company, products and Calgary address",
        "url": "https://www.nanalysis.com/"
      },
      {
        "id": "page-nanalysis-expansion-source-10",
        "label": "How the signal becomes a spectrum",
        "url": "https://www.nanalysis.com/nmready-blog/2023/6/27/relation-between-the-fid-and-the-nmr-spectrum"
      },
      {
        "id": "page-nanalysis-expansion-source-11",
        "label": "Careers check",
        "url": "https://www.nanalysis.com/career"
      },
      {
        "id": "page-nanalysis-expansion-source-12",
        "label": "Alberta Physics 20–30 performance standards",
        "url": "https://www.alberta.ca/system/files/custom_downloaded_images/edc-physics20-30-performance-standards.pdf"
      },
      {
        "id": "page-nanalysis-expansion-source-13",
        "label": "SAIT — Electrical Engineering Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/electrical-engineering-technology"
      },
      {
        "id": "page-nanalysis-expansion-source-14",
        "label": "SAIT — Software Development",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/software-development"
      }
    ],
    "checkedOn": "2026-10-15",
    "detailsId": "nanalysis-details"
  },
  {
    "slug": "exergy-solutions",
    "org": "Exergy Solutions",
    "discipline": "Physics",
    "question": "When should you print a metal part instead of machining it?",
    "work": "Exergy Solutions combines engineering and manufacturing at its Nexus facility in Calgary. Its services include reverse engineering, metal 3D printing, CNC machining and prototyping. These capabilities offer a concrete way to discuss how design choices affect how a component is made.",
    "localShort": "Nexus manufacturing facility in Calgary; client projects may be used elsewhere.",
    "calgary": "Nexus manufacturing facility in Calgary; client projects may be used elsewhere.",
    "site": "Nexus manufacturing facility in Calgary; client projects may be used elsewhere.",
    "localSourceIds": [
      "page-exergy-solutions-expansion-source-15",
      "page-exergy-solutions-expansion-source-16",
      "page-exergy-solutions-expansion-source-17"
    ],
    "explain": "Use a fictional bracket with a mounting hole and a tight fit requirement. Ask students to choose a manufacturing route and list the evidence needed before accepting the part.",
    "prompt": "When might a simple machined part be preferable to a complex printed one?",
    "conversation": "When might a simple machined part be preferable to a complex printed one?",
    "mindset": "The bracket is an illustrative problem, not a claimed Exergy project. Good answers connect the choice to a requirement and include inspection.",
    "courses": [
      {
        "course": "Physics 20",
        "topic": "Forces, work and design constraints"
      }
    ],
    "courseFitSourceIds": [
      "page-exergy-solutions-expansion-source-12"
    ],
    "roles": [
      {
        "title": "Mechanical design and prototyping",
        "note": "Translate a need into a component or machine that can be built and tested. Designers use dimensions, material properties and constraints to evaluate alternatives.",
        "evidence": "Design engineering and reverse engineering are stated services.",
        "kind": "interpreted",
        "sourceIds": [
          "page-exergy-solutions-expansion-source-15",
          "page-exergy-solutions-expansion-source-16",
          "page-exergy-solutions-expansion-source-17"
        ]
      },
      {
        "title": "Machining and dimensional inspection",
        "note": "Make parts fit their intended purpose by controlling dimensions. Machining combines tools, setup and measurement; finishing a part is not the same as proving it meets its specification.",
        "evidence": "CNC machining is a stated in-house capability; exact job duties are explained generally.",
        "kind": "interpreted",
        "sourceIds": [
          "page-exergy-solutions-expansion-source-15",
          "page-exergy-solutions-expansion-source-16",
          "page-exergy-solutions-expansion-source-17"
        ]
      },
      {
        "title": "Quality and traceability",
        "note": "Make it possible to explain how a result or product was produced. Quality work checks records, methods and acceptance criteria so variation can be investigated rather than hidden.",
        "evidence": "Testing is part of the stated integrated facility; this is a work-area interpretation.",
        "kind": "interpreted",
        "sourceIds": [
          "page-exergy-solutions-expansion-source-15",
          "page-exergy-solutions-expansion-source-16",
          "page-exergy-solutions-expansion-source-17"
        ]
      }
    ],
    "rolesNote": "Work areas and related occupations, not a staff roster or a list of open vacancies. Individual evidence notes distinguish company work from editorial connections.",
    "pathways": [
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Mechanical Engineering Technology",
        "note": "Study mechanical systems, design and manufacturing, with specialization options. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-exergy-solutions-expansion-source-18"
        ]
      },
      {
        "kindLabel": "Apprenticeship",
        "label": "SAIT — Machinist",
        "note": "Learn precision measurement, machine tools, drawings and machining. Requires apprenticeship registration and workplace training as well as classroom instruction; admission to a course alone is not journeyperson certification.",
        "kind": "interpreted",
        "sourceIds": [
          "page-exergy-solutions-expansion-source-19"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Instrumentation Engineering Technology",
        "note": "Work with measurement devices, calibration and automated process controls. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-exergy-solutions-expansion-source-20"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "Exergy Solutions combines engineering and manufacturing at its Nexus facility in Calgary. Its services include reverse engineering, metal 3D printing, CNC machining and prototyping. These capabilities offer a concrete way to discuss how design choices affect how a component is made.",
        "status": "Organization-stated",
        "kind": "stated",
        "sourceIds": [
          "page-exergy-solutions-expansion-source-15",
          "page-exergy-solutions-expansion-source-16",
          "page-exergy-solutions-expansion-source-17"
        ]
      },
      {
        "type": "local connection",
        "claim": "Nexus manufacturing facility in Calgary; client projects may be used elsewhere.",
        "status": "Organization-stated",
        "kind": "stated",
        "sourceIds": [
          "page-exergy-solutions-expansion-source-15",
          "page-exergy-solutions-expansion-source-16",
          "page-exergy-solutions-expansion-source-17"
        ]
      },
      {
        "type": "course fit",
        "claim": "Compare the load a bracket must carry with the material and geometry used; printing is an engineering context rather than a required manufacturing topic.",
        "status": "Editorial connection to verified course topics",
        "kind": "interpreted",
        "sourceIds": [
          "page-exergy-solutions-expansion-source-12"
        ]
      },
      {
        "type": "limits",
        "claim": "The classroom bracket is hypothetical. Do not claim all printed parts use less material overall or have a lower environmental footprint.",
        "status": "Scope of this example",
        "kind": "interpreted",
        "sourceIds": [
          "page-exergy-solutions-expansion-source-15",
          "page-exergy-solutions-expansion-source-16",
          "page-exergy-solutions-expansion-source-17"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-exergy-solutions-expansion-source-12",
        "label": "Alberta Physics 20–30 performance standards",
        "url": "https://www.alberta.ca/system/files/custom_downloaded_images/edc-physics20-30-performance-standards.pdf"
      },
      {
        "id": "page-exergy-solutions-expansion-source-15",
        "label": "Manufacturing capabilities and Calgary facility",
        "url": "https://exergysolutions.com/services/manufacturing/"
      },
      {
        "id": "page-exergy-solutions-expansion-source-16",
        "label": "Facility address",
        "url": "https://exergysolutions.com/contact-us/"
      },
      {
        "id": "page-exergy-solutions-expansion-source-17",
        "label": "Careers check",
        "url": "https://exergysolutions.com/careers"
      },
      {
        "id": "page-exergy-solutions-expansion-source-18",
        "label": "SAIT — Mechanical Engineering Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/mechanical-engineering-technology"
      },
      {
        "id": "page-exergy-solutions-expansion-source-19",
        "label": "SAIT — Machinist",
        "url": "https://www.sait.ca/apprenticeships-and-trades/programs/machinist"
      },
      {
        "id": "page-exergy-solutions-expansion-source-20",
        "label": "SAIT — Instrumentation Engineering Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/instrumentation-engineering-technology"
      }
    ],
    "checkedOn": "2026-10-15",
    "detailsId": "exergy-solutions-details"
  },
  {
    "slug": "livestock-water-recycling",
    "org": "Livestock Water Recycling",
    "discipline": "Chemistry",
    "question": "Can we recover useful water and nutrients from manure?",
    "work": "Livestock Water Recycling develops manure-treatment systems from a Calgary innovation centre and manufacturing plant. Its PLANT process uses mechanical and chemical treatments to separate solids, nutrient-rich material and water. The company describes uses at livestock operations and other facilities handling nutrient-laden liquids.",
    "localShort": "Innovation centre and manufacturing plant in Calgary; farm installations are not assumed to be in the city.",
    "calgary": "Innovation centre and manufacturing plant in Calgary; farm installations are not assumed to be in the city.",
    "site": "Innovation centre and manufacturing plant in Calgary; farm installations are not assumed to be in the city.",
    "localSourceIds": [
      "page-livestock-water-recycling-expansion-source-21",
      "page-livestock-water-recycling-expansion-source-22",
      "page-livestock-water-recycling-expansion-source-23",
      "page-livestock-water-recycling-expansion-source-24"
    ],
    "explain": "Draw a mass-flow diagram with one incoming stream and three outgoing streams. Ask students to identify measurements needed to account for both water and nutrients.",
    "prompt": "Why is clear-looking water not enough evidence that it is suitable for every use?",
    "conversation": "Why is clear-looking water not enough evidence that it is suitable for every use?",
    "mindset": "No manure handling is required. The exercise uses a conceptual diagram; concentration and total amount are different quantities.",
    "courses": [
      {
        "course": "Chemistry 20",
        "topic": "Mixtures and solution concentration"
      },
      {
        "course": "Science 30",
        "topic": "Chemistry and the environment"
      }
    ],
    "courseFitSourceIds": [
      "page-livestock-water-recycling-expansion-source-5",
      "page-livestock-water-recycling-expansion-source-25"
    ],
    "roles": [
      {
        "title": "Process engineering",
        "note": "Turn a useful transformation into a workable sequence of equipment and operating steps. Process engineers consider what enters, what leaves and what conditions the system must maintain.",
        "evidence": "Treatment-system development is stated; detailed tasks are an editorial explanation.",
        "kind": "interpreted",
        "sourceIds": [
          "page-livestock-water-recycling-expansion-source-21",
          "page-livestock-water-recycling-expansion-source-22",
          "page-livestock-water-recycling-expansion-source-23",
          "page-livestock-water-recycling-expansion-source-24"
        ]
      },
      {
        "title": "Laboratory analysis",
        "note": "Make measurements that other people can trust. A laboratory worker prepares samples, uses a method consistently and records enough detail for someone else to interpret the result.",
        "evidence": "The Calgary centre identifies analytical tools and process research.",
        "kind": "interpreted",
        "sourceIds": [
          "page-livestock-water-recycling-expansion-source-21",
          "page-livestock-water-recycling-expansion-source-22",
          "page-livestock-water-recycling-expansion-source-23",
          "page-livestock-water-recycling-expansion-source-24"
        ]
      },
      {
        "title": "Instrumentation and controls",
        "note": "Keep a process measurable and responsive. Controls work connects sensors, decisions and actuators so the system can respond when conditions change.",
        "evidence": "Automation is described, and a commissioning/training role names troubleshooting and repair; deployment work can involve US clients.",
        "kind": "interpreted",
        "sourceIds": [
          "page-livestock-water-recycling-expansion-source-21",
          "page-livestock-water-recycling-expansion-source-22",
          "page-livestock-water-recycling-expansion-source-23",
          "page-livestock-water-recycling-expansion-source-24"
        ]
      }
    ],
    "rolesNote": "Work areas and related occupations, not a staff roster or a list of open vacancies. Individual evidence notes distinguish company work from editorial connections.",
    "pathways": [
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Chemical Laboratory Technology",
        "note": "Practice chemical analysis, sample preparation and analytical instrumentation. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-livestock-water-recycling-expansion-source-6"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Instrumentation Engineering Technology",
        "note": "Work with measurement devices, calibration and automated process controls. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-livestock-water-recycling-expansion-source-20"
        ]
      },
      {
        "kindLabel": "Bachelor’s degree",
        "label": "University of Calgary — Chemical Engineering",
        "note": "Study how to transform raw materials and design production processes. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-livestock-water-recycling-expansion-source-8"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "Livestock Water Recycling develops manure-treatment systems from a Calgary innovation centre and manufacturing plant. Its PLANT process uses mechanical and chemical treatments to separate solids, nutrient-rich material and water. The company describes uses at livestock operations and other facilities handling nutrient-laden liquids.",
        "status": "Organization-stated",
        "kind": "stated",
        "sourceIds": [
          "page-livestock-water-recycling-expansion-source-21",
          "page-livestock-water-recycling-expansion-source-22",
          "page-livestock-water-recycling-expansion-source-23",
          "page-livestock-water-recycling-expansion-source-24"
        ]
      },
      {
        "type": "local connection",
        "claim": "Innovation centre and manufacturing plant in Calgary; farm installations are not assumed to be in the city.",
        "status": "Organization-stated",
        "kind": "stated",
        "sourceIds": [
          "page-livestock-water-recycling-expansion-source-21",
          "page-livestock-water-recycling-expansion-source-22",
          "page-livestock-water-recycling-expansion-source-23",
          "page-livestock-water-recycling-expansion-source-24"
        ]
      },
      {
        "type": "course fit",
        "claim": "Compare what remains in different output streams. Clearer water is not automatically safe drinking water.",
        "status": "Editorial connection to verified course topics",
        "kind": "interpreted",
        "sourceIds": [
          "page-livestock-water-recycling-expansion-source-5",
          "page-livestock-water-recycling-expansion-source-25"
        ]
      },
      {
        "type": "limits",
        "claim": "Do not reproduce claims that all pathogens or all runoff risk are eliminated. Water reuse is not a blanket drinking-water-safety claim. The commissioning role supports clients across the USA; do not label all of that work Calgary-based.",
        "status": "Scope of this example",
        "kind": "interpreted",
        "sourceIds": [
          "page-livestock-water-recycling-expansion-source-21",
          "page-livestock-water-recycling-expansion-source-22",
          "page-livestock-water-recycling-expansion-source-23",
          "page-livestock-water-recycling-expansion-source-24"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-livestock-water-recycling-expansion-source-5",
        "label": "Alberta Chemistry 20–30 program of studies (updated 2014)",
        "url": "https://education.alberta.ca/media/159730/chem2030_07.pdf"
      },
      {
        "id": "page-livestock-water-recycling-expansion-source-6",
        "label": "SAIT — Chemical Laboratory Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/chemical-laboratory-technology"
      },
      {
        "id": "page-livestock-water-recycling-expansion-source-8",
        "label": "University of Calgary — Chemical Engineering",
        "url": "https://schulich.ucalgary.ca/future-students/undergraduate/programs/bsc-chemical-engineering"
      },
      {
        "id": "page-livestock-water-recycling-expansion-source-20",
        "label": "SAIT — Instrumentation Engineering Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/instrumentation-engineering-technology"
      },
      {
        "id": "page-livestock-water-recycling-expansion-source-21",
        "label": "PLANT process",
        "url": "https://www.livestockwaterrecycling.com/the-system/plant/"
      },
      {
        "id": "page-livestock-water-recycling-expansion-source-22",
        "label": "Calgary research work",
        "url": "https://www.livestockwaterrecycling.com/our-story/innovation-center/"
      },
      {
        "id": "page-livestock-water-recycling-expansion-source-23",
        "label": "Local facility",
        "url": "https://www.livestockwaterrecycling.com/contact/contact-us/"
      },
      {
        "id": "page-livestock-water-recycling-expansion-source-24",
        "label": "Employer role evidence",
        "url": "https://www.livestockwaterrecycling.com/careers/current-job-openings/"
      },
      {
        "id": "page-livestock-water-recycling-expansion-source-25",
        "label": "Calgary Board of Education: Science 10/20/30 course topics",
        "url": "https://eps.cbe.ab.ca/science-10-20-30.aspx"
      }
    ],
    "checkedOn": "2026-10-15",
    "detailsId": "livestock-water-recycling-details"
  },
  {
    "slug": "avmax",
    "org": "Avmax",
    "discipline": "Physics",
    "question": "How do you decide whether an aircraft part is safe to keep using?",
    "work": "Avmax provides aircraft services including maintenance, avionics, engineering and component repairs. Its current contact page explicitly lists those activities in Calgary. This example uses inspection and maintenance to connect physical properties with careful technical judgment.",
    "localShort": "Calgary corporate office and documented maintenance, engineering, avionics and component-repair services.",
    "calgary": "Calgary corporate office and documented maintenance, engineering, avionics and component-repair services.",
    "site": "Calgary corporate office and documented maintenance, engineering, avionics and component-repair services.",
    "localSourceIds": [
      "page-avmax-expansion-source-26",
      "page-avmax-expansion-source-27",
      "page-avmax-expansion-source-28",
      "page-avmax-expansion-source-29",
      "page-avmax-expansion-source-30"
    ],
    "explain": "Give students fictional inspection readings, measurement uncertainty and a fictional acceptance interval. Ask which cases need more evidence. Do not use real aircraft limits.",
    "prompt": "What would you do if a measurement fell very close to an acceptance limit?",
    "conversation": "What would you do if a measurement fell very close to an acceptance limit?",
    "mindset": "This is a reasoning exercise, not aircraft-maintenance guidance. The response should distinguish a measured value from confidence in that value.",
    "courses": [
      {
        "course": "Physics 20",
        "topic": "Forces and evidence from mechanical tests"
      }
    ],
    "courseFitSourceIds": [
      "page-avmax-expansion-source-12"
    ],
    "roles": [
      {
        "title": "Aircraft maintenance",
        "note": "Investigate condition, carry out authorized maintenance and preserve the records behind a decision. Aircraft maintenance work relies on approved procedures and appropriate qualifications.",
        "evidence": "Current MRO page names technicians, maintenance checks and inspection services.",
        "kind": "interpreted",
        "sourceIds": [
          "page-avmax-expansion-source-26",
          "page-avmax-expansion-source-27",
          "page-avmax-expansion-source-28",
          "page-avmax-expansion-source-29",
          "page-avmax-expansion-source-30"
        ]
      },
      {
        "title": "Avionics and electronics",
        "note": "Work on the electronic systems that allow aircraft to communicate, navigate and collect data. Troubleshooting means distinguishing a faulty sensor from wiring, power or software problems.",
        "evidence": "Current company contact and service pages establish Calgary avionics work.",
        "kind": "interpreted",
        "sourceIds": [
          "page-avmax-expansion-source-26",
          "page-avmax-expansion-source-27",
          "page-avmax-expansion-source-28",
          "page-avmax-expansion-source-29",
          "page-avmax-expansion-source-30"
        ]
      },
      {
        "title": "Quality and traceability",
        "note": "Make it possible to explain how a result or product was produced. Quality work checks records, methods and acceptance criteria so variation can be investigated rather than hidden.",
        "evidence": "Inspection and documented maintenance provide the context; the role explanation is general.",
        "kind": "interpreted",
        "sourceIds": [
          "page-avmax-expansion-source-26",
          "page-avmax-expansion-source-27",
          "page-avmax-expansion-source-28",
          "page-avmax-expansion-source-29",
          "page-avmax-expansion-source-30"
        ]
      }
    ],
    "rolesNote": "Work areas and related occupations, not a staff roster or a list of open vacancies. Individual evidence notes distinguish company work from editorial connections.",
    "pathways": [
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Aircraft Maintenance Engineers Technology",
        "note": "Study aircraft systems, inspections and maintenance at the Art Smith Aero Centre. A diploma is not an AME licence. Transport Canada also requires qualifying experience, demonstrated skills and examinations; see the licensing source.",
        "kind": "interpreted",
        "sourceIds": [
          "page-avmax-expansion-source-31"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Avionics Technology",
        "note": "Study aircraft electrical, electronic, communication and navigation systems. Training supports a route toward AME E licensing; graduation alone does not confer that licence. Check Transport Canada’s requirements.",
        "kind": "interpreted",
        "sourceIds": [
          "page-avmax-expansion-source-32"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Mechanical Engineering Technology",
        "note": "Study mechanical systems, design and manufacturing, with specialization options. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-avmax-expansion-source-18"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "Avmax provides aircraft services including maintenance, avionics, engineering and component repairs. Its current contact page explicitly lists those activities in Calgary. This example uses inspection and maintenance to connect physical properties with careful technical judgment.",
        "status": "Organization-stated",
        "kind": "stated",
        "sourceIds": [
          "page-avmax-expansion-source-26",
          "page-avmax-expansion-source-27",
          "page-avmax-expansion-source-28",
          "page-avmax-expansion-source-29",
          "page-avmax-expansion-source-30"
        ]
      },
      {
        "type": "local connection",
        "claim": "Calgary corporate office and documented maintenance, engineering, avionics and component-repair services.",
        "status": "Organization-stated",
        "kind": "stated",
        "sourceIds": [
          "page-avmax-expansion-source-26",
          "page-avmax-expansion-source-27",
          "page-avmax-expansion-source-28",
          "page-avmax-expansion-source-29",
          "page-avmax-expansion-source-30"
        ]
      },
      {
        "type": "course fit",
        "claim": "Use forces and measured deformation to discuss inspection evidence. Students are evaluating evidence, not making airworthiness decisions.",
        "status": "Editorial connection to verified course topics",
        "kind": "interpreted",
        "sourceIds": [
          "page-avmax-expansion-source-12"
        ]
      },
      {
        "type": "limits",
        "claim": "Do not imply a diploma grants authority to certify aircraft maintenance. No specific current apprentice vacancy was confirmed. Use general inspection evidence; a particular non-destructive testing method is not assigned to a component without a source.",
        "status": "Scope of this example",
        "kind": "interpreted",
        "sourceIds": [
          "page-avmax-expansion-source-26",
          "page-avmax-expansion-source-27",
          "page-avmax-expansion-source-28",
          "page-avmax-expansion-source-29",
          "page-avmax-expansion-source-30"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-avmax-expansion-source-12",
        "label": "Alberta Physics 20–30 performance standards",
        "url": "https://www.alberta.ca/system/files/custom_downloaded_images/edc-physics20-30-performance-standards.pdf"
      },
      {
        "id": "page-avmax-expansion-source-18",
        "label": "SAIT — Mechanical Engineering Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/mechanical-engineering-technology"
      },
      {
        "id": "page-avmax-expansion-source-26",
        "label": "Calgary services",
        "url": "https://www.avmax.com/contact"
      },
      {
        "id": "page-avmax-expansion-source-27",
        "label": "Maintenance and inspection",
        "url": "https://www.avmax.com/mro-1"
      },
      {
        "id": "page-avmax-expansion-source-28",
        "label": "Component services",
        "url": "https://www.avmax.com/services-9"
      },
      {
        "id": "page-avmax-expansion-source-29",
        "label": "Careers check",
        "url": "https://www.avmax.com/careers"
      },
      {
        "id": "page-avmax-expansion-source-30",
        "label": "AME licensing overview",
        "url": "https://tc.canada.ca/en/aviation/licensing-aircraft-maintenance-engineers-ames/obtaining-aircraft-maintenance-engineer-ame-licence"
      },
      {
        "id": "page-avmax-expansion-source-31",
        "label": "SAIT — Aircraft Maintenance Engineers Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/aircraft-maintenance-engineers-technology"
      },
      {
        "id": "page-avmax-expansion-source-32",
        "label": "SAIT — Avionics Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/avionics-technology"
      }
    ],
    "checkedOn": "2026-10-15",
    "detailsId": "avmax-details"
  },
  {
    "slug": "northern-rna",
    "org": "Northern RNA",
    "discipline": "Biology",
    "question": "How do you make biological material consistently from batch to batch?",
    "work": "Northern RNA offers nucleic-acid manufacturing and development services, including DNA and mRNA production, purification and analytical testing. Its website identifies a Calgary address and describes manufacturing and quality teams. The story here is about reproducible biological materials, not whether a treatment works in patients.",
    "localShort": "Calgary address and biomanufacturing business; the sources do not allocate every service or partner activity to a specific Calgary room or facility.",
    "calgary": "Calgary address and biomanufacturing business; the sources do not allocate every service or partner activity to a specific Calgary room or facility.",
    "site": "Calgary address and biomanufacturing business; the sources do not allocate every service or partner activity to a specific Calgary room or facility.",
    "localSourceIds": [
      "page-northern-rna-expansion-source-33",
      "page-northern-rna-expansion-source-34",
      "page-northern-rna-expansion-source-35",
      "page-northern-rna-expansion-source-36"
    ],
    "explain": "Use fictional batch records with different purity measurements and missing process notes. Ask which records would allow a meaningful comparison and what information is missing.",
    "prompt": "If two batches have the same amount of material, what other properties might you need to compare?",
    "conversation": "If two batches have the same amount of material, what other properties might you need to compare?",
    "mindset": "The records are invented. Students should distinguish amount, identity, purity and traceability without treating them as clinical results.",
    "courses": [
      {
        "course": "Biology 30",
        "topic": "Molecular biology and controlled comparisons"
      }
    ],
    "courseFitSourceIds": [
      "page-northern-rna-expansion-source-37"
    ],
    "roles": [
      {
        "title": "Bioprocess development",
        "note": "Develop repeatable ways to make and purify biological materials. This work connects molecular science to manufacturing conditions and checks whether a change improves the process.",
        "evidence": "Company development and manufacturing pages describe process optimization and nucleic-acid production.",
        "kind": "interpreted",
        "sourceIds": [
          "page-northern-rna-expansion-source-33",
          "page-northern-rna-expansion-source-34",
          "page-northern-rna-expansion-source-35",
          "page-northern-rna-expansion-source-36"
        ]
      },
      {
        "title": "Laboratory analysis",
        "note": "Make measurements that other people can trust. A laboratory worker prepares samples, uses a method consistently and records enough detail for someone else to interpret the result.",
        "evidence": "Analytical testing is a stated service.",
        "kind": "interpreted",
        "sourceIds": [
          "page-northern-rna-expansion-source-33",
          "page-northern-rna-expansion-source-34",
          "page-northern-rna-expansion-source-35",
          "page-northern-rna-expansion-source-36"
        ]
      },
      {
        "title": "Quality and traceability",
        "note": "Make it possible to explain how a result or product was produced. Quality work checks records, methods and acceptance criteria so variation can be investigated rather than hidden.",
        "evidence": "The company explicitly identifies quality assurance working with manufacturing and lot traceability.",
        "kind": "interpreted",
        "sourceIds": [
          "page-northern-rna-expansion-source-33",
          "page-northern-rna-expansion-source-34",
          "page-northern-rna-expansion-source-35",
          "page-northern-rna-expansion-source-36"
        ]
      }
    ],
    "rolesNote": "Work areas and related occupations, not a staff roster or a list of open vacancies. Individual evidence notes distinguish company work from editorial connections.",
    "pathways": [
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Chemical Laboratory Technology",
        "note": "Practice chemical analysis, sample preparation and analytical instrumentation. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-northern-rna-expansion-source-6"
        ]
      },
      {
        "kindLabel": "Bachelor’s degree",
        "label": "University of Calgary — Biochemistry",
        "note": "Study the chemistry of living organisms and changes within cells. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-northern-rna-expansion-source-7"
        ]
      },
      {
        "kindLabel": "Bachelor’s degree",
        "label": "University of Calgary — Chemical Engineering",
        "note": "Study how to transform raw materials and design production processes. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-northern-rna-expansion-source-8"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "Northern RNA offers nucleic-acid manufacturing and development services, including DNA and mRNA production, purification and analytical testing. Its website identifies a Calgary address and describes manufacturing and quality teams. The story here is about reproducible biological materials, not whether a treatment works in patients.",
        "status": "Organization-stated",
        "kind": "stated",
        "sourceIds": [
          "page-northern-rna-expansion-source-33",
          "page-northern-rna-expansion-source-34",
          "page-northern-rna-expansion-source-35",
          "page-northern-rna-expansion-source-36"
        ]
      },
      {
        "type": "local connection",
        "claim": "Calgary address and biomanufacturing business; the sources do not allocate every service or partner activity to a specific Calgary room or facility.",
        "status": "Organization-stated",
        "kind": "stated",
        "sourceIds": [
          "page-northern-rna-expansion-source-33",
          "page-northern-rna-expansion-source-34",
          "page-northern-rna-expansion-source-35",
          "page-northern-rna-expansion-source-36"
        ]
      },
      {
        "type": "course fit",
        "claim": "Connect nucleic acids to biological production, then compare batch evidence. Industrial quality systems are an application, not a required molecular-biology outcome.",
        "status": "Editorial connection to verified course topics",
        "kind": "interpreted",
        "sourceIds": [
          "page-northern-rna-expansion-source-37"
        ]
      },
      {
        "type": "limits",
        "claim": "Do not label all production GMP-certified based on marketing descriptions of available grades. No efficacy, safety or patient-benefit claim is proposed. Local allocation of individual services remains unspecified in the copy.",
        "status": "Scope of this example",
        "kind": "interpreted",
        "sourceIds": [
          "page-northern-rna-expansion-source-33",
          "page-northern-rna-expansion-source-34",
          "page-northern-rna-expansion-source-35",
          "page-northern-rna-expansion-source-36"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-northern-rna-expansion-source-6",
        "label": "SAIT — Chemical Laboratory Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/chemical-laboratory-technology"
      },
      {
        "id": "page-northern-rna-expansion-source-7",
        "label": "University of Calgary — Biochemistry",
        "url": "https://science.ucalgary.ca/future-students/undergraduate/programs"
      },
      {
        "id": "page-northern-rna-expansion-source-8",
        "label": "University of Calgary — Chemical Engineering",
        "url": "https://schulich.ucalgary.ca/future-students/undergraduate/programs/bsc-chemical-engineering"
      },
      {
        "id": "page-northern-rna-expansion-source-33",
        "label": "Biomanufacturing and quality work",
        "url": "https://northernrna.com/biomanufacturing/"
      },
      {
        "id": "page-northern-rna-expansion-source-34",
        "label": "Development services",
        "url": "https://northernrna.com/development-services/"
      },
      {
        "id": "page-northern-rna-expansion-source-35",
        "label": "Calgary and service context",
        "url": "https://northernrna.com/"
      },
      {
        "id": "page-northern-rna-expansion-source-36",
        "label": "Work areas in recent hiring",
        "url": "https://northernrna.com/careers/"
      },
      {
        "id": "page-northern-rna-expansion-source-37",
        "label": "Calgary Board of Education: Biology 20/30 course topics",
        "url": "https://eps.cbe.ab.ca/biology-20-30.aspx"
      }
    ],
    "checkedOn": "2026-10-15",
    "detailsId": "northern-rna-details"
  },
  {
    "slug": "aerium-analytics",
    "org": "AERIUM Analytics",
    "discipline": "Biology",
    "question": "Can a bird-shaped drone help reduce airport wildlife hazards?",
    "work": "AERIUM Analytics is a Calgary-based drone-services company. Its RoBird system is designed to mimic a predatory bird to influence the behaviour of other birds. The company describes applications at airports and other sites, and identifies work with Edmonton International Airport. Calgary is the company connection; the airport example is in the Edmonton region.",
    "localShort": "Calgary head office; the cited airport deployment is outside Calgary.",
    "calgary": "Calgary head office; the cited airport deployment is outside Calgary.",
    "site": "Calgary head office; the cited airport deployment is outside Calgary.",
    "localSourceIds": [
      "page-aerium-analytics-expansion-source-38",
      "page-aerium-analytics-expansion-source-39",
      "page-aerium-analytics-expansion-source-40",
      "page-aerium-analytics-expansion-source-41"
    ],
    "explain": "Create a comparison plan using fictional weekly bird counts at two sites. Ask students which additional variables they would record and why a single before-and-after count is weak evidence.",
    "prompt": "How could you tell whether fewer birds were caused by the intervention or by seasonal migration?",
    "conversation": "How could you tell whether fewer birds were caused by the intervention or by seasonal migration?",
    "mindset": "No actual wildlife disturbance or drone flight is part of this activity. Counts are fictional; do not adopt the company’s percentage claims as experimental results.",
    "courses": [
      {
        "course": "Biology 20",
        "topic": "Ecosystems, populations and observation"
      }
    ],
    "courseFitSourceIds": [
      "page-aerium-analytics-expansion-source-37"
    ],
    "roles": [
      {
        "title": "Drone operations",
        "note": "Plan and carry out flights for a specific task while coordinating with the people responsible for the site. The aircraft is one tool within an operational plan.",
        "evidence": "Company operations material explicitly describes pilots, training and field services.",
        "kind": "interpreted",
        "sourceIds": [
          "page-aerium-analytics-expansion-source-38",
          "page-aerium-analytics-expansion-source-39",
          "page-aerium-analytics-expansion-source-40",
          "page-aerium-analytics-expansion-source-41"
        ]
      },
      {
        "title": "Wildlife monitoring and interpretation",
        "note": "Observe how animals respond to an intervention and ask whether the change lasts. This work needs consistent observations and attention to other causes of changing behaviour.",
        "evidence": "Behavioural monitoring and wildlife management are stated work areas; a specific ecologist job title is not verified.",
        "kind": "interpreted",
        "sourceIds": [
          "page-aerium-analytics-expansion-source-38",
          "page-aerium-analytics-expansion-source-39",
          "page-aerium-analytics-expansion-source-40",
          "page-aerium-analytics-expansion-source-41"
        ]
      },
      {
        "title": "Spatial data and mapping",
        "note": "Turn measurements tied to places into usable spatial information. The work involves coordinates, scale and checking that datasets describe the same location and time.",
        "evidence": "Company services include GIS and mapping work; this is a related work area, not proof every RoBird assignment uses it.",
        "kind": "interpreted",
        "sourceIds": [
          "page-aerium-analytics-expansion-source-38",
          "page-aerium-analytics-expansion-source-39",
          "page-aerium-analytics-expansion-source-40",
          "page-aerium-analytics-expansion-source-41"
        ]
      }
    ],
    "rolesNote": "Work areas and related occupations, not a staff roster or a list of open vacancies. Individual evidence notes distinguish company work from editorial connections.",
    "pathways": [
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Geomatics Engineering Technology",
        "note": "Learn surveying, GIS, positioning and remote sensing. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-aerium-analytics-expansion-source-42"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Mechanical Engineering Technology",
        "note": "Study mechanical systems, design and manufacturing, with specialization options. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-aerium-analytics-expansion-source-18"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Software Development",
        "note": "Learn to design, test and build software across front-end and back-end systems. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-aerium-analytics-expansion-source-14"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "AERIUM Analytics is a Calgary-based drone-services company. Its RoBird system is designed to mimic a predatory bird to influence the behaviour of other birds. The company describes applications at airports and other sites, and identifies work with Edmonton International Airport. Calgary is the company connection; the airport example is in the Edmonton region.",
        "status": "Organization-stated",
        "kind": "stated",
        "sourceIds": [
          "page-aerium-analytics-expansion-source-38",
          "page-aerium-analytics-expansion-source-39",
          "page-aerium-analytics-expansion-source-40",
          "page-aerium-analytics-expansion-source-41"
        ]
      },
      {
        "type": "local connection",
        "claim": "Calgary head office; the cited airport deployment is outside Calgary.",
        "status": "Organization-stated",
        "kind": "stated",
        "sourceIds": [
          "page-aerium-analytics-expansion-source-38",
          "page-aerium-analytics-expansion-source-39",
          "page-aerium-analytics-expansion-source-40",
          "page-aerium-analytics-expansion-source-41"
        ]
      },
      {
        "type": "course fit",
        "claim": "Compare bird observations before and after intervention, with season and weather as competing explanations. A behavioural response alone does not prove population change.",
        "status": "Editorial connection to verified course topics",
        "kind": "interpreted",
        "sourceIds": [
          "page-aerium-analytics-expansion-source-37"
        ]
      },
      {
        "type": "limits",
        "claim": "Do not turn humane/no-harm marketing into an independently verified guarantee. No drone qualification or operating permission is conferred by the listed pathways. Exact efficacy estimates are omitted because a suitable controlled evaluation was not established.",
        "status": "Scope of this example",
        "kind": "interpreted",
        "sourceIds": [
          "page-aerium-analytics-expansion-source-38",
          "page-aerium-analytics-expansion-source-39",
          "page-aerium-analytics-expansion-source-40",
          "page-aerium-analytics-expansion-source-41"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-aerium-analytics-expansion-source-14",
        "label": "SAIT — Software Development",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/software-development"
      },
      {
        "id": "page-aerium-analytics-expansion-source-18",
        "label": "SAIT — Mechanical Engineering Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/mechanical-engineering-technology"
      },
      {
        "id": "page-aerium-analytics-expansion-source-37",
        "label": "Calgary Board of Education: Biology 20/30 course topics",
        "url": "https://eps.cbe.ab.ca/biology-20-30.aspx"
      },
      {
        "id": "page-aerium-analytics-expansion-source-38",
        "label": "RoBird design and airport example",
        "url": "https://www.aeriumanalytics.com/robird/"
      },
      {
        "id": "page-aerium-analytics-expansion-source-39",
        "label": "Operational tasks",
        "url": "https://www.aeriumanalytics.com/life-at-the-heart-of-aeriums-operations/"
      },
      {
        "id": "page-aerium-analytics-expansion-source-40",
        "label": "Services and stakeholders",
        "url": "https://www.aeriumanalytics.com/services/"
      },
      {
        "id": "page-aerium-analytics-expansion-source-41",
        "label": "Calgary connection",
        "url": "https://www.aeriumanalytics.com/contact-us/"
      },
      {
        "id": "page-aerium-analytics-expansion-source-42",
        "label": "SAIT — Geomatics Engineering Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/geomatics-engineering-technology"
      }
    ],
    "checkedOn": "2026-10-15",
    "detailsId": "aerium-analytics-details"
  },
  {
    "slug": "geologicai",
    "org": "GeologicAI",
    "discipline": "Physics",
    "question": "What can a rock scan tell us that our eyes cannot?",
    "work": "GeologicAI develops core-scanning and data tools for resource work and lists a Calgary location. Its system combines measurements such as visible images, X-ray fluorescence, hyperspectral sensing and geometric data. These provide different kinds of evidence for interpreting drill core and building geological understanding.",
    "localShort": "Calgary office and company development team; scanning and field operations also occur at customer sites internationally.",
    "calgary": "Calgary office and company development team; scanning and field operations also occur at customer sites internationally.",
    "site": "Calgary office and company development team; scanning and field operations also occur at customer sites internationally.",
    "localSourceIds": [
      "page-geologicai-expansion-source-43",
      "page-geologicai-expansion-source-44",
      "page-geologicai-expansion-source-45"
    ],
    "explain": "Give students a fictional strip of core with visible colour changes and a second strip of sensor readings. Ask where they would collect an additional sample and what it would test.",
    "prompt": "If a model is very detailed, does that mean it is well supported everywhere?",
    "conversation": "If a model is very detailed, does that mean it is well supported everywhere?",
    "mindset": "The strongest answer identifies a specific uncertainty. Do not equate a sensor count with an independently verified mineral concentration.",
    "courses": [
      {
        "course": "Science 20",
        "topic": "Earth materials and evidence"
      },
      {
        "course": "Physics 30",
        "topic": "Electromagnetic radiation and measurement"
      }
    ],
    "courseFitSourceIds": [
      "page-geologicai-expansion-source-25",
      "page-geologicai-expansion-source-12"
    ],
    "roles": [
      {
        "title": "Geoscience and interpretation",
        "note": "Explain what rock measurements suggest about geology. Geoscientists combine observations with context and use additional tests where a scan leaves uncertainty.",
        "evidence": "The company names geoscientists and geological interpretation work.",
        "kind": "interpreted",
        "sourceIds": [
          "page-geologicai-expansion-source-43",
          "page-geologicai-expansion-source-44",
          "page-geologicai-expansion-source-45"
        ]
      },
      {
        "title": "Instrument development and testing",
        "note": "Help build and check the equipment that produces measurements. Instrument work joins hardware, software and experiments rather than treating a reading as automatically correct.",
        "evidence": "Scanning equipment and operators are stated; these generic testing tasks do not establish a Calgary operator vacancy.",
        "kind": "interpreted",
        "sourceIds": [
          "page-geologicai-expansion-source-43",
          "page-geologicai-expansion-source-44",
          "page-geologicai-expansion-source-45"
        ]
      },
      {
        "title": "Software and data systems",
        "note": "Build the tools that move, process and display information. Reliable software needs testing against missing, delayed and unexpected data as well as ideal examples.",
        "evidence": "Software, analytics and developers are stated work areas.",
        "kind": "interpreted",
        "sourceIds": [
          "page-geologicai-expansion-source-43",
          "page-geologicai-expansion-source-44",
          "page-geologicai-expansion-source-45"
        ]
      }
    ],
    "rolesNote": "Work areas and related occupations, not a staff roster or a list of open vacancies. Individual evidence notes distinguish company work from editorial connections.",
    "pathways": [
      {
        "kindLabel": "Bachelor’s degree",
        "label": "University of Calgary — Geology",
        "note": "Study Earth materials through the geology program and its available study streams. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-geologicai-expansion-source-46"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Geomatics Engineering Technology",
        "note": "Learn surveying, GIS, positioning and remote sensing. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-geologicai-expansion-source-42"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Software Development",
        "note": "Learn to design, test and build software across front-end and back-end systems. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-geologicai-expansion-source-14"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "GeologicAI develops core-scanning and data tools for resource work and lists a Calgary location. Its system combines measurements such as visible images, X-ray fluorescence, hyperspectral sensing and geometric data. These provide different kinds of evidence for interpreting drill core and building geological understanding.",
        "status": "Organization-stated",
        "kind": "stated",
        "sourceIds": [
          "page-geologicai-expansion-source-43",
          "page-geologicai-expansion-source-44",
          "page-geologicai-expansion-source-45"
        ]
      },
      {
        "type": "local connection",
        "claim": "Calgary office and company development team; scanning and field operations also occur at customer sites internationally.",
        "status": "Organization-stated",
        "kind": "stated",
        "sourceIds": [
          "page-geologicai-expansion-source-43",
          "page-geologicai-expansion-source-44",
          "page-geologicai-expansion-source-45"
        ]
      },
      {
        "type": "course fit",
        "claim": "Combine geological observations with sensor evidence. X-ray and hyperspectral methods extend electromagnetic-radiation ideas; a scan does not establish an entire deposit.",
        "status": "Editorial connection to verified course topics",
        "kind": "interpreted",
        "sourceIds": [
          "page-geologicai-expansion-source-25",
          "page-geologicai-expansion-source-12"
        ]
      },
      {
        "type": "limits",
        "claim": "A search-indexed software posting returned Page Not Found from the original URL; it is excluded as current job evidence. Current careers list includes an overseas field role; it must not be relabelled Calgary. Do not claim AI removes the need for geological judgment or laboratory validation.",
        "status": "Scope of this example",
        "kind": "interpreted",
        "sourceIds": [
          "page-geologicai-expansion-source-43",
          "page-geologicai-expansion-source-44",
          "page-geologicai-expansion-source-45"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-geologicai-expansion-source-12",
        "label": "Alberta Physics 20–30 performance standards",
        "url": "https://www.alberta.ca/system/files/custom_downloaded_images/edc-physics20-30-performance-standards.pdf"
      },
      {
        "id": "page-geologicai-expansion-source-14",
        "label": "SAIT — Software Development",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/software-development"
      },
      {
        "id": "page-geologicai-expansion-source-25",
        "label": "Calgary Board of Education: Science 10/20/30 course topics",
        "url": "https://eps.cbe.ab.ca/science-10-20-30.aspx"
      },
      {
        "id": "page-geologicai-expansion-source-42",
        "label": "SAIT — Geomatics Engineering Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/geomatics-engineering-technology"
      },
      {
        "id": "page-geologicai-expansion-source-43",
        "label": "Sensors, teams and location",
        "url": "https://www.geologicai.com/"
      },
      {
        "id": "page-geologicai-expansion-source-44",
        "label": "Current careers page",
        "url": "https://www.geologicai.com/careers/"
      },
      {
        "id": "page-geologicai-expansion-source-45",
        "label": "Dated technology specification",
        "url": "https://www.geologicai.com/s/GeologicAI-Tech-Specs-2024.pdf"
      },
      {
        "id": "page-geologicai-expansion-source-46",
        "label": "University of Calgary — Geology",
        "url": "https://science.ucalgary.ca/earth/future-students/undergraduate/earth-science"
      }
    ],
    "checkedOn": "2026-10-15",
    "detailsId": "geologicai-details"
  },
  {
    "slug": "tangent-design-engineering",
    "org": "Tangent Design Engineering",
    "discipline": "Chemistry",
    "question": "Why does a process that works in a lab need a new design at larger scale?",
    "work": "Tangent Design Engineering is a Calgary engineering and design consultancy. Its Katal case study describes designing and building a transportable demonstration skid for a refining process. Mechanical, electrical and process engineers worked with in-house millwrights to develop a controllable prototype that could fit in a shipping container.",
    "localShort": "Calgary consultancy and documented prototype build in its shop; the case study is undated.",
    "calgary": "Calgary consultancy and documented prototype build in its shop; the case study is undated.",
    "site": "Calgary consultancy and documented prototype build in its shop; the case study is undated.",
    "localSourceIds": [
      "page-tangent-design-engineering-expansion-source-47"
    ],
    "explain": "Ask students to fit a fictional process into a fixed rectangular footprint while leaving access for maintenance and showing measurement points. Compare designs against the same constraints.",
    "prompt": "Why might multiplying every dimension of a laboratory setup by ten fail to produce a workable plant?",
    "conversation": "Why might multiplying every dimension of a laboratory setup by ten fail to produce a workable plant?",
    "mindset": "Focus on relationships and access, not engineering specifications. The exercise is not a plan for handling hazardous materials or building the Katal process.",
    "courses": [
      {
        "course": "Chemistry 20",
        "topic": "Quantitative relationships and process scale"
      }
    ],
    "courseFitSourceIds": [
      "page-tangent-design-engineering-expansion-source-5"
    ],
    "roles": [
      {
        "title": "Process engineering",
        "note": "Turn a useful transformation into a workable sequence of equipment and operating steps. Process engineers consider what enters, what leaves and what conditions the system must maintain.",
        "evidence": "The case names process engineers and flow-diagram work.",
        "kind": "interpreted",
        "sourceIds": [
          "page-tangent-design-engineering-expansion-source-47"
        ]
      },
      {
        "title": "Instrumentation and controls",
        "note": "Keep a process measurable and responsive. Controls work connects sensors, decisions and actuators so the system can respond when conditions change.",
        "evidence": "Electrical engineering and fine process control are described; role label is editorial.",
        "kind": "interpreted",
        "sourceIds": [
          "page-tangent-design-engineering-expansion-source-47"
        ]
      },
      {
        "title": "Industrial machinery assembly and maintenance",
        "note": "Make machinery work together as a physical system. Millwright work connects assembly, alignment, inspection and troubleshooting.",
        "evidence": "The case explicitly identifies in-house millwrights and shop assembly.",
        "kind": "interpreted",
        "sourceIds": [
          "page-tangent-design-engineering-expansion-source-47"
        ]
      }
    ],
    "rolesNote": "Work areas and related occupations, not a staff roster or a list of open vacancies. Individual evidence notes distinguish company work from editorial connections.",
    "pathways": [
      {
        "kindLabel": "Bachelor’s degree",
        "label": "University of Calgary — Chemical Engineering",
        "note": "Study how to transform raw materials and design production processes. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-tangent-design-engineering-expansion-source-8"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Instrumentation Engineering Technology",
        "note": "Work with measurement devices, calibration and automated process controls. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-tangent-design-engineering-expansion-source-20"
        ]
      },
      {
        "kindLabel": "Apprenticeship",
        "label": "SAIT — Industrial Mechanic (Millwright)",
        "note": "Learn to install, maintain and repair industrial machinery. Requires apprenticeship registration and workplace training. This is distinct from an engineering degree.",
        "kind": "interpreted",
        "sourceIds": [
          "page-tangent-design-engineering-expansion-source-48"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "Tangent Design Engineering is a Calgary engineering and design consultancy. Its Katal case study describes designing and building a transportable demonstration skid for a refining process. Mechanical, electrical and process engineers worked with in-house millwrights to develop a controllable prototype that could fit in a shipping container.",
        "status": "Organization-stated",
        "kind": "stated",
        "sourceIds": [
          "page-tangent-design-engineering-expansion-source-47"
        ]
      },
      {
        "type": "local connection",
        "claim": "Calgary consultancy and documented prototype build in its shop; the case study is undated.",
        "status": "Organization-stated",
        "kind": "stated",
        "sourceIds": [
          "page-tangent-design-engineering-expansion-source-47"
        ]
      },
      {
        "type": "course fit",
        "claim": "Track material inputs and outputs as throughput grows; engineering layout and controls extend the chemistry rather than replacing quantitative relationships.",
        "status": "Editorial connection to verified course topics",
        "kind": "interpreted",
        "sourceIds": [
          "page-tangent-design-engineering-expansion-source-5"
        ]
      },
      {
        "type": "limits",
        "claim": "Treat the story as an undated documented project, not a new announcement. Omit the case’s emissions-reduction percentage: the page does not provide the testing needed to substantiate it here.",
        "status": "Scope of this example",
        "kind": "interpreted",
        "sourceIds": [
          "page-tangent-design-engineering-expansion-source-47"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-tangent-design-engineering-expansion-source-5",
        "label": "Alberta Chemistry 20–30 program of studies (updated 2014)",
        "url": "https://education.alberta.ca/media/159730/chem2030_07.pdf"
      },
      {
        "id": "page-tangent-design-engineering-expansion-source-8",
        "label": "University of Calgary — Chemical Engineering",
        "url": "https://schulich.ucalgary.ca/future-students/undergraduate/programs/bsc-chemical-engineering"
      },
      {
        "id": "page-tangent-design-engineering-expansion-source-20",
        "label": "SAIT — Instrumentation Engineering Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/instrumentation-engineering-technology"
      },
      {
        "id": "page-tangent-design-engineering-expansion-source-47",
        "label": "Katal project and Calgary shop",
        "url": "https://www.tangentservices.com/projects/katal"
      },
      {
        "id": "page-tangent-design-engineering-expansion-source-48",
        "label": "SAIT — Industrial Mechanic (Millwright)",
        "url": "https://www.sait.ca/apprenticeships-and-trades/programs/industrial-mechanic-millwright"
      }
    ],
    "checkedOn": "2026-10-15",
    "detailsId": "tangent-design-engineering-details"
  },
  {
    "slug": "foremost",
    "org": "Foremost",
    "discipline": "Physics",
    "question": "How can a heavy vehicle travel over soft ground without sinking?",
    "work": "Foremost manufactures industrial and mobile equipment and identifies Calgary among its Alberta locations. Its product material includes wheeled and tracked off-road vehicles. The classroom story uses ground contact to connect vehicle design with pressure and mobility.",
    "localShort": "Calgary North engineering and manufacturing facility. The company explicitly lists tracked and wheeled off-road vehicle engineering here; individual model build locations are not asserted.",
    "calgary": "Calgary North engineering and manufacturing facility. The company explicitly lists tracked and wheeled off-road vehicle engineering here; individual model build locations are not asserted.",
    "site": "Calgary North engineering and manufacturing facility. The company explicitly lists tracked and wheeled off-road vehicle engineering here; individual model build locations are not asserted.",
    "localSourceIds": [
      "page-foremost-expansion-source-49",
      "page-foremost-expansion-source-50",
      "page-foremost-expansion-source-51",
      "page-foremost-expansion-source-51"
    ],
    "explain": "Use fictional loads and contact areas to compare average pressures. Then introduce uneven ground and ask which assumptions the simple calculation leaves out.",
    "prompt": "Would doubling the contact area guarantee that a vehicle never sinks?",
    "conversation": "Would doubling the contact area guarantee that a vehicle never sinks?",
    "mindset": "Keep the same force units and area units. This is a simplified model, not a performance claim for any Foremost vehicle.",
    "courses": [
      {
        "course": "Physics 20",
        "topic": "Forces and contact with the ground"
      }
    ],
    "courseFitSourceIds": [
      "page-foremost-expansion-source-12"
    ],
    "roles": [
      {
        "title": "Mechanical design and prototyping",
        "note": "Translate a need into a component or machine that can be built and tested. Designers use dimensions, material properties and constraints to evaluate alternatives.",
        "evidence": "Company manufacturing and equipment capabilities establish design-related work; individual assignments are not confirmed.",
        "kind": "interpreted",
        "sourceIds": [
          "page-foremost-expansion-source-49",
          "page-foremost-expansion-source-50",
          "page-foremost-expansion-source-51",
          "page-foremost-expansion-source-51"
        ]
      },
      {
        "title": "Metal fabrication and welding",
        "note": "Join and assemble material into usable structures. Fabrication work follows drawings and procedures, then checks whether the finished work meets its requirements.",
        "evidence": "Employer career material lists welding; application and exact location are unverified.",
        "kind": "interpreted",
        "sourceIds": [
          "page-foremost-expansion-source-49",
          "page-foremost-expansion-source-50",
          "page-foremost-expansion-source-51",
          "page-foremost-expansion-source-51"
        ]
      },
      {
        "title": "Industrial machinery assembly and maintenance",
        "note": "Make machinery work together as a physical system. Millwright work connects assembly, alignment, inspection and troubleshooting.",
        "evidence": "Employer career material lists assembly/mechanical work; task descriptions are general.",
        "kind": "interpreted",
        "sourceIds": [
          "page-foremost-expansion-source-49",
          "page-foremost-expansion-source-50",
          "page-foremost-expansion-source-51",
          "page-foremost-expansion-source-51"
        ]
      }
    ],
    "rolesNote": "Work areas and related occupations, not a staff roster or a list of open vacancies. Individual evidence notes distinguish company work from editorial connections.",
    "pathways": [
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Mechanical Engineering Technology",
        "note": "Study mechanical systems, design and manufacturing, with specialization options. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-foremost-expansion-source-18"
        ]
      },
      {
        "kindLabel": "Apprenticeship",
        "label": "SAIT — Welder",
        "note": "Learn joining processes, drawings and inspection of welded work. Requires apprenticeship registration and workplace training. Check the current provincial and provider requirements.",
        "kind": "interpreted",
        "sourceIds": [
          "page-foremost-expansion-source-52"
        ]
      },
      {
        "kindLabel": "Apprenticeship",
        "label": "SAIT — Industrial Mechanic (Millwright)",
        "note": "Learn to install, maintain and repair industrial machinery. Requires apprenticeship registration and workplace training. This is distinct from an engineering degree.",
        "kind": "interpreted",
        "sourceIds": [
          "page-foremost-expansion-source-48"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "Foremost manufactures industrial and mobile equipment and identifies Calgary among its Alberta locations. Its product material includes wheeled and tracked off-road vehicles. The classroom story uses ground contact to connect vehicle design with pressure and mobility.",
        "status": "Organization-stated",
        "kind": "stated",
        "sourceIds": [
          "page-foremost-expansion-source-49",
          "page-foremost-expansion-source-50",
          "page-foremost-expansion-source-51",
          "page-foremost-expansion-source-51"
        ]
      },
      {
        "type": "local connection",
        "claim": "Calgary North engineering and manufacturing facility. The company explicitly lists tracked and wheeled off-road vehicle engineering here; individual model build locations are not asserted.",
        "status": "Organization-stated",
        "kind": "stated",
        "sourceIds": [
          "page-foremost-expansion-source-49",
          "page-foremost-expansion-source-50",
          "page-foremost-expansion-source-51",
          "page-foremost-expansion-source-51"
        ]
      },
      {
        "type": "course fit",
        "claim": "Start with weight and support forces, then extend to pressure as force divided by area. Soft-soil behaviour and tracked-vehicle design go beyond the course model.",
        "status": "Editorial connection to verified course topics",
        "kind": "interpreted",
        "sourceIds": [
          "page-foremost-expansion-source-12"
        ]
      },
      {
        "type": "limits",
        "claim": "Product-to-Calgary-facility allocation must not be implied without confirmation. Search-reader careers text and fresh extraction differ; the latter still shows Loading positions, so no current vacancy claim is made.",
        "status": "Scope of this example",
        "kind": "interpreted",
        "sourceIds": [
          "page-foremost-expansion-source-49",
          "page-foremost-expansion-source-50",
          "page-foremost-expansion-source-51",
          "page-foremost-expansion-source-51"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-foremost-expansion-source-12",
        "label": "Alberta Physics 20–30 performance standards",
        "url": "https://www.alberta.ca/system/files/custom_downloaded_images/edc-physics20-30-performance-standards.pdf"
      },
      {
        "id": "page-foremost-expansion-source-18",
        "label": "SAIT — Mechanical Engineering Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/mechanical-engineering-technology"
      },
      {
        "id": "page-foremost-expansion-source-48",
        "label": "SAIT — Industrial Mechanic (Millwright)",
        "url": "https://www.sait.ca/apprenticeships-and-trades/programs/industrial-mechanic-millwright"
      },
      {
        "id": "page-foremost-expansion-source-49",
        "label": "Company work and career areas",
        "url": "https://www.foremost.ca/careers"
      },
      {
        "id": "page-foremost-expansion-source-50",
        "label": "Vehicle product evidence",
        "url": "https://media.foremost.ca/reason_middle_pdf_1742231408010_VEHICLES-OVERVIEW-WEB.pdf?v=products"
      },
      {
        "id": "page-foremost-expansion-source-51",
        "label": "Facility source checked",
        "url": "https://www.foremost.ca/facility-resume/calgary"
      },
      {
        "id": "page-foremost-expansion-source-52",
        "label": "SAIT — Welder",
        "url": "https://www.sait.ca/apprenticeships-and-trades/programs/welder"
      }
    ],
    "checkedOn": "2026-10-15",
    "detailsId": "foremost-details"
  },
  {
    "slug": "carbonova",
    "org": "Carbonova",
    "discipline": "Chemistry",
    "question": "How can carbon-containing gases become useful solid materials?",
    "work": "Carbonova develops a catalytic process that uses carbon-containing gases to make carbon nanofibres. Emissions Reduction Alberta documents Calgary pilot work and a separate commercial-demonstration project. The example focuses on converting feedstocks and testing a material’s usefulness, rather than assuming that using an emission stream automatically delivers a net climate benefit.",
    "localShort": "Calgary pilot and demonstration-project evidence; the larger demonstration unit is not described here as commissioned.",
    "calgary": "Calgary pilot and demonstration-project evidence; the larger demonstration unit is not described here as commissioned.",
    "site": "Calgary pilot and demonstration-project evidence; the larger demonstration unit is not described here as commissioned.",
    "localSourceIds": [
      "page-carbonova-expansion-source-53",
      "page-carbonova-expansion-source-54",
      "page-carbonova-expansion-source-55"
    ],
    "explain": "Provide fictional strength-test results for identical samples with two additive amounts. Ask students to compare variation, identify a control and list the additional evidence required for an environmental claim.",
    "prompt": "What would you measure to decide whether a new additive improves both performance and environmental impact?",
    "conversation": "What would you measure to decide whether a new additive improves both performance and environmental impact?",
    "mindset": "A stronger sample alone cannot establish lower lifecycle emissions. No claim is made that these invented values are Carbonova test results.",
    "courses": [
      {
        "course": "Chemistry 20",
        "topic": "Matter conservation and chemical changes"
      },
      {
        "course": "Science 30",
        "topic": "Chemistry and the environment"
      }
    ],
    "courseFitSourceIds": [
      "page-carbonova-expansion-source-5",
      "page-carbonova-expansion-source-25"
    ],
    "roles": [
      {
        "title": "Process engineering",
        "note": "Turn a useful transformation into a workable sequence of equipment and operating steps. Process engineers consider what enters, what leaves and what conditions the system must maintain.",
        "evidence": "Pilot and scale-up work are documented by ERA; role tasks are editorial.",
        "kind": "interpreted",
        "sourceIds": [
          "page-carbonova-expansion-source-53",
          "page-carbonova-expansion-source-54",
          "page-carbonova-expansion-source-55"
        ]
      },
      {
        "title": "Materials research and testing",
        "note": "Investigate whether a material improves a product for a defined purpose. A useful comparison separates the effect of the added material from other changes in the test.",
        "evidence": "Customer material assessment and composite testing are supported by project descriptions.",
        "kind": "interpreted",
        "sourceIds": [
          "page-carbonova-expansion-source-53",
          "page-carbonova-expansion-source-54",
          "page-carbonova-expansion-source-55"
        ]
      },
      {
        "title": "Laboratory analysis",
        "note": "Make measurements that other people can trust. A laboratory worker prepares samples, uses a method consistently and records enough detail for someone else to interpret the result.",
        "evidence": "Measurement and testing are connected work areas, not a verified named vacancy.",
        "kind": "interpreted",
        "sourceIds": [
          "page-carbonova-expansion-source-53",
          "page-carbonova-expansion-source-54",
          "page-carbonova-expansion-source-55"
        ]
      }
    ],
    "rolesNote": "Work areas and related occupations, not a staff roster or a list of open vacancies. Individual evidence notes distinguish company work from editorial connections.",
    "pathways": [
      {
        "kindLabel": "Bachelor’s degree",
        "label": "University of Calgary — Chemical Engineering",
        "note": "Study how to transform raw materials and design production processes. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-carbonova-expansion-source-8"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Chemical Laboratory Technology",
        "note": "Practice chemical analysis, sample preparation and analytical instrumentation. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-carbonova-expansion-source-6"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Mechanical Engineering Technology",
        "note": "Study mechanical systems, design and manufacturing, with specialization options. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-carbonova-expansion-source-18"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "Carbonova develops a catalytic process that uses carbon-containing gases to make carbon nanofibres. Emissions Reduction Alberta documents Calgary pilot work and a separate commercial-demonstration project. The example focuses on converting feedstocks and testing a material’s usefulness, rather than assuming that using an emission stream automatically delivers a net climate benefit.",
        "status": "Organization-stated",
        "kind": "stated",
        "sourceIds": [
          "page-carbonova-expansion-source-53",
          "page-carbonova-expansion-source-54",
          "page-carbonova-expansion-source-55"
        ]
      },
      {
        "type": "local connection",
        "claim": "Calgary pilot and demonstration-project evidence; the larger demonstration unit is not described here as commissioned.",
        "status": "Organization-stated",
        "kind": "stated",
        "sourceIds": [
          "page-carbonova-expansion-source-53",
          "page-carbonova-expansion-source-54",
          "page-carbonova-expansion-source-55"
        ]
      },
      {
        "type": "course fit",
        "claim": "Track carbon atoms into new materials and identify missing inputs and outputs. A carbon-containing product alone does not prove a net climate benefit.",
        "status": "Editorial connection to verified course topics",
        "kind": "interpreted",
        "sourceIds": [
          "page-carbonova-expansion-source-5",
          "page-carbonova-expansion-source-25"
        ]
      },
      {
        "type": "limits",
        "claim": "Do not repeat net-negative, strength-multiplier or energy-superiority claims without the underlying study and comparison boundary. Active project funding is not proof that a commercial plant is operating. Pilot status is attributed to the project source, not a site inspection.",
        "status": "Scope of this example",
        "kind": "interpreted",
        "sourceIds": [
          "page-carbonova-expansion-source-53",
          "page-carbonova-expansion-source-54",
          "page-carbonova-expansion-source-55"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-carbonova-expansion-source-5",
        "label": "Alberta Chemistry 20–30 program of studies (updated 2014)",
        "url": "https://education.alberta.ca/media/159730/chem2030_07.pdf"
      },
      {
        "id": "page-carbonova-expansion-source-6",
        "label": "SAIT — Chemical Laboratory Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/chemical-laboratory-technology"
      },
      {
        "id": "page-carbonova-expansion-source-8",
        "label": "University of Calgary — Chemical Engineering",
        "url": "https://schulich.ucalgary.ca/future-students/undergraduate/programs/bsc-chemical-engineering"
      },
      {
        "id": "page-carbonova-expansion-source-18",
        "label": "SAIT — Mechanical Engineering Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/mechanical-engineering-technology"
      },
      {
        "id": "page-carbonova-expansion-source-25",
        "label": "Calgary Board of Education: Science 10/20/30 course topics",
        "url": "https://eps.cbe.ab.ca/science-10-20-30.aspx"
      },
      {
        "id": "page-carbonova-expansion-source-53",
        "label": "Company technology and development status",
        "url": "https://carbonova.com/"
      },
      {
        "id": "page-carbonova-expansion-source-54",
        "label": "Active Calgary demonstration project",
        "url": "https://www.eralberta.ca/projects/details/carbon-nanofiber-commerical-demonstration/"
      },
      {
        "id": "page-carbonova-expansion-source-55",
        "label": "Completed CREATE process project",
        "url": "https://www.eralberta.ca/projects/details/carbon-reforming-to-economic-additives-for-transitioning-into-emission-less-era/"
      }
    ],
    "checkedOn": "2026-10-15",
    "detailsId": "carbonova-details"
  },
  {
    "slug": "summit-lithium-technologies",
    "org": "Summit Lithium Technologies",
    "discipline": "Chemistry",
    "question": "How can a material repeatedly capture lithium and then release it?",
    "work": "Summit Lithium Technologies, formerly operating as Summit Nanotech, develops direct lithium extraction technology. Its Calgary headquarters includes mechanical engineering, sorbent research and pilot-scale sorbent manufacturing. Its technology description combines a sorbent, a multi-column system and process modeling; other facilities and field activity are outside Canada.",
    "localShort": "Calgary headquarters, sorbent R&D, mechanical engineering and pilot-scale sorbent manufacturing. Commercial sorbent supply and field demonstrations are not assumed to be Calgary activities.",
    "calgary": "Calgary headquarters, sorbent R&D, mechanical engineering and pilot-scale sorbent manufacturing. Commercial sorbent supply and field demonstrations are not assumed to be Calgary activities.",
    "site": "Calgary headquarters, sorbent R&D, mechanical engineering and pilot-scale sorbent manufacturing. Commercial sorbent supply and field demonstrations are not assumed to be Calgary activities.",
    "localSourceIds": [
      "page-summit-lithium-technologies-expansion-source-56",
      "page-summit-lithium-technologies-expansion-source-57",
      "page-summit-lithium-technologies-expansion-source-58"
    ],
    "explain": "Give students fictional recovery values over five cycles for two sorbents. Ask which additional measurements would be needed before choosing one for a real process.",
    "prompt": "Would you choose a material that captures more lithium once, or one that performs consistently for many cycles?",
    "conversation": "Would you choose a material that captures more lithium once, or one that performs consistently for many cycles?",
    "mindset": "Use the data only as an illustrative comparison. Do not claim the exercise reveals Summit’s proprietary formulation or measured performance.",
    "courses": [
      {
        "course": "Chemistry 20",
        "topic": "Mixtures, ions and concentration"
      }
    ],
    "courseFitSourceIds": [
      "page-summit-lithium-technologies-expansion-source-5"
    ],
    "roles": [
      {
        "title": "Materials research and testing",
        "note": "Investigate whether a material improves a product for a defined purpose. A useful comparison separates the effect of the added material from other changes in the test.",
        "evidence": "Calgary sorbent R&D and pilot manufacturing are explicitly stated.",
        "kind": "interpreted",
        "sourceIds": [
          "page-summit-lithium-technologies-expansion-source-56",
          "page-summit-lithium-technologies-expansion-source-57",
          "page-summit-lithium-technologies-expansion-source-58"
        ]
      },
      {
        "title": "Process engineering",
        "note": "Turn a useful transformation into a workable sequence of equipment and operating steps. Process engineers consider what enters, what leaves and what conditions the system must maintain.",
        "evidence": "System engineering and process modeling are stated capabilities.",
        "kind": "interpreted",
        "sourceIds": [
          "page-summit-lithium-technologies-expansion-source-56",
          "page-summit-lithium-technologies-expansion-source-57",
          "page-summit-lithium-technologies-expansion-source-58"
        ]
      },
      {
        "title": "Instrumentation and controls",
        "note": "Keep a process measurable and responsive. Controls work connects sensors, decisions and actuators so the system can respond when conditions change.",
        "evidence": "Repeated column operation and modeling support a related controls work area; a specific title is not verified.",
        "kind": "interpreted",
        "sourceIds": [
          "page-summit-lithium-technologies-expansion-source-56",
          "page-summit-lithium-technologies-expansion-source-57",
          "page-summit-lithium-technologies-expansion-source-58"
        ]
      }
    ],
    "rolesNote": "Work areas and related occupations, not a staff roster or a list of open vacancies. Individual evidence notes distinguish company work from editorial connections.",
    "pathways": [
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Chemical Laboratory Technology",
        "note": "Practice chemical analysis, sample preparation and analytical instrumentation. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-summit-lithium-technologies-expansion-source-6"
        ]
      },
      {
        "kindLabel": "Bachelor’s degree",
        "label": "University of Calgary — Chemical Engineering",
        "note": "Study how to transform raw materials and design production processes. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-summit-lithium-technologies-expansion-source-8"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Instrumentation Engineering Technology",
        "note": "Work with measurement devices, calibration and automated process controls. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-summit-lithium-technologies-expansion-source-20"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "Summit Lithium Technologies, formerly operating as Summit Nanotech, develops direct lithium extraction technology. Its Calgary headquarters includes mechanical engineering, sorbent research and pilot-scale sorbent manufacturing. Its technology description combines a sorbent, a multi-column system and process modeling; other facilities and field activity are outside Canada.",
        "status": "Organization-stated",
        "kind": "stated",
        "sourceIds": [
          "page-summit-lithium-technologies-expansion-source-56",
          "page-summit-lithium-technologies-expansion-source-57",
          "page-summit-lithium-technologies-expansion-source-58"
        ]
      },
      {
        "type": "local connection",
        "claim": "Calgary headquarters, sorbent R&D, mechanical engineering and pilot-scale sorbent manufacturing. Commercial sorbent supply and field demonstrations are not assumed to be Calgary activities.",
        "status": "Organization-stated",
        "kind": "stated",
        "sourceIds": [
          "page-summit-lithium-technologies-expansion-source-56",
          "page-summit-lithium-technologies-expansion-source-57",
          "page-summit-lithium-technologies-expansion-source-58"
        ]
      },
      {
        "type": "course fit",
        "claim": "Compare capture, release and repeated-cycle measurements. Selective sorbents are an application; the proprietary chemistry is not claimed to be known.",
        "status": "Editorial connection to verified course topics",
        "kind": "interpreted",
        "sourceIds": [
          "page-summit-lithium-technologies-expansion-source-5"
        ]
      },
      {
        "type": "limits",
        "claim": "Use the new operating name while preserving the old name as an alias. Do not repeat lowest-cost or performance-superiority claims as independently verified. Basic engineering and field testing are not proof of a producing commercial installation.",
        "status": "Scope of this example",
        "kind": "interpreted",
        "sourceIds": [
          "page-summit-lithium-technologies-expansion-source-56",
          "page-summit-lithium-technologies-expansion-source-57",
          "page-summit-lithium-technologies-expansion-source-58"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-summit-lithium-technologies-expansion-source-5",
        "label": "Alberta Chemistry 20–30 program of studies (updated 2014)",
        "url": "https://education.alberta.ca/media/159730/chem2030_07.pdf"
      },
      {
        "id": "page-summit-lithium-technologies-expansion-source-6",
        "label": "SAIT — Chemical Laboratory Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/chemical-laboratory-technology"
      },
      {
        "id": "page-summit-lithium-technologies-expansion-source-8",
        "label": "University of Calgary — Chemical Engineering",
        "url": "https://schulich.ucalgary.ca/future-students/undergraduate/programs/bsc-chemical-engineering"
      },
      {
        "id": "page-summit-lithium-technologies-expansion-source-20",
        "label": "SAIT — Instrumentation Engineering Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/instrumentation-engineering-technology"
      },
      {
        "id": "page-summit-lithium-technologies-expansion-source-56",
        "label": "Company and local operations",
        "url": "https://summitlithium.tech/company"
      },
      {
        "id": "page-summit-lithium-technologies-expansion-source-57",
        "label": "Technology description",
        "url": "https://summitlithium.tech/technology"
      },
      {
        "id": "page-summit-lithium-technologies-expansion-source-58",
        "label": "Operating-name change and development stage",
        "url": "https://summitlithium.tech/newsroom/summit-nanotech-becomes-summit-lithium-technologies-completes-basic-engineering-for-commercial-dle-plant"
      }
    ],
    "checkedOn": "2026-10-15",
    "detailsId": "summit-lithium-technologies-details"
  },
  {
    "slug": "veerum",
    "org": "VEERUM",
    "discipline": "Physics",
    "question": "How do you know a digital model matches the real site?",
    "work": "VEERUM is a Calgary-headquartered software company offering visual tools for industrial assets. Its published material describes bringing point clouds, 3D models and additional data together so users can inspect and discuss a site remotely. This story focuses on the relationship between a physical place and its digital representation.",
    "localShort": "Calgary headquarters and software-development business; customer assets may be elsewhere.",
    "calgary": "Calgary headquarters and software-development business; customer assets may be elsewhere.",
    "site": "Calgary headquarters and software-development business; customer assets may be elsewhere.",
    "localSourceIds": [
      "page-veerum-expansion-source-59",
      "page-veerum-expansion-source-60",
      "page-veerum-expansion-source-61",
      "page-veerum-expansion-source-62"
    ],
    "explain": "Give students two fictional site drawings: one is precisely scaled but old, and one is recent but approximate. Ask which decisions each supports and what new measurement would resolve the gap.",
    "prompt": "What would you check before using a digital model to decide whether new equipment will fit?",
    "conversation": "What would you check before using a digital model to decide whether new equipment will fit?",
    "mindset": "Accuracy, completeness and freshness are different qualities. More realistic rendering does not guarantee a better measurement.",
    "courses": [
      {
        "course": "Science 10",
        "topic": "Scientific inquiry: measurement and model checking"
      }
    ],
    "courseFitSourceIds": [
      "page-veerum-expansion-source-25",
      "page-veerum-expansion-source-63"
    ],
    "roles": [
      {
        "title": "Spatial data and mapping",
        "note": "Turn measurements tied to places into usable spatial information. The work involves coordinates, scale and checking that datasets describe the same location and time.",
        "evidence": "Point-cloud and spatial visualization are documented capabilities; this does not prove VEERUM employs surveyors for every project.",
        "kind": "interpreted",
        "sourceIds": [
          "page-veerum-expansion-source-59",
          "page-veerum-expansion-source-60",
          "page-veerum-expansion-source-61",
          "page-veerum-expansion-source-62"
        ]
      },
      {
        "title": "Software and data systems",
        "note": "Build the tools that move, process and display information. Reliable software needs testing against missing, delayed and unexpected data as well as ideal examples.",
        "evidence": "The product and careers materials support software work areas.",
        "kind": "interpreted",
        "sourceIds": [
          "page-veerum-expansion-source-59",
          "page-veerum-expansion-source-60",
          "page-veerum-expansion-source-61",
          "page-veerum-expansion-source-62"
        ]
      },
      {
        "title": "Quality and traceability",
        "note": "Make it possible to explain how a result or product was produced. Quality work checks records, methods and acceptance criteria so variation can be investigated rather than hidden.",
        "evidence": "Data checks are an interpreted work area linked to reliable visualization, not a verified quality job title.",
        "kind": "interpreted",
        "sourceIds": [
          "page-veerum-expansion-source-59",
          "page-veerum-expansion-source-60",
          "page-veerum-expansion-source-61",
          "page-veerum-expansion-source-62"
        ]
      }
    ],
    "rolesNote": "Work areas and related occupations, not a staff roster or a list of open vacancies. Individual evidence notes distinguish company work from editorial connections.",
    "pathways": [
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Geomatics Engineering Technology",
        "note": "Learn surveying, GIS, positioning and remote sensing. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-veerum-expansion-source-42"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Software Development",
        "note": "Learn to design, test and build software across front-end and back-end systems. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-veerum-expansion-source-14"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Mechanical Engineering Technology",
        "note": "Study mechanical systems, design and manufacturing, with specialization options. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-veerum-expansion-source-18"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "VEERUM is a Calgary-headquartered software company offering visual tools for industrial assets. Its published material describes bringing point clouds, 3D models and additional data together so users can inspect and discuss a site remotely. This story focuses on the relationship between a physical place and its digital representation.",
        "status": "Organization-stated",
        "kind": "stated",
        "sourceIds": [
          "page-veerum-expansion-source-59",
          "page-veerum-expansion-source-60",
          "page-veerum-expansion-source-61",
          "page-veerum-expansion-source-62"
        ]
      },
      {
        "type": "local connection",
        "claim": "Calgary headquarters and software-development business; customer assets may be elsewhere.",
        "status": "Organization-stated",
        "kind": "stated",
        "sourceIds": [
          "page-veerum-expansion-source-59",
          "page-veerum-expansion-source-60",
          "page-veerum-expansion-source-61",
          "page-veerum-expansion-source-62"
        ]
      },
      {
        "type": "course fit",
        "claim": "A cross-unit inquiry-skills connection: compare a model with observations, identify gaps and judge whether data are fit for a decision. No specific physics unit or digital-twin outcome is claimed.",
        "status": "Editorial connection to verified course topics",
        "kind": "interpreted",
        "sourceIds": [
          "page-veerum-expansion-source-25",
          "page-veerum-expansion-source-63"
        ]
      },
      {
        "type": "limits",
        "claim": "The capability announcement is dated 2023; do not label it a new feature. A digital twin is not necessarily a real-time or predictive simulation. The current content model only permits Biology, Chemistry or Physics; review the strongest classroom placement before implementation rather than forcing a fit.",
        "status": "Scope of this example",
        "kind": "interpreted",
        "sourceIds": [
          "page-veerum-expansion-source-59",
          "page-veerum-expansion-source-60",
          "page-veerum-expansion-source-61",
          "page-veerum-expansion-source-62"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-veerum-expansion-source-14",
        "label": "SAIT — Software Development",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/software-development"
      },
      {
        "id": "page-veerum-expansion-source-18",
        "label": "SAIT — Mechanical Engineering Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/mechanical-engineering-technology"
      },
      {
        "id": "page-veerum-expansion-source-25",
        "label": "Calgary Board of Education: Science 10/20/30 course topics",
        "url": "https://eps.cbe.ab.ca/science-10-20-30.aspx"
      },
      {
        "id": "page-veerum-expansion-source-42",
        "label": "SAIT — Geomatics Engineering Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/geomatics-engineering-technology"
      },
      {
        "id": "page-veerum-expansion-source-59",
        "label": "Company and platform",
        "url": "https://veerum.com/"
      },
      {
        "id": "page-veerum-expansion-source-60",
        "label": "Calgary contact",
        "url": "https://veerum.com/corporate-contact/"
      },
      {
        "id": "page-veerum-expansion-source-61",
        "label": "3D data and model capabilities",
        "url": "https://veerum.com/news/veerum-announces-support-for-ogc-s-3d-tiles-standard-to-modernize-asset-visualization-for-industrial/"
      },
      {
        "id": "page-veerum-expansion-source-62",
        "label": "Careers check",
        "url": "https://veerum.com/careers/"
      },
      {
        "id": "page-veerum-expansion-source-63",
        "label": "Alberta Science 10 program (government-hosted copy): inquiry skills, pp. 8–10",
        "url": "https://www.gov.nu.ca/sites/default/files/documents/2024-10/Science_10__Alberta_2005_.pdf"
      }
    ],
    "checkedOn": "2026-10-15",
    "detailsId": "veerum-details"
  },
  {
    "slug": "eguana-technologies",
    "org": "Eguana Technologies",
    "discipline": "Physics",
    "question": "How can stored electricity help when supply and demand happen at different times?",
    "work": "Eguana Technologies lists Calgary as its headquarters and offers energy-storage systems and controls. Its products connect stored electrical energy with home and utility needs. A dated Calgary engineering posting also documents real work on power electronics, circuit boards and product testing.",
    "localShort": "Calgary headquarters and historical Calgary engineering evidence. Current manufacturing allocation is not inferred from older documents.",
    "calgary": "Calgary headquarters and historical Calgary engineering evidence. Current manufacturing allocation is not inferred from older documents.",
    "site": "Calgary headquarters and historical Calgary engineering evidence. Current manufacturing allocation is not inferred from older documents.",
    "localSourceIds": [
      "page-eguana-technologies-expansion-source-64",
      "page-eguana-technologies-expansion-source-65",
      "page-eguana-technologies-expansion-source-66"
    ],
    "explain": "Use fictional devices rated at 1 kW and 3 kW and an idealized 6 kWh store. Compare ideal run times, then ask what changes when losses and power limits are included.",
    "prompt": "Could two batteries store the same amount of energy but support different appliances?",
    "conversation": "Could two batteries store the same amount of energy but support different appliances?",
    "mindset": "Ideal answers are six hours and two hours, only if the device is within the system’s power limit. Real run time depends on usable capacity, operating conditions and losses; these are not Eguana specifications.",
    "courses": [
      {
        "course": "Science 10",
        "topic": "Energy transformations in technological systems"
      },
      {
        "course": "Science 30",
        "topic": "Energy and the environment"
      }
    ],
    "courseFitSourceIds": [
      "page-eguana-technologies-expansion-source-25"
    ],
    "roles": [
      {
        "title": "Power-electronics design",
        "note": "Control how electrical energy moves between components. Power-electronics work combines circuit design with testing, thermal limits and the behaviour of the complete system.",
        "evidence": "A dated employer posting explicitly establishes Calgary power-electronics engineering work.",
        "kind": "interpreted",
        "sourceIds": [
          "page-eguana-technologies-expansion-source-64",
          "page-eguana-technologies-expansion-source-65",
          "page-eguana-technologies-expansion-source-66"
        ]
      },
      {
        "title": "Instrument development and testing",
        "note": "Help build and check the equipment that produces measurements. Instrument work joins hardware, software and experiments rather than treating a reading as automatically correct.",
        "evidence": "The posting describes validation and production testing; this work-area label is editorial.",
        "kind": "interpreted",
        "sourceIds": [
          "page-eguana-technologies-expansion-source-64",
          "page-eguana-technologies-expansion-source-65",
          "page-eguana-technologies-expansion-source-66"
        ]
      },
      {
        "title": "Software and data systems",
        "note": "Build the tools that move, process and display information. Reliable software needs testing against missing, delayed and unexpected data as well as ideal examples.",
        "evidence": "Controls and energy-management products support a related software work area; no specific current vacancy is inferred.",
        "kind": "interpreted",
        "sourceIds": [
          "page-eguana-technologies-expansion-source-64",
          "page-eguana-technologies-expansion-source-65",
          "page-eguana-technologies-expansion-source-66"
        ]
      }
    ],
    "rolesNote": "Work areas and related occupations, not a staff roster or a list of open vacancies. Individual evidence notes distinguish company work from editorial connections.",
    "pathways": [
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Electrical Engineering Technology",
        "note": "Study circuits, electrical power and controls with practical laboratory work. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-eguana-technologies-expansion-source-13"
        ]
      },
      {
        "kindLabel": "Bachelor’s degree",
        "label": "University of Calgary — Electrical Engineering",
        "note": "Study electrical phenomena and their engineering applications. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-eguana-technologies-expansion-source-67"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Software Development",
        "note": "Learn to design, test and build software across front-end and back-end systems. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-eguana-technologies-expansion-source-14"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "Eguana Technologies lists Calgary as its headquarters and offers energy-storage systems and controls. Its products connect stored electrical energy with home and utility needs. A dated Calgary engineering posting also documents real work on power electronics, circuit boards and product testing.",
        "status": "Organization-stated",
        "kind": "stated",
        "sourceIds": [
          "page-eguana-technologies-expansion-source-64",
          "page-eguana-technologies-expansion-source-65",
          "page-eguana-technologies-expansion-source-66"
        ]
      },
      {
        "type": "local connection",
        "claim": "Calgary headquarters and historical Calgary engineering evidence. Current manufacturing allocation is not inferred from older documents.",
        "status": "Organization-stated",
        "kind": "stated",
        "sourceIds": [
          "page-eguana-technologies-expansion-source-64",
          "page-eguana-technologies-expansion-source-65",
          "page-eguana-technologies-expansion-source-66"
        ]
      },
      {
        "type": "course fit",
        "claim": "Distinguish stored energy from the rate of transfer. Capacity divided by load is an idealized runtime; actual losses and operating limits change it.",
        "status": "Editorial connection to verified course topics",
        "kind": "interpreted",
        "sourceIds": [
          "page-eguana-technologies-expansion-source-25"
        ]
      },
      {
        "type": "limits",
        "claim": "The 2018 role is historical evidence, not a live opportunity. Do not claim a current Calgary production capacity from older financial reports. No bill-savings estimate or product recommendation is proposed.",
        "status": "Scope of this example",
        "kind": "interpreted",
        "sourceIds": [
          "page-eguana-technologies-expansion-source-64",
          "page-eguana-technologies-expansion-source-65",
          "page-eguana-technologies-expansion-source-66"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-eguana-technologies-expansion-source-13",
        "label": "SAIT — Electrical Engineering Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/electrical-engineering-technology"
      },
      {
        "id": "page-eguana-technologies-expansion-source-14",
        "label": "SAIT — Software Development",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/software-development"
      },
      {
        "id": "page-eguana-technologies-expansion-source-25",
        "label": "Calgary Board of Education: Science 10/20/30 course topics",
        "url": "https://eps.cbe.ab.ca/science-10-20-30.aspx"
      },
      {
        "id": "page-eguana-technologies-expansion-source-64",
        "label": "Storage products",
        "url": "https://eguanatech.com/products/energy-storage-systems/"
      },
      {
        "id": "page-eguana-technologies-expansion-source-65",
        "label": "Current Calgary headquarters",
        "url": "https://eguanatech.com/contact/contact-us/"
      },
      {
        "id": "page-eguana-technologies-expansion-source-66",
        "label": "Historical employer role, dated 14 February 2018",
        "url": "https://eguanatech.com/_resources/careers/Power-Electronics-Engineer.pdf"
      },
      {
        "id": "page-eguana-technologies-expansion-source-67",
        "label": "University of Calgary — Electrical Engineering",
        "url": "https://schulich.ucalgary.ca/future-students/undergraduate/programs/majors"
      }
    ],
    "checkedOn": "2026-10-15",
    "detailsId": "eguana-technologies-details"
  },
  {
    "slug": "ftg-aerospace-calgary",
    "org": "FTG Aerospace Calgary (formerly FLYHT)",
    "discipline": "Physics",
    "question": "How can passenger aircraft help us understand the atmosphere?",
    "work": "The FLYHT website now identifies the business as FTG Aerospace Calgary and announces its amalgamation into Firan Technology Group. Its products connect aircraft data with ground systems, and its weather material describes airborne observations. The example follows a measurement from an aircraft to people who interpret it.",
    "localShort": "FTG Aerospace Calgary address and aircraft-data/software work. Sensor observations are collected along flight routes, not only over Calgary.",
    "calgary": "FTG Aerospace Calgary address and aircraft-data/software work. Sensor observations are collected along flight routes, not only over Calgary.",
    "site": "FTG Aerospace Calgary address and aircraft-data/software work. Sensor observations are collected along flight routes, not only over Calgary.",
    "localSourceIds": [
      "page-ftg-aerospace-calgary-expansion-source-68",
      "page-ftg-aerospace-calgary-expansion-source-69",
      "page-ftg-aerospace-calgary-expansion-source-70",
      "page-ftg-aerospace-calgary-expansion-source-30"
    ],
    "explain": "Give students a fictional route map with three aircraft tracks. Ask where observations would be concentrated and which regions would still need another source of measurement.",
    "prompt": "How would a map of scheduled flights affect the weather observations available?",
    "conversation": "How would a map of scheduled flights affect the weather observations available?",
    "mindset": "More observations are not the same as uniform coverage. Do not say all aircraft or all company systems measure humidity; the source distinguishes TAMDAR from AMDAR-over-AFIRS.",
    "courses": [
      {
        "course": "Science 10",
        "topic": "Atmospheric observations and global systems"
      },
      {
        "course": "Science 30",
        "topic": "Electromagnetic energy and communication"
      }
    ],
    "courseFitSourceIds": [
      "page-ftg-aerospace-calgary-expansion-source-25"
    ],
    "roles": [
      {
        "title": "Avionics and electronics",
        "note": "Work on the electronic systems that allow aircraft to communicate, navigate and collect data. Troubleshooting means distinguishing a faulty sensor from wiring, power or software problems.",
        "evidence": "Aircraft hardware and communications are stated product areas.",
        "kind": "interpreted",
        "sourceIds": [
          "page-ftg-aerospace-calgary-expansion-source-68",
          "page-ftg-aerospace-calgary-expansion-source-69",
          "page-ftg-aerospace-calgary-expansion-source-70",
          "page-ftg-aerospace-calgary-expansion-source-30"
        ]
      },
      {
        "title": "Software and data systems",
        "note": "Build the tools that move, process and display information. Reliable software needs testing against missing, delayed and unexpected data as well as ideal examples.",
        "evidence": "The employer publishes detailed Calgary software roles; one exact card is included.",
        "kind": "interpreted",
        "sourceIds": [
          "page-ftg-aerospace-calgary-expansion-source-68",
          "page-ftg-aerospace-calgary-expansion-source-69",
          "page-ftg-aerospace-calgary-expansion-source-70",
          "page-ftg-aerospace-calgary-expansion-source-30"
        ]
      },
      {
        "title": "Weather-data interpretation",
        "note": "Use observations to understand changing atmospheric conditions. Weather-data work checks where and when a measurement was made before combining it with other evidence.",
        "evidence": "Meteorological interpretation is a related downstream occupation, not a verified Calgary job at the company.",
        "kind": "interpreted",
        "sourceIds": [
          "page-ftg-aerospace-calgary-expansion-source-68",
          "page-ftg-aerospace-calgary-expansion-source-69",
          "page-ftg-aerospace-calgary-expansion-source-70",
          "page-ftg-aerospace-calgary-expansion-source-30"
        ]
      }
    ],
    "rolesNote": "Work areas and related occupations, not a staff roster or a list of open vacancies. Individual evidence notes distinguish company work from editorial connections.",
    "pathways": [
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Avionics Technology",
        "note": "Study aircraft electrical, electronic, communication and navigation systems. Training supports a route toward AME E licensing; graduation alone does not confer that licence. Check Transport Canada’s requirements.",
        "kind": "interpreted",
        "sourceIds": [
          "page-ftg-aerospace-calgary-expansion-source-32"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Software Development",
        "note": "Learn to design, test and build software across front-end and back-end systems. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-ftg-aerospace-calgary-expansion-source-14"
        ]
      },
      {
        "kindLabel": "Diploma",
        "label": "SAIT — Electrical Engineering Technology",
        "note": "Study circuits, electrical power and controls with practical laboratory work. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        "kind": "interpreted",
        "sourceIds": [
          "page-ftg-aerospace-calgary-expansion-source-13"
        ]
      }
    ],
    "ledger": [
      {
        "type": "work",
        "claim": "The FLYHT website now identifies the business as FTG Aerospace Calgary and announces its amalgamation into Firan Technology Group. Its products connect aircraft data with ground systems, and its weather material describes airborne observations. The example follows a measurement from an aircraft to people who interpret it.",
        "status": "Organization-stated",
        "kind": "stated",
        "sourceIds": [
          "page-ftg-aerospace-calgary-expansion-source-68",
          "page-ftg-aerospace-calgary-expansion-source-69",
          "page-ftg-aerospace-calgary-expansion-source-70",
          "page-ftg-aerospace-calgary-expansion-source-30"
        ]
      },
      {
        "type": "local connection",
        "claim": "FTG Aerospace Calgary address and aircraft-data/software work. Sensor observations are collected along flight routes, not only over Calgary.",
        "status": "Organization-stated",
        "kind": "stated",
        "sourceIds": [
          "page-ftg-aerospace-calgary-expansion-source-68",
          "page-ftg-aerospace-calgary-expansion-source-69",
          "page-ftg-aerospace-calgary-expansion-source-70",
          "page-ftg-aerospace-calgary-expansion-source-30"
        ]
      },
      {
        "type": "course fit",
        "claim": "Separate atmospheric measurements, transmission and interpretation. Aircraft observations sample particular routes and times; they do not provide complete atmospheric coverage.",
        "status": "Editorial connection to verified course topics",
        "kind": "interpreted",
        "sourceIds": [
          "page-ftg-aerospace-calgary-expansion-source-25"
        ]
      },
      {
        "type": "limits",
        "claim": "Use FTG Aerospace Calgary (formerly FLYHT) as the display identity, with the former name searchable. The role titled Embedded Software Developer describes senior responsibilities in its body; do not present it as entry level. The separate Senior Enterprise Software Developer is used for the draft job card to preserve an unambiguous title.",
        "status": "Scope of this example",
        "kind": "interpreted",
        "sourceIds": [
          "page-ftg-aerospace-calgary-expansion-source-68",
          "page-ftg-aerospace-calgary-expansion-source-69",
          "page-ftg-aerospace-calgary-expansion-source-70",
          "page-ftg-aerospace-calgary-expansion-source-30"
        ]
      }
    ],
    "sources": [
      {
        "id": "page-ftg-aerospace-calgary-expansion-source-13",
        "label": "SAIT — Electrical Engineering Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/electrical-engineering-technology"
      },
      {
        "id": "page-ftg-aerospace-calgary-expansion-source-14",
        "label": "SAIT — Software Development",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/software-development"
      },
      {
        "id": "page-ftg-aerospace-calgary-expansion-source-25",
        "label": "Calgary Board of Education: Science 10/20/30 course topics",
        "url": "https://eps.cbe.ab.ca/science-10-20-30.aspx"
      },
      {
        "id": "page-ftg-aerospace-calgary-expansion-source-30",
        "label": "AME licensing overview",
        "url": "https://tc.canada.ca/en/aviation/licensing-aircraft-maintenance-engineers-ames/obtaining-aircraft-maintenance-engineer-ame-licence"
      },
      {
        "id": "page-ftg-aerospace-calgary-expansion-source-32",
        "label": "SAIT — Avionics Technology",
        "url": "https://www.sait.ca/programs-and-courses/diplomas/avionics-technology"
      },
      {
        "id": "page-ftg-aerospace-calgary-expansion-source-68",
        "label": "Current company identity and products",
        "url": "https://flyht.com/"
      },
      {
        "id": "page-ftg-aerospace-calgary-expansion-source-69",
        "label": "Weather observations and differences between systems",
        "url": "https://flyht.com/weather-sensors/tamdar/"
      },
      {
        "id": "page-ftg-aerospace-calgary-expansion-source-70",
        "label": "Calgary software role evidence",
        "url": "https://flyht.com/people/"
      }
    ],
    "checkedOn": "2026-10-15",
    "detailsId": "ftg-aerospace-calgary-details"
  }
];

export const expansionOrganizations: Organization[] = [
  {
    "id": "botaneco",
    "name": "Botaneco",
    "organizationType": "company",
    "tagline": "Useful ingredients are hidden inside an ordinary seed.",
    "description": {
      "text": "Botaneco develops ingredients from oilseeds for feed, food and personal-care products. It describes a water-based process that separates proteins and oleosomes, the seed’s natural oil-containing structures. Its Calgary headquarters includes research and development staff; its team names biochemists, engineers, food scientists and technicians.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-1",
        "expansion-source-2",
        "expansion-source-3",
        "expansion-source-4"
      ]
    },
    "problem": {
      "text": "How do you separate useful components while retaining the properties a customer needs?",
      "kind": "interpreted",
      "sourceIds": [
        "expansion-source-1",
        "expansion-source-2",
        "expansion-source-3",
        "expansion-source-4"
      ]
    },
    "offering": {
      "text": "Oilseed ingredients and a processing approach designed to preserve their functionality.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-1",
        "expansion-source-2",
        "expansion-source-3",
        "expansion-source-4"
      ]
    },
    "beneficiaries": {
      "text": "Ingredient users developing aquaculture feeds, plant-based foods and personal-care products.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-1",
        "expansion-source-2",
        "expansion-source-3",
        "expansion-source-4"
      ]
    },
    "headquarters": {
      "text": "Calgary headquarters and R&D; the sources do not establish that every manufacturing step takes place in Calgary.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-1",
        "expansion-source-2",
        "expansion-source-3",
        "expansion-source-4"
      ]
    },
    "localConnection": {
      "text": "Calgary headquarters and R&D; the sources do not establish that every manufacturing step takes place in Calgary.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-1",
        "expansion-source-2",
        "expansion-source-3",
        "expansion-source-4"
      ]
    },
    "websiteSourceId": "expansion-source-1",
    "checkedOn": "2026-10-15",
    "careersSourceId": "expansion-source-4"
  },
  {
    "id": "nanalysis",
    "name": "Nanalysis",
    "organizationType": "company",
    "tagline": "A chemical sample can produce a pattern we can interpret.",
    "description": {
      "text": "Nanalysis develops and manufactures compact magnetic-resonance instruments and identifies its head office in Calgary. Its benchtop NMR products are used in areas including teaching, chemistry and food science. This example focuses on chemical analysis rather than medical imaging.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-9",
        "expansion-source-10",
        "expansion-source-11"
      ]
    },
    "problem": {
      "text": "How can an instrument reveal information that cannot be obtained by looking at a sample?",
      "kind": "interpreted",
      "sourceIds": [
        "expansion-source-9",
        "expansion-source-10",
        "expansion-source-11"
      ]
    },
    "offering": {
      "text": "Benchtop nuclear magnetic resonance instruments and support for their applications.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-9",
        "expansion-source-10",
        "expansion-source-11"
      ]
    },
    "beneficiaries": {
      "text": "Laboratories, researchers, educators and industrial users analysing materials.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-9",
        "expansion-source-10",
        "expansion-source-11"
      ]
    },
    "headquarters": {
      "text": "Calgary head office and instrument-development/manufacturing company; individual team assignments are not mapped to a specific vacancy.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-9",
        "expansion-source-10",
        "expansion-source-11"
      ]
    },
    "localConnection": {
      "text": "Calgary head office and instrument-development/manufacturing company; individual team assignments are not mapped to a specific vacancy.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-9",
        "expansion-source-10",
        "expansion-source-11"
      ]
    },
    "websiteSourceId": "expansion-source-9",
    "checkedOn": "2026-10-15",
    "careersSourceId": "expansion-source-11"
  },
  {
    "id": "exergy-solutions",
    "name": "Exergy Solutions",
    "organizationType": "company",
    "tagline": "A part can be made in more than one way.",
    "description": {
      "text": "Exergy Solutions combines engineering and manufacturing at its Nexus facility in Calgary. Its services include reverse engineering, metal 3D printing, CNC machining and prototyping. These capabilities offer a concrete way to discuss how design choices affect how a component is made.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-15",
        "expansion-source-16",
        "expansion-source-17"
      ]
    },
    "problem": {
      "text": "Which manufacturing method best meets a part’s requirements?",
      "kind": "interpreted",
      "sourceIds": [
        "expansion-source-15",
        "expansion-source-16",
        "expansion-source-17"
      ]
    },
    "offering": {
      "text": "Design, prototype and fabrication services, including additive manufacturing and machining.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-15",
        "expansion-source-16",
        "expansion-source-17"
      ]
    },
    "beneficiaries": {
      "text": "Organizations developing or maintaining industrial components and systems.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-15",
        "expansion-source-16",
        "expansion-source-17"
      ]
    },
    "headquarters": {
      "text": "Nexus manufacturing facility in Calgary; client projects may be used elsewhere.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-15",
        "expansion-source-16",
        "expansion-source-17"
      ]
    },
    "localConnection": {
      "text": "Nexus manufacturing facility in Calgary; client projects may be used elsewhere.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-15",
        "expansion-source-16",
        "expansion-source-17"
      ]
    },
    "websiteSourceId": "expansion-source-15",
    "checkedOn": "2026-10-15",
    "careersSourceId": "expansion-source-17"
  },
  {
    "id": "livestock-water-recycling",
    "name": "Livestock Water Recycling",
    "organizationType": "company",
    "tagline": "Waste contains materials that can be separated and used again.",
    "description": {
      "text": "Livestock Water Recycling develops manure-treatment systems from a Calgary innovation centre and manufacturing plant. Its PLANT process uses mechanical and chemical treatments to separate solids, nutrient-rich material and water. The company describes uses at livestock operations and other facilities handling nutrient-laden liquids.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-21",
        "expansion-source-22",
        "expansion-source-23",
        "expansion-source-24"
      ]
    },
    "problem": {
      "text": "How can the components of manure be managed separately rather than as one large mixed stream?",
      "kind": "interpreted",
      "sourceIds": [
        "expansion-source-21",
        "expansion-source-22",
        "expansion-source-23",
        "expansion-source-24"
      ]
    },
    "offering": {
      "text": "Treatment systems that separate nutrient streams and recover water for reuse.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-21",
        "expansion-source-22",
        "expansion-source-23",
        "expansion-source-24"
      ]
    },
    "beneficiaries": {
      "text": "Farm operators and other users managing manure or similar nutrient-rich liquids.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-21",
        "expansion-source-22",
        "expansion-source-23",
        "expansion-source-24"
      ]
    },
    "headquarters": {
      "text": "Innovation centre and manufacturing plant in Calgary; farm installations are not assumed to be in the city.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-21",
        "expansion-source-22",
        "expansion-source-23",
        "expansion-source-24"
      ]
    },
    "localConnection": {
      "text": "Innovation centre and manufacturing plant in Calgary; farm installations are not assumed to be in the city.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-21",
        "expansion-source-22",
        "expansion-source-23",
        "expansion-source-24"
      ]
    },
    "websiteSourceId": "expansion-source-21",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "avmax",
    "name": "Avmax",
    "organizationType": "company",
    "tagline": "A maintenance decision needs evidence, not a guess.",
    "description": {
      "text": "Avmax provides aircraft services including maintenance, avionics, engineering and component repairs. Its current contact page explicitly lists those activities in Calgary. This example uses inspection and maintenance to connect physical properties with careful technical judgment.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-26",
        "expansion-source-27",
        "expansion-source-28",
        "expansion-source-29",
        "expansion-source-30"
      ]
    },
    "problem": {
      "text": "How can a team judge a component’s condition and decide what authorized work is needed?",
      "kind": "interpreted",
      "sourceIds": [
        "expansion-source-26",
        "expansion-source-27",
        "expansion-source-28",
        "expansion-source-29",
        "expansion-source-30"
      ]
    },
    "offering": {
      "text": "Aircraft maintenance, repair, engineering and related support services.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-26",
        "expansion-source-27",
        "expansion-source-28",
        "expansion-source-29",
        "expansion-source-30"
      ]
    },
    "beneficiaries": {
      "text": "Aircraft owners and operators who require documented maintenance support.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-26",
        "expansion-source-27",
        "expansion-source-28",
        "expansion-source-29",
        "expansion-source-30"
      ]
    },
    "headquarters": {
      "text": "Calgary corporate office and documented maintenance, engineering, avionics and component-repair services.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-26",
        "expansion-source-27",
        "expansion-source-28",
        "expansion-source-29",
        "expansion-source-30"
      ]
    },
    "localConnection": {
      "text": "Calgary corporate office and documented maintenance, engineering, avionics and component-repair services.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-26",
        "expansion-source-27",
        "expansion-source-28",
        "expansion-source-29",
        "expansion-source-30"
      ]
    },
    "websiteSourceId": "expansion-source-26",
    "checkedOn": "2026-10-15",
    "careersSourceId": "expansion-source-29"
  },
  {
    "id": "northern-rna",
    "name": "Northern RNA",
    "organizationType": "company",
    "tagline": "Knowing what to make is different from making it consistently.",
    "description": {
      "text": "Northern RNA offers nucleic-acid manufacturing and development services, including DNA and mRNA production, purification and analytical testing. Its website identifies a Calgary address and describes manufacturing and quality teams. The story here is about reproducible biological materials, not whether a treatment works in patients.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-33",
        "expansion-source-34",
        "expansion-source-35",
        "expansion-source-36"
      ]
    },
    "problem": {
      "text": "How do you know two batches meet the same intended requirements?",
      "kind": "interpreted",
      "sourceIds": [
        "expansion-source-33",
        "expansion-source-34",
        "expansion-source-35",
        "expansion-source-36"
      ]
    },
    "offering": {
      "text": "Nucleic-acid development, production, purification and testing services for customers.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-33",
        "expansion-source-34",
        "expansion-source-35",
        "expansion-source-36"
      ]
    },
    "beneficiaries": {
      "text": "Research and development organizations needing characterized biological materials.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-33",
        "expansion-source-34",
        "expansion-source-35",
        "expansion-source-36"
      ]
    },
    "headquarters": {
      "text": "Calgary address and biomanufacturing business; the sources do not allocate every service or partner activity to a specific Calgary room or facility.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-33",
        "expansion-source-34",
        "expansion-source-35",
        "expansion-source-36"
      ]
    },
    "localConnection": {
      "text": "Calgary address and biomanufacturing business; the sources do not allocate every service or partner activity to a specific Calgary room or facility.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-33",
        "expansion-source-34",
        "expansion-source-35",
        "expansion-source-36"
      ]
    },
    "websiteSourceId": "expansion-source-33",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "aerium-analytics",
    "name": "AERIUM Analytics",
    "organizationType": "company",
    "tagline": "An animal’s response can become part of an engineering design.",
    "description": {
      "text": "AERIUM Analytics is a Calgary-based drone-services company. Its RoBird system is designed to mimic a predatory bird to influence the behaviour of other birds. The company describes applications at airports and other sites, and identifies work with Edmonton International Airport. Calgary is the company connection; the airport example is in the Edmonton region.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-38",
        "expansion-source-39",
        "expansion-source-40",
        "expansion-source-41"
      ]
    },
    "problem": {
      "text": "Can a controlled wildlife response help reduce conflict around an airport?",
      "kind": "interpreted",
      "sourceIds": [
        "expansion-source-38",
        "expansion-source-39",
        "expansion-source-40",
        "expansion-source-41"
      ]
    },
    "offering": {
      "text": "Drone operations, wildlife-management services and spatial-data services.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-38",
        "expansion-source-39",
        "expansion-source-40",
        "expansion-source-41"
      ]
    },
    "beneficiaries": {
      "text": "Airport and site operators managing wildlife interactions and operational risks.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-38",
        "expansion-source-39",
        "expansion-source-40",
        "expansion-source-41"
      ]
    },
    "headquarters": {
      "text": "Calgary head office; the cited airport deployment is outside Calgary.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-38",
        "expansion-source-39",
        "expansion-source-40",
        "expansion-source-41"
      ]
    },
    "localConnection": {
      "text": "Calgary head office; the cited airport deployment is outside Calgary.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-38",
        "expansion-source-39",
        "expansion-source-40",
        "expansion-source-41"
      ]
    },
    "websiteSourceId": "expansion-source-38",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "geologicai",
    "name": "GeologicAI",
    "organizationType": "company",
    "tagline": "The same rock can be measured in several different ways.",
    "description": {
      "text": "GeologicAI develops core-scanning and data tools for resource work and lists a Calgary location. Its system combines measurements such as visible images, X-ray fluorescence, hyperspectral sensing and geometric data. These provide different kinds of evidence for interpreting drill core and building geological understanding.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-43",
        "expansion-source-44",
        "expansion-source-45"
      ]
    },
    "problem": {
      "text": "How can several measurements improve an interpretation of a rock sample?",
      "kind": "interpreted",
      "sourceIds": [
        "expansion-source-43",
        "expansion-source-44",
        "expansion-source-45"
      ]
    },
    "offering": {
      "text": "Core scanning, digital logging, analytical tools and resource-modeling services.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-43",
        "expansion-source-44",
        "expansion-source-45"
      ]
    },
    "beneficiaries": {
      "text": "Geoscientists and resource teams interpreting samples and planning further work.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-43",
        "expansion-source-44",
        "expansion-source-45"
      ]
    },
    "headquarters": {
      "text": "Calgary office and company development team; scanning and field operations also occur at customer sites internationally.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-43",
        "expansion-source-44",
        "expansion-source-45"
      ]
    },
    "localConnection": {
      "text": "Calgary office and company development team; scanning and field operations also occur at customer sites internationally.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-43",
        "expansion-source-44",
        "expansion-source-45"
      ]
    },
    "websiteSourceId": "expansion-source-43",
    "checkedOn": "2026-10-15",
    "careersSourceId": "expansion-source-44"
  },
  {
    "id": "tangent-design-engineering",
    "name": "Tangent Design Engineering",
    "organizationType": "company",
    "tagline": "A working laboratory process still needs a design for the field.",
    "description": {
      "text": "Tangent Design Engineering is a Calgary engineering and design consultancy. Its Katal case study describes designing and building a transportable demonstration skid for a refining process. Mechanical, electrical and process engineers worked with in-house millwrights to develop a controllable prototype that could fit in a shipping container.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-47"
      ]
    },
    "problem": {
      "text": "What has to change when a laboratory process becomes a transportable system?",
      "kind": "interpreted",
      "sourceIds": [
        "expansion-source-47"
      ]
    },
    "offering": {
      "text": "Engineering design, prototyping and integration services.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-47"
      ]
    },
    "beneficiaries": {
      "text": "Teams needing to test or demonstrate a technology beyond laboratory scale.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-47"
      ]
    },
    "headquarters": {
      "text": "Calgary consultancy and documented prototype build in its shop; the case study is undated.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-47"
      ]
    },
    "localConnection": {
      "text": "Calgary consultancy and documented prototype build in its shop; the case study is undated.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-47"
      ]
    },
    "websiteSourceId": "expansion-source-47",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "foremost",
    "name": "Foremost",
    "organizationType": "company",
    "tagline": "A heavy machine needs the ground to support it.",
    "description": {
      "text": "Foremost manufactures industrial and mobile equipment and identifies Calgary among its Alberta locations. Its product material includes wheeled and tracked off-road vehicles. The classroom story uses ground contact to connect vehicle design with pressure and mobility.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-49",
        "expansion-source-50",
        "expansion-source-51",
        "expansion-source-51"
      ]
    },
    "problem": {
      "text": "How do vehicle weight and ground contact affect travel over soft terrain?",
      "kind": "interpreted",
      "sourceIds": [
        "expansion-source-49",
        "expansion-source-50",
        "expansion-source-51",
        "expansion-source-51"
      ]
    },
    "offering": {
      "text": "Industrial equipment, mobile machinery and associated manufacturing and service work.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-49",
        "expansion-source-50",
        "expansion-source-51",
        "expansion-source-51"
      ]
    },
    "beneficiaries": {
      "text": "Organizations operating equipment in demanding terrain or industrial settings.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-49",
        "expansion-source-50",
        "expansion-source-51",
        "expansion-source-51"
      ]
    },
    "headquarters": {
      "text": "Calgary North engineering and manufacturing facility. The company explicitly lists tracked and wheeled off-road vehicle engineering here; individual model build locations are not asserted.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-49",
        "expansion-source-50",
        "expansion-source-51",
        "expansion-source-51"
      ]
    },
    "localConnection": {
      "text": "Calgary North engineering and manufacturing facility. The company explicitly lists tracked and wheeled off-road vehicle engineering here; individual model build locations are not asserted.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-49",
        "expansion-source-50",
        "expansion-source-51",
        "expansion-source-51"
      ]
    },
    "websiteSourceId": "expansion-source-49",
    "checkedOn": "2026-10-15",
    "careersSourceId": "expansion-source-49"
  },
  {
    "id": "carbonova",
    "name": "Carbonova",
    "organizationType": "company",
    "tagline": "Carbon atoms can become part of a different material.",
    "description": {
      "text": "Carbonova develops a catalytic process that uses carbon-containing gases to make carbon nanofibres. Emissions Reduction Alberta documents Calgary pilot work and a separate commercial-demonstration project. The example focuses on converting feedstocks and testing a material’s usefulness, rather than assuming that using an emission stream automatically delivers a net climate benefit.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-53",
        "expansion-source-54",
        "expansion-source-55"
      ]
    },
    "problem": {
      "text": "Can a carbon-containing gas become an additive with useful material properties?",
      "kind": "interpreted",
      "sourceIds": [
        "expansion-source-53",
        "expansion-source-54",
        "expansion-source-55"
      ]
    },
    "offering": {
      "text": "Carbon nanofibre technology and material development for applications such as composites and construction materials.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-53",
        "expansion-source-54",
        "expansion-source-55"
      ]
    },
    "beneficiaries": {
      "text": "Material and product developers evaluating additives for a specific performance requirement.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-53",
        "expansion-source-54",
        "expansion-source-55"
      ]
    },
    "headquarters": {
      "text": "Calgary pilot and demonstration-project evidence; the larger demonstration unit is not described here as commissioned.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-53",
        "expansion-source-54",
        "expansion-source-55"
      ]
    },
    "localConnection": {
      "text": "Calgary pilot and demonstration-project evidence; the larger demonstration unit is not described here as commissioned.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-53",
        "expansion-source-54",
        "expansion-source-55"
      ]
    },
    "websiteSourceId": "expansion-source-53",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "summit-lithium-technologies",
    "name": "Summit Lithium Technologies",
    "organizationType": "company",
    "tagline": "A useful separation must work again and again.",
    "description": {
      "text": "Summit Lithium Technologies, formerly operating as Summit Nanotech, develops direct lithium extraction technology. Its Calgary headquarters includes mechanical engineering, sorbent research and pilot-scale sorbent manufacturing. Its technology description combines a sorbent, a multi-column system and process modeling; other facilities and field activity are outside Canada.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-56",
        "expansion-source-57",
        "expansion-source-58"
      ]
    },
    "problem": {
      "text": "How can a material repeatedly capture lithium from a mixture and then release it?",
      "kind": "interpreted",
      "sourceIds": [
        "expansion-source-56",
        "expansion-source-57",
        "expansion-source-58"
      ]
    },
    "offering": {
      "text": "Sorbent-based lithium-extraction systems and related process development.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-56",
        "expansion-source-57",
        "expansion-source-58"
      ]
    },
    "beneficiaries": {
      "text": "Lithium producers and resource developers evaluating brine-processing options.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-56",
        "expansion-source-57",
        "expansion-source-58"
      ]
    },
    "headquarters": {
      "text": "Calgary headquarters, sorbent R&D, mechanical engineering and pilot-scale sorbent manufacturing. Commercial sorbent supply and field demonstrations are not assumed to be Calgary activities.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-56",
        "expansion-source-57",
        "expansion-source-58"
      ]
    },
    "localConnection": {
      "text": "Calgary headquarters, sorbent R&D, mechanical engineering and pilot-scale sorbent manufacturing. Commercial sorbent supply and field demonstrations are not assumed to be Calgary activities.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-56",
        "expansion-source-57",
        "expansion-source-58"
      ]
    },
    "websiteSourceId": "expansion-source-56",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "veerum",
    "name": "VEERUM",
    "organizationType": "company",
    "tagline": "A digital view is useful only if it represents the place reliably.",
    "description": {
      "text": "VEERUM is a Calgary-headquartered software company offering visual tools for industrial assets. Its published material describes bringing point clouds, 3D models and additional data together so users can inspect and discuss a site remotely. This story focuses on the relationship between a physical place and its digital representation.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-59",
        "expansion-source-60",
        "expansion-source-61",
        "expansion-source-62"
      ]
    },
    "problem": {
      "text": "How do you know a digital representation is accurate and current enough for a decision?",
      "kind": "interpreted",
      "sourceIds": [
        "expansion-source-59",
        "expansion-source-60",
        "expansion-source-61",
        "expansion-source-62"
      ]
    },
    "offering": {
      "text": "Industrial visualization and digital-twin software.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-59",
        "expansion-source-60",
        "expansion-source-61",
        "expansion-source-62"
      ]
    },
    "beneficiaries": {
      "text": "Asset owners, engineering teams and people collaborating on industrial sites.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-59",
        "expansion-source-60",
        "expansion-source-61",
        "expansion-source-62"
      ]
    },
    "headquarters": {
      "text": "Calgary headquarters and software-development business; customer assets may be elsewhere.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-59",
        "expansion-source-60",
        "expansion-source-61",
        "expansion-source-62"
      ]
    },
    "localConnection": {
      "text": "Calgary headquarters and software-development business; customer assets may be elsewhere.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-59",
        "expansion-source-60",
        "expansion-source-61",
        "expansion-source-62"
      ]
    },
    "websiteSourceId": "expansion-source-59",
    "checkedOn": "2026-10-15",
    "careersSourceId": "expansion-source-62"
  },
  {
    "id": "eguana-technologies",
    "name": "Eguana Technologies",
    "organizationType": "company",
    "tagline": "Storing energy changes when it can be used.",
    "description": {
      "text": "Eguana Technologies lists Calgary as its headquarters and offers energy-storage systems and controls. Its products connect stored electrical energy with home and utility needs. A dated Calgary engineering posting also documents real work on power electronics, circuit boards and product testing.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-64",
        "expansion-source-65",
        "expansion-source-66"
      ]
    },
    "problem": {
      "text": "How can energy storage help when electricity supply and demand occur at different times?",
      "kind": "interpreted",
      "sourceIds": [
        "expansion-source-64",
        "expansion-source-65",
        "expansion-source-66"
      ]
    },
    "offering": {
      "text": "Energy-storage systems and associated control technology.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-64",
        "expansion-source-65",
        "expansion-source-66"
      ]
    },
    "beneficiaries": {
      "text": "Households, installers and utilities managing energy availability and demand.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-64",
        "expansion-source-65",
        "expansion-source-66"
      ]
    },
    "headquarters": {
      "text": "Calgary headquarters and historical Calgary engineering evidence. Current manufacturing allocation is not inferred from older documents.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-64",
        "expansion-source-65",
        "expansion-source-66"
      ]
    },
    "localConnection": {
      "text": "Calgary headquarters and historical Calgary engineering evidence. Current manufacturing allocation is not inferred from older documents.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-64",
        "expansion-source-65",
        "expansion-source-66"
      ]
    },
    "websiteSourceId": "expansion-source-64",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "ftg-aerospace-calgary",
    "name": "FTG Aerospace Calgary (formerly FLYHT)",
    "organizationType": "company",
    "tagline": "An aircraft can carry measurements as well as passengers.",
    "description": {
      "text": "The FLYHT website now identifies the business as FTG Aerospace Calgary and announces its amalgamation into Firan Technology Group. Its products connect aircraft data with ground systems, and its weather material describes airborne observations. The example follows a measurement from an aircraft to people who interpret it.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-68",
        "expansion-source-69",
        "expansion-source-70",
        "expansion-source-30"
      ]
    },
    "problem": {
      "text": "How can an aircraft observation become useful information about the atmosphere?",
      "kind": "interpreted",
      "sourceIds": [
        "expansion-source-68",
        "expansion-source-69",
        "expansion-source-70",
        "expansion-source-30"
      ]
    },
    "offering": {
      "text": "Aircraft communications, data systems and weather-sensing products.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-68",
        "expansion-source-69",
        "expansion-source-70",
        "expansion-source-30"
      ]
    },
    "beneficiaries": {
      "text": "Aircraft operators and users of airborne weather information.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-68",
        "expansion-source-69",
        "expansion-source-70",
        "expansion-source-30"
      ]
    },
    "headquarters": {
      "text": "FTG Aerospace Calgary address and aircraft-data/software work. Sensor observations are collected along flight routes, not only over Calgary.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-68",
        "expansion-source-69",
        "expansion-source-70",
        "expansion-source-30"
      ]
    },
    "localConnection": {
      "text": "FTG Aerospace Calgary address and aircraft-data/software work. Sensor observations are collected along flight routes, not only over Calgary.",
      "kind": "stated",
      "sourceIds": [
        "expansion-source-68",
        "expansion-source-69",
        "expansion-source-70",
        "expansion-source-30"
      ]
    },
    "websiteSourceId": "expansion-source-68",
    "checkedOn": "2026-10-15"
  }
];

export const expansionOrganizationRoles: OrganizationRole[] = [
  {
    "organizationId": "botaneco",
    "roleId": "work-food",
    "establishes": "work-area",
    "label": "Work area · Botaneco explicitly identifies food scientists and biochemists; the task explanation is general.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-1",
      "expansion-source-2",
      "expansion-source-3",
      "expansion-source-4"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "botaneco",
    "roleId": "work-lab",
    "establishes": "work-area",
    "label": "Work area · The company names technicians; sample-analysis tasks are an editorial explanation, not a verified job description.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-1",
      "expansion-source-2",
      "expansion-source-3",
      "expansion-source-4"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "botaneco",
    "roleId": "work-process",
    "establishes": "work-area",
    "label": "Work area · The company names engineers and describes a processing platform; no specific vacancy is asserted.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-1",
      "expansion-source-2",
      "expansion-source-3",
      "expansion-source-4"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "nanalysis",
    "roleId": "work-instrument",
    "establishes": "related-work",
    "label": "Related work · The company develops and manufactures instruments; these are related work areas, not verified titles.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-9",
      "expansion-source-10",
      "expansion-source-11"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "nanalysis",
    "roleId": "work-applications",
    "establishes": "work-area",
    "label": "Work area · Application support is connected to the company’s instrument uses; duties below are editorial.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-9",
      "expansion-source-10",
      "expansion-source-11"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "nanalysis",
    "roleId": "work-software",
    "establishes": "related-work",
    "label": "Related work · Converting and displaying measurements requires data tools; the role link is interpreted, not a claim of an open position.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-9",
      "expansion-source-10",
      "expansion-source-11"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "exergy-solutions",
    "roleId": "work-mechanical",
    "establishes": "work-area",
    "label": "Work area · Design engineering and reverse engineering are stated services.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-15",
      "expansion-source-16",
      "expansion-source-17"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "exergy-solutions",
    "roleId": "work-machining",
    "establishes": "work-area",
    "label": "Work area · CNC machining is a stated in-house capability; exact job duties are explained generally.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-15",
      "expansion-source-16",
      "expansion-source-17"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "exergy-solutions",
    "roleId": "work-quality",
    "establishes": "work-area",
    "label": "Work area · Testing is part of the stated integrated facility; this is a work-area interpretation.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-15",
      "expansion-source-16",
      "expansion-source-17"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "livestock-water-recycling",
    "roleId": "work-process",
    "establishes": "work-area",
    "label": "Work area · Treatment-system development is stated; detailed tasks are an editorial explanation.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-21",
      "expansion-source-22",
      "expansion-source-23",
      "expansion-source-24"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "livestock-water-recycling",
    "roleId": "work-lab",
    "establishes": "work-area",
    "label": "Work area · The Calgary centre identifies analytical tools and process research.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-21",
      "expansion-source-22",
      "expansion-source-23",
      "expansion-source-24"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "livestock-water-recycling",
    "roleId": "work-controls",
    "establishes": "work-area",
    "label": "Work area · Automation is described, and a commissioning/training role names troubleshooting and repair; deployment work can involve US clients.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-21",
      "expansion-source-22",
      "expansion-source-23",
      "expansion-source-24"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "avmax",
    "roleId": "work-maintenance",
    "establishes": "work-area",
    "label": "Work area · Current MRO page names technicians, maintenance checks and inspection services.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-26",
      "expansion-source-27",
      "expansion-source-28",
      "expansion-source-29",
      "expansion-source-30"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "avmax",
    "roleId": "work-avionics",
    "establishes": "work-area",
    "label": "Work area · Current company contact and service pages establish Calgary avionics work.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-26",
      "expansion-source-27",
      "expansion-source-28",
      "expansion-source-29",
      "expansion-source-30"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "avmax",
    "roleId": "work-quality",
    "establishes": "work-area",
    "label": "Work area · Inspection and documented maintenance provide the context; the role explanation is general.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-26",
      "expansion-source-27",
      "expansion-source-28",
      "expansion-source-29",
      "expansion-source-30"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "northern-rna",
    "roleId": "work-bioprocess",
    "establishes": "work-area",
    "label": "Work area · Company development and manufacturing pages describe process optimization and nucleic-acid production.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-33",
      "expansion-source-34",
      "expansion-source-35",
      "expansion-source-36"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "northern-rna",
    "roleId": "work-lab",
    "establishes": "work-area",
    "label": "Work area · Analytical testing is a stated service.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-33",
      "expansion-source-34",
      "expansion-source-35",
      "expansion-source-36"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "northern-rna",
    "roleId": "work-quality",
    "establishes": "work-area",
    "label": "Work area · The company explicitly identifies quality assurance working with manufacturing and lot traceability.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-33",
      "expansion-source-34",
      "expansion-source-35",
      "expansion-source-36"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "aerium-analytics",
    "roleId": "work-drone",
    "establishes": "work-area",
    "label": "Work area · Company operations material explicitly describes pilots, training and field services.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-38",
      "expansion-source-39",
      "expansion-source-40",
      "expansion-source-41"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "aerium-analytics",
    "roleId": "work-wildlife",
    "establishes": "work-area",
    "label": "Work area · Behavioural monitoring and wildlife management are stated work areas; a specific ecologist job title is not verified.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-38",
      "expansion-source-39",
      "expansion-source-40",
      "expansion-source-41"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "aerium-analytics",
    "roleId": "work-spatial",
    "establishes": "related-work",
    "label": "Related work · Company services include GIS and mapping work; this is a related work area, not proof every RoBird assignment uses it.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-38",
      "expansion-source-39",
      "expansion-source-40",
      "expansion-source-41"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "geologicai",
    "roleId": "work-geoscience",
    "establishes": "work-area",
    "label": "Work area · The company names geoscientists and geological interpretation work.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-43",
      "expansion-source-44",
      "expansion-source-45"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "geologicai",
    "roleId": "work-instrument",
    "establishes": "work-area",
    "label": "Work area · Scanning equipment and operators are stated; these generic testing tasks do not establish a Calgary operator vacancy.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-43",
      "expansion-source-44",
      "expansion-source-45"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "geologicai",
    "roleId": "work-software",
    "establishes": "work-area",
    "label": "Work area · Software, analytics and developers are stated work areas.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-43",
      "expansion-source-44",
      "expansion-source-45"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "tangent-design-engineering",
    "roleId": "work-process",
    "establishes": "work-area",
    "label": "Work area · The case names process engineers and flow-diagram work.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-47"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "tangent-design-engineering",
    "roleId": "work-controls",
    "establishes": "work-area",
    "label": "Work area · Electrical engineering and fine process control are described; role label is editorial.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-47"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "tangent-design-engineering",
    "roleId": "work-millwright",
    "establishes": "work-area",
    "label": "Work area · The case explicitly identifies in-house millwrights and shop assembly.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-47"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "foremost",
    "roleId": "work-mechanical",
    "establishes": "work-area",
    "label": "Work area · Company manufacturing and equipment capabilities establish design-related work; individual assignments are not confirmed.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-49",
      "expansion-source-50",
      "expansion-source-51",
      "expansion-source-51"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "foremost",
    "roleId": "work-fabrication",
    "establishes": "work-area",
    "label": "Work area · Employer career material lists welding; application and exact location are unverified.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-49",
      "expansion-source-50",
      "expansion-source-51",
      "expansion-source-51"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "foremost",
    "roleId": "work-millwright",
    "establishes": "work-area",
    "label": "Work area · Employer career material lists assembly/mechanical work; task descriptions are general.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-49",
      "expansion-source-50",
      "expansion-source-51",
      "expansion-source-51"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "carbonova",
    "roleId": "work-process",
    "establishes": "work-area",
    "label": "Work area · Pilot and scale-up work are documented by ERA; role tasks are editorial.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-53",
      "expansion-source-54",
      "expansion-source-55"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "carbonova",
    "roleId": "work-materials",
    "establishes": "work-area",
    "label": "Work area · Customer material assessment and composite testing are supported by project descriptions.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-53",
      "expansion-source-54",
      "expansion-source-55"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "carbonova",
    "roleId": "work-lab",
    "establishes": "work-area",
    "label": "Work area · Measurement and testing are connected work areas, not a verified named vacancy.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-53",
      "expansion-source-54",
      "expansion-source-55"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "summit-lithium-technologies",
    "roleId": "work-materials",
    "establishes": "work-area",
    "label": "Work area · Calgary sorbent R&D and pilot manufacturing are explicitly stated.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-56",
      "expansion-source-57",
      "expansion-source-58"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "summit-lithium-technologies",
    "roleId": "work-process",
    "establishes": "work-area",
    "label": "Work area · System engineering and process modeling are stated capabilities.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-56",
      "expansion-source-57",
      "expansion-source-58"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "summit-lithium-technologies",
    "roleId": "work-controls",
    "establishes": "work-area",
    "label": "Work area · Repeated column operation and modeling support a related controls work area; a specific title is not verified.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-56",
      "expansion-source-57",
      "expansion-source-58"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "veerum",
    "roleId": "work-spatial",
    "establishes": "work-area",
    "label": "Work area · Point-cloud and spatial visualization are documented capabilities; this does not prove VEERUM employs surveyors for every project.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-59",
      "expansion-source-60",
      "expansion-source-61",
      "expansion-source-62"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "veerum",
    "roleId": "work-software",
    "establishes": "work-area",
    "label": "Work area · The product and careers materials support software work areas.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-59",
      "expansion-source-60",
      "expansion-source-61",
      "expansion-source-62"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "veerum",
    "roleId": "work-quality",
    "establishes": "related-work",
    "label": "Related work · Data checks are an interpreted work area linked to reliable visualization, not a verified quality job title.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-59",
      "expansion-source-60",
      "expansion-source-61",
      "expansion-source-62"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "eguana-technologies",
    "roleId": "work-power",
    "establishes": "work-area",
    "label": "Work area · A dated employer posting explicitly establishes Calgary power-electronics engineering work.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-64",
      "expansion-source-65",
      "expansion-source-66"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "eguana-technologies",
    "roleId": "work-instrument",
    "establishes": "work-area",
    "label": "Work area · The posting describes validation and production testing; this work-area label is editorial.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-64",
      "expansion-source-65",
      "expansion-source-66"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "eguana-technologies",
    "roleId": "work-software",
    "establishes": "work-area",
    "label": "Work area · Controls and energy-management products support a related software work area; no specific current vacancy is inferred.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-64",
      "expansion-source-65",
      "expansion-source-66"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "ftg-aerospace-calgary",
    "roleId": "work-avionics",
    "establishes": "work-area",
    "label": "Work area · Aircraft hardware and communications are stated product areas.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-68",
      "expansion-source-69",
      "expansion-source-70",
      "expansion-source-30"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "ftg-aerospace-calgary",
    "roleId": "work-software",
    "establishes": "work-area",
    "label": "Work area · The employer publishes detailed Calgary software roles; one exact card is included.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-68",
      "expansion-source-69",
      "expansion-source-70",
      "expansion-source-30"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "organizationId": "ftg-aerospace-calgary",
    "roleId": "work-weather",
    "establishes": "related-work",
    "label": "Related work · Meteorological interpretation is a related downstream occupation, not a verified Calgary job at the company.",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-68",
      "expansion-source-69",
      "expansion-source-70",
      "expansion-source-30"
    ],
    "checkedOn": "2026-10-15"
  }
];

export const expansionRoles: RoleProfile[] = [
  {
    "id": "work-food",
    "title": "Ingredient and formulation science",
    "summary": "Investigate how ingredients behave in a product. This work connects a material’s composition to properties such as texture, stability or performance in a mixture.",
    "explanation": "Investigate how ingredients behave in a product. This work connects a material’s composition to properties such as texture, stability or performance in a mixture.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Choose a property to compare across formulations."
      },
      {
        "title": "Test and compare",
        "detail": "Prepare controlled trials and observe changes over time."
      },
      {
        "title": "Explain and improve",
        "detail": "Explain the trade-offs between ingredients and processing conditions."
      }
    ],
    "collaborators": [
      "Biochemists, laboratory technicians and product-development teams"
    ],
    "classroomConnection": "Molecules and mixtures help explain why two ingredients can behave differently."
  },
  {
    "id": "work-lab",
    "title": "Laboratory analysis",
    "summary": "Make measurements that other people can trust. A laboratory worker prepares samples, uses a method consistently and records enough detail for someone else to interpret the result.",
    "explanation": "Make measurements that other people can trust. A laboratory worker prepares samples, uses a method consistently and records enough detail for someone else to interpret the result.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Prepare and label samples so their identity is preserved."
      },
      {
        "title": "Test and compare",
        "detail": "Run comparisons or reference samples to check the method."
      },
      {
        "title": "Explain and improve",
        "detail": "Record results, units and limitations before sharing findings."
      }
    ],
    "collaborators": [
      "Scientists, process engineers and quality teams"
    ],
    "classroomConnection": "A repeatable method and a fair comparison matter as much as a single impressive number."
  },
  {
    "id": "work-process",
    "title": "Process engineering",
    "summary": "Turn a useful transformation into a workable sequence of equipment and operating steps. Process engineers consider what enters, what leaves and what conditions the system must maintain.",
    "explanation": "Turn a useful transformation into a workable sequence of equipment and operating steps. Process engineers consider what enters, what leaves and what conditions the system must maintain.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Draw a flow of materials and energy through the system."
      },
      {
        "title": "Test and compare",
        "detail": "Compare operating conditions and equipment options."
      },
      {
        "title": "Explain and improve",
        "detail": "Use trial results to revise the process and communicate constraints."
      }
    ],
    "collaborators": [
      "Laboratory staff, operators, mechanical designers and controls specialists"
    ],
    "classroomConnection": "Conservation of matter and energy connects classroom calculations to process decisions."
  },
  {
    "id": "work-instrument",
    "title": "Instrument development and testing",
    "summary": "Help build and check the equipment that produces measurements. Instrument work joins hardware, software and experiments rather than treating a reading as automatically correct.",
    "explanation": "Help build and check the equipment that produces measurements. Instrument work joins hardware, software and experiments rather than treating a reading as automatically correct.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Check performance using a known reference."
      },
      {
        "title": "Test and compare",
        "detail": "Investigate drift, noise or inconsistent readings."
      },
      {
        "title": "Explain and improve",
        "detail": "Document tests so later users know what the instrument can establish."
      }
    ],
    "collaborators": [
      "Scientists, electronics specialists and software developers"
    ],
    "classroomConnection": "Measurement uncertainty is part of using a tool responsibly."
  },
  {
    "id": "work-applications",
    "title": "Scientific applications",
    "summary": "Connect an instrument to the question a user needs to answer. Applications work involves selecting a method, interpreting results and explaining limitations.",
    "explanation": "Connect an instrument to the question a user needs to answer. Applications work involves selecting a method, interpreting results and explaining limitations.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Choose a measurement approach for the sample."
      },
      {
        "title": "Test and compare",
        "detail": "Compare outputs with reference information."
      },
      {
        "title": "Explain and improve",
        "detail": "Explain what further tests would resolve ambiguity."
      }
    ],
    "collaborators": [
      "Laboratory users, instrument engineers and researchers"
    ],
    "classroomConnection": "A pattern is evidence to interpret, not a label that proves an answer by itself."
  },
  {
    "id": "work-software",
    "title": "Software and data systems",
    "summary": "Build the tools that move, process and display information. Reliable software needs testing against missing, delayed and unexpected data as well as ideal examples.",
    "explanation": "Build the tools that move, process and display information. Reliable software needs testing against missing, delayed and unexpected data as well as ideal examples.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Translate a user need into a testable behaviour."
      },
      {
        "title": "Test and compare",
        "detail": "Build and test a data-processing or display feature."
      },
      {
        "title": "Explain and improve",
        "detail": "Investigate failures and document assumptions about inputs."
      }
    ],
    "collaborators": [
      "Domain experts, designers, users and hardware teams"
    ],
    "classroomConnection": "An algorithm’s output depends on the quality and meaning of its inputs."
  },
  {
    "id": "work-mechanical",
    "title": "Mechanical design and prototyping",
    "summary": "Translate a need into a component or machine that can be built and tested. Designers use dimensions, material properties and constraints to evaluate alternatives.",
    "explanation": "Translate a need into a component or machine that can be built and tested. Designers use dimensions, material properties and constraints to evaluate alternatives.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Create and revise drawings or a digital model."
      },
      {
        "title": "Test and compare",
        "detail": "Choose materials and dimensions for the intended conditions."
      },
      {
        "title": "Explain and improve",
        "detail": "Compare the prototype with its requirements and refine the design."
      }
    ],
    "collaborators": [
      "Machinists, fabricators, test staff and customers"
    ],
    "classroomConnection": "Geometry, forces and material properties shape real design trade-offs."
  },
  {
    "id": "work-machining",
    "title": "Machining and dimensional inspection",
    "summary": "Make parts fit their intended purpose by controlling dimensions. Machining combines tools, setup and measurement; finishing a part is not the same as proving it meets its specification.",
    "explanation": "Make parts fit their intended purpose by controlling dimensions. Machining combines tools, setup and measurement; finishing a part is not the same as proving it meets its specification.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Interpret a drawing and plan a sequence of cuts."
      },
      {
        "title": "Test and compare",
        "detail": "Set up the machine and check the workpiece."
      },
      {
        "title": "Explain and improve",
        "detail": "Measure critical dimensions and document deviations."
      }
    ],
    "collaborators": [
      "Designers, production teams and quality inspectors"
    ],
    "classroomConnection": "Tolerance describes an acceptable range rather than a perfectly exact number."
  },
  {
    "id": "work-quality",
    "title": "Quality and traceability",
    "summary": "Make it possible to explain how a result or product was produced. Quality work checks records, methods and acceptance criteria so variation can be investigated rather than hidden.",
    "explanation": "Make it possible to explain how a result or product was produced. Quality work checks records, methods and acceptance criteria so variation can be investigated rather than hidden.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Check that materials and samples have traceable identities."
      },
      {
        "title": "Test and compare",
        "detail": "Compare recorded results with defined acceptance criteria."
      },
      {
        "title": "Explain and improve",
        "detail": "Investigate deviations and document what changed."
      }
    ],
    "collaborators": [
      "Production, laboratory, engineering and customer teams"
    ],
    "classroomConnection": "Repeated results need both measurements and records of the conditions that produced them."
  },
  {
    "id": "work-controls",
    "title": "Instrumentation and controls",
    "summary": "Keep a process measurable and responsive. Controls work connects sensors, decisions and actuators so the system can respond when conditions change.",
    "explanation": "Keep a process measurable and responsive. Controls work connects sensors, decisions and actuators so the system can respond when conditions change.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Check whether sensors are reading reliably."
      },
      {
        "title": "Test and compare",
        "detail": "Compare measurements with the intended operating range."
      },
      {
        "title": "Explain and improve",
        "detail": "Test how the system responds to a change or fault."
      }
    ],
    "collaborators": [
      "Operators, electricians and process engineers"
    ],
    "classroomConnection": "Feedback uses a measured result to inform the next action."
  },
  {
    "id": "work-maintenance",
    "title": "Aircraft maintenance",
    "summary": "Investigate condition, carry out authorized maintenance and preserve the records behind a decision. Aircraft maintenance work relies on approved procedures and appropriate qualifications.",
    "explanation": "Investigate condition, carry out authorized maintenance and preserve the records behind a decision. Aircraft maintenance work relies on approved procedures and appropriate qualifications.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Inspect a component using the applicable procedure."
      },
      {
        "title": "Test and compare",
        "detail": "Compare findings with documented limits and escalate uncertainty."
      },
      {
        "title": "Explain and improve",
        "detail": "Record work and test results for the maintenance decision."
      }
    ],
    "collaborators": [
      "Licensed AMEs, avionics specialists, engineering and quality teams"
    ],
    "classroomConnection": "A visual impression alone is not enough evidence that a part is safe."
  },
  {
    "id": "work-avionics",
    "title": "Avionics and electronics",
    "summary": "Work on the electronic systems that allow aircraft to communicate, navigate and collect data. Troubleshooting means distinguishing a faulty sensor from wiring, power or software problems.",
    "explanation": "Work on the electronic systems that allow aircraft to communicate, navigate and collect data. Troubleshooting means distinguishing a faulty sensor from wiring, power or software problems.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Trace a signal through connected components."
      },
      {
        "title": "Test and compare",
        "detail": "Use test equipment to compare expected and measured behaviour."
      },
      {
        "title": "Explain and improve",
        "detail": "Document the fault and verify the result after authorized work."
      }
    ],
    "collaborators": [
      "Aircraft maintenance teams, electrical designers and software developers"
    ],
    "classroomConnection": "Circuits and signals become useful when the complete system works reliably."
  },
  {
    "id": "work-bioprocess",
    "title": "Bioprocess development",
    "summary": "Develop repeatable ways to make and purify biological materials. This work connects molecular science to manufacturing conditions and checks whether a change improves the process.",
    "explanation": "Develop repeatable ways to make and purify biological materials. This work connects molecular science to manufacturing conditions and checks whether a change improves the process.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Define a comparison between process conditions."
      },
      {
        "title": "Test and compare",
        "detail": "Track production and purification steps for each batch."
      },
      {
        "title": "Explain and improve",
        "detail": "Use analytical results to decide which change to test next."
      }
    ],
    "collaborators": [
      "Molecular scientists, analytical staff and quality teams"
    ],
    "classroomConnection": "Knowing a sequence or molecule is different from producing a reliable batch of it."
  },
  {
    "id": "work-drone",
    "title": "Drone operations",
    "summary": "Plan and carry out flights for a specific task while coordinating with the people responsible for the site. The aircraft is one tool within an operational plan.",
    "explanation": "Plan and carry out flights for a specific task while coordinating with the people responsible for the site. The aircraft is one tool within an operational plan.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Review the task, site and operating constraints."
      },
      {
        "title": "Test and compare",
        "detail": "Check the aircraft and coordinate the flight with relevant personnel."
      },
      {
        "title": "Explain and improve",
        "detail": "Record observations and equipment issues after the flight."
      }
    ],
    "collaborators": [
      "Site operations, wildlife specialists and data analysts"
    ],
    "classroomConnection": "Flight performance must be considered alongside the task and the surrounding environment."
  },
  {
    "id": "work-wildlife",
    "title": "Wildlife monitoring and interpretation",
    "summary": "Observe how animals respond to an intervention and ask whether the change lasts. This work needs consistent observations and attention to other causes of changing behaviour.",
    "explanation": "Observe how animals respond to an intervention and ask whether the change lasts. This work needs consistent observations and attention to other causes of changing behaviour.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Define how bird activity will be counted."
      },
      {
        "title": "Test and compare",
        "detail": "Compare observations before and after an intervention."
      },
      {
        "title": "Explain and improve",
        "detail": "Record weather, season and other factors that could explain a difference."
      }
    ],
    "collaborators": [
      "Drone operators, airport staff and environmental teams"
    ],
    "classroomConnection": "Behavioural response is evidence; reduced sightings alone do not prove a lasting safety outcome."
  },
  {
    "id": "work-spatial",
    "title": "Spatial data and mapping",
    "summary": "Turn measurements tied to places into usable spatial information. The work involves coordinates, scale and checking that datasets describe the same location and time.",
    "explanation": "Turn measurements tied to places into usable spatial information. The work involves coordinates, scale and checking that datasets describe the same location and time.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Check coordinate systems and measurement dates."
      },
      {
        "title": "Test and compare",
        "detail": "Align and inspect spatial datasets."
      },
      {
        "title": "Explain and improve",
        "detail": "Present maps or models with their limitations."
      }
    ],
    "collaborators": [
      "Surveyors, engineers, field operators and software teams"
    ],
    "classroomConnection": "Models can be detailed while still containing gaps or misaligned measurements."
  },
  {
    "id": "work-geoscience",
    "title": "Geoscience and interpretation",
    "summary": "Explain what rock measurements suggest about geology. Geoscientists combine observations with context and use additional tests where a scan leaves uncertainty.",
    "explanation": "Explain what rock measurements suggest about geology. Geoscientists combine observations with context and use additional tests where a scan leaves uncertainty.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Describe core and identify changes along it."
      },
      {
        "title": "Test and compare",
        "detail": "Compare sensor patterns with geological observations or assays."
      },
      {
        "title": "Explain and improve",
        "detail": "Communicate alternative interpretations and uncertainty."
      }
    ],
    "collaborators": [
      "Core technicians, data scientists and exploration teams"
    ],
    "classroomConnection": "A measurement of a sample is not automatically a measurement of the whole deposit."
  },
  {
    "id": "work-millwright",
    "title": "Industrial machinery assembly and maintenance",
    "summary": "Make machinery work together as a physical system. Millwright work connects assembly, alignment, inspection and troubleshooting.",
    "explanation": "Make machinery work together as a physical system. Millwright work connects assembly, alignment, inspection and troubleshooting.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Read equipment drawings and plan assembly steps."
      },
      {
        "title": "Test and compare",
        "detail": "Align and connect mechanical components."
      },
      {
        "title": "Explain and improve",
        "detail": "Check operation and record problems that need adjustment."
      }
    ],
    "collaborators": [
      "Designers, operators, electricians and fabrication teams"
    ],
    "classroomConnection": "Small alignment errors can change how forces and motion pass through a machine."
  },
  {
    "id": "work-fabrication",
    "title": "Metal fabrication and welding",
    "summary": "Join and assemble material into usable structures. Fabrication work follows drawings and procedures, then checks whether the finished work meets its requirements.",
    "explanation": "Join and assemble material into usable structures. Fabrication work follows drawings and procedures, then checks whether the finished work meets its requirements.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Read dimensions and prepare components."
      },
      {
        "title": "Test and compare",
        "detail": "Use the specified joining process and sequence."
      },
      {
        "title": "Explain and improve",
        "detail": "Inspect the assembly and communicate any deviation."
      }
    ],
    "collaborators": [
      "Designers, machinists and quality inspectors"
    ],
    "classroomConnection": "Material properties and heat affect the result of a joining process."
  },
  {
    "id": "work-materials",
    "title": "Materials research and testing",
    "summary": "Investigate whether a material improves a product for a defined purpose. A useful comparison separates the effect of the added material from other changes in the test.",
    "explanation": "Investigate whether a material improves a product for a defined purpose. A useful comparison separates the effect of the added material from other changes in the test.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Prepare comparable samples with and without an additive."
      },
      {
        "title": "Test and compare",
        "detail": "Measure a relevant property under consistent conditions."
      },
      {
        "title": "Explain and improve",
        "detail": "Explain performance changes alongside uncertainty and practical constraints."
      }
    ],
    "collaborators": [
      "Chemists, process engineers and product developers"
    ],
    "classroomConnection": "Stronger, lighter and more conductive are different properties requiring different tests."
  },
  {
    "id": "work-power",
    "title": "Power-electronics design",
    "summary": "Control how electrical energy moves between components. Power-electronics work combines circuit design with testing, thermal limits and the behaviour of the complete system.",
    "explanation": "Control how electrical energy moves between components. Power-electronics work combines circuit design with testing, thermal limits and the behaviour of the complete system.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Choose and document a circuit design."
      },
      {
        "title": "Test and compare",
        "detail": "Test its response across operating conditions."
      },
      {
        "title": "Explain and improve",
        "detail": "Investigate losses and component limits before revising the design."
      }
    ],
    "collaborators": [
      "Electrical technologists, firmware developers and manufacturing teams"
    ],
    "classroomConnection": "Power describes the rate of energy transfer; stored energy describes how much is available."
  },
  {
    "id": "work-weather",
    "title": "Weather-data interpretation",
    "summary": "Use observations to understand changing atmospheric conditions. Weather-data work checks where and when a measurement was made before combining it with other evidence.",
    "explanation": "Use observations to understand changing atmospheric conditions. Weather-data work checks where and when a measurement was made before combining it with other evidence.",
    "tasks": [
      {
        "title": "Investigate",
        "detail": "Check the position, time and quality of observations."
      },
      {
        "title": "Test and compare",
        "detail": "Compare measurements across altitude or time."
      },
      {
        "title": "Explain and improve",
        "detail": "Identify gaps and explain how they limit an interpretation."
      }
    ],
    "collaborators": [
      "Meteorologists, instrument teams and data engineers"
    ],
    "classroomConnection": "More measurements can help, but uneven coverage can still leave important gaps."
  }
];

export const expansionPathways: LearningPathway[] = [
  {
    "id": "route-lab",
    "provider": "SAIT",
    "name": "Chemical Laboratory Technology",
    "routeType": "Diploma",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Practice chemical analysis, sample preparation and analytical instrumentation.",
    "roleRationale": [
      {
        "roleId": "work-food",
        "why": "Supports laboratory testing and reliable measurement. Molecules and mixtures help explain why two ingredients can behave differently."
      },
      {
        "roleId": "work-lab",
        "why": "Supports laboratory testing and reliable measurement. A repeatable method and a fair comparison matter as much as a single impressive number."
      },
      {
        "roleId": "work-applications",
        "why": "Supports laboratory testing and reliable measurement. A pattern is evidence to interpret, not a label that proves an answer by itself."
      },
      {
        "roleId": "work-bioprocess",
        "why": "Supports laboratory testing and reliable measurement. Knowing a sequence or molecule is different from producing a reliable batch of it."
      },
      {
        "roleId": "work-quality",
        "why": "Supports laboratory testing and reliable measurement. Repeated results need both measurements and records of the conditions that produced them."
      },
      {
        "roleId": "work-materials",
        "why": "Supports laboratory testing and reliable measurement. Stronger, lighter and more conductive are different properties requiring different tests."
      }
    ],
    "entryNote": "Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
    "urlSourceId": "expansion-source-6",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-6"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "id": "route-biochem",
    "provider": "University of Calgary",
    "name": "Biochemistry",
    "routeType": "Bachelor’s degree",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Study the chemistry of living organisms and changes within cells.",
    "roleRationale": [
      {
        "roleId": "work-food",
        "why": "A scientific foundation for biological research; independent research positions may need further study. Molecules and mixtures help explain why two ingredients can behave differently."
      },
      {
        "roleId": "work-lab",
        "why": "A scientific foundation for biological research; independent research positions may need further study. A repeatable method and a fair comparison matter as much as a single impressive number."
      },
      {
        "roleId": "work-bioprocess",
        "why": "A scientific foundation for biological research; independent research positions may need further study. Knowing a sequence or molecule is different from producing a reliable batch of it."
      }
    ],
    "entryNote": "Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
    "urlSourceId": "expansion-source-7",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-7"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "id": "route-chemical",
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
      },
      {
        "roleId": "work-controls",
        "why": "Supports process design and scale-up; experience and professional requirements remain separate. Feedback uses a measured result to inform the next action."
      },
      {
        "roleId": "work-bioprocess",
        "why": "Supports process design and scale-up; experience and professional requirements remain separate. Knowing a sequence or molecule is different from producing a reliable batch of it."
      },
      {
        "roleId": "work-materials",
        "why": "Supports process design and scale-up; experience and professional requirements remain separate. Stronger, lighter and more conductive are different properties requiring different tests."
      }
    ],
    "entryNote": "Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
    "urlSourceId": "expansion-source-8",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-8"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "id": "route-electrical",
    "provider": "SAIT",
    "name": "Electrical Engineering Technology",
    "routeType": "Diploma",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Study circuits, electrical power and controls with practical laboratory work.",
    "roleRationale": [
      {
        "roleId": "work-instrument",
        "why": "Supports electrical testing and technical systems work. Measurement uncertainty is part of using a tool responsibly."
      },
      {
        "roleId": "work-applications",
        "why": "Supports electrical testing and technical systems work. A pattern is evidence to interpret, not a label that proves an answer by itself."
      },
      {
        "roleId": "work-power",
        "why": "Supports electrical testing and technical systems work. Power describes the rate of energy transfer; stored energy describes how much is available."
      },
      {
        "roleId": "work-avionics",
        "why": "Supports electrical testing and technical systems work. Circuits and signals become useful when the complete system works reliably."
      },
      {
        "roleId": "work-weather",
        "why": "Supports electrical testing and technical systems work. More measurements can help, but uneven coverage can still leave important gaps."
      }
    ],
    "entryNote": "Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
    "urlSourceId": "expansion-source-13",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-13"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "id": "route-software",
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
      },
      {
        "roleId": "work-spatial",
        "why": "A foundation for junior development or testing; senior roles require further experience. Models can be detailed while still containing gaps or misaligned measurements."
      },
      {
        "roleId": "work-quality",
        "why": "A foundation for junior development or testing; senior roles require further experience. Repeated results need both measurements and records of the conditions that produced them."
      },
      {
        "roleId": "work-weather",
        "why": "A foundation for junior development or testing; senior roles require further experience. More measurements can help, but uneven coverage can still leave important gaps."
      }
    ],
    "entryNote": "Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
    "urlSourceId": "expansion-source-14",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-14"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "id": "route-mechanical",
    "provider": "SAIT",
    "name": "Mechanical Engineering Technology",
    "routeType": "Diploma",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Study mechanical systems, design and manufacturing, with specialization options.",
    "roleRationale": [
      {
        "roleId": "work-mechanical",
        "why": "Supports component design, prototyping and equipment work. Geometry, forces and material properties shape real design trade-offs."
      },
      {
        "roleId": "work-machining",
        "why": "Supports component design, prototyping and equipment work. Tolerance describes an acceptable range rather than a perfectly exact number."
      },
      {
        "roleId": "work-quality",
        "why": "Supports component design, prototyping and equipment work. Repeated results need both measurements and records of the conditions that produced them."
      },
      {
        "roleId": "work-drone",
        "why": "Supports component design, prototyping and equipment work. Flight performance must be considered alongside the task and the surrounding environment."
      },
      {
        "roleId": "work-materials",
        "why": "Supports component design, prototyping and equipment work. Stronger, lighter and more conductive are different properties requiring different tests."
      }
    ],
    "entryNote": "Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
    "urlSourceId": "expansion-source-18",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-18"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "id": "route-machinist",
    "provider": "SAIT",
    "name": "Machinist",
    "routeType": "Apprenticeship",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Learn precision measurement, machine tools, drawings and machining.",
    "roleRationale": [
      {
        "roleId": "work-machining",
        "why": "A paid-work-and-classroom route toward making precision parts. Tolerance describes an acceptable range rather than a perfectly exact number."
      }
    ],
    "entryNote": "Requires apprenticeship registration and workplace training as well as classroom instruction; admission to a course alone is not journeyperson certification.",
    "urlSourceId": "expansion-source-19",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-19"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "id": "route-instrument",
    "provider": "SAIT",
    "name": "Instrumentation Engineering Technology",
    "routeType": "Diploma",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Work with measurement devices, calibration and automated process controls.",
    "roleRationale": [
      {
        "roleId": "work-quality",
        "why": "Supports process testing, troubleshooting and control systems. Repeated results need both measurements and records of the conditions that produced them."
      },
      {
        "roleId": "work-controls",
        "why": "Supports process testing, troubleshooting and control systems. Feedback uses a measured result to inform the next action."
      }
    ],
    "entryNote": "Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
    "urlSourceId": "expansion-source-20",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-20"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "id": "route-ame",
    "provider": "SAIT",
    "name": "Aircraft Maintenance Engineers Technology",
    "routeType": "Diploma",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Study aircraft systems, inspections and maintenance at the Art Smith Aero Centre.",
    "roleRationale": [
      {
        "roleId": "work-maintenance",
        "why": "A training route toward aircraft maintenance work. A visual impression alone is not enough evidence that a part is safe."
      },
      {
        "roleId": "work-quality",
        "why": "A training route toward aircraft maintenance work. Repeated results need both measurements and records of the conditions that produced them."
      }
    ],
    "entryNote": "A diploma is not an AME licence. Transport Canada also requires qualifying experience, demonstrated skills and examinations; see the licensing source.",
    "urlSourceId": "expansion-source-31",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-31"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "id": "route-avionics",
    "provider": "SAIT",
    "name": "Avionics Technology",
    "routeType": "Diploma",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Study aircraft electrical, electronic, communication and navigation systems.",
    "roleRationale": [
      {
        "roleId": "work-avionics",
        "why": "Supports avionics maintenance and troubleshooting. Circuits and signals become useful when the complete system works reliably."
      }
    ],
    "entryNote": "Training supports a route toward AME E licensing; graduation alone does not confer that licence. Check Transport Canada’s requirements.",
    "urlSourceId": "expansion-source-32",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-32"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "id": "route-geomatics",
    "provider": "SAIT",
    "name": "Geomatics Engineering Technology",
    "routeType": "Diploma",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Learn surveying, GIS, positioning and remote sensing.",
    "roleRationale": [
      {
        "roleId": "work-drone",
        "why": "Supports spatial measurement and mapping data work. Flight performance must be considered alongside the task and the surrounding environment."
      },
      {
        "roleId": "work-wildlife",
        "why": "Supports spatial measurement and mapping data work. Behavioural response is evidence; reduced sightings alone do not prove a lasting safety outcome."
      },
      {
        "roleId": "work-spatial",
        "why": "Supports spatial measurement and mapping data work. Models can be detailed while still containing gaps or misaligned measurements."
      },
      {
        "roleId": "work-geoscience",
        "why": "Supports spatial measurement and mapping data work. A measurement of a sample is not automatically a measurement of the whole deposit."
      },
      {
        "roleId": "work-instrument",
        "why": "Supports spatial measurement and mapping data work. Measurement uncertainty is part of using a tool responsibly."
      }
    ],
    "entryNote": "Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
    "urlSourceId": "expansion-source-42",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-42"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "id": "route-geology",
    "provider": "University of Calgary",
    "name": "Geology",
    "routeType": "Bachelor’s degree",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Study Earth materials through the geology program and its available study streams.",
    "roleRationale": [
      {
        "roleId": "work-geoscience",
        "why": "Supports interpreting rocks and geological evidence. A measurement of a sample is not automatically a measurement of the whole deposit."
      }
    ],
    "entryNote": "Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
    "urlSourceId": "expansion-source-46",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-46"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "id": "route-millwright",
    "provider": "SAIT",
    "name": "Industrial Mechanic (Millwright)",
    "routeType": "Apprenticeship",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Learn to install, maintain and repair industrial machinery.",
    "roleRationale": [
      {
        "roleId": "work-millwright",
        "why": "Supports equipment assembly, alignment and maintenance. Small alignment errors can change how forces and motion pass through a machine."
      }
    ],
    "entryNote": "Requires apprenticeship registration and workplace training. This is distinct from an engineering degree.",
    "urlSourceId": "expansion-source-48",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-48"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "id": "route-welder",
    "provider": "SAIT",
    "name": "Welder",
    "routeType": "Apprenticeship",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Learn joining processes, drawings and inspection of welded work.",
    "roleRationale": [
      {
        "roleId": "work-fabrication",
        "why": "Supports metal fabrication and assembly. Material properties and heat affect the result of a joining process."
      }
    ],
    "entryNote": "Requires apprenticeship registration and workplace training. Check the current provincial and provider requirements.",
    "urlSourceId": "expansion-source-52",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-52"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "id": "route-electrical-degree",
    "provider": "University of Calgary",
    "name": "Electrical Engineering",
    "routeType": "Bachelor’s degree",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Study electrical phenomena and their engineering applications.",
    "roleRationale": [
      {
        "roleId": "work-power",
        "why": "A degree route relevant to power-electronics design; it does not replace job-specific experience. Power describes the rate of energy transfer; stored energy describes how much is available."
      },
      {
        "roleId": "work-instrument",
        "why": "A degree route relevant to power-electronics design; it does not replace job-specific experience. Measurement uncertainty is part of using a tool responsibly."
      }
    ],
    "entryNote": "Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
    "urlSourceId": "expansion-source-67",
    "kind": "interpreted",
    "sourceIds": [
      "expansion-source-67"
    ],
    "checkedOn": "2026-10-15"
  }
];

export const expansionJobs: JobExample[] = [
  {
    "id": "cgy-015-j1",
    "title": "Power Electronics Engineer — historical example",
    "employer": "Eguana Technologies",
    "employerNote": {
      "text": "Featured employer. Historical employer PDF; current acceptance of applications not verified. Do not display as an open opportunity.",
      "kind": "observed",
      "sourceIds": [
        "expansion-source-66"
      ]
    },
    "roleIds": [
      "work-power"
    ],
    "location": "Calgary, Alberta",
    "level": "Experienced: the 2018 posting requests an electrical-engineering bachelor’s degree and 2+ years in product design and lithium battery-system design.",
    "relevance": "local",
    "postingSourceId": "expansion-source-66",
    "capturedOn": "2026-10-15",
    "summary": "Design electrical products from prototype toward production, with attention to component selection, testing and manufacturing requirements.",
    "duties": [
      "Develop circuit-board designs and select components.",
      "Prepare requirements and validation test plans.",
      "Support production changes and evaluate existing designs."
    ],
    "skills": [
      "Electrical design and troubleshooting",
      "Product testing and documentation",
      "Working with suppliers and other engineers"
    ],
    "classroomConnection": "Shows how circuits and energy-storage requirements become design and testing work.",
    "limitation": "Historical employer PDF; current acceptance of applications not verified. Do not display as an open opportunity.",
    "approval": {
      "packetId": "calgary-full-examples-2026-10-15",
      "candidateId": "CGY-015-J1",
      "copyVersion": 1
    },
    "status": {
      "kind": "unknown",
      "checkedOn": "2026-10-15",
      "note": "Historical employer PDF; current acceptance of applications not verified. Do not display as an open opportunity."
    },
    "kind": "observed",
    "sourceIds": [
      "expansion-source-66"
    ],
    "publishedOn": "2018-02-14"
  },
  {
    "id": "cgy-016-j1",
    "title": "Senior Enterprise Software Developer",
    "employer": "FTG Aerospace Calgary / FLYHT",
    "employerNote": {
      "text": "Featured employer. Full employer description retrieved 15 October 2026; application acceptance was not verified.",
      "kind": "observed",
      "sourceIds": [
        "expansion-source-70"
      ]
    },
    "roleIds": [
      "work-software"
    ],
    "location": "Calgary, Alberta",
    "level": "Senior title; posting requests 3+ years of professional development experience, with 7+ preferred, and a related diploma or degree.",
    "relevance": "local",
    "postingSourceId": "expansion-source-70",
    "capturedOn": "2026-10-15",
    "summary": "Develop software that integrates aircraft communication and measurement systems with applications used by people on the ground.",
    "duties": [
      "Build and test applications connected to aircraft-data systems.",
      "Contribute to deployment and internal software tools.",
      "Collaborate across teams and mentor peers."
    ],
    "skills": [
      "Software development and testing",
      "Cloud services and data integration",
      "Technical communication"
    ],
    "classroomConnection": "Connects sensor measurements with software reliability and useful information.",
    "limitation": "Full employer description retrieved 15 October 2026; application acceptance was not verified.",
    "approval": {
      "packetId": "calgary-full-examples-2026-10-15",
      "candidateId": "CGY-016-J1",
      "copyVersion": 1
    },
    "status": {
      "kind": "unknown",
      "checkedOn": "2026-10-15",
      "note": "Full employer description retrieved 15 October 2026; application acceptance was not verified."
    },
    "kind": "observed",
    "sourceIds": [
      "expansion-source-70"
    ]
  }
];

export const expansionDetails: ExampleDetails[] = [
  {
    "id": "botaneco-details",
    "exampleSlug": "botaneco",
    "organizationId": "botaneco",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "botaneco",
      "subtitle": "Useful ingredients are hidden inside an ordinary seed.",
      "caption": "Useful ingredients are hidden inside an ordinary seed.",
      "steps": [
        {
          "text": "A seed contains several kinds of material. Botaneco works with oilseeds including canola and sunflower.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-1",
            "expansion-source-2",
            "expansion-source-3",
            "expansion-source-4"
          ]
        },
        {
          "text": "The company describes an aqueous process for separating proteins and intact oleosomes while avoiding harsh processing conditions.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-1",
            "expansion-source-2",
            "expansion-source-3",
            "expansion-source-4"
          ]
        },
        {
          "text": "Different recovered components can serve different ingredient uses. Separating them is only part of the challenge; their behaviour in a product also matters.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-1",
            "expansion-source-2",
            "expansion-source-3",
            "expansion-source-4"
          ]
        },
        {
          "text": "A useful evaluation compares the amount recovered, the properties retained and the resources used. A company’s sustainability claim needs its own supporting evidence.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-1",
            "expansion-source-2",
            "expansion-source-3",
            "expansion-source-4"
          ]
        }
      ],
      "diagramAlt": "Conceptual sequence: Begin with an oilseed mixture. Use a water-based separation process. Recover different fractions, including proteins and oleosomes. Test the properties needed for a useful ingredient.",
      "diagramProvenance": "Generated generic teaching illustration. Source-backed editorial simplification; not a company process specification. See design/example-expansion-2026-10-15/.",
      "discussion": "If a process recovers more material but changes how it behaves, has it improved?"
    },
    "roleIds": [
      "work-food",
      "work-lab",
      "work-process"
    ],
    "pathwayIds": [
      "route-lab",
      "route-biochem",
      "route-chemical"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-15"
  },
  {
    "id": "nanalysis-details",
    "exampleSlug": "nanalysis",
    "organizationId": "nanalysis",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "nanalysis",
      "subtitle": "A chemical sample can produce a pattern we can interpret.",
      "caption": "A chemical sample can produce a pattern we can interpret.",
      "steps": [
        {
          "text": "Place a suitable sample in the instrument’s magnetic field. NMR concerns the magnetic behaviour of particular atomic nuclei.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-9",
            "expansion-source-10",
            "expansion-source-11"
          ]
        },
        {
          "text": "A radiofrequency pulse changes the sample’s magnetization. The instrument records a time-varying signal.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-9",
            "expansion-source-10",
            "expansion-source-11"
          ]
        },
        {
          "text": "Processing converts the recorded signal into a spectrum. The pattern can provide information about chemical environments.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-9",
            "expansion-source-10",
            "expansion-source-11"
          ]
        },
        {
          "text": "Interpret the spectrum alongside reference information and sample conditions. A simplified pattern is not a photograph of a molecule or an automatic proof of identity.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-9",
            "expansion-source-10",
            "expansion-source-11"
          ]
        }
      ],
      "diagramAlt": "Conceptual sequence: Place the sample in a magnetic field. Apply a radio-frequency pulse. Record the response as a signal over time. Transform the signal into a spectrum to interpret.",
      "diagramProvenance": "Generated generic teaching illustration. Source-backed editorial simplification; not a company process specification. See design/example-expansion-2026-10-15/.",
      "discussion": "What additional evidence would you want if two samples produced similar patterns?"
    },
    "roleIds": [
      "work-instrument",
      "work-applications",
      "work-software"
    ],
    "pathwayIds": [
      "route-lab",
      "route-electrical",
      "route-software"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-15"
  },
  {
    "id": "exergy-solutions-details",
    "exampleSlug": "exergy-solutions",
    "organizationId": "exergy-solutions",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "exergy-solutions",
      "subtitle": "A part can be made in more than one way.",
      "caption": "A part can be made in more than one way.",
      "steps": [
        {
          "text": "Start with what a part needs to do, including dimensions, loads and the conditions it will face.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-15",
            "expansion-source-16",
            "expansion-source-17"
          ]
        },
        {
          "text": "An additive process builds material up; machining removes material from a workpiece. Exergy offers both metal printing and CNC machining.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-15",
            "expansion-source-16",
            "expansion-source-17"
          ]
        },
        {
          "text": "Compare access to features, material choice, surface finish and the work needed after the initial shape is made.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-15",
            "expansion-source-16",
            "expansion-source-17"
          ]
        },
        {
          "text": "Measure and test the result against requirements. A complicated shape is not automatically a better or more reliable part.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-15",
            "expansion-source-16",
            "expansion-source-17"
          ]
        }
      ],
      "diagramAlt": "Conceptual sequence: Define the part and its requirements. Compare adding material with removing material. Measure the finished dimensions. Check whether the part meets its intended load and use.",
      "diagramProvenance": "Generated generic teaching illustration. Source-backed editorial simplification; not a company process specification. See design/example-expansion-2026-10-15/.",
      "discussion": "When might a simple machined part be preferable to a complex printed one?"
    },
    "roleIds": [
      "work-mechanical",
      "work-machining",
      "work-quality"
    ],
    "pathwayIds": [
      "route-mechanical",
      "route-machinist",
      "route-instrument"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-15"
  },
  {
    "id": "livestock-water-recycling-details",
    "exampleSlug": "livestock-water-recycling",
    "organizationId": "livestock-water-recycling",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "livestock-water-recycling",
      "subtitle": "Waste contains materials that can be separated and used again.",
      "caption": "Waste contains materials that can be separated and used again.",
      "steps": [
        {
          "text": "Manure is a mixture containing water, solids and nutrients. Treating it as a single stream limits how its components can be managed.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-21",
            "expansion-source-22",
            "expansion-source-23",
            "expansion-source-24"
          ]
        },
        {
          "text": "LWR describes sequential solids removal and mechanical and chemical treatment in its PLANT system.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-21",
            "expansion-source-22",
            "expansion-source-23",
            "expansion-source-24"
          ]
        },
        {
          "text": "Separated material can follow different paths: solids, concentrated nutrients and recovered water. Their suitability depends on measurement and intended use.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-21",
            "expansion-source-22",
            "expansion-source-23",
            "expansion-source-24"
          ]
        },
        {
          "text": "Evaluate the whole system: what happens to every output, how much energy is needed and whether the result meets the requirements for its next use.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-21",
            "expansion-source-22",
            "expansion-source-23",
            "expansion-source-24"
          ]
        }
      ],
      "diagramAlt": "Conceptual sequence: Start with manure containing water and other material. Apply physical and chemical separation steps. Collect different water, nutrient and solid streams. Test the outputs against their intended uses.",
      "diagramProvenance": "Generated generic teaching illustration. Source-backed editorial simplification; not a company process specification. See design/example-expansion-2026-10-15/.",
      "discussion": "Why is clear-looking water not enough evidence that it is suitable for every use?"
    },
    "roleIds": [
      "work-process",
      "work-lab",
      "work-controls"
    ],
    "pathwayIds": [
      "route-lab",
      "route-instrument",
      "route-chemical"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-15"
  },
  {
    "id": "avmax-details",
    "exampleSlug": "avmax",
    "organizationId": "avmax",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "avmax",
      "subtitle": "A maintenance decision needs evidence, not a guess.",
      "caption": "A maintenance decision needs evidence, not a guess.",
      "steps": [
        {
          "text": "An aircraft component must meet requirements appropriate to its purpose and operating conditions.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-26",
            "expansion-source-27",
            "expansion-source-28",
            "expansion-source-29",
            "expansion-source-30"
          ]
        },
        {
          "text": "Avmax lists inspections and non-destructive testing among its maintenance capabilities. These can provide evidence without simply breaking a part to examine it.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-26",
            "expansion-source-27",
            "expansion-source-28",
            "expansion-source-29",
            "expansion-source-30"
          ]
        },
        {
          "text": "Technicians compare findings with applicable procedures and limits, involving the qualified people needed for the decision.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-26",
            "expansion-source-27",
            "expansion-source-28",
            "expansion-source-29",
            "expansion-source-30"
          ]
        },
        {
          "text": "The resulting work and tests must be recorded. A part looking intact is not the same as having enough evidence to return it to service.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-26",
            "expansion-source-27",
            "expansion-source-28",
            "expansion-source-29",
            "expansion-source-30"
          ]
        }
      ],
      "diagramAlt": "Conceptual sequence: Identify the component and the applicable procedure. Inspect and measure its condition. Compare the evidence with approved limits. Record the authorized maintenance decision.",
      "diagramProvenance": "Generated generic teaching illustration. Source-backed editorial simplification; not a company process specification. See design/example-expansion-2026-10-15/.",
      "discussion": "What would you do if a measurement fell very close to an acceptance limit?"
    },
    "roleIds": [
      "work-maintenance",
      "work-avionics",
      "work-quality"
    ],
    "pathwayIds": [
      "route-ame",
      "route-avionics",
      "route-mechanical"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-15"
  },
  {
    "id": "northern-rna-details",
    "exampleSlug": "northern-rna",
    "organizationId": "northern-rna",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "northern-rna",
      "subtitle": "Knowing what to make is different from making it consistently.",
      "caption": "Knowing what to make is different from making it consistently.",
      "steps": [
        {
          "text": "A project begins with a defined biological material and requirements for its intended use.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-33",
            "expansion-source-34",
            "expansion-source-35",
            "expansion-source-36"
          ]
        },
        {
          "text": "Northern RNA describes synthesis or production, purification and analytical testing as connected services.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-33",
            "expansion-source-34",
            "expansion-source-35",
            "expansion-source-36"
          ]
        },
        {
          "text": "Testing and records allow a team to compare batches and investigate differences. Traceability connects a result to how the material was made.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-33",
            "expansion-source-34",
            "expansion-source-35",
            "expansion-source-36"
          ]
        },
        {
          "text": "A batch meeting manufacturing requirements does not establish that a medicine is effective. Product quality and clinical outcomes answer different questions.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-33",
            "expansion-source-34",
            "expansion-source-35",
            "expansion-source-36"
          ]
        }
      ],
      "diagramAlt": "Conceptual sequence: Define the material and starting conditions. Produce a batch under recorded conditions. Separate and purify the material. Check identity, quality and consistency against the requirements.",
      "diagramProvenance": "Generated generic teaching illustration. Source-backed editorial simplification; not a company process specification. See design/example-expansion-2026-10-15/.",
      "discussion": "If two batches have the same amount of material, what other properties might you need to compare?"
    },
    "roleIds": [
      "work-bioprocess",
      "work-lab",
      "work-quality"
    ],
    "pathwayIds": [
      "route-lab",
      "route-biochem",
      "route-chemical"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-15"
  },
  {
    "id": "aerium-analytics-details",
    "exampleSlug": "aerium-analytics",
    "organizationId": "aerium-analytics",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "aerium-analytics",
      "subtitle": "An animal’s response can become part of an engineering design.",
      "caption": "An animal’s response can become part of an engineering design.",
      "steps": [
        {
          "text": "Birds near an airport can create conflicts with aircraft operations. Site teams need to understand where and when birds are present.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-38",
            "expansion-source-39",
            "expansion-source-40",
            "expansion-source-41"
          ]
        },
        {
          "text": "AERIUM describes RoBird as a falcon-like drone intended to create a deterrence response.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-38",
            "expansion-source-39",
            "expansion-source-40",
            "expansion-source-41"
          ]
        },
        {
          "text": "Operators coordinate flights with site personnel and observe how birds respond. The drone is one part of a management approach.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-38",
            "expansion-source-39",
            "expansion-source-40",
            "expansion-source-41"
          ]
        },
        {
          "text": "Compare bird activity and safety outcomes over time while accounting for season, weather and other interventions. A short-term response is not proof of a permanent effect.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-38",
            "expansion-source-39",
            "expansion-source-40",
            "expansion-source-41"
          ]
        }
      ],
      "diagramAlt": "Conceptual sequence: Record bird activity before intervention. Use the bird-shaped drone as one part of site management. Continue observations after the intervention. Compare results and consider other explanations.",
      "diagramProvenance": "Generated generic teaching illustration. Source-backed editorial simplification; not a company process specification. See design/example-expansion-2026-10-15/.",
      "discussion": "How could you tell whether fewer birds were caused by the intervention or by seasonal migration?"
    },
    "roleIds": [
      "work-drone",
      "work-wildlife",
      "work-spatial"
    ],
    "pathwayIds": [
      "route-geomatics",
      "route-mechanical",
      "route-software"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-15"
  },
  {
    "id": "geologicai-details",
    "exampleSlug": "geologicai",
    "organizationId": "geologicai",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "geologicai",
      "subtitle": "The same rock can be measured in several different ways.",
      "caption": "The same rock can be measured in several different ways.",
      "steps": [
        {
          "text": "Drill core is a physical sample from a particular place and depth. Its location and handling matter to interpretation.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-43",
            "expansion-source-44",
            "expansion-source-45"
          ]
        },
        {
          "text": "Different sensors measure different properties: images show appearance, while other measurements add chemical, spectral or geometric information.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-43",
            "expansion-source-44",
            "expansion-source-45"
          ]
        },
        {
          "text": "Software aligns the information so a geoscientist can compare patterns along the core. Interpretation still depends on context and validation.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-43",
            "expansion-source-44",
            "expansion-source-45"
          ]
        },
        {
          "text": "A model extends beyond directly sampled material. New measurements can test the model and change confidence in it.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-43",
            "expansion-source-44",
            "expansion-source-45"
          ]
        }
      ],
      "diagramAlt": "Conceptual sequence: Keep track of the rock sample and its position. Collect measurements with scanning instruments. Align different measurements of the same core. Compare patterns with geological observations and further tests.",
      "diagramProvenance": "Generated generic teaching illustration. Source-backed editorial simplification; not a company process specification. See design/example-expansion-2026-10-15/.",
      "discussion": "If a model is very detailed, does that mean it is well supported everywhere?"
    },
    "roleIds": [
      "work-geoscience",
      "work-instrument",
      "work-software"
    ],
    "pathwayIds": [
      "route-geology",
      "route-geomatics",
      "route-software"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-15"
  },
  {
    "id": "tangent-design-engineering-details",
    "exampleSlug": "tangent-design-engineering",
    "organizationId": "tangent-design-engineering",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "tangent-design-engineering",
      "subtitle": "A working laboratory process still needs a design for the field.",
      "caption": "A working laboratory process still needs a design for the field.",
      "steps": [
        {
          "text": "Katal had demonstrated a process in the laboratory but needed a larger system for testing and demonstration.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-47"
          ]
        },
        {
          "text": "Tangent’s case study describes using process-flow and piping-and-instrumentation diagrams to plan the equipment and controls.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-47"
          ]
        },
        {
          "text": "A multidisciplinary team designed and assembled a transportable skid, accounting for control, safety and packaging constraints.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-47"
          ]
        },
        {
          "text": "The prototype provided a platform for further testing. Building a demonstration does not by itself establish commercial performance or environmental benefit.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-47"
          ]
        }
      ],
      "diagramAlt": "Conceptual sequence: Start with a process demonstrated at laboratory scale. Plan flow, equipment and control needs. Build a larger demonstration system. Use testing to revise the design.",
      "diagramProvenance": "Generated generic teaching illustration. Source-backed editorial simplification; not a company process specification. See design/example-expansion-2026-10-15/.",
      "discussion": "Why might multiplying every dimension of a laboratory setup by ten fail to produce a workable plant?"
    },
    "roleIds": [
      "work-process",
      "work-controls",
      "work-millwright"
    ],
    "pathwayIds": [
      "route-chemical",
      "route-instrument",
      "route-millwright"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-15"
  },
  {
    "id": "foremost-details",
    "exampleSlug": "foremost",
    "organizationId": "foremost",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "foremost",
      "subtitle": "A heavy machine needs the ground to support it.",
      "caption": "A heavy machine needs the ground to support it.",
      "steps": [
        {
          "text": "A vehicle transfers its weight to the ground through the areas in contact with it.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-49",
            "expansion-source-50",
            "expansion-source-51",
            "expansion-source-51"
          ]
        },
        {
          "text": "For the same force, spreading contact over a larger area lowers average pressure. Tracks and wide tires illustrate different approaches.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-49",
            "expansion-source-50",
            "expansion-source-51",
            "expansion-source-51"
          ]
        },
        {
          "text": "Ground conditions, traction, load and terrain also affect movement. Average pressure alone cannot predict whether a vehicle will pass.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-49",
            "expansion-source-50",
            "expansion-source-51",
            "expansion-source-51"
          ]
        },
        {
          "text": "Designers and manufacturing teams must balance mobility with strength, stability, transport and service needs.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-49",
            "expansion-source-50",
            "expansion-source-51",
            "expansion-source-51"
          ]
        }
      ],
      "diagramAlt": "Conceptual sequence: A loaded vehicle pushes down on the ground. Wheels and tracks create different contact areas. The same force spread over more area gives lower average pressure. Ground strength, traction and loading still affect whether it sinks.",
      "diagramProvenance": "Generated generic teaching illustration. Source-backed editorial simplification; not a company process specification. See design/example-expansion-2026-10-15/.",
      "discussion": "Would doubling the contact area guarantee that a vehicle never sinks?"
    },
    "roleIds": [
      "work-mechanical",
      "work-fabrication",
      "work-millwright"
    ],
    "pathwayIds": [
      "route-mechanical",
      "route-welder",
      "route-millwright"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-15"
  },
  {
    "id": "carbonova-details",
    "exampleSlug": "carbonova",
    "organizationId": "carbonova",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "carbonova",
      "subtitle": "Carbon atoms can become part of a different material.",
      "caption": "Carbon atoms can become part of a different material.",
      "steps": [
        {
          "text": "Carbon-containing feedstocks supply atoms that can become part of a solid product through a sequence of chemical processes.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-53",
            "expansion-source-54",
            "expansion-source-55"
          ]
        },
        {
          "text": "ERA’s project account describes reforming followed by a carbonization reactor that produces solid carbon material.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-53",
            "expansion-source-54",
            "expansion-source-55"
          ]
        },
        {
          "text": "The resulting nanofibres can be tested as additives. Compare a material with and without the additive under the same conditions.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-53",
            "expansion-source-54",
            "expansion-source-55"
          ]
        },
        {
          "text": "Also examine the inputs, energy and remaining outputs. A useful product and a lower overall environmental footprint are related but separate claims.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-53",
            "expansion-source-54",
            "expansion-source-55"
          ]
        }
      ],
      "diagramAlt": "Conceptual sequence: Supply carbon-containing gases to the process. Use controlled reaction conditions. Recover solid carbon material. Measure its properties and the process inputs and outputs.",
      "diagramProvenance": "Generated generic teaching illustration. Source-backed editorial simplification; not a company process specification. See design/example-expansion-2026-10-15/.",
      "discussion": "What would you measure to decide whether a new additive improves both performance and environmental impact?"
    },
    "roleIds": [
      "work-process",
      "work-materials",
      "work-lab"
    ],
    "pathwayIds": [
      "route-chemical",
      "route-lab",
      "route-mechanical"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-15"
  },
  {
    "id": "summit-lithium-technologies-details",
    "exampleSlug": "summit-lithium-technologies",
    "organizationId": "summit-lithium-technologies",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "summit-lithium-technologies",
      "subtitle": "A useful separation must work again and again.",
      "caption": "A useful separation must work again and again.",
      "steps": [
        {
          "text": "A brine contains lithium alongside other dissolved substances. Its composition affects how a separation must be designed.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-56",
            "expansion-source-57",
            "expansion-source-58"
          ]
        },
        {
          "text": "Summit describes columns containing a sorbent that takes up lithium, followed by a step that releases lithium into another stream.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-56",
            "expansion-source-57",
            "expansion-source-58"
          ]
        },
        {
          "text": "Columns operate through repeated stages. Testing considers not only one successful cycle but also performance as the material is reused.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-56",
            "expansion-source-57",
            "expansion-source-58"
          ]
        },
        {
          "text": "Compare selectivity, recovery, water use and durability together. A result from one brine or test condition is not automatically transferable to every resource.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-56",
            "expansion-source-57",
            "expansion-source-58"
          ]
        }
      ],
      "diagramAlt": "Conceptual sequence: Begin with a mixture containing lithium and other substances. A selective material captures some lithium. Release lithium into another stream and prepare the material for reuse. Compare recovery and performance over repeated cycles.",
      "diagramProvenance": "Generated generic teaching illustration. Source-backed editorial simplification; not a company process specification. See design/example-expansion-2026-10-15/.",
      "discussion": "Would you choose a material that captures more lithium once, or one that performs consistently for many cycles?"
    },
    "roleIds": [
      "work-materials",
      "work-process",
      "work-controls"
    ],
    "pathwayIds": [
      "route-lab",
      "route-chemical",
      "route-instrument"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-15"
  },
  {
    "id": "veerum-details",
    "exampleSlug": "veerum",
    "organizationId": "veerum",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "veerum",
      "subtitle": "A digital view is useful only if it represents the place reliably.",
      "caption": "A digital view is useful only if it represents the place reliably.",
      "steps": [
        {
          "text": "A physical site can be captured in measurements and images, while design models describe intended structures.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-59",
            "expansion-source-60",
            "expansion-source-61",
            "expansion-source-62"
          ]
        },
        {
          "text": "VEERUM describes combining visual datasets, including point clouds and textured 3D models, with additional asset information.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-59",
            "expansion-source-60",
            "expansion-source-61",
            "expansion-source-62"
          ]
        },
        {
          "text": "To compare them meaningfully, users need compatible location references and an understanding of when the information was captured.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-59",
            "expansion-source-60",
            "expansion-source-61",
            "expansion-source-62"
          ]
        },
        {
          "text": "A detailed model may still omit an object, contain an alignment error or be out of date. The decision determines how much confidence is needed.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-59",
            "expansion-source-60",
            "expansion-source-61",
            "expansion-source-62"
          ]
        }
      ],
      "diagramAlt": "Conceptual sequence: Collect spatial observations of a site. Organize measurements into a digital representation. Check alignment, missing areas and observation dates. Compare with current conditions before using the model for a decision.",
      "diagramProvenance": "Generated generic teaching illustration. Source-backed editorial simplification; not a company process specification. See design/example-expansion-2026-10-15/.",
      "discussion": "What would you check before using a digital model to decide whether new equipment will fit?"
    },
    "roleIds": [
      "work-spatial",
      "work-software",
      "work-quality"
    ],
    "pathwayIds": [
      "route-geomatics",
      "route-software",
      "route-mechanical"
    ],
    "jobIds": [],
    "checkedOn": "2026-10-15"
  },
  {
    "id": "eguana-technologies-details",
    "exampleSlug": "eguana-technologies",
    "organizationId": "eguana-technologies",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "eguana-technologies",
      "subtitle": "Storing energy changes when it can be used.",
      "caption": "Storing energy changes when it can be used.",
      "steps": [
        {
          "text": "Electricity demand and available generation can change at different times. A battery can store energy for later use.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-64",
            "expansion-source-65",
            "expansion-source-66"
          ]
        },
        {
          "text": "Power electronics and controls manage electrical transfer between the storage system and other connected equipment.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-64",
            "expansion-source-65",
            "expansion-source-66"
          ]
        },
        {
          "text": "A design must distinguish power, the rate of transfer, from energy, the amount stored or delivered over time.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-64",
            "expansion-source-65",
            "expansion-source-66"
          ]
        },
        {
          "text": "Storage has losses and operating limits. Compare when energy is needed, how quickly it must be delivered and how much is available.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-64",
            "expansion-source-65",
            "expansion-source-66"
          ]
        }
      ],
      "diagramAlt": "Conceptual sequence: Electricity is available at one time. Store some energy for later use. Discharge it when electricity is needed. A larger load uses the stored energy faster.",
      "diagramProvenance": "Generated generic teaching illustration. Source-backed editorial simplification; not a company process specification. See design/example-expansion-2026-10-15/.",
      "discussion": "Could two batteries store the same amount of energy but support different appliances?"
    },
    "roleIds": [
      "work-power",
      "work-instrument",
      "work-software"
    ],
    "pathwayIds": [
      "route-electrical",
      "route-electrical-degree",
      "route-software"
    ],
    "jobIds": [
      "cgy-015-j1"
    ],
    "checkedOn": "2026-10-15"
  },
  {
    "id": "ftg-aerospace-calgary-details",
    "exampleSlug": "ftg-aerospace-calgary",
    "organizationId": "ftg-aerospace-calgary",
    "story": {
      "diagramKind": "research",
      "illustrationSlug": "ftg-aerospace-calgary",
      "subtitle": "An aircraft can carry measurements as well as passengers.",
      "caption": "An aircraft can carry measurements as well as passengers.",
      "steps": [
        {
          "text": "An aircraft moves through changing atmospheric conditions, so a measurement needs a time, position and altitude to be meaningful.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-68",
            "expansion-source-69",
            "expansion-source-70",
            "expansion-source-30"
          ]
        },
        {
          "text": "The company describes weather observations from aircraft-mounted systems. The variables available depend on which system is used.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-68",
            "expansion-source-69",
            "expansion-source-70",
            "expansion-source-30"
          ]
        },
        {
          "text": "Communications and software move observations into tools for users. Reliability includes handling missing or delayed data.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-68",
            "expansion-source-69",
            "expansion-source-70",
            "expansion-source-30"
          ]
        },
        {
          "text": "Observations along flight routes can add evidence, but they do not sample every place equally. Coverage and instrument differences matter to interpretation.",
          "kind": "interpreted",
          "sourceIds": [
            "expansion-source-68",
            "expansion-source-69",
            "expansion-source-70",
            "expansion-source-30"
          ]
        }
      ],
      "diagramAlt": "Conceptual sequence: Aircraft travel through different atmospheric conditions. Sensors collect observations along the route. Communication systems deliver data to the ground. Meteorologists combine observations with other evidence and models.",
      "diagramProvenance": "Generated generic teaching illustration. Source-backed editorial simplification; not a company process specification. See design/example-expansion-2026-10-15/.",
      "discussion": "How would a map of scheduled flights affect the weather observations available?"
    },
    "roleIds": [
      "work-avionics",
      "work-software",
      "work-weather"
    ],
    "pathwayIds": [
      "route-avionics",
      "route-software",
      "route-electrical"
    ],
    "jobIds": [
      "cgy-016-j1"
    ],
    "checkedOn": "2026-10-15"
  }
];

export const expansionSources: DatedSource[] = [
  {
    "id": "expansion-source-1",
    "label": "Company and Calgary team",
    "url": "https://botaneco.com/about/",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-2",
    "label": "Processing platform",
    "url": "https://botaneco.com/technology/",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-3",
    "label": "Products and uses",
    "url": "https://botaneco.com/",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-4",
    "label": "Careers check",
    "url": "https://botaneco.com/careers/",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-5",
    "label": "Alberta Chemistry 20–30 program of studies (updated 2014)",
    "url": "https://education.alberta.ca/media/159730/chem2030_07.pdf",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-6",
    "label": "SAIT — Chemical Laboratory Technology",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/chemical-laboratory-technology",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-7",
    "label": "University of Calgary — Biochemistry",
    "url": "https://science.ucalgary.ca/future-students/undergraduate/programs",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-8",
    "label": "University of Calgary — Chemical Engineering",
    "url": "https://schulich.ucalgary.ca/future-students/undergraduate/programs/bsc-chemical-engineering",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-9",
    "label": "Company, products and Calgary address",
    "url": "https://www.nanalysis.com/",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-10",
    "label": "How the signal becomes a spectrum",
    "url": "https://www.nanalysis.com/nmready-blog/2023/6/27/relation-between-the-fid-and-the-nmr-spectrum",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-11",
    "label": "Careers check",
    "url": "https://www.nanalysis.com/career",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-12",
    "label": "Alberta Physics 20–30 performance standards",
    "url": "https://www.alberta.ca/system/files/custom_downloaded_images/edc-physics20-30-performance-standards.pdf",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-13",
    "label": "SAIT — Electrical Engineering Technology",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/electrical-engineering-technology",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-14",
    "label": "SAIT — Software Development",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/software-development",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-15",
    "label": "Manufacturing capabilities and Calgary facility",
    "url": "https://exergysolutions.com/services/manufacturing/",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-16",
    "label": "Facility address",
    "url": "https://exergysolutions.com/contact-us/",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-17",
    "label": "Careers check",
    "url": "https://exergysolutions.com/careers",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-18",
    "label": "SAIT — Mechanical Engineering Technology",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/mechanical-engineering-technology",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-19",
    "label": "SAIT — Machinist",
    "url": "https://www.sait.ca/apprenticeships-and-trades/programs/machinist",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-20",
    "label": "SAIT — Instrumentation Engineering Technology",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/instrumentation-engineering-technology",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-21",
    "label": "PLANT process",
    "url": "https://www.livestockwaterrecycling.com/the-system/plant/",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-22",
    "label": "Calgary research work",
    "url": "https://www.livestockwaterrecycling.com/our-story/innovation-center/",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-23",
    "label": "Local facility",
    "url": "https://www.livestockwaterrecycling.com/contact/contact-us/",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-24",
    "label": "Employer role evidence",
    "url": "https://www.livestockwaterrecycling.com/careers/current-job-openings/",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-25",
    "label": "Calgary Board of Education: Science 10/20/30 course topics",
    "url": "https://eps.cbe.ab.ca/science-10-20-30.aspx",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-26",
    "label": "Calgary services",
    "url": "https://www.avmax.com/contact",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-27",
    "label": "Maintenance and inspection",
    "url": "https://www.avmax.com/mro-1",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-28",
    "label": "Component services",
    "url": "https://www.avmax.com/services-9",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-29",
    "label": "Careers check",
    "url": "https://www.avmax.com/careers",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-30",
    "label": "AME licensing overview",
    "url": "https://tc.canada.ca/en/aviation/licensing-aircraft-maintenance-engineers-ames/obtaining-aircraft-maintenance-engineer-ame-licence",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-31",
    "label": "SAIT — Aircraft Maintenance Engineers Technology",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/aircraft-maintenance-engineers-technology",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-32",
    "label": "SAIT — Avionics Technology",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/avionics-technology",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-33",
    "label": "Biomanufacturing and quality work",
    "url": "https://northernrna.com/biomanufacturing/",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-34",
    "label": "Development services",
    "url": "https://northernrna.com/development-services/",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-35",
    "label": "Calgary and service context",
    "url": "https://northernrna.com/",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-36",
    "label": "Work areas in recent hiring",
    "url": "https://northernrna.com/careers/",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-37",
    "label": "Calgary Board of Education: Biology 20/30 course topics",
    "url": "https://eps.cbe.ab.ca/biology-20-30.aspx",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-38",
    "label": "RoBird design and airport example",
    "url": "https://www.aeriumanalytics.com/robird/",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-39",
    "label": "Operational tasks",
    "url": "https://www.aeriumanalytics.com/life-at-the-heart-of-aeriums-operations/",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-40",
    "label": "Services and stakeholders",
    "url": "https://www.aeriumanalytics.com/services/",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-41",
    "label": "Calgary connection",
    "url": "https://www.aeriumanalytics.com/contact-us/",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-42",
    "label": "SAIT — Geomatics Engineering Technology",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/geomatics-engineering-technology",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-43",
    "label": "Sensors, teams and location",
    "url": "https://www.geologicai.com/",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-44",
    "label": "Current careers page",
    "url": "https://www.geologicai.com/careers/",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-45",
    "label": "Dated technology specification",
    "url": "https://www.geologicai.com/s/GeologicAI-Tech-Specs-2024.pdf",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-46",
    "label": "University of Calgary — Geology",
    "url": "https://science.ucalgary.ca/earth/future-students/undergraduate/earth-science",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-47",
    "label": "Katal project and Calgary shop",
    "url": "https://www.tangentservices.com/projects/katal",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-48",
    "label": "SAIT — Industrial Mechanic (Millwright)",
    "url": "https://www.sait.ca/apprenticeships-and-trades/programs/industrial-mechanic-millwright",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-49",
    "label": "Company work and career areas",
    "url": "https://www.foremost.ca/careers",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-50",
    "label": "Vehicle product evidence",
    "url": "https://media.foremost.ca/reason_middle_pdf_1742231408010_VEHICLES-OVERVIEW-WEB.pdf?v=products",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-51",
    "label": "Facility source checked",
    "url": "https://www.foremost.ca/facility-resume/calgary",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-52",
    "label": "SAIT — Welder",
    "url": "https://www.sait.ca/apprenticeships-and-trades/programs/welder",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-53",
    "label": "Company technology and development status",
    "url": "https://carbonova.com/",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-54",
    "label": "Active Calgary demonstration project",
    "url": "https://www.eralberta.ca/projects/details/carbon-nanofiber-commerical-demonstration/",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-55",
    "label": "Completed CREATE process project",
    "url": "https://www.eralberta.ca/projects/details/carbon-reforming-to-economic-additives-for-transitioning-into-emission-less-era/",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-56",
    "label": "Company and local operations",
    "url": "https://summitlithium.tech/company",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-57",
    "label": "Technology description",
    "url": "https://summitlithium.tech/technology",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-58",
    "label": "Operating-name change and development stage",
    "url": "https://summitlithium.tech/newsroom/summit-nanotech-becomes-summit-lithium-technologies-completes-basic-engineering-for-commercial-dle-plant",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-59",
    "label": "Company and platform",
    "url": "https://veerum.com/",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-60",
    "label": "Calgary contact",
    "url": "https://veerum.com/corporate-contact/",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-61",
    "label": "3D data and model capabilities",
    "url": "https://veerum.com/news/veerum-announces-support-for-ogc-s-3d-tiles-standard-to-modernize-asset-visualization-for-industrial/",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-62",
    "label": "Careers check",
    "url": "https://veerum.com/careers/",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-63",
    "label": "Alberta Science 10 program (government-hosted copy): inquiry skills, pp. 8–10",
    "url": "https://www.gov.nu.ca/sites/default/files/documents/2024-10/Science_10__Alberta_2005_.pdf",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-64",
    "label": "Storage products",
    "url": "https://eguanatech.com/products/energy-storage-systems/",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-65",
    "label": "Current Calgary headquarters",
    "url": "https://eguanatech.com/contact/contact-us/",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-66",
    "label": "Historical employer role, dated 14 February 2018",
    "url": "https://eguanatech.com/_resources/careers/Power-Electronics-Engineer.pdf",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-67",
    "label": "University of Calgary — Electrical Engineering",
    "url": "https://schulich.ucalgary.ca/future-students/undergraduate/programs/majors",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-68",
    "label": "Current company identity and products",
    "url": "https://flyht.com/",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-69",
    "label": "Weather observations and differences between systems",
    "url": "https://flyht.com/weather-sensors/tamdar/",
    "checkedOn": "2026-10-15"
  },
  {
    "id": "expansion-source-70",
    "label": "Calgary software role evidence",
    "url": "https://flyht.com/people/",
    "checkedOn": "2026-10-15"
  }
];

