import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Truck, Clock, ShieldCheck, AlertCircle, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Shipping Policy | Shilpa\'s Kitchen',
  description: 'Our shipping policy regarding order processing times, delivery charges, transit times, and tracking for Shilpa\'s Kitchen.',
  alternates: {
    canonical: '/shipping-policy',
  },
};

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-[#0E0E0E] pt-24 md:pt-32">
      <main className="container mx-auto px-6 pb-20">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#F5F3EF] mb-6">
            Shipping <span className="text-[#C6A75E]">Policy</span>
          </h1>
          <p className="text-[#F5F3EF]/70 text-lg leading-relaxed max-w-2xl mx-auto">
            We strive to deliver our freshly made, high-quality traditional snacks and sweets right to your doorstep under the safest and most hygienic conditions.
          </p>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Introductory Note */}
          <section className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#C6A75E]/20 shadow-xl">
            <div className="flex items-start gap-4 text-[#C6A75E]">
              <Truck className="w-6 h-6 mt-1 flex-shrink-0" />
              <p className="text-[#F5F3EF]/90 text-lg leading-relaxed italic">
                "To ensure maximum freshness, all our snacks are made to order or in small daily batches, then packed using premium air-tight packaging to preserve their authentic taste."
              </p>
            </div>
          </section>

          {/* 1. Shipping Scope & Regions */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C6A75E]/10 rounded-full flex items-center justify-center text-[#C6A75E]">
                <MapPin className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF]">1. Shipping Scope & Regions</h2>
            </div>
            <div className="pl-13 text-[#F5F3EF]/70 space-y-4">
              <p>
                We currently ship to all major cities and pin codes across <strong>India</strong>.
              </p>
              <p>
                For local orders within <strong>Surat</strong>, express same-day or next-day delivery options are available via local logistics partners.
              </p>
            </div>
          </section>

          {/* 2. Order Processing & Handling Time */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C6A75E]/10 rounded-full flex items-center justify-center text-[#C6A75E]">
                <Clock className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF]">2. Order Processing & Handling Time</h2>
            </div>
            <div className="pl-13 text-[#F5F3EF]/70 space-y-4">
              <p>
                Since we value quality and freshness, many of our snacks are prepared fresh once an order is placed:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C6A75E] mt-2 flex-shrink-0"></div>
                  <span><strong>Handling Time:</strong> 1 to 2 business days (Monday to Saturday).</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C6A75E] mt-2 flex-shrink-0"></div>
                  <span>Orders placed on Sundays or public holidays will be processed on the next business day.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C6A75E] mt-2 flex-shrink-0"></div>
                  <span>You will receive an SMS or WhatsApp update once your order has been dispatched with tracking details.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* 3. Delivery Rates & Shipping Charges */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C6A75E]/10 rounded-full flex items-center justify-center text-[#C6A75E]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF]">3. Delivery Rates & Shipping Charges</h2>
            </div>
            <div className="pl-13 text-[#F5F3EF]/70 space-y-4">
              <p>We believe in honest and transparent pricing. There are no hidden fees at checkout:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[#1a1a1a] p-5 rounded-xl border border-[#C6A75E]/10">
                  <h3 className="text-[#C6A75E] font-semibold mb-2">Orders Below ₹500</h3>
                  <p className="text-sm text-[#F5F3EF]/70">
                    A flat shipping fee of <strong>₹50</strong> will be charged at checkout.
                  </p>
                </div>
                <div className="bg-[#1a1a1a] p-5 rounded-xl border border-[#C6A75E]/10">
                  <h3 className="text-[#C6A75E] font-semibold mb-2">Orders Above ₹500</h3>
                  <p className="text-sm text-[#F5F3EF]/70">
                    <strong>FREE SHIPPING</strong> is automatically applied to your cart.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Transit & Delivery Estimates */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C6A75E]/10 rounded-full flex items-center justify-center text-[#C6A75E]">
                <Truck className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF]">4. Transit & Delivery Estimates</h2>
            </div>
            <div className="pl-13 text-[#F5F3EF]/70 space-y-4">
              <p>Estimated transit times after order dispatch:</p>
              <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-[#C6A75E]/20 space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-[#C6A75E]/10">
                  <span className="font-semibold text-[#F5F3EF]">Surat (Local)</span>
                  <span className="text-[#C6A75E] font-bold">12 to 24 Hours</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-[#C6A75E]/10">
                  <span className="font-semibold text-[#F5F3EF]">Gujarat (Statewide)</span>
                  <span className="text-[#C6A75E] font-bold">1 to 2 Business Days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-[#F5F3EF]">Rest of India</span>
                  <span className="text-[#C6A75E] font-bold">3 to 5 Business Days</span>
                </div>
              </div>
              <p className="text-xs italic text-[#F5F3EF]/50">
                Note: Delivery timelines are estimates and may occasionally be delayed due to extreme weather, regional festivals, or courier service disruptions.
              </p>
            </div>
          </section>

          {/* 5. Address Policy & Delivery Failures */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C6A75E]/10 rounded-full flex items-center justify-center text-[#C6A75E]">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF]">5. Address Policy & Delivery Failures</h2>
            </div>
            <div className="pl-13 text-[#F5F3EF]/70 space-y-4">
              <p>
                Customers are requested to provide extremely accurate delivery addresses, pin codes, and active mobile numbers.
              </p>
              <p>
                We are not responsible for delivery failures or returned parcels due to:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Incorrect or incomplete addresses</li>
                <li>Customer unavailable at the time of delivery attempts</li>
                <li>Refused packages</li>
              </ul>
            </div>
          </section>

          {/* 6. Lost, Stolen, or Damaged Shipments */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C6A75E]/10 rounded-full flex items-center justify-center text-[#C6A75E]">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F5F3EF]">6. Lost, Stolen, or Damaged Shipments</h2>
            </div>
            <div className="pl-13 text-[#F5F3EF]/70 space-y-4">
              <p>
                We take immense care in packing your orders. However, if your package arrives physically damaged or is lost in transit:
              </p>
              <p>
                Please report the issue to us at <a href="mailto:shilpaskitchen24@gmail.com" className="text-[#C6A75E] hover:underline">shilpaskitchen24@gmail.com</a> within <strong>24 hours</strong> of receiving the box. Include your Order Number and photos of the damaged package.
              </p>
              <p>
                For further details on replacements and refunds, please review our <a href="/return-and-refund-policy" className="text-[#C6A75E] hover:underline">Return & Refund Policy</a>.
              </p>
            </div>
          </section>

          {/* 7. Contact Us */}
          <section className="bg-gradient-to-br from-[#1a1a1a] to-[#0E0E0E] p-8 md:p-12 rounded-3xl border border-[#C6A75E]/30 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C6A75E]/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-[#C6A75E]/10 transition-colors"></div>
            
            <h2 className="text-3xl font-bold text-[#F5F3EF] mb-8">7. Shipping Queries & Support</h2>
            <p className="text-[#F5F3EF]/70 mb-8">
              Need updates on your shipped parcel or have a special bulk delivery request? Contact us:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 group/item">
                  <div className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center border border-[#C6A75E]/30 text-[#C6A75E] group-hover/item:bg-[#C6A75E] group-hover/item:text-[#0E0E0E] transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-[#F5F3EF]/50">Phone / WhatsApp</div>
                    <a href="tel:+919377732558" className="text-[#F5F3EF] font-semibold hover:text-[#C6A75E] transition-colors">+91 93777 32558</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group/item">
                  <div className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center border border-[#C6A75E]/30 text-[#C6A75E] group-hover/item:bg-[#C6A75E] group-hover/item:text-[#0E0E0E] transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-[#F5F3EF]/50">Email Support</div>
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
                    <div className="text-sm text-[#F5F3EF]/50">Physical Shop Address</div>
                    <div className="text-[#F5F3EF] font-semibold">40, Alkapuri Society, Sumul Dairy Road, Katargam, Surat, Gujarat - 395004</div>
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
