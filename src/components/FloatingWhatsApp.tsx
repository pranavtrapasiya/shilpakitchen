'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { WhatsAppIcon, WHATSAPP_NUMBER } from '@/lib/whatsapp';

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show after scrolling down 300px or after 3 seconds
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      }
    };

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Show tooltip 1.5 seconds after button appears
      const timer = setTimeout(() => {
        setShowTooltip(true);
      }, 1500);
      
      // Auto-hide tooltip after 6 seconds to keep UI clean
      const hideTimer = setTimeout(() => {
        setShowTooltip(false);
      }, 7500);

      return () => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
      };
    }
  }, [isVisible]);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi! I visited your website and would like to order some delicious homemade snacks."
  )}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50 flex items-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                className="mr-3 bg-[#1A1A1A] text-[#F5F3EF] border border-[#C6A75E]/30 px-4 py-2 rounded-xl text-sm font-semibold shadow-2xl flex items-center space-x-2 whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
                <span>Order via WhatsApp!</span>
              </motion.a>
            )}
          </AnimatePresence>

          {/* Floating Button */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            aria-label="Order on WhatsApp"
          >
            {/* Pulsing ring animation */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping -z-10" />

            <WhatsAppIcon className="w-8 h-8" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
