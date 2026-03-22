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

          <div className="relative flex items-center justify-center w-full max-w-md">

            <div className="
              w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56
              bg-gradient-to-br from-blue-500 to-blue-700
              rounded-2xl 
              flex items-center justify-center
              shadow-[0_10px_40px_rgba(0,0,0,0.4)]
            ">
              <ShieldCheck size={60} className="text-white" />
            </div>

            <div className="
              absolute -top-4 right-6 sm:right-10
              w-12 h-12 sm:w-14 sm:h-14
              bg-gradient-to-br from-blue-500 to-blue-700
              rounded-xl flex items-center justify-center
              shadow-lg
            ">
              <Lock size={20} className="text-white" />
            </div>

            <div className="
              absolute bottom-0 left-6 sm:left-10
              w-12 h-12 sm:w-14 sm:h-14
              bg-gradient-to-br from-blue-500 to-blue-700
              rounded-xl flex items-center justify-center
              shadow-lg
            ">
              <Eye size={20} className="text-white" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default TrustGovernanceSection;