'use client';
import React from 'react';
import { 
  Building2, 
  Building, 
  ShieldCheck, 
  CheckCircle2, 
  Globe, 
  FileText, 
  Zap, 
  Lock
} from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/footer/Footer";

const Partners = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeItem="Partners" />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary-blue py-20 px-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Who We Partner With
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-blue-100 max-w-2xl mx-auto mb-16 text-lg"
            >
              Creditbucket collaborates with regulated financial institutions committed to structured, responsible credit distribution in underserved markets.
            </motion.p>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                { 
                  title: "Scheduled Commercial Banks", 
                  desc: "We work with public and private sector banks seeking structured last-mile access to emerging borrower segments while maintaining clear underwriting and compliance control.",
                  icon: Building2
                },
                { 
                  title: "Non-Banking Financial Companies (NBFCs)", 
                  desc: "We collaborate with NBFCs looking to expand responsibly into underserved and semi-formal markets through assisted and engagement-led distribution models.",
                  icon: Building
                },
                { 
                  title: "Regulated Financial Institutions", 
                  desc: "Our model supports institutions operating within defined regulatory frameworks that require clarity, role separation, and accountable distribution structures.",
                  icon: ShieldCheck
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 text-left transition-all cursor-default"
                >
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shrink-0 text-primary-blue shadow-lg">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-blue-50 text-sm leading-relaxed opacity-90">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          </div>
        </section>

        {/* Partnership Model Section */}
        <section className="py-24 px-4 bg-pure-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Partnership Model</h2>
            <p className="text-slate-600 max-w-3xl mx-auto mb-20 text-lg">
              Our partnerships operate through clearly defined role separation and structured operational accountability.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-slate-100 shadow-2xl">
              {/* Creditbucket Responsibilities */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 md:p-14 text-left border-b lg:border-b-0 lg:border-r border-slate-100"
              >
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center text-primary-blue">
                    <div className="w-6 h-6 bg-primary-blue rounded-sm rotate-45 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Creditbucket Responsibilities</h3>
                </div>
                
                <ul className="space-y-6">
                  {[
                    'Assisted borrower sourcing',
                    'Guided digital onboarding & KYC coordination',
                    'AI-driven engagement & financial literacy modules',
                    'Application facilitation & process support',
                    'Structured communication between borrower and lender systems'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 group">
                      <div className="mt-1 bg-slate-100 rounded-full p-1 group-hover:bg-primary-blue transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-slate-600 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Lender Responsibilities */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-ascent p-10 md:p-14 text-left"
              >
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-primary-blue rounded-xl flex items-center justify-center text-white">
                    <Building2 size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Lender Responsibilities</h3>
                </div>
                
                <ul className="space-y-6">
                  {[
                    'Credit underwriting & eligibility assessment',
                    'Risk evaluation & approval decisions',
                    'Pricing & loan sanction terms',
                    'Disbursal & repayment management',
                    'Regulatory compliance & portfolio governance'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 group">
                      <div className="mt-1 bg-white rounded-full p-1 group-hover:bg-primary-blue transition-colors shadow-sm">
                        <CheckCircle2 className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-slate-600 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Partner Section */}
        <section className="py-24 px-4 bg-ascent">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Partner with Creditbucket</h2>
            <p className="text-slate-600 max-w-3xl mx-auto mb-20 text-lg">
              Our phygital infrastructure delivers measurable outcomes for lending partners while ensuring ethical, compliant service to borrowers.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { 
                  title: "Access Beyond Digital-Only Channels", 
                  desc: "Combines technology and assisted facilitation to reach borrower segments that are difficult to serve through branch-only or app-only models.",
                  icon: Globe
                },
                { 
                  title: "Higher Application Clarity", 
                  desc: "Guided onboarding and engagement tools reduce incomplete submissions and improve borrower understanding.",
                  icon: FileText
                },
                { 
                  title: "Engagement-Driven Retention", 
                  desc: "AI-powered learning and gamified engagement modules support long-term borrower participation and responsible financial behavior.",
                  icon: Zap
                },
                { 
                  title: "Structured & Compliant Distribution", 
                  desc: "Clear role separation, documented processes, and defined operational boundaries aligned with institutional frameworks.",
                  icon: Lock
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-interactive flex flex-col items-start text-left p-10"
                >
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 text-slate-400 group-hover:text-primary-blue transition-colors">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
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

export default Partners;
