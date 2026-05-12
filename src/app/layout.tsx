import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const BASE_URL = "https://www.shilpaskitchen.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Shilpa Kitchen | Homemade Gujarati Snacks in Surat",
    template: "%s | Shilpa Kitchen",
  },
  description:
    "Fresh homemade Gujarati snacks in Surat including Farshi Puri, Limbu Gathiya, Butter Chakri and more. Order online via WhatsApp.",
  keywords: [
    "Gujarati snacks Surat",
    "homemade Farshi Puri Surat",
    "Limbu Gathiya",
    "Butter Chakri",
    "Papad Pauva",
    "homemade snacks Surat",
    "Gujarati namkeen",
    "traditional Indian snacks",
    "Shilpa Kitchen Surat",
    "order snacks online Surat",
  ],
  authors: [{ name: "Shilpa Kitchen" }],
  creator: "Shilpa Kitchen",
  publisher: "Shilpa Kitchen",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shilpa Kitchen | Homemade Gujarati Snacks in Surat",
    description:
      "Fresh homemade Gujarati snacks in Surat including Farshi Puri, Limbu Gathiya, Butter Chakri and more.",
    url: BASE_URL,
    siteName: "Shilpa Kitchen",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Shilpa Kitchen - Fresh Homemade Gujarati Snacks in Surat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shilpa Kitchen | Homemade Gujarati Snacks in Surat",
    description:
      "Fresh homemade Gujarati snacks in Surat including Farshi Puri, Limbu Gathiya, Butter Chakri and more.",
    images: ["/images/og-banner.png"],
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
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
  },
  manifest: "/manifest.json",
  other: {
    "theme-color": "#C6A75E",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-title": "Shilpa Kitchen",
  },
};

// LocalBusiness structured data for Google local search
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: "Shilpa Kitchen",
  alternateName: "Shilpa's Kitchen",
  description:
    "Homemade Gujarati snacks business in Surat offering Farshi Puri, Limbu Gathiya, Butter Chakri, Papad Pauva and more traditional snacks.",
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.png`,
  image: `${BASE_URL}/images/SKBanner(Address).png`,
  telephone: "+91-93773-25580",
  email: "hello@shilpaskitchen.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "40, Alkapuri Society, Sumul Dairy Road, Katargam",
    addressLocality: "Surat",
    addressRegion: "Gujarat",
    postalCode: "395004",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "21.2186724",
    longitude: "72.8374257",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "10:00",
      closes: "18:00",
    },
  ],
  priceRange: "₹75–₹500",
  servesCuisine: ["Gujarati", "Indian"],
  hasMap:
    "https://www.google.com/maps/place/Shilpa%27s+Kitchen/@21.2186724,72.8374257,17z",
  sameAs: [
    "https://www.instagram.com/shilpaskitchen",
    "https://www.facebook.com/shilpaskitchen",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${playfairDisplay.variable} ${lato.variable} antialiased`}
      >
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
          strategy="beforeInteractive"
        />
        {children}
      </body>
    </html>
  );
}
