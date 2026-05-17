import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/fide/Header";
import Footer from "@/components/fide/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ENTREPRISE FIDE | Sécurité • Énergie • Digital • Communication",
    template: "%s | ENTREPRISE FIDE"
  },
  description: "ENTREPRISE FIDE accompagne les entreprises, ONG et institutions publiques en Côte d'Ivoire avec des solutions techniques et digitales fiables : vidéosurveillance, énergie solaire, développement web, communication.",
  keywords: ["ENTREPRISE FIDE", "Côte d'Ivoire", "Abidjan", "vidéosurveillance", "solaire", "développement web", "sécurité", "digital", "communication", "électricité industrielle", "agriculture"],
  authors: [{ name: "ENTREPRISE FIDE" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "ENTREPRISE FIDE | Excellence technique & Innovation Digitale",
    description: "Des solutions techniques et digitales fiables pour entreprises, institutions et projets stratégiques en Afrique.",
    url: "https://entreprisefide.com",
    siteName: "ENTREPRISE FIDE",
    type: "website",
    locale: "fr_CI",
  },
  twitter: {
    card: "summary_large_image",
    title: "ENTREPRISE FIDE",
    description: "Excellence technique & Innovation Digitale en Afrique",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
