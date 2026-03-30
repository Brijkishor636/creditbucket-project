"use client";
import Image, { StaticImageData } from "next/image";

interface BiharCardProps {
  image: StaticImageData;
}

const BiharCard = ({ image }: BiharCardProps) => {
  return (
    <div className="relative w-full rounded-2xl bg-[#0C82DD] text-white p-8 md:p-12 overflow-hidden shadow-lg flex flex-col items-center justify-center min-h-[320px] md:min-h-[360px]">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image
          src={image}
          alt="Bihar Map"
          className="object-contain opacity-40 w-[80%] h-[80%]"
        />
      </div>

      <div className="relative z-10 text-center">
        <h3 className="text-4xl md:text-5xl font-bold mb-4">Bihar</h3>
        <p className="text-xl md:text-2xl font-semibold mb-6">
          Primary Operational Hub
        </p>
        <p className="text-sm md:text-base text-white/90 max-w-sm mx-auto leading-relaxed">
          Core concentration of facilitator network and assisted distribution
          infrastructure, supporting structured borrower onboarding at scale.
        </p>
      </div>
    </div>
  );
};

export default BiharCard;