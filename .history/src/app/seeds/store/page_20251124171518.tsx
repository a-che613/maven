'use client';

import { useState } from 'react';
import AgeVerificationModal from '@/components/seeds/age-verification';
import HeroSection from '@/components/seeds/hero-section';
import Product
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';

export default function Home() {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <div className="min-h-screen bg-[#191919]">
      <AgeVerificationModal isOpen={!isVerified} onVerify={() => setIsVerified(true)} />
      <main>
        <HeroSection />
        <ProductGrid />
        <AboutSection />
        <TestimonialsSection />
      </main>
    </div>
  );
}
