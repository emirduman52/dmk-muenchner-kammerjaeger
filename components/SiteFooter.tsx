import Link from "next/link";
import Image from "next/image";
import { TELEFON, TELEFON_HREF, EMAIL } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer className="fuss">
      <div className="wrap">
        <div className="spalten">
          <div>
            <Image src="/dmk-logo.png" alt="DMK – Die Münchner Kammerjäger" width={200} height={64} style={{ height: 64, width: "auto" }} />
            <p style={{ marginTop: 16, maxWidth: "34ch" }}>
              Professionelle Schädlingsbekämpfung für Privathaushalte, Gewerbe und Hausverwaltungen in München und Umgebung.
            </p>
          </div>
          <div>
            <h4>Seiten</h4>
            <Link href="/">Startseite</Link>
            <Link href="/dienstleistungen">Unsere Dienstleistungen</Link>
            <Link href="/haccp">HACCP</Link>
            <Link href="/einsatzorte">Unsere Einsatzorte</Link>
            <Link href="/kontakt">Kontakt</Link>
            <Link href="/ueber-uns">Über uns</Link>
          </div>
          <div>
            <h4>Rechtliches</h4>
            <Link href="/datenschutz">Datenschutzerklärung</Link>
            <Link href="/impressum">Impressum</Link>
          </div>
          <div>
            <h4>Kontakt</h4>
            <a href={TELEFON_HREF}>{TELEFON}</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <p style={{ marginTop: 8 }}>
              DMK – Die Münchner Kammerjäger
              <br />
              Lochhammer Schlag 12
              <br />
              82166 Gräfelfing
            </p>
            <p style={{ marginTop: 8 }}>
              Mo – Fr 08:00 – 20:00 Uhr
              <br />
              Sa – So Notdienst-Einsatz
            </p>
          </div>
        </div>
        <div className="unten">
          <span>© 2026 DMK – Die Münchner Kammerjäger. Alle Rechte vorbehalten.</span>
          <span>Inhaber: Selcuk Kirci</span>
        </div>
      </div>
    </footer>
  );
}
