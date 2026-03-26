"use client";
import React from "react";

const Ticker: React.FC = () => {
  const items = [
    "NATIONAL STARTUP AWARD 5.0 WINNER",
    "COMMUNITY DEVELOPMENT CATALYST",
    "RECOGNISED BY GOVERNMENT & INDUSTRY",
  ];

  return (
    // Added 'inner-shadow' class and adjusted height/border color
    <div className="w-full overflow-hidden border-y border-slate-200 bg-white shadow-[inset_0_10px_15px_-3px_rgba(0,0,0,0.1)] py-6">
      <div className="ticker-track flex items-center">
        {/* We loop 4 times to ensure no gaps on large screens */}
        {[...items, ...items, ...items, ...items].map((text, i) => (
          <div
            key={i}
            className="flex items-center gap-8 px-4 whitespace-nowrap"
          >
            {/* Updated text color, size (text-xl), and spacing */}
            <span className="text-[#005696] text-xl font-bold tracking-wider">
              {text}
            </span>
            <span className="text-[#005696] text-2xl font-bold opacity-80">•</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .ticker-track {
          display: flex;
          width: max-content;
          /* Increased duration to 30s for a smooth, readable scroll */
          animation: scroll 30s linear infinite;
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