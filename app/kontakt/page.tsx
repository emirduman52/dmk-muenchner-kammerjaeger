import type { Metadata } from "next";
import HeroIntro from "@/components/anim/HeroIntro";
import Reveal from "@/components/anim/Reveal";
import ImageSlot from "@/components/ImageSlot";
import AnfrageForm from "@/components/AnfrageForm";
import { TELEFON, TELEFON_HREF, EMAIL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Rufen Sie an oder schreiben Sie uns. Sie erhalten in der Regel binnen einer Stunde eine Rückmeldung mit Terminvorschlag und Festpreis.",
};

export default function Kontakt() {
  return (
    <>
      <section className="kopf">
        <HeroIntro className="wrap stack">
          <span className="kicker" data-hero="kicker">
            Kontakt
          </span>
          <h1>Schnell erklärt, schnell gelöst.</h1>
          <p className="lead" style={{ maxWidth: "60ch" }} data-hero="lead">
            Rufen Sie an oder schreiben Sie uns. Sie erhalten in der Regel binnen einer Stunde eine
            Rückmeldung mit Terminvorschlag und Festpreis.
          </p>
        </HeroIntro>
      </section>

      <section className="band">
        <Reveal className="wrap raster-2" stagger={0.14}>
          <div className="karte rand" id="anfrage" data-reveal>
            <h3 style={{ marginBottom: 4 }}>Kostenlose Einschätzung anfragen</h3>
            <p style={{ fontSize: 14, lineHeight: "20px", marginBottom: 16 }}>
              Je genauer Ihre Angaben, desto präziser die Einschätzung.
            </p>
            <AnfrageForm />
          </div>
          <div className="stack" style={{ gap: 24, width: "100%" }} data-reveal>
            <div className="karte grau" style={{ width: "100%" }}>
              <h3 style={{ marginBottom: 14 }}>Direkt erreichbar</h3>
              <dl className="infozeile">
                <dt>Telefon</dt>
                <dd>
                  <a href={TELEFON_HREF} style={{ fontWeight: 600, textDecoration: "none" }}>
                    {TELEFON}
                  </a>
                </dd>
                <dt>E-Mail</dt>
                <dd>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </dd>
                <dt>Ansprechpartner</dt>
                <dd>Das DMK-Team</dd>
                <dt>Anschrift</dt>
                <dd>
                  DMK – Die Münchner Kammerjäger
                  <br />
                  Lochhammer Schlag 12
                  <br />
                  82166 Gräfelfing
                </dd>
              </dl>
            </div>
            <div className="karte grau" style={{ width: "100%" }}>
              <h3 style={{ marginBottom: 14 }}>Geschäftszeiten</h3>
              <dl className="infozeile">
                <dt>Montag – Freitag</dt>
                <dd>08:00 bis 20:00 Uhr</dd>
                <dt>Samstag – Sonntag</dt>
                <dd>Notdienst-Einsatz</dd>
              </dl>
              <p style={{ marginTop: 14, fontSize: 14, lineHeight: "20px" }}>
                Bei akutem Befall erreichen Sie uns auch außerhalb der Geschäftszeiten über den Notdienst.
              </p>
            </div>
            <div style={{ borderRadius: 24, overflow: "hidden", height: 240, width: "100%" }}>
              <ImageSlot label="Optional: Kartenausschnitt Gräfelfing / Anfahrt (ca. 1200×600)" />
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
