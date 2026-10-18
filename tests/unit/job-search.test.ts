import { describe, expect, it } from "vitest";
import { exampleDetails } from "@/content";
import { jobBoardLinks, liveSearches, searchTitles } from "@/lib/job-search";

describe("live job searches", () => {
  it("gives every role shown on an example one to three non-blank titles to search", () => {
    const invalid = [...new Set(exampleDetails.flatMap((d) => d.roleIds))].filter((id) => {
      const titles = searchTitles(id);
      return titles.length < 1 || titles.length > 3 || titles.some((t) => !t.trim());
    });
    expect(invalid).toEqual([]);
  });

  it("builds Calgary searches on Job Bank and Indeed", () => {
    expect(jobBoardLinks("Structural engineer")).toEqual([
      { board: "Job Bank", url: "https://www.jobbank.gc.ca/jobsearch/jobsearch?searchstring=Structural+engineer&locationstring=Calgary%2C+AB&locationparam=22310" },
      { board: "Indeed", url: "https://ca.indeed.com/jobs?q=Structural+engineer&l=Calgary%2C+AB" },
    ]);
  });

  it("returns nothing for an unknown role rather than inventing a search", () => {
    expect(liveSearches("not-a-role")).toEqual([]);
  });
});
