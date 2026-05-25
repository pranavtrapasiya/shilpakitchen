'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import { subscribeToNewsletter } from '@/app/actions/newsletter';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const result = await subscribeToNewsletter(email);
      if (result.success) {
        setStatus('success');
        setMessage(result.message || 'Thank you for subscribing!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Failed to connect to the server.');
    }
  };

  const socialLinks = [
    { icon: <Image src="/images/facebook.png" alt="Follow Shilpa Kitchen on Facebook" width={20} height={20} className="w-5 h-5" />, href: "https://www.facebook.com/people/Shilpas-Kitchen/100081407570293/", label: "Facebook" },
    { icon: <Image src="/images/instagram.webp" alt="Follow Shilpa Kitchen on Instagram" width={20} height={20} className="w-5 h-5" />, href: "https://www.instagram.com/shilpas_kittchen/", label: "Instagram" },
    { icon: <Image src="/images/whatsapp.webp" alt="Order via WhatsApp" width={20} height={20} className="w-5 h-5" />, href: "https://wa.me/919377732558", label: "WhatsApp" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/#about" },
    { name: "Products", href: "/products" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Contact", href: "/#contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-and-services" },
    { name: "Refund Policy", href: "/return-and-refund-policy" },
    { name: "Sitemap", href: "/html-sitemap" },
  ];

  const contactInfo = [
    { icon: <Mail className="w-4 h-4" />, text: "shilpaskitchen24@gmail.com", href: "mailto:shilpaskitchen24@gmail.com" },
    { icon: <Phone className="w-4 h-4" />, text: "+91 93777 32558", href: "tel:+919377732558" },
    { 
      icon: <MapPin className="w-4 h-4" />, 
      text: "40, Alkapuri Society, Sumul Dairy Road, Katargam, Surat",
      href: "https://www.google.com/maps/place/Shilpa's+Kitchen/@21.2186724,72.8374257,17z/data=!3m1!4b1!4m6!3m5!1s0x3be04f3e544d47a9:0x6e3c56965f59bb82!8m2!3d21.2186724!4d72.8400006!16s%2Fg%2F11kr7qrv2q?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDMwMS4xIKXMDSoASAFQAw%3D%3D",
      target: "_blank",
      rel: "noopener noreferrer"
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0E0E0E] to-[#000000] border-t border-[#C6A75E]/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#C6A75E] to-[#D4AF37] rounded-full flex items-center justify-center overflow-hidden">
                <Image src="/logo.jpeg" alt="Shilpa Kitchen logo" width={48} height={48} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#F5F3EF]">Shilpa's Kitchen</h3>
                <p className="text-sm text-[#C6A75E]">Authentic Indian Snacks & Sweets</p>
              </div>
            </div>

            <p className="text-[#F5F3EF]/70 leading-relaxed">
              Experience the finest Indian cuisine in Surat, where traditional recipes meet modern sophistication. Every dish tells a story of heritage and passion.
            </p>

            {/* Social Media Icons */}
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-[#1a1a1a] border border-[#C6A75E]/30 rounded-full flex items-center justify-center text-[#C6A75E] hover:bg-gradient-to-br hover:from-[#C6A75E] hover:to-[#D4AF37] hover:text-[#0E0E0E] transition-all duration-300 hover:shadow-lg hover:shadow-[#C6A75E]/25"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-lg font-semibold text-[#F5F3EF] mb-4">Quick Links</div>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#F5F3EF]/70 hover:text-[#C6A75E] transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span className="w-1 h-1 bg-[#C6A75E] rounded-full"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-lg font-semibold text-[#F5F3EF] mb-4">Contact Info</div>
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.text} className="flex items-center space-x-3">
                  {info.icon}
                  <a 
                    href={info.href}
                    target={info.target}
                    rel={info.rel}
                    className="text-[#F5F3EF]/70 hover:text-[#C6A75E] transition-colors duration-300 text-sm"
                  >
                    {info.text}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-lg font-semibold text-[#F5F3EF] mb-4">Stay Updated</div>
            <p className="text-[#F5F3EF]/70 text-sm mb-4">
              Subscribe to our newsletter for exclusive offers and updates
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                disabled={status === 'loading'}
                className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#C6A75E]/30 rounded-lg text-[#F5F3EF] placeholder-[#F5F3EF]/50 focus:outline-none focus:border-[#C6A75E] focus:ring-2 focus:ring-[#C6A75E]/20 transition-all duration-300 disabled:opacity-50"
              />
              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: status === 'loading' ? 1 : 1.05 }}
                whileTap={{ scale: status === 'loading' ? 1 : 0.95 }}
                className="w-full py-2 bg-gradient-to-r from-[#C6A75E] to-[#D4AF37] text-[#0E0E0E] font-semibold rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 flex items-center justify-center space-x-2"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </motion.button>
            </form>
            {status === 'success' && (
              <p className="text-green-500 text-xs mt-2">{message}</p>
            )}
            {status === 'error' && (
              <p className="text-red-500 text-xs mt-2">{message}</p>
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#C6A75E]/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div 
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-[#F5F3EF]/70 text-sm">
                © {currentYear} Shilpa's Kitchen. All rights reserved.
              </p>
            </motion.div>

            <motion.div 
              className="flex space-x-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#F5F3EF]/70 hover:text-[#C6A75E] text-sm transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Gold Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent opacity-50"></div>
    </footer>
  );
}
