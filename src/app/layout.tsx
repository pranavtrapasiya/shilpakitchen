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
    default: 'Shilpa Kitchen | Homemade Gujarati Snacks in Surat',
    template: '%s | Shilpa Kitchen'
  },
  description: 'Order fresh homemade Gujarati snacks like Farshi Puri, Limbu Gathiya, Chakri and more from Shilpa Kitchen Surat.',
  keywords: [
    'Gujarati snacks Surat', 'Farshi Puri', 'Limbu Gathiya', 'Homemade snacks'
  ],
  authors: [{ name: 'Shilpa Kitchen' }],
  creator: 'Shilpa Kitchen',
  publisher: 'Shilpa Kitchen',
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
    title: 'Shilpa Kitchen',
    description: 'Fresh Homemade Gujarati Snacks',
    url: 'https://shilpaskitchen.com',
    siteName: 'Shilpa Kitchen',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Shilpa Kitchen - Fresh Homemade Gujarati Snacks',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shilpa Kitchen | Homemade Gujarati Snacks in Surat',
    description: 'Order fresh homemade Gujarati snacks like Farshi Puri, Limbu Gathiya, Chakri and more from Shilpa Kitchen Surat.',
    images: ['/banner.jpg'],
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
  other: {
    'theme-color': '#C6A75E',
    'msapplication-TileColor': '#C6A75E',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Shilpa Kitchen',
    'application-name': 'Shilpa Kitchen',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
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
