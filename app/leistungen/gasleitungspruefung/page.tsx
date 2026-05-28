import type { Metadata } from "next";
import ServiceDetailLayout from "../../components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Gasleitungsprüfung",
  description:
    "Dichtheits- und Druckprüfung von Gas-Hausinstallationen nach DVGW und TRGI. Mit verständlichem Protokoll.",
};

export default function Page() {
  return (
    <ServiceDetailLayout
      eyebrow="Gasleitungsprüfung"
      title={
        <>
          Sicherheit
          <br />
          <span className="text-gradient">mit Protokoll.</span>
        </>
      }
      intro="Gasleitungen sind sicherheitsrelevant. Wir prüfen Ihre Hausinstallation nach DVGW-Regelwerk und TRGI, dokumentieren das Ergebnis und sagen klar, ob alles in Ordnung ist."
      damageCases={[
        {
          id: "regelpruefung",
          title: "Regelmäßige Sicherheitsprüfung",
          problem:
            "Die wiederkehrende Prüfung der Gasinstallation steht an oder wurde verschoben.",
          solution:
            "Termingerechte Sicht- und Dichtheitsprüfung mit sauberem Protokoll für Ihre Unterlagen.",
        },
        {
          id: "druckverlust",
          title: "Druckverlust im System",
          problem:
            "Der Druck in der Anlage hält nicht. Es besteht der Verdacht auf eine Undichtigkeit.",
          solution:
            "Strukturierte Leckortung, Druckprüfung und konkrete Empfehlung für die Sanierung.",
        },
        {
          id: "geruchsverdacht",
          title: "Leichter Gasgeruch",
          problem:
            "Sie nehmen einen leichten Geruch wahr und möchten Sicherheit haben.",
          solution:
            "Sofortige Leckortung mit Messgerät und klare Handlungsempfehlung, falls Mängel gefunden werden.",
        },
        {
          id: "modernisierung",
          title: "Vor der Modernisierung",
          problem:
            "Eine neue Heizung oder ein neues Gerät kommt, der Zustand der Bestandsleitung soll geprüft werden.",
          solution:
            "Komplette Bestandsprüfung als Grundlage für die nächste Investition.",
        },
      ]}
      services={[
        {
          title: "Sichtprüfung der Leitungen",
          body:
            "Wir prüfen sichtbare Leitungen, Armaturen, Verbindungen und Befestigungen auf Schäden, Korrosion oder Unregelmäßigkeiten.",
        },
        {
          title: "Dichtheitsprüfung mit Messgerät",
          body:
            "Mit kalibriertem Prüfgerät stellen wir fest, ob die Leitung dicht ist und wo eventuell eine Undichtigkeit liegt.",
          bullets: [
            "Gebrauchsfähigkeitsprüfung",
            "Belastungsprüfung",
            "Dichtheitsprüfung",
          ],
        },
        {
          title: "Protokoll für Unterlagen und Versorger",
          body:
            "Sie bekommen ein schriftliches Protokoll, das den Anforderungen Ihres Energieversorgers und der Vorschriften entspricht.",
        },
        {
          title: "Handlungsempfehlung",
          body:
            "Falls Mängel gefunden werden, bekommen Sie eine klare Empfehlung mit Priorität, Zeitrahmen und realistischer Kostenschätzung.",
        },
      ]}
      process={[
        {
          title: "Terminvereinbarung",
          text: "Wir koordinieren den Termin mit Ihnen, gerne auch mit anderen Beteiligten im Haus.",
        },
        {
          title: "Prüfung vor Ort",
          text: "Sicht- und Messprüfung nach TRGI, transparent und verständlich erklärt.",
        },
        {
          title: "Protokoll und Empfehlung",
          text: "Klares Protokoll mit Ergebnis und, falls nötig, konkreter Empfehlung.",
        },
        {
          title: "Übergabe und Erinnerung",
          text: "Unterlagen für Ihre Akte, auf Wunsch Erinnerung an die nächste Prüfung.",
        },
      ]}
      faq={[
        {
          q: "Wie oft muss eine Gasanlage geprüft werden?",
          a: "Die Intervalle ergeben sich aus dem DVGW-Regelwerk und dem Anlagentyp. Wir nennen Ihnen den richtigen Turnus und erinnern Sie aktiv.",
        },
        {
          q: "Wie lange dauert eine Prüfung?",
          a: "In einem Einfamilienhaus meist ein bis zwei Stunden, abhängig von Größe und Zugänglichkeit der Anlage.",
        },
        {
          q: "Was, wenn die Prüfung negativ ausfällt?",
          a: "Wir besprechen das Ergebnis direkt, dokumentieren die Mängel und schlagen die nötigen Maßnahmen vor. Akute Risiken werden sofort gesichert.",
        },
      ]}
      nextService={{
        href: "/leistungen/gasleitungssanierung",
        label: "Gasleitungssanierung",
        intro:
          "Wenn Leitungen undicht sind oder ersetzt werden müssen: fachgerechte Sanierung mit Doku.",
      }}
    />
  );
}
