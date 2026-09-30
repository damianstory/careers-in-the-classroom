import Image from "next/image";
import { PageDialogContext } from "@/components/dialogs/DialogProvider";
import { ExampleCard } from "@/components/ExampleCard";
import { SearchForm } from "@/components/SearchForm";
import { examples, getNews, news } from "@/content";
import { buildLibrary, parseFilter, type LibraryItem } from "@/lib/library";
import heroImage from "../../public/images/hero-calgary-dither-green.png";
import { NewsCard, NoMatchRecorder, NoteTopic, ShowMore, SignupStrip, UnmatchedList } from "./LibraryParts";
import styles from "./home.module.css";

function Item({ item, label }: { item: LibraryItem; label?: string }) {
  if (item.type === "example") return <ExampleCard e={item.example} href={item.href} why={item.why} />;
  const n = getNews(item.newsId)!;
  return (
    <NewsCard
      contextLabel={label}
      item={{
        why: item.why,
        title: n.title,
        published: n.published,
        status: n.status,
        statusShort: n.statusShort,
        location: n.location,
        summary: n.summary,
        ask: n.ask,
        caution: n.caution,
        source: n.sources[0],
      }}
    />
  );
}

// Home is the example library: a dark hero with the search console on its edge, and the cards right below.
export default async function Home({ searchParams }: PageProps<"/">) {
  const lib = buildLibrary(parseFilter(await searchParams));
  const filtered = !!(lib.course || lib.filter.topic);
  // Dialogs name the organization only when it is the prepared match; news-only matches have none.
  const firstFit = lib.sections.find((s) => s.id === "fits")?.items.find((i) => i.type === "example");
  const relatedOrg = firstFit?.type === "example" ? firstFit.example.org : undefined;

  return (
    <>
      <PageDialogContext topic={lib.label} org={relatedOrg} signupLabel={lib.label} />
      {/* The console is taller when filtered (it adds a status line); the hero leaves room for it. */}
      <div className={styles.home} data-filtered={filtered ? "" : undefined}>
        <section className={styles.hero} aria-labelledby="home-title">
          {/* A 1-bit dither: served as-is, because resampling would blur the dots. */}
          <Image
            src={heroImage}
            alt="Downtown Calgary beside the Bow River, seen from above, drawn as a field of green dots"
            fill
            priority
            unoptimized
            sizes="100vw"
            className={styles.photo}
          />
          <div className={styles.scrim} aria-hidden="true" />
          <div className={`${styles.frame} ${styles.heroInner}`}>
            <div className={styles.ruler} aria-hidden="true" />
            {/* Each line rises from its own mask. The trailing spaces keep the heading's text whole. */}
            <h1 id="home-title" className={styles.title}>
              <span className={styles.line}>
                <span className={styles.rise}>The science you </span>
              </span>
              <span className={styles.line}>
                <span className={styles.rise}>teach is happening </span>
              </span>
              <span className={styles.line}>
                <span className={styles.rise}>down the road.</span>
              </span>
            </h1>
            <p className={styles.lead}>
              Real Calgary organizations, the problems they’re working on, and the people doing the work. Pick your course
              and unit to see what fits.
            </p>
          </div>
          <p className={styles.credit}>Photo: Mahesh Gupta / Unsplash</p>
        </section>

        <div id="library" className={styles.library}>
          <div className={`${styles.frame} ${styles.dock}`}>
            <SearchForm filter={lib.filter} count={lib.count} />
          </div>

          <div className={`${styles.frame} ${styles.results}`}>
            {lib.noMatch && (
              <div className={styles.banner}>
                <NoMatchRecorder course={lib.course?.name ?? "Any course"} label={lib.unit?.name ?? lib.filter.topic ?? ""} />
                <div className={styles.bannerText}>
                  <p className={styles.bannerTitle}>
                    No prepared example for “{lib.unit?.name ?? lib.filter.topic}”
                    {lib.course ? ` in ${lib.course.name}` : ""} yet.
                  </p>
                  <p className={styles.bannerNote}>
                    We can’t research new topics live yet. The closest examples are below. Noting a topic tells us what
                    teachers need next.
                  </p>
                </div>
                <NoteTopic />
              </div>
            )}

            {lib.sections.map((s, i) => (
              <section key={s.id} className={styles.section} aria-labelledby={`section-${s.id}`}>
                <div className={styles.sectionHead}>
                  <div className={styles.sectionTitles}>
                    <h2 id={`section-${s.id}`} className={i === 0 ? styles.sectionTitle : styles.sectionTitleSmall}>
                      {s.id === "rest" && !filtered ? "Real problems Calgary organizations are working on" : s.title}
                    </h2>
                    {s.note && <p className={styles.sectionNote}>{s.note}</p>}
                  </div>
                  {i === 0 && !filtered && (
                    <dl className={styles.readout}>
                      <div>
                        <dt>Examples</dt>
                        <dd>{examples.length}</dd>
                      </div>
                      <div>
                        <dt>Recent developments</dt>
                        <dd>{news.length}</dd>
                      </div>
                      <div>
                        <dt>Sources checked</dt>
                        <dd>
                          <span className={styles.square} aria-hidden="true" />
                          24 Sep 2026
                        </dd>
                      </div>
                    </dl>
                  )}
                </div>
                <ul className={styles.grid}>
                  <ShowMore total={s.items.length}>
                    {s.items.map((item) => (
                      <li key={item.type === "example" ? item.example.slug : item.newsId}>
                        <Item item={item} label={lib.label} />
                      </li>
                    ))}
                  </ShowMore>
                </ul>
                {i === 0 && filtered && lib.label && <SignupStrip label={lib.label} />}
              </section>
            ))}

            <p className={styles.footnote}>
              <span className={styles.square} aria-hidden="true" />
              <span>
                The library holds three researched Calgary examples and two recent developments, checked 24 September 2026.
                Units without a prepared example say so honestly. Unit names follow Alberta Education programs of studies.
              </span>
            </p>
            <UnmatchedList />
          </div>
        </div>
      </div>
    </>
  );
}
