"use client";

import React from "react";
import Button from "../common/Button";
import TaperedLabel from "./TaperedLabe";
const HeroContent: React.FC = () => {
  return (
    <div className="max-w-xl space-y-6">
      <TaperedLabel text="Recognised by Government & Industry Institutions" />

      <h1 className="font-[var(--font-commissioner)] font-semibold text-[24px] sm:text-[30px] md:text-[36px] lg:text-[48px] leading-[110%] text-black whitespace-nowrap">
        National Award Winner
      </h1>

      <p className="text-slate-900 text-lg font-semibold leading-relaxed">
        Recognised for building compliant, inclusive lending infrastructure
        that enables banks and NBFCs to reach underserved India at scale.
      </p>

      <p className="text-slate-900 text-sm md:text-[15px">
        Operating across Tier-2 to Tier-6 markets through a trusted phygital
        model.
      </p>

      <div className="pt-2">
        <Button 
          name="Partner With Creditbucket" 
          variant="arrow" 
          className="py-3.5 px-7"
        />
      </div>
    </div>
  );
};

export default HeroContent;