import React, { useState } from 'react';
import './hackathons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const HackathonsPage = () => {
  // States for RefuConnect
  const [showRefuGallery, setShowRefuGallery] = useState(false);
  const [showRefuSelectedImage, setShowRefuSelectedImage] = useState(false);
  const [selectedRefuImage, setSelectedRefuImage] = useState(null);
  const [showRefuVideo, setShowRefuVideo] = useState(false);

  // States for HoyaHacks
  const [showHoyaGallery, setShowHoyaGallery] = useState(false);
  const [showHoyaSelectedImage, setShowHoyaSelectedImage] = useState(false);
  const [selectedHoyaImage, setSelectedHoyaImage] = useState(null);
  const [showHoyaVideo, setShowHoyaVideo] = useState(false);

  // States for LearnAI
  const [showLearnAIGallery, setShowLearnAIGallery] = useState(false);
  const [showLearnAISelectedImage, setShowLearnAISelectedImage] = useState(false);
  const [selectedLearnAIImage, setSelectedLearnAIImage] = useState(null);
  const [showLearnAIVideo, setShowLearnAIVideo] = useState(false);

  const hoyaImages = [
    '/hoya1.JPG',
    '/hoya2.JPG',
    '/hoya3.JPG',
    '/hoya4.JPG',
  ];
  const refuImages = [
    '/refu1.jpg',
    '/refu2.jpg',
    '/refu3.jpg',
    '/refu4.jpg',
  ];

  const learnAIImages = [
    '/learnai1.jpg',
    '/learnai2.jpg',
    '/learnai3.jpg',
    '/learnai4.jpg',
  ];
  

  // Functions for RefuConnect
  const openRefuGallery = () => setShowRefuGallery(true);
  const closeRefuGallery = () => setShowRefuGallery(false);
  const selectRefuImage = (image) => {
    setSelectedRefuImage(image);
    setShowRefuSelectedImage(true);
  };
  const closeRefuSelectedImage = () => setShowRefuSelectedImage(false);
  const openRefuVideo = () => setShowRefuVideo(true);
  const closeRefuVideo = () => setShowRefuVideo(false);

  // Functions for HoyaHacks
  const openHoyaGallery = () => setShowHoyaGallery(true);
  const closeHoyaGallery = () => setShowHoyaGallery(false);
  const selectHoyaImage = (image) => {
    setSelectedHoyaImage(image);
    setShowHoyaSelectedImage(true);
  };
  const closeHoyaSelectedImage = () => setShowHoyaSelectedImage(false);
  const openHoyaVideo = () => setShowHoyaVideo(true);
  const closeHoyaVideo = () => setShowHoyaVideo(false);

  // Functions for LearnAI
  const openLearnAIGallery = () => setShowLearnAIGallery(true);
  const closeLearnAIGallery = () => setShowLearnAIGallery(false);
  const selectLearnAIImage = (image) => {
    setSelectedLearnAIImage(image);
    setShowLearnAISelectedImage(true);
  };
  const closeLearnAISelectedImage = () => setShowLearnAISelectedImage(false);
  const openLearnAIVideo = () => setShowLearnAIVideo(true);
  const closeLearnAIVideo = () => setShowLearnAIVideo(false);

  return (
    <div className="hackathons-page">

      {/* RefuConnect Section */}
      <section className="refuconnect-section">
        <div className="container">
          <header>
            <h1>RefuConnect - Hackathon Winning Project</h1>
            <img src="/refuconnect.png" alt="RefuConnect Logo" className="refuconnect-logo" />
          </header>
          <section className="project-details">
            <h2>Project Overview</h2>
            <p>
              RefuConnect is a multilingual communication platform developed during September 2024 for a hackathon. The platform facilitates real-time communication between refugees and aid workers across language barriers using the following technologies:
            </p>
            <ul>
              <li>ReactJS for the frontend</li>
              <li>ExpressJS for the backend</li>
              <li>MongoDB for database management</li>
              <li>WebSockets for real-time communication</li>
            </ul>
            <h3>Project Features</h3>
            <ul>
              <li>Real-time chat feature with WebSockets</li>
              <li>Automatic translation of messages using Google Translate API</li>
              <li>Language support for diverse users</li>
              <li>Responsive and user-friendly interface for ease of use</li>
            </ul>
            <div className="button-container">
              <button onClick={openRefuGallery} className="gallery-button">Open Gallery</button>
              <a href="https://github.com/ehab20011/LearnAI/tree/master" target="_blank" rel="noopener noreferrer" className="github-button">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <button onClick={openRefuVideo} className="video-button">Project Video</button>
              <a href="https://dorahacks.io/buidl/16951/" target="_blank" rel="noopener noreferrer" className="Devpost-button">
              <img src="/devpostlogo.jpg" alt="DevPost Logo" className="devpost-logo" />
              </a>
            </div>
          </section>
        </div>
      </section>

      {/* LearnAI Section */}
      <section className="learnai-section">
        <div className="container">
          <header>
            <h1>LearnAI</h1>
            <img src="/learnailogo.jpg" alt="LearnAI Logo" className="refuconnect-logo" />
          </header>
          <section className="project-details">
          <h2>Project Overview</h2>
          <p>        
          LearnAI is an educational platform designed to teach users about AI concepts in an interactive and engaging way. 
          The platform leverages various technologies to provide a smooth learning experience, 
          supports users of all levels, and is accessible in multiple languages to accommodate a global audience.  
          </p>
          <ul>
            <li>Next.js for the frontend and server-side rendering</li>
            <li>Firebase for real-time data synchronization and backend services</li>
            <li>Tailwind CSS</li>
          </ul>
          <h3>Project Features</h3>
          <ul>
            <li>Interactive lessons on AI fundamentals</li>
            <li>Hands-on coding exercises and quizzes on each AI model</li>
            <li>Real-time collaboration tools for peer learning</li>
            <li>Responsive and user-friendly interface designed for accessibility</li>
            <li>Translation option to have the platform in any language</li>
          </ul>
              <div className="button-container">
                <button onClick={openLearnAIGallery} className="gallery-button">Open Gallery</button>
                <a href="https://github.com/ehab20011/learnai" target="_blank" rel="noopener noreferrer" className="github-button">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <button onClick={openLearnAIVideo} className="video-button">Project Video</button>
                <a href="https://dorahacks.io/buidl/16951/" target="_blank" rel="noopener noreferrer" className="Devpost-button">
                  <img src="/devpostlogo.jpg" alt="DevPost Logo" className="devpost-logo" />
                </a>
            </div>
          </section>
        </div>
      </section>

      {/* HoyaHacks Section */}
      <section className="hoyahacks-section">
        <div className="container">
          <header>
            <h1>HoyaHacks Hackathon</h1>
            <img src="/hoya.png" alt="HoyaHacks Logo" className="hoyahacks-logo" />
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
              <button onClick={openHoyaGallery} className="gallery-button">Open Gallery</button>
              <a href="https://github.com/HOYA-Hacks-2024-DEJ/project" target="_blank" rel="noopener noreferrer" className="github-button">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <button onClick={openHoyaVideo} className="video-button">Project Video</button>
              <a href="https://devpost.com/software/qcbot" target="_blank" rel="noopener noreferrer" className="Devpost-button">
              <img src="/devpostlogo.jpg" alt="DevPost Logo" className="devpost-logo" />
              </a>
            </div>
          </section>
        </div>
      </section>

      {/* RefuConnect Gallery Modal */}
      {showRefuGallery && (
        <div className="modal" onClick={closeRefuGallery}>
          <div className="modal-content">
            <span className="close-button" onClick={closeRefuGallery}>&times;</span>
            <div className="gallery">
              {refuImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`RefuConnect project screenshot ${index + 1}`}
                  className="gallery-image"
                  onClick={() => selectRefuImage(image)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* RefuConnect Selected Image Modal */}
      {showRefuSelectedImage && (
        <div className="modal" onClick={closeRefuSelectedImage}>
          <div className="modal-content selected-modal-content">
            <span className="close-button" onClick={closeRefuSelectedImage}>&times;</span>
            <img src={selectedRefuImage} alt="Selected RefuConnect project screenshot" className="selected-image" />
          </div>
        </div>
      )}

      {/* RefuConnect Video Modal */}
      {showRefuVideo && (
        <div className="modal" onClick={closeRefuVideo}>
          <div className="modal-content video-modal-content">
            <span className="close-button" onClick={closeRefuVideo}>&times;</span>
            <video controls className="project-video">
              <source src="/refuconnectvideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* HoyaHacks Gallery Modal */}
      {showHoyaGallery && (
        <div className="modal" onClick={closeHoyaGallery}>
          <div className="modal-content">
            <span className="close-button" onClick={closeHoyaGallery}>&times;</span>
            <div className="gallery">
              {hoyaImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`HoyaHacks project screenshot ${index + 1}`}
                  className="gallery-image"
                  onClick={() => selectHoyaImage(image)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* HoyaHacks Selected Image Modal */}
      {showHoyaSelectedImage && (
        <div className="modal" onClick={closeHoyaSelectedImage}>
          <div className="modal-content selected-modal-content">
            <span className="close-button" onClick={closeHoyaSelectedImage}>&times;</span>
            <img src={selectedHoyaImage} alt="Selected HoyaHacks project screenshot" className="selected-image" />
          </div>
        </div>
      )}

      {/* HoyaHacks Video Modal */}
      {showHoyaVideo && (
        <div className="modal" onClick={closeHoyaVideo}>
          <div className="modal-content video-modal-content">
            <span className="close-button" onClick={closeHoyaVideo}>&times;</span>
            <video controls className="project-video">
              <source src="/hoyahacksvideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* LearnAI Gallery Modal */}
      {showLearnAIGallery && (
        <div className="modal" onClick={closeLearnAIGallery}>
          <div className="modal-content">
            <span className="close-button" onClick={closeLearnAIGallery}>&times;</span>
            <div className="gallery">
              {learnAIImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`LearnAI project screenshot ${index + 1}`}
                  className="gallery-image"
                  onClick={() => selectLearnAIImage(image)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* LearnAI Selected Image Modal */}
      {showLearnAISelectedImage && (
        <div className="modal" onClick={closeLearnAISelectedImage}>
          <div className="modal-content selected-modal-content">
            <span className="close-button" onClick={closeLearnAISelectedImage}>&times;</span>
            <img src={selectedLearnAIImage} alt="Selected LearnAI project screenshot" className="selected-image" />
          </div>
        </div>
      )}

      {/* LearnAI Video Modal */}
      {showLearnAIVideo && (
        <div className="modal" onClick={closeLearnAIVideo}>
          <div className="modal-content video-modal-content">
            <span className="close-button" onClick={closeLearnAIVideo}>&times;</span>
            <video controls className="project-video">
              <source src="/learnai.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}


    </div>
  );
};

export default HackathonsPage;
