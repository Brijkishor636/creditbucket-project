"use client";
import { Layers, Smartphone, Users, Link2 } from "lucide-react";
import { OfferCard } from "./OfferCard";

const WhatWeOffer = () => {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          What We Offer
        </h2>

        <p className="mt-3 text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          Creditbucket enables structured, compliant access to underserved
          borrower segments through assisted distribution infrastructure.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <OfferCard
            icon={<Layers size={18} />}
            title="Lending Infrastructure Layer"
            text="Acts as an operational bridge between lenders and underserved borrowers."
          />

          <OfferCard
            icon={<Smartphone size={18} />}
            title="Assisted Digital Onboarding"
            text="Guided application and KYC support to reduce incomplete or misdirected applications."
          />

          <OfferCard
            icon={<Users size={18} />}
            title="On-Ground Facilitation"
            text="Local facilitators assist borrowers in understanding process and documentation without handling cash or influencing credit decisions."
          />

          <OfferCard
            icon={<Link2 size={18} />}
            title="Structured Coordination"
            text="Application tracking and process-level support aligned with partner policies."
          />
        </div>

      </div>
    </section>
  );
};

export default WhatWeOffer;