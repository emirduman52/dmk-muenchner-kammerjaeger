/**
 * Dateilinks laufen nicht über next/link und bekommen den Unterordner der Vorschau-Adresse
 * deshalb nicht automatisch. NEXT_PUBLIC_BASE_PATH wird in next.config.ts nur im
 * Vorschau-Build gesetzt; lokal und beim späteren Hosting ist er leer.
 */
export function dateiHref(pfad: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${pfad}`;
}

export type Download = { titel: string; text: string; datei: string; format: string };
export type DownloadGruppe = { titel: string; einleitung: string; eintraege: Download[] };

export const downloadGruppen: DownloadGruppe[] = [
  {
    titel: "Flyer",
    einleitung: "Eine Seite, schnell erfasst — zum Weitergeben an Kollegen, Eigentümer oder Geschäftsführung.",
    eintraege: [
      {
        titel: "Für Hausverwaltungen",
        text: "Leistungen, Ablauf und Kontakt für Hausverwaltungen und Wohnanlagen.",
        datei: "/downloads/dmk-flyer-hausverwaltungen.pdf",
        format: "PDF · 1 Seite",
      },
      {
        titel: "Für Gastronomie und Hotellerie",
        text: "HACCP-Monitoring, diskrete Einsätze und Dokumentation für Restaurants und Hotels.",
        datei: "/downloads/dmk-flyer-gastronomie-hotellerie.pdf",
        format: "PDF · 1 Seite",
      },
      {
        titel: "Für Gewerbe und Industrie",
        text: "Monitoring, Prävention und Nachweise für Lager, Logistik, Produktion und Betriebe.",
        datei: "/downloads/dmk-flyer-gewerbe-industrie.pdf",
        format: "PDF · 1 Seite",
      },
    ],
  },
  {
    titel: "Vorlagen",
    einleitung: "Zum Ausfüllen und Anpassen — spart Hausverwaltungen Zeit.",
    eintraege: [
      {
        titel: "Aushang für Mieter: Schädlingsbekämpfung im Haus",
        text: "Vorlage zur Information der Bewohner über einen Einsatz. Felder ausfüllen, ausdrucken, aushängen.",
        datei: "/downloads/dmk-aushang-vorlage-mieter.docx",
        format: "Word · bearbeitbar",
      },
    ],
  },
];
