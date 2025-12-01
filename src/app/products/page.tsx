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
      name: "AstroCandyTHCaFlower | Hybrid",
      category: "flower",
      price: 30,
      image: "/products/flowers/AstroCandyTHCaFlower-Hybrid-30.avif",
    },
    {
      id: "f2",
      name: "Blue Skunk THCa Flower | Indica",
      category: "flower",
      price: 35,
      image: "/products/flowers/BlueSkunkTHCaFlower-35.avif",
    },
    {
      id: "f3",
      name: "Cadillac Rainbows THCa flower | Hybrid",
      category: "flower",
      price: 30,
      image: "/products/flowers/CadillacRainbowsTHCaFlower-Hybrid-30.avif",
    },
    {
      id: "f4",
      name: "Dior THCa Exotic Flower | Hybrid",
      category: "flower",
      price: 35,
      image: "/products/flowers/DiorTHCaExoticFlower-Hybrid-35.avif",
    },
    {
      id: "f5",
      name: "Gary Payton THCa Flower | Hybrid",
      category: "flower",
      price: 35,
      image: "/products/flowers/GaryPaytonTHCaFlower-Hybrid-35.avif",
    },
    {
      id: "f6",
      name: "Gelato Cake THCP Infused Flower | Indica",
      category: "flower",
      price: 30,
      image: "/products/flowers/GelatoCakeTHCPInfusedFlower-30.avif",
    },
    {
      id: "f7",
      name: "Gelonade THCa Exotic Flower | Indica",
      category: "flower",
      price: 35,
      image: "/products/flowers/GelonadeTHCaExoticFlower-35.avif",
    },
    {
      id: "f8",
      name: "London Jealousy THCa Flower | Indica",
      category: "flower",
      price: 35,
      image: "/products/flowers/LondonJealousyTHCaFlower-35.avif",
    },
    {
      id: "f9",
      name: "Oreoz THCa Flower | Hybrid",
      category: "flower",
      price: 30,
      image: "/products/flowers/OreozTHCaFlower-Hybrid-30.avif",
    },
    {
      id: "f10",
      name: "Purple Kush THCa Flower | Indica",
      category: "flower",
      price: 30,
      image: "/products/flowers/PurpleKushTHCaFlower-30.avif",
    },

    {
      id: "101",
      name: "Sugar Tartz THCa Exotic Flower | Hybrid",
      category: "flower",
      price: 35.0,
      image: "/products/flowers/SugarTartzTHCaExoticFlower-35.avif",
    },
    {
      id: "102",
      name: "Trap Juice THCa Exotic Flower | Hybrid",
      category: "flower",
      price: 35.0,
      image: "/products/flowers/TrapJuiceTHCaExoticFlower-35.avif",
    },
    {
      id: "103",
      name: "Jedi Cookies THCa Flower | Hybrid",
      category: "flower",
      price: 35.0,
      image: "/products/flowers/JediCookiesTHCaFlower-Hybrid-35.avif",
    },
    {
      id: "104",
      name: "Jellie Cake THCa Flower | Hybrid",
      category: "flower",
      price: 35.0,
      image: "/products/flowers/JellieCakeTHCaFlower-hybrid-35.avif",
    },
    {
      id: "105",
      name: "Gorilla Bomb THCa Flower | Sativa",
      category: "flower",
      price: 35.0,
      image: "/products/flowers/GorillaBombTHCaFlower-sativa-35.avif",
    },
    {
      id: "106",
      name: "Peyote Kush THCa Flower | Indica",
      category: "flower",
      price: 35.0,
      image: "/products/flowers/PeyoteKushTHCaFlower-indica-35.avif",
    },
    {
      id: "107",
      name: "Yoda Candy THCa Flower | Sativa",
      category: "flower",
      price: 35.0,
      image: "/products/flowers/YodaCandyTHCaFlower-Sativa-35.avif",
    },
    {
      id: "108",
      name: "Wizard Tress THCa Flower | Indica",
      category: "flower",
      price: 35.0,
      image: "/products/flowers/WizardTreesTHCaFlower-Indica-35.avif",
    },
    // {
    //   id: "109",
    //   name: "RS11 (Rainbow Sherbet #11)",
    //   category: "flower",
    //   price: 295.0,
    //   image: "/placeholder.svg",
    //   description:
    //     "Flavorful hybrid combining sweet fruit with creamy undertones.",
    // },
    // {
    //   id: "110",
    //   name: "Super Runtz",
    //   category: "flower",
    //   price: 285.0,
    //   image: "/placeholder.svg",
    //   description: "Premium Runtz variant with strong candy-like flavor.",
    // },
    // {
    //   id: "111",
    //   name: "Blackberry Caviar",
    //   category: "flower",
    //   price: 310.0,
    //   image: "/placeholder.svg",
    //   description: "Luxurious exotic strain with rich berry flavor.",
    // },
    // {
    //   id: "112",
    //   name: "Apple Fritter",
    //   category: "flower",
    //   price: 270.0,
    //   image: "/placeholder.svg",
    //   description: "Sweet dessert-like aroma with balanced hybrid effects.",
    // },

    // -----------------------------
    // 🚬 PRE-ROLLS (10 items)
    // -----------------------------
    {
      id: "11",
      name: "Cookies 2g Cinnamon Milk THCa Blunt | Indica",
      category: "pre-rolls",
      price: 30.0,
      image: "/products/pre-rolls/Cookies2gCinnamonMilkTHCaBlunt-Indica-30.avif",
    },
    {
      id: "12",
      name: "Cookies Cereal Milk Slims | 5 count",
      category: "pre-rolls",
      price: 40.0,
      image: "/products/pre-rolls/CookiesCerealMilkSlims-5Count-40.avif",
    },
    {
      id: "13",
      name: "Cookies Honey Bun THCa Pre Roll | 1g",
      category: "pre-rolls",
      price: 12.0,
      image: "/products/pre-rolls/CookiesHoneyBunTHCaPreRoll-1g-12.avif",
    },
    {
      id: "14",
      name: "Freak Brothers Gelato THCP Infused Doobie | 1.5g",
      category: "pre-rolls",
      price: 20.0,
      image: "/products/pre-rolls/FreakBrothersGelatoTHCPInfusedDoobie-1.5g-20.avif",
    },
    {
      id: "15",
      name: "Habit Jack The Ripper THCa Pre Rolls | Sativa",
      category: "pre-rolls",
      price: 25.0,
      image: "/products/pre-rolls/HabitJackTheRipperTHCaPreRolls-sativa-25.avif",
    },
    {
      id: "16",
      name: "Habit Tigers Blood OG THCa Pre Rolls | Indica | Indica",
      category: "pre-rolls",
      price: 25.0,
      image: "/products/pre-rolls/HabitTigersBloodOGTHCaPreRolls-Indica-25.avif",
    },
    {
      id: "17",
      name: "Silver Haze THCa Pre Rolls | 2 count | Sativa",
      category: "pre-rolls",
      price: 20.0,
      image: "/products/pre-rolls/SilverHazeTHCaPreRolls-2Count-Sativa-20.avif",
    },
    {
      id: "18",
      name: "Sky Walker THCa Pre Rolls | 2 count | Indica",
      category: "pre-rolls",
      price: 20.0,
      image: "/products/pre-rolls/SkyWalkerTHCaPreRolls-2Count-Indica.avif",
    },
    {
      id: "19",
      name: "Wedding Cake Delta 8 THC Pre Roll | King Sized",
      category: "pre-rolls",
      price: 10.0,
      image: "/products/pre-rolls/WeddingCakeDelta8THCPreRoll-KingSized-10.avif",
      description: "Sweet berry aroma with calming effects.",
    },
    // {
    //   id: "20",
    //   name: "Classic Heritage Roll",
    //   category: "pre-rolls",
    //   price: 160.0,
    //   image: "/placeholder.svg",
    //   description: "Rich earthy profile crafted with premium strains.",
    // },

    // -----------------------------
    // 🧪 CONCENTRATES (10 items)
    // -----------------------------
    

    {
      id: "20",
      name: "Cookies Bernierhana Butter THCa Dab",
      category: "concentrates",
      price: 30.0,
      image: "/products/concentrates/CookiesBernierhanaButterTHCaDab-30.avif",
    },
    {
      id: "21",
      name: "Cookies Laughing Gas THCa Dab",
      category: "concentrates",
      price: 35.0,
      image: "/products/concentrates/CookiesLaughingGasTHCaDab-35.avif",
    },
    {
      id: "22",
      name: "Cookies THCA Moonrocks Pac-Main",
      category: "concentrates",
      price: 50.0,
      image: "/products/concentrates/CookiesTHCAMoonrocksPac-Man-50.avif",
    },
    {
      id: "23",
      name: "Habit Green Crack Live Resin Diamond Sauce | 1g",
      category: "concentrates",
      price: 35.0,
      image: "/products/concentrates/HabitGreenCrackLiveResinDiamondSauce-1g-35.avif",
    },
    {
      id: "24",
      name: "Habit Jack Here Live Resin Diamond Sauce | 1g",
      category: "concentrates",
      price: 35.0,
      image: "/products/concentrates/HabitJackHererLiveResinDiamondSauce-1g-35.avif",
    },
    {
      id: "25",
      name: "Habit Kust Mints THCa Wax | 1g",
      category: "concentrates",
      price: 30.0,
      image: "/products/concentrates/HabitKustMintsTHCaWax-1g-30.avif",
    },
    {
      id: "26",
      name: "Habit Original Z Live Resin Diamond Sauce | 1g",
      category: "concentrates",
      price: 35.0,
      image: "/products/concentrates/HabitOriginalZLiveResinDiamondSauce-1g-35.avif",
    },
    {
      id: "27",
      name: "Habit Super Boof Live Resin Diamond Sauce | 1g",
      category: "concentrates",
      price: 35.0,
      image: "/products/concentrates/HabitSuperBoofLiveResinDiamondSauce-1g-35.avif",
    },
    {
      id: "28",
      name: "Habit THCA Snow Caps | 3.5g",
      category: "concentrates",
      price: 50.0,
      image: "/products/concentrates/HabitTHCASnowCaps-3.5g-40.avif",
    },
    {
      id: "29",
      name: "THCA Moon Rocks",
      category: "concentrates",
      price: 45.0,
      image: "/products/concentrates/THCAMoonRocks-45.avif",
    },

    // -----------------------------
    // 💨 VAPES (10 items)
    // -----------------------------
    
    {
      id: "30",
      name: "AUXO Calent",
      category: "vapes",
      price: 100.0,
      image: "/products/vapes/AUXOCalent-100.avif",
    },
     {
      id: "31",
      name: "Cookies x G Pen Micro + Vape",
      category: "vapes",
      price: 80.0,
      image: "/products/vapes/CookiesXGPENMicro+Vape-80.avif",
    },
    {
      id: "32",
      name: "G Pen Micro + Vape",
      category: "vapes",
      price: 80.0,
      image: "/products/vapes/GPenMicro+Vape-80.avif",
    },
    {
      id: "33",
      name: "GRAV Gem-In-Eye",
      category: "vapes",
      price: 40.0,
      image: "/products/vapes/GRAVGem-in-Eye-40.avif",
    },
    {
      id: "34",
      name: "Groove Cara",
      category: "vapes",
      price: 25.0,
      image: "/products/vapes/GrooveCara-25.avif",
    },
    {
      id: "35",
      name: "Lemonnade x G Pen Micro + Vape Pen",
      category: "vapes",
      price: 80.0,
      image: "/products/vapes/LemonnadeXGPenMicro+VapePen-80.avif",
    },
    {
      id: "36",
      name: "Phantom Signature 2-in-1 Oil & Wax",
      category: "vapes",
      price: 100.0,
      image: "/products/vapes/PhantomSignature2-in-1Oil&Wax.avif",
    },
    {
      id: "37",
      name: "PuffCo Peak Smart Rig",
      category: "vapes",
      price: 80.0,
      image: "/products/vapes/PuffCoPeakSmartRig.avif",
    },
    {
      id: "38",
      name: "PuffCo Plus 3.0",
      category: "vapes",
      price: 90.0,
      image: "/products/vapes/PuffCoPlus3.0-90.avif",
    },
    {
      id: "39",
      name: "PuffCo Proxy",
      category: "vapes",
      price: 300.0,
      image: "/products/vapes/PuffCoProxy-300.avif",
    },
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14">
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

                <h2 className="mt-4 font-semibold uppercase tracking-wide text-center">
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
