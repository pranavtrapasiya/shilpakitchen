import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Quote, MessageSquare, Heart, Award } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Customer Reviews & Testimonials | Shilpa Kitchen',
  description: 'Read real experiences and reviews from our amazing customers in Surat. See why people love our homemade Gujarati snacks and sweets.',
  alternates: {
    canonical: '/testimonials',
  },
};

interface TestimonialItem {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
  date: string;
  tag?: string;
}

const detailedTestimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Adajan, Surat",
    rating: 5,
    text: "Absolutely phenomenal snacks! The Butter Chakri is a feast for both the eyes and palate. Every snack has authentic Gujarati flavors that remind me of home. The packaging is elegant and extremely clean.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    date: "2 days ago",
    tag: "Best Seller Choice"
  },
  {
    id: 2,
    name: "Rahul Patel",
    location: "Piplod, Surat",
    rating: 5,
    text: "Shilpa's Kitchen has become our family's absolute favorite for farsan. The consistency in taste and low oil quality is remarkable. Their Methi Thepla is exceptionally soft and stays fresh for days. Highly recommend!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    date: "1 week ago",
    tag: "Family Favorite"
  },
  {
    id: 3,
    name: "Anita Desai",
    location: "Vesu, Surat",
    rating: 5,
    text: "Perfect teatime snacks! Everything is always fresh and incredibly delicious. I particularly love their sweet delicacies - the Shakkar Para just melts in your mouth! Exceptional quality.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    date: "2 weeks ago",
    tag: "Must Try"
  },
  {
    id: 4,
    name: "Vikram Mehta",
    location: "City Light, Surat",
    rating: 5,
    text: "As a food enthusiast, I can say this is one of the finest homemade brands in Surat. The attention to traditional detail in every product is commendable. The Limbu Gathiya is perfectly tangy and crisp.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    date: "3 weeks ago",
    tag: "Chef's Recommendation"
  },
  {
    id: 5,
    name: "Kavya Singh",
    location: "Palanpur, Surat",
    rating: 5,
    text: "Ordered in bulk for a house party and everyone was deeply impressed! The packaging was elegant, the snacks were perfectly crisp, and the flavors were outstanding. Shilpa's Kitchen never disappoints!",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    date: "1 month ago",
    tag: "Party Host Choice"
  },
  {
    id: 6,
    name: "Dhara Patel",
    location: "Katargam, Surat",
    rating: 5,
    text: "The Farshi Puri is incredibly crispy and has the perfect melt-in-your-mouth texture. It tastes exactly like the ones my grandmother used to make! Very clean and hygienic.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    date: "2 days ago",
    tag: "Traditional Taste"
  },
  {
    id: 7,
    name: "Ketan Shah",
    location: "Varachha, Surat",
    rating: 5,
    text: "Excellent quality, low oil, and very fresh packaging. Ideal teatime snacks! My kids absolutely love the Butter Chakri and Masala Khakhra. Will keep ordering weekly.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    date: "1 week ago",
    tag: "Kid Approved"
  },
  {
    id: 8,
    name: "Meera Mehta",
    location: "Adajan, Surat",
    rating: 5,
    text: "Ordered their Methi Thepla in bulk for our family vacation, and they stayed completely soft and fresh throughout our 3-day journey. Amazing homemade taste and quality.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    date: "2 weeks ago",
    tag: "Travel Friendly"
  },
  {
    id: 9,
    name: "Rajesh Vyas",
    location: "Vesu, Surat",
    rating: 5,
    text: "Shilpa's Kitchen is our go-to for all festival snacks. The Shakkar Para and Cholafali are outstanding. Order processing is fast and packaging preserves the absolute crunch.",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    date: "1 month ago",
    tag: "Festival Essential"
  }
];

export default function TestimonialsPage() {
  return (
    <>
      <main className="pt-24 bg-[#0E0E0E] min-h-screen">
        
        {/* Header Section */}
        <section className="py-12 md:py-16 bg-[#0E0E0E]">
          <div className="container mx-auto px-6 text-center">
            <span className="text-xs uppercase tracking-widest text-[#C6A75E] font-bold flex items-center justify-center mb-3">
              <Heart className="w-4 h-4 mr-1.5 fill-current text-[#C6A75E]" /> Sweet Words From Customers
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#F5F3EF] mb-6 tracking-tight">
              Customer Testimonials
            </h1>
            <p className="text-lg md:text-xl text-[#C6A75E] max-w-2xl mx-auto">
              Real experiences from food lovers in Surat who make us their trusted choice for authentic homemade delicacies.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C6A75E] to-[#D4AF37] mx-auto mt-6"></div>
          </div>
        </section>

        {/* 📊 STATS BANNER */}
        <section className="pb-12 bg-[#0E0E0E]">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-r from-[#C6A75E]/10 to-[#D4AF37]/10 border border-[#C6A75E]/30 p-8 rounded-2xl max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#C6A75E]/20">
                <div className="pt-4 md:pt-0">
                  <div className="text-4xl font-extrabold text-[#C6A75E] mb-2 flex justify-center items-center">
                    4.9 <Star className="w-6 h-6 text-[#C6A75E] fill-current ml-1" />
                  </div>
                  <p className="text-sm uppercase tracking-wider text-[#F5F3EF]/60 font-semibold">Average Google Rating</p>
                </div>
                <div className="pt-6 md:pt-0 md:pl-4">
                  <div className="text-4xl font-extrabold text-[#C6A75E] mb-2">2,500+</div>
                  <p className="text-sm uppercase tracking-wider text-[#F5F3EF]/60 font-semibold">Happy Customers</p>
                </div>
                <div className="pt-6 md:pt-0 md:pl-4">
                  <div className="text-4xl font-extrabold text-[#C6A75E] mb-2">100%</div>
                  <p className="text-sm uppercase tracking-wider text-[#F5F3EF]/60 font-semibold">Homemade & Fresh Guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 📋 TESTIMONIALS GRID */}
        <section className="pb-20 bg-[#0E0E0E]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {detailedTestimonials.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-[#161616]/90 border border-[#C6A75E]/15 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-[#C6A75E]/50 transition-all duration-300 shadow-xl group relative overflow-hidden"
                >
                  {/* Subtle Background Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#C6A75E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  {/* Quote icon at top-right */}
                  <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-15 transition-opacity duration-300 pointer-events-none">
                    <Quote className="w-12 h-12 text-[#C6A75E]" />
                  </div>

                  <div>
                    {/* Tag Badge */}
                    {item.tag && (
                      <span className="inline-block text-[10px] uppercase tracking-widest text-[#C6A75E] font-bold bg-[#C6A75E]/10 border border-[#C6A75E]/20 px-2.5 py-0.5 rounded-full mb-4">
                        {item.tag}
                      </span>
                    )}

                    {/* Review text */}
                    <p className="text-sm sm:text-base text-[#F5F3EF]/90 italic leading-relaxed mb-6">
                      "{item.text}"
                    </p>
                  </div>

                  {/* Customer details */}
                  <div className="mt-auto pt-6 border-t border-[#C6A75E]/10 flex items-center justify-between">
                    <div className="flex items-center space-x-3.5">
                      <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#C6A75E]/30">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="44px"
                        />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#F5F3EF]">
                          {item.name}
                        </div>
                        <div className="text-[11px] text-[#C6A75E]/85">
                          {item.location} • {item.date}
                        </div>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex space-x-0.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-[#C6A75E] fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 🌟 GOOGLE REVIEW CALL TO ACTION */}
        <section className="py-16 bg-[#111111] border-t border-[#C6A75E]/15">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#C6A75E] font-bold flex items-center justify-center mb-3">
              <Award className="w-4 h-4 mr-1.5 text-[#C6A75E]" /> Spread the Love
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#F5F3EF] mb-4">
              Loved Our Tastes? Leave a Review!
            </h2>
            <p className="text-base text-[#F5F3EF]/70 mb-8 leading-relaxed">
              Your valuable feedback helps us maintain our premium standards and helps other food lovers in Surat find our traditional homemade delicacies!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/#contact" 
                className="w-full sm:w-auto px-8 py-3.5 border border-[#C6A75E] text-[#C6A75E] font-semibold rounded-full hover:bg-gradient-to-r hover:from-[#C6A75E] hover:to-[#D4AF37] hover:text-[#0E0E0E] hover:border-transparent transition-all duration-300 flex items-center justify-center space-x-2 text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Write Onsite Review</span>
              </Link>
              
              <a 
                href="https://www.google.com/search?sca_esv=ff3d99469f955461&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qORhyTnU5AcIp97gg9GaeZTA254MLPNuhgWy13K9VjHO0gulNPcTAAWODd3er3yWQcwOAbErnLj_VNLrSopZ5K2FuXGuFBB9E5Gh4pPiVG8KGOdz1dQ%3D%3D&q=Shilpa%27s+Kitchen+Reviews&sa=X&ved=2ahUKEwik2bjHxtSUAxV_wzgGHbXEFPcQ0bkNegQINxAF&biw=1536&bih=730&dpr=1.25"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#C6A75E] to-[#D4AF37] text-[#0E0E0E] font-bold rounded-full hover:shadow-[0_0_20px_rgba(198,167,94,0.4)] transition-all duration-300 flex items-center justify-center space-x-2 text-sm shadow-lg"
              >
                <svg className="w-4 h-4 fill-current text-[#0E0E0E]" viewBox="0 0 24 24">
                  <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.113-5.136 4.113-3.41 0-6.19-2.78-6.19-6.19 0-3.41 2.78-6.19 6.19-6.19 1.542 0 2.94.577 4.022 1.52l3.19-3.19C19.29 2.26 15.93 1 12.24 1 6.033 1 1 6.033 1 12.24s5.033 11.24 11.24 11.24c6.478 0 11.24-4.542 11.24-11.24 0-.776-.082-1.52-.224-2.224H12.24z"/>
                </svg>
                <span>Write Google Review</span>
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
