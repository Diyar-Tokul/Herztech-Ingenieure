import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Sprechen Sie mit Drycore. Wir antworten innerhalb von 24 Stunden auf Anfragen zu Abdichtung, Sanierung und Gasleitungsprüfung.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kontakt"
        title={
          <>
            Lassen Sie uns
            <br />
            <span className="text-gradient">ins Gespräch kommen.</span>
          </>
        }
        intro="Egal ob akuter Schaden, geplante Sanierung oder ein zweiter Blick auf ein Angebot. Wir melden uns innerhalb von 24 Stunden mit dem nächsten sinnvollen Schritt."
        crumbs={[{ label: "Start", href: "/" }, { label: "Kontakt" }]}
      />

      <section className="container-x pb-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="space-y-6">
              <div className="rounded-3xl bg-navy-950 p-8 text-white ring-1 ring-navy-900/10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-300">
                  Direkter Draht
                </p>
                <p className="mt-3 text-2xl font-semibold">
                  Schneller Kontakt für akute Schäden.
                </p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">
                        Telefon
                      </p>
                      <p className="text-base font-semibold text-white">Nummer folgt</p>
                      <p className="text-xs text-white/60">Mo bis Fr, 8 bis 18 Uhr</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">
                        E-Mail
                      </p>
                      <p className="text-base font-semibold text-white">info@drycore.de</p>
                      <p className="text-xs text-white/60">Antwort innerhalb von 24 Stunden</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">
                        Adresse
                      </p>
                      <p className="text-base font-semibold text-white">Adresse folgt</p>
                      <p className="text-xs text-white/60">Einsatzgebiet bundesweit</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl bg-sand-100 p-6 ring-1 ring-navy-900/5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-600">
                  Tipp
                </p>
                <p className="mt-2 text-base font-semibold text-navy-900">
                  Schicken Sie uns Fotos.
                </p>
                <p className="mt-2 text-sm text-navy-700/80">
                  Ein klares Foto vom Schadensbild hilft uns, Sie schneller und
                  präziser zu beraten. Hängen Sie es einfach an Ihre E-Mail an.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal variant="scale" delay={120}>
            <div className="rounded-3xl bg-white p-6 ring-1 ring-navy-900/5 sm:p-10">
              <p className="eyebrow">Anfrageformular</p>
              <h2 className="h-display mt-3 text-2xl text-navy-900 sm:text-3xl">
                Erzählen Sie uns von Ihrem Vorhaben.
              </h2>
              <p className="mt-2 text-sm text-navy-700/80">
                Pflichtfelder sind mit einem Sternchen markiert.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
