import React from "react";

const SectionTag: React.FC<{ text: string }> = ({ text }) => {
  return (
    <span className="bg-white/30 text-white text-xs px-4 py-1 rounded-full backdrop-blur">
      {text}
    </span>
  );
};

export default SectionTag;
