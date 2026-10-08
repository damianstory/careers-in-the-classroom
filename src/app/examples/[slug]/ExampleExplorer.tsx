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
import { exploreHref, landingSection, type ExploreState, type Selection, type View } from "@/lib/example-navigation";
import { checkedRange, formatDate, jobStatusLabel } from "@/lib/job-status";
import type { ExampleContext } from "@/lib/search";
import { GatedNews, SaveExample, SpeakerButton } from "./ExampleParts";
import { ExploreFocus } from "./ExploreFocus";
import { SourcesAndFit } from "./ExampleSections";
import { RailField } from "./RailField";
import { RailNav, type RailItem } from "./RailNav";
import { SectionDivider } from "./SectionDivider";
import { SectionLink, SelectionLink } from "./SectionLink";
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

const NAV: { label: string; short: string; view: View }[] = [
  { label: "Classroom story", short: "Story", view: "story" },
  { label: "Company", short: "Company", view: "company" },
  { label: "Roles", short: "Roles", view: "roles" },
  { label: "Pathways", short: "Pathways", view: "pathways" },
];

const two = (n: number) => String(n).padStart(2, "0");

// One long page (plan: docs/build/PLAN-b2-one-page.md): the classroom story, then Company, Roles and
// Pathways, each a <section id> with its own h2, then the shared end blocks once.
// Desktop (≥961px): a full-height dark green rail column beside the content. Its dither field is an
// out-of-flow overlay (RailField), and the label and section links stay pinned while the page scrolls.
// Phones and tablets: the rail column dissolves and its links become a sticky tab bar.
export function ExampleExplorer({ e, details, views, ctx, state, navKey, news, speakerTopic, today }: Props) {
  const roles = details ? details.roleIds.map((id) => getRoleProfile(id)!) : [];
  const href: Href = (t) => exploreHref(e.slug, ctx?.query ?? "", t);
  const selection: Selection = { role: state.role, job: state.job };
  const isCharity = details && getOrganization(details.organizationId)?.organizationType === "charity";
  const label = (v: View) => (v === "company" && isCharity ? "Organization" : NAV.find((n) => n.view === v)!.label);
  const items: RailItem[] = NAV.filter((n) => views.includes(n.view)).map((n) => ({
    section: n.view,
    // Section links keep the selection, so a copied link or a no-JS jump changes nothing else.
    href: href({ section: n.view, ...selection }),
    label: label(n.view),
    short: n.view === "company" && isCharity ? "Organization" : n.short,
  }));
  const divider = (v: View) => <SectionDivider num={two(views.indexOf(v) + 1)} label={label(v)} />;

  return (
    <>
      <ExploreFocus views={views} role={state.role} job={state.job} navKey={navKey} />

      <div className={styles.shell}>
        <div className={styles.railColumn} data-rail-column="">
          <div className={styles.railFx} aria-hidden="true">
            <RailField />
          </div>
          <Link href={ctx?.backHref ?? "/"} className={styles.back}>
            <Icon name="arrowLeft" small />
            {ctx ? "Back to results" : "All examples"}
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
            <RailNav items={items} initial={landingSection(views, "", state.view, selection) ?? "story"} />
          </div>
        </div>

        <div className={styles.content}>
          <section id="story" className={styles.section} aria-labelledby="story-title">
            <StoryView e={e} details={details} views={views} ctx={ctx} roles={roles} href={href} selection={selection} news={news} />
          </section>
          {views.includes("company") && details && (
            <section id="company" className={styles.section} aria-labelledby="company-title">
              {divider("company")}
              <CompanyView e={e} details={details} roles={roles} href={href} />
            </section>
          )}
          {views.includes("roles") && (
            <section id="roles" className={styles.section} aria-labelledby="roles-title">
              {divider("roles")}
              <RolesView e={e} details={details} roles={roles} selection={selection} href={href} today={today} />
            </section>
          )}
          {views.includes("pathways") && (
            <section id="pathways" className={styles.section} aria-labelledby="pathways-title">
              {divider("pathways")}
              <PathwaysView e={e} details={details} selection={selection} href={href} />
            </section>
          )}

          <SourcesAndFit e={e} checked={pageChecked(e, details)} />

          <aside className={`${base.band} ${base.flush} ${base.last}`} aria-label="Bring this work into class">
            <div className={`${base.darkPanel} ${styles.cta}`}>
              <Corners />
              <div>
                <h2 className={styles.ctaTitle}>Bring this work into class</h2>
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
function Heading({ id, level = 2, children }: { id: string; level?: 1 | 2; children: React.ReactNode }) {
  const Tag = level === 1 ? "h1" : "h2";
  return (
    <Tag id={id} tabIndex={-1} className={`display ${base.title} ${styles.heading}`}>
      {children}
    </Tag>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className={`eyebrow ${base.marked}`}>{children}</p>;
}

// The organization's own logo in the story's course-fit column. A white
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
        <Link href="/#library" className={styles.pickClass}>
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

function StoryView({
  e,
  details,
  views,
  ctx,
  roles,
  href,
  selection,
  news,
}: {
  e: Example;
  details?: ExampleDetails;
  views: View[];
  ctx: ExampleContext | null;
  roles: RoleProfile[];
  href: Href;
  selection: Selection;
  news?: NewsItem;
}) {
  const story = details?.story;
  const org = details ? getOrganization(details.organizationId) : undefined;
  const roleTitles = details ? roles.map((r) => r.title) : e.roles.map((r) => r.title);
  // GHGSat's story is built around its instrument panel; flow schematics (Wilder, E3) use the dark ask panel.
  const instrument = story?.diagramKind === "methane";
  const askText = story?.discussion ?? e.prompt;

  return (
    <>
      <header className={`${base.band} ${base.hero} ${styles.storyHero}`}>
        <Heading id="story-title" level={1}>
          {e.question}
        </Heading>
        <div className={styles.storyIntro}>
          <div>
            <p className={styles.orgLine}>
              <strong>{e.org}</strong> · {e.localShort}
            </p>
            <ExampleIllustration slug={e.slug} variant="story" />
          </div>
          <div className={styles.storyDetails}>
            {org?.logo && <OrgLogo logo={org.logo} />}
            <FitsPanel e={e} ctx={ctx} />
          </div>
        </div>
      </header>

      {instrument ? (
        <section className={`${base.band} ${base.tint} ${base.rule}`} aria-labelledby="use-title">
          <h2 id="use-title" className={`display ${base.h2}`}>
            Use it in class
          </h2>
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
              <h2 id="use-title" className={styles.askPanelTitle}>
                Use it in class
              </h2>
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

      {story && <StoryDiagram story={story} headingId="schematic-title" />}

      {story ? (
        <section
          className={`${base.band} ${instrument ? `${base.rule} ${styles.lessonGap}` : base.tint}`}
          aria-labelledby="steps-title"
        >
          <div className={instrument ? styles.lessonSplit : undefined}>
            <div>
              <h2 id="steps-title" className={`display ${base.h2}`}>
                The lesson, in the real world
              </h2>
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
          <h2 id="work-title" className={`display ${base.h2}`}>
            The work
          </h2>
          <p className={styles.lessonLede}>{e.work}</p>
          {e.status && (
            <p className={styles.stage}>
              <strong>Status today:</strong> {e.status}
            </p>
          )}
        </section>
      )}

      <div className={`${base.band} ${instrument ? `${base.tint} ${base.rule}` : ""}`}>
        <section className={styles.teasers} aria-label="Keep going">
          {org && views.includes("company") && (
            <div className={styles.teaser}>
              <p className={styles.teaserLabel}>Meet the {org.organizationType === "charity" ? "organization" : "company"}</p>
              <p className={styles.teaserName}>{org.name}</p>
              <p className={styles.teaserText}>{org.tagline}</p>
              <p className={styles.teaserAction}>
                <SectionLink section="company" href={href({ section: "company", ...selection })} className={styles.arrowLink} id="story-to-company">
                  Meet {org.name}
                  <Icon name="arrowRight" small />
                </SectionLink>
              </p>
            </div>
          )}
          {views.includes("roles") && (
            <div className={styles.teaser}>
              <p className={styles.teaserLabel}>Who does this work?</p>
              <ul className={styles.teaserRoles}>
                {roleTitles.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <p className={styles.teaserAction}>
                <SectionLink section="roles" href={href({ section: "roles", ...selection })} className={styles.arrowLink} id="story-to-roles">
                  See the roles
                  <Icon name="arrowRight" small />
                </SectionLink>
              </p>
            </div>
          )}
          {!views.includes("company") && views.includes("pathways") && (
            <div className={styles.teaser}>
              <p className={styles.teaserLabel}>For your students</p>
              <p className={styles.teaserText}>Programs that teach skills this work uses.</p>
              <p className={styles.teaserAction}>
                <SectionLink section="pathways" href={href({ section: "pathways", ...selection })} className={styles.arrowLink} id="story-to-pathways">
                  See the pathways
                  <Icon name="arrowRight" small />
                </SectionLink>
              </p>
            </div>
          )}
        </section>

        {news && (
          <section className={styles.news} aria-labelledby="news-title">
            <GatedNews
              contextLabel={ctx?.label ?? `${e.org} example`}
              headingId="news-title"
              news={{
                title: news.title,
                published: news.published,
                status: news.status,
                statusShort: news.statusShort,
                summary: news.summary,
                ask: news.ask,
                source: news.sources[0],
              }}
            />
          </section>
        )}
      </div>
    </>
  );
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

function CompanyView({ e, details, roles, href }: { e: Example; details: ExampleDetails; roles: RoleProfile[]; href: Href }) {
  const org = getOrganization(details.organizationId)!;
  const website = getRegistrySource(org.websiteSourceId)!;
  const careers = org.careersSourceId ? getRegistrySource(org.careersSourceId) : undefined;
  const charity = org.organizationType === "charity";
  return (
    <>
      <header className={`${base.band} ${base.hero}`}>
        <Heading id="company-title">{org.name}</Heading>
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

      <section className={`${base.band} ${base.rule}`} aria-labelledby="people-title">
        <h3 id="people-title" className={`display ${base.h2}`}>
          People behind the work
        </h3>
        <ul className={styles.cardGrid}>
          {roles.map((r) => {
            const link = getOrganizationRole(org.id, r.id);
            return (
              <li key={r.id} className={styles.card}>
                {link && (
                  <div className={styles.cardStrip}>
                    <EvidenceTag kind={link.kind}>{link.label}</EvidenceTag>
                  </div>
                )}
                <div className={styles.cardBody}>
                  <h4 className={styles.cardTitle}>
                    <SelectionLink section="roles" href={href({ section: "roles", role: r.id })} className={styles.cardLink}>
                      {r.title}
                      <Icon name="arrowRight" />
                    </SelectionLink>
                  </h4>
                  <p className={styles.cardText}>{r.summary}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <div className={styles.notes}>
          <p>Read each source’s date and scope: a documented role is not proof of a current vacancy or of where every position is based.</p>
          <p>
            Reported as {org.name} states it. {e.org} has not reviewed or endorsed this page.
          </p>
        </div>
      </section>
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
}: {
  e: Example;
  details?: ExampleDetails;
  roles: RoleProfile[];
  selection: Selection;
  href: Href;
  today: string;
}) {
  // Not yet enriched: the sourced role list only, framed for students. No role pages.
  if (!details) {
    return (
      <>
        <header className={`${base.band} ${base.hero}`}>
          <Eyebrow>For your students</Eyebrow>
          <Heading id="roles-title">People doing this work</Heading>
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
          <Eyebrow>For your students</Eyebrow>
          <Heading id="roles-title">Roles documented at {org.name}</Heading>
          <p className={base.lede}>What this kind of work involves, with real job examples and ways to prepare for each.</p>
        </header>
        <div className={`${base.band} ${base.tint} ${base.rule}`}>
          <ul className={styles.cardGrid}>
            {roles.map((r) => {
              const link = getOrganizationRole(org.id, r.id);
              return (
                <li key={r.id} className={styles.card}>
                  {link && (
                    <div className={styles.cardStrip}>
                      <EvidenceTag kind={link.kind}>{link.label}</EvidenceTag>
                    </div>
                  )}
                  <div className={styles.cardBody}>
                    <h3 className={`${styles.cardTitle} ${styles.cardTitleLg}`}>
                      <SelectionLink section="roles" href={href({ section: "roles", role: r.id })} className={styles.cardLink}>
                        {r.title}
                        <Icon name="arrowRight" />
                      </SelectionLink>
                    </h3>
                    <p className={styles.cardText}>{r.summary}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <p className={`${styles.markedNote} ${base.marked}`}>
            Each card says how this work is documented at {e.org}. Dated accounts and postings are not a current staff roster or a promise of a vacancy.
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
        <SelectionLink section="roles" href={href({ section: "roles" })} className={styles.upLink}>
          <Icon name="arrowLeft" small />
          All roles at {org.name}
        </SelectionLink>
        <Eyebrow>Role</Eyebrow>
        <Heading id="roles-title">{role.title}</Heading>
        <p className={base.lede}>{role.summary}</p>
        <div className={styles.roleTags}>
          {link && <EvidenceTag kind={link.kind}>{link.label}</EvidenceTag>}
          <EvidenceTag kind="interpreted">General explanation, written by us</EvidenceTag>
          {link && <Cite ids={link.sourceIds} className={styles.claimCite} />}
        </div>
        <p className={styles.explanation}>{role.explanation}</p>
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
              <SelectionLink section="pathways" href={href({ section: "pathways" })} className={styles.arrowLink}>
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
                    <SelectionLink section="roles" href={href({ section: "roles", role: id })}>
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
  const jobHref = (id?: string) => href({ section: "roles", role: role.id, job: id });

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
                  section="roles"
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
      <Heading id="pathways-title">Ways to prepare for this work</Heading>
      <p className={base.lede}>
        {details
          ? "Programs that teach skills this work uses. Each is one route in, not a requirement, and no program has endorsed this page."
          : "Study directions, what an employer asked for, and routes people have taken. Each card says which it is."}
      </p>
      {role && (
        <p className={styles.filterLine} data-pathway-filter="">
          Showing routes for <strong>{role.title.toLowerCase()}</strong>.{" "}
          <SelectionLink section="pathways" href={href({ section: "pathways" })}>
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
                        .filter((w) => !role || w.roleId === role.id)
                        .map((w) => (
                          <div key={w.roleId} className={styles.whyItem}>
                            <SelectionLink section="roles" href={href({ section: "roles", role: w.roleId })} className="tag tag-neutral">
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
