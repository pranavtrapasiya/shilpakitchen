import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, ShieldCheck, AlertCircle, Clock, CreditCard, XCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Return & Refund Policy | Shilpa\'s Kitchen',
  description: 'Our policy regarding returns, refunds, and cancellations for homemade snacks and food products from Shilpa\'s Kitchen.',
  alternates: {
    canonical: '/return-and-refund-policy',
  },
};

export default function ReturnRefundPolicy() {
  return (
    <div className="min-h-screen bg-[#0E0E0E] pt-24 md:pt-32">
      <main className="container mx-auto px-6 pb-20">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#F5F3EF] mb-6">
            Return & <span className="text-[#C6A75E]">Refund Policy</span>
          </h1>
          <p className="text-[#F5F3EF]/70 text-lg leading-relaxed">
            Welcome to Shilpa's Kitchen. We are committed to delivering fresh, hygienic, and high-quality homemade snacks and food products.
          </p>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Introductory Note */}
          <section className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#C6A75E]/20 shadow-xl">
            <div className="flex items-start gap-4 text-[#C6A75E]">
              <ShieldCheck className="w-6 h-6 mt-1 flex-shrink-0" />
              <p className="text-[#F5F3EF]/90 text-lg leading-relaxed italic">
                "Since our products are edible and perishable in nature, our return and refund policy is designed to ensure the highest standards of food safety and hygiene."
              </p>
            </div>
          </section>

          {/* 1. No Return Policy */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C6A75E]/10 rounded-full flex items-center justify-center text-[#C6A75E]">
                <XCircle className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF]">1. No Return Policy</h2>
            </div>
            <div className="pl-13 text-[#F5F3EF]/70 space-y-4">
              <p>
                Due to food safety and hygiene reasons, we <strong>do not accept returns or exchanges</strong> once the product has been delivered.
              </p>
              <p className="bg-[#C6A75E]/5 border-l-4 border-[#C6A75E] p-4 text-[#F5F3EF]/90 italic">
                Please check your order carefully at the time of delivery or pickup.
              </p>
            </div>
          </section>

          {/* 2. Eligible Cases for Refund or Replacement */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C6A75E]/10 rounded-full flex items-center justify-center text-[#C6A75E]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF]">2. Eligible Cases for Refund or Replacement</h2>
            </div>
            <div className="pl-13 text-[#F5F3EF]/70">
              <p className="mb-4">We may offer a refund or replacement only in the following situations:</p>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  "Wrong product delivered",
                  "Missing item in the order",
                  "Expired or spoiled product received"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 bg-[#1a1a1a] p-4 rounded-xl border border-[#C6A75E]/10 group hover:border-[#C6A75E]/40 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-[#C6A75E]"></div>
                    <span className="text-[#F5F3EF]/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 3. Time Limit for Complaint */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C6A75E]/10 rounded-full flex items-center justify-center text-[#C6A75E]">
                <Clock className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF]">3. Time Limit for Complaint</h2>
            </div>
            <div className="pl-13 space-y-6">
              <p className="text-[#F5F3EF]/70">
                Customers must report any issue within <strong className="text-[#C6A75E]">24 hours</strong> of receiving the order.
              </p>
              <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-[#C6A75E]/20">
                <p className="text-[#F5F3EF] font-semibold mb-4">To raise a complaint, please share:</p>
                <div className="grid md:grid-cols-2 gap-3 text-[#F5F3EF]/70">
                  {[
                    "Order date & time",
                    "Customer details",
                    "Product photos",
                    "Packaging photos",
                    "Short explanation of the issue"
                  ].map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-[#C6A75E]" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 4. Refund Process */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C6A75E]/10 rounded-full flex items-center justify-center text-[#C6A75E]">
                <CreditCard className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF]">4. Refund Process</h2>
            </div>
            <div className="pl-13 text-[#F5F3EF]/70 space-y-4">
              <p>
                After verification, approved refunds will be processed within <strong className="text-[#F5F3EF]">5–7 business days</strong> to the original payment method.
              </p>
              <div className="p-4 bg-[#1a1a1a] rounded-xl border border-[#C6A75E]/10">
                <p className="text-sm uppercase tracking-wider text-[#C6A75E] mb-3">COD Order Refunds via:</p>
                <div className="flex flex-wrap gap-4">
                  {["UPI", "Bank Transfer", "Cash"].map((method, idx) => (
                    <span key={idx} className="bg-[#0E0E0E] px-4 py-1.5 rounded-full border border-[#C6A75E]/30 text-[#F5F3EF]/90">
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 5. Cancellation Policy */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C6A75E]/10 rounded-full flex items-center justify-center text-[#C6A75E]">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF]">5. Cancellation Policy</h2>
            </div>
            <div className="pl-13 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-[#C6A75E] mb-4">By Customer</h3>
                <ul className="space-y-3 text-[#F5F3EF]/70">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C6A75E] mt-2"></div>
                    <span>Orders cannot be cancelled after the products have been manufactured.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C6A75E] mt-2"></div>
                    <span>For delivery orders, cancellation is only possible before dispatch.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C6A75E] mt-2"></div>
                    <span>Once the order is shipped, cancellation is not possible.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#C6A75E] mb-4">By Shilpa's Kitchen</h3>
                <p className="mb-4 text-[#F5F3EF]/70">We reserve the right to cancel orders due to:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Product unavailability",
                    "Incorrect pricing",
                    "Delivery limitations",
                    "Suspected fraudulent activity"
                  ].map((reason, idx) => (
                    <div key={idx} className="bg-[#1a1a1a] p-4 rounded-xl border border-[#C6A75E]/10 text-[#F5F3EF]/80">
                      {reason}
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-[#F5F3EF]/70 italic">In such cases, a full refund will be provided.</p>
              </div>
            </div>
          </section>

          {/* 6. Contact Us */}
          <section className="bg-gradient-to-br from-[#1a1a1a] to-[#0E0E0E] p-8 md:p-12 rounded-3xl border border-[#C6A75E]/30 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C6A75E]/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-[#C6A75E]/10 transition-colors"></div>
            
            <h2 className="text-3xl font-bold text-[#F5F3EF] mb-8">6. Contact Us</h2>
            <p className="text-[#F5F3EF]/70 mb-8">
              For any return, refund, or order-related issue, please contact us through any of the following channels:
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
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-[#F5F3EF]/50">Location</div>
                    <div className="text-[#F5F3EF] font-semibold">Surat, Gujarat, India</div>
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
