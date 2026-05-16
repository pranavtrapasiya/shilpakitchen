'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { WHATSAPP_NUMBER, buildWhatsAppUrl } from '@/lib/whatsapp';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];

  const whatsappUrl = buildWhatsAppUrl('Hi! I would like to inquire about Shilpa Kitchen snacks.');

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0E0E0E]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-[#C6A75E]/20 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 z-50">
            <Image 
              src="/logo.jpeg" 
              alt="Shilpa Kitchen Logo" 
              width={40} 
              height={40} 
              className="w-10 h-10 object-contain rounded-full"
            />
            <span className="text-lg md:text-2xl font-bold text-[#F5F3EF] tracking-wide">
              Shilpa's Kitchen
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-[#F5F3EF]/90 hover:text-[#C6A75E] text-sm font-semibold transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-gradient-to-r from-[#C6A75E] to-[#D4AF37] text-[#0E0E0E] font-bold rounded-full hover:shadow-[0_0_20px_rgba(198,167,94,0.4)] transition-all duration-300 flex items-center"
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Order Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-[#F5F3EF] focus:outline-none z-50 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0E0E0E] flex flex-col items-center justify-center lg:hidden"
          >
            <div className="flex flex-col space-y-8 text-center w-full px-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-bold text-[#F5F3EF] hover:text-[#C6A75E] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 border-t border-[#C6A75E]/20 w-full">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 bg-gradient-to-r from-[#C6A75E] to-[#D4AF37] text-[#0E0E0E] text-xl font-bold rounded-full inline-block shadow-lg"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
