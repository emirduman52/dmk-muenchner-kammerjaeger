import type { Metadata } from "next";
import Link from "next/link";
import HeroIntro from "@/components/anim/HeroIntro";
import Reveal from "@/components/anim/Reveal";
import CtaBand from "@/components/CtaBand";
import { TELEFON, TELEFON_HREF } from "@/lib/content";
import { dateiHref, downloadGruppen } from "@/lib/downloads";

export const metadata: Metadata = {
  title: "Downloads",
  description:
    "Flyer zum Herunterladen: Schädlingsbekämpfung für Hausverwaltungen, Gastronomie und Hotellerie sowie Gewerbe und Industrie.",
};

export default function Downloads() {
  return (
    <>
      <section className="kopf dunkel">
        <HeroIntro className="wrap stack">
          <span className="kicker hell" data-hero="kicker">
            Downloads
          </span>
          <h1>Unsere Flyer zum Herunterladen.</h1>
          <p className="lead" style={{ maxWidth: "62ch" }} data-hero="lead">
            Alles Wichtige kompakt zum Ausdrucken, Weitergeben und Ablegen. Weitere Unterlagen, etwa
            Sicherheitsdatenblätter zu den eingesetzten Mitteln, senden wir Ihnen auf Anfrage gern zu.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }} data-hero="cta">
            <a className="btn" href={TELEFON_HREF}>
              Jetzt anrufen: {TELEFON}
            </a>
            <Link className="btn dunkel" href="/kontakt#anfrage">
              Unterlagen anfragen
            </Link>
          </div>
        </HeroIntro>
      </section>

      {downloadGruppen.map((g, i) => (
        <section className={i % 2 === 0 ? "band" : "band grau"} key={g.titel}>
          <div className="wrap">
            <Reveal selector="[data-reveal]" as="div">
              <div className="stack" style={{ gap: 12, marginBottom: 28 }} data-reveal>
                <h2>{g.titel}</h2>
                <p className="lead" style={{ maxWidth: "62ch" }}>
                  {g.einleitung}
                </p>
              </div>
            </Reveal>
            <Reveal className="raster-3" selector=".karte" stagger={0.08} y={36}>
              {g.eintraege.map((d) => (
                <div
                  className={i % 2 === 0 ? "karte grau" : "karte"}
                  key={d.datei}
                  style={{ display: "flex", flexDirection: "column", gap: 10 }}
                >
                  <span className="kicker">{d.format}</span>
                  <h4>{d.titel}</h4>
                  <p style={{ fontSize: 14, lineHeight: "20px", flex: 1 }}>{d.text}</p>
                  <a className="btn sm" href={dateiHref(d.datei)} download style={{ alignSelf: "flex-start" }}>
                    Herunterladen
                  </a>
                </div>
              ))}
            </Reveal>
          </div>
        </section>
      ))}

      <CtaBand
        titel="Etwas Bestimmtes gesucht?"
        text="Sagen Sie uns, welche Unterlagen Sie brauchen — wir schicken sie Ihnen gern zu."
        sekundaerLabel="Anfrage senden"
        sekundaerHref="/kontakt"
      />
    </>
  );
}
