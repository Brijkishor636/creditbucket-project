"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon; 
  title: string;
  text: string;
}

export const ValueCard = ({
  icon: Icon, // Destructuring and aliasing to 'Icon' to render as a component
  title,
  text,
}: ValueCardProps) => {
  return (
    <div
      className="
        group relative
        flex items-start gap-5 
        bg-white 
        rounded-[24px] 
        p-6 sm:p-8
        border border-slate-100
        transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
        cursor-pointer
        shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]
        hover:-translate-y-2
        hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),0_0_30px_rgba(59,130,246,0.2)]
      "
    >
      {/* 1. The Blue Bleed/Glow (Bottom Right Corner) */}
      <div className="
        absolute -bottom-2 -right-2 w-32 h-32 
        bg-blue-400/10 rounded-full blur-3xl
        opacity-0 group-hover:opacity-100
        transition-opacity duration-700
      " />

      {/* 2. ICON CONTAINER */}
      <div
        className="
          relative z-10
          flex-shrink-0 w-12 h-12 
          flex items-center justify-center 
          rounded-2xl 
          bg-[#1B84E7]
          text-white
          transition-all duration-500
          shadow-lg shadow-blue-100
          group-hover:scale-110
          group-hover:shadow-[0_10px_25px_rgba(27,132,231,0.4)]
        "
      >
        {/* Render the icon as a component with custom props */}
        <Icon size={24} strokeWidth={1.5} />
      </div>

      {/* 3. TEXT CONTENT */}
      <div className="relative z-10 text-left">
        <h3
          className="
            text-lg sm:text-xl 
            font-bold 
            text-slate-900
            tracking-tight
            transition-colors duration-300
            group-hover:text-[#1B84E7]
          "
        >
          {title}
        </h3>
        <p
          className="
            mt-2 text-sm sm:text-[15px] 
            text-slate-500 
            leading-relaxed
            font-medium
          "
        >
          {text}
        </p>
      </div>

      {/* 4. Subtle Inset Border Glow */}
      <div className="absolute inset-0 rounded-[24px] ring-1 ring-inset ring-black/[0.03] group-hover:ring-[#1B84E7]/20 transition-all duration-500" />
    </div>
  );
};