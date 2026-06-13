import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import FYPSection from './components/FYPSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';

const App = () => (
  <ThemeProvider>
    <Helmet>
      <title>Maaz Khan — Software Engineer</title>
      <meta
        name="description"
        content="Maaz Khan — Computer Science student at FAST-NUCES, Karachi. Software Engineer specialising in Web Development, AI, and Data Science."
      />
    </Helmet>
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <FYPSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  </ThemeProvider>
);

export default App;
