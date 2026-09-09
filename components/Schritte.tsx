"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const schritte = [
  {
    titel: "Anruf oder Formular",
    text: "Sie beschreiben, was Sie beobachten. Wir schätzen ein, wie dringend es ist, und nennen den Preis.",
  },
  {
    titel: "Einsatz vor Ort",
    text: "Wir kommen kurzfristig, behandeln gezielt und dokumentieren, was gemacht wurde.",
  },
  {
    titel: "Nachkontrolle",
    text: "Wir prüfen nach, ob der Befall wirklich weg ist — und sichern Zugänge, damit er nicht zurückkommt.",
  },
];

/** Drei-Schritte-Ablauf: Verbindungslinie zeichnet sich, Nummern springen auf, Texte laufen nach. */
export default function Schritte() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: { trigger: el, start: "top 80%", once: true },
        });
        tl.from(el.querySelector(".verbindung"), { scaleX: 0, duration: 1.1, ease: "power2.inOut" }, 0)
          .from(
            el.querySelectorAll(".nr"),
            { scale: 0, autoAlpha: 0, duration: 0.6, stagger: 0.22, ease: "back.out(2)" },
            0.1
          )
          .from(
            el.querySelectorAll(".schritt h3, .schritt p"),
            { y: 22, autoAlpha: 0, duration: 0.6, stagger: 0.09 },
            0.35
          );
      });
    },
    { scope: ref }
  );

  return (
    <div className="schritte" ref={ref}>
      <div className="verbindung" aria-hidden="true" />
      {schritte.map((s, i) => (
        <div className="schritt" key={s.titel}>
          <div className="nr">{i + 1}</div>
          <h3>{s.titel}</h3>
          <p>{s.text}</p>
        </div>
      ))}
    </div>
  );
}
