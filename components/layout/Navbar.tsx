"use client";

import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Button from "../common/Button";

// 1. Define the Props interface
interface NavbarProps {
  activeItem?: string; // Adding '?' makes it optional just in case
}

interface NavItem {
  name: string;
  path: string;
}

// 2. Accept the props in the component definition
const Navbar = ({ activeItem }: NavbarProps) => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  
  const brandBlue = "text-[#1B84E7]";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/pages/solutions" },
    { name: "Partners", path: "/pages/partners" },
    { name: "Phygital Model", path: "/pages/phygital" },
    { name: "Trust & Governance", path: "/pages/trust" },
    { name: "Impact", path: "/pages/impact" },
    { name: "About Us", path: "/pages/about" },
    { name: "Contact", path: "/pages/contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b
        ${isScrolled 
          ? "bg-white/40 backdrop-blur-3xl border-blue-200/30 py-1 shadow-sm" 
          : "bg-[linear-gradient(135deg,#E6F3FF,#B9D9F6)] border-transparent py-0" 
        }`}
    >
      <div className="w-full px-8 lg:px-10">
        
        {/* --- Top Row --- */}
        <div className="flex justify-between items-center h-14">
          <Link href="/" className="flex items-center h-full">
            <Logo />
          </Link>

          <div className="hidden lg:flex items-center space-x-8 text-sm font-semibold">
            <Link
              href="/retailer"
              className={`transition-colors duration-200 ${
                pathname.includes('/retailer') ? brandBlue : "text-slate-500 hover:text-[#1B84E7]"
              }`}
            >
              Retailer
            </Link>

            <Link 
              href="/corporate" 
              className={`transition-colors duration-200 ${
                pathname.includes('/corporate') || pathname === '/' ? brandBlue : "text-[#1B84E7] "
              }`}
            >
              Corporate
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            <Button name="Join Now" />
            <Link href="/menu" className="md:hidden p-1 text-slate-600">
              <Menu size={20} />
            </Link>
          </div>
        </div>

        {/* --- Bottom Row --- */}
        <div className={`hidden md:flex justify-center items-center transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'}`}>
          <div className="flex items-center space-x-8 lg:space-x-10">
            {navItems.map((item) => {
              // We check against the pathname AND the activeItem prop for safety
              const isActive = pathname === item.path || activeItem === item.name;

              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`text-[14px] font-medium transition-colors duration-200
                  ${isActive ? brandBlue : "text-slate-600 hover:text-[#1B84E7]"}`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;