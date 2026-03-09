import React from "react";

interface Props {
  title: string;
  desc: string;
}

const FeatureCard: React.FC<Props> = ({ title, desc }) => {
  return (
    <div className="bg-white text-gray-900 rounded-xl p-5 shadow-sm">
      <h4 className="font-semibold text-blue-700">{title}</h4>
      <p className="text-sm text-gray-600 mt-2">{desc}</p>
    </div>
  );
};

export default FeatureCard;
