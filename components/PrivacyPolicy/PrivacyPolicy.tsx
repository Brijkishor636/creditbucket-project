"use client";

import bgImg from "@/assets/images/physital-bg.png";
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Introduction",
      content: "This Privacy Policy explains how Creditbucket Technologies Private Limited (\"Creditbucket\", \"Company\", \"we\", \"our\", or \"us\") handles information collected through its website and operational processes. By accessing or using the Creditbucket website, users acknowledge that they have read and understood the practices described in this policy. This policy applies only to information collected through Creditbucket's website and related operational interfaces."
    },
    {
      title: "2. Information We May Collect",
      content: "Creditbucket may collect limited information necessary for communication, operational coordination, and service improvement. This may include:\n• Name and contact details provided through inquiry forms\n• Organization or institutional affiliation\n• Email address and communication information\n• Information shared voluntarily through website forms or communication channels\n• Basic website usage information such as browser type, device type, and pages visited\nCreditbucket does not collect sensitive financial data through its website."
    },
    {
      title: "3. How Information May Be Used",
      content: "Information collected through the website may be used for the following purposes:\n• Responding to inquiries or communication requests\n• Facilitating institutional partnership discussions\n• Improving website functionality and user experience\n• Maintaining internal records related to inquiries or interactions\n• Ensuring operational security and system integrity\nCreditbucket does not sell, rent, or commercially distribute personal information."
    },
    {
      title: "4. Information Sharing",
      content: "Creditbucket does not share personal information with third parties except under the following circumstances:\n• When required for operational coordination with partner institutions\n• When required to comply with applicable laws or regulatory obligations\n• When necessary to protect the rights, safety, or legal interests of the Company\nCreditbucket does not share user information for advertising or marketing purposes."
    },
    {
      title: "5. Data Security",
      content: "Creditbucket implements reasonable technical and organizational safeguards to protect information from unauthorized access, misuse, or disclosure. While the Company strives to maintain secure systems, no digital platform can guarantee complete security. Users are encouraged to exercise caution when sharing information online."
    },
    {
      title: "6. Cookies and Website Analytics",
      content: "The Creditbucket website may use standard website technologies such as cookies or analytics tools to understand how visitors interact with the website. These tools help improve site performance, navigation, and usability. Users may choose to disable cookies through their browser settings, although this may affect certain website functionalities."
    },
    {
      title: "7. Third-Party Links",
      content: "The Creditbucket website may contain links to external websites operated by third parties. Creditbucket is not responsible for the privacy practices or content of those websites. Users are encouraged to review the privacy policies of any external platforms they access."
    },
    {
      title: "8. Updates to This Policy",
      content: "Creditbucket may update or revise this Privacy Policy from time to time to reflect operational changes, regulatory developments, or improvements to internal practices. Updated versions of this policy will be published on this page. Continued use of the website after updates indicates acceptance of the revised policy."
    },
    {
      title: "9. Contact for Privacy Matters",
      content: "For questions regarding this Privacy Policy or data-related inquiries, please contact:\nCreditbucket Technologies Private Limited\nSamriddh Kendra\n2nd Floor, A-Wing, BSFC Building\nFrazer Road, Patna, Bihar – 800001\nEmail: Contact@creditbucket.in\nNumber: 1800 313 1998"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="w-full rounded-2xl overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      <div className="w-full h-full bg-gradient-to-r from-[#0C4A6E]/90 to-[#0C82DD]/70 px-4 sm:px-6 py-16">
          <div className="section-padding relative z-10 text-white flex flex-col items-center max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1 border border-white/30 rounded-full text-white/90 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-md"
            >
              Legal
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Privacy Policy
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl font-medium text-blue-50 mb-10"
            >
              How Creditbucket Collects, Uses, and Protects Information
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-3xl mx-auto text-blue-100  leading-loose"
            >
              Creditbucket Technologies Private Limited is committed to maintaining the privacy and security of information shared through its website and operational infrastructure. This Privacy Policy outlines how information may be collected, used, stored, and protected when users access the Creditbucket website or interact with our services.
            </motion.p>
          </div>
          </div>
        </section>

      {/* Policy Content */}
      <section className="py-24 bg-[linear-gradient(135deg,#E6F3FF,#B9D9F6)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {sections.map((section, i) => (
              <div key={i} className="space-y-6">
                <h3 className="text-3xl font-bold text-[#1B84E7]">{section.title}</h3>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="bg-[#1B84E7] py-12 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg font-medium">
            Creditbucket Technologies Private Limited is committed to maintaining responsible data handling practices aligned with institutional governance standards.
          </p>
        </div>
      </section>
    </div>
  );
}
