"use client";

/* eslint-disable @next/next/no-img-element -- The frozen work order requires decoded, unoptimized pictures. */
import { useEffect, useEffectEvent, useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";
import {
  cardForSubject, filterCards, parseDiscoverState, roundOrder, serializeDiscoverState, steps,
  subjectCounts, subjectLabels, subjects, type DiscoverCard, type DiscoverState, type Subject,
} from "@/lib/discover";
import { formatDate } from "@/lib/job-status";
import { shakeEfforts, type ShakeEffort } from "@/lib/discover-shake";
import { useAtomSerial } from "./useAtomSerial";
import { ShakeRound } from "./ShakeRound";
import { Shaker } from "./Shaker";
import styles from "./discover.module.css";

type Phase = "start" | "flashing" | "shaking" | "reveal" | "pass";
const nextLabels = ["Reveal the job", "Show the work", "Why it matters", "Team & subjects", "Ways in", "See a real job", "Next round"];
const unsupported = "Shaking needs desktop Chrome or Edge. Random draw works here.";
// A restored or deep-linked card counts as revealed only when it opens past the guess step.
const openedRevealed = (state: DiscoverState) => state.role !== undefined && state.step >= 1;

export function DiscoverStage({ cards, initialState, initialShake = false, fontClassName = "" }: { cards: DiscoverCard[]; initialState: DiscoverState; initialShake?: boolean; fontClassName?: string }) {
  const [state, setState] = useState(initialState);
  const [previousInitialState, setPreviousInitialState] = useState(initialState);
  const [phase, setPhase] = useState<Phase>(initialState.role ? "reveal" : "start");
  const [visible, setVisible] = useState(initialState.role ?? "");
  const [reducedMotion, setReducedMotion] = useState(false);
  const [shakeMode, setShakeMode] = useState(initialShake);
  const [effort, setEffort] = useState<ShakeEffort>("active");
  // `found` is selection history (no repeats). Reveals are tracked separately, and only for this
  // browser session, so a card that was selected but never revealed can never show its answer.
  const [currentRevealed, setCurrentRevealed] = useState(openedRevealed(initialState));
  const [revealedIds, setRevealedIds] = useState<string[]>(openedRevealed(initialState) ? [initialState.role!] : []);
  const [guesses, setGuesses] = useState([false, false, false]);
  const atom = useAtomSerial();
  const mode = reducedMotion ? "draw" : "cycle";
  const [isFullscreen, setIsFullscreen] = useState(false);
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
  const ready = active.length > 0 && readyCount === active.length;
  const baseCard = cards.find((c) => c.role.id === visible);
  const card = baseCard ? cardForSubject(baseCard, state.subject) : undefined;
  const revealed = phase === "reveal" && state.step > 0;
  const selectedCount = active.filter((c) => state.found.includes(c.role.id)).length;

  function restoreReveal(next: DiscoverState) {
    setCurrentRevealed(openedRevealed(next));
    if (openedRevealed(next)) setRevealedIds((ids) => [...ids.filter((id) => id !== next.role), next.role!]);
    setGuesses([false, false, false]);
  }
  // A same-route Link navigation supplies new server props without necessarily
  // unmounting this component. Native history updates keep these props intact.
  if (previousInitialState !== initialState) {
    setPreviousInitialState(initialState);
    setState(initialState);
    setPhase(initialState.role ? "reveal" : "start");
    setVisible(initialState.role ?? "");
    setAnnouncement(initialState.role ? steps[initialState.step] : "");
    setMessage("");
    restoreReveal(initialState);
  }

  function clearTimer() {
    if (timer.current !== null) clearInterval(timer.current);
    timer.current = null;
  }
  function save(next: DiscoverState) {
    setState(next);
    const url = new URL(`/discover${serializeDiscoverState(next, cards)}`, window.location.href);
    if (shakeMode) url.searchParams.set("play", "shake");
    // Let Next's patched history API copy its metadata and update the router URL.
    if (url.href !== window.location.href) window.history.replaceState(null, "", url);
  }
  function fullscreen() {
    const target = area.current;
    if (document.fullscreenElement === target) void document.exitFullscreen().catch(() => {});
    else if (target?.requestFullscreen) void target.requestFullscreen().catch(() => {});
  }
  function newSelection() {
    setCurrentRevealed(false);
    setGuesses([false, false, false]);
  }
  function connectShaker() {
    if (atom.supported && !atom.connected && !atom.connecting) void atom.connect();
  }
  function start() {
    if (!ready || (shakeMode && !atom.connected)) return;
    clearTimer();
    newSelection();
    landOnContent.current = true;
    const round = roundOrder(cards, state.subject, state.found);
    order.current = round.order;
    cursor.current = 0;
    setVisible(round.order[0]);
    setMessage(round.fresh ? "All jobs selected. Starting a fresh set." : "");
    setAnnouncement("");
    if (shakeMode) {
      save({ ...state, role: undefined, step: 0, found: round.found });
      setPhase("shaking");
      setAnnouncement("Shake to fill the meter and sharpen the mystery picture.");
    } else if (mode === "draw") {
      save({ ...state, role: round.order[0], step: 0, found: [...round.found, round.order[0]] });
      setPhase("reveal");
      setAnnouncement("A picture is ready. What could this person do?");
    } else {
      save({ ...state, role: undefined, step: 0, found: round.found });
      setPhase("flashing");
    }
  }
  function restart() {
    // Without a connected shaker a new shake round cannot start; return to Start to reconnect.
    if (shakeMode && !atom.connected) subjectsScreen(); else start();
  }
  function stop() {
    clearTimer();
    // The visible ID is from the committed frame, never a future timer index.
    const stopped = area.current?.querySelector<HTMLElement>('[data-visible="true"]')?.dataset.role;
    if (!stopped) return;
    newSelection();
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
    const role = state.role;
    if (step >= 1 && role) {
      setCurrentRevealed(true);
      setRevealedIds((ids) => [...ids.filter((id) => id !== role), role]);
    }
  }
  function finishShake() {
    // Choose once from the existing unseen-role shuffle. Movement changes the
    // pace of the round, never the subject, answer visibility or draw weighting.
    const selected = order.current[0];
    if (!selected) return;
    newSelection();
    setVisible(selected);
    save({ ...state, role: selected, step: 0, found: [...new Set([...state.found, selected])] });
    landOnContent.current = true;
    setPhase("reveal");
    setAnnouncement("Meter full. Picture selected. Take a few guesses before revealing the job.");
  }
  function toPass() {
    clearTimer();
    landOnContent.current = true;
    setPhase("pass");
    setAnnouncement("Pass the shaker to the next student.");
  }
  function backToJob() {
    landOnContent.current = true;
    setPhase("reveal");
    setAnnouncement(steps[state.step]);
  }
  function next() {
    if (state.step < 6) stepTo(state.step + 1);
    else if (shakeMode) toPass();
    else start();
  }
  function primaryAction() {
    if (phase === "start") { if (shakeMode && !atom.connected) connectShaker(); else start(); }
    else if (phase === "flashing") stop();
    else if (phase === "reveal") next();
    else if (phase === "pass") { if (atom.connected) start(); else connectShaker(); }
  }
  function subjectsScreen(subject = state.subject) {
    clearTimer();
    landOnContent.current = true;
    save({ subject, found: state.found, step: 0 });
    setPhase("start");
    setMessage("");
    setAnnouncement("");
    setCurrentRevealed(false);
  }

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const update = () => setIsFullscreen(document.fullscreenElement === area.current);
    document.addEventListener("fullscreenchange", update);
    return () => document.removeEventListener("fullscreenchange", update);
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
    }, 200);
    return clearTimer;
  }, [phase, mode]);

  const focusPrimary = useEffectEvent(() => {
    const focused = document.activeElement;
    if (document.querySelector("dialog[open]") || focused?.closest("select")) return;
    if (focused === document.body || (focused && area.current?.contains(focused))) {
      // A revealed job lands on its title; other screens land on their main action.
      const target = !revealed && primary.current?.getClientRects().length ? primary.current : heading.current;
      target?.focus({ preventScroll: true });
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
    if (event.key === "Escape" && document.fullscreenElement === area.current) {
      void document.exitFullscreen().catch(() => {});
      return;
    }
    if (event.defaultPrevented || event.repeat || event.ctrlKey || event.metaKey || event.altKey || document.querySelector("dialog[open]")) return;
    const target = event.target;
    if (!(target instanceof Element) || target.closest("input, textarea, select, [contenteditable]")) return;
    if (target !== document.body && target !== document.documentElement && !area.current?.contains(target)) return;
    const key = event.key.toLowerCase();
    // Focused buttons and links activate natively with Space. The one exception is STOP:
    // it must freeze the frame shown at key-down, not a later frame at key-up.
    if (key === " " && target.closest("button, a") && !(phase === "flashing" && target === primary.current)) return;
    if (key === " " || (phase === "reveal" && key === "arrowright")) {
      event.preventDefault();
      if (key === " ") { handledSpace.current = true; primaryAction(); } else next();
    } else if (key === "arrowleft" && phase === "reveal") {
      event.preventDefault(); stepTo(Math.max(0, state.step - 1));
    } else if (key === "r" && (phase === "reveal" || phase === "pass")) {
      event.preventDefault();
      if (phase === "reveal" && shakeMode) toPass(); else if (!shakeMode || atom.connected) start();
    }
  });
  const restore = useEffectEvent(() => {
    clearTimer();
    const restored = parseDiscoverState(Object.fromEntries(new URLSearchParams(window.location.search)), cards);
    setState(restored);
    setVisible(restored.role ?? "");
    setPhase(restored.role ? "reveal" : "start");
    setAnnouncement(restored.role ? steps[restored.step] : "");
    restoreReveal(restored);
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

  const roleHref = card ? `/examples/${card.example.slug}?role=${card.contextRoleId}#who` : "";
  const shakerStatus = ({ connect = false, disconnect = false } = {}) => <div className={styles.shakerStatus}>
    <p role="status"><i data-on={atom.connected} aria-hidden="true" />{atom.supported ? atom.status : unsupported}</p>
    {atom.supported && connect && !atom.connected && <button onClick={connectShaker} disabled={atom.connecting}>{atom.connecting ? "Connecting…" : "Connect shaker"}</button>}
    {atom.supported && disconnect && atom.connected && <button onClick={() => void atom.disconnect()}>Disconnect shaker</button>}
  </div>;
  const strip = revealedIds
    .filter((id) => id !== state.role || currentRevealed)
    .slice(-6)
    .flatMap((id) => cards.filter((c) => c.role.id === id));
  const loadingLabel = active.length === 0 ? "No jobs yet" : `Loading pictures ${readyCount}/${active.length}`;
  return (
    <div className={`${styles.area} ${fontClassName}`} ref={area} role="region" aria-label="Discover" data-phase={phase} data-step={phase === "reveal" ? state.step : undefined}>
      <div className={styles.presentationTools}>
        <span className={styles.eyebrow}>Discover</span>
        <div className={styles.tools}>
          <span>{selectedCount} of {active.length} selected</span>
          {isFullscreen && <p id="fullscreen-help" className={styles.fullscreenHelp} role="status">Press <kbd>Esc</kbd> to exit full screen</p>}
          <button onClick={fullscreen} aria-describedby={isFullscreen ? "fullscreen-help" : undefined}>{isFullscreen ? "Exit full screen" : "Full screen"}</button>
        </div>
      </div>
      <div className={styles.canvas}>
        <p className="sr-only" aria-live="polite" aria-atomic="true">{announcement}</p>
        {message && <p className={styles.notice} role="status">{message}</p>}
        {phase === "start" ? <div className={styles.start}>
          <h1 ref={heading} tabIndex={-1}>How do we pick the next job?</h1>
          <fieldset className={styles.doors}>
            <legend className="sr-only">Choose how to play</legend>
            <div className={styles.door} data-selected={!shakeMode}>
              <label className={styles.doorChoice}>
                <input type="radio" name="discover-play" checked={!shakeMode} onChange={() => setShakeMode(false)} aria-label="Random draw" aria-describedby="discover-draw-text" />
                {!shakeMode && <span className={styles.selectedTag} aria-hidden="true">Selected</span>}
                <span className={styles.fan} aria-hidden="true">
                  {active.slice(0, 2).map((c) => <span className={styles.fanCard} key={c.role.id}><img src={c.image.src} alt="" /><span /></span>)}
                  <span className={styles.fanFront}>?</span>
                </span>
                <span className={styles.doorTitle}>Random draw</span>
                <span className={styles.doorText} id="discover-draw-text">{mode === "cycle" ? "Pictures flash. Someone shouts “Stop!”" : "Draw one picture. No flashing."}</span>
                {shakeMode && <span className={styles.chooseHint} aria-hidden="true">Choose</span>}
              </label>
              {!shakeMode && <div className={styles.doorFoot}>
                <button ref={primary} className={styles.primary} disabled={!ready} onClick={start}>{ready ? <>{mode === "draw" ? "Draw a picture" : "Start"} <kbd>Space</kbd></> : loadingLabel}</button>
              </div>}
            </div>
            <div className={styles.door} data-selected={shakeMode}>
              <label className={styles.doorChoice}>
                <input type="radio" name="discover-play" checked={shakeMode} onChange={() => setShakeMode(true)} aria-label="Shake to discover" aria-describedby="discover-shake-text" />
                {shakeMode && <span className={styles.selectedTag} aria-hidden="true">Selected</span>}
                <Shaker className={styles.doorShaker} />
                <span className={styles.doorTitle}>Shake to discover</span>
                <span className={styles.doorText} id="discover-shake-text">Pass the shaker. Shake it hard for about 10 seconds.</span>
                {!shakeMode && <span className={styles.chooseHint} aria-hidden="true">Choose</span>}
              </label>
              {shakeMode && <div className={styles.doorFoot}>
                {shakerStatus()}
                {atom.supported && (atom.connected
                  ? <button ref={primary} className={styles.primary} disabled={!ready} onClick={start}>{ready ? <>Start shake round <kbd>Space</kbd></> : loadingLabel}</button>
                  : <button ref={primary} className={styles.primary} disabled={atom.connecting} onClick={connectShaker}>{atom.connecting ? "Connecting…" : "Connect shaker"}</button>)}
              </div>}
            </div>
          </fieldset>
          <div className={styles.teacherRow}>
            <label htmlFor="discover-subject">Jobs</label>
            <select id="discover-subject" value={state.subject} onChange={(e) => subjectsScreen(e.target.value as Subject)}>
              {subjects.map((subject) => <option key={subject} value={subject}>{subjectLabels[subject]} ({counts[subject]})</option>)}
            </select>
            {shakeMode && <fieldset className={styles.segmented}>
              <legend>Shake effort</legend>
              {Object.entries(shakeEfforts).map(([key, value]) => <label key={key}><input type="radio" name="shake-effort" checked={effort === key} onChange={() => setEffort(key as ShakeEffort)} />{value.label}</label>)}
            </fieldset>}
            {shakeMode && atom.supported && atom.connected && <button className={styles.teacherEnd} onClick={() => void atom.disconnect()}>Disconnect shaker</button>}
          </div>
          {active.length === 0 && <p role="status">No prepared jobs for {subjectLabels[state.subject].toLowerCase()} yet. Choose another subject to play.</p>}
          <p className={styles.help}>{shakeMode ? "Active suits deliberate shaking. Gentle accepts lighter movement. Pausing holds progress." : "Space: start, stop or continue · Arrow keys: previous / next topic · R: next round"}</p>
        </div> : phase === "shaking" ? <ShakeRound card={card} round={selectedCount + 1} failed={failed.includes(visible)} sample={atom.latest} connected={atom.connected} effort={effort} reducedMotion={reducedMotion} onComplete={finishShake} onCancel={() => subjectsScreen()} heading={heading} connection={shakerStatus({ connect: true, disconnect: true })} />
        : phase === "pass" ? <section className={styles.pass} aria-labelledby="pass-title">
          <div className={styles.passCopy}>
            <p className={styles.eyebrow}>Round {selectedCount} done{currentRevealed && card ? ` · ${card.title}` : ""}</p>
            <h1 ref={heading} tabIndex={-1} id="pass-title">Pass the shaker.</h1>
            <p className={styles.passLead}>Next shaker, you’re up.</p>
            <div className={styles.passActions}>
              {atom.connected
                ? <button ref={primary} className={styles.primary} disabled={!ready} onClick={start}>Shake again <kbd>Space</kbd></button>
                : <button ref={primary} className={styles.primary} disabled={!atom.supported || atom.connecting} onClick={connectShaker}>{atom.connecting ? "Connecting…" : "Connect shaker"}</button>}
              <button onClick={backToJob}>← Back to this job</button>
              <button onClick={() => subjectsScreen()}>Change jobs</button>
            </div>
            {shakerStatus()}
          </div>
          <Shaker className={styles.passShaker} />
          {strip.length > 0 && <div className={styles.strip}>
            <p className={styles.eyebrow}>Revealed today</p>
            <ul>
              {strip.map((c) => <li key={c.role.id}><img src={c.image.src} alt={c.title} /></li>)}
              <li className={styles.stripNext} aria-hidden="true">?</li>
            </ul>
          </div>}
        </section>
        : <>
          <div className={`${styles.round} ${revealed ? styles.revealed : phase === "reveal" ? styles.guessing : styles.flashingRound}`}>
            <div className={styles.pictureGroup}>
              <div className={styles.frame}>
                {active.map((c) => <div key={c.role.id} className={styles.picture} data-role={c.role.id} data-visible={c.role.id === visible} style={{ visibility: c.role.id === visible ? "visible" : "hidden" }}>
                  {!failed.includes(c.role.id) ? <img src={c.image.src} width={c.image.width} height={c.image.height} alt={revealed && c.role.id === visible ? `Illustration of a ${c.title}. ${c.image.clue}` : c.image.clue} /> : <div className={styles.fallback}><p>Picture unavailable. Use these clues:</p><p>{c.image.clue}</p></div>}
                  {!revealed && <div className={styles.cover}>What job is this?</div>}
                </div>)}
              </div>
              {revealed && card && <a className={styles.exampleLink} href={roleHref}>Work area at {card.organization.name} →</a>}
            </div>
            {phase === "flashing" && <div className={styles.flashCopy}>
              <h1 ref={heading} tabIndex={-1}>Shout “Stop!” to freeze a picture</h1>
              <p>Space or the button freezes the picture on screen.</p>
              <button ref={primary} className={styles.stop} onClick={stop}>STOP</button>
            </div>}
            {phase === "reveal" && !revealed && <div className={styles.guessCopy}>
              <p className={styles.eyebrow}>Mystery job · Round {selectedCount}</p>
              <h1 ref={heading} tabIndex={-1}>What could this person do?</h1>
              <h2>Look for clues</h2>
              <p>The tools, the setting, and what the person is checking.</p>
              {card && <p className={styles.clue}>{card.image.clue}</p>}
              <div className={styles.guesses}>
                {guesses.map((used, i) => <button key={i} aria-pressed={used} onClick={() => setGuesses((g) => g.map((v, j) => j === i ? !v : v))}><span className="sr-only">Guess </span>{i + 1}</button>)}
                <p>Take three guesses. More than one job might fit.</p>
              </div>
            </div>}
            {revealed && card && <section className={styles.panel} aria-labelledby="discover-title">
              <header><p className={styles.eyebrow}>Illustrated occupation · {card.number}</p><h1 ref={heading} tabIndex={-1} id="discover-title">{card.title}</h1><p className={styles.workArea}>Work area: {card.role.title}</p></header>
              <nav className={styles.steps} aria-label="Reveal steps">{steps.map((label, index) => <button key={label} aria-current={state.step === index ? "step" : undefined} onClick={() => stepTo(index)}>{label}</button>)}</nav>
              <div className={styles.content} data-testid="step-content">
                <h2 className={styles.stepHeading}>{steps[state.step]}</h2>
                <StepContent card={card} step={state.step} roleHref={roleHref} />
              </div>
            </section>}
          </div>
          {phase === "reveal" && <div className={styles.dock}>
            <nav className={styles.dockRow} aria-label="Round controls">
              {state.step === 0 ? <button disabled={!ready} onClick={restart}>Restart</button> : <button onClick={() => stepTo(state.step - 1)}>Back</button>}
              <p className={styles.dockSteps}><span aria-hidden="true">{steps.map((label, i) => <b key={label} data-state={i < state.step ? "done" : i === state.step ? "on" : undefined} />)}</span>{steps[state.step]}</p>
              <div className={styles.dockActions}>
                {state.step >= 1 && state.step < 6 && (shakeMode
                  ? <button onClick={toPass}>Pass the shaker</button>
                  : <button disabled={!ready} onClick={start}>Next round</button>)}
                <button ref={primary} className={styles.primary} onClick={next}>{shakeMode && state.step === 6 ? "Pass the shaker" : nextLabels[state.step]}</button>
              </div>
            </nav>
            {shakeMode && shakerStatus({ connect: true })}
          </div>}
        </>}
      </div>
    </div>
  );
}

function StepContent({ card: c, step, roleHref }: { card: DiscoverCard; step: number; roleHref: string }) {
  const exampleHref = `/examples/${c.example.slug}`;
  switch (step) {
    case 1: return <><p className={styles.summary}>{c.role.summary}</p><p className={styles.help}>A fictional illustration of one occupation in this work area.</p><h3>Discuss</h3><p>Which clues helped you guess? What else would this person need to know?</p>{c.relatedExamples.length > 1 && <><h3>Explore this work in Calgary</h3><div className={styles.sourceLinks}>{c.relatedExamples.map((e) => <a key={e.slug} href={`/examples/${e.slug}?role=${e.roleId}#who`}>{e.organization} →</a>)}</div></>}</>;
    case 2: return <><p className={styles.help}>Typical work in this field; individual jobs vary.</p><ol className={styles.tasks}>{c.role.tasks.map((task) => <li key={task.title}><strong>{task.title}</strong><p>{task.detail}</p></li>)}</ol></>;
    case 3: return <><h3>{c.organization.name}</h3><p>{c.organization.problem.text}</p><p>{c.organization.description.text}</p><p className={styles.evidence}>{c.evidence}</p><div className={styles.sourceLinks}>{c.evidenceSources.map((source) => <a key={source.id} href={source.url}>{source.label} ↗</a>)}</div><h3>Class question</h3><p>{c.example.question}</p></>;
    case 4: return <div className={styles.columns}><div><h3>Who works together</h3><ul>{c.role.collaborators.map((person) => <li key={person}>{person}</li>)}</ul></div><div><h3>Connection to school</h3><p>{c.role.classroomConnection}</p><p className={styles.evidence}>Course fit · {c.courseFit.status}</p><p>{c.courseFit.claim}</p></div></div>;
    case 5: return <><p className={styles.help}>One possible direction, chosen for the skills below. Other routes are available; this is not a hiring requirement.</p><div className={styles.columns}><div><h3>{c.pathway.name}</h3><p>{c.pathway.provider} · {c.pathway.location}</p><p><strong>{c.pathway.routeType}</strong></p><p>{c.pathway.learns}</p></div><div><h3>How it connects</h3><p>{c.rationale}</p>{c.pathway.entryNote && <p className={styles.evidence}>{c.pathway.entryNote}</p>}</div></div><div className={styles.sourceLinks}>{c.pathwaySources.map((source) => <a key={source.id} href={source.url}>{source.label} ↗</a>)}<a href={`${exampleHref}#ways-in`}>Compare related learning routes →</a></div></>;
    case 6: return <>{c.job && c.capturedOn ? <><p className={styles.help}>A related saved posting, with its own title and requirements.</p><h3 className={styles.jobTitle}>{c.job.title}</h3><div className={styles.columns}><div><p><strong>Employer: {c.job.employer}</strong></p>{c.job.location && <p>{c.job.location}</p>}<p>{c.job.employerNote.text}</p><p>Saved {formatDate(c.capturedOn)}</p><p>{c.jobStatus}</p></div><div>{c.job.level && <p><strong>Experience / preparation:</strong> {c.job.level}</p>}{c.job.limitation && <p className={styles.evidence}>{c.job.limitation}</p>}</div></div><div className={styles.sourceLinks}><a href={`${exampleHref}?role=${c.contextRoleId}&job=${c.job.id}#who`}>Read the saved job and requirements →</a>{c.jobSource && <a href={c.jobSource.url}>View posting source{c.job.postingCopySite ? ` (${c.job.postingCopySite} copy)` : ""} ↗</a>}</div></> : <p>No saved job example for this role yet.</p>}<div className={styles.sourceLinks}><a href={exampleHref}>Explore the {c.organization.name} classroom story →</a><a href={roleHref}>Explore this work area →</a></div></>;
    default: return null;
  }
}
