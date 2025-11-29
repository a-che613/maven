'use client';

import { useState } from 'react';
import AgeVerificationModal from './components/AgeVerificationModal';
import Navigation from './components/Navigation';
import HeroSection from '@/components/seeds/hero-section';
import ProductGrid from './components/ProductGrid';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

export default function Home() {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <div className="min-h-screen bg-[#191919]">
      <AgeVerificationModal isOpen={!isVerified} onVerify={() => setIsVerified(true)} />
      <Navigation />
      <main>
        <HeroSection />
        <ProductGrid />
        <AboutSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
