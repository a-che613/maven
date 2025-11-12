import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Image */}
      <section className="relative h-64 w-full">
        <Image
          src="https://ext.same-assets.com/3990358102/1728860942.webp"
          alt="Cannabis Leaves"
          fill
          className="object-cover"
        />
      </section>

      {/* Main Content */}
      <section className="bg-black py-32 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div>
              <h1 className="text-6xl md:text-8xl text-white heading-serif mb-12 leading-tight">
                WE
                <br />
                ARE
                <br />
                <span className="text-gold">HIGH CALIBER</span>
              </h1>

              <div className="space-y-6 text-white/90">
                <p className="text-lg leading-relaxed">
                  We are enthusiasts, connoisseurs, and perfectionists who live by the core values that drive our industry:
                </p>
                <p className="text-2xl heading-serif text-white">
                  freedom, well-being, and authenticity.
                </p>
                <p className="text-lg leading-relaxed">
                  Our product line is curated to elevate our customers lives, to make every experience unforgettable.
                </p>
              </div>
            </div>

            {/* Right: Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-3 gap-2">
                {[
                  "https://ext.same-assets.com/3990358102/942154877.webp",
                  "https://ext.same-assets.com/3990358102/942154877.webp",
                  "https://ext.same-assets.com/3990358102/942154877.webp",
                  "https://ext.same-assets.com/3990358102/942154877.webp",
                  "https://ext.same-assets.com/3990358102/942154877.webp",
                  "https://ext.same-assets.com/3990358102/942154877.webp",
                  "https://ext.same-assets.com/3990358102/942154877.webp",
                  "https://ext.same-assets.com/3990358102/942154877.webp",
                  "https://ext.same-assets.com/3990358102/942154877.webp",
                ].map((src, i) => (
                  <div key={i} className="relative aspect-square">
                    <Image src={src} alt={`Team ${i + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>

              {/* Center Logo Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-gold">
                  <Image
                    src="https://ext.same-assets.com/3990358102/3173482224.gif"
                    alt="Maven Genetics Logo"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
