import type { Metadata } from "next";
import Link from "next/link";
import HeroIntro from "@/components/anim/HeroIntro";
import Reveal from "@/components/anim/Reveal";
import CtaBand from "@/components/CtaBand";
import NotdienstBand from "@/components/NotdienstBand";
import { TELEFON, TELEFON_HREF } from "@/lib/content";
import { faqGruppen } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Häufige Fragen zur Schädlingsbekämpfung",
  description:
    "Antworten auf die häufigsten Fragen: Kosten, Festpreis, Ablauf, Sicherheit für Kinder und Haustiere, Dokumentation und Einsatzgebiet in München.",
};

export default function HaeufigeFragen() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqGruppen.flatMap((g) =>
      g.eintraege.map((f) => ({
        "@type": "Question",
        name: f.frage,
        acceptedAnswer: { "@type": "Answer", text: f.antwort },
      })),
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
      />

      <section className="kopf">
        <HeroIntro className="wrap stack">
          <span className="kicker" data-hero="kicker">
            Häufige Fragen
          </span>
          <h1>Antworten auf die Fragen, die uns Kunden am häufigsten stellen.</h1>
          <p className="lead" style={{ maxWidth: "62ch" }} data-hero="lead">
            Kosten, Ablauf, Sicherheit und Dokumentation — hier finden Sie die wichtigsten Antworten. Ihre Frage
            ist nicht dabei? Rufen Sie uns einfach an.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }} data-hero="cta">
            <a className="btn" href={TELEFON_HREF}>
              Jetzt anrufen: {TELEFON}
            </a>
            <Link className="btn linie" href="/preise">
              So entsteht unser Festpreis
            </Link>
          </div>
        </HeroIntro>
      </section>

      <NotdienstBand />

      {faqGruppen.map((g, i) => (
        <section className={i % 2 === 0 ? "band" : "band grau"} key={g.titel}>
          <div className="wrap" style={{ maxWidth: 860 }}>
            <Reveal selector="[data-reveal]" as="div">
              <div className="stack" style={{ gap: 12, marginBottom: 24 }} data-reveal>
                <h2>{g.titel}</h2>
              </div>
            </Reveal>
            <Reveal className={i % 2 === 0 ? "faq faq-grau" : "faq"} selector="details" stagger={0.06} y={20}>
              {g.eintraege.map((f) => (
                <details key={f.frage}>
                  <summary>{f.frage}</summary>
                  <p>{f.antwort}</p>
                </details>
              ))}
            </Reveal>
          </div>
        </section>
      ))}

      <CtaBand
        titel="Noch eine Frage offen?"
        text="Rufen Sie uns an oder schreiben Sie uns — wir beantworten Ihre Fragen und nennen Ihnen den Festpreis vor dem Termin."
        sekundaerLabel="Anfrage senden"
        sekundaerHref="/kontakt"
      />
    </>
  );
}
