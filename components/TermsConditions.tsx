'use client';
import React from 'react';
import { motion } from 'motion/react';
import Navbar from "@/components/layout/Navbar";

import bgImg from "@/assets/images/physital-bg.png";

const TermsConditions = () => {
  const sections = [
    {
      id: '1',
      title: 'Introduction',
      content: (
        <div className="space-y-4">
          <p>Welcome to the website of Creditbucket Technologies Private Limited ("Creditbucket", "Company", "We", "Our", or "Us").</p>
          <p>These Terms & Conditions ("Terms") govern your access to and use of the Creditbucket website and any related services made available through it.</p>
          <p>By accessing or using this website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must discontinue use of this website.</p>
        </div>
      )
    },
    {
      id: '2',
      title: 'About Creditbucket',
      content: (
        <div className="space-y-4">
          <p>Creditbucket Technologies Private Limited is a company incorporated under the Companies Act, 2013.</p>
          <p>Creditbucket operates as a lending infrastructure and distribution partner to regulated financial institutions, including banks and Non-Banking Financial Companies (NBFCs).</p>
          <p>Creditbucket:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Does not directly lend money.</li>
            <li>Does not underwrite or sanction loans.</li>
            <li>Does not determine credit eligibility.</li>
            <li>Does not disburse or collect repayment funds.</li>
          </ul>
          <p>All credit decisions, sanction terms, and loan agreements are solely between the borrower and the respective partner financial institution.</p>
        </div>
      )
    },
    {
      id: '3',
      title: 'Nature of Services',
      content: (
        <div className="space-y-4">
          <p>Creditbucket provides structured infrastructure and assisted facilitation services that may include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Assisted borrower onboarding support</li>
            <li>Application coordination and routing</li>
            <li>Digital infrastructure support</li>
            <li>Engagement and financial literacy modules</li>
            <li>Communication coordination between borrower and lending partner</li>
          </ul>
          <p>Creditbucket does not:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Guarantee loan approval</li>
            <li>Influence credit decisions</li>
            <li>Handle loan disbursal or repayment transactions</li>
            <li>Act as a deposit-taking institution</li>
          </ul>
          <p>Loan approval, interest rates, tenure, and repayment obligations are determined exclusively by the partner lending institution.</p>
        </div>
      )
    },
    {
      id: '4',
      title: 'No Financial Advice',
      content: (
        <div className="space-y-4">
          <p>The content available on this website is provided for informational purposes only.</p>
          <p>Nothing on this website constitutes financial, legal, investment, or professional advice. Users are advised to independently review the terms and conditions provided by the respective lending institution before accepting any financial product.</p>
          <p>Creditbucket shall not be responsible for any decisions taken by users based on website content.</p>
        </div>
      )
    },
    {
      id: '5',
      title: 'User Responsibilities',
      content: (
        <div className="space-y-4">
          <p>By accessing or using this website, you agree that:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>All information provided by you is accurate, complete, and truthful.</li>
            <li>You will not use the website for unlawful or fraudulent purposes.</li>
            <li>You will not attempt to gain unauthorized access to systems, networks, or data.</li>
            <li>You will not misuse any communication or facilitation channel provided by the Company.</li>
          </ul>
          <p>Any misuse of the website may result in restricted access and, where applicable, legal action.</p>
        </div>
      )
    },
    {
      id: '6',
      title: 'Intellectual Property Rights',
      content: (
        <div className="space-y-4">
          <p>All content available on this website, including but not limited to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Text</li>
            <li>Graphics</li>
            <li>Logos</li>
            <li>Design elements</li>
            <li>Layout</li>
            <li>Trademarks</li>
            <li>Software components</li>
          </ul>
          <p>are the property of Creditbucket Technologies Private Limited unless otherwise stated.</p>
          <p>No content may be copied, reproduced, distributed, or modified without prior written permission from the Company. Unauthorized use may result in legal action.</p>
        </div>
      )
    },
    {
      id: '7',
      title: 'Limitation of Liability',
      content: (
        <div className="space-y-4">
          <p>Creditbucket shall not be liable for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Rejection of loan applications by partner institutions</li>
            <li>Loan terms, interest rates, or repayment structures determined by lenders</li>
            <li>Delays in processing attributable to lending institutions</li>
            <li>Any indirect, incidental, or consequential damages arising from website use</li>
          </ul>
          <p>Credit decisions remain solely at the discretion of the respective lending partner.</p>
          <p>Users acknowledge that Creditbucket acts only as an infrastructure and facilitation partner and is not a party to the loan agreement.</p>
        </div>
      )
    },
    {
      id: '8',
      title: 'Third-Party Institutions',
      content: (
        <div className="space-y-4">
          <p>Creditbucket collaborates with regulated financial institutions for structured credit distribution.</p>
          <p>Any loan agreement entered into by a borrower is directly between the borrower and the respective lending institution.</p>
          <p>Creditbucket:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Is not the lender</li>
            <li>Does not assume credit risk</li>
            <li>Does not hold borrower funds</li>
            <li>Is not responsible for lender-specific contractual obligations</li>
          </ul>
          <p>Users are encouraged to review lender documentation carefully before entering into any financial agreement.</p>
        </div>
      )
    },
    {
      id: '9',
      title: 'Data & Communication Disclaimer',
      content: (
        <div className="space-y-4">
          <p>While Creditbucket implements structured operational and data-handling practices, the Company does not warrant uninterrupted or error-free website access.</p>
          <p>Users acknowledge that digital communication may be subject to limitations, delays, or security risks beyond the Company's control.</p>
        </div>
      )
    },
    {
      id: '10',
      title: 'Modification of Terms',
      content: (
        <div className="space-y-4">
          <p>Creditbucket reserves the right to revise, update, or modify these Terms at any time without prior notice. Updated Terms will become effective upon publication on the website.</p>
          <p>Continued use of the website constitutes acceptance of the revised Terms.</p>
        </div>
      )
    },
    {
      id: '11',
      title: 'Governing Law & Jurisdiction',
      content: (
        <div className="space-y-4">
          <p>These Terms shall be governed by and construed in accordance with the laws of India.</p>
          <p>Any dispute arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the competent courts located in [unknown].</p>
        </div>
      )
    },
    {
      id: '12',
      title: 'Contact Information',
      content: (
        <div className="space-y-4">
          <p>For questions or clarifications regarding these Terms & Conditions, please contact: Creditbucket Technologies Private Limited</p>
          <div className="mt-4">
            <p className="font-bold">Corporate Office:</p>
            <p>Samriddh Kendra</p>
            <p>2nd Floor, A-Wing, BSFC Building</p>
            <p>Frazer Road, Patna, Bihar – 800001</p>
          </div>
          <p className="mt-4">Email: <a
                href="mailto:Contact@creditbucket.in"
                className="text-[#0C82DD] hover:underline   "
              >
                Contact@creditbucket.in
              </a></p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen px-4 py-4  bg-[#E6F3FF] flex flex-col">
      

      <main className="flex-grow ">
        {/* Hero Section */}
        <section 
  className="w-full   rounded-2xl overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: `url(${bgImg.src})` }}
>
  {/* Added justify-center and increased py for better vertical centering */}
  <div className="w-full h-full min-h-[82vh] bg-[gradient-to-r from-[#0C4A6E]/90 to-[#0C82DD]/70] px-4 sm:px-6 py-20 flex flex-col items-center justify-center">
    
    {/* Container now has text-center to ensure all text lines align to middle */}
    <div className="relative z-10 text-white flex flex-col items-center text-center max-w-4xl mx-auto">
      
      {/* "LEGAL" Badge */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="inline-block px-3 py-0.5 border border-white/40 rounded-full text-white/90 text-[10px] uppercase tracking-[0.2em] mb-8 backdrop-blur-md"
      >
        Legal
      </motion.div>

      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
      >
        Terms & Conditions
      </motion.h1>

      {/* Sub-heading */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl md:text-2xl font-medium text-blue-50/90 mb-8"
      >
        Governing Use of the Creditbucket Website and Services
      </motion.h2>
      
      {/* Description Paragraph - Added max-w-2xl to match the image's line breaks */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-2xl mx-auto text-blue-100/80 leading-relaxed text-base md:text-lg"
      >
        These Terms & Conditions govern access to and use of the Creditbucket website and 
        related services. By accessing this website, users agree to comply with the terms 
        outlined below.
      </motion.p>
      
    </div>
  </div>
</section>

        {/* Content Section */}
        <section className="py-24 px-4 bg-[#E6F3FF]">
          <div className="section-padding max-w-4xl mx-auto">
            <div className="space-y-16">
              {sections.map((section, index) => (
                <motion.div 
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="space-y-6"
                >
                  <h3 className="text-3xl font-bold text-primary-blue">
                    {section.id}. {section.title}
                  </h3>
                  <div className="text-slate-700 leading-relaxed text-lg">
                    {section.content}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Banner */}
        <section className="bg-primary-blue py-12 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-white text-lg md:text-xl font-medium leading-relaxed">
              Creditbucket remains committed to building a compliant, transparent, and  <br/> accountable infrastructure layer within india's formal credit ecosystem.
            </p>
          </div>
        </section>
      </main>


    </div>
  );
};

export default TermsConditions;
