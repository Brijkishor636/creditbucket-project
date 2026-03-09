import React from "react";
import {
  AlertCircle,
  Users2,
  IndianRupee,
  TrendingDown,
  ShieldAlert,
} from "lucide-react";

const Card: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="rounded-2xl bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)] ring-1 ring-black/[0.03]">
    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E6E6E6] text-[#111827]">
      {icon}
    </div>
    <h3 className="text-lg font-extrabold leading-snug text-[#111827]">
      {title}
    </h3>
    <p className="mt-3 text-sm leading-relaxed text-[#111827]/70">
      {description}
    </p>
  </div>
);

const Problem: React.FC = () => {
  return (
    <section id="solutions" className="bg-[#EAF4FF] px-6 py-24 md:px-12">
      <div className="mx-auto grid max-w-[1200px] items-start gap-16 lg:grid-cols-2">
        {/* LEFT */}
        <div className="flex flex-col items-start">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#F78A8A]/35 px-4 py-1.5 text-[#111827]">
            <AlertCircle className="h-4 w-4 text-[#E11D48]" />
            <span className="text-sm font-semibold">Challenge</span>
          </div>

          <h2 className="max-w-xl text-4xl font-extrabold leading-[1.05] tracking-tight text-[#111827] md:text-5xl">
            Why Reaching Credit-
            <br />
            Invisible India Remains a
            <br />
            Challenge
          </h2>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-[#111827]/75 md:text-lg">
            India faces a significant rural credit gap. Traditional banking
            infrastructure cannot reach the underserved profitably, while
            digital-only models fail to build trust and complete KYC in Bharat's
            complex socio-economic landscape.
          </p>

          {/* Quote box */}
          <div className="mt-10 w-full max-w-xl rounded-2xl border border-black/20 bg-[#F4F7FB] px-10 py-8 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
            <p className="text-center text-base leading-relaxed text-[#111827]/80">
              "Over 40% of India's adult population remains outside the formal
              credit system, not due to lack of creditworthiness, but lack of
              access and documentation."
            </p>
            <p className="mt-6 text-center text-sm text-[#111827]/60">
              — RBI Financial Inclusion Report
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="grid gap-8 sm:grid-cols-2">
          <Card
            icon={<Users2 className="h-5 w-5" />}
            title="Thin-File & No-File Borrowers"
            description="Millions of creditworthy Indians lack formal credit history, making traditional underwriting impossible."
          />
          <Card
            icon={<IndianRupee className="h-5 w-5" />}
            title="High Cost of Rural Sourcing"
            description="Physical branch expansion and on-ground sourcing significantly increase acquisition costs in semi-urban and rural regions."
          />
          <Card
            icon={<TrendingDown className="h-5 w-5" />}
            title="Low Conversion Without Assisted Support"
            description="Purely digital journeys often fail to convert first-time borrowers who require guidance, documentation support, and trust-building."
          />
          <Card
            icon={<ShieldAlert className="h-5 w-5" />}
            title="Operational & Mis-selling Risk"
            description="Fragmented DSA networks and lack of local oversight increase compliance, quality, and reputational risks for lenders."
          />
        </div>
      </div>
    </section>
  );
};

export default Problem;
