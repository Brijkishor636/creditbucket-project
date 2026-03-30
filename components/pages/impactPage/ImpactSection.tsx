"use client";
import Image from "next/image";
import bgImgImpact from "../../../assets/impact/impact_india.png";

const ImpactPageSection = () => {
  return (
    <section className="relative w-full flex justify-center overflow-hidden text-white rounded-2xl">
      
      <div className="relative w-full max-h-[130vh] md:min-h-[80vh] rounded-2xl overflow-hidden"
      >

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-130"
        >
          <source src="/videos/sol-bg-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4A6E]/90 to-[#0C82DD]/70"></div>

        <div className="relative z-10 h-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-0 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
          
          <div className="flex-1 text-center lg:text-left max-w-xl">
            
            <span className="inline-block px-4 py-1 text-xs tracking-wide bg-[#0C82DD] rounded-full mb-5 
             border border-transparent 
             transition-all duration-300 
             hover:border-gray-200">
             IMPACT
            </span>

            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold leading-tight mb-6">
              Expanding Structured Credit Access at Scale
            </h1>

            <p className="sm:text-base sm:font-semibold text-sm text-gray-200 mb-4">
              Creditbucket's infrastructure model enables regulated financial
              institutions to responsibly expand into underserved and semi-formal
              markets.
            </p>

            <p className="sm:text-base sm:font-semibold text-sm text-gray-200 mb-4">
              Through assisted facilitation, digital coordination, and
              engagement-led participation, we support structured integration of
              new borrower segments into formal credit ecosystems.
            </p>

            <p className="sm:text-base sm:font-semibold text-sm text-gray-300">
              Our impact is measured through disciplined distribution,
              application clarity, and institutional alignment – not just volume.
            </p>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end items-center">
            <div className="relative 
              sm:w-[620px]
              md:w-[460px] 
              lg:w-[620px] 
              xl:w-[700px]"
            >
              
              <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-30 rounded-full"></div>

              <Image
                src={bgImgImpact}
                alt="India Map"
                className="relative w-full object-contain scale-105 lg:scale-110"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ImpactPageSection;