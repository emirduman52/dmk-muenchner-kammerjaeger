import type { Metadata } from "next";
import Link from "next/link";
import HeroIntro from "@/components/anim/HeroIntro";
import Reveal from "@/components/anim/Reveal";
import ImageSlot from "@/components/ImageSlot";
import CtaBand from "@/components/CtaBand";
import { TELEFON, TELEFON_HREF, leistungen } from "@/lib/content";

export const metadata: Metadata = {
  title: "Unsere Dienstleistungen",
  description:
    "Ein breites Spektrum an Leistungen — Prävention und Bekämpfung für Privatpersonen, Gewerbekunden und öffentliche Einrichtungen.",
};

export default function Dienstleistungen() {
  return (
    <>
      <section className="kopf dunkel">
        <HeroIntro className="wrap stack">
          <span className="kicker hell" data-hero="kicker">
            DMK – Schädlingsbekämpfung
          </span>
          <h1>Ein breites Spektrum an Leistungen — Prävention und Bekämpfung.</h1>
          <p className="lead" style={{ maxWidth: "66ch" }} data-hero="lead">
            Für Privatpersonen, Gewerbekunden und öffentliche Einrichtungen. Mit Erfahrung, modernen Methoden
            und einem verantwortungsbewussten Umgang sorgen wir für eine sichere, saubere und schädlingsfreie
            Umgebung.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }} data-hero="cta">
            <a className="btn" href={TELEFON_HREF}>
              Jetzt anrufen: {TELEFON}
            </a>
            <Link className="btn dunkel" href="/kontakt">
              Kostenlose Einschätzung
            </Link>
          </div>
        </HeroIntro>
      </section>

      <section className="band">
        <div className="wrap">
          <Reveal className="raster-3" selector=".leistung" stagger={0.06} y={44}>
            {leistungen.map((l) => (
              <div className="leistung" key={l.titel}>
                <div className="bild" style={{ height: 190 }}>
                  <ImageSlot label={`Foto: ${l.titel}`} />
                </div>
                <div className="txt">
                  <h4>{l.titel}</h4>
                  <p>{l.text}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="band grau">
        <div className="wrap">
          <Reveal selector="[data-reveal]" as="div">
            <div className="stack" style={{ gap: 12, marginBottom: 28 }} data-reveal>
              <span className="kicker">Was Sie von uns erwarten können</span>
              <h2>Drei Zusagen, an denen Sie uns messen können.</h2>
            </div>
          </Reveal>
          <Reveal className="raster-3" selector=".karte" stagger={0.09} y={36}>
            <div className="karte">
              <h4>Festpreis vor dem Termin</h4>
              <p style={{ fontSize: 14, lineHeight: "20px", marginTop: 8 }}>
                Sie wissen vorher, was der Einsatz kostet. Keine Überraschung auf der Rechnung.
              </p>
            </div>
            <div className="karte">
              <h4>Schonende Wirkstoffe</h4>
              <p style={{ fontSize: 14, lineHeight: "20px", marginTop: 8 }}>
                Wir wählen Mittel und Verfahren so, dass Kinder und Haustiere geschützt bleiben.
              </p>
            </div>
            <div className="karte">
              <h4>Dokumentation inklusive</h4>
              <p style={{ fontSize: 14, lineHeight: "20px", marginTop: 8 }}>
                Nachweise für Vermieter, Behörden und Audits erhalten Sie schriftlich.
              </p>
            </div>
          </Reveal>
        </div>
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
