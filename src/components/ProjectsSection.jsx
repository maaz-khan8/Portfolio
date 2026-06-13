import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import styles from './ProjectsSection.module.css';

const PROJECTS = [
  {
    title: 'Automated Contract Risk Analysis',
    image: '/Agentic_AI.png',
    description: 'Multi-agent AI pipeline (Extractor → Analyst → Researcher → Critic) analysing contracts across 10 legal risk categories. RAG pipeline using Pinecone vector DB and CUAD legal dataset for semantic clause retrieval.',
    technologies: ['Python', 'CrewAI', 'Pinecone', 'LlamaParse', 'RAG'],
    github: 'https://github.com/maaz-khan8/Automated-Contract-Risk-Analysis',
    featured: true,
  },
  {
    title: 'Air Quality Index Forecasting System',
    image: '/AQI.png',
    description: 'End-to-end ML system for multi-horizon AQI forecasting (1h–72h) using Random Forest & Ridge Regression deployed via Hopsworks. Engineered 124 features; production Streamlit dashboard with SHAP analysis.',
    technologies: ['Python', 'ML', 'Hopsworks', 'Streamlit', 'SHAP', 'GitHub Actions'],
    github: 'https://github.com/maaz-khan8/AirQualityIndex',
    featured: true,
  },
  {
    title: 'T20 Cricket ML Predictor',
    image: '/T20.webp',
    description: 'XGBoost pipeline predicting T20 match outcomes with 71.5% accuracy (AUC: 0.77, MAE: 21.9 runs) on 2016–2024 World Cup data. Interactive Streamlit dashboard for real-time win probability predictions.',
    technologies: ['Python', 'XGBoost', 'Scikit-learn', 'Streamlit'],
    github: 'https://github.com/maaz-khan8/T20-Cricket-ML-Predictor',
    featured: true,
  },
  {
    title: 'Car Bazaar',
    image: 'pic3.png',
    description: 'Full-stack car marketplace with role-based access, user authentication, ad posting, and an admin approval workflow. Normalized PostgreSQL schema with search, filtering, and responsive UI.',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/maaz-khan8/CarBazaar',
    featured: false,
  },
  {
    title: 'Employee Management System',
    image: '/EMS.jpg',
    description: 'Role-based employee management system with secure login, session management, and CRUD operations. Personalized dashboards for Admin, HR Manager, and Employees using ADO.NET.',
    technologies: ['.NET Webform', 'SQL Server', 'ADO.NET'],
    github: 'https://github.com/maaz-khan8/EmployeeManagementSystem',
    featured: false,
  },
  {
    title: 'Proxy Server',
    image: 'https://miro.medium.com/v2/resize:fit:803/1*E4lFl0-xX1L5uZXIyBQdsQ.jpeg',
    description: 'Python-based proxy server managing client-server communication with request routing and support for multiple concurrent connections using multi-threading.',
    technologies: ['Python', 'Networking', 'Multi-threading'],
    github: 'https://github.com/maaz-khan8/Proxy_Server',
    featured: false,
  },
  {
    title: 'Cab Management System',
    image: '/CBS.png',
    description: "Taxi dispatch system simulation featuring user authentication, ride booking, fare generation, and Dijkstra's algorithm for efficient route planning via graph structures.",
    technologies: ['C++', 'OOP', 'Data Structures', 'Algorithms'],
    github: 'https://github.com/maaz-khan8/Cab_Management_System',
    featured: false,
  },
  {
    title: 'Hospital Management System',
    image: '/HMS.png',
    description: 'C++ hospital management system for patient registration, doctor management, appointment scheduling, and medical records tracking.',
    technologies: ['C++', 'OOP', 'File Handling'],
    github: 'https://github.com/maaz-khan8/Hospital_management_system',
    featured: false,
  },
  {
    title: 'Todo List React',
    image: 'https://www.shutterstock.com/image-vector/do-list-lettering-vector-pencil-600nw-1837137628.jpg',
    description: 'Dynamic todo list with add, delete, edit, and complete features. Local storage persistence and responsive design.',
    technologies: ['React', 'JavaScript', 'Local Storage'],
    github: 'https://github.com/maaz-khan8/Todolist_React',
    featured: false,
  },
  {
    title: 'Amazon Clone',
    image: 'https://www.iccr.org/wp-content/uploads/2024/05/amazon-shutterstock_655556107-scaled.jpg',
    description: 'Responsive Amazon clone with product listings, shopping cart UI, and user interface components built with HTML and CSS.',
    technologies: ['HTML', 'CSS', 'Responsive Design'],
    github: 'https://github.com/maaz-khan8/Amazon_Clone',
    featured: false,
  },
  {
    title: 'Netflix Clone',
    image: 'https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5..v1582751026.png',
    description: 'Netflix-inspired landing page with responsive design, movie/show listings, and modern UI components focusing on visual appeal.',
    technologies: ['HTML', 'CSS', 'Responsive Design'],
    github: 'https://github.com/maaz-khan8/Netflix_Clone',
    featured: false,
  },
  {
    title: 'ScoreBoard Project',
    image: 'https://d2nzy1qhita6w.cloudfront.net/media/magefan_blog/Beginner-learning-C-programming-in-10-days-with-a-coding_guide.jpeg',
    description: 'Scoreboard system in C for tracking and displaying game scores, player statistics, and match results with file-based persistence.',
    technologies: ['C', 'Data Structures', 'File I/O'],
    github: 'https://github.com/maaz-khan8/ScoreBoardProject',
    featured: false,
  },
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    className={`${styles.card} ${project.featured ? styles.cardFeatured : ''}`}
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.45, delay: (index % 3) * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
    whileHover={{ y: -6 }}
  >
    {project.featured && (
      <div className={styles.featuredBadge}>⭐ Featured</div>
    )}

    {/* Image */}
    <div className={styles.imageWrap}>
      <img
        src={project.image}
        alt={project.title}
        className={styles.image}
        onError={e => {
          e.currentTarget.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center';
        }}
      />
      <div className={styles.imageOverlay} aria-hidden />
    </div>

    {/* Body */}
    <div className={styles.body}>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>

      {/* Tech badges */}
      <div className={styles.techRow}>
        {project.technologies.map(t => (
          <span key={t} className={styles.techBadge}>{t}</span>
        ))}
      </div>

      {/* Links */}
      <div className={styles.links}>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkBtn}
          aria-label="View GitHub repository"
        >
          <FaGithub style={{ fontSize: '0.95rem' }} />
          View Code
        </a>
      </div>
    </div>
  </motion.div>
);

const ProjectsSection = () => (
  <section id="projects" className={`${styles.projects} section-padding dot-grid`}>
    <div className="container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="label">02. projects</span>
        Projects
      </motion.h2>

      <div className={styles.grid}>
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
