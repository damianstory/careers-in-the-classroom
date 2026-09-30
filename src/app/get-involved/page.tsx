import type { Metadata } from "next";
import { StartConversation } from "./StartConversation";
import styles from "./get-involved.module.css";

export const metadata: Metadata = { title: "List your company" };

const calgary = [
  "Correct or update what we’ve written about your work",
  "Suggest a practitioner who could talk with a class",
  "Share a resource teachers could use",
  "Talk with us about supporting the service",
];

const networks = [
  "Point us to member organizations doing classroom-ready work",
  "Share practitioner offers across your members",
  "Help us reach classrooms beyond Calgary later",
];

const fair = [
  "Results are ranked by educational relevance.",
  "Support is always disclosed and never buys placement.",
  "Submissions are checked against sources before they change anything.",
  "No organization shown here has agreed to take part.",
];

export default function GetInvolvedPage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="gi-title">
        <div className={styles.heroInner}>
          <span className={styles.ruler} aria-hidden="true" />
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>
              <span className={styles.mark} aria-hidden="true" />
              List your company
            </p>
            <h1 id="gi-title" className={`display ${styles.title}`}>
              Help students see the science work happening around them.
            </h1>
            <p className={styles.lede}>
              Careers in the Classroom connects teachers with real organizations and the people inside them. If your work
              belongs in a science class, here is how to take part.
            </p>
          </div>
          <TargetWide />
          <TargetCompact />
        </div>
      </section>

      <section className={styles.ways} aria-label="Ways to take part">
        <div className={`${styles.inner} ${styles.cards}`}>
          <Audience title="Calgary organizations" items={calgary} icon={<IconLocal />} />
          <Audience title="Provincial and national networks" items={networks} icon={<IconNetwork />} />
        </div>
      </section>

      <section className={styles.fair} aria-labelledby="fair-title">
        <div className={`${styles.inner} ${styles.fairGrid}`}>
          <h2 id="fair-title" className={`display ${styles.fairTitle}`}>
            How we keep it fair
          </h2>
          <div>
            <ul className={styles.rules}>
              {fair.map((line) => (
                <li key={line}>
                  <span className={styles.bullet} aria-hidden="true" />
                  {line}
                </li>
              ))}
            </ul>
            <StartConversation />
          </div>
        </div>
      </section>
    </>
  );
}

function Audience({ title, items, icon }: { title: string; items: string[]; icon: React.ReactNode }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHead}>
        {icon}
        <h2 className={`display ${styles.cardTitle}`}>{title}</h2>
      </div>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item}>
            <span className={styles.bullet} aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function IconLocal() {
  return (
    <svg className={styles.cardIcon} viewBox="0 0 30 30" aria-hidden="true">
      <circle cx="15" cy="15" r="9" fill="none" stroke="var(--green)" strokeWidth="1.5" />
      <rect x="12" y="12" width="6" height="6" fill="var(--green)" />
    </svg>
  );
}

function IconNetwork() {
  return (
    <svg className={styles.cardIcon} viewBox="0 0 30 30" aria-hidden="true">
      <circle cx="15" cy="15" r="13" fill="none" stroke="var(--text-body)" strokeWidth="1.25" strokeDasharray="3 3" />
      <circle cx="15" cy="15" r="7" fill="none" stroke="var(--green)" strokeWidth="1.5" />
      <rect x="13" y="13" width="4" height="4" fill="var(--green)" />
    </svg>
  );
}

// Decorative "target" diagram: Calgary at the centre, networks on the outer ring.
function TargetWide() {
  return (
    <svg className={styles.targetWide} width="560" height="480" viewBox="0 0 560 480" aria-hidden="true">
      <path d="M64 250H560M300 0V480" stroke="#6ebd6a55" strokeWidth="1" />
      <circle cx="300" cy="250" r="230" fill="none" stroke="#ffffff26" strokeDasharray="2 6" />
      <circle cx="300" cy="250" r="150" fill="none" stroke="#ffffff40" strokeDasharray="4 6" />
      <circle cx="300" cy="250" r="72" fill="none" stroke="#6ebd6a" strokeWidth="1.25" />
      <path stroke="#ffffff59" d="M300 100v10M300 390v10M150 250h10M440 250h10M300 20v8M300 472v8M70 250h8M522 250h8" />
      <path
        stroke="#ffffff33"
        d="M320 250v4M340 250v4M360 250v4M380 250v4M400 250v4M420 250v4M280 250v4M260 250v4M240 250v4M220 250v4M200 250v4M180 250v4"
      />
      <rect x="290" y="240" width="20" height="20" fill="none" stroke="#6ebd6a" />
      <rect x="295" y="245" width="10" height="10" fill="#6ebd6a" />
      <g className={styles.targetLabels} fontSize="11" letterSpacing=".44">
        <rect x="222" y="160" width="156" height="20" fill="#1b3b19" />
        <text x="300" y="174" textAnchor="middle" fill="#ffffff">
          CALGARY ORGANIZATIONS
        </text>
        <rect x="182" y="82" width="236" height="20" fill="#1b3b19" />
        <text x="300" y="96" textAnchor="middle" fill="#c5e5c3">
          PROVINCIAL AND NATIONAL NETWORKS
        </text>
      </g>
    </svg>
  );
}

function TargetCompact() {
  return (
    <svg className={styles.targetCompact} viewBox="0 0 358 200" aria-hidden="true">
      <path d="M0 110H358M179 0V200" stroke="#6ebd6a55" strokeWidth="1" />
      <circle cx="179" cy="110" r="130" fill="none" stroke="#ffffff26" strokeDasharray="2 6" />
      <circle cx="179" cy="110" r="84" fill="none" stroke="#ffffff40" strokeDasharray="4 6" />
      <circle cx="179" cy="110" r="40" fill="none" stroke="#6ebd6a" strokeWidth="1.25" />
      <path stroke="#ffffff59" d="M179 26v8M179 186v8M95 110h8M255 110h8" />
      <rect x="171" y="102" width="16" height="16" fill="none" stroke="#6ebd6a" />
      <rect x="175" y="106" width="8" height="8" fill="#6ebd6a" />
      <g className={styles.targetLabels} fontSize="10" letterSpacing=".4">
        <rect x="112" y="54" width="134" height="18" fill="#1b3b19" />
        <text x="179" y="67" textAnchor="middle" fill="#ffffff">
          CALGARY ORGANIZATIONS
        </text>
        <rect x="78" y="10" width="202" height="18" fill="#1b3b19" />
        <text x="179" y="23" textAnchor="middle" fill="#c5e5c3">
          PROVINCIAL AND NATIONAL NETWORKS
        </text>
      </g>
    </svg>
  );
}
