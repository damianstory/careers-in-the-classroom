import type { LearningPathway } from "./types";

// Official program pages only. What each program teaches is stated by the provider;
// why it relates to a role is our reading of that page. None is an employer requirement.
export const learningPathways: LearningPathway[] = [
  {
    id: "ucalgary-engineering-physics",
    provider: "University of Calgary, Schulich School of Engineering",
    name: "Engineering Physics (BSc)",
    routeType: "University degree",
    location: "Calgary",
    relevance: "local",
    learns: "Physics combined with electrical and mechanical engineering. One focus area covers aerospace, toward aircraft, rockets and satellites for near-earth orbit.",
    roleRationale: [
      {
        roleId: "satellite-engineering",
        why: "The program page says graduates can develop new instruments, measurement techniques or prototype systems, and names satellites in its aerospace focus.",
      },
    ],
    kind: "stated",
    sourceIds: ["ucalgary-engphys"],
    urlSourceId: "ucalgary-engphys",
    checkedOn: "2026-09-25",
  },
  {
    id: "ualberta-earth-sciences",
    provider: "University of Alberta, Faculty of Science",
    name: "Earth Sciences major (BSc)",
    routeType: "University degree",
    location: "Edmonton",
    relevance: "local",
    learns: "The Earth’s structure and evolution, and the atmosphere above it. Careers the page lists include meteorologist, global change researcher and research scientist.",
    roleRationale: [
      {
        roleId: "atmospheric-science",
        why: "The program explicitly includes study of the atmosphere, the part of the Earth this measurement work is about.",
      },
    ],
    kind: "stated",
    sourceIds: ["ualberta-earth"],
    urlSourceId: "ualberta-earth",
    checkedOn: "2026-09-25",
  },
  {
    id: "ucalgary-geomatics",
    provider: "University of Calgary, Schulich School of Engineering",
    name: "Geomatics Engineering (BSc)",
    routeType: "University degree",
    location: "Calgary",
    relevance: "local",
    learns: "Collecting, modelling, analyzing and managing spatial data. Courses include remote sensing, satellite positioning and digital imaging.",
    roleRationale: [
      {
        roleId: "atmospheric-science",
        why: "It teaches remote sensing, and the page asks how satellite images can be used to observe climate change.",
      },
      {
        roleId: "software-data",
        why: "It is about analyzing and managing large amounts of spatial data, the kind satellite measurements produce.",
      },
    ],
    kind: "stated",
    sourceIds: ["ucalgary-geomatics"],
    urlSourceId: "ucalgary-geomatics",
    checkedOn: "2026-09-25",
  },
  {
    id: "sait-geomatics",
    provider: "SAIT",
    name: "Geomatics Engineering Technology",
    routeType: "Two-year diploma",
    location: "Calgary",
    relevance: "local",
    learns: "Hands-on work with GIS, GPS and remote sensing to map and interpret the environment, including a remote sensing course.",
    roleRationale: [
      {
        roleId: "software-data",
        why: "Graduates work with mapping software and satellite and aerial data, which is how emissions results are located and shown.",
      },
    ],
    kind: "stated",
    sourceIds: ["sait-geomatics"],
    urlSourceId: "sait-geomatics",
    checkedOn: "2026-09-25",
  },
  {
    "id": "ucalgary-zoology",
    "provider": "University of Calgary",
    "name": "Zoology (BSc)",
    "routeType": "University degree",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Study animal structure, function and diversity, with a broad foundation in animal biology.",
    "roleRationale": [
      {
        "roleId": "conservation-research",
        "why": "Understanding animal biology supports questions about survival and reproduction; this is a foundation for research, not a guarantee of a research-lead position."
      },
      {
        "roleId": "animal-care",
        "why": "Animal biology helps explain differences in behaviour, body condition and species needs."
      }
    ],
    "entryNote": "An undergraduate route. The Wilder job example also asks for animal-care experience; a degree alone does not meet every requirement.",
    "kind": "stated",
    "sourceIds": [
      "depth-ucalgary-zoology"
    ],
    "urlSourceId": "depth-ucalgary-zoology",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "olds-environment",
    "provider": "Olds College of Agriculture & Technology",
    "name": "Environmental Science and Technology",
    "routeType": "Two-year diploma",
    "location": "Olds, Alberta",
    "relevance": "local",
    "learns": "Field and laboratory learning in soils, vegetation, water and wildlife, using tools such as GIS, GPS and environmental sampling.",
    "roleRationale": [
      {
        "roleId": "conservation-research",
        "why": "Field observation, mapping and monitoring are useful in conservation projects. This route prepares for technical work; it is not equivalent to qualification as a lead population ecologist."
      }
    ],
    "entryNote": "Includes work-integrated learning. Check the official page for current admission requirements.",
    "kind": "stated",
    "sourceIds": [
      "depth-olds-environment"
    ],
    "urlSourceId": "depth-olds-environment",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "olds-assistant",
    "provider": "Olds College of Agriculture & Technology",
    "name": "Veterinary Technical Assistant",
    "routeType": "Four-month certificate",
    "location": "Olds, Alberta",
    "relevance": "local",
    "learns": "Hands-on animal handling, patient preparation and veterinary equipment for entry-level support work.",
    "roleRationale": [
      {
        "roleId": "animal-care",
        "why": "Provides an introduction to animal-care practice and assisting veterinary teams; wildlife-specific experience still needs to be developed."
      }
    ],
    "entryNote": "An entry-level support route, not a veterinarian qualification or a substitute for the experience in Wilder’s posting.",
    "kind": "stated",
    "sourceIds": [
      "depth-olds-assistant"
    ],
    "urlSourceId": "depth-olds-assistant",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "olds-vet",
    "provider": "Olds College of Agriculture & Technology",
    "name": "Veterinary Technology",
    "routeType": "18-month accelerated diploma",
    "location": "Olds, Alberta",
    "relevance": "local",
    "learns": "Animal care, anatomy, diagnostic procedures and clinical skills, including an industry practicum.",
    "roleRationale": [
      {
        "roleId": "animal-care",
        "why": "Clinical observation and care skills can support work alongside veterinarians. The program trains veterinary technologists, a distinct role from veterinarians."
      }
    ],
    "entryNote": "This diploma does not provide direct entry to a DVM. Professional registration has additional examination requirements; consult the provider.",
    "kind": "stated",
    "sourceIds": [
      "depth-olds-vet"
    ],
    "urlSourceId": "depth-olds-vet",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "ucalgary-dvm",
    "provider": "University of Calgary",
    "name": "Doctor of Veterinary Medicine (DVM)",
    "routeType": "Four-year professional degree",
    "location": "Calgary",
    "relevance": "local",
    "learns": "General veterinary medicine, with opportunities in ecosystem and public health that include wildlife, conservation and zoo medicine.",
    "roleRationale": [
      {
        "roleId": "wildlife-veterinary",
        "why": "Its ecosystem and public-health emphasis connects animal medicine with wildlife and conservation questions."
      }
    ],
    "entryNote": "Not direct entry from high school. At least four full-time undergraduate terms and specified prerequisite courses are required; admission is competitive. See the linked admissions requirements.",
    "kind": "stated",
    "sourceIds": [
      "depth-ucalgary-dvm",
      "depth-ucalgary-dvm-entry"
    ],
    "urlSourceId": "depth-ucalgary-dvm",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "ucalgary-chemical",
    "provider": "University of Calgary",
    "name": "Chemical Engineering (BSc)",
    "routeType": "University degree",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Engineering foundations, process design and a final-year team design project, with an internship opportunity.",
    "roleRationale": [
      {
        "roleId": "process-engineering",
        "why": "Designing and evaluating chemical processes provides a foundation for separation, water treatment and scale-up work."
      }
    ],
    "entryNote": "An undergraduate engineering route. The Stantec job example asks for a relevant degree and EIT registration or eligibility; E3’s role additionally asks for substantial experience.",
    "kind": "stated",
    "sourceIds": [
      "depth-ucalgary-chemical"
    ],
    "urlSourceId": "depth-ucalgary-chemical",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "sait-chemical",
    "provider": "SAIT",
    "name": "Chemical Engineering Technology",
    "routeType": "Two-year diploma",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Practical work in unit operations, process simulation, equipment design and safe operation of processing units.",
    "roleRationale": [
      {
        "roleId": "process-engineering",
        "why": "Process calculations and simulation support technical work alongside engineers."
      },
      {
        "roleId": "process-operations",
        "why": "Equipment operation and troubleshooting connect directly to monitoring and improving a process."
      }
    ],
    "entryNote": "A technology diploma is a distinct route from an engineering degree; it does not replace a posting’s engineering-degree requirement.",
    "kind": "stated",
    "sourceIds": [
      "depth-sait-chemical"
    ],
    "urlSourceId": "depth-sait-chemical",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "sait-power",
    "provider": "SAIT",
    "name": "Power Engineering Technology",
    "routeType": "Two-year diploma",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Thermodynamics, safe plant operation and practical work with equipment such as pumps, compressors and boilers.",
    "roleRationale": [
      {
        "roleId": "process-operations",
        "why": "Training with energy and process equipment develops skills relevant to plant operation and monitoring."
      }
    ],
    "entryNote": "Prepares students for ABSA certification exams. Power engineering certification is distinct from a professional engineering degree and is not claimed as an E3 requirement.",
    "kind": "stated",
    "sourceIds": [
      "depth-sait-power"
    ],
    "urlSourceId": "depth-sait-power",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "sait-marketing",
    "provider": "SAIT",
    "name": "Business Administration – Marketing",
    "routeType": "Two-year diploma",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Business and marketing foundations, market research, communication and customer relationships.",
    "roleRationale": [
      {
        "roleId": "commercial-partnerships",
        "why": "Learning to understand customer needs and communicate an offer provides a foundation for business development."
      }
    ],
    "entryNote": "An introductory route into business skills. GHGSat’s manager role asks for a bachelor’s degree and five or more years of experience; this diploma alone does not meet that requirement.",
    "kind": "stated",
    "sourceIds": [
      "depth-sait-marketing"
    ],
    "urlSourceId": "depth-sait-marketing",
    "checkedOn": "2026-09-29"
  },
];
