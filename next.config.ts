import type { NextConfig } from "next";

/**
 * Für die Kundenvorschau auf GitHub Pages wird die Seite als reine HTML-Dateien
 * exportiert und liegt dort in einem Unterordner (/dmk-muenchner-kammerjaeger).
 * Diese Sonderfälle greifen nur, wenn GITHUB_PAGES=true gesetzt ist — also
 * ausschließlich im Vorschau-Build. Lokal (`npm run dev`, `npm run build`) und
 * bei einem späteren echten Hosting bleibt alles unverändert.
 */
const istVorschau = process.env.GITHUB_PAGES === "true";
const repoName = "dmk-muenchner-kammerjaeger";

const nextConfig: NextConfig = istVorschau
  ? {
      output: "export",
      basePath: `/${repoName}`,
      // GitHub Pages hat keine Bildoptimierung — Bilder werden unverändert ausgeliefert.
      images: { unoptimized: true },
      trailingSlash: true,
    }
  : {};

export default nextConfig;
