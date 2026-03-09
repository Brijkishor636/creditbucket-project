'use client';
import React from 'react';
import { 
  ShieldCheck, 
  Heart, 
  CheckCircle, 
  Lightbulb, 
  Users, 
  AlertCircle 
} from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/footer/Footer";

const CodeOfConduct = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeItem="Code of Conduct" />

      <main className="flex-grow bg-[linear-gradient(135deg,#EAF3FF,#B9D9F6)]">
        {/* Hero Section */}
        <section className="bg-primary-blue py-24 px-4 relative overflow-hidden text-center">
          <div className="section-padding relative z-10 text-white">
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
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-3xl mx-auto space-y-6 text-blue-100 leading-relaxed"
            >
              <p>
                Creditbucket Technologies Private Limited operates within clearly defined standards of integrity, compliance, and accountability across all levels of engagement.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Core Values */}
        <section className="py-24 px-4 bg-[linear-gradient(135deg,#E6F3FF,#B9D9F6)]">
          <div className="section-padding text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-20">Our Core Values</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  title: 'Integrity', 
                  desc: 'We act with honesty, transparency, and ethical intent in all interactions.',
                  icon: ShieldCheck
                },
                { 
                  title: 'Respect', 
                  desc: 'We respect the dignity of all individuals and foster an inclusive environment.',
                  icon: Heart
                },
                { 
                  title: 'Compliance', 
                  desc: 'We adhere strictly to regulatory guidelines and institutional frameworks.',
                  icon: CheckCircle
                },
                { 
                  title: 'Innovation', 
                  desc: 'We use technology responsibly to solve complex financial access challenges.',
                  icon: Lightbulb
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-white flex flex-col items-center text-center relative pt-12"
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white border-2 border-primary-blue rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary-blue" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Conduct Standards */}
        <section className="py-24 px-4 bg-[linear-gradient(135deg,#E6F3FF,#B9D9F6)]">
          <div className="section-padding">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-20">Professional Conduct Standards</h2>
            
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-16">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-primary-blue">Ethical Business Practices</h3>
                  <ul className="space-y-4 text-slate-700">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary-blue shrink-0 mt-0.5" />
                      <span>No fraud, theft, or financial misconduct.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary-blue shrink-0 mt-0.5" />
                      <span>No conflicts of interest with external entities.</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-primary-blue">Workplace Conduct</h3>
                  <ul className="space-y-4 text-slate-700">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary-blue shrink-0 mt-0.5" />
                      <span>No harassment, bullying, or discrimination.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary-blue shrink-0 mt-0.5" />
                      <span>Respectful and professional communication.</span>
                    </li>
                  </ul>
                </motion.div>
              </div>

              <div className="flex flex-col justify-center">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-primary-blue">Data Protection</h3>
                  <ul className="space-y-4 text-slate-700">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary-blue shrink-0 mt-0.5" />
                      <span>Protection of company and borrower information.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary-blue shrink-0 mt-0.5" />
                      <span>Adherence to cybersecurity protocols.</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Code for Samriddh Sathis */}
        <section className="py-24 px-4 bg-[linear-gradient(135deg,#E6F3FF,#B9D9F6)]">
          <div className="section-padding">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-20">Code for Samriddh Sathis</h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <p className="text-lg font-medium text-slate-800">
                  Samriddh Sathis represent the trusted interface between borrowers and lending institutions.
                </p>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-blue shrink-0 mt-0.5" />
                    <span>No collection of loan disbursal or repayment funds.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-blue shrink-0 mt-0.5" />
                    <span>No unauthorized fees or commissions.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-blue shrink-0 mt-0.5" />
                    <span>Transparent communication of lender terms.</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <div className="w-64 h-64 bg-secondary-blue rounded-full flex items-center justify-center">
                  <Users className="w-32 h-32 text-primary-blue" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Escalation & Reporting */}
        <section className="py-24 px-4 bg-[linear-gradient(135deg,#E6F3FF,#B9D9F6)] text-center">
          <div className="section-padding max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">Escalation & Reporting</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                Creditbucket encourages reporting of any violation of this Code of Conduct without fear of retaliation.
              </p>
              <p className="font-bold text-slate-900">
                For reporting concerns:
              </p>
              <p className="text-primary-blue font-medium">
                [Official Email – To Be Confirmed]
              </p>
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

export default CodeOfConduct;
