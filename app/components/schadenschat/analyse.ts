// Regelbasierte Schadensanalyse für den "digitalen Bauingenieur".
// Bildet die 4 Beispiel-Auswertungen aus dem DRYCORE KI-Agent-Briefing nach:
// aufsteigende Feuchte, seitlich eindringendes Wasser, drückendes Wasser,
// Kondensationsfeuchte. Die Antworten kommen als Schlüssel-Map aus dem Chat.

export type Answers = Record<string, string | string[]>;

export type Auswertung = {
  ursache: string;
  wahrscheinlichkeit: number;
  loesungen: string[];
  hinweis: string;
};

function has(v: string | string[] | undefined, needle: string): boolean {
  if (!v) return false;
  return Array.isArray(v) ? v.includes(needle) : v === needle;
}

// Einfaches Scoring über die vier typischen Ursachen.
export function auswerten(a: Answers): Auswertung {
  const schaden = a.schadenbild as string[] | undefined;
  let aufsteigend = 0;
  let seitlich = 0;
  let drueckend = 0;
  let kondensation = 0;

  // Frage 4: Wann tritt die Feuchtigkeit auf?
  if (has(a.zeitpunkt, "Nur nach starkem Regen")) {
    seitlich += 2;
    drueckend += 2;
  }
  if (has(a.zeitpunkt, "Dauerhaft")) {
    aufsteigend += 1;
    drueckend += 1;
  }
  if (has(a.zeitpunkt, "Nur bei hoher Luftfeuchtigkeit")) kondensation += 3;
  if (has(a.zeitpunkt, "Nur im Winter")) kondensation += 2;

  // Frage 5/13: Schadensbild
  if (schaden) {
    if (schaden.includes("Salzausblühungen")) aufsteigend += 3;
    if (schaden.includes("Abplatzender Putz")) aufsteigend += 2;
    if (schaden.includes("Feuchte Wand")) aufsteigend += 1;
    if (schaden.includes("Wasser läuft aus der Wand")) seitlich += 3;
    if (schaden.includes("Wasser auf dem Boden")) drueckend += 2;
    if (schaden.includes("Nasse Bodenplatte")) drueckend += 3;
    if (schaden.includes("Schimmel")) kondensation += 2;
    if (schaden.includes("Modergeruch")) kondensation += 1;
    if (schaden.includes("Risse")) drueckend += 1;
  }

  // Frage 11: Tritt Wasser sichtbar ein?
  if (has(a.wassereintritt, "Ja")) {
    seitlich += 2;
    drueckend += 2;
  }
  if (has(a.wassereintritt, "Nur bei Regen")) seitlich += 3;

  // Frage 13: Putz beschädigt?
  if (has(a.putz, "Ja mit Salzausblühungen")) aufsteigend += 3;

  // Frage 1: Ort – Keller verstärkt erdberührte Ursachen
  if (has(a.ort, "Keller")) {
    aufsteigend += 1;
    drueckend += 1;
  }
  if (has(a.ort, "Wohnraum")) kondensation += 1;

  // Frage 7: Altbau begünstigt fehlende Horizontalsperre
  if (has(a.alter, "Vor 1950") || has(a.alter, "1950–1975")) aufsteigend += 1;

  const scores: { key: string; score: number; data: Omit<Auswertung, "wahrscheinlichkeit"> }[] = [
    {
      key: "aufsteigend",
      score: aufsteigend,
      data: {
        ursache: "Kapillar aufsteigende Feuchtigkeit",
        loesungen: ["Horizontalsperre", "Sperrputzsystem", "Innenabdichtung"],
        hinweis:
          "Salze und abplatzender Putz deuten stark auf Feuchtigkeit hin, die über die Poren des Mauerwerks aus dem Erdreich nach oben steigt.",
      },
    },
    {
      key: "seitlich",
      score: seitlich,
      data: {
        ursache: "Seitlich eindringendes Wasser",
        loesungen: ["Innenabdichtung", "Hohlkehle", "Wand-Boden-Abdichtung"],
        hinweis:
          "Feuchtigkeit, die vor allem nach Regen auftritt oder sichtbar eintritt, dringt meist seitlich durch erdberührte Bauteile ein.",
      },
    },
    {
      key: "drueckend",
      score: drueckend,
      data: {
        ursache: "Drückendes Wasser",
        loesungen: [
          "Lastfallanalyse",
          "Mehrlagiges mineralisches Abdichtungssystem",
          "Hohlkehle",
          "Wand- und Bodenabdichtung",
        ],
        hinweis:
          "Eine nasse Bodenplatte und Wasser am Boden sprechen für Wasser, das mit Druck gegen das Bauwerk wirkt. Der Lastfall ist hier entscheidend.",
      },
    },
    {
      key: "kondensation",
      score: kondensation,
      data: {
        ursache: "Kondensationsfeuchte",
        loesungen: ["Lüftungskonzept", "Taupunktanalyse", "Wärmeschutzprüfung"],
        hinweis:
          "Feuchtigkeit bei hoher Luftfeuchte und Schimmel ohne sichtbaren Wassereintritt deutet auf Kondensation an kühlen Oberflächen hin.",
      },
    },
  ];

  scores.sort((x, y) => y.score - x.score);
  const top = scores[0];

  // Wahrscheinlichkeit aus dem Abstand zum zweitstärksten Kandidaten ableiten,
  // in den Bereich der Briefing-Beispiele (87–95 %) gemappt.
  const second = scores[1].score;
  const gap = top.score - second;
  let wahrscheinlichkeit = 78 + Math.min(gap, 4) * 4 + Math.min(top.score, 4);
  if (top.score === 0) wahrscheinlichkeit = 70;
  wahrscheinlichkeit = Math.max(70, Math.min(95, wahrscheinlichkeit));

  return { ...top.data, wahrscheinlichkeit };
}
