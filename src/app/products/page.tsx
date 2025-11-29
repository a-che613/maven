"use client";

import { useState } from "react";
import Image from "next/image";
import { CartProvider, useCart } from "@/contexts/CartContext";
import FloatingCartButton from "@/components/cart/FloatingCartButton";
import Cart from "@/components/cart/Cart";
// import { products } from "@/data/products";

function ProductsPage({
  isVerified,
  onVerify,
}: {
  isVerified: boolean;
  onVerify: () => void;
}) {
  const { addToCart } = useCart();
  const [filter, setFilter] = useState("all");

  const products = [
    // -----------------------------
    // 🌿 FLOWER (10 items)
    // -----------------------------
    {
      id: "f1",
      name: "French Lotus",
      category: "flower",
      price: 250,
      image: "/placeholder.svg",
      description: "A classic indica strain with earthy pine aromas.",
    },
    {
      id: "f2",
      name: "Silver Mist",
      category: "flower",
      price: 220,
      image: "/placeholder.svg",
      description: "Balanced hybrid with cool citrus undertones.",
    },
    {
      id: "f3",
      name: "Emerald Dream",
      category: "flower",
      price: 280,
      image: "/placeholder.svg",
      description: "Energetic sativa for daytime focus.",
    },
    {
      id: "f4",
      name: "Berry Kush",
      category: "flower",
      price: 260,
      image: "/placeholder.svg",
      description: "Sweet berry aroma with deep relaxing effects.",
    },
    {
      id: "f5",
      name: "Lemon Burst",
      category: "flower",
      price: 240,
      image: "/placeholder.svg",
      description: "Bright citrus-forward sativa strain.",
    },
    {
      id: "f6",
      name: "Purple Nova",
      category: "flower",
      price: 300,
      image: "/placeholder.svg",
      description: "Heavy indica with grape and lavender notes.",
    },
    {
      id: "f7",
      name: "Sunset Haze",
      category: "flower",
      price: 270,
      image: "/placeholder.svg",
      description: "Smooth hybrid with hazy tropical aroma.",
    },
    {
      id: "f8",
      name: "Desert Flame",
      category: "flower",
      price: 255,
      image: "/placeholder.svg",
      description: "Fiery orange hairs with uplifting effects.",
    },
    {
      id: "f9",
      name: "Ocean Breeze",
      category: "flower",
      price: 230,
      image: "/placeholder.svg",
      description: "Relaxing hybrid with cool mint aroma.",
    },
    {
      id: "f10",
      name: "Nightshade OG",
      category: "flower",
      price: 310,
      image: "/placeholder.svg",
      description: "Potent OG with earthy skunk profile.",
    },

    {
      id: "101",
      name: "Wedding Cake",
      category: "flower",
      price: 260.0,
      image: "/placeholder.svg",
      description: "Popular hybrid strain known for its sweet vanilla aroma.",
    },
    {
      id: "102",
      name: "Permanent Marker",
      category: "flower",
      price: 275.0,
      image: "/placeholder.svg",
      description: "Strong hybrid with pungent and gassy undertones.",
    },
    {
      id: "103",
      name: "Lemon Cherry Gelato",
      category: "flower",
      price: 280.0,
      image: "/placeholder.svg",
      description: "Sweet citrus-forward strain with a smooth finish.",
    },
    {
      id: "104",
      name: "Blue Dream",
      category: "flower",
      price: 240.0,
      image: "/placeholder.svg",
      description: "Classic sativa-dominant hybrid with blueberry aroma.",
    },
    {
      id: "105",
      name: "Moon Fog",
      category: "flower",
      price: 270.0,
      image: "/placeholder.svg",
      description: "Dense cloudy buds with a relaxing, earthy flavor.",
    },
    {
      id: "106",
      name: "Zoap",
      category: "flower",
      price: 290.0,
      image: "/placeholder.svg",
      description: "Highly sought-after hybrid with bright fruity notes.",
    },
    {
      id: "107",
      name: "Tangie",
      category: "flower",
      price: 250.0,
      image: "/placeholder.svg",
      description:
        "Citrus-heavy sativa strain known for its strong orange aroma.",
    },
    {
      id: "108",
      name: "Gary Payton",
      category: "flower",
      price: 300.0,
      image: "/placeholder.svg",
      description:
        "Potent hybrid named after NBA legend, known for strong effects.",
    },
    {
      id: "109",
      name: "RS11 (Rainbow Sherbet #11)",
      category: "flower",
      price: 295.0,
      image: "/placeholder.svg",
      description:
        "Flavorful hybrid combining sweet fruit with creamy undertones.",
    },
    {
      id: "110",
      name: "Super Runtz",
      category: "flower",
      price: 285.0,
      image: "/placeholder.svg",
      description: "Premium Runtz variant with strong candy-like flavor.",
    },
    {
      id: "111",
      name: "Blackberry Caviar",
      category: "flower",
      price: 310.0,
      image: "/placeholder.svg",
      description: "Luxurious exotic strain with rich berry flavor.",
    },
    {
      id: "112",
      name: "Apple Fritter",
      category: "flower",
      price: 270.0,
      image: "/placeholder.svg",
      description: "Sweet dessert-like aroma with balanced hybrid effects.",
    },

    // -----------------------------
    // 🚬 PRE-ROLLS (10 items)
    // -----------------------------
    {
      id: "11",
      name: "Goldie Mini",
      category: "pre-rolls",
      price: 150.0,
      image: "/placeholder.svg",
      description: "Smooth burn pre-roll packed with premium indoor flower.",
    },
    {
      id: "12",
      name: "Night Cap Roll",
      category: "pre-rolls",
      price: 180.0,
      image: "/placeholder.svg",
      description: "Indica-leaning pre-roll perfect for relaxation.",
    },
    {
      id: "13",
      name: "Citrus Spark Roll",
      category: "pre-rolls",
      price: 160.0,
      image: "/placeholder.svg",
      description: "Light citrus aroma with a smooth smoke.",
    },
    {
      id: "14",
      name: "Midnight Jet",
      category: "pre-rolls",
      price: 170.0,
      image: "/placeholder.svg",
      description: "Fast-hitting indica for nighttime wind-down.",
    },
    {
      id: "15",
      name: "Island Breeze Roll",
      category: "pre-rolls",
      price: 190.0,
      image: "/placeholder.svg",
      description: "Tropical-scented roll ideal for chill sessions.",
    },
    {
      id: "16",
      name: "Velvet Rush Pre-Roll",
      category: "pre-rolls",
      price: 165.0,
      image: "/placeholder.svg",
      description: "Hybrid blend offering a balanced uplift.",
    },
    {
      id: "17",
      name: "Sunset Twist",
      category: "pre-rolls",
      price: 175.0,
      image: "/placeholder.svg",
      description: "Relaxing evening pre-roll with sweet undertones.",
    },
    {
      id: "18",
      name: "Green Thunder Roll",
      category: "pre-rolls",
      price: 150.0,
      image: "/placeholder.svg",
      description: "Powerful hybrid delivering consistent smooth hits.",
    },
    {
      id: "19",
      name: "Berry Smooth Pre-Roll",
      category: "pre-rolls",
      price: 185.0,
      image: "/placeholder.svg",
      description: "Sweet berry aroma with calming effects.",
    },
    {
      id: "20",
      name: "Classic Heritage Roll",
      category: "pre-rolls",
      price: 160.0,
      image: "/placeholder.svg",
      description: "Rich earthy profile crafted with premium strains.",
    },

    // -----------------------------
    // 🧪 CONCENTRATES (10 items)
    // -----------------------------
    ...[
      "Amber Wax",
      "Crystal Shatter",
      "Diamond Sauce",
      "Golden Resin",
      "Velvet Crumble",
      "Pure Extract Shatter",
      "Terp Crystal Melt",
      "Sunset Live Resin",
      "Gold Flake Extract",
      "Fire Shatter",
    ].map((name, i) => ({
      id: `${21 + i}`,
      name,
      category: "concentrates",
      price: [300, 320, 350, 310, 330, 340, 360, 355, 345, 370][i],
      image: "/placeholder.svg",
      description: "",
    })),

    // -----------------------------
    // 💨 VAPES (10 items)
    // -----------------------------
    ...[
      "Alchemy Pineapple Vape",
      "Mint Breeze Disposable",
      "Citrus Burst Vape",
      "Berry Frost Cartridge",
      "Vanilla Cloud Vape",
      "Arctic Storm Disposable",
      "Cosmic Peach Vape",
      "Lemon Rush Pen",
      "Deep Night Indica Vape",
      "Skyfall Sativa Pen",
    ].map((name, i) => ({
      id: `${31 + i}`,
      name,
      category: "vapes",
      price: [350, 300, 320, 315, 340, 325, 330, 310, 360, 345][i],
      image: "/placeholder.svg",
      description: "",
    })),
  ];

  const categories = [
    { label: "All", value: "all" },
    { label: "Flower", value: "flower" },
    { label: "Pre-Rolls", value: "pre-rolls" },
    { label: "Concentrates", value: "concentrates" },
    { label: "Vapes", value: "vapes" },
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
                  filter === cat.value
                    ? "bg-white text-black border-white"
                    : "border-gray-500 text-gray-300 hover:bg-white hover:text-black"
                }`}
                onClick={() => setFilter(cat.value)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={"/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h2 className="mt-4 text-xl font-semibold uppercase tracking-wide text-center">
                  {product.name}
                </h2>

                <p className="text-center text-gray-400 mt-1">
                  {product.description}
                </p>

                <div className="mt-4 flex justify-between items-center">
                  <p className="text-center mt-3 text-white text-lg font-bold">
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
