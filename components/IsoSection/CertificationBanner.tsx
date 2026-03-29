"use client";
import React from "react";
import Image from "next/image";

import isoBlue from "@/assets/certifications/isoBlue.png";
import isoBlack from "@/assets/certifications/isoBlack.png";

const CertificationBanner: React.FC = () => {
  return (
    <section 
      className="w-full py-16 px-6"
      style={{
        background: "linear-gradient(to right, #064677 0%, #0C82DD 50%, #064677 100%)"
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24">
          
          <div className="w-full max-w-[320px] md:max-w-[400px] transition-transform duration-300 hover:scale-105">
            <Image
              src={isoBlue}
              alt="ISO 22301 Business Continuity Management"
              className="w-full h-auto object-contain rounded-2xl shadow-lg"
              priority
            />
          </div>

          <div className="w-full max-w-[320px] md:max-w-[400px] transition-transform duration-300 hover:scale-105">
            <Image
              src={isoBlack}
              alt="ISO 27001 Information Security Management"
              className="w-full h-auto object-contain rounded-2xl shadow-lg"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default CertificationBanner;