'use client';
import React from 'react';
import { 
  UserCircle, 
  MapPin, 
  Users, 
  IndianRupee, 
  FileCheck, 
  ShieldCheck, 
  Globe, 
  Link2
} from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/footer/Footer";

const Impact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeItem="Impact" />

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
                  Impact
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  Expanding Structured Credit Access at Scale
                </h1>
                <div className="space-y-6 text-blue-50 leading-relaxed max-w-xl">
                  <p>
                    Creditbucket's infrastructure model enables regulated financial institutions to responsibly expand into underserved and semi-formal markets.
                  </p>
                  <p>
                    Through assisted facilitation, digital coordination, and engagement-led participation, supporting structured integration of new borrower segments into formal credit ecosystems.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative flex justify-center lg:justify-end"
              >
                <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                  <div className="absolute inset-0 bg-white/5 rounded-full blur-3xl"></div>
                  <Globe className="w-48 h-48 text-white opacity-20" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Operational Scale Indicators */}
        <section className="py-20 px-4 bg-pure-white border-b border-slate-100">
          <div className="section-padding">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">Operational Scale Indicators</h2>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: 'Samriddh Saathis', value: '0 +', icon: UserCircle },
                { label: 'Pin codes Covered', value: '0 +', icon: MapPin },
                { label: 'People Impacted', value: '0 +', icon: Users },
                { label: 'Total Impact Created', value: '₹10,00,000', icon: IndianRupee },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="card-interactive flex flex-col items-center text-center group"
                >
                  <div className="w-14 h-14 bg-secondary-blue rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-blue transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-primary-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">{item.value}</div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Regional Operational Presence */}
        <section className="py-24 px-4 bg-ascent">
          <div className="section-padding text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Regional Operational Presence</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-16">
              Our presence is concentrated in Eastern India through structured facilitator networks and phased expansion aligned with institutional partnerships.
            </p>
            
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Primary Hub - Bihar */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
                className="lg:col-span-5 bg-primary-blue rounded-3xl p-10 text-white text-left relative overflow-hidden shadow-xl transition-transform duration-500"
              >
                <div className="relative z-10">
                  <h3 className="text-4xl font-bold mb-2">Bihar</h3>
                  <h4 className="text-xl font-medium opacity-90 mb-6">Primary Operational Hub</h4>
                  <p className="text-sm opacity-80 leading-relaxed max-w-xs">
                    Core concentration of facilitator network and assisted distribution infrastructure, supporting structured borrower onboarding at scale.
                  </p>
                </div>
                <div className="absolute right-0 bottom-0 w-64 h-64 opacity-20 -mr-10 -mb-10">
                  <Globe className="w-full h-full" />
                </div>
              </motion.div>

              {/* Other States Grid */}
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                {[
                  { name: 'Jharkhand', desc: 'Active borrower participation supported through structured regional deployment.' },
                  { name: 'Odisha', desc: 'Growing operational engagement aligned with partner-led expansion frameworks.' },
                  { name: 'West Bengal', desc: 'Selective expansion supported through coordinated infrastructure deployment.' },
                  { name: 'Assam', desc: 'Emerging regional footprint through phased and compliance-aligned rollout.' }
                ].map((state, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="card-white text-left group hover:border-primary-blue"
                  >
                    <h4 className="text-xl font-bold text-primary-blue mb-3">{state.name}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{state.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem-Level Impact */}
        <section className="py-24 px-4 bg-pure-white">
          <div className="section-padding text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Ecosystem-Level Impact</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-16">
              Beyond geographic presence, our infrastructure model contributes to measurable structural improvements across borrower engagement and institutional credit distribution.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { 
                  title: 'Improved Application Discipline', 
                  desc: 'Guided onboarding and structured facilitation reduce incomplete submissions and improve documentation clarity in semi-formal markets.',
                  icon: FileCheck
                },
                { 
                  title: 'Responsible Borrower Participation', 
                  desc: 'AI-driven engagement and gamified learning modules encourage informed participation and long-term financial behavior alignment.',
                  icon: ShieldCheck
                },
                { 
                  title: 'Institutional-Grade Structure', 
                  desc: 'Clearly defined operational roles and process documentation support governance-aligned distribution in emerging geographies.',
                  icon: Globe
                },
                { 
                  title: 'Enhanced Portfolio Visibility', 
                  desc: 'Structured application routing and coordinated communication improve traceability and decision-stage transparency.',
                  icon: Link2
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-ascent p-10 rounded-3xl border border-slate-100 flex flex-col items-start text-left hover:shadow-xl hover:bg-white transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6 group-hover:bg-primary-blue transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-primary-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
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

export default Impact;
