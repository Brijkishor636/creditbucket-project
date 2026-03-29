import React from 'react';
import Image from 'next/image';
import ISO22301 from '@assets/images/BSM.png'; 
import ISO27001 from '@assets/images/in.png';

const ComplianceSection = () => {
  const certifications = [
    {
      src: ISO22301,
      alt: 'ISO 22301 Business Continuity Management',
    },
    {
      src: ISO27001,
      alt: 'ISO 27001 Information Security Management',
    },
  ];

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-r from-[#0057b7] via-[#0072ce] to-[#0057b7]">
      <div className="max-w-6xl mx-auto">
        {/* Header - Uncomment if needed */}
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Our Certifications</h2>
          <p className="text-blue-100 italic">Global standards in security and continuity</p>
        </div> */}

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-[2.5rem] shadow-2xl hover:scale-105 transition-transform duration-500 ease-in-out flex items-center justify-center w-full max-w-[420px] aspect-[16/9] relative"
            >
              <div className="relative w-full h-full">
                <Image 
                  src={cert.src} 
                  alt={cert.alt} 
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-contain p-2"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;