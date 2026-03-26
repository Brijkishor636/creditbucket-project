"use client";

const WhatWeDoSection = () => {
  const steps = [
    {
      number: "1",
      title: "Assisted Onboarding",
      description: "We help borrowers understand the process and get started with the right information and guidance.",
    },
    {
      number: "2",
      title: "Application Support",
      description: "We assist with documentation and ensure applications are complete and properly submitted.",
    },
    {
      number: "3",
      title: "Local Facilitation",
      description: "Our Samriddh Sathis provide on-ground support to guide borrowers through each step.",
    },
    {
      number: "4",
      title: "Digital Coordination",
      description: "Our platform connects borrowers with lenders and helps manage the application flow efficiently.",
    },
  ];

  return (
    <section className="w-full py-10 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Text */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What We Do
          </h2>
          <p className="text-lg md:text-xl text-gray-800 font-medium">
            Helping lenders and borrowers connect through simple, structured systems.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step) => (
            <div 
              key={step.number} 
              className="bg-white rounded-[24px] p-10 flex flex-col items-center text-center shadow-sm"
            >
              {/* Number Badge */}
              <div className="w-10 h-10 rounded-lg bg-[#EBF5FF] flex items-center justify-center text-[#0C82DD] font-bold mb-8">
                {step.number}
              </div>
              
              {/* Card Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Disclaimer */}
        <p className="text-center text-[10px] md:text-xs text-gray-600 font-medium uppercase tracking-tight">
          We do not provide loans or make credit decisions — all approvals and disbursals are handled by partner banks and NBFCs.
        </p>

      </div>
    </section>
  );
};

export default WhatWeDoSection;