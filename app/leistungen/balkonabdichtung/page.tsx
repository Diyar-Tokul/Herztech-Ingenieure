import type { Metadata } from "next";
import ServiceDetailLayout from "../../components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Balkonabdichtung",
  description:
    "Belastbare Balkonabdichtung mit Verbundabdichtung, sauberen Anschlussdetails und neuem Belag. Vom Meisterbetrieb Drycore.",
};

export default function Page() {
  return (
    <ServiceDetailLayout
      eyebrow="Balkonabdichtung"
      title={
        <>
          Balkon,
          <br />
          <span className="text-gradient">der Wetter aushält.</span>
        </>
      }
      intro="Balkone sind dauerhafter Belastung ausgesetzt: Regen, Frost, Sonne und mechanischer Verschleiß. Wir bauen Abdichtungssysteme im Verbund mit dem Belag, die genau dafür gemacht sind."
      damageCases={[
        {
          id: "balkon-belag-undicht",
          title: "Balkonbelag undicht",
          problem:
            "Wasser läuft durch den Belag, an der Decke darunter zeigen sich Flecken oder Risse.",
          solution:
            "Komplettabdichtung mit Verbundabdichtung, fachgerechte Anschlussdetails an Türschwelle und Geländer, neuer Bodenaufbau.",
        },
        {
          id: "fugenwasser",
          title: "Auswaschungen an Fugen",
          problem:
            "Fugen lösen sich, Wasser dringt unter den Belag, Frost sprengt Stellen ab.",
          solution:
            "Saubere Vorbereitung, Sanierung der Fugen und elastische Abdichtung im Verbund mit dem Belag.",
        },
        {
          id: "anschluss-tuer",
          title: "Wasser am Türanschluss",
          problem:
            "Im Türbereich dringt Wasser ins Gebäude, der Schwellenanschluss ist nicht mehr dicht.",
          solution:
            "Sanierung des Schwellenanschlusses mit Dichtbändern und normgerechter Aufkantung.",
        },
        {
          id: "gelaenderpfosten",
          title: "Korrosion am Geländerpfosten",
          problem:
            "Pfosten rosten, weil Wasser an den Befestigungspunkten in den Aufbau eindringt.",
          solution:
            "Demontage, Abdichtung der Bohrpunkte und fachgerechte Wiedermontage mit korrosionsfesten Mitteln.",
        },
      ]}
      services={[
        {
          title: "Bestandsaufnahme und Befund",
          body:
            "Wir prüfen Belag, Anschlüsse, Gefälle und Bauteilaufbau. Sie bekommen einen schriftlichen Befund mit Empfehlung.",
          bullets: [
            "Sichtprüfung des Belags",
            "Prüfung der Anschlussdetails",
            "Gefälle und Entwässerung",
            "Schriftlicher Befund",
          ],
        },
        {
          title: "Abbruch und Untergrundsanierung",
          body:
            "Wir nehmen den alten Belag auf, prüfen die Tragschicht und sanieren sie, wo nötig.",
          bullets: [
            "Belag und Estrich aufnehmen",
            "Tragschicht prüfen",
            "Reprofilierung und Gefälleaufbau",
          ],
        },
        {
          title: "Verbundabdichtung mit Anschlussdetails",
          body:
            "Wir tragen die Abdichtung mehrschichtig auf und führen alle Anschlüsse normgerecht aus.",
          bullets: [
            "Grundierung",
            "Mineralische Dichtungsschlämme oder Flüssigabdichtung",
            "Dichtbänder an Anschlüssen",
            "Hochzüge und Aufkantungen",
          ],
        },
        {
          title: "Neuer Belag",
          body:
            "Auf die Abdichtung kommt der gewünschte Belag, ob Fliese, Holz oder Beschichtung. Wir beraten zur Auswahl.",
          bullets: [
            "Fliesenbelag im Dünnbett",
            "Holzbohlen oder WPC",
            "Flüssigkunststoff-Beschichtung",
          ],
        },
      ]}
      process={[
        {
          title: "Vor-Ort-Termin",
          text: "Wir sehen uns den Balkon an und besprechen Ihre Vorstellungen.",
        },
        {
          title: "Festpreisangebot",
          text: "Schriftliches Angebot mit Leistungen, Materialien und Pauschalpreis.",
        },
        {
          title: "Saubere Baustelle",
          text: "Wir koordinieren alle Gewerke. Ein Ansprechpartner, ein Ergebnis.",
        },
        {
          title: "Ausführung mit Doku",
          text: "Jede Schicht wird dokumentiert. Sie bekommen die Unterlagen zur Abnahme.",
        },
        {
          title: "Abnahme und Gewähr",
          text: "Gemeinsame Abnahme mit Protokoll und langfristiger Gewährleistung.",
        },
      ]}
      faq={[
        {
          q: "Muss der gesamte Balkonbelag runter?",
          a: "Nicht immer. Bei intakter Tragschicht reicht oft eine Aufbauabdichtung mit neuem Belag. Bei tiefer liegenden Schäden ist ein vollständiger Aufbau sinnvoller und auf Dauer günstiger.",
        },
        {
          q: "Welcher Belag eignet sich am besten?",
          a: "Das hängt von Nutzung, Optik und Budget ab. Fliesen sind robust, Holz wirkt natürlich, Flüssigkunststoff ist fugenlos. Wir beraten neutral.",
        },
        {
          q: "Wie lange dauern die Arbeiten?",
          a: "Ein Standard-Balkon ist in einer bis zwei Wochen fertig. Trocknungszeiten zwischen den Schichten sind eingerechnet.",
        },
      ]}
      nextService={{
        href: "/leistungen/garagenabdichtung",
        label: "Garagen- und Bodenabdichtung",
        intro:
          "Belastbare Beschichtung für Garage, Stellplatz und Tiefgarage.",
      }}
    />
  );
}
