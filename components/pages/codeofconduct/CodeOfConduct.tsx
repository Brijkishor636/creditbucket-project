"use client";

const CodeOfConduct = () => {
  return (
    <section className="relative w-full flex justify-center overflow-hidden text-white rounded-2xl">
      <div className="relative w-full min-h-[700px] lg:h-[800px] flex items-center justify-center">
        
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/sol-bg-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[#001B3D]/70"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
          
          <span className="inline-block px-5 py-1 text-[11px] font-medium tracking-[0.2em] border border-white/30 bg-white/5 backdrop-blur-sm rounded-full mb-8 uppercase">
            GOVERNANCE
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Code of Conduct
          </h2>

          <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-blue-100/90 mb-12">
            Principles Guiding Responsible and Ethical Operations
          </h3>

          <div className="max-w-4xl space-y-8">
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-blue-50/80 font-normal">
              Creditbucket Technologies Private Limited operates within clearly defined standards of 
              integrity, compliance, and accountability across all levels of engagement — including 
              internal teams, facilitators, and institutional partners.
            </p>

            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-blue-50/80 font-normal">
              We are committed to ethical conduct, regulatory alignment, and responsible 
              engagement within the credit distribution ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeOfConduct;