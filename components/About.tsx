'use client';
import { CheckCircle2, MapPin } from "lucide-react";

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#0A2540] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-6">
            About
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            Building Structured Credit Infrastructure for Rural Area
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Recognized as a National Winner under the Government of India's Startup India initiative, Creditbucket Technologies Private Limited is an award-winning fintech infrastructure company.
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            We work to improve access to formal credit in rural and semi-urban areas by building simple, structured systems. Through partnerships with banks and NBFCs, we support borrower onboarding, application processing, and guided access to credit.
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our approach combines technology with local support to make credit more accessible, understandable, and reliable.
          </p>
        </div>
      </section>

      {/* Why Creditbucket */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-4xl font-bold text-gray-900">Why Creditbucket Was Built</h2>
          <p className="text-2xl font-medium text-blue-600">Making credit access simpler, clearer, and more reachable.</p>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Many people in rural and semi-urban areas still struggle to access formal credit. This is not because there is no demand, but because the process is often confusing, documentation is difficult, and there is little guidance available. At the same time, banks and NBFCs find it challenging to reach these customers in a structured and scalable way.
            </p>
            <p className="text-blue-600 font-bold text-xl">
              Creditbucket was built to bridge this gap.
            </p>
            <p>
              We combine technology with local support to help borrowers understand the process, complete documentation, and connect with the right lending institutions in a structured way.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">What We Do</h2>
            <p className="text-gray-500">Helping lenders and borrowers connect through simple, structured systems.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: 1, title: "Assisted Onboarding", desc: "We help borrowers understand the process and get started with the right information and guidance." },
              { num: 2, title: "Application Support", desc: "We assist with documentation and ensure applications are complete and properly submitted." },
              { num: 3, title: "Local Facilitation", desc: "Our Samriddh Sathis provide on-ground support to guide borrowers through each step." },
              { num: 4, title: "Digital Coordination", desc: "Our platform connects borrowers with lenders and helps manage the application flow efficiently." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center space-y-4">
                <div className="text-blue-600 font-bold text-lg">{item.num}</div>
                <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-12 italic">
            We do not provide loans or make credit decisions – all approvals and disbursals are handled by partner banks and NBFCs.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Our Approach</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Combining technology with local support to make credit more accessible.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Access to credit is not just about digital platforms – many borrowers need guidance, support, and clarity throughout the process. Creditbucket combines technology with on-ground support to make the credit journey easier to understand and complete. This approach helps borrowers feel more confident, reduces errors in applications, and improves overall outcomes for both borrowers and lenders.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Better application quality",
                "Improved borrower understanding",
                "Higher completion rates",
                "Scalable and compliant distribution"
              ].map((text, i) => (
                <div key={i} className="bg-gray-100 p-6 rounded-xl flex items-center gap-4">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <span className="font-semibold text-gray-700">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder & Leadership */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">Founder & Leadership</h2>
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" 
                alt="Suman Saurav" 
                className="w-full h-auto rounded-3xl shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:col-span-3 space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-blue-600">Suman Saurav</h3>
                <p className="text-xl font-semibold text-gray-700 mt-2">Founder & CEO</p>
              </div>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Suman Saurav brings deep on-ground experience in financial services distribution and merchant ecosystems across rural and semi-urban markets.
                </p>
                <p>
                  He has worked with platforms such as PhonePe, BharatPe, Amazon Pay, and Airtel, leading large-scale merchant onboarding efforts across Bihar, Jharkhand, West Bengal, Odisha, and nearby regions.
                </p>
                <p>
                  Through this experience, he gained firsthand insight into the challenges faced by borrowers in accessing formal credit – including lack of awareness, documentation gaps, and limited guidance.
                </p>
                <p>
                  These insights led to the creation of Creditbucket as a more structured and scalable solution for improving credit access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">Journey to Building Creditbucket</h2>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-600 before:to-transparent">
            {[
              { year: "2018", title: "Started as a sole proprietorship, working with fintech platforms in merchant services and digital payments." },
              { year: "2019 – 2022", title: "Worked with platforms such as PhonePe, BharatPe, Amazon Pay, and Airtel.", details: ["Expanded across Bihar, Jharkhand, West Bengal, Odisha, and nearby regions", "Onboarded 2 lakh+ merchants", "Built strong on-ground distribution networks"] },
              { year: "2023", title: "Shift to Credit Distribution", details: ["Transitioned into a credit-focused model", "Partnered with 20+ banks and NBFCs", "Enabled initial loan disbursals", "Incorporated as a Private Limited company"] },
              { year: "2024", title: "Focused on developing a structured, technology-enabled platform for scalable and compliant credit distribution." }
            ].map((item, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[45%] p-8 rounded-2xl border border-gray-100 bg-white shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-4">{item.year}</div>
                  <p className="font-semibold text-gray-900 mb-4">{item.title}</p>
                  {item.details && (
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                      {item.details.map((detail, j) => <li key={j}>{detail}</li>)}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Expansion */}
      <section className="bg-blue-600 py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex justify-center"><MapPin className="w-12 h-12" /></div>
          <h2 className="text-4xl font-bold">Focused Regional Expansion</h2>
          <p className="text-lg opacity-90">
            Creditbucket's operations are concentrated in Eastern India, with a strong presence in Bihar and growing reach across nearby states. We focus on building structured and scalable operations in regions where access to formal credit remains limited but demand is strong.
          </p>
          <p className="text-xl font-bold">
            • Bihar (Primary focus) • Jharkhand • West Bengal • Odisha • Assam
          </p>
          <p className="text-sm opacity-75">
            Our expansion follows a phased approach, aligned with operational readiness and institutional partnerships.
          </p>
        </div>
      </section>
    </div>
  );
}
