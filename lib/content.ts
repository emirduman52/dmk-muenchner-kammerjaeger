export const TELEFON = "0160 344 38 36";
export const TELEFON_HREF = "tel:+491603443836";
export const EMAIL = "info@diemuenchnerkammerjaeger.de";

export type Leistung = { titel: string; text: string };

export const leistungen: Leistung[] = [
  { titel: "Rattenbekämpfung", text: "Ratten hinterlassen Fraßschäden und Krankheitserreger. Wir bekämpfen den Befall und schließen die Zugänge." },
  { titel: "Mäusebekämpfung", text: "Mäuse vermehren sich schnell. Wir finden Nester und Laufwege und sichern das Gebäude ab." },
  { titel: "Bettwanzenbekämpfung", text: "Diskret und gründlich behandelt — damit auch die Eier nicht überleben." },
  { titel: "Wespenbekämpfung", text: "Nester an Balkon, Rollokasten oder Dach entfernen wir sicher, ohne Sie in Gefahr zu bringen." },
  { titel: "Ameisenbekämpfung", text: "Wir behandeln die Straßen und das Nest, nicht nur die Tiere, die Sie sehen." },
  { titel: "Fliegenbekämpfung", text: "Ursachenbekämpfung statt Spray: Brutstätten finden, entfernen, Wiederbefall verhindern." },
  { titel: "Mardervergrämung", text: "Marder im Dachboden vergrämen und Einstiegsstellen dauerhaft verschließen." },
  { titel: "Taubenvergrämung", text: "Tierschutzgerechte Abwehrsysteme gegen Verschmutzung und Bauschäden." },
  { titel: "Wespennest-Entfernung", text: "Kurzfristige Terminvergabe — meist noch am selben Tag." },
  { titel: "Ungezieferbekämpfung", text: "Silberfischchen, Motten, Käfer und andere Vorratsschädlinge zuverlässig entfernen." },
  { titel: "Desinfektion", text: "Flächen- und Raumdesinfektion für Wohnungen, Praxen und Betriebe." },
  { titel: "HACCP-Monitoring", text: "Köderstationen, Kontrollberichte und Dokumentation für Lebensmittelbetriebe." },
];

export const leistungsOptionen = [
  ...leistungen.map((l) => l.titel),
  "Weiß ich nicht — bitte beraten",
];
