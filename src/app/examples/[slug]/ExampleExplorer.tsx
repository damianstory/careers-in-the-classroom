import Image from "next/image";
import Link from "next/link";
import { EvidenceTag } from "@/components/EvidenceTag";
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
  type OrganizationLogo,
  type RoleProfile,
} from "@/content";
import { exploreHref, landingSection, layoutBootstrap, PART_LABELS, SHOW_PARTS, type ExploreState, type Selection, type View } from "@/lib/example-navigation";
import { checkedRange, formatDate, jobStatusLabel } from "@/lib/job-status";
import type { ExampleContext } from "@/lib/search";
import { GatedNews, SaveExample, SpeakerButton } from "./ExampleParts";
import { ExploreFocus } from "./ExploreFocus";
import { SourcesAndFit } from "./ExampleSections";
import { RailField } from "./RailField";
import { RailNav, type RailItem } from "./RailNav";
import { SectionDivider } from "./SectionDivider";
import { SectionLink, SelectionLink } from "./SectionLink";
import { Presentation, PresentButton } from "./Presentation";
import { buildFrames } from "./PresentationFrames";
import { StoryDiagram } from "./StoryDiagram";
import base from "./example.module.css";
import styles from "./explore.module.css";

interface Props {
  e: Example;
  /** Enriched records (organization, role profiles, job examples). Absent for examples not yet enriched. */
  details?: ExampleDetails;
  views: View[];
  ctx: ExampleContext | null;
  state: ExploreState;
  /** The page's query, normalized (selectionQuery): changes with every navigation to another URL. */
  navKey: string;
  news?: NewsItem;
  speakerTopic: string;
  today: string;
}

function Cite({ ids, className }: { ids: string[]; className?: string }) {
  if (!ids.length) return null;
  return (
    <span className={className ?? styles.cite}>
      Source:{" "}
      {ids.map((id, i) => {
        const s = getRegistrySource(id);
        return (
          <span key={id}>
            {i > 0 && "; "}
            {s ? <SourceLink href={s.url}>{s.label}</SourceLink> : id}
          </span>
        );
      })}
    </span>
  );
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

export function ExampleExplorer({ e, details, views, ctx, state, navKey, news, speakerTopic, today }: Props) {
  const roles = details ? details.roleIds.map((id) => getRoleProfile(id)!) : [];
  const href: Href = (t) => exploreHref(e.slug, ctx?.query ?? "", t);
  const selection: Selection = { role: state.role, job: state.job };
  const label = (v: View) => v === "about" ? `About ${e.org}` : PART_LABELS[v];
  const items: RailItem[] = views.map((section) => ({ section, href: href({ section, ...selection }), label: label(section) }));
  const show = views.filter((v) => SHOW_PARTS.includes(v));
  const end = (part: View) => {
    const index = show.indexOf(part);
    const link = (target: View, prefix: string) => <SectionLink section={target} href={href({ section: target, ...selection })}>{prefix}{label(target)}</SectionLink>;
    return <nav className={styles.partSteps} aria-label={`${label(part)} navigation`}>
      {index < 0 ? link("question", "Back to: ") : <>
        {index > 0 && link(show[index - 1], "Previous: ")}
        {index < show.length - 1 && link(show[index + 1], "Next: ")}
      </>}
    </nav>;
  };
  const partHeader = (part: View) => <>
    <SectionDivider num={show.includes(part) ? String(show.indexOf(part) + 1).padStart(2, "0") : ""} label={label(part)} />
    <header className={styles.partHeader}>
      <Heading id={`${part}-title`}>{label(part)}</Heading>
      {show.includes(part) && <PresentButton part={part} />}
    </header>
  </>;

  return (
    <>
      <ExploreFocus views={views} role={state.role} job={state.job} navKey={navKey} />

      <div className={styles.shell} data-example-root="" suppressHydrationWarning>
        <script id={`example-layout-${e.slug}`} dangerouslySetInnerHTML={{ __html: layoutBootstrap(views, selection) }} />
        <Presentation key={`${e.slug}:${state.role ?? "all"}`} frames={buildFrames(e, details, views, selection)} />
        <div className={styles.railColumn} data-rail-column="">
          <div className={styles.railFx} aria-hidden="true">
            <RailField />
          </div>
          <Link href={ctx?.backHref ?? "/connections"} className={styles.back}>
            <Icon name="arrowLeft" small />
            {ctx ? "Back to results" : "All connections"}
          </Link>
          <div className={styles.railSticky} id="explore-strip" data-rail-sticky="">
            <p className={styles.stripLabel} data-context={ctx ? "" : undefined}>
              {ctx ? (
                <>
                  <span className={styles.stripEyebrow}>Your lesson</span> <strong>{ctx.label}</strong>
                </>
              ) : (
                <>
                  <span className={styles.stripEyebrow}>Classroom example</span> <strong>{e.org}</strong>
                </>
              )}
            </p>
            <RailNav items={items} initial={landingSection(views, "", state.view, selection) ?? "question"} />
          </div>
        </div>

        <div className={styles.content}>
          <div className={`${base.band} ${base.hero} ${styles.pageTitle}`} data-example-title="">
            <Heading id="question-title" level={1}>{e.question}</Heading>
          </div>
          <section id="question" data-part="" className={styles.section} aria-labelledby="question-title">
            <header className={styles.questionControls}><PresentButton part="question" /></header>
            <QuestionView e={e} ctx={ctx} />
            {end("question")}
          </section>
          <section id="how-it-works" data-part="" className={styles.section} aria-labelledby="how-it-works-title">
            {partHeader("how-it-works")}
            <HowView e={e} details={details} />
            {end("how-it-works")}
          </section>
          {views.includes("who") && <section id="who" data-part="" className={styles.section} aria-labelledby="who-title">
            {partHeader("who")}
            <RolesView e={e} details={details} roles={roles} selection={selection} href={href} today={today} ctx={ctx} />
            {end("who")}
          </section>}
          {views.includes("ways-in") && <section id="ways-in" data-part="" className={styles.section} aria-labelledby="ways-in-title">
            {partHeader("ways-in")}
            <PathwaysView e={e} details={details} selection={selection} href={href} />
            {end("ways-in")}
          </section>}
          <section id="ask" data-part="" className={styles.section} aria-labelledby="ask-title">
            {partHeader("ask")}
            <AskView e={e} details={details} />
            {end("ask")}
          </section>
          {views.includes("about") && details && <section id="about" data-part="" className={styles.section} aria-labelledby="about-title">
            {partHeader("about")}
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
            {end("about")}
          </section>}
          <section id="sources" data-part="" className={styles.section} aria-labelledby="sources-title">
            <SectionDivider num="" label="Sources" />
            <SourcesAndFit e={e} checked={pageChecked(e, details)} />
            {end("sources")}
          </section>
        </div>
      </div>
    </>
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
    <Tag id={id} tabIndex={-1} className={`display ${base.title} ${styles.heading}`}>
      {children}
    </Tag>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className={`eyebrow ${base.marked}`}>{children}</p>;
}

// The organization's own identification logo in About. A white
// logo sits on the dark plate; a coloured one on a white plate with a hairline.
function OrgLogo({ logo }: { logo: OrganizationLogo }) {
  return (
    <figure className={styles.logo} data-logo="">
      <div className={styles.logoPlate} data-plate={logo.onDark ? "dark" : "light"}>
        <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} unoptimized loading="eager" className={styles.logoImg} />
      </div>
      <figcaption className={styles.logoCaption}>Logo shown for identification only</figcaption>
    </figure>
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
              {c.topic}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function QuestionView({ e, ctx }: { e: Example; ctx: ExampleContext | null }) {
  return <>
      <header className={`${base.band} ${base.hero} ${styles.storyHero}`}>
        <div className={styles.storyIntro}>
          <div>
            <p className={styles.orgLine}>
              <strong>{e.org}</strong> · {e.localShort}
            </p>
            <ExampleIllustration slug={e.slug} variant="story" />
          </div>
          <div className={styles.storyDetails}>
            <FitsPanel e={e} ctx={ctx} />
          </div>
        </div>
      </header>

</>;
}

function AskView({ e, details }: { e: Example; details?: ExampleDetails }) {
  const instrument = details?.story?.diagramKind === "methane";
  const askText = details?.story?.discussion ?? e.prompt;
  return <>
      {instrument ? (
        <section className={`${base.band} ${base.tint} ${base.rule}`} aria-labelledby="use-title">
          <h3 id="use-title" className={`display ${base.h2}`}>
            Use it in class
          </h3>
          <div className={styles.useCard}>
            <p className={`eyebrow ${base.marked}`}>Ask the class</p>
            <p className={styles.askText}>{askText}</p>
            <div className={styles.useGrid}>
              <p className={styles.explain}>{e.explain}</p>
              <Mindset text={e.mindset} />
            </div>
          </div>
        </section>
      ) : (
        <section className={`${base.band} ${base.flush}`} aria-labelledby="use-title">
          <div className={styles.useSplit}>
            <div className={`${base.darkPanel} ${styles.askPanel}`}>
              <span className={`${base.corner} ${base.cornerTl}`} aria-hidden="true" />
              <span className={`${base.corner} ${base.cornerBr}`} aria-hidden="true" />
              <h3 id="use-title" className={styles.askPanelTitle}>
                Use it in class
              </h3>
              <p className={`eyebrow ${base.marked} ${styles.askPanelLabel}`}>Ask the class</p>
              <p className={styles.askPanelText}>{askText}</p>
            </div>
            <div className={styles.useSide}>
              <p className={styles.explain}>{e.explain}</p>
              <Mindset text={e.mindset} />
            </div>
          </div>
        </section>
      )}

</>;
}

function HowView({ e, details }: { e: Example; details?: ExampleDetails }) {
  const story = details?.story;
  const instrument = story?.diagramKind === "methane";
  return <>
      {story && <StoryDiagram story={story} headingId="schematic-title" />}

      {story ? (
        <section
          className={`${base.band} ${instrument ? `${base.rule} ${styles.lessonGap}` : base.tint}`}
          aria-labelledby="steps-title"
        >
          <div className={instrument ? styles.lessonSplit : undefined}>
            <div>
              <h3 id="steps-title" className={`display ${base.h2}`}>
                The lesson, in the real world
              </h3>
              <p className={styles.lessonLede}>{story.subtitle}</p>
              {e.status && (
                <p className={styles.stage}>
                  <strong>Project stage:</strong> {e.status}
                </p>
              )}
            </div>
            <div>
              <ol className={instrument ? styles.stepList : styles.stepRow}>
                {story.steps.map((s, i) => (
                  <li key={i}>
                    <span className={styles.stepNum}>{i + 1}</span>
                    <div className={styles.stepText}>
                      <p>{s.text}</p>
                      {s.kind === "interpreted" && <EvidenceTag kind="interpreted">Our explanation</EvidenceTag>}
                    </div>
                  </li>
                ))}
              </ol>
              <Cite ids={[...new Set(story.steps.flatMap((s) => s.sourceIds))]} className={styles.stepCite} />
            </div>
          </div>
        </section>
      ) : (
        <section className={`${base.band} ${base.rule}`} aria-labelledby="work-title">
          <h3 id="work-title" className={`display ${base.h2}`}>
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

function Mindset({ text }: { text: string }) {
  return (
    <div className={styles.mindset}>
      <p className={styles.mindsetLabel}>Mindset it shows</p>
      <p className={styles.mindsetText}>{text}</p>
    </div>
  );
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
        {org.logo && <OrgLogo logo={org.logo} />}
        <p className={base.lede}>{org.tagline}</p>
      </header>

      <div className={`${base.band} ${base.flush}`}>
        <div className={`${base.darkPanel} ${styles.factsPanel}`}>
          <span className={`${base.corner} ${base.cornerTl}`} aria-hidden="true" />
          <span className={`${base.corner} ${base.cornerBr}`} aria-hidden="true" />
          <dl className={styles.facts} aria-label={charity ? "Organization facts" : "Company facts"}>
            <div>
              <dt>Headquarters</dt>
              <dd className={styles.factValue}>{org.headquarters.text}</dd>
              <dd className={styles.factSource}>
                <Cite ids={org.headquarters.sourceIds} className={styles.claimCite} />
              </dd>
            </div>
            <div>
              <dt>Local connection</dt>
              <dd className={styles.factValue}>{org.localConnection.text}</dd>
              <dd className={styles.factSource}>
                <Cite ids={org.localConnection.sourceIds} className={styles.claimCite} />
              </dd>
            </div>
            <div>
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
      <>
        <header className={`${base.band} ${base.hero}`}>
          <p className={base.lede}>People doing this work</p>
          <p className={base.lede}>Kinds of work behind this example, and how we know about them.</p>
        </header>
        <div className={`${base.band} ${base.tint} ${base.rule}`}>
          <ul className={styles.cardGrid}>
            {e.roles.map((r) => (
              <li key={r.title} className={styles.card}>
                <div className={styles.cardStrip}>
                  <EvidenceTag kind={r.kind}>{r.evidence}</EvidenceTag>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{r.title}</h3>
                  <p className={styles.cardText}>{r.note}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className={`${styles.markedNote} ${base.marked}`}>{e.rolesNote}</p>
        </div>
      </>
    );
  }
  const org = getOrganization(details.organizationId)!;
  const role = selection.role ? getRoleProfile(selection.role) : undefined;

  // No role selected: the role list. A selected role opens here, in place of the list.
  if (!role) {
    return (
      <>
        <header className={`${base.band} ${base.hero}`}>
          <p className={base.lede} data-role-scope="">{roles.some((r) => !getOrganizationRole(org.id, r.id) || getOrganizationRole(org.id, r.id)?.establishes === "related-work") ? `Roles connected to this example` : `Roles documented at ${org.name}`}</p>
          <p className={base.lede}>What this kind of work involves, with real job examples and ways to prepare for each.</p>
        </header>
        <div className={`${base.band} ${base.tint} ${base.rule}`}>
          <ul className={styles.cardGrid}>
            {roles.map((r) => {
              const link = getOrganizationRole(org.id, r.id);
              return (
                <li key={r.id} className={styles.card}>
                  <div className={styles.cardStrip}>
                    {link ? <EvidenceTag kind={link.kind}>{link.label}</EvidenceTag> : <EvidenceTag kind="interpreted">Related work at another employer</EvidenceTag>}
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={`${styles.cardTitle} ${styles.cardTitleLg}`}>
                      <SelectionLink section="who" href={href({ section: "who", role: r.id })} className={styles.cardLink}>
                        {r.title}
                        <Icon name="arrowRight" />
                      </SelectionLink>
                    </h3>
                    <p className={styles.cardText}>{r.summary}</p>
                    <p className={styles.cardText}><strong>{ctx ? ctx.label.split(" · ")[0] : "Classroom connection"}</strong><br />{r.classroomConnection}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <p className={`${styles.markedNote} ${base.marked}`}>
            Cards distinguish work documented at {e.org} from related work at other employers. Dated accounts and postings are not a current staff roster or a promise of a vacancy.
          </p>
        </div>
      </>
    );
  }

  const link = getOrganizationRole(org.id, role.id);
  const pathways = details.pathwayIds.map((id) => getPathway(id)!).filter((p) => p.roleRationale.some((r) => r.roleId === role.id));
  const others = details.roleIds.filter((id) => id !== role.id);
  return (
    <>
      <header className={`${base.band} ${base.hero}`}>
        <SelectionLink section="who" href={href({ section: "who" })} className={styles.upLink}>
          <Icon name="arrowLeft" small />
          All roles in this example
        </SelectionLink>
        <Eyebrow>Role</Eyebrow>
        <Heading id="roles-title" level={3}>{role.title}</Heading>
        <p className={base.lede}>{role.summary}</p>
        <div className={styles.roleTags}>
          {link ? <EvidenceTag kind={link.kind}>{link.label}</EvidenceTag> : <EvidenceTag kind="interpreted">Related work at another employer</EvidenceTag>}
          <EvidenceTag kind="interpreted">General explanation, written by us</EvidenceTag>
          {link && <Cite ids={link.sourceIds} className={styles.claimCite} />}
        </div>
        {role.explanation.trim() !== role.summary.trim() && <p className={styles.explanation}>{role.explanation}</p>}
      </header>

      <section className={`${base.band} ${base.tint} ${base.rule}`} aria-labelledby="tasks-title">
        <h3 id="tasks-title" className={`display ${base.h2}`}>
          What might you actually do?
        </h3>
        <ul className={`${base.darkPanel} ${styles.tasks}`}>
          {role.tasks.map((t) => (
            <li key={t.title}>
              <h4 className={styles.taskTitle}>{t.title}</h4>
              <p className={styles.taskText}>{t.detail}</p>
            </li>
          ))}
        </ul>
        <p className={styles.bandNote}>Typical of this kind of work in general. Not a description of any one person’s job at {org.name}.</p>
      </section>

      <div className={`${base.band} ${base.rule}`}>
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
            <dt>Classroom connection</dt>
            <dd>{role.classroomConnection}</dd>
          </div>
        </dl>
      </div>

      <RoleJobs role={role} roles={roles} details={details} selection={selection} href={href} today={today} />

      <div className={`${base.band} ${base.tint} ${base.rule}`}>
        <div className={styles.nextSteps}>
          <section aria-labelledby="prepare-title">
            <h3 id="prepare-title" className={`display ${base.h2}`}>
              How to prepare
            </h3>
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
          {others.length > 0 && (
            <nav aria-labelledby="others-title">
              <h3 id="others-title" className={`display ${base.h2}`}>
                Other roles
              </h3>
              <ul className={styles.otherRoles}>
                {others.map((id) => (
                  <li key={id}>
                    <SelectionLink section="who" href={href({ section: "who", role: id })}>
                      {getRoleProfile(id)!.title}
                      <Icon name="arrowRight" small />
                    </SelectionLink>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </>
  );
}

const isOpen = (j: JobExample, today: string) => jobStatusLabel(j, today).startsWith("Accepting");

function StatusTag({ job, today }: { job: JobExample; today: string }) {
  return isOpen(job, today) ? <span className="tag">Accepting applications</span> : <span className="tag tag-neutral">Historical example</span>;
}

// Job examples are cards that open in place; the open card's row keeps focus and its URL survives reload.
function RoleJobs({
  role,
  roles,
  details,
  selection,
  href,
  today,
}: {
  role: RoleProfile;
  roles: RoleProfile[];
  details: ExampleDetails;
  selection: Selection;
  href: Href;
  today: string;
}) {
  const jobs = details.jobIds.map((id) => getJob(id)!).filter((j) => j.roleIds.includes(role.id));
  const jobHref = (id?: string) => href({ section: "who", role: role.id, job: id });

  return (
    <section className={`${base.band} ${base.rule}`} aria-labelledby="jobs-title">
      <h3 id="jobs-title" className={`display ${base.h2}`}>
        Real job examples
      </h3>
      <p className={styles.jobsIntro}>
        How employers have described this kind of work, saved on the date shown. Employers have not reviewed or endorsed this page.
      </p>
      {jobs.length === 0 ? (
        <div className={styles.empty}>
          <p className={styles.emptyTitle}>No saved job examples for this role yet.</p>
          <p className={styles.bandNote}>We only save postings we could open, on the employer’s own board or as an attributed copy.</p>
        </div>
      ) : (
        <ul className={styles.jobList}>
          {jobs.map((j) => {
            const open = selection.job === j.id;
            return (
              <li key={j.id} className={`${styles.jobItem} ${open ? styles.jobOpen : ""}`}>
                <SelectionLink
                  section="who"
                  href={jobHref(open ? undefined : j.id)}
                  row
                  className={styles.jobRow}
                  aria-expanded={open}
                  data-job-detail={open ? "" : undefined}
                >
                  <span className={styles.jobRowMain}>
                    <span className={styles.jobTitle}>{j.title}</span>
                    <span className={styles.jobMetaLine}>
                      {j.employer}
                      {j.location ? ` · ${j.location}` : ""}
                    </span>
                  </span>
                  <StatusTag job={j} today={today} />
                  <Icon name="chevronDown" className={styles.chevron} />
                </SelectionLink>
                {open && (
                  <article className={styles.rowBody} aria-labelledby={`job-title-${j.id}`}>
                    <JobBody job={j} roles={roles} today={today} titleId={`job-title-${j.id}`} />
                  </article>
                )}
              </li>
            );
          })}
        </ul>
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
    <header className={`${base.band} ${base.hero}`}>
      <Eyebrow>For your students</Eyebrow>
      <Heading id="pathways-title" level={3}>Ways to prepare for this work</Heading>
      <p className={base.lede}>
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
        <div className={`${base.band} ${base.tint} ${base.rule}`}>
          <ul className={styles.pathList}>
            {e.pathways.map((p) => (
              <li key={p.label} className={styles.card}>
                <div className={styles.cardStrip}>
                  <EvidenceTag kind={p.kind}>{p.kindLabel}</EvidenceTag>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={`${styles.cardTitle} ${styles.cardTitleLg}`}>{p.label}</h3>
                  <p className={styles.cardText}>{p.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
  const shown = details.pathwayIds.map((id) => getPathway(id)!).filter((p) => !role || p.roleRationale.some((r) => r.roleId === role.id));

  return (
    <>
      {header}
      <div className={`${base.band} ${base.tint} ${base.rule}`}>
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
                      <p className={styles.whyLabel}>Why it connects to the work · our interpretation</p>
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
      </div>
    </>
  );
}

function JobBody({ job, roles, today, titleId }: { job: JobExample; roles: RoleProfile[]; today: string; titleId: string }) {
  const posting = getRegistrySource(job.postingSourceId)!;
  const linked = roles.filter((r) => job.roleIds.includes(r.id));
  return (
    <div className={styles.jobBody}>
      <span>
        <EvidenceTag kind={job.kind}>Employer posting · saved {formatDate(job.capturedOn)}</EvidenceTag>
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
