import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Mi Portfolio | Desarrollador Full Stack",
    template: "%s | Mi Portfolio",
  },
  description: "Portfolio profesional de desarrollador Full Stack especializado en React, Next.js, TypeScript y tecnologías modernas.",
  keywords: [
    "desarrollador",
    "full stack",
    "react",
    "nextjs",
    "typescript",
    "portfolio",
    "javascript",
    "web development",
  ],
  authors: [{ name: "Tu Nombre" }],
  creator: "Tu Nombre",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://tu-portfolio.vercel.app",
    title: "Mi Portfolio | Desarrollador Full Stack",
    description: "Portfolio profesional de desarrollador Full Stack especializado en React, Next.js, TypeScript y tecnologías modernas.",
    siteName: "Mi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi Portfolio | Desarrollador Full Stack",
    description: "Portfolio profesional de desarrollador Full Stack especializado en React, Next.js, TypeScript y tecnologías modernas.",
    creator: "@tu_usuario",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tu-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased min-h-screen bg-background`}>
        <div className="relative flex min-h-screen flex-col">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
