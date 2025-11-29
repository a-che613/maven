'use client';

import { useEffect } from 'react';

interface AgeVerificationModalProps {
  isOpen: boolean;
  onVerify: () => void;
}

export default function AgeVerificationModal({ isOpen, onVerify }: AgeVerificationModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-lg mx-4 bg-black rounded-2xl p-8 shadow-2xl">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-40 h-40 rounded-full border-4 border-[#c9a961] flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#c9a961] tracking-wider">MAVEN</div>
              <div className="text-xl text-[#c9a961] tracking-widest mt-1">GENETICS</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-normal tracking-wide text-white">
            ARE YOU 21 OR OLDER?
          </h2>

          <div className="text-sm text-gray-300 space-y-3">
            <div className="flex flex-wrap items-center justify-center gap-1">
              <span>I agree to the</span>
              <a href="#" className="text-white underline hover:text-[#c9a961] transition-colors">
                Terms & Conditions
              </a>
              <span>and</span>
              <a href="#" className="text-white underline hover:text-[#c9a961] transition-colors">
                Privacy Policy
              </a>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-md mx-auto">
              This website collects cookies to deliver better user experience. We collect cookies to
              analyze our website traffic and performance; we never collect any personal data and
              ensure you have great shopping experience.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={() => window.history.back()}
              className="flex-1 px-8 py-3 bg-transparent border-2 border-white text-white rounded-md hover:bg-white hover:text-black transition-all duration-300 font-medium tracking-wider text-sm"
            >
              NO
            </button>
            <button
              onClick={onVerify}
              className="flex-1 px-8 py-3 bg-white text-black rounded-md hover:bg-[#c9a961] hover:text-white transition-all duration-300 font-medium tracking-wider text-sm"
            >
              YES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
