import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ArrowRight, Award } from 'lucide-react';
import { productsData } from '@/data/products';
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
  // Select the 3 signature featured best-sellers for the top row
  const bestSellerSlugs = ["butter-chakri", "thepla", "methi-para"];
  const bestSellers = bestSellerSlugs.map(slug => productsData[slug]).filter(Boolean);

  return (
    <>
      <main className="pt-24 bg-[#0E0E0E] min-h-screen">
        
        {/* Header Section */}
        <section className="py-12 md:py-16 bg-[#0E0E0E]">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#F5F3EF] mb-6 tracking-tight">
              Our Complete Collection
            </h1>
            <p className="text-lg md:text-xl text-[#C6A75E] max-w-2xl mx-auto">
              Traditional Gujarati snacks and sweets made fresh with premium ingredients, prepared with love.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C6A75E] to-[#D4AF37] mx-auto mt-6"></div>
          </div>
        </section>

        {/* 🌟 CHEF'S SIGNATURE BEST SELLERS SECTION */}
        <section className="pb-16 bg-[#0E0E0E]">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-b from-[#161616] to-[#111] border border-[#C6A75E]/30 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              {/* Background ambient glow */}
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#C6A75E]/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#C6A75E]/5 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 relative z-10">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#C6A75E] font-bold flex items-center mb-2">
                    <Award className="w-4 h-4 mr-1.5 text-[#C6A75E]" /> House Specialties
                  </span>
                  <h2 className="text-3xl font-extrabold text-[#F5F3EF]">
                    Chef's Signature Best Sellers
                  </h2>
                </div>
                <p className="text-[#F5F3EF]/70 max-w-md text-sm md:text-base mt-2 md:mt-0">
                  Our three most loved recipes, perfected over generations. Highly recommended if you are trying Shilpa's Kitchen for the first time!
                </p>
              </div>

              {/* 3 Best Sellers Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {bestSellers.map((product) => (
                  <Link 
                    key={product.slug} 
                    href={`/${product.slug}`}
                    className="group flex flex-col bg-[#0E0E0E]/80 border border-[#C6A75E]/15 hover:border-[#C6A75E]/70 rounded-2xl p-5 transition-all duration-300 shadow-lg hover:shadow-[#C6A75E]/5"
                  >
                    {/* Image with Gold Glow Badge */}
                    <div className="relative aspect-video rounded-xl overflow-hidden mb-5">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        quality={50}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-transparent opacity-60"></div>
                      
                      {/* Premium Glowing Best Seller Badge */}
                      <div className="absolute top-3 left-3 bg-gradient-to-r from-[#C6A75E] to-[#D4AF37] text-[#0E0E0E] text-[10px] uppercase tracking-widest font-black px-2.5 py-1 rounded shadow-lg flex items-center">
                        <Star className="w-3 h-3 mr-1 fill-current" /> Best Seller
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-grow">
                      <div className="flex justify-between items-center mb-2.5">
                        <h3 className="text-lg font-bold text-[#F5F3EF] group-hover:text-[#C6A75E] transition-colors">
                          {product.name}
                        </h3>
                        <div className="flex items-center text-xs text-[#C6A75E]">
                          <Star className="w-3.5 h-3.5 fill-current mr-1" />
                          <span className="font-bold">{product.rating}</span>
                        </div>
                      </div>
                      
                      <p className="text-xs text-[#F5F3EF]/65 line-clamp-2 mb-4 leading-relaxed">
                        {product.shortDescription}
                      </p>
                      
                      {/* Quick Details & CTA */}
                      <div className="mt-auto pt-3 border-t border-[#C6A75E]/10 flex items-center justify-between">
                        <span className="text-sm font-extrabold text-[#C6A75E]">
                          ₹{product.price} <span className="text-[10px] text-[#F5F3EF]/40 font-normal">/ {product.weight}</span>
                        </span>
                        <span className="text-xs text-[#F5F3EF]/80 font-bold group-hover:text-[#C6A75E] flex items-center transition-colors">
                          Order Now <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 📋 COMPLETE MENUCARD / ALL PRODUCTS */}
        <section className="bg-gradient-to-b from-[#0E0E0E] to-[#121212] border-t border-[#C6A75E]/15">
          <div className="container mx-auto px-6 py-12">
            <div className="text-center md:text-left mb-6">
              <h2 className="text-3xl font-extrabold text-[#F5F3EF] tracking-tight">
                Explore Our Complete Menu
              </h2>
              <p className="text-sm text-[#C6A75E] mt-1">
                Browse, search, and filter our full list of premium snacks and sweets.
              </p>
            </div>
            <SignatureDishes featuredOnly={false} showTitle={false} />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
