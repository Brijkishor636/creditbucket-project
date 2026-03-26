"use client";

import React from "react";
// 1. Import the LucideIcon type
import { TrendingDown, ShieldCheck, Building2, Map, LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon; // Changed from ReactNode to LucideIcon
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon, // Destructure as 'Icon' to render as a component
  title,
  description,
  stat,
  statLabel,
}) => (
  <div className="group relative">
    <div className="absolute -inset-6 z-[-1] rounded-[3rem] bg-blue-500/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />

    <div className="relative z-10 h-full overflow-hidden rounded-[2.5rem] bg-white px-10 py-12 shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-slate-100 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_40px_80px_rgba(27,132,231,0.12)]">
      
      <div className="absolute -top-12 -right-12 h-24 w-48 rounded-full bg-[#E3F2FF]/70 opacity-0 scale-90 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-110" />

      <div className="relative z-20 mb-10 flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-500 transition-colors duration-300 group-hover:bg-[#1B84E7] group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-100">
          {/* 2. Render Icon directly as a component */}
          <Icon size={24} strokeWidth={2} />
        </div>

        <div className="text-right">
          <div className="text-[26px] font-bold tracking-tight text-[#1B84E7]">
            {stat}
          </div>
          <div className="text-[14px] font-semibold text-slate-500 tracking-tight">
            {statLabel}
          </div>
        </div>
      </div>

      <div className="relative z-20">
        <h3 className="text-[26px] font-bold leading-tight tracking-tight text-slate-900 transition-colors duration-300">
          {title}
        </h3>
        <p className="mt-5 text-[15px] leading-relaxed text-slate-500 font-medium max-w-[48ch]">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const WhyPartner: React.FC = () => {
  return (
    <section className="bg-[#F8FBFF] py-24 px-6 md:px-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-[30px] md:text-[42px] font-bold tracking-tight text-[#111827] md:text-4xl">
            Why Partner with Creditbucket
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-black-600 font-bold ">
            Our phygital infrastructure delivers measurable outcomes for <br/>lending
            partners while ensuring ethical, compliant service to <br/> borrowers.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* 3. Pass icon names directly (no brackets) */}
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