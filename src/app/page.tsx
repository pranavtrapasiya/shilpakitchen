import Loader from '@/components/Loader';
import Hero from '@/components/Hero';
import About from '@/components/About';
import SignatureDishes from '@/components/SignatureDishes';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import MouseGlow from '@/components/MouseGlow';
import SmoothScroll from '@/components/SmoothScroll';

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
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}
