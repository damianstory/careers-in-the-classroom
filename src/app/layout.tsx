import type { Metadata } from "next";
import localFont from "next/font/local";
import { DialogProvider } from "@/components/dialogs/DialogProvider";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "@/styles/globals.css";

const plexSans = localFont({
  variable: "--font-plex-sans",
  display: "swap",
  src: [
    { path: "./fonts/IBMPlexSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/IBMPlexSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/IBMPlexSans-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/IBMPlexSans-Bold.woff2", weight: "700", style: "normal" },
  ],
});
const plexMono = localFont({
  variable: "--font-plex-mono",
  display: "swap",
  src: [
    { path: "./fonts/IBMPlexMono-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/IBMPlexMono-Medium.woff2", weight: "500", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: { default: "Careers in the Classroom", template: "%s · Careers in the Classroom" },
  description: "Real Calgary organizations, the problems they’re working on, and the people doing the work, with Alberta science, technology and business course connections.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable}`}>
      <body>
        <a href="#main" className="sr-only skip-link">
          Skip to content
        </a>
        <DialogProvider>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </DialogProvider>
      </body>
    </html>
  );
}
