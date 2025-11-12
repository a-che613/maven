import Image from "next/image";

export default function ResearchPage() {
  return (
    <main className="min-h-screen pt-24 bg-black">
      {/* Header */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block border-4 border-white px-12 py-8 mb-8">
              <h1 className="text-5xl md:text-6xl text-white heading-serif uppercase tracking-wider mb-4">
                RESEARCH
                <br />
                & DEVELOPMENT
              </h1>
              <div className="flex flex-wrap justify-center gap-6 mt-6 text-xs text-white/70 uppercase tracking-widest">
                <span>LIMITED EDITION</span>
                <span>MICROBATCH</span>
                <span>PHENOTYPE SELECTS</span>
              </div>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative w-full max-w-3xl mx-auto mb-16">
            <div className="relative aspect-square">
              <Image
                src="https://ext.same-assets.com/3990358102/4264424327.webp"
                alt="R&D Product"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Strains Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
            {[
              "https://ext.same-assets.com/3990358102/4264424327.webp",
              "https://ext.same-assets.com/3990358102/637760665.webp",
              "https://ext.same-assets.com/3990358102/4013390827.webp",
              "https://ext.same-assets.com/3990358102/32197770.webp",
              "https://ext.same-assets.com/3990358102/874613653.webp",
            ].map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden group">
                <Image
                  src={src}
                  alt={`R&D Strain ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl text-white heading-serif text-center mb-12">
            Maven Genetics R&D Line
          </h2>

          <div className="space-y-8 text-white/90">
            <p className="text-lg md:text-xl leading-relaxed">
              Our Research & Development Line grants us the opportunity to make our community an integral part of our exclusive Pheno-Hunting process. Integrating consumer testing and feedback, we then decide which phenotypes will be chosen for production as part of our next Seasonal Collection.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              {"Limited Micro-Batches of our latest elite strains are now available through our R&D Line. Each batch represents the cutting edge of cannabis cultivation, featuring unique phenotypes that may become tomorrow's most sought-after strains."}
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/10">
              <div className="text-center">
                <h3 className="text-2xl text-gold heading-serif mb-4">Limited Edition</h3>
                <p className="text-white/80">
                  Exclusive micro-batches of experimental strains, available in extremely limited quantities.
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-2xl text-gold heading-serif mb-4">Microbatch</h3>
                <p className="text-white/80">
                  Small-scale production ensuring maximum quality control and attention to detail.
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-2xl text-gold heading-serif mb-4">Phenotype Selects</h3>
                <p className="text-white/80">
                  Carefully selected phenotypes showcasing exceptional traits and characteristics.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <a
              href="#shop"
              className="inline-block px-10 py-4 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-colors uppercase tracking-wide"
            >
              EXPLORE R&D LINE
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
