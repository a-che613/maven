'use client';

import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export default function FloatingCartButton() {
  const { cartCount, toggleCart } = useCart();

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <button
        type="button"
        onClick={toggleCart}
        className="bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors relative"
        aria-label="Open cart"
      >
        <ShoppingBag className="h-6 w-6" />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
            {cartCount > 9 ? '9+' : cartCount}
          </span>
        )}
      </button>
    </div>
  );
}
