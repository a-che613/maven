"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <nav className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-7 items-center justify-between">
          {/* Left: Action Buttons */}
          <div className="hidden md:flex gap-3 col-span-3">
            <Link
              href="/store-locator"
              className="px-6 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-colors uppercase tracking-wide"
            >
              FIND US
            </Link>
            <Link
              href="#order"
              className="px-6 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-colors uppercase tracking-wide"
            >
              ORDER NOW
            </Link>
          </div>

          {/* Center: Logo */}
          <Link href="/" className="flex-shrink-0  flex items-center justify-center">
            <div className="relative w-20 h-20">
              <Image
                src="https://ext.same-assets.com/3990358102/3173482224.gif"
                alt="Maven Genetics"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Right: Navigation Links */}
          <div className="hidden md:flex items-center gap-6 col-span-3">
            <Link
              href="/about"
              className="text-white hover:text-gold transition-colors text-sm uppercase tracking-wider"
            >
              ABOUT
            </Link>
            <Link
              href="/products"
              className="text-white hover:text-gold transition-colors text-sm uppercase tracking-wider"
            >
              PRODUCTS
            </Link>
            <Link
              href="#blog"
              className="text-white hover:text-gold transition-colors text-sm uppercase tracking-wider"
            >
              BLOG
            </Link>
            <Link
              href="/seeds"
              className="text-white hover:text-gold transition-colors text-sm uppercase tracking-wider"
            >
              SEEDS
            </Link>
            <Link
              href="#maven-store"
              className="text-white hover:text-gold transition-colors text-sm uppercase tracking-wider"
            >
              MAVEN STORE
            </Link>
            <Link
              href="#insiders"
              className="text-white hover:text-gold transition-colors text-sm uppercase tracking-wider"
            >
              INSIDERS
            </Link>
            <Link
              href="#apparel"
              className="text-white hover:text-gold transition-colors text-sm uppercase tracking-wider"
            >
              APPAREL
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-3 border-t border-white/10 mt-4">
            <Link
              href="/store-locator"
              className="block px-4 py-2 text-white hover:text-gold transition-colors text-sm uppercase tracking-wider"
            >
              FIND US
            </Link>
            <Link
              href="#order"
              className="block px-4 py-2 text-white hover:text-gold transition-colors text-sm uppercase tracking-wider"
            >
              ORDER NOW
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-white hover:text-gold transition-colors text-sm uppercase tracking-wider"
            >
              ABOUT
            </Link>
            <Link
              href="/products"
              className="block px-4 py-2 text-white hover:text-gold transition-colors text-sm uppercase tracking-wider"
            >
              PRODUCTS
            </Link>
            <Link
              href="#blog"
              className="block px-4 py-2 text-white hover:text-gold transition-colors text-sm uppercase tracking-wider"
            >
              BLOG
            </Link>
            <Link
              href="/seeds"
              className="block px-4 py-2 text-white hover:text-gold transition-colors text-sm uppercase tracking-wider"
            >
              SEEDS
            </Link>
            <Link
              href="#maven-store"
              className="block px-4 py-2 text-white hover:text-gold transition-colors text-sm uppercase tracking-wider"
            >
              MAVEN STORE
            </Link>
            <Link
              href="#insiders"
              className="block px-4 py-2 text-white hover:text-gold transition-colors text-sm uppercase tracking-wider"
            >
              INSIDERS
            </Link>
            <Link
              href="#apparel"
              className="block px-4 py-2 text-white hover:text-gold transition-colors text-sm uppercase tracking-wider"
            >
              APPAREL
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
