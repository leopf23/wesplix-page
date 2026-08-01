import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wesplix Media — Soluciones Digitales y Creatividad",
  description:
    "Wesplix Media es una empresa de soluciones digitales y creatividad: branding, diseño UI/UX, desarrollo web y de software, marketing digital y producción audiovisual.",
  keywords: [
    "Wesplix Media",
    "branding",
    "diseño UI/UX",
    "desarrollo web",
    "desarrollo de software",
    "marketing digital",
    "agencia creativa",
  ],
  openGraph: {
    title: "Wesplix Media — Soluciones Digitales y Creatividad",
    description:
      "Construimos marcas, productos digitales y experiencias que compiten al más alto nivel.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased selection:bg-accent-violet selection:text-white">
        {children}
      </body>
    </html>
  );
}
