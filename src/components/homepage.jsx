import React from 'react';
import './homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faNodeJs, faJava, faPython, faGithub, faLinkedin, faSquarePiedPiper, faHotjar } from '@fortawesome/free-brands-svg-icons';

const codeContent = `
/**
 * <span class="comment">Experience at Ansys</span>
 * <span class="comment">Role: QA Engineer Intern</span>
 */

<span class="keyword">const</span> <span class="variable">experienceAtAnsys</span> = <span class="keyword">() =></span> {
  <span class="comment">// Performed interactive and automated testing of Ansys Software,</span>
  <span class="comment">// ensuring its reliability and functionality.</span>

  <span class="comment">// Debugged tests, created new defects, and reviewed existing</span>
  <span class="comment">// defects within Ansys software.</span>

  <span class="comment">// Collaborated with developers across different Ansys teams and</span>
  <span class="comment">// effectively communicated findings.</span>

  <span class="comment">// Utilized Azure cloud services for data storage and analysis</span>
  <span class="comment">// to enhance testing efficiency and scalability.</span>

  <span class="function">console</span>.<span class="variable">log</span>(<span class="string">"Experience at Ansys"</span>);
};

<span class="variable">experienceAtAnsys</span>();
`;

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="section2" style={{ backgroundImage: "url('/linkedin.jpeg')" }}>
        <div className="overlay"></div>
        <div className="content console-intro"> 
          <p><span className="console-prompt">ehab@portfolio:~$</span> Hi, I'm Ehab Abdalla</p>
          <p><span className="console-prompt">ehab@portfolio:~$</span> QA Engineer</p>
        </div>
      </section>

      <section className="section ansys-section" style={{ backgroundImage: "url('/ansysbackground.jpg')" }}>
        <div className="vscode-window">
          <div className="vscode-title-bar">
            <div className="vscode-controls">
              <span className="vscode-control vscode-close"></span>
              <span className="vscode-control vscode-minimize"></span>
              <span className="vscode-control vscode-maximize"></span>
            </div>
            <span className="vscode-title">Experience at Ansys - Ehab Abdalla</span>
          </div>
          <div className="vscode-tabs">
            <span className="vscode-tab active">experienceAtAnsys.js</span>
          </div>
          <div className="vscode-content code-snippet">
            <pre>
              <code dangerouslySetInnerHTML={{ __html: codeContent }} />
            </pre>
            <a href="ansys" className="read-more-button">Read More</a>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundImage: "url('/background2.JPG')" }}>
      <div className="hackathons-container">
        <h1>Hackathons</h1>
        <div className="content hackathons-content">
          <div className="hackathon-item">
            <img src="/hoya.png" alt="HoyaHacks Logo" className="hackathon-logo" />
            <a href="hackathons" className="read-more-button">Read More</a>
          </div>
          
          <div className="hackathon-item">
            <img src="/learnailogo.jpg" alt="LearnAI Logo" className="hackathon-logo" />
            <a href="hackathons" className="read-more-button">Read More</a>
          </div>
          
          <div className="hackathon-item">
            <img src="/RefuConnect.png" alt="RefuConnect Logo" className="hackathon-logo" />
            <a href="hackathons" className="read-more-button">Read More</a>
          </div>
        </div>
      </div>
      </section>


      <section className="section skills">
        <div className="skills-content">
          <h1>My Skills</h1>
          <div className="skills-icons">
            <FontAwesomeIcon icon={faJava} size="4x" />
            <FontAwesomeIcon icon={faPython} size="4x" />
            <FontAwesomeIcon icon={faHtml5} size="4x" />
            <FontAwesomeIcon icon={faCss3Alt} size="4x" />
            <FontAwesomeIcon icon={faJsSquare} size="4x" />
            <FontAwesomeIcon icon={faReact} size="4x" />
            <FontAwesomeIcon icon={faNodeJs} size="4x" />
          </div>
          <div className="social-links">
            <p>Check me out:</p>
            <a href="https://github.com/ehab20011" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faGithub} size="2x" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/ehab-abdalla-04ab411b3/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faLinkedin} size="2x" /> LinkedIn
            </a>
            <Link to="/projects" className="social-link">
                <FontAwesomeIcon icon={faHotjar} size="2x" /> Projects
            </Link>
            <a href="https://docs.google.com/document/d/1QTjmD26zem_a9rBt7wNW2ozxLv8ffOpMup8iD7Hl1yE/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faSquarePiedPiper} size="2x" /> Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
