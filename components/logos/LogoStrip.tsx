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
      className="w-full min-h-[25vh] bg-white py-12 px-4 
      /* --- Custom Inset Shadow to match the image --- */
      shadow-[inset_0_25px_50px_-25px_rgba(0,0,0,0.6)]"
    >
      <div
        className="
          max-w-7xl mx-auto
          max-h-16
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