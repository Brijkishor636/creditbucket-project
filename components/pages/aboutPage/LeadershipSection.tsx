"use client";
import Image from "next/image";
import founderPhoto from "../../../assets/images/image.png"; 

const LeadershipSection = () => {
  return (
    <section className="relative w-full py-10 md:py-14 px-6 overflow-hidden">
      
      <div className="absolute left-[-110px] top-1/2 -translate-y-1/2 w-[220px] h-[220px] border-[18px] border-[#0C82DD] rounded-full hidden lg:block opacity-90"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <h2 className="text-3xl md:text-[38px] font-bold text-gray-900 mb-10 lg:mb-14">
          Founder & Leadership
        </h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
          <div className="w-full max-w-[450px] lg:max-w-[500px] shrink-0">
            <div className="rounded-[28px] overflow-hidden shadow-sm leading-[0]">
              <Image
                src={founderPhoto}
                alt="Suman Saurav"
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-2xl md:text-[32px] text-center md:text-left font-bold text-[#0C82DD] mb-1">
              Suman Saurav
            </h3>
            <p className="text-lg text-gray-500 font-medium mb-10 text-center md:text-left">
              Founder & CEO
            </p>

            <div className="space-y-7 text-[#334155] text-sm md:text-[15.5px] text-center md:text-left leading-relaxed max-w-2xl">
              <p>
                Suman Saurav brings deep on-ground experience in financial services distribution 
                and merchant ecosystems across rural and semi-urban markets.
              </p>
              <p>
                He has worked with platforms such as PhonePe, BharatPe, Amazon Pay, and Airtel, 
                leading large-scale merchant onboarding efforts across Bihar, Jharkhand, 
                West Bengal, Odisha, and nearby regions.
              </p>
              <p>
                Through this experience, he gained firsthand insight into the challenges faced 
                by borrowers in accessing formal credit — including lack of awareness, 
                documentation gaps, and limited guidance.
              </p>
              <p>
                These insights led to the creation of Creditbucket as a more structured and 
                scalable solution for improving credit access.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;