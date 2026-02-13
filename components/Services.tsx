'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';
import { SiReact, SiNodedotjs, SiFigma, SiJenkins } from 'react-icons/si';

// Helper function to render bold text
// මේක Component එක ඇතුලට ගත්තා, අපේ dynamic colors පාවිච්චි කරන්න ලේසි වෙන්න
const ParseDescription = ({ text, highlightColor }: { text: string, highlightColor: string }) => {
  const parts = text.split('**');
  return (
    <>
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <span key={index} className={`font-semibold ${highlightColor}`}>
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
};

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Services() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // 1. Hydration Fix
  useEffect(() => {
    setMounted(true);
  }, []);

  // 2. Dynamic Colors Logic (Blue Theme)
  const isDark = mounted && theme === 'dark';

  // --- Variables ---
  const textColor = isDark ? 'text-white' : 'text-gray-900';
  const subTextColor = isDark ? 'text-gray-400' : 'text-gray-600';
  const cardBg = isDark ? 'bg-[#1a1a1a]' : 'bg-white';
  const cardBorder = isDark ? 'border-white/10' : 'border-gray-200';

  // Pill (Badge) Colors
  const pillBg = isDark ? 'bg-blue-900/30' : 'bg-blue-50';
  const pillText = isDark ? 'text-blue-400' : 'text-blue-600';

  // Service Data (Inside component to use logic if needed, but static here is fine)
  const serviceData = [
    {
      icon: <SiNodedotjs size={32} color="#68A063" />,
      title: 'Backend Development',
      description:
        'Building robust server-side apps with **Node.js, Express, PHP, Laravel** and **MySQL/MongoDB**, implementing **RESTful APIs and RBAC**.',
      link: '#',
    },
    {
      icon: <SiReact size={32} color="#61DBFB" />,
      title: 'Frontend Development',
      description:
        'Building **responsive and dynamic UIs** using **React, Next.js, HTML, CSS, and JavaScript/TypeScript** for seamless experiences.',
      link: '#',
    },
    {
      icon: <SiFigma size={32} color="#F24E1E" />,
      title: 'UI/UX Design',
      description:
        'Designing **user-friendly interfaces** and **smooth user experiences** focusing on accessibility and modern design trends.',
      link: '#',
    },
    {
      icon: <SiJenkins size={32} color="#D24939" />,
      title: 'CI/CD & DevOps',
      description:
        'Building **continuous integration pipelines** for faster, reliable releases using **Jenkins, Docker, and Git** automation.',
      link: '#',
    },
  ];

  if (!mounted) return null;

  return (
    <motion.section
      id="services"
      className="w-full max-w-[1200px] mx-auto px-6 py-20 scroll-mt-20 font-ovo relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Background Glow Effect (Blue) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[100px] -z-10 rounded-full pointer-events-none"></div>

      {/* Header Section */}
      <div className="flex flex-col items-center mb-16 text-center">
        <motion.span
          variants={itemVariants}
          className={`mb-3 text-sm font-medium tracking-wider uppercase px-4 py-1.5 rounded-full ${pillBg} ${pillText}`}
        >
          What I Offer
        </motion.span>
        <motion.h2
          variants={itemVariants}
          className={`text-4xl md:text-5xl font-bold ${textColor}`}
        >
          My Services
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className={`max-w-2xl mx-auto mt-5 text-lg ${subTextColor}`}
        >
          I provide full-stack web development services including frontend, backend, UI/UX design, and
          CI/CD pipelines to build scalable and modern applications.
        </motion.p>
      </div>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className={`
              group relative p-6 rounded-2xl shadow-sm transition-all duration-300 overflow-hidden
              border hover:shadow-xl hover:shadow-blue-500/10
              ${cardBg} ${cardBorder}
            `}
          >
            {/* Hover Gradient Background (Blue/Cyan) */}
            <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isDark ? 'from-blue-900/20 to-transparent' : 'from-blue-50 to-transparent'}`} />

            <div className="relative z-10 flex flex-col h-full">
              {/* Icon Container */}
              <div className={`mb-6 w-14 h-14 flex items-center justify-center rounded-lg border group-hover:scale-110 transition-transform duration-300 ${isDark ? 'bg-white/5 border-white/5' : 'bg-gray-50 border-gray-100'}`}>
                {icon}
              </div>

              {/* Title */}
              <h3 className={`text-xl font-bold mb-3 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400 ${textColor}`}>
                {title}
              </h3>

              {/* Description */}
              <p className={`text-sm leading-relaxed mb-6 flex-grow ${subTextColor}`}>
                {/* Passing textColor to make bold text match theme */}
                <ParseDescription text={description} highlightColor={textColor} />
              </p>

              {/* Link (Optional) */}
              {link && (
                <a
                  href={link}
                  className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Services;