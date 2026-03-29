"use client";
import React, { useState, useEffect, useRef } from "react";
import { 
  UserIcon, 
  MapPinIcon, 
  UsersIcon, 
  CurrencyRupeeIcon 
} from "@heroicons/react/24/outline";

// --- Sub-component: Animated Counter ---
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

  // Extract only numbers (handles "1,600+" -> 1600)
  const numericEndValue = parseInt(endValue.replace(/[^0-9]/g, "")) || 0;

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

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const currentCount = Math.floor(percentage * numericEndValue);
      setCount(currentCount);

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(numericEndValue);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, numericEndValue, duration]);

  return (
    <h3 ref={countRef} className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
      {isCurrency && "₹"}
      {count.toLocaleString()}
      {!isCurrency && endValue.includes("+") && "+"}
    </h3>
  );
};

// --- Main Section Component ---
const ScaleStatsSection: React.FC = () => {
  const stats = [
    {
      icon: UserIcon,
      value: "400+",
      label: <>Samriddh <br className="hidden lg:block"/> Sathis</>,
    },
    {
      icon: MapPinIcon,
      value: "1,600+",
      label: <>Pin codes <br className="hidden lg:block"/> Covered</>,
    },
    {
      icon: UsersIcon,
      value: "9,000+",
      label: <>People <br className="hidden lg:block"/> Impacted</>,
    },
    {
      icon: CurrencyRupeeIcon,
      value: "0",
      label: <>Total Impact <br className="hidden lg:block"/> Created</>,
      isCurrency: true,
    },
  ];

  return (
    <section className="w-full">
      {/* Label Area */}
      <div className="text-center py-12">
        <p className="text-black-600 font-medium tracking-widest text-xl uppercase">
          Operating at scale across India
        </p>
      </div>

      {/* Top Gradient Divider */}
      <div className="h-[2.5px] w-full bg-linear-to-r from-transparent via-[#1B84E7] to-transparent " />
      
      {/* Main Stats Content */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 relative">
          
          {/* Tall Vertical Dividers (Hidden on mobile/tablet) */}
          <div className="hidden lg:block absolute left-1/4 top-1/2 -translate-y-1/2 h-24 w-px bg-[#1B84E7]" />
          <div className="hidden lg:block absolute left-2/4 top-1/2 -translate-y-1/2 h-24 w-px bg-[#1B84E7]" />
          <div className="hidden lg:block absolute left-3/4 top-1/2 -translate-y-1/2 h-24 w-px bg-[#1B84E7]" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center space-y-6">
                <div className="w-16 h-16 flex items-center justify-center text-[#1B84E7]">
                  <stat.icon className="w-10 h-10 " strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <Counter endValue={stat.value} isCurrency={stat.isCurrency} />
                  <p className="text-lg font-semibold text-slate-600 leading-tight">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Divider */}
      <div className="h-[2.5px] w-full bg-linear-to-r from-transparent via-[#1B84E7] to-transparent " />

      {/* Bottom Visual Spacer */}
      <div className="bg-slate-50 h-12" />
    </section>
  );
};

export default ScaleStatsSection;