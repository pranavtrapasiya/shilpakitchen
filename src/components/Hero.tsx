'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Letter by letter animation for title
      const titleChars = titleRef.current?.innerText.split('');
      if (titleRef.current) {
        titleRef.current.innerHTML = '';
        titleChars?.forEach((char, index) => {
          const span = document.createElement('span');
          span.textContent = char === ' ' ? '\u00A0' : char;
          span.style.display = 'inline-block';
          span.style.opacity = '0';
          span.style.transform = 'translateY(100px) rotateX(90deg)';
          titleRef.current?.appendChild(span);
          
          gsap.to(span, {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1.2,
            ease: 'power4.out',
            delay: index * 0.05,
          });
        });
      }

      // Subtitle fade in
      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 1.5 }
      );

      // CTA buttons animation
      const ctaChildren = ctaRef.current?.children;
      if (ctaChildren && ctaChildren.length > 0) {
        gsap.fromTo(Array.from(ctaChildren),
          { opacity: 0, scale: 0.8, y: 30 },
          { 
            opacity: 1, 
            scale: 1, 
            y: 0, 
            duration: 0.8, 
            ease: 'back.out(1.7)', 
            delay: 2,
            stagger: 0.2
          }
        );
      }

      // Floating particles animation
      const particles = particlesRef.current?.children;
      if (particles && particles.length > 0) {
        gsap.fromTo(Array.from(particles),
          { opacity: 0, scale: 0 },
          { 
            opacity: 0.6, 
            scale: 1, 
            duration: 2, 
            ease: 'power2.out',
            delay: 2.5,
            stagger: 0.1
          }
        );

        Array.from(particles).forEach((particle, index) => {
          gsap.to(particle, {
            y: 'random(-100, 100)',
            x: 'random(-50, 50)',
            duration: 'random(3, 6)',
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            delay: index * 0.2
          });
        });
      }

      // Scroll indicator animation
      gsap.to('.scroll-indicator', {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0E0E0E] via-[#0E0E0E]/90 to-[#0E0E0E]"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
          }}
        ></div>
      </div>

      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#C6A75E] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-center space-x-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-[#C6A75E] fill-current" />
            ))}
          </div>
        </div>

        <h1 
          ref={titleRef} 
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#F5F3EF] mb-6 leading-tight"
        >
          Authentic Taste.
          <br />
          Elevated Elegance.
        </h1>

        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-[#C6A75E] mb-12 max-w-3xl mx-auto font-light"
        >
          Experience the finest Indian cuisine in Surat, where traditional recipes meet modern sophistication
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(198, 167, 94, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#C6A75E] to-[#D4AF37] text-[#0E0E0E] font-semibold rounded-full hover:shadow-2xl transition-all duration-300"
          >
            Order Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, borderColor: '#D4AF37', color: '#D4AF37' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-[#C6A75E] text-[#F5F3EF] font-semibold rounded-full hover:bg-[#C6A75E] hover:bg-opacity-10 transition-all duration-300"
          >
            Explore Menu
          </motion.button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator">
        <div className="flex flex-col items-center text-[#C6A75E]">
          <span className="text-sm mb-2">Scroll to explore</span>
          <ArrowDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
}
