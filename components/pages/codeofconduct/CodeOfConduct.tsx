"use client";

const CodeOfConduct = () => {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[60vh] rounded-2xl overflow-hidden text-white flex items-center justify-center">
      
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

      {/* Dark Blue Overlay - Matches the image's deep blue tone */}
      <div className="absolute inset-0 "></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        
        {/* Governance Badge */}
        <span className="inline-block px-5 py-1.5 text-[10px] md:text-[11px] font-medium tracking-[0.25em] border border-white/30 bg-white/5 backdrop-blur-md rounded-full mb-10 uppercase">
          GOVERNANCE
        </span>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Code of Conduct
        </h2>

        {/* Sub-Heading */}
        <h3 className="text-xl md:text-2xl font-medium text-blue-50/90 mb-12">
          Principles Guiding Responsible and Ethical Operations
        </h3>

        {/* Paragraphs - constrained to max-w-3xl for the image's line wrapping */}
        <div className="max-w-3xl space-y-10">
          <p className="text-base md:text-xl leading-relaxed text-blue-100/90">
            Creditbucket Technologies Private Limited operates within clearly defined standards of 
            integrity, compliance, and accountability across all levels of engagement — including 
            internal teams, facilitators, and institutional partners.
          </p>

          <p className="text-base md:text-xl leading-relaxed text-blue-100/90">
            We are committed to ethical conduct, regulatory alignment, and responsible 
            engagement within the credit distribution ecosystem.
          </p>
        </div>
      </div>
      
    </section>
  );
};

export default CodeOfConduct;