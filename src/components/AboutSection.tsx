import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaGitAlt } from 'react-icons/fa';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <img src="https://avatars.githubusercontent.com/u/placeholder" alt="Profile" className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-blue-200 dark:border-blue-700" />
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-400">About Me</h2>
          <p className="mb-2">I'm a motivated final-year Computer Science student at FAST NUCES, Karachi, skilled in C, C++, Python, React, Tailwind CSS, ASP.NET MVC and Web Form and SQL Server.</p>
          <p className="mb-2">Passionate about Web Development, AI, and Data Science, seeking an internship to apply technical skills to real-world projects. I thrive in environments that value innovation and continuous learning.</p>
          <p className="mb-4">I enjoy working with modern JavaScript frameworks and have experience across the full stack, from frontend development to backend systems.</p>
          <div className="flex flex-wrap gap-4 items-center mb-4">
            <div className="text-blue-500 text-3xl" title="React">{React.createElement(FaReact as React.ComponentType<any>)}</div>
            <div className="text-green-600 text-3xl" title="Node.js">{React.createElement(FaNodeJs as React.ComponentType<any>)}</div>
            <div className="text-yellow-500 text-3xl" title="Python">{React.createElement(FaPython as React.ComponentType<any>)}</div>
            <div className="text-orange-500 text-3xl" title="Git">{React.createElement(FaGitAlt as React.ComponentType<any>)}</div>
            {/* Add more icons as needed */}
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
