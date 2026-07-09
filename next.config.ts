import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Statischer Export -> erzeugt beim Build einen `out`-Ordner,
  // der per FTP (FileZilla) auf jeden Webspace hochgeladen werden kann.
  output: "export",
  // Ohne Next-Server ist keine On-the-fly-Bildoptimierung möglich.
  images: { unoptimized: true },
  // Erzeugt pro Seite einen Ordner mit index.html (z. B. /kontakt/index.html),
  // damit die URLs auf klassischem Webspace (Apache/Nginx) sauber funktionieren.
  trailingSlash: true,
};

export default nextConfig;
