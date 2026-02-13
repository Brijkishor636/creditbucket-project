"use client";
import React from "react";
import PartnerCard from "./PartnerCard";

const LendingPartnersSection: React.FC = () => {
  return (
    <section className="w-full bg-[linear-gradient(135deg,#E6F3FF,#B9D9F6)] py-16 px-6">
      
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Our Lending Partners
        </h2>

        <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto mt-3">
          Collaborating with regulated banks and NBFCs to expand
          responsible credit access across India.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10">
          {Array.from({ length: 4 }).map((_, i) => (
            <PartnerCard key={i} />
          ))}
        </div>

        <hr className="border-gray-400 my-8" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <PartnerCard key={i + 10} />
          ))}
        </div>

        <p className="text-xs text-gray-600 mt-6">
          Partner logos are indicative and subject to ongoing partnerships.
        </p>

        <div className="mt-16 space-y-3">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
            Facilitated & Supported By
          </h3>

          <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto">
            Backed by leading academic institutions, incubators, and
            government-supported innovation programs.
          </p>
        </div>

      </div>
    </section>
  );
};

export default LendingPartnersSection;
