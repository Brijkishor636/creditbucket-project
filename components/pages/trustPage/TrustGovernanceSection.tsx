"use client";
import { ShieldCheck, Lock, Eye } from "lucide-react";
import bgImg from "@/assets/images/physital-bg.png";

const TrustGovernanceSection = () => {
  return (
    <section
      className="w-full rounded-2xl overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      <div className="w-full h-full bg-gradient-to-r from-[#0C4A6E]/90 to-[#0C82DD]/70 px-4 sm:px-6 py-16">

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          <div className="text-white max-w-xl space-y-5 text-center lg:text-left">

            <span className="inline-block bg-blue-500/80 text-xs px-3 py-1 rounded-full">
              TRUST & GOVERNANCE
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Built on Defined Roles and Regulatory Discipline
            </h2>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              Creditbucket operates as a structured lending infrastructure partner within clearly defined institutional boundaries.
            </p>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              Our model is designed to support compliant credit distribution while ensuring that underwriting, pricing, and portfolio control remain fully governed by the partner financial institution.
            </p>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              We prioritize transparency, documented processes, and operational accountability at every stage of the distribution lifecycle.
            </p>

          </div>

          <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center">
            
            {/* 1. Main Shield Box (Center) */}
            <div className="
              relative z-20
              w-48 h-48 sm:w-60 sm:h-60
              bg-[#1B84E7]
              rounded-[2.5rem] 
              flex items-center justify-center
              shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5),0_15px_30px_-10px_rgba(27,132,231,0.3)]
              border border-white/20
            ">
              <ShieldCheck size={100} strokeWidth={1.2} className="text-white opacity-90" />
            </div>

            {/* 2. Lock Box (Top Right) */}
            <div className="
              absolute -top-6 -right-6 z-30
              w-20 h-20 sm:w-28 sm:h-28
              bg-[#1B84E7]
              rounded-[1.8rem] flex items-center justify-center
              shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)]
              border border-white/20
              transition-transform duration-500 hover:scale-105
            ">
              <Lock size={45} strokeWidth={1.2} className="text-white opacity-90" />
            </div>

            {/* 3. Eye Box (Bottom Left) */}
            <div className="
              absolute -bottom-6 -left-6 z-30
              w-24 h-24 sm:w-32 sm:h-32
              bg-[#1B84E7]
              rounded-[2rem] flex items-center justify-center
              shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)]
              border border-white/20
              transition-transform duration-500 hover:scale-105
            ">
              <Eye size={50} strokeWidth={1.2} className="text-white opacity-90" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default TrustGovernanceSection;