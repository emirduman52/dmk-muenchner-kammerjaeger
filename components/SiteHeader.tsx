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

type NavLink = { href: string; label: string; kinder?: { href: string; label: string }[] };

const links: NavLink[] = [
  { href: "/", label: "Startseite" },
  { href: "/dienstleistungen", label: "Unsere Dienstleistungen" },
  {
    href: "/branchen",
    label: "Branchen",
    kinder: [
      { href: "/branchen/hausverwaltungen", label: "Hausverwaltungen" },
      { href: "/branchen/gastronomie-hotellerie", label: "Gastronomie & Hotellerie" },
      { href: "/branchen/gewerbe-industrie", label: "Gewerbe & Industrie" },
      { href: "/haccp", label: "HACCP für Lebensmittelbetriebe" },
    ],
  },
  { href: "/einsatzorte", label: "Unsere Einsatzorte" },
  { href: "/downloads", label: "Downloads" },
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
  // Ein Menüpunkt mit Unterpunkten gilt auch als aktiv, wenn einer seiner Unterpunkte offen ist.
  const aktiv = (l: NavLink) =>
    current(l.href) || l.kinder?.some((k) => current(k.href)) ? ("page" as const) : undefined;

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
            {links.map((l) =>
              l.kinder ? (
                <div className="menue" key={l.href}>
                  <Link href={l.href} aria-current={aktiv(l)}>
                    {l.label}
                  </Link>
                  <div className="untermenue">
                    {l.kinder.map((k) => (
                      <Link key={k.href} href={k.href} aria-current={current(k.href)}>
                        {k.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={l.href} href={l.href} aria-current={current(l.href)}>
                  {l.label}
                </Link>
              ),
            )}
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
              <div key={l.href} style={{ display: "contents" }}>
                <Link href={l.href} aria-current={aktiv(l)} onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
                {l.kinder?.map((k) => (
                  <Link
                    key={k.href}
                    className="unterpunkt"
                    href={k.href}
                    aria-current={current(k.href)}
                    onClick={() => setOpen(false)}
                  >
                    {k.label}
                  </Link>
                ))}
              </div>
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
