import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import HeroIntro from "@/components/anim/HeroIntro";
import Reveal from "@/components/anim/Reveal";
import CtaBand from "@/components/CtaBand";
import NotdienstBand from "@/components/NotdienstBand";
import { TELEFON, TELEFON_HREF } from "@/lib/content";
import { schaedlinge, findSchaedling } from "@/lib/schaedlinge";

// Nur die hinterlegten Schädlinge werden erzeugt; alles andere ist ein 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return schaedlinge.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = findSchaedling(slug);
  if (!s) return {};
  return { title: `${s.name} in München`, description: s.beschreibung };
}

export default async function SchaedlingSeite({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = findSchaedling(slug);
  if (!s) notFound();

  const andere = schaedlinge.filter((x) => x.slug !== s.slug);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faq.map((f) => ({
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

      <section className="kopf">
        <HeroIntro className="wrap stack">
          <span className="kicker" data-hero="kicker">
            Schädlingsbekämpfung in München und Umgebung
          </span>
          <h1>{s.name}</h1>
          <p className="lead" style={{ maxWidth: "66ch" }} data-hero="lead">
            {s.intro}
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }} data-hero="cta">
            <a className="btn" href={TELEFON_HREF}>
              Jetzt anrufen: {TELEFON}
            </a>
            <Link className="btn linie" href="/kontakt#anfrage">
              Kostenlose Einschätzung
            </Link>
          </div>
        </HeroIntro>
      </section>

      <NotdienstBand />

      <section className="band">
        <Reveal className="wrap raster-2" stagger={0.14}>
          <div className="stack" data-reveal>
            <span className="kicker">Woran Sie es erkennen</span>
            <h2>Typische Anzeichen</h2>
            <ul className="liste">
              {s.anzeichen.map((a) => (
                <li key={a}>
                  <b>✓</b>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="karte grau" data-reveal>
            <h3 style={{ marginBottom: 14 }}>Warum Sie nicht abwarten sollten</h3>
            <ul className="liste">
              {s.gefahren.map((g) => (
                <li key={g}>
                  <b>!</b>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <section className="band grau">
        <div className="wrap">
          <Reveal selector="[data-reveal]" as="div">
            <div className="stack" style={{ gap: 12, marginBottom: 28 }} data-reveal>
              <span className="kicker">So gehen wir vor</span>
              <h2>In vier Schritten zum Ergebnis.</h2>
            </div>
          </Reveal>
          <Reveal className="raster" selector=".karte" stagger={0.09} y={36}>
            <div className="karte">
              <span className="kicker">Schritt 1</span>
              <h4 style={{ marginTop: 6 }}>Einschätzung</h4>
              <p style={{ fontSize: 14, lineHeight: "20px", marginTop: 8 }}>
                Wir schauen uns die Situation an, bestimmen den Schädling und finden die Ursache.
              </p>
            </div>
            <div className="karte">
              <span className="kicker">Schritt 2</span>
              <h4 style={{ marginTop: 6 }}>Festpreis vorab</h4>
              <p style={{ fontSize: 14, lineHeight: "20px", marginTop: 8 }}>
                Sie erfahren vor dem Termin, was der Einsatz kostet — ohne versteckte Kosten.
              </p>
            </div>
            <div className="karte">
              <span className="kicker">Schritt 3</span>
              <h4 style={{ marginTop: 6 }}>{s.behandlung.titel}</h4>
              <p style={{ fontSize: 14, lineHeight: "20px", marginTop: 8 }}>{s.behandlung.text}</p>
            </div>
            <div className="karte">
              <span className="kicker">Schritt 4</span>
              <h4 style={{ marginTop: 6 }}>Dokumentation</h4>
              <p style={{ fontSize: 14, lineHeight: "20px", marginTop: 8 }}>
                Was wir gemacht haben, erhalten Sie schriftlich — als Nachweis für Vermieter, Behörden oder Audits.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="band">
        <Reveal className="wrap raster-2" stagger={0.14}>
          <div className="stack" data-reveal>
            <span className="kicker">Das können Sie selbst tun</span>
            <h2>Tipps bis zum Einsatz</h2>
            <ul className="liste">
              {s.tipps.map((t) => (
                <li key={t}>
                  <b>✓</b>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          {s.hinweis ? (
            <div className="karte grau" data-reveal>
              <h3 style={{ marginBottom: 10 }}>{s.hinweis.titel}</h3>
              <p>{s.hinweis.text}</p>
            </div>
          ) : (
            <div className="karte grau" data-reveal>
              <h3 style={{ marginBottom: 10 }}>Festpreis vor dem Termin</h3>
              <p>
                Sie wissen vorher, was der Einsatz kostet. Der Preis richtet sich nach Befallsstärke, Objekt und
                Aufwand — wir nennen ihn Ihnen nach einer kurzen Einschätzung, bevor wir anfangen.
              </p>
            </div>
          )}
        </Reveal>
      </section>

      <section className="band grau">
        <div className="wrap" style={{ maxWidth: 860 }}>
          <Reveal selector="[data-reveal]" as="div">
            <div className="stack" style={{ gap: 12, marginBottom: 24 }} data-reveal>
              <span className="kicker">Häufige Fragen</span>
              <h2>Fragen zur {s.name}</h2>
            </div>
          </Reveal>
          <Reveal className="faq" selector="details" stagger={0.06} y={20}>
            {s.faq.map((f) => (
              <details key={f.frage}>
                <summary>{f.frage}</summary>
                <p>{f.antwort}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <Reveal selector="[data-reveal]" as="div">
            <div className="stack" style={{ gap: 16 }} data-reveal>
              <h3>Weitere Leistungen</h3>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {andere.map((a) => (
                  <Link key={a.slug} className="btn linie sm" href={`/dienstleistungen/${a.slug}`}>
                    {a.name.split(" und ")[0]}
                  </Link>
                ))}
                <Link className="btn linie sm" href="/haccp">
                  HACCP-Monitoring
                </Link>
              </div>
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
