"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import ImagePlaceholder from "./ImagePlaceholder";

export type ProjectCategory =
  | "abdichtung"
  | "balkon"
  | "garage"
  | "sanierung"
  | "gas";

export type Project = {
  id: string;
  title: string;
  location: string;
  year: string;
  category: ProjectCategory;
  categoryLabel: string;
  scope: string;
  size: "sm" | "md" | "lg";
  image?: string;
};

const filters: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "Alle Projekte" },
  { id: "abdichtung", label: "Abdichtung" },
  { id: "balkon", label: "Balkon" },
  { id: "garage", label: "Garage & Boden" },
  { id: "sanierung", label: "Sanierung" },
  { id: "gas", label: "Gasleitung" },
];

const sizeClass: Record<Project["size"], string> = {
  sm: "lg:col-span-3",
  md: "lg:col-span-4",
  lg: "lg:col-span-5",
};

const ratioForSize: Record<Project["size"], "video" | "portrait" | "wide"> = {
  sm: "portrait",
  md: "video",
  lg: "wide",
};

type Props = {
  projects: Project[];
};

export default function ProjectGallery({ projects }: Props) {
  const [active, setActive] = useState<"all" | ProjectCategory>("all");

  const visible = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.category === active)),
    [projects, active]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => {
          const isActive = f.id === active;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setActive(f.id)}
              className={`inline-flex h-10 items-center rounded-full px-4 text-sm font-medium transition-all ${
                isActive
                  ? "bg-navy-900 text-white shadow-[0_10px_30px_-12px_rgba(15,34,56,0.55)]"
                  : "bg-white text-navy-800 ring-1 ring-navy-900/10 hover:bg-navy-50"
              }`}
            >
              {f.label}
              {isActive ? (
                <span className="ml-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-teal-500 px-1.5 text-[10px] font-semibold text-white">
                  {visible.length}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">
        {visible.map((p, i) => (
          <article
            key={p.id}
            style={{ ["--reveal-delay" as string]: `${(i % 6) * 60}ms` }}
            className={`reveal-scale is-visible lift group overflow-hidden rounded-3xl bg-white ring-1 ring-navy-900/5 ${sizeClass[p.size]}`}
          >
            <div className={`relative ${ratioForSize[p.size] === "wide" ? "aspect-16/7" : ratioForSize[p.size] === "video" ? "aspect-video" : "aspect-3/4"} overflow-hidden`}>
              {p.image ? (
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <ImagePlaceholder ratio="auto" rounded="md" className="absolute inset-0 h-full w-full rounded-none" />
              )}
              <span className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-navy-700 backdrop-blur">
                {p.categoryLabel}
              </span>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-navy-900">{p.title}</h3>
                <span className="text-xs font-medium text-navy-700/60">{p.year}</span>
              </div>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-teal-600">
                {p.location}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-navy-700/80">{p.scope}</p>
            </div>
          </article>
        ))}
      </div>

      {visible.length === 0 ? (
        <div className="mt-10 rounded-3xl bg-white p-10 text-center ring-1 ring-navy-900/5">
          <p className="text-sm text-navy-700/70">
            Für diese Kategorie folgen in Kürze weitere Referenzen.
          </p>
        </div>
      ) : null}
    </div>
  );
}
