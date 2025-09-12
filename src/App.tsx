import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import './App.css';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
  );
  const [navOpen, setNavOpen] = useState(false);

  // Set basename for BrowserRouter: '/' for all environments
  const basename = '/';

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
    // Prevent background scroll when nav is open (mobile)
    if (navOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [theme, navOpen]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <Router basename={basename}>
      <Helmet>
        <title>Maaz Khan - Developer Portfolio</title>
        <meta name="description" content="Maaz Khan - Final-year Computer Science student at FAST NUCES, passionate about Web Development, AI, and Data Science. View my projects and skills." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-200 via-white to-blue-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white/80 dark:bg-gray-900/80 backdrop-blur sticky top-0 z-50">
          <div className="font-bold text-xl tracking-tight">
            <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Maaz Khan</Link>
          </div>
          {/* Hamburger for mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={navOpen ? 'Close menu' : 'Open menu'}
            >
              {navOpen ? (
                <XMarkIcon className="h-7 w-7 text-gray-800 dark:text-gray-100" />
              ) : (
                <Bars3Icon className="h-7 w-7 text-gray-800 dark:text-gray-100" />
              )}
            </button>
          </div>
          {/* Nav links - always row on desktop, overlay on mobile */}
          <div className={`md:flex gap-8 items-center font-semibold transition-all duration-300 ${navOpen ? 'fixed inset-0 bg-gradient-to-br from-blue-300 via-white to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 bg-opacity-95 backdrop-blur-lg flex flex-col justify-center z-[100]' : 'hidden md:flex'}`}
            style={navOpen ? {minHeight: '100vh', minWidth: '100vw', top: 0, left: 0, right: 0, bottom: 0, position: 'fixed'} : {}}>
            {/* Close button for mobile overlay */}
            {navOpen && (
              <button
                className="absolute top-6 right-6 md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 z-[101]"
                onClick={() => setNavOpen(false)}
                aria-label="Close menu"
              >
                <XMarkIcon className="h-7 w-7 text-gray-800 dark:text-gray-100" />
              </button>
            )}
            <nav className="flex flex-col gap-8 items-center w-full md:flex-row md:gap-8 md:items-center md:w-auto">
              <a 
                href="#about" 
                className="relative px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110 font-medium text-lg md:text-base"
                onClick={() => setNavOpen(false)}
              >
                About
              </a>
              <a 
                href="#projects" 
                className="relative px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110 font-medium text-lg md:text-base"
                onClick={() => setNavOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#skills" 
                className="relative px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110 font-medium text-lg md:text-base"
                onClick={() => setNavOpen(false)}
              >
                Skills
              </a>
              <a 
                href="#experience" 
                className="relative px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110 font-medium text-lg md:text-base"
                onClick={() => setNavOpen(false)}
              >
                Experience
              </a>
              <a 
                href="#contact" 
                className="relative px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110 font-medium text-lg md:text-base"
                onClick={() => setNavOpen(false)}
              >
                Contact
              </a>
              <button 
                onClick={() => { toggleTheme(); setNavOpen(false); }} 
                className="mt-4 md:mt-0 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transform hover:scale-110 transition-all duration-200"
              >
                {theme === 'dark' ? <SunIcon className="h-5 w-5 text-yellow-400" /> : <MoonIcon className="h-5 w-5 text-gray-800" />}
              </button>
            </nav>
          </div>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <AboutSection />
                <ProjectsSection />
                <SkillsSection />
                <ExperienceSection />
                <ContactSection />
              </>
            } />
            <Route path="*" element={<div className="text-center py-20">404 - Page Not Found</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
