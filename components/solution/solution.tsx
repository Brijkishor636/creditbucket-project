"use client";
import React from "react";
import {
  Landmark,
  Cpu,
  Users,
  UserCircle,
  LucideIcon,
} from "lucide-react";
import Button from "../common/Button";

type StepCardProps = {
  icon: LucideIcon; 
  title: string;
  text: string;
};

const StepCard: React.FC<StepCardProps> = ({ icon: Icon, title, text }) => (
  <div className="group relative z-10 rounded-2xl bg-white/90 px-6 py-8 text-center backdrop-blur-sm hover:shadow-2xl cursor-pointer">
    <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-blue-200 bg-white text-[#1B84E7] transition-all duration-500 group-hover:bg-[#1B84E7] group-hover:text-white group-hover:border-[#1B84E7] group-hover:shadow-lg group-hover:shadow-blue-400/40">
      <Icon size={24} />
    </div>
    <h4 className="text-base font-bold text-[#0B1B2B] transition-colors duration-300 group-hover:text-[#1B84E7]">
      {title}
    </h4>
    <p className="mt-3 text-xs text-gray-600 leading-relaxed font-medium">
      {text}
    </p>
  </div>
);

type HighlightProps = {
  title: string;
  text: string;
};

const Highlight: React.FC<HighlightProps> = ({ title, text }) => (
  <div className="group rounded-2xl bg-white/90 px-6 py-8 text-center backdrop-blur-sm cursor-default border border-transparent hover:border-blue-300">
    <h5 className="text-sm font-bold text-[#1B84E7] tracking-wider">
      {title}
    </h5>
    <p className="mt-2 text-xs text-gray-600 ">
      {text}
    </p>
  </div>
);

const Solution: React.FC = () => {
  return (
    <section className="w-full py-14">
      <div className="w-full px-4 lg:px-6">

        <div className="relative rounded-[40px] bg-[#0C82DD] px-6 py-20 md:px-12 shadow-2xl overflow-hidden">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full -mr-20 -mt-20" />

          {/* --- RESPONSIVE HEADER START --- */}
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="inline-block rounded-full bg-[#EBF5FF] px-6 py-2 text-sm font-medium text-[#1e293b] mb-8 shadow-sm">
              Solution
            </div>

            {/* Changed from fixed 30px to responsive sizes */}
            <h2 className="text-2xl sm:text-3xl md:text-[30px] font-bold text-white leading-tight md:leading-2.5">
              Phygital Infrastructure for Inclusive Lending
            </h2>

            {/* Adjusted text size and max-width for mobile readability */}
            <p className="mt-6 text-white text-sm sm:text-base md:text-lg max-w-2xl mx-auto opacity-90 font-medium leading-relaxed">
              A phygital distribution model combining local trust with institutional-grade
              technology and compliance.
            </p>
          </div>
          {/* --- RESPONSIVE HEADER END --- */}

          <div className="relative mt-20">
            <div className="hidden lg:flex absolute top-[40px] left-10 right-10 items-center -z-0">
              <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              <StepCard
                icon={Landmark}
                title="Banks & NBFCs"
                text="Regulated lending partners provide capital and compliance framework"
              />
              <StepCard
                icon={Cpu}
                title="Creditbucket Tech"
                text="Our in-platform handles sourcing, screening, and workflow orchestration"
              />
              <StepCard
                icon={Users}
                title="Samriddh Saathi"
                text="1600+ local facilitators who assist with onboarding and trust-building."
              />
              <StepCard
                icon={UserCircle}
                title="End Customer"
                text="Underserved borrowers receive formal credit with full transparency"
              />
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Highlight
              title="Compliance-First"
              text="RBI-aligned processes with complete audit trails and transparent fund flows."
            />
            <Highlight
              title="Zero Commission Model"
              text="End customers never pay extra fees – our model is bank-funded."
            />
            <Highlight
              title="Scalable Network"
              text="400+ agents across 1,600+ pin codes, ready to expand."
            />
          </div>

        </div>

        <div className="flex justify-center items-center pt-16">
          <Button name="Learn More " variant="arrow" className="px-10 py-4 text-base" />
        </div>
      </div>
    </section>
  );
};

export default Solution;