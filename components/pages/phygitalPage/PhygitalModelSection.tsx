"use client";
import { CheckCircle } from "lucide-react";
import bgImg from "@/assets/images/physital-bg.png"; 
import { motion } from 'framer-motion';

const PhygitalModelSection = () => {
  return (
    <section
      className="w-full rounded-2xl overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      <div className="w-full h-full bg-gradient-to-r from-[#0C4A6E]/90 to-[#0C82DD]/70 px-4 sm:px-6 py-16">

        <div className="max-w-7xl mx-auto">

          <div className="text-center text-white max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1 border border-white/30 rounded-full bg-[#1B84E7] text-white/90 text-[10px] font-bold tracking-[0.2em] mb-6 backdrop-blur-md"
            >
              MODEL OVERVIEW
            </motion.div>

            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold">
              What Is the Phygital Model?
            </h2>
          </div>
          <div className="mt-12 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

            <div className="text-white max-w-xl space-y-4 text-sm sm:text-base text-center lg:text-left">
              <p>
                The phygital model combines physical facilitation with digital processing systems to improve structured access to credit in underserved markets.
              </p>

              <p>
                While digital platforms enable scale and efficiency, physical assistance ensures clarity, guidance, and accessibility for borrowers who may face literacy, documentation, or technology barriers.
              </p>

              <p>
                By integrating both layers, Creditbucket creates a controlled and compliant distribution environment that supports lenders while improving borrower participation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">

              <LayerCard
                title="Physical Layer"
                items={[
                  "On-ground facilitators (Samriddh Saathis)",
                  "Assisted documentation",
                  "Process explanation",
                ]}
              />

              <LayerCard
                title="Digital Layer"
                items={[
                  "Application routing",
                  "Underwriting integration",
                  "Tracking & coordination",
                ]}
              />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

const LayerCard = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => {
  return (
    <div className="
      bg-[#1B84E7]
      text-white 
      rounded-xl 
      p-5 sm:p-6 
      w-full max-w-[260px]
      min-h-[240px]

     shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5),inset_0_4px_12px_rgba(0,0,0,0.3),inset_0_-1px_1px_rgba(255,255,255,0.15)]
  
  transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
  
  hover:-translate-y-2 
  hover:shadow-[0_45px_70px_-15px_rgba(0,0,0,0.7),inset_0_4px_12px_rgba(0,0,0,0.3)]
    ">

      <h3 className="text-[20px] md:text-[24px] font-semibold mb-4">
        {title}
      </h3>

      <ul className="space-y-3 text-xs sm:text-sm">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle size={16} className=" text-white " />
            {item}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default PhygitalModelSection;
