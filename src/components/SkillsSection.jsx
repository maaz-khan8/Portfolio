import React from 'react';
import { motion } from 'framer-motion';
import {
  FaJs, FaPython, FaReact, FaGitAlt, FaDatabase,
  FaLinux, FaChartLine, FaNodeJs, FaFileExcel, FaCode,
  FaRobot, FaBrain,
} from 'react-icons/fa';
import {
  SiCplusplus, SiC, SiDotnet, SiTailwindcss, SiSelenium,
  SiPandas, SiNumpy, SiScikitlearn, SiMysql, SiNestjs,
  SiNextdotjs, SiPrisma, SiSocketdotio, SiJira, SiPostman,
  SiPostgresql,
} from 'react-icons/si';
import styles from './SkillsSection.module.css';

const CATEGORIES = [
  {
    id: 'lang',
    label: '01. Languages',
    skills: [
      { name: 'C',          Icon: SiC,          color: '#3b82f6' },
      { name: 'C++',        Icon: SiCplusplus,  color: '#60a5fa' },
      { name: 'Python',     Icon: FaPython,     color: '#facc15' },
      { name: 'JavaScript', Icon: FaJs,         color: '#fbbf24' },
      { name: 'SQL',        Icon: FaDatabase,   color: '#a78bfa' },
    ],
  },
  {
    id: 'ds',
    label: '02. Data Science',
    skills: [
      { name: 'Pandas',      Icon: SiPandas,      color: '#a855f7' },
      { name: 'NumPy',       Icon: SiNumpy,       color: '#60a5fa' },
      { name: 'Scikit-learn',Icon: SiScikitlearn, color: '#f97316' },
      { name: 'Matplotlib',  Icon: FaChartLine,   color: '#4ade80' },
      { name: 'QlikView',    Icon: FaChartLine,   color: '#22d3ee' },
      { name: 'Streamlit',   Icon: FaCode,        color: '#f87171' },
      { name: 'SHAP',        Icon: FaChartLine,   color: '#fb923c' },
      { name: 'Hopsworks',   Icon: FaDatabase,    color: '#c084fc' },
    ],
  },
  {
    id: 'ai',
    label: '03. Agentic AI',
    skills: [
      { name: 'CrewAI',    Icon: FaRobot,    color: '#a855f7' },
      { name: 'Gemini AI', Icon: FaBrain,    color: '#60a5fa' },
      { name: 'Pinecone',  Icon: FaDatabase, color: '#4ade80' },
      { name: 'RAG',       Icon: FaCode,     color: '#22d3ee' },
    ],
  },
  {
    id: 'db',
    label: '04. Databases',
    skills: [
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#60a5fa' },
      { name: 'SQL Server', Icon: FaDatabase,   color: '#f87171' },
      { name: 'MySQL',      Icon: SiMysql,      color: '#f97316' },
    ],
  },
  {
    id: 'web',
    label: '05. Frameworks & Web',
    skills: [
      { name: 'React.js',   Icon: FaReact,       color: '#61dafb' },
      { name: 'NestJS',     Icon: SiNestjs,      color: '#e0234e' },
      { name: 'Next.js',    Icon: SiNextdotjs,   color: 'var(--text-primary)' },
      { name: 'Node.js',    Icon: FaNodeJs,      color: '#4ade80' },
      { name: 'ASP.NET',    Icon: SiDotnet,      color: '#a855f7' },
      { name: 'Prisma ORM', Icon: SiPrisma,      color: '#0ea5e9' },
      { name: 'Socket.IO',  Icon: SiSocketdotio, color: '#94a3b8' },
      { name: 'Tailwind',   Icon: SiTailwindcss, color: '#22d3ee' },
    ],
  },
  {
    id: 'qa',
    label: '06. Testing & QA',
    skills: [
      { name: 'Manual Testing',  Icon: FaCode,      color: '#60a5fa' },
      { name: 'Selenium',        Icon: SiSelenium,  color: '#4ade80' },
      { name: 'Playwright',      Icon: FaCode,      color: '#22d3ee' },
      { name: 'Test Case Design',Icon: FaDatabase,  color: '#a855f7' },
      { name: 'Jira',            Icon: SiJira,      color: '#3b82f6' },
      { name: 'Postman',         Icon: SiPostman,   color: '#f97316' },
    ],
  },
  {
    id: 'tools',
    label: '07. Tools',
    skills: [
      { name: 'Git / GitHub', Icon: FaGitAlt,    color: '#f97316' },
      { name: 'Linux',        Icon: FaLinux,     color: '#facc15' },
      { name: 'VS Code',      Icon: FaCode,      color: '#60a5fa' },
      { name: 'MS Excel',     Icon: FaFileExcel, color: '#4ade80' },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className={`${styles.skills} section-padding dot-grid`}>
    <div className="container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="label">04. skills</span>
        Technical Skills
      </motion.h2>

      <div className={styles.grid}>
        {CATEGORIES.map((cat, ci) => (
          <motion.div
            key={cat.id}
            className={styles.categoryCard}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: ci * 0.06 }}
          >
            <h3 className={styles.catLabel}>{cat.label}</h3>
            <div className={styles.pillGrid}>
              {cat.skills.map((skill, si) => (
                <motion.div
                  key={skill.name}
                  className={styles.pill}
                  whileHover={{ y: -4, scale: 1.04 }}
                  transition={{ duration: 0.15 }}
                >
                  <skill.Icon
                    style={{ color: skill.color, fontSize: '1rem', flexShrink: 0 }}
                  />
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
