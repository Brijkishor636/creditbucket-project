"use client";
import Image, { StaticImageData } from "next/image";

interface StateCardProps {
  title: string;
  text: string;
  image: StaticImageData;
}

const StateCard = ({ title, text, image }: StateCardProps) => {
  return (
    <div className="relative rounded-2xl bg-white p-6 md:p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden min-h-[160px] md:min-h-[180px]">
        
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image
          src={image}
          alt={title}
          className="object-contain opacity-[0.08] w-[75%] h-[75%]"
        />
      </div>

      <div className="relative z-10">
        <h3 className="text-[#0C82DD] text-xl md:text-2xl font-bold mb-3">
          {title}
        </h3>
        <p className="text-gray-500 text-xs md:text-sm leading-relaxed px-2">
          {text}
        </p>
      </div>
    </div>
  );
};

export default StateCard;