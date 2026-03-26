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
          h-10
          sm:h-8
          md:h-12
          lg:h-16
          xl:h-18
        "
        priority
      />

    </div>
  );
};

export default LogoItem;