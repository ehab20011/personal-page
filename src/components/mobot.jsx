import React from 'react';
import './mobot.css';

const MobotPage = () => {
  return (
    <div className="mobot-page">

      {/* Section 1: Video Background */}
      <section className="section video-section">
        <div className="overlay"></div>
        <video className="mobot-video" autoPlay loop muted>
          <source src="/mobot-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          <h1 className="mobot-title">Mobot Experience</h1>
          <p>
          At Mobot, I worked on Quality Assurance testing for clients like LinkedIn, Chime, and Citizen. I was hands-on with manual testing, 
          built automation to streamline workflows, and
          saw firsthand how hardware and software come together to create reliable, high-performing systems.
          </p>
        </div>
      </section>

    </div>
  );
};

export default MobotPage;
