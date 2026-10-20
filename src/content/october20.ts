import type { DatedSource, LearningPathway, RoleProfile } from "./types";

// Approved 20 October 2026; shared occupations and provider routes, not vacancies.
export const october20Roles: RoleProfile[] = [
  {
    "id": "work-plant-biotechnology",
    "title": "Plant biotechnology scientist",
    "summary": "Investigate how plant characteristics relate to biological information and growing conditions.",
    "explanation": "Investigate how plant characteristics relate to biological information and growing conditions.",
    "tasks": [
      {
        "title": "Frame",
        "detail": "Define a trait and a testable research question."
      },
      {
        "title": "Compare",
        "detail": "Plan controlled comparisons and record observations."
      },
      {
        "title": "Interpret",
        "detail": "Separate evidence for a trait from effects of growing conditions."
      }
    ],
    "collaborators": [
      "Laboratory technicians",
      "Crop-development teams"
    ],
    "classroomConnection": "Genetic information and controlled comparisons connect laboratory questions to crop traits."
  },
  {
    "id": "work-science-education",
    "title": "Science educator",
    "summary": "Help people understand and apply scientific ideas through explanations and practical learning.",
    "explanation": "Help people understand and apply scientific ideas through explanations and practical learning.",
    "tasks": [
      {
        "title": "Understand",
        "detail": "Identify the learner’s question and context."
      },
      {
        "title": "Explain",
        "detail": "Choose a model or demonstration that makes the idea visible."
      },
      {
        "title": "Check",
        "detail": "Ask learners to apply the idea and discuss the model’s limits."
      }
    ],
    "collaborators": [
      "Technical specialists",
      "Community partners"
    ],
    "classroomConnection": "A good explanation connects a concept to a decision and makes uncertainty visible."
  },
  {
    "id": "work-sport-physiology",
    "title": "Sport physiologist",
    "summary": "Use knowledge of the body and measured evidence to help interpret training responses.",
    "explanation": "Use knowledge of the body and measured evidence to help interpret training responses.",
    "tasks": [
      {
        "title": "Plan",
        "detail": "Connect a measurement to a specific training question."
      },
      {
        "title": "Measure",
        "detail": "Use consistent conditions and record relevant context."
      },
      {
        "title": "Interpret",
        "detail": "Discuss patterns and limitations with coaches and athletes."
      }
    ],
    "collaborators": [
      "Coaches",
      "Athletes",
      "Other sport-science professionals"
    ],
    "classroomConnection": "Respiratory and circulatory systems help explain responses to exercise."
  },
  {
    "id": "work-retail-operations",
    "title": "Retail operations coordinator",
    "summary": "Connect day-to-day service with the resources a retail business needs.",
    "explanation": "Connect day-to-day service with the resources a retail business needs.",
    "tasks": [
      {
        "title": "Observe",
        "detail": "Identify customer needs and service constraints."
      },
      {
        "title": "Coordinate",
        "detail": "Organize tasks and resources to deliver the service."
      },
      {
        "title": "Review",
        "detail": "Compare outcomes and trade-offs before changing a process."
      }
    ],
    "collaborators": [
      "Store teams",
      "Customer-service teams",
      "Finance colleagues"
    ],
    "classroomConnection": "Customer benefit and operating costs need to be considered together."
  },
  {
    "id": "work-financial-analysis",
    "title": "Financial analyst",
    "summary": "Compare financial information and explain what the numbers can and cannot establish.",
    "explanation": "Compare financial information and explain what the numbers can and cannot establish.",
    "tasks": [
      {
        "title": "Define",
        "detail": "Check the period, scope and meaning of each measure."
      },
      {
        "title": "Calculate",
        "detail": "Compare statements or scenarios using consistent definitions."
      },
      {
        "title": "Explain",
        "detail": "Describe the result, assumptions and important omissions."
      }
    ],
    "collaborators": [
      "Accounting teams",
      "Operations teams"
    ],
    "classroomConnection": "Ratios and changes are useful only when their underlying quantities are comparable."
  },
  {
    "id": "work-event-operations",
    "title": "Event operations coordinator",
    "summary": "Organize the people, services and practical details that make an event work.",
    "explanation": "Organize the people, services and practical details that make an event work.",
    "tasks": [
      {
        "title": "Plan",
        "detail": "Connect visitor needs with a workable event layout."
      },
      {
        "title": "Coordinate",
        "detail": "Arrange schedules and dependencies across teams."
      },
      {
        "title": "Adapt",
        "detail": "Compare delivery conditions with the plan and resolve conflicts."
      }
    ],
    "collaborators": [
      "Venue teams",
      "Service suppliers",
      "Visitor-support teams"
    ],
    "classroomConnection": "An event turns a value proposition into a network of resource decisions."
  },
  {
    "id": "work-ecommerce-operations",
    "title": "Ecommerce operations coordinator",
    "summary": "Connect online customer choices with reliable order and delivery processes.",
    "explanation": "Connect online customer choices with reliable order and delivery processes.",
    "tasks": [
      {
        "title": "Clarify",
        "detail": "Make product and purchase options understandable."
      },
      {
        "title": "Coordinate",
        "detail": "Connect orders, inventory and fulfilment information."
      },
      {
        "title": "Improve",
        "detail": "Review customer needs and process problems using evidence."
      }
    ],
    "collaborators": [
      "Marketing colleagues",
      "Warehouse teams",
      "Customer support"
    ],
    "classroomConnection": "Different purchase models create different customer benefits and delivery requirements."
  },
  {
    "id": "work-franchise-support",
    "title": "Franchise support coordinator",
    "summary": "Help local operators apply shared systems and communicate operational needs.",
    "explanation": "Help local operators apply shared systems and communicate operational needs.",
    "tasks": [
      {
        "title": "Explain",
        "detail": "Help operators understand available systems and support."
      },
      {
        "title": "Coordinate",
        "detail": "Connect training and operating questions with the right team."
      },
      {
        "title": "Learn",
        "detail": "Gather feedback about where support or processes need improvement."
      }
    ],
    "collaborators": [
      "Local operators",
      "Training teams",
      "Marketing colleagues"
    ],
    "classroomConnection": "A franchise model divides decisions and resources across connected businesses."
  },
  {
    "id": "work-procurement",
    "title": "Procurement specialist",
    "summary": "Help an organization choose products and coordinate what it buys.",
    "explanation": "Help an organization choose products and coordinate what it buys.",
    "tasks": [
      {
        "title": "Specify",
        "detail": "Understand the products and quantities the business needs."
      },
      {
        "title": "Compare",
        "detail": "Evaluate options against relevant requirements and constraints."
      },
      {
        "title": "Coordinate",
        "detail": "Connect purchasing decisions with inventory and delivery planning."
      }
    ],
    "collaborators": [
      "Suppliers",
      "Warehouse teams",
      "Sales teams"
    ],
    "classroomConnection": "Customer needs become purchasing requirements and operational trade-offs."
  }
];

export const october20Pathways: LearningPathway[] = [
  {
    "id": "oct20-route-biology",
    "provider": "University of Calgary",
    "name": "Biological Sciences BSc",
    "routeType": "Degree",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Biological systems, research and laboratory investigation.",
    "roleRationale": [
      {
        "roleId": "work-bioprocess",
        "why": "Biological systems, research and laboratory investigation. This supplies related preparation for bioprocess development, not an employer requirement or a job guarantee."
      },
      {
        "roleId": "work-plant-biotechnology",
        "why": "Biological systems, research and laboratory investigation. This supplies related preparation for plant biotechnology scientist, not an employer requirement or a job guarantee."
      },
      {
        "roleId": "animal-care",
        "why": "Biological systems, research and laboratory investigation. This supplies related preparation for animal care and welfare, not an employer requirement or a job guarantee."
      }
    ],
    "entryNote": "A foundation for biology-related work; specialized research or professional roles can require further preparation.",
    "urlSourceId": "oct20-pathway-biology",
    "kind": "interpreted",
    "sourceIds": [
      "oct20-pathway-biology"
    ],
    "checkedOn": "2026-10-20"
  },
  {
    "id": "oct20-route-kinesiology",
    "provider": "University of Calgary",
    "name": "BSc in Kinesiology — Exercise and Health Physiology option",
    "routeType": "Degree",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Human movement and exercise physiology.",
    "roleRationale": [
      {
        "roleId": "work-sport-physiology",
        "why": "Human movement and exercise physiology. This supplies related preparation for sport physiologist, not an employer requirement or a job guarantee."
      }
    ],
    "entryNote": "Undergraduate foundation; individual sport-science roles may require additional study or professional credentials.",
    "urlSourceId": "oct20-pathway-kinesiology",
    "kind": "interpreted",
    "sourceIds": [
      "oct20-pathway-kinesiology"
    ],
    "checkedOn": "2026-10-20"
  },
  {
    "id": "oct20-route-horticulture-diploma",
    "provider": "Olds College",
    "name": "Horticulture Technologist diploma",
    "routeType": "Diploma",
    "location": "Olds, Alberta — outside Calgary",
    "relevance": "local",
    "learns": "Plants, soils, landscapes and water systems.",
    "roleRationale": [
      {
        "roleId": "work-science-education",
        "why": "Plants, soils, landscapes and water systems. This supplies related preparation for science educator, not an employer requirement or a job guarantee."
      }
    ],
    "entryNote": "A two-year on-campus technical route; not a Calgary-delivered program or an educator qualification.",
    "urlSourceId": "oct20-pathway-horticulture-diploma",
    "kind": "interpreted",
    "sourceIds": [
      "oct20-pathway-horticulture-diploma"
    ],
    "checkedOn": "2026-10-20"
  },
  {
    "id": "oct20-route-accounting",
    "provider": "SAIT",
    "name": "Business Administration — Accounting diploma",
    "routeType": "Diploma",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Financial statements and accounting analysis.",
    "roleRationale": [
      {
        "roleId": "work-financial-analysis",
        "why": "Financial statements and accounting analysis. This supplies related preparation for financial analyst, not an employer requirement or a job guarantee."
      }
    ],
    "entryNote": "Foundation for accounting-related work; not CPA status or a guarantee of a financial-analyst appointment.",
    "urlSourceId": "oct20-pathway-accounting",
    "kind": "interpreted",
    "sourceIds": [
      "oct20-pathway-accounting"
    ],
    "checkedOn": "2026-10-20"
  },
  {
    "id": "oct20-route-management",
    "provider": "SAIT",
    "name": "Business Administration — Management diploma",
    "routeType": "Diploma",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Business operations and organizational decisions.",
    "roleRationale": [
      {
        "roleId": "work-retail-operations",
        "why": "Business operations and organizational decisions. This supplies related preparation for retail operations coordinator, not an employer requirement or a job guarantee."
      },
      {
        "roleId": "work-event-operations",
        "why": "Business operations and organizational decisions. This supplies related preparation for event operations coordinator, not an employer requirement or a job guarantee."
      },
      {
        "roleId": "work-franchise-support",
        "why": "Business operations and organizational decisions. This supplies related preparation for franchise support coordinator, not an employer requirement or a job guarantee."
      }
    ],
    "entryNote": "Broad business preparation; management and coordination roles also depend on relevant experience.",
    "urlSourceId": "oct20-pathway-management",
    "kind": "interpreted",
    "sourceIds": [
      "oct20-pathway-management"
    ],
    "checkedOn": "2026-10-20"
  },
  {
    "id": "oct20-route-marketing",
    "provider": "SAIT",
    "name": "Business Administration — Marketing diploma",
    "routeType": "Diploma",
    "location": "Calgary",
    "relevance": "local",
    "learns": "Customer needs, marketing and business communication.",
    "roleRationale": [
      {
        "roleId": "work-ecommerce-operations",
        "why": "Customer needs, marketing and business communication. This supplies related preparation for ecommerce operations coordinator, not an employer requirement or a job guarantee."
      }
    ],
    "entryNote": "Related preparation for customer-facing commercial work; not proof of an employer’s entry requirements.",
    "urlSourceId": "oct20-pathway-marketing",
    "kind": "interpreted",
    "sourceIds": [
      "oct20-pathway-marketing"
    ],
    "checkedOn": "2026-10-20"
  }
];

export const october20PathwayLinks: Record<string, LearningPathway["roleRationale"]> = {
  "oct18-route-chemical": [
    {
      "roleId": "work-lab",
      "why": "Chemical analysis, instruments and laboratory quality. This supplies related preparation for laboratory analysis, not an employer requirement or a job guarantee."
    },
    {
      "roleId": "work-quality",
      "why": "Chemical analysis, instruments and laboratory quality. This supplies related preparation for quality and traceability, not an employer requirement or a job guarantee."
    },
    {
      "roleId": "work-manufacturing",
      "why": "Chemical analysis, instruments and laboratory quality. This supplies related preparation for manufacturing and quality work, not an employer requirement or a job guarantee."
    },
    {
      "roleId": "work-materials",
      "why": "Chemical analysis, instruments and laboratory quality. This supplies related preparation for materials research and testing, not an employer requirement or a job guarantee."
    }
  ],
  "oct18-route-mechanical": [
    {
      "roleId": "work-mechanical",
      "why": "Mechanical design, testing and manufacturing technology. This supplies related preparation for mechanical design and prototyping, not an employer requirement or a job guarantee."
    },
    {
      "roleId": "work-machining",
      "why": "Mechanical design, testing and manufacturing technology. This supplies related preparation for machining and dimensional inspection, not an employer requirement or a job guarantee."
    }
  ],
  "oct17-route-sait-environmental-technology": [
    {
      "roleId": "work-science-education",
      "why": "Environmental sampling, water and soil investigation. This supplies related preparation for science educator, not an employer requirement or a job guarantee."
    }
  ],
  "route-electrical": [
    {
      "roleId": "work-instrument",
      "why": "Electrical systems, circuits, controls and testing. This supplies related preparation for instrument development and testing, not an employer requirement or a job guarantee."
    },
    {
      "roleId": "work-technical-support",
      "why": "Electrical systems, circuits, controls and testing. This supplies related preparation for technical application support, not an employer requirement or a job guarantee."
    },
    {
      "roleId": "work-controls",
      "why": "Electrical systems, circuits, controls and testing. This supplies related preparation for instrumentation and controls, not an employer requirement or a job guarantee."
    },
    {
      "roleId": "work-power",
      "why": "Electrical systems, circuits, controls and testing. This supplies related preparation for power-electronics design, not an employer requirement or a job guarantee."
    },
    {
      "roleId": "work-quality",
      "why": "Electrical systems, circuits, controls and testing. This supplies related preparation for quality and traceability, not an employer requirement or a job guarantee."
    }
  ],
  "oct17-route-sait-geomatics-engineering-technology": [
    {
      "roleId": "work-spatial",
      "why": "Remote sensing, spatial data and mapping. This supplies related preparation for spatial data and mapping, not an employer requirement or a job guarantee."
    }
  ],
  "oct19-route-electrician": [
    {
      "roleId": "work-electrician",
      "why": "Electrical installation, maintenance and troubleshooting. This supplies related preparation for electrician, not an employer requirement or a job guarantee."
    }
  ],
  "route-millwright": [
    {
      "roleId": "work-millwright",
      "why": "Machinery alignment, maintenance and repair. This supplies related preparation for industrial machinery assembly and maintenance, not an employer requirement or a job guarantee."
    }
  ],
  "oct17-route-sait-software-development": [
    {
      "roleId": "work-software",
      "why": "Programming, software testing and data-system foundations. This supplies related preparation for software and data systems, not an employer requirement or a job guarantee."
    },
    {
      "roleId": "work-technical-support",
      "why": "Programming, software testing and data-system foundations. This supplies related preparation for technical application support, not an employer requirement or a job guarantee."
    }
  ],
  "oct18-route-logistics": [
    {
      "roleId": "work-procurement",
      "why": "Supply-chain coordination, operations and data-informed decisions. This supplies related preparation for procurement specialist, not an employer requirement or a job guarantee."
    },
    {
      "roleId": "work-logistics",
      "why": "Supply-chain coordination, operations and data-informed decisions. This supplies related preparation for dispatch and logistics coordination, not an employer requirement or a job guarantee."
    }
  ]
};

export const october20Sources: DatedSource[] = [
  {
    "id": "oct20-curriculum-1",
    "label": "Alberta curriculum — Biology 30",
    "url": "https://education.alberta.ca/media/159727/bio203007.pdf",
    "checkedOn": "2026-10-20"
  },
  {
    "id": "oct20-curriculum-2",
    "label": "Alberta curriculum — Chemistry 20",
    "url": "https://education.alberta.ca/media/159730/chem2030_07.pdf",
    "checkedOn": "2026-10-20"
  },
  {
    "id": "oct20-curriculum-3",
    "label": "Alberta curriculum — Physics 30",
    "url": "https://www.alberta.ca/system/files/custom_downloaded_images/edc-physics20-30-performance-standards.pdf",
    "checkedOn": "2026-10-20"
  },
  {
    "id": "oct20-curriculum-4",
    "label": "Alberta curriculum — Science 10",
    "url": "https://education.alberta.ca/media/159715/science10.pdf",
    "checkedOn": "2026-10-20"
  },
  {
    "id": "oct20-curriculum-5",
    "label": "Alberta curriculum — CSE1240",
    "url": "https://curriculum.learnalberta.ca/curriculum/en/pos/CTSCSE/CSE1240",
    "checkedOn": "2026-10-20"
  },
  {
    "id": "oct20-curriculum-6",
    "label": "Alberta curriculum — INF2070",
    "url": "https://curriculum.learnalberta.ca/curriculum/en/pos/CTSINF/INF2070",
    "checkedOn": "2026-10-20"
  },
  {
    "id": "oct20-curriculum-7",
    "label": "Alberta curriculum — CSE1120",
    "url": "https://curriculum.learnalberta.ca/curriculum/en/pos/CTSCSE/CSE1120",
    "checkedOn": "2026-10-20"
  },
  {
    "id": "oct20-curriculum-8",
    "label": "Alberta curriculum — ENT2010",
    "url": "https://curriculum.learnalberta.ca/curriculum/en/pos/CTSENT/ENT2010",
    "checkedOn": "2026-10-20"
  },
  {
    "id": "oct20-curriculum-9",
    "label": "Alberta curriculum — FIN3060",
    "url": "https://curriculum.learnalberta.ca/curriculum/en/pos/CTSFIN/FIN3060",
    "checkedOn": "2026-10-20"
  },
  {
    "id": "oct20-pathway-biology",
    "label": "University of Calgary — Biological Sciences BSc",
    "url": "https://www.ucalgary.ca/future-students/undergraduate/explore-programs/biological-sciences",
    "checkedOn": "2026-10-20"
  },
  {
    "id": "oct20-pathway-lab",
    "label": "SAIT — Chemical Laboratory Technology diploma",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/chemical-laboratory-technology",
    "checkedOn": "2026-10-20"
  },
  {
    "id": "oct20-pathway-mechanical",
    "label": "SAIT — Mechanical Engineering Technology diploma",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/mechanical-engineering-technology",
    "checkedOn": "2026-10-20"
  },
  {
    "id": "oct20-pathway-environment",
    "label": "SAIT — Environmental Technology diploma",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/environmental-technology",
    "checkedOn": "2026-10-20"
  },
  {
    "id": "oct20-pathway-kinesiology",
    "label": "University of Calgary — BSc in Kinesiology — Exercise and Health Physiology option",
    "url": "https://kinesiology.ucalgary.ca/future-students/undergraduates/our-programs/bachelor-science-kinesiology",
    "checkedOn": "2026-10-20"
  },
  {
    "id": "oct20-pathway-electrical",
    "label": "SAIT — Electrical Engineering Technology diploma",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/electrical-engineering-technology",
    "checkedOn": "2026-10-20"
  },
  {
    "id": "oct20-pathway-geomatics",
    "label": "SAIT — Geomatics Engineering Technology diploma",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/geomatics-engineering-technology",
    "checkedOn": "2026-10-20"
  },
  {
    "id": "oct20-pathway-electrician",
    "label": "SAIT — Electrician apprenticeship",
    "url": "https://www.sait.ca/apprenticeships-and-trades/programs/electrician",
    "checkedOn": "2026-10-20"
  },
  {
    "id": "oct20-pathway-millwright",
    "label": "SAIT — Industrial Mechanic (Millwright) apprenticeship",
    "url": "https://www.sait.ca/apprenticeships-and-trades/programs/industrial-mechanic-millwright",
    "checkedOn": "2026-10-20"
  },
  {
    "id": "oct20-pathway-horticulture-diploma",
    "label": "Olds College — Horticulture Technologist diploma",
    "url": "https://www.oldscollege.ca/programs/areas-of-interest/horticulture/horticulture-technologist-diploma.html",
    "checkedOn": "2026-10-20"
  },
  {
    "id": "oct20-pathway-software",
    "label": "SAIT — Software Development diploma",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/software-development",
    "checkedOn": "2026-10-20"
  },
  {
    "id": "oct20-pathway-accounting",
    "label": "SAIT — Business Administration — Accounting diploma",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/business-administration-accounting",
    "checkedOn": "2026-10-20"
  },
  {
    "id": "oct20-pathway-management",
    "label": "SAIT — Business Administration — Management diploma",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/business-administration-management",
    "checkedOn": "2026-10-20"
  },
  {
    "id": "oct20-pathway-marketing",
    "label": "SAIT — Business Administration — Marketing diploma",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/business-administration-marketing",
    "checkedOn": "2026-10-20"
  },
  {
    "id": "oct20-pathway-logistics",
    "label": "SAIT — Business Administration — Supply Chain Management diploma",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/business-administration-supply-chain-management",
    "checkedOn": "2026-10-20"
  }
];
