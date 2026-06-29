"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

// Versionsstand der Einwilligung. Bei inhaltlicher Änderung erhöhen,
// dann wird die Zustimmung erneut eingeholt (DSGVO-Dokumentation).
export const CONSENT_VERSION = 1;

export const CONSENT_KEY = "drycore.consent.v1";
export const A11Y_KEY = "drycore.a11y.v1";

export type ConsentCategories = {
  analytics: boolean;
  marketing: boolean;
};

export type ConsentRecord = {
  version: number;
  // ISO-Zeitstempel dokumentiert Zeitpunkt der Einwilligung.
  timestamp: string;
  categories: ConsentCategories;
};

export type FontScale = 1 | 1.125 | 1.25;

export type A11ySettings = {
  fontScale: FontScale;
  highContrast: boolean;
  reduceMotion: boolean;
  underlineLinks: boolean;
};

const defaultA11y: A11ySettings = {
  fontScale: 1,
  highContrast: false,
  reduceMotion: false,
  underlineLinks: false,
};

type PrivacyContextValue = {
  /** null = noch keine Entscheidung getroffen. */
  consent: ConsentRecord | null;
  decided: boolean;
  a11y: A11ySettings;
  panelOpen: boolean;
  panelTab: "datenschutz" | "barrierefreiheit";
  openPanel: (tab?: "datenschutz" | "barrierefreiheit") => void;
  closePanel: () => void;
  acceptAll: () => void;
  rejectAll: () => void;
  saveConsent: (categories: ConsentCategories) => void;
  setA11y: (partial: Partial<A11ySettings>) => void;
  resetA11y: () => void;
};

const PrivacyContext = createContext<PrivacyContextValue | null>(null);

export function usePrivacy() {
  const ctx = useContext(PrivacyContext);
  if (!ctx) throw new Error("usePrivacy must be used within PrivacyProvider");
  return ctx;
}

/** Wendet die A11y-Einstellungen auf das <html>-Element an. */
function applyA11y(s: A11ySettings) {
  const root = document.documentElement;
  root.style.setProperty("--a11y-font-scale", String(s.fontScale));
  root.classList.toggle("a11y-contrast", s.highContrast);
  root.classList.toggle("a11y-reduce-motion", s.reduceMotion);
  root.classList.toggle("a11y-underline-links", s.underlineLinks);
}

export default function PrivacyProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentRecord | null>(null);
  const [a11y, setA11yState] = useState<A11ySettings>(defaultA11y);
  const [panelOpen, setPanelOpen] = useState(false);
  const [panelTab, setPanelTab] = useState<"datenschutz" | "barrierefreiheit">(
    "datenschutz"
  );
  const [hydrated, setHydrated] = useState(false);

  // Gespeicherte Werte beim Start laden (nur Client).
  useEffect(() => {
    try {
      const rawConsent = localStorage.getItem(CONSENT_KEY);
      if (rawConsent) {
        const parsed = JSON.parse(rawConsent) as ConsentRecord;
        // Bei veralteter Version erneut nachfragen.
        if (parsed.version === CONSENT_VERSION) setConsent(parsed);
      }
      const rawA11y = localStorage.getItem(A11Y_KEY);
      if (rawA11y) {
        const parsed = { ...defaultA11y, ...(JSON.parse(rawA11y) as A11ySettings) };
        setA11yState(parsed);
        applyA11y(parsed);
      }
    } catch {
      // Fehlerhafte/blockierte Speicherung ignorieren.
    }
    setHydrated(true);
  }, []);

  const persistConsent = useCallback((categories: ConsentCategories) => {
    const record: ConsentRecord = {
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString(),
      categories,
    };
    setConsent(record);
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
    } catch {
      /* ignore */
    }
    // Benachrichtigt Script-Gating, dass sich die Einwilligung geändert hat.
    window.dispatchEvent(new CustomEvent("drycore:consent-changed"));
  }, []);

  const acceptAll = useCallback(() => {
    persistConsent({ analytics: true, marketing: true });
    setPanelOpen(false);
  }, [persistConsent]);

  const rejectAll = useCallback(() => {
    persistConsent({ analytics: false, marketing: false });
    setPanelOpen(false);
  }, [persistConsent]);

  const saveConsent = useCallback(
    (categories: ConsentCategories) => {
      persistConsent(categories);
      setPanelOpen(false);
    },
    [persistConsent]
  );

  const setA11y = useCallback((partial: Partial<A11ySettings>) => {
    setA11yState((prev) => {
      const next = { ...prev, ...partial };
      applyA11y(next);
      try {
        localStorage.setItem(A11Y_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const resetA11y = useCallback(() => {
    setA11yState(defaultA11y);
    applyA11y(defaultA11y);
    try {
      localStorage.removeItem(A11Y_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  const openPanel = useCallback(
    (tab: "datenschutz" | "barrierefreiheit" = "datenschutz") => {
      setPanelTab(tab);
      setPanelOpen(true);
    },
    []
  );
  const closePanel = useCallback(() => setPanelOpen(false), []);

  // Ermöglicht das Öffnen aus beliebigen Komponenten (z. B. Footer-Link)
  // ohne Context-Zugriff – per globalem Event.
  useEffect(() => {
    const handler = (e: Event) => {
      const tab = (e as CustomEvent).detail as
        | "datenschutz"
        | "barrierefreiheit"
        | undefined;
      openPanel(tab ?? "datenschutz");
    };
    window.addEventListener("drycore:open-privacy", handler);
    return () => window.removeEventListener("drycore:open-privacy", handler);
  }, [openPanel]);

  const value = useMemo<PrivacyContextValue>(
    () => ({
      consent,
      decided: hydrated && consent !== null,
      a11y,
      panelOpen,
      panelTab,
      openPanel,
      closePanel,
      acceptAll,
      rejectAll,
      saveConsent,
      setA11y,
      resetA11y,
    }),
    [
      consent,
      hydrated,
      a11y,
      panelOpen,
      panelTab,
      openPanel,
      closePanel,
      acceptAll,
      rejectAll,
      saveConsent,
      setA11y,
      resetA11y,
    ]
  );

  return (
    <PrivacyContext.Provider value={value}>{children}</PrivacyContext.Provider>
  );
}

/** Hilfsfunktion: öffnet das Panel von überall (z. B. Footer-Link). */
export function openPrivacyPanel(
  tab: "datenschutz" | "barrierefreiheit" = "datenschutz"
) {
  window.dispatchEvent(new CustomEvent("drycore:open-privacy", { detail: tab }));
}
