"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
// Als Import statt als Pfad-Zeichenkette: nur so ergänzt Next.js den Unterordner
// der Vorschau-Adresse automatisch. Mit "/dmk-logo.png" bliebe das Bild dort leer.
import logo from "@/public/dmk-logo.png";
import { usePathname } from "next/navigation";
import { gsap, useGSAP } from "@/lib/gsap";
import { TELEFON, TELEFON_HREF } from "@/lib/content";

const links = [
  { href: "/", label: "Startseite" },
  { href: "/dienstleistungen", label: "Unsere Dienstleistungen" },
  { href: "/haccp", label: "HACCP" },
  { href: "/einsatzorte", label: "Unsere Einsatzorte" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/ueber-uns", label: "Über uns" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const header = headerRef.current;
    if (!header) return;
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });

  useGSAP(
    () => {
      const panel = panelRef.current;
      if (!panel) return;
      if (open) {
        gsap.timeline()
          .to(panel, { height: "auto", duration: 0.45, ease: "power3.out" })
          .from(
            panel.querySelectorAll("a"),
            { y: 14, autoAlpha: 0, duration: 0.35, stagger: 0.04, ease: "power2.out", clearProps: "all" },
            "-=0.25"
          );
      } else {
        gsap.to(panel, { height: 0, duration: 0.35, ease: "power3.inOut" });
      }
    },
    { dependencies: [open] }
  );

  const current = (href: string) =>
    (href === "/" ? pathname === "/" : pathname.startsWith(href)) ? "page" : undefined;

  return (
    <>
      <div className="nd">
        <div className="wrap">
          <span>
            <span className="puls" />
            24-Stunden-Notdienst — auch am Wochenende und an Feiertagen
          </span>
          <span>
            Direkt sprechen: <a href={TELEFON_HREF}>{TELEFON}</a>
          </span>
        </div>
      </div>
      <header className="top" ref={headerRef}>
        <div className="wrap">
          <Link href="/" className="logo" onClick={() => setOpen(false)}>
            <Image src={logo} alt="DMK – Die Münchner Kammerjäger" width={180} height={58} priority style={{ height: 58, width: "auto" }} />
          </Link>
          <nav className="navlinks">
            {links.map((l) => (
              <Link key={l.href} href={l.href} aria-current={current(l.href)}>
                {l.label}
              </Link>
            ))}
          </nav>
          <Link className="btn sm" href="/kontakt">
            Kostenlose Einschätzung
          </Link>
          <button
            className="burger"
            aria-expanded={open}
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className="mobilepanel" ref={panelRef}>
          <nav>
            {links.map((l) => (
              <Link key={l.href} href={l.href} aria-current={current(l.href)} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link className="btn" href="/kontakt" onClick={() => setOpen(false)}>
              Kostenlose Einschätzung
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
