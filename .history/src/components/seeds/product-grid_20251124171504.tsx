'use client';

import { useRef } from 'react';

const products = [
  {
    id: 1,
    name: 'Golden Ginger Cookies',
    image: 'https://ext.same-assets.com/1313518918/3955944305.jpeg',
  },
  {
    id: 2,
    name: 'Grease Monkey',
    image: 'https://ext.same-assets.com/1313518918/1400958033.jpeg',
  },
  {
    id: 3,
    name: 'Forbidden Fruit',
    image: 'https://ext.same-assets.com/1313518918/3697087407.jpeg',
  },
  {
    id: 4,
    name: 'Purple Punch',
    image: 'https://ext.same-assets.com/1313518918/4102508585.jpeg',
  },
  {
    id: 5,
    name: 'Wedding Cake',
    image: 'https://ext.same-assets.com/1313518918/2623973866.jpeg',
  },
  {
    id: 6,
    name: 'Gelato',
    image: 'https://ext.same-assets.com/1313518918/1642548101.jpeg',
  },
  {
    id: 7,
    name: 'Blue Dream',
    image: 'https://ext.same-assets.com/1313518918/1362026202.jpeg',
  },
  {
    id: 8,
    name: 'OG Kush',
    image: 'https://ext.same-assets.com/1313518918/2706299073.jpeg',
  },
];

export default function ProductGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-[#191919]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-wide">Featured Strains</h2>
          <div className="w-20 h-1 bg-[#c9a961] mx-auto mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our carefully curated collection of premium genetics
          </p>
        </div>

        <div className="relative group">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-black text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Product Grid */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-none w-72 bg-black rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <div className="aspect-square relative overflow-hidden bg-black">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-white text-lg font-light mb-4 tracking-wide">{product.name}</h3>
                  <button className="w-full bg-black border-2 border-white text-white py-3 rounded-md hover:bg-white hover:text-black transition-all duration-300 font-medium tracking-widest text-sm">
                    ADD TO BAG
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-black text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
