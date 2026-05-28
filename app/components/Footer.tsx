import Link from "next/link";
import Image from "next/image";

const cols = [
  {
    title: "Leistungen",
    links: [
      { href: "/leistungen/abdichtungssysteme", label: "Abdichtungssysteme" },
      { href: "/leistungen/balkonabdichtung", label: "Balkonabdichtung" },
      { href: "/leistungen/garagenabdichtung", label: "Garagen- & Bodenabdichtung" },
      { href: "/leistungen/feuchtigkeit-und-sanierung", label: "Feuchtigkeit & Sanierung" },
      { href: "/leistungen/gasleitungspruefung", label: "Gasleitungsprüfung" },
      { href: "/leistungen/gasleitungssanierung", label: "Gasleitungssanierung" },
    ],
  },
  {
    title: "Unternehmen",
    links: [
      { href: "/ueber-uns", label: "Über uns" },
      { href: "/referenzen", label: "Referenzen" },
      { href: "/kontakt", label: "Kontakt" },
      { href: "/impressum", label: "Impressum" },
      { href: "/agb", label: "AGB" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 bg-navy-950 text-white">
      <div className="absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-teal-500/40 to-transparent" />
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="inline-flex items-center gap-3 rounded-2xl bg-white px-4 py-3">
              <Image
                src="/media/herztechLogo.png"
                alt="HERZTEC Ingenieure"
                width={220}
                height={66}
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
              Ingenieurtechnik für Bauwerks- und Gasleitungsabdichtung. Wir
              planen, prüfen und sanieren mit handwerklicher Präzision und
              normgerechter Dokumentation.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/10">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4Z"/></svg>
                Meisterbetrieb
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/10">
                DIN 18533 konform
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/10">
                DVGW Regelwerk
              </span>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-300">
                {col.title}
              </p>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
                    >
                      <span className="h-px w-3 bg-white/30 transition-all group-hover:w-5 group-hover:bg-teal-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-300">
              Kontakt
            </p>
            <ul className="mt-5 space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid h-7 w-7 place-items-center rounded-full bg-white/5 ring-1 ring-white/10">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
                </span>
                <a href="tel:+4900000000000" className="hover:text-white">
                  Telefon folgt
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid h-7 w-7 place-items-center rounded-full bg-white/5 ring-1 ring-white/10">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
                </span>
                <a href="mailto:info@herztec.de" className="hover:text-white">
                  info@herztec.de
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid h-7 w-7 place-items-center rounded-full bg-white/5 ring-1 ring-white/10">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <span>Adresse folgt</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} HERZTEC Ingenieure. Alle Rechte vorbehalten.</p>
          <p>
            Geschäftsführer: Mohammed Herz und Irfan Tokul
          </p>
        </div>
      </div>
    </footer>
  );
}
