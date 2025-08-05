import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "Java", level: 90 },
        { name: "C++", level: 85 },
        { name: "TypeScript", level: 88 },
        { name: "JavaScript", level: 92 }
      ]
    },
    {
      category: "Frontend Development",
      items: [
        { name: "React.js", level: 90 },
        { name: "Angular", level: 85 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 92 }
      ]
    },
    {
      category: "Backend Development",
      items: [
        { name: "Spring Boot", level: 88 },
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 87 },
        { name: "RESTful APIs", level: 89 }
      ]
    },
    {
      category: "Database & Systems",
      items: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 82 },
        { name: "Linux", level: 80 },
        { name: "Windows", level: 90 }
      ]
    }
  ];

  return (
    <div className="skills">
      <div className="skills-container">
        <div className="section-header">
          <h1 className="section-title">My Skills</h1>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>
        
        <div className="skills-grid">
          {skills.map((skillCategory, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{skillCategory.category}</h3>
              <div className="skills-list">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="additional-skills">
          <h3>Additional Expertise</h3>
          <div className="tags">
            <span className="tag">Git</span>
            <span className="tag">GitHub</span>
            <span className="tag">Postman</span>
            <span className="tag">RHEL</span>
            <span className="tag">NoSQL</span>
            <span className="tag">Version Control</span>
            <span className="tag">API Testing</span>
            <span className="tag">Agile/Scrum</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills; 