import type { Metadata } from "next";
import { Bebas_Neue, Inter, Noto_Sans_Georgian } from "next/font/google";
import { ScrollRestorationGuard } from "@/components/ScrollRestorationGuard";
import { ThemeToggle } from "@/components/ThemeToggle";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const notoSansGeorgian = Noto_Sans_Georgian({
  variable: "--font-georgian",
  subsets: ["georgian"],
});

export const metadata: Metadata = {
  title: "midi — go where you belong.",
  description:
    "Midi is a social discovery app built around real people, real places, and real moments. Diploma Project 2026 — Guga Samukashvili.",
};

const themeInitScript = `
  try {
    var theme = window.localStorage.getItem('midi-site-theme');
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  } catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${inter.variable} ${notoSansGeorgian.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-bg text-ink font-body antialiased">
        <ScrollRestorationGuard />
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
