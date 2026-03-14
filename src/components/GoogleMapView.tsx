'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function GoogleMapView() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create a simple embedded map view using iframe
    if (mapRef.current) {
      const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.7266583216327!2d72.8374257!3d21.2186724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f3e544d47a9:0x6e3c56965f59bb82!2sShilpa's+Kitchen!5e0!3m2!1sen!2sin!4v1647123456789!5m2!1sen!2sin";
      
      const iframe = document.createElement('iframe');
      iframe.src = mapUrl;
      iframe.width = '100%';
      iframe.height = '100%';
      iframe.style.border = '0';
      iframe.style.borderRadius = '0.75rem';
      iframe.allowFullscreen = true;
      iframe.loading = 'lazy';
      iframe.referrerPolicy = 'no-referrer-when-downgrade';
      
      mapRef.current.innerHTML = '';
      mapRef.current.appendChild(iframe);
    }
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-[#0E0E0E] to-[#1a1a1a] overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F3EF] mb-4">
            Find Us Here
          </h2>
          <p className="text-xl text-[#C6A75E] mb-6 max-w-2xl mx-auto">
            Visit our store in Katargam, Surat for authentic Indian snacks and sweets
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C6A75E] to-[#D4AF37] mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Map View */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#1a1a1a] rounded-2xl p-4 border border-[#C6A75E]/20">
              <div 
                ref={mapRef}
                className="w-full h-96 lg:h-[500px] rounded-xl overflow-hidden"
              />
            </div>
          </motion.div>

          {/* Location Details */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#C6A75E]/20">
              <h3 className="text-2xl font-bold text-[#F5F3EF] mb-6">Store Location</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#C6A75E] to-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#0E0E0E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#F5F3EF] mb-2">Address</h4>
                    <p className="text-[#F5F3EF]/80 text-sm leading-relaxed">
                      40, Alkapuri Society,<br />
                      Sumul Dairy Road, Katargam,<br />
                      Surat, Gujarat - 395004
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#C6A75E] to-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#0E0E0E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#F5F3EF] mb-2">Business Hours</h4>
                    <div className="text-[#F5F3EF]/80 text-sm space-y-1">
                      <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                      <p>Sunday: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#C6A75E] to-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#0E0E0E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#F5F3EF] mb-2">Contact</h4>
                    <div className="text-[#F5F3EF]/80 text-sm space-y-1">
                      <p>+91 98765 43210</p>
                      <p>hello@shilpaskitchen.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3">
                <motion.a
                  href="https://www.google.com/maps/place/Shilpa's+Kitchen/@21.2186724,72.8374257,17z/data=!3m1!4b1!4m6!3m5!1s0x3be04f3e544d47a9:0x6e3c56965f59bb82!8m2!3d21.2186724!4d72.8400006!16s%2Fg%2F11kr7qrv2q?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDMwMS4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-gradient-to-r from-[#C6A75E] to-[#D4AF37] text-[#0E0E0E] font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 01 3 16.382V5.618a1 1 0 011.447-.894L9 2m0 18v-8m0 0l6-3m-6 3l6-3m-6 3v8m0 0l6-3m-6 3v8m0 0l6-3" />
                  </svg>
                  <span>Get Directions</span>
                </motion.a>

                <motion.a
                  href="tel:+919876543210"
                  className="w-full py-3 border-2 border-[#C6A75E] text-[#F5F3EF] font-semibold rounded-lg hover:bg-[#C6A75E] hover:text-[#0E0E0E] transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call Us</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
