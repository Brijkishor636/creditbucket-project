"use client";
import React from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "../common/Button";

interface NavItem {
  name: string;
  path: string;
}

const Navbar = ({ activeItem }: { activeItem: string }) => {
  const navItems: NavItem[] = [
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solutions" },
    { name: "Partners", path: "/partners" },
    { name: "Phygital Model", path: "/phygital" },
    { name: "Trust & Governance", path: "/trust" },
    { name: "Impact", path: "/impact" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-blue-200 bg-[linear-gradient(135deg,#E6F3FF,#B9D9F6)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Logo, Segment Toggle, Join Now */}
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
          </div>

          {/* Center Toggle: Retailer / Corporate */}
          <div className="hidden lg:flex space-x-8 text-sm font-medium">
            <Link 
              href="#" 
              className="text-slate-500 hover:text-blue-600 transition-colors"
            >
              Retailer
            </Link>
            <div className="relative">
              <Link href="#" className="text-blue-600">
                Corporate
              </Link>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"></div>
            </div>
          </div>

          {/* Right Side: CTA and Mobile Menu Trigger */}
          <div className="flex items-center space-x-1 md:space-x-4">
            <Button name="Join Now" />
            
            <Link 
              href="/menu" 
              className="md:hidden text-slate-600 hover:text-blue-600 transition-colors p-1.5"
            >
              <Menu size={22} />
            </Link>
          </div>
        </div>
        
        {/* Bottom Row: Main Nav Links - Hidden on mobile */}
         <div className="border-t border-gray-300 py-3">
        <div className="hidden md:flex justify-center items-center h-12 pb-2">
          <div className="flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.path} 
                className={`text-sm font-medium transition-all relative group py-2 
                  ${activeItem === item.name ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
              >
                {item.name}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transition-transform duration-300 origin-left 
                  ${activeItem === item.name ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                ></span>
              </Link>
            ))}
          </div>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;