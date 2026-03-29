"use client";
import React from "react";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import Image from "next/image"; 
import BgImg from "../../assets/images/BgNational.jpeg";

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 min-h-[90vh] flex items-center">
      <div className="absolute inset-0 -z-20">
        <Image
          src={BgImg}
          alt="Background"
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          className="object-cover md:object-center object-[75%]"
          priority
        />
        <div className="absolute inset-0 bg-white/10 md:bg-transparent" />
      </div>

      {/* --- Grid Gap Adjustment --- */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-18 
                      grid grid-cols-1 md:grid-cols-2 
                      gap-12 md:gap-0 
                      items-center relative z-10">
        <HeroContent />
        <HeroImage />
      </div>

    </section>
  );
};

export default Hero;