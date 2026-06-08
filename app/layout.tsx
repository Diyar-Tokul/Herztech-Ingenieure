import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drycore.de"),
  title: {
    default: "Drycore | Ingenieurtechnik für Bauwerksabdichtung",
    template: "%s | Drycore",
  },
  description:
    "Drycore plant, prüft und saniert Bauwerksabdichtungen und Gasleitungen. Meisterbetrieb für Mauertrockenlegung, Keller, Balkon, Garage und Feuchtigkeitssanierung.",
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
    "Gasleitungsprüfung",
    "Gasleitungssanierung",
    "Drycore",
  ],
  openGraph: {
    title: "Drycore | Ingenieurtechnik für Bauwerksabdichtung",
    description:
      "Ingenieurtechnik für Bauwerks- und Gasleitungsabdichtung. Wir analysieren, planen und sanieren mit handwerklicher Präzision.",
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
        <Nav />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
