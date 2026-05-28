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
  metadataBase: new URL("https://herztec.de"),
  title: {
    default: "HERZTEC Ingenieure | Abdichtungstechnik",
    template: "%s | HERZTEC Ingenieure",
  },
  description:
    "HERZTEC Ingenieure plant, prüft und saniert Bauwerksabdichtungen und Gasleitungen. Meisterbetrieb für Keller, Balkon, Garage und Feuchtigkeitssanierung.",
  keywords: [
    "Abdichtungstechnik",
    "Kellerabdichtung",
    "Bauwerksabdichtung",
    "Horizontalsperre",
    "Balkonabdichtung",
    "Garagenabdichtung",
    "Feuchtigkeitssanierung",
    "Gasleitungsprüfung",
    "Gasleitungssanierung",
    "HERZTEC Ingenieure",
  ],
  openGraph: {
    title: "HERZTEC Ingenieure | Abdichtungstechnik",
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
