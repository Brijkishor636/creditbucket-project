'use client';
import { 
  Building2, 
  Layers, 
  Users, 
  FileText, 
  CheckCircle2, 
} from 'lucide-react';
import { motion } from 'motion/react';

export default function OperationalFlow(){
    return <div>
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">End-to-End Operational Flow</h2>
            <p className="text-slate-500 max-w-2xl mx-auto mb-20">
              A structured, linear process from lender integration to borrower disbursal.
            </p>
            
            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 relative z-10">
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
    </div>
}