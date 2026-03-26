"use client";
import { CheckCircle } from "lucide-react";
import bgImg from "@/assets/images/physital-bg.png"; 

const PhygitalModelSection = () => {
  return (
    <section
      className="w-full rounded-2xl overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      <div className="w-full h-full bg-gradient-to-r from-[#0C4A6E]/90 to-[#0C82DD]/70 px-4 sm:px-6 py-16">

        <div className="max-w-7xl mx-auto">

          <div className="text-center text-white max-w-3xl mx-auto">
            <span className="inline-block bg-blue-500/80 text-xs px-3 py-1 rounded-full">
              MODEL OVERVIEW
            </span>

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
      bg-gradient-to-b from-[#1E73BE] to-[#2B8CD8]
      text-white 
      rounded-xl 
      p-5 sm:p-6 
      w-full max-w-[260px]

      shadow-[0_8px_30px_rgba(0,0,0,0.3)]
      backdrop-blur-md

      transition-all duration-300
      hover:-translate-y-1 
      hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]
    ">

      <h3 className="text-sm sm:text-base font-semibold mb-4">
        {title}
      </h3>

      <ul className="space-y-3 text-xs sm:text-sm">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle size={16} className="mt-0.5 text-white" />
            {item}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default PhygitalModelSection;