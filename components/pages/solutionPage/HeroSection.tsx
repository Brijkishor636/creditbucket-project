"use client";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[90vh] md:min-h-[80vh] rounded-2xl overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/sol-bg-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-[#0C4A6E]/90 to-[#0C82DD]/70"></div>

      <div className="
        relative z-10 
        max-w-7xl mx-auto 
        px-4 sm:px-6 
        min-h-[90vh] md:min-h-[80vh]
        flex flex-col lg:flex-row 
        items-center 
        justify-center lg:justify-between 
        gap-10 lg:gap-16
        py-10 lg:py-0
      ">

        <div className="
          max-w-xl text-white 
          space-y-5 
          text-center lg:text-left
        ">
          
          <span className="bg-blue-500/80 px-3 py-1 text-xs rounded-full inline-block">
            SOLUTION
          </span>

          <h1 className="
            text-2xl 
            sm:text-3xl 
            md:text-4xl 
            lg:text-5xl 
            font-semibold 
            leading-tight
          ">
            Lending Infrastructure for Assisted Credit Distribution
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed">
            Creditbucket operates as a lending infrastructure partner for banks and NBFCs seeking structured access to underserved and semi-formal borrower segments.
          </p>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed">
            We combine technology, local facilitation, and guided onboarding to make credit access more organized, transparent, and scalable.
          </p>

          <p className="text-xs text-white/60">
            Credit decisions and loan ownership remain with our partner institutions.
          </p>
        </div>

        <div className="
          flex flex-col items-center 
          space-y-3 
          w-full sm:w-auto
        ">
          
          <FlowCard title="Banks / NBFC" subtitle="Lending Partner" />
          <Arrow />
          <FlowCard title="Creditbucket" subtitle="Infrastructure Layer" />
          <Arrow />
          <FlowCard title="Borrower" subtitle="Infrastructure Layer" />

        </div>

      </div>
    </section>
  );
};

const FlowCard = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div className="
      bg-gradient-to-r from-blue-500 to-blue-600 
      text-white 
      px-5 sm:px-7 py-4 sm:py-5 
      rounded-xl shadow-xl 
      w-full 
      max-w-[240px] sm:max-w-[260px] md:max-w-[280px] lg:w-[260px]
      text-center
      transition-transform duration-300 hover:scale-105
    ">
      <h3 className="text-sm sm:text-base lg:text-lg font-semibold">
        {title}
      </h3>
      <p className="text-[10px] sm:text-xs text-white/80 mt-1">
        {subtitle}
      </p>
    </div>
  );
};

const Arrow = () => {
  return (
    <div className="text-white text-base sm:text-lg md:text-xl opacity-80 animate-pulse">
      ↓
    </div>
  );
};

export default HeroSection;