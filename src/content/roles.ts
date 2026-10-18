import type { RoleProfile } from "./types";

// General explanations of each kind of work, written by us. Company-specific evidence
// lives on the organization-role link, not here.
export const roleProfiles: RoleProfile[] = [
  {
    "id": "work-manufacturing",
    "title": "Manufacturing and quality work",
    "summary": "Make repeatable components and check that the output matches a specification.",
    "explanation": "Make repeatable components and check that the output matches a specification.",
    "tasks": [
      {
        "title": "Read",
        "detail": "Read a drawing or work instruction before setting up a task."
      },
      {
        "title": "Measure",
        "detail": "Measure key dimensions or properties and record the result."
      },
      {
        "title": "Investigate",
        "detail": "Investigate variation rather than treating every difference as acceptable."
      }
    ],
    "collaborators": [
      "Design teams",
      "Machine operators",
      "Quality staff"
    ],
    "classroomConnection": "Precision, tolerances and repeatable methods connect measurement to useful products."
  },
  {
    "id": "work-technical-support",
    "title": "Technical application support",
    "summary": "Help people use a technical product in the conditions of their own workplace.",
    "explanation": "Help people use a technical product in the conditions of their own workplace.",
    "tasks": [
      {
        "title": "Ask",
        "detail": "Ask what the user is trying to measure or control."
      },
      {
        "title": "Separate",
        "detail": "Separate a setup problem from a sensor or process problem."
      },
      {
        "title": "Explain",
        "detail": "Explain the next diagnostic step and record what changed."
      }
    ],
    "collaborators": [
      "Customers",
      "Product developers",
      "Field technicians"
    ],
    "classroomConnection": "Troubleshooting means testing explanations one at a time."
  },
  {
    "id": "work-logistics",
    "title": "Dispatch and logistics coordination",
    "summary": "Keep materials moving in the right order, with the information needed at each handoff.",
    "explanation": "Keep materials moving in the right order, with the information needed at each handoff.",
    "tasks": [
      {
        "title": "Match",
        "detail": "Match deliveries or orders with available capacity."
      },
      {
        "title": "Check",
        "detail": "Check timing, identification and handling requirements."
      },
      {
        "title": "Respond",
        "detail": "Respond to a delay without losing track of the product or customer need."
      }
    ],
    "collaborators": [
      "Drivers",
      "Warehouse teams",
      "Customers"
    ],
    "classroomConnection": "A technically sound product can still fail its purpose if timing or handling goes wrong."
  },
  {
    "id": "work-sonography",
    "title": "Diagnostic medical sonographer",
    "summary": "Acquire ultrasound images while supporting the person being examined.",
    "explanation": "Acquire ultrasound images while supporting the person being examined.",
    "tasks": [
      {
        "title": "Prepare",
        "detail": "Prepare for the requested examination and communicate with the patient."
      },
      {
        "title": "Position",
        "detail": "Position the transducer and adjust acquisition settings to obtain useful views."
      },
      {
        "title": "Document",
        "detail": "Document the images for interpretation within the clinical team's workflow."
      }
    ],
    "collaborators": [
      "Patients",
      "Radiologists",
      "Clinic staff"
    ],
    "classroomConnection": "Producing a clear measurement and interpreting its meaning are connected but different tasks."
  },
  {
    "id": "work-clinic-administration",
    "title": "Medical office and booking support",
    "summary": "Help patients and clinical teams coordinate the information and appointments needed for care.",
    "explanation": "Help patients and clinical teams coordinate the information and appointments needed for care.",
    "tasks": [
      {
        "title": "Handle",
        "detail": "Handle appointment requests and confirm required information."
      },
      {
        "title": "Communicate",
        "detail": "Communicate clearly with patients and modality teams."
      },
      {
        "title": "Keep",
        "detail": "Keep registration and scheduling records accurate."
      }
    ],
    "collaborators": [
      "Patients",
      "Technologists",
      "Booking teams"
    ],
    "classroomConnection": "Care depends on reliable human coordination as well as instruments."
  },
  {
    "id": "work-bootmaking",
    "title": "Bootmaking and pattern work",
    "summary": "Translate a design and material choice into a pair of boots through skilled craft.",
    "explanation": "Translate a design and material choice into a pair of boots through skilled craft.",
    "tasks": [
      {
        "title": "Plan",
        "detail": "Plan and cut pieces with attention to material stretch."
      },
      {
        "title": "Join",
        "detail": "Join and shape components through stitching and lasting."
      },
      {
        "title": "Inspect",
        "detail": "Inspect the finished result against the intended design and fit."
      }
    ],
    "collaborators": [
      "Customers",
      "Retail staff",
      "Other makers"
    ],
    "classroomConnection": "A flat pattern and a three-dimensional object have to agree."
  },
  {
    "id": "work-acoustics",
    "title": "Acoustical consulting",
    "summary": "Investigate how sound behaves in a space and recommend changes for its intended use.",
    "explanation": "Investigate how sound behaves in a space and recommend changes for its intended use.",
    "tasks": [
      {
        "title": "Measure",
        "detail": "Measure or model sound paths and levels."
      },
      {
        "title": "Compare",
        "detail": "Compare changes to room surfaces, layout or noise isolation."
      },
      {
        "title": "Explain",
        "detail": "Explain the trade-offs to the people designing or using the space."
      }
    ],
    "collaborators": [
      "Architects",
      "Mechanical engineers",
      "Building users"
    ],
    "classroomConnection": "Reflection and absorption become decisions about how a room works."
  },
  {
    "id": "work-refrigeration",
    "title": "Refrigeration and air-conditioning mechanic",
    "summary": "Install, maintain and troubleshoot equipment that moves heat and conditions air.",
    "explanation": "Install, maintain and troubleshoot equipment that moves heat and conditions air.",
    "tasks": [
      {
        "title": "Use",
        "detail": "Use drawings to locate components and controls."
      },
      {
        "title": "Check",
        "detail": "Check operating conditions and investigate a fault."
      },
      {
        "title": "Repair",
        "detail": "Repair or adjust equipment and verify the result."
      }
    ],
    "collaborators": [
      "Controls technicians",
      "Operators",
      "Equipment designers"
    ],
    "classroomConnection": "A refrigeration system moves heat; it does not create cold as a substance."
  },
  {
    "id": "work-warehousing",
    "title": "Warehouse and inventory operations",
    "summary": "Receive, locate and move goods while keeping identity and handling requirements visible.",
    "explanation": "Receive, locate and move goods while keeping identity and handling requirements visible.",
    "tasks": [
      {
        "title": "Check",
        "detail": "Check incoming goods against shipment information."
      },
      {
        "title": "Move",
        "detail": "Move and store products using appropriate equipment and procedures."
      },
      {
        "title": "Maintain",
        "detail": "Maintain inventory records and coordinate outbound loads."
      }
    ],
    "collaborators": [
      "Drivers",
      "Dispatch",
      "Food-quality teams"
    ],
    "classroomConnection": "Temperature, time and correct identification all matter to a cold chain."
  },

  {
    id: "work-landscape-design",
    title: "Landscape design",
    summary: "Shape outdoor spaces so water, habitat and human uses can work together.",
    explanation: "Shape outdoor spaces so water, habitat and human uses can work together.",
    tasks: [
      {
        title: "Investigate",
        detail: "Read the site and identify competing needs."
      },
      {
        title: "Test and compare",
        detail: "Develop plans and sections that show landforms and planting."
      },
      {
        title: "Document and improve",
        detail: "Review details with engineers, ecologists and construction teams."
      }
    ],
    collaborators: [
      "Ecologists, planners, engineers and contractors"
    ],
    classroomConnection: "A change to a landform changes paths for both water and people."
  },
  {
    id: "work-environmental-field-assessment",
    title: "Environmental field assessment",
    summary: "Collect and interpret evidence about a place before recommending an action.",
    explanation: "Collect and interpret evidence about a place before recommending an action.",
    tasks: [
      {
        title: "Investigate",
        detail: "Plan observations or samples around a clear question."
      },
      {
        title: "Test and compare",
        detail: "Record locations, methods and conditions consistently."
      },
      {
        title: "Document and improve",
        detail: "Explain the limits of the evidence and the next useful check."
      }
    ],
    collaborators: [
      "Laboratory staff, engineers and project planners"
    ],
    classroomConnection: "A result has meaning only in the context of how and where it was collected."
  },
  {
    id: "work-structural-engineering",
    title: "Structural engineering",
    summary: "Work out how a structure transfers loads through members and connections to its supports.",
    explanation: "Work out how a structure transfers loads through members and connections to its supports.",
    tasks: [
      {
        title: "Investigate",
        detail: "Identify loads and constraints in the design brief."
      },
      {
        title: "Test and compare",
        detail: "Develop and check a structural model and details."
      },
      {
        title: "Document and improve",
        detail: "Coordinate construction-stage requirements with the project team."
      }
    ],
    collaborators: [
      "Architects, technologists, builders and reviewers"
    ],
    classroomConnection: "Forces must have a continuous route to supports; an attractive shape alone is not evidence of performance."
  },
  {
    id: "work-civil-and-construction-technology",
    title: "Civil and construction technology",
    summary: "Turn project requirements into usable drawings, quantities and checks.",
    explanation: "Turn project requirements into usable drawings, quantities and checks.",
    tasks: [
      {
        title: "Investigate",
        detail: "Prepare technical drawings using measured site information."
      },
      {
        title: "Test and compare",
        detail: "Check dimensions and interfaces between design disciplines."
      },
      {
        title: "Document and improve",
        detail: "Support construction records and field verification."
      }
    ],
    collaborators: [
      "Engineers, surveyors and site teams"
    ],
    classroomConnection: "Scale and accurate measurements connect a drawing to the real location."
  },
  {
    id: "work-construction-coordination",
    title: "Construction coordination",
    summary: "Help different teams work from compatible information and an achievable sequence.",
    explanation: "Help different teams work from compatible information and an achievable sequence.",
    tasks: [
      {
        title: "Investigate",
        detail: "Track design changes and unresolved interfaces."
      },
      {
        title: "Test and compare",
        detail: "Compare construction stages with access and operating constraints."
      },
      {
        title: "Document and improve",
        detail: "Communicate decisions and confirm that the correct documents reach the field."
      }
    ],
    collaborators: [
      "Designers, contractors, owners and operations staff"
    ],
    classroomConnection: "A system that works at the end may need different support while it is being assembled."
  },
  {
    id: "work-roast-production",
    title: "Roast production",
    summary: "Operate a controlled food-processing sequence and compare the product with its intended result.",
    explanation: "Operate a controlled food-processing sequence and compare the product with its intended result.",
    tasks: [
      {
        title: "Investigate",
        detail: "Track batch identity and process settings."
      },
      {
        title: "Test and compare",
        detail: "Record observations and measurements during production."
      },
      {
        title: "Document and improve",
        detail: "Report variation and help compare trial adjustments."
      }
    ],
    collaborators: [
      "Quality staff, technicians and production planners"
    ],
    classroomConnection: "Repeating a setting is not the same as verifying a repeatable result."
  },
  {
    id: "work-storyboarding-and-illustration",
    title: "Storyboarding and illustration",
    summary: "Decide what an audience needs to see before the final sequence is produced.",
    explanation: "Decide what an audience needs to see before the final sequence is produced.",
    tasks: [
      {
        title: "Investigate",
        detail: "Translate a message into visual scenes."
      },
      {
        title: "Test and compare",
        detail: "Check order, viewpoint and transitions using rough drawings."
      },
      {
        title: "Document and improve",
        detail: "Revise the sequence after feedback before detailed animation."
      }
    ],
    collaborators: [
      "Writers, animators and clients"
    ],
    classroomConnection: "A model needs to preserve the relationship it is intended to explain."
  },
  {
    id: "work-animation",
    title: "Animation",
    summary: "Create motion from planned images, models and timing decisions.",
    explanation: "Create motion from planned images, models and timing decisions.",
    tasks: [
      {
        title: "Investigate",
        detail: "Set key positions and the time between them."
      },
      {
        title: "Test and compare",
        detail: "Adjust spacing and transitions to communicate movement."
      },
      {
        title: "Document and improve",
        detail: "Review the result against the story and technical requirements."
      }
    ],
    collaborators: [
      "Illustrators, directors and sound specialists"
    ],
    classroomConnection: "Spacing at equal time intervals can communicate constant speed or changing speed."
  },
  {
    id: "work-creative-production-coordination",
    title: "Creative production coordination",
    summary: "Help a project move from a communication brief to a deliverable that can be reviewed.",
    explanation: "Help a project move from a communication brief to a deliverable that can be reviewed.",
    tasks: [
      {
        title: "Investigate",
        detail: "Clarify audience, scope and review milestones."
      },
      {
        title: "Test and compare",
        detail: "Coordinate feedback between creative and client teams."
      },
      {
        title: "Document and improve",
        detail: "Track revisions and confirm delivery requirements."
      }
    ],
    collaborators: [
      "Writers, designers, animators and clients"
    ],
    classroomConnection: "Defining the question first helps distinguish useful evidence from extra detail."
  },
  {
    id: "work-rail-traffic-control",
    title: "Rail traffic control",
    summary: "Coordinate railway movements and crews within formal operating systems and rules.",
    explanation: "Coordinate railway movements and crews within formal operating systems and rules.",
    tasks: [
      {
        title: "Investigate",
        detail: "Monitor movement information and operating constraints."
      },
      {
        title: "Test and compare",
        detail: "Coordinate plans and communicate with railway teams."
      },
      {
        title: "Document and improve",
        detail: "Respond to changes using the applicable procedures and authority."
      }
    ],
    collaborators: [
      "Train crews, operations managers and maintenance teams"
    ],
    classroomConnection: "Time and position together reveal conflicts that a map alone can miss."
  },
  {
    id: "work-railway-conductor-work",
    title: "Railway conductor work",
    summary: "Support train movements and handling of rail vehicles through trained railway operations.",
    explanation: "Support train movements and handling of rail vehicles through trained railway operations.",
    tasks: [
      {
        title: "Investigate",
        detail: "Apply operating procedures during assigned movements."
      },
      {
        title: "Test and compare",
        detail: "Communicate with other railway workers."
      },
      {
        title: "Document and improve",
        detail: "Check and document required operational information."
      }
    ],
    collaborators: [
      "Locomotive crews, controllers and yard teams"
    ],
    classroomConnection: "The plan and the physical movement must agree; conductor and dispatcher are different roles."
  },
  {
    id: "work-water-resource-planning",
    title: "Water-resource planning",
    summary: "Compare water availability, demand and possible responses over time.",
    explanation: "Compare water availability, demand and possible responses over time.",
    tasks: [
      {
        title: "Investigate",
        detail: "Organize supply, use and monitoring information."
      },
      {
        title: "Test and compare",
        detail: "Test alternative assumptions in scenarios."
      },
      {
        title: "Document and improve",
        detail: "Explain trade-offs, uncertainty and priorities."
      }
    ],
    collaborators: [
      "Hydrologists, engineers, policy specialists and communities"
    ],
    classroomConnection: "A model is a way to test assumptions, not a guarantee about the future."
  },
  {
    id: "work-planning-communication-and-engagement",
    title: "Planning communication and engagement",
    summary: "Help people with different needs understand and contribute to a planning process.",
    explanation: "Help people with different needs understand and contribute to a planning process.",
    tasks: [
      {
        title: "Investigate",
        detail: "Explain scenarios and technical options in accessible language."
      },
      {
        title: "Test and compare",
        detail: "Gather and document questions and priorities."
      },
      {
        title: "Document and improve",
        detail: "Make clear what the evidence supports and where choices remain."
      }
    ],
    collaborators: [
      "Technical teams, decision-makers and community participants"
    ],
    classroomConnection: "A number can inform a decision without deciding whose needs take priority."
  },
  {
    id: "work-water-treatment-operations",
    title: "Water-treatment operations",
    summary: "Keep a treatment process working within its specified conditions and record how it performs.",
    explanation: "Keep a treatment process working within its specified conditions and record how it performs.",
    tasks: [
      {
        title: "Investigate",
        detail: "Monitor process readings and output tests."
      },
      {
        title: "Test and compare",
        detail: "Follow operating and maintenance procedures."
      },
      {
        title: "Document and improve",
        detail: "Document deviations and coordinate investigation."
      }
    ],
    collaborators: [
      "Process engineers, laboratories and maintenance teams"
    ],
    classroomConnection: "Stable operation matters even when average results look acceptable."
  },
  {
    id: "work-building-science-investigation",
    title: "Building-science investigation",
    summary: "Investigate how a building enclosure manages heat, air and water.",
    explanation: "Investigate how a building enclosure manages heat, air and water.",
    tasks: [
      {
        title: "Investigate",
        detail: "Inspect conditions and record where problems appear."
      },
      {
        title: "Test and compare",
        detail: "Compare observations with drawings and possible movement paths."
      },
      {
        title: "Document and improve",
        detail: "Help develop and verify repairs with the design team."
      }
    ],
    collaborators: [
      "Owners, technologists, engineers and trades"
    ],
    classroomConnection: "Different mechanisms can create similar visible symptoms."
  },
  {
    id: "work-commercial-baking",
    title: "Commercial baking",
    summary: "Produce baked goods through a controlled sequence of preparation, processing and handling.",
    explanation: "Produce baked goods through a controlled sequence of preparation, processing and handling.",
    tasks: [
      {
        title: "Investigate",
        detail: "Follow recipes and production schedules."
      },
      {
        title: "Test and compare",
        detail: "Use and check production equipment within trained procedures."
      },
      {
        title: "Document and improve",
        detail: "Observe product consistency and communicate defects or process variation."
      }
    ],
    collaborators: [
      "Production staff, quality teams and maintenance workers"
    ],
    classroomConnection: "Ratios, timing and temperature matter, but quality must still be checked."
  },
  {
    id: "work-camera-and-image-capture",
    title: "Camera and image capture",
    summary: "Record images that serve a production’s visual and storytelling requirements.",
    explanation: "Record images that serve a production’s visual and storytelling requirements.",
    tasks: [
      {
        title: "Investigate",
        detail: "Plan framing and camera setup with the production team."
      },
      {
        title: "Test and compare",
        detail: "Check exposure and consistency across takes."
      },
      {
        title: "Document and improve",
        detail: "Record information needed for editing and handoff."
      }
    ],
    collaborators: [
      "Directors, lighting teams and editors"
    ],
    classroomConnection: "The recorded image depends on both the light and how it is captured."
  },
  {
    id: "work-film-and-video-editing",
    title: "Film and video editing",
    summary: "Build a sequence from selected footage to communicate a coherent idea.",
    explanation: "Build a sequence from selected footage to communicate a coherent idea.",
    tasks: [
      {
        title: "Investigate",
        detail: "Review and organize available footage."
      },
      {
        title: "Test and compare",
        detail: "Choose cuts, order and timing for the intended story."
      },
      {
        title: "Document and improve",
        detail: "Check continuity and revise against feedback."
      }
    ],
    collaborators: [
      "Directors, producers, colourists and sound teams"
    ],
    classroomConnection: "Sequence can change interpretation even when the individual images stay the same."
  },
  {
    id: "work-colour-finishing",
    title: "Colour finishing",
    summary: "Work on the appearance and consistency of images during post-production.",
    explanation: "Work on the appearance and consistency of images during post-production.",
    tasks: [
      {
        title: "Investigate",
        detail: "Compare shots using the agreed visual reference."
      },
      {
        title: "Test and compare",
        detail: "Adjust recorded colour and tonal relationships."
      },
      {
        title: "Document and improve",
        detail: "Check the sequence and deliverable with the production team."
      }
    ],
    collaborators: [
      "Editors, cinematographers and directors"
    ],
    classroomConnection: "Changing the appearance of an image is different from changing the original event."
  },
  {
    id: "work-food",
    title: "Ingredient and formulation science",
    summary: "Investigate how ingredients behave in a product. This work connects a material’s composition to properties such as texture, stability or performance in a mixture.",
    explanation: "Investigate how ingredients behave in a product. This work connects a material’s composition to properties such as texture, stability or performance in a mixture.",
    tasks: [
      {
        title: "Investigate",
        detail: "Choose a property to compare across formulations."
      },
      {
        title: "Test and compare",
        detail: "Prepare controlled trials and observe changes over time."
      },
      {
        title: "Explain and improve",
        detail: "Explain the trade-offs between ingredients and processing conditions."
      }
    ],
    collaborators: [
      "Biochemists, laboratory technicians and product-development teams"
    ],
    classroomConnection: "Molecules and mixtures help explain why two ingredients can behave differently."
  },
  {
    id: "work-lab",
    title: "Laboratory analysis",
    summary: "Make measurements that other people can trust. A laboratory worker prepares samples, uses a method consistently and records enough detail for someone else to interpret the result.",
    explanation: "Make measurements that other people can trust. A laboratory worker prepares samples, uses a method consistently and records enough detail for someone else to interpret the result.",
    tasks: [
      {
        title: "Investigate",
        detail: "Prepare and label samples so their identity is preserved."
      },
      {
        title: "Test and compare",
        detail: "Run comparisons or reference samples to check the method."
      },
      {
        title: "Explain and improve",
        detail: "Record results, units and limitations before sharing findings."
      }
    ],
    collaborators: [
      "Scientists, process engineers and quality teams"
    ],
    classroomConnection: "A repeatable method and a fair comparison matter as much as a single impressive number."
  },
  {
    id: "work-process",
    title: "Process engineering",
    summary: "Turn a useful transformation into a workable sequence of equipment and operating steps. Process engineers consider what enters, what leaves and what conditions the system must maintain.",
    explanation: "Turn a useful transformation into a workable sequence of equipment and operating steps. Process engineers consider what enters, what leaves and what conditions the system must maintain.",
    tasks: [
      {
        title: "Investigate",
        detail: "Draw a flow of materials and energy through the system."
      },
      {
        title: "Test and compare",
        detail: "Compare operating conditions and equipment options."
      },
      {
        title: "Explain and improve",
        detail: "Use trial results to revise the process and communicate constraints."
      }
    ],
    collaborators: [
      "Laboratory staff, operators, mechanical designers and controls specialists"
    ],
    classroomConnection: "Conservation of matter and energy connects classroom calculations to process decisions."
  },
  {
    id: "work-instrument",
    title: "Instrument development and testing",
    summary: "Help build and check the equipment that produces measurements. Instrument work joins hardware, software and experiments rather than treating a reading as automatically correct.",
    explanation: "Help build and check the equipment that produces measurements. Instrument work joins hardware, software and experiments rather than treating a reading as automatically correct.",
    tasks: [
      {
        title: "Investigate",
        detail: "Check performance using a known reference."
      },
      {
        title: "Test and compare",
        detail: "Investigate drift, noise or inconsistent readings."
      },
      {
        title: "Explain and improve",
        detail: "Document tests so later users know what the instrument can establish."
      }
    ],
    collaborators: [
      "Scientists, electronics specialists and software developers"
    ],
    classroomConnection: "Measurement uncertainty is part of using a tool responsibly."
  },
  {
    id: "work-applications",
    title: "Scientific applications",
    summary: "Connect an instrument to the question a user needs to answer. Applications work involves selecting a method, interpreting results and explaining limitations.",
    explanation: "Connect an instrument to the question a user needs to answer. Applications work involves selecting a method, interpreting results and explaining limitations.",
    tasks: [
      {
        title: "Investigate",
        detail: "Choose a measurement approach for the sample."
      },
      {
        title: "Test and compare",
        detail: "Compare outputs with reference information."
      },
      {
        title: "Explain and improve",
        detail: "Explain what further tests would resolve ambiguity."
      }
    ],
    collaborators: [
      "Laboratory users, instrument engineers and researchers"
    ],
    classroomConnection: "A pattern is evidence to interpret, not a label that proves an answer by itself."
  },
  {
    id: "work-software",
    title: "Software and data systems",
    summary: "Build the tools that move, process and display information. Reliable software needs testing against missing, delayed and unexpected data as well as ideal examples.",
    explanation: "Build the tools that move, process and display information. Reliable software needs testing against missing, delayed and unexpected data as well as ideal examples.",
    tasks: [
      {
        title: "Investigate",
        detail: "Translate a user need into a testable behaviour."
      },
      {
        title: "Test and compare",
        detail: "Build and test a data-processing or display feature."
      },
      {
        title: "Explain and improve",
        detail: "Investigate failures and document assumptions about inputs."
      }
    ],
    collaborators: [
      "Domain experts, designers, users and hardware teams"
    ],
    classroomConnection: "An algorithm’s output depends on the quality and meaning of its inputs."
  },
  {
    id: "work-mechanical",
    title: "Mechanical design and prototyping",
    summary: "Translate a need into a component or machine that can be built and tested. Designers use dimensions, material properties and constraints to evaluate alternatives.",
    explanation: "Translate a need into a component or machine that can be built and tested. Designers use dimensions, material properties and constraints to evaluate alternatives.",
    tasks: [
      {
        title: "Investigate",
        detail: "Create and revise drawings or a digital model."
      },
      {
        title: "Test and compare",
        detail: "Choose materials and dimensions for the intended conditions."
      },
      {
        title: "Explain and improve",
        detail: "Compare the prototype with its requirements and refine the design."
      }
    ],
    collaborators: [
      "Machinists, fabricators, test staff and customers"
    ],
    classroomConnection: "Geometry, forces and material properties shape real design trade-offs."
  },
  {
    id: "work-machining",
    title: "Machining and dimensional inspection",
    summary: "Make parts fit their intended purpose by controlling dimensions. Machining combines tools, setup and measurement; finishing a part is not the same as proving it meets its specification.",
    explanation: "Make parts fit their intended purpose by controlling dimensions. Machining combines tools, setup and measurement; finishing a part is not the same as proving it meets its specification.",
    tasks: [
      {
        title: "Investigate",
        detail: "Interpret a drawing and plan a sequence of cuts."
      },
      {
        title: "Test and compare",
        detail: "Set up the machine and check the workpiece."
      },
      {
        title: "Explain and improve",
        detail: "Measure critical dimensions and document deviations."
      }
    ],
    collaborators: [
      "Designers, production teams and quality inspectors"
    ],
    classroomConnection: "Tolerance describes an acceptable range rather than a perfectly exact number."
  },
  {
    id: "work-quality",
    title: "Quality and traceability",
    summary: "Make it possible to explain how a result or product was produced. Quality work checks records, methods and acceptance criteria so variation can be investigated rather than hidden.",
    explanation: "Make it possible to explain how a result or product was produced. Quality work checks records, methods and acceptance criteria so variation can be investigated rather than hidden.",
    tasks: [
      {
        title: "Investigate",
        detail: "Check that materials and samples have traceable identities."
      },
      {
        title: "Test and compare",
        detail: "Compare recorded results with defined acceptance criteria."
      },
      {
        title: "Explain and improve",
        detail: "Investigate deviations and document what changed."
      }
    ],
    collaborators: [
      "Production, laboratory, engineering and customer teams"
    ],
    classroomConnection: "Repeated results need both measurements and records of the conditions that produced them."
  },
  {
    id: "work-controls",
    title: "Instrumentation and controls",
    summary: "Keep a process measurable and responsive. Controls work connects sensors, decisions and actuators so the system can respond when conditions change.",
    explanation: "Keep a process measurable and responsive. Controls work connects sensors, decisions and actuators so the system can respond when conditions change.",
    tasks: [
      {
        title: "Investigate",
        detail: "Check whether sensors are reading reliably."
      },
      {
        title: "Test and compare",
        detail: "Compare measurements with the intended operating range."
      },
      {
        title: "Explain and improve",
        detail: "Test how the system responds to a change or fault."
      }
    ],
    collaborators: [
      "Operators, electricians and process engineers"
    ],
    classroomConnection: "Feedback uses a measured result to inform the next action."
  },
  {
    id: "work-maintenance",
    title: "Aircraft maintenance",
    summary: "Investigate condition, carry out authorized maintenance and preserve the records behind a decision. Aircraft maintenance work relies on approved procedures and appropriate qualifications.",
    explanation: "Investigate condition, carry out authorized maintenance and preserve the records behind a decision. Aircraft maintenance work relies on approved procedures and appropriate qualifications.",
    tasks: [
      {
        title: "Investigate",
        detail: "Inspect a component using the applicable procedure."
      },
      {
        title: "Test and compare",
        detail: "Compare findings with documented limits and escalate uncertainty."
      },
      {
        title: "Explain and improve",
        detail: "Record work and test results for the maintenance decision."
      }
    ],
    collaborators: [
      "Licensed AMEs, avionics specialists, engineering and quality teams"
    ],
    classroomConnection: "A visual impression alone is not enough evidence that a part is safe."
  },
  {
    id: "work-avionics",
    title: "Avionics and electronics",
    summary: "Work on the electronic systems that allow aircraft to communicate, navigate and collect data. Troubleshooting means distinguishing a faulty sensor from wiring, power or software problems.",
    explanation: "Work on the electronic systems that allow aircraft to communicate, navigate and collect data. Troubleshooting means distinguishing a faulty sensor from wiring, power or software problems.",
    tasks: [
      {
        title: "Investigate",
        detail: "Trace a signal through connected components."
      },
      {
        title: "Test and compare",
        detail: "Use test equipment to compare expected and measured behaviour."
      },
      {
        title: "Explain and improve",
        detail: "Document the fault and verify the result after authorized work."
      }
    ],
    collaborators: [
      "Aircraft maintenance teams, electrical designers and software developers"
    ],
    classroomConnection: "Circuits and signals become useful when the complete system works reliably."
  },
  {
    id: "work-bioprocess",
    title: "Bioprocess development",
    summary: "Develop repeatable ways to make and purify biological materials. This work connects molecular science to manufacturing conditions and checks whether a change improves the process.",
    explanation: "Develop repeatable ways to make and purify biological materials. This work connects molecular science to manufacturing conditions and checks whether a change improves the process.",
    tasks: [
      {
        title: "Investigate",
        detail: "Define a comparison between process conditions."
      },
      {
        title: "Test and compare",
        detail: "Track production and purification steps for each batch."
      },
      {
        title: "Explain and improve",
        detail: "Use analytical results to decide which change to test next."
      }
    ],
    collaborators: [
      "Molecular scientists, analytical staff and quality teams"
    ],
    classroomConnection: "Knowing a sequence or molecule is different from producing a reliable batch of it."
  },
  {
    id: "work-drone",
    title: "Drone operations",
    summary: "Plan and carry out flights for a specific task while coordinating with the people responsible for the site. The aircraft is one tool within an operational plan.",
    explanation: "Plan and carry out flights for a specific task while coordinating with the people responsible for the site. The aircraft is one tool within an operational plan.",
    tasks: [
      {
        title: "Investigate",
        detail: "Review the task, site and operating constraints."
      },
      {
        title: "Test and compare",
        detail: "Check the aircraft and coordinate the flight with relevant personnel."
      },
      {
        title: "Explain and improve",
        detail: "Record observations and equipment issues after the flight."
      }
    ],
    collaborators: [
      "Site operations, wildlife specialists and data analysts"
    ],
    classroomConnection: "Flight performance must be considered alongside the task and the surrounding environment."
  },
  {
    id: "work-wildlife",
    title: "Wildlife monitoring and interpretation",
    summary: "Observe how animals respond to an intervention and ask whether the change lasts. This work needs consistent observations and attention to other causes of changing behaviour.",
    explanation: "Observe how animals respond to an intervention and ask whether the change lasts. This work needs consistent observations and attention to other causes of changing behaviour.",
    tasks: [
      {
        title: "Investigate",
        detail: "Define how bird activity will be counted."
      },
      {
        title: "Test and compare",
        detail: "Compare observations before and after an intervention."
      },
      {
        title: "Explain and improve",
        detail: "Record weather, season and other factors that could explain a difference."
      }
    ],
    collaborators: [
      "Drone operators, airport staff and environmental teams"
    ],
    classroomConnection: "Behavioural response is evidence; reduced sightings alone do not prove a lasting safety outcome."
  },
  {
    id: "work-spatial",
    title: "Spatial data and mapping",
    summary: "Turn measurements tied to places into usable spatial information. The work involves coordinates, scale and checking that datasets describe the same location and time.",
    explanation: "Turn measurements tied to places into usable spatial information. The work involves coordinates, scale and checking that datasets describe the same location and time.",
    tasks: [
      {
        title: "Investigate",
        detail: "Check coordinate systems and measurement dates."
      },
      {
        title: "Test and compare",
        detail: "Align and inspect spatial datasets."
      },
      {
        title: "Explain and improve",
        detail: "Present maps or models with their limitations."
      }
    ],
    collaborators: [
      "Surveyors, engineers, field operators and software teams"
    ],
    classroomConnection: "Models can be detailed while still containing gaps or misaligned measurements."
  },
  {
    id: "work-geoscience",
    title: "Geoscience and interpretation",
    summary: "Explain what rock measurements suggest about geology. Geoscientists combine observations with context and use additional tests where a scan leaves uncertainty.",
    explanation: "Explain what rock measurements suggest about geology. Geoscientists combine observations with context and use additional tests where a scan leaves uncertainty.",
    tasks: [
      {
        title: "Investigate",
        detail: "Describe core and identify changes along it."
      },
      {
        title: "Test and compare",
        detail: "Compare sensor patterns with geological observations or assays."
      },
      {
        title: "Explain and improve",
        detail: "Communicate alternative interpretations and uncertainty."
      }
    ],
    collaborators: [
      "Core technicians, data scientists and exploration teams"
    ],
    classroomConnection: "A measurement of a sample is not automatically a measurement of the whole deposit."
  },
  {
    id: "work-millwright",
    title: "Industrial machinery assembly and maintenance",
    summary: "Make machinery work together as a physical system. Millwright work connects assembly, alignment, inspection and troubleshooting.",
    explanation: "Make machinery work together as a physical system. Millwright work connects assembly, alignment, inspection and troubleshooting.",
    tasks: [
      {
        title: "Investigate",
        detail: "Read equipment drawings and plan assembly steps."
      },
      {
        title: "Test and compare",
        detail: "Align and connect mechanical components."
      },
      {
        title: "Explain and improve",
        detail: "Check operation and record problems that need adjustment."
      }
    ],
    collaborators: [
      "Designers, operators, electricians and fabrication teams"
    ],
    classroomConnection: "Small alignment errors can change how forces and motion pass through a machine."
  },
  {
    id: "work-fabrication",
    title: "Metal fabrication and welding",
    summary: "Join and assemble material into usable structures. Fabrication work follows drawings and procedures, then checks whether the finished work meets its requirements.",
    explanation: "Join and assemble material into usable structures. Fabrication work follows drawings and procedures, then checks whether the finished work meets its requirements.",
    tasks: [
      {
        title: "Investigate",
        detail: "Read dimensions and prepare components."
      },
      {
        title: "Test and compare",
        detail: "Use the specified joining process and sequence."
      },
      {
        title: "Explain and improve",
        detail: "Inspect the assembly and communicate any deviation."
      }
    ],
    collaborators: [
      "Designers, machinists and quality inspectors"
    ],
    classroomConnection: "Material properties and heat affect the result of a joining process."
  },
  {
    id: "work-materials",
    title: "Materials research and testing",
    summary: "Investigate whether a material improves a product for a defined purpose. A useful comparison separates the effect of the added material from other changes in the test.",
    explanation: "Investigate whether a material improves a product for a defined purpose. A useful comparison separates the effect of the added material from other changes in the test.",
    tasks: [
      {
        title: "Investigate",
        detail: "Prepare comparable samples with and without an additive."
      },
      {
        title: "Test and compare",
        detail: "Measure a relevant property under consistent conditions."
      },
      {
        title: "Explain and improve",
        detail: "Explain performance changes alongside uncertainty and practical constraints."
      }
    ],
    collaborators: [
      "Chemists, process engineers and product developers"
    ],
    classroomConnection: "Stronger, lighter and more conductive are different properties requiring different tests."
  },
  {
    id: "work-power",
    title: "Power-electronics design",
    summary: "Control how electrical energy moves between components. Power-electronics work combines circuit design with testing, thermal limits and the behaviour of the complete system.",
    explanation: "Control how electrical energy moves between components. Power-electronics work combines circuit design with testing, thermal limits and the behaviour of the complete system.",
    tasks: [
      {
        title: "Investigate",
        detail: "Choose and document a circuit design."
      },
      {
        title: "Test and compare",
        detail: "Test its response across operating conditions."
      },
      {
        title: "Explain and improve",
        detail: "Investigate losses and component limits before revising the design."
      }
    ],
    collaborators: [
      "Electrical technologists, firmware developers and manufacturing teams"
    ],
    classroomConnection: "Power describes the rate of energy transfer; stored energy describes how much is available."
  },
  {
    id: "work-weather",
    title: "Weather-data interpretation",
    summary: "Use observations to understand changing atmospheric conditions. Weather-data work checks where and when a measurement was made before combining it with other evidence.",
    explanation: "Use observations to understand changing atmospheric conditions. Weather-data work checks where and when a measurement was made before combining it with other evidence.",
    tasks: [
      {
        title: "Investigate",
        detail: "Check the position, time and quality of observations."
      },
      {
        title: "Test and compare",
        detail: "Compare measurements across altitude or time."
      },
      {
        title: "Explain and improve",
        detail: "Identify gaps and explain how they limit an interpretation."
      }
    ],
    collaborators: [
      "Meteorologists, instrument teams and data engineers"
    ],
    classroomConnection: "More measurements can help, but uneven coverage can still leave important gaps."
  },
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
  {
    "id": "laboratory-analysis",
    "title": "Laboratory analysis and quality control",
    "summary": "Prepare samples and check that analytical measurements can be trusted.",
    "explanation": "Laboratory technicians follow procedures to prepare samples, use analytical instruments and record results. Calibration and quality checks help them identify unreliable readings before others use the data.",
    "tasks": [
      {
        "title": "Prepare the test",
        "detail": "Prepare samples, reagents and standards according to a procedure."
      },
      {
        "title": "Measure carefully",
        "detail": "Use analytical instruments with appropriate supervision and calibration."
      },
      {
        "title": "Check and record",
        "detail": "Record results and follow quality and safety procedures."
      }
    ],
    "collaborators": [
      "Senior laboratory staff",
      "Analysts",
      "Instrument technicians"
    ],
    "classroomConnection": "Solution preparation, calibration and measurement quality connect classroom chemistry to testing real liquids."
  },
];
