import React from 'react';
import './homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faNodeJs, faJava, faPython, faGithub, faLinkedin, faLinux } from '@fortawesome/free-brands-svg-icons';


const codeContent = `
/**
 * <span class="comment">Experience at Ansys</span>
 * <span class="comment">Role: QA Engineer Intern</span>
 */

<span class="keyword">const</span> <span class="variable">experienceAtAnsys</span> = <span class="keyword">() =></span> {
<span class="comment">// At Ansys, I had the opportunity to work with a comprehensive suite of engineering simulation software, including Fluent, Mechanical, Discovery, SpaceClaim, and SCADE, among others.</span>
<span class="comment">// I was responsible for identifying and documenting bugs, performing both interactive and automated testing across various hardware and machine configurations to ensure software reliability and stability.</span>
<span class="comment">// During my three rotations over the course of a year at Ansys, I gained extensive familiarity with the company's software, databases, and tech stack, while also learning valuable lessons in both technology and workplace culture.</span>

  <span class="function">console</span>.<span class="variable">log</span>(<span class="string">"Experience at Ansys"</span>);
};

<span class="variable">experienceAtAnsys</span>();
`;

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="section" style={{ backgroundImage: "url('/background.jpg')" }}>
        <div className="content console-intro">
          <p><span className="console-prompt">ehab@portfolio:~$</span> Hi, I'm Ehab Abdalla</p>
          <p><span className="console-prompt">ehab@portfolio:~$</span> Computer Science Student | Aspiring Software Engineer</p>
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
            <a href="#ansys" className="read-more-button">Read More</a>
          </div>
        </div>
      </section>
      <section className="section" style={{ backgroundImage: "url('/background2.JPG')" }}>
        <div className="content hackathons-content">
            <h1>Hackathons</h1>
            <img src="/hoya.png" alt="HoyaHacks Logo" className="hackathon-logo" />
        </div>
        </section>
        <section className="section skills">
        <div className="skills-content">
          <h1>Technical Skills</h1>
          <div className="skills-icons">
            <FontAwesomeIcon icon={faJava} size="4x" />
            <FontAwesomeIcon icon={faPython} size="4x" />
            <FontAwesomeIcon icon={faHtml5} size="4x" />
            <FontAwesomeIcon icon={faCss3Alt} size="4x" />
            <FontAwesomeIcon icon={faJsSquare} size="4x" />
            <FontAwesomeIcon icon={faReact} size="4x" />
            <FontAwesomeIcon icon={faNodeJs} size="4x" />
            <FontAwesomeIcon icon={faLinux} size="4x" />
          </div>
          <div className="social-links">
            <p>Check out my GitHub and Linkedin</p>
            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faGithub} size="2x" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faLinkedin} size="2x" /> LinkedIn
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
