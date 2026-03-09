"use client";
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-[linear-gradient(135deg,#E6F3FF,#B9D9F6)] p-4 md:p-10 lg:p-14">
      {/* Main Dark Container */}
      <div className="max-w-7xl mx-auto bg-[#001F33] text-white rounded-[40px] p-10 md:p-16 lg:p-20 shadow-2xl relative overflow-hidden">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-4 relative z-10">
          
          {/* Left Section: Branding & Mission */}
          <div className="md:col-span-5 space-y-8">
            <h3 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
              Creditbucket <br className="hidden lg:block" />
              Technology Private <br className="hidden lg:block" />
              Limited
            </h3>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-sm">
              Bridging India's underserved populations to formal banking through compliant, assisted-tech infrastructure.
            </p>
          </div>

          {/* Middle Section: Contact & Legal Identifiers */}
          <div className="md:col-span-3 flex flex-col items-center text-center space-y-12">
            <div className="space-y-6">
              <h4 className="text-xl font-medium tracking-wide">Contact</h4>
              <div className="space-y-4 text-slate-300 text-sm md:text-base">
                <p className="hover:text-white transition-colors cursor-pointer">Address</p>
                <p className="hover:text-white transition-colors cursor-pointer">e-mail</p>
                <p className="hover:text-white transition-colors cursor-pointer">phone number</p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-medium tracking-wide">Legal Identifiers</h4>
              <div className="space-y-1 text-slate-400 text-[11px] md:text-xs uppercase tracking-wider">
                <p>CIN: To be updated</p>
                <p>LEI: 3358004BDYJ73J4DJE20</p>
              </div>
            </div>
          </div>

          {/* Right Section: Legal & Trust with Vertical Divider */}
          <div className="md:col-span-4 flex">
            {/* Vertical Divider - Matches the height and color in image */}
            <div className="hidden md:block w-[1.5px] bg-white/20 h-3/4 my-auto mx-8 lg:mx-14"></div>
            
            <div className="flex-1 text-center space-y-6">
              <h4 className="text-xl font-medium tracking-wide">Legal & Trust</h4>
              <ul className="space-y-4 text-slate-300 text-sm md:text-base">
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/CodeOfConduct" className="hover:text-white transition-colors">Code of Conduct</Link></li>
                <li><Link href="/lsp" className="hover:text-white transition-colors">RBI-aligned LSP</Link></li>
                <li><Link href="/fund-flow" className="hover:text-white transition-colors">Bank-to-customer Fund Flow</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/faqs" className="hover:text-white transition-colors">FAQs</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center">
          <p className="text-slate-500 text-[10px] md:text-xs tracking-[0.1em] uppercase">
            © 2026 Creditbucket Technologies Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;