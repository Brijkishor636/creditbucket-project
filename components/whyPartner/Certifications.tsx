"use client";

import { ShieldCheckIcon, ChartBarIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const Certifications = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
     

      <main className="flex-grow">
        {/* --- Hero Section --- */}
        <section className="bg-gradient-to-b from-[#0C4A6E] to-[#1B84E7] pt-32 pb-20 px-6 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex flex-col items-center mb-4">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
              <p className="text-[12px] font-bold uppercase tracking-[0.3em] py-2 text-blue-100">
                Compliance Standards
              </p>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Our Certifications
            </h1>
            <p className="text-lg text-blue-100/80 max-w-2xl mx-auto font-medium">
              Creditbucket operates under the highest global standards for data security and business resilience, ensuring your financial ecosystem remains protected.
            </p>
          </div>
        </section>

        {/* --- ISO Badges Section (Matches Image) --- */}
        <section className="py-24 px-6 bg-[#F8FBFF] -mt-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10">
              
              {/* ISO 22301 Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white rounded-[2.5rem] p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-blue-50 flex flex-col md:flex-row items-center gap-8"
              >
                <div className="w-40 h-40 flex-shrink-0 flex items-center justify-center border-r-0 md:border-r border-slate-100 md:pr-8">
                  {/* Swap this div with your actual ISO 22301 SVG/Image */}
                  <div className="text-center">
                    <ChartBarIcon className="w-16 h-16 text-[#1B84E7] mx-auto mb-2" />
                    <span className="text-2xl font-black text-slate-800 tracking-tighter">ISO</span>
                    <p className="text-xs font-bold text-[#1B84E7]">22301</p>
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Business Continuity Management</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    Certified for maintaining essential functions during and after a disruption, ensuring 100% operational uptime for our partners.
                  </p>
                </div>
              </motion.div>

              {/* ISO 27001 Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white rounded-[2.5rem] p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-blue-50 flex flex-col md:flex-row items-center gap-8"
              >
                <div className="w-40 h-40 flex-shrink-0 flex items-center justify-center border-r-0 md:border-r border-slate-100 md:pr-8">
                  {/* Swap this div with your actual ISO 27001 SVG/Image */}
                  <div className="text-center">
                    <LockClosedIcon className="w-16 h-16 text-slate-900 mx-auto mb-2" />
                    <span className="text-2xl font-black text-slate-800 tracking-tighter">ISO</span>
                    <p className="text-xs font-bold text-slate-900 uppercase">27001</p>
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Information Security Management</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    The gold standard for data protection. We implement rigorous controls to protect sensitive borrower and institutional information.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* --- Bottom Commitment --- */}
        <section className="py-20 px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <ShieldCheckIcon className="w-16 h-16 text-[#1B84E7] mx-auto opacity-20" />
            <h2 className="text-3xl font-bold text-slate-900">Built on Trust</h2>
            <p className="text-slate-600 font-medium leading-relaxed">
              Our commitment to compliance isn't just about badges; it's about the security of every transaction. We undergo annual audits to maintain these certifications.
            </p>
          </div>
        </section>
      </main>

 
    </div>
  );
};

export default Certifications;