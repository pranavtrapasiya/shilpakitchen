'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Utensils } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <img src="/images/facebook.png" alt="Facebook" className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <img src="/images/instagram.webp" alt="Instagram" className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <img src="/images/whatsapp.webp" alt="WhatsApp" className="w-5 h-5" />, href: "#", label: "WhatsApp" },
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Refund Policy", href: "#" },
  ];

  const contactInfo = [
    { icon: <Mail className="w-4 h-4" />, text: "hello@shilpaskitchen.com" },
    { icon: <Phone className="w-4 h-4" />, text: "+91 98765 43210" },
    { 
      icon: <MapPin className="w-4 h-4" />, 
      text: "40, Alkapuri Society, Sumul Dairy Road, Katargam, Surat",
      isMap: true
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0E0E0E] to-[000000] border-t border-[#C6A75E]/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#C6A75E] to-[#D4AF37] rounded-full flex items-center justify-center">
                <img src="/images/logo.png" alt="Shilpa's Kitchen" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#F5F3EF]">Shilpa's Kitchen</h3>
                <p className="text-sm text-[#C6A75E]">Authentic Indian Snacks & Sweets</p>
              </div>
            </motion.div>

            <motion.p 
              className="text-[#F5F3EF]/70 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Experience the finest Indian cuisine in Surat, where traditional recipes meet modern sophistication. Every dish tells a story of heritage and passion.
            </motion.p>

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
            <h4 className="text-lg font-semibold text-[#F5F3EF] mb-4">Quick Links</h4>
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
            <h4 className="text-lg font-semibold text-[#F5F3EF] mb-4">Contact Info</h4>
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.text} className="flex items-center space-x-3">
                  {info.icon}
                  {info.isMap ? (
                    <a 
                      href="https://maps.app.goo.gl/DHUGoVAWxu4KRcwE7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F5F3EF]/70 hover:text-[#C6A75E] transition-colors duration-300 text-sm"
                    >
                      {info.text}
                    </a>
                  ) : (
                    <span className="text-[#F5F3EF]/70 text-sm">{info.text}</span>
                  )}
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
            <h4 className="text-lg font-semibold text-[#F5F3EF] mb-4">Stay Updated</h4>
            <p className="text-[#F5F3EF]/70 text-sm mb-4">
              Subscribe to our newsletter for exclusive offers and updates
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#C6A75E]/30 rounded-lg text-[#F5F3EF] placeholder-[#F5F3EF]/50 focus:outline-none focus:border-[#C6A75E] focus:ring-2 focus:ring-[#C6A75E]/20 transition-all duration-300"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-2 bg-gradient-to-r from-[#C6A75E] to-[#D4AF37] text-[#0E0E0E] font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </form>
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
