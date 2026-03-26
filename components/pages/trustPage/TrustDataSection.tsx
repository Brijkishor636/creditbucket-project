'use client';
import { 
  ShieldCheck, 
  Lock,  
  CheckCircle2, 
  Search, 
  Layers, 
  FileText,
  IndianRupee
} from 'lucide-react';
import { motion } from 'motion/react';

export default function TrustDataSection(){
    return <div>
        <section className="pb-14 px-4">
          <div className="section-padding text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Role as a Lending Service Provider (LSP)</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-16">
              Clear operational boundaries ensure accountability, compliance, and trust between all participants.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
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
        <section className="px-4">
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
    </div>
}