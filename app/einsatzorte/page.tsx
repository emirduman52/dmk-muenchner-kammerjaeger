import type { Metadata } from "next";
import Link from "next/link";
import HeroIntro from "@/components/anim/HeroIntro";
import Reveal from "@/components/anim/Reveal";
import CtaBand from "@/components/CtaBand";
import { TELEFON, TELEFON_HREF } from "@/lib/content";

export const metadata: Metadata = {
  title: "Unsere Einsatzorte",
  description:
    "Ihr zuverlässiger Ansprechpartner in München und Umgebung — kurze Reaktionszeiten, auch kurzfristige Einsätze möglich.",
};

export default function Einsatzorte() {
  return (
    <>
      <section className="kopf dunkel">
        <HeroIntro className="wrap stack">
          <span className="kicker hell" data-hero="kicker">
            Unsere Einsatzorte
          </span>
          <h1>Ihr zuverlässiger Ansprechpartner in München und Umgebung.</h1>
          <p className="lead" style={{ maxWidth: "64ch" }} data-hero="lead">
            Gerade bei Schädlingsbefall zählt jede Minute. Deshalb legen wir großen Wert auf kurze
            Reaktionszeiten — auch kurzfristige Einsätze sind durch unsere flexible Einsatzplanung möglich.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }} data-hero="cta">
            <a className="btn" href={TELEFON_HREF}>
              Jetzt anrufen: {TELEFON}
            </a>
            <Link className="btn dunkel" href="/kontakt">
              Verfügbarkeit prüfen
            </Link>
          </div>
        </HeroIntro>
      </section>

      <section className="band">
        <div className="wrap">
          <Reveal selector="[data-reveal]" as="div">
            <div className="stack" style={{ gap: 12, marginBottom: 24 }} data-reveal>
              <h2>Unser Service umfasst unter anderem folgende Regionen</h2>
            </div>
          </Reveal>
          <Reveal className="orte" selector=":scope > span" stagger={0.05} y={24}>
            <span>München Stadtgebiet</span>
            <span>Landkreis München</span>
            <span>Gräfelfing</span>
            <span>Weilheim in Oberbayern</span>
            <span>Wörth</span>
            <span>Oberbayern</span>
            <span>Niederbayern</span>
            <span>Umliegende Städte und Gemeinden</span>
            <span>Weitere Regionen auf Anfrage</span>
          </Reveal>
          <Reveal as="div" y={16}>
            <p style={{ marginTop: 20 }}>
              Neben München sind wir auch in weiteren Regionen in Bayern für Sie im Einsatz. Sprechen Sie uns
              einfach an — wir prüfen kurzfristig die Verfügbarkeit in Ihrer Region.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="band grau">
        <Reveal className="wrap raster-2" stagger={0.16}>
          <div className="stack" data-reveal>
            <span className="kicker">Schnell vor Ort</span>
            <h2>Durch unsere regionale Struktur können wir:</h2>
            <ul className="liste">
              <li>
                <b>✓</b>
                <span>schnell Termine vergeben</span>
              </li>
              <li>
                <b>✓</b>
                <span>kurzfristig vor Ort sein</span>
              </li>
              <li>
                <b>✓</b>
                <span>effizient und zuverlässig arbeiten</span>
              </li>
              <li>
                <b>✓</b>
                <span>für Privat- und Gewerbekunden gleichermaßen einsatzbereit sein</span>
              </li>
            </ul>
          </div>
          <div className="karte" data-reveal>
            <h3 style={{ marginBottom: 14 }}>Unsere Einsätze richten sich an:</h3>
            <ul className="liste">
              <li>
                <b>✓</b>
                <span>Privathaushalte</span>
              </li>
              <li>
                <b>✓</b>
                <span>Gastronomie und Hotellerie</span>
              </li>
              <li>
                <b>✓</b>
                <span>Gewerbe- und Industriebetriebe</span>
              </li>
              <li>
                <b>✓</b>
                <span>Hausverwaltungen</span>
              </li>
            </ul>
            <p style={{ marginTop: 14 }}>Wir bieten individuelle Lösungen — abgestimmt auf Ihre Anforderungen.</p>
          </div>
        </Reveal>
      </section>

      <CtaBand
        titel="Sie benötigen schnelle Hilfe?"
        text="Kontaktieren Sie uns jetzt — wir sind schnell bei Ihnen vor Ort und kümmern uns zuverlässig um Ihr Anliegen."
        sekundaerLabel="Anfrage senden"
        sekundaerHref="/kontakt"
      />
    </>
  );
}
