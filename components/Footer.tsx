import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { useTheme } from 'next-themes';

function Footer() {
  const { theme } = useTheme();
  const links = [
    {
      icon: <FaFacebookF size={24} color="#1877F2" />,
      url: 'https://facebook.com/yourprofile',
    },
    {
      icon: <FaGithub size={24} color={theme === 'dark' ? '#fff' : '#181717'} />,
      url: 'https://github.com/shesha226',
    },
    {
      icon: <FaLinkedinIn size={24} color="#0A66C2" />,
      url: 'https://linkedin.com/in/yourprofile',
    },
  ];

  return (
    <div className="mt-20 font-ovo">
      <div className="text-center">
        <div className="flex items-center gap-2 mx-auto w-max">
          <p className="flex items-center text-sm ">
            <Image src={assets.mail_icon} alt="logo" className="w-6" />
            <span className="ml-2">Chathurangashehan143@gmail.com</span>
          </p>
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p> 2025 All rights reserved</p>
        <ul className="flex items-center justify-center gap-10 mt-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110"
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
