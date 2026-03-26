import React from 'react';

const GetInTouch: React.FC = () => {
  return (
    <section className="w-full py-15 px-6 flex flex-col items-center justify-center text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        <span className="bg-[#0C82DD] text-white text-[11px] md:text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full mb-8 shadow-sm">
          CONTACT
        </span>

        <h2 className="text-2xl md:text-3xl lg:text-6xl font-bold text-[#1a1a1a] mb-6 tracking-tight">
          Get in Touch
        </h2>

        <p className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
          For partnership inquiries, institutional discussions, or general queries, please reach out to us 
          <span className="block md:inline"> using the details below or submit the form.</span>
        </p>

      </div>
    </section>
  );
};

export default GetInTouch;