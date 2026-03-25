import React from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  name: string;
  variant?: "primary" | "arrow";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ name, variant = "primary", className = "" }) => {

  if (variant === "primary") {
    return (
      <button className={`px-5 py-2 rounded-lg text-sm font-semibold bg-[#1B84E7] text-white hover:bg-blue-500 transition-all duration-300 cursor-pointer ${className}`}>
        {name}
      </button>
    );
  }

  
  return (
    <button className={`group flex items-center gap-2 px-8 py-2 rounded-lg text-sm font-semibold border-2 border-[#1B84E7] bg-[#1B84E7] text-white transition-all duration-300 hover:bg-white hover:text-[#1B84E7] cursor-pointer ${className}`}>
      <span>{name}</span>
      <ArrowRight 
        size={16} 
        className="transition-transform duration-300 group-hover:translate-x-1" 
      />
    </button>
  );
};

export default Button;