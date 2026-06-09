import type { Metadata } from "next";
import ServiceDetailLayout from "../../components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Garagen- und Bodenabdichtung",
  description:
    "Belastbare Garagen- und Bodenabdichtung mit Reaktionsharzbeschichtung. Dauerhaft gegen Wasser, Frost und Tausalz.",
};

export default function Page() {
  return (
    <ServiceDetailLayout
      eyebrow="Garagen- und Bodenabdichtung"
      title={
        <>
          Böden,
          <br />
          <span className="text-gradient">die alles aushalten.</span>
        </>
      }
      intro="Risse im Beton, Tausalzschäden und stehendes Wasser greifen Garage und Stellplatz an, bis am Ende die Bewehrung rostet. Wir setzen Industriebodensysteme ein, die abdichten und mechanisch belastbar bleiben. Saubere Vorbereitung, normgerechte Beschichtung und ein Sockelanschluss, der dicht ist. Mit über 30 Jahren gebündelter Erfahrung im Team."
      heroImage="/media/garagenabdichtung-start.png"
      heroAlt="Beschichteter Garagenboden mit Verschleißschutz"
      damageCases={[
        {
          id: "risse-im-boden",
          title: "Risse und Abplatzungen im Garagenboden",
          problem:
            "Punktuelle Belastung, Tausalz und stehendes Wasser führen zu Schäden bis zur Bewehrung.",
          solution:
            "Reaktionsharzbasierte Beschichtung mit Verschleißschutz, abdichtend und mechanisch belastbar.",
        },
        {
          id: "tiefgarage",
          title: "Eindringende Feuchte in Tiefgarage",
          problem:
            "Wasser sucht sich seinen Weg durch Decke, Sockel oder Bodenplatte und gefährdet Stahlbeton.",
          solution:
            "Systemabdichtung mit OS-Beschichtung, gezielter Rissverpressung und Schutz der Bewehrung.",
        },
        {
          id: "kellerboden",
          title: "Kellerboden ständig feucht",
          problem:
            "Boden bleibt dauerhaft kalt und nass, Estrich und Beläge nehmen Schaden.",
          solution:
            "Flächige Bodenabdichtung in Kombination mit Wandanschluss zu einem dichten System.",
        },
        {
          id: "stellplatz",
          title: "Außenstellplatz unter Wasser",
          problem:
            "Wasser steht auf der Fläche, das Gefälle stimmt nicht oder die Beschichtung ist defekt.",
          solution:
            "Gefälleaufbau und neue, frostbeständige Abdichtungs-Beschichtung.",
        },
      ]}
      services={[
        {
          title: "Untergrundvorbereitung",
          body:
            "Eine gute Beschichtung braucht einen sauberen, festen Untergrund. Wir bereiten ihn mechanisch vor.",
          bullets: [
            "Fräsen oder Kugelstrahlen",
            "Saugfähigkeit prüfen",
            "Schadstellen ausbessern",
          ],
        },
        {
          title: "Grundierung und Spachtelung",
          body:
            "Mit Grundierung und Spachtelung gleichen wir Unebenheiten aus und schaffen die Basis für die Beschichtung.",
          bullets: [
            "Reaktionsharz-Grundierung",
            "Spachtelung kleiner Unebenheiten",
            "Saubere Vorbereitung der Anschlüsse",
          ],
        },
        {
          title: "Beschichtung mit Verschleißschutz",
          body:
            "Die Beschichtung dichtet ab und schützt mechanisch. Wir wählen das System passend zur Nutzung.",
          bullets: [
            "Epoxidharz oder PUR-System",
            "Eingestreute Quarzsande",
            "Versiegelung mit Verschleißschutz",
          ],
        },
        {
          title: "Sockelanschluss",
          body:
            "Wir führen die Abdichtung sauber an die Wand hoch, damit Wasser nicht hinterläuft.",
          bullets: [
            "Hochzug an die Wand",
            "Anschluss an Türen und Tore",
            "Übergang zu Außenflächen",
          ],
        },
      ]}
      process={[
        {
          title: "Aufnahme der Fläche",
          text: "Wir messen, prüfen den Untergrund und besprechen die Nutzung.",
        },
        {
          title: "System wählen",
          text: "Je nach Belastung, Optik und Budget wählen wir das passende System.",
        },
        {
          title: "Angebot mit Festpreis",
          text: "Schriftliches Angebot mit allen Leistungen und einem klaren Preis.",
        },
        {
          title: "Ausführung",
          text: "Wir koordinieren die Trocknungszeiten und halten den Ablauf so schlank wie möglich.",
        },
        {
          title: "Abnahme und Pflege",
          text: "Übergabeprotokoll und Pflegehinweise. Wir bleiben Ansprechpartner.",
        },
      ]}
      faq={[
        {
          q: "Wie lange ist eine Garagenbeschichtung haltbar?",
          a: "Bei sachgerechter Ausführung und normaler Nutzung halten die Systeme viele Jahre. Pflegehinweise und Nachsorge verlängern die Lebensdauer.",
        },
        {
          q: "Kann ich die Garage während der Arbeiten nutzen?",
          a: "Nein, während der Ausführung und der Aushärtung steht die Fläche nicht zur Verfügung. Wir halten den Zeitraum so kurz wie möglich.",
        },
        {
          q: "Ist die Beschichtung rutschfest?",
          a: "Ja, wir wählen Einstreuung und Versiegelung so, dass die geforderte Rutschhemmung erreicht wird.",
        },
      ]}
      nextService={{
        href: "/leistungen/feuchtigkeit-und-sanierung",
        label: "Feuchtigkeit und Sanierung",
        intro:
          "Wenn Wasser schon eingedrungen ist: messen, planen, trocknen und dauerhaft beheben.",
      }}
    />
  );
}
