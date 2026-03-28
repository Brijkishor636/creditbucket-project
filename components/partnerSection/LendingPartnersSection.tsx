"use client";
import React from "react";
import Image from "next/image";

import utkarsh from "@/assets/partners/utkarsh.png";
import bandhan from "@/assets/partners/bandhan.png";
import bob from "@/assets/partners/bob.png";
import icici from "@/assets/partners/icici.png";
import axis from "@/assets/partners/axis.png";
import jana from "@/assets/partners/jana.png";
import sbi from "@/assets/partners/sbi.png";
import hdfc from "@/assets/partners/hdfc.png";

const partners = [
  { src: utkarsh, scale: "scale-[1.65]" },
  { src: bandhan, scale: "scale-110" },
  { src: bob,     scale: "scale-[1.55]" },
  { src: icici,   scale: "scale-110" },
  { src: axis,    scale: "scale-100" },
  { src: jana,    scale: "scale-[1.80]" },
  { src: sbi,     scale: "scale-100" },
  { src: hdfc,    scale: "scale-100" },
];

const LendingPartnersSection: React.FC = () => {
  return (
    <section className="w-full py-14 px-4">
      <div className="max-w-7xl mx-auto text-center">
        
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Our Lending Partners
        </h2>

        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mt-3">
          Collaborating with regulated banks and NBFCs to expand
          responsible credit access across India.
        </p>

        {/* Container: 
            - gap-x-16 to gap-x-32 provides the wide horizontal spacing you requested.
            - gap-y-24 ensures the rows don't look cramped.
        */}
        <div className="mt-14 flex flex-wrap justify-center items-center gap-x-16 gap-y-20 md:gap-x-30 md:gap-y-28 lg:gap-x-40 max-w-6xl mx-auto">
          {partners.map((logo, i) => (
            <div 
              key={i} 
              /* Width is adjusted to ensure the 3-3-2 wrap happens cleanly */
              className="flex justify-center items-center w-[35%] sm:w-[25%] lg:w-[20%]"
            >
              <div className={`${logo.scale} transition-all duration-300 flex justify-center items-center`}>
                <Image
                  src={logo.src}
                  alt="partner"
                  /* Fixed base height to anchor the center point */
                  className="h-8 sm:h-10 md:h-12 w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-500 mt-12">
          Partner logos are indicative and subject to ongoing partnerships.
        </p>

        <div className="mt-10 space-y-4">
          <div className="h-[1px] w-20 bg-blue-300/40 mx-auto mb-8" />
          <h3 className="text-xl md:text-4xl font-bold text-gray-900">
            Facilitated & Supported By
          </h3>

          <p className="text-gray-800 text-sm md:text-base font-semibold max-w-2xl mx-auto">
            Backed by leading academic institutions, incubators, and <br></br>
            government-supported innovation programs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LendingPartnersSection;