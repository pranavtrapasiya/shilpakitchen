'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Clock, DollarSign } from 'lucide-react';

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
}

const signatureDishes: Dish[] = [
  {
    id: 1,
    name: "Royal Thali",
    description: "A grand platter featuring our finest delicacies, including dal makhani, paneer tikka, naan, and aromatic biryani",
    price: "₹599",
    prepTime: "30 min",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Main Course"
  },
  {
    id: 2,
    name: "Paneer Butter Masala",
    description: "Cubes of cottage cheese cooked in a rich, creamy tomato-based gravy with authentic Indian spices",
    price: "₹349",
    prepTime: "25 min",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1565557623262-b51a2513a63a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Main Course"
  },
  {
    id: 3,
    name: "Masala Dosa",
    description: "Crispy rice crepe filled with spiced potato mixture, served with sambar and coconut chutney",
    price: "₹199",
    prepTime: "20 min",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1589301765548-009a7411e6c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Breakfast"
  },
  {
    id: 4,
    name: "Chicken Biryani",
    description: "Fragrant basmati rice layered with tender chicken pieces and aromatic spices, cooked in dum style",
    price: "₹449",
    prepTime: "35 min",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1563379091339-03246996d6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Main Course"
  },
  {
    id: 5,
    name: "Gulab Jamun",
    description: "Soft milk solids dumplings soaked in fragrant sugar syrup, served warm with a hint of cardamom",
    price: "₹149",
    prepTime: "15 min",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1619894862521-cbdec7a4db05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Dessert"
  },
  {
    id: 6,
    name: "Samosa Chaat",
    description: "Crispy samoras topped with yogurt, tamarind chutney, onions, and fresh herbs",
    price: "₹179",
    prepTime: "15 min",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1601050695596-bf3f27c38b55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Starter"
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-[#0E0E0E] to-[#1a1a1a] overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16 section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F3EF] mb-4">
            Signature Dishes
          </h2>
          <p className="text-xl text-[#C6A75E] mb-6 max-w-2xl mx-auto">
            Discover our chef's special creations, where tradition meets innovation
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C6A75E] to-[#D4AF37] mx-auto"></div>
        </motion.div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatureDishes.map((dish) => (
            <motion.div
              key={dish.id}
              className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#C6A75E]/20 hover:border-[#C6A75E] transition-all duration-500 cursor-pointer"
              style={{
                transform: hoveredCard === dish.id ? 'perspective(1000px) rotateY(5deg) rotateX(-5deg)' : 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
                transformStyle: 'preserve-3d',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={() => setHoveredCard(dish.id)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ y: -10 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${dish.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-60"></div>
                </div>
                
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

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-2 bg-gradient-to-r from-[#C6A75E] to-[#D4AF37] text-[#0E0E0E] font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Order Now
                </motion.button>
              </div>

              {/* Subtle glow effect */}
              {hoveredCard === dish.id && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#C6A75E]/10 to-transparent rounded-2xl"></div>
                </div>
              )}
            </motion.div>
          ))}
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
            className="px-8 py-3 border-2 border-[#C6A75E] text-[#F5F3EF] font-semibold rounded-full hover:bg-[#C6A75E] hover:text-[#0E0E0E] transition-all duration-300"
          >
            View Full Menu
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
