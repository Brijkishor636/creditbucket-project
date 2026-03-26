import Image from "next/image";
import React from "react";
import awardImg from "../../assets/images/award.png";

const HeroImage: React.FC = () => {
  return (
    // Changed md:justify-end to md:justify-center to keep it centered on the left side
    <div className="w-full flex justify-center md:justify-center items-center">
      <div className="
        w-[300px]
        sm:w-[220px]
        md:w-[260px]
        lg:w-[320px]
      ">
        <Image
          src={awardImg}
          alt="Award Certificate"
          className="rounded-lg object-contain w-full h-auto shadow-sm" // Added slight round and shadow for depth
          priority
        />
      </div>
    </div>
  );
};

export default HeroImage;