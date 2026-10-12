import Link from "next/link";
import HeroIntro from "@/components/anim/HeroIntro";
import Reveal from "@/components/anim/Reveal";
import Parallax from "@/components/anim/Parallax";
import ImageSlot from "@/components/ImageSlot";
import AnfrageForm from "@/components/AnfrageForm";
import Schritte from "@/components/Schritte";
import CtaBand from "@/components/CtaBand";
import { TELEFON, TELEFON_HREF, leistungen } from "@/lib/content";

export default function Startseite() {
  return (
    <>
      <section className="hero">
        <HeroIntro className="wrap split">
          <div className="stack">
            <span className="kicker hell" data-hero="kicker">
              Meist am selben Tag vor Ort
            </span>
            <h1>
              Ihr Kammerjäger für <span>München und Umgebung.</span>
            </h1>
            <p className="lead" data-hero="lead">
              Wenn Schädlinge da sind, zählt jede Stunde. Wir kommen kurzfristig, arbeiten diskret und sagen
              Ihnen den Preis, bevor wir anfangen.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }} data-hero="cta">
              <a className="btn" href={TELEFON_HREF}>
                Jetzt anrufen: {TELEFON}
              </a>
              <a className="btn dunkel" href="#anfrage">
                Anfrage senden
              </a>
            </div>
            <div className="vertrauen" data-hero="trust">
              <div>
                <b>✓</b>
                <span>Festpreis vor dem Termin — keine versteckten Kosten</span>
              </div>
              <div>
                <b>✓</b>
                <span>Wirkstoffe schonend für Kinder und Haustiere</span>
              </div>
              <div>
                <b>✓</b>
                <span>Dokumentation für Vermieter, Behörden und Audits</span>
              </div>
            </div>
          </div>
          <div className="karte" id="anfrage" data-hero="card">
            <h3 style={{ marginBottom: 4 }}>Kostenlose Einschätzung anfragen</h3>
            <p style={{ fontSize: 14, lineHeight: "20px", marginBottom: 16 }}>
              Wir melden uns in der Regel binnen einer Stunde — mit Terminvorschlag und Festpreis.
            </p>
            <AnfrageForm />
          </div>
        </HeroIntro>
      </section>

      <section className="band">
        <Reveal className="wrap raster-2" stagger={0.15}>
          <div data-reveal style={{ borderRadius: 24, overflow: "hidden", height: 380 }}>
            <Parallax className="h-full">
              <ImageSlot label="Foto: Selcuk Kirci oder Team im Einsatz (ca. 1200×1000)" />
            </Parallax>
          </div>
          <div className="stack" data-reveal>
            <span className="kicker">Über uns</span>
            <h2>Ein Ansprechpartner, der selbst vor Ort ist.</h2>
            <p className="lead">
              DMK – Die Münchner Kammerjäger ist der Betrieb von Selcuk Kirci. Sie sprechen mit der Person,
              die anschließend auch bei Ihnen im Haus steht — kein Callcenter, keine wechselnden
              Subunternehmer.
            </p>
            <ul className="liste">
              <li>
                <b>✓</b>
                <span>Erfahrung mit Privathaushalten, Gastronomie, Gewerbe und Hausverwaltungen</span>
              </li>
              <li>
                <b>✓</b>
                <span>Moderne Verfahren und verantwortungsbewusster Umgang mit Wirkstoffen</span>
              </li>
              <li>
                <b>✓</b>
                <span>Geschäftszeiten Mo – Fr 08:00 – 20:00 Uhr, am Wochenende Notdienst</span>
              </li>
            </ul>
            <Link className="btn linie" href="/ueber-uns">
              Mehr über uns
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="band grau">
        <div className="wrap">
          <Reveal
            selector="[data-reveal]"
            className=""
            as="div"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                gap: 24,
                flexWrap: "wrap",
                marginBottom: 32,
              }}
            >
              <div className="stack" style={{ gap: 12 }} data-reveal>
                <span className="kicker">Unsere Leistungen</span>
                <h2>Gegen welchen Schädling brauchen Sie Hilfe?</h2>
              </div>
              <Link className="btn linie sm" href="/dienstleistungen" data-reveal>
                Alle Leistungen ansehen
              </Link>
            </div>
          </Reveal>
          <Reveal className="raster" selector=".leistung" stagger={0.06} y={44}>
            {leistungen.slice(0, 8).map((l) => (
              <Link href="/dienstleistungen" className="leistung" key={l.titel} style={{ color: "inherit" }}>
                <div className="bild">
                  <ImageSlot label={`Foto: ${l.titel}`} />
                </div>
                <div className="txt">
                  <h4>{l.titel}</h4>
                  <p>{l.text}</p>
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <Reveal className="stack" selector="[data-reveal]" as="div">
            <div className="stack" style={{ gap: 12, marginBottom: 32 }} data-reveal>
              <span className="kicker">So läuft es ab</span>
              <h2>Drei Schritte bis zur Ruhe.</h2>
            </div>
          </Reveal>
          <Schritte />
        </div>
      </section>

      <section className="band dunkel">
        <Reveal className="wrap raster-2" stagger={0.16}>
          <div className="stack" data-reveal>
            <span className="kicker hell">Für Gewerbekunden</span>
            <h2>HACCP-Konzept, Monitoring und Prävention.</h2>
            <p className="lead" style={{ color: "#d8d8d4" }}>
              Für Betriebe im Lebensmittelbereich ist ein funktionierendes HACCP-Konzept gesetzlich
              vorgeschrieben. Wir übernehmen Schädlingsmonitoring, Köderstationen, Lagepläne und die
              vollständige Dokumentation für Audits und Behörden.
            </p>
            <Link className="btn" href="/haccp">
              HACCP-Leistungen ansehen
            </Link>
          </div>
          <ul className="liste" style={{ color: "#e4e4e0" }} data-reveal>
            <li>
              <b>✓</b>
              <span>Gastronomie, Hotels, Catering</span>
            </li>
            <li>
              <b>✓</b>
              <span>Bäckereien und Metzgereien</span>
            </li>
            <li>
              <b>✓</b>
              <span>Lebensmittelproduktion und -verarbeitung</span>
            </li>
            <li>
              <b>✓</b>
              <span>Lager- und Logistikunternehmen</span>
            </li>
            <li>
              <b>✓</b>
              <span>Kontrollberichte, Maßnahmenprotokolle, Nachweise</span>
            </li>
          </ul>
        </Reveal>
      </section>

      <section className="band grau">
        <div className="wrap">
          <Reveal selector="[data-reveal]" as="div">
            <div className="stack" style={{ gap: 12, marginBottom: 28 }} data-reveal>
              <span className="kicker">Unsere Einsatzorte</span>
              <h2>Regional aufgestellt — deshalb sind wir schnell da.</h2>
              <p className="lead" style={{ maxWidth: "60ch" }}>
                Unser Service umfasst unter anderem folgende Regionen. Auch kurzfristige Einsätze sind durch
                unsere flexible Einsatzplanung möglich.
              </p>
            </div>
          </Reveal>
          <Reveal className="orte" selector=":scope > span" stagger={0.05} y={24}>
            <span>München Stadtgebiet</span>
            <span>Landkreis München</span>
            <span>Gräfelfing</span>
            <span>Weilheim in Oberbayern</span>
            <span>Wörth</span>
            <span>Oberbayern &amp; Niederbayern</span>
          </Reveal>
          <Reveal as="div" y={16}>
            <Link className="btn linie" href="/einsatzorte" style={{ marginTop: 24 }}>
              Alle Einsatzorte
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand
        titel="Schädlingsproblem? Wir sind für Sie da."
        text="Kontaktieren Sie uns noch heute. Wir finden eine schnelle Lösung und sorgen dafür, dass Ihr Zuhause oder Betrieb schädlingsfrei bleibt."
        sekundaerLabel="Kontaktseite"
        sekundaerHref="/kontakt"
      />
    </>
  );
}
