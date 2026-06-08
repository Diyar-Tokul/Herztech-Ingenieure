import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import ImagePlaceholder from "./ImagePlaceholder";

type Props = {
  index: string;
  title: string;
  intro: string;
  bullets: string[];
  href: string;
  icon: ReactNode;
  image?: string;
  imageAlt?: string;
  problem?: string;
};

export default function ServiceCard({
  index,
  title,
  intro,
  bullets,
  href,
  icon,
  image,
  imageAlt,
  problem,
}: Props) {
  return (
    <Link
      href={href}
      className="lift group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-6 ring-1 ring-navy-900/5 sm:p-8"
    >
      <div className="relative">
        {image ? (
          <div className="relative aspect-16/7 overflow-hidden rounded-2xl ring-1 ring-navy-900/5">
            <Image
              src={image}
              alt={imageAlt ?? title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ) : (
          <ImagePlaceholder ratio="wide" rounded="2xl" />
        )}
        <span className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-navy-700 backdrop-blur">
          {index}
        </span>
        <span className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-xl bg-navy-900 text-white">
          <span className="block h-5 w-5">{icon}</span>
        </span>
      </div>

      {problem ? (
        <p className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-[11px] font-semibold text-teal-700">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v4" />
            <path d="M12 16h.01" />
          </svg>
          {problem}
        </p>
      ) : null}

      <h3
        className={`${
          problem ? "mt-3" : "mt-6"
        } text-xl font-semibold tracking-tight text-navy-900 sm:text-2xl`}
      >
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-navy-700/80">{intro}</p>

      <ul className="mt-5 space-y-2 text-sm text-navy-800">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
            {b}
          </li>
        ))}
      </ul>

      <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-navy-900">
        <span>Leistung ansehen</span>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-navy-50 transition-all duration-300 group-hover:bg-navy-900 group-hover:text-white">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
