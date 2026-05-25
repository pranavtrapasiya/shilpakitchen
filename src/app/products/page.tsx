import { Metadata } from 'next';
import SignatureDishes from '@/components/SignatureDishes';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Our Products | Shilpa Kitchen',
  description: 'Explore our complete collection of homemade Gujarati snacks and sweets. From crispy chakri to soft thepla, order authentic tastes of Surat.',
  alternates: {
    canonical: '/products',
  },
};

export default function ProductsPage() {
  return (
    <>
      <main className="pt-20">
        <section className="bg-[#0E0E0E] py-12 md:py-20">
          <div className="container mx-auto px-6 text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-[#F5F3EF] mb-6">
              Our Complete Collection
            </h1>
            <p className="text-xl text-[#C6A75E] max-w-2xl mx-auto">
              Traditional Gujarati snacks and sweets made fresh with premium ingredients.
            </p>
          </div>
          <SignatureDishes featuredOnly={false} showTitle={false} />
        </section>
      </main>
      <Footer />
    </>
  );
}
