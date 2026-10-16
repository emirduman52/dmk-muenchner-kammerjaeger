import { TELEFON, TELEFON_HREF, WHATSAPP_HREF, RUECKRUF_HREF } from "@/lib/content";

/** Auffälliger Streifen für akuten Befall: Anruf, WhatsApp oder Rückruf-Bitte. */
export default function NotdienstBand() {
  return (
    <section className="notdienst" aria-label="Akuter Befall">
      <div className="wrap">
        <div className="notdienst-text">
          <strong>Akuter Befall? Wir helfen schnell.</strong>
          <p>Meist am selben Tag vor Ort — Mo – Fr 08:00 – 20:00 Uhr, am Wochenende im Notdienst-Einsatz.</p>
        </div>
        <div className="notdienst-aktionen">
          <a className="btn" href={TELEFON_HREF}>
            Anrufen: {TELEFON}
          </a>
          <a className="btn linie" href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
            WhatsApp schreiben
          </a>
          <a className="btn linie" href={RUECKRUF_HREF}>
            Rückruf anfordern
          </a>
        </div>
      </div>
    </section>
  );
}
