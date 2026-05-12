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

export default function Home() {
  return (
    <>
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
