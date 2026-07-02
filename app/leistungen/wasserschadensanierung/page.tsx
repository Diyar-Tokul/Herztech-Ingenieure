import type { Metadata } from "next";
import ServiceDetailLayout from "../../components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Wasserschadensanierung",
  description:
    "Fachgerechte Wasserschadensanierung: schnelle Schadensbegrenzung, professionelle Trocknung und dauerhafte Instandsetzung.",
};

export default function Page() {
  return (
    <ServiceDetailLayout
      eyebrow="Wasserschadensanierung"
      title={
        <>
          Wasserschaden?
          <br />
          <span className="text-gradient">Schnell und gründlich.</span>
        </>
      }
      intro="Ob Rohrbruch, Starkregen oder ein defektes Gerät: Bei einem Wasserschaden zählt jede Stunde. Wir begrenzen den Schaden, trocknen fachgerecht und setzen betroffene Bauteile dauerhaft instand, damit aus dem akuten Schaden kein Folgeschaden wie Schimmel wird."
      heroImage="/media/feuchte-keller-beratung.jpeg"
      heroImageAlt="Drycon Core bei der Sanierung eines Wasserschadens"
      damageCases={[
        {
          id: "rohrbruch",
          title: "Rohrbruch oder Leitungswasserschaden",
          problem:
            "Ein geplatztes Rohr oder eine undichte Leitung hat Wände, Boden oder Decke durchfeuchtet.",
          solution:
            "Sofortige Schadensbegrenzung, professionelle Trocknung und Instandsetzung der betroffenen Bauteile.",
        },
        {
          id: "starkregen",
          title: "Starkregen oder Hochwasser",
          problem:
            "Eindringendes Wasser von außen hat Keller oder Erdgeschoss durchfeuchtet.",
          solution:
            "Wasserentfernung, Trocknung und Prüfung, ob zusätzlich abgedichtet werden muss.",
        },
        {
          id: "geraeteschaden",
          title: "Defektes Haushaltsgerät",
          problem:
            "Waschmaschine, Spülmaschine oder Heizung sind ausgelaufen und haben Feuchtschäden verursacht.",
          solution:
            "Zügige Trocknung und Instandsetzung, bevor Folgeschäden wie Schimmel entstehen.",
        },
        {
          id: "altschaden",
          title: "Unbemerkter Altschaden",
          problem:
            "Ein länger zurückliegender Wasserschaden wird erst jetzt entdeckt, z. B. durch Geruch oder Verfärbungen.",
          solution:
            "Vollständige Schadensaufnahme, Trocknung und Sanierung inklusive Prüfung auf Folgeschäden.",
        },
      ]}
      services={[
        {
          title: "Schadensbegrenzung",
          body:
            "Wir stoppen die Feuchtigkeitsquelle, sichern die Bausubstanz und leiten die ersten Sofortmaßnahmen ein.",
        },
        {
          title: "Professionelle Trocknung",
          body:
            "Mit geeigneter Trocknungstechnik entfernen wir die Feuchtigkeit aus Wänden, Böden und Dämmung, kontrolliert und nachvollziehbar.",
          bullets: [
            "Feuchtemessung vor und während der Trocknung",
            "Technische Trocknung von Wand, Boden und Estrich",
            "Laufende Erfolgskontrolle",
          ],
        },
        {
          title: "Instandsetzung",
          body:
            "Beschädigte Materialien werden fachgerecht erneuert, damit der ursprüngliche Zustand wiederhergestellt wird.",
        },
        {
          title: "Vorbeugung von Folgeschäden",
          body:
            "Wir prüfen, ob Schimmelrisiko besteht, und leiten bei Bedarf direkt vorbeugende Maßnahmen ein.",
        },
      ]}
      process={[
        {
          title: "Sofortkontakt und Schadensaufnahme",
          text: "Wir nehmen den Schaden zügig auf und stoppen die Feuchtigkeitsquelle.",
        },
        {
          title: "Trocknungskonzept",
          text: "Festlegung der Trocknungstechnik je nach Bauteil und Schadensumfang.",
        },
        {
          title: "Technische Trocknung",
          text: "Kontrollierte Trocknung mit regelmäßiger Feuchtemessung.",
        },
        {
          title: "Instandsetzung",
          text: "Sanierung und Wiederherstellung der betroffenen Bauteile.",
        },
        {
          title: "Abschlusskontrolle",
          text: "Prüfung auf Restfeuchte und Folgeschäden, Übergabe der Dokumentation.",
        },
      ]}
      faq={[
        {
          q: "Wie schnell sollte ich nach einem Wasserschaden handeln?",
          a: "Am besten sofort. Je länger Feuchtigkeit einwirkt, desto größer das Risiko für Bausubstanz und Schimmelbildung.",
        },
        {
          q: "Übernimmt die Versicherung die Kosten?",
          a: "In vielen Fällen ja. Wir dokumentieren den Schaden nachvollziehbar, damit Sie die Unterlagen bei Ihrer Versicherung einreichen können.",
        },
        {
          q: "Wie lange dauert eine Trocknung?",
          a: "Abhängig vom Schadensumfang und den betroffenen Bauteilen meist mehrere Tage bis wenige Wochen. Wir informieren Sie laufend über den Fortschritt.",
        },
      ]}
      nextService={{
        href: "/leistungen/abdichtungssysteme",
        label: "Abdichtungssysteme",
        intro:
          "Bauwerksabdichtung von Innen, Außen, Sockel, Horizontalsperre und Bodenabdichtung.",
      }}
    />
  );
}
