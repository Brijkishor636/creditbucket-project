"use client";

import React from "react";
import HeroBadge from "./HeroBadge";
import Button from "../common/Button"; // Using the updated shared button
import TaperedLabel from "./TaperedLabe";
const HeroContent: React.FC = () => {
  return (
    <div className="max-w-xl space-y-6">
      <TaperedLabel text="Recognised by Government & Industry Institutions" />

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
        National Award Winner
      </h1>

      <p className="text-slate-800 text-lg font-semibold leading-relaxed">
        Recognised for building compliant, inclusive lending infrastructure
        that enables banks and NBFCs to reach underserved India at scale.
      </p>

      <p className="text-slate-600 text-sm md:text-base">
        Operating across Tier-2 to Tier-6 markets through a trusted phygital
        model.
      </p>

      {/* The Updated Button Effect */}
      <div className="pt-2">
        <Button 
          name="Partner With Creditbucket" 
          variant="arrow" 
          className="py-3.5 px-7" // Slightly larger for Hero
        />
      </div>
    </div>
  );
};

export default HeroContent;