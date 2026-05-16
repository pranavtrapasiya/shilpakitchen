'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { submitContactForm } from '@/app/actions/contact';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

      // Form animation
      gsap.fromTo(formRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Map animation
      gsap.fromTo(mapRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: mapRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Form inputs stagger animation
      const inputs = formRef.current?.querySelectorAll('input, textarea');
      if (inputs && inputs.length > 0) {
        gsap.fromTo(Array.from(inputs),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: formRef.current,
              start: 'top 60%',
              end: 'bottom 40%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    const result = await submitContactForm(formData);
    
    if (result.success) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      // The popup will stay visible until closed or after a timeout
    } else {
      setSubmitStatus('error');
      alert('Failed to send message: ' + result.error);
    }
    
    setIsSubmitting(false);
  };

  return (
    <section ref={sectionRef} className="py-12 md:py-20 bg-[#0E0E0E] overflow-hidden" id="contact">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12 md:mb-16 section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#F5F3EF] mb-4">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-[#C6A75E] mb-6 max-w-2xl mx-auto px-4">
            We'd love to hear from you. Send us a message or visit our shop in Surat
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C6A75E] to-[#D4AF37] mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div ref={formRef} className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-6 sm:p-8 rounded-2xl border border-[#C6A75E]/20">
            <h3 className="text-2xl font-bold text-[#F5F3EF] mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-[#0E0E0E] border border-[#C6A75E]/30 rounded-lg text-[#F5F3EF] placeholder-[#F5F3EF]/50 focus:outline-none focus:border-[#C6A75E] focus:ring-2 focus:ring-[#C6A75E]/20 transition-all duration-300"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-[#0E0E0E] border border-[#C6A75E]/30 rounded-lg text-[#F5F3EF] placeholder-[#F5F3EF]/50 focus:outline-none focus:border-[#C6A75E] focus:ring-2 focus:ring-[#C6A75E]/20 transition-all duration-300"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your Phone Number"
                  className="w-full px-4 py-3 bg-[#0E0E0E] border border-[#C6A75E]/30 rounded-lg text-[#F5F3EF] placeholder-[#F5F3EF]/50 focus:outline-none focus:border-[#C6A75E] focus:ring-2 focus:ring-[#C6A75E]/20 transition-all duration-300"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-[#0E0E0E] border border-[#C6A75E]/30 rounded-lg text-[#F5F3EF] placeholder-[#F5F3EF]/50 focus:outline-none focus:border-[#C6A75E] focus:ring-2 focus:ring-[#C6A75E]/20 transition-all duration-300 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02, boxShadow: '0 0 30px rgba(198, 167, 94, 0.5)' }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-[#C6A75E] to-[#D4AF37] text-[#0E0E0E] font-semibold rounded-xl hover:shadow-2xl hover:shadow-[#C6A75E]/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-[#0E0E0E] border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Message Sent!</span>
                  </>
                ) : submitStatus === 'error' ? (
                  <>
                    <AlertCircle className="w-5 h-5" />
                    <span>Try Again</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span className="group-hover:text-[#0E0E0E] transition-colors duration-300">Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </div>

        
        {/* Map & Contact Info - Commented out */}
        {/* <div ref={mapRef} className="space-y-8">
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-4 rounded-2xl border border-[#C6A75E]/20 overflow-hidden">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.823544555!2d72.8311!3d21.1954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDExJzQzLjQiTiA3MsKwNDknNDcuOSJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-8 rounded-2xl border border-[#C6A75E]/20 space-y-6">
            <h3 className="text-2xl font-bold text-[#F5F3EF] mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#C6A75E] to-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#0E0E0E]" />
                </div>
                <div>
                  <div className="font-semibold text-[#F5F3EF] mb-1">Address</div>
                  <p className="text-[#F5F3EF]/80">
                    40, Alkapuri Society,<br />
                    Sumul Dairy Road, Katargam,<br />
                    Surat, Gujarat - 395004
                  </p>
                  <a 
                    href="https://www.google.com/maps/place/Shilpa's+Kitchen/@21.2186724,72.8374257,17z/data=!3m1!4b1!4m6!3m5!1s0x3be04f3e544d47a9:0x6e3c56965f59bb82!8m2!3d21.2186724!4d72.8400006!16s%2Fg%2F11kr7qrv2q?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDMwMS4xIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 mt-2 text-[#C6A75E] hover:text-[#D4AF37] transition-colors duration-300 text-sm font-medium"
                  >
                    <span>Get Directions</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 01 3 16.382V5.618a1 1 0 011.447-.894L9 2m0 18v-8m0 0l6-3m-6 3l6-3m-6 3v8m0 0l6-3m-6 3v8m0 0l6-3" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#C6A75E] to-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#0E0E0E]" />
                </div>
                <div>
                  <div className="font-semibold text-[#F5F3EF] mb-1">Phone</div>
                  <p className="text-[#F5F3EF]/80">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#C6A75E] to-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#0E0E0E]" />
                </div>
                <div>
                  <div className="font-semibold text-[#F5F3EF] mb-1">Email</div>
                  <p className="text-[#F5F3EF]/80">hello@shilpaskitchen.in</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#C6A75E] to-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#0E0E0E]" />
                </div>
                <div>
                  <div className="font-semibold text-[#F5F3EF] mb-1">Opening Hours</div>
                  <p className="text-[#F5F3EF]/80">
                    Mon - Fri: 11:00 AM - 11:00 PM<br />
                    Sat - Sun: 11:00 AM - 12:00 AM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        </div>
      {/* Success Popup Modal */}
      <AnimatePresence>
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#1a1a1a] border border-[#C6A75E]/30 p-8 rounded-3xl max-w-sm w-full text-center shadow-2xl"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#C6A75E] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#C6A75E]/20">
                <CheckCircle className="w-10 h-10 text-[#0E0E0E]" />
              </div>
              <h3 className="text-3xl font-bold text-[#F5F3EF] mb-3">Thank You!</h3>
              <p className="text-[#F5F3EF]/70 mb-8">
                Your message has been sent successfully. We will get back to you shortly.
              </p>
              <button
                onClick={() => setSubmitStatus('idle')}
                className="w-full py-4 bg-gradient-to-r from-[#C6A75E] to-[#D4AF37] text-[#0E0E0E] font-bold rounded-xl hover:shadow-xl transition-all duration-300"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.div
        className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
          <motion.a
            href="https://wa.me/919377732558"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <MessageCircle className="w-7 h-7 text-white" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
