"use client";

import React from "react";
import { motion } from "framer-motion";

const FundFlowSection = () => {
  return (
    <section className="relative w-full h-auto min-h-[80vh] rounded-[2rem] lg:rounded-[3rem] overflow-hidden my-10">
      
      {/* 1. Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-[1.3]"
        >
          <source src="/videos/sol-bg-video.mp4" type="video/mp4" />
        </video>
        
        {/* Blue Gradient Overlay to match the screenshot feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4A6E]/90 to-[#0C82DD]/70" />
        
        {/* Perspective Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            perspective: '1000px',
            transform: 'rotateX(65deg) scale(2.5)',
            transformOrigin: 'top'
          }}
        ></div>
      </div>

      {/* 2. Main Content Container */}
      <div className="
        relative z-10 
        max-w-[1300px] mx-auto 
        px-6 md:px-10 lg:px-14
        py-16 lg:py-24
        min-h-[80vh]
        flex flex-col lg:grid lg:grid-cols-12 
        items-center justify-center
        gap-12 lg:gap-14
      ">

        {/* LEFT CONTENT: Text and Governance info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 text-center lg:text-left text-white space-y-6 md:space-y-8"
        >
          <div className="inline-block px-5 py-1.5 border border-white/20 rounded-full bg-[#1B84E7] text-white text-[11px] font-semibold uppercase tracking-[0.2em] backdrop-blur-md">
            Governance
          </div>

          <h1 className="text-[32px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.1] tracking-tight">
            Direct Bank-to-Customer <br /> Fund Flow
          </h1>

          <div className="space-y-6 max-w-[600px] mx-auto lg:mx-0">
            <h2 className="text-[18px] md:text-[22px] font-medium text-blue-100">
              Clear Separation of Creditbucket and money flow
            </h2>
            
            <p className="text-[15px] md:text-[17px] text-white/80 leading-relaxed font-light">
              Creditbucket operates strictly as a lending infrastructure and distribution partner. 
              All loan disbursals and repayments occur directly between the regulated financial 
              institution and the borrower.
            </p>
            
            <p className="text-[15px] md:text-[17px] text-white/80 leading-relaxed font-light">
              Creditbucket does not intermediate, hold, route, or process loan funds at any stage.
            </p>
            
            <p className="text-[12px] md:text-[13px] text-white/40 italic pt-4 border-t border-white/10 uppercase tracking-wider">
              Credit decisions and loan ownership remain with our partner institutions.
            </p>
          </div>
        </motion.div>

        {/* RIGHT CONTENT: The Direct Flow Diagram */}
        <div className="lg:col-span-5 w-full flex flex-col items-center justify-center">
          
          <FlowBox 
            title="Banks / NBFC" 
            subtitle="Lending Partner" 
            delay={0.2} 
          />

          {/* Connection Line with Label */}
          <div className="flex flex-col items-center py-8">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-[10px] sm:text-[12px] uppercase tracking-[0.25em] text-white/70 mb-4"
            >
              Direct Fund Transfer
            </motion.span>
            
            <div className="relative h-20 w-[1px] bg-gradient-to-b from-white/60 to-white">
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-[-8px] left-[-4px] border-l-[5px] border-r-[5px] border-t-[10px] border-l-transparent border-r-transparent border-t-white"
              />
            </div>
          </div>

          <FlowBox 
            title="Borrower" 
            subtitle="End Customer" 
            delay={0.5} 
          />
          
        </div>

      </div>
    </section>
  );
};

/* --- Helper FlowBox Component --- */

const FlowBox = ({ title, subtitle, delay }: { title: string; subtitle: string; delay: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="
        w-full max-w-[380px]
        bg-white/10 backdrop-blur-xl
        border border-white/20
        py-8 px-10 rounded-[1.5rem]
        text-center shadow-2xl
        hover:bg-white/15 transition-all duration-300
      "
    >
      <h3 className="text-[24px] sm:text-[30px] font-bold text-white tracking-tight">
        {title}
      </h3>
      <p className="text-[11px] sm:text-[13px] text-blue-200 uppercase tracking-widest mt-1 font-semibold">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default FundFlowSection;