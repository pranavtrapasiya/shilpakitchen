'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Award, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll triggered reveal animations
      gsap.fromTo(imageRef.current,
        { opacity: 0, x: -100, scale: 0.8 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo(textRef.current,
        { opacity: 0, x: 100, y: 50 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Stats animation
      const statItems = statsRef.current?.children;
      if (statItems && statItems.length > 0) {
        gsap.fromTo(Array.from(statItems),
          { opacity: 0, y: 50, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.7)',
            stagger: 0.2,
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      // Parallax effect on image
      gsap.to(imageRef.current, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-[#0E0E0E] overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F3EF] mb-4">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C6A75E] to-[#D4AF37] mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <div 
                className="w-full h-96 bg-cover bg-center"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/50 to-transparent"></div>
              </div>
              <div className="absolute inset-0 border-2 border-[#C6A75E]/30 rounded-2xl pointer-events-none"></div>
            </div>
            
            {/* Floating badge */}
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#C6A75E] to-[#D4AF37] text-[#0E0E0E] px-6 py-3 rounded-full font-semibold shadow-2xl"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              Since 2020
            </motion.div>
          </div>

          {/* Text Content */}
          <div ref={textRef} className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-[#F5F3EF] leading-tight">
              Crafting Culinary Excellence in the Heart of Surat
            </h3>
            
            <p className="text-lg text-[#F5F3EF]/80 leading-relaxed">
              At Shilpa's Kitchen, we bring you the authentic flavors of India with a modern twist. Our journey began with a simple mission: to preserve traditional recipes while presenting them in an elegant, contemporary setting.
            </p>
            
            <p className="text-lg text-[#F5F3EF]/80 leading-relaxed">
              Every dish tells a story of heritage, passion, and innovation. From our hand-ground spices to our carefully sourced ingredients, we ensure that each bite delivers an unforgettable experience.
            </p>

            <div className="pt-6">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(198, 167, 94, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-[#C6A75E] to-[#D4AF37] text-[#0E0E0E] font-semibold rounded-full transition-all duration-300"
              >
                Learn More About Us
              </motion.button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-[#C6A75E] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-8 h-8 text-[#0E0E0E]" />
            </div>
            <h4 className="text-3xl font-bold text-[#F5F3EF] mb-2">50+</h4>
            <p className="text-[#C6A75E]">Authentic Recipes</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-[#C6A75E] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-8 h-8 text-[#0E0E0E]" />
            </div>
            <h4 className="text-3xl font-bold text-[#F5F3EF] mb-2">15+</h4>
            <p className="text-[#C6A75E]">Years of Excellence</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-[#C6A75E] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-[#0E0E0E]" />
            </div>
            <h4 className="text-3xl font-bold text-[#F5F3EF] mb-2">10,000+</h4>
            <p className="text-[#C6A75E]">Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
