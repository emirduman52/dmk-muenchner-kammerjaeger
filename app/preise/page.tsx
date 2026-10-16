import type { Metadata } from "next";
import Link from "next/link";
import HeroIntro from "@/components/anim/HeroIntro";
import Reveal from "@/components/anim/Reveal";
import CtaBand from "@/components/CtaBand";
import { TELEFON, TELEFON_HREF, WHATSAPP_HREF } from "@/lib/content";

export const metadata: Metadata = {
  title: "Preise und Festpreis",
  description:
    "Was kostet Schädlingsbekämpfung in München? Bei uns erfahren Sie den Preis vor dem Termin — als Festpreis ohne versteckte Kosten. So entsteht der Preis.",
};

const faktoren = [
  { titel: "Art des Schädlings", text: "Eine Wespennest-Entfernung ist ein anderer Aufwand als eine Bettwanzenbehandlung oder ein Rattenbefall." },
  { titel: "Stärke des Befalls", text: "Ein beginnender Befall ist schneller erledigt als ein ausgewachsener. Je früher Sie sich melden, desto kleiner bleibt der Aufwand." },
  { titel: "Größe und Art des Objekts", text: "Anzahl der Räume, Fläche, Wohnung, Haus oder Betrieb — das bestimmt, wie viel behandelt werden muss." },
  { titel: "Zugänglichkeit", text: "Ein Nest in großer Höhe oder an schwer erreichbarer Stelle braucht mehr Aufwand als eines am Boden." },
  { titel: "Anzahl der Termine", text: "Manche Befälle erfordern eine Kontrolle oder eine zweite Behandlung. Das besprechen wir vorab, damit Sie den Gesamtaufwand kennen." },
  { titel: "Dokumentation und Betreuung", text: "Für Gewerbe, Hausverwaltungen und Lebensmittelbetriebe kommen Monitoring und Berichte dazu, je nach gewünschtem Umfang." },
];

const beispiele = [
  { titel: "Wespennest", text: "Lage und Höhe des Nests, Größe und Zugang, Art der Wespen." },
  { titel: "Bettwanzen", text: "Zahl der betroffenen Räume, Stärke des Befalls, Art der Behandlung und Kontrolltermine." },
  { titel: "Ratten und Mäuse", text: "Größe des Objekts, Zahl der Einstiege, Bedarf an Köderstationen und Kontrollen." },
  { titel: "Marder und Tauben", text: "Dachfläche und Fassade, Zahl der Einstiege oder Anflugstellen, gewähltes Abwehrsystem." },
  { titel: "Gewerbe und HACCP", text: "Größe des Betriebs, Zahl der Stationen, Kontrollintervalle und Umfang der Dokumentation." },
];

export default function Preise() {
  return (
    <>
      <section className="kopf">
        <HeroIntro className="wrap stack">
          <span className="kicker" data-hero="kicker">
            Preise
          </span>
          <h1>Sie wissen vorher, was es kostet.</h1>
          <p className="lead" style={{ maxWidth: "62ch" }} data-hero="lead">
            Bei uns gibt es keine Überraschung auf der Rechnung. Nach einer kurzen Einschätzung nennen wir
            Ihnen den Preis als Festpreis — bevor wir anfangen.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }} data-hero="cta">
            <a className="btn" href={TELEFON_HREF}>
              Festpreis erfragen: {TELEFON}
            </a>
            <a className="btn linie" href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
              Foto per WhatsApp senden
            </a>
          </div>
        </HeroIntro>
      </section>

      <section className="band">
        <div className="wrap">
          <Reveal selector="[data-reveal]" as="div">
            <div className="stack" style={{ gap: 12, marginBottom: 28 }} data-reveal>
              <span className="kicker">So kommen wir zum Festpreis</span>
              <h2>In drei Schritten zu Ihrem Preis.</h2>
            </div>
          </Reveal>
          <Reveal className="raster-3" selector=".karte" stagger={0.09} y={36}>
            <div className="karte grau">
              <span className="kicker">Schritt 1</span>
              <h4 style={{ marginTop: 6 }}>Sie melden sich</h4>
              <p style={{ fontSize: 14, lineHeight: "20px", marginTop: 8 }}>
                Per Anruf, WhatsApp oder Formular. Ein paar Angaben und Fotos helfen uns, die Lage genauer
                einzuschätzen.
              </p>
            </div>
            <div className="karte grau">
              <span className="kicker">Schritt 2</span>
              <h4 style={{ marginTop: 6 }}>Wir schätzen ein</h4>
              <p style={{ fontSize: 14, lineHeight: "20px", marginTop: 8 }}>
                Die Einschätzung ist kostenlos. Wir klären Schädling, Ausmaß und Aufwand — telefonisch oder bei
                Bedarf vor Ort.
              </p>
            </div>
            <div className="karte grau">
              <span className="kicker">Schritt 3</span>
              <h4 style={{ marginTop: 6 }}>Sie erhalten den Festpreis</h4>
              <p style={{ fontSize: 14, lineHeight: "20px", marginTop: 8 }}>
                Sie erfahren den Preis vor dem Termin. Erst wenn Sie einverstanden sind, legen wir los.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="band grau">
        <div className="wrap">
          <Reveal selector="[data-reveal]" as="div">
            <div className="stack" style={{ gap: 12, marginBottom: 28 }} data-reveal>
              <span className="kicker">Warum es keine Pauschalpreise gibt</span>
              <h2>Wovon der Preis abhängt.</h2>
              <p className="lead" style={{ maxWidth: "62ch" }}>
                Jeder Befall ist anders. Ein Preis, der für alle gilt, wäre entweder für Sie zu hoch oder für die
                Leistung zu niedrig. Diese Faktoren bestimmen den Aufwand:
              </p>
            </div>
          </Reveal>
          <Reveal className="raster-3" selector=".karte" stagger={0.07} y={36}>
            {faktoren.map((f) => (
              <div className="karte" key={f.titel}>
                <h4>{f.titel}</h4>
                <p style={{ fontSize: 14, lineHeight: "20px", marginTop: 8 }}>{f.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="band">
        <Reveal className="wrap raster-2" stagger={0.14}>
          <div className="stack" data-reveal>
            <span className="kicker">Beispiele</span>
            <h2>Was den Preis je nach Fall beeinflusst.</h2>
            <ul className="liste">
              {beispiele.map((b) => (
                <li key={b.titel}>
                  <b>✓</b>
                  <span>
                    <strong>{b.titel}:</strong> {b.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="karte grau" data-reveal>
            <h3 style={{ marginBottom: 14 }}>Das gilt immer</h3>
            <ul className="liste">
              <li>
                <b>✓</b>
                <span>Festpreis vor dem Termin — keine versteckten Kosten</span>
              </li>
              <li>
                <b>✓</b>
                <span>Kostenlose Einschätzung Ihrer Anfrage</span>
              </li>
              <li>
                <b>✓</b>
                <span>Schriftliche Dokumentation für Vermieter, Behörden und Audits</span>
              </li>
              <li>
                <b>✓</b>
                <span>Schonende Wirkstoffe, damit Kinder und Haustiere geschützt bleiben</span>
              </li>
            </ul>
            <p style={{ marginTop: 14 }}>
              Wer die Kosten trägt, Mieter oder Vermieter, hängt vom Einzelfall ab. Mit unserer Dokumentation
              haben Sie dafür einen Nachweis.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="band grau">
        <div className="wrap">
          <Reveal selector="[data-reveal]" as="div">
            <div className="stack" style={{ gap: 14 }} data-reveal>
              <h3>Mehr wissen?</h3>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <Link className="btn linie" href="/haeufige-fragen">
                  Häufige Fragen
                </Link>
                <Link className="btn linie" href="/dienstleistungen">
                  Alle Leistungen
                </Link>
                <Link className="btn linie" href="/haccp">
                  HACCP für Gewerbe
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        titel="Festpreis anfragen."
        text="Schildern Sie uns kurz Ihre Situation — wir nennen Ihnen den Preis, bevor wir anfangen."
        primaerLabel={TELEFON}
        sekundaerLabel="Anfrage senden"
        sekundaerHref="/kontakt"
      />
    </>
  );
}
