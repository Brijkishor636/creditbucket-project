"use client";
import React from "react";
import LogoItem from "./LogoItem";
import { StaticImageData } from "next/image";

interface Logo {
  src: StaticImageData;
  alt: string;
}

interface LogoStripProps {
  logos: Logo[];
}

const LogoStrip: React.FC<LogoStripProps> = ({ logos }) => {
  return (
    <section 
      className="w-full min-h-fit bg-white py-10 md:py-16 px-4 shadow-[inset_0_10px_15px_-4px_rgba(0,0,0,0.3)]"
    >
      <div
        className="
          max-w-7xl mx-auto
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          lg:flex lg:justify-between lg:items-center 
          gap-y-10 gap-x-6
        "
      >
        {logos.map((logo, index) => (
          <LogoItem key={index} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    </section>
  );
};

export default LogoStrip;