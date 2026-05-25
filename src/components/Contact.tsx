'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle, AlertCircle, Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from 'lucide-react';
import { submitContactForm, submitReviewForm } from '@/app/actions/contact';

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

  // Customer Reviews State
  const [reviews, setReviews] = useState([
    { id: 1, name: "Dhara Patel", location: "Surat", rating: 5, text: "The butter chakri is incredibly crispy and has the perfect melt-in-your-mouth texture. It tastes exactly like the ones my grandmother used to make!", date: "2 days ago" },
    { id: 2, name: "Ketan Shah", location: "Katargam", rating: 5, text: "Highly recommend their Farshi Puri and Limbu Gathiya. Excellent quality, low oil, and very fresh packaging. Ideal teatime snacks!", date: "1 week ago" },
    { id: 3, name: "Meera Mehta", location: "Adajan", rating: 5, text: "Ordered their Methi Thepla in bulk for our family trip, and they stayed soft and fresh throughout. Amazing homemade taste and quality.", date: "2 weeks ago" },
    { id: 4, name: "Rajesh Vyas", location: "Vesu", rating: 5, text: "Shilpa's Kitchen is our go-to for all festival snacks. The Shakkar Para and Cholafali are outstanding. Extremely clean and hygienic.", date: "1 month ago" }
  ]);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [isWritingReview, setIsWritingReview] = useState(false);
  const [reviewForm, setReviewForm] = useState({
    name: '',
    rating: 5,
    message: ''
  });
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);
  const [reviewSubmitStatus, setReviewSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Auto-play timer for reviews
  useEffect(() => {
    if (isWritingReview) return;
    const interval = setInterval(() => {
      setActiveReviewIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [reviews.length, isWritingReview]);

  const handleReviewInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setReviewForm({
      ...reviewForm,
      [e.target.name]: e.target.value
    });
  };

  const handleRatingChange = (newRating: number) => {
    setReviewForm({
      ...reviewForm,
      rating: newRating
    });
  };

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingReview(true);
    setReviewSubmitStatus('idle');

    const result = await submitReviewForm(reviewForm);

    if (result.success) {
      setReviewSubmitStatus('success');
      
      // Add the new review locally so it instantly appears
      const newReview = {
        id: Date.now(),
        name: reviewForm.name || 'Anonymous',
        location: "Surat",
        rating: reviewForm.rating,
        text: reviewForm.message,
        date: "Just now"
      };
      
      setReviews([newReview, ...reviews]);
      setActiveReviewIndex(0);
      setReviewForm({ name: '', rating: 5, message: '' });

      // Automatically switch back to reviews list after 2500ms
      setTimeout(() => {
        setIsWritingReview(false);
        setReviewSubmitStatus('idle');
      }, 2500);
    } else {
      setReviewSubmitStatus('error');
      alert('Failed to submit review: ' + (result.error || 'Unknown error'));
    }

    setIsSubmittingReview(false);
  };

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
                  aria-label="Your Name"
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
                  aria-label="Your Email"
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
                  aria-label="Your Phone Number"
                  className="w-full px-4 py-3 bg-[#0E0E0E] border border-[#C6A75E]/30 rounded-lg text-[#F5F3EF] placeholder-[#F5F3EF]/50 focus:outline-none focus:border-[#C6A75E] focus:ring-2 focus:ring-[#C6A75E]/20 transition-all duration-300"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  aria-label="Your Message"
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

        
          {/* Customer Reviews Section */}
          <div ref={mapRef} className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-6 sm:p-8 rounded-2xl border border-[#C6A75E]/20 flex flex-col justify-between min-h-[500px]">
            <AnimatePresence mode="wait">
              {!isWritingReview ? (
                <motion.div
                  key="reviews-list"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col justify-between h-full flex-grow space-y-6"
                >
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-2xl font-bold text-[#F5F3EF]">Customer Reviews</h3>
                      <div className="flex items-center space-x-1 text-[#C6A75E]">
                        <Star className="w-5 h-5 fill-current" />
                        <span className="font-bold text-[#F5F3EF]">4.9</span>
                        <span className="text-[#F5F3EF]/50 text-sm">/ 5</span>
                      </div>
                    </div>

                    {/* Review Card */}
                    <div className="relative bg-[#0E0E0E]/50 p-6 rounded-xl border border-[#C6A75E]/10 min-h-[180px] flex flex-col justify-between">
                      <div className="absolute top-4 right-4 opacity-10">
                        <Quote className="w-12 h-12 text-[#C6A75E]" />
                      </div>
                      
                      <p className="text-base text-[#F5F3EF]/90 italic mb-6 leading-relaxed">
                        "{reviews[activeReviewIndex].text}"
                      </p>

                      <div className="flex justify-between items-end mt-auto">
                        <div>
                          <div className="font-bold text-[#F5F3EF]">{reviews[activeReviewIndex].name}</div>
                          <div className="text-xs text-[#C6A75E]">
                            {reviews[activeReviewIndex].location} • {reviews[activeReviewIndex].date}
                          </div>
                        </div>
                        <div className="flex space-x-0.5">
                          {[...Array(reviews[activeReviewIndex].rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-[#C6A75E] fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Manual Navigation Controls */}
                    <div className="flex justify-between items-center mt-6">
                      <div className="flex space-x-1">
                        {reviews.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveReviewIndex(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                              index === activeReviewIndex ? 'bg-[#C6A75E] w-6' : 'bg-[#C6A75E]/20 hover:bg-[#C6A75E]/40'
                            }`}
                            aria-label={`Go to review ${index + 1}`}
                          />
                        ))}
                      </div>

                      <div className="flex space-x-2">
                        <button
                          onClick={() => setActiveReviewIndex(prev => prev === 0 ? reviews.length - 1 : prev - 1)}
                          className="w-9 h-9 rounded-full bg-[#0E0E0E] border border-[#C6A75E]/20 text-[#C6A75E] hover:bg-[#C6A75E] hover:text-[#0E0E0E] transition-all duration-300 flex items-center justify-center"
                          aria-label="Previous Review"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => setActiveReviewIndex(prev => prev === reviews.length - 1 ? 0 : prev + 1)}
                          className="w-9 h-9 rounded-full bg-[#0E0E0E] border border-[#C6A75E]/20 text-[#C6A75E] hover:bg-[#C6A75E] hover:text-[#0E0E0E] transition-all duration-300 flex items-center justify-center"
                          aria-label="Next Review"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Write a Review Button */}
                  <motion.button
                    onClick={() => setIsWritingReview(true)}
                    whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(198, 167, 94, 0.3)' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-6 py-3.5 bg-transparent border border-[#C6A75E] text-[#C6A75E] font-semibold rounded-xl hover:bg-gradient-to-r hover:from-[#C6A75E] hover:to-[#D4AF37] hover:text-[#0E0E0E] hover:border-transparent transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Write a Review</span>
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  key="write-review"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col justify-between h-full flex-grow space-y-6"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-[#F5F3EF] mb-6">Write a Review</h3>

                    {reviewSubmitStatus === 'success' ? (
                      <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
                        <div className="w-16 h-16 bg-[#C6A75E]/10 rounded-full flex items-center justify-center border border-[#C6A75E]/20 text-[#C6A75E] animate-bounce">
                          <CheckCircle className="w-8 h-8" />
                        </div>
                        <h4 className="text-xl font-bold text-[#F5F3EF]">Thank you so much!</h4>
                        <p className="text-[#F5F3EF]/70 text-sm max-w-[280px]">
                          Your sweet words and rating have been shared. We appreciate your support!
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleReviewSubmit} className="space-y-4">
                        {/* Rating stars selector */}
                        <div className="flex flex-col space-y-2 mb-2">
                          <label className="text-sm font-semibold text-[#F5F3EF]/80">Your Rating</label>
                          <div className="flex space-x-1.5">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <button
                                key={star}
                                type="button"
                                onClick={() => handleRatingChange(star)}
                                className="focus:outline-none transition-transform duration-100 hover:scale-125"
                                aria-label={`Rate ${star} stars`}
                              >
                                <Star
                                  className={`w-8 h-8 ${
                                    star <= reviewForm.rating
                                      ? 'text-[#C6A75E] fill-current drop-shadow-[0_0_8px_rgba(198,167,94,0.5)]'
                                      : 'text-[#F5F3EF]/20 hover:text-[#C6A75E]/50'
                                  } transition-colors duration-150`}
                                />
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <input
                            type="text"
                            name="name"
                            required
                            value={reviewForm.name}
                            onChange={handleReviewInputChange}
                            placeholder="Your Name"
                            aria-label="Your Name for Review"
                            className="w-full px-4 py-3 bg-[#0E0E0E] border border-[#C6A75E]/30 rounded-lg text-[#F5F3EF] placeholder-[#F5F3EF]/50 focus:outline-none focus:border-[#C6A75E] focus:ring-2 focus:ring-[#C6A75E]/20 transition-all duration-300"
                          />
                        </div>

                        <div>
                          <textarea
                            name="message"
                            required
                            rows={3}
                            value={reviewForm.message}
                            onChange={handleReviewInputChange}
                            placeholder="Your Review (e.g. delicious theplas, excellent butter chakri!)"
                            aria-label="Your Review Message"
                            className="w-full px-4 py-3 bg-[#0E0E0E] border border-[#C6A75E]/30 rounded-lg text-[#F5F3EF] placeholder-[#F5F3EF]/50 focus:outline-none focus:border-[#C6A75E] focus:ring-2 focus:ring-[#C6A75E]/20 transition-all duration-300 resize-none"
                          />
                        </div>

                        <div className="flex space-x-3 pt-2">
                          <motion.button
                            type="button"
                            onClick={() => setIsWritingReview(false)}
                            className="flex-1 py-3 bg-transparent border border-[#F5F3EF]/20 text-[#F5F3EF]/70 font-semibold rounded-xl hover:bg-[#F5F3EF]/5 hover:text-[#F5F3EF] transition-all duration-300"
                          >
                            Cancel
                          </motion.button>
                          
                          <motion.button
                            type="submit"
                            disabled={isSubmittingReview}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex-1 py-3 bg-gradient-to-r from-[#C6A75E] to-[#D4AF37] text-[#0E0E0E] font-semibold rounded-xl hover:shadow-[0_0_20px_rgba(198,167,94,0.3)] transition-all duration-300 flex items-center justify-center space-x-2"
                          >
                            {isSubmittingReview ? (
                              <div className="w-5 h-5 border-2 border-[#0E0E0E] border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                              <span>Submit</span>
                            )}
                          </motion.button>
                        </div>
                      </form>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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


      </div>
    </section>
  );
}
