import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="section-header">
          <h1 className="section-title">About Me</h1>
          <p className="section-subtitle">Get to know me better</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h2>Software Engineer</h2>
            <p>
            "I'm a Junior Software Engineer with a passion for building robust and scalable applications. My experience at Cognizant and Thales has provided me with a strong foundation in full-stack development, from optimizing legacy React codebases and developing REST APIs to integrating third-party software securely. With a proven track record in collaborative, Agile environments and a focus on creating efficient, user-centric solutions, I'm always eager to take on new challenges and contribute to impactful projects."
            </p>
            
            <div className="stats">
              <div className="stat">
                <h3>2+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-wrapper">
              <img 
                src="/profile-image.jpg" 
                alt="Shashvat Tiwari" 
                className="about-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 