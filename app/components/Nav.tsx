"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const services = [
  {
    href: "/leistungen/mauertrockenlegung",
    label: "Mauertrockenlegung",
    desc: "Aufsteigende Feuchtigkeit stoppen, Wände trockenlegen.",
  },
  {
    href: "/leistungen/abdichtungssysteme",
    label: "Abdichtungssysteme",
    desc: "Keller, Wände, Sockel und Boden zuverlässig dicht.",
  },
  {
    href: "/leistungen/balkonabdichtung",
    label: "Balkonabdichtung",
    desc: "Wetterfeste Verbundabdichtung für Balkon und Terrasse.",
  },
  {
    href: "/leistungen/garagenabdichtung",
    label: "Garagen- & Bodenabdichtung",
    desc: "Belastbare Beschichtung für Garage und Stellplatz.",
  },
  {
    href: "/leistungen/feuchtigkeit-und-sanierung",
    label: "Feuchtigkeit & Sanierung",
    desc: "Schadensanalyse, Trocknung und passgenaue Sanierung.",
  },
  {
    href: "/leistungen/gasleitungspruefung",
    label: "Gasleitungsprüfung",
    desc: "Dichtheitsprüfung nach DVGW und TRGI mit Protokoll.",
  },
  {
    href: "/leistungen/gasleitungssanierung",
    label: "Gasleitungssanierung",
    desc: "Fachgerechte Sanierung und Inbetriebnahme.",
  },
];

const mainLinks = [
  { href: "/", label: "Start" },
  { href: "/leistungen", label: "Leistungen", hasMenu: true },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/ratgeber", label: "Ratgeber" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // The homepage hero is the only place with a dark video behind the header.
  // Only there should the nav use the light-on-dark treatment when at the top.
  const isHome = pathname === "/";
  const onHero = isHome && !(scrolled || open);
  const headerSolid = !isHome || scrolled || open;

  const linkBase =
    "relative inline-flex h-10 items-center rounded-full px-4 text-sm font-medium transition-colors";
  const linkInactive = onHero
    ? "text-white/90 hover:text-white hover:bg-white/10"
    : "text-navy-700 hover:text-navy-900";
  const linkActive = onHero
    ? "text-white bg-white/15"
    : "text-navy-900 bg-navy-900/5";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        headerSolid
          ? "bg-white/85 backdrop-blur-xl shadow-[0_1px_0_0_rgba(15,34,56,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Drycore Startseite"
        >
          <Image
            src="/media/drycore-logo.png"
            alt="Drycore – Ingenieurtechnik für Bauwerksabdichtung"
            width={320}
            height={134}
            priority
            className={`h-12 w-auto object-contain transition-[filter] duration-500 sm:h-14 ${
              onHero ? "brightness-0 invert" : ""
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainLinks.map((link) =>
            link.hasMenu ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setMenuOpen(true)}
                onMouseLeave={() => setMenuOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`${linkBase} gap-1.5 ${
                    isActive(link.href) ? linkActive : linkInactive
                  }`}
                >
                  {link.label}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className={`transition-transform ${menuOpen ? "rotate-180" : ""}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </Link>

                <div
                  className={`absolute left-1/2 top-full w-190 -translate-x-1/2 pt-3 transition-all duration-300 ${
                    menuOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-2 opacity-0"
                  }`}
                >
                  <div className="overflow-hidden rounded-3xl bg-white p-3 shadow-[0_30px_80px_-30px_rgba(15,34,56,0.4)] ring-1 ring-navy-900/5">
                    <div className="grid grid-cols-2 gap-1 sm:grid-cols-3">
                      {services.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="group flex items-start gap-3 rounded-2xl p-4 transition-colors hover:bg-navy-50"
                        >
                          <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-500 group-hover:text-white">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 12h14" />
                              <path d="m13 6 6 6-6 6" />
                            </svg>
                          </span>
                          <span>
                            <span className="block text-sm font-semibold text-navy-900">{s.label}</span>
                            <span className="mt-0.5 block text-xs text-navy-700/70">{s.desc}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-2 flex items-center justify-between rounded-2xl bg-navy-900 px-5 py-4 text-white">
                      <div>
                        <p className="text-sm font-semibold">Schaden festgestellt?</p>
                        <p className="text-xs text-white/70">Wir analysieren kostenfrei vor Ort.</p>
                      </div>
                      <Link
                        href="/kontakt"
                        className="inline-flex h-9 items-center gap-2 rounded-full bg-teal-500 px-4 text-xs font-semibold transition-colors hover:bg-teal-400"
                      >
                        Termin anfragen
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`${linkBase} ${
                  isActive(link.href) ? linkActive : linkInactive
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+4900000000000"
            className={`inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm font-medium backdrop-blur transition-colors ${
              onHero
                ? "bg-white/10 text-white ring-1 ring-white/25 hover:bg-white/20"
                : "bg-white/70 text-navy-900 ring-1 ring-navy-900/10 hover:bg-white"
            }`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
            </svg>
            Anrufen
          </a>
          <Link
            href="/kontakt"
            className={`group inline-flex h-10 items-center gap-2 rounded-full px-5 text-sm font-semibold transition-all ${
              onHero
                ? "bg-white text-navy-900 hover:bg-teal-50"
                : "bg-navy-900 text-white hover:bg-navy-800"
            }`}
          >
            Angebot anfragen
            <span
              aria-hidden
              className={`grid h-6 w-6 place-items-center rounded-full transition-transform group-hover:translate-x-0.5 ${
                onHero ? "bg-navy-900 text-white" : "bg-white/15 text-white"
              }`}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </span>
          </Link>
        </div>

        <button
          type="button"
          aria-label="Menü"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`grid h-11 w-11 place-items-center rounded-full backdrop-blur transition-colors lg:hidden ${
            onHero
              ? "bg-white/15 text-white ring-1 ring-white/25"
              : "bg-white/80 text-navy-900 ring-1 ring-navy-900/10"
          }`}
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-5 rounded transition-all duration-300 ${
                onHero ? "bg-white" : "bg-navy-900"
              } ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`absolute bottom-0 left-0 block h-0.5 w-5 rounded transition-all duration-300 ${
                onHero ? "bg-white" : "bg-navy-900"
              } ${open ? "-translate-y-1 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <div
        className={`lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"} overflow-hidden bg-white/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-x flex flex-col gap-1 py-4">
          {mainLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-2xl px-4 py-3 text-base font-medium ${
                isActive(l.href) ? "bg-navy-50 text-navy-900" : "text-navy-700"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-2 grid grid-cols-1 gap-1 rounded-2xl bg-navy-50/60 p-2">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="rounded-xl px-3 py-2 text-sm font-medium text-navy-800 hover:bg-white"
              >
                {s.label}
              </Link>
            ))}
          </div>
          <Link
            href="/kontakt"
            className="mt-3 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-navy-900 text-sm font-semibold text-white"
          >
            Angebot anfragen
          </Link>
        </div>
      </div>
    </header>
  );
}
