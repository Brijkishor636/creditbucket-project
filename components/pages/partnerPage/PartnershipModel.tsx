"use client";
import React from "react";
import cImg from "@/assets/images/creditblack.png";
import bImg from "@/assets/images/bank.png";

const PartnershipModel = () => {
  return (
    <section className="w-full py-20 px-4 bg-[linear-gradient(135deg,#E6F3FF,#B9D9F6)]">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-[30px] md:text-[40px] font-semibold text-gray-900">
          Partnership Model
        </h2>

        <p className="mt-4 text-black-600 text-base max-w-2xl mx-auto">
          Our partnerships operate through clearly defined role separation <br/>
          and structured operational accountability.
        </p>

        {/* MAIN CARD */}
        <div className="
          mt-12 
         
          rounded-[28px] 
          bg-[#F5F7FA]
          border-l-[6px] border-r-[6px] border-[#0C82DD]
          shadow-[0_20px_50px_rgba(0,0,0,0.08)]
          overflow-hidden
        ">
          <div className="grid grid-cols-1 md:grid-cols-2 relative">

            {/* CENTER DIVIDER */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[4px] bg-[#0C82DD]"></div>

            {/* LEFT */}
            <div className="p-10 md:pr-12 text-left">
              <div className="flex items-center gap-4 mb-8">

                {/* 🔥 ICON BADGE */}
                <div className="
                  w-14 h-14 
                  flex items-center justify-center 
                  rounded-full 
                  bg-gradient-to-br from-blue-200 to-blue-400
                ">
                  {/* Fixed: Accessing .src property */}
                  <img src={cImg.src} className="w-6 h-6" alt="Creditbucket" />
                </div>

                <h3 className="text-[28px] font-semibold text-gray-900">
                  Creditbucket Responsibilities
                </h3>
              </div>

              <ul className="space-y-5 text-[15px] text-gray-700">
                {[
                  "Assisted borrower sourcing",
                  "Guided digital onboarding & KYC coordination",
                  "AI-driven engagement & financial literacy modules",
                  "Application facilitation & process support",
                  "Structured communication between borrower and lender systems",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="
                      w-6 h-6 flex items-center justify-center 
                      rounded-full bg-gray-200 text-[#0C82DD] text-xs font-bold
                    ">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT */}
            <div className="p-10 md:pl-12 text-left">
              <div className="flex items-center gap-4 mb-8">

                {/* 🔥 ICON BADGE */}
                <div className="
                  w-14 h-14 
                  flex items-center justify-center 
                  rounded-full 
                  bg-gradient-to-br from-blue-200 to-blue-400
                ">
                  {/* Fixed: Accessing .src property */}
                  <img src={bImg.src} className="w-7 h-7" alt="Lender" />
                </div>

                <h3 className="text-[28px] font-semibold text-gray-900">
                  Lender Responsibilities
                </h3>
              </div>

              <ul className="space-y-5 text-[15px] text-black-700">
                {[
                  "Credit underwriting & eligibility assessment",
                  "Risk evaluation & approval decisions",
                  "Pricing & loan sanction terms",
                  "Disbursal & repayment management",
                  "Regulatory compliance & portfolio governance",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="
                      w-6 h-6 flex items-center justify-center 
                      rounded-full bg-gray-200 text-[#0C82DD] text-xs font-bold
                    ">
                      ✓
                    </span>
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