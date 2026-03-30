'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowDown, 
  Search, 
  FileCheck, 
  BrainCircuit, 
  MessageSquare, 
  ShieldCheck, 
  Landmark, 
  UserCheck, 
  Wallet, 
  ClipboardCheck 
} from 'lucide-react';

const FundFlow = () => {
  return (
    <div className="min-h-screen px-4 py-4 flex flex-col font-commissioner">
     

      <main className="flex-grow">
        {/* Hero Section */}
<section className="relative w-full overflow-hidden text-white rounded-2xl min-h-[60vh] flex items-center">
  
  {/* Video Background */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover scale-130"
  >
    <source src="/videos/sol-bg-video.mp4" type="video/mp4" />
  </video>

  
  <div className="absolute inset-0  bg-opacity-60"></div>

  {/* Centered Content */}
  <div className="section-padding flex flex-col lg:flex-row items-center gap-16 relative z-10 w-full py-24">
    <div className="lg:w-1/2 py-4 text-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/90 text-[11px] uppercase tracking-widest mb-6"
      >
        Governance
      </motion.div>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tighter"
      >
        Direct Bank-to-Customer <br /> Fund Flow
      </motion.h1>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-2xl font-medium text-blue-50 mb-8"
      >
        Clear Separation of Creditbucket and money flow
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-blue-100/90 leading-relaxed mb-8"
      >
        Creditbucket operates strictly as a lending infrastructure and distribution partner. All loan disbursals and repayments occur directly between the regulated financial institution and the borrower.
      </motion.p>
    </div>

    <div className="lg:w-1/2 w-full flex justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="relative w-full max-w-md"
      >
        <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-8 flex flex-col items-center gap-8 shadow-2xl">
          {/* Bank Box */}
          <div className="w-full bg-white/10 border border-white/40 rounded-2xl p-6 text-center shadow-lg backdrop-blur-sm">
            <h3 className="text-white font-bold text-xl mb-1">Banks / NBFC</h3>
            <p className="text-white/70 text-sm">Lending Partner</p>
          </div>

          {/* Flow Arrow */}
          <div className="flex flex-col items-center gap-2">
            <ArrowDown className="text-white animate-bounce" size={28} />
          </div>

          {/* Borrower Box */}
          <div className="w-full bg-white/10 border border-white/40 rounded-2xl p-6 text-center shadow-lg backdrop-blur-sm">
            <h3 className="text-white font-bold text-xl mb-1">Borrower</h3>
            <p className="text-white/70 text-sm">End Customer</p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>
        {/* Loan Disbursal Process */}
        <section className="py-24 px-4 bg-[linear-gradient(135deg,#E6F3FF,#B9D9F6)]">
          <div className="section-padding text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-slate-900 mb-4"
            >
              Loan Disbursal Process
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600 mb-16"
            >
              A structured, transparent process from application to fund transfer.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { id: 1, title: "Application Submission", desc: "Borrower applications are submitted through Creditbucket's assisted infrastructure." },
                { id: 2, title: "Lender Evaluation", desc: "All credit assessment and approval decisions are conducted exclusively by the lender." },
                { id: 3, title: "Loan Sanction", desc: "Loan amount, pricing, and tenure are defined solely by the partner lender." },
                { id: 4, title: "Direct Disbursal", desc: "Funds are disbursed directly from the lender to the borrower's bank account." }
              ].map((step, index) => (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-full border-2 border-[#0C82DD] flex items-center justify-center text-[#0C82DD] font-bold text-xl mb-6">
                    {step.id}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CORE CAPABILITIES --- */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-slate-900 mb-4"
            >
              Core Capabilities
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600 mb-16"
            >
              Operational modules that support structured credit distribution.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Search className="text-[#0C82DD]" size={24} />, title: "Borrower Sourcing", desc: "Structured identification and onboarding through assisted digital channels." },
                { icon: <FileCheck className="text-[#0C82DD]" size={24} />, title: "Digital Onboarding", desc: "End-to-end assisted application support and KYC coordination." },
                { icon: <BrainCircuit className="text-[#0C82DD]" size={24} />, title: "AI Engagement", desc: "AI-powered engagement layer that improves borrower participation." },
                { icon: <MessageSquare className="text-[#0C82DD]" size={24} />, title: "Process Support", desc: "Real-time tracking and structured communication between borrower and lender." }
              ].map((capability, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center flex flex-col items-center hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{capability.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{capability.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PARTNERSHIP MODEL --- */}
        <section className="py-24 px-4 bg-slate-50 lg:rounded-t-[4rem]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-slate-900 mb-4"
              >
                Partnership Model
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl text-slate-600 max-w-3xl mx-auto"
              >
                Clearly defined role separation and structured operational accountability.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-3xl shadow-sm border-l-4 border-[#0C82DD]"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                    <ShieldCheck className="text-[#0C82DD]" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Creditbucket</h3>
                </div>
                <ul className="space-y-6">
                  {["Assisted borrower sourcing", "Digital onboarding & KYC coordination", "AI-driven engagement & literacy", "Application facilitation & support"].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <UserCheck className="text-[#0C82DD] shrink-0 mt-1" size={18} />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-3xl shadow-sm border-l-4 border-[#0C82DD]"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                    <Landmark className="text-[#0C82DD]" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Lender</h3>
                </div>
                <ul className="space-y-6">
                  {["Credit underwriting & assessment", "Risk evaluation & decisions", "Pricing & loan sanction terms", "Disbursal & repayment management"].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <ClipboardCheck className="text-[#0C82DD] shrink-0 mt-1" size={18} />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- BOTTOM BANNER --- */}
        <section className="bg-[#001D3D] py-16 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-white text-lg md:text-xl font-medium leading-relaxed opacity-90"
            >
              Creditbucket remains committed to building a compliant, transparent, and accountable infrastructure layer.
            </motion.p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FundFlow;