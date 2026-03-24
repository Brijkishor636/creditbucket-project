"use client";
import React from "react";
import { Banknote, Cpu, Users, User } from "lucide-react";
import FlowCard from "./FlowCard";
import FeatureCard from "./FeatureCard";
import SectionTag from "./SectionTag";
import Button from "../common/Button";

const TestimonialSection: React.FC = () => {
  return (
    <section className="w-full py-16 px-6">
<<<<<<< HEAD
      <div className="m-10 mx-auto rounded-3xl bg-gradient-to-br from-[#55a1db] to-[#5198cf] p-10 text-white relative overflow-hidden">
=======
      <div className="m-10 mx-auto rounded-3xl bg-gradient-to-br from-[#1d69a4] to-[#2088d7] p-10 text-white relative overflow-hidden">
>>>>>>> bd4c8d6540bf03d51576ba4a2aa12519477629d5

        <div className="text-center space-y-4 mb-12">
          <SectionTag text="Solution" />
          <h2 className="text-3xl md:text-4xl font-semibold mt-4">
            Phygital Infrastructure for Inclusive Lending
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            A phygital distribution model combining local trust with institutional-grade technology and compliance.
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 lg:mx-10 xl:mx-30">

          <FlowCard
            icon={Banknote}
            title="Banks & NBFCs"
            desc="Regulated lending partners provide capital and compliance framework."
          />
          <FlowCard
            icon={Cpu}
            title="Creditbucket Tech"
            desc="Our platform handles sourcing, screening and workflow orchestration."
          />
          <FlowCard
            icon={Users}
            title="Samriddh Sathi"
            desc="Local facilitators assist with onboarding, training and trust building."
          />
          <FlowCard
            icon={User}
            title="End Customer"
            desc="Underserved borrowers receive formal credit with transparency."
          />

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 lg:mx-10 xl:mx-30">
          <FeatureCard
            title="Compliance-First"
            desc="RBI-aligned processes with complete audit trails and transparent fund flows."
          />
          <FeatureCard
            title="Zero Commission Model"
            desc="End customers never pay extra fees — bank funded, not borrower exploitative."
          />
          <FeatureCard
            title="Scalable Network"
            desc="400+ trained agents across 1,600+ pin codes ready to expand."
          />
        </div>
      </div>
      <div className="text-center mt-10">
          <Button name="Learn More →"/>
        </div>
    </section>
  );
};

<<<<<<< HEAD
export default TestimonialSection;
=======
export default TestimonialSection;
>>>>>>> bd4c8d6540bf03d51576ba4a2aa12519477629d5
