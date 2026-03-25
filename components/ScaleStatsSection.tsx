"use client";
import React, { useState, useEffect, useRef } from "react";
import { User, MapPin, Users, IndianRupee } from "lucide-react";

// --- Internal Counter Component ---
const Counter = ({ 
  endValue, 
  duration = 2000, 
  isCurrency = false 
}: { 
  endValue: string; 
  duration?: number; 
  isCurrency?: boolean 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLHeadingElement>(null);

  const numericEndValue = parseInt(endValue.replace(/[^0-9]/g, ""));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = numericEndValue / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericEndValue) {
        setCount(numericEndValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, numericEndValue, duration]);

  return (
    <h3 ref={countRef} className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
      {isCurrency && "₹"}
      {count.toLocaleString()}
      {!isCurrency && endValue.includes("+") && "+"}
    </h3>
  );
};

const ScaleStatsSection: React.FC = () => {
  return (
    <section className="w-full ">
      {/* Label Area */}
      <div className="text-center py-8">
        <p className="text-slate-600 font-medium tracking-[0.1em] uppercase text-sm">
          Operating at scale across India
        </p>
      </div>

      {/* Top Gradient Divider */}
      <div className="h-[1.5px] w-full bg-gradient-to-r from-blue-100 via-blue-500 to-blue-100 opacity-50" />

      {/* Main Stats Content */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center relative gap-y-16">
          
          {/* Tall Vertical Dividers (Hidden on mobile/tablet) */}
          <div className="hidden lg:block absolute left-1/4 top-1/2 -translate-y-1/2 h-32 w-[1.5px] bg-blue-500" />
          <div className="hidden lg:block absolute left-2/4 top-1/2 -translate-y-1/2 h-32 w-[1.5px] bg-blue-500" />
          <div className="hidden lg:block absolute left-3/4 top-1/2 -translate-y-1/2 h-32 w-[1.5px] bg-blue-500" />

          {/* Stat Item 1 */}
          <div className="flex flex-col items-center space-y-6">
            <div className="w-16 h-16 rounded-full border-2 border-[#1B84E7] flex items-center justify-center text-[#1B84E7]">
              <User size={32} strokeWidth={2.5} />
            </div>
            <div className="space-y-2">
              <Counter endValue="400+" />
              <p className="text-xl font-bold text-slate-800 leading-tight">
                Samriddh <br className="hidden lg:block"/> Sathis
              </p>
            </div>
          </div>

          {/* Stat Item 2 */}
          <div className="flex flex-col items-center space-y-6">
            <div className="w-16 h-16 rounded-full border-2 border-[#1B84E7] flex items-center justify-center text-[#1B84E7]">
              <MapPin size={32} strokeWidth={2.5} />
            </div>
            <div className="space-y-2">
              <Counter endValue="1,600+" />
              <p className="text-xl font-bold text-slate-800 leading-tight">
                Pin codes <br className="hidden lg:block"/> Covered
              </p>
            </div>
          </div>

          {/* Stat Item 3 */}
          <div className="flex flex-col items-center space-y-6">
            <div className="w-16 h-16 rounded-full border-2 border-[#1B84E7] flex items-center justify-center text-[#1B84E7]">
              <Users size={32} strokeWidth={2.5} />
            </div>
            <div className="space-y-2">
              <Counter endValue="9,000+" />
              <p className="text-xl font-bold text-slate-800 leading-tight">
                People <br className="hidden lg:block"/> Impacted
              </p>
            </div>
          </div>

          {/* Stat Item 4 */}
          <div className="flex flex-col items-center space-y-6">
            <div className="w-16 h-16 rounded-full border-2 border-[#1B84E7] flex items-center justify-center text-[#1B84E7]">
              <IndianRupee size={32} strokeWidth={2.5} />
            </div>
            <div className="space-y-2">
              <Counter endValue="0" isCurrency={true} />
              <p className="text-xl font-bold text-slate-800 leading-tight">
                Total Impact <br className="hidden lg:block"/> Created
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Gradient Divider */}
      <div className="h-[1.5px] w-full bg-gradient-to-r from-blue-100 via-blue-500 to-blue-100 opacity-50" />

      {/* Bottom Visual Spacer */}
      <div className="bg-[#E6F3FF]/50 h-10" />
    </section>
  );
};

export default ScaleStatsSection;