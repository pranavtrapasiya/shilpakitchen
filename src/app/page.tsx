import type { Metadata } from 'next';

import Loader from '@/components/Loader';
import Hero from '@/components/Hero';
import About from '@/components/About';
import SignatureDishes from '@/components/SignatureDishes';
import WhyChooseUs from '@/components/WhyChooseUs';
import GoogleMapView from '@/components/GoogleMapView';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import MouseGlow from '@/components/MouseGlow';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.shilpaskitchen.in'),

  title: 'Shilpa Kitchen | Homemade Gujarati Snacks in Surat',

  description:
    'Fresh homemade Gujarati snacks in Surat including Thepla, Farshi Puri, Limbu Gathiya, Butter Chakri and more. Traditional recipes made with love.',

  keywords: [
    'Shilpa Kitchen',
    'Gujarati snacks Surat',
    'homemade snacks',
    'Farshi Puri',
    'Butter Chakri',
    'Thepla',
    'Limbu Gathiya',
    'Surat homemade food',
    'Gujarati farsan',
  ],

  alternates: {
    canonical: '/',
  },

  icons: {
    icon: [
      { url: '/favicon.ico?v=3', sizes: 'any' },
      { url: '/images/sklogoblack.png?v=3', media: '(prefers-color-scheme: light)', type: 'image/png' },
      { url: '/images/skwhitelogo.png?v=3', media: '(prefers-color-scheme: dark)', type: 'image/png' },
    ],
    shortcut: '/favicon.ico?v=3',
    apple: [
      { url: '/images/sklogoblack.png?v=3', media: '(prefers-color-scheme: light)' },
      { url: '/images/skwhitelogo.png?v=3', media: '(prefers-color-scheme: dark)' },
    ],
  },

  openGraph: {
    title: 'Shilpa Kitchen | Homemade Gujarati Snacks in Surat',

    description:
      'Fresh homemade Gujarati snacks in Surat including Thepla, Farshi Puri, Limbu Gathiya, Butter Chakri and more.',

    url: 'https://www.shilpaskitchen.in',

    siteName: 'Shilpa Kitchen',

    images: [
      {
        url: '/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Shilpa Kitchen Logo',
      },
    ],

    locale: 'en_IN',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Shilpa Kitchen | Homemade Gujarati Snacks in Surat',
    description:
      'Fresh homemade Gujarati snacks in Surat. Traditional recipes made with love.',
    images: ['/logo.jpeg'],
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',

  name: 'Shilpa Kitchen',

  image: 'https://www.shilpaskitchen.in/logo.jpeg',

  '@id': 'https://www.shilpaskitchen.in',

  url: 'https://www.shilpaskitchen.in',

  telephone: '+919377732558',

  email: 'hello@shilpaskitchen.in',

  servesCuisine: 'Gujarati',

  priceRange: '₹₹',

  acceptsReservations: 'False',

  address: {
    '@type': 'PostalAddress',
    streetAddress: '40, Alkapuri Society, Sumul Dairy Road, Katargam',
    addressLocality: 'Surat',
    addressRegion: 'GJ',
    postalCode: '395004',
    addressCountry: 'IN',
  },

  geo: {
    '@type': 'GeoCoordinates',
    latitude: 21.2185,
    longitude: 72.8277,
  },

  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '09:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '10:00',
      closes: '18:00',
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <SmoothScroll />
      <ScrollProgress />
      <MouseGlow />
      <Loader />

      <main className="relative">
        <Hero />
        <About />
        <SignatureDishes featuredOnly={true} />
        <WhyChooseUs />
        <GoogleMapView />
        <Contact />
      </main>

      <Footer />
    </>
  );
}