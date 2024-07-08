import React, { useState } from 'react';
import './hackathons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const HackathonsPage = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [showSelectedImage, setShowSelectedImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  const images = [
    '/hoya1.JPG',
    '/hoya2.JPG',
    '/hoya3.JPG',
    '/hoya4.JPG',
  ];

  const openGallery = () => setShowGallery(true);
  const closeGallery = () => setShowGallery(false);

  const selectImage = (image) => {
    setSelectedImage(image);
    setShowSelectedImage(true);
  };

  const closeSelectedImage = () => setShowSelectedImage(false);

  const openVideo = () => setShowVideo(true);
  const closeVideo = () => setShowVideo(false);

  return (
    <div className="hackathons-page">
      <section className="hoyahacks-section">
        <div className="container">
          <header>
            <h1>HoyaHacks Hackathon</h1>
            <img src="/hoya.png" alt="HoyaHacks Logo" className="hackathon-logo" />
          </header>
          <section className="hackathon-details">
            <h2>My Project</h2>
            <p>
              During HoyaHacks, I developed an AI chatbot for my college using Azure AI services. The chatbot was designed to assist students with queries related to Financial Aid / Bursar / Graduation and pretty much anything specifically related to Queens College. It utilized the following technologies:
            </p>
            <ul>
              <li>Flask for the backend</li>
              <li>Azure AI for the chatbot functionality</li>
              <li>LangChain for managing the AI model and prompts</li>
              <li>HTML, CSS, and JavaScript for the frontend</li>
            </ul>
            <h3>Project Features</h3>
            <ul>
              <li>Interactive chat interface with a responsive design</li>
              <li>Integration with Azure OpenAI and Azure Cognitive Search</li>
              <li>Context-aware responses to user queries</li>
              <li>Memory management to retain chat history</li>
            </ul>
            <div className="button-container">
              <button onClick={openGallery} className="gallery-button">Open Gallery</button>
              <a href="https://github.com/HOYA-Hacks-2024-DEJ/project" target="_blank" rel="noopener noreferrer" className="github-button">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <button onClick={openVideo} className="video-button">Project Video</button>
            </div>
          </section>
          <section className="hackathon-experience">
            <h2>Experience at HoyaHacks</h2>
            <p>
              Participating in HoyaHacks was an incredible experience. It allowed me to collaborate with like-minded individuals and push my boundaries in terms of technical skills and project management. The hackathon provided a platform to innovate and create a solution that could potentially benefit many students at my college.
            </p>
            <p>
              The project was challenging yet rewarding. It involved extensive use of Azure's AI capabilities, which enhanced my understanding of cloud-based AI solutions. Overall, HoyaHacks was a fantastic opportunity to learn, grow, and showcase my skills.
            </p>
          </section>
        </div>

        {showGallery && (
          <div className="modal" onClick={closeGallery}>
            <div className="modal-content">
              <span className="close-button" onClick={closeGallery}>&times;</span>
              <div className="gallery">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Hackathon project screenshot ${index + 1}`}
                    className="gallery-image"
                    onClick={() => selectImage(image)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {showSelectedImage && (
          <div className="modal" onClick={closeSelectedImage}>
            <div className="modal-content selected-modal-content">
              <span className="close-button" onClick={closeSelectedImage}>&times;</span>
              <img src={selectedImage} alt="Selected hackathon project screenshot" className="selected-image" />
            </div>
          </div>
        )}

        {showVideo && (
          <div className="modal" onClick={closeVideo}>
            <div className="modal-content video-modal-content">
              <span className="close-button" onClick={closeVideo}>&times;</span>
              <video controls className="project-video">
                <source src="/hoyahacksvideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </section>

      <section className="upcoming-hackathon">
        
        <div className="coming-soon-container">
          <div><img src="/hackMITLogo.png" alt="HoyaHacks Logo" className="MIThackathon-logo" /></div> 
          <h2>HackMIT - Coming Soon </h2>
        </div>
      </section>
    </div>
  );
};

export default HackathonsPage;
