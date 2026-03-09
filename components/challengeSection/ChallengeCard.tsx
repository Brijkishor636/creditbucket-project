import React from "react";
import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ChallengeCard: React.FC<Props> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 space-y-3 shadow-sm">
      <Icon className="text-gray-800" size={22} />
      <h4 className="font-semibold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-800">{description}</p>
    </div>
  );
};

export default ChallengeCard;
