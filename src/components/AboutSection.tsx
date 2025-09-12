import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiDotnet } from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">
        <div className="transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-500 w-48 h-64 rounded-xl shadow-lg border-4 border-blue-200 dark:border-blue-700 bg-white dark:bg-gray-800 overflow-hidden">
          <img src={process.env.PUBLIC_URL + '/pic2.jpg'} alt="Profile" className="w-full h-full object-cover rounded-xl" />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-400">About Me</h2>
          <p className="mb-2">I'm a motivated final-year Computer Science student at FAST NUCES, Karachi, currently working as a Data & AI Intern at Bank Islami Pakistan Ltd. I'm skilled in data analytics, dashboard development, and machine learning.</p>
          <p className="mb-2">Passionate about Data Science, AI, and Analytics, I specialize in designing interactive dashboards using QlikView and conducting data cleaning and transformation for large datasets. I thrive in environments that value data-driven insights and continuous learning.</p>
          <p className="mb-4">I enjoy working with data visualization tools, machine learning algorithms, and have experience in both technical implementation and business intelligence solutions.</p>
          <div className="flex flex-wrap gap-4 items-center mb-4">
            <div className="text-blue-500 text-3xl" title="React">{React.createElement(FaReact as React.ComponentType<any>)}</div>
            <div className="text-green-600 text-3xl" title="Node.js">{React.createElement(FaNodeJs as React.ComponentType<any>)}</div>
            <div className="text-yellow-500 text-3xl" title="Python">{React.createElement(FaPython as React.ComponentType<any>)}</div>
            <div className="text-orange-500 text-3xl" title="Git">{React.createElement(FaGitAlt as React.ComponentType<any>)}</div>
            <div className="text-purple-700 text-3xl" title=".NET">{React.createElement(SiDotnet as React.ComponentType<any>)}</div>
            <div className="text-yellow-600 text-3xl" title="Power BI">{React.createElement(FaDatabase as React.ComponentType<any>)}</div>
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
