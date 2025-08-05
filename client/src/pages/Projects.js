import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Livinn - Coliving Platform",
      description: "Enhanced version of my Livinn platform rebuilt with React. Features modern component architecture, improved user experience, and dynamic functionality. Shows progression from vanilla HTML/CSS to modern JavaScript frameworks.",
      image: "/livinn-screenshot.jpg",
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      category: "Web Development",
      link: "https://livinn-react-eosm.vercel.app/"
    },
    {
      id: 2,
      title: "Netflix UI Clone",
      description: "A pixel-perfect clone of Netflix's user interface featuring modern design, responsive layout, and interactive components. Demonstrates advanced frontend development skills and attention to detail.",
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&h=400&fit=crop",
      technologies: ["React", "CSS3", "JavaScript", "UI/UX"],
      category: "Web Development", 
      link: "https://netflix-ui-rho.vercel.app/"
    },
    {
      id: 3,
      title: "Hostel Searches",
      description: "My first major college project - a comprehensive coliving platform built with pure HTML and CSS. Features multiple locations across Bangalore, room categories, amenities showcase, testimonials, and food services. Demonstrates strong foundation in web development fundamentals.",
      image: "/livin-1.png",
      technologies: ["HTML5", "CSS3", "Responsive Design", "Web Fundamentals"],
      category: "Web Development",
      link: "https://livinn-five.vercel.app/"
    }
  ];

  return (
    <div className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h1 className="section-title">My Projects</h1>
          <p className="section-subtitle">A showcase of my recent work</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.link} className="project-link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11M15 3H21V9M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="project-content">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 