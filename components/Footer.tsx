'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { useTheme } from 'next-themes';

function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // 1. Hydration Fix
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  // --- Dynamic Colors ---
  const borderColor = isDark ? 'border-white/10' : 'border-gray-200';
  const textColor = isDark ? 'text-gray-400' : 'text-gray-600';
  const iconHoverBg = isDark ? 'hover:bg-blue-900/20' : 'hover:bg-blue-50';

  const links = [
    {
      icon: <FaFacebookF size={20} />,
      url: 'https://facebook.com/yourprofile',
      color: '#1877F2', // Facebook Blue
    },
    {
      icon: <FaGithub size={20} />,
      url: 'https://github.com/shesha226',
      color: isDark ? '#fff' : '#181717', // Adaptive Black/White
    },
    {
      icon: <FaLinkedinIn size={20} />,
      url: 'https://linkedin.com/in/yourprofile',
      color: '#0A66C2', // LinkedIn Blue
    },
  ];

  return (
    <div className="mt-20 font-ovo">
      <div className="text-center">

        {/* Logo Section */}
        <div className="mb-6">
          <h2 className={`text-3xl font-bold tracking-wide ${textColor}`}>
            Portfolio<span className="text-blue-600">.</span>
          </h2>
        </div>

        {/* Email Section */}
        <div className="flex items-center justify-center gap-2 mx-auto w-max mb-10">
          <a
            href="mailto:Chathurangashehan143@gmail.com"
            className={`flex items-center gap-2 px-6 py-2 rounded-full border transition-all duration-300 ${borderColor} ${textColor} hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200`}
          >
            {/* Using React Icon for cleaner look, or stick to assets.mail_icon */}
            <FaEnvelope className="text-blue-500" />
            <span className="text-sm font-medium">Chathurangashehan143@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Bottom Section with Divider */}
      <div className={`text-center sm:flex items-center justify-between border-t mx-[10%] py-8 ${borderColor}`}>

        {/* Copyright */}
        <p className={`text-sm ${textColor}`}>
          © 2025 Shehan Chathuranga. All rights reserved.
        </p>

        {/* Social Icons */}
        <ul className="flex items-center justify-center gap-6 mt-4 sm:mt-0">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                p-2.5 rounded-full transition-all duration-300 border border-transparent
                hover:scale-110 ${iconHoverBg} hover:border-gray-200 dark:hover:border-white/10
              `}
              style={{ color: link.color }}
              aria-label="Social Link"
            >
              {link.icon}
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Footer;