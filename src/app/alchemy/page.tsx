import Image from "next/image";

export default function AlchemyPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-32 px-4">
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
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl text-white heading-serif mb-4 uppercase tracking-wider">
              ALCHEMY
            </h1>
            <p className="text-2xl text-white">by MAVEN</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-black py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-white heading-serif mb-8">
              From Flower To Gold
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Octane, Citra, Exotics, and Desserts. Four exceptional blends meticulously crafted to highlight the finest qualities of premium Live Rosin and Live Resin, offering a unique and distinguished vaping experience.
            </p>
          </div>

          {/* Product Image */}
          <div className="relative w-full h-[600px] mb-16">
            <Image
              src="https://ext.same-assets.com/3990358102/1667836045.webp"
              alt="Alchemy Products"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div className="space-y-8 text-white/90">
            <p className="text-lg leading-relaxed">
              {"Our Alchemy line represents the pinnacle of cannabis extraction and blending. Each blend is carefully formulated to deliver a distinct flavor profile and effect, using only the highest quality Live Rosin and Live Resin from Maven's premium indoor flower."}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="border border-white/20 p-6">
                <h3 className="text-2xl text-gold heading-serif mb-4">Octane</h3>
                <p className="text-white/80">
                  Bold and powerful, with fuel-forward terpenes that deliver an intense, energizing experience.
                </p>
              </div>

              <div className="border border-white/20 p-6">
                <h3 className="text-2xl text-gold heading-serif mb-4">Citra</h3>
                <p className="text-white/80">
                  Bright citrus notes that invigorate the senses with a refreshing, uplifting effect.
                </p>
              </div>

              <div className="border border-white/20 p-6">
                <h3 className="text-2xl text-gold heading-serif mb-4">Exotics</h3>
                <p className="text-white/80">
                  Rare and complex flavor profiles that showcase the most unique phenotypes in our collection.
                </p>
              </div>

              <div className="border border-white/20 p-6">
                <h3 className="text-2xl text-gold heading-serif mb-4">Desserts</h3>
                <p className="text-white/80">
                  Sweet and indulgent flavors reminiscent of your favorite treats, perfect for relaxation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
