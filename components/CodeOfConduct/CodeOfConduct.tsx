"use client";

import React from 'react';
import { 
  ShieldCheck, 
  Heart, 
  CheckCircle, 
  Lightbulb, 
  Users, 
  ChevronRight 
} from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from "@/components/layout/Navbar";
import codeBg from "@/assets/images/code.png";

const CodeOfConduct = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F8FBFF]">
      <Navbar activeItem="Code of Conduct" />

      <main className="flex-grow">
        {/* --- 1. Hero Section (Vanishing Point Grid) --- */}
        <section className="w-full rounded-2xl overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${codeBg.src})` }}
    >
      <div className="w-full h-full bg-gradient-to-r from-[#0C4A6E]/90 to-[#0C82DD]/70 px-4 sm:px-6 py-16">
          <div className="section-padding relative z-10 text-white flex flex-col items-center max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1 border border-white/30 rounded-full text-white/90 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-md"
            >
              Governance
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Code of Conduct
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl font-medium text-blue-50 mb-10"
            >
              Principles Guiding Responsible and Ethical Operations
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-3xl mx-auto text-blue-100  leading-loose"
            >
              <p>
                Creditbucket Technologies Private Limited operates within clearly defined standards of integrity, compliance, and accountability across all levels of engagement — including internal teams, facilitators, and institutional partners.
              </p>
              <p>
                We are committed to ethical conduct, regulatory alignment, and responsible engagement within the credit distribution ecosystem.
              </p>
            </motion.p>
          </div>
          </div>
        </section>

        {/* --- 2. Our Core Values (Notched Circle Cards) --- */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 text-center mb-24">Our Core Values</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Integrity', icon: ShieldCheck, text: "We act with honesty, transparency, and ethical intent in all interactions with borrowers, partners, and team members." },
                { title: 'Respect', icon: Heart, text: "We respect the dignity, privacy, and individual rights of borrowers, partners, and team members." },
                { title: 'Compliance', icon: CheckCircle, text: "We adhere strictly to regulatory guidelines, institutional frameworks, and legal requirements." },
                { title: 'Responsible Innovation', icon: Lightbulb, text: "We use technology responsibly to enhance transparency and efficiency in all interactions with borrowers, partners, and team members." }
              ].map((item, i) => (
                <div key={i} className="relative bg-white rounded-2xl p-8 pt-12 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)] border border-slate-100 text-center hover:shadow-xl transition-all duration-300">
                  {/* The Notched Circle Icon */}
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-white border border-slate-100 rounded-full flex items-center justify-center p-1 shadow-sm">
                    <div className="w-full h-full rounded-full border border-blue-100 flex items-center justify-center bg-blue-50/30">
                       <item.icon className="w-5 h-5 text-[#1B84E7]" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{item.title}</h4>
                  <p className="text-[14px] text-slate-500 leading-relaxed font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 3. Professional Conduct Standards (Three Column Dark Section) --- */}
        <section className="py-24 px-6 bg-[#0069C2] text-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-20">Professional Conduct Standards</h2>
            
            <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
              {/* Column 1 */}
              <div className="space-y-8">
                <h4 className="text-xl font-bold border-b border-white/20 pb-4">Ethical Business Practices</h4>
                <ul className="space-y-4 text-blue-50/90 text-[15px] font-medium">
                  <li className="flex gap-3"><span>•</span> No fraud, theft, or financial misconduct.</li>
                  <li className="flex gap-3"><span>•</span> No conflicts of interest with competitors or external entities.</li>
                  <li className="flex gap-3"><span>•</span> No unauthorized representation of Creditbucket.</li>
                </ul>
              </div>

              {/* Column 2 */}
              <div className="space-y-8">
                <h4 className="text-xl font-bold border-b border-white/20 pb-4">Data Protection & Confidentiality</h4>
                <ul className="space-y-4 text-blue-50/90 text-[15px] font-medium">
                  <li className="flex gap-3"><span>•</span> Protection of company and borrower information.</li>
                  <li className="flex gap-3"><span>•</span> No misuse of data or digital systems.</li>
                  <li className="flex gap-3"><span>•</span> Adherence to cybersecurity protocols.</li>
                </ul>
              </div>

              {/* Column 3 */}
              <div className="space-y-8">
                <h4 className="text-xl font-bold border-b border-white/20 pb-4">Workplace Conduct</h4>
                <ul className="space-y-4 text-blue-50/90 text-[15px] font-medium">
                  <li className="flex gap-3"><span>•</span> No harassment, bullying, or discrimination.</li>
                  <li className="flex gap-3"><span>•</span> Adherence to workplace safety guidelines.</li>
                  <li className="flex gap-3"><span>•</span> Respectful and professional communication.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- 4. Code for Samriddh Sathis (Icon Right Layout) --- */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 text-center mb-16 tracking-tight">Code for Samriddh Sathis & Field Facilitators</h2>
            
            <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24 p-8 md:p-12">
              <div className="flex-1 space-y-8">
                <p className="text-lg font-semibold text-slate-800 leading-relaxed">
                  Samriddh Sathis and on-ground facilitators represent the structured interface between borrowers and lending institutions. Accordingly:
                </p>
                <ul className="space-y-4 text-slate-500 font-medium text-[15px]">
                  <li className="flex gap-3"><span>•</span> No collection of loan disbursal or repayment funds.</li>
                  <li className="flex gap-3"><span>•</span> No disclosure of proprietary technology workflows.</li>
                  <li className="flex gap-3"><span>•</span> No unauthorized fees or commissions.</li>
                  <li className="flex gap-3"><span>•</span> Transparent communication of lender terms.</li>
                  <li className="flex gap-3"><span>•</span> Regular training and regulatory adherence assessment.</li>
                </ul>
              </div>
              <div className="flex-shrink-0">
                 <Users className="w-32 h-32 md:w-56 md:h-56 text-[#1B84E7] opacity-80" strokeWidth={1.2} />
              </div>
            </div>
          </div>
        </section>

        {/* --- 5. Escalation & Reporting (Centered Content) --- */}
        <section className="py-20 px-6 bg-white text-center border-t border-slate-100">
          <div className="max-w-3xl mx-auto space-y-10">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Escalation & Reporting</h2>
            <div className="space-y-6">
              <p className="text-slate-500 font-medium text-base md:text-lg leading-relaxed">
                Creditbucket encourages reporting of any violation of this Code of Conduct without fear of retaliation. All reports are handled through established institutional frameworks, ensuring anonymity and independent grievance redressal.
              </p>
              <div className="pt-4">
                <p className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-2">For reporting concerns:</p>
                <p className="text-2xl font-bold text-[#1B84E7]">Official Email – To Be Confirmed</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 6. Commitment Banner --- */}
        <section className="bg-[#1B84E7] py-14 px-6 text-center text-white">
          <p className="max-w-5xl mx-auto text-lg md:text-xl font-medium leading-relaxed italic opacity-90">
            "Creditbucket remains committed to building a compliant, transparent, and accountable infrastructure layer within India's formal credit ecosystem."
          </p>
        </section>
      </main>

      
    </div>
  );
};

export default CodeOfConduct;