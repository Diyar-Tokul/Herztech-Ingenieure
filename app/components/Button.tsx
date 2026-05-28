import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "light";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy-900 text-white hover:bg-navy-800 shadow-[0_10px_30px_-12px_rgba(15,34,56,0.55)]",
  secondary:
    "bg-teal-500 text-white hover:bg-teal-600 shadow-[0_10px_30px_-12px_rgba(45,164,168,0.55)]",
  ghost:
    "bg-transparent text-navy-900 hover:bg-navy-900/5 ring-1 ring-navy-900/15",
  light:
    "bg-white text-navy-900 hover:bg-white/90 ring-1 ring-white/40 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)]",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-[15px]",
};

type LinkButtonProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
} & Omit<ComponentProps<typeof Link>, "href">;

export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  icon,
  ...rest
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`.trim()}
      {...rest}
    >
      <span>{children}</span>
      <span
        aria-hidden
        className="grid h-7 w-7 place-items-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5"
      >
        {icon ?? (
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
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        )}
      </span>
    </Link>
  );
}
