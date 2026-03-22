"use client"
import { 
  ShieldCheck, 
  Eye, 
  Network, 
  ClipboardCheck,
} from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyItWorks(){
    return <div>
        <section className="py-16 px-4">
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
                  className="bg-ascent  card-interactive flex items-start space-x-6 text-left group"
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
    </div>
}