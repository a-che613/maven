import Image from "next/image";
import Link from "next/link";

export default function SeedsPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-32 px-4">
        <div className="absolute inset-0">
          <Image
            src="https://ext.same-assets.com/3990358102/3384218375.webp"
            alt="Blue Lotus Seeds Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto relative z-10 text-center">
          <div className="mb-16">
            <h1 className="text-6xl md:text-8xl heading-serif mb-6">
              <span className="text-blue-400">BLUE</span>
              <br />
              <span className="text-cyan-400">LOTUS</span>
            </h1>
            <p className="text-white text-xl uppercase tracking-widest">FEMINIZED SEED COLLECTION</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="relative aspect-square">
              <Image
                src="https://ext.same-assets.com/3990358102/4264424327.webp"
                alt="Blue Lotus Strain 1"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative aspect-square">
              <Image
                src="https://ext.same-assets.com/3990358102/637760665.webp"
                alt="Blue Lotus Strain 2"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Collection Details */}
      <section className="bg-black py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl text-white heading-serif mb-8">
              Premium Genetics Collection
            </h2>

            <div className="space-y-4 mb-12">
              <div className="flex items-center justify-center gap-8 text-white text-lg">
                <span className="text-gold">FRENCH LOTUS</span>
                <span className="text-white/50">•</span>
                <span className="text-gold">ORANGE SAPPHIRE</span>
              </div>
              <div className="flex items-center justify-center gap-8 text-white text-lg">
                <span className="text-gold">BLUE DABHI</span>
                <span className="text-white/50">•</span>
                <span className="text-gold">DIAMOND LOTUS</span>
              </div>
              <div className="text-gold text-lg">
                BLUE LOTUS S1
              </div>
            </div>

            <div className="inline-block border-2 border-gold px-12 py-6 mb-8">
              <p className="text-white text-sm uppercase tracking-widest mb-2">Available</p>
              <p className="text-gold text-3xl heading-serif">4/20/25</p>
            </div>

            <p className="text-white text-lg mb-8">
              <span className="text-white/60">VERY LIMITED!</span>{" "}
              <span className="text-gold font-semibold">AVAILABLE NOW!</span>
            </p>

            <Link
              href="/shop"
              className="inline-block px-10 py-4 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-colors uppercase tracking-wide"
            >
              SHOP SEEDS
            </Link>
          </div>

          <div className="mt-16 space-y-6 text-white/90">
            <p className="text-lg leading-relaxed text-center">
              The Blue Lotus collection represents years of careful breeding and selection. Each strain has been meticulously crafted to deliver exceptional quality, potency, and unique terpene profiles.
            </p>
            <p className="text-lg leading-relaxed text-center">
              These feminized seeds are the result of our commitment to preserving and enhancing the finest cannabis genetics available.
            </p>
          </div>
        </div>
      </section>

      {/* Seed Collection Grid */}
      <section className="bg-black py-20 px-4 border-t border-white/10">
        <div className="container mx-auto">
          <h2 className="text-4xl text-white heading-serif text-center mb-12 uppercase tracking-wider">
            Maven Genetics Seeds
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "https://ext.same-assets.com/3990358102/4264424327.webp",
              "https://ext.same-assets.com/3990358102/637760665.webp",
              "https://ext.same-assets.com/3990358102/4013390827.webp",
              "https://ext.same-assets.com/3990358102/32197770.webp",
              "https://ext.same-assets.com/3990358102/874613653.webp",
              "https://ext.same-assets.com/3990358102/3612160221.webp",
              "https://ext.same-assets.com/3990358102/2265862898.webp",
              "https://ext.same-assets.com/3990358102/3503612853.webp",
            ].map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden group cursor-pointer rounded-lg">
                <Image
                  src={src}
                  alt={`Seed strain ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
