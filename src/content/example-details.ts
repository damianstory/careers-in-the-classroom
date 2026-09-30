import type { ExampleDetails } from "./types";

// Connected exploration for an example. The classroom story is illustrative: it supports a
// teacher's discussion and is not a lesson plan.
export const exampleDetails: ExampleDetails[] = [
  {
    id: "ghgsat-details",
    exampleSlug: "ghgsat",
    organizationId: "ghgsat",
    story: {
      diagramKind: "methane",
      subtitle: "The physics of light lets a satellite about 500 km up measure a gas no one can see.",
      caption: "An illustrative connection between this unit and real work. Use it to support your classroom discussion.",
      steps: [
        {
          text: "Sunlight contains many wavelengths, including shortwave infrared light our eyes can’t see.",
          kind: "stated",
          sourceIds: ["ghgsat-technology"],
        },
        {
          text: "Methane absorbs some of that light at particular wavelengths, between about 1,630 and 1,675 nanometres.",
          kind: "stated",
          sourceIds: ["ghgsat-technology", "jervis-2021"],
        },
        {
          text: "The satellite’s spectrometer measures sunlight scattered back up from the ground. It sends out no light of its own.",
          kind: "stated",
          sourceIds: ["ghgsat-technology", "jervis-2021"],
        },
        {
          text: "Where methane is present, a little less light arrives at those wavelengths. Analysts combine that dip with wind data to estimate how fast gas is escaping.",
          kind: "interpreted",
          sourceIds: ["ghgsat-technology"],
        },
      ],
      diagramAlt:
        "Sunlight travels down to the ground near an industrial site, reflects, and travels back up through an invisible methane cloud to a satellite. The satellite’s spectrometer splits the light by wavelength. A small graph shows the light received dipping slightly, but not to zero, at the wavelengths methane absorbs.",
      diagramProvenance:
        "Schematic drawn for this page and checked against GHGSat’s technology description and Jervis et al. (2021). Not to scale. Not a GHGSat image.",
      discussion:
        "If a sensor detects no methane, does that prove none is present? What would you want to know about the instrument and the observation conditions?",
    },
    roleIds: ["atmospheric-science", "satellite-engineering", "software-data", "commercial-partnerships"],
    pathwayIds: ["ucalgary-engineering-physics", "ualberta-earth-sciences", "ucalgary-geomatics", "sait-geomatics", "sait-marketing"],
    jobIds: ["ghgsat-emissions-scientist", "muon-calibration-scientist", "ghgsat-backend-developer", "ghgsat-full-stack-developer", "ghgsat-government-business"],
    checkedOn: "2026-09-25",
  },
  {
    "id": "wilder-details",
    "exampleSlug": "wilder-institute",
    "organizationId": "wilder-institute",
    "story": {
      "diagramKind": "owl-recovery",
      "subtitle": "Supporting a vulnerable life stage is an intervention. Measuring recovery requires following what happens next.",
      "caption": "An illustrative connection between population biology and conservation work.",
      "steps": [
        {
          "text": "Wilder temporarily brings vulnerable young burrowing owls into care through their first winter.",
          "kind": "stated",
          "sourceIds": [
            "depth-wilder-program"
          ]
        },
        {
          "text": "Animal-care teams provide daily care while veterinarians monitor health and body condition.",
          "kind": "stated",
          "sourceIds": [
            "depth-wilder-care"
          ]
        },
        {
          "text": "Adults are released in breeding pairs in southeastern Alberta, with supplementary food and monitoring.",
          "kind": "stated",
          "sourceIds": [
            "depth-wilder-program"
          ]
        },
        {
          "text": "To evaluate recovery, ask about survival and reproduction after release, over time and against a useful comparison. Counting released owls answers only part of that question.",
          "kind": "interpreted",
          "sourceIds": [
            "depth-wilder-program"
          ]
        }
      ],
      "diagramAlt": "A four-stage conservation sequence: vulnerable young owls, winter care, spring release in pairs, then monitoring survival and breeding. A feedback arrow returns evidence to future care and release decisions. Release is not the same as population recovery.",
      "diagramProvenance": "Illustrative process schematic created for this page from Wilder’s program and care-team descriptions. It shows no measured outcomes or guaranteed recovery.",
      "discussion": "What would you measure over several years to decide whether this intervention is helping? What comparison would make your conclusion more convincing?"
    },
    "roleIds": [
      "conservation-research",
      "animal-care",
      "wildlife-veterinary"
    ],
    "pathwayIds": [
      "ucalgary-zoology",
      "olds-environment",
      "olds-assistant",
      "olds-vet",
      "ucalgary-dvm"
    ],
    "jobIds": [
      "wilder-animal-care"
    ],
    "checkedOn": "2026-09-29"
  },
  {
    "id": "e3-lithium-details",
    "exampleSlug": "e3-lithium",
    "organizationId": "e3-lithium",
    "story": {
      "diagramKind": "lithium-separation",
      "subtitle": "A separation has to recover the useful material, reach the right purity and work beyond a small test.",
      "caption": "An illustrative connection between solutions chemistry and process development.",
      "steps": [
        {
          "text": "E3’s Clearwater project targets lithium dissolved in underground brine in Alberta.",
          "kind": "stated",
          "sourceIds": [
            "depth-e3-home"
          ]
        },
        {
          "text": "Extraction and downstream treatment separate and purify the material. E3’s process role names membrane treatment, ion exchange and crystallization among the methods it evaluates.",
          "kind": "stated",
          "sourceIds": [
            "depth-job-e2"
          ]
        },
        {
          "text": "Engineers and operators use models, operating readings and demonstration tests to inform equipment and process design.",
          "kind": "stated",
          "sourceIds": [
            "depth-job-e1",
            "depth-job-e2"
          ]
        },
        {
          "text": "Compare recovery and purity alongside water, energy and reliable operation. A demonstration result does not by itself show that a commercial plant is operating.",
          "kind": "interpreted",
          "sourceIds": [
            "depth-job-e2",
            "depth-e3-update"
          ]
        }
      ],
      "diagramAlt": "A conceptual process flow: mixed brine enters a separation stage; a lithium-rich stream continues to purification and conversion while other material follows a separate outlet. Test results feed back into design. The diagram does not specify E3’s equipment or measured recovery.",
      "diagramProvenance": "Conceptual schematic created for this page from E3’s process role and project update. Not a plant design, chemical reaction or measured material balance; commercial production remains planned.",
      "discussion": "If two separation methods recover different amounts of lithium but use different amounts of water and energy, what would you need to compare before choosing one?"
    },
    "roleIds": [
      "process-engineering",
      "process-operations"
    ],
    "pathwayIds": [
      "ucalgary-chemical",
      "sait-chemical",
      "sait-power"
    ],
    "jobIds": [
      "e3-shift-operator",
      "e3-process-engineer",
      "stantec-water-eit"
    ],
    "checkedOn": "2026-09-29"
  },
];
