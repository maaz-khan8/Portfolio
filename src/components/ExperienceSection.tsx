import React from 'react';

const experiences = [
  {
    title: 'Private Tutor',
    org: 'Self-Employed',
    duration: '2022 - Present',
    desc: 'Tutored O-Level students in Mathematics, covering algebra, geometry, and mathematical fundamentals.'
  },
  {
    title: 'Co-Head of Fraction Ahead',
    org: 'Rubik 5.0 - Credo College',
    duration: '2023',
    desc: 'Led the design and development of challenging math questions for the "Fraction Ahead" module in Rubik 5.0, a college-level competitive event.'
  },
];

const education = [
  {
    title: 'Bachelor of Science in Computer Science',
    org: 'FAST-NUCES, Karachi',
    duration: 'Expected Graduation: June 2026',
    desc: 'CGPA: 3.25 | Focused on software engineering, web development, and computer science fundamentals.'
  },
  {
    title: 'A-levels',
    org: 'Credo College',
    duration: '2020 - 2022',
    desc: 'Grades: A, A, B | Completed advanced level studies with strong academic performance.'
  },
  {
    title: 'O-levels',
    org: 'Karachi Public High School',
    duration: '2019 - 2020',
    desc: 'Grades: 5 A*, 2 A, 2 B | Excellent foundation in core subjects with outstanding academic achievements.'
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-blue-700 dark:text-blue-400">Experience & Education</h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Experience</h3>
          <div className="border-l-4 border-blue-200 dark:border-blue-700 pl-8">
            {experiences.map((item, idx) => (
              <div key={idx} className="mb-10 relative">
                <div className="absolute -left-5 top-1 w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full border-2 border-white dark:border-gray-900"></div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                <div className="text-blue-700 dark:text-blue-400 font-medium">{item.org}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.duration}</div>
                <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Education</h3>
          <div className="border-l-4 border-green-200 dark:border-green-700 pl-8">
            {education.map((item, idx) => (
              <div key={idx} className="mb-10 relative">
                <div className="absolute -left-5 top-1 w-3 h-3 bg-green-600 dark:bg-green-400 rounded-full border-2 border-white dark:border-gray-900"></div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                <div className="text-green-700 dark:text-green-400 font-medium">{item.org}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.duration}</div>
                <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 
