"use client";

import { useState } from "react";
import Image from "next/image";
import { CartProvider, useCart } from "@/contexts/CartContext";
import FloatingCartButton from "@/components/cart/FloatingCartButton";
import Cart from "@/components/cart/Cart";
import { products } from "@/data/products";

function ProductsPage({
  isVerified,
  onVerify,
}: {
  isVerified: boolean;
  onVerify: () => void;
}) {
  const { addToCart } = useCart();
  const [filter, setFilter] = useState("all");

  const categories = [
  { label: "All", value: "all" },
  { label: "Edibles", value: "edibles" },
  { label: "Cookies Melrose", value: "cookies-melrose" },
  { label: "Cartridges", value: "cartridges" },
  { label: "Vape Pens", value: "vape-pens" },
  { label: "CBD Gummies", value: "cbd-gummies" },
  { label: "CBD Oil", value: "cbd-oil" },
  { label: "Concentrates", value: "concentrates" },
  { label: "Magic Mushrooms", value: "magic-mushrooms" },
  { label: "Pills", value: "pills" },
  { label: "Prerolls", value: "prerolls" },
  { label: "Hash", value: "hash" },
  { label: "Delta 8 Cartridges", value: "delta-8-cartridges" },
  { label: "Delta 8 Disposable Carts", value: "delta-8-disposable-carts" },
  { label: "Crumble", value: "crumble" },
  { label: "Cannabis Seeds", value: "cannabis-seeds" },
  { label: "Dried Psilocybin Mushrooms", value: "dried-psilocybin-mushrooms" },
  { label: "Hybrid", value: "hybrid" },
  { label: "Indica Strain", value: "indica-strain" },
  { label: "Runtz", value: "runtz" },
  { label: "Sativa Strain", value: "sativa-strain" },
  { label: "Wax", value: "wax" },
];


  const filteredProducts =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <main className="min-h-screen pt-24 bg-black text-white">
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-12 tracking-widest">
            STORE
          </h1>

          {/* FILTER BUTTONS */}
          <div className="flex justify-center gap-4 mb-14 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={`px-5 py-2 uppercase tracking-wide border transition-all ${
                  filter === cat.label
                    ? "bg-white text-black border-white"
                    : "border-gray-500 text-gray-300 hover:bg-white hover:text-black"
                }`}
                onClick={() => setFilter(cat.label)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-14">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h2 className="mt-4 font-semibold uppercase tracking-wide text-center text-[15px]">
                  {product.name}
                </h2>

                <p className="text-center text-gray-400 mt-1">
                  {product.description}
                </p>

                <div className="mt-2 flex flex-col gap-[16px] items-center">
                  <p className="text-center mt-3 text-white  font-bold">
                    ${product.price.toFixed(2)}
                  </p>
                  <button
                    onClick={() =>
                      addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                      })
                    }
                    className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Add to Bag
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FloatingCartButton />
      <Cart />
    </main>
  );
}

export default function ProductsListing() {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <CartProvider>
      <ProductsPage
        isVerified={isVerified}
        onVerify={() => setIsVerified(true)}
      />
    </CartProvider>
  );
}
