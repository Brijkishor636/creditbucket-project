'use client';
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

const MobileMenu = () => {
  const currentPath = usePathname();
  const router = useRouter();
  
  const menuItems = [
    { name: 'Home', path: '/', active: currentPath === '/' },
    { name: 'Solutions', path: '/pages/solutions', active: currentPath === '/pages/solutions' },
    { name: 'Partners', path: '/pages/partners', active: currentPath === '/pages/partners' },
    { name: 'Phygital Model', path: '/pages/phygital', active: currentPath === '/pages/phygital' },
    { name: 'Trust & Governance', path: '/pages/trust', active: currentPath === '/pages/trust' },
    { name: 'Impact', path: '/pages/impact', active: currentPath === '/pages/impact' },
    { name: 'About Us', path: '/pages/about', active: currentPath === '/pages/about' },
    { name: 'Contact', path: '/pages/contact', active: currentPath === '/pages/contact' },
  ];

  return (
    <div className="min-h-screen bg-secondary-blue font-sans p-8 flex flex-col">
      {/* Back Arrow */}
      <div className="mb-4">
        <button 
          onClick={() => router.back()}
          className="text-slate-800 hover:text-primary-blue transition-colors"
        >
          <ArrowLeft size={32} strokeWidth={1.5} />
        </button>
      </div>

      {/* Menu Items */}
      <div className="flex-grow flex flex-col items-center justify-center space-y-10 py-12">
        {menuItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04 }}
          >
            <Link
              href={item.path}
              className={`text-2xl font-medium tracking-wide ${
                item.active ? 'text-primary-blue' : 'text-slate-800'
              } hover:text-primary-blue transition-colors`}
            >
              {item.name}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col space-y-5 max-w-md mx-auto w-full pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/join"
            className="btn-outline-dark bg-white/60 border-2 py-5 px-10 flex items-center justify-between group rounded-2xl"
          >
            <span className="text-lg">Join as Corporate</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/join"
            className="btn-outline-dark bg-white/60 border-2 py-5 px-10 flex items-center justify-between group rounded-2xl"
          >
            <span className="text-lg">Join Samriddh Saathis</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/join"
            className="btn-outline-dark bg-white/60 border-2 py-5 px-10 flex items-center justify-between group rounded-2xl"
          >
            <span className="text-lg">Join as Retailer</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default MobileMenu;
