'use client';
import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Users, 
  MapPin, 
  Target, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingDown, 
  Zap, 
  Building2, 
  Smartphone, 
  UserCheck,
  ChevronRight,
  Quote
} from 'lucide-react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/footer/Footer";

import Link from 'next/link';

const Home = () => {
  return (
    <div className="min-h-screen bg-pure-white">
      <Navbar activeItem="Home" />

      {/* Hero Section: National Award Winner */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-secondary-blue/30">
        <div className="section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-1.5 bg-white rounded-full text-xs font-semibold text-primary-blue shadow-sm mb-6">
                Recognised by Government & Industry Institutions
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                National Award <br />
                <span className="text-primary-blue">Winner</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
                Recognised for building compliant, inclusive lending infrastructure that enables banks and NBFCs to reach underserved India at scale.
              </p>
              <p className="text-sm text-slate-500 mb-8 italic">
                Operating across Tier-2 to Tier-6 markets through a trusted phygital model.
              </p>
              <Link href="/join" className="btn-primary group inline-flex items-center">
                Partner With Creditbucket <ArrowRight className="group-hover:translate-x-1 transition-transform ml-2" />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 bg-white p-4 rounded-2xl shadow-2xl border border-slate-100">
                <img 
                  src="https://picsum.photos/seed/award/800/1000" 
                  alt="National Award Certificate" 
                  className="rounded-lg w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-blue/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-400/10 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
        
        {/* Wave background effect */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-pure-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}></div>
      </section>

      {/* Startup Award Section */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
        
        <div className="section-padding relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-blue rounded-full text-xs font-semibold text-white mb-8">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              RBI-Aligned Lending Service Provider (LSP)
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
              Bridging India's Underserved to Formal Credit at Scale
            </h2>
            <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
              A phygital lending infrastructure enabling banks and NBFCs to reach credit-invisible India with trust, compliance, and efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/join" className="btn-primary w-full sm:w-auto inline-flex items-center justify-center">
                Partner With Us <ArrowRight size={18} className="ml-2" />
              </Link>
              <button className="btn-outline w-full sm:w-auto">
                View Corporate Profile <ChevronRight size={18} />
              </button>
            </div>
            
            <div className="mt-16 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-primary-blue/20 flex items-center justify-center mb-4">
                <MapPin className="text-primary-blue" size={20} />
              </div>
              <p className="text-slate-400 text-sm">
                Trusted by on-ground networks across 1,600+ pincodes in India
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-20 bg-ascent">
        <div className="section-padding">
          <h3 className="text-center text-xl font-semibold text-slate-500 mb-16 uppercase tracking-widest">
            Operating at scale across India
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "0", label: "Samriddh Saathis", color: "text-blue-500" },
              { icon: MapPin, value: "0", label: "Pin codes Covered", color: "text-cyan-500" },
              { icon: Target, value: "0", label: "People Impacted", color: "text-indigo-500" },
              { icon: Zap, value: "₹10,00,000", label: "Total Impact Created", color: "text-blue-600" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="card-interactive text-center flex flex-col items-center group"
              >
                <div className={`w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center mb-6 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon size={28} />
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-extrabold text-slate-900">{stat.value}</span>
                  <span className="text-2xl font-bold text-slate-400">+</span>
                </div>
                <p className="text-slate-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-24 bg-pure-white">
        <div className="section-padding">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-red-50 text-red-600 rounded-full text-xs font-bold mb-4 border border-red-100 uppercase tracking-wider">
              Challenge
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Why Reaching Credit-Invisible <br /> India Remains a Challenge
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              India faces a significant rural credit gap. Traditional banking infrastructure cannot reach the underserved profitably, while digital-only models fail to build trust and complete KYC in Bharat's complex socio-economic landscape.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative overflow-hidden group">
                <Quote className="absolute -top-4 -right-4 text-slate-200 w-24 h-24 rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                <p className="text-lg text-slate-700 italic relative z-10 mb-6">
                  "Over 40% of India's adult population remains outside the formal credit system, not due to lack of creditworthiness, but lack of access and documentation."
                </p>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-500">
                  <div className="w-8 h-px bg-slate-300"></div>
                  RBI Financial Inclusion Report
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              {[
                { 
                  icon: Users, 
                  title: "Thin-File & No-File Borrowers", 
                  desc: "Millions of creditworthy Indians lack formal credit history, making traditional underwriting impossible." 
                },
                { 
                  icon: TrendingDown, 
                  title: "High Cost of Rural Sourcing", 
                  desc: "Physical branch expansion and on-ground sourcing significantly increase acquisition costs in semi-urban and rural regions." 
                },
                { 
                  icon: Zap, 
                  title: "Low Conversion Without Assisted Support", 
                  desc: "Purely digital journeys often fail to convert first-time borrowers who require guidance, documentation support, and trust-building." 
                },
                { 
                  icon: ShieldCheck, 
                  title: "Operational & Mis-selling Risk", 
                  desc: "Fragmented DSA networks and lack of local oversight increase compliance, quality, and reputational risks for lenders." 
                }
              ].map((item, idx) => (
                <div key={idx} className="card-interactive">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 text-slate-400 group-hover:text-primary-blue transition-colors">
                    <item.icon size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section: Phygital Infrastructure */}
      <section className="py-24 bg-primary-blue text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-1/2"></div>
        
        <div className="section-padding relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-1 bg-white/10 text-white rounded-full text-xs font-bold mb-4 border border-white/20 uppercase tracking-wider">
              Solution
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Phygital Infrastructure for <br /> Inclusive Lending
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              A phygital distribution model combining local trust with institutional-grade technology and compliance.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20 -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12 relative">
              {[
                { icon: Building2, title: "Banks & NBFCs", desc: "Regulated lending partners provide capital and compliance framework" },
                { icon: Smartphone, title: "Creditbucket Tech", desc: "Our platform handles sourcing, screening, and workflow orchestration" },
                { icon: Users, title: "Samriddh Sathi", desc: "1600+ Local facilitators who assist with onboarding, training, and trust-building." },
                { icon: UserCheck, title: "End Customer", desc: "Underserved borrowers receive formal credit with full transparency" }
              ].map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col md:flex-row items-center gap-8 relative"
                >
                  <div className="w-20 h-20 rounded-2xl bg-white text-primary-blue flex items-center justify-center shadow-xl z-10 shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <step.icon size={32} />
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex-grow text-center md:text-left hover:bg-white/20 transition-colors cursor-default">
                    <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                    <p className="text-blue-100 text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-20">
            {[
              { title: "Compliance-First", desc: "RBI-aligned processes with complete audit trails and transparent fund flows." },
              { title: "Zero Commission Model", desc: "End customers never pay extra fees - our model is bank-funded, not borrower-exploitative." },
              { title: "Scalable Network", desc: "400+ active trained field agents across 1,600+ pin codes, ready to expand with partner needs." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl text-slate-900 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <h4 className="text-xl font-bold text-primary-blue mb-4">{feature.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="btn-primary bg-white text-primary-blue hover:bg-blue-50">
              Learn More <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-24 bg-ascent">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Why Partner with <br /> Creditbucket
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our phygital infrastructure delivers measurable outcomes for lending partners while ensuring ethical, compliant service to borrowers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: TrendingDown, 
                title: "Lower Cost of Acquisition", 
                desc: "Reach semi-urban and rural borrowers without investing in physical branch expansion or fragmented sourcing networks.",
                stat: "40 - 60%",
                statLabel: "Cost Reduction"
              },
              { 
                icon: ShieldCheck, 
                title: "Improved Asset Quality", 
                desc: "Pre-screened, assisted onboarding improves data quality, documentation accuracy, and early-stage borrower behaviour.",
                stat: "2x",
                statLabel: "Better Retention"
              },
              { 
                icon: Building2, 
                title: "Compliance-First Model", 
                desc: "RBI-aligned LSP framework with complete transparency, zero cash handling, and full audit trails.",
                stat: "100%",
                statLabel: "Compliant"
              },
              { 
                icon: MapPin, 
                title: "Deep Rural Penetration", 
                desc: "Access to 1,600+ pin codes across tier-3, 4, and rural India where traditional banking cannot reach.",
                stat: "1,600+",
                statLabel: "Pin codes"
              }
            ].map((card, idx) => (
              <div key={idx} className="card-interactive flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-primary-blue text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <card.icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">{card.desc}</p>
                <div className="pt-6 border-t border-slate-50 text-center">
                  <div className="text-2xl font-extrabold text-primary-blue">{card.stat}</div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{card.statLabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact at Scale Summary */}
      <section className="py-24 bg-pure-white">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">
                Impact at Scale
              </h2>
              <p className="text-lg text-slate-600 mb-12">
                Delivering measurable financial access across underserved communities through a trusted phygital network.
              </p>
              
              <div className="space-y-8">
                {[
                  { value: "1,600+", label: "Pin codes Reached", desc: "Across Tier 3, Tier 4, and rural India." },
                  { value: "9000+", label: "Individuals Impacted", desc: "First-time and underserved borrowers supported." },
                  { value: "400+", label: "On-ground Facilitators", desc: "Trained Samriddh Saathis enabling assisted journeys." },
                  { value: "Multiple States", label: "Operations", desc: "Including Bihar, Jharkhand, and surrounding regions." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="w-1 h-12 bg-primary-blue/20 rounded-full overflow-hidden">
                      <div className="w-full h-1/2 bg-primary-blue"></div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary-blue">{item.value}</div>
                      <div className="text-lg font-semibold text-slate-900">{item.label}</div>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-slate-100 rounded-3xl p-4 shadow-inner">
                <img 
                  src="https://picsum.photos/seed/kendra/800/600" 
                  alt="Samriddh Saathi Digital Kendra" 
                  className="rounded-2xl w-full h-auto shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
                <p className="text-sm font-bold text-slate-900 mb-1">Samriddh Saathi Digital Kendra</p>
                <p className="text-xs text-slate-500">Empowering local entrepreneurs to facilitate formal credit access.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-ascent">
        <div className="section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Lending Partners</h2>
          <p className="text-slate-600 mb-16">Collaborating with regulated banks and NBFCs to expand responsible credit access across India.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="h-24 bg-white rounded-xl border border-slate-100 flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all">
                <div className="w-full h-full bg-slate-200 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-slate-400">Partner logos are indicative and subject to ongoing partnerships.</p>
        </div>
      </section>

      {/* Facilitated & Supported By */}
      <section className="py-24 bg-pure-white">
        <div className="section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Facilitated & Supported By</h2>
          <p className="text-slate-600 mb-16 max-w-2xl mx-auto">Backed by leading academic institutions, incubators, and government-supported innovation programs.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-center">
            {[
              "https://picsum.photos/seed/startupindia/200/80",
              "https://picsum.photos/seed/startupbihar/200/80",
              "https://picsum.photos/seed/iit/200/80",
              "https://picsum.photos/seed/finblue/200/80"
            ].map((logo, i) => (
              <img key={i} src={logo} alt="Partner Logo" className="h-12 mx-auto object-contain opacity-70 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by Institutional Partners */}
      <section className="py-24 bg-primary-blue text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
        </div>
        
        <div className="section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-12">Trusted by Institutional Partners</h2>
            
            <div className="relative">
              <Quote className="absolute -top-10 -left-10 w-20 h-20 text-white/10" />
              <p className="text-xl md:text-2xl leading-relaxed mb-12 text-blue-50">
                Creditbucket's phygital approach has helped us reach underserved segments with better operational efficiency and lower documentation friction. Their trained on-ground facilitators ensure compliance, while digital tracking gives us real-time oversight and data-backed confidence to control risk. Their on-ground assisted model brings a level of trust and control that purely digital sourcing often lacks.
              </p>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white/20 mb-4 flex items-center justify-center">
                  <UserCheck size={32} />
                </div>
                <div className="font-bold text-lg">— Senior Credit Manager</div>
                <div className="text-blue-200 text-sm">Leading NBFC, Eastern India</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
