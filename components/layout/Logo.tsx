"use client";
import React from "react";
import logoImg from "../../assets/logo/logoCB.png";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center h-full">
      <Image
        src={logoImg}
        alt="logo"
        className="
          w-auto 
          h-8 
          sm:h-9 
          md:h-10 
          lg:h-12
        "
        priority
      />
    </div>
  );
};

export default Logo;