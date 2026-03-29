'use client';
import { 
  Lock,   
  CheckCircle2, 
  Search, 
  Layers, 
  FileText,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import bgImg from '@/assets/images/creditblack.png';
import rupee from '@/assets/images/ruppee.png';

export default function TrustDataSection() {
    return (
      <div className="py-16">
        <section className="max-w-7xl mx-auto px-4 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Role as a Lending Service Provider (LSP)
            </h2>
            <p className="text-black-600 max-w-3xl mx-auto">
              Clear operational boundaries ensure accountability, compliance, and <br/>trust between all participants.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Creditbucket Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col h-full"
            >
              <div className="flex items-center space-x-5 mb-10">
                <div className="w-16 h-16 bg-[#E0F2FE] rounded-2xl flex items-center justify-center overflow-hidden p-2">
                  <Image 
                    src={bgImg} 
                    alt="Creditbucket Logo" 
                    className="w-full h-full object-contain mix-blend-multiply" 
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                  Creditbucket Responsibilities
                </h3>
              </div>
              
              <ul className="space-y-6 flex-grow">
                {[
                  'Assisted borrower sourcing',
                  'Guided digital onboarding and documentation support',
                  'AI-driven engagement and financial literacy modules',
                  'Application routing and structured submission',
                  'Process coordination between borrower and lender systems'
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-4 text-[15px] text-slate-600 font-medium leading-snug">
                    <CheckCircle2 className="w-6 h-6 text-[#1B84E7] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Lender Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col h-full"
            >
              <div className="flex items-center space-x-5 mb-10">
                <div className="w-16 h-16 bg-[#E0F2FE] rounded-2xl flex items-center justify-center overflow-hidden p-2">
                  <Image 
                    src={rupee} 
                    alt="Lender Logo" 
                    className="w-full h-full object-contain mix-blend-multiply" 
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                  Lender Responsibilities
                </h3>
              </div>
              
              <ul className="space-y-6 flex-grow">
                {[
                  'Credit underwriting and eligibility determination',
                  'Risk evaluation and approval decisions',
                  'Pricing, sanction terms, and loan structuring',
                  'Disbursal and repayment management',
                  'Regulatory reporting and portfolio governance'
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-4 text-[15px] text-slate-600 font-medium leading-snug">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* 2. Data & Privacy Framework - UPDATED TEXT */}
        <section className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[30px] md:text-[44px] font-bold text-slate-900 mb-4">Data & Privacy Framework</h2>
            <p className="text-black-600 max-w-2xl mx-auto">
              Our infrastructure is designed with structured data governance principles aligned with <br/> institutional and regulatory expectations.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            {[
              { 
                title: 'Data Minimization', 
                desc: 'We collect and process only the information necessary for application facilitation and partner-aligned requirements. Data scope is defined by institutional frameworks and documented processes.',
                icon: Search
              },
              { 
                title: 'Secure Routing & Access Control', 
                desc: 'Application data is routed through controlled systems with defined access protocols. Internal access is role-based and monitored to ensure operational discipline.',
                icon: Lock
              },
              { 
                title: 'Partner-Aligned Data Handling', 
                desc: 'Data storage, processing, and transfer operate within structures aligned with partner policies and regulatory guidelines. Credit authority and portfolio ownership remain exclusively with the lender.',
                icon: Layers
              },
              { 
                title: 'Traceability & Audit Readiness', 
                desc: 'Process steps, document flows, and communication checkpoints are structured for visibility and traceability. This supports institutional audit and governance requirements.',
                icon: FileText
              }
            ].map((item, i) => (
              <div className="bg-white p-8 rounded-[1rem] border border-slate-100 flex flex-col items-center text-center shadow-sm h-full"
              >
                <div className="w-12 h-12 bg-[#E0F2FE] rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-[#1B84E7]" />
                </div>
                <h4 className="text-xl  text-slate-900 mb-4 leading-tight">{item.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
}