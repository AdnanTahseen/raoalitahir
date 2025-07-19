import React from 'react';
import './projects.css';

const projects = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'A full-featured online store built with React and Node.js',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: 'images/projects/project1.jpg'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity app for managing daily tasks and projects',
    technologies: ['React', 'Firebase', 'Material UI'],
    image: 'images/projects/project2.jpg'
  },
  {
    id: 3,
    title: 'Weather Application',
    description: 'Real-time weather information with 5-day forecast',
    technologies: ['React', 'OpenWeather API', 'CSS Modules'],
    image: 'images/projects/project3_weather.jpg'
  },
   {
    id: 4,
    title: 'Quiz App',
    description: 'Best for taking and giving application for students',
    technologies: ['React', 'OpenWeather API', 'CSS Modules'],
    image: 'images/projects/project4_quiz.jpg'
  },
   {
    id: 5,
    title: 'Blog',
    description: 'Best for becoming knowledgeful resources',
    technologies: ['React', 'OpenWeather API', 'CSS Modules'],
    image: 'images/projects/project5_blog.jpg'
  },
   {
    id: 6,
    title: 'Chat Application',
    description: 'Talking to friends is a fun and enjoyable moments',
    technologies: ['React', 'OpenWeather API', 'CSS Modules'],
    image: 'images/projects/project6_chat.jpg'
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">A Glimpse of Projects offered by my Company</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href="#" className="btn">View Project</a>
                  <a href="#" className="btn btn-outline">Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;