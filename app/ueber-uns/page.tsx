import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import ImagePlaceholder from "../components/ImagePlaceholder";
import SectionTitle from "../components/SectionTitle";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "HERZTEC Ingenieure ist ein Meisterbetrieb für Bauwerks- und Gasleitungsabdichtung. Geführt von Mohammed Herz und Irfan Tokul.",
};

const values = [
  {
    t: "Ehrlich kalkulieren",
    d: "Wir nennen Preise, die wir auch halten. Wer mehr verspricht als er liefern kann, baut Vertrauen ab.",
  },
  {
    t: "Sauber arbeiten",
    d: "Saubere Baustelle, saubere Übergänge, saubere Doku. Qualität zeigt sich in den Details, die niemand sehen sollte.",
  },
  {
    t: "Verlässlich da sein",
    d: "Termin ist Termin. Anrufe werden zurückgerufen. Auch nach der Abnahme bleiben wir erreichbar.",
  },
  {
    t: "Klar erklären",
    d: "Sie sollen verstehen, was wir tun. Wir reden mit Ihnen, nicht über Ihren Kopf hinweg.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Über uns"
        title={
          <>
            Ingenieurwissen mit
            <br />
            <span className="text-gradient">handwerklicher Haltung.</span>
          </>
        }
        intro="HERZTEC Ingenieure ist ein Meisterbetrieb für Bauwerksabdichtung und Gasleitungstechnik. Wir verbinden Planung, Diagnose und Ausführung in einer Hand."
        crumbs={[{ label: "Start", href: "/" }, { label: "Über uns" }]}
      />

      {/* Geschäftsführer */}
      <section className="container-x pb-24">
        <SectionTitle
          eyebrow="Geschäftsführung"
          title="Zwei Köpfe, ein Anspruch."
          intro="Mohammed Herz und Irfan Tokul stehen mit ihrem Namen für das Ergebnis. Sie führen das Unternehmen gemeinsam und sind in jedes Projekt eingebunden."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            {
              name: "Mohammed Herz",
              role: "Geschäftsführer",
              text:
                "Verantwortet die technische Planung und Bauleitung. Sieht jede Maßnahme zuerst aus der Sicht des Bauteils und entscheidet auf dieser Basis über System und Aufbau.",
            },
            {
              name: "Irfan Tokul",
              role: "Geschäftsführer",
              text:
                "Verantwortet Strategie, Kommunikation und Kundenbetreuung. Sorgt dafür, dass Anfragen schnell beantwortet werden und Projekte sauber organisiert sind.",
            },
          ].map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <article className="lift overflow-hidden rounded-3xl bg-white ring-1 ring-navy-900/5">
                <ImagePlaceholder ratio="square" rounded="md" className="rounded-none" />
                <div className="p-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-600">
                    {p.role}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-navy-900">{p.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-700/80">{p.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Werte */}
      <section className="bg-navy-50/60 py-24 sm:py-32">
        <div className="container-x">
          <SectionTitle
            eyebrow="Unsere Haltung"
            title={
              <>
                Vier Prinzipien,
                <br />
                die unser Arbeiten prägen.
              </>
            }
            intro="So entscheiden wir im Alltag. Diese Prinzipien sind kein Wandschmuck, sondern Grundlage jeder Entscheidung auf der Baustelle und im Büro."
          />

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 80}>
                <div className="lift h-full rounded-3xl bg-white p-6 ring-1 ring-navy-900/5">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-teal-500 text-white">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="mt-5 text-base font-semibold text-navy-900">{v.t}</p>
                  <p className="mt-2 text-sm leading-relaxed text-navy-700/80">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Meisterbetrieb */}
      <section className="py-24 sm:py-32">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionTitle
              eyebrow="Meisterbetrieb"
              title={
                <>
                  Geprüfte Qualifikation,
                  <br />
                  <span className="text-gradient">dokumentierte Qualität.</span>
                </>
              }
              intro="Unser Meistertitel ist mehr als ein Stück Papier. Er steht für die Qualifikation, mit der jede Maßnahme bei uns geplant und überwacht wird."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-navy-50 px-4 py-2 text-xs font-semibold text-navy-800">
                DIN 18533 konform
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-navy-50 px-4 py-2 text-xs font-semibold text-navy-800">
                DVGW-Regelwerk
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-navy-50 px-4 py-2 text-xs font-semibold text-navy-800">
                TRGI
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-navy-50 px-4 py-2 text-xs font-semibold text-navy-800">
                WTA-orientiert
              </span>
            </div>

            <a
              href="/dokumente/meisterschein.pdf"
              target="_blank"
              className="group mt-8 inline-flex h-12 items-center gap-3 rounded-full bg-navy-900 px-5 text-sm font-semibold text-white transition-all hover:bg-navy-800"
            >
              Meisterschein als PDF ansehen
              <span aria-hidden className="grid h-7 w-7 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </span>
            </a>
          </Reveal>

          <Reveal variant="scale" delay={150}>
            <div className="relative">
              <ImagePlaceholder ratio="portrait" rounded="3xl" />
              <div className="absolute -top-5 -right-5 hidden rounded-2xl bg-white p-4 shadow-[0_30px_60px_-30px_rgba(15,34,56,0.4)] ring-1 ring-navy-900/5 sm:block">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-600">
                  Eingetragen
                </p>
                <p className="mt-1 text-sm font-semibold text-navy-900">
                  Handwerksrolle
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container-x">
          <Reveal variant="scale">
            <div className="grid items-center gap-8 rounded-3xl bg-linear-to-br from-navy-50 via-white to-teal-50/60 p-8 ring-1 ring-navy-900/5 sm:p-12 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <h3 className="h-display text-3xl text-navy-900 sm:text-4xl">
                  Lernen Sie uns am Objekt kennen.
                </h3>
                <p className="mt-4 max-w-xl text-base text-navy-700/80">
                  Wir kommen vorbei, sehen uns Ihr Anliegen an und sagen, was
                  zu tun ist. Ehrlich und ohne Verkaufsdruck.
                </p>
              </div>
              <Link
                href="/kontakt"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-navy-900 px-6 text-sm font-semibold text-white transition-all hover:bg-navy-800"
              >
                Termin vereinbaren
                <span aria-hidden className="grid h-7 w-7 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
