import React from "react";
import { TrendingDown, ShieldCheck, Building2, Map } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  stat,
  statLabel,
}) => (
  <div className="relative rounded-2xl bg-white px-10 py-10 shadow-[0_18px_50px_rgba(15,23,42,0.08)] ring-1 ring-black/[0.03]">
    {/* Top row: icon left, stat right */}
    <div className="mb-8 flex items-start justify-between gap-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E6E6E6] text-[#111827]">
        {icon}
      </div>

      <div className="text-right leading-tight">
        <div className="text-xl font-extrabold text-[#1677F2]">{stat}</div>
        <div className="text-sm text-[#111827]">{statLabel}</div>
      </div>
    </div>

    {/* Content */}
    <h3 className="text-3xl font-extrabold tracking-tight text-[#111827]">
      {title}
    </h3>
    <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-[#111827]/70">
      {description}
    </p>
  </div>
);

const WhyPartner: React.FC = () => {
  return (
    <section
      id="trust-&-governance"
      className="bg-[#EAF4FF] py-24 px-6 md:px-12"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-[#111827] md:text-5xl">
            Why Partner with Creditbucket
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#111827]/70 md:text-lg">
            Our phygital infrastructure delivers measurable outcomes for lending
            partners while ensuring ethical, compliant service to borrowers.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          <FeatureCard
            icon={<TrendingDown className="h-6 w-6" />}
            title="Lower Cost of Acquisition"
            description="Reach semi-urban and rural borrowers without investing in physical branch expansion or fragmented sourcing networks."
            stat="40 - 60%"
            statLabel="Cost Reduction"
          />

          <FeatureCard
            icon={<ShieldCheck className="h-6 w-6" />}
            title="Improved Asset Quality"
            description="Pre-screened, assisted onboarding improves data quality, documentation accuracy, and early-stage borrower behaviour."
            stat="2x"
            statLabel="Better Retention"
          />

          <FeatureCard
            icon={<Building2 className="h-6 w-6" />}
            title="Compliance-First Model"
            description="RBI-aligned LSP framework with complete transparency, zero cash handling, and full audit trails."
            stat="100%"
            statLabel="Compliant"
          />

          <FeatureCard
            icon={<Map className="h-6 w-6" />}
            title="Deep Rural Penetration"
            description="Access to 1,600+ pin codes across tier-3, 4, and rural India where traditional banking cannot reach."
            stat="400+"
            statLabel="Pincodes"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;
