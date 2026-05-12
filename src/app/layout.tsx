import type { Metadata } from "next";
import { Playfair_Display, Lato, Montserrat } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL('https://shilpaskitchen.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Shilpa\'s Kitchen - Authentic Indian Snacks & Sweets | Order Online',
    description: '🍘 Order authentic Indian snacks & sweets online from Shilpa\'s Kitchen, Surat. Homemade chakri, sev, methi para, thepla, gathiya & more. Free delivery on orders above ₹500.',
    url: 'https://shilpaskitchen.com',
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
        url: '/images/logo.png',
        width: 400,
        height: 400,
        alt: 'Shilpa\'s Kitchen Logo',
        type: 'image/png',
      },
    ],
    videos: [],
    audio: [],
    countryName: 'India',
    emails: ['hello@shilpaskitchen.com'],
    phoneNumbers: ['+919377732558'],
    faxNumbers: [],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shilpa\'s Kitchen - Authentic Indian Snacks & Sweets | Order Online',
    description: '🍘 Order authentic Indian snacks & sweets online from Shilpa\'s Kitchen, Surat. Homemade chakri, sev, methi para, thepla, gathiya & more. Free delivery on orders above ₹500.',
    images: ['/images/og-image.jpg'],
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
    google: 'your-google-verification-code',
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
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
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
        className={`${playfairDisplay.variable} ${lato.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
