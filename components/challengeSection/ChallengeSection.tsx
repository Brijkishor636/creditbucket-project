"use client";
import React from "react";
import { User, Banknote, ShieldAlert, TrendingDown } from "lucide-react";
import ChallengeTag from "./ChallengeTag";
import ChallengeQuote from "./ChallengeQuote";
import ChallengeCard from "./ChallengeCard";

const ChallengeSection: React.FC = () => {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        <div className="space-y-6">
          <ChallengeTag text="Challenge" />

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Why Reaching Credit-Invisible India Remains a Challenge
          </h2>

          <p className="text-gray-800 max-w-xl text-sm">
            India faces a significant rural credit gap. Traditional banking
            infrastructure cannot reach the underserved profitably, while
            digital-only models fail to build trust and complete KYC in
            Bharat's complex socio-economic landscape.
          </p>

          <ChallengeQuote
            text="Over 40% of India's adult population remains outside the formal credit system, not due to lack of creditworthiness, but lack of access and documentation."
            source="RBI Financial Inclusion Report"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <ChallengeCard
            icon={User}
            title="Thin-File & No-File Borrowers"
            description="Millions of creditworthy Indians lack formal credit history, making traditional underwriting impossible."
          />
          <ChallengeCard
            icon={Banknote}
            title="High Cost of Rural Sourcing"
            description="Physical branch expansion and on-ground sourcing significantly increase acquisition costs."
          />
          <ChallengeCard
            icon={TrendingDown}
            title="Low Conversion Without Assisted Support"
            description="Digital journeys often fail without guidance, documentation support and trust-building."
          />
          <ChallengeCard
            icon={ShieldAlert}
            title="Operational & Mis-selling Risk"
            description="Fragmented DSA networks increase compliance and reputational risks for lenders."
          />
        </div>

      </div>
    </section>
  );
};

export default ChallengeSection;
