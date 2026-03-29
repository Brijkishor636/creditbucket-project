"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/footer/Footer";
import bgImg from "@/assets/images/physital-bg.png";

// --- Accordion Item Component ---
const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left group transition-all"
      >
        <span className={`text-lg font-medium transition-colors duration-300 ${isOpen ? "text-[#1B84E7]" : "text-slate-900 group-hover:text-[#1B84E7]"}`}>
          {question}
        </span>
        <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${isOpen ? "bg-blue-50" : ""}`}>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-[#1B84E7]" />
          ) : (
            <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-[#1B84E7]" />
          )}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-slate-600 leading-relaxed text-[17px]">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- FAQ Stakeholder Group Component ---
const FAQGroup: React.FC<{ title: string; description: string; items: { q: string; a: string }[] }> = ({ title, description, items }) => (
  <div className="space-y-10">
    <div className="text-center space-y-3">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">{title}</h2>
      <p className="text-slate-500 max-w-2xl mx-auto font-medium">{description}</p>
    </div>
    <div className="bg-white rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 px-8 md:px-12 py-4">
      {items.map((item, i) => (
        <FAQItem key={i} question={item.q} answer={item.a} />
      ))}
    </div>
  </div>
);

export default function FAQ() {
  const sections = [
    {
      title: "FAQs for Samriddh Sathis",
      description: "Guidance for local facilitators supporting borrower onboarding and documentation.",
      items: [
        { q: "Who are Samriddh Sathis?", a: "Samriddh Sathis are local facilitators who assist borrowers in their credit journey through guidance and documentation support." },
        { q: "Do Samriddh Sathis approve loans?", a: "No, Samriddh Sathis only facilitate the application process. Loan approval is solely the discretion of the lending bank or NBFC." },
        { q: "Can Samriddh Sathis collect loan disbursal or repayment money?", a: "No, Samriddh Sathis are strictly prohibited from handling any cash transactions related to loan disbursal or repayment." },
        { q: "What is the role of a Samriddh Sathi in the loan process?", a: "Their role is to help borrowers understand the process, complete documentation, and ensure applications are submitted correctly." },
        { q: "How do Samriddh Sathis earn income?", a: "Samriddh Sathis earn through a transparent facilitation fee structure for their services in assisting borrowers." },
        { q: "Are Samriddh Sathis employees of the bank?", a: "No, they are independent facilitators or part of the Creditbucket network, not bank employees." }
      ]
    },
    {
      title: "FAQs for Corporate & Lending Partners",
      description: "Operational and infrastructure-related questions from banks, NBFCs, and institutional stakeholders.",
      items: [
        { q: "What role does Creditbucket play in the lending ecosystem?", a: "Creditbucket provides the infrastructure and facilitator network to help lenders reach underserved markets efficiently." },
        { q: "Does Creditbucket provide loans directly?", a: "No, Creditbucket is a technology and infrastructure provider, not a lender." },
        { q: "Who handles loan disbursal and repayment?", a: "Disbursal and repayment are handled directly between the lender and the borrower through formal banking channels." },
        { q: "Is Creditbucket aligned with Lending Service Provider (LSP) frameworks?", a: "Yes, our operations are designed to be compliant with relevant regulatory frameworks for LSPs." }
      ]
    },
    {
      title: "FAQs for Borrowers",
      description: "Information for individuals seeking guidance on loan application and onboarding support.",
      items: [
        { q: "Does Creditbucket help borrowers?", a: "We provide local support through Samriddh Sathis to help you understand and complete the loan application process." },
        { q: "Who decides whether my loan is approved?", a: "The final decision is always made by the bank or NBFC based on their credit policies." },
        { q: "Where will the loan money be sent?", a: "The loan amount is sent directly to your verified bank account by the lender." },
        { q: "How do I repay the loan?", a: "Repayments are made directly to the bank through the agreed formal channels (like NACH or bank transfer)." }
      ]
    }
  ];

  return (
    <div className="bg-[linear-gradient(135deg,#E6F3FF,#B9D9F6)] min-h-screen flex flex-col font-sans">
      

      <main className="flex-grow">
        {/* --- Hero Section (Matches Privacy Policy Styling) --- */}
        <section 
          className="relative w-full flex max-h[130vh] justify-center overflow-hidden text-white rounded-2xl">
      
        
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/sol-bg-video.mp4" type="video/mp4" />
        </video>

        {/* Darker overlay to ensure text pops against the grid video */}
        <div className="absolute inset-0 bg-[#1B84E7] bg-opacity-60"></div>

        {/* Centered Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
          
            
            

            <div className="max-w-5xl mx-auto relative z-10 text-white flex flex-col items-center pt-20">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-block px-5 py-1.5 border border-white/30 rounded-full text-white/90 text-[11px]  uppercase tracking-[0.25em] mb-8 backdrop-blur-xl bg-white/5"
              >
                Support
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter"
              >
                Frequently Asked <br /> Questions
              </motion.h1>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-3xl font-light text-blue-50/90 mb-10 max-w-3xl"
              >
                Key Questions on Creditbucket’s Infrastructure and Services
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="max-w-3xl mx-auto text-blue-100/80 leading-relaxed text-base md:text-lg px-4"
              >
                This section provides answers to common questions related to Creditbucket’s operational model, partnerships, and borrower support structure. The FAQs are organized by stakeholder groups to help visitors quickly find relevant information.
              </motion.p>

             
            </div>
          </div>
        
        </section>

        {/* --- FAQ Group Section --- */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto space-y-32">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <FAQGroup
                  title={section.title}
                  description={section.description}
                  items={section.items}
                />
              </motion.div>
            ))}
          </div>
        </section>

       
      </main>

     
    </div>
  );
}