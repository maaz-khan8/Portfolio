import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useTheme } from '../context/ThemeContext';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'About',      href: 'about' },
  { label: 'Projects',   href: 'projects' },
  { label: 'FYP',        href: 'fyp' },
  { label: 'Skills',     href: 'skills' },
  { label: 'Experience', href: 'experience' },
  { label: 'Contact',    href: 'contact' },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled]         = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 24);
    const ids = NAV_LINKS.map(l => l.href);
    for (const id of [...ids].reverse()) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 110) {
        setActiveSection(id);
        return;
      }
    }
    setActiveSection('');
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleLink = (id) => {
    setMobileOpen(false);
    scrollTo(id);
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>

        {/* Logo */}
        <button className={styles.logo} onClick={() => scrollTo('hero')}>
          Maaz Khan<span className={styles.logoDot}>.</span>
        </button>

        {/* Desktop nav */}
        <nav className={styles.desktopNav} aria-label="Primary">
          {NAV_LINKS.map(({ label, href }) => (
            <button
              key={href}
              className={`${styles.navLink} ${activeSection === href ? styles.navLinkActive : ''}`}
              onClick={() => handleLink(href)}
            >
              {label}
              {activeSection === href && (
                <motion.span
                  className={styles.underline}
                  layoutId="nav-underline"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Right controls */}
        <div className={styles.controls}>
          <button
            className={styles.iconBtn}
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === 'dark' ? (
                <motion.span key="sun"
                  initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0,   opacity: 1, scale: 1   }}
                  exit={{    rotate:  90,  opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  <SunIcon style={{ width: 17, height: 17, color: '#fbbf24' }} />
                </motion.span>
              ) : (
                <motion.span key="moon"
                  initial={{ rotate:  90, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0,   opacity: 1, scale: 1   }}
                  exit={{    rotate: -90, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  <MoonIcon style={{ width: 17, height: 17, color: 'var(--accent-light)' }} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <button
            className={styles.iconBtn}
            onClick={() => setMobileOpen(o => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            style={{ display: 'flex' }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <XMarkIcon style={{ width: 20, height: 20 }} />
                </motion.span>
              ) : (
                <motion.span key="bars"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Bars3Icon style={{ width: 20, height: 20 }} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            className={styles.drawer}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{   opacity: 0, height: 0      }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map(({ label, href }, i) => (
              <motion.button
                key={href}
                className={`${styles.drawerLink} ${activeSection === href ? styles.drawerLinkActive : ''}`}
                onClick={() => handleLink(href)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0    }}
                transition={{ delay: i * 0.04, duration: 0.2 }}
              >
                <span className={styles.drawerIndex}>0{i + 1}.</span>
                {label}
              </motion.button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
