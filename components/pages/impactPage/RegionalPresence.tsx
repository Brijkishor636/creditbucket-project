"use client";
import BiharCard from "./BiharCard";
import StateCard from "./StateCard";

import bihar from "../../../assets/impact/biharmap(1) 1.png";
import jharkhand from "../../../assets/impact/jharkhand_map.png";
import odisha from "../../../assets/impact/odisha_map.png";
import westbengal from "../../../assets/impact/west bengal map.png"; 
import assam from "../../../assets/impact/asam_map.png";

const RegionalPresence = () => {
  return (
    <section className="w-full py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#212529] mb-4">
            Regional Operational Presence
          </h2>
          <p className="text-gray-900 text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-medium">
            Our presence is concentrated in Eastern India through structured
            facilitator networks and phased expansion aligned with institutional
            partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex">
            <BiharCard image={bihar} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <StateCard
              title="Jharkhand"
              text="Active borrower participation supported through structured regional deployment."
              image={jharkhand}
            />
            <StateCard
              title="Odisha"
              text="Growing operational engagement aligned with partner-led expansion frameworks."
              image={odisha}
            />
            <StateCard
              title="West Bengal"
              text="Selective expansion supported through coordinated infrastructure deployment."
              image={westbengal}
            />
            <StateCard
              title="Assam"
              text="Emerging regional footprint through phased and compliance-aligned rollout."
              image={assam}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionalPresence;