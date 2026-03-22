import React from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  name: string;
}

const ArrowRightButton: React.FC<ButtonProps> = ({ name }) => {
  return (
    <button className="group flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-medium border border-blue-500 bg-blue-600 text-white hover:bg-blue-500 transition cursor-pointer">
      {name}
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      
    </button>
  );
};

export default ArrowRightButton;