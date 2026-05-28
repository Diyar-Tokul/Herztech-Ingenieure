"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";

type Case = {
  id: string;
  title: string;
  short: string;
  symptoms: string[];
  cta: string;
  href: string;
  icon: ReactNode;
};

const cases: Case[] = [
  {
    id: "feuchter-keller",
    title: "Feuchter Keller",
    short: "Nasse Wände, salzige Ausblühungen oder muffiger Geruch im Untergeschoss.",
    symptoms: [
      "Dunkle Flecken an Kellerwänden",
      "Salpeter und Ausblühungen",
      "Erhöhte Luftfeuchtigkeit",
    ],
    cta: "Innen- oder Außenabdichtung prüfen",
    href: "/leistungen/abdichtungssysteme",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21V8l9-5 9 5v13" />
        <path d="M3 21h18" />
        <path d="M9 21v-6h6v6" />
        <path d="M7 12h.01M11 12h.01M15 12h.01" />
      </svg>
    ),
  },
  {
    id: "aufsteigende-feuchte",
    title: "Aufsteigende Feuchte",
    short: "Feuchtigkeit kriecht in den Wänden hoch und beschädigt Putz und Tapete.",
    symptoms: [
      "Putzabplatzungen im Sockelbereich",
      "Stockflecken an Innenwänden",
      "Salzkristalle entlang der Wandbasis",
    ],
    cta: "Horizontalsperre einplanen",
    href: "/leistungen/abdichtungssysteme",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20" />
        <path d="M5 14c2-2 5-2 7 0s5 2 7 0" />
        <path d="M5 18c2-2 5-2 7 0s5 2 7 0" />
      </svg>
    ),
  },
  {
    id: "balkon-undicht",
    title: "Undichter Balkon",
    short: "Wasser dringt durch Bodenbelag, Geländer rostet oder Decke zeigt Flecken.",
    symptoms: [
      "Risse im Estrich oder Belag",
      "Wasserspuren an der Decke darunter",
      "Auswaschungen an Fugen",
    ],
    cta: "Balkonabdichtung kalkulieren",
    href: "/leistungen/balkonabdichtung",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h18" />
        <path d="M5 12V8h14v4" />
        <path d="M7 18v-6" />
        <path d="M12 18v-6" />
        <path d="M17 18v-6" />
      </svg>
    ),
  },
  {
    id: "garagenboden",
    title: "Garage oder Stellplatz",
    short: "Tausalz, Öl und Wasser greifen den Boden an und führen zu Schäden.",
    symptoms: [
      "Risse und Abplatzungen im Bodenbelag",
      "Eindringende Feuchtigkeit",
      "Rost an Bewehrung",
    ],
    cta: "Garagenabdichtung anfragen",
    href: "/leistungen/balkon-und-garage",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="8" rx="1" />
        <path d="M5 11V7l7-4 7 4v4" />
        <path d="M7 19v2M17 19v2" />
        <path d="M7 15h10" />
      </svg>
    ),
  },
  {
    id: "wasserschaden",
    title: "Wasserschaden",
    short: "Akute Durchfeuchtung durch Rohrbruch, Starkregen oder Rückstau.",
    symptoms: [
      "Sichtbare Wasserspuren",
      "Aufgequollene Bauteile",
      "Schimmelverdacht",
    ],
    cta: "Schadensanalyse anfordern",
    href: "/leistungen/feuchtigkeit-und-sanierung",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2s6 7 6 12a6 6 0 0 1-12 0c0-5 6-12 6-12Z" />
      </svg>
    ),
  },
  {
    id: "gasleitung",
    title: "Gasleitung prüfen",
    short: "Sicherheitsprüfung oder Sanierung von Gas-Hausinstallationen.",
    symptoms: [
      "Anstehende DVGW-Prüfung",
      "Geruchsverdacht oder Druckverlust",
      "Modernisierung der Hausanschluss-Leitung",
    ],
    cta: "Gasleitungsprüfung buchen",
    href: "/leistungen/gasleitung",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12h6l2-4 4 8 2-4h2" />
        <path d="M3 18h18" />
      </svg>
    ),
  },
];

export default function SchadensfallSelector() {
  const [active, setActive] = useState<string>(cases[0].id);
  const current = cases.find((c) => c.id === active) ?? cases[0];

  return (
    <div className="overflow-hidden rounded-3xl bg-white ring-1 ring-navy-900/5 shadow-[0_30px_80px_-40px_rgba(15,34,56,0.35)]">
      <div className="grid lg:grid-cols-[1.05fr_1fr]">
        <div className="border-b border-navy-100 p-5 sm:p-7 lg:border-b-0 lg:border-r">
          <p className="eyebrow">Schadensfall finden</p>
          <h3 className="h-display mt-3 text-2xl text-navy-900 sm:text-3xl">
            Welches Problem haben Sie?
          </h3>
          <p className="mt-3 max-w-md text-sm text-navy-700/80">
            Wählen Sie Ihren Schadensfall. Wir zeigen Ihnen sofort, welche
            Leistung passt und wie der nächste Schritt aussieht.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {cases.map((c) => {
              const isActive = c.id === active;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActive(c.id)}
                  className={`group relative flex items-start gap-3 rounded-2xl p-4 text-left transition-all duration-300 ${
                    isActive
                      ? "bg-navy-900 text-white shadow-[0_18px_40px_-22px_rgba(15,34,56,0.55)]"
                      : "bg-sand-50 text-navy-900 hover:bg-navy-50"
                  }`}
                >
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-colors ${
                      isActive
                        ? "bg-teal-500 text-white"
                        : "bg-white text-teal-600 ring-1 ring-navy-900/10"
                    }`}
                  >
                    <span className="block h-5 w-5">{c.icon}</span>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold leading-tight">
                      {c.title}
                    </span>
                    <span
                      className={`mt-1 block text-[12px] leading-snug ${
                        isActive ? "text-white/70" : "text-navy-700/70"
                      }`}
                    >
                      {c.short}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative bg-linear-to-br from-navy-50 via-white to-teal-50/40 p-5 sm:p-8">
          <div
            key={current.id}
            className="reveal-scale is-visible flex h-full flex-col"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy-900 text-white">
                <span className="block h-6 w-6">{current.icon}</span>
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-600">
                  Ihr Schadensfall
                </p>
                <p className="text-lg font-semibold text-navy-900">
                  {current.title}
                </p>
              </div>
            </div>

            <p className="mt-5 text-[15px] leading-relaxed text-navy-800">
              {current.short}
            </p>

            <div className="mt-6 rounded-2xl bg-white p-5 ring-1 ring-navy-900/5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-700/70">
                Typische Anzeichen
              </p>
              <ul className="mt-3 space-y-2.5">
                {current.symptoms.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-navy-800">
                    <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-teal-500 text-white">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row sm:items-center">
              <Link
                href={current.href}
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-navy-900 px-6 text-sm font-semibold text-white transition-all hover:bg-navy-800"
              >
                {current.cta}
                <span aria-hidden className="grid h-7 w-7 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-navy-900 ring-1 ring-navy-900/10 transition-colors hover:bg-navy-50"
              >
                Beratung anfragen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
