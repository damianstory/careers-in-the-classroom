import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageDialogContext } from "@/components/dialogs/DialogProvider";
import { examples, getDetails, getExample, getNews } from "@/content";
import { availableViews, parseExplore, selectionQuery } from "@/lib/example-navigation";
import { exampleContext, parseContext } from "@/lib/search";
import { ExampleExplorer } from "./ExampleExplorer";
import styles from "./example.module.css";

export function generateStaticParams() {
  return examples.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: PageProps<"/examples/[slug]">): Promise<Metadata> {
  const e = getExample((await params).slug);
  return { title: e ? `${e.org}: ${e.question}` : "Example not found" };
}

// Every example uses the lesson-rail template; views without content are not offered.
// The page is full-bleed: the rail runs from the header to the footer, so there is no spine here.
export default async function ExamplePage({ params, searchParams }: PageProps<"/examples/[slug]">) {
  const e = getExample((await params).slug);
  if (!e) notFound();
  const query = await searchParams;
  const ctx = exampleContext(e.slug, parseContext(query));
  const news = e.newsId ? getNews(e.newsId) : undefined;
  const speakerTopic = ctx?.label ?? `${e.courses[0].course} · ${e.courses[0].topic}`;
  const details = e.detailsId ? getDetails(e.detailsId) : undefined;
  const views = availableViews(e, details);

  return (
    <div className={styles.page}>
      {/* Dialogs keep the requested organization and teaching context in every view. */}
      <PageDialogContext topic={speakerTopic} org={e.org} signupLabel={ctx?.label ?? `${e.org} example`} />
      <ExampleExplorer
        e={e}
        details={details}
        views={views}
        ctx={ctx}
        state={parseExplore(query, details, views)}
        navKey={selectionQuery(query)}
        news={news}
        speakerTopic={speakerTopic}
        today={new Date().toISOString().slice(0, 10)}
      />
    </div>
  );
}
