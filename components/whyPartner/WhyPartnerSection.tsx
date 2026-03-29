"use client";
import React from "react";
import { TrendingDown, ShieldCheck, Building2, Map } from "lucide-react";
import PartnerCard from "./PartnerCard";

const WhyPartnerSection: React.FC = () => {
  return (
    <section className="w-full py-14 px-6 ">
      <div className="max-w-7xl mx-auto">

        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Why Partner with Creditbucket
          </h2>
          <p className="text-gray-700 mt-3">
            Our phygital infrastructure delivers measurable outcomes for
            lending partners while ensuring ethical, compliant service to
            borrowers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <PartnerCard
            icon={TrendingDown}
            title="Lower Cost of Acquisition"
            desc="Reach semi-urban and rural borrowers without investing in physical branch expansion or fragmented sourcing networks."
            stat="40 - 60%"
            statLabel="Cost Reduction"
          />

          <PartnerCard
            icon={ShieldCheck}
            title="Improved Asset Quality"
            desc="Pre-screened, assisted onboarding improves data quality, documentation accuracy, and early-stage borrower behaviour."
            stat="2x"
            statLabel="Better Retention"
          />

          <PartnerCard
            icon={Building2}
            title="Compliance-First Model"
            desc="RBI-aligned LSP framework with complete transparency, zero cash handling, and full audit trails."
            stat="100%"
            statLabel="Compliant"
          />

          <PartnerCard
            icon={Map}
            title="Deep Rural Penetration"
            desc="Access to 1,600+ pin codes across tier-3, 4, and rural India where traditional banking cannot reach."
            stat="400+"
            statLabel="Pincodes"
          />

        </div>
      </div>
    </section>
  );
};

export default WhyPartnerSection;
