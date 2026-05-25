'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Clock, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { productsData } from '@/data/products';

gsap.registerPlugin(ScrollTrigger);

const MotionLink = motion(Link);

// Convert productsData Record to an array for easier mapping
const dishesList = Object.values(productsData);

export default function SignatureDishes({ 
  featuredOnly = false,
  showTitle = true 
}: { 
  featuredOnly?: boolean;
  showTitle?: boolean;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<'All' | 'Best Sellers' | 'Dry Snacks' | 'Sweets'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
      gsap.fromTo('.section-title',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Cards stagger animation
      const cards = cardsRef.current?.children;
      if (cards && cards.length > 0) {
        gsap.fromTo(Array.from(cards),
          { opacity: 0, y: 80, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.7)',
            stagger: 0.15,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 md:py-20 bg-gradient-to-b from-[#0E0E0E] to-[#1a1a1a] overflow-hidden" id="menu">
      <div className="container mx-auto px-6">
        {showTitle && (
          <motion.div
            className="text-center mb-12 md:mb-16 section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#F5F3EF] mb-4 px-2">
              Traditional Indian Snacks & Sweets
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#C6A75E] mb-6 max-w-2xl mx-auto px-6">
              Discover our authentic collection of homemade Indian delicacies, crafted with love and traditional recipes
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C6A75E] to-[#D4AF37] mx-auto"></div>
          </motion.div>
        )}

        {!featuredOnly && (
          <div className="space-y-8 mb-12">
            {/* Search Input */}
            <div className="max-w-md mx-auto relative">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search authentic snacks & sweets..."
                  className="w-full pl-12 pr-4 py-3 bg-[#1a1a1a] border border-[#C6A75E]/30 rounded-full text-[#F5F3EF] placeholder-[#F5F3EF]/50 focus:outline-none focus:border-[#C6A75E] focus:ring-2 focus:ring-[#C6A75E]/20 transition-all duration-300 shadow-xl text-base"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#C6A75E]">
                  <Search className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Category Selector Pills */}
            <div className="flex flex-wrap justify-center gap-3">
              {['All', 'Best Sellers', 'Dry Snacks', 'Sweets'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat as any)}
                  className={`px-6 py-2.5 rounded-full border text-sm font-semibold transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-[#C6A75E] border-[#C6A75E] text-[#0E0E0E] shadow-[0_0_15px_rgba(198,167,94,0.4)]'
                      : 'bg-transparent border-[#C6A75E]/30 text-[#F5F3EF]/70 hover:border-[#C6A75E] hover:text-[#C6A75E]'
                  }`}
                >
                  {cat === 'All' ? 'All Delicacies' : cat}
                </button>
              ))}
            </div>
          </div>
        )}

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {dishesList
            .filter(dish => {
              if (featuredOnly) {
                const featuredSlugs = ["butter-chakri", "thepla", "methi-para"];
                return featuredSlugs.includes(dish.slug);
              }
              if (activeCategory !== 'All') {
                if (activeCategory === 'Best Sellers') {
                  const featuredSlugs = ["butter-chakri", "thepla", "methi-para"];
                  if (!featuredSlugs.includes(dish.slug)) return false;
                } else if (activeCategory === 'Dry Snacks') {
                  if (!dish.category.includes('Snacks')) return false;
                } else if (activeCategory === 'Sweets') {
                  if (!dish.category.includes('Sweets')) return false;
                }
              }
              if (searchQuery.trim() !== '') {
                const query = searchQuery.toLowerCase();
                return dish.name.toLowerCase().includes(query) || 
                       dish.category.toLowerCase().includes(query) ||
                       dish.shortDescription.toLowerCase().includes(query);
              }
              return true;
            })
            .map((dish) => {
            const productHref = `/${dish.slug}`;
            return (
              <MotionLink 
                href={productHref} 
                key={dish.slug}
                className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#C6A75E]/20 hover:border-[#C6A75E] transition-all duration-500 cursor-pointer flex flex-col h-full"
                style={{
                  transform: hoveredCard === dish.slug ? 'perspective(1000px) rotateY(5deg) rotateX(-5deg)' : 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={() => setHoveredCard(dish.slug)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -10 }}
                title={`Explore our Homemade ${dish.name}`}
              >
                {/* Product Image */}
                <div className="h-56 md:h-64 overflow-hidden relative group">
                  <Image
                    src={dish.image}
                    alt={`Homemade ${dish.name} - Gujarati snack from Shilpa Kitchen Surat`}
                    width={400}
                    height={256}
                    quality={60}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-60"></div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 bg-[#C6A75E] text-[#0E0E0E] px-3 py-1 rounded-full text-sm font-semibold">
                    {dish.category}
                  </div>

                  {/* Gold glow border on hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#C6A75E] transition-all duration-500 pointer-events-none"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-[#F5F3EF] group-hover:text-[#C6A75E] transition-colors duration-300">
                      {dish.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-[#C6A75E] fill-current" />
                      <span className="text-sm text-[#F5F3EF]">{dish.rating}</span>
                    </div>
                  </div>

                  <p className="text-[#F5F3EF]/70 text-base mb-4 line-clamp-2">
                    {dish.shortDescription}
                  </p>

                  <div className="mt-auto space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-[#C6A75E]">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{dish.slug === 'thepla' || dish.slug.includes('khakhra') || dish.slug === 'makai-pauva' ? 'Fresh daily' : 'Ready stock'}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-[#C6A75E]">
                          ₹{dish.price}
                        </div>
                        <div className="text-[10px] text-[#F5F3EF]/50 uppercase tracking-wider">
                          per {dish.weight}
                        </div>
                      </div>
                    </div>

                    <div className="w-full py-2 bg-gradient-to-r from-[#C6A75E] to-[#D4AF37] text-[#0E0E0E] font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-center">
                      Explore Product
                    </div>
                  </div>
                </div>

                {/* Subtle glow effect */}
                {hoveredCard === dish.slug && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#C6A75E]/10 to-transparent rounded-2xl"></div>
                  </div>
                )}
              </MotionLink>
            );
          })}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <MotionLink
            href={featuredOnly ? "/products" : "/"}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(198, 167, 94, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto inline-block px-10 py-4 border-2 border-[#C6A75E] text-[#F5F3EF] font-bold rounded-full hover:bg-[#C6A75E] hover:text-[#0E0E0E] transition-all duration-300 uppercase tracking-wider text-center"
          >
            {featuredOnly ? "View All Products" : "Back to Home"}
          </MotionLink>
        </motion.div>
      </div>
    </section>
  );
}
