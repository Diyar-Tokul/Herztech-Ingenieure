const items = [
  { city: "Köln Sülz", scope: "Altbau Kellerabdichtung" },
  { city: "Bonn Bad Godesberg", scope: "Balkonabdichtung MFH" },
  { city: "Essen Rüttenscheid", scope: "Tiefgaragen-Beschichtung" },
  { city: "Düsseldorf Pempelfort", scope: "Wasserschadensanierung" },
  { city: "Aachen Burtscheid", scope: "Horizontalsperre Reihenhaus" },
  { city: "Duisburg Neudorf", scope: "Gasleitungsprüfung" },
  { city: "Mönchengladbach", scope: "Balkonsanierung EFH" },
  { city: "Krefeld", scope: "Garagenboden EFH" },
  { city: "Wuppertal Elberfeld", scope: "Innenabdichtung MFH" },
  { city: "Köln Mülheim", scope: "Gasleitung Bestandssanierung" },
  { city: "Bonn Plittersdorf", scope: "Feuchtigkeitssanierung Villa" },
  { city: "Köln Lindenthal", scope: "Dachterrassen-Sanierung" },
];

export default function ProjectMarquee() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-navy-50/60 py-6 ring-1 ring-navy-900/5">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-white to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-white to-transparent"
      />

      <div className="flex w-max animate-marquee gap-3 pr-3">
        {[...items, ...items].map((p, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-3 rounded-2xl bg-white px-5 py-3 ring-1 ring-navy-900/5"
          >
            <span className="grid h-7 w-7 place-items-center rounded-full bg-teal-50 text-teal-600">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            <div className="text-left">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-navy-700/70">
                {p.city}
              </p>
              <p className="text-sm font-semibold text-navy-900">{p.scope}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
