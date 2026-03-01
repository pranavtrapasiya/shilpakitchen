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
  title: "Shilpa's Kitchen - Authentic Indian Snacks & Sweets | Traditional Delicacies Delivered",
  description: "Discover authentic Indian snacks, sweets, and traditional delicacies at Shilpa's Kitchen. Premium quality homemade taste including chakri, gathiya, papad, sev, shakkar para, and more. Delivered with love to your door.",
  keywords: "Indian snacks, authentic Indian food, traditional sweets, homemade Indian snacks, Indian delicacies, chakri, chakli, gathiya, papad, sev, shakkar para, farsi puri, methi para, thepla, makai pauva, lason papadi, sev mamra, thepla, gathiya, Shilpa's Kitchen, Surat",
  authors: [{ name: "Shilpa's Kitchen" }],
  creator: "Shilpa's Kitchen",
  publisher: "Shilpa's Kitchen",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.shilpaskitchen.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shilpa's Kitchen - Authentic Indian Snacks & Sweets",
    description: "Discover authentic Indian snacks, sweets, and traditional delicacies. Premium quality homemade taste delivered to your door.",
    url: "https://www.shilpaskitchen.com",
    siteName: "Shilpa's Kitchen",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shilpa's Kitchen - Authentic Indian Snacks & Sweets",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shilpa's Kitchen - Authentic Indian Snacks & Sweets",
    description: "Discover authentic Indian snacks, sweets, and traditional delicacies. Premium quality homemade taste delivered to your door.",
    images: ["/og-image.jpg"],
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
    google: "your-google-verification-code",
  },
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
