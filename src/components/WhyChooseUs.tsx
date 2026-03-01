'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChefHat, Truck, Award, Clock, MapPin, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  stat: string;
  suffix: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: <ChefHat className="w-8 h-8" />,
    title: "Traditional Recipes",
    description: "Authentic recipes passed down through generations, preserving true Indian flavors",
    stat: "11",
    suffix: "+ Products"
  },
  {
    id: 2,
    icon: <Truck className="w-8 h-8" />,
    title: "Nationwide Delivery",
    description: "Reliable delivery service bringing authentic taste to your doorstep",
    stat: "24",
    suffix: " hrs"
  },
  {
    id: 3,
    icon: <Award className="w-8 h-8" />,
    title: "Quality Assured",
    description: "Premium quality ingredients and strict quality control in every product",
    stat: "100",
    suffix: "% Quality"
  },
  {
    id: 4,
    icon: <Clock className="w-8 h-8" />,
    title: "Freshly Made",
    description: "Products prepared fresh daily using traditional methods",
    stat: "100",
    suffix: "% Fresh"
  },
  {
    id: 5,
    icon: <MapPin className="w-8 h-8" />,
    title: "Based in Surat",
    description: "Rooted in Gujarat's culinary capital, serving customers nationwide",
    stat: "1",
    suffix: " City"
  },
  {
    id: 6,
    icon: <Heart className="w-8 h-8" />,
    title: "Homemade Love",
    description: "Every product crafted with the same love and care as homemade",
    stat: "5",
    suffix: "k+ Happy"
  }
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const [counters, setCounters] = useState<{ [key: number]: number }>({});

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

      // Features stagger animation
      const featureElements = featuresRef.current?.children;
      if (featureElements && featureElements.length > 0) {
        gsap.fromTo(Array.from(featureElements),
          { opacity: 0, y: 60, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.7)',
            stagger: 0.1,
            scrollTrigger: {
              trigger: featuresRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      // Counter animation
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 60%',
        end: 'bottom 40%',
        onEnter: () => {
          features.forEach((feature) => {
            const targetValue = parseInt(feature.stat);
            const duration = 2000; // 2 seconds
            const steps = 60;
            const increment = targetValue / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= targetValue) {
                current = targetValue;
                clearInterval(timer);
              }
              setCounters(prev => ({ ...prev, [feature.id]: Math.floor(current) }));
            }, duration / steps);
          });
        },
        onLeaveBack: () => {
          // Reset counters when scrolling back up
          setCounters({});
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-[#0E0E0E] overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16 section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F3EF] mb-4">
            Why Choose Shilpa's Kitchen
          </h2>
          <p className="text-xl text-[#C6A75E] mb-6 max-w-2xl mx-auto">
            We're committed to delivering authentic Indian snacks and sweets that bring the taste of home to every customer
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C6A75E] to-[#D4AF37] mx-auto"></div>
        </motion.div>

        <div ref={featuresRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="group bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-8 rounded-2xl border border-[#C6A75E]/20 hover:border-[#C6A75E]/50 transition-all duration-500 hover:shadow-2xl"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-[#C6A75E] to-[#D4AF37] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-[#0E0E0E]">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-[#F5F3EF] mb-3 group-hover:text-[#C6A75E] transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-[#F5F3EF]/70 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Counter */}
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-bold text-[#C6A75E]">
                  {counters[feature.id] || 0}
                </span>
                <span className="text-xl text-[#C6A75E]">
                  {feature.suffix}
                </span>
              </div>

              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#C6A75E]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[#C6A75E]/10 to-[#D4AF37]/10 p-8 rounded-2xl border border-[#C6A75E]/30">
            <h3 className="text-2xl font-bold text-[#F5F3EF] mb-4">
              Ready to Taste Authenticity?
            </h3>
            <p className="text-[#F5F3EF]/80 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have made Shilpa's Kitchen their favorite destination for traditional Indian snacks and sweets
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(198, 167, 94, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-[#C6A75E] to-[#D4AF37] text-[#0E0E0E] font-semibold rounded-full transition-all duration-300"
            >
              Shop Our Collection
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
