"use client";
import React from "react";

const CodeOfConduct = () => {
  return (
    // Added pt-16 and px-6/md:px-12 to match the Hero margin style you requested
    <div className="pt-16 pb-10 px-6 md:px-12 bg-[#E6F3FF]">
      
      <section className="max-w-7xl mx-auto relative w-full min-h-[60vh] rounded-3xl overflow-hidden text-white flex items-center justify-center shadow-xl">
        
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110" // Changed to scale-110 for safety
        >
          <source src="/videos/sol-bg-video.mp4" type="video/mp4" />
        </video>

        {/* Dark Blue Overlay - Added bg-slate-900/60 to actually show the overlay */}
        <div className="absolute inset-0 bg-slate-900/60 backdrop-brightness-75"></div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 flex flex-col items-center text-center">
          
          {/* Governance Badge */}
          <span className="inline-block px-5 py-1.5 text-[10px] md:text-[11px] font-bold tracking-[0.25em] border border-white/30 bg-white/10 backdrop-blur-md rounded-full mb-10 uppercase">
            GOVERNANCE
          </span>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Code of Conduct
          </h2>

          {/* Sub-Heading */}
          <h3 className="text-xl md:text-2xl font-medium text-blue-50/90 mb-12">
            Principles Guiding Responsible and Ethical Operations
          </h3>

          {/* Paragraphs */}
          <div className="max-w-3xl space-y-8">
            <p className="text-base md:text-xl leading-relaxed text-blue-50/90">
              Creditbucket Technologies Private Limited operates within clearly defined standards of 
              integrity, compliance, and accountability across all levels of engagement — including 
              internal teams, facilitators, and institutional partners.
            </p>

            <p className="text-base md:text-xl leading-relaxed text-blue-50/90">
              We are committed to ethical conduct, regulatory alignment, and responsible 
              engagement within the credit distribution ecosystem.
            </p>
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default CodeOfConduct;
