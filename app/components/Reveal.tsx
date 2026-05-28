"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  variant?: "fade" | "scale";
  as?: "div" | "section" | "article" | "li" | "header" | "footer";
  className?: string;
  style?: CSSProperties;
};

export default function Reveal({
  children,
  delay = 0,
  variant = "fade",
  as: Tag = "div",
  className = "",
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  const base = variant === "scale" ? "reveal-scale" : "reveal";
  const mergedStyle: CSSProperties = {
    ...(style ?? {}),
    ...(delay ? { transitionDelay: `${delay}ms` } : {}),
  };

  // Use a ref callback to dodge the union-ref type mismatch across HTML tags.
  return (
    <Tag
      ref={(node: HTMLElement | null) => {
        ref.current = node;
      }}
      className={`${base} ${className}`.trim()}
      style={mergedStyle}
    >
      {children}
    </Tag>
  );
}
