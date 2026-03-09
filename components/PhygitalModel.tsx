'use client';
import React from 'react';
import { 
  Building2, 
  Layers, 
  Users, 
  FileText, 
  CheckCircle2, 
  ShieldCheck, 
  Eye, 
  Network, 
  ClipboardCheck,
  Check
} from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/footer/Footer";

const PhygitalModel = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeItem="Phygital Model" />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary-blue py-20 px-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1 bg-white/10 rounded-full text-white/80 text-xs font-bold uppercase tracking-widest mb-6"
            >
              Model Overview
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-12"
            >
              What Is the Phygital Model?
            </motion.h1>
            
            <div className="grid md:grid-cols-2 gap-12 items-center text-left">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6 text-white/90 leading-relaxed"
              >
                <p className="text-lg">
                  The phygital model combines physical facilitation with digital processing systems to improve structured access to credit in underserved markets.
                </p>
                <p>
                  While digital platforms enable scale and efficiency, physical assistance ensures clarity, guidance, and accessibility for borrowers who may face literacy, documentation, or technology barriers.
                </p>
                <p>
                  By integrating both layers, Creditbucket creates a controlled and compliant distribution environment that supports lenders while improving borrower participation.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Physical Layer Card */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl transition-colors cursor-default"
                >
                  <h3 className="text-xl font-bold text-white mb-6">Physical Layer</h3>
                  <ul className="space-y-4">
                    {[
                      'On-ground facilitators (Samriddh Saathis)',
                      'Assisted documentation',
                      'Process explanation'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start space-x-3 text-sm text-white/80">
                        <div className="mt-1 bg-white rounded-full p-0.5">
                          <Check className="w-3 h-3 text-primary-blue" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                
                {/* Digital Layer Card */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl transition-colors cursor-default"
                >
                  <h3 className="text-xl font-bold text-white mb-6">Digital Layer</h3>
                  <ul className="space-y-4">
                    {[
                      'Application routing',
                      'Underwriting integration',
                      'Tracking & coordination'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start space-x-3 text-sm text-white/80">
                        <div className="mt-1 bg-white rounded-full p-0.5">
                          <Check className="w-3 h-3 text-primary-blue" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          </div>
        </section>

        {/* Operational Flow Section */}
        <section className="py-24 px-4 bg-pure-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">End-to-End Operational Flow</h2>
            <p className="text-slate-500 max-w-2xl mx-auto mb-20">
              A structured, linear process from lender integration to borrower disbursal.
            </p>
            
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 hidden lg:block z-0"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
                {[
                  { step: 1, title: 'Lender Integration', desc: 'Banks and NBFCs onboard as lending partners with defined mandates.', icon: Building2 },
                  { step: 2, title: 'Creditbucket Infrastructure Layer', desc: 'Technology, compliance, and operational systems are activated.', icon: Layers },
                  { step: 3, title: 'Assisted Facilitation', desc: 'Samriddh Saathis provide on-ground support where applicable.', icon: Users },
                  { step: 4, title: 'Borrower Application', desc: 'Guided application submission with document assistance.', icon: FileText },
                  { step: 5, title: 'Underwriting & Disbursal', desc: 'Lender-side assessment, approval, and fund disbursal.', icon: CheckCircle2 },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="flex flex-col items-center group cursor-default"
                  >
                    <div className="w-20 h-20 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:border-primary-blue group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      <item.icon className="w-8 h-8 text-primary-blue" />
                    </div>
                    <span className="text-xs font-bold text-primary-blue uppercase tracking-widest mb-2">Step {item.step}</span>
                    <h4 className="text-lg font-bold text-slate-800 mb-3 px-4">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed px-4">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why it Works Section */}
        <section className="py-24 px-4 bg-ascent">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Why the Phygital Model Works</h2>
            <p className="text-slate-500 max-w-2xl mx-auto mb-16">
              Combining human facilitation with digital infrastructure to deliver structured, compliant credit distribution.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { 
                  title: 'Trust-Led Access', 
                  desc: 'Community-embedded facilitators create trust-based access in markets where digital-only outreach has limited effectiveness.',
                  icon: ShieldCheck
                },
                { 
                  title: 'Assisted Clarity in Low-Literacy Environments', 
                  desc: 'Guided facilitation reduces friction in documentation, application, and understanding - improving completion and accuracy.',
                  icon: Eye
                },
                { 
                  title: 'Scalable Infrastructure Layer', 
                  desc: 'Digital systems handle application routing, tracking, and compliance at scale - decoupled from physical facilitation.',
                  icon: Network
                },
                { 
                  title: 'Structured & Compliant Operations', 
                  desc: 'Clear role separation, documented processes, and defined operational boundaries aligned with institutional frameworks.',
                  icon: ClipboardCheck
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="card-interactive flex items-start space-x-6 text-left group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary-blue rounded-xl flex items-center justify-center group-hover:bg-primary-blue transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-primary-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PhygitalModel;
