"use client";
import { 
  MagnifyingGlassIcon, 
  DocumentCheckIcon, 
  PuzzlePieceIcon, 
  MapPinIcon 
} from "@heroicons/react/24/outline";import { CapabilityCard } from "./CapabilityCard";

const CoreCapabilities = () => {
  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-[30px] md:text-[40px] font-semibold text-gray-900">
          Core Capabilities
        </h2>

        <p className="mt-3 text-black text-sm md:text-base max-w-2xl mx-auto">
          Operational modules that support structured credit distribution.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <CapabilityCard
            icon={<MagnifyingGlassIcon className="w-3 h-3" />}
            title="Assisted Borrower Sourcing"
            text="Structured identification and onboarding of underserved and semi-formal borrowers through assisted digital channels and local facilitation networks. Ensures applications originate from informed and guided participants rather than unverified lead flows."
          />

          <CapabilityCard
            icon={<DocumentCheckIcon className="w-3 h-3" />}
            title="Guided Digital Onboarding & KYC Support"
            text="End-to-end assisted application support, including document guidance, KYC coordination, and submission alignment with partner requirements. Designed to reduce incomplete filings and improve process clarity in low-literacy environments."
          />

          <CapabilityCard
            icon={<PuzzlePieceIcon className="w-3 h-3" />}
            title="AI-Driven Engagement & Gamified Financial Learning"
            text="An AI-powered engagement layer that improves borrower participation through structured learning journeys and interactive financial literacy modules. Gamified rewards and milestone-based progression encourage responsible financial behavior, higher engagement, and stronger long-term retention."
          />

          <CapabilityCard
            icon={<MapPinIcon className="w-3 h-3" />}
            title="Application Coordination & Process Support"
            text="Real-time tracking, structured communication, and assisted follow-through between borrower and lender systems. Ensures smoother processing cycles and clearer visibility across the application journey."
          />

        </div>

      </div>
    </section>
  );
};

export default CoreCapabilities;