# Project Specs — DMK Die Münchner Kammerjäger

## Was die App macht und wer sie nutzt
Marketing-Website für „DMK – Die Münchner Kammerjäger" (Schädlingsbekämpfung, Inhaber Selcuk Kirci, Gräfelfing/München). Besucher (Privathaushalte, Gastronomie, Gewerbe, Hausverwaltungen) informieren sich über Leistungen und senden eine Anfrage per Formular (mailto) oder rufen direkt an.

Das Design wurde bereits mit Claude Design als statische HTML-Seiten erstellt (Backup: `../website-design-original/`). Diese Umsetzung überträgt das Design 1:1 nach Next.js und ergänzt hochwertige GSAP-Animationen.

## Tech-Stack
- **Framework:** Next.js (App Router, TypeScript)
- **Styling:** Tailwind CSS (v4) + wenige globale Komponentenklassen für Formular/Rechtstexte
- **Animationen:** GSAP (`gsap`, `@gsap/react`) — ScrollTrigger, SplitText, Timelines
- **Backend/Auth/DB:** keins — reine statische Marketing-Site; Formulare senden per `mailto:`
- **Deployment:** Vercel

## Seiten (alle öffentlich, kein Login)
| Route | Inhalt |
|---|---|
| `/` | Hero mit Anfrageformular, Vertrauensleiste, Über-uns-Teaser, 8 Leistungen, 3 Schritte, HACCP-Teaser, Einsatzorte, CTA |
| `/dienstleistungen` | Alle 12 Leistungen, vier Zusagen, CTA |
| `/haccp` | HACCP-Konzept, Zielbranchen, Leistungsumfang, Dokumentation, Vorteile, CTA |
| `/einsatzorte` | Regionen, Reaktionszeiten, Zielgruppen, CTA |
| `/kontakt` | Anfrageformular, Kontaktdaten, Geschäftszeiten |
| `/ueber-uns` | Inhaber, Arbeitsweise, Geschäftszeiten, CTA |
| `/impressum` | Angaben des Kunden + Hinweis auf fehlende Pflichtangaben |
| `/datenschutz` | Text des Kunden, wörtlich übernommen |

## Datenmodelle / Speicherung
Keine Datenbank. Formulardaten werden nur clientseitig zu einem `mailto:`-Link an `info@diemuenchnerkammerjaeger.de` zusammengesetzt.

## Drittanbieter-Dienste
Keine (kein Supabase, kein Stripe). Fonts über `next/font` (Manrope, Inter) — selbst gehostet, kein externer Request zur Laufzeit.

## Animationen (GSAP)
- Hero: Timeline beim Laden — Headline-Wörter per SplitText, Lead/Buttons/Formularkarte gestaffelt
- ScrollTrigger-Reveals auf allen Sektionen (Karten, Listen, Chips gestaffelt)
- „Drei Schritte": Nummern-Kreise mit Back-Easing, Verbindungslinie zeichnet sich
- Subtiler Parallax auf Bildflächen, sanfte Hover-States
- `prefers-reduced-motion` wird respektiert (Animationen aus)

## Definition of Done
- `npm run build` läuft ohne Fehler
- Alle 8 Seiten erreichbar, Inhalte identisch zum Claude-Design-Stand
- Navigation, mailto-Formulare, Telefon-Links funktionieren
- Animationen laufen flüssig, keine Console-Errors
- Responsive (Mobile-Navigation vorhanden)

## Offen (wie im Design-Stand)
- Fotos fehlen — Bildflächen sind Platzhalter
- Impressum: Rechtsform, USt-IdNr. etc. fehlen (Hinweisbox vorhanden)
