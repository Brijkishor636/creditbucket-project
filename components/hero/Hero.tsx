"use client";
import React from "react";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import Image from "next/image"; // Import Next.js Image component
import BgImg from "../../assets/images/BgNational.jpeg";

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-35 pb-20 min-h-[90vh] flex items-center">
      
      {/* 1. The Main Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={BgImg}
          alt="Background"
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>


      {/* 3. Content Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-18 grid grid-cols-1 md:grid-cols-2 gap-0 items-center relative z-10">
     <HeroContent />
     <HeroImage />
    </div>

    </section>
  );
};

export default Hero;