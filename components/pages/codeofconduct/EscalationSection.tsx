"use client";

import { UserGroupIcon } from "@heroicons/react/24/outline";

const EscalationSection = () => {
  return (
    <section className="w-full text-[#000000]">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-14 lg:py-16">
        
        <div className="mb-20 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 md:mb-16">
            Code for Samriddh Sathis & Field Facilitators
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
            <div className="max-w-2xl text-left">
              <p className="text-base md:text-[17px] font-medium mb-5 leading-relaxed">
                Samriddh Sathis and on-ground facilitators represent the 
                structured interface between borrowers and lending institutions. 
                Accordingly:
              </p>
              <ul className="space-y-3 text-sm md:text-base opacity-90 list-none">
                <li className="flex gap-2"><span>•</span> No collection of loan disbursal or repayment funds.</li>
                <li className="flex gap-2"><span>•</span> No false promises regarding loan approval.</li>
                <li className="flex gap-2"><span>•</span> No unauthorized fees or commissions.</li>
                <li className="flex gap-2"><span>•</span> Transparent communication of lender terms.</li>
                <li className="flex gap-2"><span>•</span> Respect for borrower dignity and informed consent.</li>
              </ul>
            </div>
            
            <div className="flex-shrink-0 flex items-center justify-center w-full md:w-auto mt-10 md:mt-0">
              <UserGroupIcon className="lg:w-30 lg:h-30 h-20 w-20 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 md:mb-10">
            Escalation & Reporting
          </h2>
          <div className="space-y-4 md:space-y-5 text-[15px] md:text-base leading-relaxed text-gray-800">
            <p>
              Creditbucket encourages reporting of any violation of this Code of Conduct without fear of retaliation.
            </p>
            <p>
              Concerns may be escalated through official communication channels. All reports are reviewed in accordance with internal governance procedures.
            </p>
            <div className="pt-3 font-semibold text-[#0C82DD]">
              <p className="text-black">For reporting concerns:</p>
              <p>[Official Email – To Be Confirmed]</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#0C82DD] py-10 md:py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-white text-base md:text-lg font-medium leading-relaxed">
            Creditbucket remains committed to building a compliant, transparent, and 
            accountable infrastructure layer within India’s formal credit ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EscalationSection;