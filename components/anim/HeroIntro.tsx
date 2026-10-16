"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP, SplitText } from "@/lib/gsap";

/**
 * Einmalige Eröffnungssequenz für Hero-/Kopfbereiche.
 * Erwartet Kinder mit data-hero="kicker" | "lead" | "cta" | "trust" | "card"
 * sowie eine h1, deren Wörter per SplitText maskiert einlaufen.
 */
export default function HeroIntro({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        const q = gsap.utils.selector(el);
        const h1 = q("h1");
        const kicker = q('[data-hero="kicker"]');
        const lead = q('[data-hero="lead"]');
        const cta = q('[data-hero="cta"] > *');
        const trust = q('[data-hero="trust"] > div');
        const card = q('[data-hero="card"]');
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        if (kicker.length) {
          tl.from(kicker, { y: 22, autoAlpha: 0, duration: 0.55 }, 0.05);
        }

        if (h1.length) {
          // SplitText nennt die Maske "<wordsClass>-mask" → ".wort-mask" gibt ihr Luft für
          // Unterlängen und Umlaute (siehe globals.css). Nach der Animation wird die Maske
          // komplett entfernt, damit nichts abgeschnitten bleibt.
          const split = SplitText.create(h1, { type: "words", mask: "words", wordsClass: "wort" });
          tl.from(
            split.words,
            {
              yPercent: 115,
              duration: 0.85,
              stagger: 0.05,
              ease: "power4.out",
              onComplete: () => split.revert(),
            },
            0.15
          );
        }

        if (lead.length) {
          tl.from(lead, { y: 26, autoAlpha: 0, duration: 0.7 }, 0.5);
        }

        if (cta.length) {
          tl.from(cta, { y: 18, autoAlpha: 0, duration: 0.5, stagger: 0.09 }, 0.65);
        }

        if (trust.length) {
          tl.from(trust, { y: 16, autoAlpha: 0, duration: 0.5, stagger: 0.07 }, 0.85);
        }

        if (card.length) {
          tl.from(card, { y: 44, autoAlpha: 0, duration: 1, ease: "power4.out" }, 0.4);
        }
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
