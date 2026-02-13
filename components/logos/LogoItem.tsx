import React from "react";
import Image, { StaticImageData } from "next/image";

interface LogoItemProps {
  src: StaticImageData;
  alt: string;
}

const LogoItem: React.FC<LogoItemProps> = ({ src, alt }) => {
  return (
    <div className="flex items-center justify-center w-[60px] sm:w-[75px] md:w-[90px] lg:w-[100px]">
      <Image
        src={src}
        alt={alt}
        className="object-contain h-5 sm:h-6 md:h-7 lg:h-8 w-auto opacity-90"
        priority
      />
    </div>
  );
};

export default LogoItem;
