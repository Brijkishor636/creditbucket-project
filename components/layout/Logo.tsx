import React from "react";
import { IndianRupee, Wifi } from "lucide-react";
import logoImg from "../../assets/svg/logo.svg";

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center leading-tight select-none">
      
      <div
        className="h-7 w-24 bg-gradient-to-r from-green-400 via-emerald-500 to-gray-800"
        style={{
          WebkitMaskImage: `url(${logoImg.src})`,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "contain",
          WebkitMaskPosition: "center",
          maskImage: `url(${logoImg.src})`,
          maskRepeat: "no-repeat",
          maskSize: "contain",
          maskPosition: "center",
        }}
      />

      <div className="text-[13px] font-semibold tracking-[2px] mt-1 flex items-center text-center">
        <span className="text-[#1F2937]">C</span>

        <IndianRupee
          size={13}
          className="text-blue-500 -mx-[2px] relative top-[1px]"
        />

        <span className="text-[#1F2937]">EDITBUCK</span>

        <Wifi
          size={13}
          className="text-blue-500 -mx-[2px] relative top-[1px]"
        />

        <span className="text-[#1F2937]">T</span>
      </div>
    </div>
  );
};

export default Logo;
