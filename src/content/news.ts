import type { NewsItem } from "./types";

// From docs/validation/calgary-examples.md, news samples A and B.
export const news: NewsItem[] = [
  {
    id: "ghgsat-second-generation",
    title: "GHGSat plans a second-generation satellite for early 2028",
    published: "21 Sep 2026",
    statusKind: "announcement",
    status: "Company announcement · projected, not operating",
    statusShort: "Company announcement",
    location: "Organization with a Calgary office",
    summary: "GHGSat announced a second-generation satellite planned for early 2028, with improved sensitivity and coverage. These are projected capabilities, not results.",
    ask: "How would a lower detection threshold change which emissions events become visible?",
    kind: "stated",
    sourceIds: ["announcement"],
    sources: [
      { id: "announcement", label: "GHGSat announcement", url: "https://www.ghgsat.com/resources/ghgsat-unveils-plans-for-second-generation-satellite-setting-a-new-standard-for-methane-detection-from-space/" },
    ],
  },
  {
    id: "enzyme-system-early-research",
    title: "AI-assisted analysis points to an enzyme system with an unknown function",
    published: "23 Sep 2026",
    statusKind: "early-research",
    status: "Early research · organization-reported",
    statusShort: "Early research",
    location: "Bay Area lab · no Calgary connection",
    summary: "Anthropic announced a life sciences lab and reported finding an enzyme system through AI-assisted analysis, followed by human lab work. The organization says the system’s function is still unknown. A preprint is linked. Peer review and replication are not verified here.",
    ask: "What is the difference between noticing an unusual pattern, proposing a function, and demonstrating that function?",
    caution: "Not a proven gene-editing tool or treatment.",
    kind: "stated",
    sourceIds: ["announcement"],
    sources: [
      { id: "announcement", label: "Research announcement", url: "https://www.anthropic.com/news/claude-discovers-novel-enzyme-system" },
    ],
  },
];
