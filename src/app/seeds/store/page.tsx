'use client';

import { useState } from 'react';
import AgeVerificationModal from '@/components/seeds/age-verification';
import HeroSection from '@/components/seeds/hero-section';
import ProductGrid from '@/components/seeds/product-grid';
import AboutSection from '@/components/seeds/about-section';
import TestimonialsSection from '@/components/seeds/testimonials-section';
import { CartProvider, useCart } from '@/contexts/CartContext';
import Cart from '@/components/cart/Cart';
import FloatingCartButton from '@/components/cart/FloatingCartButton';

// Sample product data - replace with your actual products
const sampleProducts = [
  {
    id: '1',
    name: 'Diamond Lotus',
    price: 200.00,
    image: "https://ext.same-assets.com/1313518918/3955944305.jpeg",
    description: 'A sativa-dominant hybrid with a sweet berry aroma.'
  },
  {
    id: '2',
    name: 'French Lotus',
    price: 250.00,
    image: 'https://ext.same-assets.com/1313518918/1400958033.jpeg',
    description: 'A classic indica strain with earthy pine aromas.'
  },
  // {
  //   id: '3',
  //   name: 'Forbidden Fruit',
  //   price: 52.99,
  //   image: 'https://ext.same-assets.com/1313518918/3697087407.jpeg',
  //   description: 'An energizing sativa with a pungent diesel-like aroma.'
  // },
  {
    id: '4',
    name: 'Citrazul',
    price: 150.00,
    image: 'https://ext.same-assets.com/1313518918/4102508585.jpeg',
    description: 'A potent hybrid with a sweet and earthy flavor profile.'
  },
  {
    id: '5',
    name: 'Orange Sapphire',
    image: 'https://ext.same-assets.com/1313518918/2623973866.jpeg',
    price: 200.00,
    description: ""
  },
  {
    id: '6',
    name: 'Blue Lotus S1',
    image: 'https://ext.same-assets.com/1313518918/1642548101.jpeg',
    price: 200.00,
    description: ""
  },
  {
    id: '7',
    name: 'Gold Linens',
    image: 'https://ext.same-assets.com/1313518918/1362026202.jpeg',
    price: 150.00,
    description: ""
  },
  // {
  //   id: '8',
  //   name: 'OG Kush',
  //   image: 'https://ext.same-assets.com/1313518918/2706299073.jpeg',
  //   price: 59.99,
  //   description: ""
  // },
];

function StoreContent({ isVerified, onVerify }: { isVerified: boolean; onVerify: () => void }) {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-[#191919]">
      <AgeVerificationModal isOpen={!isVerified} onVerify={onVerify} />
      <main>
        <HeroSection />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {sampleProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-200">{product.name}</h3>
                {/* <p className="mt-1 text-sm text-gray-400 line-clamp-2">{product.description}</p> */}
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-lg font-medium text-white">${product.price.toFixed(2)}</p>
                  <button
                    onClick={() => addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image
                    })}
                    className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Add to Bag
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <AboutSection />
        <TestimonialsSection />
      </main>
      <FloatingCartButton />
      <Cart />
    </div>
  );
}

export default function Store() {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <CartProvider>
      <StoreContent isVerified={isVerified} onVerify={() => setIsVerified(true)} />
    </CartProvider>
  );
}
