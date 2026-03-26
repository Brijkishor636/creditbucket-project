import React from "react";

interface ButtonProps {
  name: string;
}

const Button: React.FC<ButtonProps> = ({ name }) => {
  return (
    <button className="px-6 py-2 rounded-lg text-sm font-medium border border-blue-500 bg-blue-600 hover:bg-blue-500 text-white transition cursor-pointer">
      {name}
    </button>
  );
};

export default Button;
