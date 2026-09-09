"use client";

import Link from "next/link";
import type { FormEvent } from "react";
import { EMAIL, leistungsOptionen } from "@/lib/content";

/** Baut aus den Formularfeldern eine mailto-Anfrage und öffnet das E-Mail-Programm. */
export default function AnfrageForm() {
  function absenden(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const zeilen: string[] = [];
    for (const el of Array.from(form.elements)) {
      const feld = el as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
      if (feld.name && feld.value) zeilen.push(`${feld.name}: ${feld.value}`);
    }
    const leistung = (form.elements.namedItem("Leistung") as HTMLSelectElement | null)?.value ?? "";
    const betreff = `Anfrage Schädlingsbekämpfung — ${leistung}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(betreff)}&body=${encodeURIComponent(zeilen.join("\n"))}`;
  }

  return (
    <>
      <form className="form" onSubmit={absenden}>
        <label>
          Vorname*
          <input name="Vorname" required placeholder="Ihr Vorname" />
        </label>
        <label>
          Nachname*
          <input name="Nachname" required placeholder="Ihr Nachname" />
        </label>
        <label>
          Telefon*
          <input name="Telefon" required placeholder="Für den Rückruf" />
        </label>
        <label>
          E-Mail*
          <input name="E-Mail" type="email" required placeholder="name@beispiel.de" />
        </label>
        <label>
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
        <label>
          Wunschtermin
          <input name="Wunschtermin" type="date" />
        </label>
        <label>
          Adresse / PLZ*
          <input name="Adresse" required placeholder="Straße, PLZ, Ort" />
        </label>
        <label>
          Objektart*
          <select name="Objektart" required>
            <option>Privathaushalt</option>
            <option>Gewerbe / Industrie</option>
            <option>Gastronomie / Lebensmittel</option>
            <option>Hausverwaltung</option>
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
        <button className="btn span2" type="submit" style={{ marginTop: 4 }}>
          Anfrage absenden
        </button>
      </form>
      <p style={{ marginTop: 10, fontSize: 12, lineHeight: "16px", color: "#868685" }}>
        Mit dem Absenden öffnet sich Ihr E-Mail-Programm mit der vorbereiteten Anfrage. Ihre Daten werden
        ausschließlich zur Bearbeitung verwendet — siehe <Link href="/datenschutz">Datenschutzerklärung</Link>.
      </p>
    </>
  );
}
