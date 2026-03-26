"use client";
import React from "react";
import { CheckCircle, Building2, Users } from "lucide-react";

const PartnershipModel = () => {
  return (
    <section className="w-full py-14 px-4">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Partnership Model
        </h2>

        <p className="mt-3 text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          Our partnerships operate through clearly defined role separation and structured operational accountability.
        </p>

        <div className="mt-10 rounded-2xl overflow-hidden bg-white border-l-4 border-r-4 border-blue-500">
          <div className="grid grid-cols-1 md:grid-cols-2 relative">

            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-blue-500"></div>

            <div className="p-6 sm:p-8 md:pr-10 text-left">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Users size={18} />
                </div>
                <h3 className="font-semibold text-gray-900">
                  Creditbucket Responsibilities
                </h3>
              </div>

              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  "Assisted borrower sourcing",
                  "Guided digital onboarding & KYC coordination",
                  "AI-driven engagement & financial literacy modules",
                  "Application facilitation & process support",
                  "Structured communication between borrower and lender systems",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-blue-500 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 sm:p-8 md:pl-10 text-left border-t md:border-t-0 md:border-l border-blue-200">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Building2 size={18} />
                </div>
                <h3 className="font-semibold text-gray-900">
                  Lender Responsibilities
                </h3>
              </div>

              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  "Credit underwriting & eligibility assessment",
                  "Risk evaluation & approval decisions",
                  "Pricing & loan sanction terms",
                  "Disbursal & repayment management",
                  "Regulatory compliance & portfolio governance",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-blue-500 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default PartnershipModel;