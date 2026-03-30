"use client";

import React from "react";

const LoanDisbursalProcess = () => {
  const steps = [
    {
      step: "1",
      title: "Application Submission",
      description:
        "Borrower applications are submitted through Creditbucket's assisted infrastructure and securely routed to partner lending institutions.",
    },
    {
      step: "2",
      title: "Lender Evaluation",
      description:
        "All credit assessment, underwriting, eligibility determination, and approval decisions are conducted exclusively by the regulated financial institution.",
    },
    {
      step: "3",
      title: "Loan Sanction & Terms",
      description:
        "Loan amount, pricing, tenure, and repayment structure are defined solely by the partner lender in accordance with its internal credit policies.",
    },
    {
      step: "4",
      title: "Direct Disbursal",
      description:
        "Upon approval, funds are disbursed directly from the lender to the borrower's designated bank account. Creditbucket does not receive, hold, or process loan funds at any stage.",
    },
  ];

  return (
    <section className="py-14 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Loan Disbursal Process
          </h2>
          <p className="text-lg text-gray-700 font-medium">
            A structured, transparent process from application to fund transfer.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 mt-20">
          {steps.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 pt-16 flex flex-col items-center text-center shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              {/* The Semi-Circle Step Indicator */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-14">
                <div className="w-full h-full relative overflow-hidden">
                  {/* The Arc */}
                  <div className="absolute top-[-52px] left-0 w-full h-[100px] border-[2px] border-[#0C82DD] rounded-full flex items-end justify-center pb-2 transition-all duration-300 group-hover:bg-[#0C82DD]">
                    {/* The Step Number */}
                    <span className="text-[#0C82DD] font-bold text-xl mb-1 group-hover:text-white transition-colors duration-300">
                      {item.step}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <h3 className="text-2xl font-bold mb-6 text-gray-800 transition-colors duration-300 group-hover:text-[#0C82DD]">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Caption */}
        <p className="text-center text-xs text-gray-500 mt-16 italic">
          A structured, transparent process from application to fund transfer.
        </p>
      </div>
    </section>
  );
};

export default LoanDisbursalProcess;