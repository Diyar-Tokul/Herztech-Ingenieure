import type { Metadata } from "next";
import ServiceDetailLayout from "../../components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Abdichtungssysteme",
  description:
    "Innenabdichtung, Außenabdichtung, Sockelabdichtung, Horizontalsperre und Bodenabdichtung. Bauwerksabdichtung nach DIN 18533 vom Ingenieurbetrieb für Abdichtungstechnik.",
};

export default function Page() {
  return (
    <ServiceDetailLayout
      eyebrow="Abdichtungssysteme"
      title={
        <>
          Bauwerksabdichtung
          <br />
          <span className="text-gradient">vom Keller bis zum Sockel.</span>
        </>
      }
      intro="Feuchte Wände, abplatzender Putz, salzige Ausblühungen oder eindringendes Wasser zerstören die Bausubstanz und die Wohnqualität. Wir analysieren die Ursache, planen das passende System und führen es selbst aus. Innen, außen, im Sockel, als Horizontalsperre oder am Boden. Alles nach DIN 18533, ingenieurgeführt mit über 30 Jahren gebündelter Erfahrung."
      heroImage="/media/AbdichtungssystemeLeistung.png"
      heroImageAlt="Drycore Team bei der Bauwerksabdichtung einer Kellerwand"
      damageCases={[
        {
          id: "kellerwand-feucht",
          title: "Feuchte Kellerwand von innen",
          problem:
            "Sichtbare Flecken, abplatzender Putz oder muffiger Geruch im Untergeschoss. Eine Außenabdichtung ist nicht möglich oder nicht wirtschaftlich.",
          solution:
            "Innenabdichtung mit mineralischer Dichtungsschlämme, Sperrputz und gezielter Trocknung. Wir wählen das System passend zum Wandaufbau.",
        },
        {
          id: "aussenwand-erdberuehrt",
          title: "Eindringendes Wasser von außen",
          problem:
            "Drückendes oder nicht drückendes Wasser belastet die erdberührten Bauteile und schädigt die Substanz.",
          solution:
            "Außenabdichtung mit kunststoffmodifizierter Bitumendickbeschichtung oder reaktiver Dichtschlämme, inklusive Schutzschicht und Drainage falls erforderlich.",
        },
        {
          id: "sockel-spritzwasser",
          title: "Sockel beschädigt durch Spritzwasser",
          problem:
            "Putz löst sich im Übergang von Erdreich zur Fassade. Salzkristalle und Risse sind sichtbar.",
          solution:
            "Sockelabdichtung als sauberer Übergang zwischen Erd- und Spritzwasserbereich, abgestimmt auf das Fassadensystem.",
        },
        {
          id: "aufsteigende-feuchtigkeit",
          title: "Aufsteigende Feuchtigkeit in Mauerwerk",
          problem:
            "Feuchte zieht in den Wänden hoch, hinterlässt Salze und schädigt Putz, Tapete und Bodenanschlüsse.",
          solution:
            "Horizontalsperre durch Injektion mit zertifiziertem Wirkstoff. Wir bohren, sättigen und dokumentieren jeden Schritt.",
        },
        {
          id: "kellerboden",
          title: "Aufsteigende Feuchte im Kellerboden",
          problem:
            "Boden ist dauerhaft kühl und feucht, Estrich oder Beläge nehmen Schaden.",
          solution:
            "Bodenabdichtung als flächige Sperrschicht, kombinierbar mit Trockenestrich oder Hohlraumboden.",
        },
        {
          id: "altbau",
          title: "Altbau ohne funktionierende Abdichtung",
          problem:
            "Historische Gebäude wurden oft ohne moderne Abdichtung errichtet. Mehrere Schadensbilder treten parallel auf.",
          solution:
            "Gesamtkonzept: Diagnose, Priorisierung der Maßnahmen, Kombination aus Außen-, Innen- und Horizontalabdichtung in sinnvoller Reihenfolge.",
        },
      ]}
      services={[
        {
          title: "Innenabdichtung von Kellerwänden",
          body:
            "Wenn eine Außenabdichtung nicht möglich oder unverhältnismäßig ist, dichten wir von innen ab. Wir setzen mineralische Systeme ein, die Feuchte zurückhalten und mit dem Mauerwerk arbeiten.",
          bullets: [
            "Untergrund vorbereiten und reprofilieren",
            "Mineralische Dichtungsschlämme aufbringen",
            "Sperrputz für trockene Oberfläche",
            "Nachbehandlung und Trocknung",
          ],
        },
        {
          title: "Außenabdichtung erdberührter Bauteile",
          body:
            "Die nachhaltigste Lösung gegen Bodenfeuchte. Wir legen frei, bereiten den Untergrund vor und tragen das passende System auf, inklusive Schutzschicht und ggf. Drainage.",
          bullets: [
            "Freilegen und Reinigen der Wand",
            "Hohlkehle, Voranstrich, Dickbeschichtung",
            "Perimeterdämmung optional",
            "Hinterfüllung mit Schutzlage",
          ],
        },
        {
          title: "Sockelabdichtung",
          body:
            "Der Spritzwasserbereich ist die Achillesferse vieler Fassaden. Wir setzen eine durchgehende Sockelabdichtung als sauberen Übergang.",
          bullets: [
            "Mineralische Dichtschlämme im Sockel",
            "Anschluss an Fassade und Boden",
            "Saubere Höhenkante",
          ],
        },
        {
          title: "Horizontalsperre gegen aufsteigende Feuchtigkeit",
          body:
            "Mit Injektionsverfahren stoppen wir die kapillare Feuchtigkeit dauerhaft. Bohrlöcher werden im definierten Raster gesetzt und mit zertifiziertem Wirkstoff gesättigt.",
          bullets: [
            "Wandanalyse und Bohrraster",
            "Druckloses oder druckunterstütztes Injizieren",
            "Verschluss und Putzanschluss",
            "Dokumentation jedes Bohrlochs",
          ],
        },
        {
          title: "Bodenabdichtung von Kellerräumen",
          body:
            "Eine flächige Sperrschicht hält den Boden trocken. Wir kombinieren die Bodenabdichtung mit den Wandanschlüssen zu einem geschlossenen System.",
          bullets: [
            "Untergrund prüfen und vorbereiten",
            "Grundierung und Sperrschicht",
            "Anschluss an Wandabdichtung",
          ],
        },
      ]}
      process={[
        {
          title: "Termin vor Ort",
          text: "Wir sehen uns das Objekt an, hören Ihre Beobachtungen und schätzen die Lage realistisch ein.",
        },
        {
          title: "Feuchtigkeitsmessung und Bauteilaufbau",
          text: "Mit Messtechnik prüfen wir, wo die Feuchte sitzt und wie die Wand aufgebaut ist. Erst dann entsteht ein Konzept.",
        },
        {
          title: "Sanierungskonzept und Festpreis",
          text: "Sie bekommen ein schriftliches Konzept mit klaren Positionen, Materialien und einem verbindlichen Preis.",
        },
        {
          title: "Ausführung mit Dokumentation",
          text: "Jede Schicht, jedes Produkt und jeder Trocknungsverlauf wird dokumentiert. Sauber, planbar, nachweisbar.",
        },
        {
          title: "Abnahme und Gewähr",
          text: "Gemeinsame Abnahme, Übergabe der Unterlagen und langfristige Erreichbarkeit. Wir bleiben Ihr Ansprechpartner.",
        },
      ]}
      faq={[
        {
          q: "Was ist besser, Innen- oder Außenabdichtung?",
          a: "Außen ist meistens langlebiger, weil das Wasser gar nicht erst an die Wand kommt. Wenn das nicht möglich ist, etwa bei Anbauten oder dichter Bebauung, liefert eine fachgerecht geplante Innenabdichtung sehr gute Ergebnisse.",
        },
        {
          q: "Wie lange dauert eine Kellerabdichtung?",
          a: "Das hängt von Fläche und Schadensbild ab. Eine Innenabdichtung eines Kellerraums dauert oft wenige Tage, eine umfassende Außenabdichtung mehrere Wochen. Sie bekommen einen verbindlichen Zeitplan.",
        },
        {
          q: "Sind die Maßnahmen wirklich dauerhaft?",
          a: "Ja, wenn Diagnose, Material und Ausführung zusammenpassen. Genau deshalb investieren wir Zeit in die Vorbereitung und arbeiten ausschließlich mit erprobten Systemen.",
        },
        {
          q: "Was kostet eine Horizontalsperre?",
          a: "Der Preis hängt von Wandstärke, Material und Zugänglichkeit ab. Nach dem Vor-Ort-Termin bekommen Sie eine belastbare Kalkulation.",
        },
      ]}
      nextService={{
        href: "/leistungen/balkonabdichtung",
        label: "Balkonabdichtung",
        intro:
          "Balkone sicher und langlebig abdichten, von der Vorbereitung bis zum neuen Belag.",
      }}
    />
  );
}
