import { october23Pathways } from "./october23";
import { october21Pathways, october21PathwayLinks, october21PathwayUpdates } from "./october21";
import { october20Pathways, october20PathwayLinks } from "./october20";
import type { LearningPathway } from "./types";

// Official program pages only. What each program teaches is stated by the provider;
// why it relates to a role is our reading of that page. None is an employer requirement.
const existingLearningPathways: LearningPathway[] = [
  {
    "id": "oct19-route-bees",
    "provider": "ABC Bees",
    "name": "Level One Beekeeping Certificate",
    "routeType": "Independent online education",
    "location": "Online; provider has Calgary work",
    "learns": "Bee biology, observation and seasonal colony-management planning.",
    "entryNote": "Provider-issued education, not an academic diploma, occupational licence or permission to keep bees. Online course listing is distinct from the contradictory/dated field-day banners; no current Calgary field-day booking is claimed.",
    "relevance": "local",
    "roleRationale": [
      {
        "roleId": "work-beekeeping",
        "why": "For Beekeeper, this route supplies related preparation: Bee biology, observation and seasonal colony-management planning. It is a preparation connection, not a claim of the employer’s minimum qualification."
      }
    ],
    "urlSourceId": "oct19-source-71",
    "kind": "interpreted",
    "sourceIds": [
      "oct19-source-71",
      "oct19-source-68"
    ],
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-route-deicing",
    "provider": "Aeromag",
    "name": "Employer classroom and practical training",
    "routeType": "Employer training",
    "location": "Company-wide; Calgary vacancy listed separately",
    "learns": "Aircraft, fluids, communication, truck operation and supervised practical work.",
    "entryNote": "The current Calgary-linked seasonal posting requires a driver’s licence, shift availability and airport security/airside requirements. Training is employer-provided; it is not an aircraft-maintenance licence. Named simulators are in Vancouver and Cleveland.",
    "relevance": "local",
    "roleRationale": [
      {
        "roleId": "work-aircraft-deicing",
        "why": "For Aircraft deicing technician, this route supplies related preparation: Aircraft, fluids, communication, truck operation and supervised practical work. It is a preparation connection, not a claim of the employer’s minimum qualification."
      }
    ],
    "urlSourceId": "oct19-source-24",
    "kind": "interpreted",
    "sourceIds": [
      "oct19-source-24",
      "oct19-source-25"
    ],
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-route-electrician",
    "provider": "SAIT",
    "name": "Electrician",
    "routeType": "Apprenticeship",
    "location": "Calgary technical training plus workplace learning",
    "learns": "Electrical drawings, circuits, installations and trade verification.",
    "entryNote": "Apprenticeship requires registration and the required education/work components. An instrumentation diploma does not itself confer electrician qualification.",
    "relevance": "local",
    "roleRationale": [
      {
        "roleId": "work-electrician",
        "why": "For Electrician, this route supplies related preparation: Electrical drawings, circuits, installations and trade verification. It is a preparation connection, not a claim of the employer’s minimum qualification."
      }
    ],
    "urlSourceId": "oct19-source-60",
    "kind": "interpreted",
    "sourceIds": [
      "oct19-source-60"
    ],
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-route-food",
    "provider": "University of Alberta",
    "name": "Nutrition and Food Science — Food Science and Technology",
    "routeType": "BSc specialization",
    "location": "Edmonton",
    "learns": "Food manufacturing, preservation, storage and quality assurance.",
    "entryNote": "An Alberta degree route relevant to food science; it is not a universal minimum for cheese-production or malt-house jobs.",
    "relevance": "local",
    "roleRationale": [
      {
        "roleId": "work-food",
        "why": "For Ingredient and formulation science, this route supplies related preparation: Food manufacturing, preservation, storage and quality assurance. It is a preparation connection, not a claim of the employer’s minimum qualification."
      },
      {
        "roleId": "work-quality",
        "why": "For Quality and traceability, this route supplies related preparation: Food manufacturing, preservation, storage and quality assurance. It is a preparation connection, not a claim of the employer’s minimum qualification."
      },
      {
        "roleId": "work-lab",
        "why": "For Laboratory analysis, this route supplies related preparation: Food manufacturing, preservation, storage and quality assurance. It is a preparation connection, not a claim of the employer’s minimum qualification."
      }
    ],
    "urlSourceId": "oct19-source-55",
    "kind": "interpreted",
    "sourceIds": [
      "oct19-source-55"
    ],
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-route-glazier",
    "provider": "SAIT",
    "name": "Glazier",
    "routeType": "Apprenticeship",
    "location": "Calgary technical training plus workplace learning",
    "learns": "Glazing systems, fabrication and installation skills.",
    "entryNote": "An apprenticeship route requires the applicable registration, work and education components. Not every window-installation job is advertised as a glazier apprenticeship.",
    "relevance": "local",
    "roleRationale": [
      {
        "roleId": "work-glazing",
        "why": "For Glazier and window-installation work, this route supplies related preparation: Glazing systems, fabrication and installation skills. It is a preparation connection, not a claim of the employer’s minimum qualification."
      }
    ],
    "urlSourceId": "oct19-source-32",
    "kind": "interpreted",
    "sourceIds": [
      "oct19-source-32"
    ],
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-route-graphic",
    "provider": "SAIT",
    "name": "Interactive Design — Graphic Design",
    "routeType": "Diploma",
    "location": "Calgary",
    "learns": "Visual communication and preparation of files for small- and large-format print.",
    "entryNote": "A prepress/design preparation route. It does not replace press-specific experience or training.",
    "relevance": "local",
    "roleRationale": [
      {
        "roleId": "work-prepress",
        "why": "For Prepress and print-production design, this route supplies related preparation: Visual communication and preparation of files for small- and large-format print. It is a preparation connection, not a claim of the employer’s minimum qualification."
      },
      {
        "roleId": "work-jewellery-design",
        "why": "For Jewellery designer, this route supplies related preparation: Visual communication and preparation of files for small- and large-format print. It is a preparation connection, not a claim of the employer’s minimum qualification."
      }
    ],
    "urlSourceId": "oct19-source-16",
    "kind": "interpreted",
    "sourceIds": [
      "oct19-source-16"
    ],
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-route-jewellery",
    "provider": "Alberta University of the Arts",
    "name": "Jewellery and Metals",
    "routeType": "BFA study area",
    "location": "Calgary",
    "learns": "Jewellery, small metal objects, design and fabrication.",
    "entryNote": "A local design/materials route, not an employer-mandated qualification or a guarantee of production work at Marlow.",
    "relevance": "local",
    "roleRationale": [
      {
        "roleId": "work-jewellery-design",
        "why": "For Jewellery designer, this route supplies related preparation: Jewellery, small metal objects, design and fabrication. It is a preparation connection, not a claim of the employer’s minimum qualification."
      }
    ],
    "urlSourceId": "oct19-source-65",
    "kind": "interpreted",
    "sourceIds": [
      "oct19-source-65"
    ],
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-route-mla",
    "provider": "SAIT",
    "name": "Medical Laboratory Assistant",
    "routeType": "Certificate",
    "location": "Calgary and practicum settings",
    "learns": "Clinical specimens, laboratory procedures and quality-focused support work.",
    "entryNote": "A related laboratory-support route, not proof that CBS requires this certificate for every production assistant. Does not qualify its graduate as a medical laboratory technologist.",
    "relevance": "local",
    "roleRationale": [
      {
        "roleId": "work-blood-production",
        "why": "Clinical specimen identity and laboratory procedures are a related support foundation for handling blood products. This does not establish CBS production-job requirements or qualify an assistant as a technologist."
      }
    ],
    "urlSourceId": "oct19-source-44",
    "kind": "interpreted",
    "sourceIds": [
      "oct19-source-44"
    ],
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-route-mlt",
    "provider": "SAIT",
    "name": "Medical Laboratory Technology",
    "routeType": "Diploma",
    "location": "Calgary and clinical learning sites",
    "learns": "Clinical laboratory testing, including hematology and transfusion-related study.",
    "entryNote": "Separate from Chemical Laboratory Technology. Eligibility for professional practice, registration and individual employer requirements must be checked separately; no Calgary Blood Services placement is promised.",
    "relevance": "local",
    "roleRationale": [
      {
        "roleId": "work-medical-laboratory",
        "why": "For Medical laboratory technologist, this route supplies related preparation: Clinical laboratory testing, including hematology and transfusion-related study. It is a preparation connection, not a claim of the employer’s minimum qualification."
      }
    ],
    "urlSourceId": "oct19-source-43",
    "kind": "interpreted",
    "sourceIds": [
      "oct19-source-43"
    ],
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-route-press",
    "provider": "Alberta alis",
    "name": "Printing press operator — education and workplace learning",
    "routeType": "Occupational route",
    "location": "Alberta workplaces",
    "learns": "Press setup, colour control, registration and production checks.",
    "entryNote": "Government occupational overview, not an enrolled course or vacancy. Workplace training and employer requirements vary. Its duties section is dated 2020; no current wage claim is used.",
    "relevance": "local",
    "roleRationale": [
      {
        "roleId": "work-printing-press",
        "why": "For Printing press operator, this route supplies related preparation: Press setup, colour control, registration and production checks. It is a preparation connection, not a claim of the employer’s minimum qualification."
      }
    ],
    "urlSourceId": "oct19-source-15",
    "kind": "interpreted",
    "sourceIds": [
      "oct19-source-15"
    ],
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-route-prosthetic-clinical",
    "provider": "BCIT",
    "name": "Prosthetics and Orthotics",
    "routeType": "Post-graduate diploma",
    "location": "Burnaby, British Columbia",
    "learns": "Clinical assessment, biomechanics, device design and patient-centred fitting.",
    "entryNote": "Provider requires a prior bachelor’s degree. September 2026 applications are closed; the page says applications for September 2028 open 1 October 2027. OPC separately requires supervised residency and further certification steps; graduation alone does not certify a clinician.",
    "relevance": "broader",
    "roleRationale": [
      {
        "roleId": "work-prosthetic-clinical",
        "why": "For Prosthetist, this route supplies related preparation: Clinical assessment, biomechanics, device design and patient-centred fitting. It is a preparation connection, not a claim of the employer’s minimum qualification."
      }
    ],
    "urlSourceId": "oct19-source-5",
    "kind": "interpreted",
    "sourceIds": [
      "oct19-source-5",
      "oct19-source-3",
      "oct19-source-4"
    ],
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-route-prosthetic-tech",
    "provider": "George Brown Polytechnic",
    "name": "Orthotic/Prosthetic Technician S102",
    "routeType": "Diploma",
    "location": "Toronto, Ontario",
    "learns": "Fabrication, repair, materials and collaboration with clinical practitioners.",
    "entryNote": "OPC’s current accredited-programme description distinguishes this technical route from clinical qualification. Check provider admissions; professional technical registration involves additional requirements.",
    "relevance": "broader",
    "roleRationale": [
      {
        "roleId": "work-prosthetic-fabrication",
        "why": "For Prosthetic and orthotic technician, this route supplies related preparation: Fabrication, repair, materials and collaboration with clinical practitioners. It is a preparation connection, not a claim of the employer’s minimum qualification."
      }
    ],
    "urlSourceId": "oct19-source-79",
    "kind": "interpreted",
    "sourceIds": [
      "oct19-source-3"
    ],
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-route-recycling",
    "provider": "Alberta alis",
    "name": "Recycling waste handling — workplace learning",
    "routeType": "Occupational route",
    "location": "Alberta workplaces",
    "learns": "Material categories, contamination checks and material handling through workplace training.",
    "entryNote": "Government profile concerns municipal recycling, used as a related entry-route comparison. It does not prove Calgary Metal’s hiring requirements, training availability or equipment certifications. Employer-specific requirements must be checked.",
    "relevance": "local",
    "roleRationale": [
      {
        "roleId": "work-recycling-operations",
        "why": "The government profile shows workplace learning in recyclable-material checks and handling. This is a municipal-setting comparison, not proof of Calgary Metal’s entry requirements or an advertised training place."
      }
    ],
    "urlSourceId": "oct19-source-78",
    "kind": "interpreted",
    "sourceIds": [
      "oct19-source-78"
    ],
    "checkedOn": "2026-10-19"
  },

  {
    "id": "oct18-route-mechanical",
    "provider": "SAIT",
    "name": "Mechanical Engineering Technology",
    "routeType": "Diploma",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Design, modelling and mechanical-system analysis.",
    "roleRationale": [
  {
    "roleId": "work-mechanical",
    "why": "Design, modelling and mechanical-system analysis. A model is useful when its assumptions are clear and measurements can challenge it."
  },
  {
    "roleId": "work-manufacturing",
    "why": "Design, modelling and mechanical-system analysis. Precision, tolerances and repeatable methods connect measurement to useful products."
  },
  {
    "roleId": "work-controls",
    "why": "Design, modelling and mechanical-system analysis. A reading depends on where and how it was measured, not just the number displayed."
  },
  {
    "roleId": "work-acoustics",
    "why": "Design, modelling and mechanical-system analysis. Reflection and absorption become decisions about how a room works."
  },
  {
    "roleId": "work-quality",
    "why": "For Quality and traceability, this route supplies related preparation: Design, modelling and mechanical-system analysis. It is a preparation connection, not a claim of the employer’s minimum qualification."
  }
],
    "entryNote": "A technical route; does not itself confer professional engineer registration. Check current admissions and intake before applying; this draft does not promise entry or employment.",
    "urlSourceId": "oct18-source-5",
    "kind": "interpreted",
    "sourceIds": [
      "oct18-source-5"
    ],
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-route-machinist",
    "provider": "SAIT",
    "name": "Machinist",
    "routeType": "Apprenticeship technical training",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Precision machining, drawings and measurement.",
    "roleRationale": [
      {
        "roleId": "work-manufacturing",
        "why": "Precision machining, drawings and measurement. Precision, tolerances and repeatable methods connect measurement to useful products."
      },
      {
        "roleId": "work-quality",
        "why": "Precision machining, drawings and measurement. A clear record makes a result checkable by someone who was not there."
      }
    ],
    "entryNote": "Requires the apprenticeship process and workplace experience; technical school alone is not the full trade qualification. Check current admissions and intake before applying; this draft does not promise entry or employment.",
    "urlSourceId": "oct18-source-6",
    "kind": "interpreted",
    "sourceIds": [
      "oct18-source-6"
    ],
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-route-instrument",
    "provider": "SAIT",
    "name": "Instrumentation Engineering Technology",
    "routeType": "Diploma",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Measurement, calibration and process controls.",
    "roleRationale": [
  {
    "roleId": "work-controls",
    "why": "Measurement, calibration and process controls. A reading depends on where and how it was measured, not just the number displayed."
  },
  {
    "roleId": "work-software",
    "why": "Measurement, calibration and process controls. An alert is a reason to investigate, not proof of a single cause."
  },
  {
    "roleId": "work-technical-support",
    "why": "Measurement, calibration and process controls. Troubleshooting means testing explanations one at a time."
  },
  {
    "roleId": "work-process",
    "why": "Measurement, calibration and process controls. Conservation of matter and energy helps reveal missing assumptions."
  },
  {
    "roleId": "work-valve-service",
    "why": "For Valve service technician, this route supplies related preparation: Measurement, calibration and process controls. It is a preparation connection, not a claim of the employer’s minimum qualification."
  }
],
    "entryNote": "Related to sensor/control work; no guaranteed employer placement. Check current admissions and intake before applying; this draft does not promise entry or employment.",
    "urlSourceId": "oct18-source-13",
    "kind": "interpreted",
    "sourceIds": [
      "oct18-source-13"
    ],
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-route-chemical",
    "provider": "SAIT",
    "name": "Chemical Laboratory Technology",
    "routeType": "Diploma",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Chemical analysis, samples and laboratory practice.",
    "roleRationale": [
      {
        "roleId": "work-materials",
        "why": "Chemical analysis, samples and laboratory practice. A promising material must be evaluated against a specific task."
      },
      {
        "roleId": "work-lab",
        "why": "Chemical analysis, samples and laboratory practice. Fair comparisons are more informative than an isolated result."
      },
      {
        "roleId": "work-quality",
        "why": "Chemical analysis, samples and laboratory practice. A clear record makes a result checkable by someone who was not there."
      },
      {
        "roleId": "work-process",
        "why": "Chemical analysis, samples and laboratory practice. Conservation of matter and energy helps reveal missing assumptions."
      }
    ],
    "entryNote": "A laboratory route; not a medical licence or automatic research-scientist qualification. Check current admissions and intake before applying; this draft does not promise entry or employment.",
    "urlSourceId": "oct18-source-19",
    "kind": "interpreted",
    "sourceIds": [
      "oct18-source-19"
    ],
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-route-degree",
    "provider": "University of Calgary",
    "name": "Mechanical Engineering",
    "routeType": "BSc",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Design using mechanics, materials and energy.",
    "roleRationale": [
      {
        "roleId": "work-mechanical",
        "why": "Design using mechanics, materials and energy. A model is useful when its assumptions are clear and measurements can challenge it."
      },
      {
        "roleId": "work-acoustics",
        "why": "Design using mechanics, materials and energy. Reflection and absorption become decisions about how a room works."
      }
    ],
    "entryNote": "Professional engineering registration is a separate process. Check current admissions and intake before applying; this draft does not promise entry or employment.",
    "urlSourceId": "oct18-source-32",
    "kind": "interpreted",
    "sourceIds": [
      "oct18-source-32"
    ],
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-route-chemdegree",
    "provider": "University of Calgary",
    "name": "Chemistry or Biochemistry",
    "routeType": "BSc program directions",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Chemical or biochemical foundations and scientific investigation.",
    "roleRationale": [
      {
        "roleId": "work-materials",
        "why": "Chemical or biochemical foundations and scientific investigation. A promising material must be evaluated against a specific task."
      },
      {
        "roleId": "work-lab",
        "why": "Chemical or biochemical foundations and scientific investigation. Fair comparisons are more informative than an isolated result."
      }
    ],
    "entryNote": "Choose the actual program and check its current requirements; advanced research may require further study. Check current admissions and intake before applying; this draft does not promise entry or employment.",
    "urlSourceId": "oct18-source-20",
    "kind": "interpreted",
    "sourceIds": [
      "oct18-source-20"
    ],
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-route-sonography",
    "provider": "SAIT",
    "name": "Diagnostic Medical Sonography",
    "routeType": "Diploma",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Ultrasound acquisition, instrumentation and patient care.",
    "roleRationale": [
      {
        "roleId": "work-sonography",
        "why": "Ultrasound acquisition, instrumentation and patient care. Producing a clear measurement and interpreting its meaning are connected but different tasks."
      }
    ],
    "entryNote": "EFW separately states recognised training, Sonography Canada credentials and liability insurance; its evergreen overview is not an offer of work. Check current admissions and intake before applying; this draft does not promise entry or employment.",
    "urlSourceId": "oct18-source-41",
    "kind": "interpreted",
    "sourceIds": [
      "oct18-source-41"
    ],
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-route-moa",
    "provider": "SAIT",
    "name": "Medical Office Assistant and Unit Clerk",
    "routeType": "Certificate",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Clinical administration and patient-record workflows.",
    "roleRationale": [
      {
        "roleId": "work-clinic-administration",
        "why": "Clinical administration and patient-record workflows. Care depends on reliable human coordination as well as instruments."
      }
    ],
    "entryNote": "An administrative route, distinct from sonography and physician training. Check current admissions and intake before applying; this draft does not promise entry or employment.",
    "urlSourceId": "oct18-source-42",
    "kind": "interpreted",
    "sourceIds": [
      "oct18-source-42"
    ],
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-route-power",
    "provider": "SAIT",
    "name": "Power Engineering Technology",
    "routeType": "Diploma",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Thermal-energy systems and plant operations.",
    "roleRationale": [
      {
        "roleId": "process-operations",
        "why": "Thermal-energy systems and plant operations. Energy diagrams become real operating systems with constraints and losses."
      }
    ],
    "entryNote": "Power-engineer certification requires its applicable exams and experience; this is distinct from a professional engineering degree. Check current admissions and intake before applying; this draft does not promise entry or employment.",
    "urlSourceId": "oct18-source-53",
    "kind": "interpreted",
    "sourceIds": [
      "oct18-source-53"
    ],
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-route-refrigeration",
    "provider": "SAIT",
    "name": "Refrigeration and Air Conditioning Mechanic",
    "routeType": "Apprenticeship technical training",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Install, maintain and troubleshoot refrigeration and air systems.",
    "roleRationale": [
      {
        "roleId": "work-refrigeration",
        "why": "Install, maintain and troubleshoot refrigeration and air systems. A refrigeration system moves heat; it does not create cold as a substance."
      }
    ],
    "entryNote": "Combine employer-based apprenticeship experience with technical training; check current provincial entry requirements. Check current admissions and intake before applying; this draft does not promise entry or employment.",
    "urlSourceId": "oct18-source-62",
    "kind": "interpreted",
    "sourceIds": [
      "oct18-source-62"
    ],
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-route-logistics",
    "provider": "SAIT",
    "name": "Business Administration — Supply Chain Management",
    "routeType": "Diploma",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Supply-chain coordination, operations and planning.",
    "roleRationale": [
      {
        "roleId": "work-logistics",
        "why": "Supply-chain coordination, operations and planning. A technically sound product can still fail its purpose if timing or handling goes wrong."
      },
      {
        "roleId": "work-warehousing",
        "why": "Supply-chain coordination, operations and planning. Temperature, time and correct identification all matter to a cold chain."
      }
    ],
    "entryNote": "A possible progression route, not a required credential for every warehouse role. Check current admissions and intake before applying; this draft does not promise entry or employment.",
    "urlSourceId": "oct18-source-36",
    "kind": "interpreted",
    "sourceIds": [
      "oct18-source-36"
    ],
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-route-fibre",
    "provider": "Alberta University of the Arts",
    "name": "Fibre",
    "routeType": "Studio concentration within degree study",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Material exploration, textile techniques and design critique.",
    "roleRationale": [
      {
        "roleId": "work-bootmaking",
        "why": "Material exploration, textile techniques and design critique. A flat pattern and a three-dimensional object have to agree."
      },
      {
        "roleId": "work-quality",
        "why": "Material exploration, textile techniques and design critique. A clear record makes a result checkable by someone who was not there."
      }
    ],
    "entryNote": "Adjacent material/design education, not an Alberta Boot training program or bootmaking certificate. Check current admissions and intake before applying; this draft does not promise entry or employment.",
    "urlSourceId": "oct18-source-46",
    "kind": "interpreted",
    "sourceIds": [
      "oct18-source-46"
    ],
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-route-bootwork",
    "provider": "Alberta Boot Company",
    "name": "Learning through retail and production experience",
    "routeType": "Observed individual route",
    "location": "Calgary",
    "relevance": "local",
    "learns": "An employer profile describes retail work during high school followed by growing production responsibilities.",
    "roleRationale": [
      {
        "roleId": "work-bootmaking",
        "why": "An employer profile describes retail work during high school followed by growing production responsibilities. A flat pattern and a three-dimensional object have to agree."
      },
      {
        "roleId": "work-quality",
        "why": "An employer profile describes retail work during high school followed by growing production responsibilities. A clear record makes a result checkable by someone who was not there."
      }
    ],
    "entryNote": "One person's experience, not an advertised apprenticeship, vacancy or universal entry requirement. Check current admissions and intake before applying; this draft does not promise entry or employment.",
    "urlSourceId": "oct18-source-45",
    "kind": "observed",
    "sourceIds": [
      "oct18-source-45"
    ],
    "checkedOn": "2026-10-18"
  },

  {
    id: "oct17-route-university-of-calgary-master-of-landscape-architecture",
    provider: "University of Calgary",
    name: "Master of Landscape Architecture",
    routeType: "Graduate degree",
    location: "Calgary",
    relevance: "local",
    learns: "Study landscape design, land stewardship and community needs.",
    roleRationale: [
      {
        roleId: "work-landscape-design",
        why: "A longer-term professional education route after undergraduate study; registration is separate. A change to a landform changes paths for both water and people."
      }
    ],
    entryNote: "Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
    urlSourceId: "oct17-source-7",
    kind: "interpreted",
    sourceIds: [
      "oct17-source-7"
    ],
    checkedOn: "2026-10-17"
  },
  {
    id: "oct17-route-sait-geomatics-engineering-technology",
    provider: "SAIT",
    name: "Geomatics Engineering Technology",
    routeType: "Diploma",
    location: "Calgary",
    relevance: "local",
    learns: "Learn surveying, GIS, positioning and remote sensing.",
    roleRationale: [
      {
        roleId: "work-spatial",
        why: "Supports spatial measurement and mapping data work. Models can be detailed while still containing gaps or misaligned measurements."
      }
    ],
    entryNote: "Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
    urlSourceId: "oct17-source-8",
    kind: "interpreted",
    sourceIds: [
      "oct17-source-8"
    ],
    checkedOn: "2026-10-17"
  },
  {
    id: "oct17-route-sait-environmental-technology",
    provider: "SAIT",
    name: "Environmental Technology",
    routeType: "Diploma",
    location: "Calgary",
    relevance: "local",
    learns: "Study environmental monitoring, assessment and field methods.",
    roleRationale: [
  {
    "roleId": "work-environmental-field-assessment",
    "why": "Supports field and laboratory work in environmental projects. A result has meaning only in the context of how and where it was collected."
  },
  {
    "roleId": "work-recycling-operations",
    "why": "For Metal-recycling operations, this route supplies related preparation: Study environmental monitoring, assessment and field methods. It is a preparation connection, not a claim of the employer’s minimum qualification."
  }
],
    entryNote: "Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
    urlSourceId: "oct17-source-9",
    kind: "interpreted",
    sourceIds: [
      "oct17-source-9"
    ],
    checkedOn: "2026-10-17"
  },
  {
    id: "oct17-route-university-of-calgary-civil-engineering",
    provider: "University of Calgary",
    name: "Civil Engineering",
    routeType: "Bachelor’s degree",
    location: "Calgary",
    relevance: "local",
    learns: "Study the design and operation of structures, transportation and water infrastructure.",
    roleRationale: [
      {
        roleId: "work-structural-engineering",
        why: "A degree foundation for engineering work; professional registration and supervised experience are separate. Forces must have a continuous route to supports; an attractive shape alone is not evidence of performance."
      },
      {
        roleId: "work-construction-coordination",
        why: "A degree foundation for engineering work; professional registration and supervised experience are separate. A system that works at the end may need different support while it is being assembled."
      },
      {
        roleId: "work-water-resource-planning",
        why: "A degree foundation for engineering work; professional registration and supervised experience are separate. A model is a way to test assumptions, not a guarantee about the future."
      },
      {
        roleId: "work-building-science-investigation",
        why: "A degree foundation for engineering work; professional registration and supervised experience are separate. Different mechanisms can create similar visible symptoms."
      },
      {
        roleId: "work-civil-and-construction-technology",
        why: "A degree foundation for engineering work; professional registration and supervised experience are separate. Scale and accurate measurements connect a drawing to the real location."
      }
    ],
    entryNote: "Check current admissions and program requirements. A degree is not automatic professional licensure.",
    urlSourceId: "oct17-source-15",
    kind: "interpreted",
    sourceIds: [
      "oct17-source-15"
    ],
    checkedOn: "2026-10-17"
  },
  {
    id: "oct17-route-sait-civil-engineering-technology-municipal-major",
    provider: "SAIT",
    name: "Civil Engineering Technology, Municipal Major",
    routeType: "Diploma",
    location: "Calgary",
    relevance: "local",
    learns: "Study municipal infrastructure, design and drafting.",
    roleRationale: [
      {
        roleId: "work-civil-and-construction-technology",
        why: "Technical design and project delivery; not professional engineer licensure. Scale and accurate measurements connect a drawing to the real location."
      },
      {
        roleId: "work-construction-coordination",
        why: "Technical design and project delivery; not professional engineer licensure. A system that works at the end may need different support while it is being assembled."
      },
      {
        roleId: "work-quality",
        why: "Technical design and project delivery; not professional engineer licensure. Repeated results need both measurements and records of the conditions that produced them."
      }
    ],
    entryNote: "Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
    urlSourceId: "oct17-source-16",
    kind: "interpreted",
    sourceIds: [
      "oct17-source-16"
    ],
    checkedOn: "2026-10-17"
  },
  {
    id: "oct17-route-sait-architectural-technologies",
    provider: "SAIT",
    name: "Architectural Technologies",
    routeType: "Diploma",
    location: "Calgary",
    relevance: "local",
    learns: "Study building design, technical drawings and construction systems.",
    roleRationale: [
      {
        roleId: "work-civil-and-construction-technology",
        why: "Supports building-envelope detailing and technical coordination. Scale and accurate measurements connect a drawing to the real location."
      },
      {
        roleId: "work-construction-coordination",
        why: "Supports building-envelope detailing and technical coordination. A system that works at the end may need different support while it is being assembled."
      },
      {
        roleId: "work-building-science-investigation",
        why: "Supports building-envelope detailing and technical coordination. Different mechanisms can create similar visible symptoms."
      },
      {
        roleId: "work-quality",
        why: "Supports building-envelope detailing and technical coordination. Repeated results need both measurements and records of the conditions that produced them."
      }
    ],
    entryNote: "Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
    urlSourceId: "oct17-source-17",
    kind: "interpreted",
    sourceIds: [
      "oct17-source-17"
    ],
    checkedOn: "2026-10-17"
  },
  {
    id: "oct17-route-sait-instrumentation-engineering-technology",
    provider: "SAIT",
    name: "Instrumentation Engineering Technology",
    routeType: "Diploma",
    location: "Calgary",
    relevance: "local",
    learns: "Work with measurement devices, calibration and automated process controls.",
    roleRationale: [
      {
        roleId: "work-instrument",
        why: "Supports process testing, troubleshooting and control systems. Measurement uncertainty is part of using a tool responsibly."
      },
      {
        roleId: "work-controls",
        why: "Supports process testing, troubleshooting and control systems. Feedback uses a measured result to inform the next action."
      }
    ],
    entryNote: "Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
    urlSourceId: "oct17-source-21",
    kind: "interpreted",
    sourceIds: [
      "oct17-source-21"
    ],
    checkedOn: "2026-10-17"
  },
  {
    id: "oct17-route-sait-chemical-laboratory-technology",
    provider: "SAIT",
    name: "Chemical Laboratory Technology",
    routeType: "Diploma",
    location: "Calgary",
    relevance: "local",
    learns: "Practice chemical analysis, sample preparation and analytical instrumentation.",
    roleRationale: [
      {
        roleId: "work-quality",
        why: "Supports laboratory testing and reliable measurement. Repeated results need both measurements and records of the conditions that produced them."
      },
      {
        roleId: "work-lab",
        why: "Supports laboratory testing and reliable measurement. A repeatable method and a fair comparison matter as much as a single impressive number."
      },
      {
        roleId: "work-food",
        why: "Supports laboratory testing and reliable measurement. Molecules and mixtures help explain why two ingredients can behave differently."
      }
    ],
    entryNote: "Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
    urlSourceId: "oct17-source-22",
    kind: "interpreted",
    sourceIds: [
      "oct17-source-22"
    ],
    checkedOn: "2026-10-17"
  },
  {
    id: "oct17-route-sait-mechanical-engineering-technology",
    provider: "SAIT",
    name: "Mechanical Engineering Technology",
    routeType: "Diploma",
    location: "Calgary",
    relevance: "local",
    learns: "Study mechanical systems, design and manufacturing, with specialization options.",
    roleRationale: [
      {
        roleId: "work-roast-production",
        why: "Mechanical study supports understanding equipment and process measurements. It is adjacent technical preparation, not a coffee-roasting qualification or employer requirement."
      },
      {
        roleId: "work-instrument",
        why: "Supports component design, prototyping and equipment work. Measurement uncertainty is part of using a tool responsibly."
      },
      {
        roleId: "work-mechanical",
        why: "Supports component design, prototyping and equipment work. Geometry, forces and material properties shape real design trade-offs."
      }
    ],
    entryNote: "Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
    urlSourceId: "oct17-source-23",
    kind: "interpreted",
    sourceIds: [
      "oct17-source-23"
    ],
    checkedOn: "2026-10-17"
  },
  {
    id: "oct17-route-auarts-bachelor-of-design",
    provider: "AUArts",
    name: "Bachelor of Design",
    routeType: "Bachelor’s degree",
    location: "Calgary",
    relevance: "local",
    learns: "Develop visual communication through studio-based design work.",
    roleRationale: [
      {
        roleId: "work-storyboarding-and-illustration",
        why: "Supports illustration and visual storytelling; portfolio requirements apply. A model needs to preserve the relationship it is intended to explain."
      },
      {
        roleId: "work-animation",
        why: "Supports illustration and visual storytelling; portfolio requirements apply. Spacing at equal time intervals can communicate constant speed or changing speed."
      },
      {
        roleId: "work-colour-finishing",
        why: "Supports illustration and visual storytelling; portfolio requirements apply. Changing the appearance of an image is different from changing the original event."
      }
    ],
    entryNote: "Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
    urlSourceId: "oct17-source-27",
    kind: "interpreted",
    sourceIds: [
      "oct17-source-27"
    ],
    checkedOn: "2026-10-17"
  },
  {
    id: "oct17-route-sait-film-and-video-production",
    provider: "SAIT",
    name: "Film and Video Production",
    routeType: "Diploma",
    location: "Calgary",
    relevance: "local",
    learns: "Practise production and post-production through film projects.",
    roleRationale: [
      {
        roleId: "work-animation",
        why: "Supports camera, editing and production work; a portfolio remains important. Spacing at equal time intervals can communicate constant speed or changing speed."
      },
      {
        roleId: "work-creative-production-coordination",
        why: "Supports camera, editing and production work; a portfolio remains important. Defining the question first helps distinguish useful evidence from extra detail."
      },
      {
        roleId: "work-camera-and-image-capture",
        why: "Supports camera, editing and production work; a portfolio remains important. The recorded image depends on both the light and how it is captured."
      },
      {
        roleId: "work-film-and-video-editing",
        why: "Supports camera, editing and production work; a portfolio remains important. Sequence can change interpretation even when the individual images stay the same."
      },
      {
        roleId: "work-colour-finishing",
        why: "Supports camera, editing and production work; a portfolio remains important. Changing the appearance of an image is different from changing the original event."
      }
    ],
    entryNote: "Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
    urlSourceId: "oct17-source-28",
    kind: "interpreted",
    sourceIds: [
      "oct17-source-28"
    ],
    checkedOn: "2026-10-17"
  },
  {
    id: "oct17-route-cpkc-employer-rail-traffic-controller-training",
    provider: "CPKC",
    name: "Employer rail traffic controller training",
    routeType: "Employer training after selection",
    location: "Calgary operations context; historical employer description",
    relevance: "local",
    learns: "A historical CPKC description outlined six months of company training for selected controller applicants, including qualification in railway operating rules.",
    roleRationale: [
      {
        roleId: "work-rail-traffic-control",
        why: "Directly relates to rail traffic control; this is not SAIT conductor training. Time and position together reveal conflicts that a map alone can miss."
      }
    ],
    entryNote: "The indexed employer description listed high school completion or equivalent and employer selection and qualification requirements. The original job page is now unavailable, and its Montreal listing metadata conflicted with Calgary in the body. No open intake, current duration or present-day requirements are promised; check the current employer posting.",
    urlSourceId: "oct17-source-32",
    kind: "interpreted",
    sourceIds: [
      "oct17-source-32"
    ],
    checkedOn: "2026-10-17"
  },
  {
    id: "oct17-route-sait-railway-conductor",
    provider: "SAIT",
    name: "Railway Conductor",
    routeType: "Certificate",
    location: "Calgary",
    relevance: "local",
    learns: "Study railway operating procedures and train handling responsibilities.",
    roleRationale: [
      {
        roleId: "work-railway-conductor-work",
        why: "A route toward conductor work, not a rail traffic controller qualification or hiring guarantee. The plan and the physical movement must agree; conductor and dispatcher are different roles."
      }
    ],
    entryNote: "Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
    urlSourceId: "oct17-source-33",
    kind: "interpreted",
    sourceIds: [
      "oct17-source-33"
    ],
    checkedOn: "2026-10-17"
  },
  {
    id: "oct17-route-sait-software-development",
    provider: "SAIT",
    name: "Software Development",
    routeType: "Diploma",
    location: "Calgary",
    relevance: "local",
    learns: "Learn to design, test and build software across front-end and back-end systems.",
    roleRationale: [
      {
        roleId: "work-software",
        why: "A foundation for junior development or testing; senior roles require further experience. An algorithm’s output depends on the quality and meaning of its inputs."
      }
    ],
    entryNote: "Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
    urlSourceId: "oct17-source-34",
    kind: "interpreted",
    sourceIds: [
      "oct17-source-34"
    ],
    checkedOn: "2026-10-17"
  },
  {
    id: "oct17-route-sait-integrated-water-management",
    provider: "SAIT",
    name: "Integrated Water Management",
    routeType: "Diploma",
    location: "Calgary",
    relevance: "local",
    learns: "Study water systems, monitoring and management.",
    roleRationale: [
      {
        roleId: "work-water-resource-planning",
        why: "Water sampling, infrastructure and planning support. A model is a way to test assumptions, not a guarantee about the future."
      },
      {
        roleId: "work-planning-communication-and-engagement",
        why: "Water-management study gives context for explaining water choices and working with stakeholders. It does not itself qualify a specialist facilitator."
      },
      {
        roleId: "work-water-treatment-operations",
        why: "Water sampling, infrastructure and planning support. Stable operation matters even when average results look acceptable."
      }
    ],
    entryNote: "Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
    urlSourceId: "oct17-source-38",
    kind: "interpreted",
    sourceIds: [
      "oct17-source-38"
    ],
    checkedOn: "2026-10-17"
  },
  {
    id: "oct17-route-university-of-calgary-chemical-engineering",
    provider: "University of Calgary",
    name: "Chemical Engineering",
    routeType: "Bachelor’s degree",
    location: "Calgary",
    relevance: "local",
    learns: "Study how to transform raw materials and design production processes.",
    roleRationale: [
      {
        roleId: "work-process",
        why: "Supports process design and scale-up; experience and professional requirements remain separate. Conservation of matter and energy connects classroom calculations to process decisions."
      }
    ],
    entryNote: "Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
    urlSourceId: "oct17-source-44",
    kind: "interpreted",
    sourceIds: [
      "oct17-source-44"
    ],
    checkedOn: "2026-10-17"
  },
  {
    id: "oct17-route-sait-baking-and-pastry-arts",
    provider: "SAIT",
    name: "Baking and Pastry Arts",
    routeType: "Diploma",
    location: "Calgary",
    relevance: "local",
    learns: "Practise bakery and pastry production and product quality.",
    roleRationale: [
      {
        roleId: "work-commercial-baking",
        why: "Supports commercial baking; apprenticeship registration and workplace requirements are separate. Ratios, timing and temperature matter, but quality must still be checked."
      },
      {
        roleId: "work-food",
        why: "Supports commercial baking; apprenticeship registration and workplace requirements are separate. Molecules and mixtures help explain why two ingredients can behave differently."
      }
    ],
    entryNote: "Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
    urlSourceId: "oct17-source-56",
    kind: "interpreted",
    sourceIds: [
      "oct17-source-56"
    ],
    checkedOn: "2026-10-17"
  },
  {
    id: "oct17-route-alberta-baker-apprenticeship-education",
    provider: "Alberta Baker apprenticeship education",
    name: "Alberta Baker apprenticeship education",
    routeType: "Apprenticeship",
    location: "Alberta; workplace and classroom arrangements must be confirmed",
    relevance: "local",
    learns: "Combine structured trade education with workplace learning in baking.",
    roleRationale: [
      {
        roleId: "work-commercial-baking",
        why: "A trade route distinct from simply completing a diploma; registration and workplace requirements apply. Ratios, timing and temperature matter, but quality must still be checked."
      }
    ],
    entryNote: "Use Tradesecrets to verify current entry, sponsorship and work-hour requirements. No specific Calgary employer placement is promised.",
    urlSourceId: "oct17-source-57",
    kind: "interpreted",
    sourceIds: [
      "oct17-source-57"
    ],
    checkedOn: "2026-10-17"
  },
  {
    id: "route-lab",
    provider: "SAIT",
    name: "Chemical Laboratory Technology",
    routeType: "Diploma",
    location: "Calgary",
    relevance: "local",
    learns: "Practice chemical analysis, sample preparation and analytical instrumentation.",
    roleRationale: [
      {
        roleId: "work-food",
        why: "Supports laboratory testing and reliable measurement. Molecules and mixtures help explain why two ingredients can behave differently."
      },
      {
        roleId: "work-lab",
        why: "Supports laboratory testing and reliable measurement. A repeatable method and a fair comparison matter as much as a single impressive number."
      },
      {
        roleId: "work-applications",
        why: "Supports laboratory testing and reliable measurement. A pattern is evidence to interpret, not a label that proves an answer by itself."
      },
      {
        roleId: "work-bioprocess",
        why: "Supports laboratory testing and reliable measurement. Knowing a sequence or molecule is different from producing a reliable batch of it."
      },
      {
        roleId: "work-quality",
        why: "Supports laboratory testing and reliable measurement. Repeated results need both measurements and records of the conditions that produced them."
      },
      {
        roleId: "work-materials",
        why: "Supports laboratory testing and reliable measurement. Stronger, lighter and more conductive are different properties requiring different tests."
      }
    ],
    entryNote: "Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
    urlSourceId: "expansion-source-6",
    kind: "interpreted",
    sourceIds: [
      "expansion-source-6"
    ],
    checkedOn: "2026-10-15"
  },
  {
    id: "route-biochem",
    provider: "University of Calgary",
    name: "Biochemistry",
    routeType: "Bachelor’s degree",
    location: "Calgary",
    relevance: "local",
    learns: "Study the chemistry of living organisms and changes within cells.",
    roleRationale: [
      {
        roleId: "work-food",
        why: "A scientific foundation for biological research; independent research positions may need further study. Molecules and mixtures help explain why two ingredients can behave differently."
      },
      {
        roleId: "work-lab",
        why: "A scientific foundation for biological research; independent research positions may need further study. A repeatable method and a fair comparison matter as much as a single impressive number."
      },
      {
        roleId: "work-bioprocess",
        why: "A scientific foundation for biological research; independent research positions may need further study. Knowing a sequence or molecule is different from producing a reliable batch of it."
      }
    ],
    entryNote: "Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
    urlSourceId: "expansion-source-7",
    kind: "interpreted",
    sourceIds: [
      "expansion-source-7"
    ],
    checkedOn: "2026-10-15"
  },
  {
    id: "route-chemical",
    provider: "University of Calgary",
    name: "Chemical Engineering",
    routeType: "Bachelor’s degree",
    location: "Calgary",
    relevance: "local",
    learns: "Study how to transform raw materials and design production processes.",
    roleRationale: [
      {
        roleId: "work-process",
        why: "Supports process design and scale-up; experience and professional requirements remain separate. Conservation of matter and energy connects classroom calculations to process decisions."
      },
      {
        roleId: "work-controls",
        why: "Supports process design and scale-up; experience and professional requirements remain separate. Feedback uses a measured result to inform the next action."
      },
      {
        roleId: "work-bioprocess",
        why: "Supports process design and scale-up; experience and professional requirements remain separate. Knowing a sequence or molecule is different from producing a reliable batch of it."
      },
      {
        roleId: "work-materials",
        why: "Supports process design and scale-up; experience and professional requirements remain separate. Stronger, lighter and more conductive are different properties requiring different tests."
      }
    ],
    entryNote: "Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
    urlSourceId: "expansion-source-8",
    kind: "interpreted",
    sourceIds: [
      "expansion-source-8"
    ],
    checkedOn: "2026-10-15"
  },
  {
    id: "route-electrical",
    provider: "SAIT",
    name: "Electrical Engineering Technology",
    routeType: "Diploma",
    location: "Calgary",
    relevance: "local",
    learns: "Study circuits, electrical power and controls with practical laboratory work.",
    roleRationale: [
      {
        roleId: "work-instrument",
        why: "Supports electrical testing and technical systems work. Measurement uncertainty is part of using a tool responsibly."
      },
      {
        roleId: "work-applications",
        why: "Supports electrical testing and technical systems work. A pattern is evidence to interpret, not a label that proves an answer by itself."
      },
      {
        roleId: "work-power",
        why: "Supports electrical testing and technical systems work. Power describes the rate of energy transfer; stored energy describes how much is available."
      },
      {
        roleId: "work-avionics",
        why: "Supports electrical testing and technical systems work. Circuits and signals become useful when the complete system works reliably."
      },
      {
        roleId: "work-weather",
        why: "Supports electrical testing and technical systems work. More measurements can help, but uneven coverage can still leave important gaps."
      }
    ],
    entryNote: "Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
    urlSourceId: "expansion-source-13",
    kind: "interpreted",
    sourceIds: [
      "expansion-source-13"
    ],
    checkedOn: "2026-10-15"
  },
  {
    id: "route-software",
    provider: "SAIT",
    name: "Software Development",
    routeType: "Diploma",
    location: "Calgary",
    relevance: "local",
    learns: "Learn to design, test and build software across front-end and back-end systems.",
    roleRationale: [
      {
        roleId: "work-software",
        why: "A foundation for junior development or testing; senior roles require further experience. An algorithm’s output depends on the quality and meaning of its inputs."
      },
      {
        roleId: "work-spatial",
        why: "A foundation for junior development or testing; senior roles require further experience. Models can be detailed while still containing gaps or misaligned measurements."
      },
      {
        roleId: "work-quality",
        why: "A foundation for junior development or testing; senior roles require further experience. Repeated results need both measurements and records of the conditions that produced them."
      },
      {
        roleId: "work-weather",
        why: "A foundation for junior development or testing; senior roles require further experience. More measurements can help, but uneven coverage can still leave important gaps."
      }
    ],
    entryNote: "Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
    urlSourceId: "expansion-source-14",
    kind: "interpreted",
    sourceIds: [
      "expansion-source-14"
    ],
    checkedOn: "2026-10-15"
  },
  {
    id: "route-mechanical",
    provider: "SAIT",
    name: "Mechanical Engineering Technology",
    routeType: "Diploma",
    location: "Calgary",
    relevance: "local",
    learns: "Study mechanical systems, design and manufacturing, with specialization options.",
    roleRationale: [
      {
        roleId: "work-mechanical",
        why: "Supports component design, prototyping and equipment work. Geometry, forces and material properties shape real design trade-offs."
      },
      {
        roleId: "work-machining",
        why: "Supports component design, prototyping and equipment work. Tolerance describes an acceptable range rather than a perfectly exact number."
      },
      {
        roleId: "work-quality",
        why: "Supports component design, prototyping and equipment work. Repeated results need both measurements and records of the conditions that produced them."
      },
      {
        roleId: "work-drone",
        why: "Supports component design, prototyping and equipment work. Flight performance must be considered alongside the task and the surrounding environment."
      },
      {
        roleId: "work-materials",
        why: "Supports component design, prototyping and equipment work. Stronger, lighter and more conductive are different properties requiring different tests."
      }
    ],
    entryNote: "Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
    urlSourceId: "expansion-source-18",
    kind: "interpreted",
    sourceIds: [
      "expansion-source-18"
    ],
    checkedOn: "2026-10-15"
  },
  {
    id: "route-machinist",
    provider: "SAIT",
    name: "Machinist",
    routeType: "Apprenticeship",
    location: "Calgary",
    relevance: "local",
    learns: "Learn precision measurement, machine tools, drawings and machining.",
    roleRationale: [
      {
        roleId: "work-machining",
        why: "A paid-work-and-classroom route toward making precision parts. Tolerance describes an acceptable range rather than a perfectly exact number."
      }
    ],
    entryNote: "Requires apprenticeship registration and workplace training as well as classroom instruction; admission to a course alone is not journeyperson certification.",
    urlSourceId: "expansion-source-19",
    kind: "interpreted",
    sourceIds: [
      "expansion-source-19"
    ],
    checkedOn: "2026-10-15"
  },
  {
    id: "route-instrument",
    provider: "SAIT",
    name: "Instrumentation Engineering Technology",
    routeType: "Diploma",
    location: "Calgary",
    relevance: "local",
    learns: "Work with measurement devices, calibration and automated process controls.",
    roleRationale: [
      {
        roleId: "work-quality",
        why: "Supports process testing, troubleshooting and control systems. Repeated results need both measurements and records of the conditions that produced them."
      },
      {
        roleId: "work-controls",
        why: "Supports process testing, troubleshooting and control systems. Feedback uses a measured result to inform the next action."
      }
    ],
    entryNote: "Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
    urlSourceId: "expansion-source-20",
    kind: "interpreted",
    sourceIds: [
      "expansion-source-20"
    ],
    checkedOn: "2026-10-15"
  },
  {
    id: "route-ame",
    provider: "SAIT",
    name: "Aircraft Maintenance Engineers Technology",
    routeType: "Diploma",
    location: "Calgary",
    relevance: "local",
    learns: "Study aircraft systems, inspections and maintenance at the Art Smith Aero Centre.",
    roleRationale: [
      {
        roleId: "work-maintenance",
        why: "A training route toward aircraft maintenance work. A visual impression alone is not enough evidence that a part is safe."
      },
      {
        roleId: "work-quality",
        why: "A training route toward aircraft maintenance work. Repeated results need both measurements and records of the conditions that produced them."
      }
    ],
    entryNote: "A diploma is not an AME licence. Transport Canada also requires qualifying experience, demonstrated skills and examinations; see the licensing source.",
    urlSourceId: "expansion-source-31",
    kind: "interpreted",
    sourceIds: [
      "expansion-source-31"
    ],
    checkedOn: "2026-10-15"
  },
  {
    id: "route-avionics",
    provider: "SAIT",
    name: "Avionics Technology",
    routeType: "Diploma",
    location: "Calgary",
    relevance: "local",
    learns: "Study aircraft electrical, electronic, communication and navigation systems.",
    roleRationale: [
      {
        roleId: "work-avionics",
        why: "Supports avionics maintenance and troubleshooting. Circuits and signals become useful when the complete system works reliably."
      }
    ],
    entryNote: "Training supports a route toward AME E licensing; graduation alone does not confer that licence. Check Transport Canada’s requirements.",
    urlSourceId: "expansion-source-32",
    kind: "interpreted",
    sourceIds: [
      "expansion-source-32"
    ],
    checkedOn: "2026-10-15"
  },
  {
    id: "route-geomatics",
    provider: "SAIT",
    name: "Geomatics Engineering Technology",
    routeType: "Diploma",
    location: "Calgary",
    relevance: "local",
    learns: "Learn surveying, GIS, positioning and remote sensing.",
    roleRationale: [
      {
        roleId: "work-drone",
        why: "Supports spatial measurement and mapping data work. Flight performance must be considered alongside the task and the surrounding environment."
      },
      {
        roleId: "work-wildlife",
        why: "Supports spatial measurement and mapping data work. Behavioural response is evidence; reduced sightings alone do not prove a lasting safety outcome."
      },
      {
        roleId: "work-spatial",
        why: "Supports spatial measurement and mapping data work. Models can be detailed while still containing gaps or misaligned measurements."
      },
      {
        roleId: "work-geoscience",
        why: "Supports spatial measurement and mapping data work. A measurement of a sample is not automatically a measurement of the whole deposit."
      },
      {
        roleId: "work-instrument",
        why: "Supports spatial measurement and mapping data work. Measurement uncertainty is part of using a tool responsibly."
      }
    ],
    entryNote: "Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
    urlSourceId: "expansion-source-42",
    kind: "interpreted",
    sourceIds: [
      "expansion-source-42"
    ],
    checkedOn: "2026-10-15"
  },
  {
    id: "route-geology",
    provider: "University of Calgary",
    name: "Geology",
    routeType: "Bachelor’s degree",
    location: "Calgary",
    relevance: "local",
    learns: "Study Earth materials through the geology program and its available study streams.",
    roleRationale: [
      {
        roleId: "work-geoscience",
        why: "Supports interpreting rocks and geological evidence. A measurement of a sample is not automatically a measurement of the whole deposit."
      }
    ],
    entryNote: "Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
    urlSourceId: "expansion-source-46",
    kind: "interpreted",
    sourceIds: [
      "expansion-source-46"
    ],
    checkedOn: "2026-10-15"
  },
  {
    id: "route-millwright",
    provider: "SAIT",
    name: "Industrial Mechanic (Millwright)",
    routeType: "Apprenticeship",
    location: "Calgary",
    relevance: "local",
    learns: "Learn to install, maintain and repair industrial machinery.",
    roleRationale: [
  {
    "roleId": "work-millwright",
    "why": "Supports equipment assembly, alignment and maintenance. Small alignment errors can change how forces and motion pass through a machine."
  },
  {
    "roleId": "work-valve-service",
    "why": "For Valve service technician, this route supplies related preparation: Learn to install, maintain and repair industrial machinery. It is a preparation connection, not a claim of the employer’s minimum qualification."
  }
],
    entryNote: "Requires apprenticeship registration and workplace training. This is distinct from an engineering degree.",
    urlSourceId: "expansion-source-48",
    kind: "interpreted",
    sourceIds: [
      "expansion-source-48"
    ],
    checkedOn: "2026-10-15"
  },
  {
    id: "route-welder",
    provider: "SAIT",
    name: "Welder",
    routeType: "Apprenticeship",
    location: "Calgary",
    relevance: "local",
    learns: "Learn joining processes, drawings and inspection of welded work.",
    roleRationale: [
      {
        roleId: "work-fabrication",
        why: "Supports metal fabrication and assembly. Material properties and heat affect the result of a joining process."
      }
    ],
    entryNote: "Requires apprenticeship registration and workplace training. Check the current provincial and provider requirements.",
    urlSourceId: "expansion-source-52",
    kind: "interpreted",
    sourceIds: [
      "expansion-source-52"
    ],
    checkedOn: "2026-10-15"
  },
  {
    id: "route-electrical-degree",
    provider: "University of Calgary",
    name: "Electrical Engineering",
    routeType: "Bachelor’s degree",
    location: "Calgary",
    relevance: "local",
    learns: "Study electrical phenomena and their engineering applications.",
    roleRationale: [
      {
        roleId: "work-power",
        why: "A degree route relevant to power-electronics design; it does not replace job-specific experience. Power describes the rate of energy transfer; stored energy describes how much is available."
      },
      {
        roleId: "work-instrument",
        why: "A degree route relevant to power-electronics design; it does not replace job-specific experience. Measurement uncertainty is part of using a tool responsibly."
      }
    ],
    entryNote: "Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
    urlSourceId: "expansion-source-67",
    kind: "interpreted",
    sourceIds: [
      "expansion-source-67"
    ],
    checkedOn: "2026-10-15"
  },
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
      { "roleId": "laboratory-analysis", "why": "Analytical Instrumentation covers chemical analysis and QA/QC in laboratory settings. This is a preparation route, not a guarantee of meeting an employer’s requirements." },
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

// Connect approved new examples to existing provider routes without replacing their history.
const previousLearningPathways: LearningPathway[] = [
  ...existingLearningPathways.map((pathway) => ({
    ...pathway,
    roleRationale: [
      ...pathway.roleRationale,
      ...(october20PathwayLinks[pathway.id] ?? []).filter(
        (link) => !pathway.roleRationale.some((existing) => existing.roleId === link.roleId),
      ),
    ],
  })),
  ...october20Pathways,
];

// Approved additional role connections; preserve existing routes and rationale history.
export const learningPathways: LearningPathway[] = [
  ...previousLearningPathways.map((pathway) => ({
    ...pathway,
    ...october21PathwayUpdates[pathway.id],
    roleRationale: [
      ...pathway.roleRationale,
      ...(october21PathwayLinks[pathway.id] ?? []).filter(
        (link) => !pathway.roleRationale.some((existing) => existing.roleId === link.roleId),
      ),
    ],
  })),
  ...october21Pathways,
  ...october23Pathways,
];
