import type { Metadata } from "next";
import Link from "next/link";
import HeroIntro from "@/components/anim/HeroIntro";
import Reveal from "@/components/anim/Reveal";
import CtaBand from "@/components/CtaBand";
import { TELEFON, TELEFON_HREF } from "@/lib/content";
import { branchen } from "@/lib/branchen";

export const metadata: Metadata = {
  title: "Branchenlösungen",
  description:
    "Schädlingsbekämpfung für Hausverwaltungen, Gastronomie und Hotellerie sowie Gewerbe und Industrie in München und Umgebung — mit Dokumentation und Festpreis.",
};

export default function Branchen() {
  return (
    <>
      <section className="kopf dunkel">
        <HeroIntro className="wrap stack">
          <span className="kicker hell" data-hero="kicker">
            Branchenlösungen
          </span>
          <h1>Schädlingsbekämpfung, die zu Ihrer Branche passt.</h1>
          <p className="lead" style={{ maxWidth: "62ch" }} data-hero="lead">
            Eine Hausverwaltung braucht etwas anderes als ein Restaurant oder ein Logistiklager. Wir kennen die
            Anforderungen, liefern die passende Dokumentation und sind bei akutem Befall schnell vor Ort.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }} data-hero="cta">
            <a className="btn" href={TELEFON_HREF}>
              Jetzt anrufen: {TELEFON}
            </a>
            <Link className="btn dunkel" href="/kontakt#anfrage">
              Kostenlose Einschätzung
            </Link>
          </div>
        </HeroIntro>
      </section>

      <section className="band">
        <div className="wrap">
          <Reveal className="raster-3" selector=".karte" stagger={0.09} y={36}>
            {branchen.map((b) => (
              <div className="karte grau" key={b.slug} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <h3>{b.name}</h3>
                <p style={{ flex: 1 }}>{b.kurz}</p>
                <Link className="btn linie sm" href={`/branchen/${b.slug}`} style={{ alignSelf: "flex-start" }}>
                  Mehr erfahren
                </Link>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="band grau">
        <Reveal className="wrap raster-2" stagger={0.14}>
          <div className="stack" data-reveal>
            <span className="kicker">Lebensmittelbetriebe</span>
            <h2>HACCP-Konzept und Monitoring.</h2>
            <p className="lead">
              Für Bäckereien, Metzgereien, Lebensmittelproduktion und -verarbeitung ist ein funktionierendes
              Schädlingsmonitoring Pflicht. Wir übernehmen Kontrolle, Köderstationen und Dokumentation.
            </p>
            <Link className="btn linie" href="/haccp">
              Zur HACCP-Seite
            </Link>
          </div>
          <div className="karte" data-reveal>
            <h3 style={{ marginBottom: 14 }}>Für alle Branchen gilt</h3>
            <ul className="liste">
              <li>
                <b>✓</b>
                <span>Festpreis vor dem Termin — keine versteckten Kosten</span>
              </li>
              <li>
                <b>✓</b>
                <span>Dokumentation für Behörden, Audits und Vermieter</span>
              </li>
              <li>
                <b>✓</b>
                <span>Kurzfristige Einsätze, oft noch am selben Tag</span>
              </li>
              <li>
                <b>✓</b>
                <span>Schonende Wirkstoffe, Schutz für Menschen und Tiere</span>
              </li>
            </ul>
          </div>
        </Reveal>
      </section>

      <CtaBand
        titel="Ihre Branche ist nicht dabei?"
        text="Sprechen Sie uns an. Wir finden eine passende Lösung für Ihren Betrieb oder Ihr Objekt."
        sekundaerLabel="Anfrage senden"
        sekundaerHref="/kontakt"
      />
    </>
  );
}
