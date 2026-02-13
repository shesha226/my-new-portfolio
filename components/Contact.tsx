'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';
import { FiSend, FiLoader, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

function Contact() {
  const { theme } = useTheme();
  // Hydration fix (Optional but recommended to prevent mismatch errors)
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Form state
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);


  const isDark = mounted && theme === 'dark';

  const textColor = isDark ? 'text-white' : 'text-gray-900';
  const subTextColor = isDark ? 'text-gray-400' : 'text-gray-600';
  const boxBg = isDark ? 'bg-[#111]' : 'bg-white';
  const inputBg = isDark ? 'bg-[#1a1a1a]' : 'bg-gray-50';
  const inputBorder = isDark ? 'border-gray-700' : 'border-gray-300';
  const inputText = isDark ? 'text-white' : 'text-gray-900';


  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(event.currentTarget);
    // 💡 IMPORTANT: Replace with your actual Web3Forms Access Key
    formData.append("access_key", "69d65b56-2f08-43aa-a6cc-b79333e36027");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setResult("Success: Message Sent!");
        (event.target as HTMLFormElement).reset();
      } else {
        setResult("Error: " + data.message);
      }
    } catch (error) {
      setResult("Error: Something went wrong!");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setResult(""), 5000);
    }
  };

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full max-w-[1200px] mx-auto px-6 py-20 scroll-mt-20 font-ovo overflow-hidden relative"
    >
      {/* Blue Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[100px] -z-10 rounded-full pointer-events-none"></div>

      {/* Header */}
      <div className="flex flex-col items-center mb-12 text-center">
        <motion.span
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className={`mb-3 text-sm font-medium tracking-wider uppercase px-4 py-1.5 rounded-full ${isDark ? 'text-blue-400 bg-blue-900/30' : 'text-blue-600 bg-blue-50'}`}
        >
          Connect with Me
        </motion.span>

        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className={`text-4xl md:text-5xl font-bold mb-4 ${textColor}`}
        >
          Get in Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={`text-center max-w-2xl text-lg ${subTextColor}`}
        >
          I'm currently available for freelance work or full-time opportunities.
          Send me a message and let's discuss your project!
        </motion.p>
      </div>

      {/* Form Container */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl mx-auto relative z-10"
      >

        <form onSubmit={onSubmit} className={`p-6 sm:p-10 rounded-3xl shadow-lg border ${boxBg} ${inputBorder}`}>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col gap-2">
              <label className={`text-sm font-semibold ml-1 ${textColor}`}>Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                required
                className={`w-full p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all ${inputBg} ${inputBorder} ${inputText}`}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className={`text-sm font-semibold ml-1 ${textColor}`}>Email</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                required
                className={`w-full p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all ${inputBg} ${inputBorder} ${inputText}`}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-8">
            <label className={`text-sm font-semibold ml-1 ${textColor}`}>Message</label>
            <textarea
              name="message"
              rows={6}
              placeholder="How can I help you?"
              required
              className={`w-full p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none ${inputBg} ${inputBorder} ${inputText}`}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full group sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-xl font-medium transition-all transform hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed mx-auto shadow-lg"
          >
            {isSubmitting ? (
              <>
                Sending <FiLoader className="animate-spin" />
              </>
            ) : (
              <>
                Send Message <FiSend className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

          {/* Status Message */}
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-6 text-center p-3 rounded-xl flex items-center justify-center gap-2 text-sm font-medium ${result.includes("Success")
                ? "bg-green-100 text-green-700 border border-green-200"
                : "bg-red-100 text-red-700 border border-red-200"
                }`}
            >
              {result.includes("Success") ? <FiCheckCircle size={18} /> : <FiAlertCircle size={18} />}
              {result}
            </motion.div>
          )}

        </form>
      </motion.div>
    </motion.div>
  );
}

export default Contact;