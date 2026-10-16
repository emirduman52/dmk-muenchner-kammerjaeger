import type { FaqEintrag } from "@/lib/faq";

export type Branche = {
  slug: string;
  /** Kurzname für Karten und Links */
  name: string;
  /** Überschrift der Seite */
  titel: string;
  kicker: string;
  beschreibung: string;
  intro: string;
  /** Kurztext für die Übersichtsseite */
  kurz: string;
  herausforderungen: string[];
  leistungen: { titel: string; text: string }[];
  /** Slugs der Schädlingsseiten, die für diese Branche typisch sind */
  schaedlinge: string[];
  hinweis?: { titel: string; text: string };
  faq: FaqEintrag[];
};

export const branchen: Branche[] = [
  {
    slug: "hausverwaltungen",
    name: "Hausverwaltungen",
    titel: "Schädlingsbekämpfung für Hausverwaltungen",
    kicker: "Für Hausverwaltungen",
    beschreibung:
      "Schädlingsbekämpfung für Hausverwaltungen in München und Umgebung: kurzfristige Einsätze, Festpreis vor dem Termin und schriftliche Dokumentation für jeden Einsatz.",
    kurz: "Schnelle Einsätze, klare Preise und Nachweise für jeden Einsatz — für Mehrfamilienhäuser und Wohnanlagen.",
    intro:
      "Befall in einem Mehrfamilienhaus betrifft mehrere Parteien, verlangt schnelle Abstimmung und lückenlose Nachweise. Wir sind Ihr verlässlicher Ansprechpartner: kurzfristige Termine, Festpreis vorab und eine schriftliche Dokumentation für jeden Einsatz.",
    herausforderungen: [
      "Ein Befall breitet sich schnell auf Nachbarwohnungen, Keller und Gemeinschaftsflächen aus.",
      "Mieter erwarten eine rasche Reaktion — Verzögerungen führen zu Beschwerden.",
      "Für Eigentümer, Mieter und Behörden werden verlässliche Nachweise gebraucht.",
      "Der Zugang zu mehreren Wohnungen muss abgestimmt werden.",
      "Dachböden, Keller und Müllräume bieten Schädlingen Einstiege und Verstecke.",
    ],
    leistungen: [
      {
        titel: "Kurzfristige Termine",
        text: "Wir kommen in der Regel kurzfristig, oft noch am selben Tag — auch am Wochenende im Notdienst-Einsatz.",
      },
      {
        titel: "Festpreis vor dem Termin",
        text: "Sie kennen die Kosten, bevor wir anfangen. Das erleichtert die Abstimmung mit Eigentümern und die Abrechnung.",
      },
      {
        titel: "Dokumentation für jeden Einsatz",
        text: "Was wir gemacht haben, erhalten Sie schriftlich — als Nachweis für Eigentümer, Mieter und Behörden.",
      },
      {
        titel: "Befall im ganzen Haus bekämpfen",
        text: "Wir prüfen nicht nur die gemeldete Wohnung, sondern auch Nachbarbereiche, Keller und Gemeinschaftsflächen.",
      },
      {
        titel: "Prävention an Dach, Keller und Fassade",
        text: "Einstiege für Ratten, Mäuse oder Marder schließen, Tauben fernhalten — damit der Befall nicht zurückkommt.",
      },
      {
        titel: "Diskret und sachlich",
        text: "Gerade bei Bettwanzen gehen wir diskret vor und beraten Sie, wie Sie die Bewohner sachlich informieren.",
      },
    ],
    schaedlinge: [
      "rattenbekaempfung",
      "maeusebekaempfung",
      "bettwanzenbekaempfung",
      "wespenbekaempfung",
      "taubenvergraemung",
      "mardervergraemung",
      "ameisenbekaempfung",
    ],
    faq: [
      {
        frage: "Wer trägt die Kosten, Vermieter oder Mieter?",
        antwort:
          "Das hängt vom Einzelfall ab, etwa vom Mietvertrag und von der Ursache des Befalls. Dazu können wir keine Rechtsberatung geben. Unsere schriftliche Dokumentation liefert Ihnen dafür aber eine saubere Grundlage.",
      },
      {
        frage: "Wie schnell können Sie bei einer Meldung eines Mieters vor Ort sein?",
        antwort:
          "In der Regel kurzfristig, oft noch am selben Tag. Rufen Sie uns an oder schreiben Sie uns per WhatsApp — Mo bis Fr von 08:00 bis 20:00 Uhr, am Wochenende im Notdienst-Einsatz.",
      },
      {
        frage: "Erhalte ich nach jedem Einsatz eine Dokumentation?",
        antwort:
          "Ja. Nachweise für Vermieter, Behörden und Audits erhalten Sie schriftlich.",
      },
      {
        frage: "Wie erfahre ich vorher, was es kostet?",
        antwort:
          "Nach einer kurzen Einschätzung nennen wir Ihnen den Preis als Festpreis, bevor der Einsatz beginnt. Mehr dazu auf unserer Preisseite.",
      },
      {
        frage: "Können Sie mehrere Objekte betreuen?",
        antwort:
          "Sprechen Sie uns an. Wir besprechen mit Ihnen, wie wir Einsätze für Ihre Objekte am besten organisieren.",
      },
    ],
  },
  {
    slug: "gastronomie-hotellerie",
    name: "Gastronomie & Hotellerie",
    titel: "Schädlingsbekämpfung für Gastronomie und Hotellerie",
    kicker: "Für Gastronomie und Hotellerie",
    beschreibung:
      "Schädlingsbekämpfung für Restaurants, Hotels und Catering in München und Umgebung: HACCP-konforme Dokumentation, diskrete Einsätze und schnelle Hilfe bei akutem Befall.",
    kurz: "HACCP-konform, diskret und schnell — für Restaurants, Hotels, Cafés und Catering.",
    intro:
      "In Küche, Lager und Gästebereich zählt Hygiene. Schon ein einzelner Befall kann Gäste verschrecken, bei Kontrollen auffallen und den Ruf kosten. Wir sorgen mit Monitoring und Dokumentation für Sicherheit und greifen bei akutem Befall schnell und diskret ein.",
    herausforderungen: [
      "Befall in Küche, Lager oder Müllbereich ist ein Hygienemangel und fällt bei Kontrollen auf.",
      "Gäste, Online-Bewertungen und Ruf reagieren empfindlich auf Schädlinge.",
      "Der Betrieb darf möglichst nicht lange gestört werden.",
      "In Hotels können Bettwanzen eingeschleppt werden, ohne dass der Betrieb etwas dafür kann.",
      "Behörden und Audits verlangen lückenlose Nachweise.",
    ],
    leistungen: [
      {
        titel: "HACCP-Monitoring",
        text: "Köderstationen, Kontrollberichte und Lagepläne nach festem Intervall — jederzeit vorzeigbar.",
      },
      {
        titel: "Dokumentation für Audits und Behörden",
        text: "Maßnahmenprotokolle und Nachweise stellen wir Ihnen vollständig zur Verfügung.",
      },
      {
        titel: "Schnelle Hilfe bei akutem Befall",
        text: "Bei Mäusen, Ratten, Fliegen oder Lebensmittelschädlingen sind wir kurzfristig bei Ihnen, oft noch am selben Tag.",
      },
      {
        titel: "Diskreter Einsatz im laufenden Betrieb",
        text: "Wir stimmen den Einsatz mit Ihnen ab, damit Gäste und Abläufe möglichst wenig gestört werden.",
      },
      {
        titel: "Bettwanzen im Hotel",
        text: "Gezielte, diskrete Behandlung betroffener Zimmer — ohne Aufsehen bei Gästen und Personal.",
      },
      {
        titel: "Festpreis vor dem Termin",
        text: "Bei Einsätzen und Konzepten wissen Sie vorher, was es kostet.",
      },
    ],
    schaedlinge: [
      "fliegenbekaempfung",
      "maeusebekaempfung",
      "rattenbekaempfung",
      "ameisenbekaempfung",
      "bettwanzenbekaempfung",
      "ungezieferbekaempfung",
      "kaeferbekaempfung",
    ],
    hinweis: {
      titel: "Schädlingskontrolle gehört zur Lebensmittelhygiene",
      text: "Lebensmittelunternehmen müssen nach dem EU-Lebensmittelhygienerecht dafür sorgen, dass Schädlinge ferngehalten werden und eine wirksame Kontrolle besteht. Ein funktionierendes HACCP-Konzept inklusive Monitoring und Dokumentation ist dafür der übliche Weg.",
    },
    faq: [
      {
        frage: "Brauche ich als Restaurant ein Schädlingsmonitoring?",
        antwort:
          "Ein wirksamer Schutz vor Schädlingen ist Teil der Lebensmittelhygiene und des HACCP-Konzepts. Wie das Monitoring im Einzelfall aussieht, richtet sich nach Betrieb und Risiko. Wir beraten Sie dazu.",
      },
      {
        frage: "Was passiert bei einer Kontrolle durch die Behörde?",
        antwort:
          "Mit Kontrollberichten, Maßnahmenprotokollen und Lageplänen der Köderstationen können Sie Ihre Schädlingskontrolle belegen. Die Unterlagen erhalten Sie schriftlich.",
      },
      {
        frage: "Wie schnell kommen Sie bei akutem Befall?",
        antwort:
          "In der Regel kurzfristig, oft noch am selben Tag. Rufen Sie uns an oder schreiben Sie uns per WhatsApp.",
      },
      {
        frage: "Wird der Betrieb durch den Einsatz gestört?",
        antwort:
          "Wir stimmen Termin und Vorgehen mit Ihnen ab, damit der Betrieb möglichst wenig beeinträchtigt wird. Was im Einzelfall nötig ist, hängt vom Schädling und vom Bereich ab.",
      },
      {
        frage: "Was kostet das?",
        antwort:
          "Das richtet sich nach Betriebsgröße und Umfang. Nach einer Einschätzung nennen wir Ihnen den Preis als Festpreis, bevor wir anfangen.",
      },
    ],
  },
  {
    slug: "gewerbe-industrie",
    name: "Gewerbe & Industrie",
    titel: "Schädlingsbekämpfung für Gewerbe und Industrie",
    kicker: "Für Gewerbe und Industrie",
    beschreibung:
      "Schädlingsbekämpfung für Betriebe, Lager und Industrie in München und Umgebung: Monitoring, Dokumentation für Audits, Taubenabwehr und schnelle Einsätze.",
    kurz: "Monitoring, Prävention und Nachweise für Lager, Logistik, Produktion und Betriebe.",
    intro:
      "Lager, Logistik, Produktion oder Betriebsgebäude: Schädlinge beschädigen Waren und Gebäude, verschlechtern die Hygiene und können Aufträge und Zertifizierungen gefährden. Wir übernehmen Kontrolle, Prävention und Dokumentation — und greifen bei akutem Befall schnell ein.",
    herausforderungen: [
      "Große Flächen mit vielen Einstiegen wie Toren, Rampen und Lüftungen.",
      "Waren und Verpackungen werden durch Nager, Käfer und Motten beschädigt oder verunreinigt.",
      "Tauben und Vögel verschmutzen Dächer, Hallen und Anlieferzonen.",
      "Kunden, Audits und Zertifizierungen verlangen nachvollziehbare Nachweise.",
      "Befall darf Abläufe und Lieferketten nicht lange stören.",
    ],
    leistungen: [
      {
        titel: "Begehung und Einschätzung",
        text: "Wir prüfen Ihr Objekt, finden Schwachstellen und schätzen den Aufwand ein.",
      },
      {
        titel: "Monitoring und Kontrolle",
        text: "Köderstationen und Kontrollen nach festem Intervall, mit Lageplan Ihrer Monitoring-Systeme.",
      },
      {
        titel: "Dokumentation für Audits",
        text: "Kontrollberichte, Maßnahmenprotokolle und Nachweise für Kunden, Behörden und Zertifizierungen.",
      },
      {
        titel: "Taubenabwehr an Hallen und Dächern",
        text: "Tierschutzgerechte Abwehrsysteme gegen Verschmutzung und Bauschäden.",
      },
      {
        titel: "Vorratsschädlinge und Nager",
        text: "Gezielte Bekämpfung von Mäusen, Ratten, Käfern und Motten in Lager- und Produktionsbereichen.",
      },
      {
        titel: "Festpreis nach Begehung",
        text: "Nach der Einschätzung wissen Sie vorab, was Einsatz oder Konzept kostet.",
      },
    ],
    schaedlinge: [
      "rattenbekaempfung",
      "maeusebekaempfung",
      "taubenvergraemung",
      "kaeferbekaempfung",
      "ungezieferbekaempfung",
      "fliegenbekaempfung",
      "mardervergraemung",
    ],
    faq: [
      {
        frage: "Bekomme ich eine Dokumentation für Audits?",
        antwort:
          "Ja. Für Audits und Kontrollen stellen wir Kontrollberichte, Maßnahmenprotokolle, Lagepläne der Monitoring-Systeme und Nachweise zur Verfügung.",
      },
      {
        frage: "Was gehört zu einem Monitoring-Konzept?",
        antwort:
          "Köderstationen, regelmäßige Kontrollen, ein Lageplan und die Dokumentation aller Maßnahmen. Details finden Sie auf unserer HACCP-Seite.",
      },
      {
        frage: "Wie schnell können Sie bei akutem Befall helfen?",
        antwort:
          "In der Regel kurzfristig, oft noch am selben Tag. Bei einem Befall in Lager oder Produktion rufen Sie uns am besten direkt an.",
      },
      {
        frage: "Wie wird der Preis berechnet?",
        antwort:
          "Das richtet sich nach Größe, Zahl der Einstiege und Umfang der Maßnahmen. Nach einer Begehung oder Einschätzung nennen wir Ihnen einen Festpreis, bevor wir anfangen.",
      },
      {
        frage: "Arbeiten Sie auch außerhalb von München?",
        antwort:
          "Wir sind in München und Umgebung, im Landkreis München, in Oberbayern und Niederbayern im Einsatz. Weitere Regionen sind auf Anfrage möglich.",
      },
    ],
  },
];

export function findBranche(slug: string): Branche | undefined {
  return branchen.find((b) => b.slug === slug);
}
