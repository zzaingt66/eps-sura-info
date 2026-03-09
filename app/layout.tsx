import type { Metadata } from "next";
import { Geist_Mono, Sora, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const titleFont = Sora({
  variable: "--font-sura-title",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Source_Sans_3({
  variable: "--font-sura-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EPS SURA | Reseña histórica",
  description: "Página SPA con core data, reseña histórica y misión/visión de EPS SURA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${titleFont.variable} ${bodyFont.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
