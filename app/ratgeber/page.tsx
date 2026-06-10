import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";

export const metadata: Metadata = {
  title: "Ratgeber",
  description:
    "Ratgeber rund um Abdichtung, Feuchtigkeit und Mauertrockenlegung: feuchter Keller, aufsteigende Feuchtigkeit, Salzausblühungen, Innen- vs. Außenabdichtung, Balkon und Gasleitung – verständlich erklärt von Drycore.",
  keywords: [
    "Ratgeber Abdichtung",
    "feuchter Keller was tun",
    "aufsteigende Feuchtigkeit",
    "Horizontalsperre",
    "Salzausblühungen",
    "Innenabdichtung Außenabdichtung",
    "Mauertrockenlegung Kosten",
    "Schimmel im Keller",
    "Balkon abdichten",
    "Gasleitungsprüfung",
  ],
};

// Ratgeber-Artikel: eigene Inhalte, verlinken auf die passende Leistung.
const articles = [
  {
    category: "Feuchtigkeit",
    title: "Feuchter Keller: Ursachen erkennen und richtig handeln",
    teaser:
      "Nasse Wände, muffiger Geruch, Stockflecken: Wir zeigen, woher Kellerfeuchte kommt, wie man die Ursache von der Wirkung unterscheidet und welche Schritte wirklich helfen.",
    href: "/leistungen/abdichtungssysteme",
    image: "/media/referenzen/feuchter-keller-vorher.jpeg",
    readingTime: "6 Min.",
  },
  {
    category: "Mauerwerk",
    title: "Aufsteigende Feuchtigkeit und die nachträgliche Horizontalsperre",
    teaser:
      "Ohne funktionierende Sperrschicht zieht Wasser kapillar in der Wand hoch. So funktioniert eine nachträgliche Horizontalsperre per Injektion – und wann sie sinnvoll ist.",
    href: "/leistungen/mauertrockenlegung",
    image: "/media/referenzen/horizontalsperre-injektion.jpeg",
    readingTime: "7 Min.",
  },
  {
    category: "Abdichtung",
    title: "Innen- oder Außenabdichtung: Was passt zu Ihrem Keller?",
    teaser:
      "Beide Wege führen zum trockenen Keller – aber nicht jeder ist überall möglich oder wirtschaftlich. Ein Vergleich der Verfahren mit ihren Vor- und Nachteilen.",
    href: "/leistungen/abdichtungssysteme",
    image: "/media/referenzen/innenabdichtung-klimaplatten.jpeg",
    readingTime: "5 Min.",
  },
  {
    category: "Sanierung",
    title: "Salzausblühungen und Sperrputz richtig verstehen",
    teaser:
      "Weiße Kristalle und bröckelnder Putz sind ein Warnsignal. Warum Salze ins Mauerwerk wandern und wie ein diffusionsoffenes Sperrputzsystem die Oberfläche dauerhaft schützt.",
    href: "/leistungen/feuchtigkeit-und-sanierung",
    image: "/media/referenzen/gewoelbekeller-nachher.jpeg",
    readingTime: "5 Min.",
  },
  {
    category: "Balkon & Terrasse",
    title: "Balkon abdichten: Wann eine Sanierung nötig wird",
    teaser:
      "Risse im Belag, Wasserspuren an der Decke darunter, gelöste Fugen: Diese Anzeichen sollten Sie ernst nehmen – und so läuft eine fachgerechte Verbundabdichtung ab.",
    href: "/leistungen/balkonabdichtung",
    image: "/media/balkonabdichtung-start.png",
    readingTime: "4 Min.",
  },
  {
    category: "Gas",
    title: "Gasleitungsprüfung: Pflichten, Ablauf und Protokoll",
    teaser:
      "Wann ist eine Dichtheitsprüfung fällig, was passiert dabei und welche Unterlagen brauchen Sie? Ein Überblick zur Gas-Hausinstallation nach DVGW und TRGI.",
    href: "/leistungen/gasleitungspruefung",
    image: "/media/gasleitungspruefung-start.png",
    readingTime: "4 Min.",
  },
];

// Wissens-/FAQ-Blöcke: ausführliche, eigene Inhalte (SEO).
const wissen = [
  {
    q: "Woran erkenne ich, ob mein Keller wirklich ein Feuchteproblem hat?",
    a: "Typische Anzeichen sind dunkle Ränder im unteren Wandbereich, ein klammes Raumklima, modriger Geruch, abplatzender Putz und weiße Salzkristalle. Wichtig ist die Unterscheidung: Kondensat (Tauwasser) entsteht, wenn warme Luft auf kalte Wände trifft – hier hilft oft schon richtiges Lüften und Dämmen. Aufsteigende oder seitlich eindringende Feuchtigkeit dagegen kommt aus dem Bauwerk selbst und braucht eine bauliche Lösung. Eine Feuchtigkeitsmessung schafft Klarheit, bevor Geld in die falsche Maßnahme fließt.",
  },
  {
    q: "Lohnt sich eine Sanierung oder reicht Streichen und Lüften?",
    a: "Anstriche und Lüften kaschieren ein Feuchteproblem, lösen es aber nicht, wenn die Ursache im Bauteil liegt. Wer nur die Oberfläche behandelt, sieht den Schaden nach kurzer Zeit erneut – meist schlimmer, weil die Feuchte ungehindert weiterarbeitet. Eine fachgerechte Sanierung setzt zuerst an der Ursache an (z. B. Horizontalsperre, Außen- oder Innenabdichtung) und stellt erst danach die Oberfläche wieder her. Das ist einmal aufwendiger, dafür dauerhaft.",
  },
  {
    q: "Was kostet eine Mauertrockenlegung ungefähr?",
    a: "Eine pauschale Zahl gibt es nicht, weil Wandstärke, Durchfeuchtungsgrad, Mauerwerksart, Zugänglichkeit und der Umfang der begleitenden Putz- und Abdichtungsarbeiten den Preis bestimmen. Seriös lässt sich das erst nach einem Vor-Ort-Termin mit Messung kalkulieren. Sie erhalten anschließend ein schriftliches Festpreisangebot mit klaren Positionen – ohne versteckte Kosten und ohne Druck.",
  },
  {
    q: "Wie lange dauert es, bis eine Wand nach der Trockenlegung trocken ist?",
    a: "Die eigentliche Maßnahme – etwa eine Injektion für die Horizontalsperre – ist oft an einem oder wenigen Tagen erledigt. Die anschließende Austrocknung des Mauerwerks dauert je nach Wandstärke und Ausgangsfeuchte mehrere Wochen bis Monate. Ein diffusionsoffener Sperrputz sorgt schon während dieser Phase für eine trockene, nutzbare Oberfläche und hält bauschädliche Salze zurück.",
  },
  {
    q: "Kann Schimmel im Keller gesundheitsschädlich sein?",
    a: "Ja. Anhaltend feuchte Wände erhöhen die Luftfeuchtigkeit und schaffen den Nährboden für Schimmel, dessen Sporen die Atemwege belasten können. Deshalb behandeln wir nicht nur den sichtbaren Befall, sondern entziehen ihm mit der Trockenlegung die Grundlage. Befallene Bereiche werden fachgerecht entfernt und das Raumklima wieder in einen gesunden Bereich gebracht.",
  },
];

export default function RatgeberPage() {
  return (
    <>
      <PageHeader
        eyebrow="Ratgeber"
        title={
          <>
            Wissen rund um
            <br />
            <span className="text-gradient">Feuchtigkeit und Abdichtung.</span>
          </>
        }
        intro="Verständlich erklärt statt Fachchinesisch: In unserem Ratgeber finden Sie Antworten zu feuchtem Keller, aufsteigender Feuchtigkeit, Salzausblühungen, Abdichtungsverfahren und mehr. So können Sie Schäden früh erkennen und die richtigen Entscheidungen treffen."
        crumbs={[{ label: "Start", href: "/" }, { label: "Ratgeber" }]}
      />

      {/* Artikel-Grid */}
      <section className="container-x">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a, i) => (
            <Reveal key={a.title} delay={(i % 3) * 100}>
              <Link
                href={a.href}
                className="lift group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-navy-900/5"
              >
                <div className="relative aspect-16/10 overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-navy-700 backdrop-blur">
                    {a.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold leading-snug text-navy-900">
                    {a.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-700/80">
                    {a.teaser}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs font-medium text-navy-700/60">
                      Lesezeit {a.readingTime}
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900">
                      Weiterlesen
                      <span className="grid h-7 w-7 place-items-center rounded-full bg-navy-50 transition-all duration-300 group-hover:bg-navy-900 group-hover:text-white">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="m13 6 6 6-6 6" />
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Wissens-FAQ */}
      <section className="py-24 sm:py-32">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionTitle
            eyebrow="Häufige Fragen"
            title={
              <>
                Schnell informiert,
                <br />
                gut entschieden.
              </>
            }
            intro="Die Fragen, die uns Eigentümerinnen und Eigentümer am häufigsten stellen – ehrlich beantwortet. Ihre Frage ist nicht dabei? Schreiben Sie uns, wir antworten persönlich."
          />

          <Reveal delay={120}>
            <div className="space-y-3">
              {wissen.map((f, i) => (
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

      {/* CTA */}
      <section className="pb-24">
        <div className="container-x">
          <Reveal variant="scale">
            <div className="overflow-hidden rounded-3xl bg-navy-950 p-8 text-white ring-1 ring-navy-900/5 sm:p-12">
              <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
                <div>
                  <p className="eyebrow text-teal-300">Noch Fragen offen?</p>
                  <h3 className="h-display mt-4 text-3xl sm:text-4xl">
                    Wir schauen uns Ihr Schadensbild an.
                  </h3>
                  <p className="mt-4 max-w-xl text-base text-white/75">
                    Schicken Sie uns ein paar Fotos und Eckdaten. Sie bekommen eine
                    erste fachliche Einschätzung und einen Termin – ehrlich und ohne
                    Verkaufsdruck.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <Link
                    href="/kontakt"
                    className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-navy-900 transition-all hover:bg-teal-50"
                  >
                    Einschätzung anfragen
                    <span aria-hidden className="grid h-7 w-7 place-items-center rounded-full bg-navy-900 text-white transition-transform group-hover:translate-x-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="m13 6 6 6-6 6" />
                      </svg>
                    </span>
                  </Link>
                  <Link
                    href="/leistungen"
                    className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-white/10 px-6 text-sm font-semibold text-white ring-1 ring-white/25 backdrop-blur transition-colors hover:bg-white/15"
                  >
                    Alle Leistungen
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
