"use client";

import React from "react";

const RepaymentServicingStructure = () => {
  const points = [
    {
      step: "1",
      title: "Repayment Schedule Defined by Lender",
      description:
        "All repayment obligations are established by the partner financial institution.",
    },
    {
      step: "2",
      title: "Borrower Repayment",
      description:
        "Repayments are made directly to the lender through approved banking channels.",
    },
    {
      step: "3",
      title: "Account Servicing",
      description:
        "Loan servicing and account management remain under lender control.",
    },
    {
      step: "4",
      title: "Portfolio Governance",
      description:
        "Credit risk, balance sheet exposure, and portfolio management remain exclusively with the lender.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#0C82DD] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Repayment & Servicing Structure
          </h2>
          <p className="text-base md:text-lg opacity-90 font-medium max-w-2xl mx-auto">
            All repayment obligations and servicing remain under lender governance.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 py-12 flex flex-col items-center text-center shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Number Badge Style */}
              <div className="w-10 h-10 bg-[#E8F4FD] rounded-lg flex items-center justify-center mb-8">
                <span className="text-[#0C82DD] font-bold text-lg">
                  {item.step}
                </span>
              </div>

              {/* Text Content */}
              <h3 className="text-gray-900 text-xl font-bold mb-4 leading-snug h-auto lg:h-[60px] flex items-center">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RepaymentServicingStructure;