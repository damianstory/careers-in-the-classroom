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
const nextLabels = ["Reveal the job", "Show the work", "Why it matters", "The team", "A route", "Go deeper", "Next round"];

export function DiscoverStage({ cards, initialState }: { cards: DiscoverCard[]; initialState: DiscoverState }) {
  const [state, setState] = useState(initialState);
  const [previousInitialState, setPreviousInitialState] = useState(initialState);
  const [phase, setPhase] = useState<Phase>(initialState.role ? "reveal" : "start");
  const [visible, setVisible] = useState(initialState.role ?? "");
  const [slow, setSlow] = useState(false);
  const [scale, setScale] = useState(1);
  const [loaded, setLoaded] = useState<string[]>([]);
  const [failed, setFailed] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [announcement, setAnnouncement] = useState(initialState.role ? steps[initialState.step] : "");
  const [elapsed, setElapsed] = useState<string | null>(null);
  const area = useRef<HTMLDivElement>(null);
  const primary = useRef<HTMLButtonElement>(null);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const order = useRef<string[]>([]);
  const cursor = useRef(0);
  const started = useRef(0);
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
    setElapsed(null);
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
    const round = roundOrder(cards, state.subject, state.found);
    order.current = round.order;
    cursor.current = 0;
    started.current = performance.now();
    setVisible(round.order[0]);
    setElapsed(null);
    setMessage(round.fresh ? "All jobs found. Starting a fresh set." : "");
    setAnnouncement("");
    save({ ...state, role: undefined, step: 0, found: round.found });
    setPhase("flashing");
    fullscreen();
  }
  function stop() {
    clearTimer();
    // The visible ID is from the committed frame, never a future timer index.
    const stopped = area.current?.querySelector<HTMLElement>('[data-visible="true"]')?.dataset.role;
    if (!stopped) return;
    const tenths = Math.floor((performance.now() - started.current) / 100);
    setElapsed(`${Math.floor(tenths / 600)}:${String(Math.floor(tenths / 10) % 60).padStart(2, "0")}.${tenths % 10}`);
    setVisible(stopped);
    save({ ...state, role: stopped, step: 0, found: [...new Set([...state.found, stopped])] });
    setPhase("reveal");
    setAnnouncement("Stopped.");
  }
  function stepTo(step: number) {
    save({ ...state, step });
    setAnnouncement(steps[step]);
  }
  function next() { if (state.step === 6) start(); else stepTo(state.step + 1); }
  function subjectsScreen(subject = state.subject) {
    clearTimer();
    save({ subject, found: state.found, step: 0 });
    setPhase("start");
    setMessage("");
    setAnnouncement("");
  }

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => { if (media.matches) setSlow(true); };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    let cancelled = false;
    active.forEach((c) => {
      const picture = new Image();
      picture.src = c.image.src;
      picture.decode().catch(() => {
        if (!cancelled) setFailed((ids) => [...new Set([...ids, c.role.id])]);
      }).then(() => {
        if (!cancelled) setLoaded((ids) => [...new Set([...ids, c.role.id])]);
      });
    });
    return () => { cancelled = true; };
  }, [active]);

  useEffect(() => {
    const target = area.current!;
    const resize = () => setScale(Math.min(target.clientWidth / 1280, target.clientHeight / 720));
    const observer = new ResizeObserver(resize);
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (phase !== "flashing") return;
    timer.current = setInterval(() => {
      cursor.current = (cursor.current + 1) % order.current.length;
      // Commit each tick immediately, so key-down can always freeze the displayed frame.
      flushSync(() => setVisible(order.current[cursor.current]));
    }, slow ? 500 : 200);
    return clearTimer;
  }, [phase, slow]);

  const focusPrimary = useEffectEvent(() => {
    const focused = document.activeElement;
    if (document.querySelector("dialog[open]") || focused?.closest("select")) return;
    if (focused === document.body || (focused && area.current?.contains(focused))) {
      primary.current?.focus({ preventScroll: true });
    }
  });
  useEffect(() => { focusPrimary(); }, [phase, state.step]);

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
    setElapsed(null);
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
      <div className={styles.canvas} style={{ transform: `translate(-50%, -50%) scale(${scale})` }}>
        <div className={styles.pixels} aria-hidden="true" />
        <div className={styles.topbar}>
          <span className={styles.mono}>DISCOVER</span>
          <div className={styles.tools}>
            <span>{active.filter((c) => state.found.includes(c.role.id)).length} of {active.length} found</span>
            <button onClick={() => setSlow((value) => !value)} aria-pressed={slow}>Slower: {slow ? "on" : "off"}</button>
            <button onClick={fullscreen}>Full screen</button>
            <button onClick={() => subjectsScreen()}>Subjects</button>
          </div>
        </div>
        <p className="sr-only" aria-live="polite" aria-atomic="true">{announcement}</p>
        {message && <p className={styles.notice} role="status">{message}</p>}
        {phase === "start" ? <>
          <section className={styles.intro}>
            <p className={styles.mono}>SCREENSHOT CHALLENGE · JOBS EDITION</p>
            <h1>Snap a job.</h1>
            <p className={styles.lead}>Jobs flash by. Someone shouts &quot;Stop!&quot; The screen saves the one in view, and the class explores it.</p>
            <label className={styles.mono} htmlFor="discover-subject">JOBS</label>
            <select id="discover-subject" value={state.subject} onChange={(e) => subjectsScreen(e.target.value as Subject)}>
              {subjects.map((subject) => <option key={subject} value={subject}>{subjectLabels[subject]} ({counts[subject]})</option>)}
            </select>
            <button ref={primary} className={styles.primary} disabled={!ready} onClick={start}>{ready ? <>Start <kbd>Space</kbd></> : `Loading pictures ${readyCount}/${active.length}`}</button>
          </section>
          <div className={styles.stack} aria-hidden="true">
            {active.slice(0, 2).map((c) => <div className={styles.fan} key={c.role.id}><img src={c.image.src} alt="" /><span style={{ height: `${c.image.titleBandPct}%` }} /></div>)}
            <div className={styles.question}>?</div>
          </div>
        </> : <>
          {revealed && <h1 className="sr-only">Discover</h1>}
          {!revealed && <h1 className={styles.caption}>{phase === "flashing" ? 'Shout "Stop!" to see what job you get' : "What do you think this person does?"}</h1>}
          <div className={`${styles.pictureGroup} ${revealed ? styles.aside : ""} ${phase === "reveal" && !revealed ? styles.guess : ""}`}>
            <div className={styles.frame}>
              {active.map((c) => <div key={c.role.id} className={styles.picture} data-role={c.role.id} data-visible={c.role.id === visible} style={{ visibility: c.role.id === visible ? "visible" : "hidden" }}>
                {!failed.includes(c.role.id) && <img src={c.image.src} width={c.image.width} height={c.image.height} alt={revealed && c.role.id === visible ? `Illustration: ${c.role.title}` : "A person at work. Who could it be?"} />}
                <div className={`${styles.cover} ${revealed && !failed.includes(c.role.id) ? styles.uncovered : ""}`} style={{ height: `${c.image.titleBandPct}%` }}>What job is this?</div>
              </div>)}
              {phase === "reveal" && state.step === 0 && <div className={styles.shutter} aria-hidden="true" />}
            </div>
            {phase === "reveal" && <span className={styles.saved}>SAVED{elapsed ? ` · ${elapsed}` : ""}</span>}
            {revealed && card && <a className={styles.exampleLink} href={roleHref}>Explore the {card.organization.name} example →</a>}
          </div>
          {phase === "flashing" && <><p className={styles.hint}>Space or the button saves the job on screen.</p><button ref={primary} className={styles.stop} onClick={stop}>STOP</button></>}
          {phase === "reveal" && <>
            {!revealed && <div className={styles.prompts}>
              <div><h2>LOOK FOR</h2><p>The tools in their hands</p><p>Where they are</p><p>What they are checking</p></div>
              <div><h2>YOUR TURN</h2><p>Take three guesses from the class before you reveal the job.</p></div>
            </div>}
            {revealed && card && <section className={styles.panel} aria-labelledby="discover-title">
              <header><p className={styles.mono}>NO. {card.number} · {card.organization.name}</p><h2 id="discover-title">{card.role.title}</h2></header>
              <div className={styles.content} data-testid="step-content">
                <h3 className={styles.stepHeading}>{steps[state.step]}</h3>
                <StepContent card={card} step={state.step} roleHref={roleHref} />
              </div>
            </section>}
            <div className={styles.bottom}>
              <nav className={styles.steps} aria-label="Reveal steps">{steps.map((label, index) => <button key={label} aria-current={state.step === index ? "step" : undefined} onClick={() => stepTo(index)}>{label}</button>)}</nav>
              <div className={styles.navigation}><button disabled={state.step === 0} onClick={() => stepTo(state.step - 1)}>Back</button><button ref={primary} className={styles.primary} onClick={next}>{nextLabels[state.step]}</button></div>
            </div>
          </>}
        </>}
      </div>
    </div>
  );
}

function StepContent({ card: c, step, roleHref }: { card: DiscoverCard; step: number; roleHref: string }) {
  const exampleHref = `/examples/${c.example.slug}`;
  switch (step) {
    case 1: return <><p className={styles.summary}>{c.role.summary}</p><p className={styles.mono}>CLASS QUESTION</p><p>{c.example.question}</p></>;
    case 2: return <ol className={styles.tasks}>{c.role.tasks.map((task) => <li key={task.title}><strong>{task.title}</strong><p>{task.detail}</p></li>)}</ol>;
    case 3: return <><p><strong>{c.organization.name}</strong></p><p>{c.organization.problem.text}</p><p>{c.organization.description.text}</p><p className={styles.evidence}>{c.evidence}</p></>;
    case 4: return <div className={styles.columns}><div><h4>Who works together</h4><ul>{c.role.collaborators.map((person) => <li key={person}>{person}</li>)}</ul></div><div><p>{c.role.classroomConnection}</p><h4>Course fit · {c.courseFit.status}</h4><p>{c.courseFit.claim}</p></div></div>;
    case 5: return <><div className={styles.columns}><div><h4>{c.pathway.name}</h4><p>{c.pathway.provider}</p><p>{c.pathway.routeType} · {c.pathway.location}</p><p>{c.pathway.learns}</p></div><div><p>{c.rationale}</p>{c.pathway.entryNote && <p>{c.pathway.entryNote}</p>}</div></div><p className={styles.evidence}>A possible direction, not a hiring requirement.</p></>;
    case 6: return <div className={styles.columns}><div>{c.job && c.capturedOn ? <><h4>{c.job.title}</h4><p>{c.job.employer}</p>{c.job.location && <p>{c.job.location}</p>}<p>Saved {formatDate(c.capturedOn)}</p><p>{c.jobStatus}</p></> : <p>No saved job example for this role yet.</p>}</div><div className={styles.deeperLinks}><a href={exampleHref}>Explore the example →</a><a href={roleHref}>Explore this role →</a><a href={`${exampleHref}#pathways`}>Explore the route →</a>{c.job && <a href={`${exampleHref}?role=${c.role.id}&job=${c.job.id}#roles`}>Explore the saved job →</a>}</div></div>;
    default: return null;
  }
}
