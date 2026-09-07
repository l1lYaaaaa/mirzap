import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Unbounded,
  IBM_Plex_Sans,
  IBM_Plex_Mono,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Unbounded — geometric, technical-feeling display face with full Cyrillic
// support and a wide weight range. Reads as engineered/precise rather than
// a generic condensed-grotesk headline default.
const unbounded = Unbounded({
  variable: "--font-display",
  weight: ["600", "700", "800"],
  subsets: ["latin", "cyrillic"],
});

// IBM Plex Sans — engineering-heritage grotesk, used for body/UI copy.
const plexSans = IBM_Plex_Sans({
  variable: "--font-body",
  weight: ["400", "500", "600"],
  subsets: ["latin", "cyrillic"],
});

// IBM Plex Mono — reserved strictly for real technical strings (VIN, part
// numbers, prices), never for decorative labels.
const plexMono = IBM_Plex_Mono({
  variable: "--font-mono-site",
  weight: ["400", "500", "600"],
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Мировые запчасти — двигатель и КПП под ваш автомобиль",
  description:
    "Подбор новых и б/у двигателей и КПП для иномарок и LADA с проверкой совместимости, гарантией 14 дней и доставкой по России.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} ${unbounded.variable} ${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
