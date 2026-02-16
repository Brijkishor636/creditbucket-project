import React from "react";
import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const FlowCard: React.FC<Props> = ({ icon: Icon, title, desc }) => {
  return (
    <div className="bg-white text-gray-900 rounded-xl p-5 text-center shadow-sm">
      <Icon className="mx-auto text-blue-600 mb-3" size={28} />
      <h4 className="font-semibold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-600 mt-1">{desc}</p>
    </div>
  );
};

export default FlowCard;
