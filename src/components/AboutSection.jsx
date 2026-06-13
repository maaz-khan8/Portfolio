import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiDotnet } from 'react-icons/si';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">
        <div className="transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-500 w-48 h-64 rounded-xl shadow-lg border-4 border-blue-200 dark:border-blue-700 bg-white dark:bg-gray-800 overflow-hidden">
          <img src={process.env.PUBLIC_URL + '/pic2.jpg'} alt="Profile" className="w-full h-full object-cover rounded-xl" />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-400">About Me</h2>
          <p className="mb-2">Computer Science undergraduate at FAST-NUCES, Karachi (CGPA: 3.29) with industry experience spanning data science, AI, full-stack development, and software quality assurance. Currently an SQA Intern at Think Digitally, conducting end-to-end manual and functional testing aligned with STLC.</p>
          <p className="mb-2">Previously a Data Science Intern at 10Pearls, where I built a multi-horizon AQI forecasting system with ensemble ML models, Hopsworks deployment, and SHAP explainability. Also served as a Data &amp; AI Intern at Bank Islami Pakistan Ltd., designing QlikView dashboards and handling large financial datasets in a regulated environment.</p>
          <p className="mb-4">I have built full-stack and AI-driven systems including TripVerse — a multi-role fintech/travel platform with Stripe payments, Gemini AI, and Socket.IO — and an Automated Contract Risk Analysis pipeline using multi-agent AI and RAG. I thrive on delivering production-grade solutions end-to-end.</p>
          <div className="flex flex-wrap gap-4 items-center mb-4">
            <div className="text-blue-500 text-3xl" title="React">{React.createElement(FaReact)}</div>
            <div className="text-green-600 text-3xl" title="Node.js">{React.createElement(FaNodeJs)}</div>
            <div className="text-yellow-500 text-3xl" title="Python">{React.createElement(FaPython)}</div>
            <div className="text-orange-500 text-3xl" title="Git">{React.createElement(FaGitAlt)}</div>
            <div className="text-purple-700 text-3xl" title=".NET">{React.createElement(SiDotnet)}</div>
          </div>
          <div className="text-gray-700 dark:text-gray-300 text-sm">
            <strong>Soft Skills:</strong> Teamwork, Communication, Problem-solving, Adaptability, Leadership
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

