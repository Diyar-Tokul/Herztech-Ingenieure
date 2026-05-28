"use client";

import { useState } from "react";

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  multiline?: boolean;
  placeholder?: string;
};

function Field({ label, name, type = "text", required, multiline, placeholder }: FieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-navy-700/80">
        {label}
        {required ? <span className="text-teal-600"> *</span> : null}
      </span>
      {multiline ? (
        <textarea
          name={name}
          required={required}
          rows={5}
          placeholder={placeholder}
          className="w-full resize-none rounded-2xl border-0 bg-white px-4 py-3 text-sm text-navy-900 ring-1 ring-navy-900/10 outline-none transition-all placeholder:text-navy-700/40 focus:ring-2 focus:ring-teal-500"
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className="h-12 w-full rounded-2xl border-0 bg-white px-4 text-sm text-navy-900 ring-1 ring-navy-900/10 outline-none transition-all placeholder:text-navy-700/40 focus:ring-2 focus:ring-teal-500"
        />
      )}
    </label>
  );
}

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required placeholder="Vor- und Nachname" />
        <Field label="Telefon" name="phone" type="tel" placeholder="Optional" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="E-Mail" name="email" type="email" required placeholder="name@beispiel.de" />
        <label className="block">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-navy-700/80">
            Anliegen
          </span>
          <select
            name="topic"
            defaultValue=""
            className="h-12 w-full rounded-2xl border-0 bg-white px-4 text-sm text-navy-900 ring-1 ring-navy-900/10 outline-none transition-all focus:ring-2 focus:ring-teal-500"
          >
            <option value="" disabled>
              Bitte wählen
            </option>
            <option>Kellerabdichtung</option>
            <option>Horizontalsperre</option>
            <option>Balkonabdichtung</option>
            <option>Garagenabdichtung</option>
            <option>Feuchtigkeitsschaden</option>
            <option>Gasleitungsprüfung</option>
            <option>Sonstiges</option>
          </select>
        </label>
      </div>
      <Field
        label="Nachricht"
        name="message"
        multiline
        required
        placeholder="Beschreiben Sie kurz, was wir uns ansehen sollen."
      />

      <label className="flex items-start gap-3 text-xs text-navy-700/80">
        <input
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-navy-900/20 text-teal-600 focus:ring-teal-500"
        />
        <span>
          Ich habe die Datenschutzhinweise zur Kenntnis genommen und stimme der
          Verarbeitung meiner Daten zur Bearbeitung der Anfrage zu.
        </span>
      </label>

      <div className="mt-2 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="group inline-flex h-12 items-center gap-2 rounded-full bg-navy-900 px-6 text-sm font-semibold text-white transition-all hover:bg-navy-800"
        >
          {sent ? "Vielen Dank, wir melden uns" : "Anfrage absenden"}
          <span aria-hidden className="grid h-7 w-7 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </span>
        </button>
        <p className="text-xs text-navy-700/70">
          Antwort innerhalb von 24 Stunden, werktags meist deutlich schneller.
        </p>
      </div>
    </form>
  );
}
