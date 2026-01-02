'use client';

import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from 'motion/react';

function Header() {
  return (
    <section className="flex flex-col items-center justify-center w-11/12 h-screen max-w-3xl gap-4 mx-auto text-center border-black-400 font-ovo">
      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.9, type: 'spring', stiffness: 100 }}
      >
        <Image
          src={assets.my_img}
          alt="Profile"
          className="object-cover w-32 h-32 rounded-full shadow-lg"
        />
      </motion.div>

      {/* Greeting */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex items-center gap-2 mb-3 text-xl font-medium md:text-2xl"
      >
        Hi, I’m Shehan Chathuranga
        <Image src={assets.hand_icon} alt="Hand wave" className="w-6" />
      </motion.h3>

      {/* Name */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-4xl sm:text-6xl lg:text-[66px] font-bold"
      >
        Full-Stack Web Developer based in Sri Lanka
      </motion.h1>

      {/* Short Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="max-w-2xl mx-auto "
      >
        Full-Stack Web Developer from Sri Lanka, crafting responsive and modern web applications
        with React, Next.js, and Node.js. Passionate about clean code, seamless UX, and building
        scalable solutions.
      </motion.p>

      {/* Action Buttons */}
      <div className="flex flex-col items-center gap-4 mt-6 sm:flex-row">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="flex items-center gap-2 px-8 py-3 transition border border-gray-500 rounded-full sm:px-10 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="Arrow" className="w-5 sm:w-6" />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="./sample-resume.pdf"
          download="sample-resume.pdf"
          className="flex items-center gap-2 px-8 py-3 transition border border-gray-500 rounded-full sm:px-10 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white"
        >
          My Resume
          <Image src={assets.download_icon} alt="Download" className="w-5 sm:w-6" />
        </motion.a>
      </div>
    </section>
  );
}

export default Header;
