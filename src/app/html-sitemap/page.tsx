import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { productsData } from '@/data/products';
import { Map, Gift, BookOpen, Shield, ShieldCheck, FileText, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sitemap | Shilpa\'s Kitchen',
  description: 'HTML sitemap for Shilpa\'s Kitchen - easily navigate all our authentic homemade Gujarati snacks, sweets, policies, and company pages.',
  alternates: {
    canonical: '/html-sitemap',
  },
};

export default function HtmlSitemap() {
  const products = Object.values(productsData);
  
  // Group products by category
  const categories = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, typeof products>);

  return (
    <div className="min-h-screen bg-[#0E0E0E] pt-24 md:pt-32">
      <main className="container mx-auto px-6 pb-20">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="w-16 h-16 bg-[#C6A75E]/10 rounded-full flex items-center justify-center text-[#C6A75E] mx-auto mb-6 border border-[#C6A75E]/20">
            <Map className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#F5F3EF] mb-6">
            Website <span className="text-[#C6A75E]">Sitemap</span>
          </h1>
          <p className="text-[#F5F3EF]/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Use our HTML sitemap to easily find and explore all company pages, policies, and our fresh, authentic homemade Indian snacks and sweets.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C6A75E] to-[#D4AF37] mx-auto mt-6"></div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Column 1: Main Pages & Policies */}
          <div className="space-y-8">
            <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#C6A75E]/20 shadow-xl">
              <h2 className="text-2xl font-bold text-[#C6A75E] mb-6 flex items-center gap-3">
                <BookOpen className="w-6 h-6" /> Main Navigation Pages
              </h2>
              <ul className="space-y-4">
                {[
                  { label: 'Home Page', href: '/' },
                  { label: 'Our Full Snack Catalog', href: '/products' },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between p-3 rounded-xl bg-[#0E0E0E]/50 border border-[#C6A75E]/10 hover:border-[#C6A75E] text-[#F5F3EF] hover:text-[#C6A75E] transition-all duration-300 group"
                    >
                      <span className="font-medium">{item.label}</span>
                      <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#C6A75E]/20 shadow-xl">
              <h2 className="text-2xl font-bold text-[#C6A75E] mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6" /> Company Policies
              </h2>
              <ul className="space-y-4">
                {[
                  { label: 'Privacy Policy', href: '/privacy-policy', icon: ShieldCheck },
                  { label: 'Terms & Services', href: '/terms-and-services', icon: FileText },
                  { label: 'Return & Refund Policy', href: '/return-and-refund-policy', icon: FileText },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="flex items-center justify-between p-3 rounded-xl bg-[#0E0E0E]/50 border border-[#C6A75E]/10 hover:border-[#C6A75E] text-[#F5F3EF] hover:text-[#C6A75E] transition-all duration-300 group"
                      >
                        <span className="flex items-center gap-3 font-medium">
                          <Icon className="w-4 h-4 text-[#C6A75E]" />
                          {item.label}
                        </span>
                        <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Column 2: Products grouped by Category */}
          <div className="space-y-8">
            <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#C6A75E]/20 shadow-xl h-full">
              <h2 className="text-2xl font-bold text-[#C6A75E] mb-6 flex items-center gap-3">
                <Gift className="w-6 h-6" /> Dynamic Product Detail Pages
              </h2>
              
              <div className="space-y-8">
                {Object.entries(categories).map(([categoryName, items]) => (
                  <div key={categoryName} className="space-y-3">
                    <h3 className="text-lg font-bold text-[#F5F3EF] border-b border-[#C6A75E]/20 pb-2">
                      {categoryName}
                    </h3>
                    <ul className="space-y-2 pl-2">
                      {items.map((item) => (
                        <li key={item.slug}>
                          <Link
                            href={`/${item.slug}`}
                            className="flex items-center justify-between py-2 text-[#F5F3EF]/80 hover:text-[#C6A75E] transition-colors group text-sm"
                          >
                            <span>{item.name} ({item.weight})</span>
                            <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0.5 transition-all" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
