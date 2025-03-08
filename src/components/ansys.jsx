import React from 'react';
import './ansys.css';

const AnsysPage = () => {
  const skills = [
    {
      id: 'arm',
      title: 'ARM (Automation Runtime Manager)',
      icon: '/ansys4.jpg',
      description: 'Utilized Ansys ARM to run automated tests across various Ansys products.',
      points: [
        'Automated test execution across Ansys products',
        'Debugging and resolving test failures',
        'Integration with Verification Testing Package (VTP)',
        'Test environment setup and configuration',
        'Performance monitoring and optimization',
        'Collaboration with development teams',
        'Comprehensive documentation'
      ],
      image: '/ARM.png'
    },
    {
      id: 'linux',
      title: 'Linux Systems',
      icon: '/linuxx.jpg',
      description: 'Worked with various Linux distributions including RHEL, SLES, Ubuntu, and Rocky Linux.',
      points: [
        'Environment setup and configuration',
        'Automation script development',
        'Interactive testing and debugging',
        'Performance benchmarking',
        'Cross-platform compatibility testing',
        'System optimization'
      ],
      image: '/Linux.png'
    },
    {
      id: 'devops',
      title: 'Azure DevOps',
      icon: '/devops.png',
      description: 'Managed projects and CI/CD processes using Azure DevOps.',
      points: [
        'Project management with Azure Boards',
        'CI/CD pipeline configuration',
        'Automation script development',
        'Performance monitoring',
        'Collaborative debugging',
        'Process documentation'
      ],
      image: '/azure.JPG'
    },
    {
      id: 'programming',
      title: 'Python & JavaScript',
      icon: '/jspy.png',
      description: 'Developed automation scripts and testing frameworks.',
      points: [
        'Test automation development',
        'Script maintenance and optimization',
        'Integration with CI/CD pipelines',
        'Data analysis and reporting',
        'Cross-platform compatibility',
        'Documentation and knowledge sharing'
      ],
      image: '/python.JPG'
    }
  ];

  return (
    <div className="ansys-page">
      {/* Intro Section */}
      <section className="section video-section">
        <div className="overlay"></div>
        <video className="ansys-video" autoPlay loop muted playsInline>
          <source src="/AnsysVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content text-center">
          <img src="/ansys4.jpg" alt="Ansys Logo" className="ansys-logo-img" />
          <h1 id="titles">Ansys Experience</h1>
          <p>
            During my year at Ansys across three rotations, I worked extensively with various Engineering Simulation Software including Fluent, Mechanical, Discovery, SpaceClaim, and SCADE. I performed both interactive and automated testing, ensuring software reliability and quality across different platforms and configurations.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section skills-section" style={{ backgroundImage: "url('/ansys5.jpg')" }}>
        <div className="overlay"></div>
        <div className="content">
          <h4 id="skills-developed">Skills Developed</h4>
          
          {skills.map((skill) => (
            <div key={skill.id} className="skill mb-2">
              <img src={skill.icon} alt={skill.title} className="skill-img-small-small" />
              <h2 id="subtitle">[ {skill.title} ]</h2>
              <p>{skill.description}</p>
              <ul>
                {skill.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <img src={skill.image} alt={skill.title} className="skill-img" />
            </div>
          ))}
        </div>
      </section>

      {/* Additional Skills Section */}
      <section className="section video-section">
        <div className="overlay"></div>
        <video className="ansys-video" autoPlay loop muted playsInline>
          <source src="/AnsysVideoTwo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content text-center">
          <h1 id="titles">Additional Skills</h1>
          <p>
            Beyond technical skills, I developed proficiency in professional tools including Microsoft Teams, SharePoint, and Ansys HRIS. I gained valuable experience with Source Code Audit Tool and Ansys GitHub Enterprise, enhancing my understanding of enterprise-level development practices and collaboration.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AnsysPage;
