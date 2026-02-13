'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';

function Header() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // 1. Hydration Fix
  useEffect(() => {
    setMounted(true);
  }, []);

  // 2. Dynamic Colors Logic
  const isDark = mounted && theme === 'dark';

  // --- Variables ---
  const textColor = isDark ? 'text-white' : 'text-gray-900';
  const subTextColor = isDark ? 'text-gray-400' : 'text-gray-600';

  // Greeting Pill Colors
  const pillBg = isDark ? 'bg-blue-900/30' : 'bg-blue-50';
  const pillText = isDark ? 'text-blue-400' : 'text-blue-600';
  const pillBorder = isDark ? 'border-blue-800/50' : 'border-blue-100';

  if (!mounted) return null;

  return (
    <section
      id="top"
      className="relative flex flex-col items-center justify-center w-full min-h-screen px-4 mx-auto text-center font-ovo overflow-hidden"
    >
      {/* Background Glow Effect (Blue) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] -z-10 rounded-full pointer-events-none"></div>

      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        className="relative mb-6"
      >
        <div className="absolute inset-0 rounded-full blur-xl bg-blue-500/20 -z-10"></div>
        <Image
          src={assets.my_img} // ඔයාගේ පින්තූරය
          alt="Profile"
          className="object-cover w-36 h-36 rounded-full shadow-2xl border-4 border-white dark:border-white/10"
          priority
        />
      </motion.div>

      {/* Greeting (Pill Style) */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`flex items-center gap-2 mb-6 text-sm md:text-base font-medium px-6 py-2 rounded-full border ${pillBg} ${pillText} ${pillBorder}`}
      >
        Hi, I’m Shehan Chathuranga
        <Image src={assets.hand_icon} alt="Hand wave" className="w-5 pb-1" />
      </motion.h3>

      {/* Main Heading */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className={`text-4xl sm:text-6xl lg:text-[70px] font-bold leading-tight mb-6 ${textColor}`}
      >
        Full-Stack Web Developer <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
          based in Sri Lanka.
        </span>
      </motion.h1>

      {/* Short Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className={`max-w-2xl mx-auto text-base md:text-lg mb-10 leading-relaxed ${subTextColor}`}
      >
        I craft responsive and modern web applications using
        <span className="font-semibold text-blue-600 dark:text-blue-400"> React, Next.js, Node.js</span>, and
        <span className="font-semibold text-blue-600 dark:text-blue-400"> Spring Boot</span>.
        Passionate about clean code, seamless UX, and building scalable solutions.
      </motion.p>

      {/* Action Buttons */}
      <div className="flex flex-col items-center gap-4 sm:flex-row">

        {/* Primary Button (Contact) */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className={`
            flex items-center gap-2 px-8 py-3.5 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/20
            ${isDark
              ? 'bg-white text-black hover:bg-blue-400 hover:text-white'
              : 'bg-gray-900 text-white hover:bg-blue-600'
            }
          `}
        >
          Contact Me
          <Image
            src={assets.right_arrow_white}
            alt="Arrow"
            className={`w-4 ${isDark ? 'invert-0 group-hover:invert' : ''}`}
          />
        </motion.a>

        {/* Secondary Button (Resume) */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="./sample-resume.pdf"
          download="Shashika Shehan Resume.pdf"
          className={`
            flex items-center gap-2 px-8 py-3.5 rounded-full font-medium border transition-all duration-300
            hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-200 dark:hover:border-blue-800
            ${isDark
              ? 'border-white/20 text-white'
              : 'border-gray-300 text-gray-900'
            }
          `}
        >
          My Resume
          <Image
            src={assets.download_icon}
            alt="Download"
            className={`w-4 ${isDark ? 'invert' : ''}`}
          />
        </motion.a>
      </div>
    </section>
  );
}

export default Header;