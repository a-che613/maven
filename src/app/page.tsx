import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <Image
          src="https://ext.same-assets.com/3990358102/1852824508.webp"
          alt="Cannabis Plant"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white text-sm uppercase tracking-widest">Scroll</span>
          <div className="w-px h-16 bg-white/50" />
        </div> */}
      </section>

      {/* Company Intro Section */}
      <section className="bg-black py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-xl text-white mb-8 heading-serif uppercase tracking-wide">
            MAVEN GENETICS: CALIFORNIA CONNOISSEUR CANNABIS
          </h1>
          <p className=" text-white/90 leading-relaxed max-w-3xl mx-auto">
            Maven was founded with one goal in mind: to breed and cultivate rare and exotic indoor cannabis of the highest caliber. We are driven by an absolute passion for the flower and dedicated to sparking innovation and craftsmanship in every step of the process. We believe that everyone who seeks more from cannabis is a connoisseur, an enthusiast, and a true Maven.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-black py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Flower */}
            <Link href="/products" className="group text-center">
              <div className="relative aspect-square mb-6 overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/3990358102/2202254573.webp"
                  alt="Flower"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl text-white uppercase tracking-widest heading-serif">FLOWER</h3>
            </Link>

            {/* Pre-Rolls */}
            <Link href="/products" className="group text-center">
              <div className="relative aspect-square mb-6 overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/3990358102/3304284588.webp"
                  alt="Pre-Rolls"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl text-white uppercase tracking-widest heading-serif">PRE - ROLLS</h3>
            </Link>

            {/* Vapes */}
            <Link href="/products" className="group text-center">
              <div className="relative aspect-square mb-6 overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/3990358102/2647513576.webp"
                  alt="Vapes"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl text-white uppercase tracking-widest heading-serif">VAPES</h3>
            </Link>

            {/* Concentrates */}
            <Link href="/products" className="group text-center">
              <div className="relative aspect-square mb-6 overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/3990358102/1928676060.webp"
                  alt="Concentrates"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl text-white uppercase tracking-widest heading-serif">CONCENTRATES</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Goldies Section */}
      <section className="bg-black py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Image
              src="https://ext.same-assets.com/3990358102/2663453472.webp"
              alt="Goldies by Maven"
              width={600}
              height={200}
              className="mx-auto mb-6"
            />
            <h2 className="text-3xl md:text-4xl text-white heading-serif mb-6">
              Pure Infusion. Pure Power.
            </h2>
          </div>

          <div className="relative w-full h-[500px] md:h-[700px] mb-12">
            <Image
              src="https://ext.same-assets.com/3990358102/1852824508.webp"
              alt="Goldies Product"
              fill
              className="object-cover"
            />
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-base md:text-lg text-white/90 mb-6 leading-relaxed">
              Goldies are premium infused pre-rolls made with Mavens indoor flower, ultra-refined cannabis oil, and strain-specific kief and terpenes. Each pack includes five 0.6g joints, designed to deliver strain-authentic flavor and elevated potency. 100% cannabis-derived. Nothing artificial. Always pure.
            </p>
            <Link
              href="/goldies"
              className="inline-block px-8 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-colors uppercase tracking-wide"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </section>

      {/* Alchemy Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0">
          <Image
            src="https://ext.same-assets.com/3990358102/1667836045.webp"
            alt="Alchemy Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-7xl text-white heading-serif mb-4 uppercase tracking-wider">
              ALCHEMY
            </h2>
            <p className="text-xl text-white">by MAVEN</p>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-2xl md:text-3xl text-white heading-serif mb-6">
              From Flower To Gold
            </h3>
            <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed">
              Octane, Citra, Exotics, and Desserts. Four exceptional blends meticulously crafted to highlight the finest qualities of premium Live Rosin and Live Resin, offering a unique and distinguished vaping experience.
            </p>
            <Link
              href="/alchemy"
              className="inline-block px-8 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-colors uppercase tracking-wide"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </section>

      {/* Blue Lotus Seeds Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0">
          <Image
            src="https://ext.same-assets.com/3990358102/3384218375.webp"
            alt="Blue Lotus Seeds"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto relative z-10 text-center">
          <div className="mb-12">
            <h2 className="text-5xl md:text-7xl heading-serif mb-4">
              <span className="text-blue-400">BLUE</span>
              <br />
              <span className="text-cyan-400">LOTUS</span>
            </h2>
            <p className="text-white text-lg uppercase tracking-widest">FEMINIZED SEED COLLECTION</p>
          </div>

          <div className="mb-8">
            <p className="text-white/90 text-sm uppercase tracking-wide mb-2">FRENCH LOTUS • ORANGE SAPPHIRE</p>
            <p className="text-white/90 text-sm uppercase tracking-wide mb-2">BLUE DABHI • DIAMOND LOTUS</p>
            <p className="text-white/90 text-sm uppercase tracking-wide">BLUE LOTUS S1</p>
          </div>

          <div className="mb-8">
            <p className="text-white/70 text-sm uppercase tracking-wide">AVAILABLE 4/20/25</p>
          </div>

          <p className="text-white text-sm mb-8">
            <span className="text-white/60">VERY LIMITED!</span> <span className="text-white font-semibold">AVAILABLE NOW!</span>
          </p>

          <Link
            href="/seeds"
            className="inline-block px-8 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-colors uppercase tracking-wide"
          >
            SHOP SEEDS
          </Link>
        </div>
      </section>

      {/* Research & Development Section */}
      <section className="bg-black py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block border-2 border-white px-8 py-4 mb-8">
              <h2 className="text-3xl md:text-4xl text-white heading-serif uppercase tracking-wider">
                RESEARCH
                <br />
                & DEVELOPMENT
              </h2>
              <div className="flex justify-center gap-8 mt-4 text-xs text-white/70 uppercase tracking-widest">
                <span>LIMITED EDITION</span>
                <span>MICROBATCH</span>
                <span>PHENOTYPE SELECTS</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            {[
              "https://ext.same-assets.com/3990358102/4264424327.webp",
              "https://ext.same-assets.com/3990358102/637760665.webp",
              "https://ext.same-assets.com/3990358102/4013390827.webp",
              "https://ext.same-assets.com/3990358102/32197770.webp",
              "https://ext.same-assets.com/3990358102/874613653.webp",
            ].map((src, i) => (
              <div key={i} className="relative aspect-square">
                <Image src={src} alt={`R&D Product ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl text-white heading-serif mb-6">
              Maven Genetics R&D Line
            </h3>
            <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed">
              Our Research & Development Line grants us the opportunity to make our community an integral part of our exclusive Pheno-Hunting process. Integrating consumer testing and feedback, we then decide which phenotypes will be chosen for production as part of our next Seasonal Collection. Limited Micro-Batches of our latest elite strains are now available through our R&D Line.
            </p>
            <Link
              href="/research"
              className="inline-block px-8 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-colors uppercase tracking-wide"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </section>

      {/* Maven Insiders Section */}
      <section className="relative py-32 px-4">
        <div className="absolute inset-0">
          <Image
            src="https://ext.same-assets.com/3990358102/3612160221.webp"
            alt="Maven Insiders"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container mx-auto relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl text-white heading-serif mb-12 uppercase tracking-wider">
            MAVEN INSIDERS
          </h2>
          <Link
            href="#insiders"
            className="inline-block px-10 py-4 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-colors uppercase tracking-wide"
          >
            GET INSIDER ACCESS NOW
          </Link>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="bg-black py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl text-white heading-serif text-center mb-12 uppercase tracking-wider">
            INSTAGRAM
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://ext.same-assets.com/3990358102/2265862898.webp",
              "https://ext.same-assets.com/3990358102/3503612853.webp",
              "https://ext.same-assets.com/3990358102/2949484058.webp",
              "https://ext.same-assets.com/3990358102/4159104432.webp",
              "https://ext.same-assets.com/3990358102/3992104420.webp",
              "https://ext.same-assets.com/3990358102/2734259041.webp",
              "https://ext.same-assets.com/3990358102/2818900683.webp",
              "https://ext.same-assets.com/3990358102/1152722380.webp",
            ].map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden group cursor-pointer">
                <Image
                  src={src}
                  alt={`Instagram post ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Locator Section */}
      <section className="bg-black py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl text-white heading-serif text-center mb-12 uppercase tracking-wider">
            FIND MAVEN GENETICS NEAR YOU
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white/5 rounded-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center gap-3 bg-white rounded px-4 py-3 mb-6">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Enter a location"
                    className="flex-1 outline-none text-black"
                  />
                </div>

                <div className="bg-gray-800 h-96 rounded-lg flex items-center justify-center text-white/50">
                  Map Placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
