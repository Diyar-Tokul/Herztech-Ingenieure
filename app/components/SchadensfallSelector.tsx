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
  accent: "navy" | "teal" | "amber" | "rose";
  pattern: "drop" | "wave" | "crack" | "tiles" | "splash" | "flame";
  icon: ReactNode;
};

const cases: Case[] = [
  {
    id: "feuchter-keller",
    title: "Feuchter Keller",
    short:
      "Nasse Wände, Salzausblühungen oder muffiger Geruch im Untergeschoss. Die Feuchte greift Bauteile und Wohnqualität an.",
    symptoms: [
      "Dunkle Flecken an Kellerwänden",
      "Salpeter und Ausblühungen",
      "Erhöhte Luftfeuchtigkeit",
    ],
    cta: "Innen oder Außen abdichten",
    href: "/leistungen/abdichtungssysteme",
    accent: "navy",
    pattern: "drop",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
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
    short:
      "Feuchtigkeit kriecht in den Wänden hoch, beschädigt Putz, Tapete und Substanz. Ohne Sperre breitet sich der Schaden weiter aus.",
    symptoms: [
      "Putzabplatzungen im Sockel",
      "Stockflecken an Innenwänden",
      "Salzkristalle an der Wandbasis",
    ],
    cta: "Horizontalsperre einplanen",
    href: "/leistungen/abdichtungssysteme",
    accent: "teal",
    pattern: "wave",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18" />
        <path d="M5 14c2-2 5-2 7 0s5 2 7 0" />
        <path d="M5 18c2-2 5-2 7 0s5 2 7 0" />
      </svg>
    ),
  },
  {
    id: "balkon-undicht",
    title: "Undichter Balkon",
    short:
      "Wasser dringt durch Bodenbelag, das Geländer rostet oder die Decke zeigt Flecken. Hier zählt jede Saison.",
    symptoms: [
      "Risse im Estrich oder Belag",
      "Wasserspuren an der Decke darunter",
      "Auswaschungen an Fugen",
    ],
    cta: "Balkonabdichtung kalkulieren",
    href: "/leistungen/balkonabdichtung",
    accent: "teal",
    pattern: "tiles",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h18" />
        <path d="M5 12V8h14v4" />
        <path d="M7 18v-6M12 18v-6M17 18v-6" />
      </svg>
    ),
  },
  {
    id: "garagenboden",
    title: "Garage oder Stellplatz",
    short:
      "Tausalz, Öl und Wasser greifen den Boden an. Risse und Abplatzungen bedrohen Beton und Bewehrung.",
    symptoms: [
      "Risse im Bodenbelag",
      "Eindringende Feuchtigkeit",
      "Rost an der Bewehrung",
    ],
    cta: "Garagenabdichtung anfragen",
    href: "/leistungen/garagenabdichtung",
    accent: "navy",
    pattern: "crack",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="8" rx="1" />
        <path d="M5 11V7l7-4 7 4v4" />
        <path d="M7 19v2M17 19v2" />
        <path d="M7 15h10" />
      </svg>
    ),
  },
  {
    id: "wasserschaden",
    title: "Akuter Wasserschaden",
    short:
      "Rohrbruch, Starkregen oder Rückstau. Jetzt zählt die richtige Reihenfolge aus Schadensaufnahme, Trocknung und Sanierung.",
    symptoms: [
      "Sichtbare Wasserspuren",
      "Aufgequollene Bauteile",
      "Schimmelverdacht",
    ],
    cta: "Schadensanalyse anfordern",
    href: "/leistungen/feuchtigkeit-und-sanierung",
    accent: "rose",
    pattern: "splash",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2s6 7 6 12a6 6 0 0 1-12 0c0-5 6-12 6-12Z" />
      </svg>
    ),
  },
  {
    id: "gasleitung",
    title: "Gasleitung prüfen",
    short:
      "Sicherheitsprüfung steht an oder Sie haben Geruchsverdacht. Wir prüfen nach DVGW und TRGI mit Protokoll.",
    symptoms: [
      "Anstehende DVGW Prüfung",
      "Geruchsverdacht oder Druckverlust",
      "Modernisierung der Hausanschluss Leitung",
    ],
    cta: "Gasleitungsprüfung buchen",
    href: "/leistungen/gasleitungspruefung",
    accent: "amber",
    pattern: "flame",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12h6l2-4 4 8 2-4h2" />
        <path d="M3 18h18" />
      </svg>
    ),
  },
];

/** Per accent, returns gradient + foreground class combos. */
function accentClasses(accent: Case["accent"], active: boolean) {
  const base = {
    navy: {
      bg: active
        ? "bg-linear-to-br from-navy-900 via-navy-800 to-navy-950"
        : "bg-linear-to-br from-navy-50 via-white to-navy-100/60",
      icon: active ? "bg-white/15 text-white" : "bg-navy-900 text-white",
      title: active ? "text-white" : "text-navy-900",
      sub: active ? "text-white/75" : "text-navy-700/75",
      glow: "from-navy-500/30 to-teal-400/20",
    },
    teal: {
      bg: active
        ? "bg-linear-to-br from-teal-600 via-teal-500 to-navy-800"
        : "bg-linear-to-br from-teal-50 via-white to-teal-100/60",
      icon: active ? "bg-white/20 text-white" : "bg-teal-500 text-white",
      title: active ? "text-white" : "text-navy-900",
      sub: active ? "text-white/80" : "text-navy-700/75",
      glow: "from-teal-400/40 to-navy-500/20",
    },
    amber: {
      bg: active
        ? "bg-linear-to-br from-amber-500 via-orange-500 to-navy-800"
        : "bg-linear-to-br from-amber-50 via-white to-amber-100/60",
      icon: active ? "bg-white/20 text-white" : "bg-amber-500 text-white",
      title: active ? "text-white" : "text-navy-900",
      sub: active ? "text-white/85" : "text-navy-700/75",
      glow: "from-amber-400/40 to-teal-400/20",
    },
    rose: {
      bg: active
        ? "bg-linear-to-br from-rose-500 via-rose-600 to-navy-900"
        : "bg-linear-to-br from-rose-50 via-white to-rose-100/60",
      icon: active ? "bg-white/20 text-white" : "bg-rose-500 text-white",
      title: active ? "text-white" : "text-navy-900",
      sub: active ? "text-white/85" : "text-navy-700/75",
      glow: "from-rose-400/40 to-navy-500/20",
    },
  };
  return base[accent];
}

function PatternLayer({ pattern }: { pattern: Case["pattern"] }) {
  switch (pattern) {
    case "drop":
      return (
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.22] mix-blend-overlay"
          viewBox="0 0 200 200"
          aria-hidden
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <circle
              key={i}
              cx={30 + i * 25}
              cy={50 + (i % 2) * 60}
              r="2"
              fill="currentColor"
              className="animate-[float-soft_5s_ease-in-out_infinite]"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
          <path
            d="M40 0v200M100 0v200M160 0v200"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="2 4"
          />
        </svg>
      );
    case "wave":
      return (
        <svg
          className="absolute inset-x-0 bottom-0 w-full opacity-30 mix-blend-overlay"
          viewBox="0 0 400 120"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0 60 Q 100 20 200 60 T 400 60 V120 H0 Z"
            fill="currentColor"
            opacity="0.4"
          >
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="M0 60 Q 100 20 200 60 T 400 60 V120 H0 Z;M0 60 Q 100 100 200 60 T 400 60 V120 H0 Z;M0 60 Q 100 20 200 60 T 400 60 V120 H0 Z"
            />
          </path>
          <path
            d="M0 80 Q 100 50 200 80 T 400 80 V120 H0 Z"
            fill="currentColor"
            opacity="0.25"
          >
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="M0 80 Q 100 50 200 80 T 400 80 V120 H0 Z;M0 80 Q 100 110 200 80 T 400 80 V120 H0 Z;M0 80 Q 100 50 200 80 T 400 80 V120 H0 Z"
            />
          </path>
        </svg>
      );
    case "crack":
      return (
        <svg
          className="absolute inset-0 h-full w-full opacity-30 mix-blend-overlay"
          viewBox="0 0 200 200"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0 80 L60 90 L80 70 L120 110 L160 95 L200 130"
            stroke="currentColor"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M40 200 L60 170 L50 130 L80 100 L70 60 L100 30"
            stroke="currentColor"
            strokeWidth="0.9"
            fill="none"
          />
          <path
            d="M120 200 L130 160 L160 140 L150 100"
            stroke="currentColor"
            strokeWidth="0.7"
            fill="none"
          />
        </svg>
      );
    case "tiles":
      return (
        <svg
          className="absolute inset-0 h-full w-full opacity-25 mix-blend-overlay"
          viewBox="0 0 200 200"
          aria-hidden
        >
          <defs>
            <pattern id="tilesp" width="30" height="30" patternUnits="userSpaceOnUse">
              <rect width="30" height="30" fill="none" stroke="currentColor" strokeWidth="0.8" />
              <rect x="15" y="15" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#tilesp)" />
        </svg>
      );
    case "splash":
      return (
        <svg
          className="absolute inset-0 h-full w-full opacity-30 mix-blend-overlay"
          viewBox="0 0 200 200"
          aria-hidden
        >
          {[
            { cx: 60, cy: 60, r: 24 },
            { cx: 130, cy: 90, r: 16 },
            { cx: 80, cy: 140, r: 12 },
          ].map((c, i) => (
            <circle
              key={i}
              cx={c.cx}
              cy={c.cy}
              r={c.r}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <animate
                attributeName="r"
                dur={`${3 + i}s`}
                repeatCount="indefinite"
                values={`${c.r};${c.r + 12};${c.r}`}
              />
              <animate
                attributeName="opacity"
                dur={`${3 + i}s`}
                repeatCount="indefinite"
                values="0.8;0.2;0.8"
              />
            </circle>
          ))}
        </svg>
      );
    case "flame":
      return (
        <svg
          className="absolute inset-0 h-full w-full opacity-35 mix-blend-overlay"
          viewBox="0 0 200 200"
          aria-hidden
        >
          <path
            d="M100 30 C 70 80, 70 130, 100 170 C 130 130, 130 80, 100 30 Z"
            fill="currentColor"
            opacity="0.35"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              additive="sum"
              dur="3s"
              repeatCount="indefinite"
              values="1 1;1.05 0.95;1 1"
            />
          </path>
        </svg>
      );
  }
}

export default function SchadensfallSelector() {
  const [active, setActive] = useState<string | null>(null);
  const activeCase = cases.find((c) => c.id === active) ?? null;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cases.map((c) => {
          const isActive = active === c.id;
          const cls = accentClasses(c.accent, isActive);
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => setActive(isActive ? null : c.id)}
              aria-expanded={isActive}
              aria-controls={`fall-${c.id}`}
              className={`group relative block overflow-hidden rounded-3xl text-left ring-1 transition-all duration-500 ${
                isActive
                  ? "ring-transparent shadow-[0_30px_60px_-20px_rgba(15,34,56,0.45)] -translate-y-1"
                  : "ring-navy-900/5 hover:ring-navy-900/10 hover:-translate-y-1"
              } ${cls.bg}`}
            >
              {/* Glow blob */}
              <div
                className={`pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full blur-3xl transition-opacity duration-500 bg-linear-to-br ${cls.glow} ${
                  isActive ? "opacity-90" : "opacity-50"
                }`}
              />

              {/* Pattern overlay (uses currentColor) */}
              <div
                className={`absolute inset-0 ${
                  isActive ? "text-white" : "text-navy-900"
                }`}
              >
                <PatternLayer pattern={c.pattern} />
              </div>

              <div className="relative flex h-full flex-col gap-6 p-6 sm:p-7">
                <div className="flex items-start justify-between">
                  <span
                    className={`grid h-14 w-14 place-items-center rounded-2xl backdrop-blur transition-all duration-500 ${cls.icon} ${
                      isActive ? "scale-110" : "group-hover:scale-105"
                    }`}
                  >
                    <span className="block h-7 w-7">{c.icon}</span>
                  </span>
                  <span
                    className={`grid h-10 w-10 place-items-center rounded-full backdrop-blur transition-all duration-500 ${
                      isActive
                        ? "rotate-45 bg-white text-navy-900"
                        : "bg-white/60 text-navy-900 ring-1 ring-navy-900/10 group-hover:bg-white"
                    }`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </span>
                </div>

                <div className="mt-auto">
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                      isActive ? "text-white/70" : "text-teal-700"
                    }`}
                  >
                    Schadensfall
                  </span>
                  <h3
                    className={`mt-2 text-2xl font-semibold tracking-tight transition-colors ${cls.title}`}
                  >
                    {c.title}
                  </h3>
                  <p
                    className={`mt-3 line-clamp-3 text-sm leading-relaxed transition-colors ${cls.sub}`}
                  >
                    {c.short}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Detail-Panel */}
      <div
        aria-live="polite"
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ${
          activeCase ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          {activeCase ? (
            <div
              id={`fall-${activeCase.id}`}
              className="overflow-hidden rounded-3xl bg-white p-6 ring-1 ring-navy-900/5 shadow-[0_30px_80px_-40px_rgba(15,34,56,0.35)] sm:p-8"
            >
              <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.4fr]">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-teal-700">
                    Ihr Anliegen
                  </span>
                  <h4 className="h-display mt-3 text-2xl text-navy-900 sm:text-3xl">
                    {activeCase.title}
                  </h4>
                  <p className="mt-4 text-sm leading-relaxed text-navy-700/80">
                    {activeCase.short}
                  </p>
                </div>

                <div className="rounded-2xl bg-sand-100 p-5 sm:p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-navy-700/70">
                    Typische Anzeichen
                  </p>
                  <ul className="mt-3 grid gap-2.5">
                    {activeCase.symptoms.map((s) => (
                      <li key={s} className="flex items-start gap-3 text-sm text-navy-800">
                        <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-teal-500 text-white">
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </span>
                        {s}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-col gap-3 border-t border-navy-200/50 pt-5 sm:flex-row">
                    <Link
                      href={activeCase.href}
                      className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-navy-900 px-6 text-sm font-semibold text-white transition-all hover:bg-navy-800"
                    >
                      {activeCase.cta}
                      <span
                        aria-hidden
                        className="grid h-7 w-7 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5"
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
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
          ) : null}
        </div>
      </div>
    </div>
  );
}
