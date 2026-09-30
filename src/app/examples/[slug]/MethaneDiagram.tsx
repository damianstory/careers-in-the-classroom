import styles from "./story-diagram.module.css";

// Hand-drawn schematic, reviewed against the checks in docs/build/PLAN-connected-exploration.md §6:
// methane is invisible (dashed outline only), the instrument is passive (it measures reflected
// sunlight and emits nothing), and absorption dims some wavelengths without removing them.
// Not to scale. No company imagery or equipment is depicted.
//
// Drawn for a dark green instrument panel (B2). Motion: the light rays flow (light is ongoing) and
// the spectrum dip draws once. Both stop under reduced motion (globals.css), leaving the full drawing.

const TITLE = "Schematic: measuring methane with reflected sunlight";

function Markers({ id }: { id: string }) {
  return (
    <defs>
      <marker id={`${id}-w`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0 0 10 5 0 10z" fill="var(--on-dark)" />
      </marker>
      <marker id={`${id}-g`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0 0 10 5 0 10z" fill="var(--signal)" />
      </marker>
    </defs>
  );
}

// The wide schematic: the scene on the left and the spectrum plot on the right.
export function MethaneDiagram({ titleId, descId, desc }: { titleId: string; descId: string; desc: string }) {
  const m = `${titleId}-m`;
  return (
    <svg viewBox="0 0 1032 440" role="img" aria-labelledby={`${titleId} ${descId}`} className={`methane-diagram ${styles.methane}`}>
      <title id={titleId}>{TITLE}</title>
      <desc id={descId}>{desc}</desc>
      <Markers id={m} />

      {/* Ground, with a ruler */}
      <rect x="0" y="360" width="652" height="80" fill="#ffffff0a" />
      <path d="M0 360H652" stroke="#ffffff4d" />
      <path
        d="M20 360v8M40 360v4M60 360v4M80 360v4M100 360v8M120 360v4M140 360v4M160 360v4M180 360v4M200 360v8M220 360v4M240 360v4M260 360v4M280 360v4M300 360v8M320 360v4M340 360v4M360 360v4M380 360v4M400 360v8M420 360v4M440 360v4M460 360v4M480 360v4M500 360v8M520 360v4M540 360v4M560 360v4M580 360v4M600 360v8M620 360v4"
        stroke="#ffffff40"
      />

      {/* Sun */}
      <g stroke="var(--on-dark)" strokeWidth="2" fill="none" strokeLinecap="round">
        <circle cx="84" cy="92" r="26" fill="var(--surface-dark)" />
        <path d="M84 52v-12M84 144v-12M44 92H32M136 92h-12M56 64l-8-8M120 128l-8-8M56 120l-8 8M120 56l-8 8" />
      </g>

      {/* 1: sunlight travels down to the ground */}
      <line className={styles.flow} x1="110" y1="120" x2="330" y2="352" stroke="var(--on-dark)" strokeWidth="2.5" markerEnd={`url(#${m}-w)`} />

      {/* Facility, and invisible methane drawn only as a dashed outline */}
      <g stroke="var(--on-dark)" strokeWidth="1.5" fill="var(--surface-dark)">
        <rect x="304" y="332" width="48" height="28" />
        <rect x="358" y="340" width="30" height="20" />
        <line x1="320" y1="332" x2="320" y2="312" />
      </g>
      <ellipse cx="362" cy="304" rx="78" ry="34" fill="#6ebd6a0d" stroke="var(--signal)" strokeWidth="2" strokeDasharray="6 5" />

      {/* 2: reflected sunlight travels up through the methane to the satellite */}
      <line className={styles.flow} x1="344" y1="352" x2="500" y2="118" stroke="var(--signal)" strokeWidth="2.5" markerEnd={`url(#${m}-g)`} />

      {/* Satellite: a passive instrument, no beam leaves it */}
      <g stroke="var(--on-dark)" strokeWidth="1.5">
        <rect x="486" y="74" width="40" height="34" fill="var(--surface-dark)" />
        <rect x="498" y="108" width="16" height="6" fill="var(--surface-dark)" />
        <rect x="438" y="83" width="44" height="16" fill="#6ebd6a40" />
        <rect x="530" y="83" width="44" height="16" fill="#6ebd6a40" />
        <path d="M482 91h4M526 91h4" />
      </g>

      <g fontFamily="var(--font-ui)" fontSize="15" fontWeight="500">
        <circle cx="273" cy="292" r="13" fill="var(--on-dark)" />
        <text x="273" y="297" fill="var(--ink)" textAnchor="middle" fontWeight="700" fontSize="14">1</text>
        <text x="24" y="298" fill="var(--on-dark)">Sunlight: many wavelengths,</text>
        <text x="24" y="318" fill="var(--on-dark)">including infrared we can’t see</text>
        <circle cx="422" cy="234" r="13" fill="var(--signal)" />
        <text x="422" y="239" fill="var(--ink)" textAnchor="middle" fontWeight="700" fontSize="14">2</text>
        <text x="444" y="240" fill="var(--on-dark)">Reflected sunlight passes</text>
        <text x="444" y="260" fill="var(--on-dark)">back up through the air</text>
        <circle cx="230" cy="56" r="13" fill="var(--on-dark)" />
        <text x="230" y="61" fill="var(--ink)" textAnchor="middle" fontWeight="700" fontSize="14">3</text>
        <text x="252" y="61" fill="var(--on-dark)">A spectrometer splits the light</text>
        <text x="252" y="81" fill="var(--on-dark)">by wavelength</text>
        <text x="326" y="404" textAnchor="middle" fontSize="14" fontWeight="400" fill="var(--on-dark-2)">
          Methane is invisible: the dashed outline only marks where it is
        </text>
      </g>

      {/* Spectrum plot: dips are dimmer, never dark */}
      <path d="M668 24V416" stroke="#ffffff33" strokeDasharray="2 4" />
      <g fontFamily="var(--font-mono)">
        <rect x="781" y="64" width="183" height="280" fill="#6ebd6a14" />
        <path d="M781 86v-6h183v6" stroke="var(--signal)" fill="none" />
        <text x="872" y="72" textAnchor="middle" fontSize="11" fill="var(--on-dark-2)">≈ 1,630–1,675 nm</text>
        <path d="M724 64V344H1004" stroke="#ffffff99" fill="none" />
        <path d="M718 64h6M718 134h6M718 204h6M718 274h6" stroke="#ffffff99" />
        <path d="M740 344v6M780.7 344v6M821.3 344v6M862 344v6M902.7 344v6M943.3 344v6M984 344v6" stroke="#ffffff99" />
        <g fontSize="11" fill="var(--on-dark-2)" textAnchor="middle">
          <text x="740" y="366">1.62</text>
          <text x="780.7" y="366">1.63</text>
          <text x="821.3" y="366">1.64</text>
          <text x="862" y="366">1.65</text>
          <text x="902.7" y="366">1.66</text>
          <text x="943.3" y="366">1.67</text>
          <text x="984" y="366">1.68</text>
        </g>
        <text x="862" y="398" textAnchor="middle" fontSize="12" fill="var(--on-dark)">wavelength, near 1.65 µm →</text>
        <text x="702" y="204" textAnchor="middle" fontSize="12" fill="var(--on-dark)" transform="rotate(-90 702 204)">light received</text>
        <path d="M724 120H1004" stroke="#ffffff26" strokeDasharray="3 5" />
        <path
          className={styles.draw}
          pathLength={1}
          d="M724 120 L812 120 C817 120 818 170 821 170 C824 170 825 120 830 120 L852 120 C857 120 858 222 862 222 C866 222 867 120 872 120 L893 120 C898 120 899 176 903 176 C907 176 908 120 913 120 L1004 120"
          fill="none"
          stroke="var(--signal)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path d="M862 104v8" stroke="var(--on-dark)" />
        <text x="862" y="98" textAnchor="middle" fontSize="11" fill="var(--on-dark)">1.65 µm</text>
        <path d="M856 228h12M862 228v22M862 272v66M856 338h12" stroke="#ffffffb3" />
        <text x="862" y="265" textAnchor="middle" fontSize="12" fill="var(--on-dark)">dips: dimmer, not dark</text>
      </g>
    </svg>
  );
}

// Phones: the scene, a numbered legend in real text, then the spectrum plot on its own.
function PhoneScene({ titleId, descId, desc }: { titleId: string; descId: string; desc: string }) {
  const m = `${titleId}-m`;
  return (
    <svg viewBox="0 0 358 330" role="img" aria-labelledby={`${titleId} ${descId}`} className={styles.methane}>
      <title id={titleId}>{TITLE}</title>
      <desc id={descId}>{desc}</desc>
      <Markers id={m} />
      <rect x="0" y="268" width="358" height="62" fill="#ffffff0a" />
      <path d="M0 268H358" stroke="#ffffff4d" />
      <path d="M18 268v6M38 268v3M58 268v3M78 268v3M98 268v6M118 268v3M138 268v3M158 268v3M178 268v6M198 268v3M218 268v3M238 268v3M258 268v6M278 268v3M298 268v3M318 268v3M338 268v6" stroke="#ffffff40" />
      <g stroke="var(--on-dark)" strokeWidth="2" fill="none" strokeLinecap="round">
        <circle cx="44" cy="56" r="18" fill="var(--surface-dark)" />
        <path d="M44 28v-8M44 92v-8M16 56H8M80 56h-8M24 36l-6-6M70 82l-6-6M24 76l-6 6M70 30l-6 6" />
      </g>
      <line className={styles.flow} x1="60" y1="74" x2="160" y2="260" stroke="var(--on-dark)" strokeWidth="2" markerEnd={`url(#${m}-w)`} />
      <g stroke="var(--on-dark)" strokeWidth="1.5" fill="var(--surface-dark)">
        <rect x="148" y="246" width="34" height="22" />
        <rect x="186" y="252" width="22" height="16" />
        <line x1="160" y1="246" x2="160" y2="232" />
      </g>
      <ellipse cx="180" cy="224" rx="58" ry="26" fill="#6ebd6a0d" stroke="var(--signal)" strokeWidth="2" strokeDasharray="5 4" />
      <line className={styles.flow} x1="172" y1="262" x2="270" y2="84" stroke="var(--signal)" strokeWidth="2" markerEnd={`url(#${m}-g)`} />
      <g stroke="var(--on-dark)" strokeWidth="1.5">
        <rect x="262" y="42" width="30" height="26" fill="var(--surface-dark)" />
        <rect x="271" y="68" width="12" height="5" fill="var(--surface-dark)" />
        <rect x="226" y="49" width="32" height="12" fill="#6ebd6a40" />
        <rect x="296" y="49" width="32" height="12" fill="#6ebd6a40" />
      </g>
      <g fontFamily="var(--font-ui)" fontWeight="700" fontSize="13" textAnchor="middle">
        <circle cx="116" cy="178" r="12" fill="var(--on-dark)" />
        <text x="116" y="183" fill="var(--ink)">1</text>
        <circle cx="222" cy="172" r="12" fill="var(--signal)" />
        <text x="222" y="177" fill="var(--ink)">2</text>
        <circle cx="206" cy="30" r="12" fill="var(--on-dark)" />
        <text x="206" y="35" fill="var(--ink)">3</text>
      </g>
      <g fontFamily="var(--font-ui)" fontSize="12" fill="var(--on-dark-2)" textAnchor="middle">
        <text x="179" y="294">Methane is invisible: the dashed outline</text>
        <text x="179" y="311">only marks where it is</text>
      </g>
    </svg>
  );
}

function PhoneSpectrum() {
  return (
    <svg viewBox="0 0 358 250" aria-hidden="true" focusable="false" className={styles.methane}>
      <g fontFamily="var(--font-mono)">
        <rect x="100" y="34" width="216" height="166" fill="#6ebd6a14" />
        <path d="M100 34v-6h216v6" stroke="var(--signal)" fill="none" />
        <text x="208" y="20" textAnchor="middle" fontSize="10" fill="var(--on-dark-2)">≈ 1,630–1,675 nm</text>
        <path d="M40 34V200H346" stroke="#ffffff99" fill="none" />
        <path d="M52 200v5M100 200v5M148 200v5M196 200v5M244 200v5M292 200v5M340 200v5" stroke="#ffffff99" />
        <g fontSize="10" fill="var(--on-dark-2)" textAnchor="middle">
          <text x="52" y="218">1.62</text>
          <text x="100" y="218">1.63</text>
          <text x="148" y="218">1.64</text>
          <text x="196" y="218">1.65</text>
          <text x="244" y="218">1.66</text>
          <text x="292" y="218">1.67</text>
          <text x="340" y="218">1.68</text>
        </g>
        <text x="193" y="242" textAnchor="middle" fontSize="11" fill="var(--on-dark)">wavelength, near 1.65 µm →</text>
        <text x="22" y="117" textAnchor="middle" fontSize="11" fill="var(--on-dark)" transform="rotate(-90 22 117)">light received</text>
        <path d="M40 70H346" stroke="#ffffff26" strokeDasharray="3 5" />
        <path
          className={styles.draw}
          pathLength={1}
          d="M40 70 L141 70 C145 70 146 100 148 100 C150 100 151 70 155 70 L188 70 C193 70 194 140 196 140 C198 140 199 70 204 70 L237 70 C241 70 242 104 244 104 C246 104 247 70 251 70 L346 70"
          fill="none"
          stroke="var(--signal)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M196 56v6" stroke="var(--on-dark)" />
        <text x="196" y="52" textAnchor="middle" fontSize="10" fill="var(--on-dark)">1.65 µm</text>
        <path d="M190 146h12M196 146v12M196 181v15M190 196h12" stroke="#ffffffb3" />
        <text x="196" y="174" textAnchor="middle" fontSize="11" fill="var(--on-dark)">dips: dimmer, not dark</text>
      </g>
    </svg>
  );
}

// The full-width dark green instrument panel on the GHGSat classroom story.
export function MethanePanel({ headingId, desc }: { headingId: string; desc: string }) {
  return (
    <div className={styles.panel}>
      <div className={styles.panelHead}>
        <h2 id={headingId} className={styles.panelTitle}>
          Schematic · Measuring methane with reflected sunlight
        </h2>
        <span className={styles.scale}>
          Not to scale
          <svg width="57" height="10" viewBox="0 0 57 10" aria-hidden="true" focusable="false">
            <path d="M.5 10V0M8.5 10V6M16.5 10V6M24.5 10V6M32.5 10V2M40.5 10V6M48.5 10V6M56.5 10V0" stroke="#ffffff59" />
          </svg>
        </span>
      </div>
      <div className={styles.wide}>
        <MethaneDiagram titleId="diagram-title" descId="diagram-desc" desc={desc} />
      </div>
      <div className={styles.narrow}>
        <PhoneScene titleId="diagram-title-sm" descId="diagram-desc-sm" desc={desc} />
        <ol className={styles.legend}>
          <li>
            <span aria-hidden="true">1</span>Sunlight: many wavelengths, including infrared we can’t see
          </li>
          <li>
            <span aria-hidden="true" className={styles.legendSignal}>2</span>Reflected sunlight passes back up through the air
          </li>
          <li>
            <span aria-hidden="true">3</span>A spectrometer splits the light by wavelength
          </li>
        </ol>
        <PhoneSpectrum />
      </div>
      <dl className={styles.readout}>
        <div>
          <dt>Band</dt>
          <dd>About 1,630–1,675 nanometres</dd>
        </div>
        <div>
          <dt>Instrument</dt>
          <dd>Spectrometer · sends out no light of its own</dd>
        </div>
        <div>
          <dt>Altitude</dt>
          <dd>About 500 km up</dd>
        </div>
      </dl>
    </div>
  );
}
