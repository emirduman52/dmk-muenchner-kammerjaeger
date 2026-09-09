import type { Metadata } from "next";
import Link from "next/link";
import HeroIntro from "@/components/anim/HeroIntro";
import Reveal from "@/components/anim/Reveal";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "HACCP-Konzept & Monitoring",
  description:
    "HACCP-Konzept, Schädlingsmonitoring und Prävention für Betriebe im Lebensmittelbereich — inklusive vollständiger Dokumentation für Audits und Behörden.",
};

export default function Haccp() {
  return (
    <>
      <section className="kopf dunkel">
        <HeroIntro className="wrap stack">
          <span className="kicker hell" data-hero="kicker">
            Für Gewerbekunden
          </span>
          <h1>HACCP-Konzept, Monitoring &amp; Schädlingsprävention.</h1>
          <p className="lead" style={{ maxWidth: "66ch" }} data-hero="lead">
            Für Betriebe im Lebensmittelbereich ist ein funktionierendes HACCP-Konzept gesetzlich
            vorgeschrieben. Ein zentraler Bestandteil ist dabei die professionelle Schädlingsprävention.
          </p>
          <div data-hero="cta" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link className="btn" href="/kontakt">
              Konzept anfragen
            </Link>
          </div>
        </HeroIntro>
      </section>

      <section className="band">
        <Reveal className="wrap raster-2" stagger={0.16}>
          <div className="stack" data-reveal>
            <span className="kicker">Was ist ein HACCP-Konzept?</span>
            <h2>Ein systematischer Ansatz zur Lebensmittelsicherheit.</h2>
            <p className="lead">
              Ziel ist es, potenzielle Gefahren frühzeitig zu erkennen und zu vermeiden — dazu gehört auch der
              Schutz vor Schädlingsbefall. Ein effektives Schädlingsmonitoring ist daher ein unverzichtbarer
              Bestandteil jedes HACCP-Systems.
            </p>
            <p>
              Wir unterstützen Unternehmen in ganz Bayern mit maßgeschneiderten Lösungen zur Einhaltung aller
              hygienischen Anforderungen.
            </p>
          </div>
          <div className="karte grau" data-reveal>
            <h3 style={{ marginBottom: 14 }}>Für welche Betriebe HACCP relevant ist</h3>
            <ul className="liste">
              <li>
                <b>✓</b>
                <span>Gastronomie &amp; Restaurants</span>
              </li>
              <li>
                <b>✓</b>
                <span>Hotels &amp; Cateringbetriebe</span>
              </li>
              <li>
                <b>✓</b>
                <span>Bäckereien &amp; Metzgereien</span>
              </li>
              <li>
                <b>✓</b>
                <span>Lebensmittelproduktion &amp; -verarbeitung</span>
              </li>
              <li>
                <b>✓</b>
                <span>Lager- und Logistikunternehmen</span>
              </li>
            </ul>
          </div>
        </Reveal>
      </section>

      <section className="band grau">
        <div className="wrap">
          <Reveal selector="[data-reveal]" as="div">
            <div className="stack" style={{ gap: 12, marginBottom: 28 }} data-reveal>
              <span className="kicker">Unser Leistungsumfang</span>
              <h2>Umfassendes Konzept zur Schädlingskontrolle und Prävention.</h2>
            </div>
          </Reveal>
          <Reveal className="raster" selector=".karte" stagger={0.09} y={36}>
            <div className="karte">
              <h4>Kontrolle &amp; Monitoring</h4>
              <p style={{ fontSize: 14, lineHeight: "20px", marginTop: 8 }}>
                Regelmäßige Kontroll- und Monitoringmaßnahmen nach festem Intervall.
              </p>
            </div>
            <div className="karte">
              <h4>Köderstationen</h4>
              <p style={{ fontSize: 14, lineHeight: "20px", marginTop: 8 }}>
                Installation und Wartung inklusive Lageplan Ihrer Monitoring-Systeme.
              </p>
            </div>
            <div className="karte">
              <h4>HACCP-konforme Dokumentation</h4>
              <p style={{ fontSize: 14, lineHeight: "20px", marginTop: 8 }}>
                Dokumentation aller Maßnahmen, jederzeit vorzeigbar.
              </p>
            </div>
            <div className="karte">
              <h4>Risikoanalyse &amp; Prävention</h4>
              <p style={{ fontSize: 14, lineHeight: "20px", marginTop: 8 }}>
                Individuelle Präventionspläne — und schnelle Intervention bei akutem Befall.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="band">
        <Reveal className="wrap raster-2" stagger={0.16}>
          <div className="karte rand" data-reveal>
            <h3 style={{ marginBottom: 14 }}>Dokumentation &amp; Nachweise</h3>
            <p style={{ marginBottom: 14 }}>
              Für Audits und Kontrollen stellen wir Ihnen eine vollständige Dokumentation zur Verfügung:
            </p>
            <ul className="liste">
              <li>
                <b>✓</b>
                <span>Kontrollberichte</span>
              </li>
              <li>
                <b>✓</b>
                <span>Maßnahmenprotokolle</span>
              </li>
              <li>
                <b>✓</b>
                <span>Lagepläne der Monitoring-Systeme</span>
              </li>
              <li>
                <b>✓</b>
                <span>Nachweise für Behörden und Zertifizierungen</span>
              </li>
            </ul>
            <p style={{ marginTop: 14, fontWeight: 600, color: "var(--schwarz)" }}>
              So sind Sie jederzeit auf der sicheren Seite.
            </p>
          </div>
          <div className="stack" data-reveal>
            <span className="kicker">Ihre Vorteile</span>
            <h2>Sicherheit für Ihren Betrieb und Ihre Gäste.</h2>
            <ul className="liste">
              <li>
                <b>✓</b>
                <span>Einhaltung gesetzlicher Vorschriften</span>
              </li>
              <li>
                <b>✓</b>
                <span>Minimierung von Risiken und Schäden</span>
              </li>
              <li>
                <b>✓</b>
                <span>Schutz Ihrer Kunden und Ihres Unternehmens</span>
              </li>
              <li>
                <b>✓</b>
                <span>Professionelle Betreuung durch erfahrene Schädlingsbekämpfer</span>
              </li>
              <li>
                <b>✓</b>
                <span>Individuelle Betreuung für Ihren Betrieb</span>
              </li>
            </ul>
            <p>
              Als regionaler Anbieter sind wir schnell vor Ort und kennen die Anforderungen der Betriebe in
              München und ganz Bayern genau. Wir entwickeln individuelle Lösungen, die optimal zu Ihrem
              Unternehmen passen.
            </p>
          </div>
        </Reveal>
      </section>

      <CtaBand
        grau
        titel="HACCP-konform absichern?"
        text="Kontaktieren Sie uns — wir beraten Sie individuell und erstellen ein passendes Konzept für Ihren Betrieb."
        sekundaerLabel="Konzept anfragen"
        sekundaerHref="/kontakt"
      />
    </>
  );
}
