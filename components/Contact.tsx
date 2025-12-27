'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

function Contact() {
  const { theme } = useTheme();

  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  // Dynamic text colors based on current theme
  const textColor = theme === 'dark' ? 'text-gray-200' : 'text-gray-900';
  const subTextColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';
  const inputBg = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
  const inputText = theme === 'dark' ? 'text-gray-200' : 'text-gray-900';
  const inputBorder = theme === 'dark' ? 'border-gray-600' : 'border-gray-400';

  // Form submit handler without API
  function send(e: React.FormEvent) {
    e.preventDefault();
    // ❌ No API, just show message
    setStatus('Form submission is disabled.');
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20
                 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-cover bg-center
                 bg-[length:90%_auto] font-ovo"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className={`text-center text-lg mb-2 ${subTextColor}`}
      >
        Connect with Me
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className={`text-center mb-2 text-5xl ${textColor}`}
      >
        Get In touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className={`text-center max-w-2xl mx-auto mt-5 mb-12 ${subTextColor}`}
      >
        If you are interested in hiring me, please submit your details or contact me via email.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="max-w-2xl mx-auto"
        onSubmit={send} // ✅ use onSubmit, no API
      >
        <div className="grid grid-cols-1 gap-6 mt-10 mb-8 md:grid-cols-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
            required
            className={`flex-1 p-3 outline-none border-[0.5px] ${inputBorder} rounded-md ${inputBg} ${inputText}`}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            required
            className={`flex-1 p-3 outline-none border-[0.5px] ${inputBorder} rounded-md ${inputBg} ${inputText}`}
          />
        </div>
        <textarea
          rows={6}
          placeholder="Enter Your Message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`w-full p-4 outline-none border-[0.5px] ${inputBorder} rounded-md ${inputBg} ${inputText} mb-6`}
        />
        <button
          type="submit"
          className="flex items-center justify-between gap-2 px-8 py-3 mx-auto text-white duration-500 rounded-full w-max bg-black/80 hover:bg-black"
        >
          Submit Now
          <Image src={assets.right_arrow} alt="Arrow Right" className="w-4" />
        </button>
        <p className={`${subTextColor} mt-4`}>{status}</p>
      </motion.form>
    </motion.div>
  );
}

export default Contact;
