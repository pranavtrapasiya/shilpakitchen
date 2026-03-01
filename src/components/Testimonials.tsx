'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Adajan, Surat",
    rating: 5,
    text: "Absolutely phenomenal food! The Royal Thali was a feast for both eyes and palate. Every dish had authentic flavors that reminded me of home. The presentation was elegant and the service was impeccable.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    date: "2 days ago"
  },
  {
    id: 2,
    name: "Rahul Patel",
    location: "Piplod, Surat",
    rating: 5,
    text: "Shilpa's Kitchen has become our family's favorite restaurant. The consistency in quality and taste is remarkable. Their Paneer Butter Masala is the best I've ever had. Highly recommend!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    date: "1 week ago"
  },
  {
    id: 3,
    name: "Anita Desai",
    location: "Vesu, Surat",
    rating: 5,
    text: "The ambiance is perfect for family dinners. The food is always fresh and delicious. I particularly love their desserts - the Gulab Jamun melts in your mouth! Exceptional dining experience.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    date: "2 weeks ago"
  },
  {
    id: 4,
    name: "Vikram Mehta",
    location: "City Light, Surat",
    rating: 5,
    text: "As a food enthusiast, I can say this is one of the finest Indian restaurants in Surat. The attention to detail in every dish is commendable. The Biryani is aromatic and perfectly spiced.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    date: "3 weeks ago"
  },
  {
    id: 5,
    name: "Kavya Singh",
    location: "Palanpur, Surat",
    rating: 5,
    text: "Ordered for a house party and everyone was impressed! The packaging was elegant, food was hot and fresh, and the flavors were outstanding. Shilpa's Kitchen never disappoints!",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    date: "1 month ago"
  }
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

      // Carousel animation
      gsap.fromTo('.testimonial-carousel',
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: carouselRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-[#0E0E0E] to-[#1a1a1a] overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16 section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F3EF] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-[#C6A75E] mb-6 max-w-2xl mx-auto">
            Real experiences from food lovers who have made us their favorite dining destination
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C6A75E] to-[#D4AF37] mx-auto"></div>
        </motion.div>

        {/* Carousel */}
        <div ref={carouselRef} className="testimonial-carousel relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl">
            {/* Testimonial Cards */}
            <div className="relative h-96 md:h-80">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-8 md:p-12 rounded-2xl border border-[#C6A75E]/20"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{
                    opacity: index === currentIndex ? 1 : 0,
                    x: index === currentIndex ? 0 : 100,
                    scale: index === currentIndex ? 1 : 0.8
                  }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  {index === currentIndex && (
                    <>
                      {/* Quote Icon */}
                      <div className="mb-6">
                        <Quote className="w-12 h-12 text-[#C6A75E]" />
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-lg md:text-xl text-[#F5F3EF]/90 mb-8 leading-relaxed italic">
                        "{testimonial.text}"
                      </p>

                      {/* Rating */}
                      <div className="flex items-center space-x-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-[#C6A75E] fill-current" />
                        ))}
                      </div>

                      {/* Customer Info */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#C6A75E]">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-[#F5F3EF]">
                              {testimonial.name}
                            </h4>
                            <p className="text-sm text-[#C6A75E]">
                              {testimonial.location} • {testimonial.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#C6A75E] text-[#0E0E0E] rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors duration-300 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#C6A75E] text-[#0E0E0E] rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors duration-300 shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#C6A75E] w-8' 
                    : 'bg-[#C6A75E]/30 hover:bg-[#C6A75E]/50'
                }`}
              />
            ))}
          </div>

          {/* Auto-play toggle */}
          <div className="text-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-[#C6A75E] hover:text-[#D4AF37] transition-colors duration-300"
            >
              {isAutoPlaying ? 'Pause Auto-slide' : 'Resume Auto-slide'}
            </button>
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-[#C6A75E]/10 to-[#D4AF37]/10 p-6 rounded-2xl border border-[#C6A75E]/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="text-3xl font-bold text-[#C6A75E] mb-2">4.9/5</h4>
              <p className="text-[#F5F3EF]/80">Average Rating</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-[#C6A75E] mb-2">2,500+</h4>
              <p className="text-[#F5F3EF]/80">Reviews</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-[#C6A75E] mb-2">98%</h4>
              <p className="text-[#F5F3EF]/80">Satisfaction Rate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
