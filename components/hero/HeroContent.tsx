import React from "react";
import HeroBadge from "./HeroBadge";
import Button from "../common/Button";

const HeroContent: React.FC = () => {
  return (
    <div className="max-w-xl space-y-6">
      <HeroBadge text="Recognised by Government & Industry Institutions" />

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
        National Award Winner<br />
        
      </h1>

      <p className="text-gray-800 text-base font-semibold">
        Recognised for building compliant, inclusive lending infrastructure
        that enables banks and NBFCs to reach underserved India at scale.
      </p>

      <p className="text-gray-600 text-sm">
        Operating across Tier-2 to Tier-6 markets through a trusted phygital
        model.
      </p>

      <Button name="Partner With Creditbucket →" />
    </div>
  );
};

export default HeroContent;
