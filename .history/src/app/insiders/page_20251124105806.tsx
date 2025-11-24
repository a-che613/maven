"use client";

import Link from "next/link";

const JarIcon = () => (
  <svg viewBox="0 0 100 100" className="w-32 h-32">
    <rect x="25" y="30" width="50" height="55" rx="2" fill="none" stroke="#b4aa94" strokeWidth="2"/>
    <path d="M 20 30 L 80 30 L 75 20 L 25 20 Z" fill="#b4aa94"/>
    <circle cx="35" cy="55" r="8" fill="#b4aa94" opacity="0.6"/>
    <circle cx="50" cy="50" r="10" fill="#b4aa94" opacity="0.6"/>
    <circle cx="65" cy="58" r="7" fill="#b4aa94" opacity="0.6"/>
  </svg>
);

const EnvelopeIcon = () => (
  <svg viewBox="0 0 100 100" className="w-32 h-32">
    <rect x="15" y="30" width="70" height="45" rx="2" fill="none" stroke="#b4aa94" strokeWidth="2"/>
    <path d="M 15 30 L 50 55 L 85 30" fill="none" stroke="#b4aa94" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M 15 30 L 50 55 L 85 30 L 85 75 L 15 75 Z" fill="#b4aa94" opacity="0.3"/>
  </svg>
);

const DiscountIcon = () => (
  <svg viewBox="0 0 100 100" className="w-32 h-32">
    <path d="M 20 35 L 40 20 L 60 20 L 80 35 L 80 65 L 60 80 L 40 80 L 20 65 Z" fill="#b4aa94" stroke="#b4aa94" strokeWidth="2"/>
    <circle cx="38" cy="38" r="5" fill="#050505"/>
    <circle cx="62" cy="62" r="5" fill="#050505"/>
    <line x1="35" y1="65" x2="65" y2="35" stroke="#050505" strokeWidth="3"/>
    <text x="50" y="55" fontSize="20" fill="#050505" textAnchor="middle" fontWeight="bold">%</text>
  </svg>
);

const ShirtIcon = () => (
  <svg viewBox="0 0 100 100" className="w-32 h-32">
    <path d="M 30 25 L 30 20 L 40 20 L 40 25 L 50 30 L 60 25 L 60 20 L 70 20 L 70 25 L 85 35 L 85 50 L 75 50 L 75 85 L 25 85 L 25 50 L 15 50 L 15 35 Z" fill="#b4aa94" stroke="#b4aa94" strokeWidth="1.5"/>
  </svg>
);

const VideoIcon = () => (
  <svg viewBox="0 0 100 100" className="w-32 h-32">
    <rect x="15" y="30" width="70" height="45" rx="3" fill="none" stroke="#b4aa94" strokeWidth="2"/>
    <rect x="23" y="42" width="12" height="20" fill="#b4aa94"/>
    <rect x="40" y="42" width="12" height="20" fill="#b4aa94"/>
    <rect x="57" y="42" width="12" height="20" fill="#b4aa94"/>
    <polygon points="45,50 65,60 45,70" fill="#b4aa94"/>
  </svg>
);

const BagIcon = () => (
  <svg viewBox="0 0 100 100" className="w-32 h-32">
    <path d="M 25 40 L 20 85 L 80 85 L 75 40 Z" fill="#b4aa94" stroke="#b4aa94" strokeWidth="2"/>
    <path d="M 35 40 L 35 30 Q 35 20 50 20 Q 65 20 65 30 L 65 40" fill="none" stroke="#b4aa94" strokeWidth="2"/>
  </svg>
);

export default function Home() {
  const features = [
    {
      icon: <JarIcon />,
      title: "EXCLUSIVE DROPS",
      description: "First access to limited edition strains & drops.",
    },
    {
      icon: <EnvelopeIcon />,
      title: "WEEKLY NEWSLETTER",
      description: "Stay in touch with all things Maven.",
    },
    {
      icon: <DiscountIcon />,
      title: "SPECIAL DISCOUNTS",
      description: "Get discount codes on Maven product.",
    },
    {
      icon: <ShirtIcon />,
      title: "LIMITED EDITION MERCH",
      description: "Get apparel exclusively designed for Maven Insiders",
    },
    {
      icon: <VideoIcon />,
      title: "EXCLUSIVE OPPORTUNITIES",
      description: "Behind the scenes content and access to events.",
    },
    {
      icon: <BagIcon />,
      title: "MONTHLY GIVEAWAYS",
      description: "Automatically get entered to win each month.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Header */}
      

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(180, 170, 148, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, rgba(180, 170, 148, 0.08) 0%, transparent 50%)`,
          }}
        />
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl font-light tracking-[0.3em] mb-8">
            MAVEN INSIDERS
          </h1>
          <Link
            href="#"
            className="inline-block px-12 py-4 bg-white text-black rounded-full text-sm font-medium tracking-wider hover:bg-gray-100 transition"
          >
            JOIN THE CLUB
          </Link>
        </div>
        <button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sm hover:text-[#b4aa94] transition-colors animate-bounce cursor-pointer"
        >
          <span>SCROLL</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 4V16M10 16L4 10M10 16L16 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer transition-transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-8 flex justify-center transition-transform group-hover:scale-110 duration-300">
                  <div className="w-32 h-32">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-light tracking-widest mb-4 group-hover:text-[#b4aa94] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white transition">
                PRIVACY
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-white transition">
                TERMS
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-white transition">
                MAVENMVN.COM
              </Link>
              <span>- LLC.</span>
            </div>
            <div>2021 ALL RIGHTS RESERVED | C11-0000742-LIC</div>
          </div>
          <div className="flex justify-center gap-4 mt-4 text-sm text-gray-400">
            <Link href="#" className="hover:text-white transition">
              Home
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-white transition">
              About Us
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-white transition">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
