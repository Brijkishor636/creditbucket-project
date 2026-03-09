import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-24 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-16">
        <div className="space-y-8">
          <h3 className="text-2xl font-bold">Creditbucket Technology Private Limited</h3>
          <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Bridging India's underserved populations to formal banking through compliant, assisted-tech infrastructure.
          </p>
        </div>
        
        <div className="space-y-12">
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Contact</h4>
            <div className="space-y-4 text-slate-300">
              <p>Address</p>
              <p>e-mail</p>
              <p>phone number</p>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold">Legal Identifiers</h4>
            <div className="space-y-4 text-slate-300">
              <p>CIN: To be updated</p>
              <p>LEI: 3358004BDYJ73J4DJE20</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Legal & Trust</h4>
            <ul className="space-y-4 text-slate-300">
              <li><Link href="/terms" className="hover:text-primary-blue hover:translate-x-1 inline-block transition-all">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-primary-blue hover:translate-x-1 inline-block transition-all">Privacy Policy</Link></li>
              <li><Link href="/code-of-conduct" className="hover:text-primary-blue hover:translate-x-1 inline-block transition-all">Code of Conduct</Link></li>
              <li><Link href="#" className="hover:text-primary-blue hover:translate-x-1 inline-block transition-all">RBI-aligned LSP</Link></li>
              <li><Link href="/fund-flow" className="hover:text-primary-blue hover:translate-x-1 inline-block transition-all">Bank-to-customer Fund Flow</Link></li>
              <li><Link href="#" className="hover:text-primary-blue hover:translate-x-1 inline-block transition-all">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary-blue hover:translate-x-1 inline-block transition-all">FAQs</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-16 border-t border-white/10 text-slate-500 text-sm">
          <p>© 2026 Creditbucket Technologies Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
