"use client";
import React from "react";
import { ArrowUp } from "lucide-react";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero: React.FC = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden pt-24 shadow-lg">
      
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#E6F3FF,#B9D9F6)]" />

      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-blue-400/30 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-52 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-18 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-6 items-center">
        <HeroContent />
        <HeroImage />
      </div>

      <button
        onClick={handleScrollTop}
        className="absolute bottom-6 right-6 flex items-center gap-1 px-3 py-1.5 bg-white/90 backdrop-blur border border-gray-300 rounded-full shadow-md hover:shadow-lg transition cursor-pointer text-sm font-medium text-blue-700"
      >
        Scroll to Top
        <ArrowUp size={16} />
      </button>

    </section>
  );
};

export default Hero;
