'use client';

export default function HeroSection() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://ext.same-assets.com/1313518918/572198015.gif)',
          filter: 'brightness(0.4)'
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-6">
          <div className="w-32 h-32 mx-auto rounded-full border-4 border-[#c9a961] flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#c9a961] tracking-wider">MAVEN</div>
              <div className="text-sm text-[#c9a961] tracking-widest mt-1">GENETICS</div>
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-wide">
          Rare & Exotic Cannabis
        </h1>
        <p className="text-xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto">
          Maven was founded with one goal in mind: to breed and cultivate rare and exotic indoor
          cannabis of the highest caliber.
        </p>

        <div className="mt-10 flex gap-4 justify-center">
          <button className="px-8 py-3 bg-[#c9a961] text-black rounded-md hover:bg-[#d4b76f] transition-all duration-300 font-medium tracking-widest text-sm">
            SHOP NOW
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-md hover:bg-white hover:text-black transition-all duration-300 font-medium tracking-widest text-sm">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
}
