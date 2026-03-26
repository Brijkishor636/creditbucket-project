"use client";
import React from "react";
import { LucideIcon } from "lucide-react";

interface PartnerCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  stat?: string;
  statLabel?: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({
  icon: Icon,
  title,
  desc,
  stat,
  statLabel,
}) => {
  return (
    <div className="group relative bg-[#f8fafc] rounded-[32px] p-8 md:p-10 min-h-[320px] flex flex-col justify-between border border-transparent transition-all duration-500 hover:bg-white hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 cursor-pointer">
      
      {/* Top Section: Icon and Stats */}
      <div className="flex justify-between items-start w-full">
        {/* Icon Container: Gray to Blue transition */}
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-200 text-slate-600 transition-all duration-500 group-hover:bg-[#1B84E7] group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-400/30">
          <Icon size={22} />
        </div>

        {/* Stats Area: Clean alignment as seen in video */}
        {stat && (
          <div className="text-right">
            <p className="text-[#1B84E7] text-2xl font-bold tracking-tight leading-none">
              {stat}
            </p>
            <p className="text-[13px] font-medium text-slate-500 mt-1 uppercase tracking-tight">
              {statLabel}
            </p>
          </div>
        )}
      </div>

      {/* Bottom Section: Title and Description */}
      <div className="mt-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight tracking-tight mb-4 transition-colors duration-300 group-hover:text-[#1B84E7]">
          {title}
        </h3>

        <p className="text-slate-500 text-base md:text-[17px] leading-relaxed max-w-[95%]">
          {desc}
        </p>
      </div>
      
    </div>
  );
};

export default PartnerCard; 