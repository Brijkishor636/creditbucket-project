"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight, Star, Circle } from "lucide-react";
import Button from "./common/Button";
import bgImg from "../assets/images/india-map.png";

const CreditHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[520px] md:min-h-[580px] lg:min-h-[620px] py-2 sm:py-0 flex items-center overflow-hidden">
      
      <Image
        src={bgImg}
        alt="Credit Hero Background"
        fill
        priority
        className="object-cover object-center -z-10"
      />

      <div className="absolute inset-0 bg-black/40 -z-10" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 md:px-12 w-full">
        <div className="max-w-xl text-white space-y-6">

          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400 text-blue-300 px-4 py-1 rounded-full text-sm backdrop-blur">
            <Circle size={8} className="fill-blue-400 text-blue-400" />
            RBI-Aligned Lending Service Provider (LSP)
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Bridging India’s
            <br />
            Underserved to Formal
            <br />
            Credit at Scale
          </h1>

          <p className="text-gray-200 text-base sm:text-lg">
            A phygital lending infrastructure enabling banks and NBFCs to
            reach credit-invisible India with trust, compliance, and
            efficiency.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button name="Partner With Us" />

            <button className="flex items-center gap-2 cursor-pointer border border-blue-400 text-blue-200 px-6 py-2 rounded-lg hover:bg-blue-500/20 transition">
              View Corporate Profile
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="flex items-center gap-2 text-gray-300 text-sm pt-2">
            <Star size={16} />
            Trusted by on-ground networks across 1,600+ pincodes in India
          </div>

        </div>
      </div>
    </section>
  );
};

export default CreditHero;
