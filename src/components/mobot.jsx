import React from 'react';
import './mobot.css';
import { FaAndroid, FaApple, FaRobot, FaMobile, FaPython, FaGoogle, FaFileCode, FaTable } from 'react-icons/fa';
import { SiPostman, SiGraphql, SiXcode, SiJira, SiSlack, SiStreamlit } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { AiFillAndroid } from 'react-icons/ai';

const MobotPage = () => {
  const skills = [
    {
      id: 'manual-testing',
      title: 'Manual Testing & Test Plans',
      description: 'Created and executed comprehensive test plans for major clients including LinkedIn, Chime, and Citizen.',
      points: [
        'Test plan creation and execution',
        'AI-powered screenshot comparison',
        'Bug identification and reporting',
        'Test case documentation',
        'Quality assurance validation',
        'Cross-platform testing (iOS/Android)',
        'Integration with Mobot Robots'
      ],
    },
    {
      id: 'automation',
      title: 'Automation Development',
      icon: '/mobot-auto.jpg',
      description: 'Developed automation solutions using Python and various testing frameworks.',
      points: [
        'Python script development',
        'API call automation',
        'JSON data parsing',
        'Google Cloud API integration',
        'Google Sheets automation',
        'Workflow optimization',
        'Process documentation'
      ],
      image: '/mobot-auto.png'
    },
    {
      id: 'api-testing',
      title: 'API Testing & Integration',
      icon: '/postman.jpg',
      description: 'Performed advanced API testing using Postman and GraphQL for various applications.',
      points: [
        'GraphQL query testing',
        'API mocking and stubbing',
        'Postman collection management',
        'API response validation',
        'Integration testing',
        'Performance testing',
        'Error handling validation'
      ],
      image: '/mobot-api.png'
    },
    {
      id: 'tools',
      title: 'Development Tools',
      icon: '/dev-tools.jpg',
      description: 'Utilized various development and testing tools to ensure comprehensive quality assurance.',
      points: [
        'XCode for location spoofing',
        'XCUITest automation',
        'ADB command implementation',
        'Page Object Model (POM)',
        'Jira project management',
        'Slack communication',
        'ChatBot development with Streamlit'
      ],
      image: '/mobot-tools.png'
    }
  ];

  return (
    <div className="mobot-page">
      {/* Intro Section */}
      <section className="section video-section">
        <div className="overlay"></div>
        <video className="mobot-video" autoPlay loop muted playsInline>
          <source src="/mobot-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content text-center">
          <img src="/Mobot-Logo.png" alt="Mobot Logo" className="mobot-logo-img" />
          <h1 id="titles">Mobot Experience</h1>
          <p>
            At Mobot, I specialized in Quality Assurance testing for major clients including LinkedIn, Chime, and Citizen. 
            I worked with AI-powered robots for automated testing, developed automation scripts, and implemented comprehensive 
            testing solutions across multiple platforms and technologies.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section skills-section" style={{ backgroundImage: "url('/mobot-bg.jpg')" }}>
        <div className="overlay"></div>
        <div className="content">
          <h4 id="skills-developed">Skills Developed</h4>
          
          {skills.map((skill) => (
            <div key={skill.id} className="skill mb-2">
              <h2 id="subtitle">[ {skill.title} ]</h2>
              <p>{skill.description}</p>
              <ul>
                {skill.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <div className="tech-icons">
                {skill.id === 'manual-testing' && (
                  <>
                    <FaAndroid className="tech-icon" title="Android" />
                    <FaApple className="tech-icon" title="iOS" />
                    <FaRobot className="tech-icon" title="Mobot Robots" />
                    <FaMobile className="tech-icon" title="Mobile Testing" />
                  </>
                )}
                {skill.id === 'automation' && (
                  <>
                    <FaPython className="tech-icon" title="Python" />
                    <FaGoogle className="tech-icon" title="Google Cloud" />
                    <FaFileCode className="tech-icon" title="JSON" />
                    <FaTable className="tech-icon" title="Google Sheets" />
                  </>
                )}
                {skill.id === 'api-testing' && (
                  <>
                    <SiPostman className="tech-icon" title="Postman" />
                    <SiGraphql className="tech-icon" title="GraphQL" />
                    <TbApi className="tech-icon" title="API Testing" />
                  </>
                )}
                {skill.id === 'tools' && (
                  <>
                    <SiXcode className="tech-icon" title="Xcode" />
                    <AiFillAndroid className="tech-icon" title="ADB" />
                    <SiJira className="tech-icon" title="Jira" />
                    <SiSlack className="tech-icon" title="Slack" />
                    <SiStreamlit className="tech-icon" title="Streamlit" />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Skills Section */}
      <section className="section video-section">
        <div className="overlay"></div>
        <video className="mobot-video" autoPlay loop muted playsInline>
          <source src="/MobotVideoTwo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content text-center">
          <h1 id="titles">Innovation & Collaboration</h1>
          <p>
            Beyond core testing responsibilities, I developed an innovative ChatBot solution using Python Streamlit 
            and Claude AI to assist QA engineers. This tool streamlined the troubleshooting process by providing 
            quick access to solutions from our knowledge base. I maintained strong communication with client teams 
            through Slack and Jira, ensuring seamless collaboration and timely delivery of testing reports.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MobotPage;
