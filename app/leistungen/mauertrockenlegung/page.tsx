import type { Metadata } from "next";
import ServiceDetailLayout from "../../components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Mauertrockenlegung",
  description:
    "Mauertrockenlegung gegen aufsteigende Feuchtigkeit: nachträgliche Horizontalsperre, Mauerwerksinjektion und Sanierputz. Drycore legt feuchte Wände und Kellerwände dauerhaft trocken – normgerecht nach WTA und DIN 18533.",
  keywords: [
    "Mauertrockenlegung",
    "Mauerwerkstrockenlegung",
    "Trockenlegung Mauerwerk",
    "aufsteigende Feuchtigkeit",
    "feuchte Wände",
    "nasse Kellerwände",
    "Horizontalsperre",
    "Horizontalabdichtung",
    "nachträgliche Abdichtung",
    "Mauerwerksinjektion",
    "Injektionsverfahren",
    "Kellertrockenlegung",
    "Salzausblühungen",
    "Sanierputz",
    "Bauwerksabdichtung",
  ],
};

export default function Page() {
  return (
    <ServiceDetailLayout
      eyebrow="Mauertrockenlegung"
      title={
        <>
          Mauertrockenlegung gegen
          <br />
          <span className="text-gradient">aufsteigende Feuchtigkeit.</span>
        </>
      }
      intro="Feuchte Wände, abplatzender Putz und ein muffiger Geruch im Keller? Das sind klassische Anzeichen für aufsteigende Feuchtigkeit im Mauerwerk. Mit einer fachgerechten Mauertrockenlegung – nachträgliche Horizontalsperre, Mauerwerksinjektion und Sanierputz – legt Drycore Ihr Mauerwerk dauerhaft trocken und sorgt wieder für ein gesundes Raumklima. Normgerecht nach WTA-Merkblatt und DIN 18533, mit Messung, Konzept und Dokumentation."
      heroImage="/media/mauertrockenlegung-horizontalsperre.jpeg"
      heroImageAlt="Drycore Team beim Einbringen einer Horizontalsperre zur Mauertrockenlegung"
      damageCases={[
        {
          id: "aufsteigende-feuchtigkeit",
          title: "Kapillar aufsteigende Feuchtigkeit",
          problem:
            "Ohne funktionierende Horizontalsperre saugt das Mauerwerk Wasser aus dem Erdreich kapillar nach oben. Feuchteränder, Stockflecken und ein dauerhaft klammes Raumklima sind die Folge.",
          solution:
            "Nachträgliche Horizontalsperre durch Mauerwerksinjektion: Wir setzen ein Bohrlochraster, sättigen das Mauerwerk mit zertifiziertem Wirkstoff und unterbrechen den kapillaren Wassertransport dauerhaft.",
        },
        {
          id: "salzausbluehungen",
          title: "Salzausblühungen und Salpeter",
          problem:
            "Weiße, flauschige Kristalle an der Wandoberfläche und bröckelnder Putz im Sockelbereich zeigen, dass mit der Feuchtigkeit bauschädliche Salze ins Mauerwerk wandern.",
          solution:
            "Nach der Trockenlegung tragen wir einen WTA-zertifizierten Sanierputz auf, der die Salze einlagert und die Wand atmen lässt – für eine dauerhaft trockene, saubere Oberfläche.",
        },
        {
          id: "nasse-kellerwand",
          title: "Nasse Kellerwände",
          problem:
            "Dunkle, feuchte Flecken an Kellerwänden, abblätternde Farbe und modriger Geruch. Lagerräume und Hobbykeller lassen sich kaum noch nutzen.",
          solution:
            "Kellertrockenlegung als Gesamtkonzept: Horizontalsperre gegen aufsteigende Feuchte, ergänzt um Innen- oder Außenabdichtung gegen seitlich eindringendes Wasser.",
        },
        {
          id: "schimmel-raumklima",
          title: "Schimmel und schlechtes Raumklima",
          problem:
            "Anhaltend feuchte Wände erhöhen die Luftfeuchtigkeit und schaffen den Nährboden für Schimmel – ein Risiko für die Bausubstanz und für die Gesundheit.",
          solution:
            "Wir entziehen dem Schimmel mit der Mauertrockenlegung die Grundlage, entfernen befallene Bereiche fachgerecht und stellen ein trockenes, gesundes Raumklima wieder her.",
        },
        {
          id: "altbau-ohne-sperre",
          title: "Altbau ohne Horizontalabdichtung",
          problem:
            "Viele ältere Gebäude wurden ohne durchgehende Horizontalabdichtung errichtet. Die Feuchtigkeit zieht ungehindert in Wände und Bodenanschlüsse.",
          solution:
            "Nachträgliche Horizontalabdichtung im Bestand – auch bei stark durchfeuchtetem Mauerwerk. Wir wählen das Injektionsverfahren passend zum Durchfeuchtungsgrad und zur Wandstärke.",
        },
        {
          id: "putz-tapete",
          title: "Abplatzender Putz und gelöste Tapeten",
          problem:
            "Putz löst sich in Schollen, Tapeten lassen sich abziehen und Fußleisten verfärben sich – sichtbare Spuren der Feuchtigkeit an Innenwänden.",
          solution:
            "Erst die Ursache, dann die Optik: Nach der Trockenlegung folgen Sanierputz und Oberflächen, die der Feuchtebelastung standhalten.",
        },
      ]}
      services={[
        {
          title: "Feuchtigkeitsanalyse und Diagnose",
          body:
            "Am Anfang jeder Mauertrockenlegung steht die Ursache. Wir messen den Durchfeuchtungsgrad, bestimmen die Salzbelastung und klären, ob die Feuchtigkeit kapillar aufsteigt oder von der Seite eindringt. Erst auf dieser Basis entsteht ein belastbares Sanierungskonzept.",
          bullets: [
            "Feuchtigkeitsmessung im Mauerwerk",
            "Bestimmung von Durchfeuchtungsgrad und Salzbelastung",
            "Analyse von Wandaufbau und Schadensbild",
            "Sanierungskonzept nach WTA-Merkblatt",
          ],
        },
        {
          title: "Nachträgliche Horizontalsperre",
          body:
            "Das Herzstück der Trockenlegung. Wir bringen eine nachträgliche Horizontalsperre ein, die den kapillaren Wassertransport im Mauerwerk dauerhaft unterbricht. Bohrlöcher werden in einem definierten Raster gesetzt, gesättigt und sauber verschlossen.",
          bullets: [
            "Bohrlochraster nach Wandstärke",
            "Druckloses oder druckunterstütztes Injizieren",
            "Zertifizierte Wirkstoffe (z. B. Silan-Creme / Mikroemulsion)",
            "Verschluss und Dokumentation jedes Bohrlochs",
          ],
        },
        {
          title: "Mauerwerksinjektion bei hoher Durchfeuchtung",
          body:
            "Auch stark durchfeuchtetes Mauerwerk lässt sich trockenlegen. Bei hohen Durchfeuchtungsgraden setzen wir auf druckunterstützte Injektionsverfahren, die den Wirkstoff zuverlässig in den Kapillaren verteilen.",
          bullets: [
            "Verfahrenswahl nach Durchfeuchtungsgrad",
            "Gleichmäßige Wirkstoffverteilung in den Kapillaren",
            "Geeignet für Ziegel-, Bruchstein- und Mischmauerwerk",
          ],
        },
        {
          title: "Sanierputz und Salzbehandlung",
          body:
            "Mit der Feuchtigkeit wandern Salze ins Mauerwerk. Ein WTA-zertifizierter Sanierputz lagert diese Salze ein, hält die Oberfläche trocken und schützt vor erneuten Ausblühungen.",
          bullets: [
            "Abtrag von salzbelastetem Altputz",
            "Grundierung und Sanierputzsystem nach WTA",
            "Trockene, atmungsaktive Oberfläche",
          ],
        },
        {
          title: "Kellerabdichtung als Ergänzung",
          body:
            "Wo neben aufsteigender Feuchte auch seitlich Wasser eindringt, kombinieren wir die Mauertrockenlegung mit einer Innen- oder Außenabdichtung. So entsteht ein geschlossenes Abdichtungssystem.",
          bullets: [
            "Innenabdichtung mit mineralischer Dichtschlämme",
            "Außenabdichtung erdberührter Bauteile",
            "Anschluss an Boden- und Sockelabdichtung",
          ],
        },
      ]}
      process={[
        {
          title: "Vor-Ort-Termin und Bestandsaufnahme",
          text: "Wir sehen uns Ihr Mauerwerk an, hören Ihre Beobachtungen und schätzen das Schadensbild realistisch ein.",
        },
        {
          title: "Feuchtigkeitsmessung und Konzept",
          text: "Wir messen Durchfeuchtung und Salzbelastung und legen das passende Verfahren zur Mauertrockenlegung fest – kein Standardrezept, sondern eine Lösung für Ihre Wand.",
        },
        {
          title: "Festpreisangebot",
          text: "Sie erhalten ein schriftliches Konzept mit klaren Positionen, Materialien und einem verbindlichen Preis. Ohne Überraschungen.",
        },
        {
          title: "Trockenlegung und Sanierputz",
          text: "Wir bringen die Horizontalsperre ein, behandeln Salze und versehen die Wand mit einem Sanierputzsystem – sauber und nachweisbar ausgeführt.",
        },
        {
          title: "Abnahme und Gewähr",
          text: "Gemeinsame Abnahme mit Protokoll und Dokumentation jedes Bohrlochs. Wir bleiben Ihr Ansprechpartner, auch nach der Trocknungsphase.",
        },
      ]}
      faq={[
        {
          q: "Was ist eine Mauertrockenlegung?",
          a: "Als Mauertrockenlegung bezeichnet man alle Maßnahmen, die feuchtes Mauerwerk dauerhaft trockenlegen. Bei aufsteigender Feuchtigkeit ist das Kernstück eine nachträgliche Horizontalsperre, die den kapillaren Wassertransport in der Wand unterbricht. Ergänzt wird sie je nach Schadensbild durch Sanierputz und eine Kellerabdichtung.",
        },
        {
          q: "Woran erkenne ich aufsteigende Feuchtigkeit?",
          a: "Typische Anzeichen sind feuchte Ränder im unteren Wandbereich, Salzausblühungen, abplatzender Putz, abgelöste Tapeten und ein muffiger Geruch. Häufig steigt die Feuchte gleichmäßig vom Boden her in der Wand hoch. Eine Feuchtigkeitsmessung schafft Klarheit.",
        },
        {
          q: "Wie funktioniert eine nachträgliche Horizontalsperre?",
          a: "Wir bohren in einem definierten Raster Löcher in die Wand und injizieren einen zertifizierten Wirkstoff, etwa eine Silan-Creme oder Mikroemulsion. Dieser verteilt sich in den Kapillaren und macht das Mauerwerk wasserabweisend, sodass keine Feuchtigkeit mehr aufsteigen kann.",
        },
        {
          q: "Funktioniert das auch bei nassem Mauerwerk?",
          a: "Ja. Auch stark durchfeuchtetes Mauerwerk lässt sich trockenlegen. Bei hohen Durchfeuchtungsgraden wählen wir ein druckunterstütztes Injektionsverfahren, das den Wirkstoff zuverlässig verteilt. Den Durchfeuchtungsgrad bestimmen wir vorab durch Messung.",
        },
        {
          q: "Wie lange dauert die Trocknung der Wand?",
          a: "Die Injektion selbst ist meist an einem oder wenigen Tagen erledigt. Danach trocknet das Mauerwerk je nach Wandstärke und Ausgangsfeuchte über Wochen bis Monate aus. Der Sanierputz sorgt schon in dieser Phase für eine trockene, nutzbare Oberfläche.",
        },
        {
          q: "Was kostet eine Mauertrockenlegung?",
          a: "Der Preis hängt von Wandstärke, Durchfeuchtungsgrad, Verfahren und Umfang der begleitenden Putz- und Abdichtungsarbeiten ab. Nach dem Vor-Ort-Termin und der Messung erhalten Sie ein verbindliches Festpreisangebot.",
        },
      ]}
      nextService={{
        href: "/leistungen/abdichtungssysteme",
        label: "Abdichtungssysteme",
        intro:
          "Innen- und Außenabdichtung, Sockel und Bodenabdichtung – das passende Abdichtungssystem für Ihr Gebäude.",
      }}
    />
  );
}
