import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const [showResumeInfo, setShowResumeInfo] = useState(false);

  // Use PUBLIC_URL for correct path in all environments
  const resumeUrl = `${process.env.PUBLIC_URL}/resume.pdf`;

  const handleResumeDownload = () => {
    // Download the PDF resume
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleResumeView = () => {
    // Open the PDF resume in a new tab
    window.open(resumeUrl, '_blank');
  };

  const handleResumeRequest = () => {
    setShowResumeInfo(true);
    // Auto-hide after 5 seconds
    setTimeout(() => setShowResumeInfo(false), 5000);
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 py-16 md:py-32 overflow-hidden"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/pic1.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-blue-50/80 to-blue-100/80 dark:from-gray-900/90 dark:via-gray-800/80 dark:to-gray-900/80 pointer-events-none z-0" />
      <div className="flex-1 flex flex-col gap-6 relative z-10 items-center text-center md:items-start md:text-left">
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-2">
          Hi, I'm Maaz Khan
        </motion.h1>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }} className="text-xl md:text-3xl font-semibold text-blue-700 dark:text-blue-400 mb-4">
          I transform ideas into interactive interfaces
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-md text-gray-600 dark:text-gray-400 mb-4">
          Based in Karachi, Pakistan | FAST-NUCES
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
          <a 
            href="#projects" 
            className="px-6 py-3 rounded bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl"
          >
            View Projects
          </a>
          <button 
            onClick={handleResumeView}
            className="px-6 py-3 rounded border-2 border-green-600 text-green-600 dark:text-green-400 font-semibold hover:bg-green-600 hover:text-white dark:hover:bg-green-600 dark:hover:text-white transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View Resume
          </button>
          <button 
            onClick={handleResumeDownload}
            className="px-6 py-3 rounded border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Download as PDF
          </button>
        </div>
        {/* Resume Info Popup */}
        {showResumeInfo && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
          >
            <p className="text-green-800 dark:text-green-200 text-sm">
              <strong>To request a PDF resume:</strong><br/>
              Please use the contact form below or email me directly at:<br/>
              <span className="font-mono">maaz.khan20307@gmail.com</span><br/>
              Subject: "Resume Request"
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroSection; 