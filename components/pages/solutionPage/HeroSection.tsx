"use client";

import React from "react";
import { ArrowDown } from "lucide-react";
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[85vh] rounded-2xl overflow-hidden bg-[#0A192F]">
      {/* Forced Absolute Wrapper to kill all gaps */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50 block"
        >
          <source src="/videos/sol-bg-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/20 to-[#0A192F]/80 lg:hidden z-[5]"></div>

      {/* 2. Main Content Container */}
      <div className="
        relative z-10 
        max-w-[1300px] mx-auto 
        px-6 md:px-10 lg:px-14
        py-16 lg:py-0 
        min-h-[85vh]
        grid lg:grid-cols-12 
        items-center 
        gap-12 lg:gap-14
      ">
        <div className="lg:col-span-7 text-white space-y-7">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1 border border-white/30 rounded-full bg-[#1B84E7] text-white/90 text-[10px] font-bold tracking-[0.2em] mb-4 lg:mb-6 backdrop-blur-md"
          >
            Solution
          </motion.div>

          <h1 className="
            text-[28px] 
            sm:text-[36px] 
            lg:text-[40px] 
            font-bold 
            leading-[1.2] lg:leading-[1.12]
            tracking-tight
          ">
            Lending Infrastructure for <br className="hidden sm:block" />
            Assisted Credit Distribution
          </h1>

          <div className="space-y-6 max-w-[560px]">
            <p className="text-[15px] md:text-[18px] text-white/85 leading-relaxed">
              Creditbucket operates as a lending infrastructure partner for banks and NBFCs seeking structured access to underserved and semi-formal borrower segments.
            </p>

            <p className="text-[15px] md:text-[18px] text-white/85 leading-relaxed">
              We combine technology, local facilitation, and guided onboarding to make credit access more organized, transparent, and scalable.
            </p>

            <p className="text-[12px] text-white/70 italic pt-2">
              Credit decisions and loan ownership remain with our partner institutions.
            </p>
          </div>
        </motion.div>

        <div className="
          lg:col-span-5
          flex flex-col items-center 
          justify-center
          space-y-4 lg:space-y-5
          mt-10 lg:mt-0
          pb-10 lg:pb-0
        ">
          <FlowCard delay={0.2} title="Banks / NBFC" subtitle="Lending Partner" />
          <Arrow />
          <FlowCard delay={0.4} title="Creditbucket" subtitle="Infrastructure Layer" />
          <Arrow />
          <FlowCard title="Borrower" subtitle="End Beneficiary" />
        </div>
      </div>
    </section>
  );
};

const FlowCard = ({ title, subtitle, delay }: { title: string; subtitle: string; delay: number }) => {
  return (
    <div className="
      relative
      bg-[#0C82DD] 
      text-white 
      py-5 lg:py-7 
      px-4
      rounded-[12px] 
      w-full 
      max-w-[350px]   
      min-h-[80px] lg:min-h-[100px] 
      flex flex-col justify-center items-center
      text-center
      border border-white/10
      shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5),inset_0_4px_12px_rgba(0,0,0,0.3),inset_0_-1px_1px_rgba(255,255,255,0.15)]
      transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
      hover:-translate-y-2 
      hover:shadow-[0_45px_70px_-15px_rgba(0,0,0,0.7),inset_0_4px_12px_rgba(0,0,0,0.3)]
      overflow-hidden
    ">
      <div className="
        absolute inset-0 rounded-[12px] 
        bg-gradient-to-b from-transparent via-transparent to-white/10
        opacity-20 blur-xl
      "></div>

      <h3 className="relative z-10 text-[20px] sm:text-[28px] font-semibold tracking-tight leading-tight">
        {title}
      </h3>

      <p className="relative z-10 text-[11px] sm:text-[14px] text-white/80 mt-1 lg:mt-2 tracking-wide font-medium">
        {subtitle}
      </p>
    </div>
  );
};

const Arrow = () => {
  return (
    <div className="text-white/40 py-1">
      <ArrowDown size={22} strokeWidth={1.5} />
    </div>
  );
};

export default HeroSection;