# DMK — Die Münchner Kammerjäger

Marketing-Website für „DMK – Die Münchner Kammerjäger" (Schädlingsbekämpfung, Gräfelfing/München).
Statische Next.js-Site ohne Datenbank und ohne Login — Anfragen laufen über einen `mailto:`-Link.

## Voraussetzungen

- Node.js 22 (siehe `.nvmrc` — mit `nvm use` automatisch die richtige Version)
- npm

## Lokal starten

```bash
npm install     # Abhängigkeiten laden (einmalig, bzw. nach jedem git pull mit geänderter package.json)
npm run dev     # Entwicklungsserver auf http://localhost:3000
```

## Weitere Befehle

```bash
npm run build   # Produktions-Build — muss vor jedem Push fehlerfrei durchlaufen
npm run start   # Produktions-Build lokal ausführen
npm run lint    # Code-Prüfung
```

## Projektstruktur

| Ordner / Datei | Inhalt |
|---|---|
| `app/` | Die 8 Seiten der Website (App Router) |
| `components/` | Wiederverwendbare Bausteine (Header, Footer, Formular) |
| `components/anim/` | GSAP-Animationen (Hero-Intro, Scroll-Reveals, Parallax) |
| `lib/content.ts` | Zentrale Texte: Telefon, E-Mail, Leistungen |
| `lib/gsap.ts` | GSAP-Einrichtung inkl. Plugins |
| `public/` | Öffentliche Dateien (Logo) |
| `design-referenz/` | Ursprüngliche HTML-Designvorlage — nur Referenz, nicht Teil des Builds |
| `project_specs.md` | Fachliche Spezifikation |
| `CLAUDE.md` | Arbeitsregeln für KI-Assistenten |

## Seiten

`/` · `/dienstleistungen` · `/haccp` · `/einsatzorte` · `/kontakt` · `/ueber-uns` · `/impressum` · `/datenschutz`

## Deployment

Vercel. Es sind keine Umgebungsvariablen (`.env`) nötig — die Site ist vollständig statisch.

## Offene Punkte

- Fotos fehlen — die Bildflächen sind aktuell Platzhalter
- Impressum: Rechtsform und USt-IdNr. fehlen noch (Hinweisbox ist vorhanden)
- `sitemap.ts` und `robots.ts` fehlen (relevant für Google)
- Formular per `mailto:` funktioniert nicht bei Nutzern ohne eingerichtetes E-Mail-Programm
