import type { Metadata } from "next";
import ServiceDetailLayout from "../../components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Feuchtigkeits- und Sanierungstechnik",
  description:
    "Wasserschadensanierung, Feuchtigkeitsmessung, Schadensanalyse und Sanierungskonzepte. Strukturiertes Vorgehen vom Meisterbetrieb.",
};

export default function Page() {
  return (
    <ServiceDetailLayout
      eyebrow="Feuchtigkeit & Sanierung"
      title={
        <>
          Erst verstehen,
          <br />
          <span className="text-gradient">dann sanieren.</span>
        </>
      }
      intro="Feuchtigkeit hat immer eine Ursache. Wir finden sie mit Messtechnik und Erfahrung. Dann bekommen Sie ein Sanierungskonzept, das hält und nicht den nächsten Schaden vorbereitet."
      damageCases={[
        {
          id: "wasserschaden",
          title: "Akuter Wasserschaden",
          problem:
            "Rohrbruch, Starkregen oder Rückstau. Bauteile sind durchnässt, Folgeschäden drohen.",
          solution:
            "Sofortmaßnahmen, Bautrocknung, Schadenskartierung und abgestimmte Wiederherstellung. Bei Bedarf in Abstimmung mit Versicherung.",
        },
        {
          id: "schimmelverdacht",
          title: "Schimmelverdacht",
          problem:
            "Dunkle Flecken, Geruch, gesundheitliche Beschwerden. Die Ursache ist meist Feuchtigkeit im Bauteil.",
          solution:
            "Messung, Quellensuche, Beseitigung der Ursache und fachgerechte Sanierung der betroffenen Bauteile.",
        },
        {
          id: "salzausblühungen",
          title: "Salzausblühungen und feuchter Putz",
          problem:
            "Wand zeigt weiße Kristalle und bröckelnden Putz, oft im Sockelbereich.",
          solution:
            "Trocknung, Salzanalyse, Sanierputzsystem oder Innenabdichtung in Kombination mit Horizontalsperre.",
        },
        {
          id: "unklare-ursache",
          title: "Unklare Ursache",
          problem:
            "Sie sehen Schäden, aber nicht, woher sie kommen. Ohne Diagnose keine sichere Lösung.",
          solution:
            "Strukturierte Schadensanalyse mit Bauteilfeuchtemessung, Endoskopie und gegebenenfalls Thermografie.",
        },
      ]}
      services={[
        {
          title: "Feuchtigkeits- und Wasserschadensanierung",
          body:
            "Vom Erstbesuch bis zur abgenommenen Maßnahme. Wir koordinieren Trocknung, Demontage, Sanierung und Aufbau und halten Sie auf dem Laufenden.",
          bullets: [
            "Sofortmaßnahmen zur Schadensminimierung",
            "Bautrocknung mit Dokumentation",
            "Wiederherstellung der Bauteile",
            "Saubere Schnittstellen mit Versicherung",
          ],
        },
        {
          title: "Schadensanalyse und Feuchtigkeitsmessung",
          body:
            "Wir messen, statt zu raten. Mit kalibrierter Messtechnik bestimmen wir Bauteilfeuchte und ermitteln die Quelle. Das Ergebnis ist ein klares Bild des Schadens.",
          bullets: [
            "Kapazitive und elektrische Messung",
            "Endoskopische Bauteilprüfung",
            "Thermografie bei Bedarf",
            "Schriftlicher Befundbericht",
          ],
        },
        {
          title: "Sanierungskonzepte für Feuchtigkeitsschäden",
          body:
            "Auf Grundlage der Diagnose entwickeln wir das Konzept. Wir kombinieren Maßnahmen so, dass jede zur Ursache passt und auf die nächste aufbaut.",
          bullets: [
            "Maßnahmenkatalog mit Reihenfolge",
            "Material- und Systemwahl",
            "Kostenrahmen und Zeitplan",
            "Optional: zweite Meinung",
          ],
        },
      ]}
      process={[
        {
          title: "Sofortkontakt",
          text: "Bei akuten Schäden reagieren wir innerhalb von 24 Stunden und sagen Ihnen, was Sie sofort tun sollten.",
        },
        {
          title: "Vor-Ort-Aufnahme",
          text: "Wir nehmen den Schaden auf, messen und sichern Beweise für die Schadensregulierung.",
        },
        {
          title: "Diagnose und Bericht",
          text: "Schriftlicher Befund mit Ursachen, Empfehlungen und Prioritäten.",
        },
        {
          title: "Sanierungskonzept",
          text: "Konzept mit klaren Positionen, Zeitplan und Festpreis.",
        },
        {
          title: "Umsetzung und Abnahme",
          text: "Saubere Ausführung, dokumentierte Trocknung, gemeinsame Abnahme.",
        },
      ]}
      faq={[
        {
          q: "Übernimmt die Versicherung die Kosten?",
          a: "Bei vielen Schäden ja. Wir liefern die nötige Dokumentation, damit die Regulierung reibungslos läuft. Über die genaue Deckung entscheidet Ihr Vertrag.",
        },
        {
          q: "Wie schnell ist getrocknet?",
          a: "Das hängt von Bauteil und Aufbau ab. Übliche Trocknungszeiten liegen zwischen wenigen Tagen und mehreren Wochen. Wir messen, statt zu schätzen.",
        },
        {
          q: "Reicht es, die Wand zu streichen?",
          a: "Nein, das verdeckt nur das Symptom. Ohne Beseitigung der Ursache kommt der Schaden zurück. Wir behandeln immer die Ursache und das Bauteil.",
        },
      ]}
      nextService={{
        href: "/leistungen/gasleitungspruefung",
        label: "Gasleitungsprüfung",
        intro:
          "Sicherheit für Ihre Hausinstallation, mit Sicht- und Dichtheitsprüfung nach DVGW.",
      }}
    />
  );
}
