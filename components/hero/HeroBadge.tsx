import React from "react";

const HeroBadge: React.FC<{ text: string }> = ({ text }) => {
  return (
    <p className="text-sm text-gray-600 border-b border-t border-blue-300 inline-block pt-1 pb-1">
      {text}
    </p>
  );
};

export default HeroBadge;
