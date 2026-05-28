import type { Metadata } from "next";
import ServiceDetailLayout from "../../components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Gasleitungssanierung",
  description:
    "Fachgerechte Sanierung undichter oder veralteter Gasleitungen mit DVGW-konformer Ausführung, Druckprüfung und Übergabeprotokoll.",
};

export default function Page() {
  return (
    <ServiceDetailLayout
      eyebrow="Gasleitungssanierung"
      title={
        <>
          Wenn die Leitung
          <br />
          <span className="text-gradient">erneuert werden muss.</span>
        </>
      }
      intro="Bei undichten oder veralteten Leitungen sanieren wir gezielt. Wir tauschen Abschnitte aus, modernisieren Verbindungen und sichern den Bestand. Mit Druckprüfung, Inbetriebnahme und Übergabeprotokoll."
      damageCases={[
        {
          id: "leckstelle",
          title: "Lokalisierte Undichtigkeit",
          problem:
            "Die Prüfung hat eine konkrete Leckstelle ergeben, die saniert werden muss.",
          solution:
            "Gezielter Austausch des defekten Abschnitts inklusive Druckprüfung und Wiederinbetriebnahme.",
        },
        {
          id: "korrosion",
          title: "Korrosion an Bestandsleitung",
          problem:
            "Die Leitung ist sichtbar korrodiert und nicht mehr betriebssicher.",
          solution:
            "Erneuerung des betroffenen Abschnitts mit modernen, normgerechten Materialien.",
        },
        {
          id: "modernisierung",
          title: "Komplette Modernisierung",
          problem:
            "Bestandsanlage ist alt, eine moderne Heizung soll angeschlossen werden.",
          solution:
            "Neuverlegung der Hausinstallation, abgestimmt auf die neuen Geräte.",
        },
        {
          id: "neuanschluss",
          title: "Neue Hausanschluss-Leitung",
          problem:
            "Neuanschluss oder Erweiterung erfordert sauber geplante Leitungen mit Abnahme.",
          solution:
            "Planung nach Regelwerk, Ausführung mit zertifizierten Materialien, Druckprüfung und Übergabe.",
        },
      ]}
      services={[
        {
          title: "Lokalisierung und Demontage",
          body:
            "Wir lokalisieren die defekte Stelle, sichern die Anlage und bauen den betroffenen Abschnitt sauber zurück.",
        },
        {
          title: "Austausch oder Erneuerung",
          body:
            "Defekte Abschnitte werden durch normgerechte, zertifizierte Komponenten ersetzt. Bei größerem Umfang erneuern wir komplette Stränge.",
          bullets: [
            "Zertifizierte Materialien",
            "Saubere Verbindungstechnik",
            "Befestigungen nach Regelwerk",
          ],
        },
        {
          title: "Druck- und Dichtheitsprüfung",
          body:
            "Nach der Sanierung führen wir die vorgeschriebene Prüfung durch und stellen die Anlage wieder in Betrieb.",
          bullets: [
            "Belastungsprüfung",
            "Dichtheitsprüfung",
            "Funktionsprüfung der Geräte",
          ],
        },
        {
          title: "Übergabe und Dokumentation",
          body:
            "Sie bekommen ein vollständiges Protokoll mit allen Messwerten und Materialnachweisen. Damit sind Sie und Ihr Versorger auf der sicheren Seite.",
        },
      ]}
      process={[
        {
          title: "Vor-Ort-Termin",
          text: "Wir prüfen den Befund und besprechen die Maßnahmen mit Ihnen.",
        },
        {
          title: "Festpreisangebot",
          text: "Schriftliches Angebot mit klar abgegrenztem Leistungsumfang und Pauschalpreis.",
        },
        {
          title: "Sicherung der Anlage",
          text: "Wir koordinieren die Abschaltung und sichern die Anlage für die Dauer der Arbeiten.",
        },
        {
          title: "Sanierung",
          text: "Saubere Ausführung mit zertifizierten Materialien und vollständiger Doku.",
        },
        {
          title: "Inbetriebnahme",
          text: "Druckprüfung, Inbetriebnahme und Übergabe der Unterlagen.",
        },
      ]}
      faq={[
        {
          q: "Kann ich während der Sanierung kochen oder heizen?",
          a: "Während der Arbeiten ist die Anlage in Teilen oder komplett außer Betrieb. Wir halten den Zeitraum so kurz wie möglich und stimmen alles vorher ab.",
        },
        {
          q: "Muss ich den Versorger informieren?",
          a: "Wenn nötig, übernehmen wir die Abstimmung mit Ihrem Energieversorger und liefern alle Unterlagen.",
        },
        {
          q: "Wie lange dauert eine Sanierung?",
          a: "Kleine Sanierungen dauern wenige Stunden bis zu einem Tag. Eine komplette Neuverlegung kann mehrere Tage in Anspruch nehmen.",
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
