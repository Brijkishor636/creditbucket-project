"use client";
import { MapPin } from "lucide-react";

export default function RegionalExpansion() {
  return (
    <section className="w-full min-h-[450px] flex items-center justify-center py-10 px-6 bg-gradient-to-b from-[#0C82DD] to-[#022743] text-white">
      <div className="max-w-6xl mx-auto text-center">
        
        <div className="flex justify-center items-center gap-2 md:gap-4 mb-4 md:mb-6">
          <MapPin size={48} strokeWidth={1.5} className="text-white" />
          <h2 className="text-4xl md:text-5xl font-semibold tracking-wide">
            Focused Regional Expansion
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-3">
          <p className="text-sm md:text-base text-white/90 leading-relaxed">
            Creditbucket's operations are concentrated in Eastern India, with a strong presence in Bihar and growing reach across nearby states. 
            We focus on building structured and scalable operations in regions where access to formal credit remains limited but demand is strong.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-xl md:text-2xl font-medium pt-2">
            <span className="flex items-center gap-2">
              <span className="text-white text-3xl leading-none">•</span> Bihar (Primary focus)
            </span>
            <span className="flex items-center gap-2">
              <span className="text-white text-3xl leading-none">•</span> Jharkhand
            </span>
            <span className="flex items-center gap-2">
              <span className="text-white text-3xl leading-none">•</span> West Bengal
            </span>
            <span className="flex items-center gap-2">
              <span className="text-white text-3xl leading-none">•</span> Odisha
            </span>
            <span className="flex items-center gap-2">
              <span className="text-white text-3xl leading-none">•</span> Assam
            </span>
          </div>

          <p className="text-sm md:text-base text-white/80 font-light pt-2">
            Our expansion follows a phased approach, aligned with operational readiness and institutional partnerships.
          </p>
        </div>

      </div>
    </section>
  );
}