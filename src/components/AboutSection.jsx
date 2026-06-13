import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiDotnet, SiNestjs, SiNextdotjs } from 'react-icons/si';
import styles from './AboutSection.module.css';

const TECH = [
  { Icon: FaReact,     label: 'React',   color: '#61dafb' },
  { Icon: FaPython,    label: 'Python',  color: '#60a5fa' },
  { Icon: SiNestjs,    label: 'NestJS',  color: '#e0234e' },
  { Icon: SiNextdotjs, label: 'Next.js', color: 'var(--text-primary)' },
  { Icon: FaNodeJs,    label: 'Node.js', color: '#4ade80' },
  { Icon: FaGitAlt,    label: 'Git',     color: '#f97316' },
  { Icon: SiDotnet,    label: '.NET',    color: '#a855f7' },
];

const SOFT = ['Teamwork', 'Communication', 'Problem-solving', 'Adaptability', 'Leadership'];

const inView = (delay = 0) => ({
  initial:    { opacity: 0, y: 22 },
  whileInView:{ opacity: 1, y: 0  },
  viewport:   { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const AboutSection = () => (
  <section id="about" className={`${styles.about} section-padding`}>
    <div className="container">
      <motion.h2 className="section-title" {...inView(0)}>
        <span className="label">01. about</span>
        About Me
      </motion.h2>

      <div className={styles.grid}>
        {/* ── Photo ─────────────────────────────────────── */}
        <motion.div
          className={styles.photoCol}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className={styles.photoFrame}>
            <img
              src={`${process.env.PUBLIC_URL}/pic2.jpg`}
              alt="Maaz Khan"
              className={styles.photo}
            />
            <div className={styles.photoOverlay} aria-hidden />
          </div>
          <div className={styles.photoGlow} aria-hidden />
        </motion.div>

        {/* ── Text ──────────────────────────────────────── */}
        <div className={styles.textCol}>
          <motion.p {...inView(0.08)} className={styles.bio}>
            Computer Science undergraduate at FAST-NUCES, Karachi (CGPA: 3.29) with industry experience
            spanning data science, AI, full-stack development, and software quality assurance. Currently
            an SQA Intern at Think Digitally, conducting end-to-end manual and functional testing aligned with STLC.
          </motion.p>
          <motion.p {...inView(0.16)} className={styles.bio}>
            Previously a Data Science Intern at 10Pearls, building a multi-horizon AQI forecasting system
            with ensemble ML, Hopsworks deployment, and SHAP explainability. Also served as a Data &amp; AI
            Intern at Bank Islami Pakistan Ltd., designing QlikView dashboards for executive decision-making
            in a regulated banking environment.
          </motion.p>
          <motion.p {...inView(0.22)} className={styles.bio}>
            I have delivered full-stack and AI-driven systems including TripVerse — a multi-role fintech/travel
            platform with Stripe, Gemini AI, and Socket.IO — and an Automated Contract Risk Analysis pipeline
            using multi-agent AI and RAG. I thrive on production-grade solutions end-to-end.
          </motion.p>

          {/* Tech pills */}
          <motion.div {...inView(0.3)} className={styles.techGrid}>
            {TECH.map(({ Icon, label, color }) => (
              <div key={label} className={styles.techPill}>
                <Icon style={{ color, fontSize: '1rem', flexShrink: 0 }} />
                <span>{label}</span>
              </div>
            ))}
          </motion.div>

          {/* Soft skills */}
          <motion.div {...inView(0.38)} className={styles.softRow}>
            <span className={styles.softLabel}>Soft Skills</span>
            <div className={styles.softTags}>
              {SOFT.map(s => <span key={s} className={styles.softTag}>{s}</span>)}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
