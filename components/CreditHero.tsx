"use client";
import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/20/solid";
import Button from "./common/Button";
import bgImg from "../assets/images/india-map.png";

const CreditHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[650px] flex items-center overflow-hidden">
      
      {/* Background Image + Blue Overlay */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={bgImg}
          alt="Credit Hero Background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Blue overlay */}
        <div className="absolute inset-0" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 md:px-12 w-full">
        <div className="max-w-2xl text-white space-y-8">

          {/* RBI Badge */}
          <div className="group relative inline-flex items-center gap-3 bg-white/10 border border-white/20 text-blue-50 px-4 py-2 rounded-full text-[13px] font-medium backdrop-blur-xl overflow-hidden shadow-[0_0_20px_rgba(27,132,231,0.2)]">
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_3s_infinite] pointer-events-none" />

            {/* Pulse Dot */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
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

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
            Bridging India’s <br />
            Underserved to Formal <br />
            Credit at Scale
          </h1>

          {/* Description */}
          <p className="text-blue-100 text-base sm:text-lg md:text-xl max-w-lg leading-relaxed">
            A phygital lending infrastructure enabling banks and NBFCs to
            reach credit-invisible India with trust, compliance, and efficiency.
          </p>

          {/* Button */}
          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <Button
              name="Partner With Us"
              variant="arrow"
              className="py-4 px-8 text-base"
            />
          </div>

          {/* Footer Note */}
          <div className="flex items-center gap-2 text-sm pt-6 border-t border-white/10">
            <div className="p-2 flex items-center justify-center">
              <StarIcon className="h-4 w-4 text-white stroke-[1.5]" />
            </div>
            <span className="italic opacity-90">
              Trusted by on-ground networks across 1,600+ pincodes in India
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CreditHero;