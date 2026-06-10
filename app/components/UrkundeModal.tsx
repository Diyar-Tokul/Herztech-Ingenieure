"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";

type Props = {
  /** Bildquelle, die im Popup groß angezeigt wird. */
  src: string;
  alt: string;
  /** Klickbarer Auslöser (z. B. das Vorschaubild). */
  children: ReactNode;
  /** Optionaler Untertitel im Popup. */
  caption?: string;
  /** Klassen für den Auslöser (überschreibt den Standard, z. B. für Button statt Bild). */
  className?: string;
};

export default function UrkundeModal({
  src,
  alt,
  children,
  caption,
  className = "group block w-full cursor-zoom-in text-left",
}: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className={className}
        aria-label={`${alt} vergrößern`}
      >
        {children}
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/80 p-4 backdrop-blur-sm sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-[0_40px_120px_-30px_rgba(0,0,0,0.6)]"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Schließen"
              className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-navy-900 ring-1 ring-navy-900/10 backdrop-blur transition-colors hover:bg-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
            <div className="max-h-[78vh] overflow-auto p-3 sm:p-4">
              <Image
                src={src}
                alt={alt}
                width={1200}
                height={1600}
                className="h-auto w-full rounded-lg object-contain"
              />
            </div>
            {caption ? (
              <p className="border-t border-navy-900/5 px-5 py-3 text-center text-sm font-medium text-navy-700">
                {caption}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
