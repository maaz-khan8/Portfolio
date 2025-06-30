import React from 'react';
import { FaJs, FaPython, FaReact, FaGitAlt, FaDatabase, FaLinux } from 'react-icons/fa';
import { SiCplusplus, SiC, SiDotnet, SiTailwindcss, SiSelenium } from 'react-icons/si';

const skills = [
  // Programming Languages
  { name: 'C', icon: React.createElement(SiC as React.ComponentType<any>, { className: "text-blue-600" }), level: 95, category: 'Languages' },
  { name: 'C++', icon: React.createElement(SiCplusplus as React.ComponentType<any>, { className: "text-blue-700" }), level: 90, category: 'Languages' },
  { name: 'Python', icon: React.createElement(FaPython as React.ComponentType<any>, { className: "text-blue-400" }), level: 85, category: 'Languages' },
  { name: 'JavaScript', icon: React.createElement(FaJs as React.ComponentType<any>, { className: "text-yellow-400" }), level: 75, category: 'Languages' },
  
  // Frameworks
  { name: 'React', icon: React.createElement(FaReact as React.ComponentType<any>, { className: "text-blue-500" }), level: 75, category: 'Frameworks' },
  { name: '.NET MVC', icon: React.createElement(SiDotnet as React.ComponentType<any>, { className: "text-purple-600" }), level: 75, category: 'Frameworks' },
  { name: '.NET Webform', icon: React.createElement(SiDotnet as React.ComponentType<any>, { className: "text-purple-700" }), level: 75, category: 'Frameworks' },
  { name: 'Tailwind CSS', icon: React.createElement(SiTailwindcss as React.ComponentType<any>, { className: "text-cyan-500" }), level: 88, category: 'Frameworks' },
  
  // Databases
  { name: 'SQL Server', icon: React.createElement(FaDatabase as React.ComponentType<any>, { className: "text-red-600" }), level: 87, category: 'Databases' },
  
  // Tools
  { name: 'Git', icon: React.createElement(FaGitAlt as React.ComponentType<any>, { className: "text-orange-500" }), level: 90, category: 'Tools' },
  { name: 'Linux', icon: React.createElement(FaLinux as React.ComponentType<any>, { className: "text-yellow-600" }), level: 75, category: 'Tools' },
  { name: 'Power BI', icon: React.createElement(FaDatabase as React.ComponentType<any>, { className: "text-yellow-500" }), level: 70, category: 'Tools' },
  { name: 'Selenium', icon: React.createElement(SiSelenium as React.ComponentType<any>, { className: "text-green-600" }), level: 80, category: 'Tools' },
];

const categories = ['Languages', 'Frameworks', 'Databases', 'Tools'];

const getLevelText = (level: number) => {
  if (level >= 90) return 'Expert';
  if (level >= 80) return 'Advanced';
  if (level >= 70) return 'Intermediate';
  return 'Beginner';
};

const getLevelColor = (level: number) => {
  if (level >= 90) return 'bg-green-500';
  if (level >= 80) return 'bg-blue-500';
  if (level >= 70) return 'bg-yellow-500';
  return 'bg-gray-500';
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-blue-700 dark:text-blue-400 text-center">Technical Skills</h2>
        
        <div className="grid gap-8 lg:grid-cols-2">
          {categories.map((category) => (
            <div key={category} className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 border border-transparent hover:border-blue-200 dark:hover:border-blue-800">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {category}
              </h3>
              <div className="space-y-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name} className="group/skill">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl group-hover/skill:scale-110 transition-transform duration-200">
                            {skill.icon}
                          </div>
                          <span className="font-medium text-gray-700 dark:text-gray-300 group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400 transition-colors duration-200">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {getLevelText(skill.level)}
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div 
                          className={`h-2.5 rounded-full transition-all duration-1000 ease-out ${getLevelColor(skill.level)}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 