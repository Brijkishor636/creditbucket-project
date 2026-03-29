"use client";

import React from "react";
import { ArrowDown } from "lucide-react";
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    
    <section className="relative w-full h-auto min-h-[80vh] lg:min-h-[80vh] rounded-[2rem] lg:rounded-[3rem] px-4 py-4 overflow-hidden ">
      
      
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-130" // Slight scale prevents sub-pixel gaps
        >
          <source src="/videos/sol-bg-video.mp4" type="video/mp4" />
        </video>
        {/* Darkening Overlay for text contrast */}
        <div className="absolute inset-0" />
      </div>

      {/* 2. Main Content Container */}
      <div className="
        relative z-10 
        max-w-[1300px] mx-auto 
        px-6 md:px-10 lg:px-14
        py-16 lg:py-0
        min-h-[90vh] lg:min-h-[85vh]
        flex flex-col lg:grid lg:grid-cols-12 
        items-center justify-center
        gap-12 lg:gap-14
      ">

        {/* LEFT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 text-center lg:text-left text-white space-y-6 md:space-y-8"
        >
          <div className="inline-block px-5 py-1.5 border border-white/20 rounded-full bg-[#1B84E7] text-white text-[11px] font-semibold uppercase tracking-[0.2em] backdrop-blur-md shadow-lg">
            Solution
          </div>

          <h1 className="
            text-[28px] sm:text-[40px] lg:text-[48px] 
            font-bold leading-[1.15] tracking-tight
          ">
            Lending Infrastructure for <br className="hidden md:block" />
            Assisted Credit Distribution
          </h1>

          <div className="space-y-5 max-w-[600px] mx-auto lg:mx-0">
            <p className="text-[16px] md:text-[19px] text-white/90 leading-relaxed font-light">
              Creditbucket operates as a lending infrastructure partner for 
              banks and NBFCs seeking structured access to underserved and 
              semi-formal borrower segments.
            </p>
            <p className="text-[16px] md:text-[19px] text-white/90 leading-relaxed font-light">
              We combine technology, local facilitation, and guided onboarding 
              to make credit access more organized, transparent, and scalable.
            </p>
            <p className="text-[12px] md:text-[14px] text-white/50 italic pt-2 border-t border-white/10">
              Credit decisions and loan ownership remain with our partner institutions.
            </p>
          </div>
        </motion.div>

        
        <div className="
          lg:col-span-5
          w-full flex flex-col items-center 
          justify-center space-y-4
        ">
          <FlowCard delay={0.2} title="Banks / NBFC" subtitle="Lending Partner" />
          <Arrow />
          <FlowCard delay={0.4} title="Creditbucket" subtitle="Infrastructure Layer" />
          <Arrow />
          <FlowCard delay={0.6} title="Borrower" subtitle="End Consumer" />
        </div>

      </div>
    </section>
  );
};

const FlowCard = ({ title, subtitle, delay }: { title: string; subtitle: string; delay: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="
        relative z-20
        bg-[#0C82DD] text-white 
        py-5 sm:py-7 px-8
        rounded-[1.5rem] w-full max-w-[360px]
        text-center border border-white/20
        shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5),inset_0_4px_12px_rgba(0,0,0,0.3),inset_0_-1px_1px_rgba(255,255,255,0.15)]
  
  transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
  
  hover:-translate-y-2 
  hover:shadow-[0_45px_70px_-15px_rgba(0,0,0,0.7),inset_0_4px_12px_rgba(0,0,0,0.3)]
      "
    >
      <h3 className="text-[22px] sm:text-[28px] font-bold tracking-tight">{title}</h3>
      <p className="text-[11px] sm:text-[13px] text-white/80 uppercase tracking-widest mt-1 font-medium">{subtitle}</p>
    </motion.div>
  );
};

const Arrow = () => (
  <motion.div 
    animate={{ y: [0, 5, 0] }}
    transition={{ repeat: Infinity, duration: 2 }}
    className="text-white/30"
  >
    <ArrowDown size={22} strokeWidth={1.5} />
  </motion.div>
);

export default HeroSection;