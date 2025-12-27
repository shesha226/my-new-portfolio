import { assets, workData } from '@/assets/assets';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

function Work() {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20 font-ovo"
    >
      {/* Heading */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-2 text-lg text-center"
      >
        My Portfolio
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mb-2 text-5xl text-center"
      >
        My Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="max-w-2xl mx-auto mt-5 mb-12 text-center"
      >
        I have built a variety of projects including mobile POS systems, hotel management software,
        display hub POS, my personal portfolio, and a railway website using React, Node.js, Next.js,
        Spring Boot, MongoDB, and MySQL.
      </motion.p>

      {/* Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {workData.slice(0, visibleCount).map(({ title, description, bgImage }, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative bg-center bg-no-repeat bg-cover cursor-pointer rounded-2xl aspect-square group "
          >
            <Image src={bgImage} alt={title} fill className="object-cover rounded-2xl" />
            {/* Overlay card */}
            <div className="absolute flex items-center justify-between w-10/12 px-5 py-3 text-black duration-500 -translate-x-1/2 bg-white rounded-md bottom-5 left-1/2 group-hover:bottom-7">
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm">{description}</p>
              </div>

              {/* Icon */}
              <div
                className="border rounded-full w-9 aspect-square
                             flex items-center justify-center
                             shadow-[2px_2px_0_#000]
                             group-hover:bg-lime-300 transition-all duration-500"
              >
                <Image src={assets.send_icon} alt="Send" width={20} height={20} />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Show More Button */}
      {visibleCount < workData.length && (
        <motion.button
          onClick={handleShowMore}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="flex items-center justify-center gap-2 px-10 py-3 mx-auto my-20 duration-500 border rounded-full hover:bg-gray-100"
        >
          Show More
          <Image src={assets.right_arrow_bold} alt="arrow" className="w-4" />
        </motion.button>
      )}
    </motion.div>
  );
}

export default Work;
