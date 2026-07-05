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
    default: "AVIX — Sites vitrines & visibilité locale en Vendée",
    template: "%s — AVIX",
  },

  description:
    "Basé en Vendée, AVIX accompagne les commerces locaux en Vendée, Loire-Atlantique, Charente-Maritime et Maine-et-Loire. Nous créons des sites vitrines professionnels et optimisons votre visibilité locale. Devis gratuit.",

  keywords: [
    // Services
    "création site vitrine Vendée",
    "site internet commerce local Vendée",
    "site web artisan Vendée",
    "agence web Vendée",
    "optimisation fiche Google Business Profile",
    "support NFC avis Google",
    "visibilité locale Vendée",
    "agence visibilité locale",
    // Villes principales
    "création site vitrine La Roche-sur-Yon",
    "création site vitrine Challans",
    "création site vitrine Les Sables-d'Olonne",
    "création site vitrine Saint-Gilles-Croix-de-Vie",
    "création site vitrine Nantes",
    "création site vitrine La Rochelle",
    "création site vitrine Angers",
    "site internet restaurant Vendée",
    "site internet garage Vendée",
    "site internet coiffeur Vendée",
    "site internet artisan Vendée",
    "site vitrine camping Vendée",
    // Longue traîne
    "comment améliorer avis Google",
    "améliorer visibilité Google Maps commerce",
    "créer site web pas cher Vendée",
  ],

  authors: [{ name: "AVIX", url: "https://avix-digital.com" }],
  creator: "AVIX",
  publisher: "AVIX",

  alternates: {
    canonical: "https://avix-digital.com",
    languages: {
      "fr-FR": "https://avix-digital.com",
    },
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://avix-digital.com",
    siteName: "AVIX",
    title: "AVIX — Sites vitrines & visibilité locale en Vendée",
    description:
      "AVIX crée des sites vitrines professionnels et optimise la fiche Google des commerces locaux en Vendée et régions voisines. Pack à partir de 149 €.",
  },

  twitter: {
    card: "summary_large_image",
    title: "AVIX — Sites vitrines & visibilité locale en Vendée",
    description:
      "Sites vitrines professionnels et optimisation Google pour les commerces locaux en Vendée. Devis gratuit.",
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
    // À compléter si vous avez Google Search Console
    // google: 'VOTRE_CODE_VERIFICATION',
  },
};

// ─── JSON-LD Structured Data ─────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // LocalBusiness principal
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://avix-digital.com/#business",
      name: "AVIX",
      legalName: "AVIX",
      description:
        "AVIX crée des sites vitrines professionnels et optimise la présence Google des commerces et artisans locaux en Vendée, Loire-Atlantique, Charente-Maritime et Maine-et-Loire.",
      url: "https://avix-digital.com",
      logo: {
        "@type": "ImageObject",
        url: "https://avix-digital.com/icon.png",
        width: 512,
        height: 512,
      },
      image: "https://avix-digital.com/icon.png",
      email: "avix.digital.contact@gmail.com",
      telephone: "+33778071403",
      priceRange: "€€",
      currenciesAccepted: "EUR",
      paymentAccepted: "Virement bancaire, Chèque",
      areaServed: [
        { "@type": "AdministrativeArea", name: "Vendée", identifier: "85" },
        { "@type": "AdministrativeArea", name: "Loire-Atlantique", identifier: "44" },
        { "@type": "AdministrativeArea", name: "Charente-Maritime", identifier: "17" },
        { "@type": "AdministrativeArea", name: "Maine-et-Loire", identifier: "49" },
      ],
      serviceArea: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 46.67,
          longitude: -1.43,
        },
        geoRadius: "100000",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services AVIX",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Pack Avis Express",
            description:
              "Optimisation fiche Google Business Profile + support NFC avis Google + installation sur place.",
            price: "149",
            priceCurrency: "EUR",
            url: "https://avix-digital.com/offres",
          },
          {
            "@type": "Offer",
            name: "Pack Visibilité Locale",
            description:
              "Site vitrine one-page professionnel + fiche Google optimisée + support NFC avis Google.",
            price: "790",
            priceCurrency: "EUR",
            url: "https://avix-digital.com/offres",
          },
        ],
      },
      knowsAbout: [
        "Création de sites vitrines",
        "Optimisation Google Business Profile",
        "Supports NFC avis Google",
        "Visibilité locale",
        "Référencement local",
        "Accompagnement digital",
      ],
      sameAs: [],
    },
    // WebSite avec SearchAction
    {
      "@type": "WebSite",
      "@id": "https://avix-digital.com/#website",
      url: "https://avix-digital.com",
      name: "AVIX",
      description: "Sites vitrines et visibilité locale en Vendée",
      publisher: { "@id": "https://avix-digital.com/#business" },
      inLanguage: "fr-FR",
    },
  ],
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
        {/* JSON-LD Structured Data */}
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
