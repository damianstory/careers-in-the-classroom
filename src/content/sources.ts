import { october20Sources } from "./october20";
import { exampleRecords } from "./example-records";
import type { DatedSource } from "./types";

// Shared source registry for the connected exploration (organizations, roles,
// pathways, job examples, classroom stories). Research record: docs/build/content-ghgsat-research.md.
const checkedOn = "2026-09-25";

export const registry: DatedSource[] = [
  {
    "id": "alx-oct20-07-1",
    "label": "Alberta Energy Regulator — E3 Clearwater application notice (November 2025; proposed facility)",
    "url": "https://static.webapps.aer.ca/pnoa/html/00510304-001.htm",
    "checkedOn": "2026-10-20"
  },
  ...october20Sources,
  { id: "oct19-cbs-home", label: "Canadian Blood Services — official website", url: "https://www.blood.ca/en", checkedOn: "2026-10-19" },
  {
    "id": "oct19-source-1",
    "label": "clynchprosthetics.com — official website",
    "url": "https://clynchprosthetics.com/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-2",
    "label": "clynchprosthetics.com — prosthetic solutions",
    "url": "https://clynchprosthetics.com/prosthetic-solutions/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-3",
    "label": "opcanada.ca — Accredited Programs",
    "url": "https://opcanada.ca/page/Accredited_Programs",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-4",
    "label": "opcanada.ca — Residency Program",
    "url": "https://opcanada.ca/page/Residency_Program",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-5",
    "label": "bcit.ca — prosthetics and orthotics diploma full time 7100diplt",
    "url": "https://www.bcit.ca/programs/prosthetics-and-orthotics-diploma-full-time-7100diplt/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-6",
    "label": "westech-ind.com — quality measurement solutions",
    "url": "https://westech-ind.com/quality-measurement-solutions/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-7",
    "label": "westech-ind.com — service support",
    "url": "https://westech-ind.com/service-support/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-8",
    "label": "westech-ind.com — careers",
    "url": "https://westech-ind.com/about/careers/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-9",
    "label": "albertacheese.com — official website",
    "url": "https://albertacheese.com/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-10",
    "label": "agriculture.canada.ca — canadian cheese manufacturers directory",
    "url": "https://agriculture.canada.ca/en/canadas-agriculture-sectors/animal-industry/canadian-dairy-information-centre/canadian-cheese-manufacturers-directory?wbdisable=true",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-11",
    "label": "gaylea.com — alberta cheese",
    "url": "https://www.gaylea.com/news/foodservice/alberta-cheese",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-12",
    "label": "books.lib.uoguelph.ca — 8 1 milk structure",
    "url": "https://books.lib.uoguelph.ca/cheesemakingtechnologyebook/chapter/8-1-milk-structure/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-13",
    "label": "mvprinters.com — capabilities",
    "url": "https://mvprinters.com/capabilities/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-14",
    "label": "mvprinters.com — careers",
    "url": "https://mvprinters.com/careers/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-15",
    "label": "alis.alberta.ca — printing press operator",
    "url": "https://alis.alberta.ca/occinfo/occupations-in-alberta/occupation-profiles/printing-press-operator/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-16",
    "label": "sait.ca — interactive design graphic design",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/interactive-design-graphic-design",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-17",
    "label": "calgarymetal.com — official website",
    "url": "https://calgarymetal.com/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-18",
    "label": "calgarymetal.com — material acceptance",
    "url": "https://calgarymetal.com/calgary-metal-recycling-services/material-acceptance/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-19",
    "label": "calgarymetal.com — ferrous metal recycling",
    "url": "https://calgarymetal.com/calgary-metal-buying-and-selling/ferrous-metal-recycling/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-20",
    "label": "calgarymetal.com — non ferrous metal recycling",
    "url": "https://calgarymetal.com/calgary-metal-buying-and-selling/non-ferrous-metal-recycling/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-21",
    "label": "calgary.ca — metal scrap metal and unusable metal items.html",
    "url": "https://www.calgary.ca/waste/what-goes-where/metal-scrap-metal-and-unusable-metal-items.html",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-22",
    "label": "aeromag.ca — en",
    "url": "https://aeromag.ca/en/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-23",
    "label": "aeromag.ca — aircraft deicing",
    "url": "https://aeromag.ca/en/services/aircraft-deicing/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-24",
    "label": "aeromag.ca — careers",
    "url": "https://aeromag.ca/en/careers/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-25",
    "label": "aeromag.ca — seasonal deicing technician",
    "url": "https://aeromag.ca/en/careers/seasonal-deicing-technician?airport=YYC&position=Seasonal%20Deicing%20Technician",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-26",
    "label": "tc.canada.ca — guidelines aircraft ground icing operations tp 14052",
    "url": "https://tc.canada.ca/en/aviation/publications/guidelines-aircraft-ground-icing-operations-tp-14052",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-27",
    "label": "luxwindows.com — official website",
    "url": "https://www.luxwindows.com/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-28",
    "label": "luxwindows.com — pvc",
    "url": "https://www.luxwindows.com/windows/pvc/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-29",
    "label": "luxwindows.com — window installation",
    "url": "https://www.luxwindows.com/renovations/window-installation/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-30",
    "label": "luxwindows.com — renovation process",
    "url": "https://www.luxwindows.com/renovations/renovation-process/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-31",
    "label": "luxwindows.com — energy savings",
    "url": "https://www.luxwindows.com/glass-performance/energy-savings/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-32",
    "label": "sait.ca — glazier",
    "url": "https://www.sait.ca/apprenticeships-and-trades/programs/glazier",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-33",
    "label": "magnaengineering.ca — official website",
    "url": "https://www.magnaengineering.ca/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-34",
    "label": "magnaengineering.ca — resources",
    "url": "https://www.magnaengineering.ca/resources",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-35",
    "label": "magnaengineering.ca — livingston stormpark",
    "url": "https://www.magnaengineering.ca/magnablog/livingston-stormpark",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-36",
    "label": "magnaengineering.ca — meet the team",
    "url": "https://www.magnaengineering.ca/meet-the-team",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-37",
    "label": "magnaengineering.ca — careers",
    "url": "https://www.magnaengineering.ca/careers",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-38",
    "label": "magnaengineering.ca — intermediate stormwater engineer 1",
    "url": "https://www.magnaengineering.ca/intermediate-stormwater-engineer-1",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-39",
    "label": "blood.ca — M2053 CalgaryBook 2022 02 11 EN.pdf",
    "url": "https://www.blood.ca/sites/default/files/M2053_CalgaryBook_2022-02-11-EN.pdf",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-40",
    "label": "blood.ca — designed excellence calgary operations facility book",
    "url": "https://www.blood.ca/en/about-us/publications-and-reports/designed-excellence-calgary-operations-facility-book",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-41",
    "label": "blood.ca — audits 2025 2026",
    "url": "https://www.blood.ca/en/about-us/reports-and-publications/audits-2025-2026",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-42",
    "label": "blood.ca — laboratory services",
    "url": "https://www.blood.ca/en/hospital-services/laboratory-services",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-43",
    "label": "sait.ca — medical laboratory technology",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/medical-laboratory-technology",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-44",
    "label": "sait.ca — medical laboratory assistant",
    "url": "https://www.sait.ca/programs-and-courses/certificates/medical-laboratory-assistant",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-45",
    "label": "enerflex.com — contact us",
    "url": "https://www.enerflex.com/contact-us/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-46",
    "label": "enerflex.com — company",
    "url": "https://www.enerflex.com/company/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-47",
    "label": "enerflex.com — careers",
    "url": "https://www.enerflex.com/careers/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-48",
    "label": "enerflex.com — compression",
    "url": "https://www.enerflex.com/equipment/compression/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-49",
    "label": "spartancontrols.com — valve services",
    "url": "https://www.spartancontrols.com/services/valve-services/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-50",
    "label": "spartancontrols.com — careers",
    "url": "https://www.spartancontrols.com/careers/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-51",
    "label": "canadamalting.com — official website",
    "url": "https://canadamalting.com/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-52",
    "label": "canadamalting.com — contactez nous",
    "url": "https://canadamalting.com/fr/contactez-nous/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-53",
    "label": "canadamalting.com — process",
    "url": "https://canadamalting.com/process/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-54",
    "label": "canadamalting.com — careers",
    "url": "https://canadamalting.com/careers/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-55",
    "label": "ualberta.ca — bachelor of science in nutrition and food science food science and technology specialization.html",
    "url": "https://www.ualberta.ca/en/undergraduate-programs/bachelor-of-science-in-nutrition-and-food-science-food-science-and-technology-specialization.html",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-56",
    "label": "ptwenergy.com — ptw business feature ptw panel shop",
    "url": "https://www.ptwenergy.com/ptw-business-feature-ptw-panel-shop/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-57",
    "label": "ptwenergy.com — ptw calgary panel shop panel construction",
    "url": "https://www.ptwenergy.com/ptw-calgary-panel-shop-panel-construction/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-58",
    "label": "ptwenergy.com — fabrication services",
    "url": "https://www.ptwenergy.com/fabrication-services/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-59",
    "label": "ptwenergy.com — careers",
    "url": "https://www.ptwenergy.com/careers/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-60",
    "label": "sait.ca — electrician",
    "url": "https://www.sait.ca/apprenticeships-and-trades/programs/electrician",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-61",
    "label": "marlowdesign.ca — official website",
    "url": "https://marlowdesign.ca/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-62",
    "label": "marlowdesign.ca — faq",
    "url": "https://marlowdesign.ca/pages/faq",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-63",
    "label": "marlowdesign.ca — design process",
    "url": "https://marlowdesign.ca/pages/design-process",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-64",
    "label": "marlowdesign.ca — jewellery designer full time careers",
    "url": "https://marlowdesign.ca/pages/jewellery-designer-full-time-careers",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-65",
    "label": "auarts.ca — jewellery and metals",
    "url": "https://www.auarts.ca/learn-with-us/program-areas/jewellery-and-metals",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-66",
    "label": "abcbees.ca — official website",
    "url": "https://abcbees.ca/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-67",
    "label": "abcbees.ca — calgary nucs",
    "url": "https://abcbees.ca/product/calgary-nucs/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-68",
    "label": "abcbees.ca — courses",
    "url": "https://abcbees.ca/courses/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-69",
    "label": "abcbees.ca — beekeeping seasonal indicators",
    "url": "https://abcbees.ca/blog/beekeeping-seasonal-indicators/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-70",
    "label": "abcbees.ca — ongoing beekeeping tasks",
    "url": "https://abcbees.ca/blog/ongoing-beekeeping-tasks/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-71",
    "label": "abcbees.buzz — level 1 beekeeping",
    "url": "https://www.abcbees.buzz/courses/level-1-beekeeping",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-72",
    "label": "clynchprosthetics.com — resources",
    "url": "https://clynchprosthetics.com/resources/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-73",
    "label": "opcanada.ca — Registration",
    "url": "https://opcanada.ca/page/Registration",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-74",
    "label": "aeromag.ca — about us",
    "url": "https://aeromag.ca/en/about-us/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-75",
    "label": "ptwenergy.com — electrical construction",
    "url": "https://www.ptwenergy.com/tag/electrical-construction/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-76",
    "label": "marlowdesign.ca — careers at marlow design",
    "url": "https://marlowdesign.ca/pages/careers-at-marlow-design",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-77",
    "label": "abcbees.ca — beekeeping regulations",
    "url": "https://abcbees.ca/blog/beekeeping-regulations/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-78",
    "label": "alis.alberta.ca — municipal recycling waste handler",
    "url": "https://alis.alberta.ca/occinfo/occupations-in-alberta/occupation-profiles/municipal-recycling-waste-handler/",
    "checkedOn": "2026-10-19"
  },
  {
    "id": "oct19-source-79",
    "label": "George Brown Polytechnic — Orthotic/Prosthetic Technician S102",
    "url": "https://www.georgebrown.ca/programs/orthotic-prosthetic-technician-program-s102",
    "checkedOn": "2026-10-19"
  },

  {"id": "oct18-home-opisystems", "label": "OPIsystems (OPI) — official website", "url": "https://opisystems.com/", "checkedOn": "2026-10-18"},
  {"id": "oct18-home-nanotess", "label": "NanoTess — official website", "url": "https://nanotess.com/", "checkedOn": "2026-10-18"},
  {"id": "oct18-home-efw-radiology", "label": "EFW Radiology — official website", "url": "https://efw.ca/", "checkedOn": "2026-10-18"},
  {"id": "oct18-home-alberta-boot-company", "label": "Alberta Boot Company — official website", "url": "https://albertaboot.ca/", "checkedOn": "2026-10-18"},
  {"id": "oct18-home-ffa-acoustics", "label": "FFA Consultants in Acoustics and Noise Control — official website", "url": "https://ffaacoustics.ca/", "checkedOn": "2026-10-18"},
  {"id": "oct18-home-enmax-shepard", "label": "ENMAX — official website", "url": "https://enmax.com/", "checkedOn": "2026-10-18"},
  {"id": "oct18-home-congebec", "label": "Congebec — official website", "url": "https://congebec.com/", "checkedOn": "2026-10-18"},
  {"id": "oct18-home-fluid-energy", "label": "Fluid Energy (Dorf Ketal) — official website", "url": "https://fluidenergygroup.com/", "checkedOn": "2026-10-18"},

  {
    "id": "oct18-source-1",
    "label": "standens.com — official website",
    "url": "https://standens.com/",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-2",
    "label": "standens.com — leaf springs",
    "url": "https://standens.com/leaf-springs/",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-3",
    "label": "standens.com — standens ordering and service announcement",
    "url": "https://standens.com/standens-ordering-and-service-announcement/",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-4",
    "label": "standens.com — careers",
    "url": "https://standens.com/careers/",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-5",
    "label": "SAIT — Mechanical Engineering Technology",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/mechanical-engineering-technology",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-6",
    "label": "SAIT — Machinist",
    "url": "https://www.sait.ca/apprenticeships-and-trades/programs/machinist",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-7",
    "label": "alberta.ca — edc physics20 30 performance standards.pdf",
    "url": "https://www.alberta.ca/system/files/custom_downloaded_images/edc-physics20-30-performance-standards.pdf",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-8",
    "label": "opisystems.com — contact",
    "url": "https://opisystems.com/contact/",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-9",
    "label": "opisystems.com — from an ounce of prevention to every grain to market",
    "url": "https://opisystems.com/from-an-ounce-of-prevention-to-every-grain-to-market/",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-10",
    "label": "opisystems.com — for commercial",
    "url": "https://opisystems.com/solutions/for-commercial/",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-11",
    "label": "opisystems.com — co2 monitoring",
    "url": "https://opisystems.com/co2-monitoring/",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-12",
    "label": "opisystems.bamboohr.com — careers",
    "url": "https://opisystems.bamboohr.com/careers",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-13",
    "label": "SAIT — Instrumentation Engineering Technology",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/instrumentation-engineering-technology",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-14",
    "label": "education.alberta.ca — bio203007.pdf",
    "url": "https://education.alberta.ca/media/159727/bio203007.pdf",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-15",
    "label": "search.open.canada.ca — nrc cnrc,172 2022 2023 Q4 1000203,current",
    "url": "https://search.open.canada.ca/grants/record/nrc-cnrc%2C172-2022-2023-Q4-1000203%2Ccurrent",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-16",
    "label": "nanotess.com — nanotess secures government of canada funding",
    "url": "https://www.nanotess.com/blogs/news/nanotess-secures-government-of-canada-funding",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-17",
    "label": "nanotess.com — stampede rodeo uses nanosalv",
    "url": "https://www.nanotess.com/blogs/news/stampede-rodeo-uses-nanosalv",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-18",
    "label": "nanotess.com — careers",
    "url": "https://www.nanotess.com/pages/careers",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-19",
    "label": "SAIT — Chemical Laboratory Technology",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/chemical-laboratory-technology",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-20",
    "label": "University of Calgary — Chemistry or Biochemistry",
    "url": "https://science.ucalgary.ca/current-students/undergraduate/program-guides",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-21",
    "label": "education.alberta.ca — chem2030_07.pdf",
    "url": "https://education.alberta.ca/media/159730/chem2030_07.pdf",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-22",
    "label": "globalte.com — official website",
    "url": "https://www.globalte.com/",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-23",
    "label": "globalte.com — safety at gpt",
    "url": "https://www.globalte.com/resources/safety-at-gpt",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-24",
    "label": "globalte.com — the importance of fire drills",
    "url": "https://www.globalte.com/resources/the-importance-of-fire-drills",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-25",
    "label": "globalte.com — tegs explained solid state remote power for sites that cant afford downtime",
    "url": "https://www.globalte.com/resources/tegs-explained-solid-state-remote-power-for-sites-that-cant-afford-downtime",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-26",
    "label": "globalte.com — careers",
    "url": "https://www.globalte.com/about/careers",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-27",
    "label": "education.alberta.ca — science10.pdf",
    "url": "https://education.alberta.ca/media/159715/science10.pdf",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-28",
    "label": "hifieng.com — team",
    "url": "https://hifieng.com/team/",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-29",
    "label": "hifieng.com — hifi announces new advanced pig monitoring service",
    "url": "https://hifieng.com/news/hifi-announces-new-advanced-pig-monitoring-service/",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-30",
    "label": "hifieng.com — official website",
    "url": "https://hifieng.com/",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-31",
    "label": "hifieng.com — careers",
    "url": "https://hifieng.com/careers/",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-32",
    "label": "University of Calgary — Mechanical Engineering",
    "url": "https://schulich.ucalgary.ca/future-students/undergraduate/programs/bsc-mechanical-engineering",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-33",
    "label": "burnco.com — locations",
    "url": "https://www.burnco.com/locations/",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-34",
    "label": "burnco.com — ready mix",
    "url": "https://www.burnco.com/products/ready-mix/",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-35",
    "label": "burnco.com — careers",
    "url": "https://www.burnco.com/careers/",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-36",
    "label": "SAIT — Business Administration — Supply Chain Management",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/business-administration-supply-chain-management",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-37",
    "label": "efw.ca — general ultrasound",
    "url": "https://www.efw.ca/services/general-ultrasound/",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-38",
    "label": "efw.ca — uxborough 17",
    "url": "https://www.efw.ca/locations/uxborough-17/",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-39",
    "label": "efw.ca — commonly recruited positions",
    "url": "https://www.efw.ca/careers/commonly-recruited-positions/",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-40",
    "label": "efw.ca — careers",
    "url": "https://www.efw.ca/careers/",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-41",
    "label": "SAIT — Diagnostic Medical Sonography",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/diagnostic-medical-sonography",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-42",
    "label": "SAIT — Medical Office Assistant and Unit Clerk",
    "url": "https://www.sait.ca/programs-and-courses/certificates/medical-office-assistant-and-unit-clerk",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-43",
    "label": "albertaboot.ca — calgary",
    "url": "https://www.albertaboot.ca/pages/calgary",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-44",
    "label": "albertaboot.ca — custom boots",
    "url": "https://www.albertaboot.ca/pages/custom-boots",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-45",
    "label": "Alberta Boot Company — Learning through retail and production experience",
    "url": "https://www.albertaboot.ca/blogs/blog/the-master-boot-maker-meet-antonio-juarez",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-46",
    "label": "Alberta University of the Arts — Fibre",
    "url": "https://www.auarts.ca/learn-with-us/program-areas/fibre",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-47",
    "label": "ffaacoustics.ca — about us",
    "url": "https://www.ffaacoustics.ca/about-us",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-48",
    "label": "ffaacoustics.ca — architectural",
    "url": "https://www.ffaacoustics.ca/architectural",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-49",
    "label": "enmax.com — natural gas fuelled",
    "url": "https://www.enmax.com/generation-and-wires/generation/natural-gas-fuelled",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-50",
    "label": "enmax.com — generation",
    "url": "https://www.enmax.com/generation-and-wires/generation",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-51",
    "label": "enmax.com — careers",
    "url": "https://www.enmax.com/careers/",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-52",
    "label": "alis.alberta.ca — power engineer",
    "url": "https://alis.alberta.ca/occinfo/occupations-in-alberta/occupation-profiles/power-engineer/",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-53",
    "label": "SAIT — Power Engineering Technology",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/power-engineering-technology",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-54",
    "label": "mobiltex.com — official website",
    "url": "https://www.mobiltex.com/",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-55",
    "label": "mobiltex.com — product training",
    "url": "https://www.mobiltex.com/support/product-training/",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-56",
    "label": "mobiltex.com — what is cathodic protection cp monitoring",
    "url": "https://www.mobiltex.com/what-is-cathodic-protection-cp-monitoring/",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-57",
    "label": "mobiltex.com — industry driven innovation",
    "url": "https://www.mobiltex.com/trust/industry-driven-innovation/",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-58",
    "label": "mobiltex.com — careers",
    "url": "https://www.mobiltex.com/company/careers/",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-59",
    "label": "icewestern.com — official website",
    "url": "https://icewestern.com/",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-60",
    "label": "icewestern.com — Glycol_Runaround.pdf",
    "url": "https://www.icewestern.com/wp-content/uploads/catalogue_2011/M_Glycol_Runaround/Glycol_Runaround.pdf",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-61",
    "label": "icewestern.com — careers",
    "url": "https://icewestern.com/careers",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-62",
    "label": "SAIT — Refrigeration and Air Conditioning Mechanic",
    "url": "https://www.sait.ca/apprenticeships-and-trades/programs/refrigeration-and-air-conditioning-mechanic",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-63",
    "label": "congebec.com — locations",
    "url": "https://congebec.com/en/locations/",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-64",
    "label": "congebec.com — en",
    "url": "https://congebec.com/en/",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-65",
    "label": "congebec.com — careers 3",
    "url": "https://congebec.com/en/careers-3/",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-66",
    "label": "congebec.com — job postings",
    "url": "https://congebec.com/en/job-postings/",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-67",
    "label": "fluidenergygroup.com — fluid our story",
    "url": "https://www.fluidenergygroup.com/fluid-our-story",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-68",
    "label": "fluidenergygroup.com — official website",
    "url": "https://www.fluidenergygroup.com/",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-69",
    "label": "fluidenergygroup.com — hcr 7000 product detail",
    "url": "https://www.fluidenergygroup.com/hcr-7000-product-detail",
    "checkedOn": "2026-10-18"
  },
  {
    "id": "oct18-source-70",
    "label": "fluidenergygroup.com — fluidenergy jobs",
    "url": "https://www.fluidenergygroup.com/fluidenergy-jobs",
    "checkedOn": "2026-10-18"
  },

  ...exampleRecords.flatMap((r) => r.sources),
  // Cited by more than one example, or by roles and pathways.
  {
    id: "oct17-source-6",
    label: "Alberta Biology 20–30 program: water use and ecosystems",
    url: "https://education.alberta.ca/media/159727/bio203007.pdf",
    checkedOn: "2026-10-17"
  },
  {
    id: "oct17-source-7",
    label: "University of Calgary — Master of Landscape Architecture",
    url: "https://sapl.ucalgary.ca/future-students/graduate/master-landscape-architecture-mla",
    checkedOn: "2026-10-17"
  },
  {
    id: "oct17-source-8",
    label: "SAIT — Geomatics Engineering Technology",
    url: "https://www.sait.ca/programs-and-courses/diplomas/geomatics-engineering-technology",
    checkedOn: "2026-10-17"
  },
  {
    id: "oct17-source-9",
    label: "SAIT — Environmental Technology",
    url: "https://www.sait.ca/programs-and-courses/diplomas/environmental-technology",
    checkedOn: "2026-10-17"
  },
  {
    id: "oct17-source-14",
    label: "Alberta Physics 20–30 performance standards: A1, B1 and C1",
    url: "https://www.alberta.ca/system/files/custom_downloaded_images/edc-physics20-30-performance-standards.pdf",
    checkedOn: "2026-10-17"
  },
  {
    id: "oct17-source-15",
    label: "University of Calgary — Civil Engineering",
    url: "https://schulich.ucalgary.ca/future-students/undergraduate/programs/bsc-civil-engineering",
    checkedOn: "2026-10-17"
  },
  {
    id: "oct17-source-16",
    label: "SAIT — Civil Engineering Technology, Municipal Major",
    url: "https://www.sait.ca/programs-and-courses/diplomas/civil-engineering-technology-municipal",
    checkedOn: "2026-10-17"
  },
  {
    id: "oct17-source-17",
    label: "SAIT — Architectural Technologies",
    url: "https://www.sait.ca/programs-and-courses/diplomas/architectural-technologies",
    checkedOn: "2026-10-17"
  },
  {
    id: "oct17-source-21",
    label: "SAIT — Instrumentation Engineering Technology",
    url: "https://www.sait.ca/programs-and-courses/diplomas/instrumentation-engineering-technology",
    checkedOn: "2026-10-17"
  },
  {
    id: "oct17-source-22",
    label: "SAIT — Chemical Laboratory Technology",
    url: "https://www.sait.ca/programs-and-courses/diplomas/chemical-laboratory-technology",
    checkedOn: "2026-10-17"
  },
  {
    id: "oct17-source-23",
    label: "SAIT — Mechanical Engineering Technology",
    url: "https://www.sait.ca/programs-and-courses/diplomas/mechanical-engineering-technology",
    checkedOn: "2026-10-17"
  },
  {
    id: "oct17-source-27",
    label: "AUArts — Bachelor of Design",
    url: "https://www.auarts.ca/program-areas/undergraduate/bachelor-of-design-bdes",
    checkedOn: "2026-10-17"
  },
  {
    id: "oct17-source-28",
    label: "SAIT — Film and Video Production",
    url: "https://www.sait.ca/programs-and-courses/diplomas/film-and-video-production",
    checkedOn: "2026-10-17"
  },
  {
    id: "oct17-source-32",
    label: "CPKC — company/project evidence 4",
    url: "https://careers.cpr.ca/job/Montreal-Rail-Traffic-Controller-QC-H4W-2J9/595098117/",
    checkedOn: "2026-10-17"
  },
  {
    id: "oct17-source-33",
    label: "SAIT — Railway Conductor",
    url: "https://www.sait.ca/programs-and-courses/certificates/railway-conductor",
    checkedOn: "2026-10-17"
  },
  {
    id: "oct17-source-34",
    label: "SAIT — Software Development",
    url: "https://www.sait.ca/programs-and-courses/diplomas/software-development",
    checkedOn: "2026-10-17"
  },
  {
    id: "oct17-source-38",
    label: "SAIT — Integrated Water Management",
    url: "https://www.sait.ca/programs-and-courses/diplomas/integrated-water-management",
    checkedOn: "2026-10-17"
  },
  {
    id: "oct17-source-43",
    label: "Alberta Chemistry 20–30 program: solutions and concentration",
    url: "https://education.alberta.ca/media/159730/chem2030_07.pdf",
    checkedOn: "2026-10-17"
  },
  {
    id: "oct17-source-44",
    label: "University of Calgary — Chemical Engineering",
    url: "https://schulich.ucalgary.ca/future-students/undergraduate/programs/bsc-chemical-engineering",
    checkedOn: "2026-10-17"
  },
  {
    id: "oct17-source-51",
    label: "Alberta Science 10 program: inquiry skills and technological systems",
    url: "https://education.alberta.ca/media/159715/science10.pdf",
    checkedOn: "2026-10-17"
  },
  {
    id: "oct17-source-56",
    label: "SAIT — Baking and Pastry Arts",
    url: "https://www.sait.ca/programs-and-courses/diplomas/baking-and-pastry-arts",
    checkedOn: "2026-10-17"
  },
  {
    id: "oct17-source-57",
    label: "Alberta Baker apprenticeship education",
    url: "https://tradesecrets.alberta.ca/SOURCES/PDFS/curriculum_guides/024_outline.pdf",
    checkedOn: "2026-10-17"
  },
  {
    id: "expansion-source-5",
    label: "Alberta Chemistry 20–30 program of studies (updated 2014)",
    url: "https://education.alberta.ca/media/159730/chem2030_07.pdf",
    checkedOn: "2026-10-15"
  },
  {
    id: "expansion-source-6",
    label: "SAIT — Chemical Laboratory Technology",
    url: "https://www.sait.ca/programs-and-courses/diplomas/chemical-laboratory-technology",
    checkedOn: "2026-10-15"
  },
  {
    id: "expansion-source-7",
    label: "University of Calgary — Biochemistry",
    url: "https://science.ucalgary.ca/future-students/undergraduate/programs",
    checkedOn: "2026-10-15"
  },
  {
    id: "expansion-source-8",
    label: "University of Calgary — Chemical Engineering",
    url: "https://schulich.ucalgary.ca/future-students/undergraduate/programs/bsc-chemical-engineering",
    checkedOn: "2026-10-15"
  },
  {
    id: "expansion-source-12",
    label: "Alberta Physics 20–30 performance standards",
    url: "https://www.alberta.ca/system/files/custom_downloaded_images/edc-physics20-30-performance-standards.pdf",
    checkedOn: "2026-10-15"
  },
  {
    id: "expansion-source-13",
    label: "SAIT — Electrical Engineering Technology",
    url: "https://www.sait.ca/programs-and-courses/diplomas/electrical-engineering-technology",
    checkedOn: "2026-10-15"
  },
  {
    id: "expansion-source-14",
    label: "SAIT — Software Development",
    url: "https://www.sait.ca/programs-and-courses/diplomas/software-development",
    checkedOn: "2026-10-15"
  },
  {
    id: "expansion-source-18",
    label: "SAIT — Mechanical Engineering Technology",
    url: "https://www.sait.ca/programs-and-courses/diplomas/mechanical-engineering-technology",
    checkedOn: "2026-10-15"
  },
  {
    id: "expansion-source-19",
    label: "SAIT — Machinist",
    url: "https://www.sait.ca/apprenticeships-and-trades/programs/machinist",
    checkedOn: "2026-10-15"
  },
  {
    id: "expansion-source-20",
    label: "SAIT — Instrumentation Engineering Technology",
    url: "https://www.sait.ca/programs-and-courses/diplomas/instrumentation-engineering-technology",
    checkedOn: "2026-10-15"
  },
  {
    id: "expansion-source-25",
    label: "Calgary Board of Education: Science 10/20/30 course topics",
    url: "https://eps.cbe.ab.ca/science-10-20-30.aspx",
    checkedOn: "2026-10-15"
  },
  {
    id: "expansion-source-30",
    label: "AME licensing overview",
    url: "https://tc.canada.ca/en/aviation/licensing-aircraft-maintenance-engineers-ames/obtaining-aircraft-maintenance-engineer-ame-licence",
    checkedOn: "2026-10-15"
  },
  {
    id: "expansion-source-31",
    label: "SAIT — Aircraft Maintenance Engineers Technology",
    url: "https://www.sait.ca/programs-and-courses/diplomas/aircraft-maintenance-engineers-technology",
    checkedOn: "2026-10-15"
  },
  {
    id: "expansion-source-32",
    label: "SAIT — Avionics Technology",
    url: "https://www.sait.ca/programs-and-courses/diplomas/avionics-technology",
    checkedOn: "2026-10-15"
  },
  {
    id: "expansion-source-37",
    label: "Calgary Board of Education: Biology 20/30 course topics",
    url: "https://eps.cbe.ab.ca/biology-20-30.aspx",
    checkedOn: "2026-10-15"
  },
  {
    id: "expansion-source-42",
    label: "SAIT — Geomatics Engineering Technology",
    url: "https://www.sait.ca/programs-and-courses/diplomas/geomatics-engineering-technology",
    checkedOn: "2026-10-15"
  },
  {
    id: "expansion-source-46",
    label: "University of Calgary — Geology",
    url: "https://science.ucalgary.ca/earth/future-students/undergraduate/earth-science",
    checkedOn: "2026-10-15"
  },
  {
    id: "expansion-source-48",
    label: "SAIT — Industrial Mechanic (Millwright)",
    url: "https://www.sait.ca/apprenticeships-and-trades/programs/industrial-mechanic-millwright",
    checkedOn: "2026-10-15"
  },
  {
    id: "expansion-source-52",
    label: "SAIT — Welder",
    url: "https://www.sait.ca/apprenticeships-and-trades/programs/welder",
    checkedOn: "2026-10-15"
  },
  {
    id: "expansion-source-63",
    label: "Alberta Science 10 program (government-hosted copy): inquiry skills, pp. 8–10",
    url: "https://www.gov.nu.ca/sites/default/files/documents/2024-10/Science_10__Alberta_2005_.pdf",
    checkedOn: "2026-10-15"
  },
  {
    id: "expansion-source-67",
    label: "University of Calgary — Electrical Engineering",
    url: "https://schulich.ucalgary.ca/future-students/undergraduate/programs/majors",
    checkedOn: "2026-10-15"
  },
  { id: "ghgsat-home", label: "GHGSat home page", url: "https://www.ghgsat.com/", checkedOn },
  { id: "ghgsat-about", label: "GHGSat: About us", url: "https://www.ghgsat.com/about-us/", checkedOn },
  { id: "ghgsat-team", label: "GHGSat: Our team", url: "https://www.ghgsat.com/ghgsat-team/", checkedOn },
  { id: "ghgsat-contact", label: "GHGSat: Offices", url: "https://www.ghgsat.com/contact/", checkedOn },
  { id: "ghgsat-technology", label: "GHGSat: Technology", url: "https://www.ghgsat.com/technology/", checkedOn },
  { id: "ghgsat-constellation", label: "GHGSat: Satellite constellation", url: "https://www.ghgsat.com/technology/satellite-constellation/", checkedOn },
  { id: "ghgsat-careers", label: "GHGSat careers board", url: "https://apply.workable.com/ghgsat/", checkedOn },
  { id: "jervis-2021", label: "Jervis et al. 2021, The GHGSat-D imaging spectrometer (Atmos. Meas. Tech.)", url: "https://amt.copernicus.org/articles/14/2127/2021/", checkedOn },
  { id: "job-ghgsat-emissions", label: "Remote Emissions Scientist, GHGSat (copy on Talent.com)", url: "https://ca.talent.com/view?id=623142164046743621", checkedOn },
  { id: "job-ghgsat-backend", label: "Senior Backend Developer - Spectra, GHGSat", url: "https://apply.workable.com/ghgsat/j/32DA8F3BEC/", checkedOn },
  { id: "job-ghgsat-fullstack", label: "Senior Full Stack Web Developer - Spectra, GHGSat", url: "https://apply.workable.com/ghgsat/j/703FE3851D/", checkedOn },
  { id: "job-muon-calibration", label: "Senior Instrument Scientist, Calibration Testing, Muon Space", url: "https://job-boards.greenhouse.io/muonspace/jobs/5248812007", checkedOn },
  { id: "ucalgary-engphys", label: "UCalgary Engineering Physics", url: "https://schulich.ucalgary.ca/departments-centres/departments-and-programs-overview/engineering-physics", checkedOn },
  { id: "ucalgary-geomatics", label: "UCalgary Geomatics Engineering", url: "https://www.ucalgary.ca/future-students/undergraduate/explore-programs/geomatics-engineering", checkedOn },
  { id: "sait-geomatics", label: "SAIT Geomatics Engineering Technology", url: "https://www.sait.ca/programs-and-courses/diplomas/geomatics-engineering-technology", checkedOn },
  { id: "ualberta-earth", label: "UAlberta BSc, Earth Sciences major", url: "https://www.ualberta.ca/en/undergraduate-programs/bachelor-of-science-with-major-earth-sciences.html", checkedOn },
  {
    "id": "depth-wilder-about",
    "label": "Wilder Institute: About Wilder",
    "url": "https://wilderinstitute.org/about-wilder/",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-wilder-contact",
    "label": "Wilder Institute: offices",
    "url": "https://wilderinstitute.org/contact/",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-wilder-program",
    "label": "Wilder Institute: burrowing owl program",
    "url": "https://wilderinstitute.org/program/burrowing-owl-program/",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-wilder-researcher",
    "label": "Wilder Institute: population ecologist interview (2025)",
    "url": "https://wilderinstitute.org/2025/07/21/head-starting-burrowing-owls-for-a-wild-future/",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-wilder-care",
    "label": "Wilder Institute: owl care team (2023)",
    "url": "https://wilderinstitute.org/blog/100th-owl-returns-to-the-prairies/",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-e3-home",
    "label": "E3 Lithium: company and Clearwater project",
    "url": "https://www.e3lithium.ca/",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-e3-update",
    "label": "E3 Lithium: Clearwater status update, 29 September 2026",
    "url": "https://e3lithium.ca/newsroom/news-releases/e3-lithium-provides-status-update-on-clearwater-project",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-e3-careers",
    "label": "E3 Lithium: careers",
    "url": "https://www.e3lithium.ca/recruitment/",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-sait-chemical",
    "label": "SAIT: Chemical Engineering Technology",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/chemical-engineering-technology",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-sait-power",
    "label": "SAIT: Power Engineering Technology",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/power-engineering-technology",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-ucalgary-chemical",
    "label": "UCalgary: Chemical Engineering BSc",
    "url": "https://schulich.ucalgary.ca/future-students/undergraduate/programs/bsc-chemical-engineering",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-olds-environment",
    "label": "Olds College: Environmental Science and Technology",
    "url": "https://www.oldscollege.ca/programs/areas-of-interest/land-environment/environmental-science-technology.html",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-olds-vet",
    "label": "Olds College: Veterinary Technology",
    "url": "https://www.oldscollege.ca/programs/areas-of-interest/animal-health/veterinary-technology-diploma.html",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-olds-assistant",
    "label": "Olds College: Veterinary Technical Assistant",
    "url": "https://www.oldscollege.ca/programs/areas-of-interest/animal-health/veterinary-technical-assistant-certificate.html",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-ucalgary-dvm",
    "label": "UCalgary: Doctor of Veterinary Medicine",
    "url": "https://vet.ucalgary.ca/future-students/dvm-students-undergraduate-program/dvm-program",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-ucalgary-dvm-entry",
    "label": "UCalgary: DVM admission requirements",
    "url": "https://vet.ucalgary.ca/future-students/dvm-students-undergraduate-program/admission-requirements",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-sait-marketing",
    "label": "SAIT: Business Administration – Marketing",
    "url": "https://www.sait.ca/programs-and-courses/diplomas/business-administration-marketing",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-ucalgary-zoology",
    "label": "UCalgary: Zoology BSc",
    "url": "https://www.ucalgary.ca/future-students/undergraduate/explore-programs/zoology",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-job-e1",
    "label": "E3 Lithium: Shift Operator",
    "url": "https://www.e3lithium.ca/_resources/careers/Shift-Operators.pdf?v=092911",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-job-e2",
    "label": "E3 Lithium: Intermediate Process Engineer",
    "url": "https://www.e3lithium.ca/_resources/careers/Intermediate-Process-Engineer.pdf?v=092911",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-job-e3",
    "label": "Stantec: Process Engineer in Training- Water",
    "url": "https://hdhl.fa.us6.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1/job/1007312",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-job-g1",
    "label": "GHGSat: Business Development Manager (Government)",
    "url": "https://ghgsat.bamboohr.com/careers/204",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "depth-job-w1",
    "label": "Wilder Institute: Animal Care Technician (On-Call in Strathmore, AB)",
    "url": "https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=21776daf-f5d6-445a-8284-be1d53c78d12&jobId=24852",
    "checkedOn": "2026-09-29"
  },
  {
    "id": "weekly-oct05-e1",
    "label": "AGAT Laboratories: Laboratory Technician C - Water Lab",
    "url": "https://agatlaboratories.applytojob.com/apply/lnOX39GFbP/Laboratory-Technician-C-Water-Lab",
    "checkedOn": "2026-10-07"
  },
  {
    "id": "weekly-oct05-w1",
    "label": "Enmas: Environmental Technician",
    "url": "https://www.enmas.ca/job-detail.php?id=1",
    "checkedOn": "2026-10-07"
  },
  {
    "id": "job-ghgsat-backend-bamboohr",
    "label": "GHGSat: Senior Backend Developer - Spectra (current BambooHR source)",
    "url": "https://ghgsat.bamboohr.com/careers/205",
    "checkedOn": "2026-10-07"
  },
  {
    "id": "weekly-oct12-w1",
    "label": "Calgary Wildlife: Wildlife Rehabilitator",
    "url": "https://www.calgarywildlife.org/jobs",
    "checkedOn": "2026-10-12"
  },
  {
    "id": "weekly-oct12-g1",
    "label": "Arolytics: Data Scientist",
    "url": "https://arolytics.com/post/Data-Scientist-Full-Time-Calgary-Based-hybrid-remote",
    "checkedOn": "2026-10-12"
  },
];
