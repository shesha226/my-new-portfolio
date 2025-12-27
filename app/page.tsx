'use client';

import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <main>
      <div>
        <Navbar />
        <Header />
        <About />
        <Services />
        <Work />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
