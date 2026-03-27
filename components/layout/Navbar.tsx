"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Button from "../common/Button";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  name: string;
  path: string;
}
interface NavItem {
  name: string;
  path: string;
}
const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isJoinOpen, setIsJoinOpen] = useState(false); 
  const dropdownRef = useRef<HTMLDivElement>(null);
  const brandBlue = "text-[#1B84E7]";

  useEffect(() => {
    const handleScroll = () => {
      // Toggle glassy state after 20px scroll
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsJoinOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
        
        <div className="flex justify-between items-center h-12">
          <Link href="/" className="flex items-center h-full">
            <Logo />
          </Link>

          <div className="hidden lg:flex items-center space-x-8 text-sm font-semibold">
            <Link
              href="#!"
              className={`transition-colors duration-200 ${
                pathname.includes('/retailer') ? brandBlue : "text-slate-500 hover:text-[#1B84E7]"
              }`}
            >
              Retailer
            </Link>

            <Link 
              href="/" 
              className={`transition-colors duration-200 ${
                pathname.includes('/corporate') || pathname === '/' ? brandBlue : "text-[#1B84E7] "
              }`}
            >
              Corporate
            </Link>
          </div>

          <div className="flex items-center space-x-2 relative" ref={dropdownRef}>
            <div 
              className="cursor-pointer active:scale-95 transition-transform"
              onClick={() => setIsJoinOpen(!isJoinOpen)}
            >
              <Button name="Join Now" />
            </div>

            <AnimatePresence>
              {isJoinOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full right-0 mt-4 w-72 overflow-hidden rounded-[1.5rem] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-blue-100 z-[60]"
                >
                  <div className="flex flex-col">
                    {/* Option 1: Blue Background with Darker Blue Hover */}
                    <Link
                      href="/join-saathis"
                      onClick={() => setIsJoinOpen(false)}
                      className="bg-[#1B84E7] px-8 py-6 text-white text-lg font-bold transition-colors duration-300 hover:bg-[#1669b8] text-center"
                    >
                      Join Samriddh Saathis
                    </Link>

                    {/* Option 2: White Background with Soft Blue Hover */}
                    <Link
                      href="/join-pariwar"
                      onClick={() => setIsJoinOpen(false)}
                      className="bg-white px-8 py-6 text-slate-900 text-lg font-bold transition-colors duration-300 hover:bg-[#F0F7FF] text-center border-t border-blue-50"
                    >
                      Join as Samriddh Pariwar
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <Link href="/menu" className="md:hidden p-1 text-slate-600">
              <Menu size={20} />
            </Link>
          </div>
        </div>

        {/* --- Bottom Row --- */}
        <div className={`hidden md:flex justify-center items-center transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'}`}>
          <div className="flex items-center space-x-8 lg:space-x-10">
            {navItems.map((item) => {
              const isActive = pathname === item.path;

              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`text-[14px] font-medium transition-colors duration-200
                  ${isActive ? brandBlue : "text-slate-600 hover:text-[#1B84E7]"}`}
                >
                  {item.name}
                  {/* Underline span removed as requested */}
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