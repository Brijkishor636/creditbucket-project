"use client";
import React from "react";

const ProfessionalConduct = () => {
  return (
    <section className="w-full bg-[#0C82DD] text-white py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-16">
          Professional Conduct Standards
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 items-center">
          <div className="space-y-16">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">
                Ethical Business Practices
              </h3>
              <ul className="space-y-3 text-base md:text-lg opacity-90 list-none">
                <li className="flex gap-2"><span>•</span> No fraud, theft, or financial misconduct.</li>
                <li className="flex gap-2"><span>•</span> No conflicts of interest with competitors or external entities.</li>
                <li className="flex gap-2"><span>•</span> No unauthorized representation of Creditbucket.</li>
              </ul>
            </div>

            <div className="md:pt-4">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">
                Workplace Conduct
              </h3>
              <ul className="space-y-3 text-base md:text-lg opacity-90 list-none">
                <li className="flex gap-2"><span>•</span> No harassment, bullying, or discrimination.</li>
                <li className="flex gap-2"><span>•</span> Adherence to workplace safety guidelines.</li>
                <li className="flex gap-2"><span>•</span> Respectful and professional communication.</li>
              </ul>
            </div>
          </div>

          <div className="flex md:justify-end md:items-center h-full">
            <div className="max-w-lg">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">
                Data Protection & Confidentiality
              </h3>
              <ul className="space-y-3 text-base md:text-lg opacity-90 list-none">
                <li className="flex gap-2"><span>•</span> Protection of company and borrower information.</li>
                <li className="flex gap-2"><span>•</span> No misuse of data or digital systems.</li>
                <li className="flex gap-2"><span>•</span> Adherence to cybersecurity protocols.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalConduct;