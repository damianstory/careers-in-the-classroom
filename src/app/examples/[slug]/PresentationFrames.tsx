import Image from "next/image";
import { ExampleIllustration } from "@/components/ExampleIllustration";
import { getOrganizationRole, getPathway, getRoleProfile, type Example, type ExampleDetails } from "@/content";
import { SEARCH_LOCATION, searchTitles } from "@/lib/job-search";
import { PART_LABELS, SHOW_PARTS, type Selection, type View } from "@/lib/example-navigation";
import type { PresentationFrame } from "./Presentation";
import { storyDiagram } from "./StoryDiagram";
import styles from "./explore.module.css";

export function buildFrames(e: Example, details: ExampleDetails | undefined, views: View[], selection: Selection): PresentationFrame[] {
  return views.filter((part) => SHOW_PARTS.includes(part)).map((part) => {
    const frame: PresentationFrame = { part, label: PART_LABELS[part], content: null };
    if (part === "question") frame.content = <div className={styles.projectQuestion}>
      <ExampleIllustration slug={e.slug} variant="story" /><p>{e.question}</p>
    </div>;
    if (part === "how-it-works") {
      const story = details?.story;
      const diagram = story ? storyDiagram(story) : undefined;
      frame.content = diagram && story ? <>
        <p>Schematic · not to scale</p>
        <h3>{diagram.heading}</h3>
        <div className={styles.projectDiagram}>
          <Image src={diagram.image} width={1344} height={756} alt={story.diagramAlt} sizes="70vw" />
          <ol>{diagram.steps.map((step) => <li key={step}>{step}</li>)}</ol>
        </div>
        <p>{diagram.note}</p>
        {"detail" in diagram && <p>{String(diagram.detail)}</p>}
      </> : <><p>{e.work}</p>{e.status && <p><strong>Status today:</strong> {e.status}</p>}</>;
    }
    if (part === "who") frame.content = <>
      <div className={`${styles.projectGrid} ${styles.projectRoles}`} style={{ gridTemplateColumns: `repeat(${(details?.roleIds.length ?? e.roles.length) > 4 ? 3 : 2}, minmax(0, 1fr))` }}>
        {details ? details.roleIds.map((id) => {
          const role = getRoleProfile(id)!;
          const evidence = getOrganizationRole(details.organizationId, id);
          return <div key={id}><h3>{role.title}</h3><p>{role.classroomConnection || role.summary}</p>{searchTitles(id).length > 0 && <p><strong>Search for:</strong> {searchTitles(id)[0]}</p>}<p className={styles.projectEvidence}>{evidence?.label ?? "Related work at another employer"}</p></div>;
        }) : e.roles.map((role) => <div key={role.title}><h3>{role.title}</h3><p>{role.note}</p><p>{role.evidence}</p></div>)}
      </div>
      <p>{details ? <>Searching these titles finds related {SEARCH_LOCATION} postings, not openings at {e.org}.</> : e.rolesNote}</p>
    </>;
    if (part === "ways-in") {
      const role = details && selection.role ? getRoleProfile(selection.role) : undefined;
      frame.content = <>
        <p>{details ? "Programs that teach skills this work uses. Each is one route in, not a requirement, and no program has endorsed this page." : "Study directions, what an employer asked for, and routes people have taken. Each card says which it is."}</p>
        {role && <p>Showing routes for <strong>{role.title.toLowerCase()}</strong>.</p>}
      </>;
      frame.cards = details ? details.pathwayIds.map((id) => getPathway(id)!)
        .filter((p) => !selection.role || p.roleRationale.some((r) => r.roleId === selection.role))
        .map((p) => <div key={p.id}><h3>{p.name}</h3><p>{p.provider}</p><p>{p.routeType} · {p.location}</p>{p.entryNote && <p>{p.entryNote}</p>}</div>)
        : e.pathways.map((p) => <div key={p.label}><h3>{p.label}</h3><p>{p.note}</p><p>{p.kindLabel}</p></div>);
      if (!frame.cards.length) frame.content = <>{frame.content}<p>No checked pathways for this role yet.</p><p>We only list routes we have checked on an official program page.</p></>;
    }
    if (part === "ask") frame.content = <div className={styles.projectAsk}><p>{details?.story?.discussion ?? e.prompt}</p><div><h3>Mindset it shows</h3><p>{e.mindset}</p></div></div>;
    return frame;
  });
}
