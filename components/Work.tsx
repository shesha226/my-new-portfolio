'use client';
import { assets, workData } from '@/assets/assets';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';
import { FiSend } from 'react-icons/fi'; // Optional: used react-icon for cleaner look or fallback to image

function Work() {
  const { theme } = useTheme();
  const [visibleCount, setVisibleCount] = useState(3);
  const [mounted, setMounted] = useState(false);

  // 1. Hydration Fix
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  // 2. Dynamic Colors Logic
  const isDark = mounted && theme === 'dark';

  // --- Variables ---
  const textColor = isDark ? 'text-white' : 'text-gray-900';
  const subTextColor = isDark ? 'text-gray-400' : 'text-gray-600';

  // Pill (Badge) Colors
  const pillBg = isDark ? 'bg-blue-900/30' : 'bg-blue-50';
  const pillText = isDark ? 'text-blue-400' : 'text-blue-600';

  // Card Overlay Colors
  const cardBoxBg = isDark ? 'bg-[#1a1a1a]' : 'bg-white';
  const cardText = isDark ? 'text-white' : 'text-gray-900';
  const cardDesc = isDark ? 'text-gray-400' : 'text-gray-600';
  const cardBorder = isDark ? 'border-white/10' : 'border-gray-100';

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full max-w-[1200px] mx-auto px-6 py-20 scroll-mt-20 font-ovo relative overflow-hidden"
    >
      {/* Background Glow Effect (Blue) */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] -z-10 rounded-full pointer-events-none"></div>

      {/* Heading */}
      <div className="flex flex-col items-center mb-16 text-center">
        <motion.span
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className={`mb-3 text-sm font-medium tracking-wider uppercase px-4 py-1.5 rounded-full ${pillBg} ${pillText}`}
        >
          My Portfolio
        </motion.span>

        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className={`text-4xl md:text-5xl font-bold ${textColor}`}
        >
          My Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className={`max-w-2xl mx-auto mt-5 text-lg leading-relaxed ${subTextColor}`}
        >
          I have built a variety of projects including mobile POS systems, hotel management software,
          display hub POS, my personal portfolio, and a railway website using React, Node.js, Next.js,
          Spring Boot, MongoDB, and MySQL.
        </motion.p>
      </div>

      {/* Cards Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {workData.slice(0, visibleCount).map(({ title, description, bgImage }, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative bg-center bg-no-repeat bg-cover cursor-pointer rounded-2xl aspect-square group overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
            style={{ backgroundImage: `url(${bgImage})` }} // Fallback if Next.js Image isn't used as bg
          >
            {/* If using Next.js Image component for background: */}
            <Image src={bgImage} alt={title} fill className="object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110" />

            {/* Overlay card */}
            <div className={`
                absolute flex items-center justify-between w-[90%] px-5 py-4 duration-500 
                -translate-x-1/2 rounded-xl bottom-5 left-1/2 
                group-hover:bottom-7 shadow-lg border
                ${cardBoxBg} ${cardBorder}
            `}>
              <div className="flex-1 pr-2">
                <h3 className={`text-lg font-bold ${cardText}`}>{title}</h3>
                <p className={`text-sm ${cardDesc} line-clamp-2`}>{description}</p>
              </div>

              {/* Icon Circle */}
              <div
                className={`
                  border rounded-full w-10 h-10 min-w-[40px]
                  flex items-center justify-center
                  transition-all duration-500
                  ${isDark ? 'border-gray-600' : 'border-gray-300'}
                  group-hover:bg-blue-600 group-hover:border-blue-600
                `}
              >
                {/* Option 1: Use the image from assets (needs invert for dark mode if it's black)
                   Option 2: Use React Icon (Recommended for cleaner color control)
                */}
                <Image
                  src={assets.send_icon}
                  alt="Send"
                  width={18}
                  height={18}
                  className={`transition-all duration-500 ${isDark ? 'invert' : ''} group-hover:invert group-hover:brightness-0 group-hover:invert-0`}
                // Note: If send_icon is black:
                // Dark Mode: invert (makes it white)
                // Hover (Blue bg): make it white
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Show More Button */}
      {visibleCount < workData.length && (
        <motion.button
          onClick={handleShowMore}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className={`
            flex items-center justify-center gap-2 px-10 py-3 mx-auto mt-16 duration-500 
            border rounded-full 
            hover:bg-blue-50 dark:hover:bg-blue-900/20 
            ${isDark ? 'border-white/20 text-white' : 'border-gray-900 text-gray-900'}
          `}
        >
          Show More
          <Image
            src={assets.right_arrow_bold}
            alt="arrow"
            className={`w-4 ${isDark ? 'invert' : ''}`}
          />
        </motion.button>
      )}
    </motion.div>
  );
}

export default Work;