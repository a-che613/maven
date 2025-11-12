"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
  author: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Introducing Goldies",
    date: "OCTOBER 10, 2025",
    image: "https://ext.same-assets.com/2171648622/534843915.webp",
    excerpt: "Experience Maven like never before. Three expressions — flower, oil, and kief — come together in perfect harmony.",
    content: "Experience Maven like never before. Three expressions — flower, oil, and kief — come together in perfect harmony.\n\nGoldies represents a new pinnacle in cannabis craftsmanship, bringing together the finest elements of our cultivation process. Each component is carefully selected and combined to create an experience that transcends traditional consumption methods.\n\nThis innovative product showcases our commitment to quality and our dedication to pushing the boundaries of what's possible in the cannabis industry.",
    author: "Giovanni Youssef"
  },
  {
    id: 2,
    title: "The Return of SFV OG",
    date: "AUGUST 29, 2025",
    image: "https://ext.same-assets.com/2171648622/852662173.webp",
    excerpt: "SFV OG takes us back to our roots. As a legacy brand born in the San Fernando Valley, Maven has long had access to some of the most exclusive and coveted cuts — like the legendary SFV OG...",
    content: "SFV OG takes us back to our roots.\n\nAs a legacy brand born in the San Fernando Valley, Maven has long had access to some of the most exclusive and coveted cuts — like the legendary SFV OG.\n\nThis iconic strain represents everything we stand for: heritage, quality, and an unwavering commitment to preserving the genetics that made California cannabis culture what it is today. The return of SFV OG is more than just a product release — it's a homecoming to the roots that define us.\n\nWith its distinctive earthy, piney aroma and powerful effects, SFV OG has been a cornerstone of West Coast cannabis for decades. We're proud to bring this classic back to our lineup.",
    author: "Giovanni Youssef"
  },
  {
    id: 3,
    title: "Brace Yourself For Chrome Dome",
    date: "AUGUST 9, 2025",
    image: "https://ext.same-assets.com/2171648622/3494974288.webp",
    excerpt: "Chrome Dome is a citrus bomb with an electric edge — bred by Compound Genetics and pheno-hunted by Maven for those chasing something truly fresh. A cross of Lemonheadz and Eye Candy, this striking cultivar showcases vibrant green and purple buds accented by magenta highlights, all wrapped in dense layers of glistening...",
    content: "Chrome Dome is a citrus bomb with an electric edge — bred by Compound Genetics and pheno-hunted by Maven for those chasing something truly fresh.\n\nA cross of Lemonheadz and Eye Candy, this striking cultivar showcases vibrant green and purple buds accented by magenta highlights, all wrapped in dense layers of glistening trichomes.\n\nThe aroma is an immediate hit of bright citrus rind and sharp lemon, followed by subtle notes of sweet candy and a clean, crisp finish. The flavor profile delivers on the nose with an intense lemon-forward taste that transitions into a smooth, slightly sweet exhale.\n\nChrome Dome offers a euphoric, uplifting high that energizes the mind while maintaining a balanced body feel — perfect for creative endeavors or social situations.",
    author: "Giovanni Youssef"
  },
  {
    id: 4,
    title: "Kings & Queens Collection: New Money",
    date: "JULY 1, 2025",
    image: "https://ext.same-assets.com/2171648622/2671706499.webp",
    excerpt: "Bred by Compound Genetics. Phenohunted by Maven Genetics. This is more than a strain — it's a meeting of minds between two legacy powerhouses rooted in craft, culture, and connoisseurship. Born from Compound's iconic Eye Candy collection, this standout cross of Black Amber and Eye Candy was hand-selected by Maven from a sea of phenotypes — chosen for its bold funk, complex expression, and unmistakable swagger.",
    content: "Bred by Compound Genetics. Phenohunted by Maven Genetics.\n\nThis is more than a strain — it's a meeting of minds between two legacy powerhouses rooted in craft, culture, and connoisseurship. Born from Compound's iconic Eye Candy collection, this standout cross of Black Amber and Eye Candy was hand-selected by Maven from a sea of phenotypes — chosen for its bold funk, complex expression, and unmistakable swagger.\n\nNew Money embodies the essence of luxury cannabis — bold, unapologetic, and meticulously crafted. The collaboration between Compound Genetics and Maven represents the pinnacle of breeding expertise and phenotype selection.\n\nWith a terpene profile that combines sweet candy notes with deep, earthy funk and a hint of gas, New Money delivers a complex sensory experience that evolves with each session.",
    author: "Giovanni Youssef"
  },
  {
    id: 5,
    title: "Zuzu Berry: The Latest Sativa in Our Lineup",
    date: "MAY 27, 2025",
    image: "https://ext.same-assets.com/2171648622/21761226.webp",
    excerpt: "",
    content: "Zuzu Berry: The Latest Sativa in Our Lineup\n\nWe're excited to introduce Zuzu Berry, our newest sativa-dominant cultivar that brings vibrant energy and exceptional flavor to the Maven lineup.\n\nThis carefully selected phenotype showcases the best characteristics of modern sativa breeding — uplifting effects, complex terpene profiles, and stunning visual appeal.\n\nZuzu Berry is perfect for daytime use, offering a clear-headed, energetic high that enhances creativity and social interaction without overwhelming sedation.",
    author: "Giovanni Youssef"
  },
  {
    id: 6,
    title: "Introducing: Chroma",
    date: "MAY 23, 2025",
    image: "https://ext.same-assets.com/2171648622/4187289376.webp",
    excerpt: "Gleaming with a silver sheen and stacked with trichomes, Chroma is a striking cross of our multiple award-winning Prizm and Black Diamond X — two powerhouse cultivars known for their bold terpene profiles and heavy-handed effects. This next-generation phenotype reflects its name with radiant bag appeal and a bold aromatic spectrum that opens with citrus rind and sharp pine, then deepens into notes of dark stone fruit, floral musk, and clean fuel.",
    content: "Gleaming with a silver sheen and stacked with trichomes, Chroma is a striking cross of our multiple award-winning Prizm and Black Diamond X — two powerhouse cultivars known for their bold terpene profiles and heavy-handed effects.\n\nThis next-generation phenotype reflects its name with radiant bag appeal and a bold aromatic spectrum that opens with citrus rind and sharp pine, then deepens into notes of dark stone fruit, floral musk, and clean fuel.\n\nChroma represents the evolution of our breeding program, combining award-winning genetics to create something truly special. The visual presentation is stunning, with a silver-white coating of trichomes that gives the buds an almost metallic appearance.\n\nThe effects are equally impressive — a powerful, balanced high that satisfies both recreational and connoisseur users alike.",
    author: "Giovanni Youssef"
  },
  {
    id: 7,
    title: "The Blue Lotus Feminized Seed Collection",
    date: "APRIL 29, 2025",
    image: "https://ext.same-assets.com/2171648622/3426850785.webp",
    excerpt: "Introducing the Blue Lotus Collection. Rooted in pedigree and grown for greatness, the Blue Lotus Collection is a defining chapter in Maven's breeding legacy. Featuring our award-winning French Lotus — a standout cross of FKAFL and Blue Lotus — alongside three standout cultivars, this drop is a celebration of bold expression, unique phenos, and elevated craft.",
    content: "Introducing the Blue Lotus Collection\n\nRooted in pedigree and grown for greatness, the Blue Lotus Collection is a defining chapter in Maven's breeding legacy. Featuring our award-winning French Lotus — a standout cross of FKAFL and Blue Lotus — alongside three standout cultivars, this drop is a celebration of bold expression, unique phenos, and elevated craft.\n\nThe Blue Lotus Collection represents years of dedicated breeding work, careful phenotype selection, and unwavering commitment to genetic excellence. Each seed in this collection carries the potential to produce exceptional plants with unique characteristics and premium quality.\n\nThis feminized seed collection allows growers to experience the same genetics that have made Maven a respected name in craft cannabis cultivation.",
    author: "Giovanni Youssef"
  },
  {
    id: 8,
    title: "R&D Strains | Spring 2025",
    date: "APRIL 22, 2025",
    image: "https://ext.same-assets.com/2171648622/2412616517.webp",
    excerpt: "Maven's R&D Line returns with two elite 3.5g Sativa phenos and a brand-new selection of 14g microbatch releases. This drop is the result of over 14 months of focused pheno-hunting and marks the start of a bold new chapter of R&D releases shaping our 2025 strain catalog.",
    content: "Maven's R&D Line returns with two elite 3.5g Sativa phenos and a brand-new selection of 14g microbatch releases. This drop is the result of over 14 months of focused pheno-hunting and marks the start of a bold new chapter of R&D releases shaping our 2025 strain catalog.\n\nOur Research & Development program is where innovation meets cultivation. These limited releases represent the cutting edge of our breeding efforts — experimental crosses, rare phenotypes, and unique expressions that push the boundaries of what's possible.\n\nEach R&D release is produced in small batches, giving our team the opportunity to test new genetics and gather feedback before potentially adding them to our permanent lineup. This spring's selection showcases the best results from over a year of dedicated pheno-hunting.",
    author: "Giovanni Youssef"
  },
  {
    id: 9,
    title: "Introducing LA Relief: A Strain With A Cause",
    date: "APRIL 7, 2025",
    image: "https://ext.same-assets.com/2171648622/2748099339.webp",
    excerpt: "Los Angeles is home. It's where Maven was born, where our roots run deep, and where our community thrives. The recent wildfires have left many of our neighbors displaced, forcing families to rebuild from the ground up. At Maven, we believe in using our platform to give back in a meaningful way. That's why we're introducing LA Relief, a limited release created exclusively to support those affected by the fires.",
    content: "Los Angeles is home. It's where Maven was born, where our roots run deep, and where our community thrives. The recent wildfires have left many of our neighbors displaced, forcing families to rebuild from the ground up.\n\nAt Maven, we believe in using our platform to give back in a meaningful way. That's why we're introducing LA Relief, a limited release created exclusively to support those affected by the fires.\n\nA portion of proceeds from every unit sold goes directly to wildfire relief efforts and organizations helping displaced families rebuild their lives. LA Relief isn't just a product — it's a commitment to our community and a way for our customers to contribute to meaningful change.\n\nTogether, we can help our neighbors recover and rebuild stronger than before.",
    author: "Giovanni Youssef"
  }
];

export default function Home() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleReadMore = (post: BlogPost) => {
    setSelectedPost(post);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-zinc-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-3">
              <Button variant="outline" className="rounded-full bg-white text-black hover:bg-gray-200 border-0">
                FIND US
              </Button>
              <Button variant="outline" className="rounded-full bg-transparent text-white hover:bg-zinc-800 border-white">
                ORDER NOW
              </Button>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="w-20 h-20 rounded-full border-2 border-yellow-600 flex items-center justify-center">
                <div className="text-yellow-600 text-xs font-serif text-center">
                  <div className="text-2xl font-bold">MN</div>
                  <div className="text-[8px]">MAVEN</div>
                  <div className="text-[6px]">GENETICS</div>
                </div>
              </div>
            </div>

            <nav className="flex gap-6 text-sm tracking-wider">
              <a href="#" className="hover:text-yellow-600 transition-colors">ABOUT</a>
              <a href="#" className="hover:text-yellow-600 transition-colors">PRODUCTS</a>
              <a href="#" className="hover:text-yellow-600 transition-colors">BLOG</a>
              <a href="#" className="hover:text-yellow-600 transition-colors">SEEDS</a>
              <a href="#" className="hover:text-yellow-600 transition-colors">MAVEN STORE</a>
              <a href="#" className="hover:text-yellow-600 transition-colors">INSIDERS</a>
              <a href="#" className="hover:text-yellow-600 transition-colors">APPAREL</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Blog Title Section */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-6xl font-serif italic text-yellow-600 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
          Goldies
        </h1>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="bg-black border-0 overflow-hidden group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-light mb-4 text-white group-hover:text-yellow-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-yellow-600 text-xs tracking-widest mb-4">
                  {post.date}
                </p>
                {post.excerpt && (
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                )}
                <button
                  onClick={() => handleReadMore(post)}
                  className="text-yellow-600 text-sm tracking-wider hover:text-yellow-500 transition-colors"
                >
                  READ MORE →
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-gray-500">
              <a href="#" className="hover:text-yellow-600 transition-colors">PRIVACY</a>
              {" | "}
              <a href="#" className="hover:text-yellow-600 transition-colors">TERMS</a>
              {" | "}
              <a href="#" className="hover:text-yellow-600 transition-colors">MAVENMVN.COM</a>
              {" - LLC."}
            </div>
            <div className="text-sm text-gray-500">
              2021 ALL RIGHTS RESERVED | C11-0000742-LIC
            </div>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-yellow-600 transition-colors">Home</a>
              {" | "}
              <a href="#" className="hover:text-yellow-600 transition-colors">About Us</a>
              {" | "}
              <a href="#" className="hover:text-yellow-600 transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Blog Content Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-zinc-950 border-zinc-800 text-white max-w-4xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-4xl font-light mb-2 pr-8">
              {selectedPost?.title}
            </DialogTitle>
            <p className="text-yellow-600 text-xs tracking-widest">
              {selectedPost?.date}
            </p>
          </DialogHeader>
          <div className="mt-6">
            <img
              src={selectedPost?.image}
              alt={selectedPost?.title}
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />
            <div className="prose prose-invert max-w-none">
              {selectedPost?.content.split('\n').map((paragraph, idx) => (
                paragraph.trim() && (
                  <p key={idx} className="text-gray-300 text-base leading-relaxed mb-4">
                    {paragraph}
                  </p>
                )
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-800">
              <p className="text-sm text-gray-400">
                By {selectedPost?.author}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
