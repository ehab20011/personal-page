import React from 'react';
import './projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'JobDock',
      description: [
        'Utilized Vite+React for a high-performance dynamic frontend.',
        'Implemented an ExpressJS backend server to manage server-side functionality efficiently.',
        'Leveraged Firebase for a secure and scalable database solution, ensuring robust user authentication and data protection.',
        'Developed an AI Chatbot powered by OpenAI’s Chat GPT Turbo 3 model, enhancing user interaction with intelligent, conversational capabilities.',
      ],
      githubLink: 'https://github.com/floresloyd/jobdock-app',
      image: '/jobdock.png',
    },
    {
      title: 'Wellness-Watcher',
      description: [
        'Integrated ReactJS and CSS for a dynamic frontend and ExpressJS for server functionality.',
        'Deployed an interactive chatbot using OpenAI’s GPT-3 API to answer health-related queries, improving user interaction and engagement.',
        'Implemented wellness tools, including BMI and BMR calculators, to provide users with valuable health insights.',
        'Conducted extensive user testing to ensure a seamless and user-friendly experience.',
      ],
      githubLink: 'https://github.com/kathrynchoii/Wellness_Watcher',
      image: '/wellness.ico',
    },
    {
      title: 'Sueno Blanco',
      description: [
        'Designed and developed a responsive website for Light My Candle Co. using HTML, CSS, and JavaScript.',
        'Implemented a video background and carousel to showcase products dynamically.',
        'Ensured cross-browser compatibility and mobile responsiveness for a seamless user experience.',
        'Collaborated with a team using Git for version control and project management.',
      ],
      githubLink: 'https://github.com/floresloyd/sueno_blanco_webpage',
      image: '/sb-logo.png',
    },
  ];

  return (
    <div className="projects-page">
      <header className="projects-header">
        <h1>My Projects</h1>
        <p>Explore the projects I've worked on, showcasing my skills in full-stack development and AI integration.</p>
      </header>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h2>{project.title}</h2>
              <ul className="project-description">
                {project.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
