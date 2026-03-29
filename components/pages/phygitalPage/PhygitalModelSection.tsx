"use client";

import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from 'framer-motion';
// Ensure this path matches your project structure
import bgImg from "@/assets/images/physital-bg.png"; 

/**
 * PhygitalModelSection
 * A responsive section explaining the combination of Physical & Digital layers.
 */
const PhygitalModelSection = () => {
  return (
    <section
      className="relative w-full rounded-[2.5rem] overflow-hidden bg-cover bg-center shadow-2xl"
      style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      {/* The Gradient Overlay: 
        Using min-h-fit instead of max-h allows the section to expand 
        to fit the cards when they stack on mobile.
      */}
      <div className="w-full h-full min-h-fit bg-gradient-to-br from-[#0C4A6E]/98 via-[#0C4A6E]/90 to-[#0C82DD]/80 px-6 py-16 md:py-24">
        
        <div className="max-w-7xl mx-auto">
          
          {/* --- TOP SECTION: Header --- */}
          <div className="text-center text-white max-w-3xl mx-auto mb-12 md:mb-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 border border-white/30 rounded-full bg-[#1B84E7] text-white/90 text-[10px] font-bold tracking-[0.2em] mb-6 backdrop-blur-md uppercase"
            >
              Model Overview
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              What Is the Phygital Model?
            </h2>
          </div>

          {/* --- BOTTOM SECTION: Content & Cards --- */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">

            {/* Left Column: Descriptive Text */}
            <div className="text-white lg:flex-1 space-y-6 text-[16px] md:text-lg text-center lg:text-left font-light opacity-90 leading-relaxed">
              <p>
                The <strong>phygital model</strong> combines physical facilitation with digital processing systems to improve structured access to credit in underserved markets.
              </p>

              <p>
                While digital platforms enable scale and efficiency, physical assistance ensures clarity, guidance, and accessibility for borrowers who may face literacy, documentation, or technology barriers.
              </p>

              <p>
                By integrating both layers, Creditbucket creates a controlled and compliant distribution environment that supports lenders while improving borrower participation.
              </p>
            </div>

            {/* Right Column: Responsive Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-auto">
              <LayerCard
                title="Physical Layer"
                items={[
                  "On-ground facilitators (Samriddh Saathis)",
                  "Assisted documentation",
                  "Process explanation",
                ]}
              />

              <LayerCard
                title="Digital Layer"
                items={[
                  "Application routing",
                  "Underwriting integration",
                  "Tracking & coordination",
                ]}
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

/* --- SUB-COMPONENT: LayerCard --- */

interface LayerCardProps {
  title: string;
  items: string[];
}

const LayerCard = ({ title, items }: LayerCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="
        bg-[#1B84E7]
        text-white 
        rounded-[1.5rem] 
        p-7 sm:p-8 
        /* Responsive Widths */
        w-full sm:w-[280px] lg:w-[320px]
        min-h-[240px] md:min-h-[280px]
        flex flex-col
        
        /* Premium Shadows & Inner Glow */
        shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),inset_0_4px_12px_rgba(255,255,255,0.2)]
        transition-all duration-300 ease-out
        hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]
        border border-white/10
      "
    >
      <h3 className="text-[22px] md:text-[26px] font-bold mb-6 border-b border-white/20 pb-3 tracking-tight">
        {title}
      </h3>

      <ul className="space-y-4">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle size={20} className="text-white shrink-0 mt-0.5" strokeWidth={2.5} />
            <span className="text-sm md:text-base font-medium leading-snug">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default PhygitalModelSection;