import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Clock, Truck, Shield, ChefHat, Phone, Mail } from 'lucide-react';
import { buildWhatsAppUrl, WhatsAppIcon } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Homemade Papad Pauva in Surat | Gujarati Snack | Shilpa Kitchen',
  description:
    'Order fresh homemade Papad Pauva from Shilpa Kitchen, Surat. Crispy thin papad with flattened rice — a classic Gujarati snack. Traditional recipe. WhatsApp order.',
  keywords: [
    'Papad Pauva Surat',
    'homemade Papad Pauva',
    'Gujarati Papad Surat',
    'order Papad online Surat',
    'Shilpa Kitchen Papad Pauva',
    'traditional Indian snacks Surat',
    'papadi namkeen Surat',
  ],
  openGraph: {
    title: 'Homemade Papad Pauva in Surat | Shilpa Kitchen',
    description:
      'Order fresh homemade Papad Pauva from Shilpa Kitchen, Surat. Classic Gujarati crispy snack.',
    url: 'https://www.shilpaskitchen.in/products/papad-pauva',
    images: [
      {
        url: '/images/papadi.png',
        width: 1200,
        height: 630,
        alt: 'Homemade Papad Pauva in Surat - Shilpa Kitchen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Homemade Papad Pauva in Surat | Shilpa Kitchen',
    description: 'Order fresh homemade Papad Pauva from Shilpa Kitchen, Surat.',
    images: ['/images/papadi.png'],
  },
  alternates: {
    canonical: '/products/papad-pauva',
  },
};

const productSchema = {
  '@context': 'https://schema.org/',
  '@type': 'Product',
  name: 'Homemade Papad Pauva in Surat',
  image: 'https://www.shilpaskitchen.in/images/papadi.png',
  description:
    'Crispy homemade Papad Pauva made with lentil flour and flattened rice using traditional Gujarati recipes. Fresh and delicious, made in Surat.',
  brand: { '@type': 'Brand', name: 'Shilpa Kitchen' },
  offers: {
    '@type': 'Offer',
    url: 'https://www.shilpaskitchen.in/products/papad-pauva',
    priceCurrency: 'INR',
    price: '80',
    priceValidUntil: '2026-12-31',
    itemCondition: 'https://schema.org/NewCondition',
    availability: 'https://schema.org/InStock',
    seller: { '@type': 'Organization', name: 'Shilpa Kitchen' },
  },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.7', reviewCount: '98' },
  category: 'Gujarati Snacks',
  suitableForDiet: 'https://schema.org/VegetarianDiet',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Papad Pauva?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Papad Pauva is a traditional Gujarati snack combining crispy papad (thin lentil wafers) with seasoned flattened rice (pauva). It's a light, crunchy, and flavorful snack enjoyed as an appetizer or with tea.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does Papad Pauva stay fresh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Homemade Papad Pauva stays fresh for 10–15 days when stored in an airtight container at room temperature away from moisture and direct sunlight.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I order Papad Pauva from Shilpa Kitchen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can order Papad Pauva directly via WhatsApp at +91 93773 25580. We deliver within Surat and ship to other Gujarat cities.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Papad Pauva vegetarian and gluten-free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, our Papad Pauva is 100% vegetarian. It is made from lentil flour and rice — please check with us if you need specific allergen information.',
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
    { '@type': 'ListItem', position: 3, name: 'Papad Pauva', item: 'https://www.shilpaskitchen.in/products/papad-pauva' },
  ],
};

export default function PapadPauvaPage() {
  const faqs = faqSchema.mainEntity;
  const waUrl = buildWhatsAppUrl('Papad Pauva');

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
              <li className="text-[#F5F3EF]" aria-current="page">Papad Pauva</li>
            </ol>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div>
              <div className="relative overflow-hidden rounded-2xl border border-[#C6A75E]/20 aspect-square">
                <Image
                  src="/images/papadi.png"
                  alt="Homemade Papad Pauva in Surat - Shilpa Kitchen"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-[#C6A75E] text-[#0E0E0E] px-3 py-1 rounded-full text-sm font-semibold">
                  Light &amp; Crispy
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#F5F3EF] mb-3 font-[family-name:var(--font-playfair)]">
                  Papad Pauva
                </h1>
                <p className="text-[#C6A75E] text-lg font-medium mb-4">
                  Crispy Papad · Traditional Gujarati Snack · Surat
                </p>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex items-center space-x-1" aria-label="4.7 out of 5 stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < 4 ? 'text-[#C6A75E] fill-current' : 'text-gray-500 fill-current'}`} />
                    ))}
                  </div>
                  <span className="text-[#F5F3EF]/70 text-sm">4.7 · 98 reviews</span>
                </div>
                <p className="text-lg text-[#F5F3EF]/80 leading-relaxed">
                  Papad Pauva is a beloved Gujarati classic — thin, crispy lentil wafers paired with
                  spiced flattened rice. Light on the stomach, bold on flavor. Perfect as an appetizer,
                  tea-time snack, or a quick satisfying munch any time of day.
                </p>
              </div>

              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold text-[#C6A75E]">₹80</span>
                <span className="text-[#F5F3EF]/60">per pack (200g)</span>
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
                aria-label="Order Papad Pauva via WhatsApp"
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
                <h2 id="desc-heading" className="text-2xl font-bold text-[#F5F3EF] mb-6">About Papad Pauva</h2>
                <div className="space-y-4 text-[#F5F3EF]/80 leading-relaxed">
                  <p>
                    Papad Pauva is one of Gujarat&apos;s most nostalgic snacks. Our version is made from
                    hand-prepared thin lentil papads paired with crispy flattened rice seasoned with
                    roasted cumin, lemon, and a gentle touch of spice.
                  </p>
                  <p>
                    Made fresh in our Surat kitchen without any artificial preservatives or additives —
                    every pack contains the same love and care that has made Shilpa Kitchen a household
                    name in Surat. Ideal for festivals, gifting, or everyday snacking.
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
                    ['Weight', '200g per pack'],
                    ['Shelf Life', 'Up to 15 days'],
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
