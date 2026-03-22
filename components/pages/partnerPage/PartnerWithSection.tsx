"use client";
import { Building2, Landmark, ShieldCheck } from "lucide-react";
import PartnerCard from "./PartnerCard";

const PartnerWithSection = () => {
  return (
    <section className="relative w-full min-h-[90vh] md:min-h-[80vh] rounded-2xl overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/sol-bg-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-[#0C4A6E]/90 to-[#0C82DD]/70"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-14 text-center text-white">
        <h2 className="text-2xl md:text-4xl font-semibold">
          Who We Partner With
        </h2>

        <p className="mt-3 text-sm md:text-base text-white/80 max-w-2xl mx-auto">
          Creditbucket collaborates with regulated financial institutions
          committed to structured, responsible credit distribution in underserved markets.
        </p>

        <div className="mt-10 space-y-6">
          <PartnerCard
            icon={<Landmark size={22} />}
            title="Scheduled Commercial Banks"
            text="We work with public and private sector banks seeking structured last-mile access to emerging borrower segments while maintaining clear underwriting and compliance control."
          />

          <PartnerCard
            icon={<Building2 size={22} />}
            title="Non-Banking Financial Companies (NBFCs)"
            text="We collaborate with NBFCs looking to expand responsibly into underserved and semi-formal markets through assisted and engagement-led distribution models."
          />

          <PartnerCard
            icon={<ShieldCheck size={22} />}
            title="Regulated Financial Institutions"
            text="Our model supports institutions operating within defined regulatory frameworks that require clarity, role separation, and accountable distribution structures."
          />
        </div>
      </div>
    </section>
  );
};

export default PartnerWithSection;