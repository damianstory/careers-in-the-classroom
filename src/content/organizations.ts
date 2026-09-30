import type { Organization, OrganizationRole } from "./types";

// Company claims are reported as GHGSat states them on its own pages, checked 25 September 2026.
export const organizations: Organization[] = [
  {
    id: "ghgsat",
    name: "GHGSat",
    tagline: "Measuring methane emissions from space, and from aircraft.",
    description: {
      text: "GHGSat describes itself as a greenhouse gas emissions intelligence company. It uses its own satellites and aircraft to measure methane from industrial sites around the world. It says it has launched 16 satellites.",
      kind: "stated",
      sourceIds: ["ghgsat-home", "ghgsat-constellation"],
    },
    problem: {
      text: "Methane leaks from industrial sites are invisible and were mostly self-reported. GHGSat says that when it started in 2011, 75% of industrial emissions had no independent monitoring.",
      kind: "stated",
      sourceIds: ["ghgsat-about"],
    },
    offering: {
      text: "Measurements of methane at the level of a single site, turned into emission rates that people can act on.",
      kind: "stated",
      sourceIds: ["ghgsat-home", "ghgsat-technology"],
    },
    beneficiaries: {
      text: "Oil and gas operators, landfills, mining, agriculture, governments and financial institutions, according to the company.",
      kind: "stated",
      sourceIds: ["ghgsat-home"],
    },
    headquarters: { text: "Montreal, Quebec.", kind: "stated", sourceIds: ["ghgsat-contact"] },
    localConnection: {
      text: "Lists a Calgary office on 5th Avenue SW, one of five offices. The company does not say which teams work there.",
      kind: "stated",
      sourceIds: ["ghgsat-contact", "ghgsat-about"],
    },
    size: {
      text: "More than 100 people. The About page says 150+ across five offices; the Team page says 100+ (both September 2026).",
      kind: "stated",
      sourceIds: ["ghgsat-about", "ghgsat-team"],
    },
    websiteSourceId: "ghgsat-home",
    careersSourceId: "ghgsat-careers",
    logo: {
      src: "/images/logos/ghgsat.svg",
      alt: "GHGSat logo",
      width: 405,
      height: 159,
      onDark: false,
      sourceUrl: "https://www.ghgsat.com/wp-content/themes/ghgsat/assets/images/logo-ghgsat-color.svg",
      retrieved: "2026-09-30",
    },
    checkedOn: "2026-09-25",
  },
  {
    "id": "wilder-institute",
    "name": "Wilder Institute",
    "organizationType": "charity",
    "tagline": "Conservation research and animal care, working together for wildlife.",
    "description": {
      "text": "Wilder describes itself as a global conservation charity bringing together conservation, animal care and public engagement. Its work includes the Calgary Zoo and species recovery programs.",
      "kind": "stated",
      "sourceIds": [
        "depth-wilder-about"
      ]
    },
    "problem": {
      "text": "At-risk species need support that addresses survival, habitat and the challenges of returning animals to the wild. The burrowing owl program focuses on vulnerable young birds.",
      "kind": "stated",
      "sourceIds": [
        "depth-wilder-program"
      ]
    },
    "offering": {
      "text": "Conservation breeding, animal care, field research and partnerships to support species recovery.",
      "kind": "stated",
      "sourceIds": [
        "depth-wilder-about",
        "depth-wilder-program"
      ]
    },
    "beneficiaries": {
      "text": "At-risk wildlife and the people and communities working to conserve it. In the owl program, landowners help provide release sites on prairie grasslands.",
      "kind": "stated",
      "sourceIds": [
        "depth-wilder-about",
        "depth-wilder-program"
      ]
    },
    "headquarters": {
      "text": "Calgary, Alberta. Its head office is listed at 1300 Zoo Road NE.",
      "kind": "stated",
      "sourceIds": [
        "depth-wilder-contact"
      ]
    },
    "localConnection": {
      "text": "The Calgary Zoo is part of the organization. Owls spend winter at the Archibald Biodiversity Centre; releases take place in southeastern Alberta. The animal-care job example is near Strathmore.",
      "kind": "stated",
      "sourceIds": [
        "depth-wilder-about",
        "depth-wilder-program",
        "depth-job-w1"
      ]
    },
    "websiteSourceId": "depth-wilder-about",
    "logo": {
      "src": "/images/logos/wilder-institute.svg",
      "alt": "Wilder Institute logo",
      "width": 620,
      "height": 207,
      "onDark": true,
      "sourceUrl": "https://wilderinstitute.org/wp-content/uploads/2026/04/wilder-logo-1.svg",
      "retrieved": "2026-09-30"
    },
    "checkedOn": "2026-09-29"
  },
  {
    "id": "e3-lithium",
    "name": "E3 Lithium",
    "organizationType": "company",
    "tagline": "Developing a route from Alberta brine to battery-grade lithium carbonate.",
    "description": {
      "text": "E3 Lithium is developing the Clearwater lithium project in Alberta. It is using demonstration operations and engineering studies to develop a commercial facility.",
      "kind": "stated",
      "sourceIds": [
        "depth-e3-home",
        "depth-e3-update"
      ]
    },
    "problem": {
      "text": "Lithium is dissolved in underground brine alongside other substances. Producing a battery material requires extraction, purification and conversion, with a process that can work at larger scale.",
      "kind": "interpreted",
      "sourceIds": [
        "depth-e3-home",
        "depth-job-e2"
      ]
    },
    "offering": {
      "text": "A planned supply of battery-grade lithium carbonate from Alberta brine. This is a development project, not an operating commercial plant.",
      "kind": "stated",
      "sourceIds": [
        "depth-e3-update"
      ]
    },
    "beneficiaries": {
      "text": "Prospective battery-material customers. E3 reports discussions and non-binding agreements with potential supply partners; these are not completed sales.",
      "kind": "stated",
      "sourceIds": [
        "depth-e3-update"
      ]
    },
    "headquarters": {
      "text": "Calgary, Alberta.",
      "kind": "stated",
      "sourceIds": [
        "depth-e3-home"
      ]
    },
    "localConnection": {
      "text": "Clearwater lies between Calgary and Red Deer. The operator job example is for the demonstration facility east of Olds and Didsbury; the engineering posting is based in Calgary.",
      "kind": "stated",
      "sourceIds": [
        "depth-e3-home",
        "depth-job-e1",
        "depth-job-e2"
      ]
    },
    "websiteSourceId": "depth-e3-home",
    "careersSourceId": "depth-e3-careers",
    "logo": {
      "src": "/images/logos/e3-lithium.svg",
      "alt": "E3 Lithium logo",
      "width": 500,
      "height": 77,
      "onDark": false,
      "sourceUrl": "https://www.e3lithium.ca/_templates/1/source/img/logo.svg",
      "retrieved": "2026-09-30"
    },
    "checkedOn": "2026-09-29"
  },
];

// Each link says what its source establishes: GHGSat names these as kinds of people on its team,
// not as job titles, vacancies or Calgary positions.
export const organizationRoles: OrganizationRole[] = [
  {
    organizationId: "ghgsat",
    roleId: "atmospheric-science",
    establishes: "work-area",
    label: "Work area named by GHGSat",
    kind: "stated",
    sourceIds: ["ghgsat-team"],
    checkedOn: "2026-09-25",
  },
  {
    organizationId: "ghgsat",
    roleId: "satellite-engineering",
    establishes: "work-area",
    label: "Work area named by GHGSat",
    kind: "stated",
    sourceIds: ["ghgsat-team", "ghgsat-about"],
    checkedOn: "2026-09-25",
  },
  {
    organizationId: "ghgsat",
    roleId: "software-data",
    establishes: "work-area",
    label: "Work area named by GHGSat",
    kind: "stated",
    sourceIds: ["ghgsat-team"],
    checkedOn: "2026-09-25",
  },
  {
    "organizationId": "wilder-institute",
    "roleId": "conservation-research",
    "establishes": "job-title",
    "label": "Observed in a 2025 researcher interview",
    "kind": "observed",
    "sourceIds": [
      "depth-wilder-researcher"
    ],
    "checkedOn": "2026-09-29"
  },
  {
    "organizationId": "wilder-institute",
    "roleId": "animal-care",
    "establishes": "job-title",
    "label": "Observed in a 2023 care account and a 2026 posting",
    "kind": "observed",
    "sourceIds": [
      "depth-wilder-care",
      "depth-job-w1"
    ],
    "checkedOn": "2026-09-29"
  },
  {
    "organizationId": "wilder-institute",
    "roleId": "wildlife-veterinary",
    "establishes": "job-title",
    "label": "Observed in a 2023 care-team account",
    "kind": "observed",
    "sourceIds": [
      "depth-wilder-care"
    ],
    "checkedOn": "2026-09-29"
  },
  {
    "organizationId": "e3-lithium",
    "roleId": "process-engineering",
    "establishes": "job-title",
    "label": "Employer posting · experienced engineering role",
    "kind": "observed",
    "sourceIds": [
      "depth-job-e2"
    ],
    "checkedOn": "2026-09-29"
  },
  {
    "organizationId": "e3-lithium",
    "roleId": "process-operations",
    "establishes": "job-title",
    "label": "Employer posting · demonstration operations",
    "kind": "observed",
    "sourceIds": [
      "depth-job-e1"
    ],
    "checkedOn": "2026-09-29"
  },
  {
    "organizationId": "ghgsat",
    "roleId": "commercial-partnerships",
    "establishes": "job-title",
    "label": "Employer posting · London government-market role",
    "kind": "observed",
    "sourceIds": [
      "depth-job-g1"
    ],
    "checkedOn": "2026-09-29"
  },
];
