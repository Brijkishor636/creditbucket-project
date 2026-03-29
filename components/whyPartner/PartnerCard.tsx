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
    <div className="group relative bg-[#f8fafc] rounded-[32px] p-7 md:p-9 min-h-[260px] flex flex-col justify-between border border-transparent transition-all duration-500 hover:bg-white hover:border-slate-500 hover:shadow-[0_30px_60px_-15px_rgba(27,132,231,0.15)] hover:-translate-y-2 cursor-pointer overflow-hidden">
     
      <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#D6EBFF]/60 opacity-0 scale-75 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-110 z-0" />

      <div className="relative z-10 flex justify-between items-start w-full">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-200 text-slate-600 transition-all duration-500 group-hover:bg-[#1B84E7] group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-400/30">
          <Icon size={22} />
        </div>

        {stat && (
          <div className="text-right">
            <p className="text-[#1B84E7] text-2xl font-bold tracking-tight leading-none">
              {stat}
            </p>
            <p className="text-[12px] font-semibold text-slate-500 mt-1 uppercase tracking-tight">
              {statLabel}
            </p>
          </div>
        )}
      </div>

      <div className="relative z-10 mt-6">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight tracking-tight mb-3 transition-colors duration-300 group-hover:text-[#1B84E7]">
          {title}
        </h3>

        <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-[95%]">
          {desc}
        </p>
      </div>
      
    </div>
  );
};

export default PartnerCard;