import React from 'react';
import './Projects.css'; 

import projectImage1 from '../../assets/markus-spiske-BfphcCvhl6E-unsplash.jpg';
import projectImage2 from '../../assets/logo.png';
import projectImage3 from '../../assets/maxresdefault.jpg';

const Projects: React.FC = () => {
  const projects = [
    {
      image: projectImage1,
      title: 'Serverless NBA Web Scraper and API',
      description: 'NBA stats are scraped daily using triggered Lambda funcitons and used to populate a DynamoDB database. API Gateway is then used to expose endpoints to the public to allow the data to be used. This project is created completley using AWS and takes advantage of the scalability and cost effeciency of a totally serverless solution.',
      link: 'https://github.com/FrankCarusi/AWSNBAWebScraper'
    },
    {
      image: projectImage2,
      title: 'PARKIT',
      description: 'A brief description of Project 2.',
      link: 'https://github.com/carvaale/PARKIT-enterprise-final',
    },
    {
      image: projectImage3,
      title: 'NBA Grid Guesser Game',
      description: 'A brief description of Project 3.',
      link: 'https://github.com/FrankCarusi/NBAGridGame',
    },
  ];

  return (
    <div>
        <h1>Projects</h1>
        <div className="projects-container">
        {projects.map((project, index) => (
            <div className="project-card" key={index}>
            <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div>
            <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
            </div>
            <a href={project.link} className="project-button">View on GitHub</a>
            </div>
        ))}
        </div>
    </div>
  );
};

export default Projects;
