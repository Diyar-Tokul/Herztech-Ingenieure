type Props = {
  label?: string;
  ratio?: "square" | "video" | "portrait" | "wide" | "tall" | "auto";
  rounded?: "md" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  caption?: string;
};

const ratioClass: Record<NonNullable<Props["ratio"]>, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  tall: "aspect-[4/5]",
  wide: "aspect-[16/7]",
  auto: "",
};

const roundedClass: Record<NonNullable<Props["rounded"]>, string> = {
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
};

export default function ImagePlaceholder({
  label = "Foto folgt",
  ratio = "video",
  rounded = "2xl",
  className = "",
  caption,
}: Props) {
  return (
    <figure
      className={`relative overflow-hidden ${roundedClass[rounded]} bg-blueprint ring-1 ring-navy-900/5 ${ratioClass[ratio]} ${className}`.trim()}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-navy-700/60">
        <svg
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="9" cy="11" r="1.6" />
          <path d="m21 17-5-5L5 19" />
        </svg>
        <span className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em]">
          {label}
        </span>
      </div>
      {caption ? (
        <figcaption className="absolute bottom-3 left-3 right-3 rounded-lg bg-white/85 px-3 py-1.5 text-xs font-medium text-navy-800 backdrop-blur">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
