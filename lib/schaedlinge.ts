export type Schaedling = {
  slug: string;
  /** Überschrift der Seite, z. B. "Rattenbekämpfung" */
  name: string;
  /** Meta-Beschreibung für Suchmaschinen */
  beschreibung: string;
  intro: string;
  anzeichen: string[];
  gefahren: string[];
  /** Schritte "So gehen wir vor" — Schritt 1, 2 und 4 sind bei allen gleich aufgebaut, Schritt 3 ist schädlingsspezifisch */
  behandlung: { titel: string; text: string };
  tipps: string[];
  /** Optionaler Hinweis, z. B. zu Schutzstatus oder Recht */
  hinweis?: { titel: string; text: string };
  faq: { frage: string; antwort: string }[];
};

const KOSTEN = (was: string) => ({
  frage: `Was kostet die ${was}?`,
  antwort:
    "Das hängt von der Stärke des Befalls, der Größe und Zugänglichkeit des Objekts und dem nötigen Aufwand ab. Nach einer kurzen Einschätzung nennen wir Ihnen den Preis vorab als Festpreis — Sie wissen also vor dem Termin, was auf Sie zukommt.",
});

const SICHER = {
  frage: "Ist die Behandlung für Kinder und Haustiere sicher?",
  antwort:
    "Wir wählen Mittel und Verfahren so, dass Kinder und Haustiere geschützt bleiben. Welche Maßnahmen im Einzelfall sinnvoll sind und worauf Sie während und nach dem Einsatz achten sollten, besprechen wir vorher mit Ihnen.",
};

const SCHNELL = {
  frage: "Wie schnell können Sie vor Ort sein?",
  antwort:
    "Wir kommen in der Regel kurzfristig, oft noch am selben Tag. Rufen Sie uns an oder schreiben Sie uns über WhatsApp — Mo bis Fr von 08:00 bis 20:00 Uhr, am Wochenende im Notdienst-Einsatz.",
};

export const schaedlinge: Schaedling[] = [
  {
    slug: "rattenbekaempfung",
    name: "Rattenbekämpfung",
    beschreibung:
      "Rattenbekämpfung in München und Umgebung: Befall erkennen, Zugänge schließen, gezielt bekämpfen — mit Festpreis vor dem Termin und Dokumentation.",
    intro:
      "Ratten sind klug, scheu und anpassungsfähig. Wer sie sieht, hat meist schon länger ein Problem: Die Tiere leben versteckt, vermehren sich mehrmals im Jahr und finden in Kellern, Schächten, Garagen und Gärten ideale Bedingungen. Je früher der Befall bekämpft wird, desto kleiner bleibt der Aufwand.",
    anzeichen: [
      "Kot, der deutlich größer ist als Mäusekot, oft an Laufwegen oder Futterstellen",
      "Nage- und Fraßspuren an Verpackungen, Kabeln, Rohren oder Dämmung",
      "Schmierspuren (Fett und Schmutz) entlang von Wänden und Rohren",
      "Kratz- und Laufgeräusche in Wänden, Decken oder Schächten, vor allem nachts",
      "Gänge und Löcher im Garten, am Fundament oder im Kompost",
    ],
    gefahren: [
      "Ratten können Krankheitserreger über Kot, Urin und Speichel verbreiten und Lebensmittel verunreinigen.",
      "Sie nagen Leitungen, Dämmmaterial und Rohre an — das kann zu teuren Schäden und Kurzschlüssen führen.",
      "Ein kleiner Befall wächst schnell, weil sich Ratten mehrmals im Jahr fortpflanzen.",
    ],
    behandlung: {
      titel: "Gezielte Bekämpfung",
      text: "Wir finden Laufwege und Einstiege, setzen Köder und Fallen so ein, dass Kinder und Haustiere nicht an sie kommen, und verschließen die Zugänge, damit der Befall nicht zurückkehrt.",
    },
    tipps: [
      "Lebensmittelreste, Bioabfall und Tierfutter nicht offen lagern oder draußen stehen lassen",
      "Mülltonnen schließen, Kompost möglichst geschlossen führen und nichts Gekochtes hineingeben",
      "Löcher, Spalten und defekte Rohre am Haus und im Keller melden oder abdichten lassen",
      "Kein Rattengift auf eigene Faust auslegen: Es gefährdet Kinder, Haustiere und Wildtiere",
    ],
    faq: [
      KOSTEN("Rattenbekämpfung"),
      {
        frage: "Warum reicht es nicht, Gift auszulegen?",
        antwort:
          "Ohne Kenntnis der Laufwege und ohne Verschluss der Zugänge kommen die Tiere zurück. Frei ausgelegtes Gift ist zudem gefährlich für Kinder, Haustiere und andere Tiere. Fachgerecht werden Köder in gesicherten Stationen platziert und kontrolliert.",
      },
      {
        frage: "Wie erkenne ich, ob es Ratten oder Mäuse sind?",
        antwort:
          "Ratten hinterlassen größeren Kot und größere Nagespuren, Mäuse eher kleine, reiskorngroße Kotspuren. Sicher unterscheiden wir das bei einer Einschätzung vor Ort.",
      },
      SICHER,
      SCHNELL,
    ],
  },
  {
    slug: "maeusebekaempfung",
    name: "Mäusebekämpfung",
    beschreibung:
      "Mäusebekämpfung in München und Umgebung: Nester und Laufwege finden, Mäuse bekämpfen und das Gebäude absichern — Festpreis vor dem Termin.",
    intro:
      "Mäuse schlüpfen durch sehr kleine Öffnungen und suchen im Herbst und Winter Wärme und Nahrung in Wohnungen, Küchen, Kellern und Betrieben. Weil sie sich schnell vermehren, wird aus ein, zwei Tieren rasch ein Befall. Wichtig ist nicht nur das Fangen, sondern das Finden der Einstiege.",
    anzeichen: [
      "Reiskorngroße, dunkle Kotkrümel in Schubladen, Schränken oder hinter Geräten",
      "Angenagte Verpackungen, Lebensmittel oder Kabel",
      "Nester aus Papier, Stoff oder Dämmmaterial an geschützten Stellen",
      "Trippeln, Kratzen oder Rascheln in Wänden und Decken, besonders nachts",
      "Ein muffiger, urinartiger Geruch in Vorratsräumen oder Schränken",
    ],
    gefahren: [
      "Mäuse verunreinigen Lebensmittel mit Kot und Urin und können Krankheitserreger übertragen.",
      "Sie nagen Kabel und Dämmung an — mit Risiko für Schäden und Kurzschlüsse.",
      "Ein einzelnes Pärchen kann innerhalb weniger Monate zu einer ganzen Kolonie werden.",
    ],
    behandlung: {
      titel: "Gezielte Bekämpfung",
      text: "Wir suchen Nester und Laufwege, setzen Fallen und Köder sicher ein und verschließen die Einstiege, damit keine neuen Tiere nachkommen.",
    },
    tipps: [
      "Lebensmittel in dicht schließenden Behältern aufbewahren, auch Tierfutter",
      "Krümel und Essensreste regelmäßig entfernen, besonders unter Geräten",
      "Spalten an Türen, Rohrdurchführungen und Kellerfenstern abdichten",
      "Gelagerte Kartons und Papier im Keller oder auf dem Dachboden nicht dicht an Wänden stapeln",
    ],
    faq: [
      KOSTEN("Mäusebekämpfung"),
      {
        frage: "Wie kommen Mäuse ins Haus?",
        antwort:
          "Schon sehr kleine Spalten reichen: an Türen, Rohrdurchführungen, Lüftungsöffnungen oder Fugen im Keller. Deshalb gehört das Verschließen der Einstiege zur Bekämpfung dazu.",
      },
      {
        frage: "Reichen Fallen aus dem Baumarkt?",
        antwort:
          "Bei einzelnen Tieren manchmal. Bei einem Befall mit Nest finden sie das Problem nicht an der Wurzel — es kommen schnell neue Tiere nach. Wir klären Ursache und Einstiege und behandeln gezielt.",
      },
      SICHER,
      SCHNELL,
    ],
  },
  {
    slug: "bettwanzenbekaempfung",
    name: "Bettwanzenbekämpfung",
    beschreibung:
      "Bettwanzenbekämpfung in München und Umgebung: diskret, gründlich, mit Festpreis vor dem Termin und schriftlicher Dokumentation.",
    intro:
      "Bettwanzen sind kein Zeichen mangelnder Sauberkeit. Sie reisen unbemerkt mit Gepäck, gebrauchten Möbeln oder Kleidung mit und verstecken sich tagsüber in Matratzennähten, Bettrahmen und Ritzen. Sie sind nachtaktiv und werden oft erst spät bemerkt. Mit einer diskreten, gründlichen Behandlung bekommt man sie in den Griff — Aussitzen funktioniert nicht.",
    anzeichen: [
      "Juckende Stiche, oft in Reihen, die morgens nach dem Aufwachen auftreten",
      "Kleine Blutflecken auf Bettwäsche oder Matratze",
      "Schwarze, punktförmige Kotspuren an Matratzennähten, Bettrahmen oder Wänden",
      "Häutungsreste und hellbraune, flache Tiere von wenigen Millimetern Größe",
      "Bei starkem Befall ein süßlich-muffiger Geruch im Schlafzimmer",
    ],
    gefahren: [
      "Stiche verursachen starken Juckreiz und Hautreaktionen, die sich entzünden können.",
      "Schlafmangel und die psychische Belastung durch den Befall werden häufig unterschätzt.",
      "Bettwanzen wandern: Unbehandelt breiten sie sich in weitere Zimmer und Nachbarwohnungen aus.",
    ],
    behandlung: {
      titel: "Diskrete, gründliche Behandlung",
      text: "Wir lokalisieren die Verstecke, behandeln gezielt und besprechen mit Ihnen, ob ein Kontrolltermin sinnvoll ist. Das Vorgehen richtet sich nach Befallsstärke und Wohnsituation und erfolgt diskret.",
    },
    tipps: [
      "Nicht panisch Möbel entsorgen oder verteilen: Das verschleppt die Tiere in weitere Räume",
      "Bettwäsche, Kleidung und Textilien bei mindestens 60 °C waschen",
      "Betten und Ritzen gründlich absaugen und den Staubsaugerbeutel luftdicht entsorgen",
      "Nach Reisen Gepäck im Flur kontrollieren und nicht gleich ins Schlafzimmer stellen",
      "Bei Mietwohnungen die Hausverwaltung zeitnah informieren, damit auch Nachbarwohnungen geprüft werden",
    ],
    faq: [
      KOSTEN("Bettwanzenbekämpfung"),
      {
        frage: "Habe ich Bettwanzen, weil ich unsauber bin?",
        antwort:
          "Nein. Bettwanzen kommen in Hotels, Wohnungen und Villen vor und werden meist durch Gepäck oder gebrauchte Möbel eingeschleppt. Mit Sauberkeit hat das nichts zu tun.",
      },
      {
        frage: "Reicht es, die Wäsche zu waschen?",
        antwort:
          "Waschen bei hohen Temperaturen hilft bei Textilien. Die Tiere und Eier sitzen aber auch in Matratzen, Rahmen und Ritzen. Deshalb braucht es meist eine fachgerechte Behandlung der Räume.",
      },
      {
        frage: "Wird die Behandlung diskret durchgeführt?",
        antwort:
          "Ja. Wir kommen unauffällig und sprechen bei Mehrfamilienhäusern sensibel mit allen Beteiligten, damit niemand bloßgestellt wird.",
      },
      SICHER,
      SCHNELL,
    ],
  },
  {
    slug: "wespenbekaempfung",
    name: "Wespenbekämpfung und Wespennest-Entfernung",
    beschreibung:
      "Wespennest entfernen in München und Umgebung: sicher, kurzfristig, oft noch am selben Tag — mit Festpreis vor dem Termin.",
    intro:
      "Ein Wespennest am Balkon, im Rollladenkasten, im Dachstuhl oder im Erdreich ist unangenehm und kann gefährlich werden, vor allem für Kinder und Allergiker. Entfernen Sie ein Nest nicht selbst: Aufgeschreckte Wespen greifen an. Wir prüfen vor Ort, ob und wie das Nest entfernt werden muss, und gehen sicher vor.",
    anzeichen: [
      "Viele Wespen, die immer dieselbe Stelle anfliegen, zum Beispiel ein Loch oder einen Spalt",
      "Ein kugel- oder tropfenförmiges, papierartiges Nest an Dach, Balkon, Rollladenkasten oder Dachboden",
      "Kleine Einflugöffnungen in der Erde, Mauerwerk oder im Gartenhaus",
      "Ein leises, anhaltendes Summen oder Nagegeräusch in der Wand",
    ],
    gefahren: [
      "Stiche sind schmerzhaft und können bei Allergikern lebensbedrohlich sein. Bei Atemnot, Schwellungen im Gesicht oder Kreislaufproblemen sofort den Notruf 112 wählen.",
      "Wird ein Nest gestört, verteidigen die Tiere es aggressiv.",
      "Das Nest wächst im Sommer stark an, im Spätsommer sind Wespen besonders lästig.",
    ],
    behandlung: {
      titel: "Sichere Entfernung",
      text: "Wir prüfen die Art und die Lage des Nests, schützen Ihren Bereich und entfernen oder behandeln das Nest so, dass niemand in Gefahr gerät. Auch schwer zugängliche Stellen wie Rollladenkästen oder Dachüberstände sind für uns Alltag.",
    },
    hinweis: {
      titel: "Hornissen sind besonders geschützt",
      text: "Hornissen stehen unter besonderem Schutz. Ein Hornissennest darf nur mit Genehmigung der zuständigen Naturschutzbehörde entfernt oder umgesiedelt werden. Wir schauen vor Ort genau hin, um welche Tiere es sich handelt, und beraten Sie zum richtigen Vorgehen.",
    },
    tipps: [
      "Abstand zum Nest halten, nicht anpusten und keine Erschütterungen erzeugen",
      "Kinder und Haustiere aus der Nähe des Nests fernhalten",
      "Nicht selbst mit Schaum oder Spray an ein Nest in Wand oder Rollladenkasten gehen",
      "Süße Getränke und Essen im Freien abdecken, Fliegengitter an Fenstern anbringen",
      "Ein Nest in Ruhe lassen, wenn es abseits liegt und niemanden stört — es wird im Herbst von selbst aufgegeben",
    ],
    faq: [
      KOSTEN("Wespennest-Entfernung"),
      {
        frage: "Muss jedes Wespennest entfernt werden?",
        antwort:
          "Nein. Liegt ein Nest abseits und stört niemanden, kann es bleiben. Es wird im Herbst aufgegeben und nicht wieder bezogen. Wir prüfen vor Ort, ob eine Entfernung nötig ist, und beraten Sie ehrlich.",
      },
      {
        frage: "Wie schnell bekomme ich einen Termin für ein Wespennest?",
        antwort:
          "Wir vergeben kurzfristig Termine, meist noch am selben Tag. Rufen Sie uns an oder schreiben Sie uns über WhatsApp.",
      },
      {
        frage: "Was tun bei einem Wespenstich und Allergie?",
        antwort:
          "Bei Atemnot, Schwellung im Gesicht oder Hals, Schwindel oder Kreislaufproblemen sofort den Notruf 112 wählen. Wir sind Schädlingsbekämpfer und keine Ärzte — im Zweifel immer den Notruf wählen.",
      },
      SICHER,
    ],
  },
  {
    slug: "ameisenbekaempfung",
    name: "Ameisenbekämpfung",
    beschreibung:
      "Ameisenbekämpfung in München und Umgebung: Nest und Ameisenstraßen finden, gezielt bekämpfen — mit Festpreis vor dem Termin.",
    intro:
      "Ameisen im Haus oder auf der Terrasse sind meist nur die Spitze des Eisbergs: Die sichtbaren Tiere sind Arbeiterinnen, das Nest mit der Königin liegt versteckt. Wer nur die Tiere bekämpft, die er sieht, hat nach kurzer Zeit wieder Besuch. Entscheidend ist, die Kolonie zu erreichen.",
    anzeichen: [
      "Ameisenstraßen von draußen zu Küche, Vorrat oder Haustierfutter",
      "Kleine Sandhäufchen in Pflasterfugen, an Terrassen oder am Fundament",
      "Flugameisen im Sommer, die in großer Zahl ausschwärmen",
      "Feines Holzmehl an Balken oder Holzbauteilen (kann auf holzzerstörende Ameisen hinweisen)",
    ],
    gefahren: [
      "Meist sind Ameisen eine Belästigung, die Lebensmittel verunreinigen kann.",
      "Bestimmte Arten, etwa die Pharaoameise, können in Gebäuden schwer zu bekämpfen sein und Keime verschleppen.",
      "Holzzerstörende Ameisen können Bausubstanz schwächen.",
    ],
    behandlung: {
      titel: "Straßen und Nest behandeln",
      text: "Wir bestimmen die Art, folgen den Ameisenstraßen und behandeln so, dass die Kolonie erreicht wird. Anschließend schließen wir Zugänge und beraten, wie Sie Wiederbefall vermeiden.",
    },
    tipps: [
      "Lebensmittel, Süßes und Tierfutter verschlossen aufbewahren, Krümel schnell entfernen",
      "Spuren von Zucker, Honig und Fett auf Arbeitsflächen wegwischen",
      "Spalten an Türen, Fenstern und Fugen abdichten, damit Ameisen nicht ins Haus kommen",
      "Ameisenstraßen nicht mit Haushaltsmitteln besprühen — das vertreibt die Tiere oft nur und verteilt die Kolonie",
    ],
    faq: [
      KOSTEN("Ameisenbekämpfung"),
      {
        frage: "Warum kommen die Ameisen immer wieder?",
        antwort:
          "Weil das Nest nicht erreicht wurde. Behandelt man nur die sichtbaren Tiere, kommen aus der Kolonie neue nach. Deshalb gehen wir der Ameisenstraße nach und behandeln das Nest mit.",
      },
      {
        frage: "Sind Ameisen gefährlich?",
        antwort:
          "Meistens nicht, sie sind in erster Linie lästig. In Küchen, Praxen und Lebensmittelbetrieben ist ein Befall aber ein Hygieneproblem, und manche Arten sind schwer zu bekämpfen.",
      },
      SICHER,
      SCHNELL,
    ],
  },
  {
    slug: "fliegenbekaempfung",
    name: "Fliegenbekämpfung",
    beschreibung:
      "Fliegenbekämpfung in München und Umgebung: Brutstätten finden, Ursache beseitigen, Wiederbefall verhindern — für Privat und Gewerbe.",
    intro:
      "Wer viele Fliegen hat, hat meist irgendwo eine Brutstätte: Biomüll, Abflüsse, Tierkot oder Fäulnis. Ein Spray vertreibt die sichtbaren Fliegen, löst aber das Problem nicht. Wir suchen die Ursache, entfernen sie und sorgen dafür, dass der Befall nicht wiederkommt.",
    anzeichen: [
      "Auffallend viele Fliegen in Küche, Keller, Gastronomie oder Lager",
      "Kleine Fruchtfliegen an Obst, Gemüse oder Abflüssen",
      "Kleine Mückchen oder Fliegen, die immer wieder aus dem Abfluss kommen",
      "Plötzlich viele große Fliegen: Das kann auf eine verborgene Quelle wie ein verendetes Tier hinweisen",
    ],
    gefahren: [
      "Fliegen übertragen Keime auf Lebensmittel und Oberflächen.",
      "In Gastronomie und Lebensmittelbetrieben ist Fliegenbefall ein Hygienemangel, der bei Kontrollen auffällt.",
      "Eine unentdeckte Brutstätte sorgt dafür, dass immer neue Fliegen nachkommen.",
    ],
    behandlung: {
      titel: "Ursache finden und beseitigen",
      text: "Wir suchen die Brutstätten, beseitigen sie und bekämpfen die Fliegen ergänzend gezielt. Dazu beraten wir Sie zu Vorsorge wie Müllmanagement und Fliegenschutz.",
    },
    tipps: [
      "Bioabfall täglich entsorgen, Mülleimer sauber halten und schließen",
      "Obst und Gemüse abdecken oder im Kühlschrank lagern",
      "Abflüsse regelmäßig reinigen",
      "Fliegengitter an Fenstern und Türen anbringen",
    ],
    faq: [
      KOSTEN("Fliegenbekämpfung"),
      {
        frage: "Warum helfen Fliegenspray und Klebefallen nicht dauerhaft?",
        antwort:
          "Sie erwischen nur die Fliegen, die gerade fliegen. Solange die Brutstätte besteht, schlüpfen neue nach. Wir beseitigen deshalb die Ursache.",
      },
      {
        frage: "Ist das auch für Gastronomie und Betriebe geeignet?",
        antwort:
          "Ja. Für Lebensmittelbetriebe dokumentieren wir die Maßnahmen schriftlich, zum Beispiel für Audits und Behörden. Mehr dazu auf unserer HACCP-Seite.",
      },
      SICHER,
      SCHNELL,
    ],
  },
  {
    slug: "mardervergraemung",
    name: "Mardervergrämung",
    beschreibung:
      "Marder im Dachboden oder am Auto? Mardervergrämung in München und Umgebung: Einstiege finden, vergrämen und dauerhaft verschließen.",
    intro:
      "Marder suchen warme, ruhige Verstecke und finden sie oft im Dachboden, in Dämmung oder im Motorraum von Autos. Sie poltern nachts, verschmutzen mit Kot und zerstören Dämmmaterial. Töten oder Fangen auf eigene Faust ist keine Lösung: Marder unterliegen dem Jagdrecht. Wir vergrämen sie und verschließen die Einstiege.",
    anzeichen: [
      "Poltern, Rennen oder Fauchen im Dachboden, meist nachts",
      "Kot (Losung) an festen Plätzen, oft länglich und gedreht",
      "Zerwühlte oder zerrissene Dämmung",
      "Beutereste wie Federn, Knochen oder Eierschalen",
      "Beschädigte Kabel und Schläuche im Motorraum des Autos",
    ],
    gefahren: [
      "Kot und Urin verschmutzen Dämmung und führen zu Geruchsbelästigung.",
      "Zerstörte Dämmung verschlechtert die Wärmedämmung und verursacht Kosten.",
      "Am Auto können angebissene Kabel und Schläuche zu Ausfällen und teuren Reparaturen führen.",
      "Im Frühjahr und Sommer können Jungtiere im Versteck sein.",
    ],
    behandlung: {
      titel: "Vergrämen und verschließen",
      text: "Wir finden die Einstiege und Verstecke, vergrämen die Tiere und verschließen die Öffnungen dauerhaft. Dabei achten wir darauf, dass keine Tiere oder Jungtiere eingeschlossen werden.",
    },
    hinweis: {
      titel: "Marder dürfen nicht einfach gefangen werden",
      text: "Marder unterliegen dem Jagdrecht. Selbst fangen, einsperren oder töten ist nicht erlaubt. Vergrämung ist der rechtssichere und tierschutzgerechte Weg. Wir beraten Sie dazu vor dem Einsatz.",
    },
    tipps: [
      "Einstiegsstellen am Dach und an der Fassade kontrollieren: Marder passen durch kleine Öffnungen",
      "Äste an Bäumen zurückschneiden, die zum Dach führen",
      "Kein Tierfutter und keine Essensreste im Freien liegen lassen",
      "Beim Auto: Motorraum von einer Fachwerkstatt prüfen und bei Bedarf schützen lassen",
    ],
    faq: [
      KOSTEN("Mardervergrämung"),
      {
        frage: "Warum kann ich den Marder nicht einfach fangen lassen?",
        antwort:
          "Marder unterliegen dem Jagdrecht und dürfen nicht einfach gefangen oder getötet werden. Außerdem zieht oft ein neuer Marder ein, wenn die Einstiege offen bleiben. Deshalb vergrämen und verschließen wir.",
      },
      {
        frage: "Wann ist der beste Zeitpunkt?",
        antwort:
          "So früh wie möglich. Im Frühjahr und Sommer können Jungtiere im Versteck sein; das beachten wir bei der Planung, damit keine Tiere eingeschlossen werden.",
      },
      SICHER,
      SCHNELL,
    ],
  },
  {
    slug: "taubenvergraemung",
    name: "Taubenvergrämung",
    beschreibung:
      "Taubenabwehr in München und Umgebung: tierschutzgerechte Vergrämungssysteme gegen Kot, Verschmutzung und Bauschäden.",
    intro:
      "Tauben auf Balkon, Fensterbrett, Fassade oder Dach verschmutzen mit Kot, verstopfen Regenrinnen und greifen auf Dauer die Bausubstanz an. Zusätzlich können sich Parasiten ausbreiten. Mit tierschutzgerechten Abwehrsystemen halten wir die Tiere fern, ohne ihnen zu schaden.",
    anzeichen: [
      "Taubenkot auf Balkonen, Fensterbänken, Fassaden und Sonnenschutz",
      "Nester auf Vorsprüngen, in Nischen oder unter Dächern",
      "Gurren und Flattern an Dach und Balkon",
      "Federn und verstopfte Regenrinnen",
    ],
    gefahren: [
      "Taubenkot ist aggressiv und kann Fassaden, Metall und Dachflächen angreifen.",
      "In Kot und Nestern können sich Parasiten und Krankheitserreger finden. Beim Entfernen deshalb Schutzmaske und Handschuhe tragen.",
      "Verstopfte Dachrinnen und Abflüsse können zu Folgeschäden führen.",
    ],
    behandlung: {
      titel: "Tierschutzgerechte Abwehr",
      text: "Wir prüfen Gebäude und Anflugstellen und wählen passende Abwehrsysteme, die Tauben fernhalten, ohne sie zu verletzen. Danach beraten wir zu Reinigung und Vorsorge.",
    },
    hinweis: {
      titel: "Tierschutz beachten",
      text: "Tauben stehen unter dem Schutz des Tierschutzgesetzes. Wir setzen ausschließlich Maßnahmen ein, die Tiere fernhalten, aber nicht verletzen, und beraten Sie zum rechtlich zulässigen Vorgehen.",
    },
    tipps: [
      "Tauben nicht füttern — Futterstellen ziehen immer mehr Tiere an",
      "Kot nur mit Schutzmaske und Handschuhen und möglichst feucht entfernen, damit kein Staub aufgewirbelt wird",
      "Balkone und Nischen frei von Futterresten und Nistmaterial halten",
      "Nicht selbst Nester oder Gelege entfernen, ohne sich vorher zu informieren",
    ],
    faq: [
      KOSTEN("Taubenvergrämung"),
      {
        frage: "Was kann man gegen Tauben am Balkon tun?",
        antwort:
          "Je nach Situation helfen Abwehrsysteme wie Spikes, Netze oder Spanndrähte. Welches System sinnvoll ist, hängt von Gebäude und Anflugstellen ab. Wir beraten vor Ort.",
      },
      {
        frage: "Sind die Maßnahmen tierschutzgerecht?",
        antwort:
          "Ja. Wir setzen auf Systeme, die Tauben fernhalten, ohne sie zu verletzen.",
      },
      SICHER,
      SCHNELL,
    ],
  },
  {
    slug: "ungezieferbekaempfung",
    name: "Ungezieferbekämpfung",
    beschreibung:
      "Ungezieferbekämpfung in München und Umgebung: Motten, Vorratsschädlinge und anderes Ungeziefer zuverlässig bestimmen und entfernen.",
    intro:
      "Motten in der Küche oder im Kleiderschrank, Schädlinge im Vorrat oder Tiere, die Sie nicht kennen: Ungeziefer ist unangenehm und oft hartnäckig. Wichtig ist, die Art zu bestimmen und die Quelle zu finden. Für Silberfische und Käfer haben wir eigene Seiten, hier geht es um alles andere.",
    anzeichen: [
      "Feine Gespinste, Klümpchen oder Larven in Mehl, Nüssen, Müsli oder Tierfutter (Lebensmittelmotten)",
      "Kleine Löcher in Wolle, Pelz und Textilien (Kleidermotten)",
      "Kleine Motten, die abends um Licht oder in der Küche fliegen",
      "Winzige Tiere oder Spuren in Vorräten und Schränken, die Sie nicht zuordnen können",
    ],
    gefahren: [
      "Befallene Lebensmittel sind verdorben und müssen entsorgt werden.",
      "Motten können Textilien, Teppiche und Vorräte beschädigen.",
      "Ein unbemerkter Befall breitet sich in weitere Schränke und Räume aus.",
    ],
    behandlung: {
      titel: "Art bestimmen und gezielt behandeln",
      text: "Wir bestimmen den Schädling, suchen die Quelle und behandeln gezielt. Anschließend beraten wir zu Lagerung und Vorsorge, damit der Befall nicht zurückkehrt.",
    },
    tipps: [
      "Befallene Lebensmittel sofort luftdicht verpacken und entsorgen",
      "Schränke ausräumen und gründlich aussaugen, auch Ritzen und Ecken",
      "Vorräte in dicht schließenden Behältern lagern",
      "Textilien bei mindestens 60 °C waschen, wenn möglich",
    ],
    faq: [
      KOSTEN("Ungezieferbekämpfung"),
      {
        frage: "Woher kommen Lebensmittelmotten?",
        antwort:
          "Meist werden sie mit gekauften Lebensmitteln wie Mehl, Nüssen oder Gewürzen eingeschleppt. Oft sind Eier oder Larven schon in der Packung.",
      },
      {
        frage: "Ich weiß nicht, welches Tier das ist. Was tun?",
        antwort:
          "Machen Sie ein Foto und schicken Sie es uns per WhatsApp. Wir sagen Ihnen, um welchen Schädling es sich handelt und wie es weitergeht.",
      },
      SICHER,
      SCHNELL,
    ],
  },
  {
    slug: "silberfischbekaempfung",
    name: "Silberfischbekämpfung",
    beschreibung:
      "Silberfische im Bad, in Küche oder Keller? Silberfischbekämpfung in München und Umgebung: gezielt bekämpfen und die Ursache beseitigen.",
    intro:
      "Silberfische (genauer: Silberfischchen) sind flinke, silbrig glänzende Insekten von etwa einem Zentimeter Länge. Sie sind nachtaktiv, mögen es warm und feucht und verstecken sich in Ritzen, hinter Fliesen und Fußleisten. Für Menschen sind sie meist harmlos, aber ein Warnsignal: Wo sie sich wohlfühlen, ist es oft zu feucht.",
    anzeichen: [
      "Silbrige, schlängelnd laufende Insekten, die nachts oder beim Licht anmachen davonhuschen",
      "Vorkommen vor allem in Bad, Küche, Keller und Waschküche",
      "Kleine gelbliche Kotkrümel und Häutungsreste in Verstecken",
      "Kleine Fraßspuren an Papier, Tapetenkleister, Kartons, Büchern oder Textilien",
    ],
    gefahren: [
      "Silberfischchen übertragen nach heutigem Kenntnisstand keine Krankheiten, sind aber unangenehm.",
      "Sie ernähren sich von Stärke und Zucker — und beschädigen so Papier, Tapeten, Bücher und Kartons.",
      "Ihr Auftreten zeigt oft zu hohe Luftfeuchtigkeit an, die auch Schimmel begünstigt.",
      "Ein einzelnes Tier ist selten allein: Sie vermehren sich in geschützten Verstecken.",
    ],
    behandlung: {
      titel: "Verstecke finden und gezielt behandeln",
      text: "Wir suchen die Verstecke hinter Fliesen, Leisten und in Fugen, behandeln gezielt und klären mit Ihnen, woher die Feuchtigkeit kommt. So bleibt das Ergebnis dauerhaft.",
    },
    tipps: [
      "Bad nach dem Duschen stoßlüften und Feuchtigkeit abwischen",
      "Mit einem Hygrometer messen: Eine Luftfeuchtigkeit von etwa 50 bis 60 % ist ideal",
      "Papier, Kartons und Altpapier im Keller nicht feucht oder dicht an Wänden lagern",
      "Ritzen, Fugen und Spalten abdichten und auf undichte Rohre oder Wasserschäden achten",
      "Bei Mietwohnungen mit Bauschäden die Hausverwaltung informieren",
    ],
    faq: [
      KOSTEN("Silberfischbekämpfung"),
      {
        frage: "Sind Silberfische gefährlich?",
        antwort:
          "Für Menschen sind sie meist harmlos. Sie können aber Papier, Tapeten und Textilien beschädigen und sind ein Zeichen für zu hohe Feuchtigkeit, die auch Schimmel fördern kann.",
      },
      {
        frage: "Warum habe ich immer wieder Silberfische?",
        antwort:
          "Solange es feucht bleibt und die Verstecke bestehen, kommen sie zurück. Deshalb gehört neben der Behandlung auch die Ursachenklärung zu unserem Vorgehen.",
      },
      {
        frage: "Habe ich Silberfische, weil es bei mir unsauber ist?",
        antwort:
          "Nein. Silberfischchen kommen in sauberen Haushalten genauso vor. Entscheidend sind Feuchtigkeit, Wärme und Verstecke, nicht die Sauberkeit.",
      },
      SICHER,
      SCHNELL,
    ],
  },
  {
    slug: "kaeferbekaempfung",
    name: "Käferbekämpfung",
    beschreibung:
      "Käfer in Vorräten, Textilien oder Holz? Käferbekämpfung in München und Umgebung: Art bestimmen, Quelle finden, gezielt bekämpfen.",
    intro:
      "Käfer im Haus sind nicht gleich Käfer im Haus: Mehlkäfer im Vorrat, Teppichkäfer in Textilien und Nagekäfer (\"Holzwurm\") im Holz sind völlig verschiedene Probleme. Entscheidend ist, die Art zu bestimmen — davon hängt ab, was zu tun ist. Wir finden heraus, womit Sie es zu tun haben, und bekämpfen gezielt.",
    anzeichen: [
      "Kleine Käfer, Larven oder Gespinste in Mehl, Getreide, Nüssen, Müsli oder Tierfutter (Vorratsschädlinge)",
      "Kleine Löcher, abgefressene Stellen oder haarige Larven an Wolle, Pelz, Federn und Teppichen (Teppich- und Pelzkäfer)",
      "Winzige Fluglöcher und feines Bohrmehl an Holzbalken, Möbeln oder Dielen (Nagekäfer)",
      "Käfer, die immer wieder am gleichen Ort auftauchen, zum Beispiel am Fenster oder im Schrank",
    ],
    gefahren: [
      "Befallene Lebensmittel sind verdorben und müssen entsorgt werden.",
      "Textilien, Teppiche und Polster können dauerhaft beschädigt werden.",
      "Haare der Larven von Teppichkäfern können bei empfindlichen Personen Hautreizungen auslösen.",
      "Holzschädlinge können bei starkem Befall tragende Bauteile schwächen.",
    ],
    behandlung: {
      titel: "Art bestimmen und gezielt behandeln",
      text: "Wir bestimmen die Käferart, suchen die Quelle und behandeln gezielt: im Vorrat durch Entfernen der befallenen Ware und Behandlung der Verstecke, bei Textilien und Möbeln passend zum Material. Bei Holzbefall beurteilen wir, ob der Befall noch aktiv ist.",
    },
    hinweis: {
      titel: "Nicht jeder Käfer ist ein Schädling",
      text: "Viele Käfer im Haus, etwa Marienkäfer im Herbst, sind harmlos und richten keinen Schaden an. Wenn Sie unsicher sind, schicken Sie uns ein Foto. Bei Verdacht auf Holzbefall in tragenden Bauteilen empfehlen wir eine fachliche Beurteilung, bevor Sie selbst handeln.",
    },
    tipps: [
      "Verdächtige Vorräte sofort luftdicht verpacken, entsorgen und Schrank gründlich aussaugen",
      "Mehl, Getreide, Nüsse und Tierfutter in dicht schließenden Behältern lagern",
      "Teppiche, Polster und Ecken regelmäßig aussaugen, Wolltextilien bei mindestens 60 °C waschen, wenn möglich",
      "Bei Holzbefall Bohrmehl und Fluglöcher fotografieren und uns schicken",
      "Neue Möbel, Holz und Vorräte vor dem Einlagern kurz kontrollieren",
    ],
    faq: [
      KOSTEN("Käferbekämpfung"),
      {
        frage: "Woher kommen Käfer im Mehl?",
        antwort:
          "Meist sind sie mit gekauften Vorräten eingeschleppt worden — Eier oder Larven stecken oft schon in der Packung. Mit mangelnder Sauberkeit hat das nichts zu tun.",
      },
      {
        frage: "Ist der Holzwurm gefährlich?",
        antwort:
          "Das hängt vom Befall ab: Alter, abgestorbener Befall ist meist unkritisch, aktiver Befall in tragenden Teilen kann die Stabilität gefährden. Wir beurteilen vor Ort, ob der Befall noch aktiv ist und was zu tun ist.",
      },
      {
        frage: "Wie erkenne ich, welcher Käfer es ist?",
        antwort:
          "Schicken Sie uns ein Foto, am besten per WhatsApp. Wir sagen Ihnen, um welche Art es sich handelt und ob Handlungsbedarf besteht.",
      },
      SICHER,
      SCHNELL,
    ],
  },
];

export function findSchaedling(slug: string): Schaedling | undefined {
  return schaedlinge.find((s) => s.slug === slug);
}
