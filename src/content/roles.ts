import type { RoleProfile } from "./types";

// General explanations of each kind of work, written by us. Company-specific evidence
// lives on the organization-role link, not here.
export const roleProfiles: RoleProfile[] = [
  {
    id: "atmospheric-science",
    title: "Atmospheric science and remote sensing",
    summary: "Turn light measurements into an explanation of what is in the air.",
    explanation:
      "Atmospheric and remote sensing scientists study how light travels through the air and what it can reveal. In methane monitoring, they decide whether a signal is real, estimate how much gas it represents, and say how certain they are.",
    tasks: [
      { title: "Check the signal", detail: "Decide whether a measurement is reliable, or caused by something else such as cloud or a bright surface." },
      { title: "Build an estimate", detail: "Use models and wind information to turn an absorption signal into a rate of emission." },
      { title: "Share the findings", detail: "Explain results, and their uncertainty, to people who make decisions." },
    ],
    collaborators: ["Satellite engineers", "Data engineers", "Industry specialists", "Customers"],
    classroomConnection: "Wavelength, absorption and measurement uncertainty all show up in this work.",
  },
  {
    id: "satellite-engineering",
    title: "Satellite and instrument engineering",
    summary: "Design, build and test the instruments and spacecraft that take the measurements.",
    explanation:
      "Instrument and satellite engineers make the hardware that collects the light. They fit a precise optical instrument into a small spacecraft, then test and calibrate it so its readings can be trusted in orbit.",
    tasks: [
      { title: "Design the instrument", detail: "Choose optics and detectors that can pick out the wavelengths methane absorbs." },
      { title: "Test and calibrate", detail: "Check on the ground that the instrument measures what it should, using known light sources." },
      { title: "Support it in orbit", detail: "Monitor performance after launch and help fix problems from the ground." },
    ],
    collaborators: ["Atmospheric scientists", "Software developers", "Manufacturers", "Launch providers"],
    classroomConnection: "Interference, wavelength and the behaviour of light are what make a spectrometer work.",
  },
  {
    id: "software-data",
    title: "Software and data",
    summary: "Turn satellite measurements into data and tools people can use.",
    explanation:
      "Software developers and data specialists move measurements from the satellite to the people who need them. They build the systems that process large amounts of data and the web tools customers use to see where emissions are.",
    tasks: [
      { title: "Build data pipelines", detail: "Process large numbers of observations reliably and quickly." },
      { title: "Build tools for users", detail: "Create web platforms and interfaces that let customers find and use results." },
      { title: "Find patterns", detail: "Use statistics and machine learning to sort sites and spot changes over time." },
    ],
    collaborators: ["Scientists", "Product designers", "Customers", "Operations teams"],
    classroomConnection: "A measurement only helps if people can find it, trust it and understand what it means.",
  },
  {
    "id": "conservation-research",
    "title": "Conservation research and population ecology",
    "summary": "Find out whether an intervention helps a wild population recover.",
    "explanation": "Conservation researchers connect observations of individual animals to changes in a population. They plan what to measure, compare outcomes and explain what the evidence can and cannot establish.",
    "tasks": [
      {
        "title": "Plan a comparison",
        "detail": "Choose measures of survival, breeding and population change, and decide what to compare them with."
      },
      {
        "title": "Follow animals after release",
        "detail": "Record observations over time, accounting for animals that are difficult to detect."
      },
      {
        "title": "Interpret the evidence",
        "detail": "Ask whether results reflect the intervention, environmental conditions or other explanations."
      }
    ],
    "collaborators": [
      "Animal care teams",
      "Veterinarians",
      "Landowners",
      "Field technicians"
    ],
    "classroomConnection": "Survival and reproduction at different life stages affect population change. A successful release alone does not establish population recovery."
  },
  {
    "id": "animal-care",
    "title": "Animal care and welfare",
    "summary": "Support animals day to day and notice changes that matter.",
    "explanation": "Animal care teams provide food, maintain habitats and observe behaviour and body condition. Care records help the team respond to changes and support conservation work without treating every species as if it has the same needs.",
    "tasks": [
      {
        "title": "Provide daily care",
        "detail": "Follow prescribed diets and maintain clean, suitable habitats."
      },
      {
        "title": "Observe and record",
        "detail": "Track behaviour, weight and body condition, and report changes to the team."
      },
      {
        "title": "Work with specialists",
        "detail": "Support veterinary procedures and enrichment under established welfare and safety protocols."
      }
    ],
    "collaborators": [
      "Veterinarians",
      "Conservation researchers",
      "Animal care assistants",
      "Facility staff"
    ],
    "classroomConnection": "Individual health and behaviour influence survival. Daily observations provide evidence, while population outcomes require follow-up beyond care."
  },
  {
    "id": "wildlife-veterinary",
    "title": "Veterinary care for wildlife",
    "summary": "Assess animal health and support safe care and release.",
    "explanation": "Veterinarians bring medical knowledge to animal care. In conservation settings, decisions about individual animals also need to consider the welfare of other animals and the risks associated with moving or releasing wildlife.",
    "tasks": [
      {
        "title": "Assess health",
        "detail": "Examine animals and interpret observations or diagnostic tests."
      },
      {
        "title": "Plan treatment",
        "detail": "Choose appropriate care and work with the animal-care team to monitor the response."
      },
      {
        "title": "Support conservation decisions",
        "detail": "Contribute health and welfare evidence to decisions about care, transport and release."
      }
    ],
    "collaborators": [
      "Animal care technicians",
      "Veterinary technologists",
      "Conservation researchers"
    ],
    "classroomConnection": "The health of an individual and the recovery of a population are related questions, but they require different evidence."
  },
  {
    "id": "process-engineering",
    "title": "Process engineering",
    "summary": "Design and test the steps that separate useful materials from a mixture.",
    "explanation": "Process engineers connect chemistry to equipment and operating conditions. They use calculations, models and test results to decide how a process should work, then help troubleshoot what happens when it is scaled up.",
    "tasks": [
      {
        "title": "Compare separation steps",
        "detail": "Evaluate how different treatment stages affect recovery, purity and resource use."
      },
      {
        "title": "Check the balances",
        "detail": "Account for material entering and leaving each stage, using models and measurements."
      },
      {
        "title": "Test and improve",
        "detail": "Use pilot or demonstration results to improve designs and support commissioning."
      }
    ],
    "collaborators": [
      "Plant operators",
      "Laboratory staff",
      "Equipment suppliers",
      "Other engineers"
    ],
    "classroomConnection": "Concentration, mixtures and quantitative chemical change become practical questions about recovery, purity, water use and scale."
  },
  {
    "id": "process-operations",
    "title": "Process and plant operations",
    "summary": "Keep processing equipment running safely and learn from its measurements.",
    "explanation": "Operators put a process into practice. They inspect equipment, record operating conditions and work with engineers and maintenance teams when results differ from what was expected.",
    "tasks": [
      {
        "title": "Monitor the process",
        "detail": "Take readings and inspect equipment for signs of unusual behaviour."
      },
      {
        "title": "Keep useful records",
        "detail": "Document conditions and events so results can be compared across shifts and tests."
      },
      {
        "title": "Troubleshoot safely",
        "detail": "Report problems, support maintenance and help with commissioning or start-up work."
      }
    ],
    "collaborators": [
      "Process engineers",
      "Maintenance technicians",
      "Laboratory staff",
      "Safety teams"
    ],
    "classroomConnection": "A separation method must work repeatedly. Careful measurements help explain why performance changes between trials."
  },
  {
    "id": "commercial-partnerships",
    "title": "Business development and partnerships",
    "summary": "Connect technical capabilities with the people who can use them.",
    "explanation": "Business development teams learn what customers need and work with technical colleagues to explain what a service can deliver. Government-facing work also involves proposals, procurement requirements and coordinated project delivery.",
    "tasks": [
      {
        "title": "Understand the need",
        "detail": "Identify customer problems and assess whether the technology can help."
      },
      {
        "title": "Build a proposal",
        "detail": "Translate scientific capabilities into a clear offer, coordinating technical and commercial contributions."
      },
      {
        "title": "Coordinate delivery",
        "detail": "Maintain relationships and track the commitments made in a contract."
      }
    ],
    "collaborators": [
      "Scientists",
      "Product teams",
      "Finance and legal teams",
      "Government customers"
    ],
    "classroomConnection": "A measurement becomes useful when its capabilities and limitations are communicated clearly to someone making a decision."
  },
];
