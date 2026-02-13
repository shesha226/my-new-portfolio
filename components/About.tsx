'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { assets, infoList } from '@/assets/assets';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';
import {
  SiReact, SiNodedotjs, SiNextdotjs, SiMongodb, SiMysql,
  SiExpress, SiJavascript, SiTypescript, SiHtml5, SiPhp,
  SiLaravel, SiDocker, SiGit, SiCircleci,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

function About() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // 1. Hydration Fix (අනිවාර්යයෙන්ම දාන්න)
  useEffect(() => {
    setMounted(true);
  }, []);

  // 2. Dynamic Colors Logic (Contact එකේ වගේමයි)
  const isDark = mounted && theme === 'dark';

  // --- Colors Variables ---
  const textColor = isDark ? 'text-white' : 'text-gray-900';
  const subTextColor = isDark ? 'text-gray-400' : 'text-gray-600';
  const cardBg = isDark ? 'bg-[#1a1a1a]' : 'bg-white';
  const cardBorder = isDark ? 'border-white/10' : 'border-gray-200';
  const pillBg = isDark ? 'bg-blue-900/30' : 'bg-blue-50';
  const pillText = isDark ? 'text-blue-400' : 'text-blue-600';
  const iconCommonColor = isDark ? '#fff' : '#000'; // Next.js, Express වගේ අයිකන වලට

  // 3. Tech Stack Array (Inside component to use 'isDark')
  const techStack = [
    { name: 'React', icon: <SiReact size={28} color="#61DBFB" /> },
    { name: 'Node.js', icon: <SiNodedotjs size={28} color="#68A063" /> },
    // Next.js එක Theme එක අනුව පාට මාරු වෙයි
    { name: 'Next.js', icon: <SiNextdotjs size={28} color={iconCommonColor} /> },
    { name: 'MongoDB', icon: <SiMongodb size={28} color="#47A248" /> },
    { name: 'MySQL', icon: <SiMysql size={28} color="#00758F" /> },
    // Express එක Theme එක අනුව පාට මාරු වෙයි
    { name: 'Express', icon: <SiExpress size={28} color={iconCommonColor} /> },
    { name: 'HTML5', icon: <SiHtml5 size={28} color="#E34F26" /> },
    { name: 'JavaScript', icon: <SiJavascript size={28} color="#F7DF1E" /> },
    { name: 'TypeScript', icon: <SiTypescript size={28} color="#3178C6" /> },
    { name: 'Java', icon: <FaJava size={28} color="#007396" /> },
    { name: 'PHP', icon: <SiPhp size={28} color="#777BB4" /> },
    { name: 'Laravel', icon: <SiLaravel size={28} color="#FF2D20" /> },
    { name: 'Docker', icon: <SiDocker size={28} color="#0db7ed" /> },
    { name: 'Git', icon: <SiGit size={28} color="#F05032" /> },
    { name: 'CI/CD', icon: <SiCircleci size={28} color={isDark ? '#ccc' : '#343434'} /> },
  ];

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full max-w-[1200px] px-6 py-20 mx-auto scroll-mt-20 font-ovo overflow-hidden"
      id="about"
    >
      {/* Background Glow Effect */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] -z-10 rounded-full pointer-events-none"></div>

      {/* Section Title */}
      <div className="flex flex-col items-center mb-16 text-center">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`mb-3 text-sm font-medium tracking-wider uppercase px-4 py-1.5 rounded-full ${pillBg} ${pillText}`}
        >
          Introduction
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={`text-4xl md:text-5xl font-bold ${textColor}`}
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className={`max-w-2xl mx-auto mt-5 text-lg leading-relaxed ${subTextColor}`}
        >
          I am a Full-Stack Web Developer from Sri Lanka, passionate about building modern,
          responsive, and user-friendly web applications. I work with React, Next.js, Node.js,
          Laravel, Spring Boot, PHP, and databases such as MySQL and MongoDB.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-start w-full gap-16 lg:flex-row"
      >
        {/* Profile Image (Left Side) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-sm mx-auto lg:w-[35%] lg:mx-0 relative group"
        >
          <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-6 opacity-20 group-hover:rotate-3 transition-transform duration-500"></div>
          <Image
            src={assets.profile_img}
            alt="user"
            className={`relative w-full rounded-3xl shadow-xl z-10 border ${isDark ? 'border-white/10' : 'border-gray-100'}`}
          />
        </motion.div>

        {/* Info and Tools (Right Side) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex-1 w-full"
        >
          {/* Info Cards List */}
          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                key={index}
                whileHover={{ y: -5 }}
                className={`
                  p-6 rounded-2xl cursor-pointer transition-all duration-300
                  border hover:shadow-xl hover:border-blue-500/30 hover:shadow-blue-500/5
                  ${cardBg} ${cardBorder}
                `}
              >
                <div className={`w-10 h-10 flex items-center justify-center rounded-full mb-4 ${isDark ? 'bg-white/5' : 'bg-gray-50'}`}>
                  <Image
                    // Theme එක Dark නම් iconDark පාවිච්චි කරන්න, නැත්නම් icon
                    src={isDark && iconDark ? iconDark : icon}
                    alt={title}
                    className="w-5"
                  />
                </div>
                <h3 className={`mb-2 font-bold ${textColor}`}>{title}</h3>
                <p className={`text-sm ${subTextColor}`}>{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools & Tech Stack */}
          <motion.div>
            <h4 className={`text-lg font-semibold mb-6 flex items-center gap-2 ${textColor}`}>
              Tools & Tech Stack
              <span className={`h-px flex-1 ml-2 ${isDark ? 'bg-white/10' : 'bg-gray-200'}`}></span>
            </h4>

            <ul className="flex flex-wrap gap-4">
              {techStack.map((tech, index) => (
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  key={index}
                  className={`
                    flex items-center justify-center w-14 h-14 
                    border rounded-xl shadow-sm cursor-pointer 
                    hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-200 dark:hover:border-blue-800
                    transition-all duration-300
                    ${cardBg} ${cardBorder}
                  `}
                  title={tech.name}
                >
                  {tech.icon}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default About;