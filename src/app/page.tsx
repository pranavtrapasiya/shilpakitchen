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
  title: 'Shilpa Kitchen | Homemade Gujarati Snacks in Surat',
  description:
    'Fresh homemade Gujarati snacks in Surat including Farshi Puri, Limbu Gathiya, Butter Chakri and more. Order online via WhatsApp. Traditional recipes, made with love.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Shilpa Kitchen | Homemade Gujarati Snacks in Surat',
    description:
      'Fresh homemade Gujarati snacks in Surat — Farshi Puri, Limbu Gathiya, Butter Chakri and more. Order via WhatsApp.',
    url: 'https://www.shilpaskitchen.in',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',
  name: "Shilpa Kitchen",
  image: 'https://www.shilpaskitchen.in/images/logo.png',
  '@id': 'https://www.shilpaskitchen.in',
  url: 'https://www.shilpaskitchen.in',
  telephone: '+919377732558',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '40, Alkapuri Society, Sumul Dairy Road, Katargam',
    addressLocality: 'Surat',
    addressRegion: 'GJ',
    postalCode: '395004',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 21.2185,
    longitude: 72.8277
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
  servesCuisine: 'Gujarati',
  priceRange: '₹₹',
  email: 'hello@shilpaskitchen.in',
  acceptsReservations: 'False'
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <SmoothScroll />
      <ScrollProgress />
      <MouseGlow />
      <Loader />

      <main className="relative">
        <Hero />
        <About />
        <SignatureDishes />
        <WhyChooseUs />
        <GoogleMapView />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
