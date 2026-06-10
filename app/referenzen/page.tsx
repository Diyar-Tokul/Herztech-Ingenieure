import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";
import ProjectGallery, { type Project } from "../components/ProjectGallery";

export const metadata: Metadata = {
  title: "Referenzen",
  description:
    "Ausgewählte Projekte von Drycore: Mauertrockenlegung, Kellerabdichtung, Balkonabdichtung, Garagensanierung, Feuchtigkeitssanierung und Gasleitungsarbeiten.",
};

const projects: Project[] = [
  {
    id: "innenabdichtung-klimaplatten",
    title: "Innenabdichtung mit Klimaplatten",
    location: "Kellerräume",
    year: "2025",
    category: "abdichtung",
    categoryLabel: "Abdichtung",
    scope:
      "Innenabdichtungssystem mit mineralischen Klimaplatten gegen Feuchte und Schimmel – diffusionsoffen ausgeführt.",
    size: "md",
    image: "/media/referenzen/innenabdichtung-klimaplatten.jpeg",
  },
  {
    id: "schwimmbad-untergeschoss",
    title: "Schwimmbadbereich im Untergeschoss",
    location: "Wellnessbereich",
    year: "2024",
    category: "abdichtung",
    categoryLabel: "Abdichtung",
    scope:
      "Abdichtung und Sanierung eines innenliegenden Schwimmbadbereichs im Untergeschoss inklusive angrenzender Bauteile.",
    size: "md",
    image: "/media/referenzen/schwimmbad.jpeg",
  },
  {
    id: "gewoelbekeller-sanierung",
    title: "Gewölbekeller-Sanierung",
    location: "Altbau-Untergeschoss",
    year: "2025",
    category: "sanierung",
    categoryLabel: "Sanierung",
    scope:
      "Stark durchfeuchteter Gewölbekeller komplett trockengelegt und mit diffusionsoffenem Sperrputz neu verputzt – Wände, Decke und Treppe.",
    size: "lg",
    image: "/media/referenzen/gewoelbekeller-nachher.jpeg",
  },
  {
    id: "horizontalsperre-bruchstein",
    title: "Horizontalsperre im Bruchsteinmauerwerk",
    location: "Mauerwerksinjektion",
    year: "2025",
    category: "abdichtung",
    categoryLabel: "Abdichtung",
    scope:
      "Nachträgliche Horizontalsperre gegen aufsteigende Feuchtigkeit – Bohrlochraster und Injektion mit zertifiziertem Wirkstoff im Bruchsteinmauerwerk.",
    size: "md",
    image: "/media/referenzen/horizontalsperre-injektion.jpeg",
  },
  {
    id: "hallenbad-sanierung",
    title: "Hallenbad im Untergeschoss",
    location: "Wellnessbereich",
    year: "2024",
    category: "abdichtung",
    categoryLabel: "Abdichtung",
    scope:
      "Abgedichteter und sanierter Innenpool – dauerhaft trockene Bausubstanz rund um den Beckenbereich.",
    size: "md",
    image: "/media/referenzen/schwimmbad-nachher.jpeg",
  },
  {
    id: "keller-labor-praxis",
    title: "Kellersanierung zum Praxisraum",
    location: "Untergeschoss-Ausbau",
    year: "2024",
    category: "sanierung",
    categoryLabel: "Sanierung",
    scope:
      "Vom feuchten Keller zum hellen, trockenen Arbeitsraum – Abdichtung, Trocknung und kompletter Innenausbau.",
    size: "md",
    image: "/media/referenzen/keller-labor-nachher.jpeg",
  },
  {
    id: "kellerfenster-saniert",
    title: "Saniertes Kellerfenster",
    location: "Sperrputz-Detail",
    year: "2025",
    category: "abdichtung",
    categoryLabel: "Abdichtung",
    scope:
      "Sauberer Anschluss am neuen Kellerfenster nach Trockenlegung und Sperrputz-Auftrag.",
    size: "sm",
    image: "/media/referenzen/kellerfenster-detail.jpeg",
  },
  {
    id: "sperrputz-gewoelbe",
    title: "Sperrputz im Gewölbekeller",
    location: "Untergeschoss",
    year: "2025",
    category: "sanierung",
    categoryLabel: "Sanierung",
    scope:
      "Frisch aufgebrachter, diffusionsoffener Sperrputz auf Wand und Gewölbe nach der Trockenlegung.",
    size: "sm",
    image: "/media/referenzen/gewoelbekeller-sperrputz.jpeg",
  },
  {
    id: "altbau-keller-koeln",
    title: "Altbau Kellerabdichtung",
    location: "Köln Sülz",
    year: "2025",
    category: "abdichtung",
    categoryLabel: "Abdichtung",
    scope:
      "Komplette Außenabdichtung mit Drainage und Horizontalsperre an einem Gründerzeit-Bestand.",
    size: "lg",
  },
  {
    id: "balkon-mfh-bonn",
    title: "Balkonabdichtung MFH",
    location: "Bonn Bad Godesberg",
    year: "2025",
    category: "balkon",
    categoryLabel: "Balkon",
    scope:
      "Vier Balkone neu aufgebaut, Verbundabdichtung mit Naturstein-Belag und korrosionsfreien Geländeranschlüssen.",
    size: "md",
  },
  {
    id: "tiefgarage-essen",
    title: "Tiefgaragen-Beschichtung",
    location: "Essen Rüttenscheid",
    year: "2024",
    category: "garage",
    categoryLabel: "Garage",
    scope:
      "OS-8-Beschichtung über 1.200 m², inklusive Rissverpressung und Bewehrungsschutz.",
    size: "sm",
  },
  {
    id: "wasserschaden-duesseldorf",
    title: "Wasserschaden Erdgeschoss",
    location: "Düsseldorf Pempelfort",
    year: "2024",
    category: "sanierung",
    categoryLabel: "Sanierung",
    scope:
      "Akute Schadenshilfe nach Rohrbruch, Trocknung über zwei Wochen und vollständige Wiederherstellung.",
    size: "md",
  },
  {
    id: "horizontalsperre-aachen",
    title: "Horizontalsperre Reihenhaus",
    location: "Aachen Burtscheid",
    year: "2024",
    category: "abdichtung",
    categoryLabel: "Abdichtung",
    scope:
      "Injektionsverfahren gegen aufsteigende Feuchte mit anschließendem Sperrputz im Sockelbereich.",
    size: "sm",
  },
  {
    id: "gasleitung-pruefung-duisburg",
    title: "Gasleitungsprüfung MFH",
    location: "Duisburg Neudorf",
    year: "2025",
    category: "gas",
    categoryLabel: "Gas",
    scope:
      "Wiederkehrende Sicherheitsprüfung der Hausinstallation nach TRGI mit Protokoll für den Versorger.",
    size: "sm",
  },
  {
    id: "balkonsanierung-eft",
    title: "Balkonsanierung EFH",
    location: "Mönchengladbach",
    year: "2024",
    category: "balkon",
    categoryLabel: "Balkon",
    scope:
      "Kompletter Aufbau neu, Flüssigkunststoff-Abdichtung und schwellenfreier Türanschluss.",
    size: "md",
  },
  {
    id: "garagenboden-eft",
    title: "Garagenboden EFH",
    location: "Krefeld",
    year: "2025",
    category: "garage",
    categoryLabel: "Garage",
    scope:
      "Epoxidharz-Beschichtung mit Quarzsand-Einstreuung und rutschhemmender Versiegelung.",
    size: "sm",
  },
  {
    id: "kellerinnenabdichtung",
    title: "Innenabdichtung Mehrfamilienhaus",
    location: "Wuppertal Elberfeld",
    year: "2023",
    category: "abdichtung",
    categoryLabel: "Abdichtung",
    scope:
      "Mineralische Dichtungsschlämme und Sperrputzsystem über zwei Souterrain-Wohnungen.",
    size: "md",
  },
  {
    id: "gasleitungssanierung-bestand",
    title: "Gasleitung Bestandssanierung",
    location: "Köln Mülheim",
    year: "2023",
    category: "gas",
    categoryLabel: "Gas",
    scope:
      "Erneuerung defekter Steigleitung, Druckprüfung und Wiederinbetriebnahme über alle Etagen.",
    size: "md",
  },
  {
    id: "feuchtigkeitssanierung-villa",
    title: "Feuchtigkeitssanierung Villa",
    location: "Bonn Plittersdorf",
    year: "2023",
    category: "sanierung",
    categoryLabel: "Sanierung",
    scope:
      "Schadensanalyse mit Endoskopie, Maßnahmenplan und Kombi-Sanierung über drei Bauteile.",
    size: "lg",
  },
  {
    id: "terrasse-dachgeschoss",
    title: "Dachterrasse Dachgeschoss",
    location: "Köln Lindenthal",
    year: "2024",
    category: "balkon",
    categoryLabel: "Balkon",
    scope:
      "Komplettsanierung mit Bitumenbahn, Gefälledämmung und Holzdielen auf Stelzlagern.",
    size: "sm",
  },
];

const stats = [
  { kpi: "240+", label: "Abgeschlossene Projekte" },
  { kpi: "20+", label: "Jahre Erfahrung" },
  { kpi: "98 %", label: "Weiterempfehlungsquote" },
  { kpi: "10 J.", label: "Gewährleistung Standard" },
];

export default function ReferenzenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Referenzen"
        title={
          <>
            Sauber gearbeitet.
            <br />
            <span className="text-gradient">Sichtbar gemacht.</span>
          </>
        }
        intro="Ein Ausschnitt aus unserer Arbeit der letzten Jahre. Von der Kellerabdichtung bis zur Gasleitungssanierung. Echte Bauten, echte Eigentümer, dokumentierte Ergebnisse."
        crumbs={[{ label: "Start", href: "/" }, { label: "Referenzen" }]}
      />

      {/* Featured Project */}
      <section className="container-x">
        <Reveal variant="scale">
          <div className="grid gap-6 overflow-hidden rounded-3xl bg-white ring-1 ring-navy-900/5 lg:grid-cols-[1.4fr_1fr]">
            <div className="relative min-h-[280px]">
              <Image
                src="/media/referenzen/keller-praxis-nachher.jpeg"
                alt="Trockengelegtes Untergeschoss, ausgebaut zu einem hellen Praxisraum"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover lg:rounded-none"
              />
              <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-navy-700 backdrop-blur">
                Projekt des Monats
              </span>
            </div>
            <div className="flex flex-col justify-between p-7 sm:p-10">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-600">
                  Untergeschoss-Sanierung
                </p>
                <h2 className="h-display mt-3 text-3xl text-navy-900 sm:text-4xl">
                  Vom feuchten Keller zum Praxisraum.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-navy-700/80">
                  Stark durchfeuchtetes Mauerwerk mit Salzausblühungen, abgeplatztem
                  Putz und muffiger Luft. Wir haben trockengelegt, das
                  Innenabdichtungssystem mit Sperrputz ausgeführt und den Raum so
                  vorbereitet, dass heute ein heller, trockener Praxisraum daraus
                  geworden ist.
                </p>
              </div>
              <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-navy-100 pt-6">
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-navy-700/70">System</dt>
                  <dd className="mt-1 text-lg font-semibold text-navy-900">Innenabdichtung</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-navy-700/70">Gewähr</dt>
                  <dd className="mt-1 text-lg font-semibold text-navy-900">10 Jahre</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-navy-700/70">Jahr</dt>
                  <dd className="mt-1 text-lg font-semibold text-navy-900">2025</dd>
                </div>
              </dl>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Gallery */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionTitle
            eyebrow="Projektarchiv"
            title="Filtern Sie nach Ihrer Frage."
            intro="Wählen Sie den Bereich, der Sie betrifft, und sehen Sie ähnliche Projekte mit Ort, Umfang und Jahr."
          />

          <div className="mt-12">
            <ProjectGallery projects={projects} />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-50/60 py-24">
        <div className="container-x">
          <Reveal>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-navy-100 shadow-[0_30px_80px_-40px_rgba(15,34,56,0.35)] sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-white px-5 py-8 text-center">
                  <p className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                    {s.kpi}
                  </p>
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-navy-700/70">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vorher-Nachher Anregung */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionTitle
            eyebrow="Vorher und Nachher"
            title="Der Unterschied, den Arbeit macht."
            intro="Zwei Bilder, ein Projekt. Wir dokumentieren jeden Schritt, damit Sie das Ergebnis nicht nur sehen, sondern auch nachvollziehen können."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden rounded-3xl bg-white ring-1 ring-navy-900/5">
                <div className="relative aspect-video">
                  <Image
                    src="/media/referenzen/gewoelbekeller-vorher.jpeg"
                    alt="Feuchter Gewölbekeller mit abplatzendem Putz vor der Sanierung"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-navy-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                    Vorher
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-sm font-semibold text-navy-900">
                    Feuchter Gewölbekeller mit geschädigtem Putz
                  </p>
                  <p className="mt-1 text-xs text-navy-700/70">Altbau-Untergeschoss</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-3xl bg-white ring-1 ring-navy-900/5">
                <div className="relative aspect-video">
                  <Image
                    src="/media/referenzen/gewoelbekeller-nachher.jpeg"
                    alt="Trockengelegter Gewölbekeller mit frischem Sperrputz nach der Sanierung"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-teal-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                    Nachher
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-sm font-semibold text-navy-900">
                    Trockengelegt und mit Sperrputz neu verputzt
                  </p>
                  <p className="mt-1 text-xs text-navy-700/70">Altbau-Untergeschoss</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container-x">
          <Reveal variant="scale">
            <div className="overflow-hidden rounded-3xl bg-navy-950 p-8 text-white ring-1 ring-navy-900/5 sm:p-12">
              <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
                <div>
                  <p className="eyebrow text-teal-300">Wird Ihr Projekt das nächste?</p>
                  <h3 className="h-display mt-4 text-3xl sm:text-4xl">
                    Wir freuen uns, Ihr Vorhaben kennenzulernen.
                  </h3>
                  <p className="mt-4 max-w-xl text-base text-white/75">
                    Schicken Sie uns ein paar Eckdaten und Fotos. Wir melden uns
                    mit einem Termin und einer ersten Einschätzung innerhalb von
                    24 Stunden.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <Link
                    href="/kontakt"
                    className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-navy-900 transition-all hover:bg-teal-50"
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
                    className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-white/10 px-6 text-sm font-semibold text-white ring-1 ring-white/25 backdrop-blur transition-colors hover:bg-white/15"
                  >
                    Leistungen ansehen
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
