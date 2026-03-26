"use client";
import Link from 'next/link';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
const Footer = () => {
  return (
    <footer className="w-full bg-[#022743] text-white rounded-2xl py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-12 text-center md:text-left items-start">
          
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              Creditbucket <br />
              Technology Private <br />
              Limited
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xs mx-auto md:mx-0">
              Bridging India's underserved populations to formal banking through compliant, assisted-tech infrastructure.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold md:text-2xl">Legal & Trust</h4>
            <ul className="space-y-4 text-slate-300 text-sm md:text-base">
              <li><Link href="/terms" className="hover:text-blue-600 transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/PrivacyPolicy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/CodeOfConduct" className="hover:text-blue-600 transition-colors">Code of Conduct</Link></li>
              <li className="md:hidden lg:block"><Link href="/lsp" className="hover:text-blue-600 transition-colors">RBI-aligned LSP</Link></li>
              <li><Link href="/fund-flow" className="hover:text-blue-600 transition-colors">Bank-to-customer Fund Flow</Link></li>
            </ul>
          </div>

          <div className="relative flex flex-col items-center md:items-start">
            <div className="hidden md:block absolute -left-8 lg:-left-12 top-0 w-[1px] h-48 bg-white/20"></div>
            
            <div className="space-y-6 text-center md:text-left w-full">
              <h4 className="text-xl font-bold md:text-2xl">Contact</h4>
              <div className="space-y-4 text-slate-300 text-sm md:text-base">
                <p className="hover:text-blue-600 transition-colors cursor-pointer">Address</p>
                <p className="hover:text-blue-600 transition-colors cursor-pointer">e-mail</p>
                <p className="hover:text-blue-600 transition-colors cursor-pointer">phone number</p>
              </div>

              <div className="pt-8 space-y-2 md:hidden">
                <h4 className="text-xl font-bold">Legal Identifiers</h4>
                <p className="text-xs text-slate-400">CIN: To be updated</p>
                <p className="text-xs text-slate-400">LEI: 3358004BDYJ73J4DJE20</p>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col items-center md:items-start">
            <div className="hidden md:block absolute -left-8 lg:-left-12 top-0 w-[1px] h-48 bg-white/20"></div>

            <div className="space-y-6 text-center md:text-left w-full">
              <h4 className="text-xl font-bold md:text-2xl md:mb-6">Resources</h4>
              <ul className="space-y-4 text-slate-300 text-sm md:text-base">
                <li><Link href="/careers" className="hover:text-blue-600 transition-colors">Careers</Link></li>
                <li><Link href="/FAQ" className="hover:text-blue-600 transition-colors">FAQs</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/20 text-center">
          <p className="text-slate-400 text-[10px] md:text-xs tracking-wider uppercase">
            © 2026 Creditbucket Technologies Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;