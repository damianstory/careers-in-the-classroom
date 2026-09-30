import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { DialogProvider } from "@/components/dialogs/DialogProvider";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "@/styles/globals.css";

const plexSans = IBM_Plex_Sans({ variable: "--font-plex-sans", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const plexMono = IBM_Plex_Mono({ variable: "--font-plex-mono", subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  title: { default: "Careers in the Classroom", template: "%s · Careers in the Classroom" },
  description: "Real Calgary organizations, the problems they’re working on, and the people doing the work, matched to Alberta science courses.",
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
