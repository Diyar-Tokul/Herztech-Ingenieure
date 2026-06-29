// Die 15 Fragen des "digitalen Bauingenieurs" aus dem DRYCORE KI-Agent-Briefing.

export type Frage = {
  key: string;
  frage: string;
  type: "single" | "multi" | "text";
  optionen?: string[];
  placeholder?: string;
};

export const fragen: Frage[] = [
  {
    key: "ort",
    frage: "Wo befindet sich der Schaden?",
    type: "single",
    optionen: ["Keller", "Außenwand", "Sockel", "Balkon", "Garage", "Wohnraum", "Sonstiges"],
  },
  {
    key: "gebaeudeart",
    frage: "Um welche Gebäudeart handelt es sich?",
    type: "single",
    optionen: [
      "Einfamilienhaus",
      "Doppelhaushälfte",
      "Reihenhaus",
      "Mehrfamilienhaus",
      "Gewerbeobjekt",
      "Sonstiges",
    ],
  },
  {
    key: "dauer",
    frage: "Seit wann besteht der Schaden?",
    type: "single",
    optionen: ["Wenige Tage", "Einige Wochen", "Mehrere Monate", "Bereits seit Jahren"],
  },
  {
    key: "zeitpunkt",
    frage: "Wann tritt die Feuchtigkeit auf?",
    type: "single",
    optionen: [
      "Dauerhaft",
      "Nur nach starkem Regen",
      "Nur im Winter",
      "Nur bei hoher Luftfeuchtigkeit",
      "Nur gelegentlich",
    ],
  },
  {
    key: "schadenbild",
    frage: "Wie sieht der Schaden aus? (Mehrfachauswahl möglich)",
    type: "multi",
    optionen: [
      "Feuchte Wand",
      "Wasser läuft aus der Wand",
      "Wasser auf dem Boden",
      "Schimmel",
      "Abplatzender Putz",
      "Salzausblühungen",
      "Modergeruch",
      "Nasse Bodenplatte",
      "Risse",
    ],
  },
  {
    key: "unterkellert",
    frage: "Ist das Gebäude unterkellert?",
    type: "single",
    optionen: ["Ja", "Nein"],
  },
  {
    key: "alter",
    frage: "Wie alt ist das Gebäude?",
    type: "single",
    optionen: ["Vor 1950", "1950–1975", "1975–2000", "Nach 2000"],
  },
  {
    key: "saniert",
    frage: "Wurde bereits saniert?",
    type: "single",
    optionen: [
      "Nein",
      "Ja – Innenabdichtung",
      "Ja – Außenabdichtung",
      "Ja – Horizontalsperre",
      "Ja – Schimmelsanierung",
    ],
  },
  {
    key: "wand",
    frage: "Welche Wand bzw. welcher Bereich ist betroffen?",
    type: "single",
    optionen: ["Außenwand", "Innenwand", "Mehrere Wände", "Boden", "Wand und Boden"],
  },
  {
    key: "wassereintritt",
    frage: "Tritt Wasser sichtbar ein?",
    type: "single",
    optionen: ["Ja", "Nein", "Nur bei Regen"],
  },
  {
    key: "schimmel",
    frage: "Ist Schimmel vorhanden?",
    type: "single",
    optionen: ["Nein", "Kleinflächig", "Mehrere Stellen", "Ganze Wand"],
  },
  {
    key: "putz",
    frage: "Ist der Putz beschädigt?",
    type: "single",
    optionen: ["Nein", "Ja", "Ja mit Salzausblühungen"],
  },
  {
    key: "dringlichkeit",
    frage: "Wie dringend ist Ihr Anliegen?",
    type: "single",
    optionen: ["Notfall", "Innerhalb einer Woche", "In den nächsten Wochen", "Erst einmal Beratung"],
  },
  {
    key: "stadt",
    frage: "In welcher Stadt befindet sich das Objekt?",
    type: "text",
    placeholder: "z. B. Düsseldorf",
  },
];
