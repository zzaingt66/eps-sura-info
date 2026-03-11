import type { Metadata } from "next";
import { Cormorant_Garamond, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";

const titleFont = Cormorant_Garamond({
  variable: "--font-vitanova-title",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Manrope({
  variable: "--font-vitanova-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VitaNova IPS | Reseña institucional",
  description:
    "Sitio informativo de VitaNova IPS con reseña histórica, propósito institucional y canales de atención.",
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
