import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung von Drycore.",
};

export default function ImpressumPage() {
  return (
    <>
      <PageHeader
        eyebrow="Impressum"
        title="Anbieterkennzeichnung"
        intro="Die rechtlich vollständige Fassung folgt. Die hier hinterlegten Angaben dienen zunächst als Platzhalter."
        crumbs={[{ label: "Start", href: "/" }, { label: "Impressum" }]}
      />

      <section className="container-x pb-24">
        <Reveal>
          <div className="rounded-3xl bg-white p-8 ring-1 ring-navy-900/5 sm:p-12">
            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-600">
                  Anbieter
                </p>
                <p className="mt-3 text-base font-semibold text-navy-900">
                  Drycore
                </p>
                <p className="text-sm text-navy-700/80">Adresse folgt</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-600">
                  Vertretungsberechtigte
                </p>
                <p className="mt-3 text-base font-semibold text-navy-900">
                  Mohammed Herz
                </p>
                <p className="text-base font-semibold text-navy-900">
                  Irfan Tokul
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-600">
                  Kontakt
                </p>
                <p className="mt-3 text-sm text-navy-800">Telefon folgt</p>
                <p className="text-sm text-navy-800">info@drycore.de</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-600">
                  Register und Steuer
                </p>
                <p className="mt-3 text-sm text-navy-700/80">
                  Eintragungsdaten und Umsatzsteuer-Identifikationsnummer folgen.
                </p>
              </div>
            </div>

            <hr className="my-10 border-navy-100" />

            <div className="space-y-8 text-sm leading-relaxed text-navy-700/85">
              <div>
                <h2 className="text-base font-semibold text-navy-900">
                  Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
                </h2>
                <p className="mt-2">Mohammed Herz und Irfan Tokul, Adresse folgt.</p>
              </div>
              <div>
                <h2 className="text-base font-semibold text-navy-900">Haftung für Inhalte</h2>
                <p className="mt-2">
                  Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt.
                  Für die Richtigkeit, Vollständigkeit und Aktualität der
                  Inhalte können wir jedoch keine Gewähr übernehmen.
                </p>
              </div>
              <div>
                <h2 className="text-base font-semibold text-navy-900">Haftung für Links</h2>
                <p className="mt-2">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf
                  deren Inhalte wir keinen Einfluss haben. Deshalb können wir
                  für diese fremden Inhalte auch keine Gewähr übernehmen.
                </p>
              </div>
              <div>
                <h2 className="text-base font-semibold text-navy-900">Urheberrecht</h2>
                <p className="mt-2">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                  dieser Website unterliegen dem deutschen Urheberrecht.
                </p>
              </div>
              <p className="text-xs text-navy-700/60">
                Hinweis: Diese Seite ist ein Platzhalter. Die finale Fassung des
                Impressums wird in einem separaten Schritt erstellt.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
