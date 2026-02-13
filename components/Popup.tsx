'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react'; // 'framer-motion' නම් ඒකම තියන්න
import { IoClose } from 'react-icons/io5'; // react-icons පාවිච්චි කරනවා නම් ලස්සනයි

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Popup({ isOpen, onClose, children }: PopupProps) {


  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // Background click to close
        >
          <motion.div
            className="
              relative w-full max-w-lg
              bg-white dark:bg-[#1a1a1a]
              border border-gray-200 dark:border-white/10
              rounded-2xl shadow-2xl overflow-hidden
            "
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()} // Prevent close on content click
          >
            {/* Blue Glow Decoration (Optional) */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] -z-10 rounded-full pointer-events-none"></div>

            {/* Close Button */}
            <button
              className="
                absolute top-4 right-4 p-2 rounded-full transition-colors
                text-gray-500 hover:bg-gray-100 hover:text-gray-700
                dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white
                z-10
              "
              onClick={onClose}
              aria-label="Close popup"
            >

              <IoClose size={20} />
            </button>

            {/* Content Container */}
            <div className="p-6 md:p-8">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}