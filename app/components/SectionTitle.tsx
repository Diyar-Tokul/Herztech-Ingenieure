import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  intro,
  align = "left",
  className = "",
}: Props) {
  const isCenter = align === "center";
  return (
    <div
      className={`${isCenter ? "mx-auto max-w-3xl text-center" : "max-w-2xl"} ${className}`.trim()}
    >
      {eyebrow ? (
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      ) : null}
      <Reveal delay={80}>
        <h2 className="h-display mt-4 text-3xl text-navy-900 sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {intro ? (
        <Reveal delay={160}>
          <p
            className={`mt-5 text-base leading-relaxed text-navy-700/80 sm:text-lg ${isCenter ? "mx-auto" : ""}`}
          >
            {intro}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
