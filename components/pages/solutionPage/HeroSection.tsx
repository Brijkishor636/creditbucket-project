"use client";
import { ArrowDown } from "lucide-react";
import { motion } from 'framer-motion';
const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[85vh] overflow-hidden bg-[#0A192F]">
      
      {/* Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source src="/videos/sol-bg-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 "></div>

      <div className="
        relative z-10 
        max-w-[1300px] mx-auto 
        px-6 md:px-10 lg:px-14
        min-h-[85vh]
        grid lg:grid-cols-12 
        items-center 
        gap-10 lg:gap-14
      ">

        {/* LEFT */}
        <div className="lg:col-span-7  text-white space-y-7"><motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1 border border-white/30 rounded-full bg-[#1B84E7] text-white/90 text-[10px] font-bold tracking-[0.2em] mb-6 backdrop-blur-md"
            >
              Solution
            </motion.div>

          <h1 className="
            text-[20px] 
            sm:text-[30px] 
            lg:text-[50px] 
            font-bold 
            leading-[1.12]
            tracking-tight
          ">
            Lending Infrastructure for <br />
            Assisted Credit Distribution
          </h1>

          <div className="space-y-5 max-w-[560px]">
            <p className="text-[16px] md:text-[18px] text-white/85 leading-relaxed">
              Creditbucket operates as a lending infrastructure partner for <br/>banks and NBFCs seeking structured access to underserved and <br/>semi-formal borrower segments.
            </p>

            <p className="text-[16px] md:text-[18px] text-white/85 leading-relaxed">
              We combine technology, local facilitation, and guided onboarding <br/>to make credit access more organized, transparent, and scalable.
            </p>

            <p className="text-[13px] text-white/50 italic pt-2">
              Credit decisions and loan ownership remain with our partner institutions.
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="
          lg:col-span-5
          flex flex-col items-center 
          justify-center
          space-y-5
          mt-6 lg:mt-0
        ">
          <FlowCard title="Banks / NBFC" subtitle="Lending Partner" />
          <Arrow />
          <FlowCard title="Creditbucket" subtitle="Infrastructure Layer" />
          <Arrow />
          <FlowCard title="Borrower" subtitle="Infrastructure Layer" />
        </div>

      </div>
    </section>
  );
};

const FlowCard = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div className="
      relative
      bg-[#0C82DD] 
      text-white 
      py-7
      rounded-[22px] 
      w-full 
      max-w-[350px]   
      max-h-[100px]
      text-center
      border border-white/10

      /* 🔥 UPDATED: MULTI-LAYERED REALISTIC SHADOW */
      /* Layer 1: Deep black core | Layer 2: Wide blue ambient glow */
      shadow-[0_30px_60px_-12px_rgba(0,0,0,0.45),0_15px_30px_-10px_rgba(27,132,231,0.3)]

      transition-all duration-300 
      /* Enhanced lift on hover */
      hover:-translate-y-1
      hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.55),0_20px_40px_-10px_rgba(27,132,231,0.4)]
    ">
      
      {/* 🔥 SOFT BOTTOM GLOW LAYER */}
      <div className="
        absolute inset-0 rounded-[22px] 
        bg-gradient-to-b from-transparent via-transparent to-white/10
        opacity-20 blur-xl
      "></div>

      <h3 className="relative text-[22px] sm:text-[28px] font-semibold tracking-tight">
        {title}
      </h3>

      <p className="relative text-[12px] sm:text-[14px] text-white/80 mt-1 tracking-wide">
        {subtitle}
      </p>
    </div>
  );
};

const Arrow = () => {
  return (
    <div className="text-white/30">
      <ArrowDown size={20} strokeWidth={1} />
    </div>
  );
};

export default HeroSection;