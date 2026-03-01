'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo('.loader-logo', 
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: 1.5, ease: 'power4.out' }
    )
    .fromTo('.loader-text', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.5'
    )
    .to('.loader-content', 
      { opacity: 0, scale: 0.8, duration: 0.8, ease: 'power2.inOut' },
      '+=1'
    );

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-[#0E0E0E] z-50 flex items-center justify-center overflow-hidden">
      <div className="loader-content">
        <motion.div 
          className="loader-logo w-32 h-32 mx-auto mb-8 relative"
          initial={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#C6A75E] to-[#D4AF37] rounded-full flex items-center justify-center">
            <div className="w-28 h-28 bg-[#0E0E0E] rounded-full flex items-center justify-center">
              <img src="/images/logo.png" alt="Shilpa's Kitchen" className="w-20 h-20 object-contain" />
            </div>
          </div>
          <div className="absolute inset-0 rounded-full border-2 border-[#C6A75E] opacity-30 animate-ping"></div>
        </motion.div>
        
        <motion.div 
          className="loader-text text-center"
          initial={{ opacity: 0 }}
        >
          <h1 className="text-3xl font-bold text-[#F5F3EF] mb-2">Shilpa's Kitchen</h1>
          <p className="text-[#C6A75E] text-lg pulse-gold">Authentic Taste. Elevated Elegance.</p>
        </motion.div>

        <div className="mt-8 flex justify-center space-x-2">
          <div className="w-2 h-2 bg-[#C6A75E] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-[#C6A75E] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-[#C6A75E] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}
