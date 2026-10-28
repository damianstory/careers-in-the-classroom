import Image from "next/image";
import Link from "next/link";
import { ExampleIllustration } from "@/components/ExampleIllustration";
import { Icon } from "@/components/Icon";
import { SourceLink } from "@/components/SourceLink";
import {
  getJob,
  getOrganization,
  getOrganizationRole,
  getPathway,
  getRegistrySource,
  getRoleProfile,
  type Claim,
  type Example,
  type ExampleDetails,
  type JobExample,
  type NewsItem,
  type Organization,
  type OrganizationLogo,
  type RoleProfile,
} from "@/content";
import { cardsFor, exploreHref, landingSection, layoutBootstrap, PART_LABELS, SHOW_PARTS, type ExploreState, type Selection, type View } from "@/lib/example-navigation";
import { checkedRange, formatDate, jobStatusLabel } from "@/lib/job-status";
import { liveSearches, SEARCH_LOCATION, searchTitles } from "@/lib/job-search";
import type { ExampleContext } from "@/lib/search";
import { courseFitTopic } from "@/lib/course-fit";
import { browseOriginQuery, browseReturnHref, type BrowseOrigin } from "@/lib/doors";
import { GatedNews, SaveExample, SpeakerButton } from "./ExampleParts";
import { ExploreFocus } from "./ExploreFocus";
import { SourcesAndFit } from "./ExampleSections";
import { RailNav, type RailItem } from "./RailNav";
import { SectionLink, SelectionLink } from "./SectionLink";
import { DeckControls } from "./DeckControls";
import { StoryDiagram } from "./StoryDiagram";
import { PagedPanel } from "./PagedPanel";
import { RoleTabs } from "./RoleTabs";
import { SourcesButton } from "./SourcesButton";
import { tksHeading, tksText } from "./fonts";
import base from "./example.module.css";
import styles from "./explore.module.css";

interface Props {
  e: Example;
  /** Enriched records (organization, role profiles, job examples). Absent for examples not yet enriched. */
  details?: ExampleDetails;
  views: View[];
  ctx: ExampleContext | null;
  origin?: BrowseOrigin;
  state: ExploreState;
  /** The page's query, normalized (selectionQuery): changes with every navigation to another URL. */
  navKey: string;
  news?: NewsItem;
  speakerTopic: string;
  today: string;
}

// A citation: a compact Sources button whose popover lists each source (same labels and links as before).
function Cite({ ids }: { ids: string[]; className?: string }) {
  return <SourcesButton sources={ids.map((id) => {
    const s = getRegistrySource(id);
    return s ? { label: s.label, url: s.url } : { label: id };
  })} />;
}

// The page's one freshness date: every record it draws on, as a single date or a range.
function pageChecked(e: Example, details?: ExampleDetails): string {
  const dates = [e.checkedOn];
  if (details) {
    dates.push(details.checkedOn);
    const org = getOrganization(details.organizationId);
    if (org) dates.push(org.checkedOn);
    for (const id of details.roleIds) {
      const link = getOrganizationRole(details.organizationId, id);
      if (link) dates.push(link.checkedOn);
    }
    for (const id of details.pathwayIds) dates.push(getPathway(id)!.checkedOn);
  }
  return checkedRange(dates);
}

export function ExampleExplorer({ e, details, views, ctx, origin, state, navKey, news, speakerTopic, today }: Props) {
  const roles = details ? details.roleIds.map((id) => getRoleProfile(id)!) : [];
  const href: Href = (t) => exploreHref(e.slug, ctx?.query ?? browseOriginQuery(origin), t);
  const selection: Selection = { role: state.role, job: state.job };
  const label = (v: View) => v === "about" ? `About ${e.org}` : PART_LABELS[v];
  const items: RailItem[] = views.map((section) => ({ section, href: href({ section, ...selection }), label: label(section) }));
  const cards = cardsFor(views, !!details?.story);
  const teaching = views.filter((v) => SHOW_PARTS.includes(v));
  const logo = details ? getOrganization(details.organizationId)?.logo : undefined;
  const partHeader = (part: View) => <header className={styles.partHeader} data-part-header="">
    <Heading id={`${part}-title`}>{label(part)}</Heading>
  </header>;

  return (
    <>
      <ExploreFocus hasStory={!!details?.story} views={views} role={state.role} job={state.job} navKey={navKey} />

      <div className={`${styles.shell} ${tksHeading.variable} ${tksText.variable}`} data-example-root="" suppressHydrationWarning>
        <script id={`example-layout-${e.slug}`} dangerouslySetInnerHTML={{ __html: layoutBootstrap(views, selection, !!details?.story) }} />
        <div className={styles.deck}>
          <div className={styles.rail}>
            <Link href={ctx?.backHref ?? browseReturnHref(origin)} className={styles.back}>
              <Icon name="arrowLeft" small />
              {ctx ? "Back to results" : origin ? `Back to ${origin.door === "company" ? "companies" : origin.door === "challenge" ? "challenges" : "kinds of work"}` : "All connections"}
            </Link>
            <RailNav items={items} hasStory={!!details?.story} contextLabel={ctx?.label}
              initial={landingSection(views, "", state.view, selection) ?? "question"} />
          </div>
          <div className={styles.main}>
            <div className={styles.topRow} data-deck-header="">
              <p className={styles.topLabel}>
                {views.map((v) => <span key={v} data-top-part={v}>{SHOW_PARTS.includes(v) ? `${teaching.indexOf(v) + 1} · ${PART_LABELS[v]}` : label(v)}</span>)}
              </p>
              <OrgMark org={e.org} logo={logo} />
            </div>
            <div className={styles.content} data-deck-body="">
              <div className={styles.pageTitle} data-example-title="">
                <Heading id="question-title" level={1}>{e.question}</Heading>
                <p className={styles.orgLine}><strong>{e.org}</strong> · {e.localShort}</p>
              </div>
              <section id="question" data-part="" className={`${styles.section} ${styles.question}`} aria-labelledby="question-title">
                <QuestionView e={e} ctx={ctx} />
              </section>
              <section id="how-it-works" data-part="" className={styles.section} aria-labelledby="how-it-works-title">
                {partHeader("how-it-works")}
                <HowView e={e} details={details} />
              </section>
              {views.includes("who") && <section id="who" data-part="" className={styles.section} aria-labelledby="who-title">
                {partHeader("who")}
                <RolesView e={e} details={details} roles={roles} selection={selection} href={href} today={today} ctx={ctx} />
              </section>}
              {views.includes("ways-in") && <section id="ways-in" data-part="" className={styles.section} aria-labelledby="ways-in-title">
                {partHeader("ways-in")}
                <PathwaysView e={e} details={details} selection={selection} href={href} />
              </section>}
              <section id="ask" data-part="" className={styles.section} aria-labelledby="ask-title">
                {partHeader("ask")}
                <AskView e={e} details={details} />
              </section>
              {views.includes("about") && details && <section id="about" data-part="" className={styles.section} aria-labelledby="about-title">
                {partHeader("about")}
                <PagedPanel label={`About ${e.org}`} className={styles.stagePanel}>
                  <CompanyView e={e} details={details} href={href} selection={selection} />
                  {news && <div className={base.band}><GatedNews contextLabel={ctx?.label ?? `${e.org} example`} headingId="news-title"
                    news={{ title: news.title, published: news.published, status: news.status, statusShort: news.statusShort, summary: news.summary, ask: news.ask, source: news.sources[0] }} /></div>}
                  <aside className={`${base.band} ${base.flush} ${base.last}`} aria-label="Bring this work into class">
                    <div className={`${base.darkPanel} ${styles.cta}`}>
                      <Corners />
                      <div>
                        <h3 className={styles.ctaTitle}>Bring this work into class</h3>
                        <p className={styles.ctaText}>
                          Ask for a practitioner conversation. We check who might be suitable before anything is arranged.
                        </p>
                        <div className={styles.ctaActions}>
                          <SpeakerButton topic={speakerTopic} org={e.org} variant="signal" />
                        </div>
                        <SaveExample contextLabel={ctx?.label ?? `${e.org} example`} className={styles.ctaSave} />
                      </div>
                      <div className={styles.ctaQuestion}>
                        <p className={styles.ctaQuestionLabel}>A question to ask</p>
                        <p className={styles.ctaQuestionText}>“{e.conversation}”</p>
                      </div>
                    </div>
                  </aside>
                </PagedPanel>
              </section>}
              <section id="sources" data-part="" className={styles.section} aria-labelledby="sources-title">
                <SourcesAndFit e={e} checked={pageChecked(e, details)} />
              </section>
            </div>
            <DeckControls cards={cards} org={e.org} />
          </div>
        </div>
      </div>
    </>
  );
}

// The organization's identification logo, top right of the card; its name where there is none.
function OrgMark({ org, logo }: { org: string; logo?: OrganizationLogo }) {
  if (!logo) return <p className={styles.orgName}>{org}</p>;
  return (
    <span className={styles.orgMark} data-plate={logo.onDark ? "dark" : "light"}>
      <Image src={logo.src} alt={`${org} logo`} width={logo.width} height={logo.height} unoptimized loading="eager" className={styles.orgMarkImg} />
    </span>
  );
}

type Href = (t: Selection & { section?: View }) => string;

// Registration marks in the corners of a dark instrument panel.
function Corners() {
  return (
    <>
      <span className={`${base.corner} ${base.cornerTl}`} aria-hidden="true" />
      <span className={`${base.corner} ${base.cornerTr}`} aria-hidden="true" />
      <span className={`${base.corner} ${base.cornerBl}`} aria-hidden="true" />
      <span className={`${base.corner} ${base.cornerBr}`} aria-hidden="true" />
    </>
  );
}

// A section's heading: the story question is the page's one h1; every other section has an h2.
// Each is a focus target (tabIndex -1) for section moves and landings.
function Heading({ id, level = 2, children }: { id: string; level?: 1 | 2 | 3; children: React.ReactNode }) {
  const Tag = level === 1 ? "h1" : level === 2 ? "h2" : "h3";
  return (
    <Tag id={id} data-dialog-focus={level === 2 ? "" : undefined} tabIndex={-1} className={`display ${base.title} ${styles.heading}`}>
      {children}
    </Tag>
  );
}

// With a valid search: the teacher's class and why it matches. Arriving cold: every course and topic it fits.
function FitsPanel({ e, ctx }: { e: Example; ctx: ExampleContext | null }) {
  if (ctx) {
    return (
      <div className={styles.fits}>
        <div className={styles.fitsHead}>
          <p className={`eyebrow ${base.marked}`}>Why this matches {ctx.label}</p>
        </div>
        <p className={styles.fitsWhy}>{ctx.why}</p>
      </div>
    );
  }
  return (
    <div className={styles.fits}>
      <div className={styles.fitsHead}>
        <p className={`eyebrow eyebrow-muted ${base.marked}`}>Where it fits</p>
        <Link href="/connections#library" className={styles.pickClass}>
          Pick your class
          <Icon name="arrowRight" small />
        </Link>
      </div>
      <ul className={styles.fitsRows} aria-label="Courses this fits">
        {e.courses.map((c) => (
          <li key={c.course}>
            <strong>{c.course}</strong>
            <span>
              <span className="sr-only"> · </span>
              {courseFitTopic(e, c)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function QuestionView({ e, ctx }: { e: Example; ctx: ExampleContext | null }) {
  return <>
    <div className={styles.questionFits}><FitsPanel e={e} ctx={ctx} /></div>
    <div className={styles.questionArt}><ExampleIllustration slug={e.slug} variant="story" /></div>
  </>;
}

function AskView({ e, details }: { e: Example; details?: ExampleDetails }) {
  const askText = details?.story?.discussion ?? e.prompt;
  // The question is the focal point; the activity sits beside it.
  return (
    <div className={styles.askSplit}>
      <div className={`${base.darkPanel} ${styles.askPanel}`}>
        <span className={`${base.corner} ${base.cornerTl}`} aria-hidden="true" />
        <span className={`${base.corner} ${base.cornerBr}`} aria-hidden="true" />
        <p className={styles.askPanelText}>{askText}</p>
      </div>
      <div className={styles.askSide}>
        <p className={styles.explain}>{e.explain}</p>
      </div>
    </div>
  );
}

function HowView({ e, details }: { e: Example; details?: ExampleDetails }) {
  const story = details?.story;
  return <>
      {story && <div data-card="1" className={styles.howCard}><StoryDiagram story={story} headingId="schematic-title" /></div>}

      {story ? (
        <section data-card="2" className={`${styles.howCard} ${styles.lessonCard}`} aria-labelledby="steps-title">
          <div className={styles.lessonSplit}>
            <div>
              <h3 id="steps-title" className={styles.lessonTitle}>
                The lesson, in the real world
              </h3>
              <p className={styles.lessonLede}>{story.subtitle}</p>
              {e.status && (
                <p className={styles.stage}>
                  <strong>Project stage:</strong> {e.status}
                </p>
              )}
            </div>
            <PagedPanel label="Steps" inline className={styles.stepsPanel}>
              <ol className={styles.stepList}>
                {story.steps.map((s, i) => (
                  <li key={i}>
                    <span className={styles.stepNum}>{i + 1}</span>
                    <div className={styles.stepText}>
                      <p>{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className={styles.stepCite}><Cite ids={[...new Set(story.steps.flatMap((s) => s.sourceIds))]} /></div>
            </PagedPanel>
          </div>
        </section>
      ) : (
        <section className={styles.howCard} aria-labelledby="work-title">
          <h3 id="work-title" className={styles.lessonTitle}>
            The work
          </h3>
          <p className={styles.lessonLede}>{e.work}</p>
          {e.status && (
            <p className={styles.stage}>
              <strong>Status today:</strong> {e.status}
            </p>
          )}
        </section>
      )}

</>;
}

// A claim split for a fact row: the statement, then where it comes from.
function ClaimRow({ label, claim, fallback }: { label: string; claim?: Claim; fallback?: string }) {
  return (
    <div className={styles.claimRow}>
      <dt>{label}</dt>
      <dd className={styles.claimText}>{claim ? claim.text : fallback}</dd>
      <dd className={styles.claimSource}>{claim && <Cite ids={claim.sourceIds} className={styles.claimCite} />}</dd>
    </div>
  );
}

function CompanyView({ e, details, href, selection }: { e: Example; details: ExampleDetails; href: Href; selection: Selection }) {
  const org = getOrganization(details.organizationId)!;
  const website = getRegistrySource(org.websiteSourceId)!;
  const careers = org.careersSourceId ? getRegistrySource(org.careersSourceId) : undefined;
  const charity = org.organizationType === "charity";
  return (
    <>
      <header className={`${base.band} ${base.hero}`}>
        <p className={base.lede}>{org.tagline}</p>
      </header>

      <div className={`${base.band} ${base.flush}`}>
        <div className={styles.factsPanel}>
          <dl className={`${styles.facts} ${styles.factsPair}`} aria-label={charity ? "Organization facts" : "Company facts"}>
            <div className={base.darkPanel}>
              <dt>Headquarters</dt>
              <dd className={styles.factValue}>{org.headquarters.text}</dd>
              <dd className={styles.factSource}>
                <Cite ids={org.headquarters.sourceIds} className={styles.claimCite} />
              </dd>
            </div>
            <div className={base.darkPanel}>
              <dt>Team size</dt>
              {org.size ? (
                <>
                  <dd className={styles.factValue}>{org.size.text}</dd>
                  <dd className={styles.factSource}>
                    <Cite ids={org.size.sourceIds} className={styles.claimCite} />
                  </dd>
                </>
              ) : (
                <dd className={styles.factValue}>Not verified. We have not found a dated, sourced figure.</dd>
              )}
            </div>
          </dl>
          <dl className={`${styles.facts} ${styles.factsLocal}`}>
            <div className={base.darkPanel}>
              <dt>Local connection</dt>
              <dd className={styles.factValue}>{org.localConnection.text}</dd>
              <dd className={styles.factSource}><Cite ids={org.localConnection.sourceIds} className={styles.claimCite} /></dd>
            </div>
          </dl>
        </div>
      </div>

      <div className={`${base.band} ${base.tint} ${base.rule}`}>
        <dl className={styles.claims} aria-label="About the work">
          <ClaimRow label="The problem" claim={org.problem} />
          <ClaimRow label="What they do" claim={org.offering} />
          <ClaimRow label={charity ? "Who benefits" : "Who uses it"} claim={org.beneficiaries} />
        </dl>
        <div className={styles.about}>
          <p className={styles.aboutText}>{org.description.text}</p>
          <Cite ids={org.description.sourceIds} className={styles.claimCite} />
          <div className={styles.actions}>
            <SourceLink href={website.url} className={`btn ${styles.btnLine}`}>
              {charity ? "Organization website" : "Company website"}
            </SourceLink>
            {careers && (
              <SourceLink href={careers.url} className={`btn ${styles.btnLine}`}>
                Careers page
              </SourceLink>
            )}
          </div>
        </div>
      </div>

      <div className={`${base.band} ${base.rule}`}>
        {details.roleIds.length > 0 && <SectionLink section="who" href={href({ section: "who", ...selection })} className={styles.arrowLink}>Who does this work<Icon name="arrowRight" small /></SectionLink>}
        <div className={styles.notes}>
          <p>Read each source’s date and scope: a documented role is not proof of a current vacancy or of where every position is based.</p>
          <p>
            Reported as {org.name} states it. {e.org} has not reviewed or endorsed this page.
          </p>
        </div>
      </div>
    </>
  );
}

function RolesView({
  e,
  details,
  roles,
  selection,
  href,
  today,
  ctx,
}: {
  e: Example;
  details?: ExampleDetails;
  roles: RoleProfile[];
  selection: Selection;
  href: Href;
  today: string;
  ctx: ExampleContext | null;
}) {
  // Not yet enriched: the sourced role list only, framed for students. No role pages.
  if (!details) {
    return (
      <PagedPanel label="People doing this work" className={styles.stagePanel}>
        <header className={styles.stageIntro}>
          <p className={base.lede}>People doing this work</p>
          <p className={base.lede}>Kinds of work behind this example, and how we know about them.</p>
        </header>
        <ul className={styles.cardGrid}>
          {e.roles.map((r) => (
            <li key={r.title} className={styles.card}>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{r.title}</h3>
                <p className={styles.cardText}>{r.note}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className={styles.markedNote}>{e.rolesNote}</p>
      </PagedPanel>
    );
  }
  const org = getOrganization(details.organizationId)!;
  // A selected role shows; otherwise the first. Every role's details stay mounted (hidden when not
  // shown), so each page keeps every role's words and links.
  const shown = selection.role && roles.some((r) => r.id === selection.role) ? selection.role : roles[0]?.id;
  return (
    <>
      <div className={styles.roleSplit}>
        <div className={styles.roleAside}>
        <PagedPanel label="Roles" className={styles.roleListPanel}>
          <ul className={styles.roleList}>
            {roles.map((r) => (
              <li key={r.id}>
                <SelectionLink section="who" href={href({ section: "who", role: r.id })} className={styles.roleItem}
                  aria-current={r.id === shown ? "true" : undefined} data-role-link={r.id}>
                  {r.title}
                  <Icon name="arrowRight" small />
                </SelectionLink>
              </li>
            ))}
          </ul>
        </PagedPanel>
        <p className={styles.rolesIntro}>Work connected to this example. Not current job openings.</p>
        </div>
        <div className={styles.roleDetails}>
          {roles.map((r) => (
            <RoleDetail key={r.id} role={r} roles={roles} org={org} details={details} shown={r.id === shown}
              selection={selection} href={href} today={today} ctx={ctx} />
          ))}
        </div>
      </div>
    </>
  );
}

function RoleDetail({ role, roles, org, details, shown, selection, href, today, ctx }: {
  role: RoleProfile; roles: RoleProfile[]; org: Organization; details: ExampleDetails; shown: boolean;
  selection: Selection; href: Href; today: string; ctx: ExampleContext | null;
}) {
  const pathways = details.pathwayIds.map((id) => getPathway(id)!).filter((p) => p.roleRationale.some((r) => r.roleId === role.id));
  const jobs = details.jobIds.map((id) => getJob(id)!).filter((j) => j.roleIds.includes(role.id));
  const openJob = shown && selection.role === role.id && selection.job ? jobs.find((j) => j.id === selection.job) : undefined;
  const titles = searchTitles(role.id);
  const link = getOrganizationRole(org.id, role.id);
  return (
    <div role="group" className={styles.roleDetail} hidden={!shown} data-role-detail={role.id} aria-labelledby={`role-title-${role.id}`}>
      <header className={styles.roleHead}>
        <p className={`eyebrow ${base.marked}`}>Role</p>
        <h3 id={`role-title-${role.id}`} className={styles.roleTitle}>{role.title}</h3>
        <p className={styles.roleSummary}>{role.summary}</p>
        {link && <Cite ids={link.sourceIds} />}
      </header>
      {openJob && (
        <div className={styles.jobView} data-job-view="">
          {/* `row`: closing the posting returns to its row in Job searches (ExploreFocus). */}
          <SelectionLink section="who" href={href({ section: "who", role: role.id })} row className={styles.upLink}>
            <Icon name="arrowLeft" small />
            Back to {role.title}
          </SelectionLink>
          <PagedPanel label="Job posting" className={styles.tabPaged}>
            <article aria-labelledby={`job-title-${openJob.id}`}>
              <JobBody job={openJob} roles={roles} today={today} titleId={`job-title-${openJob.id}`} />
            </article>
          </PagedPanel>
        </div>
      )}
      <RoleTabs roleId={role.id} shown={shown} jobOpen={!!openJob} tabs={[
        {
          id: "what", label: "What they do", content: (
            <PagedPanel label={`What ${role.title} involves`} className={styles.tabPaged}>
              {role.explanation.trim() !== role.summary.trim() && <p className={styles.explanation}>{role.explanation}</p>}
              <section aria-labelledby={`tasks-title-${role.id}`}>
                <h4 id={`tasks-title-${role.id}`} className={styles.miniTitle}>What might you actually do?</h4>
                <ul className={styles.tasks}>
                  {role.tasks.map((t) => (
                    <li key={t.title}>
                      <h5 className={styles.taskTitle}>{t.title}</h5>
                      <p className={styles.taskText}>{t.detail}</p>
                    </li>
                  ))}
                </ul>
                <p className={styles.bandNote}>Typical of this kind of work in general. Not a description of any one person’s job at {org.name}.</p>
              </section>
              <dl className={styles.context} aria-label="Context">
                <div className={styles.contextRow}>
                  <dt>Often works with</dt>
                  <dd className={styles.chips}>
                    {role.collaborators.map((c) => (
                      <span key={c}>{c}</span>
                    ))}
                  </dd>
                </div>
                <div className={styles.contextRow}>
                  <dt>{ctx ? ctx.label.split(" · ")[0] : "Classroom connection"}</dt>
                  <dd>{role.classroomConnection}</dd>
                </div>
              </dl>
            </PagedPanel>
          ),
        },
        {
          id: "jobs", label: "Job searches", content: (
            <PagedPanel label={`Job searches for ${role.title}`} className={styles.tabPaged}>
              {titles.length > 0 && <p className={styles.cardText}><strong>Job titles to search</strong><br />{titles.join(" · ")}</p>}
              <RoleJobs role={role} jobs={jobs} org={org} selection={selection} href={href} today={today} />
            </PagedPanel>
          ),
        },
        {
          id: "prepare", label: "Prepare", content: (
            <PagedPanel label={`How to prepare for ${role.title}`} className={styles.tabPaged}>
              <section aria-labelledby={`prepare-title-${role.id}`}>
                <h4 id={`prepare-title-${role.id}`} className={styles.miniTitle}>How to prepare</h4>
                {pathways.length ? (
                  <ul className={styles.prepareList}>
                    {pathways.map((p) => (
                      <li key={p.id}>
                        <p className={styles.prepareName}>{p.name}</p>
                        <p className={styles.prepareProvider}>{p.provider}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className={styles.bandNote}>No checked pathways for this role yet.</p>
                )}
                <p className={styles.teaserAction}>
                  {/* Promises every program: it clears the role (and job) and lands on Pathways. */}
                  <SelectionLink section="ways-in" href={href({ section: "ways-in" })} className={styles.arrowLink}>
                    See all pathways
                    <Icon name="arrowRight" small />
                  </SelectionLink>
                </p>
              </section>
            </PagedPanel>
          ),
        },
      ]} />
    </div>
  );
}

const isOpen = (j: JobExample, today: string) => jobStatusLabel(j, today).startsWith("Accepting");

function StatusTag({ job, today }: { job: JobExample; today: string }) {
  return isOpen(job, today) ? <span className="tag">Accepting applications</span> : <span className="tag tag-neutral">Historical example</span>;
}

// Live searches and saved job examples. A saved example opens as its own view (?job=); its row link
// takes focus again when the teacher comes back.
function RoleJobs({ role, jobs, org, href, today }: {
  role: RoleProfile; jobs: JobExample[]; org: Organization; selection: Selection; href: Href; today: string;
}) {
  const searches = liveSearches(role.id);
  return (
    <section aria-labelledby={`jobs-title-${role.id}`}>
      <h4 id={`jobs-title-${role.id}`} className={styles.miniTitle}>
        Related job postings
      </h4>
      {searches.length > 0 && (
        <>
          <p className={styles.jobsIntro}>
            Similar work at other employers in {SEARCH_LOCATION}, not openings at {org.name}. These are live searches: results change daily and we have not checked them.
          </p>
          <ul className={styles.searchList} aria-label="Live job searches">
            {searches.map((s) => (
              <li key={s.title} className={styles.searchRow}>
                <span className={styles.jobTitle}>{s.title}</span>
                <span className={styles.searchLinks}>
                  {s.links.map((l) => (
                    <a key={l.board} href={l.url} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" className={styles.arrowLink}>
                      {l.board}
                      <span className="sr-only"> search for {s.title} (opens in a new tab)</span>
                      <Icon name="arrowRight" small />
                    </a>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
      {jobs.length === 0 ? (
        searches.length === 0 && (
          <div className={styles.empty}>
            <p className={styles.emptyTitle}>No saved job examples for this role yet.</p>
            <p className={styles.bandNote}>We only save postings we could open, on the employer’s own board or as an attributed copy.</p>
          </div>
        )
      ) : (
        <section aria-labelledby={`saved-jobs-title-${role.id}`}>
          <h5 id={`saved-jobs-title-${role.id}`} className={styles.savedTitle}>Saved job examples</h5>
          <p className={styles.jobsIntro}>
            How employers have described this kind of work, saved on the date shown. Employers have not reviewed or endorsed this page.
          </p>
          <ul className={styles.jobList}>
            {jobs.map((j) => (
              <li key={j.id} className={styles.jobItem}>
                <SelectionLink section="who" href={href({ section: "who", role: role.id, job: j.id })} row className={styles.jobRow} data-job-row={j.id}>
                  <span className={styles.jobRowMain}>
                    <span className={styles.jobTitle}>{j.title}</span>
                    <span className={styles.jobMetaLine}>
                      {j.employer}
                      {j.location ? ` · ${j.location}` : ""}
                    </span>
                  </span>
                  <StatusTag job={j} today={today} />
                  <Icon name="arrowRight" small />
                </SelectionLink>
              </li>
            ))}
          </ul>
        </section>
      )}
    </section>
  );
}

// Pathways use the same card rhythm as the roles list: one card per program, with why it fits each role.
// With a selected role, Pathways follows it and says so, with a way to show every program.
function PathwaysView({ e, details, selection, href }: { e: Example; details?: ExampleDetails; selection: Selection; href: Href }) {
  // Enriched pathways are checked programs. Other examples mix study directions, stated employer
  // requirements and one person's route, so their intro says so and each card carries its own label.
  const role = details && selection.role ? getRoleProfile(selection.role) : undefined;
  const header = (
    <header className={styles.stageIntro}>
      <p className={styles.pathIntro}>
        {details
          ? "Programs that teach skills this work uses. Each is one route in, not a requirement, and no program has endorsed this page."
          : "Study directions, what an employer asked for, and routes people have taken. Each card says which it is."}
      </p>
      {role && (
        <p className={styles.filterLine} data-pathway-filter="">
          Showing routes for <strong>{role.title.toLowerCase()}</strong>.{" "}
          <SelectionLink section="ways-in" href={href({ section: "ways-in" })}>
            Show all
          </SelectionLink>
        </p>
      )}
    </header>
  );
  // Not yet enriched: the sourced pathway list, including any honestly unresearched route.
  if (!details) {
    return (
      <>
        {header}
        <PagedPanel label="Ways in" className={styles.stagePanel}>
          <ul className={styles.pathList}>
            {e.pathways.map((p) => (
              <li key={p.label} className={styles.card}>
                <p className={styles.pathKind}>{p.kindLabel}</p>
                <div className={styles.cardBody}>
                  <h3 className={`${styles.cardTitle} ${styles.cardTitleLg}`}>{p.label}</h3>
                  <p className={styles.cardText}>{p.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </PagedPanel>
      </>
    );
  }
  const shown = details.pathwayIds.map((id) => getPathway(id)!).filter((p) => !role || p.roleRationale.some((r) => r.roleId === role.id));

  return (
    <>
      {header}
      <PagedPanel label="Ways in" className={styles.stagePanel}>
        {shown.length ? (
          <ul className={styles.pathList}>
            {shown.map((p) => {
              const extra = p.sourceIds.filter((id) => id !== p.urlSourceId);
              return (
                <li key={p.id} className={styles.card}>
                  <p className={styles.pathStrip}>
                    <span className={`${styles.pathProvider} ${base.marked}`}>{p.provider}</span>
                    <span>{p.routeType}</span>
                    <span>{p.location}</span>
                  </p>
                  <div className={styles.pathBody}>
                    <div className={styles.pathMain}>
                      <h3 className={`${styles.cardTitle} ${styles.cardTitleLg}`}>{p.name}</h3>
                      <p className={styles.cardText}>{p.learns}</p>
                      {p.entryNote && (
                        <div className={styles.routeNote}>
                          <p className={styles.routeNoteLabel}>About this route</p>
                          <p>{p.entryNote}</p>
                        </div>
                      )}
                      <p className={styles.pathLinks}>
                        <SourceLink href={getRegistrySource(p.urlSourceId)!.url}>Official program page</SourceLink>
                      </p>
                      {extra.length > 0 && <Cite ids={extra} className={styles.claimCite} />}
                    </div>
                    <div className={styles.why}>
                      <p className={styles.whyLabel}>Why it connects to the work</p>
                      {p.roleRationale
                        .filter((w) => details.roleIds.includes(w.roleId) && (!role || w.roleId === role.id))
                        .map((w) => (
                          <div key={w.roleId} className={styles.whyItem}>
                            <SelectionLink section="who" href={href({ section: "who", role: w.roleId })} className="tag tag-neutral">
                              {getRoleProfile(w.roleId)!.title}
                              <Icon name="arrowRight" small />
                            </SelectionLink>
                            <p>{w.why}</p>
                          </div>
                        ))}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className={styles.empty}>
            <p className={styles.emptyTitle}>No checked pathways for this role yet.</p>
            <p className={styles.bandNote}>We only list routes we have checked on an official program page.</p>
          </div>
        )}
      </PagedPanel>
    </>
  );
}

function JobBody({ job, roles, today, titleId }: { job: JobExample; roles: RoleProfile[]; today: string; titleId: string }) {
  const posting = getRegistrySource(job.postingSourceId)!;
  const linked = roles.filter((r) => job.roleIds.includes(r.id));
  return (
    <div className={styles.jobBody}>
      <span>
        <span className={styles.savedOn}>Saved {formatDate(job.capturedOn)}</span>
      </span>
      <h4 id={titleId} data-job-detail="" tabIndex={-1} className={`display ${styles.heading}`}>
        {job.title}
      </h4>
      <div>
        <p className={styles.jobEmployer}>{job.employer}</p>
        <p className={styles.jobSmall}>{job.employerNote.text}</p>
        <Cite ids={job.employerNote.sourceIds} />
      </div>
      <dl className={styles.jobMeta}>
        {job.location && (
          <>
            <dt>Location</dt>
            <dd>{job.location}</dd>
          </>
        )}
        {job.arrangement && (
          <>
            <dt>Work arrangement</dt>
            <dd>{job.arrangement}</dd>
          </>
        )}
        {job.level && (
          <>
            <dt>Experience</dt>
            <dd>{job.level}</dd>
          </>
        )}
        {job.publishedOn && (
          <>
            <dt>Posted</dt>
            <dd>{formatDate(job.publishedOn)}</dd>
          </>
        )}
      </dl>
      <p className={styles.jobSummary}>{job.summary}</p>
      <div>
        <p className={styles.jobLabel}>The work, in our words</p>
        <ul className={styles.bullets}>
          {job.duties.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </div>
      <div>
        <p className={styles.jobLabel}>Skills the posting asks for</p>
        <p className={styles.jobSmall}>{job.skills.join(" · ")}</p>
      </div>
      {job.excerpt && (
        <blockquote className={styles.excerpt}>
          “{job.excerpt}” <span className="cap">— {job.employer} posting</span>
        </blockquote>
      )}
      {(job.classroomConnection || linked.length > 0) && (
        <div>
          <p className={styles.jobLabel}>Classroom connection</p>
          <p className={styles.jobSmall}>{job.classroomConnection ?? linked[0].classroomConnection}</p>
        </div>
      )}
      {job.limitation && (
        <p className={styles.jobSmall}>
          <strong>What this example establishes:</strong> {job.limitation}
        </p>
      )}
      {job.applicationDeadline && (
        <p className={styles.jobSmall}>
          <strong>Application deadline:</strong> {formatDate(job.applicationDeadline)}
        </p>
      )}
      <div className={styles.status}>
        <p className={styles.statusTitle}>{jobStatusLabel(job, today)}</p>
        <p className={styles.jobSmall}>{job.status.note}</p>
      </div>
      <p className="small">
        <SourceLink href={posting.url}>{job.postingCopySite ? `Posting copy on ${job.postingCopySite}` : "Original posting"}</SourceLink>
      </p>
    </div>
  );
}
