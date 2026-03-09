'use client';
import React from 'react';
import { 
  Building2, 
  Layers, 
  Users, 
  ArrowDown, 
  Database, 
  Smartphone, 
  Link as LinkIcon,
  Search,
  FileText,
  Zap,
  ClipboardCheck,
  TrendingDown,
  CheckCircle2,
  MapPin,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/footer/Footer";

const Solutions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeItem="Solutions" />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary-blue py-20 px-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-left text-white"
            >
              <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-white/80 text-xs font-bold uppercase tracking-widest mb-6">
                Solution
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Lending Infrastructure for Assisted Credit Distribution
              </h1>
              <p className="text-xl text-blue-50 mb-8 leading-relaxed">
                Creditbucket operates as a lending infrastructure partner for banks and NBFCs seeking structured access to underserved and semi-formal borrower segments.
              </p>
              <div className="space-y-6 text-blue-100 leading-relaxed mb-10">
                <p>
                  We combine technology, local facilitation, and guided onboarding to make credit access more organized, transparent, and scalable.
                </p>
              </div>
              <p className="text-xs text-blue-200 italic">
                Credit decisions and loan ownership remain with our partner institutions.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center space-y-4"
            >
              {/* Flow Diagram */}
              <div className="w-full max-w-sm bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl text-center group hover:bg-white/20 transition-all">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-3 text-primary-blue">
                    <Building2 size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Banks / NBFC</h3>
                  <p className="text-xs text-blue-100 uppercase tracking-widest mt-1">Lending Partner</p>
                </div>
              </div>

              <ArrowDown className="text-white/40" size={24} />

              <div className="w-full max-w-sm bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl text-center group hover:bg-white/20 transition-all">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-3 text-primary-blue">
                    <Layers size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Creditbucket</h3>
                  <p className="text-xs text-blue-100 uppercase tracking-widest mt-1">Infrastructure Layer</p>
                </div>
              </div>

              <ArrowDown className="text-white/40" size={24} />

              <div className="w-full max-w-sm bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl text-center group hover:bg-white/20 transition-all">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-3 text-primary-blue">
                    <Users size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Borrower</h3>
                  <p className="text-xs text-blue-100 uppercase tracking-widest mt-1">Infrastructure Layer</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="py-24 px-4 bg-[linear-gradient(135deg,#E6F3FF,#B9D9F6)]">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">What We Offer</h2>
            <p className="text-slate-600 max-w-3xl mx-auto mb-20 text-lg">
              Creditbucket enables structured, compliant access to underserved borrower segments through assisted distribution infrastructure.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { 
                  title: "Lending Infrastructure Layer", 
                  desc: "Acts as an operational bridge between lenders and underserved borrowers.",
                  icon: Database
                },
                { 
                  title: "Assisted Digital Onboarding", 
                  desc: "Guided application and KYC support to reduce incomplete or misdirected applications.",
                  icon: Smartphone
                },
                { 
                  title: "On-Ground Facilitation", 
                  desc: "Local facilitators assist borrowers in understanding process and documentation without handling cash or influencing credit decisions.",
                  icon: Users
                },
                { 
                  title: "Structured Coordination", 
                  desc: "Application tracking and process-level support aligned with partner policies.",
                  icon: LinkIcon
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className=" bg-ascent card-interactive flex flex-col items-start text-left p-10"
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

        {/* Core Capabilities Section */}
        <section className="py-24 px-4 bg-[linear-gradient(135deg,#E6F3FF,#B9D9F6)]">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Core Capabilities</h2>
            <p className="text-slate-600 max-w-3xl mx-auto mb-20 text-lg">
              Operational modules that support structured credit distribution.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  title: "Assisted Borrower Sourcing", 
                  desc: "Structured identification and onboarding of underserved and semi-formal borrowers through assisted digital channels and local facilitation networks. This ensures applications originate from informed and guided participants rather than unverified lead flows.",
                  icon: Search
                },
                { 
                  title: "Guided Digital Onboarding & KYC Support", 
                  desc: "End-to-end assisted application support, including document guidance, KYC coordination, and submission alignment with partner requirements. Designed to reduce incomplete filings and improve process clarity in low-literacy environments.",
                  icon: FileText
                },
                { 
                  title: "AI-Driven Engagement & Gamified Financial Learning", 
                  desc: "An AI-powered engagement layer that improves borrower participation through structured learning journeys and interactive financial literacy modules. Gamified rewards and milestone-based progression encourage responsible financial behavior, higher engagement, and stronger long-term retention.",
                  icon: Zap
                },
                { 
                  title: "Application Coordination & Process Support", 
                  desc: "Real-time tracking, structured communication, and assisted follow-through between borrower and lender systems. Ensures smoother processing cycles and clearer visibility across the application journey.",
                  icon: ClipboardCheck
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-ascent card-interactive flex flex-col h-full text-left p-8"
                >
                  <div className="w-12 h-12 bg-secondary-blue rounded-xl flex items-center justify-center mb-6 text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-all duration-300">
                    <item.icon size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Value to Lending Partners Section */}
        <section className="py-24 px-4 bg-primary-blue">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Value to Lending Partners</h2>
            <p className="text-blue-100 max-w-3xl mx-auto mb-20 text-lg">
              Our infrastructure model addresses structural challenges in last-mile credit distribution.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { 
                  title: "Lower Cost of Acquisition", 
                  desc: "Reduce per-borrower acquisition costs through assisted on-ground distribution networks.",
                  icon: TrendingDown
                },
                { 
                  title: "Improved Application Quality", 
                  desc: "Structured facilitation results in more complete, accurate, and decision-ready applications.",
                  icon: CheckCircle2
                },
                { 
                  title: "Access to Underserved Areas", 
                  desc: "Operational reach into semi-urban and rural segments that are otherwise difficult to serve directly.",
                  icon: MapPin
                },
                { 
                  title: "Compliance-Aligned Distribution", 
                  desc: "All processes operate within clearly defined institutional and regulatory frameworks.",
                  icon: ShieldCheck
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-2xl shadow-xl flex items-center space-x-6 text-left group transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-secondary-blue rounded-xl flex items-center justify-center group-hover:bg-primary-blue transition-colors duration-300">
                    <item.icon className="w-7 h-7 text-primary-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
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

export default Solutions;
