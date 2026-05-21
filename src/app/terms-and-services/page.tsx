import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import { Mail, Phone, Globe, Shield, FileText, CreditCard, Truck, Scale, Lock, Info, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Services | Shilpa\'s Kitchen',
  description: 'Terms and conditions for using the website and services of Shilpa\'s Kitchen, Surat.',
  alternates: {
    canonical: '/terms-and-services',
  },
};

export default function TermsAndServices() {
  return (
    <div className="min-h-screen bg-[#0E0E0E] pt-24 md:pt-32">
      <main className="container mx-auto px-6 pb-20">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#F5F3EF] mb-6">
            Terms & <span className="text-[#C6A75E]">Services</span>
          </h1>
          <p className="text-[#F5F3EF]/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Welcome to Shilpa's Kitchen. By accessing or using our website and services, you agree to comply with the following Terms & Services.
          </p>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Introductory Note */}
          <section className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#C6A75E]/20 shadow-xl">
            <div className="flex items-start gap-4 text-[#C6A75E]">
              <Info className="w-6 h-6 mt-1 flex-shrink-0" />
              <p className="text-[#F5F3EF]/90 text-lg leading-relaxed">
                Please read these terms carefully before placing an order. These terms govern your use of our website and purchase of our products.
              </p>
            </div>
          </section>

          {/* 1. General Information */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C6A75E]/10 rounded-full flex items-center justify-center text-[#C6A75E]">
                <Globe className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF]">1. General Information</h2>
            </div>
            <div className="pl-13 text-[#F5F3EF]/70 space-y-4">
              <p>
                Shilpa’s Kitchen provides homemade snacks, sweets, food products, and related services through our website and offline channels.
              </p>
              <p>
                We reserve the right to update, modify, or change these terms at any time without prior notice. Continued use of our services after such changes constitutes acceptance of the new terms.
              </p>
            </div>
          </section>

          {/* 2. Product Information */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C6A75E]/10 rounded-full flex items-center justify-center text-[#C6A75E]">
                <FileText className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF]">2. Product Information</h2>
            </div>
            <div className="pl-13 text-[#F5F3EF]/70">
              <ul className="space-y-4">
                {[
                  "We try to display product images, descriptions, and prices as accurately as possible.",
                  "Actual product appearance may slightly vary due to packaging updates, lighting, or handmade preparation.",
                  "Product availability may change without notice."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-[#1a1a1a] p-4 rounded-xl border border-[#C6A75E]/10">
                    <CheckCircle2 className="w-5 h-5 text-[#C6A75E] mt-0.5 flex-shrink-0" />
                    <span className="text-[#F5F3EF]/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 3. Pricing & Payments */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C6A75E]/10 rounded-full flex items-center justify-center text-[#C6A75E]">
                <CreditCard className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF]">3. Pricing & Payments</h2>
            </div>
            <div className="pl-13 text-[#F5F3EF]/70 space-y-4">
              <p>All prices are listed in Indian Rupees (₹).</p>
              <p>Prices may change at any time without prior notice.</p>
              <div className="p-4 bg-[#1a1a1a] rounded-xl border border-[#C6A75E]/10">
                <p className="text-sm uppercase tracking-wider text-[#C6A75E] mb-3">Accepted Payment Methods:</p>
                <div className="flex flex-wrap gap-4">
                  {["Online Payments", "UPI", "Bank Transfer", "Cash on Delivery (COD)"].map((method, idx) => (
                    <span key={idx} className="bg-[#0E0E0E] px-4 py-1.5 rounded-full border border-[#C6A75E]/30 text-[#F5F3EF]/90">
                      {method}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm italic">Orders will only be processed after successful payment confirmation for prepaid orders.</p>
            </div>
          </section>

          {/* 4. Order Acceptance & Cancellation */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C6A75E]/10 rounded-full flex items-center justify-center text-[#C6A75E]">
                <Shield className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF]">4. Order Acceptance & Cancellation</h2>
            </div>
            <div className="pl-13 space-y-6">
              <p className="text-[#F5F3EF]/70">Shilpa’s Kitchen reserves the right to accept or reject any order.</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[#1a1a1a] p-5 rounded-xl border border-[#C6A75E]/10">
                  <h3 className="text-[#C6A75E] font-semibold mb-2">Cancellations</h3>
                  <ul className="text-sm text-[#F5F3EF]/70 space-y-2">
                    <li>• Cannot be cancelled after manufacturing starts</li>
                    <li>• Only possible before dispatch for delivery orders</li>
                  </ul>
                </div>
                <div className="bg-[#1a1a1a] p-5 rounded-xl border border-[#C6A75E]/10">
                  <h3 className="text-[#C6A75E] font-semibold mb-2">Right to Cancel</h3>
                  <ul className="text-sm text-[#F5F3EF]/70 space-y-2">
                    <li>• Product unavailability or incorrect pricing</li>
                    <li>• Delivery issues or suspected fraud</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Delivery Policy */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C6A75E]/10 rounded-full flex items-center justify-center text-[#C6A75E]">
                <Truck className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF]">5. Delivery Policy</h2>
            </div>
            <div className="pl-13 text-[#F5F3EF]/70 space-y-4">
              <p>Delivery timelines are estimated and may vary depending on location, weather, traffic, or festival demand.</p>
              <p>Customers must provide accurate address and contact details. We are not responsible for delays caused by incorrect customer information.</p>
            </div>
          </section>

          {/* 6. Return & Refund */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C6A75E]/10 rounded-full flex items-center justify-center text-[#C6A75E]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF]">6. Return & Refund</h2>
            </div>
            <div className="pl-13 text-[#F5F3EF]/70">
              <p>Please refer to our <Link href="/return-and-refund-policy" className="text-[#C6A75E] hover:underline">Return & Refund Policy</Link> for detailed information regarding refunds, replacements, and complaint handling.</p>
            </div>
          </section>

          {/* 7. Food Safety & Storage */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C6A75E]/10 rounded-full flex items-center justify-center text-[#C6A75E]">
                <Shield className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF]">7. Food Safety & Storage</h2>
            </div>
            <div className="pl-13 text-[#F5F3EF]/70 space-y-4">
              <p>Our products should be consumed before the recommended expiry period.</p>
              <p>Customers are responsible for proper storage after delivery. Shilpa’s Kitchen will not be responsible for product damage caused by improper storage or handling after delivery.</p>
            </div>
          </section>

          {/* 8. Intellectual Property */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C6A75E]/10 rounded-full flex items-center justify-center text-[#C6A75E]">
                <Lock className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF]">8. Intellectual Property</h2>
            </div>
            <div className="pl-13 text-[#F5F3EF]/70">
              <p>All website content including logo, product images, text, branding, and designs are property of Shilpa’s Kitchen. Unauthorized copying, reproduction, or misuse is prohibited.</p>
            </div>
          </section>

          {/* 9. Limitation of Liability */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C6A75E]/10 rounded-full flex items-center justify-center text-[#C6A75E]">
                <Scale className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF]">9. Limitation of Liability</h2>
            </div>
            <div className="pl-13 text-[#F5F3EF]/70 space-y-4">
              <p>Shilpa’s Kitchen shall not be held responsible for:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Delays caused by third-party delivery services</li>
                <li>Temporary website downtime</li>
                <li>Minor packaging differences</li>
                <li>Allergic reactions caused by ingredients not disclosed by customers before ordering</li>
              </ul>
              <p className="text-sm italic font-semibold text-[#F5F3EF]">Customers are advised to check ingredient details before consumption.</p>
            </div>
          </section>

          {/* 10. Privacy */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C6A75E]/10 rounded-full flex items-center justify-center text-[#C6A75E]">
                <Lock className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF]">10. Privacy</h2>
            </div>
            <div className="pl-13 text-[#F5F3EF]/70">
              <p>Customer information shared during ordering is used only for order processing, delivery, and customer support. We do not sell customer data to third parties.</p>
            </div>
          </section>

          {/* 11. Governing Law */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C6A75E]/10 rounded-full flex items-center justify-center text-[#C6A75E]">
                <Scale className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF]">11. Governing Law</h2>
            </div>
            <div className="pl-13 text-[#F5F3EF]/70">
              <p>These Terms & Services shall be governed by the laws of India. Any disputes shall be subject to the jurisdiction of Surat, Gujarat.</p>
            </div>
          </section>

          {/* 12. Contact Us */}
          <section className="bg-gradient-to-br from-[#1a1a1a] to-[#0E0E0E] p-8 md:p-12 rounded-3xl border border-[#C6A75E]/30 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C6A75E]/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-[#C6A75E]/10 transition-colors"></div>
            
            <h2 className="text-3xl font-bold text-[#F5F3EF] mb-8">12. Contact Us</h2>
            <p className="text-[#F5F3EF]/70 mb-8">
              For any questions regarding these Terms & Services, please contact us:
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
                    <a href="mailto:shilpaskitchen24@gmail.com" className="text-[#F5F3EF] font-semibold hover:text-[#C6A75E] transition-colors">shilpaskitchen24@gmail.com</a>
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
