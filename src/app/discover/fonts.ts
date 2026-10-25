import localFont from "next/font/local";

// TKS brand type, scoped to the Discover area. The rest of the site keeps IBM Plex.
const tksDisplay = localFont({
  variable: "--font-tks-display",
  display: "swap",
  src: [{ path: "./fonts/Mediamoure-Regular.woff2", weight: "400", style: "normal" }],
});
const tksUI = localFont({
  variable: "--font-tks-ui",
  display: "swap",
  src: [
    { path: "./fonts/PPNeueMontreal-Book.woff2", weight: "400", style: "normal" },
    { path: "./fonts/PPNeueMontreal-Medium.woff2", weight: "500", style: "normal" },
  ],
});

export const discoverFonts = `${tksDisplay.variable} ${tksUI.variable}`;
