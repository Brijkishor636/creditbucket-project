'use client';
import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  CheckCircle2, 
  Search, 
  Layers, 
  FileText,
  IndianRupee
} from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/footer/Footer";

const TrustGovernance = () => {
  return (
    <div className="min-h-screen flex flex-col">
     

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary-blue py-24 px-4 relative overflow-hidden">
          <div className="section-padding relative z-10 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-left"
              >
                <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-white/80 text-xs font-bold uppercase tracking-widest mb-6">
                  Trust & Governance
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  Built on Defined Roles and Regulatory Discipline
                </h1>
                <div className="space-y-6 text-blue-50 leading-relaxed max-w-xl">
                  <p>
                    Creditbucket operates as a structured lending infrastructure partner within clearly defined institutional boundaries.
                  </p>
                  <p>
                    Our model is designed to support compliant credit distribution while ensuring that underwriting, pricing, and portfolio control remain fully governed by the partner financial institution.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative flex justify-center lg:justify-end"
              >
                <div className="relative w-80 h-80">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl flex items-center justify-center">
                    <ShieldCheck className="w-32 h-32 text-white opacity-80" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* LSP Roles Section */}
        <section className="py-24 px-4 bg-[linear-gradient(135deg,#E6F3FF,#B9D9F6)]">
          <div className="section-padding text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Role as a Lending Service Provider (LSP)</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-16">
              Clear operational boundaries ensure accountability, compliance, and trust between all participants.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Creditbucket Responsibilities */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-ascent p-8 rounded-3xl border border-slate-100 text-left hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-primary-blue rounded-xl flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Creditbucket Responsibilities</h3>
                </div>
                
                <ul className="space-y-5">
                  {[
                    'Assisted borrower sourcing',
                    'Guided digital onboarding and documentation support',
                    'AI-driven engagement and financial literacy modules',
                    'Application routing and structured submission',
                    'Process coordination between borrower and lender systems'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start space-x-3 text-sm text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-primary-blue shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Lender Responsibilities */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-ascent p-8 rounded-3xl border border-slate-100 text-left hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-secondary-blue rounded-xl flex items-center justify-center">
                    <IndianRupee className="w-6 h-6 text-primary-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Lender Responsibilities</h3>
                </div>
                
                <ul className="space-y-5">
                  {[
                    'Credit underwriting and eligibility determination',
                    'Risk evaluation and approval decisions',
                    'Pricing, sanction terms, and loan structuring',
                    'Disbursal and repayment management',
                    'Regulatory reporting and portfolio governance'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start space-x-3 text-sm text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-primary-blue shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Data & Privacy Framework */}
        <section className="py-24 px-4 bg-[linear-gradient(135deg,#E6F3FF,#B9D9F6)]">
          <div className="section-padding text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Data & Privacy Framework</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-16">
              Our infrastructure is designed with structured data governance principles aligned with institutional and regulatory expectations.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  title: 'Data Minimization', 
                  desc: 'We collect and process only the information necessary for application facilitation and partner-aligned requirements.',
                  icon: Search
                },
                { 
                  title: 'Secure Routing', 
                  desc: 'Application data is routed through controlled systems with defined access protocols. Internal access is role-based.',
                  icon: Lock
                },
                { 
                  title: 'Partner-Aligned', 
                  desc: 'Data storage, processing, and transfer operate within structures aligned with partner policies and regulatory guidelines.',
                  icon: Layers
                },
                { 
                  title: 'Traceability', 
                  desc: 'Process steps, document flows, and communication checkpoints are structured for visibility and audit readiness.',
                  icon: FileText
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="card-interactive bg-ascent flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 bg-secondary-blue rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-blue transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-primary-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-4">{item.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
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

export default TrustGovernance;
