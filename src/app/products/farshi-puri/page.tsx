import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Clock, Truck, Shield, ChefHat, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Homemade Farshi Puri in Surat | Traditional Gujarati Snack',
  description:
    'Order authentic homemade Farshi Puri from Shilpa Kitchen, Surat. Crispy, traditional Gujarati puri made with fresh ingredients. WhatsApp order available.',
  keywords: [
    'Farshi Puri Surat',
    'homemade Farshi Puri',
    'Gujarati Farshi Puri',
    'traditional Indian snacks Surat',
    'order Farshi Puri online Surat',
    'Shilpa Kitchen Farshi Puri',
  ],
  openGraph: {
    title: 'Homemade Farshi Puri in Surat | Shilpa Kitchen',
    description:
      'Order authentic homemade Farshi Puri from Shilpa Kitchen, Surat. Traditional Gujarati recipe made with fresh ingredients.',
    url: 'https://www.shilpaskitchen.in/products/farshi-puri',
    images: [
      {
        url: '/images/farsi_puri.png',
        width: 1200,
        height: 630,
        alt: 'Homemade Farshi Puri in Surat - Shilpa Kitchen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Homemade Farshi Puri in Surat | Shilpa Kitchen',
    description: 'Order authentic homemade Farshi Puri from Shilpa Kitchen, Surat.',
    images: ['/images/farsi_puri.png'],
  },
  alternates: {
    canonical: '/products/farshi-puri',
  },
};

// Structured Data
const productSchema = {
  '@context': 'https://schema.org/',
  '@type': 'Product',
  name: 'Homemade Farshi Puri in Surat',
  image: 'https://www.shilpaskitchen.in/images/farsi_puri.png',
  description:
    'Crispy homemade Farshi Puri made with traditional Gujarati recipes and fresh ingredients. Available for WhatsApp order delivery in Surat.',
  brand: {
    '@type': 'Brand',
    name: "Shilpa Kitchen",
  },
  offers: {
    '@type': 'Offer',
    url: 'https://www.shilpaskitchen.in/products/farshi-puri',
    priceCurrency: 'INR',
    price: '95',
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
    ratingValue: '4.8',
    reviewCount: '156',
  },
  category: 'Gujarati Snacks',
  suitableForDiet: 'https://schema.org/VegetarianDiet',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Farshi Puri?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Farshi Puri is a traditional Gujarati crispy snack made from wheat flour, fried to golden perfection. It's a popular festive and everyday snack in Gujarat.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does homemade Farshi Puri stay fresh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Homemade Farshi Puri stays fresh for up to 15 days at room temperature when stored in an airtight container in a cool, dry place.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I order Farshi Puri from Shilpa Kitchen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can order Farshi Puri directly via WhatsApp at +91 93777 32558. We deliver within Surat and also ship to other locations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Farshi Puri vegetarian?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, our Farshi Puri is 100% vegetarian. We use only plant-based ingredients and traditional Gujarati recipes without any meat or egg products.",
      },
    },
  ],
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
      item: 'https://www.shilpaskitchen.in/products',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Farshi Puri',
      item: 'https://www.shilpaskitchen.in/products/farshi-puri',
    },
  ],
};

export default function FarshiPuriPage() {
  const faqs = faqSchema.mainEntity;

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-[#0E0E0E] to-[#1a1a1a]">
        {/* Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="bg-[#0E0E0E] border-b border-[#C6A75E]/20"
        >
          <div className="container mx-auto px-6 py-3">
            <ol
              className="flex items-center space-x-2 text-sm"
              itemScope
              itemType="https://schema.org/BreadcrumbList"
            >
              <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                <Link
                  href="/"
                  className="text-[#C6A75E] hover:text-[#D4AF37]"
                  itemProp="item"
                >
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li className="text-[#F5F3EF]/50" aria-hidden="true">/</li>
              <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                <Link
                  href="/#menu"
                  className="text-[#C6A75E] hover:text-[#D4AF37]"
                  itemProp="item"
                >
                  <span itemProp="name">Products</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li className="text-[#F5F3EF]/50" aria-hidden="true">/</li>
              <li className="text-[#F5F3EF]" aria-current="page">
                Farshi Puri
              </li>
            </ol>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-12">
          {/* Product Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-2xl border border-[#C6A75E]/20 aspect-square">
                <Image
                  src="/images/farsi_puri.png"
                  alt="Homemade Farshi Puri in Surat - Shilpa Kitchen"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-[#C6A75E] text-[#0E0E0E] px-3 py-1 rounded-full text-sm font-semibold">
                  Bestseller
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#F5F3EF] mb-3 font-[family-name:var(--font-playfair)]">
                  Homemade Farshi Puri
                </h1>
                <p className="text-[#C6A75E] text-lg font-medium mb-4">
                  Traditional Gujarati Snack · Surat
                </p>

                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex items-center space-x-1" aria-label="4.8 out of 5 stars">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < 5 ? 'text-[#C6A75E] fill-current' : 'text-gray-500'}`}
                      />
                    ))}
                  </div>
                  <span className="text-[#F5F3EF]/70 text-sm">4.8 · 156 reviews</span>
                </div>

                <p className="text-lg text-[#F5F3EF]/80 leading-relaxed">
                  Experience the authentic taste of Gujarat with our homemade Farshi Puri. Crispy,
                  golden, and made with fresh ingredients using traditional recipes passed down
                  through generations. Perfect for festivals, tea-time, or as a daily snack.
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold text-[#C6A75E]">₹95</span>
                <span className="text-[#F5F3EF]/60">per pack (250g)</span>
              </div>

              {/* Feature badges */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Clock className="w-5 h-5 text-[#C6A75E]" />, label: 'Fresh Daily', sub: 'Made to order' },
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

              {/* WhatsApp Order CTA — primary action */}
              <a
                href="https://wa.me/919377732558?text=Hi!%20I%27d%20like%20to%20order%20Farshi%20Puri%20from%20Shilpa%20Kitchen."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 w-full py-4 bg-[#25D366] hover:bg-[#20b957] text-white font-semibold rounded-xl transition-colors duration-200 text-lg"
                aria-label="Order Farshi Puri via WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                <span>Order via WhatsApp</span>
              </a>

              {/* Secondary contact */}
              <div className="flex items-center space-x-4 text-sm text-[#F5F3EF]/60">
                <a href="tel:+919377732558" className="flex items-center space-x-1 hover:text-[#C6A75E]">
                  <Phone className="w-4 h-4" />
                  <span>+91 93777 32558</span>
                </a>
                <a href="mailto:hello@shilpaskitchen.in" className="flex items-center space-x-1 hover:text-[#C6A75E]">
                  <Mail className="w-4 h-4" />
                  <span>Email us</span>
                </a>
              </div>
            </div>
          </div>

          {/* Description + FAQ Grid */}
          <div className="mt-16 grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Product Description */}
              <section
                aria-labelledby="product-description-heading"
                className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#C6A75E]/20"
              >
                <h2
                  id="product-description-heading"
                  className="text-2xl font-bold text-[#F5F3EF] mb-6"
                >
                  About Farshi Puri
                </h2>
                <div className="space-y-4 text-[#F5F3EF]/80 leading-relaxed">
                  <p>
                    Our Homemade Farshi Puri is a celebration of authentic Gujarati cuisine. Each
                    puri is carefully crafted using the finest quality ingredients and traditional
                    techniques perfected over generations in Surat, Gujarat.
                  </p>
                  <p>
                    The outer layer is perfectly crispy while remaining light and airy. Made fresh to
                    order — every batch captures the true essence of homemade Indian snacks. Ideal for
                    festivals like Diwali, family gatherings, or simply as a delightful evening snack
                    with tea.
                  </p>
                </div>
              </section>

              {/* FAQ */}
              <section
                aria-labelledby="faq-heading"
                className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#C6A75E]/20"
              >
                <h2
                  id="faq-heading"
                  className="text-2xl font-bold text-[#F5F3EF] mb-6"
                >
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {faqs.map((faq, i) => (
                    <div key={i}>
                      <h3 className="font-semibold text-[#C6A75E] mb-2 text-base">
                        {faq.name}
                      </h3>
                      <p className="text-[#F5F3EF]/80 text-sm leading-relaxed">
                        {faq.acceptedAnswer.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Product Info */}
              <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#C6A75E]/20">
                <h3 className="text-lg font-bold text-[#F5F3EF] mb-4">
                  Product Details
                </h3>
                <dl className="space-y-3 text-sm">
                  {[
                    ['Weight', '250g per pack'],
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

              {/* Reviews summary */}
              <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#C6A75E]/20">
                <h3 className="text-lg font-bold text-[#F5F3EF] mb-4">Customer Reviews</h3>
                <div className="text-center mb-4">
                  <p className="text-4xl font-bold text-[#C6A75E]">4.8</p>
                  <div className="flex justify-center space-x-1 my-2" aria-label="4.8 stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#C6A75E] fill-current" />
                    ))}
                  </div>
                  <p className="text-[#F5F3EF]/60 text-sm">Based on 156 reviews</p>
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'Priya M.', text: 'Amazing taste! Exactly like homemade. Will order again.' },
                    { name: 'Rahul S.', text: 'Perfect crunch, great quality. Highly recommend!' },
                  ].map((r) => (
                    <div key={r.name} className="bg-[#0E0E0E] rounded-xl p-4">
                      <div className="flex items-center space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-[#C6A75E] fill-current" />
                        ))}
                      </div>
                      <p className="text-[#F5F3EF]/80 text-xs leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                      <p className="text-[#C6A75E] text-xs mt-1 font-medium">— {r.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Sticky WhatsApp button */}
      <a
        href="https://wa.me/919377732558?text=Hi!%20I%27d%20like%20to%20order%20Farshi%20Puri."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
        aria-label="Order via WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-7 h-7"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      </a>
    </>
  );
}
