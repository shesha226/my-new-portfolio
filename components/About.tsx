import React from 'react';
import Image from 'next/image';
import { assets, infoList } from '@/assets/assets';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';
import {
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiHtml5,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
interface InfoItem {
  icon: string;
  iconDark?: string;
  title: string;
  description: string;
}

function About() {
  const { theme } = useTheme();
  const techStack = [
    { name: 'React', icon: <SiReact size={30} color="#61DBFB" /> },
    { name: 'Node.js', icon: <SiNodedotjs size={30} color="#68A063" /> },
    { name: 'Next.js', icon: <SiNextdotjs size={30} color={theme === 'dark' ? '#fff' : '#000'} /> },
    { name: 'MongoDB', icon: <SiMongodb size={30} color="#47A248" /> },
    { name: 'MySQL', icon: <SiMysql size={30} color="#00758F" /> },
    { name: 'Express', icon: <SiExpress size={30} color={theme === 'dark' ? '#fff' : '#000'} /> },
    { name: 'HTML5', icon: <SiHtml5 size={30} color="#E34F26" /> },
    { name: 'JavaScript', icon: <SiJavascript size={30} color="#F7DF1E" /> },
    { name: 'TypeScript', icon: <SiTypescript size={30} color="#3178C6" /> },
    { name: 'Java', icon: <FaJava size={30} color="#007396" /> },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center w-full max-w-5xl px-6 py-10 mx-auto sm:px-12 lg:px-16 scroll-mt-20 font-ovo"
      id="about"
    >
      {/* Section Title */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-2 text-lg text-center"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-5xl text-center"
      >
        About Me
      </motion.h2>

      {/* Overall description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="max-w-2xl mx-auto mt-5 mb-12 text-center "
      >
        I am a Full-Stack Web Developer from Sri Lanka, passionate about building modern,
        responsive, and user-friendly web applications. I work with technologies like React,
        Next.js, Node.js, and databases like MongoDB and MySQL. I enjoy solving problems and
        creating high-quality solutions. I also work with HTML, CSS, JavaScript, TypeScript, and
        Java.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center w-full gap-20 my-20 lg:flex-row"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image src={assets.profile_img} alt="user" className="w-full rounded-3xl" />
        </motion.div>

        {/* Info and Tools */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          {/* Info List */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid max-w-2xl grid-cols-1 gap-6 mb-10 sm:grid-cols-3"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05 }}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer
               hover:bg-purple-50 dark:hover:bg-gray-700
               hover:-translate-y-1 duration-500"
              >
                <a href="#work" className="block h-full">
                  <Image
                    src={theme === 'dark' && iconDark ? iconDark : icon}
                    alt={title}
                    className="mt-3 w-7"
                  />
                  <h3 className="my-4 font-semibold">{title}</h3>
                  <p className="text-sm">{description}</p>
                </a>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools / Tech Stack */}
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.3, delay: 0.5 }}
            className="my-6"
          >
            Tools & Tech Stack
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="flex flex-wrap items-center gap-3 sm:gap-5"
          >
            {techStack.map((tech, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                key={index}
                className="flex flex-col items-center justify-center w-16 h-16 duration-500 border border-gray-400 rounded-full cursor-pointer hover:bg-purple-100 hover:-translate-y-1"
              >
                {tech.icon}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default About;
