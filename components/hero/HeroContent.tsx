"use client";

import React from "react";
import Button from "../common/Button";
import TaperedLabel from "./TaperedLabe";
import { useRouter } from "next/navigation";
const HeroContent: React.FC = () => {
  const router = useRouter();
  return (
    <div className="max-w-xl space-y-6">
      <TaperedLabel text="Recognised by Government & Industry Institutions" />

      <h1 className="font-[var(--font-commissioner)] text-center sm:text-left font-semibold text-[24px] sm:text-[30px] md:text-[36px] lg:text-[48px] leading-[110%] text-black whitespace-nowrap">
        National Award Winner
      </h1>

      <p className="text-slate-900 text-lg font-semibold leading-relaxed text-center sm:text-left">
        Recognised for building compliant, inclusive lending infrastructure
        that enables banks and NBFCs to reach underserved India at scale.
      </p>

      <p className="text-slate-900 text-sm md:text-[15px] text-center sm:text-left">
        Operating across Tier-2 to Tier-6 markets through a trusted phygital
        model.
      </p>

      <div className="pt-2 items-center flex justify-center">
        <Button onClick={()=>{
          router.push("/join")
        }}
          name="Partner With Creditbucket" 
          variant="arrow" 
          className="py-3.5 px-7"
        />
      </div>
    </div>
  );
};

export default HeroContent;