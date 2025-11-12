"use client";

import { useState } from "react";

export default function StoreLocatorPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const stores = [
    {
      name: "365 Recreational",
      address: "2750 Mendocino Ave, Santa Rosa, 95403",
      phone: "(707) 999-9420",
    },
    {
      name: "420 Central - Costa Mesa",
      address: "1990 Harbor Blvd, Costa Mesa, 92627",
      phone: "(949) 432-5070",
    },
    {
      name: "420 Central - Santa Ana",
      address: "420 W Central Ave, Santa Ana, 92607",
      phone: "(714) 540-4420",
    },
    {
      name: "420 Kingdom Delivery Service",
      address: "Bakersfield, 93301",
      phone: "(661) 777 - 5464",
    },
    {
      name: "4Twenty Market - Oakland",
      address: "8440 Enterprise Way, Oakland, 94621",
      phone: "(800) 420-3216",
    },
  ];

  return (
    <main className="min-h-screen pt-24 bg-black">
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-5xl md:text-6xl text-white heading-serif text-center mb-16 uppercase tracking-wider">
            FIND MAVEN GENETICS NEAR YOU
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: Store List */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 bg-white rounded px-4 py-3 mb-6">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Enter a location"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 outline-none text-black"
                />
              </div>

              <div className="space-y-3 max-h-[600px] overflow-y-auto pr-4">
                {stores.map((store, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors cursor-pointer">
                    <h3 className="text-white text-lg font-semibold mb-2">{store.name}</h3>
                    <p className="text-white/70 text-sm mb-1">{store.address}</p>
                    <p className="text-gold text-sm">{store.phone}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Map */}
            <div className="bg-white/5 rounded-lg overflow-hidden h-[700px] flex items-center justify-center border border-white/10">
              <div className="text-center">
                <svg className="w-16 h-16 text-white/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-white/50 text-sm">Interactive Map</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
