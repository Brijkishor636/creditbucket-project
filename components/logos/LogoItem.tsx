import React from "react";
import Image, { StaticImageData } from "next/image";

interface LogoItemProps {
  src: StaticImageData;
  alt: string;
}

const LogoItem: React.FC<LogoItemProps> = ({ src, alt }) => {
  return (
    <div className="flex items-center justify-center w-full">
      
      <Image
        src={src}
        alt={alt}
        className="
          object-contain w-auto
          h-6
          sm:h-8
          md:h-10
          lg:h-14
          xl:h-18
        "
        priority
      />

    </div>
  );
};

export default LogoItem;