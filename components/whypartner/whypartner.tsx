"use client";

import React from "react";
import { TrendingDown, ShieldCheck, Building2, Map, LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  stat,
  statLabel,
}) => (
  <div className="group relative h-full">
    {/* MAIN CONTENT CONTAINER
        - Sets bg-[#f8fafc] for a default light gray look.
        - Changes to bg-white on hover.
        - Default border-transparent changes to border-slate-200.
        - shadow-blue-500/10 provides that distinctive blue tint.
    */}
    <div className="relative z-10 h-full overflow-hidden rounded-[2rem] p-8 md:p-10 flex flex-col justify-between 
                    bg-[#f8fafc] border border-transparent 
                    transition-all duration-500 
                    hover:bg-white hover:border-blue-100 hover:-translate-y-1.5 
                    hover:shadow-[0_25px_60px_-10px_rgba(27,132,231,0.12)]">
      
      {/* --- Right Half Circle (Blob) ---
          - Placed inside the overflow-hidden container.
          - Starts opacity-0 (invisible) and fades in (opacity-100) on hover.
          - scale-90 to scale-100 provides the gentle expansion.
      */}
      <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-[#D6EBFF]/60 
                      opacity-0 scale-90 transition-all duration-500 ease-out 
                      group-hover:opacity-100 group-hover:scale-100 z-0" />

      {/* --- Top Section: Icon and Stats (Z-indexed above blob) --- */}
      <div className="relative z-20 flex justify-between items-start w-full mb-8">
        
        {/* Icon Container: Blue base */}
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1B84E7] text-white shadow-lg shadow-blue-200 shrink-0">
          <Icon size={22} strokeWidth={2.5} />
        </div>

        {/* Stats Area */}
        <div className="text-right ml-4">
          <div className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#1B84E7] leading-none">
            {stat}
          </div>
          <div className="text-[12px] font-semibold text-slate-500 tracking-tight mt-1.5 uppercase">
            {statLabel}
          </div>
        </div>
      </div>

      {/* --- Bottom Section: Title and Description (Z-indexed above blob) --- */}
      <div className="relative z-20 mt-auto">
        {/* Title: 26px */}
        <h3 className="text-[22px] md:text-[26px] font-bold leading-tight tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-[#1B84E7]">
          {title}
        </h3>

        {/* Description: 15px font-medium */}
        <p className="mt-4 text-[14px] md:text-[15px] leading-relaxed text-slate-500 font-medium max-w-[48ch]">
          {description}
        </p>
      </div>
      
    </div>
  </div>
);

const WhyPartner: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-[32px] md:text-[42px] font-bold tracking-tight text-slate-900 leading-tight">
            Why Partner with Creditbucket
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-slate-700 font-medium">
            Our phygital infrastructure delivers measurable outcomes for lending
            partners while ensuring ethical, compliant service to borrowers.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <FeatureCard
            icon={TrendingDown}
            title="Lower Cost of Acquisition"
            description="Reach semi-urban and rural borrowers without investing in physical branch expansion or fragmented sourcing networks."
            stat="40 - 60%"
            statLabel="Cost Reduction"
          />

          <FeatureCard
            icon={ShieldCheck}
            title="Improved Asset Quality"
            description="Pre-screened, assisted onboarding improves data quality, documentation accuracy, and early-stage borrower behaviour."
            stat="2x"
            statLabel="Better Retention"
          />

          <FeatureCard
            icon={Building2}
            title="Compliance-First Model"
            description="RBI-aligned LSP framework with complete transparency, zero cash handling, and full audit trails."
            stat="100%"
            statLabel="Compliant"
          />

          <FeatureCard
            icon={Map}
            title="Deep Rural Penetration"
            description="Access to 1,600+ pin codes across tier-3, 4, and rural India where traditional banking cannot reach."
            stat="1600+"
            statLabel="Pincodes"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;