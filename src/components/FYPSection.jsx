import React from 'react';
import { motion } from 'framer-motion';
import {
  FaUsers, FaCreditCard, FaBrain, FaBolt, FaPlane, FaBalanceScale,
} from 'react-icons/fa';
import styles from './FYPSection.module.css';

const TECH = [
  'NestJS', 'Next.js', 'PostgreSQL', 'Prisma ORM',
  'Stripe', 'Gemini 2.5 Flash', 'Socket.IO', 'Duffel API', 'Cloud Vision',
];

const FEATURES = [
  { Icon: FaUsers,        color: '#a855f7', title: 'Multi-Role Platform',  desc: 'Client, Driver, Hotel Manager & Admin — each with a tailored dashboard and RBAC.' },
  { Icon: FaCreditCard,   color: '#4ade80', title: 'Fintech & Payments',   desc: 'Stripe integration: wallet management, commission tracking, and automated refunds.' },
  { Icon: FaBrain,        color: '#60a5fa', title: 'AI Travel Assistant',  desc: 'Gemini 2.5 Flash with real-time geospatial data and Cloud Vision monument recognition.' },
  { Icon: FaBolt,         color: '#fbbf24', title: 'Real-Time Systems',    desc: 'Socket.IO live chat, dynamic surge pricing, and 17 notification event types.' },
  { Icon: FaPlane,        color: '#22d3ee', title: 'Unified Booking',      desc: 'Transport, hotel & flight booking via Duffel API with end-to-end booking management.' },
  { Icon: FaBalanceScale, color: '#f97316', title: 'Dispute Resolution',   desc: 'Hybrid AI-human workflow for resolving conflicts across all service types.' },
];

const inView = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  whileInView:{ opacity: 1, y: 0  },
  viewport:   { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const FYPSection = () => (
  <section id="fyp" className={`${styles.fyp} section-padding`}>
    <div className="container">
      <motion.h2 className="section-title" {...inView(0)}>
        <span className="label">03. fyp</span>
        Final Year Project
      </motion.h2>

      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Top accent banner */}
        <div className={styles.banner}>
          <span className={styles.bannerDot} />
          Final Year Project — FAST-NUCES Karachi &nbsp;·&nbsp; 2025 / 2026
          <span className={styles.fypTag}>FYP</span>
        </div>

        <div className={styles.body}>
          {/* ── Left: info ──────────────────────────────── */}
          <div className={styles.infoCol}>
            <h3 className={styles.projectName}>TripVerse</h3>
            <p className={styles.tagline}>AI Travel &amp; Fintech Platform</p>

            <p className={styles.desc}>
              A full-stack multi-role platform unifying transport, hotel, and flight booking with
              Stripe payments, wallet management, commission tracking, and automated refunds — built
              with an architecture directly applicable to core banking and fintech systems.
            </p>
            <p className={styles.desc}>
              Powered by Gemini 2.5 Flash for context-aware AI assistance, real-time communication
              via Socket.IO, Cloud Vision for monument recognition, dynamic surge pricing, and a
              hybrid AI-human dispute resolution workflow.
            </p>

            {/* Tech stack */}
            <div className={styles.techSection}>
              <span className={styles.techLabel}>Tech Stack</span>
              <div className={styles.techPills}>
                {TECH.map(t => (
                  <span key={t} className={styles.techPill}>{t}</span>
                ))}
              </div>
            </div>

            <p className={styles.privateNote}>
              🔒 Source code is not publicly available — this is an FYP submission.
            </p>
          </div>

          {/* ── Right: feature grid ──────────────────────── */}
          <div className={styles.featureCol}>
            {FEATURES.map(({ Icon, color, title, desc }, i) => (
              <motion.div
                key={title}
                className={styles.featureCard}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <span className={styles.featureIcon}>
                  <Icon style={{ color, fontSize: '1.05rem' }} />
                </span>
                <div>
                  <div className={styles.featureTitle}>{title}</div>
                  <div className={styles.featureDesc}>{desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FYPSection;
