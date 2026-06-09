import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import ServiceCard from "../components/ServiceCard";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Mauertrockenlegung, Abdichtungssysteme, Balkonabdichtung, Garagen- und Bodenabdichtung, Feuchtigkeits- und Sanierungstechnik, Gasleitungsprüfung und Gasleitungssanierung. Alle Leistungen von Drycore im Überblick.",
};

const services = [
  {
    index: "01",
    title: "Mauertrockenlegung",
    intro:
      "Feuchte Wände dauerhaft trockenlegen. Nachträgliche Horizontalsperre, Mauerwerksinjektion und Sanierputz gegen aufsteigende Feuchtigkeit.",
    bullets: [
      "Feuchtigkeitsmessung und Diagnose",
      "Nachträgliche Horizontalsperre durch Injektion",
      "Mauerwerksinjektion bei hoher Durchfeuchtung",
      "Sanierputz gegen Salzausblühungen",
    ],
    href: "/leistungen/mauertrockenlegung",
    image: "/media/mauertrockenlegung-horizontalsperre.jpeg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7h14v14" />
        <path d="M5 11h14M5 15h14M9 7v14M14 7v14" />
        <path d="M12 2v3" />
      </svg>
    ),
  },
  {
    index: "02",
    title: "Abdichtungssysteme",
    intro:
      "Vom Keller bis zum Sockel. Innenabdichtung, Außenabdichtung, Sockelabdichtung, Horizontalsperre und Bodenabdichtung nach DIN 18533.",
    bullets: [
      "Innenabdichtung von Kellerwänden",
      "Außenabdichtung erdberührter Bauteile",
      "Sockelabdichtung",
      "Horizontalsperren gegen kapillar aufsteigende Feuchtigkeit",
      "Bodenabdichtung von Kellerräumen",
    ],
    href: "/leistungen/abdichtungssysteme",
    image: "/media/abdichtungssysteme-start.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 21V8l8-5 8 5v13" />
        <path d="M4 21h16" />
        <path d="M10 21v-6h4v6" />
      </svg>
    ),
  },
  {
    index: "03",
    title: "Balkonabdichtung",
    intro:
      "Wetterfeste Verbundabdichtung für Balkon und Terrasse, mit sauberen Anschlussdetails und neuem Belag.",
    bullets: [
      "Bestandsaufnahme und Befund",
      "Untergrundsanierung und Gefälleaufbau",
      "Verbundabdichtung mit Anschlussdetails",
      "Neuer Belag oder Beschichtung",
    ],
    href: "/leistungen/balkonabdichtung",
    image: "/media/balkonabdichtung-start.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h18" />
        <path d="M5 12V8h14v4" />
        <path d="M7 18v-6M12 18v-6M17 18v-6" />
      </svg>
    ),
  },
  {
    index: "04",
    title: "Garagen- & Bodenabdichtung",
    intro:
      "Belastbare Beschichtungen für Garage, Stellplatz und Tiefgarage. Robust gegen Wasser, Frost und Tausalz.",
    bullets: [
      "Fräsen oder Strahlen des Untergrunds",
      "Grundierung und Spachtelung",
      "Beschichtung mit Verschleißschutz",
      "Sauberer Sockelanschluss",
    ],
    href: "/leistungen/garagenabdichtung",
    image: "/media/garagenabdichtung-start.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="8" rx="1" />
        <path d="M5 11V7l7-4 7 4v4" />
        <path d="M7 19v2M17 19v2" />
      </svg>
    ),
  },
  {
    index: "05",
    title: "Feuchtigkeits- & Sanierungstechnik",
    intro:
      "Messen, verstehen, lösen. Wir bringen Ihre Bauteile zurück in den trockenen Zustand.",
    bullets: [
      "Feuchtigkeits- und Wasserschadensanierung",
      "Schadensanalyse und Feuchtigkeitsmessung",
      "Sanierungskonzepte für Feuchtigkeitsschäden",
    ],
    href: "/leistungen/feuchtigkeit-und-sanierung",
    image: "/media/feuchtigkeit-sanierung-start.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2s6 7 6 12a6 6 0 0 1-12 0c0-5 6-12 6-12Z" />
      </svg>
    ),
  },
  {
    index: "06",
    title: "Gasleitungsprüfung",
    intro:
      "Sicherheit nach DVGW. Sicht- und Dichtheitsprüfung Ihrer Hausinstallation mit Protokoll.",
    bullets: [
      "Sichtprüfung der Leitungen",
      "Dichtheitsprüfung mit Messgerät",
      "Protokoll für Unterlagen und Versorger",
    ],
    href: "/leistungen/gasleitungspruefung",
    image: "/media/gasleitungspruefung-start.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12h6l2-4 4 8 2-4h2" />
        <path d="M3 18h18" />
      </svg>
    ),
  },
  {
    index: "07",
    title: "Gasleitungssanierung",
    intro:
      "Fachgerechte Sanierung undichter Leitungen. Mit Druckprüfung, Inbetriebnahme und Übergabe.",
    bullets: [
      "Lokalisierung und Demontage",
      "Austausch mit zertifizierten Materialien",
      "Druck- und Dichtheitsprüfung",
      "Übergabe mit Doku",
    ],
    href: "/leistungen/gasleitungssanierung",
    image: "/media/gasleitungssanierung-start.png",
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

export default function LeistungenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Leistungen"
        title={
          <>
            Alles, was Ihr Gebäude
            <br />
            <span className="text-gradient">trocken und sicher hält.</span>
          </>
        }
        intro="Feuchte Wände, undichte Balkone, beschädigte Garagenböden oder anstehende Gasleitungsprüfungen brauchen keine Bastellösungen, sondern saubere Planung und Ausführung. HERZTEC bündelt sechs Leistungen unter einem Dach. Wählen Sie Ihren Bereich, sehen Sie typische Schadensfälle und die Antworten von über 30 Jahren Erfahrung im Team."
        crumbs={[{ label: "Start", href: "/" }, { label: "Leistungen" }]}
      />

      <section className="container-x py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <ServiceCard {...s} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-x">
          <div className="overflow-hidden rounded-3xl bg-navy-50 p-8 ring-1 ring-navy-900/5 sm:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <SectionTitle
                  eyebrow="Sie wissen nicht, was Sie brauchen?"
                  title="Wir helfen beim Einordnen."
                  intro="Schicken Sie uns ein Foto und drei Sätze zum Problem. Wir antworten mit einer ersten Einschätzung und sagen, ob ein Vor-Ort-Termin sinnvoll ist."
                />
              </div>
              <Reveal delay={100}>
                <Link
                  href="/kontakt"
                  className="group flex items-center justify-between gap-6 rounded-2xl bg-white p-6 ring-1 ring-navy-900/5 transition-all hover:shadow-[0_30px_60px_-30px_rgba(15,34,56,0.4)]"
                >
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-600">
                      Kostenfreie Ersteinschätzung
                    </p>
                    <p className="mt-2 text-xl font-semibold text-navy-900">
                      Schadensfoto schicken
                    </p>
                  </div>
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-navy-900 text-white transition-transform group-hover:translate-x-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
