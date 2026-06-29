import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import FaqAccordion, { type FaqGroup } from "../components/FaqAccordion";

export const metadata: Metadata = {
  title: "Häufige Fragen (FAQ)",
  description:
    "Antworten rund um Bauwerksabdichtung: feuchter Keller, Schimmel, Innen- und Außenabdichtung, Horizontalsperre, Balkon, Sockel, Kosten, Ablauf und Versicherung – verständlich erklärt von Drycon Core.",
};

const groups: FaqGroup[] = [
  {
    category: "Allgemein",
    items: [
      {
        q: "Was macht Drycon Core genau?",
        a: "Drycon Core ist ein bauingenieurgeführtes Fachunternehmen für nachträgliche Bauwerksabdichtungen. Wir analysieren die Ursache von Feuchtigkeit und entwickeln individuelle Sanierungskonzepte für Keller, Außenwände, Balkone und Sockelbereiche.",
      },
      {
        q: "Welche Leistungen bieten Sie an?",
        a: "Unter anderem: Innenabdichtungen, Außenabdichtungen, Horizontalsperren, Balkonabdichtungen, Sockelabdichtungen, Schimmelsanierungen, Feuchtigkeitsanalysen, Sanierungskonzepte und Bauwerksdiagnostik.",
      },
      {
        q: "In welchen Regionen arbeiten Sie?",
        a: "Wir arbeiten hauptsächlich im Raum Düsseldorf, Mönchengladbach, Neuss, Krefeld, Viersen und Umgebung. Größere Projekte übernehmen wir auch darüber hinaus.",
      },
      {
        q: "Wie schnell können Sie einen Termin anbieten?",
        a: "In der Regel erhalten Sie kurzfristig einen Besichtigungstermin. Kontaktieren Sie uns einfach – wir bemühen uns um eine schnelle Terminvergabe.",
      },
      {
        q: "Arbeiten Sie auch am Wochenende?",
        a: "In Ausnahmefällen und bei dringenden Projekten sind auch Termine außerhalb der regulären Arbeitszeiten möglich.",
      },
      {
        q: "Sind Sie ein Meisterbetrieb?",
        a: "Ja. Drycon Core ist ein bauingenieurgeführtes Unternehmen und verfügt zusätzlich über einen Meisterbetrieb im Stuckateurhandwerk sowie einen Meisterbetrieb für Maurer- und Betonbauarbeiten. Dadurch verbinden wir ingenieurtechnische Planung mit handwerklicher Meisterqualität.",
      },
      {
        q: "Welche Qualifikationen haben Ihre Mitarbeiter?",
        a: "Unsere Projekte werden durch Bauingenieure und qualifizierte Fachkräfte geplant und ausgeführt. Dadurch verbinden wir wissenschaftliche Planung mit handwerklicher Erfahrung.",
      },
      {
        q: "Warum sollte ich Drycon Core wählen?",
        a: "Weil wir nicht einfach nur abdichten. Wir analysieren zuerst die Ursache des Schadens und entwickeln anschließend ein technisch sinnvolles Sanierungskonzept. Unser Ziel ist eine dauerhafte Lösung statt einer kurzfristigen Reparatur.",
      },
    ],
  },
  {
    category: "Feuchtigkeit im Keller",
    items: [
      {
        q: "Warum ist mein Keller feucht?",
        a: "Die Ursachen können sehr unterschiedlich sein. Häufig handelt es sich um kapillar aufsteigende Feuchtigkeit, seitlich eindringendes Wasser, drückendes Wasser oder Kondenswasser.",
      },
      {
        q: "Woher kommt die Feuchtigkeit?",
        a: "Das lässt sich erst nach einer fachlichen Untersuchung sicher beurteilen. Eine Besichtigung vor Ort ist hierfür unerlässlich.",
      },
      {
        q: "Ist das Grundwasser?",
        a: "Nicht jede feuchte Wand bedeutet Grundwasser. Häufig liegen andere Ursachen wie Stauwasser oder aufsteigende Feuchtigkeit vor.",
      },
      {
        q: "Ist das Kondenswasser?",
        a: "Kondenswasser entsteht meist durch hohe Luftfeuchtigkeit und unzureichende Lüftung. Eine Begutachtung zeigt, ob tatsächlich Kondensation oder eine Bauwerksundichtigkeit vorliegt.",
      },
      {
        q: "Ist das drückendes Wasser?",
        a: "Das kann möglich sein. Ob drückendes Wasser vorliegt, hängt von den Bodenverhältnissen und dem Lastfall ab.",
      },
      {
        q: "Kann ich meinen Keller wieder trocken bekommen?",
        a: "Ja. In den meisten Fällen kann ein Keller dauerhaft trockengelegt werden. Welche Lösung geeignet ist, hängt vom jeweiligen Schaden ab.",
      },
      {
        q: "Muss von außen aufgegraben werden?",
        a: "Nicht immer. Viele Gebäude können erfolgreich von innen abgedichtet werden.",
      },
      {
        q: "Geht das auch von innen?",
        a: "Ja. Innenabdichtungen sind heute in vielen Fällen eine technisch anerkannte und dauerhafte Lösung.",
      },
      {
        q: "Welche Lösung empfehlen Sie?",
        a: "Das hängt vollständig vom Schadensbild ab. Nach einer kostenlosen Besichtigung erstellen wir ein individuelles Sanierungskonzept.",
      },
    ],
  },
  {
    category: "Schimmel",
    items: [
      {
        q: "Ist Schimmel gefährlich?",
        a: "Schimmel kann gesundheitliche Beschwerden verursachen und sollte fachgerecht entfernt werden.",
      },
      {
        q: "Kann Schimmel Krankheiten verursachen?",
        a: "Ja. Besonders Allergiker und Menschen mit Atemwegserkrankungen können empfindlich reagieren.",
      },
      {
        q: "Wie entfernt man Schimmel dauerhaft?",
        a: "Nicht nur der Schimmel muss entfernt werden, sondern vor allem die Ursache der Feuchtigkeit.",
      },
      {
        q: "Muss die Wand komplett erneuert werden?",
        a: "Nein. Das hängt vom Ausmaß des Schadens ab.",
      },
      {
        q: "Reicht Schimmelentferner aus?",
        a: "In den meisten Fällen leider nicht. Wird die Ursache nicht beseitigt, tritt der Schimmel häufig erneut auf.",
      },
      {
        q: "Wer bezahlt die Schimmelsanierung?",
        a: "Das hängt vom Einzelfall und der Ursache des Schadens ab.",
      },
      {
        q: "Übernimmt das die Versicherung?",
        a: "Je nach Versicherungsvertrag kann eine Kostenübernahme möglich sein.",
      },
    ],
  },
  {
    category: "Bauwerksabdichtung",
    items: [
      {
        q: "Was kostet eine Innenabdichtung?",
        a: "Je nach Lastfall und Untergrund bewegen sich unsere Preise in der Regel zwischen 350 € und 550 € pro m² inklusive aller erforderlichen Arbeiten. Nach der kostenlosen Besichtigung erhalten Sie ein verbindliches Festpreisangebot.",
      },
      {
        q: "Was kostet eine Außenabdichtung?",
        a: "Die Kosten hängen unter anderem von der Aushubtiefe, den Bodenverhältnissen, der Zugänglichkeit und dem Vorbereitungsaufwand ab. Deshalb erstellen wir nach der kostenlosen Besichtigung ein individuelles Angebot.",
      },
      {
        q: "Wie lange dauert eine Abdichtung?",
        a: "Je nach Umfang dauert eine Sanierung meist wenige Tage bis mehrere Wochen.",
      },
      {
        q: "Welche Materialien verwenden Sie?",
        a: "Wir setzen ausschließlich hochwertige und bewährte Abdichtungssysteme ein, die auf den jeweiligen Lastfall abgestimmt werden.",
      },
      {
        q: "Arbeiten Sie nach WTA-Richtlinien?",
        a: "Ja. Unsere Sanierungskonzepte orientieren sich an den anerkannten Regeln der Technik sowie den einschlägigen WTA-Merkblättern.",
      },
      {
        q: "Welche Garantie bekomme ich?",
        a: "Die Garantie richtet sich nach dem jeweiligen Abdichtungssystem und dem Leistungsumfang.",
      },
      {
        q: "Wie lange hält eine Abdichtung?",
        a: "Eine fachgerecht ausgeführte Abdichtung kann viele Jahrzehnte funktionieren.",
      },
    ],
  },
  {
    category: "Horizontalsperre",
    items: [
      {
        q: "Wann brauche ich eine Horizontalsperre?",
        a: "Wenn kapillar aufsteigende Feuchtigkeit aus dem Erdreich in das Mauerwerk eindringt.",
      },
      {
        q: "Welche Verfahren gibt es?",
        a: "Je nach Bauwerk kommen unterschiedliche Injektionsverfahren zum Einsatz.",
      },
      {
        q: "Ist eine Injektage dauerhaft?",
        a: "Ja. Bei fachgerechter Ausführung stellt sie eine dauerhaft wirksame Horizontalsperre dar.",
      },
      {
        q: "Wie hoch sind die Kosten?",
        a: "Je nach Wandstärke liegen unsere Preise in der Regel zwischen 140 € und 250 € pro laufendem Meter.",
      },
    ],
  },
  {
    category: "Balkonabdichtung",
    items: [
      {
        q: "Mein Balkon ist undicht – was kann man tun?",
        a: "Je nach Schadensbild kann eine neue Abdichtung oder eine vollständige Balkonsanierung erforderlich sein.",
      },
      {
        q: "Muss der Belag entfernt werden?",
        a: "Das hängt vom Zustand und vom Abdichtungssystem ab.",
      },
      {
        q: "Wie lange dauert die Sanierung?",
        a: "In der Regel wenige Tage.",
      },
      {
        q: "Können Fliesen erhalten bleiben?",
        a: "Das prüfen wir im Rahmen der Besichtigung.",
      },
    ],
  },
  {
    category: "Sockelabdichtung",
    items: [
      {
        q: "Warum platzt mein Putz ab?",
        a: "Häufig sind Feuchtigkeit und Salze die Ursache.",
      },
      {
        q: "Warum bildet sich Salzausblühung?",
        a: "Gelöste Salze werden mit der Feuchtigkeit an die Oberfläche transportiert.",
      },
      {
        q: "Muss der Sockel komplett erneuert werden?",
        a: "Nicht immer. Das hängt vom Schadensbild ab.",
      },
    ],
  },
  {
    category: "Preise",
    items: [
      {
        q: "Was kostet eine Besichtigung?",
        a: "Die Besichtigung ist kostenlos. Auch die Ersteinschätzung und das Sanierungskonzept erhalten Sie kostenlos.",
      },
      {
        q: "Arbeiten Sie mit Festpreisen?",
        a: "Ja. Wir arbeiten mit transparenten Einheitspreisen und rechnen ausschließlich die tatsächlich ausgeführten Leistungen ab.",
      },
      {
        q: "Wie berechnen Sie Ihre Leistungen?",
        a: "Unsere Einheitspreise setzen sich aus Lohnkosten, Materialkosten, Allgemeinen Geschäftskosten sowie einem angemessenen Gewinnzuschlag zusammen.",
      },
      {
        q: "Gibt es Nachträge?",
        a: "Unser Ziel ist es, Nachträge bereits in der Planungsphase weitestgehend zu vermeiden. Durch eine sorgfältige Schadensanalyse und ein detailliertes Sanierungskonzept minimieren wir das Nachtragspotenzial auf ein Minimum.",
      },
      {
        q: "Gibt es kostenlose Angebote?",
        a: "Ja. Besichtigung, Angebot und Sanierungskonzept sind kostenlos.",
      },
      {
        q: "Kann ich Fotos schicken?",
        a: "Ja, sehr gerne.",
      },
      {
        q: "Können Sie anhand von Bildern schon etwas einschätzen?",
        a: "Ja. Anhand von Fotos können wir häufig bereits eine erste Einschätzung geben. Für eine sichere Diagnose ist jedoch eine Besichtigung vor Ort erforderlich.",
      },
    ],
  },
  {
    category: "Ablauf",
    items: [
      {
        q: "Wie läuft eine Sanierung ab?",
        a: "Besichtigung → Schadensanalyse → Sanierungskonzept → Festpreisangebot → Terminplanung → Ausführung → Abnahme.",
      },
      {
        q: "Wie schnell bekomme ich ein Angebot?",
        a: "In der Regel innerhalb weniger Werktage nach der Besichtigung.",
      },
      {
        q: "Muss ich während der Sanierung ausziehen?",
        a: "In den meisten Fällen nein.",
      },
      {
        q: "Entsteht viel Schmutz?",
        a: "Wir arbeiten mit professionellen Staubschutzmaßnahmen und halten die Belastung so gering wie möglich.",
      },
      {
        q: "Wie schützen Sie meine Einrichtung?",
        a: "Durch Abdeckungen, Staubschutzwände und saubere Arbeitsabläufe.",
      },
    ],
  },
  {
    category: "Versicherung",
    items: [
      {
        q: "Zahlt meine Gebäudeversicherung?",
        a: "Das hängt von Ihrem Versicherungsvertrag und der Schadensursache ab.",
      },
      {
        q: "Arbeiten Sie mit Versicherungen zusammen?",
        a: "Ja. Auf Wunsch unterstützen wir Sie bei der Kommunikation und Dokumentation.",
      },
      {
        q: "Erstellen Sie Gutachten?",
        a: "Wir erstellen technische Schadensanalysen und Sanierungskonzepte. Bei Bedarf arbeiten wir mit Sachverständigen zusammen.",
      },
    ],
  },
  {
    category: "Technik",
    items: [
      {
        q: "Was ist drückendes Wasser?",
        a: "Wasser, das dauerhaft oder zeitweise mit Druck gegen das Bauwerk wirkt.",
      },
      {
        q: "Was ist kapillar aufsteigende Feuchtigkeit?",
        a: "Feuchtigkeit steigt über die feinen Poren des Mauerwerks aus dem Erdreich nach oben.",
      },
      {
        q: "Was ist eine Hohlkehle?",
        a: "Eine Hohlkehle verbindet Boden und Wand und verhindert das Eindringen von Wasser im Übergangsbereich.",
      },
      {
        q: "Was ist eine Sperrputzschicht?",
        a: "Eine Sperrputzschicht schützt das Mauerwerk vor Feuchtigkeit und Salzen und dient als Bestandteil moderner Abdichtungssysteme.",
      },
      {
        q: "Warum verwenden Sie keinen Sanierputz?",
        a: "Wir setzen bevorzugt auf technisch geeignete Abdichtungssysteme und Sperrputze. Welche Lösung sinnvoll ist, hängt vom jeweiligen Schadensbild ab.",
      },
      {
        q: "Was bedeutet diffusionsoffen?",
        a: "Feuchtigkeit in Form von Wasserdampf kann kontrolliert entweichen, während flüssiges Wasser zuverlässig abgehalten wird.",
      },
    ],
  },
  {
    category: "Vertrauen",
    items: [
      {
        q: "Haben Sie Referenzen?",
        a: "Ja. Gerne zeigen wir Ihnen abgeschlossene Projekte.",
      },
      {
        q: "Kann ich Vorher-Nachher-Bilder sehen?",
        a: "Ja. Wir verfügen über zahlreiche dokumentierte Referenzprojekte.",
      },
      {
        q: "Gibt es Kundenbewertungen?",
        a: "Ja. Gerne stellen wir Ihnen unsere Bewertungen zur Verfügung.",
      },
      {
        q: "Wie viele Projekte haben Sie bereits durchgeführt?",
        a: "Wir verfügen über langjährige Erfahrung im Bereich Bauwerksabdichtung und Feuchtigkeitssanierung – gestützt auf die über 1.400 Projekte der drycon-Gruppe.",
      },
      {
        q: "Seit wann gibt es Drycon Core?",
        a: "Drycon Core ist die Abdichtungs-Tochter der drycon® GmbH und baut auf der langjährigen Erfahrung ihrer Bauingenieure und Meisterbetriebe auf.",
      },
    ],
  },
  {
    category: "Terminvereinbarung",
    items: [
      {
        q: "Ich möchte einen Termin vereinbaren.",
        a: "Sehr gerne. Nennen Sie uns einfach Ihre Kontaktdaten und Ihren Wunschtermin.",
      },
      {
        q: "Können Sie mich zurückrufen?",
        a: "Ja. Hinterlassen Sie einfach Ihre Telefonnummer.",
      },
      {
        q: "Wann haben Sie Zeit?",
        a: "Wir prüfen gerne den nächstmöglichen Termin für Sie.",
      },
      {
        q: "Ich habe einen Notfall.",
        a: "Bitte rufen Sie uns direkt an. Wir prüfen kurzfristig eine schnelle Lösung.",
      },
      {
        q: "Mein Keller steht unter Wasser.",
        a: "Bitte sorgen Sie zunächst für Ihre Sicherheit. Anschließend unterstützen wir Sie schnellstmöglich bei der Schadensanalyse und der Planung der notwendigen Sanierungsmaßnahmen.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="Häufige Fragen"
        title={
          <>
            Antworten auf Ihre Fragen
            <br />
            <span className="text-gradient">rund um Abdichtung.</span>
          </>
        }
        intro="Von feuchten Kellern über Schimmel bis zu Kosten und Ablauf – hier finden Sie die wichtigsten Antworten. Ist Ihre Frage nicht dabei? Schreiben Sie uns, wir melden uns schnellstmöglich."
        crumbs={[{ label: "Start", href: "/" }, { label: "FAQ" }]}
      />

      <section className="container-x pb-24">
        <FaqAccordion groups={groups} />

        <Reveal>
          <div className="mt-16 grid items-center gap-8 rounded-3xl bg-linear-to-br from-navy-50 via-white to-teal-50/60 p-8 ring-1 ring-navy-900/5 sm:p-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="h-display text-3xl text-navy-900 sm:text-4xl">
                Ihre Frage war nicht dabei?
              </h2>
              <p className="mt-4 max-w-xl text-base text-navy-700/80">
                Nutzen Sie unsere digitale Schadensanalyse für eine erste
                fachliche Einschätzung – oder sprechen Sie direkt mit uns. Die
                Besichtigung ist kostenlos.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/kontakt"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-navy-900 px-6 text-sm font-semibold text-white transition-all hover:bg-navy-800"
              >
                Kostenlos beraten lassen
                <span aria-hidden className="grid h-7 w-7 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/konfigurator"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-navy-900 ring-1 ring-navy-900/10 transition-colors hover:bg-navy-50"
              >
                Schadensanalyse starten
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
