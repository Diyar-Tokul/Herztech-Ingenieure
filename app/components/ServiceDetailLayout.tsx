import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import PageHeader from "./PageHeader";
import Reveal from "./Reveal";
import ImagePlaceholder from "./ImagePlaceholder";
import SectionTitle from "./SectionTitle";

export type DamageCase = {
  id: string;
  title: string;
  problem: string;
  solution: string;
};

export type ServiceItem = {
  title: string;
  body: string;
  bullets?: string[];
};

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  hero?: ReactNode;
  heroImage?: string;
  heroImageAlt?: string;
  damageCases: DamageCase[];
  services: ServiceItem[];
  process: { title: string; text: string }[];
  faq: { q: string; a: string }[];
  nextService: { href: string; label: string; intro: string };
};

export default function ServiceDetailLayout({
  eyebrow,
  title,
  intro,
  heroImage,
  heroImageAlt,
  damageCases,
  services,
  process,
  faq,
  nextService,
}: Props) {
  return (
    <>
      <PageHeader
        eyebrow={eyebrow}
        title={title}
        intro={intro}
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Leistungen", href: "/leistungen" },
          { label: eyebrow },
        ]}
      />

      {/* Hero image + quick KPIs */}
      <section className="container-x">
        <Reveal variant="scale">
          <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
            {heroImage ? (
              <div className="relative aspect-[16/7] overflow-hidden rounded-3xl ring-1 ring-navy-900/5">
                <Image
                  src={heroImage}
                  alt={heroImageAlt ?? ""}
                  fill
                  priority
                  sizes="(min-width: 1024px) 62vw, 100vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <ImagePlaceholder ratio="wide" rounded="3xl" />
            )}
            <div className="grid grid-cols-1 gap-3">
              {[
                { k: "DIN 18533", v: "Normgerecht ausgeführt" },
                { k: "5 Jahre", v: "Gewährleistung auf Ausführung" },
                { k: "Festpreis", v: "Klar kalkulierte Angebote" },
              ].map((kpi) => (
                <div
                  key={kpi.k}
                  className="flex items-center justify-between gap-4 rounded-2xl bg-sand-100 px-5 py-5 ring-1 ring-navy-900/5"
                >
                  <span className="text-sm text-navy-700/80">{kpi.v}</span>
                  <span className="text-lg font-semibold tracking-tight text-navy-900">
                    {kpi.k}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Schadensfälle */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionTitle
            eyebrow="Typische Schadensfälle"
            title="Erkennen Sie Ihr Problem wieder?"
            intro="Diese Fälle treffen wir in der Praxis am häufigsten an. Jede Konstellation braucht eine eigene Lösung, kein Standardrezept."
          />

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            {damageCases.map((c, i) => (
              <Reveal key={c.id} delay={i * 100}>
                <article className="lift group h-full overflow-hidden rounded-3xl bg-white ring-1 ring-navy-900/5">
                  <ImagePlaceholder ratio="video" rounded="md" className="rounded-none" />
                  <div className="p-7">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-600">
                      Schadensfall
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-navy-900">
                      {c.title}
                    </h3>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-navy-700/70">
                          Problem
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-navy-800">
                          {c.problem}
                        </p>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-navy-700/70">
                          Lösung
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-navy-800">
                          {c.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leistungen im Detail */}
      <section className="bg-navy-50/60 py-24 sm:py-32">
        <div className="container-x">
          <SectionTitle
            eyebrow="Leistungen im Detail"
            title="So setzen wir das um."
            intro="Jede Position ist eine konkrete Maßnahme mit klarem Ergebnis. Wir kombinieren das, was an Ihrem Objekt nötig ist."
          />

          <div className="mt-12 grid gap-4">
            {services.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <details className="group rounded-3xl bg-white p-6 ring-1 ring-navy-900/5 transition-all open:bg-white sm:p-7">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-600">
                        Leistung {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-2 text-lg font-semibold text-navy-900 sm:text-xl">
                        {item.title}
                      </h3>
                    </div>
                    <span
                      aria-hidden
                      className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy-50 text-navy-900 transition-all group-open:rotate-45 group-open:bg-navy-900 group-open:text-white"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <div className="mt-5 grid gap-5 sm:grid-cols-[1.4fr_1fr]">
                    <p className="text-sm leading-relaxed text-navy-800">
                      {item.body}
                    </p>
                    {item.bullets ? (
                      <ul className="grid gap-2.5 rounded-2xl bg-sand-100 p-5">
                        {item.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-navy-800">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionTitle
            eyebrow="Unser Ablauf"
            title="Strukturiert. Transparent. Sauber."
            intro="So sieht Ihr Projekt mit uns aus, vom ersten Anruf bis zur Abnahme."
          />

          <div className="relative mt-12">
            <div className="absolute left-6 top-2 bottom-2 hidden w-px bg-navy-100 sm:block" />
            <ol className="space-y-6">
              {process.map((p, i) => (
                <Reveal key={p.title} delay={i * 80}>
                  <li className="relative grid grid-cols-1 gap-5 rounded-3xl bg-white p-6 ring-1 ring-navy-900/5 sm:grid-cols-[80px_1fr] sm:p-7">
                    <div className="flex sm:flex-col sm:items-start">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy-900 text-base font-semibold text-white sm:relative sm:z-10">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy-900">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-navy-700/80">
                        {p.text}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-navy-50/60 py-24 sm:py-32">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionTitle
            eyebrow="Häufige Fragen"
            title={
              <>
                Antworten,
                <br />
                kurz und klar.
              </>
            }
            intro="Hier finden Sie das, was Kundinnen und Kunden uns am häufigsten fragen. Fehlt etwas? Schreiben Sie uns."
          />

          <Reveal delay={120}>
            <div className="space-y-3">
              {faq.map((f, i) => (
                <details
                  key={f.q}
                  className="group rounded-2xl bg-white p-5 ring-1 ring-navy-900/5"
                  open={i === 0}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-navy-900">
                    {f.q}
                    <span
                      aria-hidden
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy-50 transition-all group-open:rotate-45 group-open:bg-navy-900 group-open:text-white"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-navy-700/80">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA + Weiterleitung */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <Reveal variant="scale">
            <div className="overflow-hidden rounded-3xl bg-navy-950 p-8 text-white ring-1 ring-navy-900/5 sm:p-12">
              <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
                <div>
                  <p className="eyebrow text-teal-300">Bereit für den nächsten Schritt</p>
                  <h3 className="h-display mt-4 text-3xl sm:text-4xl">
                    Lassen Sie uns Ihr Objekt prüfen.
                  </h3>
                  <p className="mt-4 max-w-xl text-base text-white/75">
                    Schicken Sie uns Ihre Eckdaten und Fotos. Wir melden uns
                    mit einem Termin und einer ersten Einschätzung.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="/kontakt"
                      className="group inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-navy-900 transition-all hover:bg-teal-50"
                    >
                      Angebot anfragen
                      <span aria-hidden className="grid h-7 w-7 place-items-center rounded-full bg-navy-900 text-white transition-transform group-hover:translate-x-0.5">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="m13 6 6 6-6 6" />
                        </svg>
                      </span>
                    </Link>
                    <Link
                      href="/leistungen"
                      className="inline-flex h-12 items-center gap-2 rounded-full bg-white/10 px-6 text-sm font-semibold text-white ring-1 ring-white/25 backdrop-blur transition-colors hover:bg-white/15"
                    >
                      Alle Leistungen
                    </Link>
                  </div>
                </div>

                <Link
                  href={nextService.href}
                  className="lift group block rounded-2xl bg-white/5 p-6 ring-1 ring-white/15 transition-all hover:bg-white/10"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-300">
                    Weiter zur nächsten Leistung
                  </p>
                  <p className="mt-3 text-xl font-semibold tracking-tight">
                    {nextService.label}
                  </p>
                  <p className="mt-2 text-sm text-white/70">{nextService.intro}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                    Ansehen
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="m13 6 6 6-6 6" />
                      </svg>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
