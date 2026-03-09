'use client';
import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Search, FileCheck, BrainCircuit, MessageSquare, ShieldCheck, Landmark, UserCheck, Wallet, ClipboardCheck } from 'lucide-react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/footer/Footer";

const FundFlow = () => {
  return (
    <div className="min-h-screen flex flex-col font-commissioner">
      <Navbar activeItem="Governance" />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary-blue py-24 px-4 relative overflow-hidden">
          <div className="section-padding flex flex-col lg:flex-row items-center gap-16 relative z-10">
            <div className="lg:w-1/2 text-white">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-1 bg-white/10 rounded-full text-white/80 text-xs font-bold uppercase tracking-widest mb-6"
              >
                Governance
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
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
                className="text-lg text-blue-100 leading-relaxed mb-8"
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
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 flex flex-col items-center gap-8 shadow-2xl">
                  {/* Bank Box */}
                  <div className="w-full bg-white/10 border border-white/30 rounded-xl p-6 text-center shadow-lg">
                    <h3 className="text-white font-bold text-xl mb-1">Banks / NBFC</h3>
                    <p className="text-white/70 text-sm">Lending Partner</p>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex flex-col items-center gap-2">
                    <ArrowDown className="text-white/80 animate-bounce" size={24} />
                  </div>

                  {/* Borrower Box */}
                  <div className="w-full bg-white/10 border border-white/30 rounded-xl p-6 text-center shadow-lg">
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
                {
                  id: 1,
                  title: "Application Submission",
                  desc: "Borrower applications are submitted through Creditbucket's assisted infrastructure."
                },
                {
                  id: 2,
                  title: "Lender Evaluation",
                  desc: "All credit assessment and approval decisions are conducted exclusively by the lender."
                },
                {
                  id: 3,
                  title: "Loan Sanction",
                  desc: "Loan amount, pricing, and tenure are defined solely by the partner lender."
                },
                {
                  id: 4,
                  title: "Direct Disbursal",
                  desc: "Funds are disbursed directly from the lender to the borrower's bank account."
                }
              ].map((step, index) => (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-white flex flex-col items-center text-center relative"
                >
                  <div className="w-12 h-12 rounded-full border-2 border-primary-blue flex items-center justify-center text-primary-blue font-bold text-xl mb-6">
                    {step.id}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="py-24 px-4 bg-[linear-gradient(135deg,#E6F3FF,#B9D9F6)]">
          <div className="section-padding text-center">
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
                {
                  icon: <Search className="text-primary-blue" size={24} />,
                  title: "Borrower Sourcing",
                  desc: "Structured identification and onboarding through assisted digital channels."
                },
                {
                  icon: <FileCheck className="text-primary-blue" size={24} />,
                  title: "Digital Onboarding",
                  desc: "End-to-end assisted application support and KYC coordination."
                },
                {
                  icon: <BrainCircuit className="text-primary-blue" size={24} />,
                  title: "AI Engagement",
                  desc: "AI-powered engagement layer that improves borrower participation."
                },
                {
                  icon: <MessageSquare className="text-primary-blue" size={24} />,
                  title: "Process Support",
                  desc: "Real-time tracking and structured communication between borrower and lender."
                }
              ].map((capability, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-ascent p-8 rounded-2xl border border-slate-100 text-center flex flex-col items-center"
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

        {/* Partnership Model */}
        <section className="py-24 px-4 bg-[linear-gradient(135deg,#E6F3FF,#B9D9F6)]">
          <div className="section-padding">
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
                transition={{ delay: 0.1 }}
                className="text-xl text-slate-600 max-w-3xl mx-auto"
              >
                Clearly defined role separation and structured operational accountability.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Creditbucket Responsibilities */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card-white border-l-4 border-primary-blue"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-secondary-blue rounded-full flex items-center justify-center">
                    <ShieldCheck className="text-primary-blue" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Creditbucket</h3>
                </div>
                <ul className="space-y-6">
                  {[
                    "Assisted borrower sourcing",
                    "Digital onboarding & KYC coordination",
                    "AI-driven engagement & literacy",
                    "Application facilitation & support"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <UserCheck className="text-primary-blue shrink-0 mt-1" size={18} />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Lender Responsibilities */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card-white border-l-4 border-primary-blue"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-secondary-blue rounded-full flex items-center justify-center">
                    <Landmark className="text-primary-blue" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Lender</h3>
                </div>
                <ul className="space-y-6">
                  {[
                    "Credit underwriting & assessment",
                    "Risk evaluation & decisions",
                    "Pricing & loan sanction terms",
                    "Disbursal & repayment management"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <ClipboardCheck className="text-primary-blue shrink-0 mt-1" size={18} />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bottom Banner */}
        <section className="bg-primary-blue py-12 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-white text-lg md:text-xl font-medium leading-relaxed">
              Creditbucket remains committed to building a compliant, transparent, and accountable infrastructure layer.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FundFlow;
