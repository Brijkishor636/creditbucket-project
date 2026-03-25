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
    <section className="w-full bg-[#ffffff] py-12 px-4 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)]">
      
      <div
        className="
          max-w-7xl mx-auto
          grid
          grid-cols-2
          sm:grid-cols-3
          lg:flex lg:justify-between lg:items-center
          gap-y-6 gap-x-6
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