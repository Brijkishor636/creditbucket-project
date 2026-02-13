"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../common/Button";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "Solutions",
    "Partners",
    "Phygital Model",
    "Trust & Governance",
    "Impact",
    "About Us",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-blue-200 bg-[linear-gradient(135deg,#E6F3FF,#B9D9F6)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-2">
            <Logo />
          </div>

          <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            <button className="text-gray-700 font-medium relative group cursor-pointer">
              Retailer
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>

            <button className="text-gray-700 font-medium relative group cursor-pointer">
              Corporate
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>

          <div className="hidden md:block">
            <Button name="Join now" />
          </div>

          <div className="md:hidden">
            <Button name="Join now" />
          </div>
        </div>

        <div className="border-t border-gray-300 py-3">
          <div className="hidden md:flex justify-center gap-12">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 cursor-pointer transition"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="md:hidden flex justify-end">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 cursor-pointer"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden w-full border-t border-blue-200 px-6 py-4 space-y-4 bg-[linear-gradient(135deg,#E6F3FF,#B9D9F6)] shadow-lg">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="block text-gray-700 hover:text-blue-600 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
