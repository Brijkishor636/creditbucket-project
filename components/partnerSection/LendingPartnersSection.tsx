"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// --- Group 1: NBFCs ---
import chola from "@/assets/partners/chola.png";
import lendingkart from "@/assets/partners/Lendingkart.png";
import piramal from "@/assets/partners/piramal.png";
import ubisl from "@/assets/partners/UBISL.png";
import bajaj from "@/assets/partners/Bajaj.png";
import shriram from "@/assets/partners/shriram.png";
import smfg from "@/assets/partners/smfg.png";
import aditya from "@/assets/partners/aditya.png";
import lic from "@/assets/partners/lic.png";

// --- Group 2: Banks ---
import utkarsh from "@/assets/partners/utkarsh.png";
import bandhan from "@/assets/partners/bandhan.png";
import bob from "@/assets/partners/bob.png";
import icici from "@/assets/partners/icici.png";
import axis from "@/assets/partners/axis.png";
import jana from "@/assets/partners/jana.png";
import sbi from "@/assets/partners/sbi.png";
import hdfc from "@/assets/partners/hdfc.png";

const bankPartners = [chola, lendingkart, piramal, ubisl, bajaj, shriram, smfg, aditya, lic];
const nbfcPartners = [utkarsh, bandhan, bob, icici, axis, jana, sbi, hdfc];

const LendingPartnersSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide logic: Rotates every 5 seconds without manual controls
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: {
      x: 1000,
      opacity: 0,
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: {
      zIndex: 0,
      x: -1000,
      opacity: 0,
    },
  };

  return (
    <section className="w-full bg-[#E6F3FF] py-24 px-4 overflow-hidden relative min-h-[700px] flex items-center">
      <div className="max-w-6xl mx-auto text-center w-full relative">
        
        <AnimatePresence mode="popLayout" initial={false}>
          {currentSlide === 0 ? (
            <motion.div
              key="partners-nbfc"
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 100, damping: 20 },
                opacity: { duration: 0.5 },
              }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Our Lending Partners
              </h2>
              <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto mt-4 mb-16">
                Collaborating with regulated banks and NBFCs to expand responsible
                credit access across India.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16 place-items-center">
                {nbfcPartners.map((logo, i) => (
                  <div key={`nbfc-${i}`} className="flex justify-center items-center w-full px-4">
                    <Image
                      src={logo}
                      alt="partner"
                      className="h-14 md:h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>

              <p className="text-xs font-medium text-slate-500 mt-16 uppercase tracking-widest">
                Partner logos are indicative and subject to ongoing partnerships.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="partners-banks"
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 100, damping: 20 },
                opacity: { duration: 0.5 },
              }}
            >
              <div className="mb-16 space-y-4">
                <h3 className="text-2xl md:text-4xl font-bold text-slate-900">
                  Facilitated & Supported By
                </h3>
                <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
                  Backed by leading academic institutions, incubators, and
                  government-supported innovation programs.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16 place-items-center">
                {bankPartners.map((logo, i) => (
                  <div key={`bank-${i}`} className="flex justify-center items-center w-full px-4">
                    <Image
                      src={logo}
                      alt="bank partner"
                      className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
              
              {/* Spacer to maintain visual balance during slide */}
              <div className="h-10 md:h-20" />
            </motion.div>
          )}
        </AnimatePresence>
        
      </div>
    </section>
  );
};

export default LendingPartnersSection;