import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';

/* ─── Typewriter hook ───────────────────────────────────── */
const ROLES = ['Software Engineer', 'AI / Data Engineer', 'SQA Engineer'];

const useTypewriter = (words, speed = 75, deleteSpeed = 45, pause = 1800) => {
  const [text,     setText]     = useState('');
  const [wordIdx,  setWordIdx]  = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [pausing,  setPausing]  = useState(false);

  useEffect(() => {
    if (pausing) return;
    const word = words[wordIdx];

    const id = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) {
          setPausing(true);
          setTimeout(() => { setPausing(false); setDeleting(true); }, pause);
        }
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === '') {
          setDeleting(false);
          setWordIdx(i => (i + 1) % words.length);
        }
      }
    }, deleting ? deleteSpeed : speed);

    return () => clearTimeout(id);
  }, [text, deleting, pausing, wordIdx, words, speed, deleteSpeed, pause]);

  return text;
};

/* ─── Fake code terminal data ───────────────────────────── */
const CODE = [
  [['# ', 'cmt'], ['maaz_khan.py', 'cmt']],
  [],
  [['class ', 'kw'], ['MaazKhan', 'fn'], [':', 'pu']],
  [],
  [['  name     ', 'pm'], ['= ', 'op'], ['"Maaz Khan"',          'str']],
  [['  role     ', 'pm'], ['= ', 'op'], ['"Software Engineer"',  'str']],
  [['  location ', 'pm'], ['= ', 'op'], ['"Karachi, Pakistan"',  'str']],
  [['  edu      ', 'pm'], ['= ', 'op'], ['"FAST-NUCES · CS · 2026"', 'str']],
  [['  cgpa     ', 'pm'], ['= ', 'op'], ['3.29', 'id']],
  [],
  [['  interests', 'pm'], ['= ', 'op'], ['["AI/ML", "SQA", "FullStack"]', 'str']],
  [],
  [['  def ', 'kw'], ['available', 'fn'], ['(self):', 'pu']],
  [['    return ', 'kw'], ['True  ', 'id'], ['# open to opportunities!', 'cmt']],
  [],
  [['me ', 'id'], ['= ', 'op'], ['MaazKhan', 'fn'], ['()', 'pu']],
  [['print', 'fn'], ['(f"Hi! I\'m ', 'str'], ['{me.name}', 'id'], ['" )', 'str']],
];

const TOKEN_CLASS = {
  cmt: styles.tCmt,
  kw:  styles.tKw,
  mod: styles.tMod,
  id:  styles.tId,
  fn:  styles.tFn,
  str: styles.tStr,
  pm:  styles.tPm,
  op:  styles.tOp,
  pu:  styles.tPu,
};

/* ─── Animation variants ────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 28 },
  animate:   { opacity: 1, y: 0  },
  transition:{ duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const HeroSection = () => {
  const role      = useTypewriter(ROLES);
  const resumeUrl = `${process.env.PUBLIC_URL}/resume.pdf`;

  const download = () => {
    const a = document.createElement('a');
    a.href = resumeUrl;
    a.download = 'Maaz_Khan_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section id="hero" className={styles.hero}>
      {/* Ambient blobs */}
      <div className={styles.blobViolet} aria-hidden />
      <div className={styles.blobCyan}   aria-hidden />

      <div className={`container ${styles.inner}`}>

        {/* ── Left: text content ──────────────────────────── */}
        <div className={styles.textSide}>

          <motion.div {...fadeUp(0.1)} className={styles.availableBadge}>
            <span className={styles.pulseDot} />
            Available for opportunities
          </motion.div>

          <motion.h1 {...fadeUp(0.22)} className={styles.heading}>
            Hi, I'm{' '}
            <span className="gradient-text">Maaz Khan</span>
          </motion.h1>

          <motion.div {...fadeUp(0.34)} className={styles.typeRow}>
            <span className={styles.prompt}>&gt;</span>
            <span className={styles.roleText}>{role}</span>
            <span className={styles.caret} aria-hidden />
          </motion.div>

          <motion.p {...fadeUp(0.42)} className={styles.subtitle}>
            I transform ideas into interactive interfaces
          </motion.p>

          <motion.p {...fadeUp(0.48)} className={styles.location}>
            <span>📍</span>
            <span>Karachi, Pakistan &nbsp;·&nbsp; FAST-NUCES</span>
          </motion.p>

          <motion.div {...fadeUp(0.56)} className={styles.ctaRow}>
            <a href="#projects" className="btn-primary"
               onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
              View Projects
            </a>
            <button className="btn-outline" onClick={() => window.open(resumeUrl, '_blank')}>
              View Resume
            </button>
            <button className="btn-ghost" onClick={download}>
              Download PDF
            </button>
          </motion.div>
        </div>

        {/* ── Right: fake terminal ─────────────────────────── */}
        <motion.div
          className={styles.codeSide}
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0  }}
          transition={{ duration: 0.65, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className={styles.terminal}>
            {/* Window bar */}
            <div className={styles.winBar}>
              <span className={`${styles.dot} ${styles.dotRed}`}    />
              <span className={`${styles.dot} ${styles.dotYellow}`} />
              <span className={`${styles.dot} ${styles.dotGreen}`}  />
              <span className={styles.fileName}>maaz_khan.py</span>
            </div>

            {/* Code body */}
            <div className={styles.codeBody}>
              {CODE.map((line, li) => (
                <motion.div
                  key={li}
                  className={styles.codeLine}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + li * 0.06 }}
                >
                  <span className={styles.lineNo}>{li + 1}</span>
                  <span className={styles.lineCode}>
                    {line.length === 0
                      ? ' '
                      : line.map(([text, type], ti) => (
                          <span key={ti} className={TOKEN_CLASS[type] || ''}>{text}</span>
                        ))
                    }
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll arrow */}
      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        aria-hidden
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className={styles.scrollArrow}
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
