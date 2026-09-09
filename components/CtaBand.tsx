import Link from "next/link";
import Reveal from "@/components/anim/Reveal";
import { TELEFON, TELEFON_HREF } from "@/lib/content";

type CtaBandProps = {
  titel: string;
  text: string;
  primaerLabel?: string;
  sekundaerLabel: string;
  sekundaerHref: string;
  grau?: boolean;
};

export default function CtaBand({
  titel,
  text,
  primaerLabel = TELEFON,
  sekundaerLabel,
  sekundaerHref,
  grau = false,
}: CtaBandProps) {
  return (
    <section className={grau ? "band grau" : "band"}>
      <div className="wrap">
        <Reveal className="cta" y={48} stagger={0.12}>
          <div className="stack" style={{ gap: 12 }} data-reveal>
            <h2>{titel}</h2>
            <p className="lead" style={{ color: "#d8d8d4", maxWidth: "54ch" }}>
              {text}
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }} data-reveal>
            <a className="btn" href={TELEFON_HREF}>
              {primaerLabel}
            </a>
            <Link className="btn dunkel" href={sekundaerHref}>
              {sekundaerLabel}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
