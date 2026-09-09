"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

/** Sanfter Übergang bei jedem Seitenwechsel. */
export default function Template({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(ref.current, { autoAlpha: 0, y: 14, duration: 0.55, ease: "power2.out", clearProps: "all" });
      });
    },
    { scope: ref }
  );

  return <div ref={ref}>{children}</div>;
}
