"use client";

import { useMemo, useState } from "react";

export type FaqItem = { q: string; a: string };
export type FaqGroup = { category: string; items: FaqItem[] };

function normalize(s: string) {
  return s.toLowerCase();
}

export default function FaqAccordion({ groups }: { groups: FaqGroup[] }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return groups;
    return groups
      .map((g) => ({
        ...g,
        items: g.items.filter(
          (it) => normalize(it.q).includes(q) || normalize(it.a).includes(q)
        ),
      }))
      .filter((g) => g.items.length > 0);
  }, [groups, query]);

  const total = filtered.reduce((n, g) => n + g.items.length, 0);

  return (
    <div>
      {/* Suche */}
      <div className="relative mx-auto max-w-xl">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy-400">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Frage durchsuchen – z. B. Kosten, Schimmel, Keller …"
          className="h-13 w-full rounded-full border-0 bg-white pl-12 pr-5 text-sm text-navy-900 shadow-[0_10px_40px_-20px_rgba(15,34,56,0.4)] ring-1 ring-navy-900/10 outline-none transition-shadow focus:ring-2 focus:ring-teal-500"
          aria-label="FAQ durchsuchen"
        />
      </div>

      {query.trim() && (
        <p className="mt-4 text-center text-sm text-navy-700/70">
          {total === 0
            ? "Keine passende Frage gefunden. Schreiben Sie uns gerne direkt."
            : `${total} Treffer`}
        </p>
      )}

      <div className="mt-12 space-y-12">
        {filtered.map((group) => (
          <div key={group.category}>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-600">
              {group.category}
            </h2>
            <div className="mt-4 divide-y divide-navy-900/8 overflow-hidden rounded-3xl bg-white ring-1 ring-navy-900/5">
              {group.items.map((it) => {
                const id = `${group.category}::${it.q}`;
                const isOpen = open === id;
                return (
                  <div key={id}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : id)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-navy-50/50 sm:px-7"
                    >
                      <span className="text-base font-semibold text-navy-900">{it.q}</span>
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy-50 text-navy-700 transition-transform ${
                          isOpen ? "rotate-45 bg-teal-500 text-white" : ""
                        }`}
                        aria-hidden
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-6 text-sm leading-relaxed text-navy-700/80 sm:px-7">
                          {it.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
