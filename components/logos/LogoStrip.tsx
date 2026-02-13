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
    <section className="w-full bg-[#E9EDF1] py-5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-10 md:gap-14 lg:gap-16 flex-wrap md:flex-nowrap">
        {logos.map((logo, index) => (
          <LogoItem key={index} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    </section>
  );
};

export default LogoStrip;
