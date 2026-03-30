"use client";

import React, { useState, useEffect } from "react";
// 1. Import LucideIcon type for strict typing
import {
  AlertCircle,
  Users2,
  IndianRupee,
  TrendingDown,
  ShieldAlert,
  LucideIcon, 
} from "lucide-react";

// 2. Update Card to accept 'icon' as a LucideIcon component
const Card: React.FC<{
  icon: LucideIcon; 
  title: string;
  description: string;
}> = ({ icon: Icon, title, description }) => ( // Rename 'icon' to 'Icon' (capitalized) to render as component
  <div className="group rounded-2xl bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] ring-1 ring-black/[0.03] hover:shadow-[0_25px_60px_rgba(225,29,72,0.1)]">
    {/* Icon Container: Simply render the Icon component here */}
    <div className="mb-6 flex h-12 w-12 items-center justify-center mx-auto md:mx-0 rounded-xl bg-slate-100 text-slate-700 group-hover:bg-[#F88A8A] group-hover:text-white transition-colors duration-300">
      <Icon size={20} />
    </div>
    <h3 className="text-[24px] font-bold leading-snug text-slate-900 text-center md:text-left transition-colors duration-300 ">
      {title}
    </h3>
    <p className="mt-3 text-sm leading-relaxed text-slate-600 text-center md:text-left">
      {description}
    </p>
  </div>
);

const Problem: React.FC = () => {
  const quotes = [
    { text: "Over 80% of India's workforce operates in the informal sector, while formal lending remains documentation-driven.", source: "International Labour Organization (ILO)" },
    { text: "Despite contributing significantly to economic output, rural India remains under-penetrated by formal credit systems.", source: "NABARD Financial Inclusion Report" },
    { text: "Over 40% of India's adult population remains outside the formal credit system due to lack of access and documentation.", source: "RBI Financial Inclusion Report" },
    { text: "A large share of new-to-credit customers are declined due to credit history, not lack of repayment capacity.", source: "TransUnion CIBIL Insights" }
  ];

  const [activeQuote, setActiveQuote] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setActiveQuote((prev) => (prev + 1) % quotes.length);
        setFade(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <section id="solutions" className=" px-6 py-24 md:px-12 relative overflow-hidden">
      <div className="mx-auto grid max-w-[1200px] items-start gap-16 lg:grid-cols-2">
        
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-center md:items-start lg:sticky lg:top-32">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#F88A8A] border border-red-350 px-4 py-1.5 text-rose-350 animate-pulse">
            <AlertCircle className="h-4 w-4" />
            <span className="text-sm font-bold uppercase tracking-wider">The Challenge</span>
          </div>

          <p className="max-w-xl  text-[40px] md:text-[52px]font-black text-center md:text-left leading-[1.1] tracking-tight text-slate-900 md:text-5xl">
            Why Reaching Credit- <br />
            Invisible India Remains a <br />
            Major Challenge
          </p>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-600 text-center md:text-left">
            India faces a significant rural credit gap. Traditional banking
            infrastructure cannot reach the underserved profitably.
          </p>

          <div className="mt-10 w-full max-w-xl min-h-[180px] rounded-2xl border border-black bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-rose-500/10 flex flex-col justify-center cursor-pointer">
            <div className={`transition-all duration-500 transform ${fade ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
              <p className="text-center text-[17px] italic font-medium leading-relaxed text-slate-700">
                "{quotes[activeQuote].text}"
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="h-px w-8 " />
                <p className="text-xs font-bold uppercase tracking-widest text-[#1B84E7]">
                  {quotes[activeQuote].source}
                </p>
                <div className="h-px w-8 " />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT: Pass the component name, NOT the JSX element */}
        <div className="grid gap-6 sm:grid-cols-2">
          <Card
            icon={Users2}
            title="Thin-File Borrowers"
            description="Millions lack formal credit history, making traditional underwriting impossible."
          />
          <Card
            icon={IndianRupee}
            title="High Sourcing Cost"
            description="Physical branch expansion increases acquisition costs in rural regions."
          />
          <Card
            icon={TrendingDown}
            title="Low Conversion"
            description="Digital journeys fail without assisted guidance and trust-building."
          />
          <Card
            icon={ShieldAlert}
            title="Operational Risk"
            description="Lack of local oversight increases compliance and reputational risks."
          />
        </div>

      </div>
    </section>
  );
};

export default Problem;