import { roleSearchTitles } from "@/content/role-searches";

// Live searches, not saved postings: results change daily and are never checked by us,
// so they sit beside the dated job examples rather than replacing them.
export const SEARCH_LOCATION = "Calgary, AB";

export interface LiveSearch {
  title: string;
  links: { board: string; url: string }[];
}

const enc = (s: string) => encodeURIComponent(s).replace(/%20/g, "+");

export function jobBoardLinks(title: string, location = SEARCH_LOCATION) {
  return [
    { board: "Job Bank", url: `https://www.jobbank.gc.ca/jobsearch/jobsearch?searchstring=${enc(title)}&locationstring=${enc(location)}` },
    { board: "Indeed", url: `https://ca.indeed.com/jobs?q=${enc(title)}&l=${enc(location)}` },
  ];
}

export const searchTitles = (roleId: string): string[] => roleSearchTitles[roleId] ?? [];

export function liveSearches(roleId: string): LiveSearch[] {
  return searchTitles(roleId).map((title) => ({ title, links: jobBoardLinks(title) }));
}
