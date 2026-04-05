import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Organic Connect Website',
      description: 'Developed a web platform connecting farmers directly with customers to promote organic products without intermediaries. Designed a user-friendly interface to enable easy product browsing and purchasing.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX'],
      link: 'https://github.com/soniyaselinchithirai',
      github: 'https://github.com/soniyaselinchithirai',
      image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=800&q=80' // Fresh organic vegetables image
    },
    {
      title: 'Vision Crop AI',
      description: 'Developed an AI-based system to detect crop diseases using image processing techniques. Built and trained a machine learning model for accurate disease prediction.',
      tags: ['Python', 'Machine Learning', 'Jupyter'],
      link: 'https://github.com/soniyaselinchithirai',
      github: 'https://github.com/soniyaselinchithirai',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Library Management System',
      description: 'Built a system to manage book inventory, user records, and issue/return operations. Automated tracking of book availability and user transactions for efficient library management.',
      tags: ['Python', 'SQL', 'Database'],
      link: 'https://github.com/soniyaselinchithirai',
      github: 'https://github.com/soniyaselinchithirai',
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-img-wrapper">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-overlay">
                  <div className="overlay-buttons">
                    <a href={project.github} className="btn-view" target="_blank" rel="noreferrer">GitHub</a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Graphic Design Section */}
        <h2 className="section-title mt-huge">Logos & Posters</h2>
        <div className="gallery-grid">
          <div className="gallery-item"><img src="./spice-route.jpg" alt="Spice Route Logo" className="gallery-img" /></div>
          <div className="gallery-item"><img src="./tkwwu.jpg" alt="TKWWU Logo" className="gallery-img" /></div>
          <div className="gallery-item"><img src="./the-coffee-stop.png" alt="The Coffee Stop Poster" className="gallery-img" /></div>
          <div className="gallery-item"><img src="./cupcake-poster.png" alt="Cupcake Promotion Poster" className="gallery-img" /></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;