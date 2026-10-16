"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { EMAIL, leistungsOptionen } from "@/lib/content";

const STUFEN = ["Problem", "Objekt & Termin", "Kontakt"];
const MAX_FOTOS = 5;

/** Dreistufiges Anfrageformular. Beim Absenden wird daraus eine mailto-Anfrage gebaut. */
export default function AnfrageForm() {
  const [schritt, setSchritt] = useState(1);
  const [fotos, setFotos] = useState<string[]>([]);
  const [fotoHinweis, setFotoHinweis] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const letzter = STUFEN.length;

  /** Prüft die Pflichtfelder des aktuellen Schritts, bevor es weitergeht. */
  function weiter() {
    const feld = formRef.current?.querySelectorAll<HTMLFieldSetElement>(".schritt-feld")[schritt - 1];
    const elemente = feld?.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
      "input, select, textarea",
    );
    for (const el of Array.from(elemente ?? [])) {
      if (!el.reportValidity()) return;
    }
    setSchritt((s) => Math.min(s + 1, letzter));
  }

  function fotosWaehlen(e: ChangeEvent<HTMLInputElement>) {
    const dateien = Array.from(e.target.files ?? []);
    if (dateien.length > MAX_FOTOS) {
      e.target.value = "";
      setFotos([]);
      setFotoHinweis(`Bitte höchstens ${MAX_FOTOS} Bilder auswählen.`);
      return;
    }
    setFotoHinweis("");
    setFotos(dateien.map((d) => d.name));
  }

  function absenden(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Enter-Taste in Schritt 1 oder 2 darf das Formular nicht vorzeitig absenden.
    if (schritt < letzter) {
      weiter();
      return;
    }
    const form = e.currentTarget;
    const zeilen: string[] = [];
    for (const el of Array.from(form.elements)) {
      const feld = el as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
      if (feld.name && feld.value) zeilen.push(`${feld.name}: ${feld.value}`);
    }
    // Per mailto lassen sich keine Dateien anhängen — die Namen stehen im Text als Erinnerung.
    if (fotos.length > 0) zeilen.push(`Fotos (bitte dieser E-Mail anhängen): ${fotos.join(", ")}`);
    const leistung = (form.elements.namedItem("Leistung") as HTMLSelectElement | null)?.value ?? "";
    const betreff = `Anfrage Schädlingsbekämpfung — ${leistung}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(betreff)}&body=${encodeURIComponent(zeilen.join("\n"))}`;
  }

  const rest = letzter - schritt;

  return (
    <>
      <div className="stufen" aria-label={`Schritt ${schritt} von ${letzter}`}>
        {STUFEN.map((name, i) => {
          const nr = i + 1;
          const klasse = nr === schritt ? " aktiv" : nr < schritt ? " erledigt" : "";
          return (
            <div key={name} className={`stufe${klasse}`} aria-current={nr === schritt ? "step" : undefined}>
              <span className="punkt">
                <span className="nummer">{nr}</span>
                <span className="haken">✓</span>
              </span>
              <span className="stufe-txt">{name}</span>
            </div>
          );
        })}
      </div>

      <form ref={formRef} className="form wizard" onSubmit={absenden}>
        <fieldset className="schritt-feld" hidden={schritt !== 1} disabled={schritt !== 1}>
          <div className="schritt-kopf">
            <b>Worum geht es?</b>
            <span>Drei kurze Schritte — in unter einer Minute erledigt.</span>
          </div>
          <label className="span2">
            Schädling / Leistung*
            <select name="Leistung" required defaultValue="">
              <option value="" disabled>
                Bitte wählen
              </option>
              {leistungsOptionen.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
          <label className="span2">
            Was beobachten Sie?
            <textarea
              name="Beschreibung"
              rows={3}
              placeholder="Seit wann, in welchem Raum, wie viele Tiere? Je genauer, desto besser können wir einschätzen."
            />
          </label>
          <div className="span2 foto-feld">
            <span className="foto-titel">
              Fotos hinzufügen <em>optional</em>
            </span>
            <label className="datei">
              <span className="datei-btn">Fotos auswählen</span>
              <span className="datei-info">
                {fotos.length > 0
                  ? `${fotos.length} ${fotos.length === 1 ? "Bild" : "Bilder"} ausgewählt — bitte in der E-Mail anhängen.`
                  : `JPG oder PNG, max. ${MAX_FOTOS} Bilder.`}
              </span>
              <input type="file" accept="image/jpeg,image/png" multiple onChange={fotosWaehlen} />
            </label>
            {fotoHinweis && <span className="foto-fehler">{fotoHinweis}</span>}
          </div>
        </fieldset>

        <fieldset className="schritt-feld" hidden={schritt !== 2} disabled={schritt !== 2}>
          <div className="schritt-kopf">
            <b>Wo sollen wir hin?</b>
            <span>Fast geschafft — danach fehlt nur noch ein Schritt.</span>
          </div>
          <label>
            Objektart*
            <select name="Objektart" required>
              <option>Privathaushalt</option>
              <option>Gewerbe / Industrie</option>
              <option>Gastronomie / Lebensmittel</option>
              <option>Hausverwaltung</option>
            </select>
          </label>
          <label>
            Wunschtermin
            <input name="Wunschtermin" type="date" />
          </label>
          <label className="span2">
            Adresse / PLZ*
            <input name="Adresse" required placeholder="Straße, PLZ, Ort" />
          </label>
        </fieldset>

        <fieldset className="schritt-feld" hidden={schritt !== 3} disabled={schritt !== 3}>
          <div className="schritt-kopf">
            <b>Wohin dürfen wir antworten?</b>
            <span>Letzter Schritt — dann sind Sie fertig.</span>
          </div>
          <label>
            Vorname*
            <input name="Vorname" required placeholder="Ihr Vorname" />
          </label>
          <label>
            Nachname*
            <input name="Nachname" required placeholder="Ihr Nachname" />
          </label>
          <label className="span2">
            Firma
            <input name="Firma" placeholder="Nur bei Gewerbe oder Hausverwaltung" />
          </label>
          <label>
            Telefon*
            <input name="Telefon" required placeholder="Für den Rückruf" />
          </label>
          <label>
            E-Mail*
            <input name="E-Mail" type="email" required placeholder="name@beispiel.de" />
          </label>
        </fieldset>

        <div className="wizard-nav">
          {schritt > 1 && (
            <button className="btn linie" type="button" onClick={() => setSchritt((s) => s - 1)}>
              Zurück
            </button>
          )}
          {schritt < letzter ? (
            <button className="btn" type="button" onClick={weiter}>
              Weiter
            </button>
          ) : (
            <button className="btn" type="submit">
              Anfrage absenden
            </button>
          )}
          <span className="rest">
            {rest === 0 ? "Letzter Schritt" : `Noch ${rest} ${rest === 1 ? "Schritt" : "Schritte"}`}
          </span>
        </div>
      </form>
      <p style={{ marginTop: 10, fontSize: 12, lineHeight: "16px", color: "#868685" }}>
        Mit dem Absenden öffnet sich Ihr E-Mail-Programm mit der vorbereiteten Anfrage. Ihre Daten werden
        ausschließlich zur Bearbeitung verwendet — siehe <Link href="/datenschutz">Datenschutzerklärung</Link>.
      </p>
    </>
  );
}
