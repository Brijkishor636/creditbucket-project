"use client";

const WhyBuiltSection = () => {
  return (
    <section className="relative w-full bg-white py-15 px-6">
      
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[2px] bg-gradient-to-r from-transparent via-[#0C82DD] to-transparent"></div>

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          Why Creditbucket Was Built
        </h2>

        {/* Sub-heading / Tagline */}
        <h3 className="text-xl md:text-3xl font-medium text-[#0C82DD] leading-tight mb-10 max-w-2xl">
          Making credit access simpler, clearer, and more reachable.
        </h3>

        {/* Top Description Block */}
        <div className="space-y-4 max-w-4xl mb-12">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Many people in rural and semi-urban areas still struggle to access formal credit. 
            This is not because there is no demand, but because the process is often confusing, 
            documentation is difficult, and there is little guidance available.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            At the same time, banks and NBFCs find it challenging to reach these 
            customers in a structured and scalable way.
          </p>
        </div>

        {/* Bottom Focus Block */}
        <div className="max-w-3xl">
          <p className="text-[#0C82DD] font-semibold text-base md:text-lg mb-4">
            Creditbucket was built to bridge this gap.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            We combine technology with local support to help borrowers understand the process, 
            complete documentation, and connect with the right lending institutions in a structured way.
          </p>
        </div>

      </div>

      {/* Bottom Gradient Border */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[2px] bg-gradient-to-r from-transparent via-[#0C82DD] to-transparent"></div>
      
    </section>
  );
};

export default WhyBuiltSection;