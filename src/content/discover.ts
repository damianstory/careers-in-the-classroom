export interface DiscoverImage {
  roleId: string;
  src: string;
  width: 752;
  height: 1344;
  titleBandPct: number;
}

export const discoverImages: DiscoverImage[] = [
  ["atmospheric-science", 25],
  ["satellite-engineering", 27],
  ["software-data", 26],
  ["conservation-research", 26],
  ["animal-care", 27],
  ["wildlife-veterinary", 25],
  ["process-engineering", 22],
  ["process-operations", 24],
  ["commercial-partnerships", 26],
].map(([roleId, titleBandPct]) => ({
  roleId: String(roleId),
  src: `/images/discover/${roleId}.jpg`,
  width: 752,
  height: 1344,
  titleBandPct: Number(titleBandPct),
}));
