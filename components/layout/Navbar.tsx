"use client";
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
    { name: "Solutions", path: "/pages/solutions" },
    { name: "Partners", path: "/pages/partners" },
    { name: "Phygital Model", path: "/pages/phygital" },
    { name: "Trust & Governance", path: "/pages/trust" },
    { name: "Impact", path: "/pages/impact" },
    { name: "About Us", path: "/pages/about" },
    { name: "Contact", path: "/pages/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-blue-200 bg-[linear-gradient(135deg,#E6F3FF,#B9D9F6)]">
      
      <div className="w-full px-8 lg:px-10">

        <div className="flex justify-between items-center h-14 overflow-hidden">
         
          <Link href="/" className="flex items-center h-full">
            <Logo />
          </Link>

          <div className="hidden lg:flex items-center space-x-8 text-sm font-medium">
            <Link
              href="#"
              className="text-slate-500 hover:text-blue-600 transition"
            >
              Retailer
            </Link>

            <div className="relative">
              <Link href="#" className="text-blue-600">
                Corporate
              </Link>
              <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-600"></div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button name="Join Now" />
            <Link href="/menu" className="md:hidden p-1">
              <Menu size={20} />
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-300">
          <div className="hidden md:flex justify-center items-center h-10">
            <div className="flex items-center space-x-10 lg:space-x-12">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`text-sm font-medium relative group transition
                  ${
                    activeItem === item.name
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-blue-600"
                  }`}
                >
                  {item.name}

                  <span
                    className={`absolute -bottom-1 left-0 w-full h-[2px] bg-blue-600 transition-transform duration-300 origin-left
                    ${
                      activeItem === item.name
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
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