'use client';

import { assets } from '@/assets/assets';
import React from 'react';
import { motion } from 'motion/react';
import { SiReact, SiNodedotjs, SiFigma, SiJenkins } from 'react-icons/si';

// Service Data with icons as React components
const serviceData = [
  {
    icon: <SiNodedotjs size={40} color="#68A063" />,
    title: 'Backend Development',
    description: 'Building robust server-side applications using Node.js, Express, and databases.',
    link: '',
  },
  {
    icon: <SiReact size={40} color="#61DBFB" />,
    title: 'Frontend Development',
    description: 'Creating responsive and dynamic user interfaces with React and Next.js.',
    link: '',
  },
  {
    icon: <SiFigma size={40} color="#F24E1E" />,
    title: 'UI/UX Design',
    description: 'Designing user-friendly interfaces and smooth user experiences.',
    link: '',
  },
  {
    icon: <SiJenkins size={40} color="#D24939" />,
    title: 'CI/CD',
    description:
      'Implementing continuous integration and delivery pipelines for faster deployments.',
    link: '',
  },
];

function Services() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="flex flex-col items-center justify-center w-full max-w-5xl px-6 py-10 mx-auto sm:px-12 lg:px-16 scroll-mt-20 font-ovo"
    >
      {/* Heading */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mb-2 text-lg text-center"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-4xl font-bold text-center sm:text-5xl"
      >
        My Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="max-w-2xl mx-auto mt-5 mb-12 text-center "
      >
        I provide full-stack web development services including frontend, backend, UI/UX design, and
        CI/CD pipelines to build scalable and modern applications.
      </motion.p>

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="px-8 py-12 text-center transition-transform duration-500 border border-gray-300 cursor-pointer rounded-xl hover:shadow-lg hover:-translate-y-1"
          >
            <div className="mx-auto">{icon}</div>
            <h3 className="my-4 text-lg font-semibold">{title}</h3>
            <p className="text-sm">{description}</p>
            {link && (
              <a
                href={link}
                className="flex items-center justify-center gap-2 mt-5 text-sm text-indigo-600 hover:underline"
              >
                Read More
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Services;
