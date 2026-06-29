import Link from "next/link";

type Props = {
  /** Optionaler abweichender Einleitungstext, z. B. pro Leistung. */
  text?: string;
  className?: string;
};

export default function KonfiguratorCTA({ text, className = "" }: Props) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl bg-linear-to-br from-navy-900 via-navy-800 to-navy-950 p-7 text-white ring-1 ring-navy-900/5 sm:p-9 ${className}`}
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full bg-teal-400/20 blur-3xl" />
      <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-teal-200 ring-1 ring-white/15">
            Abdichtungskonfigurator
          </span>
          <h3 className="h-display mt-4 text-2xl text-white sm:text-3xl">
            Nicht sicher, welche Lösung passt?
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
            {text ??
              "Beantworten Sie drei kurze Fragen und Sie erhalten sofort eine fachliche Empfehlung – mit direktem Weg zu Angebot oder WhatsApp."}
          </p>
        </div>
        <Link
          href="/konfigurator"
          className="group inline-flex h-13 shrink-0 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-navy-900 transition-all hover:bg-teal-50"
        >
          Konfigurator starten
          <span aria-hidden className="grid h-7 w-7 place-items-center rounded-full bg-navy-900 text-white transition-transform group-hover:translate-x-0.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
}
