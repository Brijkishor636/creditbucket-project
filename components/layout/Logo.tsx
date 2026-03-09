import React from "react";
import { IndianRupee, Wifi } from "lucide-react";
import logoImg from "../../assets/svg/logo.png";

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

      
    </div>
  );
};

export default Logo;
