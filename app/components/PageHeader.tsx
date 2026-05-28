import Link from "next/link";
import Reveal from "./Reveal";

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro: React.ReactNode;
  crumbs?: Crumb[];
};

export default function PageHeader({ eyebrow, title, intro, crumbs }: Props) {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-navy-50 via-white to-white pb-16 pt-12 sm:pt-20">
      <div className="absolute inset-0 -z-10 bg-grid bg-grid-fade opacity-30" />
      <div className="container-x">
        {crumbs && crumbs.length > 0 ? (
          <Reveal>
            <nav className="flex items-center gap-2 text-xs text-navy-700/70">
              {crumbs.map((c, i) => (
                <span key={`${c.label}-${i}`} className="flex items-center gap-2">
                  {c.href ? (
                    <Link href={c.href} className="hover:text-navy-900">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-navy-900">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  ) : null}
                </span>
              ))}
            </nav>
          </Reveal>
        ) : null}

        <Reveal delay={80}>
          <span className="eyebrow mt-6 block">{eyebrow}</span>
        </Reveal>
        <Reveal delay={160}>
          <h1 className="h-display mt-4 max-w-4xl text-4xl text-navy-900 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-700/80 sm:text-lg">
            {intro}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
