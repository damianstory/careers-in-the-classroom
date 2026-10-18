import { roleSearchTitles } from "@/content/role-searches";

// Live searches, not saved postings: results change daily and are never checked by us,
// so they sit beside the dated job examples rather than replacing them. Indeed leads: in a check on
// 18 Oct 2026, Job Bank's Calgary results were empty or off-topic for many professional titles.
export const SEARCH_LOCATION = "Calgary, AB";
// Job Bank ignores a typed location unless it also carries the place id its autocomplete sets (Calgary = 22310).
const JOB_BANK_CALGARY_ID = "22310";

export interface LiveSearch {
  title: string;
  links: { board: string; url: string }[];
}

const enc = (s: string) => encodeURIComponent(s).replace(/%20/g, "+");

export function jobBoardLinks(title: string) {
  return [
    { board: "Indeed", url: `https://ca.indeed.com/jobs?q=${enc(title)}&l=${enc(SEARCH_LOCATION)}` },
    {
      board: "Job Bank",
      url: `https://www.jobbank.gc.ca/jobsearch/jobsearch?searchstring=${enc(title)}&locationstring=${enc(SEARCH_LOCATION)}&locationparam=${JOB_BANK_CALGARY_ID}`,
    },
  ];
}

export const searchTitles = (roleId: string): string[] => roleSearchTitles[roleId] ?? [];

export function liveSearches(roleId: string): LiveSearch[] {
  return searchTitles(roleId).map((title) => ({ title, links: jobBoardLinks(title) }));
}
