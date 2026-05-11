import { Metadata } from 'next';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Heart, Share2, Clock, Truck, Shield, ChefHat, IndianRupee, WhatsApp, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Homemade Farshi Puri - Traditional Indian Snack | Shilpa\'s Kitchen',
  description: '🍘 Order authentic Homemade Farshi Puri online from Shilpa\'s Kitchen, Surat. Crispy, fluffy puris stuffed with flavorful fillings. Made with traditional recipes. Free delivery above ₹500.',
  keywords: [
    'farshi puri', 'homemade farshi puri', 'traditional Indian snacks', 'stuffed puri',
    'Gujarati farshi puri', 'Indian street food', 'authentic puri', 'order farshi puri online',
    'Surat farshi puri', 'traditional Gujarati food', 'Indian snacks delivery'
  ],
  openGraph: {
    title: 'Homemade Farshi Puri - Traditional Indian Snack | Shilpa\'s Kitchen',
    description: '🍘 Order authentic Homemade Farshi Puri online from Shilpa\'s Kitchen, Surat. Crispy, fluffy puris stuffed with flavorful fillings. Made with traditional recipes.',
    url: 'https://shilpaskitchen.com/products/farshi-puri',
    images: [
      {
        url: '/images/farshi-puri.jpg',
        width: 1200,
        height: 630,
        alt: 'Homemade Farshi Puri from Shilpa\'s Kitchen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Homemade Farshi Puri - Traditional Indian Snack',
    description: '🍘 Order authentic Homemade Farshi Puri online from Shilpa\'s Kitchen, Surat. Crispy, fluffy puris stuffed with flavorful fillings.',
    images: ['/images/farshi-puri.jpg'],
  },
  alternates: {
    canonical: '/products/farshi-puri',
  },
};

// Structured Data
const productSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Homemade Farshi Puri",
  "image": "https://shilpaskitchen.com/images/farshi-puri.jpg",
  "description": "Crispy, fluffy puris stuffed with flavorful fillings. Made with traditional Gujarati recipes using fresh ingredients.",
  "brand": {
    "@type": "Brand",
    "name": "Shilpa's Kitchen"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://shilpaskitchen.com/products/farshi-puri",
    "priceCurrency": "INR",
    "price": "120",
    "priceValidUntil": "2026-12-31",
    "itemCondition": "https://schema.org/NewCondition",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Shilpa's Kitchen"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "156"
  },
  "nutrition": {
    "@type": "NutritionInformation",
    "calories": "180 kcal",
    "proteinContent": "4g",
    "carbohydrateContent": "25g",
    "fatContent": "7g"
  },
  "category": "Indian Snacks",
  "suitableForDiet": "Vegetarian"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Farshi Puri?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Farshi Puri is a traditional Gujarati snack consisting of crispy, fluffy puris stuffed with flavorful fillings like spicy lentils, vegetables, or sweet mixtures. It's a popular street food and festive snack in Gujarat."
      }
    },
    {
      "@type": "Question",
      "name": "How long does homemade Farshi Puri stay fresh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Homemade Farshi Puri stays fresh for 2-3 days at room temperature when stored in an airtight container. For longer storage, refrigerate for up to a week and reheat before serving."
      }
    },
    {
      "@type": "Question",
      "name": "Do you deliver Farshi Puri all over India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we deliver Farshi Puri all over India through our delivery partners. Standard delivery takes 3-5 business days. Express delivery is available for major cities."
      }
    },
    {
      "@type": "Question",
      "name": "Is Farshi Puri vegetarian?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our Farshi Puri is 100% vegetarian. We use only plant-based ingredients and traditional vegetarian recipes without any meat or egg products."
      }
    }
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Shilpa's Kitchen",
  "image": "https://shilpaskitchen.com/images/logo.png",
  "telephone": "+919876543210",
  "email": "hello@shilpaskitchen.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "40, Alkapuri Society, Sumul Dairy Road, Katargam",
    "addressLocality": "Surat",
    "addressRegion": "Gujarat",
    "postalCode": "395004",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "21.2186724",
    "longitude": "72.8374257"
  },
  "openingHours": "Mo-Fr 09:00-20:00 Sa-Su 10:00-18:00",
  "priceRange": "₹50-₹500",
  "servesCuisine": "Indian, Gujarati",
  "menu": "https://shilpaskitchen.com/menu"
};

const breadcrumbsSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://shilpaskitchen.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Products",
      "item": "https://shilpaskitchen.com/products"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Farshi Puri",
      "item": "https://shilpaskitchen.com/products/farshi-puri"
    }
  ]
};

export default function FarshiPuriPage() {
  return (
    <>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />

      {/* Breadcrumbs */}
      <nav className="bg-[#0E0E0E] border-b border-[#C6A75E]/20">
        <div className="container mx-auto px-6 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-[#C6A75E] hover:text-[#D4AF37] transition-colors">
                Home
              </Link>
            </li>
            <li className="text-[#F5F3EF]/50">/</li>
            <li>
              <Link href="/products" className="text-[#C6A75E] hover:text-[#D4AF37] transition-colors">
                Products
              </Link>
            </li>
            <li className="text-[#F5F3EF]/50">/</li>
            <li className="text-[#F5F3EF]">Farshi Puri</li>
          </ol>
        </div>
      </nav>

      <div className="min-h-screen bg-gradient-to-b from-[#0E0E0E] to-[#1a1a1a]">
        <div className="container mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative overflow-hidden rounded-2xl border border-[#C6A75E]/20">
                <Image
                  src="/images/farshi-puri.jpg"
                  alt="Homemade Farshi Puri"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Bestseller
                </div>
              </div>
              
              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="relative overflow-hidden rounded-lg border border-[#C6A75E]/20 cursor-pointer hover:border-[#C6A75E] transition-colors">
                    <Image
                      src={`/images/farshi-puri-${i}.jpg`}
                      alt={`Farshi Puri view ${i}`}
                      width={150}
                      height={150}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Product Details */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#F5F3EF] mb-4">
                  Homemade Farshi Puri
                </h1>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
                      />
                    ))}
                  </div>
                  <span className="text-[#F5F3EF]/80">4.8 (156 reviews)</span>
                </div>

                <p className="text-lg text-[#F5F3EF]/90 leading-relaxed mb-6">
                  Experience the authentic taste of Gujarat with our homemade Farshi Puri. These crispy, fluffy puris are stuffed with flavorful fillings and made using traditional recipes passed down through generations. Perfect for festivals, parties, or as a delightful evening snack.
                </p>

                <div className="flex items-baseline space-x-2 mb-8">
                  <IndianRupee className="w-6 h-6 text-[#C6A75E]" />
                  <span className="text-3xl font-bold text-[#C6A75E]">120</span>
                  <span className="text-[#F5F3EF]/80">per pack (250g)</span>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="py-3 bg-gradient-to-r from-[#C6A75E] to-[#D4AF37] text-[#0E0E0E] font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="py-3 border-2 border-[#C6A75E] text-[#C6A75E] font-semibold rounded-lg hover:bg-[#C6A75E] hover:text-[#0E0E0E] transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Heart className="w-5 h-5" />
                    <span>Save</span>
                  </motion.button>
                </div>

                {/* WhatsApp CTA */}
                <motion.a
                  href="https://wa.me/91937732558?text=Hi!%20I'm%20interested%20in%20Homemade%20Farshi%20Puri"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <WhatsApp className="w-6 h-6" />
                  <span>Order via WhatsApp</span>
                </motion.a>
              </div>

              {/* Product Features */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#C6A75E]/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#C6A75E]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#F5F3EF">Fresh Daily</h4>
                    <p className="text-sm text-[#F5F3EF]/70">Made to order</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#C6A75E]/20 rounded-lg flex items-center justify-center">
                    <Truck className="w-5 h-5 text-[#C6A75E]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#F5F3EF">Free Delivery</h4>
                    <p className="text-sm text-[#F5F3EF]/70">Above ₹500</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#C6A75E]/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#C6A75E]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#F5F3EF">100% Authentic</h4>
                    <p className="text-sm text-[#F5F3EF]/70">Traditional recipes</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#C6A75E]/20 rounded-lg flex items-center justify-center">
                    <ChefHat className="w-5 h-5 text-[#C6A75E]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#F5F3EF">Homemade</h4>
                    <p className="text-sm text-[#F5F3EF]/70">With love & care</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Product Description */}
          <motion.div 
            className="mt-16 grid lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#C6A75E]/20">
                <h2 className="text-2xl font-bold text-[#F5F3EF] mb-6">Product Description</h2>
                <div className="space-y-4 text-[#F5F3EF]/90 leading-relaxed">
                  <p>
                    Our Homemade Farshi Puri is a celebration of authentic Gujarati cuisine. Each puri is carefully crafted using the finest quality ingredients and traditional techniques that have been perfected over generations. The outer layer is perfectly crispy while remaining light and airy, creating the perfect vessel for our flavorful stuffings.
                  </p>
                  <p>
                    We offer a variety of stuffing options including spicy lentil mixtures, seasonal vegetables, and sweet combinations. Each batch is made fresh to order, ensuring you receive the highest quality product that captures the true essence of homemade Indian snacks.
                  </p>
                  <p>
                    Perfect for festivals like Diwali, family gatherings, or simply as a delightful evening snack with tea. Our Farshi Puri brings the authentic taste of Gujarat right to your doorstep.
                  </p>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#C6A75E]/20">
                <h2 className="text-2xl font-bold text-[#F5F3EF] mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-[#F5F3EF] mb-2">What is Farshi Puri?</h3>
                    <p className="text-[#F5F3EF]/80">
                      Farshi Puri is a traditional Gujarati snack consisting of crispy, fluffy puris stuffed with flavorful fillings like spicy lentils, vegetables, or sweet mixtures. It's a popular street food and festive snack in Gujarat.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#F5F3EF] mb-2">How long does homemade Farshi Puri stay fresh?</h3>
                    <p className="text-[#F5F3EF]/80">
                      Homemade Farshi Puri stays fresh for 2-3 days at room temperature when stored in an airtight container. For longer storage, refrigerate for up to a week and reheat before serving.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#F5F3EF] mb-2">Do you deliver Farshi Puri all over India?</h3>
                    <p className="text-[#F5F3EF]/80">
                      Yes, we deliver Farshi Puri all over India through our delivery partners. Standard delivery takes 3-5 business days. Express delivery is available for major cities.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#F5F3EF] mb-2">Is Farshi Puri vegetarian?</h3>
                    <p className="text-[#F5F3EF]/80">
                      Yes, our Farshi Puri is 100% vegetarian. We use only plant-based ingredients and traditional vegetarian recipes without any meat or egg products.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Info Sidebar */}
            <div className="space-y-6">
              <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#C6A75E]/20">
                <h3 className="text-xl font-bold text-[#F5F3EF] mb-4">Product Information</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-[#F5F3EF]/70">Weight</span>
                    <span className="text-[#F5F3EF] font-medium">250g</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#F5F3EF]/70">Shelf Life</span>
                    <span className="text-[#F5F3EF] font-medium">7 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#F5F3EF]/70">Storage</span>
                    <span className="text-[#F5F3EF] font-medium">Airtight container</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#F5F3EF]/70">Dietary</span>
                    <span className="text-[#F5F3EF] font-medium">Vegetarian</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#F5F3EF]/70">Origin</span>
                    <span className="text-[#F5F3EF] font-medium">Surat, Gujarat</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#C6A75E]/20">
                <h3 className="text-xl font-bold text-[#F5F3EF] mb-4">Contact Us</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center space-x-3 text-[#F5F3EF]/80 hover:text-[#C6A75E] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+91 98765 43210</span>
                  </a>
                  <a
                    href="mailto:hello@shilpaskitchen.com"
                    className="flex items-center space-x-3 text-[#F5F3EF]/80 hover:text-[#C6A75E] transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>hello@shilpaskitchen.com</span>
                  </a>
                  <a
                    href="https://wa.me/91937732558"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-[#F5F3EF]/80 hover:text-[#25D366] transition-colors"
                  >
                    <WhatsApp className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Reviews Section */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#C6A75E]/20">
              <h2 className="text-2xl font-bold text-[#F5F3EF] mb-6">Customer Reviews</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((review) => (
                  <div key={review} className="bg-[#0E0E0E] rounded-xl p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < 5 ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-[#F5F3EF]/70">5.0</span>
                    </div>
                    <p className="text-[#F5F3EF]/90 mb-3">
                      "Amazing taste and quality! The Farshi Puri was fresh and exactly like homemade. Will definitely order again."
                    </p>
                    <p className="text-sm text-[#F5F3EF]/70">- Customer {review}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
