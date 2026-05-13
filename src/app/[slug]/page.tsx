import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Star, Clock, Truck, Shield, ChefHat, Phone, Mail, ChevronRight, MessageCircle } from 'lucide-react';
import { productsData } from '@/data/products';
import { WHATSAPP_NUMBER, buildWhatsAppUrl } from '@/lib/whatsapp';
import Footer from '@/components/Footer';

// Generate static params for all products
export async function generateStaticParams() {
  return Object.keys(productsData).map((slug) => ({
    slug,
  }));
}

// Generate dynamic metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData[slug];
  
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  const url = `https://www.shilpaskitchen.in/${slug}`;

  return {
    title: product.metaTitle,
    description: product.metaDescription,
    keywords: product.metaKeywords,
    alternates: {
      canonical: `/${slug}`,
    },
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      url,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: `${product.name} in Surat - Shilpa Kitchen`,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.metaTitle,
      description: product.metaDescription,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productsData[slug];

  if (!product) {
    notFound();
  }

  const productUrl = `https://www.shilpaskitchen.in/${slug}`;
  const whatsappUrl = buildWhatsAppUrl(`Hi! I'd like to order ${product.name} from Shilpa Kitchen.`);

  // Structured Data
  const productSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name,
    image: `https://www.shilpaskitchen.in${product.image}`,
    description: product.shortDescription,
    brand: {
      '@type': 'Brand',
      name: "Shilpa Kitchen",
    },
    offers: {
      '@type': 'Offer',
      url: productUrl,
      priceCurrency: 'INR',
      price: product.price,
      priceValidUntil: '2026-12-31',
      itemCondition: 'https://schema.org/NewCondition',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: "Shilpa Kitchen",
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
    category: product.category,
    suitableForDiet: 'https://schema.org/VegetarianDiet',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: product.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.shilpaskitchen.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products',
        item: 'https://www.shilpaskitchen.in/#menu',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.name,
        item: productUrl,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-gradient-to-b from-[#0E0E0E] to-[#1a1a1a] pt-24 pb-20 lg:pb-0">
        
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="bg-[#0E0E0E] border-b border-[#C6A75E]/20 sticky top-[72px] lg:top-[88px] z-40 backdrop-blur-md bg-opacity-90">
          <div className="container mx-auto px-6 py-4">
            <ol className="flex items-center space-x-2 text-sm text-[#F5F3EF]/70">
              <li><Link href="/" className="hover:text-[#C6A75E] transition-colors">Home</Link></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li><Link href="/#menu" className="hover:text-[#C6A75E] transition-colors">Products</Link></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li className="text-[#C6A75E] font-medium" aria-current="page">{product.name}</li>
            </ol>
          </div>
        </nav>

        {/* Hero Product Section */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Image Gallery */}
            <div className="relative rounded-2xl overflow-hidden bg-[#1a1a1a] aspect-square border border-[#C6A75E]/20 shadow-2xl">
              <Image
                src={product.image}
                alt={`${product.name} - Fresh Homemade Gujarati Snacks Surat`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-6 left-6 bg-gradient-to-r from-[#C6A75E] to-[#D4AF37] text-[#0E0E0E] px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                {product.category}
              </div>
            </div>

            {/* Product Overview */}
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold text-[#F5F3EF] mb-4 leading-tight">
                  {product.name}
                </h1>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center bg-[#1a1a1a] px-3 py-1.5 rounded-full border border-[#C6A75E]/30">
                    <Star className="w-5 h-5 text-[#C6A75E] fill-current mr-1" />
                    <span className="font-bold text-[#F5F3EF]">{product.rating}</span>
                    <span className="text-[#F5F3EF]/50 ml-1">({product.reviewCount} reviews)</span>
                  </div>
                  <div className="text-sm text-[#25D366] font-medium flex items-center bg-[#25D366]/10 px-3 py-1.5 rounded-full">
                    <Truck className="w-4 h-4 mr-2" /> Local Delivery in Surat
                  </div>
                </div>
                
                <div className="text-3xl font-bold text-[#C6A75E] mb-6">
                  ₹{product.price} <span className="text-sm text-[#F5F3EF]/50 font-normal">/ pack</span>
                </div>
                
                <p className="text-lg text-[#F5F3EF]/90 leading-relaxed mb-8">
                  {product.shortDescription}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 py-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#25D366]/20"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>Order on WhatsApp</span>
                </a>
                
                <div className="grid grid-cols-2 gap-4 text-sm text-[#F5F3EF]/70">
                  <div className="flex items-center justify-center space-x-2 p-3 bg-[#1a1a1a] rounded-lg border border-[#C6A75E]/10">
                    <ChefHat className="w-4 h-4 text-[#C6A75E]" />
                    <span>100% Homemade</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 p-3 bg-[#1a1a1a] rounded-lg border border-[#C6A75E]/10">
                    <Shield className="w-4 h-4 text-[#C6A75E]" />
                    <span>Premium Quality</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Content Sections */}
        <div className="container mx-auto px-6 py-16 border-t border-[#C6A75E]/10">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold text-[#C6A75E] mb-6 flex items-center">
                  <span className="w-8 h-1 bg-[#C6A75E] mr-4"></span>
                  Product Description
                </h2>
                <div className="space-y-6 text-[#F5F3EF]/80 leading-relaxed text-lg">
                  <p><strong>Authentic Taste:</strong> {product.taste}</p>
                  <p><strong>Perfect Texture:</strong> {product.texture}</p>
                  <p><strong>Guaranteed Freshness:</strong> {product.freshness}</p>
                  <p><strong>Homemade Quality:</strong> {product.homemadeQuality}</p>
                  <p><strong>Occasions:</strong> {product.occasions}</p>
                  <p><strong>Travel Suitability:</strong> {product.travelSuitability}</p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-[#C6A75E] mb-6 flex items-center">
                  <span className="w-8 h-1 bg-[#C6A75E] mr-4"></span>
                  Serving & Storage
                </h2>
                <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#C6A75E]/20 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-[#F5F3EF] mb-2 flex items-center">
                      <ChefHat className="w-5 h-5 text-[#C6A75E] mr-2" /> Serving Suggestions
                    </h3>
                    <p className="text-[#F5F3EF]/70">{product.servingSuggestions}</p>
                  </div>
                  <div className="h-px bg-[#C6A75E]/20"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#F5F3EF] mb-2 flex items-center">
                      <Shield className="w-5 h-5 text-[#C6A75E] mr-2" /> Storage Instructions
                    </h3>
                    <p className="text-[#F5F3EF]/70">{product.storageInstructions}</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-[#C6A75E] mb-6 flex items-center">
                  <span className="w-8 h-1 bg-[#C6A75E] mr-4"></span>
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {product.faqs.map((faq, index) => (
                    <div key={index} className="bg-[#1a1a1a] p-6 rounded-xl border border-[#C6A75E]/10">
                      <h3 className="text-lg font-bold text-[#F5F3EF] mb-3">{faq.question}</h3>
                      <p className="text-[#F5F3EF]/70">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar / Reviews & Ingredients */}
            <div className="space-y-12">
              <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#C6A75E]/20 sticky top-24">
                <h3 className="text-2xl font-bold text-[#F5F3EF] mb-6">Ingredients</h3>
                <ul className="space-y-3">
                  {product.ingredients.map((item, idx) => (
                    <li key={idx} className="flex items-center text-[#F5F3EF]/80">
                      <div className="w-2 h-2 rounded-full bg-[#C6A75E] mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#F5F3EF] mb-6">Customer Reviews</h3>
                <div className="space-y-4">
                  {product.reviews.map((review) => (
                    <div key={review.id} className="bg-[#1a1a1a] p-6 rounded-xl border border-[#C6A75E]/10">
                      <div className="flex items-center justify-between mb-3">
                        <div className="font-semibold text-[#F5F3EF]">{review.name}</div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-[#C6A75E] fill-current' : 'text-gray-600'}`} />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-[#F5F3EF]/70 mb-2">"{review.comment}"</p>
                      <div className="text-xs text-[#C6A75E]">{review.date}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Internal Linking / Cross-sell */}
        <div className="bg-[#0a0a0a] py-16 border-t border-[#C6A75E]/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-[#F5F3EF] mb-8">You Might Also Like</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {product.relatedProducts.map((rel) => (
                <Link key={rel.slug} href={`/${rel.slug}`} className="group relative overflow-hidden bg-gradient-to-r from-[#C6A75E] to-[#D4AF37] px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105">
                  <span className="font-bold text-[#0E0E0E]">{rel.callToAction}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Footer />
        
        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#0E0E0E]/90 backdrop-blur-md border-t border-[#C6A75E]/20 lg:hidden z-50">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center space-x-2 py-3 bg-[#25D366] text-white font-bold rounded-xl shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Order Now</span>
          </a>
        </div>
      </div>
    </>
  );
}
