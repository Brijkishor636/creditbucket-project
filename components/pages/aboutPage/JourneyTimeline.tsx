import React from 'react';

interface TimelineItem {
  year: string;
  title?: string;
  description?: string;
  listItems?: string[];
}

const timelineData: TimelineItem[] = [
  {
    year: '2018',
    description: 'Started as a sole proprietorship, working with fintech platforms in merchant services and digital payments.',
  },
  {
    year: '2019 – 2022',
    description: 'Worked with platforms such as PhonePe, BharatPe, Amazon Pay, and Airtel.',
    listItems: [
      'Expanded across Bihar, Jharkhand, West Bengal, Odisha, and nearby regions',
      'Onboarded 2 lakh+ merchants',
      'Built strong on-ground distribution networks',
    ],
  },
  {
    year: '2023',
    title: 'Shift to Credit Distribution',
    listItems: [
      'Transitioned into a credit-focused model',
      'Partnered with 20+ banks and NBFCs',
      'Enabled initial loan disbursals',
      'Incorporated as a Private Limited company',
    ],
  },
  {
    year: '2024',
    description: 'Focused on developing a structured, technology-enabled platform for scalable and compliant credit distribution.',
  },
];

const JourneyTimeline: React.FC = () => {
  return (
    <section className="min-h-screen py-10 px-6 md:px-16 font-sans">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12">
          Journey to Building Creditbucket
        </h2>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-gray-400 ml-3 md:ml-6">
          {timelineData.map((item, index) => (
            <div key={index} className="mb-10 ml-8 relative">
              
              <div className="absolute -left-[41px] top-6 w-4 h-4 bg-[#1a82ff] rounded-full border-2 border-[#f0f7ff]" />

              <div className="bg-white border border-gray-400 border-[2px] rounded-xl p-6 md:p-8 shadow-sm">
                <h3 className="text-[#1a82ff] text-xl font-bold mb-4">
                  {item.year}
                </h3>
                
                {item.description && (
                  <p className="text-gray-700 font-semibold leading-relaxed">
                    {item.description}
                  </p>
                )}

                {item.title && (
                  <h4 className="font-bold text-gray-800 mt-2 mb-2">
                    {item.title}
                  </h4>
                )}

                {item.listItems && (
                  <ul className="list-disc list-outside ml-5 mt-3 space-y-2 text-gray-700 font-semibold">
                    {item.listItems.map((bullet, idx) => (
                      <li key={idx} className="pl-1">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;