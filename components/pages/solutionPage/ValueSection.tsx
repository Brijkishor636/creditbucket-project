"use client";
import { TrendingDown, ClipboardCheck, MapPin, ShieldCheck } from "lucide-react";
import { ValueCard } from "./ValueCard";

const ValueSection = () => {
  return (
    <section className="w-full py-16 px-4 bg-gradient-to-b from-[#0C82DD] to-[#022743]">
      
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Value to Lending Partners
        </h2>

        <p className="mt-3 text-white/80 text-sm md:text-base max-w-2xl mx-auto">
          Our infrastructure model addresses structural challenges in last-mile
          credit distribution.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">

          <ValueCard
            icon={<TrendingDown size={20} />}
            title="Lower Cost of Acquisition"
            text="Reduce per-borrower acquisition costs through assisted on-ground distribution networks."
          />

          <ValueCard
            icon={<ClipboardCheck size={20} />}
            title="Improved Application Quality"
            text="Structured facilitation results in more complete, accurate, and decision-ready applications."
          />

          <ValueCard
            icon={<MapPin size={20} />}
            title="Access to Underserved Areas"
            text="Operational reach into semi-urban and rural segments that are otherwise difficult to serve directly."
          />

          <ValueCard
            icon={<ShieldCheck size={20} />}
            title="Compliance-Aligned Distribution"
            text="All processes operate within clearly defined institutional and regulatory frameworks."
          />

        </div>

      </div>
    </section>
  );
};

export default ValueSection;