"use client";

import { useRef, type ReactNode, type ElementType } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** CSS-Selektor für die zu animierenden Kinder; ohne Angabe werden [data-reveal]-Elemente oder das Element selbst animiert */
  selector?: string;
  y?: number;
  x?: number;
  stagger?: number;
  duration?: number;
  start?: string;
};

export default function Reveal({
  children,
  className,
  as: Tag = "div",
  selector,
  y = 36,
  x = 0,
  stagger = 0.08,
  duration = 0.9,
  start = "top 84%",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const found = selector
        ? el.querySelectorAll(selector)
        : el.querySelectorAll("[data-reveal]");
      const targets: Element[] = found.length ? Array.from(found) : [el];

      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(targets, {
          y,
          x,
          autoAlpha: 0,
          duration,
          ease: "power3.out",
          stagger,
          clearProps: "transform",
          scrollTrigger: { trigger: el, start, once: true },
        });
      });
    },
    { scope: ref as React.RefObject<HTMLElement> }
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
