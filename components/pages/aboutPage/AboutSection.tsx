"use client";

const AboutSection = () => {
  return (
    <section className="relative w-full max-h-[130vh] md:min-h-[80vh] rounded-2xl overflow-hidden py-5 text-white">
        
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-130"
        >
          <source src="/videos/sol-bg-video.mp4" type="video/mp4" />
        </video>

        {/* Darker overlay to ensure text pops against the grid video */}
        <div className="absolute inset-0 "></div>

        {/* Centered Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
          
          {/* ABOUT Badge */}
          <span className="inline-block px-4 py-1 text-[10px] tracking-widest bg-[#0C82DD] rounded-full mb-10 uppercase">
            ABOUT
          </span>

          {/* Main Title - Responsive sizing to match the screenshot impact */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.15] mb-10 max-w-4xl">
            Building Structured Credit <br className="hidden md:block" /> Infrastructure for Rural Area
          </h2>

          {/* Description Content */}
          <div className="space-y-8 max-w-3xl">
            <p className="text-base md:text-lg lg:text-[19px] leading-relaxed text-blue-50 font-medium">
              Recognized as a National Winner under the Government of India&apos;s 
              Startup India initiative, Creditbucket Technologies Private Limited 
              is an award-winning fintech infrastructure company.
            </p>

            <p className="text-base md:text-lg lg:text-[19px] leading-relaxed text-blue-50 font-medium">
              We work to improve access to formal credit in rural and semi-urban areas 
              by building simple, structured systems. Through partnerships with banks 
              and NBFCs, we support borrower onboarding, application processing, 
              and guided access to credit.
            </p>

            <p className="text-base md:text-lg lg:text-[19px] leading-relaxed text-blue-50 font-medium">
              Our approach combines technology with local support to make 
              credit more accessible, understandable, and reliable.
            </p>
          </div>
        </div>
      
    </section>
  );
};

export default AboutSection;