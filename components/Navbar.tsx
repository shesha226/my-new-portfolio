'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { FiSun, FiMoon } from 'react-icons/fi';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const sideMenuRef = useRef<HTMLUListElement>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openSideMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
  };

  const closeSideMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(100%)';
    }
  };

  const menuItems = [
    { title: 'Home', href: '#top' },
    { title: 'About', href: '#about' },
    { title: 'Services', href: '#services' },
    { title: 'My Work', href: '#work' },
  ];

  return (
    <>
      {/* Background */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]"></div>

      {/* Navbar */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-colors duration-500 ${
          isScrolled ? 'bg-white bg-opacity-50 backdrop-blur shadow-sm dark:bg-gray-900/50' : ''
        }`}
      >
        <a
          href="#top"
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 font-ovo ${
            isScrolled ? '' : 'bg-white bg-opacity-50 backdrop-blur shadow-sm dark:bg-gray-900/50'
          }`}
        >
          Portfolio
        </a>

        {/* Desktop menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScrolled ? '' : 'bg-white bg-opacity-50 backdrop-blur shadow-sm dark:bg-gray-900/50'
          }`}
        >
          {menuItems.map((item, index) => (
            <li key={index} className="relative">
              <a
                href={item.href}
                className="relative transition text-gray-800 dark:text-gray-200 hover:text-indigo-500
                   after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] 
                   after:bg-indigo-500 dark:after:bg-indigo-400 
                   after:transition-all after:duration-300 hover:after:w-full font-ovo"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="text-gray-700 transition dark:text-gray-200 hover:scale-110"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <FiSun size={22} className="text-yellow-400" />
              ) : (
                <FiMoon size={22} className="text-yellow-400" />
              )}
            </button>
          )}

          <a
            href="#contact"
            className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 font-ovo ${
              isScrolled ? '' : 'bg-white bg-opacity-50 backdrop-blur shadow-sm dark:bg-gray-900/50'
            }`}
          >
            Contact
            <Image src={assets.arrow_icon} alt="Arrow" className="w-3" />
          </a>

          {/* Hamburger */}
          <button className="block ml-3 md:hidden" onClick={openSideMenu}>
            <Image src={assets.menu_black} alt="Menu" className="w-6" />
          </button>
        </div>

        {/* Mobile menu */}
        <ul
          ref={sideMenuRef}
          className="fixed top-0 right-0 z-50 flex flex-col w-64 h-screen gap-4 px-10 py-20 transition-transform duration-500 translate-x-full bg-rose-50 dark:bg-gray-900"
        >
          <button className="absolute right-6 top-6" onClick={closeSideMenu}>
            <Image src={assets.close_black} alt="Close" className="w-5" />
          </button>

          {menuItems.map((item, index) => (
            <li key={index} className="relative">
              <a
                href={item.href}
                onClick={closeSideMenu}
                className="relative transition text-gray-800 dark:text-gray-200 hover:text-indigo-500
                   after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] 
                   after:bg-indigo-500 dark:after:bg-indigo-400 
                   after:transition-all after:duration-300 hover:after:w-full font-ovo"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
