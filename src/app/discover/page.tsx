import type { Metadata } from "next";
import { parseDiscoverState } from "@/lib/discover";
import { buildDiscoverCards } from "@/lib/discover-cards";
import { DiscoverStage } from "./DiscoverStage";
import { discoverFonts } from "./fonts";

export const metadata: Metadata = { title: "Discover" };

export default async function DiscoverPage({ searchParams }: PageProps<"/discover">) {
  const cards = buildDiscoverCards(new Date().toISOString().slice(0, 10));
  const query = await searchParams;
  return <DiscoverStage cards={cards} initialState={parseDiscoverState(query, cards)} initialShake={query.play === "shake"} fontClassName={discoverFonts} />;
}
