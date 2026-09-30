"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { markSignedUp } from "@/lib/session";
import { Icon } from "../Icon";
import { Modal } from "./Modal";
import styles from "./dialogs.module.css";

interface SpeakerContext {
  topic?: string;
  org?: string;
}

interface PageContext extends SpeakerContext {
  signupLabel?: string;
}

interface DialogApi {
  openSignup: (contextLabel?: string) => void;
  openSpeaker: (ctx?: SpeakerContext) => void;
  setPageContext: (ctx: PageContext) => void;
}

const DialogContext = createContext<DialogApi | null>(null);

export function useDialogs(): DialogApi {
  const api = useContext(DialogContext);
  if (!api) throw new Error("useDialogs must be used inside DialogProvider");
  return api;
}

type Open =
  | { kind: "signup"; contextLabel?: string; done: boolean }
  | { kind: "speaker"; topic: string; org?: string; summary?: string }
  | null;

// Both dialogs are demonstrations. Their submit handlers prevent the browser
// from submitting, make no request and keep none of the typed values.
export function DialogProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState<Open>(null);
  const [session, setSession] = useState(0);
  // Context of the page being viewed, so site-level actions (header, menu) prefill like page actions.
  const pageContext = useRef<PageContext>({});

  const api = useMemo<DialogApi>(
    () => ({
      openSignup: (contextLabel) => {
        setSession((n) => n + 1);
        setOpen({ kind: "signup", contextLabel: contextLabel ?? pageContext.current.signupLabel, done: false });
      },
      openSpeaker: (ctx) => {
        const c = ctx ?? pageContext.current;
        setSession((n) => n + 1);
        setOpen({ kind: "speaker", topic: c.topic ?? "", org: c.org });
      },
      setPageContext: (ctx) => {
        pageContext.current = ctx;
      },
    }),
    [],
  );
  const close = useCallback(() => setOpen(null), []);

  return (
    <DialogContext.Provider value={api}>
      {children}

      <Modal
        open={open?.kind === "signup"}
        onClose={close}
        titleId="signup-title"
        tone={open?.kind === "signup" && open.done ? "dark" : "light"}
        width={open?.kind === "signup" && open.done ? 520 : 880}
        title={open?.kind === "signup" && open.done ? "You’re signed up." : "Save your search. Get Calgary examples monthly."}
        aside={open?.kind === "signup" && !open.done ? <SignupAside contextLabel={open.contextLabel} /> : undefined}
      >
        {open?.kind === "signup" && !open.done && (
          <SignupForm
            key={session}
            onDone={() => {
              markSignedUp();
              setOpen({ ...open, done: true });
            }}
          />
        )}
        {open?.kind === "signup" && open.done && (
          <>
            <p className={styles.onDark}>Recent developments are now open in this tab.</p>
            <p className={styles.darkNote}>Nothing was saved or sent.</p>
            <div className={styles.actions}>
              <button type="button" className="btn btn-signal" onClick={close}>
                Back to what I was reading
              </button>
            </div>
          </>
        )}
      </Modal>

      <Modal
        open={open?.kind === "speaker"}
        onClose={close}
        titleId="speaker-title"
        tone={open?.kind === "speaker" && open.summary ? "dark" : "light"}
        width={open?.kind === "speaker" && open.summary ? 460 : 620}
        eyebrow={
          open?.kind === "speaker" && open.summary ? (
            <span className={styles.noted}>
              <span className={styles.notedMark} aria-hidden="true" />
              Request noted
            </span>
          ) : (
            <p className={styles.eyebrow}>
              <Icon name="message" small />
              Request a speaker
            </p>
          )
        }
        intro={
          open?.kind === "speaker" && !open.summary ? (
            <p className={styles.intro}>
              Tell us what you’re teaching and when. We look for someone suitable and check with you before anything is
              arranged. A listed organization doesn’t mean its people are available.
            </p>
          ) : undefined
        }
        title={open?.kind === "speaker" && open.summary ? "Here’s what would happen next" : "Request a practitioner conversation"}
      >
        {open?.kind === "speaker" && !open.summary && (
          <SpeakerForm key={session} topic={open.topic} org={open.org} onDone={(summary) => setOpen({ ...open, summary })} />
        )}
        {open?.kind === "speaker" && open.summary && (
          <>
            <p className={styles.summary}>{open.summary}</p>
            <ol className={styles.steps}>
              <li>Our team looks for practitioners who fit your topic.</li>
              <li>We reach out to them and confirm they are willing.</li>
              <li>We come back to you with options before anything is booked.</li>
            </ol>
            <p className={`${styles.darkNote} ${styles.rule}`}>Nothing was sent. This is not a booking.</p>
            <div className={styles.actions}>
              <button type="button" className={`btn ${styles.ghost}`} onClick={close}>
                Done
              </button>
            </div>
          </>
        )}
      </Modal>
    </DialogContext.Provider>
  );
}

// Pages render this to tell site-level actions what the teacher is looking at.
export function PageDialogContext({ topic, org, signupLabel }: PageContext) {
  const { setPageContext } = useDialogs();
  useEffect(() => {
    setPageContext({ topic, org, signupLabel });
    return () => setPageContext({});
  }, [setPageContext, topic, org, signupLabel]);
  return null;
}

function SignupAside({ contextLabel }: { contextLabel?: string }) {
  return (
    <>
      <ul className={styles.benefits}>
        <li>Open the recent developments for your topics</li>
        <li>Keep your searches for when the unit comes around again</li>
        <li>One email a month: local examples and verified student opportunities</li>
        <li>Change topics any time as your class moves on</li>
      </ul>
      {contextLabel && (
        <div className={styles.context}>
          <p className={styles.contextLabel}>We’ll keep</p>
          <span className={styles.contextTag}>
            <span className={styles.notedMark} aria-hidden="true" />
            {contextLabel}
          </span>
        </div>
      )}
    </>
  );
}

function SignupForm({ onDone }: { onDone: () => void }) {
  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        onDone();
      }}
    >
      <div>
        <label className="label" htmlFor="su-email">
          Email
        </label>
        <input
          id="su-email"
          className="input"
          type="text"
          placeholder="name@school.ca"
          autoComplete="off"
          aria-describedby="su-email-hint"
        />
        <p id="su-email-hint" className={styles.hint}>
          A school email helps us confirm you teach. A personal email works too.
        </p>
      </div>
      <div>
        <label className="label" htmlFor="su-school">
          School
        </label>
        <input id="su-school" className="input" type="text" placeholder="Your school" autoComplete="off" />
      </div>
      <div>
        <label className="label" htmlFor="su-board">
          School board or authority
        </label>
        <select id="su-board" className="input" defaultValue="">
          <option value="">Choose one</option>
          <option>Calgary Board of Education</option>
          <option>Calgary Catholic School District</option>
          <option>Independent or charter school</option>
          <option>Another board or authority</option>
        </select>
      </div>
      <div className={styles.submitStack}>
        <button type="submit" className={`btn btn-signal ${styles.submitWide}`}>
          Create free account
        </button>
        <p className={styles.quiet}>
          <span className={styles.quietMark} aria-hidden="true" />
          Nothing is saved or sent yet.
        </p>
      </div>
    </form>
  );
}

function SpeakerForm({ topic, org, onDone }: { topic: string; org?: string; onDone: (summary: string) => void }) {
  const [value, setValue] = useState(topic);
  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        const f = new FormData(e.currentTarget);
        const timing = (f.get("timing") as string) || "timing not given";
        const format = (f.get("format") as string) || "format not given";
        onDone([value.trim() || "Topic not given", timing, format].join(" · "));
      }}
    >
      <div>
        <label className="label" htmlFor="sp-topic">
          Topic
        </label>
        <input
          id="sp-topic"
          className={`input ${styles.topicInput}`}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="What your class is studying"
          autoComplete="off"
          aria-describedby={org ? "sp-topic-note" : undefined}
        />
        {org && (
          <p id="sp-topic-note" className={styles.hint}>
            Related example: <strong>{org}</strong>. We may suggest someone from a different organization.
          </p>
        )}
      </div>
      <fieldset className={styles.fieldset}>
        <legend className="label">Preferred timing</legend>
        <div className={styles.two}>
          {["In the next 2 weeks", "Later this month", "Later this term", "Flexible"].map((t) => (
            <label key={t} className={styles.option}>
              <input type="radio" name="timing" value={t} />
              {t}
            </label>
          ))}
        </div>
      </fieldset>
      <fieldset className={styles.fieldset}>
        <legend className="label">Format</legend>
        <div className={styles.three}>
          {["In class", "Video call", "Either"].map((t) => (
            <label key={t} className={styles.option}>
              <input type="radio" name="format" value={t} />
              {t}
            </label>
          ))}
        </div>
      </fieldset>
      <div>
        <label className="label" htmlFor="sp-note">
          What should students get from it? <span className={styles.optional}>Optional</span>
        </label>
        <textarea id="sp-note" className="input" />
      </div>
      <div className={styles.submitRow}>
        <button type="submit" className="btn btn-signal">
          Send request
        </button>
        <p className={styles.quiet}>
          <span className={styles.quietMark} aria-hidden="true" />
          No one is contacted and nothing is booked.
        </p>
      </div>
    </form>
  );
}
