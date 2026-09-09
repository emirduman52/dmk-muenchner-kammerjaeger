import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], weight: ["800"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: {
    default: "Schädlingsbekämpfung München — DMK Die Münchner Kammerjäger",
    template: "%s — DMK Die Münchner Kammerjäger",
  },
  description:
    "Professionelle Schädlingsbekämpfung für Privathaushalte, Gewerbe und Hausverwaltungen in München und Umgebung. Festpreis vor dem Termin, Nachkontrolle inklusive.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={`${inter.variable} ${manrope.variable}`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
