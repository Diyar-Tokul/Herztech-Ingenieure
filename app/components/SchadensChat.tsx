"use client";

import { useEffect, useRef, useState } from "react";
import { fragen } from "./schadenschat/fragen";
import { auswerten, type Answers, type Auswertung } from "./schadenschat/analyse";

type Phase = "intro" | "fragen" | "auswertung" | "kontakt" | "fertig";

type Bubble = { from: "bot" | "user"; text: string };

const WHATSAPP_NUMBER = "4917632029139";

export default function SchadensChat() {
  const [open, setOpen] = useState(false);
  const [phase, setPhase] = useState<Phase>("intro");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [multiSel, setMultiSel] = useState<string[]>([]);
  const [textVal, setTextVal] = useState("");
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [ergebnis, setErgebnis] = useState<Auswertung | null>(null);
  const [kontakt, setKontakt] = useState({ name: "", tel: "", mail: "", termin: "" });

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [bubbles, phase, step, multiSel]);

  function pushBot(text: string) {
    setBubbles((b) => [...b, { from: "bot", text }]);
  }
  function pushUser(text: string) {
    setBubbles((b) => [...b, { from: "user", text }]);
  }

  function start() {
    setPhase("fragen");
    setStep(0);
    setBubbles([{ from: "bot", text: fragen[0].frage }]);
  }

  function next(value: string | string[], display: string) {
    const f = fragen[step];
    const updated = { ...answers, [f.key]: value };
    setAnswers(updated);
    pushUser(display);
    setMultiSel([]);
    setTextVal("");

    if (step + 1 < fragen.length) {
      const ns = step + 1;
      setStep(ns);
      setTimeout(() => pushBot(fragen[ns].frage), 350);
    } else {
      // Auswertung
      const a = auswerten(updated);
      setErgebnis(a);
      setPhase("auswertung");
      setTimeout(() => {
        pushBot(
          `Vermutliche Ursache: ${a.ursache} (ca. ${a.wahrscheinlichkeit} % Wahrscheinlichkeit).`
        );
        setTimeout(() => pushBot(a.hinweis), 500);
        setTimeout(
          () => pushBot(`Empfohlene Lösung: ${a.loesungen.join(", ")}.`),
          1000
        );
      }, 400);
    }
  }

  function reset() {
    setPhase("intro");
    setStep(0);
    setAnswers({});
    setMultiSel([]);
    setTextVal("");
    setBubbles([]);
    setErgebnis(null);
    setKontakt({ name: "", tel: "", mail: "", termin: "" });
  }

  function absenden() {
    pushUser(
      `${kontakt.name || "—"} · ${kontakt.tel || "—"} · ${kontakt.mail || "—"}${
        kontakt.termin ? ` · Wunschtermin: ${kontakt.termin}` : ""
      }`
    );
    setPhase("fertig");
    setTimeout(
      () =>
        pushBot(
          "Vielen Dank! Wir haben Ihre Angaben erhalten und melden uns schnellstmöglich bei Ihnen für eine kostenlose Vor-Ort-Besichtigung."
        ),
      350
    );
  }

  const f = fragen[step];

  return (
    <>
      {/* Floating Button – über dem WhatsApp-Button gestapelt */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Digitalen Bauingenieur öffnen"
        aria-expanded={open}
        className="floating-action group fixed bottom-20 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-navy-900 px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-12px_rgba(15,34,56,0.6)] ring-1 ring-white/10 transition-all hover:bg-navy-800 sm:bottom-24 sm:right-7"
      >
        <span className="relative grid h-6 w-6 place-items-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M12 8V4H8" />
            <rect x="4" y="8" width="16" height="12" rx="2" />
            <path d="M2 14h2M20 14h2M15 13v2M9 13v2" />
          </svg>
          <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-teal-400" />
        </span>
        <span className="hidden sm:inline">Schadens-Check</span>
      </button>

      {/* Panel */}
      <div
        className={`fixed bottom-5 right-3 z-50 flex w-[min(24rem,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-3xl bg-white shadow-[0_40px_90px_-30px_rgba(15,34,56,0.55)] ring-1 ring-navy-900/10 transition-all duration-300 sm:bottom-7 sm:right-7 ${
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
        style={{ maxHeight: "min(40rem, calc(100vh - 2rem))" }}
        role="dialog"
        aria-label="Digitaler Bauingenieur"
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-3 bg-navy-900 px-5 py-4 text-white">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-teal-500">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M12 8V4H8" />
                <rect x="4" y="8" width="16" height="12" rx="2" />
                <path d="M2 14h2M20 14h2M15 13v2M9 13v2" />
              </svg>
            </span>
            <div>
              <p className="text-sm font-semibold leading-tight">Digitaler Bauingenieur</p>
              <p className="text-[11px] text-white/60">Drycon Core · Schadensanalyse</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Schließen"
            className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Verlauf */}
        <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-navy-50/40 px-4 py-4">
          {phase === "intro" && (
            <div className="space-y-3">
              <Bubble from="bot">
                Hallo 👋 Ich bin der digitale Bauingenieur von Drycon Core.
              </Bubble>
              <Bubble from="bot">
                Ich helfe Ihnen, die Ursache Ihrer Feuchtigkeit einzugrenzen. Die
                Analyse dauert nur 2–3 Minuten. Am Ende erhalten Sie eine erste
                technische Einschätzung.
              </Bubble>
            </div>
          )}

          {bubbles.map((b, i) => (
            <Bubble key={i} from={b.from}>
              {b.text}
            </Bubble>
          ))}

          {phase === "fertig" && (
            <div className="mt-2 flex flex-wrap gap-2">
              <a
                href="/kontakt"
                className="inline-flex h-9 items-center gap-2 rounded-full bg-navy-900 px-4 text-xs font-semibold text-white hover:bg-navy-800"
              >
                Zum Kontaktformular
              </a>
              <button
                type="button"
                onClick={reset}
                className="inline-flex h-9 items-center gap-2 rounded-full bg-white px-4 text-xs font-semibold text-navy-900 ring-1 ring-navy-900/10 hover:bg-navy-50"
              >
                Neue Analyse
              </button>
            </div>
          )}
        </div>

        {/* Eingabebereich */}
        <div className="border-t border-navy-900/8 bg-white px-4 py-4">
          {phase === "intro" && (
            <button
              type="button"
              onClick={start}
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-navy-900 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
            >
              Analyse starten
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </button>
          )}

          {phase === "fragen" && f && (
            <>
              {(f.type === "single" || f.type === "multi") && (
                <>
                  <div className="flex max-h-44 flex-wrap gap-2 overflow-y-auto">
                    {f.optionen!.map((opt) => {
                      const selected = multiSel.includes(opt);
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() =>
                            f.type === "single"
                              ? next(opt, opt)
                              : setMultiSel((s) =>
                                  s.includes(opt) ? s.filter((x) => x !== opt) : [...s, opt]
                                )
                          }
                          className={`rounded-full px-3.5 py-2 text-xs font-medium ring-1 transition-colors ${
                            selected
                              ? "bg-teal-500 text-white ring-teal-500"
                              : "bg-navy-50 text-navy-800 ring-navy-900/8 hover:bg-navy-100"
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  {f.type === "multi" && (
                    <button
                      type="button"
                      disabled={multiSel.length === 0}
                      onClick={() => next(multiSel, multiSel.join(", "))}
                      className="mt-3 inline-flex h-10 w-full items-center justify-center rounded-full bg-navy-900 text-sm font-semibold text-white transition-colors hover:bg-navy-800 disabled:opacity-40"
                    >
                      Weiter ({multiSel.length})
                    </button>
                  )}
                </>
              )}

              {f.type === "text" && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (textVal.trim()) next(textVal.trim(), textVal.trim());
                  }}
                  className="flex gap-2"
                >
                  <input
                    value={textVal}
                    onChange={(e) => setTextVal(e.target.value)}
                    placeholder={f.placeholder}
                    className="h-11 flex-1 rounded-full bg-navy-50 px-4 text-sm text-navy-900 ring-1 ring-navy-900/8 outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <button
                    type="submit"
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy-900 text-white hover:bg-navy-800"
                    aria-label="Senden"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </button>
                </form>
              )}

              <p className="mt-3 text-center text-[11px] text-navy-500">
                Frage {step + 1} von {fragen.length}
              </p>
            </>
          )}

          {phase === "auswertung" && (
            <div className="space-y-2">
              <p className="text-[11px] leading-relaxed text-navy-500">
                Diese Einschätzung dient der ersten Orientierung. Eine endgültige
                Bewertung erfolgt nach einer kostenlosen Vor-Ort-Besichtigung.
              </p>
              <button
                type="button"
                onClick={() => {
                  setPhase("kontakt");
                  pushBot(
                    "Möchten Sie eine kostenlose Vor-Ort-Besichtigung? Hinterlassen Sie uns Ihre Kontaktdaten."
                  );
                }}
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-navy-900 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
              >
                Kostenlose Besichtigung anfragen
              </button>
              <button
                type="button"
                onClick={reset}
                className="inline-flex h-9 w-full items-center justify-center rounded-full bg-white text-xs font-semibold text-navy-700 ring-1 ring-navy-900/10 hover:bg-navy-50"
              >
                Neue Analyse
              </button>
            </div>
          )}

          {phase === "kontakt" && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                absenden();
              }}
              className="space-y-2"
            >
              <input
                required
                value={kontakt.name}
                onChange={(e) => setKontakt((k) => ({ ...k, name: e.target.value }))}
                placeholder="Name"
                className="h-10 w-full rounded-xl bg-navy-50 px-3 text-sm text-navy-900 ring-1 ring-navy-900/8 outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                required
                type="tel"
                value={kontakt.tel}
                onChange={(e) => setKontakt((k) => ({ ...k, tel: e.target.value }))}
                placeholder="Telefonnummer"
                className="h-10 w-full rounded-xl bg-navy-50 px-3 text-sm text-navy-900 ring-1 ring-navy-900/8 outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="email"
                value={kontakt.mail}
                onChange={(e) => setKontakt((k) => ({ ...k, mail: e.target.value }))}
                placeholder="E-Mail-Adresse"
                className="h-10 w-full rounded-xl bg-navy-50 px-3 text-sm text-navy-900 ring-1 ring-navy-900/8 outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                value={kontakt.termin}
                onChange={(e) => setKontakt((k) => ({ ...k, termin: e.target.value }))}
                placeholder="Wunschtermin (optional)"
                className="h-10 w-full rounded-xl bg-navy-50 px-3 text-sm text-navy-900 ring-1 ring-navy-900/8 outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                type="submit"
                className="inline-flex h-11 w-full items-center justify-center rounded-full bg-teal-500 text-sm font-semibold text-white transition-colors hover:bg-teal-400"
              >
                Absenden
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

function Bubble({ from, children }: { from: "bot" | "user"; children: React.ReactNode }) {
  const isBot = from === "bot";
  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
          isBot
            ? "rounded-tl-sm bg-white text-navy-800 ring-1 ring-navy-900/8"
            : "rounded-tr-sm bg-navy-900 text-white"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
