'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { WHATSAPP_NUMBER, buildWhatsAppUrl } from '@/lib/whatsapp';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];

  const whatsappUrl = buildWhatsAppUrl('Hi! I would like to inquire about Shilpa Kitchen snacks.');

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '/' && pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0E0E0E]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-[#C6A75E]/20' : 'bg-transparent'
        }`}
        style={{
          paddingTop: scrolled ? 'calc(0.75rem + env(safe-area-inset-top, 0px))' : 'calc(1.25rem + env(safe-area-inset-top, 0px))',
          paddingBottom: scrolled ? '0.75rem' : '1.25rem',
        }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 z-50">
            <Image 
              src="/images/skwhitelogo.png" 
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
                onClick={(e) => handleLinkClick(e, link.href)}
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
                  onClick={(e) => handleLinkClick(e, link.href)}
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
