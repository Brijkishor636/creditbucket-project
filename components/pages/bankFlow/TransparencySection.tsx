"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const TransparencySection = () => {
  return (
    <section className="relative w-full overflow-hidden border-y border-blue-100">
      
      {/* Top Section - Reduced Padding and Smaller Text */}
      <div className="py-10 md:py-14 px-6 flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto space-y-5">
          
          {/* Smaller Circular Icon */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-14 h-14 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm border border-blue-200"
          >
            <ShieldCheck className="text-[#0C82DD] w-7 h-7" strokeWidth={2} />
          </motion.div>

          {/* Compact Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
            Operational Transparency & Regulatory Discipline
          </h2>

          {/* Compact Paragraphs */}
          <div className="space-y-3 text-sm md:text-[15px] text-gray-700 font-medium max-w-2xl mx-auto leading-relaxed">
            <p>
              The operational model maintains clear role separation between 
              infrastructure support and regulated lending functions.
            </p>
            <p>
              Credit authority, risk ownership, and financial exposure remain exclusively 
              with the partner institution. Our infrastructure ensures distribution 
              without financial intermediation.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section - Minimized Padding */}
      <div className="bg-[#0C82DD] py-8 px-6 flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-white text-[12px] md:text-sm font-medium leading-relaxed max-w-xl mx-auto opacity-95">
            Creditbucket Technologies Private Limited is not a deposit-taking institution and 
            does not provide loans directly. All loan agreements are executed between borrowers 
            and regulated financial institutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;