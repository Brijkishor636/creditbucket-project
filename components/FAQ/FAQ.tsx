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
      { q: "Who are Samriddh Sathis?", a: "Samriddh Sathis are local facilitators who assist borrowers with the loan application process. They help with documentation, guide borrowers through onboarding, and act as the on-ground support layer in Creditbucket's phygital infrastructure model. They are not employees of any bank or lending institution." },
      { q: "Do Samriddh Sathis approve loans?", a: "No, Samriddh Sathis do not have any authority to approve or reject loan applications. All credit decisions, underwriting, and approval processes are handled exclusively by the regulated lending partner (bank or NBFC)." },
      { q: "Can Samriddh Sathis collect loan disbursal or repayment money?", a: "No, Samriddh Sathis are strictly prohibited from collecting, handling, or routing any loan disbursal or repayment funds. All fund transfers occur directly between the lending institution and the borrower's designated bank account." },
      { q: "What is the role of a Samriddh Sathi in the loan process?", a: "A Samriddh Sathi assists borrowers with application preparation, document collection, KYC coordination, and process explanation. They serve as a facilitation bridge between the borrower and the digital infrastructure, ensuring applications are complete and correctly submitted." },
      { q: "How do Samriddh Sathis earn income?", a: "Samriddh Sathis earn through structured facilitation incentives defined by Creditbucket. Their compensation is tied to successful application facilitation and borrower onboarding support—not to loan approval or disbursal outcomes." },
      { q: "Are Samriddh Sathis employees of the bank?", a: "No, Samriddh Sathis are not employees of any bank, NBFC, or lending institution. They operate as independent facilitators within Creditbucket's distribution infrastructure and do not represent any financial institution." }
    ]
  },
  {
    title: "FAQs for Corporate & Lending Partners",
    description: "Operational and infrastructure-related questions from banks, NBFCs, and institutional stakeholders.",
    items: [
      { q: "What role does Creditbucket play in the lending ecosystem?", a: "Creditbucket operates as a lending infrastructure partner. It provides assisted borrower sourcing, digital onboarding support, KYC coordination, and structured communication between borrowers and regulated lending institutions. Creditbucket does not lend, underwrite, or hold credit risk." },
      { q: "Does Creditbucket provide loans directly?", a: "No, Creditbucket does not provide loans directly. All loans are originated, underwritten, and disbursed exclusively by regulated financial institutions (banks and NBFCs) that partner with Creditbucket." },
      { q: "Who handles loan disbursal and repayment?", a: "Loan disbursal and repayment are handled entirely by the partner lending institution. Funds are transferred directly from the lender to the borrower's bank account, and repayments are made by the borrower through approved banking channels. Creditbucket does not intermediate, hold, or process any loan funds." },
      { q: "Does Creditbucket take credit risk?", a: "No. Creditbucket does not take any credit risk. All credit authority, risk ownership, balance sheet exposure, and financial liability remain exclusively with the partner lending institution." },
      { q: "How does Creditbucket support lenders?", a: "Creditbucket supports lenders through assisted borrower sourcing, guided digital onboarding, KYC coordination, AI-driven engagement and financial literacy modules, application facilitation, and structured communication between borrower and lender systems." },
      { q: "Is Creditbucket aligned with Lending Service Provider (LSP) frameworks?", a: "Yes, Creditbucket's operational model is designed to align with Lending Service Provider (LSP) frameworks as outlined by regulatory guidelines. The model maintains clear role separation between infrastructure support and regulated lending functions." }
    ]
  },
  {
    title: "FAQs for Borrowers",
    description: "Information for individuals seeking guidance on loan application and onboarding support.",
    items: [
      { q: "Does Creditbucket help borrowers?", a: "Creditbucket helps borrowers by providing guided support through the loan application process. This includes assistance with documentation, KYC coordination, application submission, and process explanation - making it easier to apply for credit from formal financial institutions." },
      { q: "Who decides whether my loan is approved?", a: "The lending institution (bank or NBFC) makes all decisions regarding loan approval. Creditbucket does not influence, approve, or reject any loan application. All credit assessment, underwriting, and eligibility determination are conducted exclusively by the regulated financial institution." },
      { q: "Where will the loan money be sent?", a: "Upon approval, the loan amount is disbursed directly from the lending institution to your designated bank account. Creditbucket does not receive, hold, route, or process any loan funds at any stage." },
      { q: "How do I repay the loan?", a: "Loan repayments are made directly to the lending institution through approved banking channels as defined in your loan agreement. Creditbucket does not collect or process any repayment amounts." },
      { q: "Can I contact Creditbucket for help with my application?", a: "Yes. You can reach out to Creditbucket for guidance and support related to your application process, documentation, or onboarding. However, for loan-specific queries such as approval status, interest rates, or repayment terms, you will need to contact the respective lending institution directly." }
    ]
  }
];

  return (
    <div className="bg-[#E6F3FF] px-4 py-4 min-h-screen flex flex-col font-sans">
      

      <main className="flex-grow">
        {/* --- Hero Section (Matches Privacy Policy Styling) --- */}
        <section 
          className="relative w-full px-10 py-4 flex max-h[130vh] justify-center overflow-hidden text-white rounded-2xl">
      
        
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full   object-cover scale-130"
        >
          <source src="/videos/sol-bg-video.mp4" type="video/mp4" />
        </video>

        {/* Darker overlay to ensure text pops against the grid video */}
        <div className="absolute inset-0  bg-opacity-60"></div>

        {/* Centered Content */}
        <div className="relative z-10 max-w-8xl mx-auto px-6 py-2 flex flex-col items-center text-center">
          
            
            

            <div className="max-w-8xl mx-auto relative z-10 text-white flex flex-col items-center pt-20">
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