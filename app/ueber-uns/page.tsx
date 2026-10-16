import type { Metadata } from "next";
import HeroIntro from "@/components/anim/HeroIntro";
import Reveal from "@/components/anim/Reveal";
import Parallax from "@/components/anim/Parallax";
import ImageSlot from "@/components/ImageSlot";
import CtaBand from "@/components/CtaBand";
import { TELEFON, TELEFON_HREF, EMAIL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "DMK – Die Münchner Kammerjäger ist Ihr Fachbetrieb für Schädlingsbekämpfung in München. Wer anruft, spricht mit dem Team, das anschließend auch vor Ort arbeitet.",
};

export default function UeberUns() {
  return (
    <>
      <section className="kopf">
        <HeroIntro className="wrap stack">
          <span className="kicker" data-hero="kicker">
            Über uns
          </span>
          <h1>Wir sind Ihr zuverlässiger Ansprechpartner für professionelle Schädlingsbekämpfung.</h1>
          <p className="lead" style={{ maxWidth: "62ch" }} data-hero="lead">
            DMK – Die Münchner Kammerjäger ist Ihr Fachbetrieb für Schädlingsbekämpfung in München. Wer
            anruft, spricht mit dem Team, das anschließend auch vor Ort arbeitet.
          </p>
        </HeroIntro>
      </section>

      <section className="band">
        <Reveal className="wrap raster-2" stagger={0.15}>
          <div data-reveal style={{ borderRadius: 24, overflow: "hidden", height: 400 }}>
            <Parallax className="h-full">
              <ImageSlot label="Foto: Team / Fahrzeug (ca. 1000×1200)" />
            </Parallax>
          </div>
          <div className="stack" data-reveal>
            <h2>Erfahrung, moderne Methoden, verantwortungsbewusster Umgang.</h2>
            <p className="lead">
              Wir arbeiten für Privathaushalte, Gastronomie, Gewerbe- und Industriebetriebe sowie
              Hausverwaltungen in München und Umgebung. Jede Situation wird zuerst angeschaut und
              eingeschätzt — behandelt wird gezielt, nicht pauschal.
            </p>
            <ul className="liste">
              <li>
                <b>✓</b>
                <span>Festpreis vor dem Termin, keine versteckten Kosten</span>
              </li>
              <li>
                <b>✓</b>
                <span>Wirkstoffe und Verfahren schonend für Kinder und Haustiere</span>
              </li>
              <li>
                <b>✓</b>
                <span>Dokumentation für Vermieter, Behörden und Audits</span>
              </li>
            </ul>
          </div>
        </Reveal>
      </section>

      <section className="band grau">
        <Reveal className="wrap raster-2" stagger={0.14}>
          <div className="karte" data-reveal>
            <h3 style={{ marginBottom: 14 }}>Geschäftszeiten</h3>
            <dl className="infozeile">
              <dt>Montag – Freitag</dt>
              <dd>08:00 bis 20:00 Uhr</dd>
              <dt>Samstag – Sonntag</dt>
              <dd>Notdienst-Einsatz</dd>
            </dl>
          </div>
          <div className="karte" data-reveal>
            <h3 style={{ marginBottom: 14 }}>Kontakt</h3>
            <dl className="infozeile">
              <dt>Ansprechpartner</dt>
              <dd>Das DMK-Team</dd>
              <dt>Telefon</dt>
              <dd>
                <a href={TELEFON_HREF}>{TELEFON}</a>
              </dd>
              <dt>E-Mail</dt>
              <dd>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </dd>
            </dl>
          </div>
        </Reveal>
      </section>

      <CtaBand
        titel="Lassen Sie uns helfen."
        text="Kontaktieren Sie uns noch heute, um eine schnelle und effektive Lösung zu finden. Wir sorgen dafür, dass Ihr Zuhause oder Betrieb frei von Schädlingen bleibt."
        primaerLabel="Jetzt anrufen"
        sekundaerLabel="Anfrage senden"
        sekundaerHref="/kontakt"
      />
    </>
  );
}
