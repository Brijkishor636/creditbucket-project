"use client";

const CoreValues = () => {
  const values = [
    {
      title: "Integrity",
      description: "We act with honesty, transparency, and ethical intent in all interactions with borrowers, partners, and team members.",
    },
    {
      title: "Respect",
      description: "We act with honesty, transparency, and ethical intent in all interactions with borrowers, partners, and team members.",
    },
    {
      title: "Compliance",
      description: "We act with honesty, transparency, and ethical intent in all interactions with borrowers, partners, and team members.",
    },
    {
      title: "Responsible Innovation",
      description: "We act with honesty, transparency, and ethical intent in all interactions with borrowers, partners, and team members.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#E8F4FD]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16">
          Our Core Values
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {values.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 pt-16 flex flex-col items-center text-center shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-12">
                <div className="w-full h-full relative overflow-hidden">
                  <div className="absolute top-[-52px] left-0 w-full h-[100px] border-[3px] border-[#0C82DD] rounded-full transition-colors duration-300 group-hover:bg-[#0C82DD]"></div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-6 transition-colors duration-300 group-hover:text-[#0C82DD]">
                {item.title}
              </h3>

              <p className="text-gray-700 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;