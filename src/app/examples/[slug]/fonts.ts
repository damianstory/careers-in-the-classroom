import localFont from "next/font/local";

// TKS brand faces for the example card only (Mediamoure headings, PP Neue Montreal text).
// The rest of the site keeps IBM Plex. Files: tks-brand skill, assets/fonts.
export const tksHeading = localFont({
  variable: "--font-tks-heading",
  display: "swap",
  src: [{ path: "./fonts/Mediamoure-Regular.woff2", weight: "400", style: "normal" }],
});

export const tksText = localFont({
  variable: "--font-tks-text",
  display: "swap",
  src: [
    { path: "./fonts/PPNeueMontreal-Book.woff2", weight: "400", style: "normal" },
    { path: "./fonts/PPNeueMontreal-Medium.woff2", weight: "500", style: "normal" },
  ],
});
