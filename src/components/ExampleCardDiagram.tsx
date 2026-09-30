import type { ClassroomStory } from "@/content";

export type CardDiagramKind = ClassroomStory["diagramKind"];

// The mono label above each schematic and the honesty note below it.
export const cardDiagramText: Record<CardDiagramKind, { label: string; caption: string }> = {
  methane: { label: "Measuring methane with reflected sunlight", caption: "Not to scale. Not a GHGSat image." },
  "owl-recovery": { label: "From care to population recovery", caption: "Releasing animals is a step. Recovery needs evidence." },
  "lithium-separation": {
    label: "Separating lithium from a mixture",
    caption: "Conceptual process · not a plant design or measured recovery",
  },
};

// Small ruler ticks for the label bar of an instrument screen (dark surfaces only).
export function RulerTicks() {
  return (
    <svg width="49" height="10" viewBox="0 0 49 10" aria-hidden="true" focusable="false" style={{ flex: "none" }}>
      <path d="M.5 10V0M8.5 10V6M16.5 10V6M24.5 10V2M32.5 10V6M40.5 10V6M48.5 10V0" stroke="rgb(255 255 255 / 0.35)" fill="none" />
    </svg>
  );
}

// Compact editorial schematics of the sourced stories, not photographs or measured results.
// Colour comes from CSS variables set by the card's instrument screen (ExampleCard.module.css):
// --dg-line (strokes), --dg-signal (flows and highlights), --dg-fill (shape fill),
// --dg-text / --dg-text-2 (labels), --dg-hair (rules), --dg-wash / --dg-signal-wash (tints).
export function ExampleCardDiagram({ kind }: { kind: CardDiagramKind }) {
  const arrowId = `card-${kind}-arrow`;
  if (kind === "methane") return <Methane />;
  const owl = kind === "owl-recovery";
  return (
    <svg viewBox={owl ? "20 -8 600 375" : "20 14 600 375"} aria-hidden="true" focusable="false">
      <defs>
        <marker id={arrowId} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0 0 6 3 0 6Z" fill="var(--dg-signal)" />
        </marker>
      </defs>
      {owl ? (
        <>
          <path d="M34 6h16M42 -2v16M590 6h16M598 -2v16M34 350h16M42 342v16M590 350h16M598 342v16" stroke="var(--dg-hair-strong)" fill="none" />
          <path d="M40 296H600" stroke="var(--dg-hair)" />
          <path
            d="M40 296v10M80 296v5M120 296v5M160 296v5M200 296v5M240 296v10M280 296v5M320 296v5M360 296v5M400 296v5M440 296v10M480 296v5M520 296v5M560 296v5M600 296v10"
            stroke="var(--dg-hair)"
          />
          <g stroke="var(--dg-line)" strokeWidth="2" fill="var(--dg-fill)" strokeLinejoin="round" strokeLinecap="round">
            <path d="M64 213V114h112v99M57 114h126M73 104h94" fill="none" />
            <path d="M90 159 88 136l18 9h18l18-9-2 23v27c0 18-11 28-25 28s-25-10-25-28Z" />
            <circle cx="105" cy="166" r="11" />
            <circle cx="127" cy="166" r="11" />
            <circle cx="105" cy="166" r="3" fill="var(--dg-line)" />
            <circle cx="127" cy="166" r="3" fill="var(--dg-line)" />
            <path d="m111 184 5 7 5-7M103 214v8m25-8v8" fill="none" />
          </g>
          <path d="M194 165H254M391 165H447" stroke="var(--dg-signal)" strokeWidth="2.5" markerEnd={`url(#${arrowId})`} />
          <g stroke="var(--dg-line)" strokeWidth="2" fill="var(--dg-fill)" strokeLinejoin="round" strokeLinecap="round">
            <path d="M277 206q28-24 55 0M277 206h83M287 206q8-22 19 0" fill="var(--dg-wash)" />
            <path d="m281 145 20-9 7 13 17-9 24 4-23 9-7 23-7-20-18 1Z" />
            <path d="m322 118 17-8 6 11 14-8 21 3-20 8-6 19-6-16-16 1Z" />
            <path d="M362 205v-25m0 12 9-9m-9 16-8-9" fill="none" />
          </g>
          <g stroke="var(--dg-line)" strokeWidth="2" fill="var(--dg-fill)">
            <rect x="476" y="112" width="105" height="108" rx="7" />
            <rect x="501" y="104" width="55" height="16" rx="4" />
            <path
              d="m491 143 5 5 8-10m-13 29 5 5 8-10m-13 29 5 5 8-10"
              stroke="var(--dg-signal)"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g fontFamily="var(--font-ui)" fill="var(--dg-text)">
            <g fontSize="14" fill="var(--dg-text-2)">
              <text x="513" y="148">Survival</text>
              <text x="513" y="172">Breeding</text>
              <text x="513" y="196">Offspring</text>
            </g>
            <g textAnchor="middle" fontSize="18" fontWeight="600">
              <text x="119" y="256">Winter care</text>
              <text x="322" y="256">Spring release</text>
              <text x="529" y="256">Monitor outcomes</text>
            </g>
          </g>
        </>
      ) : (
        <>
          <path d="M34 28h16M42 20v16M590 28h16M598 20v16M34 372h16M42 364v16M590 372h16M598 364v16" stroke="var(--dg-hair-strong)" fill="none" />
          <g stroke="var(--dg-line)" strokeWidth="2" fill="var(--dg-fill)" strokeLinejoin="round" strokeLinecap="round">
            <path d="M69 143h108v73q0 9-9 9H78q-9 0-9-9Z" fill="var(--dg-signal-wash)" stroke="none" />
            <path d="M67 102v116q0 9 9 9h94q9 0 9-9V102M59 102h128" fill="none" />
            <rect x="271" y="102" width="104" height="125" rx="8" />
            <path d="M297 114v101m26-101v101m26-101v101" stroke="var(--dg-signal)" strokeDasharray="4 5" fill="none" />
            <path d="M495 110h57m-48 0v39l-26 52q-7 17 10 17h72q17 0 10-17l-27-52v-39" />
            <path d="M491 185h64" stroke="var(--dg-signal)" fill="none" />
          </g>
          <g fill="var(--dg-signal)">
            <circle cx="91" cy="169" r="6" />
            <circle cx="146" cy="200" r="6" />
            <circle cx="147" cy="156" r="6" />
            <circle cx="515" cy="199" r="6" />
            <circle cx="537" cy="199" r="6" />
          </g>
          <g fill="var(--dg-fill)" stroke="var(--dg-line)" strokeWidth="1.5">
            <circle cx="121" cy="185" r="6" />
            <circle cx="96" cy="207" r="6" />
            <circle cx="159" cy="180" r="6" />
          </g>
          <path d="M194 165H257M389 165H474" stroke="var(--dg-signal)" strokeWidth="2.5" markerEnd={`url(#${arrowId})`} />
          <path d="M323 227v67h62" stroke="var(--dg-signal)" strokeWidth="2" fill="none" markerEnd={`url(#${arrowId})`} />
          <g fontFamily="var(--font-ui)" fill="var(--dg-text)">
            <g textAnchor="middle" fontSize="18" fontWeight="600">
              <text x="123" y="256">Mixed brine</text>
              <text x="323" y="256">Separation</text>
              <text x="527" y="256">Purify + convert</text>
            </g>
            <text x="431" y="147" textAnchor="middle" fontSize="14" fill="var(--dg-text-2)">Lithium-rich</text>
            <text x="397" y="300" fontSize="15" fill="var(--dg-text-2)">Other material</text>
          </g>
        </>
      )}
    </svg>
  );
}

// A card-sized version of the GHGSat story schematic. The same checks apply: methane is drawn only as a
// dashed outline, the instrument is passive, and absorption dims wavelengths without removing them.
function Methane() {
  return (
    <svg viewBox="0 -12 640 400" aria-hidden="true" focusable="false">
      <defs>
        <marker id="card-methane-line" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 10 5 0 10z" fill="var(--dg-line)" />
        </marker>
        <marker id="card-methane-signal" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 10 5 0 10z" fill="var(--dg-signal)" />
        </marker>
      </defs>
      <rect x="0" y="300" width="640" height="88" fill="var(--dg-wash)" />
      <path d="M0 300H640" stroke="var(--dg-hair-strong)" />
      <g stroke="var(--dg-line)" strokeWidth="2" fill="none" strokeLinecap="round">
        <circle cx="70" cy="62" r="22" fill="var(--dg-fill)" />
        <path d="M70 26v-10M70 108v-10M34 62H24M116 62h-10M45 37l-7-7M102 94l-7-7M45 87l-7 7M102 30l-7 7" />
      </g>
      <line x1="92" y1="84" x2="262" y2="288" stroke="var(--dg-line)" strokeWidth="2.5" markerEnd="url(#card-methane-line)" />
      <g stroke="var(--dg-line)" strokeWidth="1.5" fill="var(--dg-fill)">
        <rect x="244" y="312" width="44" height="24" />
        <rect x="294" y="318" width="26" height="18" />
        <line x1="258" y1="312" x2="258" y2="298" />
      </g>
      <ellipse cx="300" cy="258" rx="62" ry="30" fill="none" stroke="var(--dg-signal)" strokeWidth="2" strokeDasharray="6 5" />
      <line x1="272" y1="290" x2="470" y2="92" stroke="var(--dg-signal)" strokeWidth="2.5" markerEnd="url(#card-methane-signal)" />
      <g stroke="var(--dg-line)" strokeWidth="1.5">
        <rect x="474" y="54" width="36" height="30" fill="var(--dg-fill)" />
        <rect x="430" y="62" width="40" height="14" fill="var(--dg-signal-wash)" />
        <rect x="514" y="62" width="40" height="14" fill="var(--dg-signal-wash)" />
      </g>
      <g fontFamily="var(--font-ui)" fontSize="14" fontWeight="500">
        <circle cx="140" cy="176" r="11" fill="var(--dg-line)" />
        <text x="140" y="181" fill="var(--dg-on-mark)" textAnchor="middle" fontWeight="700">1</text>
        <text x="20" y="262" fill="var(--dg-text)">Sunlight: many wavelengths,</text>
        <text x="20" y="280" fill="var(--dg-text)">including infrared we can’t see</text>
        <circle cx="392" cy="170" r="11" fill="var(--dg-signal)" />
        <text x="392" y="175" fill="var(--dg-on-mark)" textAnchor="middle" fontWeight="700">2</text>
        <text x="410" y="196" fill="var(--dg-text)">Reflected sunlight passes</text>
        <text x="410" y="214" fill="var(--dg-text)">back up through the air</text>
        <circle cx="410" cy="30" r="11" fill="var(--dg-line)" />
        <text x="410" y="35" fill="var(--dg-on-mark)" textAnchor="middle" fontWeight="700">3</text>
        <text x="428" y="26" fill="var(--dg-text)">A spectrometer splits the light</text>
        <text x="428" y="44" fill="var(--dg-text)">by wavelength</text>
        <text x="300" y="362" textAnchor="middle" fontSize="13" fontWeight="400" fill="var(--dg-text-2)">
          Methane is invisible: the dashed outline only marks where it is
        </text>
      </g>
      <g fontFamily="var(--font-mono)">
        <rect x="438" y="226" width="186" height="104" rx="6" fill="var(--dg-fill)" stroke="var(--dg-hair-strong)" />
        <line x1="452" y1="304" x2="612" y2="304" stroke="var(--dg-axis)" />
        <line x1="452" y1="304" x2="452" y2="240" stroke="var(--dg-axis)" />
        <path
          d="M452 252 L486 252 L494 268 L502 252 L530 252 L538 272 L546 252 L566 252 L572 264 L578 252 L612 252"
          fill="none"
          stroke="var(--dg-signal)"
          strokeWidth="2"
        />
        <text x="532" y="320" textAnchor="middle" fontSize="10" fill="var(--dg-text-2)">wavelength, near 1.65 µm →</text>
        <text x="458" y="246" fontSize="10" fill="var(--dg-text-2)">light received</text>
        <text x="532" y="292" textAnchor="middle" fontSize="10" fill="var(--dg-text)">dips: dimmer, not dark</text>
      </g>
    </svg>
  );
}
