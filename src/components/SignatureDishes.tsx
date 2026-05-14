'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

interface Dish {
  id: number;
  name: string;
  description: string;
  price: string;
  prepTime: string;
  rating: number;
  image: string;
  category: string;
  slug?: string;
}

const signatureDishes: Dish[] = [
  {
    id: 1,
    name: "Butter Chakri",
    description: "Crispy spiral-shaped savory snack made from rice flour and gram flour, perfect for tea time",
    price: "₹120",
    prepTime: "Ready stock",
    rating: 4.9,
    image: "/images/chakri.png",
    category: "Snacks",
    slug: "butter-chakri"
  },
  {
    id: 2,
    name: "Limbu Gathiya",
    description: "Crunchy gram flour sticks with lemon and traditional Gujarati spices, a classic savory treat",
    price: "₹100",
    prepTime: "Ready stock",
    rating: 4.8,
    image: "/images/gathiya.png",
    category: "Snacks",
    slug: "limbu-gathiya"
  },
  {
    id: 3,
    name: "Papad Pauva",
    description: "Thin crispy wafers made from lentil flour, roasted or fried to perfection as an appetizer",
    price: "₹80",
    prepTime: "Ready stock",
    rating: 4.7,
    image: "/images/papadi.png",
    category: "Snacks",
    slug: "papad-pauva"
  },
  {
    id: 4,
    name: "Sev",
    description: "Fine vermicelli-like crunchy snack made from gram flour, perfect for garnishing or snacking",
    price: "₹90",
    prepTime: "Ready stock",
    rating: 4.8,
    image: "/images/sev.png",
    category: "Snacks",
    slug: "sev"
  },
  {
    id: 5,
    name: "Shakkar Para",
    description: "Sweet flaky pastry squares made with flour, ghee, and sugar, perfect festive sweet snack",
    price: "₹110",
    prepTime: "Ready stock",
    rating: 4.9,
    image: "/images/sakkar_para.png",
    category: "Sweets",
    slug: "shakkar-para"
  },
  {
    id: 6,
    name: "Farshi Puri",
    description: "Crispy homemade Farshi Puri from Surat with a touch of sweetness, ideal for breakfast or evening snacks",
    price: "₹95",
    prepTime: "Ready stock",
    rating: 4.6,
    image: "/images/farsi_puri.png",
    category: "Snacks",
    slug: "farshi-puri"
  },
  {
    id: 7,
    name: "Methi Para",
    description: "Savory flaky squares infused with fenugreek leaves, perfect blend of health and taste",
    price: "₹105",
    prepTime: "Ready stock",
    rating: 4.7,
    image: "/images/methi_para(1).png",
    category: "Snacks",
    slug: "methi-para"
  },
  {
    id: 8,
    name: "Thepla",
    description: "Soft Gujarati flatbread with methi leaves, perfect for travel and healthy meals",
    price: "₹150",
    prepTime: "Fresh daily",
    rating: 4.9,
    image: "/images/thepla.png",
    category: "Snacks",
    slug: "thepla"
  },
  {
    id: 9,
    name: "Makai Pauva",
    description: "Flattened rice with corn, seasoned with spices and lemon juice, light and nutritious",
    price: "₹85",
    prepTime: "Fresh daily",
    rating: 4.5,
    image: "/images/makai_pauva.png",
    category: "Snacks",
    slug: "makai-pauva"
  },
  {
    id: 10,
    name: "Khakhra - Masala",
    description: "Spiced thin flatbread with aromatic masala seasoning, crispy and flavorful Gujarati specialty",
    price: "₹95",
    prepTime: "Fresh daily",
    rating: 4.7,
    image: "/images/farsi_puri.png",
    category: "Snacks",
    slug: "khakhra-masala"
  },
  {
    id: 11,
    name: "Khakhra - Methi",
    description: "Healthy fenugreek-infused thin flatbread, nutritious and delicious traditional Gujarati snack",
    price: "₹105",
    prepTime: "Fresh daily",
    rating: 4.8,
    image: "/images/khakhra.png",
    category: "Snacks",
    slug: "khakhra-methi"
  },
  {
    id: 12,
    name: "Khakhra - Jeera",
    description: "Cumin-flavored crispy thin flatbread, aromatic and perfect with tea or as snack",
    price: "₹90",
    prepTime: "Fresh daily",
    rating: 4.6,
    image: "/images/khakhra.png",
    category: "Snacks",
    slug: "khakhra-jeera"
  },
  {
    id: 13,
    name: "Sev Mamra",
    description: "Light and crispy puffed rice mixed with sev and spices, perfect evening snack",
    price: "₹75",
    prepTime: "Ready stock",
    rating: 4.4,
    image: "/images/sev_mamra.png",
    category: "Snacks",
    slug: "sev-mamra"
  }
];

export default function SignatureDishes() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
        <motion.div
          className="text-center mb-16 section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#F5F3EF] mb-4">
            Traditional Indian Snacks & Sweets
          </h2>
          <p className="text-lg md:text-xl text-[#C6A75E] mb-6 max-w-2xl mx-auto px-4">
            Discover our authentic collection of homemade Indian delicacies, crafted with love and traditional recipes
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C6A75E] to-[#D4AF37] mx-auto"></div>
        </motion.div>

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {signatureDishes.map((dish) => {
            const productHref = dish.slug ? `/${dish.slug}` : '/#menu';
            return (
              <Link href={productHref} key={dish.id} passHref legacyBehavior>
                <motion.a
                  className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#C6A75E]/20 hover:border-[#C6A75E] transition-all duration-500 cursor-pointer block"
                  style={{
                    transform: hoveredCard === dish.id ? 'perspective(1000px) rotateY(5deg) rotateX(-5deg)' : 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={() => setHoveredCard(dish.id)}
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
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-[#F5F3EF] group-hover:text-[#C6A75E] transition-colors duration-300">
                        {dish.name}
                      </h3>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-[#C6A75E] fill-current" />
                        <span className="text-sm text-[#F5F3EF]">{dish.rating}</span>
                      </div>
                    </div>

                    <p className="text-[#F5F3EF]/70 text-sm mb-4 line-clamp-2">
                      {dish.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-[#C6A75E]">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{dish.prepTime}</span>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-[#C6A75E]">
                        {dish.price}
                      </div>
                    </div>

                    <div className="w-full py-2 bg-gradient-to-r from-[#C6A75E] to-[#D4AF37] text-[#0E0E0E] font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-center">
                      Explore Product
                    </div>
                  </div>

                  {/* Subtle glow effect */}
                  {hoveredCard === dish.id && (
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#C6A75E]/10 to-transparent rounded-2xl"></div>
                    </div>
                  )}
                </motion.a>
              </Link>
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
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(198, 167, 94, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 py-3 border-2 border-[#C6A75E] text-[#F5F3EF] font-semibold rounded-full hover:bg-[#C6A75E] hover:text-[#0E0E0E] transition-all duration-300"
          >
            View All Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
