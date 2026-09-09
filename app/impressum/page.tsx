import type { Metadata } from "next";
import HeroIntro from "@/components/anim/HeroIntro";
import Reveal from "@/components/anim/Reveal";
import { TELEFON, TELEFON_HREF, EMAIL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Impressum",
};

export default function Impressum() {
  return (
    <>
      <section className="kopf">
        <HeroIntro className="wrap stack">
          <span className="kicker" data-hero="kicker">
            Rechtliches
          </span>
          <h1>Impressum</h1>
        </HeroIntro>
      </section>
      <section className="band">
        <div className="wrap">
          <Reveal className="rechtstext" y={24}>
            <h2>Name des Unternehmens</h2>
            <p>DMK – Die Münchner Kammerjäger</p>
            <h2>Eingetragener Firmensitz</h2>
            <p>
              Lochhammer Schlag 12
              <br />
              82166 Gräfelfing
            </p>
            <h2>Kontaktinformationen</h2>
            <p>
              Selcuk Kirci
              <br />
              Telefon: <a href={TELEFON_HREF}>{TELEFON}</a>
              <br />
              E-Mail: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>
            <h2>Verantwortlich für den Inhalt</h2>
            <p>Selcuk Kirci, Anschrift wie oben.</p>
            <h2>Noch zu ergänzen</h2>
            <p style={{ background: "var(--grau)", borderRadius: 16, padding: 16 }}>
              Für ein vollständiges Impressum nach § 5 DDG fehlen noch: Rechtsform,
              Umsatzsteuer-Identifikationsnummer (§ 27a UStG), gegebenenfalls Handelsregister und
              Registernummer, zuständige Aufsichtsbehörde bzw. Kammer sowie die gesetzliche
              Berufsbezeichnung. Bitte ergänzen oder von einem Anwalt prüfen lassen.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
