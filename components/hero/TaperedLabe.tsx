import React from "react";
const TaperedLabel = ({ text }: { text: string }) => {
  return (
    <div className="inline-flex flex-col items-center">
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
      
      <p className="text-[13px] font-semibold text-gray-700 text-center sm:text-left tracking-widest py-1.5 px-6">
        {text}
      </p>
      
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
    </div>
  );
};

export default TaperedLabel;
