"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";

// Gleiche Nummer wie der WhatsApp-Floating-Button (intl. Format ohne "+").
const WHATSAPP_NUMBER = "4917632029139";

type OptionId = string;

type Option = {
  id: OptionId;
  label: string;
  desc: string;
  icon: ReactNode;
};

type Step = {
  key: "bereich" | "schaden" | "lage";
  question: string;
  helper: string;
  options: Option[];
};

type Answers = {
  bereich?: OptionId;
  schaden?: OptionId;
  lage?: OptionId;
};

type Result = {
  service:
    | "mauertrockenlegung"
    | "abdichtungssysteme"
    | "balkonabdichtung"
    | "garagenabdichtung"
    | "feuchtigkeit-und-sanierung";
  eyebrow: string;
  title: string;
  text: string;
  bullets: string[];
  href: string;
};

const I = {
  basement: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21V8l9-5 9 5v13" />
      <path d="M3 21h18" />
      <path d="M9 21v-6h6v6" />
    </svg>
  ),
  wall: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="16" rx="1" />
      <path d="M3 9h18M3 14h18M8 4v5M16 9v5M11 14v6" />
    </svg>
  ),
  balcony: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12h18" />
      <path d="M5 12V8h14v4" />
      <path d="M7 18v-6M12 18v-6M17 18v-6" />
    </svg>
  ),
  garage: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="8" rx="1" />
      <path d="M5 11V7l7-4 7 4v4M7 15h10" />
    </svg>
  ),
  damp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18" />
      <path d="M5 14c2-2 5-2 7 0s5 2 7 0" />
      <path d="M5 18c2-2 5-2 7 0s5 2 7 0" />
    </svg>
  ),
  salt: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
    </svg>
  ),
  water: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2s6 7 6 12a6 6 0 0 1-12 0c0-5 6-12 6-12Z" />
    </svg>
  ),
  crack: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2 8 11h4l-3 11 8-13h-4l3-7Z" />
    </svg>
  ),
  mold: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
    </svg>
  ),
  question: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.8.4-1 .9-1 1.7M12 17h.01" />
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  ),
  trend: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17 9 11l4 4 8-8" />
      <path d="M14 7h7v7" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
};

const steps: Step[] = [
  {
    key: "bereich",
    question: "Wo tritt das Problem auf?",
    helper: "Wählen Sie den Bereich, der Sie betrifft.",
    options: [
      { id: "keller", label: "Keller / Innenwand", desc: "Feuchte Wände im Untergeschoss", icon: I.basement },
      { id: "aussen", label: "Außenwand / erdberührt", desc: "Erdberührtes Mauerwerk, Sockel", icon: I.wall },
      { id: "balkon", label: "Balkon / Terrasse", desc: "Belag, Anschlüsse, Geländer", icon: I.balcony },
      { id: "garage", label: "Garage / Bodenplatte", desc: "Beton, Stellplatz, Boden", icon: I.garage },
    ],
  },
  {
    key: "schaden",
    question: "Was beobachten Sie?",
    helper: "Das auffälligste Anzeichen genügt.",
    options: [
      { id: "feuchte", label: "Feuchte Wände", desc: "Aufsteigende Feuchtigkeit, Stockflecken", icon: I.damp },
      { id: "salz", label: "Salz & Putzschäden", desc: "Ausblühungen, abplatzender Putz", icon: I.salt },
      { id: "wasser", label: "Wasser dringt ein", desc: "Eindringendes oder stehendes Wasser", icon: I.water },
      { id: "risse", label: "Risse im Belag", desc: "Risse, undichte Fugen, Auswaschung", icon: I.crack },
      { id: "schimmel", label: "Schimmel / Geruch", desc: "Muffiger Geruch, Schimmelverdacht", icon: I.mold },
      { id: "unklar", label: "Noch unklar", desc: "Ich bin mir nicht sicher", icon: I.question },
    ],
  },
  {
    key: "lage",
    question: "Wie ist die Lage?",
    helper: "So schätzen wir die Dringlichkeit richtig ein.",
    options: [
      { id: "akut", label: "Akuter Wasserschaden", desc: "Es muss schnell gehen", icon: I.bolt },
      { id: "wachsend", label: "Wird zunehmend schlimmer", desc: "Der Schaden breitet sich aus", icon: I.trend },
      { id: "vorsorge", label: "Vorsorge / geplant", desc: "Sanierung in Ruhe planen", icon: I.shield },
    ],
  },
];

const results: Record<Result["service"], Omit<Result, "service">> = {
  mauertrockenlegung: {
    eyebrow: "Empfehlung",
    title: "Mauertrockenlegung",
    text: "Aufsteigende Feuchtigkeit und Salzausblühungen brauchen zuerst eine Sperre, nicht nur neue Optik. Wir stoppen die Ursache mit nachträglicher Horizontalsperre, Salzsperre und Sperrputz.",
    bullets: [
      "Feuchte- und Salzanalyse vor Ort",
      "Nachträgliche Horizontalsperre per Injektion",
      "Salzsperre und diffusionsoffener Sperrputz",
    ],
    href: "/leistungen/mauertrockenlegung",
  },
  abdichtungssysteme: {
    eyebrow: "Empfehlung",
    title: "Abdichtungssysteme",
    text: "Wo Wasser von außen oder seitlich eindringt, braucht es ein durchgängiges System. Wir wählen Innen-, Außen-, Sockel- oder Bodenabdichtung passend zum Wandaufbau – nach DIN 18533.",
    bullets: [
      "Innen- oder Außenabdichtung nach Lastfall",
      "Mineralische Dichtungsschlämme & Sperrputz",
      "Normgerecht nach DIN 18533",
    ],
    href: "/leistungen/abdichtungssysteme",
  },
  balkonabdichtung: {
    eyebrow: "Empfehlung",
    title: "Balkonabdichtung",
    text: "Risse im Belag und Wasserspuren an der Decke darunter warten nicht. Wir bauen eine belastbare Verbundabdichtung mit sauberen Anschlussdetails und neuem Belag ein.",
    bullets: [
      "Bestandsaufnahme und Untergrundsanierung",
      "Verbundabdichtung mit dichten Anschlüssen",
      "Wetter-, frost- und belastungssicher",
    ],
    href: "/leistungen/balkonabdichtung",
  },
  garagenabdichtung: {
    eyebrow: "Empfehlung",
    title: "Garagen- & Bodenabdichtung",
    text: "Risse, Tausalz und stehendes Wasser greifen Beton und Bewehrung an. Wir setzen abdichtende, mechanisch belastbare Bodensysteme mit dichtem Sockelanschluss ein.",
    bullets: [
      "Untergrundvorbereitung und Rissbehandlung",
      "Belastbare, abdichtende Beschichtung",
      "Dichter Sockel- und Wandanschluss",
    ],
    href: "/leistungen/garagenabdichtung",
  },
  "feuchtigkeit-und-sanierung": {
    eyebrow: "Empfehlung",
    title: "Feuchtigkeit & Sanierung",
    text: "Bei akutem Wasserschaden oder Schimmelverdacht zählt die richtige Reihenfolge: messen, Ursache finden, trocknen, sanieren. Wir liefern ein Konzept, das hält – auch in Abstimmung mit Ihrer Versicherung.",
    bullets: [
      "Feuchtigkeitsmessung und Schadensanalyse",
      "Technische Trocknung und Schimmelsanierung",
      "Sanierungskonzept mit Dokumentation",
    ],
    href: "/leistungen/feuchtigkeit-und-sanierung",
  },
};

function recommend(a: Required<Answers>): Result["service"] {
  // Bereich gibt die Hauptrichtung vor.
  if (a.bereich === "balkon") return "balkonabdichtung";
  if (a.bereich === "garage") return "garagenabdichtung";

  // Akuter Wasserschaden oder Schimmel: zuerst Schadensanalyse & Sanierung.
  if (a.lage === "akut" || a.schaden === "schimmel") return "feuchtigkeit-und-sanierung";

  // Keller / Innenwand
  if (a.bereich === "keller") {
    if (a.schaden === "feuchte" || a.schaden === "salz") return "mauertrockenlegung";
    return "abdichtungssysteme";
  }

  // Außenwand / erdberührt
  if (a.bereich === "aussen") {
    if (a.schaden === "feuchte" || a.schaden === "salz") return "mauertrockenlegung";
    return "abdichtungssysteme";
  }

  return "abdichtungssysteme";
}

function labelFor(step: Step["key"], id?: OptionId) {
  const s = steps.find((x) => x.key === step);
  return s?.options.find((o) => o.id === id)?.label ?? "";
}

export default function AbdichtungsKonfigurator() {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const isDone =
    answers.bereich != null && answers.schaden != null && answers.lage != null;

  const result = useMemo<Result | null>(() => {
    if (!isDone) return null;
    const service = recommend(answers as Required<Answers>);
    return { service, ...results[service] };
  }, [answers, isDone]);

  const current = steps[stepIndex];
  const progress = isDone ? 100 : (stepIndex / steps.length) * 100;

  function choose(id: OptionId) {
    const key = current.key;
    setAnswers((prev) => ({ ...prev, [key]: id }));
    if (stepIndex < steps.length - 1) {
      setStepIndex((i) => i + 1);
    }
  }

  function back() {
    if (stepIndex > 0) setStepIndex((i) => i - 1);
  }

  function restart() {
    setAnswers({});
    setStepIndex(0);
  }

  const waText = useMemo(() => {
    if (!result) return "";
    const lines = [
      "Hallo Drycon Core, ich habe den Abdichtungskonfigurator genutzt:",
      `• Bereich: ${labelFor("bereich", answers.bereich)}`,
      `• Schadensbild: ${labelFor("schaden", answers.schaden)}`,
      `• Lage: ${labelFor("lage", answers.lage)}`,
      `• Empfehlung: ${result.title}`,
      "Ich hätte gern eine Einschätzung und ein Angebot.",
    ];
    return lines.join("\n");
  }, [result, answers]);

  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;

  return (
    <div className="overflow-hidden rounded-3xl bg-white ring-1 ring-navy-900/5 shadow-[0_40px_100px_-50px_rgba(15,34,56,0.5)]">
      {/* Kopf mit Fortschritt */}
      <div className="border-b border-navy-100 bg-navy-50/50 px-6 py-5 sm:px-8">
        <div className="flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-teal-700">
            Abdichtungskonfigurator
          </span>
          <span className="text-xs font-semibold text-navy-700/70">
            {isDone ? "Fertig" : `Schritt ${stepIndex + 1} von ${steps.length}`}
          </span>
        </div>
        <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-navy-100">
          <div
            className="h-full rounded-full bg-linear-to-r from-teal-500 to-navy-700 transition-[width] duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {!result ? (
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="h-display text-2xl text-navy-900 sm:text-3xl">
                  {current.question}
                </h3>
                <p className="mt-2 text-sm text-navy-700/75">{current.helper}</p>
              </div>
              {stepIndex > 0 ? (
                <button
                  type="button"
                  onClick={back}
                  className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-full bg-navy-50 px-4 text-xs font-semibold text-navy-800 transition-colors hover:bg-navy-100"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  Zurück
                </button>
              ) : null}
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {current.options.map((o) => {
                const selected = answers[current.key] === o.id;
                return (
                  <button
                    key={o.id}
                    type="button"
                    onClick={() => choose(o.id)}
                    className={`group flex items-center gap-4 rounded-2xl border p-4 text-left transition-all hover:-translate-y-0.5 ${
                      selected
                        ? "border-teal-500 bg-teal-50/60 ring-1 ring-teal-500"
                        : "border-navy-100 bg-white hover:border-navy-200 hover:bg-navy-50/40"
                    }`}
                  >
                    <span
                      className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl transition-colors ${
                        selected
                          ? "bg-teal-500 text-white"
                          : "bg-navy-50 text-navy-800 group-hover:bg-navy-900 group-hover:text-white"
                      }`}
                    >
                      <span className="block h-6 w-6">{o.icon}</span>
                    </span>
                    <span className="min-w-0">
                      <span className="block text-base font-semibold text-navy-900">
                        {o.label}
                      </span>
                      <span className="mt-0.5 block text-xs text-navy-700/70">
                        {o.desc}
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className="ml-auto grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy-50 text-navy-400 transition-all group-hover:bg-navy-900 group-hover:text-white"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="m13 6 6 6-6 6" />
                      </svg>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div>
            {/* Ergebnis */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                labelFor("bereich", answers.bereich),
                labelFor("schaden", answers.schaden),
                labelFor("lage", answers.lage),
              ].map((l) => (
                <span
                  key={l}
                  className="inline-flex items-center gap-1.5 rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-800"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                  {l}
                </span>
              ))}
            </div>

            <div className="mt-6 grid items-start gap-8 lg:grid-cols-[1.3fr_1fr]">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-teal-700">
                  {result.eyebrow}
                </span>
                <h3 className="h-display mt-2 text-3xl text-navy-900 sm:text-4xl">
                  {result.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-navy-700/85 sm:text-base">
                  {result.text}
                </p>

                <ul className="mt-6 grid gap-2.5">
                  {result.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-navy-800">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-teal-500 text-white">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>

                <Link
                  href={result.href}
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 underline-offset-4 hover:underline"
                >
                  Mehr zur Leistung
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </Link>
              </div>

              {/* CTA-Box */}
              <div className="rounded-2xl bg-navy-900 p-6 text-white">
                <p className="text-base font-semibold">Nächster Schritt</p>
                <p className="mt-2 text-sm text-white/75">
                  Wir prüfen Ihr Anliegen kostenfrei und melden uns mit einer
                  fachlichen Einschätzung und einem Festpreisangebot.
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <Link
                    href="/kontakt"
                    className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-navy-900 transition-all hover:bg-teal-50"
                  >
                    Kostenloses Angebot anfragen
                    <span aria-hidden className="grid h-7 w-7 place-items-center rounded-full bg-navy-900 text-white transition-transform group-hover:translate-x-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="m13 6 6 6-6 6" />
                      </svg>
                    </span>
                  </Link>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#1ebe5d]"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.898 9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
                    </svg>
                    Per WhatsApp senden
                  </a>
                  <button
                    type="button"
                    onClick={restart}
                    className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full text-xs font-semibold text-white/70 transition-colors hover:text-white"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
                      <path d="M3 3v5h5" />
                    </svg>
                    Neu starten
                  </button>
                </div>
                <p className="mt-4 text-center text-[11px] text-white/50">
                  Unverbindlich · kostenfrei · in der Regel Antwort am selben Tag
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
