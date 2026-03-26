"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import shopImg from "@/assets/images/shopImg.png";

// --- Counter Sub-component remains the same ---
const Counter = ({ end, duration = 2000 }: { end: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const target = parseInt(end.replace(/,/g, ""));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return <span ref={elementRef}>{count.toLocaleString()}</span>;
};

const ImpactSection: React.FC = () => {
  return (
    // Changed: Section now has the light blue background seen in the image edges
    <section className="w-full py-12 md:py-20 px-4 md:px-8 bg-[#EBF5FF] overflow-hidden">
      
      {/* The "Island" Container: This matches the white rounded box in the image */}
      <div className="max-w-9xl mx-auto bg-white rounded-[40px] md:rounded-[20px] p-8 md:p-16 lg:p-20 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-300">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: Content & Stats */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Impact at Scale
              </h2>
              <p className="text-slate-600 text-[16px] md:text-lg leading-relaxed max-w-xl font-medium">
                Delivering measurable financial access across underserved
                communities through a trusted phygital network.
              </p>
            </div>

            {/* Stats Grid with Image-matching Dividers */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
              {/* Dividers: Adjusted to use thinner, lighter lines */}
              <div className="hidden sm:block absolute left-1/2 top-0 h-full w-[1px] bg-slate-100 -translate-x-1/2" />
              <div className="hidden sm:block absolute top-1/2 left-0 w-full h-[1px] bg-slate-100 -translate-y-1/2" />

              {/* Stat 1 */}
              <div className="space-y-1 relative pr-4">
                <h3 className="text-[#1B84E7] text-3xl font-bold">
                  <Counter end="1600" />+
                </h3>
                <p className="text-lg font-bold text-slate-900">Pin codes Reached</p>
                <p className="text-sm text-slate-500 font-medium leading-snug">
                  Across Tier 3, Tier 4, and rural India.
                </p>
              </div>

              {/* Stat 2 */}
              <div className="space-y-1 relative pl-4">
                <h3 className="text-[#1B84E7] text-3xl font-bold">
                  <Counter end="9000" />+
                </h3>
                <p className="text-lg font-bold text-slate-900">Individuals Impacted</p>
                <p className="text-sm text-slate-500 font-medium leading-snug">
                  First-time and underserved borrowers supported.
                </p>
              </div>

              {/* Stat 3 */}
              <div className="space-y-1 relative pr-4">
                <h3 className="text-[#1B84E7] text-3xl font-bold">
                  <Counter end="400" />+
                </h3>
                <p className="text-lg font-bold text-slate-900">On-ground Facilitators</p>
                <p className="text-sm text-slate-500 font-medium leading-snug">
                  Trained Samriddh Sathis enabling assisted journeys.
                </p>
              </div>

              {/* Stat 4 */}
              <div className="space-y-1 relative pl-4">
                <h3 className="text-[#1B84E7] text-3xl font-bold">Multiple States</h3>
                <p className="text-lg font-bold text-slate-900">Operations</p>
                <p className="text-sm text-slate-500 font-medium leading-snug">
                  Including Bihar, Jharkhand, and surrounding regions.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Image (Span 5) */}
          <div className="lg:col-span-5">
            <div className="rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100">
              <Image
                src={shopImg}
                alt="Samriddh Saathi Digital Kendra"
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ImpactSection;