"use client";
import React from "react";

const Ticker: React.FC = () => {
  const items = [
    "NATIONAL STARTUP AWARD 5.0 WINNER",
    "COMMUNITY DEVELOPMENT CATALYST",
    "RECOGNISED BY GOVERNMENT & INDUSTRY",
  ];

  return (
    <div className="w-full overflow-hidden border-y border-blue-300 bg-white">
      <div className="ticker-track">
        {[...items, ...items].map((text, i) => (
          <div
            key={i}
            className="flex items-center gap-6 px-6 py-4 text-blue-800 font-medium whitespace-nowrap"
          >
            <span>{text}</span>
            <span>•</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .ticker-track {
          display: flex;
          width: max-content;
          animation: scroll 25s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Ticker;
