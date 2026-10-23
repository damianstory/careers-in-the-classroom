import type { DatedSource, LearningPathway, RoleProfile } from "./types";

export const october23Roles: RoleProfile[] = [
  {
    "id": "work-geophysics",
    "title": "Geophysicist",
    "summary": "Use physical measurements to investigate the structure and properties of the Earth.",
    "explanation": "Geophysicists plan and interpret measurements such as seismic waves. They combine physics, mathematics and computing to compare possible explanations of what lies underground. An image is a model supported by evidence, not a direct photograph.",
    "tasks": [
      {
        "title": "Design",
        "detail": "Choose measurements and sampling arrangements that address a specific question."
      },
      {
        "title": "Process",
        "detail": "Check signal quality and understand how processing changes the data."
      },
      {
        "title": "Interpret",
        "detail": "Compare possible underground structures and communicate uncertainty."
      }
    ],
    "collaborators": [
      "Field acquisition teams",
      "Geologists",
      "Software developers"
    ],
    "classroomConnection": "Wave behaviour, sampling and uncertainty determine what a measurement can reveal."
  }
];

export const october23Pathways: LearningPathway[] = [
  {
    "id": "oct23-route-geophysics",
    "provider": "University of Calgary",
    "name": "Geophysics (BSc)",
    "routeType": "Degree",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Physics and quantitative methods for investigating the Earth.",
    "entryNote": "A related degree foundation. Professional registration and relevant experience are separate requirements; consult the current provider and regulator. This is not an employer hiring requirement.",
    "roleRationale": [
      {
        "roleId": "work-geophysics",
        "why": "Physics and quantitative methods for investigating the Earth. This is an editorial preparation connection, not proof of a job requirement."
      }
    ],
    "urlSourceId": "oct23-geophysics-calendar",
    "kind": "interpreted",
    "sourceIds": [
      "oct23-geophysics-calendar"
    ],
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-route-science-communication",
    "provider": "University of Calgary",
    "name": "Physics (BSc)",
    "routeType": "Degree",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Physics, mathematical modelling, experimental observation and problem-solving.",
    "entryNote": "A subject-knowledge foundation for explaining motion and robotics. It is not teacher certification or an employer requirement; science communication and teaching practice need additional preparation.",
    "roleRationale": [
      {
        "roleId": "work-science-education",
        "why": "Physics, mathematical modelling, experimental observation and problem-solving. This is an editorial preparation connection, not proof of a job requirement."
      }
    ],
    "urlSourceId": "oct23-physics-degree",
    "kind": "interpreted",
    "sourceIds": [
      "oct23-physics-degree"
    ],
    "checkedOn": "2026-10-23"
  }
];

export const october23Sources: DatedSource[] = [
  {
    "id": "oct23-geophysics-calendar",
    "label": "GOPHBSC Program | UCalgary Calendar",
    "url": "https://calendar.ucalgary.ca/programs/GOPHBSC/program-details-krhha",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-physics-degree",
    "label": "Physics | Future Students | University of Calgary",
    "url": "https://www.ucalgary.ca/future-students/undergraduate/explore-programs/physics",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-cgy-185-0",
    "label": "BioAro : Precision Health",
    "url": "https://bioaro.com/labdirector",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-course-biology-30",
    "label": "Biology 30 — Alberta curriculum reference",
    "url": "https://education.alberta.ca/media/159727/bio203007.pdf",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct23-cgy-186-0",
    "label": "NanosTech | The Breakthrough is the Catalyst",
    "url": "https://www.nanos.tech/",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-nanostech-bio",
    "label": "AQP Bio — Renewable Fuels, Refinery-Ready | NanosTech",
    "url": "https://www.nanos.tech/aqp-bio.html",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-course-chemistry-30",
    "label": "Chemistry 30 — Alberta curriculum reference",
    "url": "https://education.alberta.ca/media/159730/chem2030_07.pdf",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct23-ept-lab-web",
    "label": "EPT Clean Oil — Fluid Technical Center",
    "url": "https://cleanoil.com/lab-services/",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-ept-contact-web",
    "label": "EPT Clean Oil — Calgary contact",
    "url": "https://cleanoil.com/contact/",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-ept-about-web",
    "label": "EPT Clean Oil — company history",
    "url": "https://cleanoil.com/about/",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-course-chemistry-20",
    "label": "Chemistry 20 — Alberta curriculum reference",
    "url": "https://education.alberta.ca/media/159730/chem2030_07.pdf",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct23-cgy-189-0",
    "label": "Optiseis Solutions Ltd. – Subsurface Imaging & Analytics",
    "url": "https://optiseis.com/",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-optiseis-design",
    "label": "Seismic Design & Acquisition – Optiseis Solutions Ltd.",
    "url": "https://optiseis.com/seismic-design-acquisition-2024/",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-optiseis-eco",
    "label": "ecoSeis – Optiseis Solutions Ltd.",
    "url": "https://optiseis.com/ecoseis-2024/",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-course-physics-20",
    "label": "Physics 20 — Alberta curriculum reference",
    "url": "https://www.alberta.ca/system/files/custom_downloaded_images/edc-physics20-30-performance-standards.pdf",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct23-cgy-190-0",
    "label": "Sustainable Resource Discovery | Seismic Data Processing",
    "url": "https://www.absoluteimaging.ca/technology/",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-cgy-194-0",
    "label": "Locations | Allnorth",
    "url": "https://www.allnorth.com/locations/",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-allnorth-controls",
    "label": "Industrial Automation and Control Engineering Solutions | Allnorth",
    "url": "https://www.allnorth.com/services/engineering-services/automation-and-controls/",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-allnorth-instrument",
    "label": "Instrumentation Engineering Services | Allnorth",
    "url": "https://www.allnorth.com/services/engineering-services/instrumentation/",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-course-science-10",
    "label": "Science 10 — Alberta curriculum reference",
    "url": "https://education.alberta.ca/media/159715/science10.pdf",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct23-cgy-198-0",
    "label": "TELUS Spark Science Centre | Family Fun, STEM Learning, and Events in Calgary",
    "url": "https://www.sparkscience.ca/",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-cgy-198-2",
    "label": "RO5iE: Robot Roller Coaster | Interactive Robotic Arm Ride at TELUS Spark Calgary",
    "url": "https://www.sparkscience.ca/ro5ie-coaster",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-cgy-198-3",
    "label": "Robotics Lab (Aug 25–27, 2025) – BEC Robotics Workshop at TELUS Spark",
    "url": "https://www.sparkscience.ca/bec-robotics-workshop",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-course-cse1240",
    "label": "CSE1240 — Alberta curriculum reference",
    "url": "https://curriculum.learnalberta.ca/curriculum/en/pos/CTSCSE/CSE1240",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct23-cgy-199-0",
    "label": "Our Technology — OzoneBio",
    "url": "https://ozonebio.ca/technology.html",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-cgy-199-1",
    "label": "OzoneBio",
    "url": "https://ozonebio.ca/",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-cgy-201-0",
    "label": "Home | Launchcode - Your vision, accomplished.",
    "url": "https://lc.dev/",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-cgy-201-1",
    "label": "Contact | Launchcode - Your vision, accomplished.",
    "url": "https://lc.dev/contact/",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-launchcode-sol",
    "label": "SOL | Launchcode - Your vision, accomplished.",
    "url": "https://lc.dev/projects/sol",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-course-cse1120",
    "label": "CSE1120 — Alberta curriculum reference",
    "url": "https://curriculum.learnalberta.ca/curriculum/en/pos/CTSCSE/CSE1120",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct23-cgy-202-0",
    "label": "Home - dakotaanalytics",
    "url": "https://dakotaanalytics.com/",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-cgy-202-1",
    "label": "Contact Us - dakotaanalytics",
    "url": "https://dakotaanalytics.com/contact-us/",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-dakota-services",
    "label": "Services - dakotaanalytics",
    "url": "https://dakotaanalytics.com/services/",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-course-inf2070",
    "label": "INF2070 — Alberta curriculum reference",
    "url": "https://curriculum.learnalberta.ca/curriculum/en/pos/CTSINF/INF2070",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct23-cgy-203-0",
    "label": "Home | Vista Vu",
    "url": "https://www.vistavusolutions.com/",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-vistavu-locations",
    "label": "Locations | Vista Vu",
    "url": "https://www.vistavusolutions.com/locations",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-vistavu-resolv",
    "label": "Resolv | VistaVu",
    "url": "https://www.vistavusolutions.com/resolv-sap-extension-wholesale-distribution-software",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-robots-about-web",
    "label": "Robots & Pencils — company and locations",
    "url": "https://robotsandpencils.com/about/",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-robots-sprint-web",
    "label": "Robots & Pencils — Sharpening Sprint",
    "url": "https://robotsandpencils.com/sharpening-sprint/",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-cgy-205-0",
    "label": "Vog App Developers",
    "url": "https://vogappdevelopers.com/",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-cgy-205-1",
    "label": "Introducing Vog by Novus Tech Group | Vog App Developers",
    "url": "https://vogappdevelopers.com/blog/introducing-vog-by-novus-tech-group/",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-vog-work",
    "label": "Our Work | Vog App Developers",
    "url": "https://vogappdevelopers.com/our-work/",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-stellar-case-web",
    "label": "Ticketmaster — StellarAlgo and Calgary Flames case study",
    "url": "https://business.ticketmaster.com/how-stellaralgo-ticketmaster-and-the-calgary-flames-grew-a-fanbase/",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-cgy-211-0",
    "label": "Made by Marcus Ice Cream Shop Locations",
    "url": "https://madebymarcus.ca/pages/yyc-made-by-marcus-scoop-shops",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-cgy-211-1",
    "label": "Made by Marcus Ice Cream FAQs",
    "url": "https://madebymarcus.ca/pages/faqs",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-course-ent2010",
    "label": "ENT2010 — Alberta curriculum reference",
    "url": "https://curriculum.learnalberta.ca/curriculum/en/pos/CTSENT/ENT2010",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct23-cgy-213-0",
    "label": "Welcome to the Calgary Farmers' Market Website",
    "url": "https://calgaryfarmersmarket.ca/",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-market-vendors",
    "label": "Become a Vendor - Calgary Farmers' Market",
    "url": "https://calgaryfarmersmarket.ca/become-a-vendor/",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-cgy-215-0",
    "label": "Bakery and Cafe Locations",
    "url": "https://www.cravecupcakes.ca/pages/bakery-locations",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-fyi-calgary",
    "label": "Optometrist Calgary | Multiple FYidoctors Eye Clinics",
    "url": "https://fyidoctors.com/pages/optometrist-calgary",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-cgy-217-0",
    "label": "Optometrist Near Me | Find Local Eye Doctors | FYidoctors",
    "url": "https://fyidoctors.com/pages/find-a-location",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-cgy-218-2",
    "label": "Hospitality | The Element by Westin | PBA Group",
    "url": "https://thepbagroup.com/hospitality/element-by-westin/",
    "checkedOn": "2026-10-23"
  },
  {
    "id": "oct23-cgy-218-0",
    "label": "PBA Group | Building Possibility & Community for 60+ Years",
    "url": "https://thepbagroup.com/",
    "checkedOn": "2026-10-23"
  }
];
