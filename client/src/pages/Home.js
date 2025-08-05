import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                HI, I'M SHASHVAT!<br />
                {/* CREATIVE<span className="highlight">PLAYER</span> */}
              </h1>
              <p className="hero-description">
              A passionate and results-driven Junior Software Engineer with a strong background in developing full-stack applications. I specialize in building robust and scalable solutions, with proven skills in optimizing React codebases, developing efficient REST APIs, and implementing secure third-party integrations. My experience in an Agile environment has honed my ability to deliver high-quality, user-centric features on time.
              </p>
              <div className="hero-buttons">
                <a 
                  href="https://drive.google.com/file/d/1lL1FQ1dWexHbwurpmcTiPXmbbKTVZbT0/view" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Download Resume
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16L12 8M12 16L16 12M12 16L8 12M21 21H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                {/* <button className="btn-secondary">
                  <div className="play-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                    </svg>
                  </div>
                  Watch The Video
                </button> */}
              </div>
            </div>
            <div className="hero-image">
              <div className="image-container">
                <div className="image-border">
                                     <img 
                     src="/profile-image.jpg" 
                     alt="Profile" 
                     className="profile-image"
                   />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 