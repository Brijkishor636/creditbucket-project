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
  startValue = "0", 
  endValue, 
  duration = 2000, 
  isCurrency = false 
}: { 
  startValue?: string;
  endValue: string; 
  duration?: number; 
  isCurrency?: boolean 
}) => {
  const numericStartValue = parseInt(startValue.replace(/[^0-9]/g, "")) || 0;
  const numericEndValue = parseInt(endValue.replace(/[^0-9]/g, "")) || 0;
  
  const [count, setCount] = useState(numericStartValue);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLHeadingElement>(null);

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
      
      const diff = numericEndValue - numericStartValue;
      const currentCount = Math.floor(numericStartValue + (diff * percentage));
      
      setCount(currentCount);

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(numericEndValue);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, numericEndValue, numericStartValue, duration]);

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
      startValue: "10000",
      value: "0",
      label: <>Total Impact <br className="hidden lg:block"/> Created</>,
      isCurrency: true,
    },
  ];

  return (
    <section className="w-full">
      <div className="text-center py-8 pt-15">
        <p className="font-[var(--font-commissioner)] font-medium text-[24px] leading-[120%] tracking-normal text-black text-center">
          Operating at scale across India
        </p>
      </div>

      <div className="h-[2px] w-full bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-30" />
      
      <div className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-6 relative">
          
          {/* --- Updated Vertical Dividers --- */}
          {/* Changed w-px to w-[2px] for increased thickness */}
          <div className="hidden lg:block absolute left-1/4 top-1/2 -translate-y-1/2 h-40 w-[2px] bg-blue-600/40" />
          <div className="hidden lg:block absolute left-2/4 top-1/2 -translate-y-1/2 h-40 w-[2px] bg-blue-600/40" />
          <div className="hidden lg:block absolute left-3/4 top-1/2 -translate-y-1/2 h-40 w-[2px] bg-blue-600/40" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center space-y-6">
                <div className="w-16 h-16 flex items-center justify-center text-[#1E73BE]">
                  <stat.icon className="w-10 h-10 " strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <Counter 
                    startValue={stat.startValue} 
                    endValue={stat.value} 
                    isCurrency={stat.isCurrency} 
                  />
                  <p className="text-lg font-semibold text-slate-800 leading-tight">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-[2px] w-full bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-30" />
    </section>
  );
};

export default ScaleStatsSection;