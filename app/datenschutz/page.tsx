import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import PrivacySettingsLink from "../components/privacy/PrivacySettingsLink";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Informationen zum Datenschutz bei Drycon Core: Verantwortlicher, Zwecke der Verarbeitung, Einwilligung in nicht notwendige Cookies und Ihre Rechte als betroffene Person.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold text-navy-900">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-navy-700/85">
        {children}
      </div>
    </section>
  );
}

export default function DatenschutzPage() {
  return (
    <>
      <PageHeader
        eyebrow="Datenschutz"
        title="Datenschutzerklärung"
        intro="Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Hier erfahren Sie, welche Daten wir verarbeiten, zu welchem Zweck und welche Rechte Ihnen zustehen."
        crumbs={[{ label: "Start", href: "/" }, { label: "Datenschutz" }]}
      />

      <div className="container-x pb-24">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl bg-amber-50 p-4 text-sm text-amber-900 ring-1 ring-amber-200">
            Hinweis: Diese Datenschutzerklärung ist eine Vorlage und ersetzt keine
            Rechtsberatung. Bitte vor Veröffentlichung durch eine fachkundige Stelle
            (z. B. Datenschutzbeauftragte:r oder Rechtsanwält:in) prüfen und um
            landesspezifische Anforderungen ergänzen.
          </div>

          <Section title="1. Verantwortlicher">
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist Drycon Core,
              geschäftsführender Gesellschafter Mohammed Herz. Die vollständigen
              Kontaktdaten finden Sie im{" "}
              <a href="/impressum" className="font-semibold text-teal-700 hover:underline">
                Impressum
              </a>
              . E-Mail: info@dry-core.de.
            </p>
          </Section>

          <Section title="2. Einwilligung & Cookie-Einstellungen">
            <p>
              Wir verwenden nur technisch notwendige Speicherung, die für den Betrieb
              der Website erforderlich ist (z. B. das Speichern Ihrer Datenschutz-Auswahl
              und Ihrer Anzeige-Einstellungen in Ihrem Browser). Diese setzt keine
              Einwilligung voraus (Art. 6 Abs. 1 lit. f DSGVO bzw. § 25 Abs. 2 TDDDG).
            </p>
            <p>
              Nicht notwendige Dienste wie Statistik/Analyse und Marketing werden
              ausschließlich nach Ihrer ausdrücklichen Einwilligung geladen
              (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG). Sie können Ihre
              Einwilligung jederzeit mit Wirkung für die Zukunft ändern oder widerrufen:
            </p>
            <p>
              <PrivacySettingsLink className="inline-flex h-11 items-center justify-center rounded-full bg-navy-900 px-5 text-sm font-semibold text-white transition-colors hover:bg-navy-800">
                Cookie-Einstellungen öffnen
              </PrivacySettingsLink>
            </p>
            <p>
              Aktuell ist auf dieser Website kein Tracking aktiv. Sollten künftig
              Analyse- oder Marketing-Dienste eingesetzt werden, werden diese erst nach
              Ihrer Zustimmung aktiviert und an dieser Stelle dokumentiert.
            </p>
          </Section>

          <Section title="3. Hosting & Server-Logfiles">
            <p>
              Beim Aufruf der Website werden durch den Hosting-Provider automatisch
              Informationen in Server-Logfiles verarbeitet (z. B. IP-Adresse, Datum und
              Uhrzeit, abgerufene Datei, übertragene Datenmenge, Browsertyp). Dies dient
              der technischen Bereitstellung, Sicherheit und Stabilität
              (Art. 6 Abs. 1 lit. f DSGVO). Bitte ergänzen Sie hier den konkreten
              Hosting-Dienstleister und ggf. einen Auftragsverarbeitungsvertrag.
            </p>
          </Section>

          <Section title="4. Kontaktaufnahme & Anfragen">
            <p>
              Wenn Sie uns über das Kontaktformular, per E-Mail oder Telefon
              kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Daten (z. B. Name,
              E-Mail, Telefon, Anliegen) zur Bearbeitung Ihrer Anfrage
              (Art. 6 Abs. 1 lit. b und lit. f DSGVO). Die Daten werden gelöscht, sobald
              sie für den Zweck nicht mehr erforderlich sind und keine gesetzlichen
              Aufbewahrungspflichten entgegenstehen.
            </p>
          </Section>

          <Section title="5. Ihre Rechte">
            <p>
              Sie haben das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16),
              Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18),
              Datenübertragbarkeit (Art. 20) sowie Widerspruch (Art. 21 DSGVO). Eine
              erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft
              widerrufen. Zudem steht Ihnen ein Beschwerderecht bei einer
              Datenschutz-Aufsichtsbehörde zu.
            </p>
          </Section>

          <Section title="6. Aktualität">
            <p>
              Diese Datenschutzerklärung wird angepasst, sobald sich die
              Datenverarbeitung auf dieser Website ändert.
            </p>
          </Section>
        </div>
      </div>
    </>
  );
}
