import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import AbdichtungsKonfigurator from "../components/AbdichtungsKonfigurator";

export const metadata: Metadata = {
  title: "Abdichtungskonfigurator",
  description:
    "In drei Schritten zur passenden Abdichtungslösung: Bereich und Schadensbild wählen und sofort eine fachliche Empfehlung von Drycon Core erhalten – Mauertrockenlegung, Kellerabdichtung, Balkon, Garage oder Sanierung.",
};

const advantages = [
  {
    title: "In 3 Klicks zur Empfehlung",
    text: "Keine langen Formulare. Bereich, Schadensbild, Lage – fertig.",
  },
  {
    title: "Ingenieurgeführte Einschätzung",
    text: "Die Empfehlung folgt der Logik, mit der wir auch vor Ort vorgehen.",
  },
  {
    title: "Unverbindlich & kostenfrei",
    text: "Sie entscheiden, ob Sie ein Angebot anfragen. Ganz ohne Druck.",
  },
];

export default function KonfiguratorPage() {
  return (
    <>
      <PageHeader
        eyebrow="Abdichtungskonfigurator"
        title={
          <>
            Welche Abdichtung
            <br />
            <span className="text-gradient">passt zu Ihrem Schaden?</span>
          </>
        }
        intro="Beantworten Sie drei kurze Fragen und Sie erhalten sofort eine fachliche Empfehlung – inklusive direktem Weg zu Angebot oder WhatsApp. Schneller als jedes Kontaktformular."
        crumbs={[{ label: "Start", href: "/" }, { label: "Konfigurator" }]}
      />

      <section className="container-x pb-12">
        <Reveal>
          <AbdichtungsKonfigurator />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {advantages.map((a, i) => (
            <Reveal key={a.title} delay={i * 80}>
              <div className="h-full rounded-2xl bg-white p-6 ring-1 ring-navy-900/5">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-teal-500 text-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <p className="mt-4 text-base font-semibold text-navy-900">{a.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-navy-700/80">{a.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-navy-700/70">
          Hinweis: Die Empfehlung ist eine erste Orientierung auf Basis Ihrer
          Angaben und ersetzt keine Untersuchung vor Ort. Die genaue Lösung
          legen wir nach einer Feuchtigkeitsmessung und Schadensanalyse fest.
        </p>
      </section>
    </>
  );
}
