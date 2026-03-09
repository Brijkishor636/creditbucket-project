import React from "react";

const ChallengeQuote: React.FC<{ text: string; source: string }> = ({
  text,
  source,
}) => {
  return (
    <div className="border border-gray-400 rounded-xl p-5 text-sm text-gray-800 bg-white">
      <p>"{text}"</p>
      <p className="mt-3 text-gray-500 text-xs">— {source}</p>
    </div>
  );
};

export default ChallengeQuote;
