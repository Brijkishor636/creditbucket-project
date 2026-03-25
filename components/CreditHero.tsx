"use client";
import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import Button from "./common/Button"; // Path to your updated Button component
import bgImg from "../assets/images/india-map.png";

const CreditHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[650px] flex items-center overflow-hidden">
      
      {/* 1. Background Image with deep overlay for text contrast */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={bgImg}
          alt="Credit Hero Background"
          fill
          priority
          className="object-cover object-center "
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 md:px-12 w-full">
        <div className="max-w-2xl text-white space-y-8">

          {/* 2. RBI Badge with Pulse (Ping) Animation */}
          <div className="group relative inline-flex items-center gap-3 bg-white/10 border border-[#1B84E7]/30 text-blue-50 px-4 py-2 rounded-full text-[13px] font-medium backdrop-blur-xl overflow-hidden shadow-[0_0_20px_rgba(27,132,231,0.15)]">
  
  {/* Lightning/Shimmer Sweep Effect */}
  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_3s_infinite] pointer-events-none" />

  {/* Glowing/Blinking Dot */}
  <span className="relative flex h-2.5 w-2.5">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1B84E7]  shadow-[0_0_20px_rgba(27,132,231,0.7)]"></span>
  </span>

  <span className="relative z-10 tracking-wide">
    RBI-Aligned Lending Service Provider (LSP)
  </span>

  <style jsx>{`
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      30%, 100% { transform: translateX(100%); }
    }
  `}</style>
</div>

          {/* 3. Main Heading */}
          <h1 className="text-3xl sm:text-2xl md:text-4xl font-bold leading-[1.1] tracking-tight">
            Bridging India’s <br />
            Underserved to Formal <br />
            Credit at Scale
          </h1>

          {/* 4. Description */}
          <p className="text-gray-300 text-lg md:text-xl max-w-lg leading-relaxed">
            A phygital lending infrastructure enabling banks and NBFCs to
            reach credit-invisible India with trust, compliance, and efficiency.
          </p>

          {/* 5. Button Group using the updated Button.tsx */}
          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            
            {/* Primary Blue Button with Arrow */}
            <Button 
              name="Partner With Us" 
              variant="arrow" 
              className="py-4 px-8 text-base" 
            />

            {/* Outline Button with Arrow (Customized via className) */}
            <Button 
              name="View Corporate Profile" 
              variant="arrow" 
              className="py-4 px-8 text-base !bg-transparent border-white/20 hover:!bg-white hover:!text-[#1B84E7]" 
            />
          </div>

          {/* 6. Trust Footer */}
          <div className="flex items-center gap-2 text-gray-400 text-sm pt-6 border-t border-white/5">
            <Star size={16} className="text-yellow-500 fill-yellow-500" />
            <span className="italic opacity-80">
              Trusted by on-ground networks across 1,600+ pincodes in India
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CreditHero;