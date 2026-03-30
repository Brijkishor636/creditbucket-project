"use client";
import React from "react";
import { CheckCircle2 } from "lucide-react";

const OurApproachSection = () => {
  const approachItems = [
    "Better application quality",
    "Improved borrower understanding",
    "Higher completion rates",
    "Scalable and compliant distribution",
  ];

  return (
    <section className="w-full py-14 md:py-20 px-6 bg-[#0C82DD] text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Content: Heading and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl text-center sm:text-left md:text-5xl font-bold mb-6">
              Our Approach
            </h2>
            <p className="text-lg md:text-xl text-center sm:text-left font-medium max-w-md leading-snug">
              Combining technology with local support to make credit more accessible.
            </p>
          </div>

          <div className="flex flex-col justify-center space-y-5 text-center sm:text-left text-blue-50/90 text-sm md:text-base leading-relaxed">
            <p>
              Access to credit is not just about digital platforms — many borrowers need guidance, 
              support, and clarity throughout the process.
            </p>
            <p>
              Creditbucket combines technology with on-ground support to make the credit journey 
              easier to understand and complete.
            </p>
            <p>
              This approach helps borrowers feel more confident, reduces errors in applications, and 
              improves overall outcomes for both borrowers and lenders.
            </p>
          </div>
        </div>

        {/* Bottom Content: Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {approachItems.map((item, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 bg-[#D1D5DB] hover:bg-white transition-all duration-300 rounded-[22px] py-6 px-8 group"
            >
              <div className="shrink-0">
                <CheckCircle2 
                  className="w-6 h-6 md:w-7 md:h-7 text-[#0C82DD]" 
                  strokeWidth={2.5}
                />
              </div>
              <span className="text-[#0C82DD] text-lg md:text-xl font-bold tracking-tight">
                {item}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurApproachSection;