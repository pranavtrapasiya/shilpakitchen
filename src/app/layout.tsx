import type { Metadata } from "next";
import { Playfair_Display, Lato, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: {
    default: 'Shilpa\'s Kitchen - Authentic Indian Snacks & Sweets | Order Online',
    template: '%s | Shilpa\'s Kitchen'
  },
  description: '🍘 Order authentic Indian snacks & sweets online from Shilpa\'s Kitchen, Surat. Homemade chakri, sev, methi para, thepla, gathiya & more. Free delivery on orders above ₹500. Fresh, traditional flavors delivered to your doorstep.',
  keywords: [
    'Indian snacks online', 'Indian sweets delivery', 'traditional Gujarati snacks', 'homemade Indian food',
    'chakri online', 'sev online', 'methi para', 'thepla', 'gathiya', 'farshi puri', 'khakhra',
    'Surat food delivery', 'Gujarati sweets', 'Indian namkeen', 'authentic Indian snacks',
    'order Indian food online', 'Indian grocery delivery', 'traditional snacks delivery'
  ],
  authors: [{ name: 'Shilpa\'s Kitchen' }],
  creator: 'Shilpa\'s Kitchen',
  publisher: 'Shilpa\'s Kitchen',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.shilpaskitchen.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Shilpa\'s Kitchen - Authentic Indian Snacks & Sweets | Order Online',
    description: '🍘 Order authentic Indian snacks & sweets online from Shilpa\'s Kitchen, Surat. Homemade chakri, sev, methi para, thepla, gathiya & more. Free delivery on orders above ₹500.',
    url: 'https://www.shilpaskitchen.in',
    siteName: 'Shilpa\'s Kitchen',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shilpa\'s Kitchen - Authentic Indian Snacks & Sweets',
        type: 'image/jpeg',
      },
      {
        url: '/logo.jpeg',
        width: 400,
        height: 400,
        alt: 'Shilpa\'s Kitchen Logo',
        type: 'image/jpeg',
      },
    ],
    videos: [],
    audio: [],
    countryName: 'India',
    emails: ['hello@shilpaskitchen.in'],
    phoneNumbers: ['+919377732558'],
    faxNumbers: [],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shilpa\'s Kitchen - Authentic Indian Snacks & Sweets | Order Online',
    description: '🍘 Order authentic Indian snacks & sweets online from Shilpa\'s Kitchen, Surat. Homemade chakri, sev, methi para, thepla, gathiya & more. Free delivery on orders above ₹500.',
    images: ['/logo.jpeg'],
    creator: '@shilpaskitchen',
    site: '@shilpaskitchen',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'googleb3e187013b5eed4a',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  other: {
    'theme-color': '#C6A75E',
    'msapplication-TileColor': '#C6A75E',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Shilpa\'s Kitchen',
    'application-name': 'Shilpa\'s Kitchen',
    'msapplication-config': '/browserconfig.xml',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon.png', type: 'image/png', sizes: '96x96' },
      { url: '/icon.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [
      { url: '/icon.png', type: 'image/png', sizes: '180x180' },
    ],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${lato.variable} ${montserrat.variable} antialiased overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: "Shilpa's Kitchen",
              image: 'https://www.shilpaskitchen.in/logo.jpeg',
              '@id': 'https://www.shilpaskitchen.in',
              url: 'https://www.shilpaskitchen.in',
              telephone: '+919377732558',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '40, Alkapuri Society, Sumul Dairy Road, Katargam',
                addressLocality: 'Surat',
                addressRegion: 'Gujarat',
                postalCode: '395004',
                addressCountry: 'IN'
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 21.2186724,
                longitude: 72.8400006
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                  opens: '09:00',
                  closes: '20:00'
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Sunday',
                  opens: '10:00',
                  closes: '18:00'
                }
              ],
              sameAs: [
                'https://www.facebook.com/people/Shilpas-Kitchen/100081407570293/',
                'https://www.instagram.com/shilpas_kittchen/'
              ]
            })
          }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
