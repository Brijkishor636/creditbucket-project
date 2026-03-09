import React from "react";
import {
  Landmark,
  Cpu,
  Users,
  UserCircle,
  ArrowRight,
} from "lucide-react";

type StepCardProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

const StepCard: React.FC<StepCardProps> = ({ icon, title, text }) => (
  <div className="relative z-10 w-full rounded-3xl bg-[#EAF4FF] px-10 py-9 text-center shadow-[0_18px_40px_rgba(0,0,0,0.12)] ring-1 ring-white/35">
    <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white ring-1 ring-[#2E7BF6]/35">
      <div className="text-[#2E7BF6]">{icon}</div>
    </div>

    <h4 className="text-xl font800 text-[#0B1B2B] font-extrabold">{title}</h4>
    <p className="mt-3 text-sm leading-relaxed text-[#0B1B2B]/70">{text}</p>
  </div>
);

type HighlightProps = {
  title: string;
  text: string;
};

const Highlight: React.FC<HighlightProps> = ({ title, text }) => (
  <div className="rounded-3xl bg-white px-10 py-9 text-center shadow-[0_18px_40px_rgba(0,0,0,0.12)] ring-1 ring-white/35">
    <h5 className="text-xl font-extrabold text-[#2E7BF6]">{title}</h5>
    <p className="mt-3 text-sm leading-relaxed text-[#0B1B2B]/70">{text}</p>
  </div>
);

const Solution: React.FC = () => {
  return (
    <section id="phygital-model" className="w-full bg-[#EAF2FF] py-10">
      {/* Main rounded blue panel */}
      <div className="mx-auto max-w-[1400px] px-4 md:px-6">
        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-b from-[#0B73D8] via-[#0A67C7] to-[#085FB9] px-6 py-16 md:px-12 md:py-20">
          {/* subtle pattern */}
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <div className="absolute -left-24 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0,55 C20,40 30,70 50,55 S80,40 100,55"
                fill="none"
                stroke="white"
                strokeWidth="0.35"
                opacity="0.35"
              />
              <path
                d="M0,40 C22,25 30,55 50,40 S78,25 100,40"
                fill="none"
                stroke="white"
                strokeWidth="0.35"
                opacity="0.25"
              />
            </svg>
          </div>

          {/* Header */}
          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
            <div className="mb-7 inline-flex items-center rounded-full bg-white/90 px-6 py-2 text-sm font-semibold text-[#0B1B2B] shadow-sm">
              Solution
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              Phygital Infrastructure for Inclusive Lending
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/80 md:text-xl">
              A phygital distribution model combining local trust with
              institutional-grade technology and compliance.
            </p>
          </div>

          {/* Steps + connector line */}
          <div className="relative z-10 mx-auto mt-14 max-w-6xl">
            {/* connector */}
            <div className="pointer-events-none absolute left-0 right-0 top-[58px] hidden items-center lg:flex">
              {/* left dot */}
              <span className="h-2 w-2 rounded-full bg-white/85" />
              {/* line */}
              <div className="mx-4 h-[2px] flex-1 bg-white/55" />
              {/* arrow head */}
              <div className="mr-4 h-[2px] w-8 bg-white/55" />
              <div className="h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-white/70" />
            </div>

            <div className="grid gap-8 lg:grid-cols-4">
              <StepCard
                icon={<Landmark className="h-7 w-7" />}
                title="Banks & NBFCs"
                text="Regulated lending partners provide capital and compliance framework"
              />
              <StepCard
                icon={<Cpu className="h-7 w-7" />}
                title="Creditbucket Tech"
                text="Our platform handles sourcing, screening, and workflow orchestration"
              />
              <StepCard
                icon={<Users className="h-7 w-7" />}
                title="Samriddh Sathi"
                text="Local facilitators who assist with onboarding, training, and trust-building."
              />
              <StepCard
                icon={<UserCircle className="h-7 w-7" />}
                title="End Customer"
                text="Underserved borrowers receive formal credit with full transparency"
              />
            </div>
          </div>

          {/* Highlights */}
          <div className="relative z-10 mx-auto mt-12 max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-3">
              <Highlight
                title="Compliance-First"
                text="RBI-aligned processes with complete audit trails and transparent fund flows."
              />
              <Highlight
                title="Zero Commission Model"
                text="End customers never pay extra fees - our model is bank-funded, not borrower-exploitative."
              />
              <Highlight
                title="Scalable Network"
                text="400+ trained field agents across 1,600+ pin codes, ready to expand with partner needs."
              />
            </div>
          </div>

          {/* Bottom strip + button (like the image) */}
          <div className="relative z-10 mt-14">
            <div className="-mx-6 md:-mx-12">
              <div className="bg-[#EAF2FF] py-8">
                <div className="flex justify-center">
                  <button className="group inline-flex items-center gap-3 rounded-2xl bg-[#1677F2] px-10 py-4 text-base font-bold text-white shadow-[0_16px_36px_rgba(22,119,242,0.35)] transition hover:bg-white hover:text-[#0B1B2B]">
                    Learn More
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
