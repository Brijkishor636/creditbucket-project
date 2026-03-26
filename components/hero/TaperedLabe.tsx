import React from "react";
const TaperedLabel = ({ text }: { text: string }) => {
  return (
    <div className="inline-flex flex-col items-center">
      {/* Top Tapered Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
      
      {/* Content */}
      <p className="text-[13px] font-semibold text-black-600  tracking-widest py-1.5 px-6">
        {text}
      </p>
      
      {/* Bottom Tapered Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
    </div>
  );
};

export default TaperedLabel;
