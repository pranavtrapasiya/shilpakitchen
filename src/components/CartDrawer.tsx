'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { WhatsAppIcon } from '@/lib/whatsapp';

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    cartTotal,
    checkoutWhatsApp,
    clearCart,
  } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black z-50 backdrop-blur-sm cursor-pointer"
          />

          {/* Drawer Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: 'easeOut' }}
            className="fixed top-0 right-0 h-full w-full sm:w-[480px] bg-[#0E0E0E] text-[#F5F3EF] border-l border-[#C6A75E]/20 z-55 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-[#C6A75E]/20 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <ShoppingBag className="w-6 h-6 text-[#C6A75E]" />
                <h2 className="text-xl font-bold tracking-wide">Your Snacks Bag</h2>
              </div>
              <div className="flex items-center space-x-4">
                {cartItems.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-xs text-[#F5F3EF]/50 hover:text-[#C6A75E] transition-colors border border-[#F5F3EF]/10 hover:border-[#C6A75E]/30 px-3 py-1 rounded-full"
                  >
                    Clear All
                  </button>
                )}
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1 rounded-full hover:bg-[#1A1A1A] transition-colors border border-transparent hover:border-[#C6A75E]/20"
                  aria-label="Close cart"
                >
                  <X className="w-6 h-6 text-[#F5F3EF]" />
                </button>
              </div>
            </div>

            {/* Scrollable Cart Items Container */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-20 h-20 bg-[#1A1A1A] rounded-full border border-[#C6A75E]/20 flex items-center justify-center text-[#C6A75E]/50">
                    <ShoppingBag className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Your bag is empty</h3>
                    <p className="text-sm text-[#F5F3EF]/50 mt-1 max-w-[280px]">
                      Add delicious, fresh homemade Gujarati snacks to start ordering.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="px-6 py-2.5 bg-gradient-to-r from-[#C6A75E] to-[#D4AF37] text-[#0E0E0E] font-bold rounded-full transition-transform duration-200 active:scale-95"
                  >
                    Browse snacks
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.slug}
                    className="flex space-x-4 bg-[#1A1A1A]/80 p-4 rounded-xl border border-[#C6A75E]/10"
                  >
                    {/* Thumbnail Image */}
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden border border-[#C6A75E]/10 shrink-0 bg-[#0e0e0e]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>

                    {/* Product Details & Quantities */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-base leading-tight text-[#F5F3EF]">
                            {item.name}
                          </h4>
                          <span className="text-xs text-[#F5F3EF]/60 mt-1 inline-block">
                            Pack: {item.weight}
                          </span>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.slug)}
                          className="text-[#F5F3EF]/40 hover:text-[#ff4d4d] transition-colors p-1"
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Controls */}
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center space-x-2 border border-[#C6A75E]/30 rounded-full bg-[#0E0E0E] px-2 py-0.5">
                          <button
                            onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                            className="p-1 hover:text-[#C6A75E] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-sm font-semibold w-6 text-center text-[#F5F3EF]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                            className="p-1 hover:text-[#C6A75E] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <span className="font-bold text-base text-[#C6A75E]">
                          ₹{item.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Summary & Checkout */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-[#C6A75E]/20 bg-[#141414] space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-base text-[#F5F3EF]/70">
                    <span>Order items:</span>
                    <span>{cartItems.reduce((acc, item) => acc + item.quantity, 0)} items</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-[#F5F3EF]">Subtotal Bill:</span>
                    <span className="text-2xl font-bold text-[#C6A75E]">₹{cartTotal}</span>
                  </div>
                </div>

                <div className="text-xs text-[#F5F3EF]/50 leading-relaxed text-center px-4">
                  ⚠️ Note: Deliveries and customized pricing details will be finalized via WhatsApp.
                </div>

                {/* Checkout Button */}
                <button
                  onClick={checkoutWhatsApp}
                  className="w-full flex items-center justify-center space-x-2 py-4 bg-[#25D366] hover:bg-[#1ebd5e] text-[#0E0E0E] font-bold text-lg rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(37,211,102,0.2)] hover:shadow-[0_4px_25px_rgba(37,211,102,0.3)] hover:-translate-y-0.5 active:translate-y-0"
                >
                  <WhatsAppIcon className="w-6 h-6 shrink-0" />
                  <span>Checkout on WhatsApp</span>
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
