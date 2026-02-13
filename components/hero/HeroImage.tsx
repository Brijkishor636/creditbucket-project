import Image from "next/image";
import React from "react";
import awardImg from "../../assets/images/award.png";

const HeroImage: React.FC = () => {
  return (
    <div className="w-full flex justify-center md:justify-end">
      <div className="
        w-[300px]
        sm:w-[220px]
        md:w-[260px]
        lg:w-[320px]
      ">
        <div className="bg-[#8B5A2B] p-2 rounded shadow-2xl">
          <div className="bg-[#CFAE70] p-2 rounded">
            <Image
              src={awardImg}
              alt="Award Certificate"
              className="rounded object-contain w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
