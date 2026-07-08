import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";
import UrkundeModal from "../components/UrkundeModal";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Drycon Core ist ein Ingenieur- und Meisterbetrieb für Bauwerksabdichtung, Wasserschaden- und Schimmelsanierung und Tochtergesellschaft der drycon® GmbH. Geführt von Mohamed Herz und Zekai Savas, gestützt auf über 20 Jahre Erfahrung der drycon-Gruppe.",
};

// Mitarbeiterteam – übernommen aus der drycon-Gruppe.
const team = [
  { name: "Nina Giebler", role: "Geschäftsleitungsassistenz", image: "/team/Nina.webp" },
  { name: "Christian Schulten", role: "Finanzen & Controlling", image: "/team/Christian.webp" },
  { name: "Florian Kahlenberg", role: "Kalkulation", image: "/team/Florian.webp" },
  { name: "Juan Villa", role: "Projektleitung", image: "/team/Juan.webp" },
  { name: "Dennis Alkivilcim", role: "Einkauf", image: "/team/Dennis.webp" },
  { name: "Kelly Becker", role: "Büromanagement", image: "/team/Kelly.webp" },
  { name: "Katja Schulte", role: "Projektleitung", image: "/team/Katja.webp" },
  { name: "Kristin Koslowski", role: "Projektleitung · Architektin M.A.", image: "/team/Kristin.webp" },
  { name: "Mara Drinhausen", role: "Projektassistenz", image: "/team/Mara.webp" },
  { name: "Thomas Jardim-Meyer", role: "Projektleitung", image: "/team/Thomas.webp" },
  { name: "Drishti Chatrath", role: "Projektleitung · Architektin M.A.", image: "/team/Drishti.webp" },
  { name: "Hoda Razzouki", role: "Auszubildende", image: "/team/Hoda.webp" },
  { name: "Mine Sankaya", role: "Projektleitung", image: "/team/Mine.webp" },
  { name: "Rebecca Malaney", role: "Büromanagement", image: "/team/Rebecca.webp" },
  { name: "Adam Penketh", role: "Projektleitung", image: "/team/Adam.webp" },
];

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
            Ingenieurtechnik für
            <br />
            <span className="text-gradient">Bauwerksabdichtung</span>
          </>
        }
        intro="Drycon Core ist der Ingenieur- und Meisterbetrieb für Bauwerksabdichtung – eine Tochtergesellschaft der drycon® GmbH. Wir verbinden Planung, Diagnose und Ausführung in einer Hand."
        crumbs={[{ label: "Start", href: "/" }, { label: "Über uns" }]}
      />

      {/* Drycon im Rücken */}
      <section className="container-x pb-16 pt-4">
        <Reveal>
          <div className="grid gap-6 rounded-3xl bg-navy-900 p-8 text-white ring-1 ring-navy-900/5 sm:p-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-300">
                Teil der drycon-Gruppe
              </p>
              <p className="mt-3 text-4xl font-semibold text-teal-300 sm:text-5xl">20+ Jahre</p>
              <p className="mt-1 text-sm text-white/70">Erfahrung im Rücken</p>
            </div>
            <p className="text-sm leading-relaxed text-white/80 sm:text-base">
              Drycon Core ist die Abdichtungs-Tochter der drycon® GmbH, die seit
              über 20 Jahren europaweit anspruchsvolle Bauprojekte realisiert und
              koordiniert. Auf dieses Fundament aus Ingenieur-Know-how,
              Meisterqualität und über 1.400 umgesetzten Projekten bauen wir auf,
              wenn wir Ihr Bauwerk dauerhaft trockenlegen – von der ersten
              Feuchtigkeitsmessung bis zur Abnahme.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Geschäftsführer */}
      <section className="container-x pb-24">
        <SectionTitle
          eyebrow="Geschäftsführung"
          title="Drei Köpfe, ein Anspruch."
          intro="Die Führung von Drycon Core vereint technische Kompetenz mit unternehmerischer Erfahrung. Mohamed Herz verantwortet die operative Unternehmensführung und die fachliche Umsetzung der Projekte. Zekai Savas steuert die strategische Unternehmensentwicklung und den Aufbau nachhaltiger Unternehmensstrukturen. Als Gesellschafter bringt Frank Althaus seine jahrzehntelange Unternehmererfahrung, ein weitreichendes Netzwerk sowie seine Expertise in den Bereichen Unternehmensentwicklung, Finanzierung und kaufmännische Organisation in das Unternehmen ein."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Mohamed Herz",
              role: "Geschäftsführender Gesellschafter",
              image: "/team/MOHerz.png",
              text:
                "Verantwortet die operative Unternehmensführung und die fachliche Umsetzung der Projekte.",
            },
            {
              name: "Zekai Savas",
              role: "Geschäftsführender Gesellschafter",
              image: "/media/savas-aspect-ratio-408-310-1.webp",
              email: "savas@drycon.com",
              text:
                "Verantwortet die strategische Ausrichtung des Unternehmens sowie den Aufbau moderner Organisations- und Unternehmensstrukturen.",
            },
            {
              name: "Frank Althaus",
              role: "Gesellschafter",
              image: "/media/frank-2-aspect-ratio-408-310-1.webp",
              email: "althaus@drycon.com",
              text:
                "Bringt jahrzehntelange Unternehmererfahrung, ein weitreichendes Netzwerk sowie Expertise in Unternehmensentwicklung, Finanzierung und kaufmännische Organisation mit ein.",
            },
          ].map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <article className="lift overflow-hidden rounded-3xl bg-white ring-1 ring-navy-900/5">
                <div className="relative aspect-4/5 overflow-hidden bg-sand-50">
                  <Image
                    src={p.image}
                    alt={`${p.name}, ${p.role} bei Drycon Core`}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-600">
                    {p.role}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-navy-900">{p.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-700/80">{p.text}</p>
                  {p.email && (
                    <a
                      href={`mailto:${p.email}`}
                      className="mt-3 inline-block text-sm font-medium text-teal-600 hover:text-teal-700"
                    >
                      {p.email}
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="container-x pb-24">
        <SectionTitle
          eyebrow="Unser Team"
          title="Die Menschen hinter Drycon Core."
          intro="Vom Erstkontakt bis zur Abnahme sind Sie bei uns in festen Händen. Unser eingespieltes Team der drycon-Gruppe aus Projektleitung, Architektur, Kalkulation, Einkauf und Büro sorgt dafür, dass jedes Projekt sauber geplant und zuverlässig ausgeführt wird."
        />

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {team.map((m, i) => (
            <li key={m.name}>
              <Reveal delay={(i % 4) * 80}>
                <article className="lift group overflow-hidden rounded-3xl bg-white ring-1 ring-navy-900/5">
                  <div className="relative aspect-3/4 overflow-hidden">
                    <Image
                      src={m.image}
                      alt={`${m.name}, ${m.role} bei Drycon Core`}
                      fill
                      sizes="(min-width: 1024px) 33vw, 50vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-navy-950/75 via-navy-950/10 to-transparent p-4 sm:p-5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-teal-300">
                        {m.role}
                      </p>
                      <h3 className="mt-1 text-base font-semibold text-white sm:text-lg">
                        {m.name}
                      </h3>
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
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

      {/* Ingenieur- und Meisterbetrieb / Qualifikation */}
      <section className="py-24 sm:py-32">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionTitle
              eyebrow="Ingenieur- und Meisterbetrieb für Abdichtungstechnik"
              title={
                <>
                  Geprüfte Qualifikation,
                  <br />
                  <span className="text-gradient">dokumentierte Qualität.</span>
                </>
              }
              intro="Drycon Core ist ingenieurgeführt. Hinter jeder Maßnahme steht ein abgeschlossenes Studium des Bauingenieurwesens (M.Sc.) – Planung, Baustoffkunde, Ausführung und Abnahme aus einer Hand."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-navy-50 px-4 py-2 text-xs font-semibold text-navy-800">
                Master Bauingenieurwesen (M.Sc.)
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-navy-50 px-4 py-2 text-xs font-semibold text-navy-800">
                TÜV-Zertifizierungen
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-navy-50 px-4 py-2 text-xs font-semibold text-navy-800">
                DIN 18533 konform
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-navy-50 px-4 py-2 text-xs font-semibold text-navy-800">
                WTA-orientiert
              </span>
            </div>

            <UrkundeModal
              src="/media/0001.jpg"
              alt="Master-Urkunde Bauingenieurwesen (M.Sc.) der Geschäftsführung von Drycon Core"
              caption="Master of Science – Bauingenieurwesen, Universität Duisburg-Essen"
              className="group mt-8 inline-flex h-12 cursor-pointer items-center gap-3 rounded-full bg-navy-900 px-5 text-sm font-semibold text-white transition-all hover:bg-navy-800"
            >
              Master-Urkunde ansehen
              <span aria-hidden className="grid h-7 w-7 place-items-center rounded-full bg-white/15 transition-transform group-hover:scale-110">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m21 21-4.3-4.3" />
                  <path d="M11 8v6M8 11h6" />
                </svg>
              </span>
            </UrkundeModal>
          </Reveal>

          <Reveal variant="scale" delay={150}>
            <div className="relative">
              <UrkundeModal
                src="/media/0001.jpg"
                alt="Master-Urkunde Bauingenieurwesen (M.Sc.) der Geschäftsführung von Drycon Core"
                caption="Master of Science – Bauingenieurwesen, Universität Duisburg-Essen"
                className="lift group block w-full cursor-zoom-in overflow-hidden rounded-3xl bg-white p-4 shadow-[0_30px_80px_-40px_rgba(15,34,56,0.4)] ring-1 ring-navy-900/5"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-sand-50">
                  <Image
                    src="/media/0001.jpg"
                    alt="Master-Urkunde Bauingenieurwesen (M.Sc.) der Geschäftsführung von Drycon Core"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
              </UrkundeModal>
              <div className="pointer-events-none absolute -top-5 -right-5 hidden rounded-2xl bg-white p-4 shadow-[0_30px_60px_-30px_rgba(15,34,56,0.4)] ring-1 ring-navy-900/5 sm:block">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-600">
                  Abschluss
                </p>
                <p className="mt-1 text-sm font-semibold text-navy-900">
                  M.Sc. Bauingenieurwesen
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
