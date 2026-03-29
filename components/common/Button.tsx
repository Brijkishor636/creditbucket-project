import React from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  name: string;
  variant?: "primary" | "arrow";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ name, variant = "primary", className = "" }) => {
  
  // Base styles to avoid "jumping" when the 2px border appears on hover
  const baseStyles = "rounded-lg font-semibold transition-all duration-300 cursor-pointer border-2 border-transparent";

  if (variant === "primary") {
    return (
      <button 
        className={`
          ${baseStyles}
          /* Mobile: Smaller padding/text */
          px-4 py-1.5 text-xs 
          /* Desktop (lg): Your original properties */
          lg:px-5 lg:py-2 lg:text-sm 
          bg-[#1B84E7] text-white 
          hover:text-blue-600 hover:bg-white hover:border-blue-600 
          ${className}
        `}
      >
        {name}
      </button>
    );
  }

  return (
    <button 
      className={`
        ${baseStyles}
        group flex items-center justify-center gap-2 
        px-6 py-1.5 text-xs 
        lg:px-8 lg:py-2 lg:text-sm 
        bg-[#1B84E7] text-white 
        hover:bg-white hover:text-[#1B84E7] hover:border-blue-600 
        ${className}
      `}
    >
      <span>{name}</span>
      <ArrowRight 
        size={16} 
        className="transition-transform duration-300 group-hover:translate-x-1 shrink-0" 
      />
    </button>
  );
};

export default Button;