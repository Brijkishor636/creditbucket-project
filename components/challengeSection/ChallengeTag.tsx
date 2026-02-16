import React from "react";

const ChallengeTag: React.FC<{ text: string }> = ({ text }) => {
  return (
    <span className="inline-flex items-center gap-2 bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full">
      <span className="w-2 h-2 bg-red-500 rounded-full" />
      {text}
    </span>
  );
};

export default ChallengeTag;
