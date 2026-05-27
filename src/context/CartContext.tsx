'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { WHATSAPP_NUMBER } from '@/lib/whatsapp';

export interface CartItem {
  slug: string;
  name: string;
  price: number;
  weight: string;
  image: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addToCart: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void;
  removeFromCart: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  checkoutWhatsApp: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('sk_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart items:', e);
      }
    }
    setIsInitialized(true);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('sk_cart', JSON.stringify(cartItems));
    }
  }, [cartItems, isInitialized]);

  const addToCart = (product: Omit<CartItem, 'quantity'>, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.slug === product.slug);
      if (existingItem) {
        return prevItems.map((item) =>
          item.slug === product.slug
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
    // Automatically open the cart drawer when adding an item
    setIsCartOpen(true);
  };

  const removeFromCart = (slug: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.slug !== slug));
  };

  const updateQuantity = (slug: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(slug);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.slug === slug ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const checkoutWhatsApp = () => {
    if (cartItems.length === 0) return;

    let messageText = `*--- New Order from Shilpa's Kitchen ---*\n\n`;
    messageText += `Hi! I would like to order the following delicious homemade snacks:\n\n`;

    cartItems.forEach((item) => {
      const subtotal = item.price * item.quantity;
      messageText += `• *${item.name}* (${item.weight})\n`;
      messageText += `  Quantity: ${item.quantity} | Price: ₹${item.price}\n`;
      messageText += `  Subtotal: ₹${subtotal}\n\n`;
    });

    messageText += `--------------------------------------\n`;
    messageText += `*Total Bill:* ₹${cartTotal}\n\n`;
    messageText += `*Deliver To:*\n`;
    messageText += `Name: [Your Name Here]\n`;
    messageText += `Address: [Your Delivery Address Here]\n\n`;
    messageText += `Please confirm my order. Thank you!`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
        checkoutWhatsApp,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
