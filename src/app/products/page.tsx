import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-24 bg-black">
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-6xl text-white heading-serif text-center mb-20 uppercase tracking-wider">
            PRODUCTS
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 max-w-6xl mx-auto">
            {/* Flower */}
            <Link href="#flower" className="group">
              <div className="relative aspect-square mb-8 overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/3990358102/297302927.webp"
                  alt="Flower"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-3xl text-white text-center uppercase tracking-widest heading-serif">
                FLOWER
              </h2>
            </Link>

            {/* Pre Rolls */}
            <Link href="/goldies" className="group">
              <div className="relative aspect-square mb-8 overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/3990358102/628995607.webp"
                  alt="Pre Rolls"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-3xl text-white text-center uppercase tracking-widest heading-serif">
                PRE ROLLS
              </h2>
            </Link>

            {/* Concentrates */}
            <Link href="#concentrates" className="group">
              <div className="relative aspect-square mb-8 overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/3990358102/2301445093.webp"
                  alt="Concentrates"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-3xl text-white text-center uppercase tracking-widest heading-serif">
                CONCENTRATES
              </h2>
            </Link>

            {/* Vapes */}
            <Link href="/alchemy" className="group">
              <div className="relative aspect-square mb-8 overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/3990358102/1194834155.webp"
                  alt="Vapes"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-3xl text-white text-center uppercase tracking-widest heading-serif">
                VAPES
              </h2>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
