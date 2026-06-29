"use client";

import Script from "next/script";
import { usePrivacy } from "./PrivacyProvider";

/**
 * Lädt nicht notwendige Skripte (Analytics/Marketing) ausschließlich nach
 * ausdrücklicher Einwilligung. Ohne Zustimmung wird hier nichts gerendert –
 * es werden also auch keine Drittanbieter-Cookies gesetzt.
 *
 * Aktuell ist kein Tracking aktiv. Beispiele sind vorbereitet und werden nur
 * geladen, wenn (a) die jeweilige Kategorie zugestimmt wurde und (b) die
 * zugehörige ID per Umgebungsvariable hinterlegt ist.
 */
export default function ConsentScripts() {
  const { consent } = usePrivacy();
  if (!consent) return null;

  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <>
      {consent.categories.analytics && gaId ? (
        <>
          <Script
            id="ga-src"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', { anonymize_ip: true });
            `}
          </Script>
        </>
      ) : null}

      {/*
        Marketing-Skripte (z. B. Meta Pixel, Google Ads) analog ergänzen:
        {consent.categories.marketing && process.env.NEXT_PUBLIC_PIXEL_ID ? (
          <Script id="pixel" strategy="afterInteractive"> ... </Script>
        ) : null}
      */}
    </>
  );
}
