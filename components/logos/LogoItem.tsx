import React from "react";
import Image, { StaticImageData } from "next/image";

interface LogoItemProps {
  src: StaticImageData;
  alt: string;
}

const LogoItem: React.FC<LogoItemProps> = ({ src, alt }) => {
  return (
    <div className="flex items-center justify-center w-full px-2">
      <Image
        src={src}
        alt={alt}
        className="
          object-contain w-auto
          h-8           
          sm:h-10        
          md:h-12        
          lg:h-14        
          xl:h-16        
        "
      />
    </div>
  );
};

export default LogoItem;