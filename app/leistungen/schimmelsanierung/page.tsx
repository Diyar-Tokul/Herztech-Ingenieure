import type { Metadata } from "next";
import ServiceDetailLayout from "../../components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Schimmelsanierung",
  description:
    "Fachgerechte Schimmelsanierung nach Ursachenanalyse: Befallsermittlung, Sanierungskonzept und dauerhaft wirksame Ausführung.",
};

export default function Page() {
  return (
    <ServiceDetailLayout
      eyebrow="Schimmelsanierung"
      title={
        <>
          Schimmel entfernen
          <br />
          <span className="text-gradient">und dauerhaft verhindern.</span>
        </>
      }
      intro="Schimmel ist immer ein Symptom, nie die Ursache. Wir analysieren, woher die Feuchtigkeit kommt, entfernen den Befall fachgerecht und beheben die eigentliche Schadensursache. So bleibt Ihre Wohnqualität dauerhaft geschützt, nicht nur bis zum nächsten Befall."
      heroImage="/media/feuchtigkeit-sanierung-start.png"
      heroImageAlt="Drycon Core bei der fachgerechten Schimmelsanierung einer Innenwand"
      damageCases={[
        {
          id: "sichtbarer-befall",
          title: "Sichtbarer Schimmelbefall",
          problem:
            "An Wänden, Decken oder in Ecken zeigen sich dunkle Flecken oder deutlicher Schimmelbefall.",
          solution:
            "Fachgerechte Entfernung des Befalls, Ursachenanalyse und Sanierungskonzept gegen erneuten Befall.",
        },
        {
          id: "muffiger-geruch",
          title: "Muffiger Geruch ohne sichtbaren Befall",
          problem:
            "Es riecht muffig, ein Befall ist aber nicht offensichtlich sichtbar, z. B. hinter Möbeln oder Tapeten.",
          solution:
            "Gezielte Feuchte- und Befallsmessung zur Lokalisierung, anschließend fachgerechte Sanierung.",
        },
        {
          id: "wiederkehrend",
          title: "Wiederkehrender Schimmel",
          problem:
            "Schimmel wurde bereits entfernt, kommt aber immer wieder an derselben Stelle zurück.",
          solution:
            "Analyse der eigentlichen Feuchtequelle (Bauschaden, Wärmebrücke, Lüftung) und dauerhafte Behebung.",
        },
        {
          id: "gesundheitsbelastung",
          title: "Gesundheitliche Bedenken",
          problem:
            "Bewohner reagieren gesundheitlich empfindlich, ein Zusammenhang mit Schimmel wird vermutet.",
          solution:
            "Schnelle, saubere Sanierung mit geeigneten Schutzmaßnahmen und Abschlusskontrolle.",
        },
      ]}
      services={[
        {
          title: "Ursachenanalyse",
          body:
            "Wir ermitteln, ob Baumangel, Wärmebrücke, aufsteigende Feuchtigkeit oder Lüftungsverhalten die Ursache sind, bevor wir sanieren.",
        },
        {
          title: "Fachgerechte Schimmelentfernung",
          body:
            "Befallene Materialien werden fachgerecht entfernt oder saniert, Flächen desinfiziert und behandelt.",
          bullets: [
            "Sichere Entfernung nach Stand der Technik",
            "Schutz angrenzender Bauteile",
            "Desinfektion befallener Flächen",
          ],
        },
        {
          title: "Behebung der Ursache",
          body:
            "Ohne beseitigte Ursache kommt der Schimmel zurück. Wir sanieren die Feuchtequelle, ob bauliches Problem oder Wärmebrücke.",
        },
        {
          title: "Dokumentation und Abnahme",
          body:
            "Sie erhalten eine nachvollziehbare Dokumentation der Sanierung inklusive Empfehlungen zur Vorbeugung.",
        },
      ]}
      process={[
        {
          title: "Vor-Ort-Analyse",
          text: "Wir begutachten den Befall und messen die Feuchtigkeit an den relevanten Bauteilen.",
        },
        {
          title: "Sanierungskonzept",
          text: "Schriftliches Konzept mit Ursache, Maßnahmen und Kosten.",
        },
        {
          title: "Schimmelentfernung",
          text: "Fachgerechte Entfernung mit geeigneten Schutzmaßnahmen für Bewohner und Bausubstanz.",
        },
        {
          title: "Ursachenbehebung",
          text: "Sanierung der eigentlichen Feuchtequelle, damit der Befall nicht zurückkommt.",
        },
        {
          title: "Abschlusskontrolle",
          text: "Prüfung des Ergebnisses und Übergabe der Dokumentation.",
        },
      ]}
      faq={[
        {
          q: "Woher weiß ich, ob der Schimmel gefährlich ist?",
          a: "Größere oder wiederkehrende Befälle sollten immer fachlich untersucht werden. Wir beurteilen die Situation vor Ort und empfehlen die passenden Maßnahmen.",
        },
        {
          q: "Reicht es, den Schimmel abzuwischen?",
          a: "Oberflächliches Reinigen entfernt selten die Ursache. Ohne Ursachenbehebung kommt der Befall in der Regel zurück.",
        },
        {
          q: "Wie lange dauert eine Schimmelsanierung?",
          a: "Je nach Umfang von wenigen Stunden bis zu mehreren Tagen. Nach der Vor-Ort-Analyse nennen wir Ihnen einen realistischen Zeitrahmen.",
        },
      ]}
      nextService={{
        href: "/leistungen/wasserschadensanierung",
        label: "Wasserschadensanierung",
        intro:
          "Wenn Feuchtigkeit durch einen Wasserschaden entstanden ist: fachgerechte Trocknung und Sanierung.",
      }}
    />
  );
}
