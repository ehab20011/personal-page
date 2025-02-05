import React from 'react';
import './ansys.css';

const AnsysPage = () => {
  return (
    <div className="ansys-page">

      <section className="section video-section">
        <div className="overlay"></div>
        <video className="ansys-video" autoPlay loop muted>
          <source src="/AnsysVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          <img src="/ansys4.jpg" alt="Logo" className="logo-img" />
          <h1 id="titles">Ansys Experience</h1>
          <p>At Ansys, I was able to use and test many different Engineering Simulation Software from Fluent, Mechanical, Discovery, SpaceClaim, SCADE, and many more.</p>
          <p>I filed bugs, performed interactive and automated testing on different hardware and machines, and ensured the software ran reliably and bug-free.</p>
          <p>Spending three rotations and an entire year at Ansys familiarized me with the company's software, database, and tech stack, teaching me great lessons both tech-wise and work-culture-wise.</p>
        </div>
      </section>


      <section className="section video-section">
        <div className="overlay"></div>
        <video className="ansys-video" autoPlay loop muted>
          <source src="/AnsysVideoTwo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          <h1 id="titles">Verification Testing Package [ VTP ]</h1>
          <p>In addition to the software testing I performed on the Product QA Team. I also worked on the Verification Testing Package team. With this team I was able to work on</p>
          <p>adding, editing, and creating Test Scripts to add to the Verification Testing Package that gets released on each 6 month release of the Ansys Software to the customers.</p>
          <p>The Verification Testing package at Ansys serves several critical purposes, primarily aimed at ensuring the reliability, accuracy, and performance of their engineering simulation software.</p>
        </div>
      </section>


      <section className="section skills-section" style={{ backgroundImage: "url('/ansys5.jpg')" }}>
        <div className="overlay"></div>
        <div className="content">
          <div className="skill">
          <h4 id="skills-developed"> Skills Developed </h4>
            <img src="/ansys4.jpg" alt="ARM" className="skill-img skill-img-small-small" />
            <h2 id="subtitle">[ ARM ]</h2>
            <p>During my time on the Product QA team and VTP team, I utilized Ansys ARM (Automation Runtime Manager) to run automated tests across various Ansys products. This experience involved:</p>
                <ul>
                    <li><strong>Automated test execution:</strong> I used ARM to execute a comprehensive suite of automated tests, ensuring that all Ansys products met the highest standards of quality and performance.</li>
                    <li><strong>Debugging test failures:</strong> I leveraged ARM's powerful debugging tools to identify and resolve issues causing test failures, providing detailed feedback to developers to facilitate quick resolutions.</li>
                    <li><strong>Integration with Verification Testing Package (VTP):</strong> I employed ARM to run automated tests as part of the Verification Testing Package, ensuring that the test scripts added, edited, or created for VTP were thoroughly validated before release.</li>
                    <li><strong>Test environment setup:</strong> I configured ARM to operate within different testing environments, optimizing the setup to achieve accurate and consistent test results across various hardware and software configurations.</li>
                    <li><strong>Performance monitoring:</strong> I used ARM to monitor the performance of automated tests, identifying bottlenecks and optimizing test execution to enhance efficiency.</li>
                    <li><strong>Collaboration with development teams:</strong> I worked closely with developers to debug and fix issues discovered during automated testing, leveraging ARM's detailed logging and reporting features to provide actionable insights.</li>
                    <li><strong>Documentation:</strong> I documented the processes and results of automated testing using ARM, creating comprehensive reports that highlighted key findings and recommended improvements to the testing strategy.</li>
                </ul>
            <p>This extensive experience with Ansys ARM not only enhanced my technical skills in automated testing and debugging but also contributed significantly to the overall quality and reliability of our software products.</p>
            <img src="/ARM.png" alt="ARM" className="skill-img skill-img-small" />
          </div>
          <div className="skill">
          <img src="/linuxx.jpg" alt="ARM" className="skill-img skill-img-small-small" />
          <h2 id="subtitle">[ Linux ]</h2>
            <p>During my time on the Product QA team and VTP team, I utilized a variety of Linux operating systems including RHEL, SLES, Ubuntu, and Rocky Linux for both interactive and automated testing. This experience involved:</p>
            <ul>
              <li><strong>Setting up and configuring environments:</strong> I set up and configured testing environments on different Linux distributions, ensuring compatibility and optimal performance for our testing processes.</li>
              <li><strong>Automation scripts:</strong> I developed and maintained automation scripts using tools such as Bash, Python, and Ansible to streamline repetitive tasks and ensure consistent test execution across various environments.</li>
              <li><strong>Interactive testing:</strong> I performed hands-on testing to identify and troubleshoot issues, providing valuable feedback to the development team for quick resolution.</li>
              <li><strong>Performance benchmarking:</strong> I conducted performance benchmarks to evaluate the software’s efficiency and resource utilization on different Linux platforms, helping to optimize performance and scalability.</li>
              <li><strong>Collaborative debugging:</strong> I worked closely with developers to debug and resolve issues, leveraging my knowledge of different Linux distributions to identify environment-specific problems and ensure robust software performance.</li>
              <li><strong>Documentation:</strong> I documented the testing processes and results, creating comprehensive reports that highlighted key findings and recommendations for improvements.</li>
            </ul>
            <p>This extensive experience with multiple Linux distributions not only enhanced my technical skills but also contributed significantly to the overall quality and reliability of our software products.</p>
            <img src="/Linux.png" alt="Test Script Creation" className="skill-img skill-img-small" />
          </div>
          <div className="skill">
          <img src="/devops.png" alt="ARM" className="skill-img skill-img-small-small" />
          <h2 id="subtitle">[ Azure DevOps ]</h2>
            <p>During my time on the Product QA team and VTP team, I extensively utilized Azure DevOps for both project management and continuous integration/continuous deployment (CI/CD) processes. This experience involved:</p>
                <ul>
                    <li><strong>Project management:</strong> I managed and tracked work items, user stories, and tasks using Azure Boards, ensuring efficient collaboration and streamlined workflow among team members.</li>
                    <li><strong>CI/CD pipeline setup:</strong> I set up and configured CI/CD pipelines using Azure Pipelines, automating the build, test, and deployment processes to ensure reliable and consistent software delivery.</li>
                    <li><strong>Automation scripts:</strong> I developed and maintained automation scripts using tools such as PowerShell and YAML to automate various tasks within the CI/CD pipelines, improving efficiency and reducing manual effort.</li>
                    <li><strong>Interactive testing:</strong> I performed hands-on testing within the CI/CD environment to identify and troubleshoot issues, providing valuable feedback to the development team for quick resolution.</li>
                    <li><strong>Performance monitoring:</strong> I monitored the performance of CI/CD pipelines and deployments using Azure Monitor and Application Insights, ensuring optimal performance and resource utilization.</li>
                    <li><strong>Collaborative debugging:</strong> I worked closely with developers to debug and resolve issues within the CI/CD pipelines, leveraging my knowledge of Azure DevOps and related technologies to identify and address problems quickly.</li>
                    <li><strong>Documentation:</strong> I documented the CI/CD processes and results, creating comprehensive reports that highlighted key findings and recommendations for improvements.</li>
                </ul>
            <p>This extensive experience with Azure DevOps not only enhanced my technical skills in project management and CI/CD but also contributed significantly to the overall quality and reliability of our software products.</p>
            <img src="/azure.JPG" alt="Test Script Creation" className="skill-img skill-img-small" />
          </div>
          <div className="skill">
          <img src="/jspy.png" alt="ARM" className="skill-img skill-img-small-small" />
          <h2 id="subtitle">[ Python and JavaScript ]</h2>
          <p>During my time on the Product QA team and VTP team, I extensively utilized Python and JavaScript for writing and editing automation scripts. This experience involved:</p>
            <ul>
              <li><strong>Scripting for automation:</strong> I developed and maintained automation scripts using Python and JavaScript, streamlining repetitive tasks and ensuring consistent test execution across various environments.</li>
              <li><strong>Test script creation:</strong> I wrote and edited test scripts to automate testing processes, improving efficiency and accuracy in our QA workflows.</li>
              <li><strong>Interactive debugging:</strong> I performed hands-on debugging of scripts to identify and resolve issues, providing valuable feedback to the development team for quick resolution.</li>
              <li><strong>Integration with CI/CD pipelines:</strong> I integrated Python and JavaScript scripts into CI/CD pipelines, automating the build, test, and deployment processes to ensure reliable software delivery.</li>
              <li><strong>Data analysis and reporting:</strong> I utilized Python for data analysis and generating reports, providing insights into test results and system performance.</li>
              <li><strong>Collaborative development:</strong> I worked closely with team members to develop and optimize scripts, leveraging the strengths of both Python and JavaScript to enhance our automation capabilities.</li>
              <li><strong>Documentation:</strong> I documented the scripting processes and results, creating comprehensive guides that highlighted key findings and recommended improvements.</li>
            </ul>
            <p>This extensive experience with Python and JavaScript not only enhanced my technical skills in scripting and automation but also contributed significantly to the overall quality and reliability of our software products.</p>
            <div className="image-container">
                <img src="/python.JPG" alt="Test Script Creation" className="skill-img skill-img-small" />
            </div>
          </div>
        </div>
      </section>


     

      <section className="section video-section">
            <div className="overlay"></div>
                <video className="ansys-video" autoPlay loop muted>
                <source src="/AnsysVideoTwo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
                </video>
                <div className="content">
                <h1 id="titles">At Ansys</h1>
                <p>In addition to the technical skills I acquired, I honed my ability to communicate effectively with other engineers using Microsoft Teams, and I became proficient with various Ansys applications and websites such as SharePoint and Ansys HRIS. I also enhanced my skills in Microsoft Word, Excel, and PowerPoint.</p>
                <p>Furthermore, I gained experience with the Source Code Audit Tool and Ansys GitHub Enterprise, which provided valuable insights into the coding and programming culture at Ansys.</p>
            </div>
        </section>


    </div>
  );
};

export default AnsysPage;
