"use client";
import React from "react";
import Image from "next/image";
import shopImg from "@/assets/images/shopImg.png";

const ImpactSection: React.FC = () => {
  return (
    <section className="w-full py-10 px-2">
      <div className="max-w-7xl mx-auto bg-[#F4F4F4] rounded-2xl p-8 md:p-10 shadow-sm">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="space-y-10">

            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                Impact at Scale
              </h2>
              <p className="text-gray-700 mt-3 max-w-xl">
                Delivering measurable financial access across underserved
                communities through a trusted phygital network.
              </p>
            </div>

            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">

              <div className="hidden sm:block absolute left-1/2 top-0 h-full w-px bg-gray-300 -translate-x-1/2" />
              <div className="hidden sm:block absolute top-1/2 left-0 w-full h-px bg-gray-300 -translate-y-1/2" />

              <div>
                <h3 className="text-blue-600 text-2xl font-semibold">1,600+</h3>
                <p className="font-medium text-gray-900">Pin codes Reached</p>
                <p className="text-sm text-gray-600">
                  Across Tier 3, Tier 4, and rural India.
                </p>
              </div>

              <div>
                <h3 className="text-blue-600 text-2xl font-semibold">9000+</h3>
                <p className="font-medium text-gray-900">Individuals Impacted</p>
                <p className="text-sm text-gray-600">
                  First-time and underserved borrowers supported.
                </p>
              </div>

              <div>
                <h3 className="text-blue-600 text-2xl font-semibold">400+</h3>
                <p className="font-medium text-gray-900">On-ground Facilitators</p>
                <p className="text-sm text-gray-600">
                  Trained Samriddh Sathis enabling assisted journeys.
                </p>
              </div>

              <div>
                <h3 className="text-blue-600 text-2xl font-semibold">
                  Multiple States
                </h3>
                <p className="font-medium text-gray-900">Operations</p>
                <p className="text-sm text-gray-600">
                  Including Bihar, Jharkhand, and surrounding regions.
                </p>
              </div>

            </div>
          </div>

          <div className="w-full">
            <Image
              src={shopImg}
              alt="Samriddh Kendra"
              className="rounded-xl border border-gray-300 w-full h-auto object-cover"
              priority
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default ImpactSection;
