'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Truck, Shield, ChefHat, ChevronRight, MessageCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductData } from '@/data/products';

interface ProductDetailClientProps {
  product: ProductData;
  whatsappUrl: string;
}

export default function ProductDetailClient({ product, whatsappUrl }: ProductDetailClientProps) {
  const [isIngredientsExpanded, setIsIngredientsExpanded] = useState(true);
  const reviewsRef = useRef<HTMLDivElement>(null);

  // Automatically collapse Ingredients when user scrolls into the Reviews section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIngredientsExpanded(false);
        } else {
          // If the user scrolls back up (so reviews section goes below the viewport)
          if (entry.boundingClientRect.top > 0) {
            setIsIngredientsExpanded(true);
          }
        }
      },
      {
        rootMargin: '0px 0px -100px 0px', // trigger slightly before the section fully hits the viewport
        threshold: 0.05,
      }
    );

    if (reviewsRef.current) {
      observer.observe(reviewsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0E0E0E] to-[#1a1a1a] pt-24 pb-20 lg:pb-0">
      
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-[#0E0E0E] border-b border-[#C6A75E]/20 sticky top-[64px] z-40 backdrop-blur-md bg-opacity-90">
        <div className="container mx-auto px-6 py-4">
          <ol className="flex items-center space-x-2 text-sm text-[#F5F3EF]/70">
            <li><Link href="/" className="hover:text-[#C6A75E] transition-colors">Home</Link></li>
            <li><ChevronRight className="w-4 h-4" /></li>
            <li><Link href="/products" className="hover:text-[#C6A75E] transition-colors">Products</Link></li>
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
              quality={60}
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
                  <span className="text-[#F5F3EF]/75 ml-1">({product.reviewCount} reviews)</span>
                </div>
                <div className="text-sm text-[#25D366] font-medium flex items-center bg-[#25D366]/10 px-3 py-1.5 rounded-full">
                  <Truck className="w-4 h-4 mr-2" /> Local Delivery in Surat
                </div>
              </div>
              
              <div className="text-3xl font-bold text-[#C6A75E] mb-6">
                ₹{product.price} <span className="text-sm text-[#F5F3EF]/75 font-normal">/ {product.weight}</span>
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
                className="w-full flex items-center justify-center space-x-2 py-4 bg-[#075E54] hover:bg-[#128C7E] text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#075E54]/20"
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
            
            {/* Collapsible Ingredients Box */}
            <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#C6A75E]/20 sticky top-24 shadow-lg transition-all duration-300">
              <button 
                onClick={() => setIsIngredientsExpanded(!isIngredientsExpanded)}
                className="w-full flex justify-between items-center text-left focus:outline-none group"
                aria-expanded={isIngredientsExpanded}
              >
                <h3 className="text-2xl font-bold text-[#F5F3EF] group-hover:text-[#C6A75E] transition-colors flex items-center">
                  Ingredients
                  <span className="ml-2.5 text-xs text-[#C6A75E] font-normal border border-[#C6A75E]/40 px-2 py-0.5 rounded-full bg-[#C6A75E]/5 uppercase tracking-wider hidden lg:inline-block">
                    {isIngredientsExpanded ? 'Click to collapse' : 'Click to expand'}
                  </span>
                </h3>
                <ChevronDown className={`w-6 h-6 text-[#C6A75E] transition-transform duration-500 ease-in-out ${isIngredientsExpanded ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence initial={false}>
                {isIngredientsExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-3 mt-6 border-t border-[#C6A75E]/10 pt-4">
                      {product.ingredients.map((item, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-center text-[#F5F3EF]/80"
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <div className="w-2 h-2 rounded-full bg-[#C6A75E] mr-3 shrink-0"></div>
                          <span className="text-base">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Customer Reviews Section */}
            <div ref={reviewsRef} className="scroll-mt-32">
              <h3 className="text-2xl font-bold text-[#F5F3EF] mb-6">Customer Reviews</h3>
              <div className="space-y-4">
                {product.reviews.map((review) => (
                  <div key={review.id} className="bg-[#1a1a1a] p-6 rounded-xl border border-[#C6A75E]/10 shadow-md">
                    <div className="flex items-center justify-between mb-3">
                      <div className="font-semibold text-[#F5F3EF]">{review.name}</div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-[#C6A75E] fill-current' : 'text-gray-600'}`} />
                        ))}
                      </div>
                    </div>
                    <p className="text-base text-[#F5F3EF]/70 mb-2">"{review.comment}"</p>
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

    </div>
  );
}
