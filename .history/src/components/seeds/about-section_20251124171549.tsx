'use client';

export default function AboutSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#191919] to-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img
              src="https://ext.same-assets.com/1313518918/3955944305.jpeg"
              alt="Maven Genetics"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-wide">
              The Maven Difference
            </h2>
            <div className="w-20 h-1 bg-[#c9a961]" />
            <p className="text-gray-300 text-lg leading-relaxed">
              We are driven by an absolute passion for the flower and dedicated to sparking
              innovation and craftsmanship in every step of the process. Our commitment to
              excellence ensures that every seed we produce meets the highest standards.
            </p>
            <p className="text-gray-400 leading-relaxed">
              From selective breeding to meticulous cultivation, Maven Genetics represents
              the pinnacle of cannabis genetics. Each strain is carefully developed to
              deliver exceptional quality, potency, and unique characteristics.
            </p>
            <button className="px-8 py-3 bg-transparent border-2 border-[#c9a961] text-[#c9a961] rounded-md hover:bg-[#c9a961] hover:text-black transition-all duration-300 font-medium tracking-widest text-sm mt-4">
              READ OUR STORY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
