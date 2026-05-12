import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Clock, Truck, Shield, ChefHat, Phone, Mail } from 'lucide-react';
import { buildWhatsAppUrl, WhatsAppIcon } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Homemade Butter Chakri in Surat | Crispy Chakli | Shilpa Kitchen',
  description:
    'Order fresh homemade Butter Chakri (Chakli) from Shilpa Kitchen, Surat. Crispy spiral snack made with rice flour and butter. Traditional Gujarati recipe. WhatsApp order.',
  keywords: [
    'Butter Chakri Surat',
    'homemade Chakri Surat',
    'Chakli Surat',
    'Gujarati Chakri',
    'order Chakri online Surat',
    'Shilpa Kitchen Chakri',
    'traditional Indian snacks Surat',
  ],
  openGraph: {
    title: 'Homemade Butter Chakri in Surat | Shilpa Kitchen',
    description:
      'Order fresh homemade Butter Chakri from Shilpa Kitchen, Surat. Crispy spiral snack with traditional recipe.',
    url: 'https://www.shilpaskitchen.in/products/butter-chakri',
    images: [
      {
        url: '/images/chakri.png',
        width: 1200,
        height: 630,
        alt: 'Homemade Butter Chakri in Surat - Shilpa Kitchen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Homemade Butter Chakri in Surat | Shilpa Kitchen',
    description: 'Order fresh homemade Butter Chakri from Shilpa Kitchen, Surat.',
    images: ['/images/chakri.png'],
  },
  alternates: {
    canonical: '/products/butter-chakri',
  },
};

const productSchema = {
  '@context': 'https://schema.org/',
  '@type': 'Product',
  name: 'Homemade Butter Chakri in Surat',
  image: 'https://www.shilpaskitchen.in/images/chakri.png',
  description:
    'Crispy homemade Butter Chakri (Chakli) made with rice flour, gram flour, and butter using a traditional Gujarati recipe. Made fresh daily in Surat.',
  brand: { '@type': 'Brand', name: 'Shilpa Kitchen' },
  offers: {
    '@type': 'Offer',
    url: 'https://www.shilpaskitchen.in/products/butter-chakri',
    priceCurrency: 'INR',
    price: '120',
    priceValidUntil: '2026-12-31',
    itemCondition: 'https://schema.org/NewCondition',
    availability: 'https://schema.org/InStock',
    seller: { '@type': 'Organization', name: 'Shilpa Kitchen' },
  },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '178' },
  category: 'Gujarati Snacks',
  suitableForDiet: 'https://schema.org/VegetarianDiet',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Butter Chakri?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Butter Chakri (also called Chakli) is a popular Indian snack made from rice flour and gram flour, pressed into spiral shapes and fried until crispy. The butter version has a richer flavor and melt-in-the-mouth texture.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does homemade Chakri stay fresh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Homemade Butter Chakri stays fresh for up to 15–20 days when stored in an airtight container at room temperature. Avoid moisture to maintain crispiness.',
      },
    },
    {
      '@type': 'Question',
      name: 'How to order Butter Chakri from Shilpa Kitchen in Surat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Message us on WhatsApp at +91 93773 25580 to place your order. We deliver fresh Butter Chakri within Surat and can ship to other Gujarat locations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Butter Chakri suitable for vegetarians?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, our Butter Chakri is 100% vegetarian. It contains no meat, eggs, or non-vegetarian ingredients.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.shilpaskitchen.in' },
    { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://www.shilpaskitchen.in/products' },
    { '@type': 'ListItem', position: 3, name: 'Butter Chakri', item: 'https://www.shilpaskitchen.in/products/butter-chakri' },
  ],
};

export default function ButterChakriPage() {
  const faqs = faqSchema.mainEntity;
  const waUrl = buildWhatsAppUrl('Butter Chakri');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-gradient-to-b from-[#0E0E0E] to-[#1a1a1a]">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="bg-[#0E0E0E] border-b border-[#C6A75E]/20">
          <div className="container mx-auto px-6 py-3">
            <ol className="flex items-center space-x-2 text-sm">
              <li><Link href="/" className="text-[#C6A75E] hover:text-[#D4AF37]">Home</Link></li>
              <li className="text-[#F5F3EF]/50" aria-hidden="true">/</li>
              <li><Link href="/#menu" className="text-[#C6A75E] hover:text-[#D4AF37]">Products</Link></li>
              <li className="text-[#F5F3EF]/50" aria-hidden="true">/</li>
              <li className="text-[#F5F3EF]" aria-current="page">Butter Chakri</li>
            </ol>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div>
              <div className="relative overflow-hidden rounded-2xl border border-[#C6A75E]/20 aspect-square">
                <Image
                  src="/images/chakri.png"
                  alt="Homemade Butter Chakri in Surat - Shilpa Kitchen"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-[#C6A75E] text-[#0E0E0E] px-3 py-1 rounded-full text-sm font-semibold">
                  Top Rated ⭐ 4.9
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#F5F3EF] mb-3 font-[family-name:var(--font-playfair)]">
                  Butter Chakri
                </h1>
                <p className="text-[#C6A75E] text-lg font-medium mb-4">
                  Crispy Chakli · Traditional Gujarati Snack · Surat
                </p>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex items-center space-x-1" aria-label="4.9 out of 5 stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#C6A75E] fill-current" />
                    ))}
                  </div>
                  <span className="text-[#F5F3EF]/70 text-sm">4.9 · 178 reviews</span>
                </div>
                <p className="text-lg text-[#F5F3EF]/80 leading-relaxed">
                  Our Butter Chakri is the ultimate tea-time snack. Made with fine rice flour, gram
                  flour, and real butter, each spiral is pressed and fried to golden perfection. Rich
                  in flavor, perfectly crispy, and absolutely addictive — this is Gujarati snacking at
                  its finest.
                </p>
              </div>

              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold text-[#C6A75E]">₹120</span>
                <span className="text-[#F5F3EF]/60">per pack (250g)</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Clock className="w-5 h-5 text-[#C6A75E]" />, label: 'Ready Stock', sub: 'Usually available' },
                  { icon: <Truck className="w-5 h-5 text-[#C6A75E]" />, label: 'Fast Delivery', sub: 'Within Surat' },
                  { icon: <Shield className="w-5 h-5 text-[#C6A75E]" />, label: '100% Authentic', sub: 'Traditional recipe' },
                  { icon: <ChefHat className="w-5 h-5 text-[#C6A75E]" />, label: 'Homemade', sub: 'With love & care' },
                ].map((f) => (
                  <div key={f.label} className="flex items-center space-x-3 bg-[#1a1a1a] rounded-xl p-3 border border-[#C6A75E]/10">
                    <div className="w-9 h-9 bg-[#C6A75E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      {f.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-[#F5F3EF] text-sm">{f.label}</p>
                      <p className="text-xs text-[#F5F3EF]/60">{f.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 w-full py-4 bg-[#25D366] hover:bg-[#20b957] text-white font-semibold rounded-xl transition-colors duration-200 text-lg"
                aria-label="Order Butter Chakri via WhatsApp"
              >
                <WhatsAppIcon />
                <span>Order via WhatsApp</span>
              </a>

              <div className="flex items-center space-x-4 text-sm text-[#F5F3EF]/60">
                <a href="tel:+919377325580" className="flex items-center space-x-1 hover:text-[#C6A75E]">
                  <Phone className="w-4 h-4" /><span>+91 93773 25580</span>
                </a>
                <a href="mailto:hello@shilpaskitchen.in" className="flex items-center space-x-1 hover:text-[#C6A75E]">
                  <Mail className="w-4 h-4" /><span>Email us</span>
                </a>
              </div>
            </div>
          </div>

          {/* Description + FAQ */}
          <div className="mt-16 grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <section aria-labelledby="desc-heading" className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#C6A75E]/20">
                <h2 id="desc-heading" className="text-2xl font-bold text-[#F5F3EF] mb-6">About Butter Chakri</h2>
                <div className="space-y-4 text-[#F5F3EF]/80 leading-relaxed">
                  <p>
                    Chakri, or Chakli, is one of the most loved festival snacks across Gujarat and
                    Maharashtra. Our Butter Chakri is made with a special blend of rice flour, gram
                    flour, real butter, and a perfectly balanced spice mix — giving it a distinct rich
                    flavor that sets it apart from regular chakri.
                  </p>
                  <p>
                    Every spiral is pressed through a chakri mold by hand and deep-fried until
                    perfectly golden. The result is a light, crispy snack that dissolves delightfully
                    with every bite. No artificial colors, no preservatives — just pure homemade
                    goodness from our Surat kitchen.
                  </p>
                </div>
              </section>

              <section aria-labelledby="faq-heading" className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#C6A75E]/20">
                <h2 id="faq-heading" className="text-2xl font-bold text-[#F5F3EF] mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {faqs.map((faq, i) => (
                    <div key={i}>
                      <h3 className="font-semibold text-[#C6A75E] mb-2 text-base">{faq.name}</h3>
                      <p className="text-[#F5F3EF]/80 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-6">
              <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#C6A75E]/20">
                <h3 className="text-lg font-bold text-[#F5F3EF] mb-4">Product Details</h3>
                <dl className="space-y-3 text-sm">
                  {[
                    ['Weight', '250g per pack'],
                    ['Shelf Life', 'Up to 20 days'],
                    ['Storage', 'Airtight container'],
                    ['Dietary', '100% Vegetarian'],
                    ['Origin', 'Surat, Gujarat'],
                    ['Made by', 'Shilpa Kitchen'],
                  ].map(([key, val]) => (
                    <div key={key} className="flex justify-between">
                      <dt className="text-[#F5F3EF]/60">{key}</dt>
                      <dd className="text-[#F5F3EF] font-medium">{val}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Sticky WhatsApp */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
        aria-label="Order via WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </>
  );
}
