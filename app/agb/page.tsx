import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen",
  description:
    "Allgemeine Geschäftsbedingungen der HERZTEC Ingenieure. Die finale Fassung folgt.",
};

export default function AgbPage() {
  return (
    <>
      <PageHeader
        eyebrow="AGB"
        title="Allgemeine Geschäftsbedingungen"
        intro="Die vollständige Fassung unserer AGB wird in einem separaten Schritt erstellt. Auf dieser Seite finden Sie zunächst die Eckpunkte als Platzhalter."
        crumbs={[{ label: "Start", href: "/" }, { label: "AGB" }]}
      />

      <section className="container-x pb-24">
        <Reveal>
          <div className="rounded-3xl bg-white p-8 ring-1 ring-navy-900/5 sm:p-12">
            <div className="space-y-8 text-sm leading-relaxed text-navy-700/85">
              <div>
                <h2 className="text-base font-semibold text-navy-900">
                  § 1 Geltungsbereich
                </h2>
                <p className="mt-2">
                  Diese AGB gelten für alle Verträge zwischen HERZTEC Ingenieure
                  und unseren Auftraggebern.
                </p>
              </div>
              <div>
                <h2 className="text-base font-semibold text-navy-900">
                  § 2 Angebot und Vertragsschluss
                </h2>
                <p className="mt-2">
                  Unsere Angebote sind freibleibend. Der Vertrag kommt durch
                  schriftliche Auftragsbestätigung oder Ausführung der Leistung
                  zustande.
                </p>
              </div>
              <div>
                <h2 className="text-base font-semibold text-navy-900">
                  § 3 Leistungsumfang
                </h2>
                <p className="mt-2">
                  Der Leistungsumfang ergibt sich aus dem schriftlichen Angebot
                  und der Auftragsbestätigung.
                </p>
              </div>
              <div>
                <h2 className="text-base font-semibold text-navy-900">
                  § 4 Preise und Zahlung
                </h2>
                <p className="mt-2">
                  Es gelten die im Angebot genannten Preise zuzüglich
                  gesetzlicher Umsatzsteuer. Zahlungsbedingungen werden im
                  Angebot geregelt.
                </p>
              </div>
              <div>
                <h2 className="text-base font-semibold text-navy-900">
                  § 5 Gewährleistung
                </h2>
                <p className="mt-2">
                  Wir leisten Gewähr für die fachgerechte Ausführung der
                  beauftragten Arbeiten nach den anerkannten Regeln der Technik.
                </p>
              </div>
              <div>
                <h2 className="text-base font-semibold text-navy-900">
                  § 6 Haftung
                </h2>
                <p className="mt-2">
                  Die Haftung richtet sich nach den gesetzlichen Bestimmungen,
                  soweit nichts anderes vereinbart wurde.
                </p>
              </div>
              <p className="text-xs text-navy-700/60">
                Hinweis: Diese Seite ist ein Platzhalter. Die finale Fassung der
                AGB wird in einem separaten Schritt erstellt und freigegeben.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
