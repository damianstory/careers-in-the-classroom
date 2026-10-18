import type { ExampleRecord } from "../types";

export default {
  addedOn: "2026-10-17",
  example: {
    slug: "calgary-italian-bakery",
    org: "Calgary Italian Bakery",
    discipline: "Chemistry",
    question: "Where does a bakery lose food before it reaches the customer?",
    work: "Calgary Italian Bakery produces bread, buns and other baked goods. A published assessment conducted with Enviro-Stewards and project partners examined food loss and resource use at the bakery. It identified opportunities involving dough transfer, product forming and damage during later handling. These were assessed opportunities, not proof that every proposed improvement was implemented or that the historical figures describe today’s production.",
    localShort: "Calgary bakery; a documented historical facility assessment supplies the specific story.",
    calgary: "Calgary bakery; a documented historical facility assessment supplies the specific story.",
    site: "Calgary bakery; a documented historical facility assessment supplies the specific story.",
    localSourceIds: [
      "page-calgary-italian-bakery-oct17-source-52",
      "page-calgary-italian-bakery-oct17-source-53",
      "page-calgary-italian-bakery-oct17-source-54",
      "page-calgary-italian-bakery-oct17-source-55"
    ],
    explain: "For a fictional 100 kg batch, 6 kg is lost at transfer, 4 kg at shaping and 2 kg at packing. A change cuts transfer loss to 3 kg but adds 2 kg at shaping. Calculate the net change and propose one quality check.",
    prompt: "Why is a smaller waste bin not enough evidence that a process improved?",
    conversation: "Why is a smaller waste bin not enough evidence that a process improved?",
    mindset: "Fictional totals: loss falls from 12 to 11 kg, a 1 kg improvement. This simplified accounting ignores baking moisture loss and is not a real bakery mass balance.",
    courses: [
      {
        course: "Science 10",
        topic: "Scientific inquiry: measuring losses and comparing changes"
      }
    ],
    courseFitSourceIds: [
      "page-calgary-italian-bakery-oct17-source-51"
    ],
    roles: [
      {
        title: "Commercial baking",
        note: "Produce baked goods through a controlled sequence of preparation, processing and handling.",
        evidence: "Employer commercial-baker description explicitly mentions production equipment, recipes and schedules.",
        kind: "interpreted",
        sourceIds: [
          "page-calgary-italian-bakery-oct17-source-52",
          "page-calgary-italian-bakery-oct17-source-53",
          "page-calgary-italian-bakery-oct17-source-54",
          "page-calgary-italian-bakery-oct17-source-55"
        ]
      },
      {
        title: "Quality and traceability",
        note: "Make it possible to explain how a result or product was produced. Quality work checks records, methods and acceptance criteria so variation can be investigated rather than hidden.",
        evidence: "Employer emphasizes consistent safe products; the detailed profile is editorial.",
        kind: "interpreted",
        sourceIds: [
          "page-calgary-italian-bakery-oct17-source-52",
          "page-calgary-italian-bakery-oct17-source-53",
          "page-calgary-italian-bakery-oct17-source-54",
          "page-calgary-italian-bakery-oct17-source-55"
        ]
      },
      {
        title: "Process engineering",
        note: "Turn a useful transformation into a workable sequence of equipment and operating steps. Process engineers consider what enters, what leaves and what conditions the system must maintain.",
        evidence: "Published facility assessment supports process-improvement tasks; external partners contributed and are not assumed to be bakery employees.",
        kind: "interpreted",
        sourceIds: [
          "page-calgary-italian-bakery-oct17-source-52",
          "page-calgary-italian-bakery-oct17-source-53",
          "page-calgary-italian-bakery-oct17-source-54",
          "page-calgary-italian-bakery-oct17-source-55"
        ]
      }
    ],
    rolesNote: "Work areas and related occupations, not a staff roster or a list of current vacancies. Each profile explains the evidence for its company connection.",
    pathways: [
      {
        kindLabel: "Diploma",
        label: "SAIT — Baking and Pastry Arts",
        note: "Practise bakery and pastry production and product quality. Check current admission, portfolio, intake and workplace requirements; program completion does not guarantee a job or professional registration.",
        kind: "interpreted",
        sourceIds: [
          "page-calgary-italian-bakery-oct17-source-56"
        ]
      },
      {
        kindLabel: "Apprenticeship",
        label: "Alberta Baker apprenticeship education",
        note: "Combine structured trade education with workplace learning in baking. Use Tradesecrets to verify current entry, sponsorship and work-hour requirements. No specific Calgary employer placement is promised.",
        kind: "interpreted",
        sourceIds: [
          "page-calgary-italian-bakery-oct17-source-57"
        ]
      },
      {
        kindLabel: "Diploma",
        label: "SAIT — Chemical Laboratory Technology",
        note: "Practice chemical analysis, sample preparation and analytical instrumentation. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        kind: "interpreted",
        sourceIds: [
          "page-calgary-italian-bakery-oct17-source-22"
        ]
      },
      {
        kindLabel: "Bachelor’s degree",
        label: "University of Calgary — Chemical Engineering",
        note: "Study how to transform raw materials and design production processes. Check the provider’s current prerequisites and intake availability. This is a related learning route, not a hiring promise or an employer requirement.",
        kind: "interpreted",
        sourceIds: [
          "page-calgary-italian-bakery-oct17-source-44"
        ]
      }
    ],
    ledger: [
      {
        type: "work",
        claim: "Calgary Italian Bakery produces bread, buns and other baked goods. A published assessment conducted with Enviro-Stewards and project partners examined food loss and resource use at the bakery. It identified opportunities involving dough transfer, product forming and damage during later handling. These were assessed opportunities, not proof that every proposed improvement was implemented or that the historical figures describe today’s production.",
        status: "Source-backed company/project account",
        kind: "stated",
        sourceIds: [
          "page-calgary-italian-bakery-oct17-source-52",
          "page-calgary-italian-bakery-oct17-source-53",
          "page-calgary-italian-bakery-oct17-source-54",
          "page-calgary-italian-bakery-oct17-source-55"
        ]
      },
      {
        type: "local connection",
        claim: "Calgary bakery; a documented historical facility assessment supplies the specific story.",
        status: "Source-backed local work",
        kind: "stated",
        sourceIds: [
          "page-calgary-italian-bakery-oct17-source-52",
          "page-calgary-italian-bakery-oct17-source-53",
          "page-calgary-italian-bakery-oct17-source-54",
          "page-calgary-italian-bakery-oct17-source-55"
        ]
      },
      {
        type: "course fit",
        claim: "Science 10 inquiry skills (program p. 8) support operational definitions, measurements and evaluating data. This is a cross-unit investigation, not a chemical-reaction or stoichiometry outcome.",
        status: "Editorial application of verified curriculum topics",
        kind: "interpreted",
        sourceIds: [
          "page-calgary-italian-bakery-oct17-source-51"
        ]
      },
      {
        type: "limits",
        claim: "Revised question distinguishes this from Cinnaroll. No current waste totals or achieved savings are claimed; source publication date remains uncertain.",
        status: "Scope of this example",
        kind: "interpreted",
        sourceIds: [
          "page-calgary-italian-bakery-oct17-source-52",
          "page-calgary-italian-bakery-oct17-source-53",
          "page-calgary-italian-bakery-oct17-source-54",
          "page-calgary-italian-bakery-oct17-source-55"
        ]
      }
    ],
    sources: [
      {
        id: "page-calgary-italian-bakery-oct17-source-22",
        label: "SAIT — Chemical Laboratory Technology",
        url: "https://www.sait.ca/programs-and-courses/diplomas/chemical-laboratory-technology"
      },
      {
        id: "page-calgary-italian-bakery-oct17-source-44",
        label: "University of Calgary — Chemical Engineering",
        url: "https://schulich.ucalgary.ca/future-students/undergraduate/programs/bsc-chemical-engineering"
      },
      {
        id: "page-calgary-italian-bakery-oct17-source-51",
        label: "Alberta Science 10 program: inquiry skills and technological systems",
        url: "https://education.alberta.ca/media/159715/science10.pdf"
      },
      {
        id: "page-calgary-italian-bakery-oct17-source-52",
        label: "Calgary Italian Bakery — company/project evidence 1",
        url: "https://www.cibl.com/"
      },
      {
        id: "page-calgary-italian-bakery-oct17-source-53",
        label: "Calgary Italian Bakery — company/project evidence 2",
        url: "https://www.cibl.com/faq"
      },
      {
        id: "page-calgary-italian-bakery-oct17-source-54",
        label: "Calgary Italian Bakery — company/project evidence 3",
        url: "https://www.cibl.com/employment"
      },
      {
        id: "page-calgary-italian-bakery-oct17-source-55",
        label: "Calgary Italian Bakery — company/project evidence 4",
        url: "https://enviro-stewards.com/wp-content/uploads/2025/02/CIBL-Food-Waste-Prevention-Case-Study.pdf"
      },
      {
        id: "page-calgary-italian-bakery-oct17-source-56",
        label: "SAIT — Baking and Pastry Arts",
        url: "https://www.sait.ca/programs-and-courses/diplomas/baking-and-pastry-arts"
      },
      {
        id: "page-calgary-italian-bakery-oct17-source-57",
        label: "Alberta Baker apprenticeship education",
        url: "https://tradesecrets.alberta.ca/SOURCES/PDFS/curriculum_guides/024_outline.pdf"
      }
    ],
    checkedOn: "2026-10-17",
    detailsId: "calgary-italian-bakery-details"
  },
  details: {
    id: "calgary-italian-bakery-details",
    exampleSlug: "calgary-italian-bakery",
    organizationId: "calgary-italian-bakery",
    story: {
      diagramKind: "research",
      illustrationSlug: "calgary-italian-bakery",
      subtitle: "Waste can reveal a process problem before a new machine is needed.",
      caption: "Waste can reveal a process problem before a new machine is needed.",
      steps: [
        {
          text: "Map the steps from ingredients to saleable product.",
          kind: "interpreted",
          sourceIds: [
            "oct17-source-52",
            "oct17-source-53",
            "oct17-source-54",
            "oct17-source-55",
            "oct17-source-51"
          ]
        },
        {
          text: "Measure material losses where they occur instead of combining everything into one waste total.",
          kind: "interpreted",
          sourceIds: [
            "oct17-source-52",
            "oct17-source-53",
            "oct17-source-54",
            "oct17-source-55",
            "oct17-source-51"
          ]
        },
        {
          text: "Investigate a cause: a transfer point, a forming step or later handling may need a different response.",
          kind: "interpreted",
          sourceIds: [
            "oct17-source-52",
            "oct17-source-53",
            "oct17-source-54",
            "oct17-source-55",
            "oct17-source-51"
          ]
        },
        {
          text: "Test a change and compare both waste and acceptable product output. Moving a loss to another step is not a reduction.",
          kind: "interpreted",
          sourceIds: [
            "oct17-source-52",
            "oct17-source-53",
            "oct17-source-54",
            "oct17-source-55",
            "oct17-source-51"
          ]
        }
      ],
      diagramAlt: "Conceptual teaching illustration for Where does a bakery lose food before it reaches the customer? Four numbered stages and arrows correspond to the explanation below.",
      diagramProvenance: "Generated fictional teaching illustration; source-grounded editorial simplification. Not a company process specification. Prompts and review: design/example-expansion-2026-10-17/.",
      discussion: "Why is a smaller waste bin not enough evidence that a process improved?"
    },
    roleIds: [
      "work-commercial-baking",
      "work-quality",
      "work-process"
    ],
    pathwayIds: [
      "oct17-route-sait-baking-and-pastry-arts",
      "oct17-route-alberta-baker-apprenticeship-education",
      "oct17-route-sait-chemical-laboratory-technology",
      "oct17-route-university-of-calgary-chemical-engineering"
    ],
    jobIds: [
      "cgy-050-j1"
    ],
    checkedOn: "2026-10-17"
  },
  organization: {
    id: "calgary-italian-bakery",
    name: "Calgary Italian Bakery",
    organizationType: "company",
    tagline: "Waste can reveal a process problem before a new machine is needed.",
    description: {
      text: "Calgary Italian Bakery produces bread, buns and other baked goods. A published assessment conducted with Enviro-Stewards and project partners examined food loss and resource use at the bakery. It identified opportunities involving dough transfer, product forming and damage during later handling. These were assessed opportunities, not proof that every proposed improvement was implemented or that the historical figures describe today’s production.",
      kind: "stated",
      sourceIds: [
        "oct17-source-52",
        "oct17-source-53",
        "oct17-source-54",
        "oct17-source-55"
      ]
    },
    problem: {
      text: "Where does a bakery lose food before it reaches the customer?",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-52",
        "oct17-source-53",
        "oct17-source-54",
        "oct17-source-55"
      ]
    },
    offering: {
      text: "Bread, buns and other baked goods, with production processes that can be studied for food loss.",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-52",
        "oct17-source-53",
        "oct17-source-54",
        "oct17-source-55"
      ]
    },
    beneficiaries: {
      text: "Food-service customers, retailers and the people eating the bakery’s products.",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-52",
        "oct17-source-53",
        "oct17-source-54",
        "oct17-source-55"
      ]
    },
    headquarters: {
      text: "Headquarters not separately verified for this example.",
      kind: "unresearched",
      sourceIds: []
    },
    localConnection: {
      text: "Calgary bakery; a documented historical facility assessment supplies the specific story.",
      kind: "stated",
      sourceIds: [
        "oct17-source-52",
        "oct17-source-53",
        "oct17-source-54",
        "oct17-source-55"
      ]
    },
    websiteSourceId: "oct17-source-52",
    checkedOn: "2026-10-17",
    careersSourceId: "oct17-source-54"
  },
  organizationRoles: [
    {
      organizationId: "calgary-italian-bakery",
      roleId: "work-commercial-baking",
      establishes: "related-work",
      label: "Employer commercial-baker description explicitly mentions production equipment, recipes and schedules.",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-52",
        "oct17-source-53",
        "oct17-source-54",
        "oct17-source-55"
      ],
      checkedOn: "2026-10-17"
    },
    {
      organizationId: "calgary-italian-bakery",
      roleId: "work-quality",
      establishes: "related-work",
      label: "Employer emphasizes consistent safe products; the detailed profile is editorial.",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-52",
        "oct17-source-53",
        "oct17-source-54",
        "oct17-source-55"
      ],
      checkedOn: "2026-10-17"
    },
    {
      organizationId: "calgary-italian-bakery",
      roleId: "work-process",
      establishes: "related-work",
      label: "Published facility assessment supports process-improvement tasks; external partners contributed and are not assumed to be bakery employees.",
      kind: "interpreted",
      sourceIds: [
        "oct17-source-52",
        "oct17-source-53",
        "oct17-source-54",
        "oct17-source-55"
      ],
      checkedOn: "2026-10-17"
    }
  ],
  jobs: [
    {
      id: "cgy-050-j1",
      title: "Skilled Commercial Bakers",
      employer: "Calgary Italian Bakery",
      employerNote: {
        text: "Featured employer; the posting does not establish assignment to the featured project.",
        kind: "observed",
        sourceIds: [
          "oct17-source-54"
        ]
      },
      roleIds: [
        "work-commercial-baking"
      ],
      location: "Calgary",
      level: "Skilled; years of experience and specific credential not stated",
      relevance: "local",
      postingSourceId: "oct17-source-54",
      capturedOn: "2026-10-17",
      summary: "Produce standardized baked goods using commercial mixing and baking equipment.",
      duties: [
        "Use high-volume mixing machines, ovens and related equipment.",
        "Follow production schedules.",
        "Follow recipes for consistent output."
      ],
      skills: [
        "Following production instructions and recipes.",
        "Commercial equipment work described by employer.",
        "Specific training, experience minimum and pay not stated."
      ],
      classroomConnection: "Production tasks connect to where losses can occur in the bakery process. The posting does not say this employee works on the historical waste-reduction project.",
      limitation: "Employer page accepting applications when checked 17 October 2026; posting date and deadline not stated",
      approval: {
        packetId: "calgary-full-examples-2026-10-17",
        candidateId: "CGY-050-J1",
        copyVersion: 1
      },
      status: {
        kind: "open",
        checkedOn: "2026-10-17",
        note: "Employer page accepting applications when checked 17 October 2026; posting date and deadline not stated"
      },
      kind: "observed",
      sourceIds: [
        "oct17-source-54"
      ]
    }
  ],
  sources: [
    {
      id: "oct17-source-52",
      label: "Calgary Italian Bakery — company/project evidence 1",
      url: "https://www.cibl.com/",
      checkedOn: "2026-10-17"
    },
    {
      id: "oct17-source-53",
      label: "Calgary Italian Bakery — company/project evidence 2",
      url: "https://www.cibl.com/faq",
      checkedOn: "2026-10-17"
    },
    {
      id: "oct17-source-54",
      label: "Calgary Italian Bakery — company/project evidence 3",
      url: "https://www.cibl.com/employment",
      checkedOn: "2026-10-17"
    },
    {
      id: "oct17-source-55",
      label: "Calgary Italian Bakery — company/project evidence 4",
      url: "https://enviro-stewards.com/wp-content/uploads/2025/02/CIBL-Food-Waste-Prevention-Case-Study.pdf",
      checkedOn: "2026-10-17"
    }
  ],
  diagram: {
    image: "/images/story-diagrams/calgary-italian-bakery-graphic-novel.webp",
    heading: "Measure losses where they occur",
    steps: [
      "Map the production steps.",
      "Measure separate losses at transfer, shaping and packing.",
      "Test one change to a suspected cause.",
      "Compare total loss and acceptable product output."
    ],
    note: "The equipment and charts are fictional. The historical assessment identified opportunities; this diagram does not claim the bakery achieved the illustrated reduction."
  },
  unitLinks: [],
} satisfies ExampleRecord;
