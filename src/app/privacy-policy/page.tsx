import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import { Mail, Phone, Globe, Shield, User, Database, CreditCard, Share2, Lock, Cookie, Bell, Info } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Shilpa\'s Kitchen',
  description: 'Privacy policy for Shilpa\'s Kitchen - learning how we collect, use, and protect your information.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0E0E0E] pt-24 md:pt-32">
      <main className="container mx-auto px-6 pb-20">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#F5F3EF] mb-6">
            Privacy <span className="text-[#C6A75E]">Policy</span>
          </h1>
          <p className="text-[#F5F3EF]/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website or place an order with us.
          </p>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Introductory Note */}
          <section className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#C6A75E]/20 shadow-xl">
            <div className="flex items-start gap-4 text-[#C6A75E]">
              <Shield className="w-6 h-6 mt-1 flex-shrink-0" />
              <p className="text-[#F5F3EF]/90 text-lg leading-relaxed italic">
                "Welcome to Shilpa's Kitchen. We are committed to protecting your personal data and ensuring transparency in how we handle customer information."
              </p>
            </div>
          </section>

          {/* 1. Information We Collect */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C6A75E]/10 rounded-full flex items-center justify-center text-[#C6A75E]">
                <User className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF]">1. Information We Collect</h2>
            </div>
            <div className="pl-13 text-[#F5F3EF]/70">
              <p className="mb-4">We may collect the following customer information:</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Name",
                  "Mobile number",
                  "Delivery address",
                  "Email address",
                  "Payment details (for online payments)",
                  "Order details and purchase history"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-[#1a1a1a] p-4 rounded-xl border border-[#C6A75E]/10">
                    <div className="w-2 h-2 rounded-full bg-[#C6A75E]"></div>
                    <span className="text-[#F5F3EF]/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 2. How We Use Your Information */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C6A75E]/10 rounded-full flex items-center justify-center text-[#C6A75E]">
                <Database className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF]">2. How We Use Your Information</h2>
            </div>
            <div className="pl-13 text-[#F5F3EF]/70 space-y-4">
              <p>Your information is used for:</p>
              <ul className="space-y-3">
                {[
                  "Processing and delivering orders",
                  "Customer support and communication",
                  "Order updates and confirmations",
                  "Improving our products and services",
                  "Sending offers or promotional updates (only when applicable)"
                ].map((use, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C6A75E] mt-2 flex-shrink-0"></div>
                    <span>{use}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 3. Payment Information */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C6A75E]/10 rounded-full flex items-center justify-center text-[#C6A75E]">
                <CreditCard className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF]">3. Payment Information</h2>
            </div>
            <div className="pl-13 text-[#F5F3EF]/70 space-y-4">
              <p>Online payments are processed through secure third-party payment providers.</p>
              <div className="p-4 bg-[#C6A75E]/5 border-l-4 border-[#C6A75E] text-[#F5F3EF]/90 italic">
                Shilpa’s Kitchen does not store your card or banking details on our servers.
              </div>
            </div>
          </section>

          {/* 4. Sharing of Information */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C6A75E]/10 rounded-full flex items-center justify-center text-[#C6A75E]">
                <Share2 className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF]">4. Sharing of Information</h2>
            </div>
            <div className="pl-13 text-[#F5F3EF]/70 space-y-4">
              <p>We do not sell, rent, or trade customer information to third parties.</p>
              <p>Customer data may only be shared with:</p>
              <div className="flex flex-wrap gap-3">
                {["Delivery partners", "Payment service providers", "Government authorities if legally required"].map((partner, idx) => (
                  <span key={idx} className="bg-[#1a1a1a] px-4 py-1.5 rounded-lg border border-[#C6A75E]/20 text-sm text-[#F5F3EF]/90">
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* 5. Data Security */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C6A75E]/10 rounded-full flex items-center justify-center text-[#C6A75E]">
                <Lock className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF]">5. Data Security</h2>
            </div>
            <div className="pl-13 text-[#F5F3EF]/70 space-y-4">
              <p>We take reasonable steps to protect customer information from unauthorized access, misuse, or disclosure.</p>
              <p className="bg-[#1a1a1a] p-4 rounded-xl border border-[#C6A75E]/10 text-sm">
                <span className="text-[#C6A75E] font-bold">Note:</span> While we strive to protect your data, no online platform can guarantee 100% security.
              </p>
            </div>
          </section>

          {/* 6. Cookies & Website Usage */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C6A75E]/10 rounded-full flex items-center justify-center text-[#C6A75E]">
                <Cookie className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF]">6. Cookies & Website Usage</h2>
            </div>
            <div className="pl-13 text-[#F5F3EF]/70 space-y-4">
              <p>Our website may use cookies or basic analytics tools to improve website performance and user experience.</p>
              <p>Users may disable cookies through their browser settings if preferred.</p>
            </div>
          </section>

          {/* 7. Customer Rights */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C6A75E]/10 rounded-full flex items-center justify-center text-[#C6A75E]">
                <Bell className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF]">7. Customer Rights</h2>
            </div>
            <div className="pl-13 text-[#F5F3EF]/70">
              <p className="mb-4">Customers may request to:</p>
              <ul className="space-y-3">
                {["Update personal information", "Correct incorrect details", "Remove contact information from promotional communication"].map((right, idx) => (
                  <li key={idx} className="flex items-center gap-3 bg-[#1a1a1a] p-3 rounded-lg border border-[#C6A75E]/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C6A75E]"></div>
                    <span>{right}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 8. Children’s Privacy */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C6A75E]/10 rounded-full flex items-center justify-center text-[#C6A75E]">
                <Shield className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF]">8. Children’s Privacy</h2>
            </div>
            <div className="pl-13 text-[#F5F3EF]/70">
              <p>Our services are not intended for children under the age of 18 without parental supervision.</p>
            </div>
          </section>

          {/* 9. Changes to Privacy Policy */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C6A75E]/10 rounded-full flex items-center justify-center text-[#C6A75E]">
                <Bell className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF]">9. Changes to Privacy Policy</h2>
            </div>
            <div className="pl-13 text-[#F5F3EF]/70">
              <p>Shilpa’s Kitchen reserves the right to update or modify this Privacy Policy at any time without prior notice.</p>
            </div>
          </section>

          {/* 10. Contact Us */}
          <section className="bg-gradient-to-br from-[#1a1a1a] to-[#0E0E0E] p-8 md:p-12 rounded-3xl border border-[#C6A75E]/30 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C6A75E]/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-[#C6A75E]/10 transition-colors"></div>
            
            <h2 className="text-3xl font-bold text-[#F5F3EF] mb-8">10. Contact Us</h2>
            <p className="text-[#F5F3EF]/70 mb-8">
              For any privacy-related questions or concerns, please contact us:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 group/item">
                  <div className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center border border-[#C6A75E]/30 text-[#C6A75E] group-hover/item:bg-[#C6A75E] group-hover/item:text-[#0E0E0E] transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-[#F5F3EF]/50">Phone</div>
                    <a href="tel:+919377732558" className="text-[#F5F3EF] font-semibold hover:text-[#C6A75E] transition-colors">+91 93777 32558</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group/item">
                  <div className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center border border-[#C6A75E]/30 text-[#C6A75E] group-hover/item:bg-[#C6A75E] group-hover/item:text-[#0E0E0E] transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-[#F5F3EF]/50">Email</div>
                    <a href="mailto:hello@shilpaskitchen.in" className="text-[#F5F3EF] font-semibold hover:text-[#C6A75E] transition-colors">hello@shilpaskitchen.in</a>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group/item">
                  <div className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center border border-[#C6A75E]/30 text-[#C6A75E] group-hover/item:bg-[#C6A75E] group-hover/item:text-[#0E0E0E] transition-all">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-[#F5F3EF]/50">Website</div>
                    <a href="https://shilpaskitchen.in" className="text-[#F5F3EF] font-semibold hover:text-[#C6A75E] transition-colors">shilpaskitchen.in</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
