export type FaqEintrag = { frage: string; antwort: string };
export type FaqGruppe = { titel: string; eintraege: FaqEintrag[] };

export const faqGruppen: FaqGruppe[] = [
  {
    titel: "Kosten und Ablauf",
    eintraege: [
      {
        frage: "Was kostet eine Schädlingsbekämpfung?",
        antwort:
          "Das hängt vom Schädling, der Stärke des Befalls, der Größe des Objekts und dem nötigen Aufwand ab. Deshalb nennen wir keine Pauschalpreise ins Blaue, sondern machen nach einer kurzen Einschätzung ein konkretes Angebot als Festpreis. Mehr dazu auf unserer Preisseite.",
      },
      {
        frage: "Was bedeutet „Festpreis vor dem Termin“?",
        antwort:
          "Sie erfahren den Preis, bevor wir mit der Arbeit anfangen. Er gilt für die vereinbarte Leistung, ohne versteckte Kosten auf der Rechnung.",
      },
      {
        frage: "Ist die Einschätzung kostenlos?",
        antwort:
          "Ja, die Einschätzung Ihrer Anfrage ist kostenlos. Je genauer Ihre Angaben und je besser die Fotos, desto präziser können wir den Aufwand einschätzen.",
      },
      {
        frage: "Wie läuft ein Einsatz ab?",
        antwort:
          "Sie rufen an, schreiben uns per WhatsApp oder senden die Anfrage über das Formular. Wir schätzen die Situation ein und nennen Ihnen den Festpreis. Danach vereinbaren wir den Termin, behandeln gezielt und dokumentieren, was wir gemacht haben.",
      },
      {
        frage: "Wie schnell können Sie vor Ort sein?",
        antwort:
          "Wir kommen in der Regel kurzfristig, oft noch am selben Tag. Wir sind Mo bis Fr von 08:00 bis 20:00 Uhr erreichbar, am Wochenende im Notdienst-Einsatz.",
      },
      {
        frage: "Wer zahlt: Mieter oder Vermieter?",
        antwort:
          "Das hängt vom Einzelfall ab, etwa vom Mietvertrag und von der Ursache des Befalls. Wir können dazu keine Rechtsberatung geben. Mit unserer schriftlichen Dokumentation haben Sie aber einen Nachweis für Vermieter, Hausverwaltung oder Behörden.",
      },
    ],
  },
  {
    titel: "Sicherheit und Gesundheit",
    eintraege: [
      {
        frage: "Ist die Behandlung für Kinder und Haustiere sicher?",
        antwort:
          "Wir wählen Mittel und Verfahren so, dass Kinder und Haustiere geschützt bleiben. Welche Maßnahmen im Einzelfall sinnvoll sind und worauf Sie währenddessen achten sollten, besprechen wir vorher mit Ihnen.",
      },
      {
        frage: "Muss ich während der Behandlung die Wohnung verlassen?",
        antwort:
          "Das hängt vom Schädling und vom Verfahren ab. Wir sagen Ihnen vor dem Einsatz genau, was für Sie gilt und ob und wie lange Räume nicht betreten werden sollten.",
      },
      {
        frage: "Muss ich etwas vorbereiten?",
        antwort:
          "Das richtet sich nach dem Einsatz. Wir geben Ihnen bei der Terminvereinbarung konkrete Hinweise, zum Beispiel zu Lebensmitteln, Haustieren oder zugänglichen Räumen.",
      },
    ],
  },
  {
    titel: "Befall erkennen und handeln",
    eintraege: [
      {
        frage: "Reichen Hausmittel oder Mittel aus dem Baumarkt?",
        antwort:
          "Bei einzelnen Tieren manchmal. Bei einem echten Befall erreichen sie meist nicht die Ursache, und es kommen neue Tiere nach. Bei Ratten, Wespennestern und Bettwanzen raten wir von Eigenversuchen ab.",
      },
      {
        frage: "Habe ich einen Befall, weil es bei mir unsauber ist?",
        antwort:
          "Nein. Schädlinge kommen in sauberen Haushalten genauso vor. Entscheidend sind Zugänge, Nahrung, Feuchtigkeit und Verstecke, nicht die Sauberkeit.",
      },
      {
        frage: "Muss ich die Hausverwaltung oder die Nachbarn informieren?",
        antwort:
          "Bei Mehrfamilienhäusern empfehlen wir es, besonders bei Bettwanzen, Mäusen, Ratten und Schaben, weil sich Schädlinge ausbreiten. Wir gehen dabei diskret vor und beraten Sie gern zum Vorgehen.",
      },
      {
        frage: "Ich weiß nicht, welcher Schädling das ist. Was soll ich tun?",
        antwort:
          "Machen Sie ein Foto und schicken Sie es uns per WhatsApp oder über das Formular. Wir sagen Ihnen, um welchen Schädling es sich handelt und wie es weitergeht.",
      },
    ],
  },
  {
    titel: "Für Gewerbe und Hausverwaltungen",
    eintraege: [
      {
        frage: "Bekomme ich eine Dokumentation für Audits und Behörden?",
        antwort:
          "Ja. Nachweise für Vermieter, Behörden und Audits erhalten Sie schriftlich. Für Lebensmittelbetriebe unterstützen wir bei HACCP-Konzept und Monitoring.",
      },
      {
        frage: "Was gehört zum HACCP-Monitoring?",
        antwort:
          "Köderstationen, Kontrollberichte, Lagepläne und die vollständige Dokumentation. Details finden Sie auf unserer HACCP-Seite.",
      },
    ],
  },
  {
    titel: "Einsatzgebiet und Erreichbarkeit",
    eintraege: [
      {
        frage: "In welchen Regionen sind Sie unterwegs?",
        antwort:
          "In München und Umgebung, im Landkreis München, in Oberbayern und Niederbayern. Auch in weiteren Regionen sind Einsätze auf Anfrage möglich. Wir prüfen kurzfristig die Verfügbarkeit.",
      },
      {
        frage: "Wie erreiche ich Sie?",
        antwort:
          "Per Telefon, WhatsApp, E-Mail oder über das Anfrageformular. Bei akutem Befall am besten direkt anrufen.",
      },
    ],
  },
];
