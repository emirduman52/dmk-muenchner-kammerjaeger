import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import HeroIntro from "@/components/anim/HeroIntro";
import Reveal from "@/components/anim/Reveal";
import CtaBand from "@/components/CtaBand";
import NotdienstBand from "@/components/NotdienstBand";
import { TELEFON, TELEFON_HREF } from "@/lib/content";
import { branchen, findBranche } from "@/lib/branchen";
import { findSchaedling } from "@/lib/schaedlinge";

// Nur die hinterlegten Branchen werden erzeugt; alles andere ist ein 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return branchen.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const b = findBranche(slug);
  if (!b) return {};
  return { title: b.titel, description: b.beschreibung };
}

export default async function BranchenSeite({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const b = findBranche(slug);
  if (!b) notFound();

  const andere = branchen.filter((x) => x.slug !== b.slug);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: b.faq.map((f) => ({
      "@type": "Question",
      name: f.frage,
      acceptedAnswer: { "@type": "Answer", text: f.antwort },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
      />

      <section className="kopf dunkel">
        <HeroIntro className="wrap stack">
          <span className="kicker hell" data-hero="kicker">
            {b.kicker}
          </span>
          <h1>{b.titel}</h1>
          <p className="lead" style={{ maxWidth: "66ch" }} data-hero="lead">
            {b.intro}
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

      <NotdienstBand />

      <section className="band">
        <Reveal className="wrap raster-2" stagger={0.14}>
          <div className="stack" data-reveal>
            <span className="kicker">Was Sie beschäftigt</span>
            <h2>Typische Herausforderungen</h2>
            <ul className="liste">
              {b.herausforderungen.map((h) => (
                <li key={h}>
                  <b>!</b>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
          {b.hinweis ? (
            <div className="karte grau" data-reveal>
              <h3 style={{ marginBottom: 10 }}>{b.hinweis.titel}</h3>
              <p>{b.hinweis.text}</p>
            </div>
          ) : (
            <div className="karte grau" data-reveal>
              <h3 style={{ marginBottom: 10 }}>Festpreis vor dem Termin</h3>
              <p>
                Sie wissen vorher, was der Einsatz kostet. Nach einer kurzen Einschätzung nennen wir Ihnen den
                Preis, bevor wir anfangen — ohne versteckte Kosten.
              </p>
              <p style={{ marginTop: 12 }}>
                <Link href="/preise">So entsteht unser Festpreis</Link>
              </p>
            </div>
          )}
        </Reveal>
      </section>

      <section className="band grau">
        <div className="wrap">
          <Reveal selector="[data-reveal]" as="div">
            <div className="stack" style={{ gap: 12, marginBottom: 28 }} data-reveal>
              <span className="kicker">Unsere Leistungen</span>
              <h2>Was wir für {b.name} tun.</h2>
            </div>
          </Reveal>
          <Reveal className="raster-3" selector=".karte" stagger={0.07} y={36}>
            {b.leistungen.map((l) => (
              <div className="karte" key={l.titel}>
                <h4>{l.titel}</h4>
                <p style={{ fontSize: 14, lineHeight: "20px", marginTop: 8 }}>{l.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <Reveal selector="[data-reveal]" as="div">
            <div className="stack" style={{ gap: 16 }} data-reveal>
              <span className="kicker">Typische Schädlinge</span>
              <h2>Wogegen wir hier am häufigsten helfen.</h2>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {b.schaedlinge.map((s) => {
                  const sch = findSchaedling(s);
                  if (!sch) return null;
                  return (
                    <Link key={s} className="btn linie sm" href={`/dienstleistungen/${s}`}>
                      {sch.name.split(" und ")[0]}
                    </Link>
                  );
                })}
                <Link className="btn linie sm" href="/haccp">
                  HACCP-Monitoring
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="band grau">
        <div className="wrap" style={{ maxWidth: 860 }}>
          <Reveal selector="[data-reveal]" as="div">
            <div className="stack" style={{ gap: 12, marginBottom: 24 }} data-reveal>
              <span className="kicker">Häufige Fragen</span>
              <h2>Fragen aus der Praxis</h2>
            </div>
          </Reveal>
          <Reveal className="faq" selector="details" stagger={0.06} y={20}>
            {b.faq.map((f) => (
              <details key={f.frage}>
                <summary>{f.frage}</summary>
                <p>{f.antwort}</p>
              </details>
            ))}
          </Reveal>
          <Reveal selector="[data-reveal]" as="div">
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }} data-reveal>
              <Link className="btn linie sm" href="/haeufige-fragen">
                Alle häufigen Fragen
              </Link>
              {andere.map((a) => (
                <Link key={a.slug} className="btn linie sm" href={`/branchen/${a.slug}`}>
                  {a.name}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        titel="Sprechen wir über Ihr Objekt."
        text="Rufen Sie uns an oder senden Sie eine Anfrage — wir nennen Ihnen den Festpreis, bevor wir anfangen."
        sekundaerLabel="Anfrage senden"
        sekundaerHref="/kontakt"
      />
    </>
  );
}
