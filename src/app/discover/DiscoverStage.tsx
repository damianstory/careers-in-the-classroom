"use client";

/* eslint-disable @next/next/no-img-element -- The frozen work order requires decoded, unoptimized pictures. */
import { useEffect, useEffectEvent, useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";
import {
  filterCards, parseDiscoverState, roundOrder, serializeDiscoverState, steps,
  subjectCounts, subjectLabels, subjects, type DiscoverCard, type DiscoverState, type Subject,
} from "@/lib/discover";
import { formatDate } from "@/lib/job-status";
import styles from "./discover.module.css";

type Phase = "start" | "flashing" | "reveal";
const nextLabels = ["Reveal the job", "Show the work", "Why it matters", "Team & subjects", "Ways in", "See a real job", "Next round"];

export function DiscoverStage({ cards, initialState }: { cards: DiscoverCard[]; initialState: DiscoverState }) {
  const [state, setState] = useState(initialState);
  const [previousInitialState, setPreviousInitialState] = useState(initialState);
  const [phase, setPhase] = useState<Phase>(initialState.role ? "reveal" : "start");
  const [visible, setVisible] = useState(initialState.role ?? "");
  const [slow, setSlow] = useState(false);
  const [mode, setMode] = useState<"cycle" | "draw">("cycle");
  const [loaded, setLoaded] = useState<string[]>([]);
  const [failed, setFailed] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [announcement, setAnnouncement] = useState(initialState.role ? steps[initialState.step] : "");
  const area = useRef<HTMLDivElement>(null);
  const primary = useRef<HTMLButtonElement>(null);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const order = useRef<string[]>([]);
  const cursor = useRef(0);
  const heading = useRef<HTMLHeadingElement>(null);
  const landOnContent = useRef(false);
  const handledSpace = useRef(false);
  const active = useMemo(() => filterCards(cards, state.subject), [cards, state.subject]);
  const counts = subjectCounts(cards);
  const readyCount = active.filter((c) => loaded.includes(c.role.id)).length;
  const ready = readyCount === active.length;
  const card = cards.find((c) => c.role.id === visible);
  const revealed = phase === "reveal" && state.step > 0;

  // A same-route Link navigation supplies new server props without necessarily
  // unmounting this component. Native history updates keep these props intact.
  if (previousInitialState !== initialState) {
    setPreviousInitialState(initialState);
    setState(initialState);
    setPhase(initialState.role ? "reveal" : "start");
    setVisible(initialState.role ?? "");
    setAnnouncement(initialState.role ? steps[initialState.step] : "");
    setMessage("");
  }

  function clearTimer() {
    if (timer.current !== null) clearInterval(timer.current);
    timer.current = null;
  }
  function save(next: DiscoverState) {
    setState(next);
    const url = new URL(`/discover${serializeDiscoverState(next, cards)}`, window.location.href);
    // Let Next's patched history API copy its metadata and update the router URL.
    if (url.href !== window.location.href) window.history.replaceState(null, "", url);
  }
  function fullscreen() {
    const target = area.current;
    if (target?.requestFullscreen && !document.fullscreenElement) void target.requestFullscreen().catch(() => {});
  }
  function start() {
    if (!ready) return;
    clearTimer();
    landOnContent.current = true;
    const round = roundOrder(cards, state.subject, state.found);
    order.current = round.order;
    cursor.current = 0;
    setVisible(round.order[0]);
    setMessage(round.fresh ? "All jobs selected. Starting a fresh set." : "");
    setAnnouncement("");
    if (mode === "draw") {
      save({ ...state, role: round.order[0], step: 0, found: [...round.found, round.order[0]] });
      setPhase("reveal");
      setAnnouncement("A picture is ready. What could this person do?");
    } else {
      save({ ...state, role: undefined, step: 0, found: round.found });
      setPhase("flashing");
    }
  }
  function stop() {
    clearTimer();
    // The visible ID is from the committed frame, never a future timer index.
    const stopped = area.current?.querySelector<HTMLElement>('[data-visible="true"]')?.dataset.role;
    if (!stopped) return;
    setVisible(stopped);
    save({ ...state, role: stopped, step: 0, found: [...new Set([...state.found, stopped])] });
    landOnContent.current = true;
    setPhase("reveal");
    setAnnouncement("Picture selected. What could this person do?");
  }
  function stepTo(step: number) {
    landOnContent.current = true;
    save({ ...state, step });
    setAnnouncement(steps[step]);
  }
  function next() { if (state.step === 6) start(); else stepTo(state.step + 1); }
  function subjectsScreen(subject = state.subject) {
    clearTimer();
    landOnContent.current = true;
    save({ subject, found: state.found, step: 0 });
    setPhase("start");
    setMessage("");
    setAnnouncement("");
  }

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => { if (media.matches) setMode("draw"); };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    active.forEach((c) => {
      const picture = new Image();
      let settled = false;
      const finish = (failed: boolean) => {
        if (cancelled || settled) return;
        settled = true;
        if (failed) setFailed((ids) => [...new Set([...ids, c.role.id])]);
        setLoaded((ids) => [...new Set([...ids, c.role.id])]);
      };
      picture.src = c.image.src;
      // A stalled image must not block a classroom round indefinitely.
      timeouts.push(setTimeout(() => finish(true), 8000));
      picture.decode().then(() => finish(false), () => finish(true));
    });
    return () => { cancelled = true; timeouts.forEach(clearTimeout); };
  }, [active]);

  useEffect(() => {
    if (phase !== "flashing") return;
    if (mode === "draw") { clearTimer(); return; }
    timer.current = setInterval(() => {
      cursor.current = (cursor.current + 1) % order.current.length;
      // Commit each tick immediately, so key-down can always freeze the displayed frame.
      flushSync(() => setVisible(order.current[cursor.current]));
    }, slow ? 500 : 200);
    return clearTimer;
  }, [phase, slow, mode]);

  const focusPrimary = useEffectEvent(() => {
    const focused = document.activeElement;
    if (document.querySelector("dialog[open]") || focused?.closest("select")) return;
    if (focused === document.body || (focused && area.current?.contains(focused))) {
      primary.current?.focus({ preventScroll: true });
    }
  });
  useEffect(() => {
    if (landOnContent.current) {
      landOnContent.current = false;
      heading.current?.focus({ preventScroll: true });
      const titleTop = heading.current?.getBoundingClientRect().top;
      const headerHeight = document.fullscreenElement ? 0 : document.querySelector("header")?.getBoundingClientRect().height ?? 0;
      if (window.innerWidth < 1100 || (titleTop !== undefined && titleTop < headerHeight)) {
        heading.current?.scrollIntoView({ block: "start", behavior: "instant" });
      }
    } else focusPrimary();
  }, [phase, state.step, state.role]);

  const focusLoadedStart = useEffectEvent(() => {
    if (phase === "start") focusPrimary();
  });
  useEffect(() => { if (ready) focusLoadedStart(); }, [ready]);

  const onKey = useEffectEvent((event: KeyboardEvent) => {
    if (event.defaultPrevented || event.repeat || event.ctrlKey || event.metaKey || event.altKey || document.querySelector("dialog[open]")) return;
    const target = event.target;
    if (!(target instanceof Element) || target.closest("input, textarea, select, [contenteditable]")) return;
    if (target !== document.body && target !== document.documentElement && !area.current?.contains(target)) return;
    const key = event.key.toLowerCase();
    // Space activates other focused controls normally (Subjects, step buttons, links).
    if (key === " " && target.closest("button, a") && target !== primary.current) return;
    if (key === " " || (phase === "reveal" && key === "arrowright")) {
      event.preventDefault();
      if (key === " ") handledSpace.current = true;
      if (phase === "start") start(); else if (phase === "flashing") stop(); else next();
    } else if (key === "arrowleft" && phase === "reveal") {
      event.preventDefault(); stepTo(Math.max(0, state.step - 1));
    } else if (key === "r" && phase === "reveal") {
      event.preventDefault(); start();
    } else if (key === "s") {
      event.preventDefault(); setSlow((value) => !value);
    }
  });
  const restore = useEffectEvent(() => {
    clearTimer();
    const restored = parseDiscoverState(Object.fromEntries(new URLSearchParams(window.location.search)), cards);
    setState(restored);
    setVisible(restored.role ?? "");
    setPhase(restored.role ? "reveal" : "start");
    setAnnouncement(restored.role ? steps[restored.step] : "");
  });
  useEffect(() => {
    const key = (event: KeyboardEvent) => onKey(event);
    const pop = () => restore();
    const keyup = (event: KeyboardEvent) => {
      if (event.key === " " && handledSpace.current) {
        event.preventDefault();
        handledSpace.current = false;
      }
    };
    window.addEventListener("keydown", key);
    window.addEventListener("keyup", keyup);
    window.addEventListener("popstate", pop);
    return () => { window.removeEventListener("keydown", key); window.removeEventListener("keyup", keyup); window.removeEventListener("popstate", pop); clearTimer(); };
  }, []);

  const roleHref = card ? `/examples/${card.example.slug}?role=${card.role.id}#roles` : "";
  return (
    <div className={styles.area} ref={area} role="region" aria-label="Discover" data-phase={phase} data-step={phase === "reveal" ? state.step : undefined}>
      <div className={styles.canvas}>
        <div className={styles.topbar}>
          <span className={styles.mono}>DISCOVER</span>
          <div className={styles.tools}>
            <span>{active.filter((c) => state.found.includes(c.role.id)).length} of {active.length} selected</span>
            <label>Round style <select value={mode} disabled={phase === "flashing"} onChange={(e) => setMode(e.target.value as "cycle" | "draw")}><option value="cycle">Cycle pictures</option><option value="draw">Single draw</option></select></label>
            {mode === "cycle" && <button onClick={() => setSlow((value) => !value)} aria-pressed={slow}>Slower: {slow ? "on" : "off"}</button>}
            <button onClick={fullscreen}>Full screen</button>
            <button onClick={() => subjectsScreen()}>Subjects</button>
            {phase === "reveal" && <button onClick={start} disabled={!ready}>Next round</button>}
          </div>
        </div>
        <p className="sr-only" aria-live="polite" aria-atomic="true">{announcement}</p>
        {message && <p className={styles.notice} role="status">{message}</p>}
        {phase === "start" ? <div className={styles.startLayout}>
          <section className={styles.intro}>
            <p className={styles.mono}>CLASSROOM GUESSING GAME</p>
            <h1 ref={heading} tabIndex={-1}>Snap a job.</h1>
            <p className={styles.lead}>{mode === "cycle" ? 'Pictures cycle. Someone shouts “Stop!” Freeze the picture, take a few guesses, then reveal the job.' : 'Draw one picture without cycling. Take a few guesses, then reveal the job.'}</p>
            <p>Explore the work together. Choose extra topics or start another round whenever you like.</p>
            <label className={styles.mono} htmlFor="discover-subject">JOBS</label>
            <select id="discover-subject" value={state.subject} onChange={(e) => subjectsScreen(e.target.value as Subject)}>
              {subjects.map((subject) => <option key={subject} value={subject}>{subjectLabels[subject]} ({counts[subject]})</option>)}
            </select>
            <button ref={primary} className={styles.primary} disabled={!ready} onClick={start}>{ready ? <>{mode === "draw" ? "Draw a picture" : "Start"} <kbd>Space</kbd></> : `Loading pictures ${readyCount}/${active.length}`}</button>
            <p className={styles.help}>Space: start, stop or continue · Arrow keys: previous / next topic · R: next round</p>
          </section>
          <div className={styles.stack} aria-hidden="true">
            {active.slice(0, 2).map((c) => <div className={styles.fan} key={c.role.id}><img src={c.image.src} alt="" /><span /></div>)}
            <div className={styles.question}>?</div>
          </div>
        </div> : <div className={`${styles.round} ${revealed ? styles.revealed : ""}`}>
          {!revealed && <h1 ref={heading} tabIndex={-1} className={styles.caption}>{phase === "flashing" ? 'Shout “Stop!” to freeze a picture' : "What could this person do?"}</h1>}
          <div className={styles.pictureGroup}>
            <div className={styles.frame}>
              {active.map((c) => <div key={c.role.id} className={styles.picture} data-role={c.role.id} data-visible={c.role.id === visible} style={{ visibility: c.role.id === visible ? "visible" : "hidden" }}>
                {!failed.includes(c.role.id) ? <img src={c.image.src} width={c.image.width} height={c.image.height} alt={revealed && c.role.id === visible ? `Illustration of a ${c.title}. ${c.image.clue}` : c.image.clue} /> : <div className={styles.fallback}><p>Picture unavailable. Use these clues:</p><p>{c.image.clue}</p></div>}
                {!revealed && <div className={styles.cover}>What job is this?</div>}
              </div>)}
            </div>
            {phase === "reveal" && !revealed && <p className={styles.help}>Picture selected. Take a few guesses before revealing.</p>}
            {revealed && card && <a className={styles.exampleLink} href={roleHref}>Work area at {card.organization.name} →</a>}
          </div>
          {phase === "flashing" && <div className={styles.stopControls}><p>Space or the button freezes the picture on screen.</p><button ref={primary} className={styles.stop} onClick={stop}>STOP</button></div>}
          {phase === "reveal" && <>
            {!revealed && <div className={styles.prompts}>
              <h2>Look for clues</h2><p>The tools, the setting and what the person is checking.</p>
              {card && <p>{card.image.clue}</p>}
              <p>Take three guesses. More than one job might fit these clues.</p>
            </div>}
            {revealed && card && <section className={styles.panel} aria-labelledby="discover-title">
              <header><p className={styles.mono}>ILLUSTRATED OCCUPATION · {card.number}</p><h1 ref={heading} tabIndex={-1} id="discover-title">{card.title}</h1><p className={styles.workArea}>Work area: {card.role.title}</p></header>
              <nav className={styles.steps} aria-label="Reveal steps">{steps.map((label, index) => <button key={label} aria-current={state.step === index ? "step" : undefined} onClick={() => stepTo(index)}>{label}</button>)}</nav>
              <div className={styles.content} data-testid="step-content">
                <h2 className={styles.stepHeading}>{steps[state.step]}</h2>
                <StepContent card={card} step={state.step} roleHref={roleHref} />
              </div>
            </section>}
            <div className={styles.bottom}>
              <nav className={styles.navigation} aria-label="Round controls"><button disabled={state.step === 0} onClick={() => stepTo(state.step - 1)}>Back</button><button ref={primary} className={styles.primary} onClick={next}>{nextLabels[state.step]}</button></nav>
              {revealed && <p className={styles.help}>Explore any topic, or choose Next round.</p>}
            </div>
          </>}
        </div>}
      </div>
    </div>
  );
}

function StepContent({ card: c, step, roleHref }: { card: DiscoverCard; step: number; roleHref: string }) {
  const exampleHref = `/examples/${c.example.slug}`;
  switch (step) {
    case 1: return <><p className={styles.summary}>{c.role.summary}</p><p className={styles.help}>A fictional illustration of one occupation in this work area.</p><h3>Discuss</h3><p>Which clues helped you guess? What else would this person need to know?</p></>;
    case 2: return <><p className={styles.help}>Typical work in this field; individual jobs vary.</p><ol className={styles.tasks}>{c.role.tasks.map((task) => <li key={task.title}><strong>{task.title}</strong><p>{task.detail}</p></li>)}</ol></>;
    case 3: return <><h3>{c.organization.name}</h3><p>{c.organization.problem.text}</p><p>{c.organization.description.text}</p><p className={styles.evidence}>{c.evidence}</p><div className={styles.sourceLinks}>{c.evidenceSources.map((source) => <a key={source.id} href={source.url}>{source.label} ↗</a>)}</div><h3>Class question</h3><p>{c.example.question}</p></>;
    case 4: return <div className={styles.columns}><div><h3>Who works together</h3><ul>{c.role.collaborators.map((person) => <li key={person}>{person}</li>)}</ul></div><div><h3>Connection to school</h3><p>{c.role.classroomConnection}</p><p className={styles.evidence}>Course fit · {c.courseFit.status}</p><p>{c.courseFit.claim}</p></div></div>;
    case 5: return <><p className={styles.help}>One possible direction, chosen for the skills below. Other routes are available; this is not a hiring requirement.</p><div className={styles.columns}><div><h3>{c.pathway.name}</h3><p>{c.pathway.provider} · {c.pathway.location}</p><p><strong>{c.pathway.routeType}</strong></p><p>{c.pathway.learns}</p></div><div><h3>How it connects</h3><p>{c.rationale}</p>{c.pathway.entryNote && <p className={styles.evidence}>{c.pathway.entryNote}</p>}</div></div><div className={styles.sourceLinks}>{c.pathwaySources.map((source) => <a key={source.id} href={source.url}>{source.label} ↗</a>)}<a href={`${exampleHref}#pathways`}>Compare related learning routes →</a></div></>;
    case 6: return <>{c.job && c.capturedOn ? <><p className={styles.help}>A related saved posting, with its own title and requirements.</p><h3 className={styles.jobTitle}>{c.job.title}</h3><div className={styles.columns}><div><p><strong>Employer: {c.job.employer}</strong></p>{c.job.location && <p>{c.job.location}</p>}<p>{c.job.employerNote.text}</p><p>Saved {formatDate(c.capturedOn)}</p><p>{c.jobStatus}</p></div><div>{c.job.level && <p><strong>Experience / preparation:</strong> {c.job.level}</p>}{c.job.limitation && <p className={styles.evidence}>{c.job.limitation}</p>}</div></div><div className={styles.sourceLinks}><a href={`${exampleHref}?role=${c.role.id}&job=${c.job.id}#roles`}>Read the saved job and requirements →</a>{c.jobSource && <a href={c.jobSource.url}>View posting source{c.job.postingCopySite ? ` (${c.job.postingCopySite} copy)` : ""} ↗</a>}</div></> : <p>No saved job example for this role yet.</p>}<div className={styles.sourceLinks}><a href={exampleHref}>Explore the {c.organization.name} classroom story →</a><a href={roleHref}>Explore this work area →</a></div></>;
    default: return null;
  }
}
