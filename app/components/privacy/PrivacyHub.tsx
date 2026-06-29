"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Link from "next/link";
import { usePrivacy, type ConsentCategories, type FontScale } from "./PrivacyProvider";

/* ---------------------------------- UI ---------------------------------- */

function Switch({
  checked,
  onChange,
  label,
  disabled,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${
        checked ? "bg-teal-500" : "bg-navy-200"
      } ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
          checked ? "translate-x-5" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}

function CookieRow({
  title,
  desc,
  checked,
  onChange,
  disabled,
}: {
  title: string;
  desc: string;
  checked: boolean;
  onChange?: (v: boolean) => void;
  disabled?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-2xl bg-navy-50/60 p-4">
      <div>
        <p className="text-sm font-semibold text-navy-900">{title}</p>
        <p className="mt-1 text-xs leading-relaxed text-navy-700/80">{desc}</p>
      </div>
      <Switch
        checked={checked}
        onChange={onChange ?? (() => {})}
        disabled={disabled}
        label={title}
      />
    </div>
  );
}

/* ------------------------------- Dialog --------------------------------- */

function SettingsDialog({ onClose }: { onClose: () => void }) {
  const { consent, panelTab, acceptAll, rejectAll, saveConsent, a11y, setA11y, resetA11y } =
    usePrivacy();

  const [tab, setTab] = useState(panelTab);
  const [sel, setSel] = useState<ConsentCategories>({
    analytics: consent?.categories.analytics ?? false,
    marketing: consent?.categories.marketing ?? false,
  });

  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  // Fokus-Management: Fokus sichern, in den Dialog setzen, beim Schließen
  // zurückgeben. Esc schließt. Tab bleibt im Dialog (einfacher Trap).
  useEffect(() => {
    previouslyFocused.current = document.activeElement as HTMLElement;
    const node = dialogRef.current;
    const focusable = node?.querySelector<HTMLElement>(
      'button, [href], input, select, [tabindex]:not([tabindex="-1"])'
    );
    focusable?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "Tab" && node) {
        const items = Array.from(
          node.querySelectorAll<HTMLElement>(
            'button:not([disabled]), [href], input:not([disabled]), select, [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => el.offsetParent !== null);
        if (items.length === 0) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      previouslyFocused.current?.focus?.();
    };
  }, [onClose]);

  const tabBtn = (id: typeof tab, label: string) => (
    <button
      type="button"
      role="tab"
      aria-selected={tab === id}
      onClick={() => setTab(id)}
      className={`inline-flex h-10 items-center rounded-full px-4 text-sm font-semibold transition-colors ${
        tab === id ? "bg-navy-900 text-white" : "bg-navy-50 text-navy-800 hover:bg-navy-100"
      }`}
    >
      {label}
    </button>
  );

  const fontOptions: { v: FontScale; label: string }[] = [
    { v: 1, label: "Standard" },
    { v: 1.125, label: "Groß" },
    { v: 1.25, label: "Sehr groß" },
  ];

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-4"
      role="presentation"
    >
      {/* Overlay */}
      <button
        type="button"
        aria-label="Dialog schließen"
        onClick={onClose}
        className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm"
        tabIndex={-1}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-dialog-title"
        className="relative z-10 flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl ring-1 ring-navy-900/10 sm:rounded-3xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-navy-100 p-5 sm:p-6">
          <div>
            <h2 id="privacy-dialog-title" className="text-lg font-semibold text-navy-900">
              Datenschutz &amp; Barrierefreiheit
            </h2>
            <p className="mt-1 text-xs text-navy-700/75">
              Verwalten Sie Ihre Einwilligung und Anzeige-Einstellungen.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Schließen"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy-50 text-navy-800 transition-colors hover:bg-navy-100"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex gap-2 px-5 pt-4 sm:px-6" role="tablist" aria-label="Einstellungsbereiche">
          {tabBtn("datenschutz", "Datenschutz")}
          {tabBtn("barrierefreiheit", "Barrierefreiheit")}
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto p-5 sm:p-6">
          {tab === "datenschutz" ? (
            <div className="space-y-3" role="tabpanel" aria-label="Datenschutz">
              <p className="text-sm leading-relaxed text-navy-700/85">
                Wir setzen technisch notwendige Speicherung ein, damit die Website
                funktioniert. Alle anderen Zwecke (Statistik, Marketing) werden erst
                nach Ihrer ausdrücklichen Einwilligung aktiviert. Sie können Ihre
                Auswahl jederzeit ändern oder widerrufen.
              </p>

              <CookieRow
                title="Notwendig"
                desc="Für den Betrieb der Website erforderlich, z. B. das Speichern Ihrer Datenschutz-Auswahl. Immer aktiv."
                checked
                disabled
              />
              <CookieRow
                title="Statistik / Analyse"
                desc="Hilft uns zu verstehen, wie die Website genutzt wird. Wird erst nach Einwilligung geladen."
                checked={sel.analytics}
                onChange={(v) => setSel((s) => ({ ...s, analytics: v }))}
              />
              <CookieRow
                title="Marketing"
                desc="Ermöglicht personalisierte Inhalte und Reichweitenmessung externer Dienste. Wird erst nach Einwilligung geladen."
                checked={sel.marketing}
                onChange={(v) => setSel((s) => ({ ...s, marketing: v }))}
              />

              {consent ? (
                <p className="pt-1 text-[11px] text-navy-700/60">
                  Zuletzt dokumentiert:{" "}
                  {new Date(consent.timestamp).toLocaleString("de-DE")}
                </p>
              ) : null}

              <div className="flex flex-col gap-2 pt-2 sm:flex-row sm:flex-wrap">
                <button
                  type="button"
                  onClick={() => saveConsent(sel)}
                  className="inline-flex h-11 items-center justify-center rounded-full bg-navy-900 px-5 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
                >
                  Auswahl speichern
                </button>
                <button
                  type="button"
                  onClick={acceptAll}
                  className="inline-flex h-11 items-center justify-center rounded-full bg-teal-500 px-5 text-sm font-semibold text-white transition-colors hover:bg-teal-600"
                >
                  Alle akzeptieren
                </button>
                <button
                  type="button"
                  onClick={rejectAll}
                  className="inline-flex h-11 items-center justify-center rounded-full bg-navy-50 px-5 text-sm font-semibold text-navy-800 transition-colors hover:bg-navy-100"
                >
                  Nur notwendige
                </button>
              </div>

              <p className="pt-1 text-xs text-navy-700/70">
                Mehr Informationen im{" "}
                <Link href="/datenschutz" className="font-semibold text-teal-700 underline-offset-2 hover:underline">
                  Datenschutz
                </Link>{" "}
                und{" "}
                <Link href="/impressum" className="font-semibold text-teal-700 underline-offset-2 hover:underline">
                  Impressum
                </Link>
                .
              </p>
            </div>
          ) : (
            <div className="space-y-4" role="tabpanel" aria-label="Barrierefreiheit">
              <p className="text-sm leading-relaxed text-navy-700/85">
                Passen Sie die Darstellung an Ihre Bedürfnisse an. Die Einstellungen
                werden lokal in Ihrem Browser gespeichert.
              </p>

              <div className="rounded-2xl bg-navy-50/60 p-4">
                <p className="text-sm font-semibold text-navy-900">Schriftgröße</p>
                <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Schriftgröße">
                  {fontOptions.map((o) => (
                    <button
                      key={o.v}
                      type="button"
                      aria-pressed={a11y.fontScale === o.v}
                      onClick={() => setA11y({ fontScale: o.v })}
                      className={`inline-flex h-10 items-center rounded-full px-4 text-sm font-semibold transition-colors ${
                        a11y.fontScale === o.v
                          ? "bg-navy-900 text-white"
                          : "bg-white text-navy-800 ring-1 ring-navy-900/10 hover:bg-navy-50"
                      }`}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </div>

              <CookieRow
                title="Hoher Kontrast"
                desc="Verstärkt Text- und Randkontraste für bessere Lesbarkeit."
                checked={a11y.highContrast}
                onChange={(v) => setA11y({ highContrast: v })}
              />
              <CookieRow
                title="Animationen reduzieren"
                desc="Deaktiviert Bewegungen und Übergänge auf der Website."
                checked={a11y.reduceMotion}
                onChange={(v) => setA11y({ reduceMotion: v })}
              />
              <CookieRow
                title="Links unterstreichen"
                desc="Hebt alle Links durch eine Unterstreichung hervor."
                checked={a11y.underlineLinks}
                onChange={(v) => setA11y({ underlineLinks: v })}
              />

              <button
                type="button"
                onClick={resetA11y}
                className="inline-flex h-11 items-center justify-center rounded-full bg-navy-50 px-5 text-sm font-semibold text-navy-800 transition-colors hover:bg-navy-100"
              >
                Zurücksetzen
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------- Banner --------------------------------- */

function ConsentBanner() {
  const { acceptAll, rejectAll, openPanel } = usePrivacy();
  return (
    <div
      role="region"
      aria-label="Hinweis zum Datenschutz"
      className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:px-5 sm:pb-5"
    >
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-5 shadow-[0_30px_80px_-30px_rgba(15,34,56,0.5)] ring-1 ring-navy-900/10 sm:p-6">
        <p className="text-sm font-semibold text-navy-900">
          Wir respektieren Ihre Privatsphäre
        </p>
        <p className="mt-2 text-xs leading-relaxed text-navy-700/85 sm:text-sm">
          Wir verwenden nur technisch notwendige Speicherung, damit die Website
          funktioniert. Statistik- und Marketing-Dienste werden ausschließlich mit
          Ihrer Einwilligung geladen. Sie können Ihre Auswahl jederzeit anpassen.
        </p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          <button
            type="button"
            onClick={acceptAll}
            className="inline-flex h-11 flex-1 items-center justify-center rounded-full bg-teal-500 px-5 text-sm font-semibold text-white transition-colors hover:bg-teal-600 sm:flex-none"
          >
            Alle akzeptieren
          </button>
          <button
            type="button"
            onClick={rejectAll}
            className="inline-flex h-11 flex-1 items-center justify-center rounded-full bg-navy-900 px-5 text-sm font-semibold text-white transition-colors hover:bg-navy-800 sm:flex-none"
          >
            Nur notwendige
          </button>
          <button
            type="button"
            onClick={() => openPanel("datenschutz")}
            className="inline-flex h-11 flex-1 items-center justify-center rounded-full bg-navy-50 px-5 text-sm font-semibold text-navy-800 transition-colors hover:bg-navy-100 sm:flex-none"
          >
            Einstellungen
          </button>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- Floating button -------------------------- */

export default function PrivacyHub(): ReactNode {
  const { decided, panelOpen, openPanel, closePanel } = usePrivacy();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Vor der Hydration nichts rendern (vermeidet Mismatch und FOUC).
  if (!mounted) return null;

  return (
    <>
      {/* Durchgehender Button unten links – Gegenstück zum WhatsApp-Button rechts. */}
      <button
        type="button"
        onClick={() => openPanel("datenschutz")}
        aria-haspopup="dialog"
        aria-label="Datenschutz- und Barrierefreiheits-Einstellungen öffnen"
        className="group fixed bottom-5 left-5 z-40 inline-flex h-12 items-center gap-2 rounded-full bg-navy-900 px-4 text-sm font-semibold text-white shadow-[0_18px_40px_-12px_rgba(15,34,56,0.6)] ring-1 ring-white/10 transition-all hover:bg-navy-800 sm:bottom-7 sm:left-7"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
          <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
          <circle cx="12" cy="11" r="1.5" />
          <path d="M12 12.5V15" />
        </svg>
        <span className="hidden sm:inline">Datenschutz &amp; Barrierefreiheit</span>
      </button>

      {/* Erstbesuch-Banner, solange keine Entscheidung getroffen wurde. */}
      {!decided && !panelOpen ? <ConsentBanner /> : null}

      {/* Einstellungs-Dialog */}
      {panelOpen ? <SettingsDialog onClose={closePanel} /> : null}
    </>
  );
}
