import type { Metadata } from "next";
import { buildDiscoverCards, parseDiscoverState } from "@/lib/discover";
import { DiscoverStage } from "./DiscoverStage";

export const metadata: Metadata = { title: "Discover" };

export default async function DiscoverPage({ searchParams }: PageProps<"/discover">) {
  const cards = buildDiscoverCards(new Date().toISOString().slice(0, 10));
  return <DiscoverStage cards={cards} initialState={parseDiscoverState(await searchParams, cards)} />;
}
