import React from 'react';

const projects = [
  {
    title: 'Air Quality Index Forecasting System',
    image: '/AQI.png',
    description: 'Developed an end-to-end ML system for multi-horizon air quality forecasting (1h–72h ahead) using ensemble models (Random Forest, Ridge Regression), and deploying via Hopsworks Feature Store with automated retraining via GitHub Actions. Engineered 124 features from time-series data including temporal patterns, lag features, rolling statistics, and domain-specific interactions, implementing EPA-compliant AQI calculation. Created a production-ready Streamlit dashboard with real-time forecasts, automated alerting system, SHAP interpretability analysis, and EDA snapshots.',
    technologies: 'Python, Machine Learning, Hopsworks, Streamlit, GitHub Actions, SHAP',
    github: 'https://github.com/maaz-khan8/AirQualityIndex',
  },
  
  {
    title: 'T20 Cricket ML Predictor',
    image: '/T20.webp',
    description: 'Built an end-to-end ML pipeline using XGBoost and Scikit-learn to predict T20 cricket match outcomes with 71.5% accuracy (AUC: 0.77) and MAE of 21.9 runs on 2016–2024 World Cup data. Performed feature optimization, reducing predictors from 15 to 10–11 key variables via importance analysis and GroupShuffleSplit cross-validation to prevent data leakage. Deployed an interactive Streamlit dashboard for real-time win probability and score predictions.',
    technologies: 'Python, XGBoost, Scikit-learn, Streamlit, Machine Learning',
    github: 'https://github.com/maaz-khan8/T20-Cricket-ML-Predictor',
  },
  {
    title: 'Employee Management System',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEVRK9T///9EEtLMxfBKHtOai+M/ANFCDdLk4PfSy/LZ0/RPKNRYM9bx7/tHGdLJwvCgkeWyp+mVhOLt6vpMI9Pf2vZ+aN2qnOiOfOCrn+iHc9/n4/jBt+7b1fWKd+B1XdtkRti6r+z5+P1yWNtePdeTguJ6YtxnS9htUtr29P23q+upneeDbt7xWqHzAAADn0lEQVR4nO3a7VraMBiA4bSUFKgUxagoooKfOM//+KaMvgk0NFxOXM2e+yeWJc+sTWlQCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4H+SpSJrOMxUB5Xuq2XaaOONQaV/5L8OvOx31vrj3WOYq+qwE+egct5p0n9PNJN+4zGO18Mkpv3EOip2HZYdV8fMcvtqPk0a6ff/hMvmQxy9fNfoX1c40OHCgVvYCxde7F149g2Fyc2uP8VoChfpjvM0msLkesco8RQm9yb2wlP/xebzhe26ln648K5KocLhyKOzWg87W6/a39nW0SffsB6ueBfFUGFf73lPk2cy0HjrPQe6p6kXznznaahwsO8ZVhzJQN2mu8SvUy9MJp6RoyiU2S6y+nkaReFYhvYsilEU3tjztb4oRlHYtWMPaxebKAovtF2cL9Otw6IovCz1UEZ/2LrYRFJobmX0s63zNIrC95um/FqGf9y8w4ilsEgXMv7mohhLocpuZPzRxnkaTaHSA5nAk7soxlNY7FgU4ylUpaQkJ86iGP70VOd9WvDvC5W2z0Dv7MUmVLg4rRle+RJbUGieZQrOoviZpxi+T2FtKFTpq8zBPuaPqlDl9ubNVOdpXIXmSSbRqc7TuAqVts/DztdXi8gKCyOzWK57IitU2aNM4/XPoviZwscWFyo9k3ncrc7TUGFv3N12/Ox78NqWQmcevdXFJnxPk9V4t7HaUuhuqHQ/Xo/ovrTi3LypIspC8yIz6esoC1U+l6mcZ1EWKr2sfvK+KGbdCAuzN5nLPI+yUOmOTOa5HMdYWBQymapexFio7C8u6T5FWaj0mUznJc7C4kGmM4qzUKX174q0vrAwZuOOuLlQ6dMfVljkxfnbg/skM1Bo7n9WoTla9UxvbUyg0N2Oair0fXryfoA6bKGRC8dEakKFRWm3oxoKe5OxR3d7o/XQhc5jQnmcHSpU2dU+hTuc1x57H7Qwm9ihR9WeRLBQ6c3vFLW5sHT+pGRjKVxYqB9TmNrHoMli/0JVdt1Jt7mwPLFDy3c59yhU2g1pc2FWZ4c+rv71fQqN88ZWFzq7SlPZN9unUKXOb3/W5kKl5+tZ2qU4HS2HK8tfDQPq6XBt2XF2htPBcthk8eQpXFQ/HB/iri1/uZ6djd60sxCn1aZ043i57F1vfB8s9WxuBza6C/nhYW68TZnnqf/r+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Ei/AfHYTPUXy/PDAAAAAElFTkSuQmCC',
    description: 'Developed a role-based employee management system with secure login, session management, and CRUD operations using Grid View and ADO.NET. Designed personalized dashboards for Admin, HR Manager, and Employees.',
    technologies: '.NET Webform, SQL Server, ADO.NET',
    github: 'https://github.com/maaz-khan8/EmployeeManagementSystem',
  },
  {
    title: 'Car Bazaar',
    image: 'pic3.png',
    description: 'Developed a responsive frontend (React, Tailwind CSS) and efficient backend (Node.js, Express, PostgreSQL) for vehicle trading and comparison. Engineered user authentication, admin panel, and automated email notifications.',
    technologies: 'React, Node.js, Express, PostgreSQL, Tailwind CSS',
    github: 'https://github.com/maaz-khan8/CarBazaar',
  },
  {
    title: 'Proxy Server',
    image: 'https://miro.medium.com/v2/resize:fit:803/1*E4lFl0-xX1L5uZXIyBQdsQ.jpeg',
    description: 'Developed a Python-based proxy server to manage client-server communication. Implemented request routing and support for multiple concurrent connections to improve performance.',
    technologies: 'Python, Networking, Multi-threading',
    github: 'https://github.com/maaz-khan8/Proxy_Server',
  },
  {
    title: 'Todo List React',
    image: 'https://www.shutterstock.com/image-vector/do-list-lettering-vector-pencil-600nw-1837137628.jpg',
    description: 'Developed a dynamic todo list application using React with features like add, delete, edit, and mark tasks as complete. Implemented local storage for data persistence and responsive design.',
    technologies: 'React, JavaScript, Local Storage',
    github: 'https://github.com/maaz-khan8/Todolist_React',
  },
  {
    title: 'Amazon Clone',
    image: 'https://www.iccr.org/wp-content/uploads/2024/05/amazon-shutterstock_655556107-scaled.jpg',
    description: 'Built a responsive Amazon clone with modern UI/UX design using HTML and CSS. Implemented product listings, shopping cart functionality, and user interface components similar to the original Amazon platform.',
    technologies: 'HTML, CSS, Responsive Design',
    github: 'https://github.com/maaz-khan8/Amazon_Clone',
  },
  {
    title: 'Netflix Clone',
    image: 'https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5..v1582751026.png',
    description: 'Created a Netflix clone with responsive design and modern UI components. Implemented movie/show listings, navigation, and landing page similar to Netflix with focus on user experience and visual appeal.',
    technologies: 'HTML, CSS, Responsive Design',
    github: 'https://github.com/maaz-khan8/Netflix_Clone',
  },
  {
    title: 'Cab Management System',
    image: '/CBS.png',
    description: 'Developed a simulation of a taxi dispatch system featuring user authentication, ride booking, and fare generation. Implemented Dijkstra\'s algorithm for efficient route planning using graph structures.',
    technologies: 'C++, OOP, Data Structures, Algorithms',
    github: 'https://github.com/maaz-khan8/Cab_Management_System',
  },
  {
    title: 'Hospital Management System',
    image: '/HMS.png',
    description: 'Developed a comprehensive hospital management system using C++ with features for patient registration, doctor management, appointment scheduling, and medical records tracking.',
    technologies: 'C++, OOP, Data Structures, File Handling',
    github: 'https://github.com/maaz-khan8/Hospital_management_system',
  },
  {
    title: 'ScoreBoard Project',
    image: 'https://d2nzy1qhita6w.cloudfront.net/media/magefan_blog/Beginner-learning-C-programming-in-10-days-with-a-coding_guide.jpeg',
    description: 'Built a scoreboard system using C programming for tracking and displaying game scores, player statistics, and match results with real-time updates and data persistence.',
    technologies: 'C, Data Structures, File I/O',
    github: 'https://github.com/maaz-khan8/ScoreBoardProject',
  },


];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-blue-700 dark:text-blue-400">Projects</h2>
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="group bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 border border-transparent hover:border-blue-200 dark:hover:border-blue-800"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-48 w-full object-cover object-center transition-transform duration-300 group-hover:scale-110 border-b-4 border-blue-100 dark:border-blue-900 bg-gray-100 dark:bg-gray-800" 
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 flex-1 mb-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="text-sm text-blue-600 dark:text-blue-400 mb-4 font-medium bg-blue-50 dark:bg-blue-900/20 px-3 py-2 rounded-lg">
                  {project.technologies}
                </div>
                <div className="mt-auto">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300 font-medium group-hover:shadow-lg group-hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-1"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

