"use client";
import React from "react";
import { User, MapPin, Users, IndianRupee } from "lucide-react";

const ScaleStatsSection: React.FC = () => {
  return (
    <section className="w-full">

      <div className="bg-[linear-gradient(135deg,#E6F3FF,#B9D9F6)] text-center py-6">
        <p className="text-gray-800 font-medium">
          Operating at scale across India
        </p>
      </div>

      <div className="h-[2px] w-full bg-gradient-to-r from-blue-200 via-blue-700 to-blue-200" />

      <div className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 text-center relative">

          <div className="hidden md:block absolute left-1/4 top-6 h-24 w-px bg-blue-400" />
          <div className="hidden md:block absolute left-2/4 top-6 h-24 w-px bg-blue-400" />
          <div className="hidden md:block absolute left-3/4 top-6 h-24 w-px bg-blue-400" />

          <div className="space-y-3">
            <User className="mx-auto text-blue-600" size={32} />
            <h3 className="text-3xl font-semibold text-gray-900">0 +</h3>
            <p className="text-gray-700">Samriddh Sathis</p>
          </div>

          <div className="space-y-3">
            <MapPin className="mx-auto text-blue-600" size={32} />
            <h3 className="text-3xl font-semibold text-gray-900">0 +</h3>
            <p className="text-gray-700">Pin codes Covered</p>
          </div>

          <div className="space-y-3">
            <Users className="mx-auto text-blue-600" size={32} />
            <h3 className="text-3xl font-semibold text-gray-900">0 +</h3>
            <p className="text-gray-700">People Impacted</p>
          </div>

          <div className="space-y-3">
            <IndianRupee className="mx-auto text-blue-600" size={32} />
            <h3 className="text-3xl font-semibold text-gray-900">₹10,00,000</h3>
            <p className="text-gray-700">Total Impact Created</p>
          </div>

        </div>
      </div>

      <div className="h-[2px] w-full bg-gradient-to-r from-blue-200 via-blue-700 to-blue-200" />

      <div className="bg-[linear-gradient(135deg,#E6F3FF,#B9D9F6)] h-6" />

    </section>
  );
};

export default ScaleStatsSection;
