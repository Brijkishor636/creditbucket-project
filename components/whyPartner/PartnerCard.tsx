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
    <div className="bg-white rounded-2xl p-6 md:p-8 relative shadow-sm">
      <div className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-300 mb-4">
        <Icon size={20} className="text-gray-700" />
      </div>

      {stat && (
        <div className="absolute top-6 right-6 text-right">
          <p className="text-blue-600 font-semibold">{stat}</p>
          <p className="text-xs text-gray-500">{statLabel}</p>
        </div>
      )}

      <h3 className="text-lg md:text-xl font-semibold text-gray-900">
        {title}
      </h3>

      <p className="text-gray-600 mt-2 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
};

export default PartnerCard;
