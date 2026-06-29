"use client";

import { openPrivacyPanel } from "./PrivacyProvider";

type Props = {
  tab?: "datenschutz" | "barrierefreiheit";
  className?: string;
  children: React.ReactNode;
};

/** Öffnet das Datenschutz-/Barrierefreiheits-Panel von beliebiger Stelle. */
export default function PrivacySettingsLink({ tab = "datenschutz", className, children }: Props) {
  return (
    <button type="button" onClick={() => openPrivacyPanel(tab)} className={className}>
      {children}
    </button>
  );
}
