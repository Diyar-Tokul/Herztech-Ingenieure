import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import SchadensChat from "./components/SchadensChat";
import PrivacyProvider from "./components/privacy/PrivacyProvider";
import PrivacyHub from "./components/privacy/PrivacyHub";
import ConsentScripts from "./components/privacy/ConsentScripts";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drycon-core.com"),
  title: {
    default: "Drycon Core | Ingenieur- und Meisterbetrieb für Bauwerksabdichtung",
    template: "%s | Drycon Core",
  },
  description:
    "Drycon Core plant, prüft und saniert Bauwerksabdichtungen sowie Schimmel- und Wasserschäden. Ingenieur- und Meisterbetrieb für Abdichtungstechnik – Mauertrockenlegung, Keller, Balkon, Garage, Feuchtigkeits-, Schimmel- und Wasserschadensanierung. Tochtergesellschaft der drycon® GmbH.",
  keywords: [
    "Abdichtungstechnik",
    "Mauertrockenlegung",
    "Mauerwerkstrockenlegung",
    "Kellerabdichtung",
    "Bauwerksabdichtung",
    "Horizontalsperre",
    "aufsteigende Feuchtigkeit",
    "feuchte Wände",
    "Balkonabdichtung",
    "Garagenabdichtung",
    "Feuchtigkeitssanierung",
    "Schimmelsanierung",
    "Wasserschadensanierung",
    "Drycon Core",
    "drycon",
  ],
  openGraph: {
    title: "Drycon Core | Ingenieur- und Meisterbetrieb für Bauwerksabdichtung",
    description:
      "Ingenieur- und Meisterbetrieb für Bauwerksabdichtung, Wasserschaden- und Schimmelsanierung. Wir analysieren, planen und sanieren mit handwerklicher Präzision.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-navy-900">
        {/* Wendet gespeicherte Barrierefreiheits-Einstellungen vor dem Paint an
            (verhindert Flackern). */}
        <Script id="a11y-init" strategy="beforeInteractive">
          {`(function(){try{var s=localStorage.getItem('drycore.a11y.v1');if(!s)return;var a=JSON.parse(s);var r=document.documentElement;if(a.fontScale)r.style.setProperty('--a11y-font-scale',String(a.fontScale));r.classList.toggle('a11y-contrast',!!a.highContrast);r.classList.toggle('a11y-reduce-motion',!!a.reduceMotion);r.classList.toggle('a11y-underline-links',!!a.underlineLinks);}catch(e){}})();`}
        </Script>

        <PrivacyProvider>
          <Nav />
          <main id="main" tabIndex={-1} className="pt-20">
            {children}
          </main>
          <Footer />
          <SchadensChat />
          <WhatsAppButton />
          <PrivacyHub />
          <ConsentScripts />
        </PrivacyProvider>
      </body>
    </html>
  );
}
