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
  title: "Shilpa's Kitchen - Authentic Indian Restaurant in Surat | Premium Dining Experience",
  description: "Experience authentic Indian cuisine at Shilpa's Kitchen in Surat. Fine dining with traditional recipes, elegant ambiance, and exceptional service. Order online or visit us for an unforgettable culinary journey.",
  keywords: "Indian restaurant Surat, authentic Indian food, fine dining Surat, best restaurant Surat, traditional Indian cuisine, Shilpa's Kitchen, Indian food delivery, premium dining experience, vegetarian restaurant Surat, non-vegetarian restaurant Surat",
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
    title: "Shilpa's Kitchen - Authentic Indian Restaurant in Surat",
    description: "Experience the finest Indian cuisine in Surat with our authentic recipes and elegant dining atmosphere.",
    url: "https://www.shilpaskitchen.com",
    siteName: "Shilpa's Kitchen",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shilpa's Kitchen - Authentic Indian Restaurant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shilpa's Kitchen - Authentic Indian Restaurant in Surat",
    description: "Experience the finest Indian cuisine in Surat with our authentic recipes and elegant dining atmosphere.",
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
