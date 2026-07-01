import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://avix-digital.com"),
  title: {
    default: "AVIX — Sites vitrines, avis Google et visibilité locale en Vendée",
    template: "%s | AVIX",
  },
  description:
    "AVIX aide les commerces et entreprises locales en Vendée à améliorer leur visibilité avec un site moderne, une fiche Google optimisée et des supports NFC pour les avis clients.",
  keywords: [
    "site vitrine Vendée",
    "création site vitrine Vendée",
    "visibilité locale Vendée",
    "optimisation fiche Google Vendée",
    "avis Google commerce",
    "support NFC avis Google",
    "site internet commerce Vendée",
    "site web artisan Vendée",
    "agence visibilité locale Vendée",
    "site vitrine La Roche-sur-Yon",
    "site vitrine Challans",
    "site vitrine Les Sables-d'Olonne",
  ],
  authors: [{ name: "AVIX" }],
  creator: "AVIX",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://avix-digital.com",
    siteName: "AVIX",
    title: "AVIX — Sites vitrines, avis Google et visibilité locale en Vendée",
    description:
      "AVIX aide les commerces et entreprises locales en Vendée à améliorer leur visibilité avec un site moderne, une fiche Google optimisée et des supports NFC pour les avis clients.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AVIX — Sites vitrines, avis Google et visibilité locale en Vendée",
    description:
      "AVIX aide les commerces et entreprises locales en Vendée à améliorer leur visibilité avec un site moderne, une fiche Google optimisée et des supports NFC pour les avis clients.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD structured data for LocalBusiness
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AVIX",
  description:
    "AVIX aide les commerces et entreprises locales en Vendée à améliorer leur visibilité avec un site moderne, une fiche Google optimisée et des supports NFC pour les avis clients.",
  url: "https://avix-digital.com",
  email: "avix.digital.contact@gmail.com",
  telephone: "+33778071403",
  areaServed: {
    "@type": "State",
    name: "Vendée",
    containedInPlace: {
      "@type": "Country",
      name: "France",
    },
  },
  serviceType: [
    "Création de sites vitrines",
    "Optimisation Google Business Profile",
    "Supports NFC avis Google",
    "Visibilité locale",
    "Accompagnement digital",
  ],
  priceRange: "€€",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
