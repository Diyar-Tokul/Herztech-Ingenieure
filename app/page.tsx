import Link from "next/link";
import Image from "next/image";
import Reveal from "./components/Reveal";
import SectionTitle from "./components/SectionTitle";
import ServiceCard from "./components/ServiceCard";
import ContactForm from "./components/ContactForm";

const services = [
  {
    index: "01",
    title: "Abdichtungssysteme",
    problem: "Feuchter Keller & nasse Wände",
    intro:
      "Innen- und Außenabdichtung, Sockel, Horizontalsperren und Bodenabdichtung nach DIN 18533.",
    bullets: [
      "Innenabdichtung von Kellerwänden",
      "Außenabdichtung erdberührter Bauteile",
      "Horizontalsperre gegen aufsteigende Feuchte",
      "Bodenabdichtung im Keller",
    ],
    href: "/leistungen/abdichtungssysteme",
    image: "/media/abdichtungssysteme.jpg",
    imageAlt: "Bauwerksabdichtung im Außenbereich",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 21V8l8-5 8 5v13" />
        <path d="M4 21h16" />
        <path d="M10 21v-6h4v6" />
      </svg>
    ),
  },
  {
    index: "02",
    title: "Balkonabdichtung",
    problem: "Undichter Balkon oder Terrasse",
    intro:
      "Wetterfeste Verbundabdichtung für Balkon und Terrasse, mit sauberen Anschlussdetails.",
    bullets: [
      "Bestandsaufnahme und Befund",
      "Untergrundsanierung und Gefälleaufbau",
      "Verbundabdichtung mit Anschlüssen",
      "Neuer Belag oder Beschichtung",
    ],
    href: "/leistungen/balkonabdichtung",
    image: "/media/balkonabdichtung.webp",
    imageAlt: "Balkonabdichtung mit neuem Belag",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h18" />
        <path d="M5 12V8h14v4" />
        <path d="M7 18v-6M12 18v-6M17 18v-6" />
      </svg>
    ),
  },
  {
    index: "03",
    title: "Garagen- & Bodenabdichtung",
    problem: "Risse & Feuchte im Garagenboden",
    intro:
      "Belastbare Beschichtungen für Garage, Stellplatz und Tiefgarage. Robust gegen Tausalz.",
    bullets: [
      "Fräsen oder Strahlen des Untergrunds",
      "Grundierung und Spachtelung",
      "Beschichtung mit Verschleißschutz",
      "Sauberer Sockelanschluss",
    ],
    href: "/leistungen/garagenabdichtung",
    image: "/media/bodenabdichtung.webp",
    imageAlt: "Beschichteter Garagenboden",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="8" rx="1" />
        <path d="M5 11V7l7-4 7 4v4" />
        <path d="M7 19v2M17 19v2" />
      </svg>
    ),
  },
  {
    index: "04",
    title: "Feuchtigkeit & Sanierung",
    problem: "Wasserschaden & Schimmelverdacht",
    intro:
      "Vom akuten Wasserschaden bis zur dauerhaften Sanierung. Mit Analyse, Messung und Plan.",
    bullets: [
      "Feuchtigkeits- und Wasserschadensanierung",
      "Schadensanalyse und Feuchtigkeitsmessung",
      "Sanierungskonzepte mit Kostenrahmen",
      "Trocknung und Schimmelvermeidung",
    ],
    href: "/leistungen/feuchtigkeit-und-sanierung",
    image: "/media/feuchtigkeit-sanierung.jpg",
    imageAlt: "Feuchtigkeitssanierung an einer Wand",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2s6 7 6 12a6 6 0 0 1-12 0c0-5 6-12 6-12Z" />
      </svg>
    ),
  },
  {
    index: "05",
    title: "Gasleitungsprüfung",
    problem: "Unsichere oder fällige Gasleitung",
    intro:
      "Sicht- und Dichtheitsprüfung Ihrer Gas-Hausinstallation nach DVGW und TRGI.",
    bullets: [
      "Sichtprüfung der Leitungen",
      "Dichtheitsprüfung mit Messgerät",
      "Protokoll für Unterlagen und Versorger",
      "Klare Handlungsempfehlung",
    ],
    href: "/leistungen/gasleitungspruefung",
    image: "/media/gasleitungspruefung.jpg",
    imageAlt: "Dichtheitsprüfung einer Gasleitung",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12h6l2-4 4 8 2-4h2" />
        <path d="M3 18h18" />
      </svg>
    ),
  },
  {
    index: "06",
    title: "Gasleitungssanierung",
    problem: "Veraltete, undichte Gasleitung",
    intro:
      "Fachgerechte Sanierung undichter oder veralteter Leitungen, mit Druckprüfung und Übergabe.",
    bullets: [
      "Lokalisierung und Demontage",
      "Austausch mit zertifizierten Materialien",
      "Druck- und Dichtheitsprüfung",
      "Übergabe mit vollständiger Doku",
    ],
    href: "/leistungen/gasleitungssanierung",
    image: "/media/gasleitungssanierung.jpg",
    imageAlt: "Sanierung einer Gasleitung",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 18V8a2 2 0 0 1 2-2h4" />
        <path d="M20 6v10a2 2 0 0 1-2 2h-4" />
        <path d="m10 6 4-4 4 4" />
        <path d="m14 18-4 4-4-4" />
      </svg>
    ),
  },
];

const steps = [
  {
    n: "01",
    title: "Vor-Ort-Termin",
    text: "Wir kommen, hören zu und sehen uns das Objekt sorgfältig an. Erste Einschätzung noch beim Termin.",
  },
  {
    n: "02",
    title: "Analyse und Konzept",
    text: "Feuchtigkeitsmessung, Schadensbild und Bauteilaufbau ergeben das passgenaue Sanierungskonzept.",
  },
  {
    n: "03",
    title: "Festpreisangebot",
    text: "Transparente Leistungsbeschreibung mit klaren Positionen. Keine Überraschungen auf der Rechnung.",
  },
  {
    n: "04",
    title: "Ausführung",
    text: "Saubere Baustelle, fachgerechte Ausführung und Dokumentation jeder Schicht und jedes Produkts.",
  },
  {
    n: "05",
    title: "Abnahme und Gewähr",
    text: "Gemeinsame Abnahme mit Protokoll. Wir garantieren das Ergebnis und stehen langfristig zur Verfügung.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative -mt-20 flex min-h-[100svh] items-end overflow-hidden">
        <video
          src="/media/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-navy-950/70 via-navy-900/45 to-navy-950/80" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-white" />

        <div className="container-x relative z-10 grid grid-cols-1 items-end gap-12 pb-24 pt-40 lg:grid-cols-[1.4fr_1fr] lg:pb-32">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white ring-1 ring-white/20 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                Meisterbetrieb für Abdichtungstechnik
              </span>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="h-display mt-6 text-[40px] text-white sm:text-6xl lg:text-7xl">
                Wir halten Ihr Gebäude
                <br />
                <span className="text-teal-300">dicht. Dauerhaft.</span>
              </h1>
            </Reveal>

            <Reveal delay={240}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                Drycore plant und führt Mauertrockenlegung, Bauwerksabdichtungen,
                Sanierungen und Gasleitungsprüfungen aus. Analyse, Konzept und
                Ausführung aus einer Hand.
              </p>
            </Reveal>

            <Reveal delay={360}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/kontakt"
                  className="group inline-flex h-13 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-navy-900 shadow-[0_18px_40px_-12px_rgba(255,255,255,0.45)] transition-all hover:bg-teal-50"
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
                  href="#leistungen"
                  className="inline-flex h-13 items-center gap-2 rounded-full bg-white/10 px-6 text-sm font-semibold text-white ring-1 ring-white/25 backdrop-blur transition-colors hover:bg-white/15"
                >
                  Leistungen entdecken
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={460} variant="scale">
            <div className="grid gap-3 rounded-3xl bg-white/10 p-3 ring-1 ring-white/20 backdrop-blur-xl">
              {[
                { kpi: "20+", label: "Jahre Praxiserfahrung" },
                { kpi: "DIN 18533", label: "Normgerechte Abdichtung" },
                { kpi: "24 h", label: "Reaktionszeit bei Schäden" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-4 rounded-2xl bg-white/85 px-5 py-4 text-navy-900"
                >
                  <span className="text-sm text-navy-700/80">{item.label}</span>
                  <span className="text-2xl font-semibold tracking-tight">
                    {item.kpi}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
          <Reveal delay={700}>
            <a
              href="#leistungen"
              className="group flex flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-white/80"
            >
              <span>Mehr entdecken</span>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 ring-1 ring-white/25 transition-transform group-hover:translate-y-0.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14" />
                  <path d="m19 12-7 7-7-7" />
                </svg>
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="relative">
        <div className="container-x -mt-10 lg:-mt-16">
          <Reveal variant="scale">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-navy-100 shadow-[0_30px_80px_-40px_rgba(15,34,56,0.35)] sm:grid-cols-4">
              {[
                { label: "Meisterbetrieb", value: "Eingetragen" },
                { label: "Norm", value: "DIN 18533" },
                { label: "Gas", value: "DVGW Regelwerk" },
                { label: "Region", value: "Bundesweit aktiv" },
              ].map((b) => (
                <div
                  key={b.label}
                  className="bg-white px-5 py-6 text-center"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-navy-700/70">
                    {b.label}
                  </p>
                  <p className="mt-2 text-base font-semibold text-navy-900 sm:text-lg">
                    {b.value}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section id="leistungen" className="relative py-24 sm:py-32">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <SectionTitle
              eyebrow="Unsere Leistungen"
              title={
                <>
                  Welches Problem
                  <br />
                  <span className="text-gradient">haben Sie?</span>
                </>
              }
              intro="Ob feuchter Keller, undichter Balkon oder eine fällige Gasleitungsprüfung: Wählen Sie Ihr Schadensbild und Sie landen direkt beim passenden Kompetenzfeld. Für jedes Problem die fachgerechte Lösung, statt halber Sachen."
            />
            <Reveal delay={200}>
              <Link
                href="/leistungen"
                className="group hidden h-12 items-center gap-2 rounded-full bg-navy-900 px-6 text-sm font-semibold text-white transition-all hover:bg-navy-800 lg:inline-flex"
              >
                Alle Leistungen
                <span aria-hidden className="grid h-7 w-7 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </span>
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <ServiceCard {...s} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-10 flex justify-center lg:hidden">
              <Link
                href="/leistungen"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-navy-900 px-6 text-sm font-semibold text-white"
              >
                Alle Leistungen
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VORHER / NACHHER */}
      <section className="relative py-16 sm:py-24">
        <div className="absolute inset-0 -z-10 bg-grid bg-grid-fade opacity-40" />
        <div className="container-x">
          <SectionTitle
            align="center"
            eyebrow="Vorher / Nachher"
            title="Aus Feuchtigkeit wird Wohnraum."
            intro="Ein durchfeuchteter Raum, fachgerecht abgedichtet und saniert, bis ein trockener Poolbereich daraus wird. Genau diese Verwandlung steckt hinter unseren Leistungen."
          />

          <Reveal variant="scale">
            <div className="mt-12 grid gap-4 sm:gap-6 md:grid-cols-2">
              {[
                {
                  src: "/media/pool-vorher.jpeg",
                  tag: "Vorher",
                  tagClass: "bg-amber-500/90 text-white",
                  caption: "Feuchte, geschädigte Wand vor der Abdichtung",
                },
                {
                  src: "/media/pool-nachher.jpeg",
                  tag: "Nachher",
                  tagClass: "bg-teal-500 text-white",
                  caption: "Trockener, fertiger Poolraum nach der Sanierung",
                },
              ].map((item) => (
                <figure
                  key={item.tag}
                  className="lift group relative aspect-4/5 overflow-hidden rounded-3xl ring-1 ring-navy-900/5 sm:aspect-4/3"
                >
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span
                    className={`absolute left-4 top-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] backdrop-blur ${item.tagClass}`}
                  >
                    {item.tag}
                  </span>
                  <figcaption className="absolute inset-x-4 bottom-4 rounded-lg bg-white/85 px-3 py-1.5 text-xs font-medium text-navy-800 backdrop-blur">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-8 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center">
              <p className="text-sm text-navy-700/80">
                Ihr Problem ähnelt dem? Diese Leistungen haben diese Verwandlung möglich gemacht:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/leistungen/feuchtigkeit-und-sanierung"
                  className="group inline-flex h-11 items-center gap-2 rounded-full bg-navy-900 px-5 text-sm font-semibold text-white transition-all hover:bg-navy-800"
                >
                  Feuchtigkeit &amp; Sanierung
                  <span aria-hidden className="grid h-6 w-6 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </span>
                </Link>
                <Link
                  href="/leistungen/abdichtungssysteme"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-navy-900 ring-1 ring-navy-900/10 transition-colors hover:bg-navy-50"
                >
                  Abdichtungssysteme
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WARUM DRYCORE */}
      <section className="relative py-24 sm:py-32">
        <div className="container-x">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <SectionTitle
                eyebrow="Warum Drycore"
                title={
                  <>
                    Ingenieurwissen,
                    <br />
                    handwerklich umgesetzt.
                  </>
                }
                intro="Wir verbinden präzise Diagnose mit sauberem Handwerk. Jede Maßnahme ist dokumentiert, jede Naht geprüft. Das spüren Sie in der Qualität und in der Garantie."
              />

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  {
                    t: "Klare Diagnose",
                    d: "Messung statt Vermutung. Wir wissen, woher die Feuchte kommt.",
                  },
                  {
                    t: "Eine Hand",
                    d: "Planung, Material, Ausführung und Abnahme aus dem Haus.",
                  },
                  {
                    t: "Normgerecht",
                    d: "Wir arbeiten nach DIN 18533 und nach DVGW-Regelwerk.",
                  },
                  {
                    t: "Saubere Baustelle",
                    d: "Wir hinterlassen das Gebäude besser, als wir es vorgefunden haben.",
                  },
                ].map((b, i) => (
                  <Reveal key={b.t} delay={i * 80}>
                    <div className="lift rounded-2xl bg-white p-5 ring-1 ring-navy-900/5">
                      <div className="grid h-9 w-9 place-items-center rounded-xl bg-teal-500 text-white">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </div>
                      <p className="mt-4 text-base font-semibold text-navy-900">
                        {b.t}
                      </p>
                      <p className="mt-1 text-sm text-navy-700/80">{b.d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal variant="scale">
              <div className="relative">
                <div className="relative aspect-4/5 overflow-hidden rounded-3xl ring-1 ring-navy-900/5">
                  <Image
                    src="/media/aussenabdichtung-altbau.jpg"
                    alt="Außenabdichtung eines Altbaus"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-navy-950/70 via-navy-950/0 to-transparent p-5">
                    <p className="rounded-lg bg-white/85 px-3 py-1.5 text-xs font-medium text-navy-800 backdrop-blur inline-block">
                      Vor-Ort-Aufnahme bei einer Kellersanierung
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 hidden w-56 rounded-2xl bg-white p-4 shadow-[0_30px_60px_-30px_rgba(15,34,56,0.4)] ring-1 ring-navy-900/5 sm:block">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-600">
                    Zertifiziert
                  </p>
                  <p className="mt-2 text-sm font-semibold text-navy-900">
                    Meisterschein vorhanden
                  </p>
                  <a
                    href="/dokumente/meisterschein.pdf"
                    target="_blank"
                    className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-navy-700 hover:text-navy-900"
                  >
                    Dokument ansehen
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative bg-navy-950 py-24 text-white sm:py-32">
        <div className="absolute inset-0 bg-grid opacity-[0.06]" />
        <div className="container-x relative">
          <SectionTitle
            align="center"
            eyebrow="So arbeiten wir"
            title={<span className="text-white">In fünf Schritten zur Lösung.</span>}
            intro={<span className="text-white/70">Ein klarer Ablauf gibt Ihnen Sicherheit. Sie wissen jederzeit, woran Sie sind und was als Nächstes passiert.</span>}
          />

          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="group h-full bg-navy-950 p-6 transition-colors hover:bg-navy-900">
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-semibold text-teal-300">
                      {s.n}
                    </span>
                    <span className="h-px flex-1 bg-white/10" />
                  </div>
                  <p className="mt-6 text-lg font-semibold tracking-tight">
                    {s.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REFERENZEN GRID */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <SectionTitle
              eyebrow="Ausgewählte Projekte"
              title="Sauber gearbeitet. Sichtbar gemacht."
              intro="Ein kleiner Ausschnitt aus unserer Arbeit. Im Projektarchiv sehen Sie alle Referenzen nach Bereich gefiltert."
            />
            <Reveal delay={200}>
              <Link
                href="/referenzen"
                className="group hidden h-12 items-center gap-2 rounded-full bg-navy-900 px-6 text-sm font-semibold text-white transition-all hover:bg-navy-800 lg:inline-flex"
              >
                Alle Referenzen
                <span aria-hidden className="grid h-7 w-7 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </span>
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {[
              {
                src: "/media/aussenabdichtung-altbau.jpg",
                caption: "Außenabdichtung Altbau",
              },
              {
                src: "/media/horizontalsperre.jpg",
                caption: "Horizontalsperre",
              },
              {
                src: "/media/balkonabdichtung-2.webp",
                caption: "Balkonabdichtung",
              },
              {
                src: "/media/gasleitungspruefung-2.jpg",
                caption: "Gasleitungsprüfung",
              },
            ].map((item, i) => (
              <Reveal
                key={item.src}
                delay={i * 100}
                className={i % 2 === 1 ? "lg:translate-y-8" : ""}
              >
                <figure className="lift group relative aspect-3/4 overflow-hidden rounded-2xl ring-1 ring-navy-900/5">
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <figcaption className="absolute bottom-3 left-3 right-3 rounded-lg bg-white/85 px-3 py-1.5 text-xs font-medium text-navy-800 backdrop-blur">
                    {item.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-10 flex justify-center lg:hidden">
              <Link
                href="/referenzen"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-navy-900 px-6 text-sm font-semibold text-white"
              >
                Alle Referenzen
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-12 sm:py-20">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-navy-50 via-white to-teal-50/60 p-8 ring-1 ring-navy-900/5 sm:p-14">
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="absolute right-8 top-8 h-20 w-20 text-teal-200"
                fill="currentColor"
              >
                <path d="M9.5 6C5.36 6 2 9.36 2 13.5V18h7v-4.5H5.5C5.5 11.57 7.07 10 9 10V6h.5Zm12 0c-4.14 0-7.5 3.36-7.5 7.5V18h7v-4.5h-3.5c0-1.93 1.57-3.5 3.5-3.5V6h.5Z" />
              </svg>
              <p className="max-w-3xl text-xl font-medium leading-relaxed text-navy-900 sm:text-2xl">
                &bdquo;Endlich ein Betrieb, der erklärt, was er macht und warum.
                Das Konzept war nachvollziehbar, der Preis fair und die
                Baustelle picobello. Wir empfehlen Drycore ohne zu zögern.&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-navy-900 text-sm font-semibold text-white">
                  AK
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-900">
                    Kundenstimme folgt
                  </p>
                  <p className="text-xs text-navy-700/70">
                    Eigentümer, Bestandsimmobilie
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="kontakt" className="relative py-24 sm:py-32">
        <div className="container-x">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <SectionTitle
                eyebrow="Kontakt"
                title={
                  <>
                    Sprechen Sie mit uns
                    <br />
                    <span className="text-gradient">über Ihr Vorhaben.</span>
                  </>
                }
                intro="Schreiben Sie uns ein paar Zeilen oder rufen Sie an. Wir melden uns innerhalb von 24 Stunden mit dem nächsten sinnvollen Schritt."
              />
              <Reveal delay={200}>
                <ul className="mt-8 space-y-4 text-sm">
                  <li className="flex items-center gap-3 text-navy-800">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-navy-900 text-white">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
                    </span>
                    <span>
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-navy-700/70">
                        Telefon
                      </span>
                      Nummer folgt
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-navy-800">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-navy-900 text-white">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
                    </span>
                    <span>
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-navy-700/70">
                        E-Mail
                      </span>
                      info@drycore.de
                    </span>
                  </li>
                </ul>
              </Reveal>
            </div>

            <Reveal variant="scale" delay={150}>
              <div className="rounded-3xl bg-sand-100 p-6 ring-1 ring-navy-900/5 sm:p-8">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
