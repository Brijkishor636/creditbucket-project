"use client";
import { Globe, FileCheck, HeartHandshake, ShieldCheck } from "lucide-react";
import { WhyCard } from "./WhyCard";

const WhyPartner = () => {
  return (
    <section className="w-full py-14 px-4">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Why Partner with Creditbucket
        </h2>

        <p className="mt-3 text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          Our phygital infrastructure delivers measurable outcomes for lending partners while ensuring ethical, compliant service to borrowers.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">

          <WhyCard
            icon={<Globe size={18} />}
            title="Access Beyond Digital-Only Channels"
            text="Combines technology and assisted facilitation to reach borrower segments that are difficult to serve through branch-only or app-only models."
          />

          <WhyCard
            icon={<FileCheck size={18} />}
            title="Higher Application Clarity"
            text="Guided onboarding and engagement tools reduce incomplete submissions and improve borrower understanding."
          />

          <WhyCard
            icon={<HeartHandshake size={18} />}
            title="Engagement-Driven Retention"
            text="AI-powered learning and gamified engagement modules support long-term borrower participation and responsible financial behavior."
          />

          <WhyCard
            icon={<ShieldCheck size={18} />}
            title="Structured & Compliant Distribution"
            text="Clear role separation, documented processes, and defined operational boundaries aligned with institutional frameworks."
          />

        </div>

      </div>
    </section>
  );
};

export default WhyPartner;