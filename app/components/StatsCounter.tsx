"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  detail?: string;
};

const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

function Counter({ stat, duration = 1800 }: { stat: Stat; duration?: number }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const node = ref.current;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              setDisplay(Math.round(easeOutQuart(t) * stat.value));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [stat.value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {stat.prefix ?? ""}
      {display}
      {stat.suffix ?? ""}
    </span>
  );
}

type Props = {
  stats: Stat[];
  variant?: "light" | "dark";
};

export default function StatsCounter({ stats, variant = "light" }: Props) {
  const isDark = variant === "dark";
  return (
    <div
      className={`grid gap-px overflow-hidden rounded-3xl ${
        isDark ? "bg-white/10" : "bg-navy-100"
      } shadow-[0_30px_80px_-40px_rgba(15,34,56,0.4)]`}
      style={{ gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))` }}
    >
      {stats.map((s, i) => (
        <div
          key={i}
          className={`relative overflow-hidden px-5 py-8 text-center sm:py-10 ${
            isDark ? "bg-navy-950 text-white" : "bg-white text-navy-900"
          }`}
        >
          {/* Animated background blob */}
          <div
            aria-hidden
            className={`pointer-events-none absolute inset-0 ${
              isDark ? "opacity-20" : "opacity-50"
            }`}
          >
            <div
              className="absolute -top-12 -right-12 h-40 w-40 rounded-full blur-3xl animate-float-soft bg-linear-to-br from-teal-300/40 to-navy-300/30"
              style={{ animationDelay: `${i * 0.6}s` }}
            />
          </div>

          <p
            className={`relative text-4xl font-semibold tracking-tight sm:text-5xl ${
              isDark ? "text-white" : "text-navy-900"
            }`}
          >
            <Counter stat={s} />
          </p>
          <p
            className={`relative mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] ${
              isDark ? "text-teal-300" : "text-teal-700"
            }`}
          >
            {s.label}
          </p>
          {s.detail ? (
            <p
              className={`relative mt-1 text-xs ${
                isDark ? "text-white/60" : "text-navy-700/70"
              }`}
            >
              {s.detail}
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
