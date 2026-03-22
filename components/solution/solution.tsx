"use client";
import React from "react";
import {
  Landmark,
  Cpu,
  Users,
  UserCircle,
} from "lucide-react";
import ArrowRightButton from "../common/ArrowRightButton"

type StepCardProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

const StepCard: React.FC<StepCardProps> = ({ icon, title, text }) => (
  <div className="relative z-10 rounded-2xl bg-[#FFFFFFE5] px-6 py-8 text-center backdrop-blur-sm">
    
    <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-blue-300 bg-white">
      <div className="text-blue-600">{icon}</div>
    </div>

    <h4 className="text-sm font-semibold text-[#0B1B2B]">{title}</h4>
    <p className="mt-2 text-xs text-gray-600 leading-relaxed">{text}</p>
  </div>
);

type HighlightProps = {
  title: string;
  text: string;
};

const Highlight: React.FC<HighlightProps> = ({ title, text }) => (
  <div className="rounded-2xl bg-[#FFFFFFE5] px-6 py-6 text-center backdrop-blur-sm">
    <h5 className="text-sm font-semibold text-blue-600">{title}</h5>
    <p className="mt-2 text-xs text-gray-600">{text}</p>
  </div>
);

const Solution: React.FC = () => {
  return (
    <section className="w-full bg-[#EAF2FF] py-12">
      <div className="mx-auto max-w-[1400px] px-4">

        {/* MAIN BOX */}
        <div className="relative rounded-[28px] bg-[#0C82DD] px-6 py-16 md:px-12">

          {/* HEADER */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block rounded-full bg-white px-5 py-1 text-sm font-medium text-blue-600 mb-6">
              Solution
            </div>

            <h2 className="text-2xl md:text-4xl font-semibold text-white">
              Phygital Infrastructure for Inclusive Lending
            </h2>

            <p className="mt-4 text-white/80 text-sm md:text-base">
              A phygital distribution model combining local trust with institutional-grade
              technology and compliance.
            </p>
          </div>

          {/* STEPS */}
          <div className="relative mt-14">

            <div className="hidden lg:flex absolute top-[60px] left-[-30px] right-[-30px] items-center">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <div className="flex-1 h-[1px] bg-white"></div>
              <div className="w-6 h-[1px] bg-white"></div>
              <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-t-transparent border-b-transparent border-l-white"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 md:px-6 lg:px-12">
              <StepCard
                icon={<Landmark className="h-5 w-5" />}
                title="Banks & NBFCs"
                text="Regulated lending partners provide capital and compliance framework"
              />
              <StepCard
                icon={<Cpu className="h-5 w-5" />}
                title="Creditbucket Tech"
                text="Our in-platform handles sourcing, screening, and workflow orchestration"
              />
              <StepCard
                icon={<Users className="h-5 w-5" />}
                title="Samriddh Saathi"
                text="1600+ local facilitators who assist with onboarding, training, and trust-building."
              />
              <StepCard
                icon={<UserCircle className="h-5 w-5" />}
                title="End Customer"
                text="Underserved borrowers receive formal credit with full transparency"
              />
            </div>
          </div>

          {/* HIGHLIGHTS */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:px-6 lg:px-12">
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
      </div>
      <div className="flex justify-center items-center pt-8">
        <ArrowRightButton name="Learn More"/>
      </div>
    </section>
  );
};

export default Solution;