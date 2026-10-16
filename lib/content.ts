export const TELEFON = "0160 344 38 36";
export const TELEFON_HREF = "tel:+491603443836";
export const EMAIL = "info@diemuenchnerkammerjaeger.de";

/** WhatsApp-Chat mit vorbereiteter Nachricht (gleiche Nummer wie das Telefon). */
export const WHATSAPP_HREF = `https://wa.me/491603443836?text=${encodeURIComponent(
  "Hallo, ich habe einen akuten Schädlingsbefall und brauche Hilfe. Bitte melden Sie sich bei mir.",
)}`;

/** Rückruf-Bitte per E-Mail mit vorbereitetem Text. */
export const RUECKRUF_HREF = `mailto:${EMAIL}?subject=${encodeURIComponent("Rückruf-Bitte")}&body=${encodeURIComponent(
  "Bitte rufen Sie mich zurück.\n\nName:\nTelefon:\nSchädling / Anliegen:\nAdresse / PLZ:\n",
)}`;

export type Leistung = {
  titel: string;
  text: string;
  /** Eigene Detailseite unter /dienstleistungen/<slug>; leer, wenn es (noch) keine gibt. */
  slug?: string;
  /** Abweichendes Linkziel, z. B. /haccp. */
  href?: string;
};

export const leistungen: Leistung[] = [
  { titel: "Rattenbekämpfung", slug: "rattenbekaempfung", text: "Ratten hinterlassen Fraßschäden und Krankheitserreger. Wir bekämpfen den Befall und schließen die Zugänge." },
  { titel: "Mäusebekämpfung", slug: "maeusebekaempfung", text: "Mäuse vermehren sich schnell. Wir finden Nester und Laufwege und sichern das Gebäude ab." },
  { titel: "Bettwanzenbekämpfung", slug: "bettwanzenbekaempfung", text: "Diskret und gründlich behandelt — damit auch die Eier nicht überleben." },
  { titel: "Wespenbekämpfung", slug: "wespenbekaempfung", text: "Nester an Balkon, Rollokasten oder Dach entfernen wir sicher, ohne Sie in Gefahr zu bringen." },
  { titel: "Ameisenbekämpfung", slug: "ameisenbekaempfung", text: "Wir behandeln die Straßen und das Nest, nicht nur die Tiere, die Sie sehen." },
  { titel: "Fliegenbekämpfung", slug: "fliegenbekaempfung", text: "Ursachenbekämpfung statt Spray: Brutstätten finden, entfernen, Wiederbefall verhindern." },
  { titel: "Mardervergrämung", slug: "mardervergraemung", text: "Marder im Dachboden vergrämen und Einstiegsstellen dauerhaft verschließen." },
  { titel: "Taubenvergrämung", slug: "taubenvergraemung", text: "Tierschutzgerechte Abwehrsysteme gegen Verschmutzung und Bauschäden." },
  { titel: "Wespennest-Entfernung", slug: "wespenbekaempfung", text: "Kurzfristige Terminvergabe — meist noch am selben Tag." },
  { titel: "Ungezieferbekämpfung", slug: "ungezieferbekaempfung", text: "Motten, Vorratsschädlinge und anderes Ungeziefer zuverlässig entfernen." },
  { titel: "Silberfischbekämpfung", slug: "silberfischbekaempfung", text: "Silberfischchen in Bad, Küche und Keller: Wir bekämpfen sie und beseitigen die Ursache." },
  { titel: "Käferbekämpfung", slug: "kaeferbekaempfung", text: "Käfer in Vorräten, Textilien und Holz — Art bestimmen, gezielt bekämpfen." },
  { titel: "Desinfektion", text: "Flächen- und Raumdesinfektion für Wohnungen, Praxen und Betriebe." },
  { titel: "HACCP-Monitoring", href: "/haccp", text: "Köderstationen, Kontrollberichte und Dokumentation für Lebensmittelbetriebe." },
];

/** Linkziel einer Leistung; null, wenn es dafür keine eigene Seite gibt. */
export function leistungHref(l: Leistung): string | null {
  if (l.href) return l.href;
  if (l.slug) return `/dienstleistungen/${l.slug}`;
  return null;
}

export const leistungsOptionen = [
  ...leistungen.map((l) => l.titel),
  "Weiß ich nicht — bitte beraten",
];
