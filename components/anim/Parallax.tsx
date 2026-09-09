"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

/** Subtiler Parallax-Effekt für Bildflächen: der Inhalt gleitet beim Scrollen sanft mit. */
export default function Parallax({
  children,
  className,
  amount = 8,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const inner = el.firstElementChild;
      if (!inner) return;

      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          inner,
          { yPercent: -amount },
          {
            yPercent: amount,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.6 },
          }
        );
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className} style={{ overflow: "hidden" }}>
      <div style={{ height: "100%", width: "100%", scale: "1.18", willChange: "transform" }}>
        {children}
      </div>
    </div>
  );
}
