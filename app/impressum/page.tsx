import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung von Drycon Core.",
};

export default function ImpressumPage() {
  return (
    <>
      <PageHeader
        eyebrow="Impressum"
        title="Anbieterkennzeichnung"
        intro="Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)."
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
                  drycon-electrics GmbH
                </p>
                <p className="text-sm text-navy-700/80">
                  Geschäftsbezeichnung: Drycon Core
                </p>
                <p className="mt-2 text-sm text-navy-800">Colmantstraße 20</p>
                <p className="text-sm text-navy-800">53115 Bonn</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-600">
                  Vertreten durch
                </p>
                <p className="mt-3 text-base font-semibold text-navy-900">
                  Geschäftsführer
                </p>
                <p className="text-sm text-navy-800">Mohamed Herz, Zekai Savas</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-600">
                  Kontakt
                </p>
                <p className="mt-3 text-sm text-navy-800">
                  Telefon:{" "}
                  <a href="tel:+4922876371800" className="hover:text-teal-700">
                    0228 76371800
                  </a>
                </p>
                <p className="text-sm text-navy-800">
                  E-Mail:{" "}
                  <a
                    href="mailto:info@drycon-core.com"
                    className="hover:text-teal-700"
                  >
                    info@drycon-core.com
                  </a>
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-600">
                  Register und Steuer
                </p>
                <p className="mt-3 text-sm text-navy-800">
                  Registergericht: Amtsgericht Bonn, HRB 27947
                </p>
                <p className="text-sm text-navy-800">
                  Umsatzsteuer-Identifikationsnummer: DE256031886
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-600">
                  Handwerkskammer
                </p>
                <p className="mt-3 text-sm text-navy-800">
                  Zuständige Handwerkskammer: Handwerkskammer zu Köln
                </p>
                <p className="text-sm text-navy-800">
                  Eingetragen in die Handwerksrolle: Maurer- und
                  Betonbauerhandwerk, Stuckateurhandwerk
                </p>
              </div>
            </div>

            <hr className="my-10 border-navy-100" />

            <div className="space-y-8 text-sm leading-relaxed text-navy-700/85">
              <div>
                <h2 className="text-base font-semibold text-navy-900">
                  Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
                </h2>
                <p className="mt-2">
                  Mohamed Herz, Zekai Savas, drycon-electrics GmbH,
                  Colmantstraße 20, 53115 Bonn.
                </p>
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
              <div>
                <h2 className="text-base font-semibold text-navy-900">
                  Verbraucherstreitbeilegung
                </h2>
                <p className="mt-2">
                  Wir sind nicht bereit und nicht verpflichtet, an
                  Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
