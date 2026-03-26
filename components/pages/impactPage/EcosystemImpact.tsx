"use client";
import React from "react";
import { ClipboardCheck, ShieldCheck, Globe, Link } from "lucide-react";

const impactData = [
  {
    title: "Improved Application Discipline",
    desc: "Guided onboarding and structured facilitation reduce incomplete submissions and improve documentation clarity in semi-formal markets.",
    icon: <ClipboardCheck size={20} />,
  },
  {
    title: "Responsible Borrower Participation",
    desc: "AI-driven engagement and gamified learning modules encourage informed participation and long-term financial behavior alignment.",
    icon: <ShieldCheck size={20} />,
  },
  {
    title: "Institutional-Grade Distribution Structure",
    desc: "Clearly defined operational roles and process documentation support governance-aligned distribution in emerging geographies.",
    icon: <Globe size={20} />,
  },
  {
    title: "Enhanced Portfolio Visibility",
    desc: "Structured application routing and coordinated communication improve traceability and decision-stage transparency.",
    icon: <Link size={20} />,
  },
];

const EcosystemImpact = () => {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
            Ecosystem-Level Impact
          </h2>
          <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Beyond geographic presence, our infrastructure model contributes to
            measurable structural improvements across borrower engagement and
            institutional credit distribution.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {impactData.map((item, index) => (
            <ImpactCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ImpactCard = ({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) => {
  return (
    <div className="group relative bg-white rounded-2xl p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden cursor-default">
      
      <div className="absolute -top-7 -right-7 w-25 h-25 bg-[#d1e9ff] rounded-full transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-translate-y-2" />

      <div className="relative z-10 w-10 h-10 flex items-center justify-center rounded-lg bg-gray-200 text-gray-600 transition-colors duration-300 group-hover:bg-[#0C82DD] group-hover:text-white mb-6">
        {icon}
      </div>

      <div className="relative z-10">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 tracking-tight transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default EcosystemImpact;