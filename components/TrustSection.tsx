"use client";
import React from "react";

const TrustSection: React.FC = () => {
  return (
    <section className="w-full py-8 md:py-12 px-6 text-white relative overflow-hidden ">
      
      {/* Background with Monotone Noise Effect */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#0C82DD,#022743)]">
        <div 
          className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
          }} 
        />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8">

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          Trusted by Institutional Partners
        </h2>

        <div className="w-24 h-[2px] bg-white/60 mx-auto rounded-full" />

        <div className="relative px-4 sm:px-8 md:px-12">
          <span className="absolute -left-2 sm:-left-4 top-0 text-9xl text-white/20 font-serif">
            “
          </span>

          <p className="text-sm sm:text-sm md:text-base text-white/90 leading-relaxed">
            Creditbucket’s phygital approach has helped us reach underserved
            segments with <br/> better documentation quality and lower operational
            friction. Their trained on- <br/>ground facilitators ensure compliance,
            while digital tracking gives us real-time<br/> oversight and
            data-backed confidence to scale. Their on-ground assisted model<br/>
            bring a level of trust and control that purely digital sourcing
            often lacks.
          </p>

          <span className="absolute -right-2 sm:-right-4 bottom-0 text-9xl text-white/20 font-serif">
            ”
          </span>
        </div>

        <div className="pt-4 space-y-1">
          <p className="font-medium text-base">— Senior Credit Manager</p>
          <p className="text-sm text-white/70">
            Leading NBFC, Eastern India
          </p>
        </div>

      </div>
    </section>
  );
};

export default TrustSection;