import React from 'react';
import { motion } from 'framer-motion';
import styles from './ExperienceSection.module.css';

const EXPERIENCE = [
  {
    title: 'SQA Intern',
    org: 'Think Digitally',
    location: 'Karachi, Pakistan',
    duration: 'March 2026 – June 2026',
    current: true,
    bullets: [
      'Conducted end-to-end manual and functional testing of a law application covering test case design, execution, defect reporting, and bug tracking aligned with STLC.',
    ],
  },
  {
    title: 'Data Science Intern',
    org: '10Pearls',
    location: 'Karachi, Pakistan',
    duration: 'September 2025 – November 2025',
    current: false,
    bullets: [
      'Built a multi-horizon AQI forecasting system (Random Forest, Ridge Regression) deployed via Hopsworks with automated retraining pipelines, SHAP explainability, and a real-time Streamlit alerting dashboard.',
      'Engineered feature pipelines and managed model versioning on Hopsworks Feature Store ensuring reproducibility and scalable deployment.',
    ],
  },
  {
    title: 'Data & AI Intern',
    org: 'Bank Islami Pakistan Ltd.',
    location: 'Karachi, Pakistan',
    duration: 'July 2025 – August 2025',
    current: false,
    bullets: [
      'Designed interactive QlikView dashboards to visualize key financial metrics, enabling data-driven executive decision-making.',
      'Performed data cleaning, transformation, and validation across large financial datasets in a regulated banking environment.',
    ],
  },
  {
    title: 'Private Tutor',
    org: 'Self-Employed',
    location: '',
    duration: '2022 – Present',
    current: false,
    bullets: [
      'Tutored O-Level students in Mathematics, covering algebra, geometry, and mathematical fundamentals.',
    ],
  },
];

const EDUCATION = [
  {
    title: 'BS Computer Science',
    org: 'FAST-NUCES, Karachi',
    duration: 'Expected June 2026',
    desc: 'CGPA: 3.29 / 4.00 · Focused on software engineering, data science, and computer science fundamentals.',
  },
  {
    title: 'A-Levels',
    org: 'Credo College',
    duration: '2020 – 2022',
    desc: 'Grades: A, A, B',
  },
  {
    title: 'O-Levels',
    org: 'Karachi Public High School',
    duration: '2019 – 2020',
    desc: 'Grades: 5 A*, 2 A, 2 B',
  },
];

const CERTIFICATIONS = [
  {
    title: 'Supervised Machine Learning: Regression and Classification',
    org: 'Coursera',
    duration: 'Completed',
    desc: 'ML algorithms, regression techniques, and classification methods for data analysis and predictive modeling.',
  },
  {
    title: 'What is Data Science?',
    org: 'Coursera',
    duration: 'Completed',
    desc: 'Foundational data science concepts, methodologies, and tools for modern analytics and business intelligence.',
  },
];

const TimelineEntry = ({ item, index, accentClass }) => (
  <motion.div
    className={`${styles.entry} ${item.current ? styles.entryCurrent : ''}`}
    initial={{ opacity: 0, x: -24 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.45, delay: index * 0.08 }}
  >
    <div className={`${styles.dot} ${accentClass}`} />
    <div className={styles.entryContent}>
      <div className={styles.entryHeader}>
        <span className={styles.entryTitle}>{item.title}</span>
        {item.current && <span className={styles.currentBadge}>Current</span>}
      </div>
      <div className={styles.entryOrg}>
        {item.org}{item.location ? ` · ${item.location}` : ''}
      </div>
      <div className={styles.entryDuration}>{item.duration}</div>
      {item.bullets ? (
        <ul className={styles.bullets}>
          {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      ) : (
        <p className={styles.entryDesc}>{item.desc}</p>
      )}
    </div>
  </motion.div>
);

const SubSection = ({ title, items, accentClass, indexOffset = 0 }) => (
  <div className={styles.subSection}>
    <h3 className={`${styles.subHeading} ${accentClass}`}>{title}</h3>
    <div className={styles.timeline}>
      {items.map((item, i) => (
        <TimelineEntry
          key={item.title}
          item={item}
          index={i + indexOffset}
          accentClass={accentClass}
        />
      ))}
    </div>
  </div>
);

const ExperienceSection = () => (
  <section id="experience" className={`${styles.section} section-padding`}>
    <div className="container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="label">05. experience</span>
        Experience, Education &amp; Certifications
      </motion.h2>

      <div className={styles.columns}>
        {/* Left: Experience */}
        <div className={styles.col}>
          <SubSection
            title="Experience"
            items={EXPERIENCE}
            accentClass={styles.dotAccent}
          />
          <SubSection
            title="Certifications"
            items={CERTIFICATIONS}
            accentClass={styles.dotPurple}
            indexOffset={EXPERIENCE.length}
          />
        </div>

        {/* Right: Education */}
        <div className={styles.col}>
          <SubSection
            title="Education"
            items={EDUCATION}
            accentClass={styles.dotCyan}
          />
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
