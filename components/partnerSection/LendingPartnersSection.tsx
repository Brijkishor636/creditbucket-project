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
  utkarsh,
  bandhan,
  bob,
  icici,
  axis,
  jana,
  sbi,
  hdfc,
];

const LendingPartnersSection: React.FC = () => {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Our Lending Partners
        </h2>

        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mt-3">
          Collaborating with regulated banks and NBFCs to expand
          responsible credit access across India.
        </p>

        <div className="mt-15 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-14 gap-x-8 place-items-center">

          {partners.map((logo, i) => (
            <div key={i} className="flex justify-center items-center w-full">
              <Image
                src={logo}
                alt="partner"
                className="h-8 sm:h-10 md:h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-500 mt-10">
          Partner logos are indicative and subject to ongoing partnerships.
        </p>

        <div className="mt-16 space-y-3">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
            Facilitated & Supported By
          </h3>

          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Backed by leading academic institutions, incubators, and
            government-supported innovation programs.
          </p>
        </div>

      </div>
    </section>
  );
};

export default LendingPartnersSection;