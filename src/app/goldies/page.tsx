import Image from "next/image";

export default function GoldiesPage() {
  return (
    <main className="min-h-screen pt-24 bg-black">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Image
              src="https://ext.same-assets.com/3990358102/2663453472.webp"
              alt="Goldies by Maven"
              width={600}
              height={200}
              className="mx-auto"
            />
          </div>

          <div className="relative w-full h-[600px] md:h-[800px] mb-12">
            <Image
              src="https://ext.same-assets.com/3990358102/2586782669.webp"
              alt="Goldies Hero"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Left: Image */}
            <div className="relative aspect-square">
              <Image
                src="https://ext.same-assets.com/3990358102/938917075.webp"
                alt="Goldies Product Details"
                fill
                className="object-contain"
              />
            </div>

            {/* Right: Text */}
            <div className="flex flex-col justify-center space-y-8">
              <h2 className="text-4xl md:text-5xl text-white heading-serif">
                Pure Infusion. Pure Power.
              </h2>

              <div className="space-y-4 text-white/90">
                <p className="text-lg">
                  Maven premium indoor flower infused with potent cannabis oil, strain-specific terpenes and kief.
                </p>
                <p className="text-lg">
                  No fillers. No additives. No shortcuts.
                  <br />
                  Only cannabis, done right.
                </p>
              </div>

              <div className="border-t border-b border-white/20 py-6">
                <p className="text-white text-center text-lg">
                  5 pre-rolls | 0.6g each &nbsp;&nbsp; Flower • Oil • Kief
                </p>
              </div>

              <p className="text-white text-xl text-center heading-serif uppercase tracking-wider">
                ALL CANNABIS. ALL MAVEN.
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto space-y-6 text-white/90">
            <p className="text-lg leading-relaxed">
              Goldies are Mavens premium infused cannabis pre-rolls — crafted for connoisseurs who demand purity, potency, and authenticity. Each 5-pack contains five 0.6g joints made exclusively from our award-winning indoor flower, ultra-refined cannabis oil, and strain-specific kief. Every element is 100% cannabis-derived, strain-specific, and terpene-rich — designed to deliver a clean, powerful, and flavorful smoke.
            </p>
            <p className="text-lg leading-relaxed">
              Unlike other infused pre-rolls on the market, Goldies never include artificial terpenes, botanical additives, or cutting agents. Just premium indoor flower, meticulously paired with potent oil and kief from the same strain, blended in perfect ratios to elevate the smoking experience. The result is a sophisticated infusion — smooth, aromatic, and undeniably powerful — made for those who expect more from cannabis.
            </p>
          </div>

          {/* Bottom Banner */}
          <div className="mt-16 text-center">
            <Image
              src="https://ext.same-assets.com/3990358102/1953096776.webp"
              alt="California Connoisseur Cannabis"
              width={500}
              height={50}
              className="mx-auto"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
