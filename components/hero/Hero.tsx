"use client";
import React from "react";
import { ArrowUp } from "lucide-react";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero: React.FC = () => {
 

  return (
    <section className="relative overflow-hidden pt-24 shadow-lg">
      
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#E6F3FF,#B9D9F6)]" />

      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-blue-400/30 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-52 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-18 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-6 items-center">
        <HeroContent />
        <HeroImage />
      </div>

     

    </section>
  );
};

export default Hero;
